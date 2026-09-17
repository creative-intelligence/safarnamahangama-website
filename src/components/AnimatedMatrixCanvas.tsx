import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  baseAlpha: number;
}

export const AnimatedMatrixCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const particles: Particle[] = [];
    const spacing = 38; // Matrix grid density

    const initParticles = () => {
      particles.length = 0;
      const cols = Math.floor(width / spacing) + 2;
      const rows = Math.floor(height / spacing) + 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          particles.push({
            x,
            y,
            baseX: x,
            baseY: y,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 1.5 + 1.2,
            baseRadius: Math.random() * 1.5 + 1.2,
            alpha: Math.random() * 0.3 + 0.15,
            baseAlpha: Math.random() * 0.3 + 0.15,
          });
        }
      }
    };

    initParticles();

    // Real-time Mouse position tracking
    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovering: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      const connectionDistance = 70;
      const mouseDistance = 160;

      // Draw Cursor Glow Aura
      if (mouse.isHovering) {
        const auraGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouseDistance
        );
        auraGradient.addColorStop(0, 'rgba(16, 185, 129, 0.15)');
        auraGradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.08)');
        auraGradient.addColorStop(1, 'rgba(3, 12, 7, 0)');

        ctx.fillStyle = auraGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouseDistance, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Continuous real-time movement drift
        p.x += p.vx;
        p.y += p.vy;

        // Bounce at boundaries
        if (p.x < p.baseX - 15 || p.x > p.baseX + 15) p.vx *= -1;
        if (p.y < p.baseY - 15 || p.y > p.baseY + 15) p.vy *= -1;

        // Real-time Mouse Interaction (Distance & Push/Glow Physics)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseDistance && mouse.isHovering) {
          const force = (1 - dist / mouseDistance);
          // Push particles slightly away from cursor for interactive reaction
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force * 3;
          p.y -= Math.sin(angle) * force * 3;

          // Increase size and glow opacity
          p.alpha = Math.min(0.9, p.baseAlpha + force * 0.7);
          p.radius = p.baseRadius + force * 2.5;

          // Connect cursor directly to nearby matrix dots
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.4 * force})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        } else {
          // Return to base state gradually
          p.alpha += (p.baseAlpha - p.alpha) * 0.08;
          p.radius += (p.baseRadius - p.radius) * 0.08;
          p.x += (p.baseX - p.x) * 0.05;
          p.y += (p.baseY - p.y) * 0.05;
        }

        // Render Particle Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = dist < mouseDistance && mouse.isHovering
          ? `rgba(6, 182, 212, ${p.alpha})` // Cyber Cyan highlight near cursor
          : `rgba(16, 185, 129, ${p.alpha})`; // Cyber Emerald base
        ctx.fill();

        // Connect nearby grid particles to each other
        for (let j = i + 1; j < Math.min(i + 12, particles.length); j++) {
          const p2 = particles[j];
          const ldx = p2.x - p.x;
          const ldy = p2.y - p.y;
          const ldist = Math.sqrt(ldx * ldx + ldy * ldy);

          if (ldist < connectionDistance) {
            const lineAlpha = (1 - ldist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};

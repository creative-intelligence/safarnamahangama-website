import React, { useEffect, useRef } from 'react';

interface Node3D {
  x: number;
  y: number;
  z: number; // Depth factor
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  baseRadius: number;
  color: string;
  pulseSpeed: number;
  pulsePhase: number;
}

export const CyberEnergyCanvas: React.FC = () => {
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
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    const nodes: Node3D[] = [];
    const colors = ['#10B981', '#06B6D4', '#34D399', '#14B8A6'];

    const initNodes = () => {
      nodes.length = 0;
      const count = Math.min(Math.floor((width * height) / 12000), 75);

      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 2.5 + 1.5;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 2 + 0.5,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          vz: (Math.random() - 0.5) * 0.01,
          radius,
          baseRadius: radius,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulseSpeed: Math.random() * 0.04 + 0.02,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    initNodes();

    // Cursor tracking with fluid trails
    const mouse = {
      x: width / 2,
      y: height / 2,
      prevX: width / 2,
      prevY: height / 2,
      speedX: 0,
      speedY: 0,
      isHovering: false,
    };

    const trail: Array<{ x: number; y: number; alpha: number; radius: number }> = [];

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      mouse.speedX = currentX - mouse.x;
      mouse.speedY = currentY - mouse.y;

      mouse.x = currentX;
      mouse.y = currentY;
      mouse.isHovering = true;

      // Add energy trail particle
      if (Math.hypot(mouse.speedX, mouse.speedY) > 2) {
        trail.push({
          x: mouse.x,
          y: mouse.y,
          alpha: 0.8,
          radius: Math.random() * 12 + 6,
        });
      }
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Mouse Energy Fluid Trail & Ripple Aura
      if (mouse.isHovering) {
        // Glowing Mouse Core Ring
        ctx.save();
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 140, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 140);
        grad.addColorStop(0, 'rgba(16, 185, 129, 0.25)');
        grad.addColorStop(0.5, 'rgba(6, 182, 212, 0.12)');
        grad.addColorStop(1, 'rgba(3, 12, 7, 0)');
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      }

      // Render & Update Fluid Trail Particles
      for (let t = trail.length - 1; t >= 0; t--) {
        const pt = trail[t];
        pt.alpha -= 0.025;
        pt.radius += 0.4;

        if (pt.alpha <= 0) {
          trail.splice(t, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${pt.alpha * 0.35})`;
        ctx.fill();
      }

      // 2. Render 3D Energy Constellation Mesh Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Real-time position drift scaled by Z depth
        n.x += n.vx * n.z;
        n.y += n.vy * n.z;
        n.pulsePhase += n.pulseSpeed;

        // Bounce boundaries
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Dynamic pulse sizing
        const pulse = Math.sin(n.pulsePhase) * 0.5 + 1;
        const currentRadius = n.radius * pulse;

        // Mouse Cursor Interaction Physics (Gravity Pull & Laser Connections)
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 180 && mouse.isHovering) {
          const force = (1 - dist / 180);
          // Pull nodes gently toward mouse cursor
          n.x += (dx / dist) * force * 1.5;
          n.y += (dy / dist) * force * 1.5;

          // Laser connection filament from mouse to node
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.45 * force})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }

        // Draw Node Core with Glow Aura
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius * (dist < 180 ? 1.8 : 1), 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = dist < 180 ? 15 : 6;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset blur for performance

        // Connect nearby nodes with 3D Filament Lines
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const ldx = n2.x - n.x;
          const ldy = n2.y - n.y;
          const ldist = Math.hypot(ldx, ldy);

          if (ldist < 110) {
            const lineAlpha = (1 - ldist / 110) * 0.22;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
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
      className="absolute inset-0 pointer-events-none z-0 opacity-85"
    />
  );
};

import React, { useEffect, useRef } from 'react';

export const HolographicCyberGridCanvas: React.FC = () => {
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
    };

    window.addEventListener('resize', handleResize);

    const mouse = {
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

    // 3D Floating Holographic Cubes
    const cubes = Array.from({ length: 18 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 24 + 12,
      rotX: Math.random() * Math.PI,
      rotY: Math.random() * Math.PI,
      vRotX: (Math.random() - 0.5) * 0.02,
      vRotY: (Math.random() - 0.5) * 0.02,
      vy: -Math.random() * 0.5 - 0.2,
    }));

    let gridOffset = 0;

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      gridOffset = (gridOffset + 0.8) % 40;

      // 1. Draw 3D Perspective Cyber Floor Grid
      const horizonY = height * 0.55;
      ctx.save();
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.15)';
      ctx.lineWidth = 1;

      // Perspective Vertical Lines
      const numLines = 30;
      for (let i = -numLines; i <= numLines; i++) {
        const xStart = width / 2 + i * 40;
        ctx.beginPath();
        ctx.moveTo(width / 2 + i * 4, horizonY);
        ctx.lineTo(xStart, height);
        ctx.stroke();
      }

      // Horizontal Moving Grid Lines
      for (let y = horizonY; y < height; y += 18 + (y - horizonY) * 0.1) {
        ctx.beginPath();
        ctx.moveTo(0, y + gridOffset * 0.4);
        ctx.lineTo(width, y + gridOffset * 0.4);
        ctx.stroke();
      }
      ctx.restore();

      // 2. Interactive Cursor Gravity Electromagnetic Field
      if (mouse.isHovering) {
        ctx.save();
        const auraGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
        auraGrad.addColorStop(0, 'rgba(16, 185, 129, 0.25)');
        auraGrad.addColorStop(0.5, 'rgba(6, 182, 212, 0.12)');
        auraGrad.addColorStop(1, 'rgba(3, 12, 7, 0)');

        ctx.fillStyle = auraGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 220, 0, Math.PI * 2);
        ctx.fill();

        // Holographic Target Rings
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
        ctx.setLineDash([6, 6]);
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 45, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // 3. Render 3D Rotating Floating Holographic Cubes
      for (let i = 0; i < cubes.length; i++) {
        const c = cubes[i];
        c.y += c.vy;
        c.rotX += c.vRotX;
        c.rotY += c.vRotY;

        if (c.y < -50) {
          c.y = height + 50;
          c.x = Math.random() * width;
        }

        // Mouse attraction
        const dx = mouse.x - c.x;
        const dy = mouse.y - c.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 180 && mouse.isHovering) {
          c.x += (dx / dist) * 0.8;
          c.y += (dy / dist) * 0.8;

          // Connect ray
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(c.x, c.y);
          ctx.strokeStyle = `rgba(16, 185, 129, ${0.35 * (1 - dist / 180)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw Wireframe Cube
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.strokeStyle = dist < 180 && mouse.isHovering ? '#06B6D4' : 'rgba(16, 185, 129, 0.4)';
        ctx.lineWidth = 1.2;

        const half = c.size / 2;
        ctx.strokeRect(-half, -half, c.size, c.size);
        ctx.strokeRect(-half * 0.6, -half * 0.6, c.size * 0.6, c.size * 0.6);
        ctx.restore();
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

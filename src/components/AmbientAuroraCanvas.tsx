import React, { useEffect, useRef } from 'react';

export const AmbientAuroraCanvas: React.FC = () => {
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

    // Mouse spotlight tracking
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

    let time = 0;

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      time += 0.008;

      // Smooth cursor interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // 1. Organic Ambient Liquid Aurora Waves (Linear / Vercel style)
      const wave1X = width * 0.3 + Math.sin(time) * 120;
      const wave1Y = height * 0.35 + Math.cos(time * 0.8) * 90;
      const grad1 = ctx.createRadialGradient(wave1X, wave1Y, 0, wave1X, wave1Y, 450);
      grad1.addColorStop(0, 'rgba(16, 185, 129, 0.22)');
      grad1.addColorStop(0.5, 'rgba(20, 184, 166, 0.1)');
      grad1.addColorStop(1, 'rgba(3, 12, 7, 0)');

      ctx.fillStyle = grad1;
      ctx.beginPath();
      ctx.arc(wave1X, wave1Y, 450, 0, Math.PI * 2);
      ctx.fill();

      const wave2X = width * 0.7 + Math.cos(time * 0.7) * 140;
      const wave2Y = height * 0.4 + Math.sin(time * 0.9) * 100;
      const grad2 = ctx.createRadialGradient(wave2X, wave2Y, 0, wave2X, wave2Y, 500);
      grad2.addColorStop(0, 'rgba(6, 182, 212, 0.2)');
      grad2.addColorStop(0.5, 'rgba(59, 130, 246, 0.08)');
      grad2.addColorStop(1, 'rgba(3, 12, 7, 0)');

      ctx.fillStyle = grad2;
      ctx.beginPath();
      ctx.arc(wave2X, wave2Y, 500, 0, Math.PI * 2);
      ctx.fill();

      // 2. Interactive Ambient Cursor Spotlight Lens
      if (mouse.isHovering) {
        const spotGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 350);
        spotGrad.addColorStop(0, 'rgba(16, 185, 129, 0.18)');
        spotGrad.addColorStop(0.4, 'rgba(6, 182, 212, 0.08)');
        spotGrad.addColorStop(1, 'rgba(3, 12, 7, 0)');

        ctx.fillStyle = spotGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 350, 0, Math.PI * 2);
        ctx.fill();
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
      className="absolute inset-0 pointer-events-none z-0 opacity-90"
    />
  );
};

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  pulsePhase: number;
  pulseSpeed: number;
}

interface DataPacket {
  fromNodeIndex: number;
  toNodeIndex: number;
  progress: number;
  speed: number;
}

export const LuxuryExecutiveCanvas: React.FC = () => {
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

    // Mouse state with smooth velocity tracking
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 220, // Influence radius (no circle drawn, purely invisible force field)
      vx: 0,
      vy: 0,
      lastX: -1000,
      lastY: -1000,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Generate Floating Neural Matrix Nodes
    const particleCount = Math.min(Math.floor((width * height) / 12000), 85);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        originX: x,
        originY: y,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2.2 + 1.2,
        baseAlpha: Math.random() * 0.4 + 0.3,
        alpha: Math.random() * 0.4 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      });
    }

    // Active Data Packets travelling between matrix nodes
    const dataPackets: DataPacket[] = [];
    const spawnPacket = () => {
      if (particles.length < 2) return;
      const fromIdx = Math.floor(Math.random() * particles.length);
      // find a close node
      let closeNodes: number[] = [];
      for (let j = 0; j < particles.length; j++) {
        if (j === fromIdx) continue;
        const dx = particles[fromIdx].x - particles[j].x;
        const dy = particles[fromIdx].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          closeNodes.push(j);
        }
      }
      if (closeNodes.length > 0) {
        const toIdx = closeNodes[Math.floor(Math.random() * closeNodes.length)];
        dataPackets.push({
          fromNodeIndex: fromIdx,
          toNodeIndex: toIdx,
          progress: 0,
          speed: 0.015 + Math.random() * 0.02,
        });
      }
    };

    let packetTimer = 0;
    let time = 0;

    // Main Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      // Mouse position smoothing & velocity vector
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;
      mouse.vx = mouse.x - mouse.lastX;
      mouse.vy = mouse.y - mouse.lastY;
      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;

      // 1. Ambient Dynamic Glowing Liquid Gradient Orbs (Background Depth Layer)
      const orb1X = width * 0.3 + Math.sin(time * 0.7) * 120 + (mouse.x > 0 ? (mouse.x - width / 2) * 0.06 : 0);
      const orb1Y = height * 0.35 + Math.cos(time * 0.5) * 90 + (mouse.y > 0 ? (mouse.y - height / 2) * 0.06 : 0);
      const grad1 = ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, 500);
      grad1.addColorStop(0, 'rgba(16, 185, 129, 0.18)');
      grad1.addColorStop(0.5, 'rgba(20, 184, 166, 0.06)');
      grad1.addColorStop(1, 'rgba(3, 12, 7, 0)');
      ctx.fillStyle = grad1;
      ctx.beginPath();
      ctx.arc(orb1X, orb1Y, 500, 0, Math.PI * 2);
      ctx.fill();

      const orb2X = width * 0.75 + Math.cos(time * 0.6) * 130 + (mouse.x > 0 ? (mouse.x - width / 2) * 0.04 : 0);
      const orb2Y = height * 0.5 + Math.sin(time * 0.8) * 110 + (mouse.y > 0 ? (mouse.y - height / 2) * 0.04 : 0);
      const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, 550);
      grad2.addColorStop(0, 'rgba(6, 182, 212, 0.15)');
      grad2.addColorStop(0.5, 'rgba(16, 185, 129, 0.04)');
      grad2.addColorStop(1, 'rgba(3, 12, 7, 0)');
      ctx.fillStyle = grad2;
      ctx.beginPath();
      ctx.arc(orb2X, orb2Y, 550, 0, Math.PI * 2);
      ctx.fill();

      // 2. Animated Floating Cyber Grid Wave Lines (Horizon Perspective)
      ctx.lineWidth = 1;
      const gridRows = 6;
      for (let r = 0; r < gridRows; r++) {
        const yBase = height * 0.7 + r * 50;
        ctx.beginPath();
        for (let x = 0; x <= width; x += 30) {
          const wave = Math.sin(x * 0.008 + time * 1.5 + r) * 12 + Math.cos(x * 0.004 - time) * 8;
          const y = yBase + wave;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const alpha = (1 - r / gridRows) * 0.09;
        ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
        ctx.stroke();
      }

      // 3. Update & Render Neural Matrix Nodes & Dynamic Lines
      // Update Particles
      particles.forEach((p) => {
        p.pulsePhase += p.pulseSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.15;

        // Autonomous drift motion
        p.x += p.vx;
        p.y += p.vy;

        // Bounce from boundaries smoothly
        if (p.x < 20 || p.x > width - 20) p.vx *= -1;
        if (p.y < 20 || p.y > height - 20) p.vy *= -1;

        // Mouse Gravitational Magnetic Wave Interaction (Repulsion & Fluid Velocity Drag - NO visible circle drawn)
        if (mouse.x > 0 && mouse.y > 0) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 3.5;
            const angle = Math.atan2(dy, dx);

            // Push particles away smoothly along invisible force vector
            p.x += Math.cos(angle) * force + mouse.vx * 0.05 * force;
            p.y += Math.sin(angle) * force + mouse.vy * 0.05 * force;
            p.alpha = Math.min(p.alpha + force * 0.25, 0.95);
          }
        }
      });

      // Draw Connections (Geometric Matrix Lines)
      const maxDist = 160;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.35 * Math.min(p1.alpha, p2.alpha);
            
            // Highlight connections near cursor
            let isNearMouse = false;
            if (mouse.x > 0 && mouse.y > 0) {
              const mDist1 = Math.sqrt((p1.x - mouse.x) ** 2 + (p1.y - mouse.y) ** 2);
              const mDist2 = Math.sqrt((p2.x - mouse.x) ** 2 + (p2.y - mouse.y) ** 2);
              if (mDist1 < mouse.radius || mDist2 < mouse.radius) {
                isNearMouse = true;
              }
            }

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            if (isNearMouse) {
              ctx.strokeStyle = `rgba(6, 182, 212, ${lineAlpha * 1.8})`;
              ctx.lineWidth = 1.4;
            } else {
              ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
              ctx.lineWidth = 0.9;
            }
            ctx.stroke();
          }
        }
      }

      // 4. Update & Draw Glowing Energy Packets flowing along matrix lines
      packetTimer++;
      if (packetTimer % 18 === 0) {
        spawnPacket();
      }

      for (let k = dataPackets.length - 1; k >= 0; k--) {
        const pkt = dataPackets[k];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          dataPackets.splice(k, 1);
          continue;
        }

        const pStart = particles[pkt.fromNodeIndex];
        const pEnd = particles[pkt.toNodeIndex];
        if (!pStart || !pEnd) continue;

        const currX = pStart.x + (pEnd.x - pStart.x) * pkt.progress;
        const currY = pStart.y + (pEnd.y - pStart.y) * pkt.progress;

        // Draw Packet Glow Dot
        ctx.beginPath();
        ctx.arc(currX, currY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#38BDF8';
        ctx.shadowColor = '#06B6D4';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // 5. Draw Neural Matrix Nodes (Glowing Cyan/Emerald Orbs)
      particles.forEach((p) => {
        // Outer Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${p.alpha * 0.25})`;
        ctx.fill();

        // Core Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 211, 153, ${p.alpha})`;
        ctx.fill();
      });

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
      className="absolute inset-0 pointer-events-none z-0 opacity-95"
    />
  );
};

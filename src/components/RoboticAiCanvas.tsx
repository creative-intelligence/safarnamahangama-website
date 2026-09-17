import React, { useEffect, useRef } from 'react';

interface AiNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label: string;
  pulse: number;
}

interface DataPacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  text: string;
}

export const RoboticAiCanvas: React.FC = () => {
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
      initAiNetwork();
    };

    window.addEventListener('resize', handleResize);

    const nodes: AiNode[] = [];
    const dataPackets: DataPacket[] = [];
    const aiLabels = ['NEURAL_CORE', 'AUTO_SCRIPT', '4K_RENDER', 'CTR_AI', 'GPT_ENGINE', 'RETENTION_AI', 'SEO_TAGS', 'VOICE_SYNTH', 'PIPELINE_X'];
    const hexTokens = ['0101', '1010', 'AI_RUN', 'HOOK', 'FLOW', 'SYNC', 'NODE_9'];

    const initAiNetwork = () => {
      nodes.length = 0;
      dataPackets.length = 0;
      const count = Math.min(Math.floor((width * height) / 18000), 45);

      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 2,
          label: aiLabels[i % aiLabels.length],
          pulse: Math.random() * Math.PI * 2,
        });
      }

      // Create AI Data Stream Packets between nodes
      for (let k = 0; k < 12; k++) {
        const from = Math.floor(Math.random() * nodes.length);
        let to = Math.floor(Math.random() * nodes.length);
        if (to === from) to = (from + 1) % nodes.length;

        dataPackets.push({
          fromNode: from,
          toNode: to,
          progress: Math.random(),
          speed: Math.random() * 0.008 + 0.004,
          text: hexTokens[k % hexTokens.length],
        });
      }
    };

    initAiNetwork();

    // Robotic HUD Reticle Mouse Tracking
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovering: false,
      reticleAngle: 0,
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

    // Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse HUD target movement
      mouse.x += (mouse.targetX - mouse.x) * 0.2;
      mouse.y += (mouse.targetY - mouse.y) * 0.2;
      mouse.reticleAngle += 0.02;

      // 1. Robotic Cyber HUD Target Reticle around Mouse Cursor
      if (mouse.isHovering) {
        ctx.save();
        ctx.translate(mouse.x, mouse.y);

        // Outer Rotating Reticle Ring
        ctx.beginPath();
        ctx.arc(0, 0, 36, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.35)';
        ctx.lineWidth = 1;
        ctx.setLineDash([8, 8]);
        ctx.rotate(mouse.reticleAngle);
        ctx.stroke();

        // Inner Robotic Target Lock Ring
        ctx.beginPath();
        ctx.arc(0, 0, 18, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([]);
        ctx.stroke();

        // Robotic Crosshair Reticle Lines
        ctx.beginPath();
        ctx.moveTo(-24, 0); ctx.lineTo(-12, 0);
        ctx.moveTo(12, 0);  ctx.lineTo(24, 0);
        ctx.moveTo(0, -24); ctx.lineTo(0, -12);
        ctx.moveTo(0, 12);  ctx.lineTo(0, 24);
        ctx.strokeStyle = '#10B981';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Robotic HUD Coordinates Text
        ctx.font = '9px monospace';
        ctx.fillStyle = '#06B6D4';
        ctx.fillText(`AI_LOCK: [X:${Math.round(mouse.x)} Y:${Math.round(mouse.y)}]`, 26, -10);

        ctx.restore();
      }

      // 2. Render AI Neural Node Network
      const maxDistance = 140;

      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        // Motion drift
        n1.x += n1.vx;
        n1.y += n1.vy;
        n1.pulse += 0.03;

        // Boundaries
        if (n1.x < 0 || n1.x > width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > height) n1.vy *= -1;

        // Distance to cursor
        const dxMouse = mouse.x - n1.x;
        const dyMouse = mouse.y - n1.y;
        const distMouse = Math.hypot(dxMouse, dyMouse);

        // Robotic Synapse Beam to Cursor when in proximity
        if (distMouse < 180 && mouse.isHovering) {
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(n1.x, n1.y);
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.45 * (1 - distMouse / 180)})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        // Draw Inter-Node Neural Circuit Connections
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw Robotic Node Square / Circle Component
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius + Math.sin(n1.pulse) * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = distMouse < 180 && mouse.isHovering ? '#06B6D4' : '#10B981';
        ctx.shadowColor = '#10B981';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Render AI Tag Label next to node
        if (i % 2 === 0) {
          ctx.font = '9px monospace';
          ctx.fillStyle = 'rgba(16, 185, 129, 0.45)';
          ctx.fillText(n1.label, n1.x + 8, n1.y + 3);
        }
      }

      // 3. Render Data Packet Streams Traveling Between Nodes
      for (let p = 0; p < dataPackets.length; p++) {
        const pkt = dataPackets[p];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          pkt.progress = 0;
          pkt.fromNode = Math.floor(Math.random() * nodes.length);
          pkt.toNode = (pkt.fromNode + 1) % nodes.length;
        }

        const nStart = nodes[pkt.fromNode];
        const nEnd = nodes[pkt.toNode];

        if (nStart && nEnd) {
          const px = nStart.x + (nEnd.x - nStart.x) * pkt.progress;
          const py = nStart.y + (nEnd.y - nStart.y) * pkt.progress;

          // Data Pulse Dot
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = '#06B6D4';
          ctx.shadowColor = '#06B6D4';
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Tiny Hex Code Packet Text
          ctx.font = '8px monospace';
          ctx.fillStyle = 'rgba(6, 182, 212, 0.7)';
          ctx.fillText(pkt.text, px + 5, py - 4);
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

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Film, Sparkles, Cpu, Layers, Mic, CheckCircle2, ShieldCheck, Activity, BarChart3, Image, RefreshCw, Zap } from 'lucide-react';

interface ExplainerScene {
  id: number;
  timeCode: string;
  stageName: string;
  serviceTitle: string;
  captionText: string;
  metricLabel: string;
  metricValue: string;
  deliverables: string[];
}

const EXPLAINER_SCENES: ExplainerScene[] = [
  {
    id: 1,
    timeCode: '00:15',
    stageName: 'STAGE 01 — NICHE AUDIT',
    serviceTitle: 'High-CPM Niche & Topic AI Selection',
    captionText: '“We scan 500+ global market datasets using AI algorithms to lock in high-CPM, low-competition YouTube niches with $25+ target RPM...”',
    metricLabel: 'Niche Target RPM',
    metricValue: '$28.50 / 1K Views',
    deliverables: ['Niche RPM & CPM Data Audit', 'Target Audience Persona Mapping', 'Low-Competition Keyword Vault'],
  },
  {
    id: 2,
    timeCode: '00:45',
    stageName: 'STAGE 02 — VIRAL SCRIPTWRITING',
    serviceTitle: 'Retention Architecture & Hook Scripting',
    captionText: '“Writers engineer 3-second opening hooks, pattern interrupts, and psychological open-loops to keep viewers watching past 10 minutes...”',
    metricLabel: 'Audience Retention',
    metricValue: '68.4% Average',
    deliverables: ['3-Second Hook Openers', 'Psychological Pattern Interrupts', 'Full 4K Video Storyboard'],
  },
  {
    id: 3,
    timeCode: '01:20',
    stageName: 'STAGE 03 — OMNIVOICE STUDIO',
    serviceTitle: 'Omnivoice Neural Audio & Voice Synthesis',
    captionText: '“Hyper-realistic Omnivoice AI synthesis & pro human voice actors mastered for broadcast audio EQ and natural audience pacing...”',
    metricLabel: 'Voice Realism Score',
    metricValue: '99.2% Human Grade',
    deliverables: ['Studio Audio EQ Mastering', 'Omnivoice Neural Audio Synthesis', 'Multi-Language Accent Support'],
  },
  {
    id: 4,
    timeCode: '02:00',
    stageName: 'STAGE 04 — 4K MOTION EDITING',
    serviceTitle: 'Cinematic 4K Motion Editing & FX',
    captionText: '“Editors build After Effects 3D motion graphics, kinetic subtitles, dynamic zoom cuts, color grading, and impact sound FX...”',
    metricLabel: 'Render Quality',
    metricValue: '4K UHD @ 60 FPS',
    deliverables: ['After Effects Motion FX & Maps', 'Kinetic Typography Subtitles', 'Premiere Pro Color Grade'],
  },
  {
    id: 5,
    timeCode: '02:40',
    stageName: 'STAGE 05 — THUMBNAIL CTR',
    serviceTitle: 'Photoshop High-CTR Thumbnail Magnet',
    captionText: '“Photoshop artists design 2 high-contrast A/B thumbnail variants optimized for mobile feeds to guarantee maximum click-through rates...”',
    metricLabel: 'Click-Through Rate',
    metricValue: '12.4% Avg CTR',
    deliverables: ['A/B Split Test Concept Variants', 'Mobile Screen Contrast Test', '10%+ Guaranteed CTR Benchmark'],
  },
  {
    id: 6,
    timeCode: '03:15',
    stageName: 'STAGE 06 — MONETIZATION VAULT',
    serviceTitle: 'Monetization & AdSense Vault Payouts',
    captionText: '“We upload with optimized metadata SEO, track channel analytics, and push your channel straight into 90-day YouTube Partner payouts...”',
    metricLabel: 'Monthly Revenue',
    metricValue: '$14,280.00 / Mo',
    deliverables: ['Complete SEO Metadata Tagging', 'Weekly Upload Scheduling', '90-Day Monetization Guarantee'],
  },
];

export const VideoShowcaseSection: React.FC = () => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(15);
  const videoCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Auto-play timeline scrubber & scene transitions
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 0.5;
        if (next >= 100) {
          setCurrentSceneIndex(0);
          return 0;
        }
        const activeScene = Math.min(
          Math.floor((next / 100) * EXPLAINER_SCENES.length),
          EXPLAINER_SCENES.length - 1
        );
        setCurrentSceneIndex(activeScene);
        return next;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isPlaying]);

  // 60FPS Animated Motion Graphics Canvas Video Renderer
  useEffect(() => {
    const canvas = videoCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 900);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 900;
      height = canvas.height = canvas.parentElement?.clientHeight || 500;
    };
    window.addEventListener('resize', handleResize);

    let time = 0;

    const renderMotionVideo = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      // 1. Cyber Dark Background
      const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, width * 0.7);
      bgGrad.addColorStop(0, '#081610');
      bgGrad.addColorStop(0.7, '#030C07');
      bgGrad.addColorStop(1, '#000000');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Animated Cyber Grid Horizon Lines
      ctx.lineWidth = 1;
      for (let y = height * 0.35; y < height; y += 28) {
        ctx.beginPath();
        const wave = Math.sin(time * 2.5 + y * 0.03) * 6;
        ctx.moveTo(0, y + wave);
        ctx.lineTo(width, y + wave);
        ctx.strokeStyle = `rgba(16, 185, 129, ${(y / height) * 0.15})`;
        ctx.stroke();
      }

      // 3. Motion Graphics Visual Elements based on Active Scene
      const barCount = 36;
      const barWidth = 6;
      const startX = width / 2 - (barCount * (barWidth + 4)) / 2;
      const centerY = height * 0.42;

      for (let b = 0; b < barCount; b++) {
        const bx = startX + b * (barWidth + 4);
        const freq = isPlaying
          ? Math.sin(time * 4 + b * 0.3) * 28 + Math.cos(time * 2.5 - b * 0.2) * 22 + 38
          : 8;

        ctx.beginPath();
        ctx.roundRect(bx, centerY - freq / 2, barWidth, freq, 3);
        const barGrad = ctx.createLinearGradient(bx, centerY - freq / 2, bx, centerY + freq / 2);
        barGrad.addColorStop(0, '#34D399');
        barGrad.addColorStop(0.5, '#10B981');
        barGrad.addColorStop(1, '#06B6D4');
        ctx.fillStyle = barGrad;
        ctx.fill();
      }

      animId = requestAnimationFrame(renderMotionVideo);
    };

    renderMotionVideo();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [isPlaying]);

  const activeScene = EXPLAINER_SCENES[currentSceneIndex];

  return (
    <section id="showcase-videos" className="py-20 bg-[#030C07] relative overflow-hidden border-b border-emerald-900/50">
      
      {/* Backlight Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[650px] bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-cyan-500/15 rounded-full blur-[190px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider font-mono">
            <Film className="w-4 h-4 text-emerald-400" />
            <span>Featured Agency Service Explainer — Section 02</span>
          </div>

          <h2 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight font-display leading-tight">
            Our Fully Animated <br />
            <span className="gradient-text">Agency Services Explainer Video</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-sans">
            Watch TubeScale’s done-for-you YouTube automation service video breaking down all 6 stages of channel scaling.
          </p>
        </div>

        {/* FULLY ANIMATED SERVICES EXPLAINER VIDEO PLAYER FRAME */}
        <div className="glass-card rounded-3xl border border-emerald-500/40 p-4 sm:p-8 bg-[#081610]/95 shadow-[0_0_60px_rgba(16,185,129,0.25)] relative overflow-hidden text-left max-w-5xl mx-auto backdrop-blur-2xl">
          
          {/* Top Video Control Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-emerald-900/60 pb-4 mb-6 px-2 gap-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981]" />
              <span className="font-bold text-white tracking-wider">
                TUBESCALE STUDIO — ANIMATED SERVICE EXPLAINER VIDEO
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#030C07] border border-emerald-500/30 text-emerald-400 font-bold">
                {activeScene.stageName}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 font-bold">
                4K UHD 60FPS
              </span>
            </div>
          </div>

          {/* MAIN ANIMATED VIDEO DISPLAY SCREEN */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-emerald-500/40 bg-black shadow-2xl flex flex-col justify-between p-6 sm:p-8 group">
            
            {/* 60FPS Animated Canvas */}
            <canvas ref={videoCanvasRef} className="absolute inset-0 w-full h-full block z-0 pointer-events-none" />

            {/* Top Video Watermark */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="px-3 py-1 rounded-full bg-black/90 border border-emerald-500/40 text-emerald-300 font-bold backdrop-blur-md">
                STEP 0{currentSceneIndex + 1} OF 06 // {activeScene.serviceTitle}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500 text-black font-extrabold shadow-glow-emerald">
                {activeScene.metricLabel}: {activeScene.metricValue}
              </span>
            </div>

            {/* Center Dynamic Kinetic Caption Box */}
            <div className="relative z-10 my-auto text-center space-y-3 py-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>EXPLAINER VOICE & KINETIC SUBTITLE SYNC</span>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl bg-black/90 border border-emerald-500/40 max-w-2xl mx-auto shadow-2xl backdrop-blur-md">
                <p className="text-base sm:text-2xl font-extrabold text-white font-display leading-snug tracking-tight">
                  {activeScene.captionText}
                </p>
              </div>
            </div>

            {/* Bottom Video Controls Overlay */}
            <div className="relative z-10 space-y-2.5 pt-3 border-t border-emerald-900/80 bg-black/60 px-4 py-3 rounded-xl backdrop-blur-md">
              
              <div className="flex items-center justify-between text-xs font-mono text-slate-200">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-xl bg-emerald-500 text-black font-bold hover:scale-105 transition shadow-glow-emerald"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-black" />}
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-xl bg-[#030C07] border border-emerald-900/60 text-slate-300 hover:text-white"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                  </button>

                  <span className="font-extrabold text-white font-mono">
                    {activeScene.timeCode} / 03:30
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-emerald-400 font-bold">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span>TUBESCALE 4K ENGINE</span>
                </div>
              </div>

              {/* Scrubber Bar */}
              <div
                className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-emerald-900/80 cursor-pointer relative"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const newProgress = (clickX / rect.width) * 100;
                  setProgress(newProgress);
                }}
              >
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-150 shadow-glow-emerald"
                  style={{ width: `${progress}%` }}
                />
              </div>

            </div>

          </div>

          {/* Deliverables Breakdown for Active Scene */}
          <div className="mt-6 space-y-3 font-sans text-left">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
              Included Service Deliverables For Active Stage:
            </span>

            <div className="grid sm:grid-cols-3 gap-3">
              {activeScene.deliverables.map((item, dIdx) => (
                <div key={dIdx} className="flex items-center gap-2 text-slate-200 text-xs font-semibold bg-[#030C07] p-3 rounded-xl border border-emerald-900/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6-Stage Scene Jump Buttons */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-6 gap-2 font-sans">
            {EXPLAINER_SCENES.map((scene, idx) => {
              const isActive = currentSceneIndex === idx;
              return (
                <button
                  key={scene.id}
                  onClick={() => {
                    setCurrentSceneIndex(idx);
                    setProgress((idx / EXPLAINER_SCENES.length) * 100);
                    setIsPlaying(true);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all text-xs ${
                    isActive
                      ? 'bg-emerald-500/20 border-emerald-400 text-white font-bold shadow-glow-emerald'
                      : 'bg-[#030C07] border-emerald-900/60 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="font-mono text-[10px] text-emerald-400">STAGE 0{scene.id}</div>
                  <div className="truncate font-display mt-0.5">{scene.serviceTitle.split(' ')[0]} {scene.serviceTitle.split(' ')[1] || ''}</div>
                </button>
              );
            })}
          </div>

          {/* SLA Footer */}
          <div className="mt-6 pt-4 border-t border-emerald-900/60 flex items-center justify-between text-xs text-slate-300 font-sans">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full Done-For-You YouTube Channel Automation by TubeScale</span>
            </div>
            <span className="text-cyan-400 font-bold font-mono">90-DAY MONETIZATION SLA</span>
          </div>

        </div>

      </div>
    </section>
  );
};

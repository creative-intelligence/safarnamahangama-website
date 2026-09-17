import React, { useState, useEffect } from 'react';
import { Cpu, Flame, Layers, Sparkles, DollarSign, Zap, RefreshCw, CheckCircle2, TrendingUp, BarChart3, Activity, ShieldCheck, ArrowRight, Play, Eye } from 'lucide-react';

interface Stage {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  metric: string;
  description: string;
  icon: string;
  details: {
    label: string;
    value: string;
  }[];
  liveStatus: string;
}

const STAGES: Stage[] = [
  {
    id: 1,
    title: '1. Niche & Topic AI Intelligence',
    subtitle: 'High-CPM Data Matrix',
    badge: 'STAGE 01',
    metric: '98.4% CPM Score',
    description: 'We audit Finance, Tech, AI, and Luxury market datasets to engineer low-competition, high-RPM channels ($15 to $30+ per 1,000 views).',
    icon: 'Cpu',
    details: [
      { label: 'Audited Niches', value: '500+ High-CPM Clusters' },
      { label: 'Average RPM Target', value: '$22.50 / 1K Views' },
      { label: 'Market Competition', value: 'Low Risk Tier' }
    ],
    liveStatus: 'SCANNING HIGH-CPM FINANCE & TECH DATASETS...',
  },
  {
    id: 2,
    title: '2. Viral Hook Script Engine',
    subtitle: 'Retention Architecture',
    badge: 'STAGE 02',
    metric: '68% Avg Retention',
    description: 'Writers craft 3-second opening hooks, pattern interrupts, and open-loop narrative arcs to maximize YouTube Watch Time metrics.',
    icon: 'Flame',
    details: [
      { label: 'First 30s Retention', value: '78.4% Target Peak' },
      { label: 'Hook Pacing', value: 'Pattern Interrupt every 8s' },
      { label: 'Story Arc', value: 'Open-Loop Psychological Structure' }
    ],
    liveStatus: 'SYNTHESIZING VIRAL HOOK & NARRATIVE ARC...',
  },
  {
    id: 3,
    title: '3. Cinematic 4K Motion Edit',
    subtitle: 'Visual Sound Pacing',
    badge: 'STAGE 03',
    metric: '4K 60fps Render',
    description: 'Editors synthesize fast-paced 2D/3D motion graphics, kinetic subtitles, color grading, and impact sound FX.',
    icon: 'Layers',
    details: [
      { label: 'Resolution & FPS', value: '4K UHD @ 60 FPS' },
      { label: 'Audio Pacing', value: 'Kinetic SFX & Custom Scoring' },
      { label: 'Color Space', value: 'Rec.709 HDR Cinema Grade' }
    ],
    liveStatus: 'RENDERING CINEMATIC MOTION FX & COLOR GRADE...',
  },
  {
    id: 4,
    title: '4. High-CTR Thumbnail Magnet',
    subtitle: 'Click Psychology Testing',
    badge: 'STAGE 04',
    metric: '12.4% Avg CTR',
    description: 'Photoshop artists engineer 2 high-contrast thumbnail variants optimized for mobile feeds to dominate Search & Impressions.',
    icon: 'Sparkles',
    details: [
      { label: 'CTR Split Benchmark', value: 'Variant A: 12.8% | Variant B: 11.9%' },
      { label: 'Focal Contrast', value: 'High Mobile Saturation' },
      { label: 'Eye-Tracking Score', value: '96.2 / 100 Heatmap' }
    ],
    liveStatus: 'OPTIMIZING THUMBNAIL A/B MOBILE CONTRAST...',
  },
  {
    id: 5,
    title: '5. Monetization & AdSense Vault',
    subtitle: 'Automated Cashflow Payouts',
    badge: 'STAGE 05',
    metric: '$14,280.00 / Mo',
    description: 'We publish with optimized metadata SEO, track analytics, and push your channel into 90-day YouTube Partner AdSense payouts.',
    icon: 'DollarSign',
    details: [
      { label: 'Est. Monthly AdSense', value: '$14,280.00 / Month' },
      { label: '90-Day SLA Guarantee', value: '100% Monetization SLA' },
      { label: 'Payout Vault', value: 'Direct Bank Wire Verified' }
    ],
    liveStatus: 'MONITORING ADSENSE PAYOUT VAULT & CHANNEL SEO...',
  },
];

export const YouTubeEngineVisualizer: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [liveCounter, setLiveCounter] = useState(14280);
  const [isPlaying, setIsPlaying] = useState(true);
  const [floatingPulses, setFloatingPulses] = useState<{ id: number; text: string; x: number }[]>([]);

  // 24/7 Continuous Automatic Flow Loop
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % STAGES.length);
    }, 4000);

    const counterTimer = setInterval(() => {
      setLiveCounter((prev) => prev + Math.floor(Math.random() * 15) + 5);
      
      // Spawn subtle floating cash pulse badges
      if (Math.random() > 0.6) {
        const id = Date.now();
        const pulseText = `+$${Math.floor(Math.random() * 85) + 15}`;
        const xPos = Math.floor(Math.random() * 60) + 20;
        setFloatingPulses((prev) => [...prev.slice(-3), { id, text: pulseText, x: xPos }]);
      }
    }, 1500);

    return () => {
      clearInterval(timer);
      clearInterval(counterTimer);
    };
  }, [isPlaying]);

  const activeStage = STAGES[activeStageIndex];

  return (
    <section id="engine-machine" className="py-24 bg-[#030C07] relative overflow-hidden border-y border-emerald-900/50">
      
      {/* Background Ambient Radial Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[650px] bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-cyan-500/15 rounded-full blur-[190px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider animate-pulse shadow-glow-emerald">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>Center Of Attention — 24/7 Live YouTube Engine</span>
          </div>

          <h2 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight font-display leading-tight">
            The Infinite YouTube <br />
            <span className="gradient-text">Cashflow Production Engine</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-sans">
            Click or watch our 5-stage automated channel growth engine processing content & monetization in real time.
          </p>

          {/* Interactive Play/Pause Controller */}
          <div className="pt-2 flex justify-center items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border font-mono text-xs font-bold transition-all duration-300 ${
                isPlaying
                  ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300 shadow-glow-emerald'
                  : 'bg-[#081610] border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              {isPlaying ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-400" />
                  <span>24/7 AUTOMATED ENGINE: RUNNING</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-amber-400" />
                  <span>ENGINE PAUSED (CLICK TO RESUME)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Floating Interactive 5-Stage Laser Pipeline Tabs */}
        <div className="relative mb-10">
          
          {/* Laser Conduit Connection Line behind tabs */}
          <div className="hidden sm:block absolute top-1/2 left-6 right-6 h-1 -translate-y-1/2 bg-emerald-950/80 border-t border-emerald-900/60 z-0">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-500 shadow-glow-emerald"
              style={{ width: `${((activeStageIndex + 1) / STAGES.length) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative z-10">
            {STAGES.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => {
                    setActiveStageIndex(idx);
                    setIsPlaying(false); // pause auto-cycle when user manually clicks stage
                  }}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden backdrop-blur-xl ${
                    isActive
                      ? 'bg-[#081610] border-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.4)] scale-105 z-20'
                      : 'bg-[#030C07]/90 border-emerald-900/60 text-slate-400 hover:border-emerald-700 hover:scale-[1.02]'
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-pulse" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                      {stage.badge}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-400 shadow-[0_0_8px_#10B981]' : 'bg-slate-700'}`} />
                  </div>

                  <div className="text-sm font-bold text-white font-display truncate">
                    {stage.subtitle}
                  </div>

                  <div className="text-xs text-emerald-300 font-sans mt-1 font-bold">
                    {stage.metric}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Flagship Interactive Command Center Console */}
        <div className="glass-card rounded-3xl border border-emerald-500/40 p-6 sm:p-10 bg-[#081610]/95 shadow-2xl relative overflow-hidden text-left backdrop-blur-2xl">
          
          {/* Subtle Ambient Laser Gradient */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent pointer-events-none" />

          {/* Console Header Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-emerald-900/60 pb-6 mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981]" />
              <div className="font-mono text-xs font-bold text-emerald-300 tracking-wider">
                {activeStage.liveStatus}
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-[#030C07] border border-emerald-500/30 text-slate-300 font-semibold">
                QUALITY SLA: <strong className="text-emerald-400">HUMAN VERIFIED</strong>
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 font-bold">
                STAGE {activeStage.id} / 5
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Stage Deep Dive Inspector */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                  AUTOMATED PIPELINE STEP 0{activeStage.id}
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display leading-tight">
                  {activeStage.title}
                </h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                {activeStage.description}
              </p>

              {/* High-Tech Stage Parameters Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-sans">
                {activeStage.details.map((detail, dIdx) => (
                  <div key={dIdx} className="p-3.5 rounded-2xl bg-[#030C07] border border-emerald-900/60 space-y-1">
                    <span className="text-[11px] text-slate-400 font-semibold block">{detail.label}</span>
                    <span className="text-xs font-extrabold text-emerald-300 block font-mono truncate">{detail.value}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Command Console Display & Live Metric Counter */}
            <div className="lg:col-span-5 relative">
              
              {/* Floating Cash Pulse Badges */}
              {floatingPulses.map((pulse) => (
                <div
                  key={pulse.id}
                  className="absolute z-30 px-3 py-1 rounded-full bg-emerald-500 text-black font-extrabold text-xs shadow-glow-emerald animate-bounce font-mono"
                  style={{ top: '-15px', left: `${pulse.x}%` }}
                >
                  {pulse.text}
                </div>
              ))}

              <div className="bg-[#030C07] p-8 rounded-3xl border border-emerald-500/40 text-center space-y-6 shadow-2xl relative overflow-hidden group">
                
                {/* Stage Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-900/40 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 shadow-glow-emerald transition-transform group-hover:scale-110">
                  {activeStageIndex === 0 && <Cpu className="w-10 h-10 animate-pulse text-emerald-400" />}
                  {activeStageIndex === 1 && <Flame className="w-10 h-10 text-amber-400 animate-bounce" />}
                  {activeStageIndex === 2 && <Layers className="w-10 h-10 text-cyan-400 animate-pulse" />}
                  {activeStageIndex === 3 && <Sparkles className="w-10 h-10 text-yellow-400 animate-spin" />}
                  {activeStageIndex === 4 && <DollarSign className="w-10 h-10 text-emerald-400 animate-pulse" />}
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                    {activeStage.subtitle} Benchmark
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-display tracking-tight">
                    {activeStageIndex === 4 ? `$${liveCounter.toLocaleString()}.00` : activeStage.metric}
                  </div>
                  <div className="text-xs text-slate-400 font-sans font-medium">
                    {activeStageIndex === 4 ? 'Live AdSense Payout Stream (24/7)' : 'Target Production Output'}
                  </div>
                </div>

                {/* Status Telemetry */}
                <div className="p-3.5 rounded-2xl bg-[#081610] border border-emerald-900/60 text-xs text-slate-300 font-mono flex items-center justify-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span>SYSTEM: 100% AUTOMATED PRODUCTION</span>
                </div>

              </div>
            </div>

          </div>

          {/* Engine Lifecycle Progress Footer Bar */}
          <div className="mt-8 pt-6 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans">
            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold text-white">Usama Khursheed Automated YouTube Engine</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-slate-400 font-mono font-bold text-[11px]">LIFECYCLE PROGRESS</span>
              <div className="flex-1 sm:w-48 h-2 bg-[#030C07] rounded-full overflow-hidden border border-emerald-900/60">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-500 shadow-glow-emerald"
                  style={{ width: `${((activeStageIndex + 1) / STAGES.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

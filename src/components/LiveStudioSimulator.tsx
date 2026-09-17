import React, { useState, useEffect } from 'react';
import { Play, Pause, Sparkles, Activity, FileText, Image, Mic, ShieldCheck, Flame, BarChart3, Sliders, CheckCircle2 } from 'lucide-react';

export const LiveStudioSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'retention' | 'thumbnail' | 'voiceover'>('retention');
  const [isPlaying, setIsPlaying] = useState(true);
  const [retentionHook, setRetentionHook] = useState(68);
  const [selectedVariant, setSelectedVariant] = useState<'A' | 'B'>('A');

  // Simulated live audio waveform bars
  const [bars, setBars] = useState<number[]>([40, 70, 30, 90, 60, 80, 50, 95, 45, 65, 85, 55, 75, 35]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.floor(Math.random() * 65) + 30));
    }, 250);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="py-24 bg-[#030C07] relative border-t border-emerald-900/40 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive Agency Technology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Inside TubeScale's <br />
            <span className="gradient-text">Live Production Terminal</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-sans">
            Test how our retention script hooks, 4K visual pacing, and high-CTR thumbnail variants boost YouTube channel metrics in real time.
          </p>
        </div>

        {/* Studio Simulator Terminal Window */}
        <div className="max-w-5xl mx-auto glass-card rounded-3xl border border-emerald-500/40 bg-[#081610] shadow-2xl overflow-hidden text-left">
          
          {/* Terminal Window Header Bar */}
          <div className="bg-[#030C07] px-6 py-4 border-b border-emerald-900/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2">tubescale-production-engine.v2</span>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1 bg-[#081610] border border-emerald-900/60 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('retention')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'retention'
                    ? 'bg-emerald-500 text-black shadow-glow-emerald'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Script Retention</span>
              </button>

              <button
                onClick={() => setActiveTab('thumbnail')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'thumbnail'
                    ? 'bg-emerald-500 text-black shadow-glow-emerald'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Image className="w-3.5 h-3.5" />
                <span>Thumbnail A/B Test</span>
              </button>

              <button
                onClick={() => setActiveTab('voiceover')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'voiceover'
                    ? 'bg-emerald-500 text-black shadow-glow-emerald'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Mic className="w-3.5 h-3.5" />
                <span>Audio Engine</span>
              </button>
            </div>
          </div>

          {/* Terminal Body Content */}
          <div className="p-6 sm:p-10">
            {activeTab === 'retention' && (
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold">
                    <Flame className="w-3.5 h-3.5" />
                    <span>3-Second Opening Hook Heatmap</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">Psychological Hook Pacing</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Every script uses pattern interrupts, open loops, and visual curiosity hooks designed to prevent viewer drop-offs in the critical first 30 seconds.
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-300">Audience View Duration Benchmark:</span>
                      <span className="text-emerald-400 font-display">{retentionHook}% Retention</span>
                    </div>
                    <input
                      type="range"
                      min={45}
                      max={85}
                      value={retentionHook}
                      onChange={(e) => setRetentionHook(Number(e.target.value))}
                      className="w-full h-2.5 bg-[#030C07] rounded-lg appearance-none cursor-pointer accent-emerald-400"
                    />
                  </div>
                </div>

                <div className="md:col-span-5 bg-[#030C07] p-6 rounded-2xl border border-emerald-900/60 text-center space-y-4">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Targeted Algorithm Status</div>
                  <div className="text-4xl font-black text-emerald-400 font-display">
                    {retentionHook > 65 ? 'VIRAL ELIGIBLE' : 'STANDARD'}
                  </div>
                  <p className="text-xs text-slate-300">
                    {retentionHook > 65
                      ? 'High retention score triggers YouTube Recommendation Algorithm & Browse Feeds.'
                      : 'Adjust slider to see high retention benchmark effects.'}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'thumbnail' && (
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>Visual Click-Through Optimization</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">High-CTR Thumbnail Split Testing</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    We design 2 high-contrast visual concepts for every video. Our creative team tests visual elements, typography legibility, and color psychology.
                  </p>

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => setSelectedVariant('A')}
                      className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                        selectedVariant === 'A'
                          ? 'bg-emerald-500 text-black border-emerald-400 shadow-glow-emerald'
                          : 'bg-[#030C07] border-emerald-900/60 text-slate-300'
                      }`}
                    >
                      Variant A (High Emotion Cutout) — 11.4% CTR
                    </button>
                    <button
                      onClick={() => setSelectedVariant('B')}
                      className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                        selectedVariant === 'B'
                          ? 'bg-cyan-500 text-black border-cyan-400 shadow-glow-cyan'
                          : 'bg-[#030C07] border-emerald-900/60 text-slate-300'
                      }`}
                    >
                      Variant B (Bold Map Vector) — 9.8% CTR
                    </button>
                  </div>
                </div>

                <div className="md:col-span-5 bg-[#030C07] p-6 rounded-2xl border border-emerald-900/60 text-center space-y-3">
                  <div className="text-xs text-slate-400 font-bold uppercase">Selected Visual Winner</div>
                  <div className="text-3xl font-black text-emerald-400 font-display">
                    Variant {selectedVariant} ({selectedVariant === 'A' ? '11.4%' : '9.8%'} CTR)
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs text-emerald-300 font-semibold pt-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Selected for Main Video Upload</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'voiceover' && (
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-bold">
                    <Mic className="w-3.5 h-3.5 text-teal-400" />
                    <span>Studio Audio & Frequency Mastering</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">Crystal Clear Voice Synthesis</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Choose native English voice actors or hyper-realistic ultra-natural AI voices mastered with background scoring and noise compression.
                  </p>

                  {/* Audio Waveform Animation Bars */}
                  <div className="p-4 rounded-2xl bg-[#030C07] border border-emerald-900/60 flex items-center justify-between gap-1.5 h-20 px-6">
                    {bars.map((height, i) => (
                      <div
                        key={i}
                        className="w-2 bg-gradient-to-t from-emerald-500 to-cyan-400 rounded-full transition-all duration-200"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="md:col-span-5 bg-[#030C07] p-6 rounded-2xl border border-emerald-900/60 text-center space-y-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-emerald-500 text-black flex items-center justify-center mx-auto shadow-glow-emerald hover:scale-110 transition-transform"
                  >
                    {isPlaying ? <Pause className="w-6 h-6 fill-black" /> : <Play className="w-6 h-6 fill-black translate-x-0.5" />}
                  </button>
                  <div className="text-sm font-bold text-white font-display">
                    {isPlaying ? 'Live Studio Audio Master Active' : 'Audio Simulation Paused'}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Terminal Footer */}
          <div className="bg-[#030C07] px-6 py-3 border-t border-emerald-900/60 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-2 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>TubeScale Automated Quality SLA</span>
            </span>
            <span className="text-emerald-400 font-bold">100% Monetizable</span>
          </div>

        </div>

      </div>
    </section>
  );
};

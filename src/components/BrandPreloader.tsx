import React, { useState, useEffect } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';

interface BrandPreloaderProps {
  onComplete?: () => void;
  activeOption?: 1 | 2 | 3 | 4 | 5;
  onSelectOption?: (option: 1 | 2 | 3 | 4 | 5) => void;
}

export const BrandPreloader: React.FC<BrandPreloaderProps> = ({
  onComplete,
  activeOption = 1,
  onSelectOption
}) => {
  const [currentOption, setCurrentOption] = useState<1 | 2 | 3 | 4 | 5>(activeOption);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<'enter' | 'active' | 'exit' | 'done'>('enter');

  useEffect(() => {
    setCurrentOption(activeOption);
  }, [activeOption]);

  // Run timing animation cycle
  useEffect(() => {
    setStage('enter');
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const activeTimer = setTimeout(() => {
      setStage('active');
    }, 400);

    const exitTimer = setTimeout(() => {
      setStage('exit');
    }, 2200);

    const doneTimer = setTimeout(() => {
      setStage('done');
      if (onComplete) onComplete();
    }, 2800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(activeTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [currentOption]);

  const handleReplay = (opt: 1 | 2 | 3 | 4 | 5) => {
    setCurrentOption(opt);
    if (onSelectOption) onSelectOption(opt);
  };

  if (stage === 'done') {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030C07] transition-all duration-700 select-none overflow-hidden ${
        stage === 'exit'
          ? currentOption === 4
            ? 'opacity-0 scale-105 pointer-events-none'
            : currentOption === 5
            ? 'opacity-0 scale-125 blur-sm pointer-events-none'
            : 'opacity-0 pointer-events-none'
          : 'opacity-100'
      }`}
    >
      {/* OPTION SELECTOR BAR (For User Testing & Live Comparison) */}
      <div className="absolute top-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-[#081610]/90 border border-emerald-500/40 backdrop-blur-md shadow-glow-emerald">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase mr-2 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          TEST PRELOADER STYLE:
        </span>
        {([1, 2, 3, 4, 5] as const).map((opt) => (
          <button
            key={opt}
            onClick={() => handleReplay(opt)}
            className={`px-3 py-1 rounded-full text-xs font-mono font-extrabold transition-all duration-200 ${
              currentOption === opt
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.8)] scale-105'
                : 'bg-emerald-950/60 text-slate-300 hover:text-white hover:bg-emerald-800/40'
            }`}
          >
            Option {opt}
          </button>
        ))}
        <button
          onClick={() => handleReplay(currentOption)}
          className="ml-2 p-1.5 rounded-full bg-emerald-900/60 hover:bg-emerald-500 hover:text-black text-emerald-300 transition-colors"
          title="Replay Animation"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* BACKGROUND AMBIENT GLOW & GRID */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-cyan-500/15 blur-3xl animate-pulse pointer-events-none" />

      {/* ========================================================================= */}
      {/* OPTION 1: HOLOGRAPHIC CYBER LASER PULSE (MINIMALIST EXECUTIVE) */}
      {/* ========================================================================= */}
      {currentOption === 1 && (
        <div className="relative flex flex-col items-center justify-center space-y-6">
          {/* Laser Horizon Sweep Line */}
          <div className="relative w-80 sm:w-[480px] h-0.5 bg-emerald-950 overflow-hidden rounded-full">
            <div
              className="h-full bg-gradient-to-r from-transparent via-emerald-400 to-cyan-400 transition-all duration-300 shadow-[0_0_15px_#10B981]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Logo & Brand Reveal */}
          <div
            className={`flex items-center gap-4 transition-all duration-1000 ease-out transform ${
              stage === 'enter'
                ? 'opacity-0 scale-90 translateY(20px)'
                : stage === 'exit'
                ? 'opacity-0 scale-105 blur-sm'
                : 'opacity-100 scale-100 translateY(0)'
            }`}
          >
            <img
              src="/favicon.svg"
              alt="TubeScale Logo"
              className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-[0_0_25px_rgba(16,185,129,0.9)] animate-pulse"
            />
            <div>
              <span className="font-extrabold text-4xl sm:text-5xl tracking-tight text-white font-display">
                Tube<span className="gradient-text">Scale</span>
              </span>
              <span className="text-xs uppercase font-mono font-bold tracking-[0.25em] text-emerald-400 block mt-0.5">
                YOUTUBE AUTOMATION AGENCY
              </span>
            </div>
          </div>

          {/* Subtext Status Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-semibold transition-all duration-700 ${
              stage === 'active' ? 'opacity-100 translateY(0)' : 'opacity-0 translateY(10px)'
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span>INITIALIZING AGENCY ENGINE... {progress}%</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* OPTION 2: SPEEDOMETER TACHOMETER IGNITION & DIGITAL % COUNTER */}
      {/* ========================================================================= */}
      {currentOption === 2 && (
        <div className="relative flex flex-col items-center justify-center space-y-6">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
            {/* Spinning Orbital Tachometer Arc */}
            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 300">
              <circle
                cx="150"
                cy="150"
                r="120"
                fill="none"
                stroke="rgba(16, 185, 129, 0.15)"
                strokeWidth="6"
              />
              <circle
                cx="150"
                cy="150"
                r="120"
                fill="none"
                stroke="url(#speedoPreloaderGrad)"
                strokeWidth="6"
                strokeDasharray="754"
                strokeDashoffset={754 - (progress / 100) * 754}
                strokeLinecap="round"
                className="transition-all duration-200 ease-out"
                filter="drop-shadow(0 0 12px #10B981)"
              />
              <defs>
                <linearGradient id="speedoPreloaderGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="50%" stopColor="#34D399" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Logo in Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 z-10">
              <img
                src="/favicon.svg"
                alt="TubeScale Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]"
              />
              <span className="font-black text-2xl sm:text-3xl text-white font-display tracking-tight">
                Tube<span className="gradient-text">Scale</span>
              </span>
              <span className="text-sm font-mono font-extrabold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
                {progress}%
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* OPTION 3: EXECUTIVE EMERALD LUXURY SHIMMER (CINEMATIC SMOOTH) */}
      {/* ========================================================================= */}
      {currentOption === 3 && (
        <div className="relative flex flex-col items-center justify-center space-y-4">
          <div
            className={`flex items-center gap-4 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
              stage === 'enter'
                ? 'opacity-0 scale-95'
                : stage === 'exit'
                ? 'opacity-0 scale-105'
                : 'opacity-100 scale-100'
            }`}
          >
            <img
              src="/favicon.svg"
              alt="TubeScale Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_0_30px_rgba(16,185,129,1)]"
            />
            <div className="text-left">
              <div className="font-extrabold text-4xl sm:text-6xl text-white font-display tracking-tight">
                Tube<span className="gradient-text">Scale</span>
              </div>
              <div className="text-xs font-sans font-semibold tracking-widest text-slate-300 uppercase mt-1">
                YouTube Growth Engine • Founded by Usama Khursheed
              </div>
            </div>
          </div>

          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full animate-pulse mt-4" />
        </div>
      )}

      {/* ========================================================================= */}
      {/* OPTION 4: 3D FLIP CARD & VERTICAL CURTAIN SPLIT */}
      {/* ========================================================================= */}
      {currentOption === 4 && (
        <div className="relative flex flex-col items-center justify-center [perspective:1000px]">
          <div
            className={`w-80 sm:w-96 p-8 rounded-3xl bg-[#081610] border border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.4)] flex flex-col items-center text-center space-y-4 transition-all duration-1000 [transform-style:preserve-3d] ${
              stage === 'enter'
                ? '[transform:rotateY(180deg)_scale(0.8)] opacity-0'
                : stage === 'exit'
                ? '[transform:rotateY(-90deg)_scale(1.1)] opacity-0'
                : '[transform:rotateY(0deg)_scale(1)] opacity-100'
            }`}
          >
            <img
              src="/favicon.svg"
              alt="TubeScale Logo"
              className="w-16 h-16 drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]"
            />
            <div className="font-black text-3xl text-white font-display tracking-tight">
              Tube<span className="gradient-text">Scale</span>
            </div>
            <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest border-t border-emerald-900/60 pt-3 w-full">
              AUTHENTICATING PREMIER AGENCY ACCESS
            </p>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* OPTION 5: MINIMALIST DOT-ZOOM REVEAL (APPLE-STYLE CLEAN) */}
      {/* ========================================================================= */}
      {currentOption === 5 && (
        <div className="relative flex flex-col items-center justify-center">
          <div
            className={`flex flex-col items-center justify-center space-y-4 transition-all duration-800 ${
              stage === 'enter'
                ? 'opacity-0 scale-50'
                : stage === 'exit'
                ? 'opacity-0 scale-150 blur-md'
                : 'opacity-100 scale-100'
            }`}
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute h-16 w-16 rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <img
                src="/favicon.svg"
                alt="TubeScale Logo"
                className="relative w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_0_35px_rgba(16,185,129,0.9)]"
              />
            </div>
            <div className="font-black text-4xl sm:text-6xl text-white font-display tracking-tight text-center">
              Tube<span className="gradient-text">Scale</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

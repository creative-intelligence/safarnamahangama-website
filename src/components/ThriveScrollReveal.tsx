import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Zap, ShieldCheck, TrendingUp, Award, Layers } from 'lucide-react';

interface LetterItem {
  char: string;
  word: string;
  description: string;
  metric: string;
}

const LETTERS: LetterItem[] = [
  {
    char: 'T',
    word: 'TOP-RPM NICHE DISCOVERY',
    description: 'Scanning 500+ global markets for $25+ RPM CPM clusters.',
    metric: '$28.50 RPM',
  },
  {
    char: 'H',
    word: 'HIGH-RETENTION SCRIPTING',
    description: 'Psychological pattern interrupts and 3-second opening hooks.',
    metric: '68% Watch Time',
  },
  {
    char: 'R',
    word: 'REAL-TIME OMNIVOICE',
    description: 'Hyper-realistic voice synthesis mastered for broadcast audio EQ.',
    metric: '99.2% Realism',
  },
  {
    char: 'I',
    word: 'INFINITE 4K MOTION EDITING',
    description: 'After Effects 3D motion graphics, kinetic subtitles & SFX.',
    metric: '4K UHD 60FPS',
  },
  {
    char: 'V',
    word: 'VIRAL THUMBNAIL PSYCHOLOGY',
    description: 'Photoshop A/B split testing for mobile feed contrast.',
    metric: '12.4% Avg CTR',
  },
  {
    char: 'E',
    word: 'EMPIRE MONETIZATION SLA',
    description: 'Complete DFY operations backed by Usama Khursheed 90-day guarantee.',
    metric: '$14,280.00 / Mo',
  },
];

export const ThriveScrollReveal: React.FC = () => {
  const [activeLetterIdx, setActiveLetterIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll fraction inside section
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const scrollFraction = Math.max(0, Math.min(1, currentScroll / totalScrollable));

      const calculatedIdx = Math.min(
        Math.floor(scrollFraction * LETTERS.length),
        LETTERS.length - 1
      );
      setActiveLetterIdx(calculatedIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLetter = LETTERS[activeLetterIdx];

  return (
    <div
      ref={sectionRef}
      className="relative h-[280vh] bg-[#030C07] border-y border-emerald-900/50 overflow-hidden"
    >
      {/* Sticky Fullscreen Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        
        {/* Background Laser Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-cyan-500/15 rounded-full blur-[180px] pointer-events-none" />

        {/* Top Tag Header */}
        <div className="mb-6 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-widest font-mono">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Thrive Scroll-Lock Reveal — Scroll Down To Illuminate</span>
          </div>
        </div>

        {/* GIANT THRIVE METALLIC GLOWING LETTERS (T -> H -> R -> I -> V -> E) */}
        <div className="flex justify-center items-center gap-2 sm:gap-6 my-4 z-10 select-none">
          {LETTERS.map((item, idx) => {
            const isLit = idx <= activeLetterIdx;
            const isCurrent = idx === activeLetterIdx;

            return (
              <div
                key={item.char}
                onClick={() => setActiveLetterIdx(idx)}
                className={`relative cursor-pointer transition-all duration-500 flex flex-col items-center group`}
              >
                {/* 3D Glowing Letter */}
                <span
                  className={`text-5xl sm:text-8xl lg:text-9xl font-black font-display tracking-tight transition-all duration-500 ${
                    isLit
                      ? 'text-transparent bg-clip-text bg-gradient-to-b from-white via-emerald-300 to-emerald-500 drop-shadow-[0_0_35px_rgba(16,185,129,0.8)] scale-110'
                      : 'text-slate-800/80 hover:text-slate-600 scale-95'
                  }`}
                >
                  {item.char}
                </span>

                {/* Underline Laser Beam */}
                <div
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    isCurrent
                      ? 'w-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 shadow-[0_0_15px_#10B981]'
                      : isLit
                      ? 'w-full bg-emerald-700/60'
                      : 'w-0 bg-transparent'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* DYNAMIC TELEMETRY BOX FOR ACTIVE ILLUMINATED LETTER */}
        <div className="mt-8 z-10 max-w-2xl mx-auto w-full glass-card rounded-3xl border border-emerald-500/40 p-6 sm:p-8 bg-[#081610]/95 shadow-2xl backdrop-blur-2xl transition-all duration-500 text-left">
          
          <div className="flex items-center justify-between border-b border-emerald-900/60 pb-3 mb-4">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              SUPERPOWER 0{activeLetterIdx + 1} // {activeLetter.word}
            </span>

            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
              {activeLetter.metric}
            </span>
          </div>

          <p className="text-slate-200 text-base sm:text-lg font-display font-semibold leading-relaxed">
            {activeLetter.description}
          </p>

          <div className="mt-4 pt-3 border-t border-emerald-900/40 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>SCROLL DIRECTION: DOWN TO NEXT SUPERPOWER</span>
            <span className="text-cyan-400 font-bold">USAMA KHURSHEED SLA</span>
          </div>

        </div>

      </div>
    </div>
  );
};

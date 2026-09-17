import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Zap, ShieldCheck, TrendingUp, Award, Layers } from 'lucide-react';

interface LetterItem {
  char: string;
  word: string;
  description: string;
  metric: string;
}

const BRAND_LETTERS: LetterItem[] = [
  {
    char: 'T',
    word: 'TOP-RPM NICHE DISCOVERY',
    description: 'Scanning 500+ global markets for $25+ RPM CPM clusters.',
    metric: '$28.50 RPM Target',
  },
  {
    char: 'U',
    word: 'ULTRA-RETENTION HOOK SCRIPTS',
    description: 'Psychological pattern interrupts and 3-second opening hooks.',
    metric: '68.4% Watch Time',
  },
  {
    char: 'B',
    word: 'BROADCAST OMNIVOICE STUDIO',
    description: 'Hyper-realistic neural audio synthesis mastered for studio EQ.',
    metric: '99.2% Realism Score',
  },
  {
    char: 'E',
    word: 'EMPIRE 4K MOTION EDITING',
    description: 'After Effects 3D motion graphics, kinetic subtitles & impact SFX.',
    metric: '4K UHD 60FPS',
  },
  {
    char: 'U',
    word: 'ULTRA HIGH-CTR THUMBNAILS',
    description: 'Photoshop A/B split testing engineered for mobile feed contrast.',
    metric: '12.4% Avg CTR',
  },
  {
    char: 'S',
    word: 'SLA MONETIZATION GUARANTEE',
    description: 'Backing your channel with Usama Khursheed 90-day monetization SLA.',
    metric: '$14,280.00 / Mo Payouts',
  },
  {
    char: 'T',
    word: 'TOTAL CHANNEL OWNERSHIP',
    description: 'You keep 100% ownership of your channel and all YouTube AdSense revenue.',
    metric: '100% Owned By You',
  },
  {
    char: 'A',
    word: 'AUTOMATED 360° MANAGEMENT',
    description: 'Full done-for-you operations from SEO metadata to weekly uploads.',
    metric: '24/7 Hands-Free',
  },
  {
    char: 'D',
    word: 'DEDICATED STUDIO TEAM',
    description: 'Writers, video editors, thumbnail designers, and channel manager.',
    metric: 'Human Verified',
  },
  {
    char: 'S',
    word: 'SCALABLE YOUTUBE REVENUE',
    description: 'Building multi-channel automated cashflow empires on autopilot.',
    metric: 'Scalable Growth',
  },
];

export const AgencyBrandReveal: React.FC = () => {
  const [activeLetterIdx, setActiveLetterIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const scrollFraction = Math.max(0, Math.min(1, currentScroll / totalScrollable));

      const calculatedIdx = Math.min(
        Math.floor(scrollFraction * BRAND_LETTERS.length),
        BRAND_LETTERS.length - 1
      );
      setActiveLetterIdx(calculatedIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLetter = BRAND_LETTERS[activeLetterIdx];

  return (
    <div
      ref={sectionRef}
      className="relative h-[320vh] bg-[#030C07] border-y border-emerald-900/50 overflow-hidden"
    >
      {/* Sticky Fullscreen Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        
        {/* Background Laser Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[550px] bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-cyan-500/15 rounded-full blur-[180px] pointer-events-none" />

        {/* Top Tag Header */}
        <div className="mb-4 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-widest font-mono">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Usama Khursheed Agency Brand Reveal — Scroll Down</span>
          </div>
        </div>

        {/* GIANT METALLIC GLOWING BRAND LETTERS: T-U-B-E-U-S-T-A-D-S */}
        <div className="flex justify-center items-center gap-1.5 sm:gap-4 my-3 z-10 select-none flex-wrap">
          {BRAND_LETTERS.map((item, idx) => {
            const isLit = idx <= activeLetterIdx;
            const isCurrent = idx === activeLetterIdx;

            return (
              <div
                key={idx}
                onClick={() => setActiveLetterIdx(idx)}
                className="relative cursor-pointer transition-all duration-500 flex flex-col items-center group"
              >
                {/* 3D Glowing Brand Letter */}
                <span
                  className={`text-4xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight transition-all duration-500 ${
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

        {/* DYNAMIC TELEMETRY BOX FOR ACTIVE ILLUMINATED BRAND LETTER */}
        <div className="mt-6 z-10 max-w-2xl mx-auto w-full glass-card rounded-3xl border border-emerald-500/40 p-5 sm:p-7 bg-[#081610]/95 shadow-2xl backdrop-blur-2xl transition-all duration-500 text-left">
          
          <div className="flex items-center justify-between border-b border-emerald-900/60 pb-3 mb-3">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              BRAND PILLAR 0{activeLetterIdx + 1} // {activeLetter.word}
            </span>

            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
              {activeLetter.metric}
            </span>
          </div>

          <p className="text-slate-200 text-base sm:text-lg font-display font-semibold leading-relaxed">
            {activeLetter.description}
          </p>

          <div className="mt-4 pt-3 border-t border-emerald-900/40 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>SCROLL DOWN TO REVEAL FULL BRAND</span>
            <span className="text-cyan-400 font-bold">USAMA KHURSHEED STUDIO</span>
          </div>

        </div>

      </div>
    </div>
  );
};

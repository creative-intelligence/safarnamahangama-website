import React, { useState } from 'react';
import { Instagram, Play, X, Sparkles } from 'lucide-react';

interface FunReel {
  id: string;
  image: string;
  videoUrl: string;
  instagramUrl: string;
}

export const InstagramFeedSection: React.FC = () => {
  const [activeReel, setActiveReel] = useState<FunReel | null>(null);

  // All 29 Fun & Hangama video reels
  const funReels: FunReel[] = Array.from({ length: 29 }, (_, i) => ({
    id: `fun-${i + 1}`,
    image: `/images/fun/fun_thumb_${i + 1}.jpg`,
    videoUrl: `/videos/fun/fun_reel_${i + 1}.mp4`,
    instagramUrl: 'https://www.instagram.com/safarnamahangama/'
  }));

  const row1 = funReels.slice(0, 15);
  const row2 = funReels.slice(15);

  return (
    <section id="instagram" className="py-16 sm:py-24 bg-[#04070d] text-white relative w-full max-w-full overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[500px] bg-[#E5983A]/12 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 px-2">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/80 border border-[#E5983A]/40 text-[#E5983A] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 shadow-lg shadow-amber-950/60">
            <Sparkles className="w-3.5 h-3.5 text-[#E5983A] flex-shrink-0 animate-pulse" />
            <span className="whitespace-nowrap">FUN & HANGAMA ATMOSPHERE</span>
          </div>
          <h2 className="text-[22px] xs:text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-center">
            Fun & Hangama with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5983A] via-amber-400 to-[#D97706]">Safar Nama</span>
          </h2>
          <p className="mt-2.5 text-slate-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed text-center">
            Real vibes, music, dance & unforgettable memories from our live trips. Hover to pause & click any reel to watch in full screen!
          </p>
        </div>

      </div>

      {/* Option 2: Dual Infinity Marquee Scroll Showcase */}
      <div className="relative w-full overflow-hidden py-4 space-y-6 sm:space-y-8">
        
        {/* Left & Right Edge Fading Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-[#04070d] via-[#04070d]/70 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-[#04070d] via-[#04070d]/70 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Leftward Infinite Marquee */}
        <div className="flex overflow-hidden group">
          <div className="animate-marquee-left flex gap-4 sm:gap-6 pr-4 sm:pr-6 group-hover:[animation-play-state:paused]">
            {[...row1, ...row1].map((reel, idx) => (
              <div
                key={`row1-${reel.id}-${idx}`}
                onClick={() => setActiveReel(reel)}
                className="w-40 sm:w-56 md:w-64 h-60 sm:h-80 md:h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden relative cursor-pointer flex-shrink-0 group/card border border-amber-500/20 hover:border-[#E5983A] hover:shadow-[0_0_35px_rgba(229,152,58,0.45)] transition-all duration-300 bg-slate-900"
              >
                <img
                  src={reel.image}
                  alt="Fun Reel"
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 brightness-105"
                  onError={(e: any) => {
                    e.target.onerror = null;
                    e.target.src = '/images/destinations/hunza_attabad.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover/card:opacity-40 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 sm:w-14 h-11 sm:h-14 rounded-full bg-[#E5983A] text-slate-950 flex items-center justify-center shadow-2xl group-hover/card:scale-110 transition-transform">
                    <Play className="w-5 sm:w-6 h-5 sm:h-6 fill-slate-950 ml-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Infinite Marquee */}
        <div className="flex overflow-hidden group">
          <div className="animate-marquee-right flex gap-4 sm:gap-6 pr-4 sm:pr-6 group-hover:[animation-play-state:paused]">
            {[...row2, ...row2].map((reel, idx) => (
              <div
                key={`row2-${reel.id}-${idx}`}
                onClick={() => setActiveReel(reel)}
                className="w-40 sm:w-56 md:w-64 h-60 sm:h-80 md:h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden relative cursor-pointer flex-shrink-0 group/card border border-amber-500/20 hover:border-[#E5983A] hover:shadow-[0_0_35px_rgba(229,152,58,0.45)] transition-all duration-300 bg-slate-900"
              >
                <img
                  src={reel.image}
                  alt="Fun Reel"
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 brightness-105"
                  onError={(e: any) => {
                    e.target.onerror = null;
                    e.target.src = '/images/destinations/hunza_attabad.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover/card:opacity-40 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 sm:w-14 h-11 sm:h-14 rounded-full bg-[#E5983A] text-slate-950 flex items-center justify-center shadow-2xl group-hover/card:scale-110 transition-transform">
                    <Play className="w-5 sm:w-6 h-5 sm:h-6 fill-slate-950 ml-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Instagram Follow CTA */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <a
            href="https://www.instagram.com/safarnamahangama?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#E5983A] via-amber-500 to-[#D97706] hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm rounded-2xl shadow-xl shadow-amber-950/60 transition hover:scale-105 whitespace-nowrap"
          >
            <Instagram className="w-4.5 h-4.5 text-slate-950 flex-shrink-0" />
            <span className="whitespace-nowrap">Follow @safarnamahangama on Instagram</span>
          </a>
        </div>

        {/* Large Immersive Cinema Video Lightbox Modal */}
        {activeReel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/95 backdrop-blur-xl animate-in fade-in">
            <div className="relative max-w-3xl sm:max-w-4xl w-full h-[85vh] max-h-[880px] bg-[#04070d] border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col text-white">
              <button
                onClick={() => setActiveReel(null)}
                className="absolute top-4 right-4 z-30 p-3 bg-slate-950/90 text-white rounded-full border border-slate-700 hover:bg-slate-900 shadow-2xl transition hover:scale-110"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative flex-1 w-full bg-slate-950 overflow-hidden flex items-center justify-center">
                <video
                  src={activeReel.videoUrl}
                  controls
                  autoPlay
                  loop
                  playsInline
                  poster={activeReel.image}
                  className="w-full h-full object-contain max-h-full"
                />
              </div>

              <div className="p-4 sm:p-5 bg-[#04070d] border-t border-slate-800 flex items-center justify-between gap-3">
                <span className="text-xs sm:text-sm font-bold text-amber-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E5983A]" />
                  @safarnamahangama • Fun & Hangama Reel
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={activeReel.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 bg-gradient-to-r from-[#E5983A] via-amber-500 to-[#D97706] text-slate-950 font-black text-xs sm:text-sm rounded-xl flex items-center gap-1.5 hover:scale-105 transition shadow-lg"
                  >
                    <Instagram className="w-4 h-4" />
                    <span className="hidden sm:inline">Watch on Instagram</span>
                    <span className="sm:hidden">Instagram</span>
                  </a>
                  <button
                    onClick={() => setActiveReel(null)}
                    className="py-2.5 px-4 bg-slate-900 text-slate-300 font-bold text-xs sm:text-sm rounded-xl border border-slate-800 hover:bg-slate-800 transition"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};


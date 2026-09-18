import React, { useState, useEffect } from 'react';
import { Instagram, Play, X, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface FunReel {
  id: string;
  image: string;
  videoUrl: string;
  instagramUrl: string;
}

export const InstagramFeedSection: React.FC = () => {
  const [activeReel, setActiveReel] = useState<FunReel | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // All 30 Fun & Hangama video reels
  const funReels: FunReel[] = Array.from({ length: 30 }, (_, i) => ({
    id: `fun-${i + 1}`,
    image: `/images/fun/fun_thumb_${i + 1}.jpg`,
    videoUrl: `/videos/fun/fun_reel_${i + 1}.mp4`,
    instagramUrl: 'https://www.instagram.com/safarnamahangama/'
  }));

  const row1 = funReels.slice(0, 15);
  const row2 = funReels.slice(15);

  const activeIndex = activeReel ? funReels.findIndex((r) => r.id === activeReel.id) : -1;

  const handlePrevModalReel = () => {
    if (activeIndex !== -1) {
      const prevIdx = (activeIndex - 1 + funReels.length) % funReels.length;
      setActiveReel(funReels[prevIdx]);
    }
  };

  const handleNextModalReel = () => {
    if (activeIndex !== -1) {
      const nextIdx = (activeIndex + 1) % funReels.length;
      setActiveReel(funReels[nextIdx]);
    }
  };

  // Keyboard navigation inside video modal
  useEffect(() => {
    if (!activeReel) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        const prevIdx = (activeIndex - 1 + funReels.length) % funReels.length;
        setActiveReel(funReels[prevIdx]);
      } else if (e.key === 'ArrowRight') {
        const nextIdx = (activeIndex + 1) % funReels.length;
        setActiveReel(funReels[nextIdx]);
      } else if (e.key === 'Escape') {
        setActiveReel(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeReel, activeIndex, funReels]);

  // Touch swipe support inside video modal
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNextModalReel();
      } else {
        handlePrevModalReel();
      }
    }
    setTouchStartX(null);
  };

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
            Real vibes, music, dance & unforgettable energy captured live on our journeys across Pakistan.
          </p>
        </div>

      </div>

      {/* Option 2: Dual Infinity Marquee Scroll Showcase */}
      <div className="relative w-full overflow-hidden py-4 space-y-6 sm:space-y-8">
        
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

        {/* Large Immersive Cinema Video Lightbox Modal with Slider Navigation */}
        {activeReel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/95 backdrop-blur-xl animate-in fade-in">
            
            {/* Modal Box */}
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative max-w-sm sm:max-w-3xl md:max-w-4xl w-full h-[75vh] sm:h-[82vh] md:h-[85vh] max-h-[680px] sm:max-h-[880px] bg-[#04070d] border border-slate-700/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col text-white select-none my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveReel(null)}
                className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-40 p-2 sm:p-3 bg-slate-950/90 text-white rounded-full border border-slate-700 hover:bg-amber-500 hover:text-slate-950 shadow-2xl transition hover:scale-110"
                title="Close"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Prev Navigation Arrow */}
              <button
                onClick={handlePrevModalReel}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-4 rounded-full bg-slate-950/75 sm:bg-slate-950/80 hover:bg-[#E5983A] text-white hover:text-slate-950 border border-slate-700/80 hover:border-[#E5983A] shadow-2xl transition hover:scale-110 flex items-center justify-center"
                title="Previous Reel (Left Arrow)"
              >
                <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
              </button>

              {/* Next Navigation Arrow */}
              <button
                onClick={handleNextModalReel}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-4 rounded-full bg-slate-950/75 sm:bg-slate-950/80 hover:bg-[#E5983A] text-white hover:text-slate-950 border border-slate-700/80 hover:border-[#E5983A] shadow-2xl transition hover:scale-110 flex items-center justify-center"
                title="Next Reel (Right Arrow)"
              >
                <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
              </button>

              {/* Video Player */}
              <div className="relative flex-1 w-full bg-slate-950 overflow-hidden flex items-center justify-center">
                <video
                  key={activeReel.id}
                  src={activeReel.videoUrl}
                  controls
                  autoPlay
                  loop
                  playsInline
                  poster={activeReel.image}
                  className="w-full h-full object-contain max-h-full"
                />
              </div>

              {/* Modal Footer Controls & Info */}
              <div className="p-3 sm:p-5 bg-[#04070d] border-t border-slate-800 flex items-center justify-between gap-2 sm:gap-3">
                <span className="text-[11px] sm:text-sm font-bold text-amber-400 flex items-center gap-1.5 sm:gap-2 truncate">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E5983A] flex-shrink-0" />
                  <span>Reel {activeIndex + 1} of {funReels.length}</span>
                  <span className="hidden xs:inline">• @safarnamahangama</span>
                </span>
                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                  <a
                    href={activeReel.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 sm:py-2.5 px-3 sm:px-4 bg-gradient-to-r from-[#E5983A] via-amber-500 to-[#D97706] text-slate-950 font-black text-[11px] sm:text-sm rounded-xl flex items-center gap-1.5 hover:scale-105 transition shadow-lg whitespace-nowrap"
                  >
                    <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="hidden xs:inline">Instagram</span>
                  </a>
                  <button
                    onClick={() => setActiveReel(null)}
                    className="py-1.5 sm:py-2.5 px-3 sm:px-4 bg-slate-900 text-slate-300 font-bold text-[11px] sm:text-sm rounded-xl border border-slate-800 hover:bg-slate-800 transition"
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



import React, { useState } from 'react';
import { Instagram, Play, X, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface FunReel {
  id: string;
  image: string;
  videoUrl: string;
  instagramUrl: string;
}

export const InstagramFeedSection: React.FC = () => {
  const [activeReel, setActiveReel] = useState<FunReel | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const funReels: FunReel[] = [
    { id: 'fun-1', image: '/images/fun/fun_thumb_1.jpg', videoUrl: '/videos/fun/fun_reel_1.mp4', instagramUrl: 'https://www.instagram.com/safarnamahangama/' },
    { id: 'fun-2', image: '/images/fun/fun_thumb_2.jpg', videoUrl: '/videos/fun/fun_reel_2.mp4', instagramUrl: 'https://www.instagram.com/safarnamahangama/' },
    { id: 'fun-3', image: '/images/fun/fun_thumb_3.jpg', videoUrl: '/videos/fun/fun_reel_3.mp4', instagramUrl: 'https://www.instagram.com/safarnamahangama/' },
    { id: 'fun-4', image: '/images/fun/fun_thumb_4.jpg', videoUrl: '/videos/fun/fun_reel_4.mp4', instagramUrl: 'https://www.instagram.com/safarnamahangama/' },
    { id: 'fun-5', image: '/images/fun/fun_thumb_5.jpg', videoUrl: '/videos/fun/fun_reel_5.mp4', instagramUrl: 'https://www.instagram.com/safarnamahangama/' },
    { id: 'fun-6', image: '/images/fun/fun_thumb_6.jpg', videoUrl: '/videos/fun/fun_reel_6.mp4', instagramUrl: 'https://www.instagram.com/safarnamahangama/' },
    { id: 'fun-7', image: '/images/fun/fun_thumb_7.jpg', videoUrl: '/videos/fun/fun_reel_7.mp4', instagramUrl: 'https://www.instagram.com/safarnamahangama/' },
    { id: 'fun-8', image: '/images/fun/fun_thumb_8.jpg', videoUrl: '/videos/fun/fun_reel_8.mp4', instagramUrl: 'https://www.instagram.com/safarnamahangama/' },
    { id: 'fun-9', image: '/images/fun/fun_thumb_9.jpg', videoUrl: '/videos/fun/fun_reel_9.mp4', instagramUrl: 'https://www.instagram.com/safarnamahangama/' },
    { id: 'fun-10', image: '/images/fun/fun_thumb_10.jpg', videoUrl: '/videos/fun/fun_reel_10.mp4', instagramUrl: 'https://www.instagram.com/safarnamahangama/' },
    { id: 'fun-11', image: '/images/fun/fun_thumb_11.jpg', videoUrl: '/videos/fun/fun_reel_11.mp4', instagramUrl: 'https://www.instagram.com/safarnamahangama/' },
    { id: 'fun-12', image: '/images/fun/fun_thumb_12.jpg', videoUrl: '/videos/fun/fun_reel_12.mp4', instagramUrl: 'https://www.instagram.com/safarnamahangama/' },
    { id: 'fun-13', image: '/images/fun/fun_thumb_13.jpg', videoUrl: '/videos/fun/fun_reel_13.mp4', instagramUrl: 'https://www.instagram.com/safarnamahangama/' },
    { id: 'fun-14', image: '/images/fun/fun_thumb_14.jpg', videoUrl: '/videos/fun/fun_reel_14.mp4', instagramUrl: 'https://www.instagram.com/safarnamahangama/' }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? funReels.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === funReels.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="instagram" className="py-16 sm:py-24 bg-[#04070d] text-white relative w-full max-w-full overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#E5983A]/15 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-[#E5983A]/40 text-[#E5983A] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 shadow-lg shadow-amber-950/60">
            <Sparkles className="w-3.5 h-3.5 text-[#E5983A] flex-shrink-0 animate-pulse" />
            <span className="whitespace-nowrap">OPTION 5: 3D STAGE SHOWREEL CAROUSEL</span>
          </div>
          <h2 className="text-[20px] xs:text-[24px] sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-center whitespace-nowrap">
            Fun & Hangama with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5983A] via-amber-400 to-[#D97706]">Safar Nama</span>
          </h2>
          <p className="mt-2.5 text-slate-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed px-1 text-center">
            3D perspective stage showreel! Swipe through or click any active reel to play in full-screen cinema view.
          </p>
        </div>

        {/* Option 5: 3D Stage Carousel */}
        <div className="relative max-w-5xl mx-auto py-8 flex items-center justify-center min-h-[420px] sm:min-h-[480px]">
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 z-30 p-3.5 rounded-full bg-slate-900/90 text-[#E5983A] border border-amber-500/40 hover:bg-[#E5983A] hover:text-slate-950 shadow-2xl transition hover:scale-110"
            title="Previous Reel"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 z-30 p-3.5 rounded-full bg-slate-900/90 text-[#E5983A] border border-amber-500/40 hover:bg-[#E5983A] hover:text-slate-950 shadow-2xl transition hover:scale-110"
            title="Next Reel"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* 3D Stage Cards Container */}
          <div className="relative w-full max-w-4xl flex items-center justify-center perspective-[1200px]">
            {funReels.map((reel, idx) => {
              const total = funReels.length;
              let diff = idx - currentIndex;
              if (diff < -Math.floor(total / 2)) diff += total;
              if (diff > Math.floor(total / 2)) diff -= total;

              // Display only 5 cards on stage around the current center
              if (Math.abs(diff) > 2) return null;

              const isCenter = diff === 0;
              const isNearLeft = diff === -1;
              const isNearRight = diff === 1;

              let positionClass = '';
              let styleObj: React.CSSProperties = {};

              if (isCenter) {
                styleObj = {
                  transform: 'translate3d(0, 0, 100px) scale(1.08)',
                  zIndex: 20,
                  opacity: 1
                };
              } else if (isNearLeft) {
                styleObj = {
                  transform: 'translate3d(-200px, 0, 0px) rotateY(18deg) scale(0.88)',
                  zIndex: 10,
                  opacity: 0.65
                };
              } else if (isNearRight) {
                styleObj = {
                  transform: 'translate3d(200px, 0, 0px) rotateY(-18deg) scale(0.88)',
                  zIndex: 10,
                  opacity: 0.65
                };
              } else if (diff === -2) {
                styleObj = {
                  transform: 'translate3d(-360px, 0, -100px) rotateY(32deg) scale(0.72)',
                  zIndex: 5,
                  opacity: 0.35
                };
              } else if (diff === 2) {
                styleObj = {
                  transform: 'translate3d(360px, 0, -100px) rotateY(-32deg) scale(0.72)',
                  zIndex: 5,
                  opacity: 0.35
                };
              }

              return (
                <div
                  key={reel.id}
                  onClick={() => {
                    if (isCenter) {
                      setActiveReel(reel);
                    } else {
                      setCurrentIndex(idx);
                    }
                  }}
                  style={styleObj}
                  className="absolute transition-all duration-500 ease-out cursor-pointer group"
                >
                  <div
                    className={`relative w-52 sm:w-64 md:w-72 h-80 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden bg-slate-900 border transition-all duration-300 ${
                      isCenter
                        ? 'border-[#E5983A] shadow-[0_0_45px_rgba(229,152,58,0.4)]'
                        : 'border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <img
                      src={reel.image}
                      alt="Fun & Hangama Reel"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-105"
                      onError={(e: any) => {
                        e.target.onerror = null;
                        e.target.src = '/images/destinations/hunza_attabad.jpg';
                      }}
                    />

                    {/* Play Core for Center Card */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors">
                      <div
                        className={`rounded-full bg-[#E5983A] text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform ${
                          isCenter ? 'w-14 h-14' : 'w-11 h-11'
                        }`}
                      >
                        <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {funReels.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? 'w-8 bg-[#E5983A] shadow-md shadow-amber-500/50'
                  : 'bg-slate-800 hover:bg-slate-700'
              }`}
            />
          ))}
        </div>

        {/* Instagram Follow CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.instagram.com/safarnamahangama?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E5983A] via-amber-500 to-[#D97706] hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm rounded-2xl shadow-xl shadow-amber-950/60 transition hover:scale-105 whitespace-nowrap"
          >
            <Instagram className="w-4 h-4 text-slate-950 flex-shrink-0" />
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

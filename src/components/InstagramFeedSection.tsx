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

  return (
    <section id="instagram" className="py-16 sm:py-24 bg-[#04070d] text-white relative w-full max-w-full overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/3 left-1/4 w-[550px] h-[550px] bg-[#E5983A]/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-1/4 w-[550px] h-[550px] bg-amber-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-[#E5983A]/40 text-[#E5983A] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 shadow-lg shadow-amber-950/60">
            <Sparkles className="w-3.5 h-3.5 text-[#E5983A] flex-shrink-0 animate-pulse" />
            <span className="whitespace-nowrap">OPTION 4: FLOATING CAPSULE CLOUD</span>
          </div>
          <h2 className="text-[20px] xs:text-[24px] sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-center whitespace-nowrap">
            Fun & Hangama with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5983A] via-amber-400 to-[#D97706]">Safar Nama</span>
          </h2>
          <p className="mt-2.5 text-slate-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed px-1 text-center">
            Floating story capsule cloud! Click any floating reel capsule to launch the full-screen cinema player.
          </p>
        </div>

        {/* Option 4: Floating Story Capsule Cloud */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 max-w-6xl mx-auto py-4">
          {funReels.map((reel, idx) => (
            <div
              key={reel.id}
              onClick={() => setActiveReel(reel)}
              className={`group relative cursor-pointer ${
                idx % 2 === 0 ? 'animate-float-slow' : 'animate-float-reverse'
              }`}
            >
              {/* Floating Vertical Pill Capsule */}
              <div className="relative w-40 sm:w-48 h-64 sm:h-80 rounded-full overflow-hidden p-1 bg-gradient-to-b from-[#E5983A]/60 via-amber-500/20 to-slate-900 border border-[#E5983A]/40 shadow-xl group-hover:border-[#E5983A] group-hover:shadow-[0_0_35px_rgba(229,152,58,0.45)] group-hover:scale-110 transition-all duration-300 ease-out">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-950">
                  <img
                    src={reel.image}
                    alt="Fun & Hangama Reel"
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out brightness-105"
                    onError={(e: any) => {
                      e.target.onerror = null;
                      e.target.src = '/images/destinations/hunza_attabad.jpg';
                    }}
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors">
                    <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#E5983A] text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950 ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow CTA */}
        <div className="mt-14 flex justify-center">
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

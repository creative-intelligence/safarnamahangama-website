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
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#E5983A]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-[#E5983A]/40 text-[#E5983A] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 shadow-lg shadow-amber-950/60">
            <Sparkles className="w-3.5 h-3.5 text-[#E5983A] flex-shrink-0 animate-pulse" />
            <span className="whitespace-nowrap">OPTION 1: CIRCULAR ORBIT PORTALS</span>
          </div>
          <h2 className="text-[20px] xs:text-[24px] sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-center whitespace-nowrap">
            Fun & Hangama with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5983A] via-amber-400 to-[#D97706]">Safar Nama</span>
          </h2>
          <p className="mt-2.5 text-slate-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed px-1 text-center">
            Raw group trip energy, bonfires, dance & fun atmosphere! Click any circle portal to play.
          </p>
        </div>

        {/* Circular Orbit Floating Portals Layout */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 max-w-6xl mx-auto py-4">
          {funReels.map((reel, idx) => (
            <div
              key={reel.id}
              onClick={() => setActiveReel(reel)}
              className="group relative cursor-pointer flex flex-col items-center"
            >
              {/* Glowing Circular Video Frame */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-tr from-[#E5983A] via-amber-400/50 to-transparent group-hover:from-amber-400 group-hover:to-[#E5983A] shadow-xl group-hover:shadow-[0_0_35px_rgba(229,152,58,0.45)] group-hover:scale-110 transition-all duration-300 ease-out">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-900 border-2 border-slate-950">
                  <img
                    src={reel.image}
                    alt="Fun & Hangama Reel"
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                    onError={(e: any) => {
                      e.target.onerror = null;
                      e.target.src = '/images/destinations/hunza_attabad.jpg';
                    }}
                  />
                  
                  {/* Subtle Dark Radial Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent group-hover:from-slate-950/40 transition-colors" />

                  {/* Center Floating Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E5983A] text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950 ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

        {/* In-App Inline Playable Video Modal */}
        {activeReel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-in fade-in">
            <div className="relative max-w-md w-full bg-[#04070d] border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setActiveReel(null)}
                className="absolute top-4 right-4 z-20 p-2.5 bg-slate-950/90 text-white rounded-full border border-slate-700 hover:bg-slate-900 shadow-xl"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-[490px] w-full bg-slate-950 overflow-hidden">
                <video
                  src={activeReel.videoUrl}
                  controls
                  autoPlay
                  loop
                  playsInline
                  poster={activeReel.image}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 bg-[#04070d] border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400">@safarnamahangama • Fun & Vibes</span>
                <button
                  onClick={() => setActiveReel(null)}
                  className="py-2 px-4 bg-[#E5983A] text-slate-950 font-black text-xs rounded-xl hover:scale-105 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

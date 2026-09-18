import React, { useState } from 'react';
import { Play, CheckCircle2, Heart, Instagram, ExternalLink, X } from 'lucide-react';

interface CustomerVideoReview {
  id: string;
  videoThumbnail: string;
  videoUrl: string;
  instagramUrl: string;
}

export const TestimonialsSection: React.FC = () => {
  const [activeReviewVideo, setActiveReviewVideo] = useState<CustomerVideoReview | null>(null);

  const videoReviews: CustomerVideoReview[] = [
    {
      id: 'video-1',
      videoThumbnail: '/images/happyclients/happy_client_thumb_1.jpg',
      videoUrl: '/videos/happyclients/happy_client_1.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/'
    },
    {
      id: 'video-2',
      videoThumbnail: '/images/happyclients/happy_client_thumb_2.jpg',
      videoUrl: '/videos/happyclients/happy_client_2.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/'
    },
    {
      id: 'video-3',
      videoThumbnail: '/images/happyclients/happy_client_thumb_3.jpg',
      videoUrl: '/videos/happyclients/happy_client_3.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/'
    },
    {
      id: 'video-4',
      videoThumbnail: '/images/happyclients/happy_client_thumb_4.jpg',
      videoUrl: '/videos/happyclients/happy_client_4.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/'
    },
    {
      id: 'video-5',
      videoThumbnail: '/images/happyclients/happy_client_thumb_5.jpg',
      videoUrl: '/videos/happyclients/happy_client_5.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/'
    },
    {
      id: 'video-6',
      videoThumbnail: '/images/happyclients/happy_client_thumb_6.jpg',
      videoUrl: '/videos/happyclients/happy_client_6.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/'
    },
    {
      id: 'video-7',
      videoThumbnail: '/images/happyclients/happy_client_thumb_7.jpg',
      videoUrl: '/videos/happyclients/happy_client_7.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/'
    }
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#04070d] text-white relative border-t border-slate-800/60 w-full max-w-full overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E5983A]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-[#E5983A]/40 text-[#E5983A] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 shadow-lg shadow-amber-950/50">
            <Heart className="w-3.5 h-3.5 fill-[#E5983A] flex-shrink-0 animate-pulse" />
            <span className="whitespace-nowrap">Loved by 5,000+ Explorers</span>
          </div>
          <h2 className="text-[20px] xs:text-[24px] sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-center whitespace-nowrap">
            Happy Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5983A] via-amber-400 to-[#D97706]">Video Reviews</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-slate-400 text-xs sm:text-sm px-2">
            Watch real in-person video reviews directly from @safarnamahangama happy travelers!
          </p>
        </div>

        {/* Video Reviews Grid - Larger Cards & Clear Bright Visuals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {videoReviews.map((rev) => (
            <div
              key={rev.id}
              onClick={() => setActiveReviewVideo(rev)}
              className="group relative rounded-3xl overflow-hidden border border-slate-800/80 bg-[#080d1a] hover:border-[#E5983A] transition-all duration-300 cursor-pointer flex flex-col hover:shadow-[0_16px_40px_rgba(229,152,58,0.28)] hover:-translate-y-2"
            >
              {/* Main Reel Frame - Bright & Crystal Clear Snapshot */}
              <div className="relative h-[380px] sm:h-[420px] lg:h-[440px] w-full overflow-hidden bg-slate-900">
                <img
                  src={rev.videoThumbnail}
                  alt="Happy Client Video Review"
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500 ease-out brightness-105 contrast-105"
                  onError={(e: any) => {
                    e.target.onerror = null;
                    e.target.src = '/images/destinations/hunza_attabad.jpg';
                  }}
                />



                {/* Bottom Right Floating Play CTA Button */}
                <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
                  <div className="px-3.5 py-1.5 rounded-full bg-[#E5983A] hover:bg-amber-400 text-slate-950 text-xs font-black flex items-center gap-1.5 shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-slate-950 ml-0.5" />
                    <span>Watch</span>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Playable Video Lightbox Modal */}
        {activeReviewVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-in fade-in">
            <div className="relative max-w-md w-full bg-[#04070d] border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl text-white">
              <button
                onClick={() => setActiveReviewVideo(null)}
                className="absolute top-4 right-4 z-20 p-2.5 bg-slate-950/90 text-white rounded-full border border-slate-700 hover:bg-slate-900 shadow-xl transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-[490px] w-full bg-slate-950 overflow-hidden">
                <video
                  src={activeReviewVideo.videoUrl}
                  controls
                  autoPlay
                  loop
                  playsInline
                  poster={activeReviewVideo.videoThumbnail}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 bg-[#04070d] border-t border-slate-800 flex items-center justify-between gap-3">
                <span className="text-xs font-bold text-slate-300">Safarnama Client Review</span>

                <div className="flex items-center gap-2">
                  <a
                    href={activeReviewVideo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3.5 bg-gradient-to-r from-[#E5983A] via-amber-500 to-[#D97706] text-slate-950 font-black text-xs rounded-xl flex items-center gap-1.5 hover:scale-[1.02] transition shadow-lg"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => setActiveReviewVideo(null)}
                    className="py-2 px-3.5 bg-slate-900 text-slate-300 font-bold text-xs rounded-xl border border-slate-800 hover:bg-slate-800 transition"
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

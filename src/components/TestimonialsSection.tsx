import React, { useState } from 'react';
import { Star, Play, CheckCircle2, Heart, Instagram, ExternalLink, X } from 'lucide-react';

interface CustomerVideoReview {
  id: string;
  videoThumbnail: string;
  videoUrl: string;
  instagramUrl: string;
  rating: number;
}

export const TestimonialsSection: React.FC = () => {
  const [activeReviewVideo, setActiveReviewVideo] = useState<CustomerVideoReview | null>(null);

  const videoReviews: CustomerVideoReview[] = [
    {
      id: 'video-1',
      videoThumbnail: '/images/happyclients/happy_client_thumb_1.jpg',
      videoUrl: '/videos/happyclients/happy_client_1.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      rating: 5
    },
    {
      id: 'video-2',
      videoThumbnail: '/images/happyclients/happy_client_thumb_2.jpg',
      videoUrl: '/videos/happyclients/happy_client_2.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      rating: 5
    },
    {
      id: 'video-3',
      videoThumbnail: '/images/happyclients/happy_client_thumb_3.jpg',
      videoUrl: '/videos/happyclients/happy_client_3.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      rating: 5
    },
    {
      id: 'video-4',
      videoThumbnail: '/images/happyclients/happy_client_thumb_4.jpg',
      videoUrl: '/videos/happyclients/happy_client_4.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      rating: 5
    },
    {
      id: 'video-5',
      videoThumbnail: '/images/happyclients/happy_client_thumb_5.jpg',
      videoUrl: '/videos/happyclients/happy_client_5.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      rating: 5
    },
    {
      id: 'video-6',
      videoThumbnail: '/images/happyclients/happy_client_thumb_6.jpg',
      videoUrl: '/videos/happyclients/happy_client_6.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      rating: 5
    },
    {
      id: 'video-7',
      videoThumbnail: '/images/happyclients/happy_client_thumb_7.jpg',
      videoUrl: '/videos/happyclients/happy_client_7.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      rating: 5
    },
    {
      id: 'video-8',
      videoThumbnail: '/images/happyclients/happy_client_thumb_8.jpg',
      videoUrl: '/videos/happyclients/happy_client_8.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      rating: 5
    },
    {
      id: 'video-9',
      videoThumbnail: '/images/happyclients/happy_client_thumb_9.jpg',
      videoUrl: '/videos/happyclients/happy_client_9.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      rating: 5
    },
    {
      id: 'video-10',
      videoThumbnail: '/images/happyclients/happy_client_thumb_10.jpg',
      videoUrl: '/videos/happyclients/happy_client_10.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#04070d] text-white relative border-t border-slate-800/60 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-amber-950/80 border border-[#E5983A]/40 text-[#E5983A] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3 max-w-full">
            <Heart className="w-3.5 h-3.5 fill-[#E5983A] flex-shrink-0" />
            <span className="whitespace-nowrap">Loved by 5,000+ Explorers</span>
          </div>
          <h2 className="text-[19px] xs:text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-center whitespace-nowrap">
            Happy Clients <span className="text-[#E5983A]">Video Reviews</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-slate-400 text-xs sm:text-sm px-2">
            Watch real video reviews directly from @safarnamahangama happy clients & group squads!
          </p>
        </div>

        {/* Video Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {videoReviews.map((rev) => (
            <div
              key={rev.id}
              onClick={() => setActiveReviewVideo(rev)}
              className="glass-panel-card rounded-2xl overflow-hidden border border-slate-800 hover:border-[#E5983A]/60 transition duration-300 cursor-pointer flex flex-col group bg-[#04070d] shadow-lg"
            >
              {/* Video Reel Thumbnail Container */}
              <div className="relative h-72 overflow-hidden bg-slate-900">
                <img
                  src={rev.videoThumbnail}
                  alt="Happy Client Video Review"
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                  onError={(e: any) => {
                    e.target.onerror = null;
                    e.target.src = '/images/destinations/hunza_attabad.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04070d] via-[#04070d]/20 to-transparent" />

                {/* Verified Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-slate-950/90 backdrop-blur-md text-emerald-400 text-[10px] font-bold rounded-full border border-emerald-500/40 flex items-center gap-1 shadow-md">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Verified Client
                  </span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-[#E5983A] text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Only 5 Stars Below */}
              <div className="py-3 px-4 bg-[#04070d] border-t border-slate-800/80 flex items-center justify-center">
                <div className="flex items-center gap-1 text-[#E5983A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E5983A]" />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Playable Video Reel Modal */}
        {activeReviewVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-in fade-in">
            <div className="relative max-w-md w-full bg-[#04070d] border border-slate-700 rounded-3xl overflow-hidden shadow-2xl text-white">
              <button
                onClick={() => setActiveReviewVideo(null)}
                className="absolute top-4 right-4 z-20 p-3 bg-slate-950/90 text-white rounded-full border border-slate-700 hover:bg-slate-950 shadow-xl"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-[480px] w-full bg-slate-950 overflow-hidden">
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
                <div className="flex items-center gap-1 text-[#E5983A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E5983A]" />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activeReviewVideo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 bg-gradient-to-r from-[#E5983A] via-amber-500 to-[#D97706] text-slate-950 font-black text-xs rounded-xl flex items-center gap-1.5 hover:scale-[1.02] transition"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => setActiveReviewVideo(null)}
                    className="py-2 px-3 bg-slate-900 text-slate-300 font-bold text-xs rounded-xl border border-slate-800"
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

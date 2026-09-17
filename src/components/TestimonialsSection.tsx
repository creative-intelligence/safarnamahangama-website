import React, { useState } from 'react';
import { Star, Play, CheckCircle2, Heart, Instagram, ExternalLink, X, MessageSquareQuote, Video } from 'lucide-react';

interface CustomerVideoReview {
  id: string;
  author: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  tourTaken: string;
  reviewSnippet: string;
  videoThumbnail: string;
  instagramEmbedId: string;
  instagramUrl: string;
  duration: string;
  verified: boolean;
}

export const TestimonialsSection: React.FC = () => {
  const [activeReviewVideo, setActiveReviewVideo] = useState<CustomerVideoReview | null>(null);

  const videoReviews: CustomerVideoReview[] = [
    {
      id: 'video-1',
      author: 'Hamza & Family',
      location: 'Lahore',
      avatar: '/images/safarnama/safarnama_29.jpg',
      rating: 5,
      date: 'August 2026',
      tourTaken: '5-Day Hunza Family Expedition',
      reviewSnippet: 'Safarnama Hangama arranged the most memorable family trip to Karimabad and Attabad Lake! Everything from luxury transport to family resorts was top-notch.',
      videoThumbnail: '/images/safarnama/safarnama_29.jpg',
      instagramEmbedId: 'C_mN0uNog2O',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      duration: '0:45',
      verified: true
    },
    {
      id: 'video-2',
      author: 'Dr. Zeeshan & Corporate Team',
      location: 'Islamabad',
      avatar: '/images/safarnama/safarnama_30.jpg',
      rating: 5,
      date: 'July 2026',
      tourTaken: '7-Day Skardu & Deosai Safari',
      reviewSnippet: 'Our 24-member corporate team spent 7 days exploring Deosai Plains, Cold Desert, and Shangrila with 4x4 Prado Jeeps. 100% recommended!',
      videoThumbnail: '/images/safarnama/safarnama_30.jpg',
      instagramEmbedId: 'C-xY4M0M1zR',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      duration: '1:12',
      verified: true
    },
    {
      id: 'video-3',
      author: 'Fatima Noor & Squad',
      location: 'Karachi',
      avatar: '/images/safarnama/safarnama_31.jpg',
      rating: 5,
      date: 'September 2026',
      tourTaken: '3-Day Swat & Kalam Retreat',
      reviewSnippet: 'As female travelers joining a group tour, safety was our top priority. Safarnama Escort team treated us like family. Kalam and Malam Jabba were incredible!',
      videoThumbnail: '/images/safarnama/safarnama_31.jpg',
      instagramEmbedId: 'C7rP_L1s_0A',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      duration: '0:58',
      verified: true
    },
    {
      id: 'video-4',
      author: 'Usman Chaudhry & Group',
      location: 'Rawalpindi',
      avatar: '/images/safarnama/safarnama_32.jpg',
      rating: 5,
      date: 'June 2026',
      tourTaken: 'Fairy Meadows & Nanga Parbat Trek',
      reviewSnippet: 'The trek up to Beyal Camp and Nanga Parbat base with Safar Nama was the best adventure ever! Unforgettable campfire nights under the Milky Way.',
      videoThumbnail: '/images/safarnama/safarnama_32.jpg',
      instagramEmbedId: 'C6pZ_90x_8M',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      duration: '1:05',
      verified: true
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-[#04070d] text-white relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-[#E5983A]/40 text-[#E5983A] text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-[#E5983A]" />
            Loved by 5,000+ Explorers
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Happy Clients <span className="text-[#E5983A]">Instagram Video Reviews</span>
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-sm">
            Watch real Instagram video reels and reviews shared by happy clients, families, and group squads who traveled with @safarnamahangama!
          </p>
        </div>

        {/* Video Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoReviews.map((rev) => (
            <div
              key={rev.id}
              onClick={() => setActiveReviewVideo(rev)}
              className="glass-panel-card rounded-3xl overflow-hidden border border-slate-800 hover:border-[#E5983A]/50 transition duration-300 cursor-pointer flex flex-col group bg-[#04070d]"
            >
              {/* Video Reel Thumbnail Container */}
              <div className="relative h-72 overflow-hidden bg-slate-900">
                <img
                  src={rev.videoThumbnail}
                  alt={rev.author}
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                  onError={(e: any) => {
                    e.target.onerror = null;
                    e.target.src = '/images/destinations/hunza_attabad.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04070d] via-[#04070d]/30 to-transparent" />

                {/* Verified Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-slate-950/90 backdrop-blur-md text-emerald-400 text-[10px] font-bold rounded-full border border-emerald-500/40 flex items-center gap-1 shadow-md">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Verified Client
                  </span>
                </div>

                {/* Instagram Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 bg-slate-950/90 text-[#E5983A] text-[10px] font-black rounded-md border border-[#E5983A]/40 flex items-center gap-1">
                    <Instagram className="w-3 h-3" />
                    Reel
                  </span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-[#E5983A] text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Review Info Card */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-[#04070d]">
                <div>
                  <div className="flex items-center gap-1 text-[#E5983A] mb-2">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E5983A]" />
                    ))}
                  </div>

                  <p className="text-xs text-slate-300 italic line-clamp-3 leading-relaxed">
                    "{rev.reviewSnippet}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-black text-white">{rev.author}</h4>
                    <span className="text-[10px] text-slate-400 font-medium">{rev.location} • {rev.date}</span>
                  </div>

                  <span className="p-2 bg-slate-900 text-[#E5983A] rounded-full border border-slate-800 flex items-center justify-center">
                    <Video className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Embedded Instagram Reel Modal */}
        {activeReviewVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-in fade-in">
            <div className="relative max-w-lg w-full bg-[#04070d] border border-slate-700 rounded-3xl overflow-hidden shadow-2xl text-white">
              <button
                onClick={() => setActiveReviewVideo(null)}
                className="absolute top-4 right-4 z-20 p-3 bg-slate-950/90 text-white rounded-full border border-slate-700 hover:bg-slate-950 shadow-xl"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-4 bg-slate-900/80 border-b border-slate-800 flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#E5983A]" />
                <span className="text-xs font-bold text-white">@safarnamahangama Client Review Reel</span>
              </div>

              {/* Embedded Native Instagram Reel Player */}
              <div className="w-full h-[520px] bg-slate-950 relative overflow-hidden">
                <iframe
                  src={`https://www.instagram.com/p/${activeReviewVideo.instagramEmbedId}/embed`}
                  className="w-full h-full border-0"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  title={`${activeReviewVideo.author} Instagram Review`}
                />
              </div>

              <div className="p-5 bg-[#04070d] border-t border-slate-800">
                <div className="flex items-center gap-1 text-[#E5983A] mb-1">
                  {[...Array(activeReviewVideo.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#E5983A]" />
                  ))}
                  <span className="text-xs font-extrabold text-white ml-2">{activeReviewVideo.tourTaken}</span>
                </div>
                <h3 className="text-sm font-black text-white">{activeReviewVideo.author} ({activeReviewVideo.location})</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed italic">
                  "{activeReviewVideo.reviewSnippet}"
                </p>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <a
                    href={activeReviewVideo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-gradient-to-r from-[#E5983A] via-amber-500 to-[#D97706] text-slate-950 font-black text-xs rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Watch on Instagram Page</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setActiveReviewVideo(null)}
                    className="py-2.5 px-4 bg-slate-900 text-slate-300 font-bold text-xs rounded-xl border border-slate-800"
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

import React, { useState } from 'react';
import { Star, Play, CheckCircle2, Heart, Instagram, ExternalLink, X, Video } from 'lucide-react';

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
  videoUrl: string;
  instagramUrl: string;
  duration: string;
  verified: boolean;
}

export const TestimonialsSection: React.FC = () => {
  const [activeReviewVideo, setActiveReviewVideo] = useState<CustomerVideoReview | null>(null);

  const videoReviews: CustomerVideoReview[] = [
    {
      id: 'video-1',
      author: 'Hamza & Family Squad',
      location: 'Lahore',
      avatar: '/images/safarnama/safarnama_1.jpg',
      rating: 5,
      date: 'August 2026',
      tourTaken: '5-Day Hunza Family Expedition',
      reviewSnippet: 'Safarnama Hangama arranged the most memorable family trip to Karimabad & Attabad Lake! Transport, resorts, and tour escort were incredible.',
      videoThumbnail: '/images/safarnama/safarnama_1.jpg',
      videoUrl: '/videos/happyclients/happy_client_1.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      duration: '0:45',
      verified: true
    },
    {
      id: 'video-2',
      author: 'Dr. Zeeshan & Corporate Team',
      location: 'Islamabad',
      avatar: '/images/safarnama/safarnama_2.jpg',
      rating: 5,
      date: 'July 2026',
      tourTaken: '7-Day Skardu & Deosai Safari',
      reviewSnippet: 'Our corporate group spent 7 days exploring Deosai Plains, Cold Desert, and Shangrila with 4x4 Prado Jeeps. 100% recommended!',
      videoThumbnail: '/images/safarnama/safarnama_2.jpg',
      videoUrl: '/videos/happyclients/happy_client_2.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      duration: '1:12',
      verified: true
    },
    {
      id: 'video-3',
      author: 'Fatima Noor & Friends Squad',
      location: 'Karachi',
      avatar: '/images/safarnama/safarnama_3.jpg',
      rating: 5,
      date: 'September 2026',
      tourTaken: '3-Day Swat & Kalam Retreat',
      reviewSnippet: 'As female travelers joining a group tour, safety was our top priority. Safarnama team treated us like family. Kalam was incredible!',
      videoThumbnail: '/images/safarnama/safarnama_3.jpg',
      videoUrl: '/videos/happyclients/happy_client_3.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      duration: '0:58',
      verified: true
    },
    {
      id: 'video-4',
      author: 'Usman Chaudhry & Group',
      location: 'Rawalpindi',
      avatar: '/images/safarnama/safarnama_4.jpg',
      rating: 5,
      date: 'June 2026',
      tourTaken: 'Fairy Meadows & Nanga Parbat Trek',
      reviewSnippet: 'The trek up to Beyal Camp and Nanga Parbat base with Safar Nama was the best adventure ever! Unforgettable campfire nights under stars.',
      videoThumbnail: '/images/safarnama/safarnama_4.jpg',
      videoUrl: '/videos/happyclients/happy_client_4.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      duration: '1:05',
      verified: true
    },
    {
      id: 'video-5',
      author: 'Malam Jabba Snow Explorers',
      location: 'Peshawar',
      avatar: '/images/safarnama/safarnama_5.jpg',
      rating: 5,
      date: 'January 2026',
      tourTaken: '3-Day Winter Snow Swat Tour',
      reviewSnippet: 'Chairlift, ski slopes, and mountain resort stays! Safarnama team made our winter getaway super smooth and fun.',
      videoThumbnail: '/images/safarnama/safarnama_5.jpg',
      videoUrl: '/videos/happyclients/happy_client_5.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      duration: '0:50',
      verified: true
    },
    {
      id: 'video-6',
      author: 'Shogran Siri Paye Group',
      location: 'Faisalabad',
      avatar: '/images/safarnama/safarnama_6.jpg',
      rating: 5,
      date: 'May 2026',
      tourTaken: '3-Day Shogran & Siri Paye Tour',
      reviewSnippet: 'Lush green meadows and 4x4 Jeep rides up to Siri Paye Lake! Safar Nama Hangama is truly the best tour operator.',
      videoThumbnail: '/images/safarnama/safarnama_6.jpg',
      videoUrl: '/videos/happyclients/happy_client_6.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      duration: '1:15',
      verified: true
    },
    {
      id: 'video-7',
      author: 'Naran Roof Top Jeep Explorers',
      location: 'Multan',
      avatar: '/images/safarnama/safarnama_7.jpg',
      rating: 5,
      date: 'August 2026',
      tourTaken: '5-Day Naran Saiful Malook Safari',
      reviewSnippet: 'Amazing Jeep safari to Lake Saiful Malook, Babusar Top, and Lulusar Lake with high-energy group vibes.',
      videoThumbnail: '/images/safarnama/safarnama_7.jpg',
      videoUrl: '/videos/happyclients/happy_client_7.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      duration: '1:02',
      verified: true
    },
    {
      id: 'video-8',
      author: 'Arang Kel Neelum Valley Travelers',
      location: 'Sialkot',
      avatar: '/images/safarnama/safarnama_8.jpg',
      rating: 5,
      date: 'July 2026',
      tourTaken: '4-Day Neelum Valley Kashmir Tour',
      reviewSnippet: 'Cable car ride, green pine forests, and riverside glamping in Kashmir! 10/10 service from Safar Nama team.',
      videoThumbnail: '/images/safarnama/safarnama_8.jpg',
      videoUrl: '/videos/happyclients/happy_client_8.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      duration: '0:48',
      verified: true
    },
    {
      id: 'video-9',
      author: 'Bilal & Hunza Group Squad',
      location: 'Gujranwala',
      avatar: '/images/safarnama/safarnama_9.jpg',
      rating: 5,
      date: 'August 2026',
      tourTaken: '5-Day Hunza & Attabad Lake Tour',
      reviewSnippet: 'Speed boating on Attabad Lake and exploring Passu Cones with awesome group mates. Unbeatable trip experience!',
      videoThumbnail: '/images/safarnama/safarnama_9.jpg',
      videoUrl: '/videos/happyclients/happy_client_9.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      duration: '0:55',
      verified: true
    },
    {
      id: 'video-10',
      author: 'Ayesha & Family Group',
      location: 'Lahore',
      avatar: '/images/safarnama/safarnama_1.jpg',
      rating: 5,
      date: 'August 2026',
      tourTaken: '6-Day Skardu Cold Desert Expedition',
      reviewSnippet: ' ATV Quad biking across Katpana Cold Desert and sunset at Shangrila Resort. Highly professional staff and comfortable luxury coaster.',
      videoThumbnail: '/images/safarnama/safarnama_1.jpg',
      videoUrl: '/videos/happyclients/happy_client_10.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      duration: '1:10',
      verified: true
    },
    {
      id: 'video-11',
      author: 'Saad & Swat Explorer Squad',
      location: 'Islamabad',
      avatar: '/images/safarnama/safarnama_2.jpg',
      rating: 5,
      date: 'September 2026',
      tourTaken: '3-Day Swat Valley Group Tour',
      reviewSnippet: 'Bonfire dance party and river rafting in Kalam! The energy of Safarnama team is next level. Loved every minute of it!',
      videoThumbnail: '/images/safarnama/safarnama_2.jpg',
      videoUrl: '/videos/happyclients/happy_client_11.mp4',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/',
      duration: '0:42',
      verified: true
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
            Watch real video reviews directly downloaded from @safarnamahangama happy clients, families, and group squads!
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

                {/* Duration Tag */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 bg-slate-950/90 text-[#E5983A] text-[10px] font-black rounded-md border border-[#E5983A]/40 flex items-center gap-1">
                    <Video className="w-3 h-3" />
                    {rev.duration}
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
                    <Play className="w-3.5 h-3.5 fill-[#E5983A]" />
                  </span>
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
                    <span>Watch on Instagram</span>
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

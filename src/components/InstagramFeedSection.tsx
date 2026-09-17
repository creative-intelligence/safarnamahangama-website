import React, { useState } from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Play, Eye, Flame, X, Volume2, Sparkles } from 'lucide-react';

interface InstaReel {
  id: string;
  title: string;
  image: string;
  instagramEmbedId: string;
  views: string;
  likes: string;
  comments: number;
  tag: string;
  instagramUrl: string;
}

export const InstagramFeedSection: React.FC = () => {
  const [activeReel, setActiveReel] = useState<InstaReel | null>(null);

  const instaPosts: InstaReel[] = [
    {
      id: 'post-1',
      title: 'Attabad Lake emerald waters boating with our 24-member Hunza group! 🚤✨',
      image: '/images/safarnama/safarnama_21.jpg',
      instagramEmbedId: 'C_mN0uNog2O',
      views: '345K Views',
      likes: '28.4k',
      comments: 1240,
      tag: '🔥 Top Viral Reel • Hunza Group',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/'
    },
    {
      id: 'post-2',
      title: 'Stargazing & campfire musical night at Katpana Cold Desert Skardu 🌌🏕️',
      image: '/images/safarnama/safarnama_22.jpg',
      instagramEmbedId: 'C-xY4M0M1zR',
      views: '280K Views',
      likes: '22.1k',
      comments: 890,
      tag: '⭐ 280K Views • Skardu Safari',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/'
    },
    {
      id: 'post-3',
      title: 'Riverside acoustic music & bonfire with our group squad in Kalam Swat 🎸🔥',
      image: '/images/safarnama/safarnama_23.jpg',
      instagramEmbedId: 'C7rP_L1s_0A',
      views: '210K Views',
      likes: '18.6k',
      comments: 650,
      tag: '🎵 Group Vibes • Swat Valley',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/'
    },
    {
      id: 'post-4',
      title: 'Group cable car ride & meadow trek up to Arang Kel Neelum Kashmir 🚠🌲',
      image: '/images/safarnama/safarnama_24.jpg',
      instagramEmbedId: 'C6pZ_90x_8M',
      views: '195K Views',
      likes: '16.9k',
      comments: 540,
      tag: '🌿 Group Retreat • Kashmir',
      instagramUrl: 'https://www.instagram.com/safarnamahangama/'
    }
  ];

  return (
    <section id="instagram" className="py-24 bg-[#04070d] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-[#E5983A]/40 text-[#E5983A] text-xs font-bold uppercase tracking-wider mb-3">
              <Instagram className="w-3.5 h-3.5 text-[#E5983A]" />
              Official Instagram Feed • @safarnamahangama
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Live from Our <span className="text-[#E5983A]">Instagram Page</span>
            </h2>
            <p className="mt-2 text-slate-400 text-xs sm:text-sm max-w-lg">
              Watch recent tour reels and group trip updates directly here without leaving the site!
            </p>
          </div>

          <a
            href="https://www.instagram.com/safarnamahangama?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#E5983A] via-amber-500 to-[#D97706] hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs rounded-2xl shadow-xl shadow-amber-950 transition hover:scale-105 self-start md:self-auto"
          >
            <Instagram className="w-4 h-4 text-slate-950" />
            <span>Follow @safarnamahangama</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
          </a>
        </div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instaPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setActiveReel(post)}
              className="glass-panel-card rounded-2xl overflow-hidden group border border-slate-800 hover:border-[#E5983A]/50 transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden bg-slate-900">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-[center_25%] group-hover:scale-110 transition-transform duration-500"
                  onError={(e: any) => {
                    e.target.onerror = null;
                    e.target.src = '/images/destinations/hunza_attabad.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04070d] via-[#04070d]/20 to-transparent" />

                {/* Top Tags */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-slate-950/90 backdrop-blur-md text-[#E5983A] text-[10px] font-extrabold rounded-full border border-[#E5983A]/40 flex items-center gap-1">
                    <Instagram className="w-3 h-3" />
                    @safarnamahangama
                  </span>
                  <span className="px-2 py-0.5 bg-rose-500 text-white text-[9px] font-black rounded-full flex items-center gap-1">
                    <Flame className="w-3 h-3" />
                    Play Reel
                  </span>
                </div>

                {/* Play Icon & View Count Badge Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-[#E5983A] text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
                  </div>
                  <span className="mt-2 px-3 py-1 bg-slate-950/90 text-amber-300 text-[10px] font-black rounded-full border border-amber-500/30 flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {post.views}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-[#04070d]">
                <p className="text-xs font-semibold text-slate-200 line-clamp-2 leading-relaxed">
                  {post.title}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-1 text-[#E5983A] font-extrabold">
                    <Heart className="w-3.5 h-3.5 fill-[#E5983A]" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 text-[11px] font-bold">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{post.comments} comments</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* In-App Inline Playable Video Modal */}
        {activeReel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-in fade-in">
            <div className="relative max-w-md w-full bg-[#04070d] border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setActiveReel(null)}
                className="absolute top-4 right-4 z-20 p-3 bg-slate-950/90 text-white rounded-full border border-slate-700 hover:bg-slate-950 shadow-xl"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-[520px] w-full bg-slate-950 overflow-hidden">
                <iframe
                  src={`https://www.instagram.com/p/${activeReel.instagramEmbedId}/embed`}
                  className="w-full h-full border-0"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  title={activeReel.title}
                />
              </div>

              <div className="p-5 bg-[#04070d] border-t border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-[#E5983A] text-slate-950 text-xs font-black rounded-full flex items-center gap-1">
                    <Instagram className="w-3.5 h-3.5" />
                    @safarnamahangama
                  </span>
                  <span className="text-xs text-amber-300 font-bold">{activeReel.views}</span>
                </div>
                <h3 className="text-sm font-bold text-white">{activeReel.title}</h3>
                
                <div className="mt-4 flex items-center justify-between gap-3">
                  <a
                    href={activeReel.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs rounded-xl border border-slate-800 flex items-center justify-center gap-2 transition"
                  >
                    <span>Open on Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setActiveReel(null)}
                    className="py-2.5 px-4 bg-[#E5983A] text-slate-950 font-black text-xs rounded-xl transition hover:scale-105"
                  >
                    Close Video
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


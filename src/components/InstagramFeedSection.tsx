import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Play, Eye, Flame } from 'lucide-react';

export const InstagramFeedSection: React.FC = () => {
  const instaPosts = [
    {
      id: 'post-1',
      title: 'Attabad Lake emerald waters boating with our 24-member Hunza group! 🚤✨',
      image: '/images/safarnama/safarnama_21.jpg',
      views: '345K Views',
      likes: '28.4k',
      comments: 1240,
      tag: '🔥 Top Viral Reel • Hunza Group',
      url: 'https://www.instagram.com/safarnamahangama/'
    },
    {
      id: 'post-2',
      title: 'Stargazing & campfire musical night at Katpana Cold Desert Skardu 🌌🏕️',
      image: '/images/safarnama/safarnama_22.jpg',
      views: '280K Views',
      likes: '22.1k',
      comments: 890,
      tag: '⭐ 280K Views • Skardu Safari',
      url: 'https://www.instagram.com/safarnamahangama/'
    },
    {
      id: 'post-3',
      title: 'Riverside acoustic music & bonfire with our group squad in Kalam Swat 🎸🔥',
      image: '/images/safarnama/safarnama_23.jpg',
      views: '210K Views',
      likes: '18.6k',
      comments: 650,
      tag: '🎵 Group Vibes • Swat Valley',
      url: 'https://www.instagram.com/safarnamahangama/'
    },
    {
      id: 'post-4',
      title: 'Group cable car ride & meadow trek up to Arang Kel Neelum Kashmir 🚠🌲',
      image: '/images/safarnama/safarnama_24.jpg',
      views: '195K Views',
      likes: '16.9k',
      comments: 540,
      tag: '🌿 Group Retreat • Kashmir',
      url: 'https://www.instagram.com/safarnamahangama/'
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
              Explore recent tour reels, traveler stories, and group trip updates straight from our official Instagram feed (@safarnamahangama).
            </p>
          </div>

          <a
            href="https://www.instagram.com/safarnamahangama?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#E5983A] via-amber-500 to-[#D97706] hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs rounded-2xl shadow-xl shadow-amber-950 transition hover:scale-105 self-start md:self-auto"
          >
            <Instagram className="w-4 h-4 text-slate-950" />
            <span>Follow @safarnamahangama on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
          </a>
        </div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instaPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel-card rounded-2xl overflow-hidden group border border-slate-800 hover:border-[#E5983A]/50 transition-all duration-300 flex flex-col"
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
                    Reel
                  </span>
                </div>

                {/* Play Icon & View Count Badge Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-[#E5983A] text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
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
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};


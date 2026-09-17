import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Play, Sparkles, Award } from 'lucide-react';

export const InstagramFeedSection: React.FC = () => {
  const instaPosts = [
    {
      id: 'post-1',
      title: 'Attabad Lake emerald waters boating with Safar Nama Hangama group! 🚤✨',
      image: 'https://images.unsplash.com/photo-1586351012965-861624544334?auto=format&fit=crop&w=800&q=85',
      likes: '4.8k',
      comments: 240,
      tag: 'Hunza Valley',
      url: 'https://www.instagram.com/safarnamahangama/'
    },
    {
      id: 'post-2',
      title: 'Stargazing & campfire vibes under a million stars at Deosai Plains 🌌🏕️',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=85',
      likes: '6.2k',
      comments: 380,
      tag: 'Skardu Deosai',
      url: 'https://www.instagram.com/safarnamahangama/'
    },
    {
      id: 'post-3',
      title: 'Riverside acoustic music & bonfire with our group in Kalam Swat 🎸🔥',
      image: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=800&q=85',
      likes: '4.1k',
      comments: 195,
      tag: 'Kalam Swat',
      url: 'https://www.instagram.com/safarnamahangama/'
    },
    {
      id: 'post-4',
      title: 'Cable car ride up to the fairy hilltop village of Arang Kel Kashmir 🚠',
      image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=85',
      likes: '7.5k',
      comments: 510,
      tag: 'Neelum Kashmir',
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
              Explore recent tour reels, traveler stories, and trip updates straight from our official Instagram feed.
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
              <div className="relative h-72 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04070d] via-[#04070d]/20 to-transparent" />

                {/* Play Icon Badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-[#E5983A] text-slate-950 flex items-center justify-center shadow-2xl">
                    <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-slate-950/90 backdrop-blur-md text-[#E5983A] text-[10px] font-extrabold rounded-full border border-[#E5983A]/40 flex items-center gap-1">
                    <Instagram className="w-3 h-3" />
                    @safarnamahangama
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs font-medium text-slate-200 line-clamp-2 leading-relaxed">
                  {post.title}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-1 text-[#E5983A] font-bold">
                    <Heart className="w-3.5 h-3.5 fill-[#E5983A]" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
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

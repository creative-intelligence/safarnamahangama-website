import React from 'react';
import { REVIEWS_DATA } from '../data/reviewsData';
import { Star, Quote, CheckCircle2, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-amber-400" />
            Loved by 5,000+ Explorers
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Stories from Our <span className="text-emerald-400">Travelers</span>
          </h2>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm">
            Read real feedback from families, couples, and solo travelers who explored Northern Pakistan with Safar Nama Hangama.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="glass-panel-card p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Traveler
                  </span>
                </div>

                <Quote className="w-8 h-8 text-slate-700 mb-2 opacity-60" />
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "{rev.reviewText}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white">{rev.author}</h4>
                    <span className="text-[10px] text-slate-400">{rev.location} • {rev.date}</span>
                  </div>
                </div>

                <span className="text-[10px] text-amber-400 font-semibold bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                  {rev.tourTaken}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

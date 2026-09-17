import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Eye, Users, TrendingUp, DollarSign, Activity, Award, CheckCircle } from 'lucide-react';

export const PortfolioProof: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Finance', 'Tech / AI', 'Luxury', 'History'];

  const caseStudies = [
    {
      niche: 'Finance & Wealth',
      title: 'Faceless Finance & Investing Channel Scaled to $12,400/Mo',
      views: '1.45M Views',
      subscribers: '+14.2K Subscribers',
      monthlyRevenue: '$12,400 / mo',
      ctr: '12.4% Avg CTR',
      badge: 'Finance',
      chartColor: '#10B981'
    },
    {
      niche: 'Tech / AI',
      title: 'AI & Tech Software Review Channel Hitting 50,000 Subscribers',
      views: '3.82M Views',
      subscribers: "+52.0K Subscribers",
      monthlyRevenue: '$18,900 / mo',
      ctr: '10.8% Avg CTR',
      badge: 'Tech / AI',
      chartColor: '#06B6D4'
    },
    {
      niche: 'Luxury & Business',
      title: 'Luxury Lifestyle & Money Channel Monetized in 45 Days',
      views: '890K Views',
      subscribers: "+8.9K Subscribers",
      monthlyRevenue: '$8,150 / mo',
      ctr: '11.2% Avg CTR',
      badge: 'Luxury',
      chartColor: '#14B8A6'
    },
    {
      niche: 'History & Crime',
      title: 'Documentary & Deep Dive History Channel Hitting 2.1M Views',
      views: '2.14M Views',
      subscribers: "+28.5K Subscribers",
      monthlyRevenue: '$14,600 / mo',
      ctr: '13.1% Avg CTR',
      badge: 'History',
      chartColor: '#3B82F6'
    }
  ];

  const filteredItems = selectedFilter === 'All'
    ? caseStudies
    : caseStudies.filter((item) => item.badge.includes(selectedFilter));

  return (
    <section id="portfolio" className="py-24 bg-[#030C07] relative border-t border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Custom Channel Growth Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Proven Track <br />
            <span className="gradient-text">Record</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Explore real channel growth benchmarks, view metrics, and revenue scaled by Usama Khursheed & production team.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                selectedFilter === filter
                  ? 'bg-emerald-500 text-black shadow-glow-emerald'
                  : 'bg-[#081610] border border-emerald-900/50 text-slate-400 hover:text-white hover:border-emerald-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="glass-card-hover rounded-3xl p-6 border border-emerald-900/50 flex flex-col justify-between space-y-6"
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                  {item.badge}
                </span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Monetized in 90 Days
                </span>
              </div>

              {/* Title & Revenue Highlight */}
              <div className="space-y-2 text-left">
                <h3 className="text-xl font-bold text-white font-display leading-snug">
                  {item.title}
                </h3>
                <div className="text-2xl font-black text-emerald-400 font-display">
                  {item.monthlyRevenue} <span className="text-xs text-slate-400 font-normal">Est. Monthly AdSense</span>
                </div>
              </div>

              {/* Custom SVG Growth Chart Graphic */}
              <div className="p-4 rounded-2xl bg-[#030C07] border border-emerald-900/60 space-y-2 text-left">
                <div className="flex justify-between text-xs text-slate-400 font-semibold">
                  <span>90-Day Growth Metric</span>
                  <span className="text-emerald-300 font-bold">{item.ctr}</span>
                </div>

                <div className="h-24 w-full relative overflow-hidden flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
                    <path
                      d="M 0 70 Q 50 60, 100 50 T 200 25 T 300 5 L 300 80 L 0 80 Z"
                      fill={item.chartColor}
                      fillOpacity="0.15"
                    />
                    <path
                      d="M 0 70 Q 50 60, 100 50 T 200 25 T 300 5"
                      fill="none"
                      stroke={item.chartColor}
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </div>

              {/* Metrics Footer Bar */}
              <div className="grid grid-cols-2 gap-4 pt-2 text-xs border-t border-emerald-900/40 text-left">
                <div className="flex items-center gap-2 text-slate-300">
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>Views: <strong className="text-white">{item.views}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>Growth: <strong className="text-emerald-400">{item.subscribers}</strong></span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

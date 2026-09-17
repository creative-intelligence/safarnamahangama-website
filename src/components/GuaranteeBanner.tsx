import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ShieldCheck, Zap, RefreshCw, Award, Sparkles } from 'lucide-react';

export const GuaranteeBanner: React.FC = () => {
  return (
    <section className="py-20 bg-[#030C07] border-y border-emerald-900/50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#081610] via-[#0D2017] to-[#081610] border border-emerald-500/30 shadow-2xl space-y-8">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left border-b border-emerald-900/50 pb-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>TubeScale Risk-Free Commitment</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
                Channel Monetized in 90 Days. <br />
                <span className="gradient-text">Or We Manage & Produce 100% Free Until You Do.</span>
              </h2>
            </div>

            <div className="flex-shrink-0">
              <div className="px-6 py-4 rounded-2xl bg-[#030C07] border border-emerald-500/40 text-center shadow-glow-emerald">
                <span className="text-3xl font-black text-emerald-400 font-display block">90 DAYS</span>
                <span className="text-xs text-slate-300 font-bold uppercase">Performance SLA</span>
              </div>
            </div>
          </div>

          {/* Grid Bullets */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-5 rounded-2xl bg-[#030C07] border border-emerald-900/60 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Zap className="w-4 h-4" />
                <span>1,000+ Subscribers SLA</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We push your channel to YouTube Partner Program eligibility within 90 days.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#030C07] border border-emerald-900/60 space-y-2">
              <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
                <RefreshCw className="w-4 h-4" />
                <span>Unlimited Video Edits</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                If you need thumbnail or script adjustments, our team revises until you're thrilled.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#030C07] border border-emerald-900/60 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <Award className="w-4 h-4" />
                <span>100% Channel Ownership</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                You retain all rights, raw assets, and 100% of YouTube AdSense & sponsor payouts.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

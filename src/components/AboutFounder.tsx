import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ScrollReveal } from './ScrollReveal';
import { UserCheck, Eye, Tv, Video, Sparkles } from 'lucide-react';

export const AboutFounder: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#030C07] relative overflow-hidden border-t border-emerald-900/40">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <ScrollReveal animation="fade-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Agency Leadership & Vision</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={100}>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
                Building YouTube Channels <br />
                <span className="gradient-text">At Global Scale</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={200}>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
                {siteConfig.aboutFounder.bioParagraph1}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={300}>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
                {siteConfig.aboutFounder.bioParagraph2}
              </p>
            </ScrollReveal>

            {/* Founder Quote */}
            <ScrollReveal animation="glow-reveal" delay={400}>
              <div className="p-6 rounded-2xl bg-[#081610] border-l-4 border-emerald-400 text-white font-medium text-base italic shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors" />
                "{siteConfig.aboutFounder.quote}"
                <div className="text-xs font-bold text-emerald-400 not-italic mt-2 font-sans">
                  — The TubeScale Team
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <ScrollReveal animation="scale-up" delay={100}>
                <div className="p-6 rounded-2xl glass-card border border-emerald-500/30 text-center space-y-2 hover:border-emerald-400 transition-all duration-300 hover:scale-105 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-700/50 flex items-center justify-center mx-auto text-emerald-400">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-black text-white font-display">2.8B+</div>
                  <div className="text-xs text-slate-400 font-semibold font-sans">Total Views Generated</div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="scale-up" delay={200}>
                <div className="p-6 rounded-2xl glass-card border border-emerald-500/30 text-center space-y-2 hover:border-emerald-400 transition-all duration-300 hover:scale-105 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-teal-950 border border-teal-700/50 flex items-center justify-center mx-auto text-teal-400">
                    <Tv className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-black text-white font-display">200+</div>
                  <div className="text-xs text-slate-400 font-semibold font-sans">Channels Managed</div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="scale-up" delay={300}>
                <div className="p-6 rounded-2xl glass-card border border-emerald-500/30 text-center space-y-2 hover:border-emerald-400 transition-all duration-300 hover:scale-105 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-700/50 flex items-center justify-center mx-auto text-cyan-400">
                    <Video className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-black text-white font-display">12,000+</div>
                  <div className="text-xs text-slate-400 font-semibold font-sans">Videos Produced</div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="scale-up" delay={400}>
                <div className="p-6 rounded-2xl glass-card border border-emerald-500/30 text-center space-y-2 hover:border-emerald-400 transition-all duration-300 hover:scale-105 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-700/50 flex items-center justify-center mx-auto text-emerald-400">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-black text-white font-display">98.7%</div>
                  <div className="text-xs text-slate-400 font-semibold font-sans">Monetization Rate</div>
                </div>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

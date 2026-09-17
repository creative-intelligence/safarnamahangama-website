import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ScrollReveal } from './ScrollReveal';
import { Compass, PenTool, Video, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Compass className="w-6 h-6 text-emerald-400 group-hover:rotate-12 transition-transform" />;
      case 1: return <PenTool className="w-6 h-6 text-teal-400 group-hover:-rotate-12 transition-transform" />;
      case 2: return <Video className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />;
      case 3: return <Rocket className="w-6 h-6 text-emerald-400 group-hover:-translate-y-1 transition-transform" />;
      default: return <Rocket className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-[#030C07] relative border-y border-emerald-900/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal animation="fade-down">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              4-Step Production Framework
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              How We Build & Scale Your <br />
              <span className="gradient-text">YouTube Cashflow Asset</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-sans">
              From niche selection to 90-day monetization. Here is our step-by-step workflow.
            </p>
          </div>
        </ScrollReveal>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative text-left">
          {siteConfig.process.map((item, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 150}>
              <div
                className="p-7 rounded-3xl bg-[#081610] glass-card border border-emerald-900/50 hover:border-emerald-400/80 transition-all duration-500 relative flex flex-col justify-between group hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] h-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-emerald-600/30 group-hover:text-emerald-400/80 transition-colors font-display">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#030C07] border border-emerald-800/50 flex items-center justify-center shadow-md group-hover:border-emerald-500 transition-colors">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6">
                  <div className="w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

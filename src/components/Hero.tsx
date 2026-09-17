import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { LuxuryExecutiveCanvas } from './LuxuryExecutiveCanvas';
import { HeroOrbitalEngine } from './HeroOrbitalEngine';
import { ScrollReveal } from './ScrollReveal';
import { ArrowRight, ShieldCheck, Eye, Tv, Video, TrendingUp, Star, CheckCircle2, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye': return <Eye className="w-5 h-5 text-emerald-400" />;
      case 'Tv': return <Tv className="w-5 h-5 text-teal-400" />;
      case 'Video': return <Video className="w-5 h-5 text-cyan-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      default: return <Star className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#030C07]">
      {/* Luxury Executive Ambient Organic Wave Canvas */}
      <LuxuryExecutiveCanvas />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Badge */}
            <ScrollReveal animation="fade-up" delay={150}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold backdrop-blur-md shadow-glow-emerald">
                <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>Premier YouTube Growth Agency</span>
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal animation="fade-up" delay={300}>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-display">
                Build Your YouTube <br />
                <span className="gradient-text">Empire On Autopilot.</span> <br />
                Monetized in {siteConfig.guarantee.days} Days.
              </h1>
            </ScrollReveal>

            {/* Subheading */}
            <ScrollReveal animation="fade-up" delay={450}>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed font-sans">
                {siteConfig.description}
              </p>
            </ScrollReveal>

            {/* Feature Bullets */}
            <ScrollReveal animation="fade-up" delay={550}>
              <div className="space-y-3 pt-2 font-sans">
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Done-for-you production: Scripts, Voiceovers, 4K Editing & Thumbnails</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Dedicated done-for-you production team & channel strategists</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-emerald-300 font-semibold">{siteConfig.guarantee.text}</span>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Action Buttons */}
            <ScrollReveal animation="scale-up" delay={650}>
              <div className="flex flex-wrap items-center gap-4 pt-4 font-sans">
                <a
                  href="#pricing"
                  className="flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-black font-extrabold text-base hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 shadow-glow-emerald hover:scale-105 active:scale-95 border border-emerald-300/40"
                >
                  <span>Choose Your Plan</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <button
                  onClick={onOpenContact}
                  className="flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#081610] border border-emerald-800/60 text-slate-200 font-bold text-base hover:bg-emerald-950/40 hover:text-white hover:border-emerald-400 transition-all duration-300 backdrop-blur-md"
                >
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>Book Strategy Call</span>
                </button>
              </div>
            </ScrollReveal>

            {/* Rating Badges */}
            <ScrollReveal animation="fade-up" delay={780}>
              <div className="pt-6 flex items-center gap-4 border-t border-emerald-900/40">
                <div className="flex -space-x-2">
                  {['U', 'M', 'K', 'S', 'A'].map((initial, idx) => (
                    <div
                      key={idx}
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-600 to-teal-900 border-2 border-[#030C07] flex items-center justify-center text-white text-xs font-extrabold shadow-md"
                    >
                      {initial}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-white font-bold text-xs ml-1 font-sans">4.9/5.0</span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium font-sans">Trusted by 200+ YouTube Creator Clients</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column 3D Orbital Service Ecosystem Engine */}
          <div className="lg:col-span-5 relative z-10">
            <ScrollReveal animation="glow-reveal" delay={350}>
              <HeroOrbitalEngine />
            </ScrollReveal>
          </div>

        </div>

        {/* Hero Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-6 border-t border-emerald-900/40 relative z-10 font-sans">
          {siteConfig.stats.map((stat, idx) => (
            <ScrollReveal key={idx} animation="scale-up" delay={850 + idx * 100}>
              <div className="glass-card-hover p-5 rounded-2xl flex items-center gap-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-[#081610] border border-emerald-800/50 flex items-center justify-center flex-shrink-0">
                  {getStatIcon(stat.icon)}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-semibold mt-1 font-sans">
                    {stat.label}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

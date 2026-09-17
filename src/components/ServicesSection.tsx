import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ScrollReveal } from './ScrollReveal';
import { FileText, Film, Image, Mic, LayoutDashboard, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />;
      case 'Film': return <Film className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" />;
      case 'Image': return <Image className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />;
      case 'Mic': return <Mic className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />;
      case 'LayoutDashboard': return <LayoutDashboard className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" />;
      default: return <Film className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#030C07] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
              <span>Usama Khursheed Production Engine</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Full-Stack YouTube Production, <br />
              <span className="gradient-text">Engineered For Growth</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-sans">
              A complete hands-free content ecosystem managed by specialists — zero freelancer headaches.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, idx) => (
            <ScrollReveal key={service.id} animation="scale-up" delay={idx * 120}>
              <div
                className="p-8 rounded-3xl bg-[#081610] glass-card border border-emerald-900/60 hover:border-emerald-400/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] flex flex-col justify-between group text-left relative overflow-hidden h-full"
              >
                {/* Subtle top accent line animation */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#030C07] border border-emerald-800/60 flex items-center justify-center shadow-md group-hover:border-emerald-500 transition-colors">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-[#030C07] border border-emerald-800/50 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                      Done For You
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white font-display group-hover:text-emerald-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed pt-1 font-sans">
                      {service.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-2.5 pt-4 border-t border-emerald-900/40">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={onOpenContact}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#030C07] border border-emerald-800/60 text-slate-200 text-xs font-bold hover:bg-emerald-500 hover:text-black hover:border-emerald-400 transition-all duration-300 shadow-sm group/btn"
                  >
                    <span>Get Started with {service.title.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

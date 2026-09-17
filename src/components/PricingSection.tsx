import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { ScrollReveal } from './ScrollReveal';
import { Check, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onOpenContact: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenContact }) => {
  const [isQuarterly, setIsQuarterly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-[#030C07] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              Transparent Investment Plans
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Invest in a Done-For-You <br />
              <span className="gradient-text">YouTube Cashflow Asset</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-sans">
              No hidden setup fees. No long-term contracts. Backed by TubeScale's 90-day guarantee.
            </p>

            {/* Billing Toggle Switch */}
            <div className="pt-4 flex items-center justify-center gap-4">
              <span className={`text-sm font-bold ${!isQuarterly ? 'text-white' : 'text-slate-400'} font-sans`}>
                Monthly Billing
              </span>

              <button
                onClick={() => setIsQuarterly(!isQuarterly)}
                className="w-14 h-8 rounded-full bg-[#081610] border border-emerald-700 p-1 flex items-center transition-colors relative shadow-inner"
              >
                <div
                  className={`w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-md transform transition-transform duration-300 ${
                    isQuarterly ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>

              <span className={`text-sm font-bold flex items-center gap-1.5 ${isQuarterly ? 'text-white' : 'text-slate-400'} font-sans`}>
                <span>Quarterly Plan</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] uppercase font-bold animate-pulse">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch text-left">
          {siteConfig.pricing.map((plan, idx) => {
            const currentPrice = isQuarterly ? plan.priceQuarterly : plan.priceMonthly;

            return (
              <ScrollReveal key={idx} animation="scale-up" delay={idx * 150}>
                <div
                  className={`p-8 rounded-3xl glass-card border transition-all duration-500 flex flex-col justify-between relative bg-[#081610] h-full hover:-translate-y-2 ${
                    plan.popular
                      ? 'border-emerald-400 shadow-[0_0_50px_rgba(16,185,129,0.3)] bg-gradient-to-b from-[#081610] via-[#0D2017] to-[#081610] lg:-translate-y-2'
                      : 'border-emerald-900/50 hover:border-emerald-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-black text-xs font-extrabold uppercase tracking-wider shadow-glow-emerald flex items-center gap-1.5 animate-pulse">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Most Popular Choice</span>
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Plan Name & Tag */}
                    <div>
                      <h3 className="text-2xl font-bold text-white font-display">{plan.name}</h3>
                      <p className="text-xs text-slate-400 mt-1 font-sans">{plan.description}</p>
                    </div>

                    {/* Price Banner */}
                    <div className="pt-2 border-t border-emerald-900/40">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl sm:text-5xl font-black text-white tracking-tight font-display">
                          ${currentPrice}
                        </span>
                        <span className="text-xs font-semibold text-slate-400 uppercase font-sans">
                          / {plan.period}
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 mt-2 text-[11px] font-bold text-emerald-400 font-sans">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{plan.guaranteeNote}</span>
                      </div>
                    </div>

                    {/* Feature Checklist */}
                    <ul className="space-y-3 pt-4 border-t border-emerald-900/40">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-xs text-slate-300 font-sans">
                          <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center flex-shrink-0 mt-0.5 text-emerald-400">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={onOpenContact}
                      className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-extrabold text-sm transition-all duration-300 group/btn ${
                        plan.popular
                          ? 'bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-black shadow-glow-emerald hover:scale-105 active:scale-95'
                          : 'bg-[#030C07] border border-emerald-800 text-slate-200 hover:bg-emerald-500 hover:text-black hover:border-emerald-400'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

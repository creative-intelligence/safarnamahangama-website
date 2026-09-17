import React, { useState } from 'react';
import { Calculator, Sparkles, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenContact: () => void;
}

interface NicheOption {
  name: string;
  rpm: number;
  description: string;
}

const NICHES: NicheOption[] = [
  { name: 'Finance & Wealth', rpm: 22, description: 'High-CPM ($18 - $30 RPM)' },
  { name: 'Tech & AI Software', rpm: 16, description: 'High-CPM ($14 - $20 RPM)' },
  { name: 'Luxury & Real Estate', rpm: 14, description: 'Medium-High CPM ($12 - $18 RPM)' },
  { name: 'Crime & History', rpm: 10, description: 'Medium CPM ($8 - $14 RPM)' },
  { name: 'Gaming & Entertainment', rpm: 6, description: 'Standard CPM ($4 - $8 RPM)' },
];

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenContact }) => {
  const [views, setViews] = useState<number>(300000);
  const [selectedNiche, setSelectedNiche] = useState<NicheOption>(NICHES[0]);

  // Calculations
  const monthlyAdsense = Math.round((views / 1000) * selectedNiche.rpm);
  const estimatedAffiliateSponsors = Math.round(monthlyAdsense * 0.45);
  const totalMonthlyIncome = monthlyAdsense + estimatedAffiliateSponsors;
  const yearlyPotential = totalMonthlyIncome * 12;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <section id="calculator" className="py-24 bg-[#030C07] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive ROI Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Calculate Your Channel's <br />
            <span className="gradient-text">Monthly Earning Potential</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-sans">
            See how much monthly revenue a faceless YouTube channel in your target niche can produce.
          </p>
        </div>

        {/* Calculator Widget Card */}
        <div className="max-w-4xl mx-auto glass-card rounded-3xl border border-emerald-500/30 p-6 sm:p-10 shadow-2xl bg-[#081610]">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Controls Input */}
            <div className="md:col-span-7 space-y-8 text-left">
              
              {/* Niche Selector */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-200 flex items-center justify-between font-display">
                  <span>1. Select Channel Niche:</span>
                  <span className="text-xs text-emerald-400 font-semibold font-sans">Est. RPM: ${selectedNiche.rpm}/1K views</span>
                </label>

                <div className="grid grid-cols-1 gap-2.5">
                  {NICHES.map((niche) => (
                    <button
                      key={niche.name}
                      onClick={() => setSelectedNiche(niche)}
                      className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all duration-200 ${
                        selectedNiche.name === niche.name
                          ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-glow-emerald'
                          : 'bg-[#030C07] border-emerald-900/50 text-slate-300 hover:border-emerald-700'
                      }`}
                    >
                      <span className="text-sm font-bold font-sans">{niche.name}</span>
                      <span className="text-xs text-slate-400 font-sans">{niche.description}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Views Slider */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-200 font-display">
                    2. Targeted Monthly Views:
                  </label>
                  <span className="text-lg font-black text-emerald-300 px-3 py-1 rounded-lg bg-[#030C07] border border-emerald-800 font-display">
                    {formatNumber(views)} views
                  </span>
                </div>

                <input
                  type="range"
                  min={50000}
                  max={2000000}
                  step={25000}
                  value={views}
                  onChange={(e) => setViews(Number(e.target.value))}
                  className="w-full h-3 bg-[#030C07] rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />

                <div className="flex justify-between text-[11px] text-slate-400 font-medium font-sans">
                  <span>50,000 views</span>
                  <span>500,000 views</span>
                  <span>2,000,000+ views</span>
                </div>
              </div>

            </div>

            {/* Revenue Output Card */}
            <div className="md:col-span-5 bg-gradient-to-br from-[#081610] to-[#030C07] p-6 sm:p-8 rounded-2xl border border-emerald-500/30 text-center space-y-6 shadow-glow-emerald">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Estimated Monthly Earnings</span>
              </div>

              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight gradient-text font-display">
                  {formatCurrency(totalMonthlyIncome)}
                </div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider font-sans">
                  Est. Total Monthly Income
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-emerald-900/60 text-left text-xs font-sans">
                <div className="flex justify-between text-slate-300">
                  <span>AdSense Ad Revenue:</span>
                  <span className="font-bold text-white">{formatCurrency(monthlyAdsense)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Affiliate & Sponsors:</span>
                  <span className="font-bold text-white">{formatCurrency(estimatedAffiliateSponsors)}</span>
                </div>
                <div className="flex justify-between text-emerald-400 font-bold pt-2 border-t border-emerald-900/40">
                  <span>Annual Growth Potential:</span>
                  <span>{formatCurrency(yearlyPotential)}/yr</span>
                </div>
              </div>

              <button
                onClick={onOpenContact}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-black font-extrabold text-sm shadow-glow-emerald hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Launch Channel Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

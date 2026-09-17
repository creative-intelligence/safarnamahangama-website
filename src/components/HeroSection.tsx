import React, { useState } from 'react';
import { Mountain, Search, Sparkles, ShieldCheck, Users, Star, MapPin, ArrowRight, Play, Compass, Award, HeartHandshake } from 'lucide-react';

interface HeroSectionProps {
  onSearch: (query: string, region: string) => void;
  onOpenCustomBuilder: () => void;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  onOpenCustomBuilder,
  onOpenBooking
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery, selectedRegion);
    const element = document.getElementById('tours');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickChips = [
    { label: 'Hunza & Passu', region: 'hunza' },
    { label: 'Skardu & Deosai', region: 'skardu' },
    { label: 'Swat & Kalam', region: 'swat' },
    { label: 'Fairy Meadows', region: 'fairy-meadows' },
    { label: 'Neelum Kashmir', region: 'kashmir' },
  ];

  return (
    <section className="relative min-h-[95vh] pt-36 pb-24 flex items-center justify-center overflow-hidden bg-[#04070d]">
      {/* Enhanced Authentic Background Image with Layered Vignette Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Safar Nama Hangama Travelers Pointing at Snow Peaks"
          className="w-full h-full object-cover object-[center_18%] filter brightness-[0.75] contrast-[1.08] saturate-[1.1] scale-[1.02] transition-transform duration-10000"
        />
        {/* Layered Gradient Overlays for Elegant Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#04070d] via-[#04070d]/60 to-[#04070d]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04070d]/90 via-[#04070d]/30 to-[#04070d]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04070d]/75 via-transparent to-[#04070d]" />
      </div>

      {/* Dynamic Glowing Aurora Orbs matching logo color #E5983A */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E5983A]/15 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4">
        
        {/* Shimmer Badge matching Official Logo */}
        <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#04070d]/90 border border-[#E5983A]/50 backdrop-blur-xl mb-6 shadow-2xl shadow-amber-950/80 animate-pulse-subtle">
          <span className="flex h-2.5 w-2.5 rounded-full bg-[#E5983A] flex-shrink-0 animate-ping" />
          <Award className="w-4 h-4 text-[#E5983A] flex-shrink-0" />
          <span className="text-xs font-black tracking-wider text-white uppercase whitespace-nowrap">
            #1 Rated Pakistan Travel Operator • @safarnamahangama
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] max-w-4xl mx-auto drop-shadow-2xl font-sans">
          Safar, Stories & <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-white via-[#E5983A] to-amber-400 bg-clip-text text-transparent">
            Unforgettable Hangama
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow">
          Join Pakistan’s top-rated travel club for group tours, family getaways, and customized luxury expeditions across Hunza, Skardu, Swat, and Kashmir.
        </p>

        {/* Interactive Tour Search Box */}
        <div className="mt-10 max-w-3xl mx-auto">
          <form
            onSubmit={handleSearchSubmit}
            className="p-3 bg-slate-900/95 border border-[#E5983A]/40 rounded-2xl sm:rounded-full backdrop-blur-2xl shadow-2xl glow-amber flex flex-col sm:flex-row items-center gap-2"
          >
            {/* Search Input */}
            <div className="flex items-center gap-2 flex-1 w-full px-4 py-2.5 bg-slate-950/80 rounded-xl sm:rounded-full border border-slate-800">
              <Search className="w-5 h-5 text-[#E5983A] flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Where to? (e.g. Hunza, Skardu, Kalam, Deosai...)"
                className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none font-medium"
              />
            </div>

            {/* Region Dropdown */}
            <div className="w-full sm:w-48 px-4 py-2.5 bg-slate-950/80 rounded-xl sm:rounded-full border border-slate-800 flex items-center">
              <MapPin className="w-4 h-4 text-[#E5983A] mr-2 flex-shrink-0" />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full bg-transparent text-xs font-bold text-slate-200 focus:outline-none cursor-pointer"
              >
                <option value="all" className="bg-slate-900 text-white">All Destinations</option>
                <option value="hunza" className="bg-slate-900 text-white">Hunza & Nagar</option>
                <option value="skardu" className="bg-slate-900 text-white">Skardu & Deosai</option>
                <option value="swat" className="bg-slate-900 text-white">Swat & Kalam</option>
                <option value="kashmir" className="bg-slate-900 text-white">Neelum Kashmir</option>
                <option value="fairy-meadows" className="bg-slate-900 text-white">Fairy Meadows</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#E5983A] via-amber-500 to-[#D97706] hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs rounded-xl sm:rounded-full shadow-lg shadow-amber-950 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105"
            >
              <span>Search Expeditions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Quick Destination Chips */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-slate-400">Popular:</span>
            {quickChips.map((chip) => (
              <button
                key={chip.region}
                onClick={() => {
                  setSelectedRegion(chip.region);
                  onSearch('', chip.region);
                  const element = document.getElementById('tours');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3.5 py-1.5 text-xs font-bold text-slate-300 bg-slate-900/90 hover:bg-amber-950 hover:text-[#E5983A] border border-slate-800 hover:border-[#E5983A]/50 rounded-full transition-all duration-200"
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* Primary CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#tours"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#E5983A] to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm rounded-2xl shadow-2xl shadow-amber-950/80 transition-all flex items-center justify-center gap-2.5 hover:scale-105"
          >
            <Compass className="w-5 h-5 text-slate-950" />
            <span>Explore All Group Tours</span>
          </a>

          <button
            onClick={onOpenCustomBuilder}
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/95 hover:bg-slate-850 text-white font-black text-sm rounded-2xl border border-amber-500/40 hover:border-[#E5983A] shadow-2xl transition-all flex items-center justify-center gap-2.5 group hover:scale-105"
          >
            <Sparkles className="w-5 h-5 text-[#E5983A] group-hover:rotate-12 transition-transform" />
            <span>Design Custom Private Trip</span>
          </button>
        </div>

        {/* Trust Badges & Stats Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="flex flex-col items-center p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-[#E5983A]/40 transition">
            <div className="flex items-center gap-1.5 text-[#E5983A] mb-1">
              <Users className="w-5 h-5" />
              <span className="text-2xl font-black text-white">5,000+</span>
            </div>
            <p className="text-xs text-slate-300 font-semibold">Happy Travelers</p>
          </div>

          <div className="flex flex-col items-center p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-[#E5983A]/40 transition">
            <div className="flex items-center gap-1.5 text-[#E5983A] mb-1">
              <Mountain className="w-5 h-5" />
              <span className="text-2xl font-black text-white">180+</span>
            </div>
            <p className="text-xs text-slate-300 font-semibold">Successful Expeditions</p>
          </div>

          <div className="flex flex-col items-center p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-[#E5983A]/40 transition">
            <div className="flex items-center gap-1.5 text-[#E5983A] mb-1">
              <Star className="w-5 h-5 fill-[#E5983A]" />
              <span className="text-2xl font-black text-white">4.9 / 5</span>
            </div>
            <p className="text-xs text-slate-300 font-semibold">Rating on Social Media</p>
          </div>

          <div className="flex flex-col items-center p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-[#E5983A]/40 transition">
            <div className="flex items-center gap-1.5 text-[#E5983A] mb-1">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-2xl font-black text-white">100%</span>
            </div>
            <p className="text-xs text-slate-300 font-semibold">Safe & Family Verified</p>
          </div>
        </div>

      </div>
    </section>
  );
};

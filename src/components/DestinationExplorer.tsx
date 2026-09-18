import React, { useState } from 'react';
import { DESTINATIONS_DATA } from '../data/destinationsData';
import { MapPin, Compass, Thermometer, Calendar, Mountain, ArrowUpRight } from 'lucide-react';

interface DestinationExplorerProps {
  onFilterByRegion: (regionId: string) => void;
}

export const DestinationExplorer: React.FC<DestinationExplorerProps> = ({ onFilterByRegion }) => {
  const [activeDestId, setActiveDestId] = useState<string>(DESTINATIONS_DATA[0].id);

  const activeDest = DESTINATIONS_DATA.find((d) => d.id === activeDestId) || DESTINATIONS_DATA[0];

  return (
    <section id="destinations" className="py-16 sm:py-24 bg-slate-950 text-white relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 max-w-full">
            <Compass className="w-3.5 h-3.5 text-emerald-300 flex-shrink-0" />
            <span className="whitespace-nowrap">Northern Pakistan Destination Guides</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Discover the World's Most <span className="text-amber-400 block xs:inline mt-0.5 sm:mt-0">Majestic Valleys</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-slate-400 text-xs sm:text-sm px-2">
            Explore elevation details, best visiting seasons, climate insights, and distance metrics for your next Safar Nama Hangama expedition!
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 mb-8 sm:mb-12 no-scrollbar max-w-full">
          {DESTINATIONS_DATA.map((dest) => (
            <button
              key={dest.id}
              onClick={() => setActiveDestId(dest.id)}
              className={`px-3.5 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all duration-300 border flex-shrink-0 ${
                activeDestId === dest.id
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-400 shadow-xl shadow-emerald-950 scale-105'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-850'
              }`}
            >
              {dest.name}
            </button>
          ))}
        </div>

        {/* Active Destination Card Details */}
        <div className="glass-panel-card rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl">
          
          {/* Image Side - Fixed Uniform Height & Aspect Ratio for All Destinations */}
          <div className="lg:col-span-6 relative h-60 sm:h-80 lg:h-auto w-full overflow-hidden bg-slate-900">
            <img
              src={activeDest.image}
              alt={activeDest.name}
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src = '/images/destinations/hunza_attabad.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04070d] via-[#04070d]/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#04070d]" />

            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-slate-950/90 backdrop-blur-md text-[#E5983A] text-xs font-black rounded-full border border-[#E5983A]/40 shadow-lg whitespace-nowrap">
                {activeDest.regionTag}
              </span>
            </div>
          </div>

          {/* Details Content Side - Fixed Height Container */}
          <div className="lg:col-span-6 p-4 sm:p-8 lg:p-10 flex flex-col justify-between space-y-4 sm:space-y-6 bg-[#04070d]">
            <div>
              <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 sm:gap-2 mb-1">
                <h3 className="text-xl sm:text-3xl font-black text-white leading-tight">{activeDest.name}</h3>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-800 self-start xs:self-auto whitespace-nowrap flex-shrink-0">
                  {activeDest.regionTag}
                </span>
              </div>
              <p className="mt-1.5 sm:mt-2 text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                {activeDest.shortDesc}
              </p>

              {/* Metrics Grid - Fixed Uniform Sizing */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-4 sm:mt-5">
                <div className="p-2.5 sm:p-3 bg-slate-900/90 rounded-xl sm:rounded-2xl border border-slate-800 flex flex-col justify-center min-w-0">
                  <div className="flex items-center gap-1.5 text-[#E5983A] mb-0.5 sm:mb-1">
                    <Mountain className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase text-slate-400 tracking-wider truncate">Altitude</span>
                  </div>
                  <span className="text-[11px] sm:text-xs font-black text-white break-words">{activeDest.altitude}</span>
                </div>

                <div className="p-2.5 sm:p-3 bg-slate-900/90 rounded-xl sm:rounded-2xl border border-slate-800 flex flex-col justify-center min-w-0">
                  <div className="flex items-center gap-1.5 text-amber-400 mb-0.5 sm:mb-1">
                    <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase text-slate-400 tracking-wider truncate">Best Season</span>
                  </div>
                  <span className="text-[11px] sm:text-xs font-black text-white break-words">{activeDest.bestMonths}</span>
                </div>

                <div className="p-2.5 sm:p-3 bg-slate-900/90 rounded-xl sm:rounded-2xl border border-slate-800 flex flex-col justify-center min-w-0">
                  <div className="flex items-center gap-1.5 text-cyan-400 mb-0.5 sm:mb-1">
                    <Thermometer className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase text-slate-400 tracking-wider truncate">Temperature</span>
                  </div>
                  <span className="text-[11px] sm:text-xs font-black text-white break-words">{activeDest.temperature}</span>
                </div>

                <div className="p-2.5 sm:p-3 bg-slate-900/90 rounded-xl sm:rounded-2xl border border-slate-800 flex flex-col justify-center min-w-0">
                  <div className="flex items-center gap-1.5 text-indigo-400 mb-0.5 sm:mb-1">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase text-slate-400 tracking-wider truncate">From Islamabad</span>
                  </div>
                  <span className="text-[11px] sm:text-xs font-black text-white break-words">{activeDest.distanceFromIslamabad}</span>
                </div>
              </div>

              {/* Top Attractions Tags */}
              <div className="mt-4 sm:mt-5">
                <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-400 block mb-1.5 sm:mb-2 uppercase tracking-wider">Key Attractions to Visit:</span>
                <div className="flex flex-wrap gap-1.5 max-h-[72px] overflow-y-auto no-scrollbar">
                  {activeDest.topAttractions.map((spot, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-900 text-amber-300 text-[10px] sm:text-[11px] font-bold rounded-lg border border-slate-800 flex items-center gap-1 whitespace-nowrap">
                      ✨ {spot}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Filter Tours Button */}
            <div className="pt-3 sm:pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  onFilterByRegion(activeDest.id);
                  const el = document.getElementById('tours');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-[#E5983A] via-amber-500 to-[#D97706] hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 transition hover:scale-[1.01] whitespace-nowrap"
              >
                <span className="whitespace-nowrap">View All {activeDest.name} Packages</span>
                <ArrowUpRight className="w-4 h-4 text-slate-950 flex-shrink-0" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

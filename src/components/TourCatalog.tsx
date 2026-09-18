import React, { useState, useMemo } from 'react';
import { Tour, TOURS_DATA } from '../data/toursData';
import { Clock, MapPin, Calendar, Star, CheckCircle, ArrowRight, Filter, Sparkles, Tag, Eye } from 'lucide-react';

interface TourCatalogProps {
  activeCurrency: 'PKR' | 'USD' | 'AED';
  formatPrice: (pricePKR: number) => string;
  onSelectTour: (tour: Tour) => void;
  onBookTour: (tour: Tour) => void;
  searchFilter: string;
  regionFilter: string;
}

export const TourCatalog: React.FC<TourCatalogProps> = ({
  activeCurrency,
  formatPrice,
  onSelectTour,
  onBookTour,
  searchFilter,
  regionFilter
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>(regionFilter || 'all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'duration'>('featured');

  React.useEffect(() => {
    if (regionFilter) setSelectedRegion(regionFilter);
  }, [regionFilter]);

  const regionTabs = [
    { id: 'all', name: 'All Regions' },
    { id: 'hunza', name: 'Hunza & Nagar' },
    { id: 'skardu', name: 'Skardu & Deosai' },
    { id: 'swat', name: 'Swat & Kalam' },
    { id: 'kashmir', name: 'Neelum Kashmir' },
    { id: 'fairy-meadows', name: 'Fairy Meadows' },
    { id: 'naran', name: 'Naran Kaghan' },
    { id: 'kumrat', name: 'Kumrat Valley' },
  ];

  const categoryChips = [
    { id: 'all', label: 'All Trips' },
    { id: 'group', label: 'Fixed Departures' },
    { id: 'weekend', label: 'Weekend Trips' },
    { id: 'family', label: 'Family Friendly' },
    { id: 'adventure', label: 'Trek & Adventure' },
  ];

  const filteredTours = useMemo(() => {
    return TOURS_DATA.filter((tour) => {
      if (selectedRegion !== 'all' && tour.region !== selectedRegion) return false;
      if (selectedCategory !== 'all' && tour.category !== selectedCategory) return false;
      if (searchFilter.trim() !== '') {
        const query = searchFilter.toLowerCase();
        const matchTitle = tour.title.toLowerCase().includes(query);
        const matchDest = tour.destination.toLowerCase().includes(query);
        const matchSubtitle = tour.subtitle.toLowerCase().includes(query);
        if (!matchTitle && !matchDest && !matchSubtitle) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return (a.discountPricePKR || a.pricePKR) - (b.discountPricePKR || b.pricePKR);
      if (sortBy === 'price-desc') return (b.discountPricePKR || b.pricePKR) - (a.discountPricePKR || a.pricePKR);
      if (sortBy === 'duration') return b.durationDays - a.durationDays;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedRegion, selectedCategory, searchFilter, sortBy]);

  return (
    <section id="tours" className="py-12 sm:py-20 lg:py-24 bg-[#04070d] text-white relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-[#E5983A]/40 text-[#E5983A] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3 max-w-full">
            <Sparkles className="w-3.5 h-3.5 text-[#E5983A] flex-shrink-0" />
            <span>Official Safar Nama Hangama Expeditions</span>
          </div>
          <h2 className="text-[19px] xs:text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-center whitespace-nowrap">
            Upcoming Tour <span className="text-[#E5983A]">Packages</span>
          </h2>
          <p className="mt-2 text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed px-1 text-center">
            Select your dream destination in Northern Pakistan. All packages include luxury transport, verified hotel stays, guided itineraries & musical bonfires!
          </p>

          {/* Sort Dropdown */}
          <div className="mt-4 flex items-center justify-center gap-2 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-amber-500/20 inline-flex">
            <Filter className="w-3.5 h-3.5 text-[#E5983A] flex-shrink-0" />
            <span className="text-[11px] sm:text-xs text-slate-400 font-medium whitespace-nowrap">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="bg-transparent text-[11px] sm:text-xs font-bold text-white focus:outline-none cursor-pointer pr-1"
            >
              <option value="featured" className="bg-slate-900">Featured & Popular</option>
              <option value="price-asc" className="bg-slate-900">Price: Low to High</option>
              <option value="price-desc" className="bg-slate-900">Price: High to Low</option>
              <option value="duration" className="bg-slate-900">Duration (Days)</option>
            </select>
          </div>
        </div>

        {/* Region Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 no-scrollbar mb-4 sm:mb-6 border-b border-slate-800 max-w-full">
          {regionTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedRegion(tab.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                selectedRegion === tab.id
                  ? 'bg-[#E5983A] text-slate-950 shadow-lg shadow-amber-950 border border-amber-300 font-black'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 max-w-full">
          <span className="text-[11px] sm:text-xs font-semibold text-slate-500 mr-1 sm:mr-2">Trip Type:</span>
          {categoryChips.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold transition whitespace-nowrap flex-shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tour Cards Grid */}
        {filteredTours.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/50 rounded-3xl border border-slate-800">
            <MapPin className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white">No tours found matching your search</h3>
            <p className="text-xs text-slate-400 mt-1">Try resetting your destination or trip filters.</p>
            <button
              onClick={() => { setSelectedRegion('all'); setSelectedCategory('all'); }}
              className="mt-4 px-5 py-2 bg-[#E5983A] text-slate-950 text-xs font-black rounded-xl"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => {
              const currentPrice = tour.discountPricePKR || tour.pricePKR;
              const hasDiscount = !!tour.discountPricePKR;

              return (
                <div
                  key={tour.id}
                  className="glass-panel-card rounded-3xl overflow-hidden flex flex-col group border border-slate-800/80 hover:border-[#E5983A]/50 transition-all duration-300"
                >
                  {/* Card Image Banner */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04070d] via-[#04070d]/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 bg-slate-950/90 backdrop-blur-md text-[#E5983A] text-[11px] font-extrabold rounded-full border border-[#E5983A]/40 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {tour.destination}
                      </span>
                      {tour.featured && (
                        <span className="px-3 py-1 bg-[#E5983A] text-slate-950 text-[11px] font-black rounded-full uppercase tracking-wider shadow-lg">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 bg-slate-900/90 backdrop-blur-md text-slate-200 text-xs font-bold rounded-lg border border-slate-700 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#E5983A]" />
                        {tour.durationDays} Days / {tour.durationNights} Nights
                      </span>
                    </div>

                    {/* Departure Info */}
                    <div className="absolute bottom-3 right-4">
                      <span className="px-2.5 py-1 bg-slate-950/90 backdrop-blur-md text-amber-300 text-[10px] font-bold rounded-lg border border-amber-500/40 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {tour.nextDeparture}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Rating & Review count */}
                      <div className="flex items-center justify-between text-xs mb-2">
                        <div className="flex items-center gap-1 text-[#E5983A] font-bold">
                          <Star className="w-4 h-4 fill-[#E5983A]" />
                          <span>{tour.rating}</span>
                          <span className="text-slate-500 font-normal">({tour.reviewsCount} reviews)</span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-medium capitalize bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                          {tour.category} tour
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-extrabold text-white group-hover:text-[#E5983A] transition-colors line-clamp-2">
                        {tour.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {tour.subtitle}
                      </p>

                      {/* Top Highlights List */}
                      <div className="mt-4 space-y-1.5">
                        {tour.highlights.slice(0, 3).map((hl, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle className="w-3.5 h-3.5 text-[#E5983A] flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price & Action Footer */}
                    <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="min-w-0">
                        <span className="text-[10px] text-slate-400 uppercase font-semibold block whitespace-nowrap">Starting from</span>
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span className="text-lg sm:text-xl font-black text-[#E5983A] whitespace-nowrap">
                            {formatPrice(currentPrice)}
                          </span>
                          {hasDiscount && (
                            <span className="text-xs text-slate-500 line-through whitespace-nowrap">
                              {formatPrice(tour.pricePKR)}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-500 block truncate">per person (twin/triple)</span>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0 justify-end">
                        <button
                          onClick={() => onSelectTour(tour)}
                          className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition flex-shrink-0"
                          title="View Full Day-by-Day Itinerary"
                        >
                          <Eye className="w-4 h-4 text-[#E5983A]" />
                        </button>
                        <button
                          onClick={() => onBookTour(tour)}
                          className="px-3.5 sm:px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#E5983A] to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-md shadow-amber-950 flex items-center gap-1.5 transition-all hover:scale-105 whitespace-nowrap flex-shrink-0"
                        >
                          <span className="whitespace-nowrap">Book Now</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-950 flex-shrink-0" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

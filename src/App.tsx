import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TourCatalog } from './components/TourCatalog';
import { TourDetailModal } from './components/TourDetailModal';
import { PrivateTripsSection } from './components/PrivateTripsSection';
import { CustomTripBuilder } from './components/CustomTripBuilder';
import { PastTripsGallery } from './components/PastTripsGallery';
import { DestinationExplorer } from './components/DestinationExplorer';
import { InstagramFeedSection } from './components/InstagramFeedSection';
import { PackingChecklist } from './components/PackingChecklist';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { Tour } from './data/toursData';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export function App() {
  const [activeCurrency, setActiveCurrency] = useState<'PKR' | 'USD' | 'AED'>('PKR');
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [regionFilter, setRegionFilter] = useState<string>('all');

  // Light / Dark Theme State Management
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('safarnama_theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('safarnama_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };
  
  // Modals
  const [detailTour, setDetailTour] = useState<Tour | null>(null);
  const [bookingTour, setBookingTour] = useState<Tour | null>(null);
  const [customBookingDetails, setCustomBookingDetails] = useState<any>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  // Currency Conversion Rates (Base: PKR)
  const USD_RATE = 278;
  const AED_RATE = 75.6;

  const formatPrice = (pricePKR: number): string => {
    if (activeCurrency === 'USD') {
      const usd = Math.round(pricePKR / USD_RATE);
      return `$${usd.toLocaleString()}`;
    }
    if (activeCurrency === 'AED') {
      const aed = Math.round(pricePKR / AED_RATE);
      return `${aed.toLocaleString()} AED`;
    }
    return `PKR ${pricePKR.toLocaleString()}`;
  };

  const handleHeroSearch = (query: string, region: string) => {
    setSearchFilter(query);
    setRegionFilter(region);
  };

  const handleOpenBookingModal = (tour?: Tour, details?: any) => {
    if (tour) {
      setBookingTour(tour);
    }
    if (details) {
      setCustomBookingDetails(details);
    }
    setIsBookingOpen(true);
  };

  const handlePrivateCategoryBooking = (categoryType: string) => {
    const el = document.getElementById('custom-trip');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 font-sans selection:bg-emerald-500 selection:text-slate-950 overflow-x-hidden w-full max-w-full transition-colors duration-300">
      
      {/* Sticky Header Navigation with Theme Toggle */}
      <Navbar
        activeCurrency={activeCurrency}
        onCurrencyChange={setActiveCurrency}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCustomBuilder={() => {
          const el = document.getElementById('custom-trip');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenBooking={() => handleOpenBookingModal()}
      />

      {/* Hero Section */}
      <HeroSection
        onSearch={handleHeroSearch}
        onOpenCustomBuilder={() => {
          const el = document.getElementById('custom-trip');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenBooking={() => handleOpenBookingModal()}
      />

      {/* Main Tour Catalog Explorer */}
      <TourCatalog
        activeCurrency={activeCurrency}
        formatPrice={formatPrice}
        onSelectTour={(tour) => setDetailTour(tour)}
        onBookTour={(tour) => handleOpenBookingModal(tour)}
        searchFilter={searchFilter}
        regionFilter={regionFilter}
      />

      {/* Dedicated Private & Custom Trips Hub */}
      <PrivateTripsSection
        onSelectCategoryBooking={handlePrivateCategoryBooking}
      />

      {/* Interactive Custom Trip Builder Wizard */}
      <CustomTripBuilder formatPrice={formatPrice} />

      {/* Past Group Trips Photo Gallery & Memories */}
      <PastTripsGallery />

      {/* Destination Guides */}
      <DestinationExplorer
        onFilterByRegion={(regionId) => setRegionFilter(regionId)}
      />

      {/* Instagram Wall & Social Proof */}
      <InstagramFeedSection />

      {/* Interactive Packing Checklist */}
      <PackingChecklist />

      {/* Customer Reviews & Testimonials */}
      <TestimonialsSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons (WhatsApp & Scroll To Top) */}
      <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-2 sm:gap-3">
        <a
          href="https://wa.me/923331588959?text=Hello%20Safar%20Nama%20Hangama!%20I%20have%20an%20inquiry%20about%20a%20tour."
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 sm:p-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full shadow-2xl shadow-emerald-950 hover:scale-110 transition-all flex items-center justify-center group"
          title="Instant WhatsApp Support (+92 333 1588959)"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-slate-950" />
        </a>

        <button
          onClick={scrollToTop}
          className="p-2 sm:p-3 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full border border-slate-700 shadow-xl transition"
          title="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Modals */}
      {detailTour && (
        <TourDetailModal
          tour={detailTour}
          onClose={() => setDetailTour(null)}
          formatPrice={formatPrice}
          onBookNow={(tour, details) => {
            setDetailTour(null);
            handleOpenBookingModal(tour, details);
          }}
        />
      )}

      {isBookingOpen && (
        <BookingModal
          selectedTour={bookingTour}
          customDetails={customBookingDetails}
          onClose={() => {
            setIsBookingOpen(false);
            setBookingTour(null);
            setCustomBookingDetails(null);
          }}
          formatPrice={formatPrice}
        />
      )}

    </div>
  );
}

export default App;

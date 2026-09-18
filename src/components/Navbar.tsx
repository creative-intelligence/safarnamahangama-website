import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, MessageCircle, Menu, X, Globe, Sun, Moon, ChevronDown } from 'lucide-react';

interface NavbarProps {
  activeCurrency: 'PKR' | 'USD' | 'AED';
  onCurrencyChange: (currency: 'PKR' | 'USD' | 'AED') => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenCustomBuilder: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeCurrency,
  onCurrencyChange,
  theme,
  onToggleTheme,
  onOpenCustomBuilder,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tours', href: '#tours' },
    { name: 'Private Trips', href: '#private-trips' },
    { name: 'Custom Builder', href: '#custom-trip' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Checklist', href: '#checklist' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#04070d]/95 backdrop-blur-xl border-b border-amber-500/20 py-2 sm:py-3 shadow-2xl shadow-amber-950/30'
          : 'bg-gradient-to-b from-[#04070d]/98 via-[#04070d]/70 to-transparent py-2.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between gap-1.5 sm:gap-4 h-10 sm:h-12">
          
          {/* Brand Official Logo */}
          <a href="#" className="flex-shrink-0 flex items-center max-w-[65%] xs:max-w-none">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links Pill (Visible on LG/1024px+ screens) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-[#0f1523]/90 px-2.5 xl:px-3.5 py-1 rounded-full border border-amber-500/20 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 xl:px-3.5 py-1 text-[11px] xl:text-xs font-bold text-slate-300 hover:text-[#E5983A] hover:bg-slate-800/80 rounded-full transition-all duration-200 whitespace-nowrap flex items-center h-6 xl:h-7"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Controls (Visible on Large screens lg+) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 h-full">
            
            {/* Sliding Pill Switch Light/Dark Mode Toggle (Left = Dark, Right = Light) */}
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {theme === 'dark' ? 'Dark' : 'Light'}
              </span>
              <button
                onClick={onToggleTheme}
                className={`relative w-12 h-6.5 rounded-full p-0.5 transition-colors duration-300 border flex items-center shadow-inner ${
                  theme === 'light'
                    ? 'bg-amber-400 border-amber-500'
                    : 'bg-slate-900 border-slate-700'
                }`}
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {/* Sliding knob */}
                <div
                  className={`w-5 h-5 rounded-full bg-slate-950 flex items-center justify-center shadow-md transform transition-transform duration-300 ${
                    theme === 'light' ? 'translate-x-5 bg-slate-950' : 'translate-x-0 bg-slate-950'
                  }`}
                >
                  {theme === 'light' ? (
                    <Sun className="w-3 h-3 text-amber-400" />
                  ) : (
                    <Moon className="w-3 h-3 text-amber-400" />
                  )}
                </div>
              </button>
            </div>

            {/* Compact Currency Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1.5 bg-[#0f1523]/90 hover:bg-slate-900 text-slate-200 text-xs font-extrabold px-2.5 py-1.5 rounded-xl border border-amber-500/25 transition h-8 xl:h-9 shadow-md"
              >
                <Globe className="w-3.5 h-3.5 text-[#E5983A]" />
                <span>{activeCurrency}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-24 bg-[#0f1523] border border-amber-500/30 rounded-xl shadow-2xl overflow-hidden z-50 py-1">
                  {(['PKR', 'USD', 'AED'] as const).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        onCurrencyChange(curr);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-1.5 text-left text-xs font-bold transition flex items-center justify-between ${
                        activeCurrency === curr
                          ? 'bg-[#E5983A] text-slate-950'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-[#E5983A]'
                      }`}
                    >
                      <span>{curr}</span>
                      {activeCurrency === curr && <span className="text-slate-950 font-black">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Helpline Phone Button */}
            <a
              href="tel:+923331588959"
              className="flex items-center gap-1 xl:gap-1.5 text-[11px] xl:text-xs font-bold text-slate-200 hover:text-white px-2.5 xl:px-3 h-8 xl:h-9 rounded-xl bg-[#0f1523]/90 border border-amber-500/25 hover:border-amber-400/50 transition whitespace-nowrap"
              title="Call Helpline: 0333 1588959"
            >
              <Phone className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-[#E5983A] flex-shrink-0" />
              <span className="whitespace-nowrap text-[11px] xl:text-xs hidden xl:inline">0333 1588959</span>
            </a>

            {/* WhatsApp Booking CTA */}
            <button
              onClick={onOpenBooking}
              className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#E5983A] via-amber-500 to-[#D97706] hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black px-3 xl:px-4 h-8 xl:h-9 rounded-xl shadow-lg shadow-amber-950/60 transition-all hover:scale-105 active:scale-95 whitespace-nowrap flex-shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-950 flex-shrink-0" />
              <span className="whitespace-nowrap">Book Trip</span>
            </button>
          </div>

          {/* Mobile & Tablet Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden flex-shrink-0">
            {/* Mobile Pill Switch Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className={`relative w-10 h-5.5 rounded-full p-0.5 transition-colors border flex items-center ${
                theme === 'light' ? 'bg-amber-400 border-amber-500' : 'bg-slate-900 border-slate-700'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-slate-950 flex items-center justify-center transform transition-transform ${
                  theme === 'light' ? 'translate-x-4' : 'translate-x-0'
                }`}
              >
                {theme === 'light' ? (
                  <Sun className="w-2.5 h-2.5 text-amber-400" />
                ) : (
                  <Moon className="w-2.5 h-2.5 text-amber-400" />
                )}
              </div>
            </button>

            <button
              onClick={onOpenBooking}
              className="flex items-center justify-center gap-1 bg-[#E5983A] text-slate-950 text-[11px] sm:text-xs font-black px-2 sm:px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap"
            >
              <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-slate-950" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-xl bg-[#0f1523] text-slate-200 border border-amber-500/30 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Responsive Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-3.5 sm:p-5 bg-[#04070d]/98 border border-amber-500/30 rounded-2xl sm:rounded-3xl backdrop-blur-2xl shadow-2xl space-y-3 animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
            {/* Theme Toggle & Currency Dropdown */}
            <div className="flex items-center justify-between gap-2 bg-slate-900 p-2 rounded-xl border border-slate-800">
              <span className="text-xs font-bold text-slate-300">Theme</span>
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-2 px-3 py-1 bg-slate-950 border border-slate-700 rounded-lg text-xs font-bold text-amber-400"
              >
                {theme === 'dark' ? (
                  <>
                    <Moon className="w-3.5 h-3.5" />
                    <span>Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    <span>Light Mode</span>
                  </>
                )}
              </button>
            </div>

            {/* Currency Selector Mobile */}
            <div className="grid grid-cols-3 gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
              {(['PKR', 'USD', 'AED'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => onCurrencyChange(curr)}
                  className={`py-1.5 text-center text-xs font-black rounded-lg transition ${
                    activeCurrency === curr ? 'bg-[#E5983A] text-slate-950 shadow' : 'text-slate-400'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Nav Links */}
            <div className="space-y-0.5 pt-2 border-t border-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 text-xs sm:text-sm font-bold text-slate-200 hover:text-[#E5983A] hover:bg-slate-900 rounded-xl transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile CTAs */}
            <div className="pt-2.5 border-t border-slate-800 space-y-2">
              <a
                href="tel:+923331588959"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-white"
              >
                <Phone className="w-4 h-4 text-[#E5983A]" />
                Call Helpline: 0333 1588959
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#E5983A] to-amber-500 text-slate-950 text-xs font-black rounded-xl shadow-lg shadow-amber-950"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                Book via WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

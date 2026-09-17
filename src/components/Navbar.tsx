import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, MessageCircle, Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  activeCurrency: 'PKR' | 'USD' | 'AED';
  onCurrencyChange: (currency: 'PKR' | 'USD' | 'AED') => void;
  onOpenCustomBuilder: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeCurrency,
  onCurrencyChange,
  onOpenCustomBuilder,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#04070d]/95 backdrop-blur-xl border-b border-amber-500/20 py-3 shadow-2xl shadow-amber-950/20'
          : 'bg-gradient-to-b from-[#04070d]/95 via-[#04070d]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-11">
          
          {/* Brand Official Logo */}
          <a href="#" className="flex-shrink-0 flex items-center">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Pill - Single Line No Wrap */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0f1523]/90 px-3 py-1.5 rounded-full border border-amber-500/20 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1 text-xs font-bold text-slate-300 hover:text-[#E5983A] hover:bg-slate-800/80 rounded-full transition-all duration-200 whitespace-nowrap flex items-center h-7"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls - Fixed Single Line & Unified Height */}
          <div className="hidden md:flex items-center gap-2.5 h-full">
            
            {/* Currency Selector */}
            <div className="flex items-center bg-[#0f1523]/90 rounded-xl p-1 border border-amber-500/20 h-9">
              <Globe className="w-3.5 h-3.5 text-[#E5983A] ml-1.5 mr-1 flex-shrink-0" />
              {(['PKR', 'USD', 'AED'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => onCurrencyChange(curr)}
                  className={`px-2 py-0.5 rounded-lg font-bold transition-all text-[11px] whitespace-nowrap h-7 ${
                    activeCurrency === curr
                      ? 'bg-[#E5983A] text-slate-950 font-black shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Helpline Phone Button */}
            <a
              href="tel:+923331588959"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:text-white px-3 h-9 rounded-xl bg-[#0f1523]/90 border border-amber-500/20 hover:border-amber-400/50 transition whitespace-nowrap"
              title="Call Helpline: 0333 1588959"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5983A] flex-shrink-0" />
              <span className="whitespace-nowrap">0333 1588959</span>
            </a>

            {/* WhatsApp Booking CTA */}
            <button
              onClick={onOpenBooking}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#E5983A] via-amber-500 to-[#D97706] hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black px-4 h-9 rounded-xl shadow-lg shadow-amber-950/60 transition-all hover:scale-105 active:scale-95 whitespace-nowrap flex-shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-950 flex-shrink-0" />
              <span className="whitespace-nowrap">Book Trip</span>
            </button>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#0f1523] text-slate-200 border border-amber-500/30 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-5 bg-[#04070d]/98 border border-amber-500/30 rounded-3xl backdrop-blur-2xl shadow-2xl space-y-4 animate-in slide-in-from-top duration-200">
            {/* Currency Selector Mobile */}
            <div className="grid grid-cols-3 gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
              {(['PKR', 'USD', 'AED'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => onCurrencyChange(curr)}
                  className={`py-1.5 text-center text-xs font-bold rounded-lg transition ${
                    activeCurrency === curr ? 'bg-[#E5983A] text-slate-950' : 'text-slate-400'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Nav Links */}
            <div className="space-y-1 pt-2 border-t border-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3.5 py-2.5 text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-900 rounded-xl"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-3 border-t border-slate-800 space-y-2">
              <a
                href="tel:+923331588959"
                className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-white"
              >
                <Phone className="w-4 h-4 text-[#E5983A]" />
                Call Helpline: 0333 1588959
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#E5983A] to-amber-500 text-slate-950 text-xs font-black rounded-xl shadow-lg shadow-amber-950"
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

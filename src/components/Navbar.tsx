import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Youtube, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, (scrollY / totalHeight) * 100));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'TrackRecord', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-out ${
        mounted ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
      } ${
        scrolled
          ? 'bg-[#030C07]/90 backdrop-blur-md py-4 border-b border-emerald-900/40 shadow-lg shadow-black/60'
          : 'bg-transparent py-6'
      }`}
    >
      {/* Dynamic Cyber Laser Progress Beam */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-950/60 overflow-hidden pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-150 shadow-[0_0_12px_#10B981]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 p-0.5 shadow-glow-emerald transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#030C07] rounded-[10px] flex items-center justify-center">
              <Youtube className="w-5 h-5 text-red-500 fill-red-500 transition-transform group-hover:scale-110" />
            </div>
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1 font-display">
              {siteConfig.agencyName.split(' ')[0]}
              <span className="gradient-text">{siteConfig.agencyName.split(' ')[1] || ''}</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 block -mt-1">
              By Usama Khursheed
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1 bg-[#081610]/80 border border-emerald-900/40 px-4 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-emerald-500/20 hover:text-emerald-300 transition-all duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-black font-extrabold text-sm hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 shadow-glow-emerald hover:scale-105 active:scale-95 border border-emerald-300/30"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-emerald-950/60 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#081610] border-b border-emerald-900/50 px-4 pt-3 pb-6 space-y-3">
          <ul className="space-y-1 text-left">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-emerald-600/20 hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-extrabold text-sm shadow-glow-emerald"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

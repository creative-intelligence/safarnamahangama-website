import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Heart, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070d18] text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" showText={true} />

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              Pakistan’s premier travel community and tour operator specializing in unforgettable group tours, custom family trips, and corporate expeditions across Hunza, Skardu, Swat, and Kashmir.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/safarnamahangama?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/50 transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923331588959"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:+923331588959"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#tours" className="hover:text-white transition">All Tour Packages</a></li>
              <li><a href="#private-trips" className="hover:text-white transition">Private Trips Hub</a></li>
              <li><a href="#custom-trip" className="hover:text-white transition">Build Custom Trip</a></li>
              <li><a href="#gallery" className="hover:text-white transition">Past Group Photos</a></li>
              <li><a href="#destinations" className="hover:text-white transition">Destination Guides</a></li>
              <li><a href="#instagram" className="hover:text-white transition">Instagram Reels Hub</a></li>
              <li><a href="#checklist" className="hover:text-white transition">Packing Checklist</a></li>
            </ul>
          </div>

          {/* Top Valleys */}
          <div>
            <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider mb-4">Top Destinations</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#tours" className="hover:text-white transition">Hunza & Passu Cones</a></li>
              <li><a href="#tours" className="hover:text-white transition">Skardu & Deosai Plains</a></li>
              <li><a href="#tours" className="hover:text-white transition">Swat & Kalam Valley</a></li>
              <li><a href="#tours" className="hover:text-white transition">Neelum Valley Kashmir</a></li>
              <li><a href="#tours" className="hover:text-white transition">Fairy Meadows & Nanga Parbat</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider mb-4">Contact & Support</h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white">WhatsApp & Call Helpline</span>
                  <a href="tel:+923331588959" className="text-emerald-400 hover:underline">+92 333 1588959</a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Instagram className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white">Instagram Handle</span>
                  <a
                    href="https://www.instagram.com/safarnamahangama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:underline"
                  >
                    @safarnamahangama
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-[11px] text-slate-400">Registered Travel Operator in Pakistan</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Safar Nama Hangama. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <span>Payments Accepted:</span>
            <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-bold text-slate-300">JazzCash</span>
            <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-bold text-slate-300">EasyPaisa</span>
            <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-bold text-slate-300">Bank Transfer</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

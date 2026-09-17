import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Youtube, Instagram, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030C07] border-t border-emerald-900/50 pt-16 pb-12 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-emerald-900/40">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <img 
                src="/favicon.svg" 
                alt="TubeScale Logo" 
                className="w-9 h-9 drop-shadow-[0_0_12px_rgba(16,185,129,0.5)]" 
              />
              <span className="font-extrabold text-2xl text-white font-display">
                Tube<span className="gradient-text">Scale</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {siteConfig.agencyTagline}. Done-for-you YouTube channel production, scriptwriting, 4K video editing, high-CTR thumbnails, and 90-day monetization management.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Backed by 90-Day Monetization Guarantee</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About TubeScale</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Done-For-You Services</a></li>
              <li><a href="#process" className="hover:text-emerald-400 transition-colors">4-Step Production System</a></li>
              <li><a href="#portfolio" className="hover:text-emerald-400 transition-colors">Track Record Case Studies</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing & Packages</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Monetization FAQ</a></li>
            </ul>
          </div>

          {/* Social & Community */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">Connect & Community</h4>
            <p className="text-xs text-slate-400">Join our creator ecosystem or reach out directly to the TubeScale team.</p>
            
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={siteConfig.contact.skoolCommunity}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#081610] border border-emerald-800/60 text-xs font-semibold text-slate-200 hover:text-white hover:border-emerald-400 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                <span>Skool Community</span>
              </a>

              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#081610] border border-emerald-800/60 text-xs font-semibold text-slate-200 hover:text-white hover:border-teal-400 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-teal-400" />
                <span>Instagram</span>
              </a>

              <a
                href={siteConfig.contact.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#081610] border border-emerald-800/60 text-xs font-semibold text-slate-200 hover:text-white hover:border-cyan-400 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                <span>Discord</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.agencyName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-200 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-200 transition-colors">Monetization Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

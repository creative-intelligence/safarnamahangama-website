import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Calendar } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    niche: 'Finance & Wealth',
    budget: '$599 - $1,199 / month',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl glass-card bg-[#081610] rounded-3xl border border-emerald-500/40 p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#030C07] border border-emerald-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>Book Strategy Call</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Let's Build Your YouTube Asset
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans">
                Fill out the quick details below. Usama Khursheed and our team will audit your niche and respond within 4 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left font-sans">
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Usama Khursheed"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#030C07] border border-emerald-900/60 text-white text-sm focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#030C07] border border-emerald-900/60 text-white text-sm focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1">Target Niche</label>
                  <select
                    value={formData.niche}
                    onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl bg-[#030C07] border border-emerald-900/60 text-white text-xs focus:outline-none focus:border-emerald-400"
                  >
                    <option value="Finance & Wealth">Finance & Wealth</option>
                    <option value="Tech & AI">Tech & AI</option>
                    <option value="Luxury & Cars">Luxury & Cars</option>
                    <option value="Crime & History">Crime & History</option>
                    <option value="Not Sure Yet">Help Me Pick Niche</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1">Target Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl bg-[#030C07] border border-emerald-900/60 text-white text-xs focus:outline-none focus:border-emerald-400"
                  >
                    <option value="$197 Trial Pack">$197 Trial Pack</option>
                    <option value="$599 - $1,199 / month">$599 - $1,199 / mo</option>
                    <option value="$1,500+ Multi-Channel">$1,500+ Multi-Channel</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1">Message / Project Goals (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your YouTube channel goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#030C07] border border-emerald-900/60 text-white text-xs focus:outline-none focus:border-emerald-400"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-black font-extrabold text-sm shadow-glow-emerald hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                <span>Submit Strategy Request</span>
              </button>
            </form>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-semibold pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Confidential. Backed by 90-Day Monetization Guarantee.</span>
            </div>
          </div>
        ) : (
          <div className="py-12 space-y-4 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display">Strategy Request Received!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto font-sans">
              Thank you, <strong className="text-white">{formData.name}</strong>. Usama Khursheed and team are reviewing your request and will reply at <strong className="text-emerald-300">{formData.email}</strong> within 4 hours.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-emerald-500 text-black font-bold text-xs hover:bg-emerald-400 transition-colors mt-4"
            >
              Back to Home
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

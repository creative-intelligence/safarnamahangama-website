import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is it safe for solo female travelers and families to join Safar Nama Hangama group trips?',
      a: 'Absolutely 100%! Safar Nama Hangama prides itself on creating a secure, respectful, and family-friendly environment. Our professional tour managers accompany every trip, ensuring separate hotel rooms for female travelers and couples, and top-tier hospitality throughout.'
    },
    {
      q: 'Where are the pickup points for group tours?',
      a: 'Our main departure hub is Islamabad / Rawalpindi (Daewoo Terminal / Faizabad). We also arrange pickup from Lahore (Thokar Niaz Baig) and Peshawar. For guests joining from Karachi or abroad, we assist with airport pickup at Islamabad Airport.'
    },
    {
      q: 'What type of vehicles are used for northern area travel?',
      a: 'We use luxury air-conditioned Saloon Coasters (22 seats) and Toyota Grand Cabins (13 seats) for highway travel. For off-road destinations like Deosai Plains, Mahodand Lake, or Fairy Meadows, we arrange 4x4 Prado and Hilux Jeeps.'
    },
    {
      q: 'What is included in the tour package price?',
      a: 'All tour packages include luxury transport, verified hotel accommodation (twin or triple sharing), daily breakfasts and dinners, professional guide services, photography, and live bonfire musical evenings.'
    },
    {
      q: 'How can I pay for my booking?',
      a: 'We accept payments via Bank Transfer (HBL, Meezan, Faysal), JazzCash, EasyPaisa, or cash at our office. A 50% advance deposit reserves your seat, and the remaining amount is paid at departure.'
    },
    {
      q: 'Can we request a private customized tour for our family or honeymoon?',
      a: 'Yes! We specialize in custom tours. Use our online "Custom Trip Builder" tool on this website or contact us directly on WhatsApp (+92 333 1588959) to choose your private vehicle, luxury resort tier, and customized itinerary dates.'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Got Questions? We Have Answers
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Frequently Asked <span className="text-emerald-400">Questions</span>
          </h2>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm">
            Everything you need to know about booking, safety, and traveling with Safar Nama Hangama.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-white flex items-center justify-between gap-4 hover:text-emerald-400 transition"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-emerald-400 text-xs font-black">Q{idx + 1}.</span>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-emerald-400' : ''
                  }`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

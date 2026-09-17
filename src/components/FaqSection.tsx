import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#030C07] relative border-t border-emerald-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-sans">
            Everything you need to know about Usama Khursheed's YouTube production, monetization SLA, and workflows.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 text-left">
          {siteConfig.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl glass-card border border-emerald-900/50 bg-[#081610] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-emerald-950/40 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-white font-display">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#030C07] border border-emerald-800 flex items-center justify-center flex-shrink-0 text-emerald-400 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-emerald-500 text-black' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-emerald-900/40 pt-4 font-sans">
                    {faq.answer}
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

import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageCircle, 
  Phone,
  Sparkles
} from 'lucide-react';
import { FAQS, ASTROLOGER_PROFILE } from '../data/astrologyData';

interface FaqSectionProps {
  onOpenBookingModal: () => void;
  selectedLocality: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onOpenBookingModal,
  selectedLocality
}) => {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Namaste Acharya Ji, I have a specific question before booking an astrological consultation in Ghaziabad.");
    window.open(`https://wa.me/${ASTROLOGER_PROFILE.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="faqs" className="py-16 bg-stone-50/60 border-b border-amber-200/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-serif-heading">
            Questions About Astrological Consultations in Ghaziabad
          </h2>
          <p className="text-sm text-slate-600">
            Clear answers to common queries regarding chamber appointments, Vedic remedies, fees, and accuracy.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-amber-200/80 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm sm:text-base hover:bg-amber-50/40 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-amber-700' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-amber-100/60 bg-amber-50/20">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 p-6 rounded-2xl bg-amber-900 text-white text-center space-y-3 shadow-lg">
          <h3 className="text-lg font-bold font-serif-heading text-amber-100">
            Still Have a Question for Acharya Devendra Shastri?
          </h3>
          <p className="text-xs sm:text-sm text-amber-200/90 max-w-xl mx-auto">
            Our consultation desk in Ghaziabad is happy to assist you with chamber slot timings, fees, and report delivery schedules.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={handleWhatsApp}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask via WhatsApp</span>
            </button>
            <a
              href={`tel:${ASTROLOGER_PROFILE.phone}`}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 border border-white/20 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Call Helpline ({ASTROLOGER_PROFILE.phone})</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

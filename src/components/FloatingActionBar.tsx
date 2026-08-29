import React from 'react';
import { Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { ASTROLOGER_PROFILE, GHAZIABAD_LOCALITIES } from '../data/astrologyData';

interface FloatingActionBarProps {
  onOpenBookingModal: () => void;
  selectedLocality: string;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({
  onOpenBookingModal,
  selectedLocality
}) => {
  const activeLocalityObj = GHAZIABAD_LOCALITIES.find(l => l.id === selectedLocality) || GHAZIABAD_LOCALITIES[0];

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Pranam Acharya Ganesh Ji. I am from ${activeLocalityObj.name}, Ghaziabad and would like to book an astrological consultation slot.`);
    window.open(`https://wa.me/${ASTROLOGER_PROFILE.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-2 sm:p-4 bg-white/95 backdrop-blur-md border-t border-amber-200 shadow-2xl transition-all">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Quick Status info */}
        <div className="hidden md:flex items-center gap-3 text-xs">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
          <div>
            <p className="font-bold text-slate-900">
              Chambers Open in Indirapuram & Raj Nagar
            </p>
            <p className="text-[11px] text-amber-800 font-medium">
              Consultation slots open for {activeLocalityObj.name} residents today
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto justify-end">
          <a
            id="floating-call-btn"
            href={`tel:${ASTROLOGER_PROFILE.phone}`}
            className="flex-1 sm:flex-initial px-3 sm:px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all"
          >
            <Phone className="w-4 h-4 text-amber-300" />
            <span>Call Now</span>
          </a>

          <button
            id="floating-whatsapp-btn"
            onClick={handleWhatsApp}
            className="flex-1 sm:flex-initial px-3 sm:px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-900/20 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>

          <button
            id="floating-book-btn"
            onClick={onOpenBookingModal}
            className="flex-1 sm:flex-initial px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-900/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-amber-200" />
            <span>Book Appointment</span>
          </button>
        </div>
      </div>
    </div>
  );
};

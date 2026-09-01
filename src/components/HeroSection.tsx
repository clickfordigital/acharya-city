import React from 'react';
import { 
  Calendar, 
  Users, 
  ShieldCheck, 
  Check, 
  MapPin, 
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { ASTROLOGER_PROFILE } from '../data/astrologyData';
import delhiHanumanBg from '../assets/images/delhi_hanuman_bg_1788253289174.jpg';
import astrologerNamastePhoto from '../assets/images/hanish_bagga_namaste_1788253309383.jpg';

interface HeroSectionProps {
  cityName: string;
  onOpenBookingModal: (serviceId?: string, localityId?: string) => void;
  selectedLocality?: string;
  onSelectCity?: (city: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  cityName,
  onOpenBookingModal,
  selectedLocality
}) => {
  const displayCity = cityName || 'Delhi';

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Pranam Astrologer Hanish Bagga Ji. I am looking for an astrological consultation in ${displayCity}. Please guide me with slot availability.`);
    window.open(`https://wa.me/${ASTROLOGER_PROFILE.whatsappNumber}?text=${text}`, '_blank');
  };

  const servicesListCol1 = [
    'Career Guidance',
    'Marriage Solutions',
    'Love & Relationship',
    'Health Predictions'
  ];

  const servicesListCol2 = [
    'Business & Finance',
    'Vastu Consultation',
    'Numerology',
    'Spiritual Healing'
  ];

  return (
    <section className="relative px-3 sm:px-6 lg:px-8 pt-2 sm:pt-4 pb-6 sm:pb-8">
      {/* Outer Banner Frame matching reference screenshot */}
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl relative border border-amber-900/15 bg-[#fbf8f3] min-h-[500px] lg:min-h-[540px] flex flex-col justify-between">
        
        {/* Full Background Layer: Delhi landmark with Giant Lord Hanuman Statue & Metro Skyline */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={delhiHanumanBg}
            alt={`${displayCity} Hanuman Statue Skyline`}
            className="w-full h-full object-cover object-[center_20%] lg:object-[50%_15%] opacity-90 scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient wash: keeps the left text legible while leaving the center Hanuman statue vivid and majestic */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbf8f3] via-[#fbf8f3]/90 sm:via-[#fbf8f3]/75 md:via-[#fbf8f3]/45 lg:via-[#fbf8f3]/20 via-35% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/5 via-transparent to-stone-900/10" />
        </div>

        {/* Content Container (2-Column Grid: Left Headlines & Stats, Right Astrologer Card) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
          
          {/* LEFT COLUMN (Cols 1 to 7) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 max-w-2xl">
            
            {/* Top Brand Mention Badge: Hanish Bagga Celebrity Vedic Astrologer */}
            <div className="flex items-center gap-3">
              {/* Golden Sun Emblem */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 text-[#a04a12] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.15" />
                  <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
                  <path strokeLinecap="round" d="M12 5.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z" strokeDasharray="1.5 1.5" />
                </svg>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#1a1512] leading-tight tracking-tight">
                  Hanish Bagga
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-600 font-medium tracking-wide">
                  Celebrity Vedic Astrologer
                </p>
              </div>
            </div>

            {/* Main Title: Best Astrologer in <City> */}
            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1a1512] tracking-tight leading-none">
                Best Astrologer in
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#a04a12] tracking-tight leading-tight drop-shadow-xs">
                {displayCity}
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-stone-700 font-medium leading-relaxed max-w-xl">
              Trusted Celebrity Vedic Astrologer for Accurate & Confidential Guidance
            </p>

            {/* 3 Stats Cards in a Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
              {/* Stat 1: 17+ Years of Experience */}
              <div className="bg-white/95 backdrop-blur-xs rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-md border border-stone-200/80 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#a04a12] shrink-0">
                  <Calendar className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold font-serif text-stone-900 leading-tight">
                    17+
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-stone-500 font-medium leading-tight">
                    Years of Experience
                  </div>
                </div>
              </div>

              {/* Stat 2: 50,000+ Happy Clients */}
              <div className="bg-white/95 backdrop-blur-xs rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-md border border-stone-200/80 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#a04a12] shrink-0">
                  <Users className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold font-serif text-stone-900 leading-tight">
                    50,000+
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-stone-500 font-medium leading-tight">
                    Happy Clients
                  </div>
                </div>
              </div>

              {/* Stat 3: 98% Accuracy & Trust */}
              <div className="bg-white/95 backdrop-blur-xs rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-md border border-stone-200/80 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#a04a12] shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold font-serif text-stone-900 leading-tight">
                    98%
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-stone-500 font-medium leading-tight">
                    Accuracy & Trust
                  </div>
                </div>
              </div>
            </div>

            {/* 2-Column Checkmark Services List */}
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 pt-1 max-w-lg">
              {/* Column 1 */}
              <div className="space-y-2">
                {servicesListCol1.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full bg-[#9a4d16] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                    </span>
                    <span className="text-stone-900 font-medium text-xs sm:text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-2">
                {servicesListCol2.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full bg-[#9a4d16] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                    </span>
                    <span className="text-stone-900 font-medium text-xs sm:text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button: Book Consultation */}
            <div className="pt-2">
              <button
                onClick={() => onOpenBookingModal(undefined, selectedLocality)}
                className="px-7 py-3.5 rounded-xl bg-[#9a4d16] hover:bg-[#833f0e] text-white font-bold text-sm sm:text-base shadow-lg shadow-amber-950/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2.5"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span>Book Consultation</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN (Cols 8 to 12): Astrologer Portrait in Rich Frame */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Framed Card Container with Double Gold/Amber Border */}
            <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden shadow-2xl border-2 border-[#b06a28]/70 bg-stone-950/95 group">
              
              {/* Location Pill in Top Right: 📍 DELHI, INDIA */}
              <div className="absolute top-3 right-3 z-20 bg-stone-950/85 backdrop-blur-xs text-[#f5c36a] border border-[#b06a28]/60 rounded-full px-3 py-1 text-[10px] sm:text-xs font-bold tracking-wider flex items-center gap-1.5 shadow-md">
                <MapPin className="w-3 h-3 text-[#f5c36a]" />
                <span>{displayCity.toUpperCase()}, INDIA</span>
              </div>

              {/* Astrologer Photo in Mustard Bandhgala with Namaste Gesture */}
              <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[1.15/1]">
                <img
                  src={astrologerNamastePhoto}
                  alt="Astrologer Hanish Bagga"
                  className="w-full h-full object-cover object-top filter contrast-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom Gold-Bordered Name Plaque Card */}
              <div className="p-3 bg-stone-950 border-t border-[#b06a28]/50">
                <div className="rounded-xl bg-[#141210] border border-[#b06a28]/80 py-2 px-4 text-center shadow-lg">
                  <div className="text-[#f5c36a] font-serif font-bold text-sm sm:text-base flex items-center justify-center gap-1.5 tracking-wide">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Hanish Bagga</span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="text-amber-200/90 text-[10px] tracking-widest uppercase font-semibold mt-0.5">
                    VEDIC ASTRO VASTU EXPERT
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* WhatsApp Floating Pill on Bottom Right matching reference screenshot */}
        <div className="relative z-20 flex justify-end p-4 sm:p-6 pt-0">
          <button
            onClick={handleWhatsApp}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-full shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
            <span>WhatsApp Us</span>
          </button>
        </div>

      </div>
    </section>
  );
};




import React from 'react';
import { 
  Sparkles, 
  PhoneCall, 
  MessageCircle, 
  Calendar, 
  MapPin,
  Star,
  ShieldCheck,
  Award
} from 'lucide-react';
import { ASTROLOGER_PROFILE } from '../data/astrologyData';

interface HeroSectionProps {
  cityName: string;
  onOpenBookingModal: (serviceId?: string, localityId?: string) => void;
  selectedLocality?: string;
  onSelectCity?: (city: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  cityName,
  onOpenBookingModal,
  selectedLocality,
  onSelectCity
}) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Pranam Astrologer Hanish Bagga Ji. I am looking for an astrological consultation in ${cityName}. Please guide me with slot availability.`);
    window.open(`https://wa.me/${ASTROLOGER_PROFILE.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="relative px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-6 sm:pb-8">
      {/* Outer Cosmic Banner Container matching screenshot */}
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative border border-slate-800 bg-stone-950 text-white min-h-[380px] sm:min-h-[420px] flex flex-col justify-between p-6 sm:p-10 lg:p-14">
        {/* Background Cosmic Space & Planet Glow Effect */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Deep space radial glow */}
          <div className="absolute -top-20 right-0 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full bg-gradient-to-bl from-blue-900/40 via-amber-700/20 to-transparent blur-3xl opacity-80" />
          
          {/* Realistic Moon / Planetary Arc in top right corner */}
          <div className="absolute -top-12 -right-12 sm:-top-8 sm:-right-8 w-60 h-60 sm:w-80 sm:h-80 rounded-full border border-blue-400/20 bg-radial from-slate-800/80 via-slate-950/90 to-transparent opacity-90 shadow-[0_0_80px_rgba(59,130,246,0.25)]">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_30%_30%,rgba(147,197,253,0.35),transparent_70%)]" />
          </div>

          {/* Star particles */}
          <div className="absolute top-1/4 left-1/5 w-1 h-1 rounded-full bg-white animate-ping opacity-75" />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-amber-200 opacity-90 shadow-[0_0_8px_#fde68a]" />
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-slate-300 opacity-60" />
          <div className="absolute top-12 left-12 w-1.5 h-1.5 rounded-full bg-amber-300 opacity-80" />
        </div>

        {/* Top Breadcrumb & Locality Indicator */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Acharya Ganesh Certified Vedic Center
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline">25+ Years Lineage</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-slate-200 font-medium">
              Consulting for: <strong className="text-amber-300 capitalize">{cityName}</strong> & NCR
            </span>
          </div>
        </div>

        {/* Main Center Headline */}
        <div className="relative z-10 my-auto py-6 sm:py-8 text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif-heading tracking-tight text-white leading-tight sm:leading-snug">
            Best Astrologer in {cityName}:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
              Astrologer Near Me in {cityName}
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Gain transformative clarity with celebrated Vedic Astrologer & Vastu Guru <strong>Hanish Bagga</strong>. Authentic Parashari analysis, non-fear based guidance, and proven customized remedies.
          </p>
        </div>

        {/* Stats Grid Matching Screenshot */}
        <div className="relative z-10 pt-4 sm:pt-6 border-t border-slate-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto text-center mb-8">
            {/* Stat 1: 16+ Years Experience */}
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-400 font-serif-heading">
                16+
              </div>
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300">
                YEARS OF EXPERIENCE
              </div>
            </div>

            {/* Stat 2: 7k+ Trained Students */}
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-400 font-serif-heading">
                7k+
              </div>
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300">
                TRAINED ASTROLOGY STUDENTS
              </div>
            </div>

            {/* Stat 3: 40k+ Call Consultation */}
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-400 font-serif-heading">
                40k+
              </div>
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300">
                CALL CONSULTATION
              </div>
            </div>
          </div>

          {/* Primary Golden CTA Button */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => onOpenBookingModal(undefined, selectedLocality)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 hover:from-amber-300 hover:to-amber-100 text-stone-950 font-bold text-sm sm:text-base transition-all shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-stone-950" />
              <span>Consult Hanish Bagga Today</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-700 bg-stone-900/90 hover:bg-stone-800 text-white font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Instant WhatsApp Enquiry</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

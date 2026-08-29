import React, { useState } from 'react';
import { 
  Star, 
  Award, 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  MessageCircle, 
  Clock, 
  ArrowRight,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Users
} from 'lucide-react';
import { ASTROLOGER_PROFILE, GHAZIABAD_LOCALITIES, ASTROLOGY_SERVICES } from '../data/astrologyData';

interface HeroSectionProps {
  onOpenBookingModal: (serviceId?: string, localityId?: string) => void;
  selectedLocality: string;
  onSelectLocality: (localityId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBookingModal,
  selectedLocality,
  onSelectLocality
}) => {
  const activeLocalityObj = GHAZIABAD_LOCALITIES.find(l => l.id === selectedLocality) || GHAZIABAD_LOCALITIES[0];

  // Quick hero query state
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickService, setQuickService] = useState('kundli-reading');
  const [quickMode, setQuickMode] = useState<'chamber' | 'online'>('chamber');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName || !quickPhone) return;
    
    // Trigger modal with prefilled data or show confirmation
    onOpenBookingModal(quickService, selectedLocality);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(`Pranam Acharya Ji. I am from ${activeLocalityObj.name}, Ghaziabad. I would like an urgent astrological consultation regarding my horoscope.`);
    window.open(`https://wa.me/${ASTROLOGER_PROFILE.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/80 via-white to-amber-50/40 pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-amber-200/50 vedic-pattern">
      {/* Decorative Sacred Geometry SVG Accent */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-radial from-amber-400/10 to-transparent pointer-events-none blur-2xl" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-radial from-orange-400/10 to-transparent pointer-events-none blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* City Location Breadcrumb / Trust Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/80 text-amber-950 text-xs font-semibold shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>Serving All Ghaziabad Localities:</span>
            <span className="text-amber-800 underline decoration-amber-400 decoration-2 font-bold">
              {activeLocalityObj.name} & NCR
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-full border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-semibold text-slate-800">Acharya Ji Available Today in Ghaziabad Chamber & Online</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Col: Main City Page Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-800">4.9 / 5.0</span>
                <span className="text-xs text-slate-500">({ASTROLOGER_PROFILE.reviewCount}+ Verified Ghaziabad Reviews)</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Best Astrologer in <span className="text-amber-800 relative inline-block">
                  Ghaziabad
                  <svg className="absolute left-0 -bottom-1 w-full h-2 text-amber-400/80" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" />
                  </svg>
                </span> & NCR
              </h1>
              
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Personalized Vedic Horoscope Reading, 36-Guna Kundli Milan, Career Direction, and Zero-Demolition Vastu for residents of <strong className="text-slate-900 font-semibold">{activeLocalityObj.name}</strong>, Indirapuram, Vaishali, Raj Nagar, and surrounding NCR areas.
              </p>
            </div>

            {/* Quick Profile Summary Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-xs border border-amber-200/80 shadow-md shadow-amber-900/5 space-y-4">
              <div className="flex items-start sm:items-center gap-4">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-600 via-amber-700 to-amber-950 p-0.5 shadow-md flex items-center justify-center text-white">
                    <div className="w-full h-full bg-amber-900/80 rounded-[14px] flex flex-col items-center justify-center p-1 text-center">
                      <span className="font-vedic text-xl text-amber-200">ज्योतिष</span>
                      <span className="text-[9px] uppercase tracking-wider text-amber-300 font-semibold">Gold Medalist</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-1 bg-emerald-600 text-white rounded-full p-1 shadow-xs" title="Verified Acharya">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-900 font-serif-heading">
                      {ASTROLOGER_PROFILE.name}
                    </h3>
                    <span className="text-[11px] font-medium bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full border border-amber-300">
                      25+ Yrs Exp.
                    </span>
                  </div>
                  <p className="text-xs text-amber-800 font-medium">
                    {ASTROLOGER_PROFILE.qualification}
                  </p>
                  <p className="text-xs text-slate-600">
                    Chambers at <strong className="text-slate-800">Indirapuram (Aditya Mega City)</strong> & <strong className="text-slate-800">Raj Nagar RDC</strong>
                  </p>
                </div>
              </div>

              {/* Key Value Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-amber-100 text-xs">
                <div className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Confidential</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Practical Remedies</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No Fear-Mongering</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>In-Person & Online</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-book-consult-btn"
                onClick={() => onOpenBookingModal()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white font-semibold text-sm shadow-lg shadow-amber-900/20 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Book Consultation in Ghaziabad</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-whatsapp-btn"
                onClick={handleDirectWhatsApp}
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-900/15 flex items-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>

              <a
                id="hero-call-btn"
                href={`tel:${ASTROLOGER_PROFILE.phone}`}
                className="px-4 py-3.5 rounded-xl bg-white hover:bg-amber-50 border border-slate-300 text-slate-800 font-semibold text-sm flex items-center gap-2 transition-all shadow-2xs"
              >
                <PhoneCall className="w-4 h-4 text-amber-700" />
                <span>Call {ASTROLOGER_PROFILE.phone}</span>
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="p-3 rounded-xl bg-white/70 border border-amber-100 text-center">
                <p className="text-xl sm:text-2xl font-bold text-amber-900 font-serif-heading">18,500+</p>
                <p className="text-[11px] text-slate-600 font-medium">Horoscopes Analyzed</p>
              </div>
              <div className="p-3 rounded-xl bg-white/70 border border-amber-100 text-center">
                <p className="text-xl sm:text-2xl font-bold text-amber-900 font-serif-heading">25+ Yrs</p>
                <p className="text-[11px] text-slate-600 font-medium">Serving Ghaziabad & NCR</p>
              </div>
              <div className="p-3 rounded-xl bg-white/70 border border-amber-100 text-center">
                <p className="text-xl sm:text-2xl font-bold text-amber-900 font-serif-heading">4.9 ★</p>
                <p className="text-[11px] text-slate-600 font-medium">Google Client Rating</p>
              </div>
            </div>
          </div>

          {/* Right Col: Instant Consultation / Appointment Booking Widget (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-xl shadow-amber-950/10 border-2 border-amber-300/80 p-5 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-600 to-amber-700 text-white text-[11px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1 shadow-xs">
                <Sparkles className="w-3 h-3 text-amber-200" />
                Special Offer for {activeLocalityObj.name}
              </div>

              <div className="mb-4 pt-1">
                <h3 className="text-lg font-bold text-slate-900 font-serif-heading flex items-center gap-2">
                  <span>Get Instant Astrological Guidance</span>
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Book direct chamber visit or phone consultation with Acharya Ji
                </p>
              </div>

              <form onSubmit={handleQuickSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={quickName}
                    onChange={(e) => setQuickName(e.target.value)}
                    placeholder="e.g. Amit Sharma"
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={quickPhone}
                    onChange={(e) => setQuickPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none bg-slate-50/50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Consultation Mode
                    </label>
                    <select
                      value={quickMode}
                      onChange={(e) => setQuickMode(e.target.value as 'chamber' | 'online')}
                      className="w-full text-xs px-2.5 py-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800"
                    >
                      <option value="chamber">Chamber Visit (Indirapuram / Raj Nagar)</option>
                      <option value="online">Online Phone / Video Call</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Ghaziabad Locality
                    </label>
                    <select
                      value={selectedLocality}
                      onChange={(e) => onSelectLocality(e.target.value)}
                      className="w-full text-xs px-2.5 py-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800"
                    >
                      {GHAZIABAD_LOCALITIES.map((loc) => (
                        <option key={loc.id} value={loc.id}>
                          {loc.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Primary Concern / Service
                  </label>
                  <select
                    value={quickService}
                    onChange={(e) => setQuickService(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800"
                  >
                    {ASTROLOGY_SERVICES.map((serv) => (
                      <option key={serv.id} value={serv.id}>
                        {serv.title} (₹{serv.discountedPrice})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-[11px] text-amber-900 space-y-1">
                  <div className="flex justify-between items-center font-bold">
                    <span>Consultation Slot Availability:</span>
                    <span className="text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded text-[10px]">Today Available</span>
                  </div>
                  <p className="text-slate-600">
                    Includes Birth Chart analysis + 5-year timeline + practical Vedic remedies.
                  </p>
                </div>

                <button
                  type="submit"
                  id="hero-quick-submit-btn"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-amber-200" />
                  <span>Confirm Slot & Get Fee Discount</span>
                </button>

                <p className="text-[10px] text-center text-slate-500 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Strict Privacy Guaranteed • No Unwanted Spam Calls
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

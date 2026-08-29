import React from 'react';
import { 
  MapPin, 
  Navigation, 
  Users, 
  Star, 
  Sparkles, 
  Check, 
  Calendar, 
  MessageCircle,
  Building,
  ArrowRight
} from 'lucide-react';
import { GHAZIABAD_LOCALITIES, ASTROLOGER_PROFILE } from '../data/astrologyData';
import { CityLocality } from '../types';

interface LocalityCoverageProps {
  selectedLocality: string;
  onSelectLocality: (localityId: string) => void;
  onOpenBookingModal: (serviceId?: string, localityId?: string) => void;
}

export const LocalityCoverage: React.FC<LocalityCoverageProps> = ({
  selectedLocality,
  onSelectLocality,
  onOpenBookingModal
}) => {
  const activeLocality = GHAZIABAD_LOCALITIES.find(l => l.id === selectedLocality) || GHAZIABAD_LOCALITIES[0];

  const handleWhatsAppForLocality = (locality: CityLocality) => {
    const text = encodeURIComponent(`Pranam Acharya Devendra Shastri Ji. I reside in ${locality.name}, Ghaziabad (Near ${locality.landmark}). I would like to book a consultation slot.`);
    window.open(`https://wa.me/${ASTROLOGER_PROFILE.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="ghaziabad-areas" className="py-16 bg-stone-50/60 border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold">
            <Navigation className="w-3.5 h-3.5 text-amber-700" />
            <span>Hyperlocal Vedic Astrology Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-serif-heading">
            Best Astrologer Across All Localities in Ghaziabad
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Convenient chamber appointments in Indirapuram and Raj Nagar, plus home/office Vastu site visits and instant online consultations for every major neighborhood in Ghaziabad.
          </p>
        </div>

        {/* Interactive Locality Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin scrollbar-thumb-amber-300">
          {GHAZIABAD_LOCALITIES.map((locality) => {
            const isSelected = locality.id === selectedLocality;
            return (
              <button
                key={locality.id}
                id={`locality-tab-${locality.id}`}
                onClick={() => onSelectLocality(locality.id)}
                className={`shrink-0 px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-800 text-white shadow-md shadow-amber-900/20 scale-102'
                    : 'bg-white text-slate-700 hover:bg-amber-50 border border-slate-200'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-300' : 'text-amber-600'}`} />
                <span>{locality.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${isSelected ? 'bg-amber-900/70 text-amber-200' : 'bg-slate-100 text-slate-500'}`}>
                  {locality.pincode}
                </span>
              </button>
            );
          })}
        </div>

        {/* Highlighted Active Locality Feature Box */}
        <div className="bg-white rounded-3xl border-2 border-amber-300/80 shadow-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-amber-900 via-amber-950 to-stone-900 text-white p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Area Spotlight: {activeLocality.zone} Zone</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading">
                  Vedic Astrology & Kundli Services in {activeLocality.name}
                </h3>
                <p className="text-xs text-amber-200/90 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5" />
                  <span>Landmark Focus: {activeLocality.landmark} (PIN: {activeLocality.pincode})</span>
                </p>
              </div>

              <div className="flex items-center gap-4 bg-amber-900/60 backdrop-blur-md px-4 py-3 rounded-2xl border border-amber-500/30">
                <div className="text-center">
                  <p className="text-lg font-bold text-amber-300 font-serif-heading">{activeLocality.clientsServed}+</p>
                  <p className="text-[10px] text-amber-100">Consulted Here</p>
                </div>
                <div className="h-8 w-px bg-amber-700/60" />
                <div className="text-center">
                  <div className="flex items-center justify-center text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="text-xs font-bold ml-1">{activeLocality.avgRating}</span>
                  </div>
                  <p className="text-[10px] text-amber-100">Client Rating</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-slate-700 text-sm leading-relaxed">
                {activeLocality.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Most Requested Consultations in {activeLocality.name}:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeLocality.popularServices.map((serv, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-950 border border-amber-200 text-xs font-medium flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      {serv}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-amber-700" />
                  <span><strong>Travel to Chamber:</strong> {activeLocality.travelTimeFromChamber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-amber-700" />
                  <span><strong>Home Vastu:</strong> Available on prior request</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-amber-50/70 to-orange-50/50 p-5 rounded-2xl border border-amber-200 space-y-4">
              <h4 className="text-sm font-bold text-slate-900 font-serif-heading">
                Book Consultation for {activeLocality.name}
              </h4>
              <p className="text-xs text-slate-600">
                Choose between personal visit at Aditya Mega City (Indirapuram) / RDC (Raj Nagar) or direct video/audio consultation.
              </p>

              <div className="space-y-2">
                <button
                  id={`book-locality-btn-${activeLocality.id}`}
                  onClick={() => onOpenBookingModal(undefined, activeLocality.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-amber-900/10 transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>Book Appointment for {activeLocality.name}</span>
                </button>

                <button
                  onClick={() => handleWhatsAppForLocality(activeLocality)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-emerald-50 border border-emerald-500 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Acharya Ji Directly</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of All Ghaziabad Neighborhoods */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 font-serif-heading">
              Quick Directory of Ghaziabad Service Sectors
            </h3>
            <span className="text-xs text-slate-500 font-medium">Click any card to select</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GHAZIABAD_LOCALITIES.map((loc) => {
              const isSelected = loc.id === selectedLocality;
              return (
                <div
                  key={loc.id}
                  id={`locality-card-${loc.id}`}
                  onClick={() => onSelectLocality(loc.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-50/90 border-amber-400 shadow-md ring-2 ring-amber-400/30'
                      : 'bg-white border-slate-200 hover:border-amber-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{loc.name}</h4>
                      <p className="text-[11px] text-slate-500">{loc.landmark}</p>
                    </div>
                    <span className="text-[10px] font-semibold bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded">
                      {loc.pincode}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 mb-3">
                    {loc.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 flex items-center gap-1">
                      <Users className="w-3 h-3 text-amber-700" />
                      {loc.clientsServed}+ clients
                    </span>
                    <span className="text-amber-800 font-semibold flex items-center gap-0.5">
                      Select <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

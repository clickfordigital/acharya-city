import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Calendar, 
  Building, 
  Train, 
  ExternalLink,
  Car,
  CheckCircle2
} from 'lucide-react';
import { ASTROLOGER_PROFILE, GHAZIABAD_LOCALITIES, NEARBY_NCR_CITIES } from '../data/astrologyData';

interface ChamberLocationSectionProps {
  onOpenBookingModal: (serviceId?: string, localityId?: string) => void;
  selectedLocality: string;
  onSelectLocality?: (localityId: string) => void;
}

export const ChamberLocationSection: React.FC<ChamberLocationSectionProps> = ({
  onOpenBookingModal,
  selectedLocality,
  onSelectLocality
}) => {
  const chambers = ASTROLOGER_PROFILE.mainChambers;

  const handleOpenGoogleMaps = (chamberAddress: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(chamberAddress)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="chambers" className="py-14 bg-white border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold">
            <Building className="w-3.5 h-3.5 text-amber-700" />
            <span>Consultation Chambers & Localities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif-heading">
            Visit Acharya Ji's Chambers in Ghaziabad
          </h2>
          <p className="text-sm text-slate-600">
            Consult in person at Indirapuram (Trans-Hindon) or Raj Nagar RDC (Central Ghaziabad), or connect online.
          </p>
        </div>

        {/* Chambers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {chambers.map((chamber, index) => (
            <div
              key={index}
              className="rounded-2xl border-2 border-amber-200 bg-gradient-to-b from-amber-50/40 via-white to-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3.5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300">
                      Chamber {index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-1">
                      {chamber.name}
                    </h3>
                  </div>
                  <div className="p-2.5 rounded-xl bg-amber-100 text-amber-900 shrink-0">
                    <MapPin className="w-4 h-4 text-amber-800" />
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                    <span><strong>Address:</strong> {chamber.address}</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <Train className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" />
                    <span><strong>Metro / RRTS:</strong> {chamber.nearbyMetro}</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>Visiting Hours:</strong> {chamber.timings}</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <Phone className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                    <span><strong>Helpline:</strong> {chamber.phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => onOpenBookingModal(undefined, selectedLocality)}
                  className="py-2.5 px-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-300" />
                  <span>Book Appointment</span>
                </button>

                <button
                  onClick={() => handleOpenGoogleMaps(chamber.address)}
                  className="py-2.5 px-3 rounded-xl bg-white hover:bg-amber-50 border border-slate-300 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
                  <span>Directions</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Ghaziabad Neighborhoods Quick Badges */}
        <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-serif-heading flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Ghaziabad Localities Served Daily:</span>
            </h4>
            <span className="text-[11px] text-slate-500">Click any area to tailor consultation</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {GHAZIABAD_LOCALITIES.map((loc) => {
              const isSelected = selectedLocality === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => onSelectLocality && onSelectLocality(loc.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-amber-800 text-white font-bold shadow-xs'
                      : 'bg-white text-slate-700 border border-amber-200/80 hover:bg-amber-100/60 hover:text-amber-900'
                  }`}
                >
                  <MapPin className={`w-3 h-3 ${isSelected ? 'text-amber-300' : 'text-amber-600'}`} />
                  <span>{loc.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

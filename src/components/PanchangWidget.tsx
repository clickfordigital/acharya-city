import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Clock, 
  AlertTriangle, 
  Sparkles, 
  MapPin, 
  CalendarDays,
  CheckCircle2
} from 'lucide-react';
import { GHAZIABAD_PANCHANG_DATA, ASTROLOGER_PROFILE } from '../data/astrologyData';

interface PanchangWidgetProps {
  onOpenBookingModal: (serviceId?: string, localityId?: string) => void;
  selectedLocality: string;
}

export const PanchangWidget: React.FC<PanchangWidgetProps> = ({
  onOpenBookingModal,
  selectedLocality
}) => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const todayDateStr = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <section id="panchang" className="py-16 bg-amber-50/60 border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold">
            <CalendarDays className="w-3.5 h-3.5 text-amber-700" />
            <span>Ghaziabad Vedic Ephemeris (पंचांग)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-serif-heading">
            Today's Ghaziabad Panchang & Shubh Muhurat
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Real-time planetary coordinates calculated specifically for Ghaziabad (28.6692° N, 77.4538° E). Check auspicious timings for new purchases, Griha Pravesh, and business deals.
          </p>
        </div>

        <div className="bg-white rounded-3xl border-2 border-amber-300/80 shadow-xl overflow-hidden">
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-amber-800 to-amber-900 text-white p-4 sm:p-6 flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-700/80 border border-amber-500/40">
                <Sun className="w-6 h-6 text-amber-200 animate-spin-slow" />
              </div>
              <div>
                <p className="text-xs text-amber-200 font-medium">Daily Vedic Calendar for</p>
                <h3 className="text-lg font-bold font-serif-heading">{todayDateStr}</h3>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium">
              <div className="flex items-center gap-1.5 bg-amber-900/60 px-3 py-1.5 rounded-lg border border-amber-600/50">
                <MapPin className="w-3.5 h-3.5 text-amber-300" />
                <span>{GHAZIABAD_PANCHANG_DATA.city}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-amber-900/60 px-3 py-1.5 rounded-lg border border-amber-600/50">
                <Clock className="w-3.5 h-3.5 text-amber-300" />
                <span>IST: {currentTime || 'Loading...'}</span>
              </div>
            </div>
          </div>

          {/* Grid of Panchang Elements */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tithi & Nakshatra */}
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">Tithi (तिथि)</span>
                <Moon className="w-4 h-4 text-amber-700" />
              </div>
              <p className="text-sm font-bold text-slate-900">{GHAZIABAD_PANCHANG_DATA.tithi}</p>
              <div className="pt-2 border-t border-amber-100">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">Nakshatra (नक्षत्र)</span>
                <p className="text-xs font-semibold text-slate-800 mt-0.5">{GHAZIABAD_PANCHANG_DATA.nakshatra}</p>
              </div>
            </div>

            {/* Yoga & Karana */}
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">Yoga (योग)</span>
                <Sparkles className="w-4 h-4 text-amber-700" />
              </div>
              <p className="text-sm font-bold text-slate-900">{GHAZIABAD_PANCHANG_DATA.yoga}</p>
              <div className="pt-2 border-t border-amber-100">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">Karana (करण)</span>
                <p className="text-xs font-semibold text-slate-800 mt-0.5">{GHAZIABAD_PANCHANG_DATA.karana}</p>
              </div>
            </div>

            {/* Sun & Moon Timings */}
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">Surya & Chandra</span>
                <Sun className="w-4 h-4 text-amber-600" />
              </div>
              <div className="flex justify-between text-xs text-slate-700">
                <span>Sunrise (सूर्योदय):</span>
                <strong className="text-slate-900">{GHAZIABAD_PANCHANG_DATA.sunrise}</strong>
              </div>
              <div className="flex justify-between text-xs text-slate-700">
                <span>Sunset (सूर्यास्त):</span>
                <strong className="text-slate-900">{GHAZIABAD_PANCHANG_DATA.sunset}</strong>
              </div>
              <div className="flex justify-between text-xs text-slate-700">
                <span>Moonrise (चंद्रोदय):</span>
                <strong className="text-slate-900">{GHAZIABAD_PANCHANG_DATA.moonrise}</strong>
              </div>
            </div>

            {/* Muhurat Alert (Rahu Kaal & Abhijit) */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-amber-50 border border-emerald-300 space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Abhijit Muhurat (शुभ समय)</span>
              </div>
              <p className="text-xs font-bold text-emerald-900 bg-white/80 p-2 rounded-lg border border-emerald-200">
                {GHAZIABAD_PANCHANG_DATA.abhijitMuhurat}
              </p>

              <div className="pt-2 border-t border-amber-200">
                <div className="flex items-center gap-1.5 text-rose-800 font-bold text-[11px]">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                  <span>Rahu Kaal (राहु काल)</span>
                </div>
                <p className="text-[11px] font-medium text-rose-900 mt-0.5">
                  {GHAZIABAD_PANCHANG_DATA.rahuKaal}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Choghadiya Strip */}
          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-700">
              <span className="font-bold text-slate-900">Today's Auspicious Choghadiya:</span>
              <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200">
                <strong>Amrit (अमृत):</strong> {GHAZIABAD_PANCHANG_DATA.choghadiya.amrit}
              </span>
              <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200">
                <strong>Shubh (शुभ):</strong> {GHAZIABAD_PANCHANG_DATA.choghadiya.shubh}
              </span>
              <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200">
                <strong>Laabh (लाभ):</strong> {GHAZIABAD_PANCHANG_DATA.choghadiya.laabh}
              </span>
            </div>

            <button
              onClick={() => onOpenBookingModal(undefined, selectedLocality)}
              className="px-4 py-2 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Book Auspicious Muhurat Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

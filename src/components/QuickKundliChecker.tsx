import React, { useState } from 'react';
import { 
  Sparkles, 
  Compass, 
  Gem, 
  CheckCircle, 
  Calendar, 
  Info,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { RASHI_DATA, ASTROLOGER_PROFILE } from '../data/astrologyData';

interface QuickKundliCheckerProps {
  onOpenBookingModal: (serviceId?: string, localityId?: string) => void;
  selectedLocality: string;
}

export const QuickKundliChecker: React.FC<QuickKundliCheckerProps> = ({
  onOpenBookingModal,
  selectedLocality
}) => {
  const rashiKeys = Object.keys(RASHI_DATA);
  const [selectedRashiKey, setSelectedRashiKey] = useState<string>(rashiKeys[0]);
  const activeRashi = RASHI_DATA[selectedRashiKey];

  // Quick Dob state for calculation preview
  const [dobInput, setDobInput] = useState('');
  const [dobSubmitted, setDobSubmitted] = useState(false);

  const handleDobCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dobInput) return;
    setDobSubmitted(true);
  };

  return (
    <section id="quick-checker" className="py-16 bg-gradient-to-b from-stone-900 via-amber-950 to-stone-950 text-white relative overflow-hidden">
      {/* Decorative Astrological Wheel Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-900/60 text-amber-300 border border-amber-500/30 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Astrological Insight</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-heading text-amber-100">
            Instant Rashi & Vedic Planetary Checker
          </h2>
          <p className="text-sm sm:text-base text-amber-200/80">
            Select your Moon Sign (Rashi) to discover current planetary transit highlights, lucky attributes, and Vedic remedies verified for Ghaziabad residents.
          </p>
        </div>

        {/* 12 Rashis Selector Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mb-8">
          {rashiKeys.map((rashiName) => {
            const isSelected = rashiName === selectedRashiKey;
            const rashi = RASHI_DATA[rashiName];
            return (
              <button
                key={rashiName}
                onClick={() => setSelectedRashiKey(rashiName)}
                className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-amber-600 to-amber-800 border-amber-300 text-white shadow-lg shadow-amber-950/40 scale-103'
                    : 'bg-stone-900/80 border-amber-900/40 text-amber-200/80 hover:bg-stone-800 hover:border-amber-700'
                }`}
              >
                <p className="font-vedic text-sm font-bold text-amber-300">{rashi.hindiName}</p>
                <p className="text-xs font-medium text-amber-100 mt-0.5 truncate">{rashi.name}</p>
              </button>
            );
          })}
        </div>

        {/* Active Rashi Detailed Result Card */}
        <div className="bg-stone-900/90 rounded-3xl border border-amber-500/40 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Planetary Attributes (5 cols) */}
            <div className="lg:col-span-5 space-y-4 border-b lg:border-b-0 lg:border-r border-amber-800/40 pb-6 lg:pb-0 lg:pr-8">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-amber-600/30 border border-amber-400/50 flex items-center justify-center text-amber-300">
                  <span className="font-vedic text-2xl">राशि</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-serif-heading text-amber-100">
                    {activeRashi.name} ({activeRashi.hindiName})
                  </h3>
                  <p className="text-xs text-amber-400 font-medium flex items-center gap-2">
                    <span>Element: {activeRashi.element}</span>
                    <span>•</span>
                    <span>Lord: {activeRashi.rulingPlanet}</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-stone-800/70 border border-amber-900/50 space-y-1">
                  <span className="text-[10px] uppercase font-semibold text-amber-400">Lucky Number</span>
                  <p className="text-xl font-bold text-amber-100 font-serif-heading">{activeRashi.luckyNumber}</p>
                </div>
                <div className="p-3 rounded-xl bg-stone-800/70 border border-amber-900/50 space-y-1">
                  <span className="text-[10px] uppercase font-semibold text-amber-400">Lucky Color</span>
                  <p className="text-xs font-bold text-amber-100 mt-1">{activeRashi.luckyColor}</p>
                </div>
                <div className="p-3 rounded-xl bg-stone-800/70 border border-amber-900/50 space-y-1 col-span-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-semibold text-amber-400 flex items-center gap-1">
                      <Gem className="w-3 h-3 text-cyan-400" />
                      Prescribed Life Gemstone
                    </span>
                    <span className="text-[10px] text-amber-300/70">Requires Lagna check</span>
                  </div>
                  <p className="text-xs font-bold text-cyan-200 mt-0.5">{activeRashi.gemstone}</p>
                </div>
              </div>
            </div>

            {/* Right: Current Transit & Astrological Guidance (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Current 2026 Planetary Transit Alignment:</span>
                </div>
                <p className="text-sm text-amber-100/90 leading-relaxed bg-amber-950/40 p-3.5 rounded-xl border border-amber-800/50">
                  {activeRashi.currentTransitFocus}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Recommended Daily Vedic Remedy:</span>
                </div>
                <p className="text-xs text-amber-200/80 leading-relaxed bg-stone-800/70 p-3.5 rounded-xl border border-stone-700">
                  {activeRashi.advice}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-amber-300/80 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Personalized chart analysis includes all 12 houses and Mahadashas.</span>
                </p>

                <button
                  onClick={() => onOpenBookingModal('kundli-reading', selectedLocality)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-950/40 transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Get Full Chart Reading for {activeRashi.name}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

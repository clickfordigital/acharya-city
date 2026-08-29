import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock, 
  Compass, 
  Heart,
  ChevronRight
} from 'lucide-react';
import { ASTROLOGER_PROFILE, GHAZIABAD_LOCALITIES, ASTROLOGY_SERVICES } from '../data/astrologyData';

interface FooterProps {
  onSelectLocality: (localityId: string) => void;
  onOpenBookingModal: (serviceId?: string, localityId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectLocality,
  onOpenBookingModal
}) => {
  return (
    <footer className="bg-stone-950 text-slate-300 pt-16 pb-28 sm:pb-24 border-t border-amber-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-md">
                <span className="font-vedic text-xl font-bold">ॐ</span>
              </div>
              <div>
                <span className="font-serif-heading font-bold text-lg text-white block">
                  Acharya Ganesh
                </span>
                <span className="text-xs text-amber-400 font-medium">
                  {ASTROLOGER_PROFILE.tagline} • Gold Medalist Vedic Astrologer & Vastu Acharya
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Practicing authentic Parashari Vedic Astrology, Kundli Milan, and Zero-Demolition Vastu in Ghaziabad for 25+ years. Guiding individuals and families with scientific clarity, ethics, and compassionate non-fear-based remedies.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href={`tel:${ASTROLOGER_PROFILE.phone}`} className="hover:text-amber-300">
                  {ASTROLOGER_PROFILE.phone}
                </a>
                <span className="text-slate-500">|</span>
                <a href={`tel:${ASTROLOGER_PROFILE.phone2}`} className="hover:text-amber-300">
                  {ASTROLOGER_PROFILE.phone2}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{ASTROLOGER_PROFILE.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-amber-200 font-serif-heading uppercase tracking-wider">
              Vedic Astrology Services
            </h4>
            <ul className="space-y-2 text-xs">
              {ASTROLOGY_SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onOpenBookingModal(s.id)}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left text-slate-300"
                  >
                    <ChevronRight className="w-3 h-3 text-amber-500 shrink-0" />
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Ghaziabad Areas Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-amber-200 font-serif-heading uppercase tracking-wider">
              Ghaziabad Areas Covered
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs">
              {GHAZIABAD_LOCALITIES.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => {
                    onSelectLocality(loc.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left text-slate-400 hover:text-amber-300 transition-colors truncate"
                >
                  • {loc.name}
                </button>
              ))}
            </div>
          </div>

          {/* Chambers Contact Card (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-amber-200 font-serif-heading uppercase tracking-wider">
              Chambers
            </h4>
            <div className="p-3 rounded-xl bg-stone-900 border border-amber-900/40 text-[11px] space-y-2">
              <div>
                <p className="font-bold text-white">Indirapuram Chamber:</p>
                <p className="text-slate-400">Aditya Mega City, Vaibhav Khand, Ghaziabad</p>
              </div>
              <div className="pt-1.5 border-t border-stone-800">
                <p className="font-bold text-white">Raj Nagar Chamber:</p>
                <p className="text-slate-400">RDC Commercial Complex, Raj Nagar, Ghaziabad</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Ethical Notice */}
        <div className="py-6 border-b border-stone-800/80 text-[11px] text-slate-500 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-400">Astrological Disclaimer:</strong> Vedic Astrology (Jyotish) is an ancient predictive science and advisory medium based on planetary positions and individual birth charts. Consultations are intended for psychological clarity, spiritual direction, and self-understanding. Astrological remedies should be practiced alongside personal diligence, medical counsel, and ethical conduct.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-wrap justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Acharya Ganesh. Best Astrologer in Ghaziabad & NCR. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              Verified Vedic Jyotish Practice
            </span>
            <span>•</span>
            <span>Indirapuram & Raj Nagar Chambers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

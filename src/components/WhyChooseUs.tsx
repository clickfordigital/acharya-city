import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  BookOpen, 
  Heart, 
  Sparkles, 
  Compass, 
  CheckCircle2,
  Calendar,
  Building
} from 'lucide-react';
import { ASTROLOGER_PROFILE } from '../data/astrologyData';

interface WhyChooseUsProps {
  onOpenBookingModal: (serviceId?: string, localityId?: string) => void;
  selectedLocality: string;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  onOpenBookingModal,
  selectedLocality
}) => {
  const pillars = [
    {
      icon: <Award className="w-6 h-6 text-amber-700" />,
      title: 'Gold Medalist & Academic Pedigree',
      subtitle: 'M.A. Jyotish from BHU Varanasi',
      description: 'Trained under traditional Vedic pandits and revered Sanskrit scholars at Banaras Hindu University. Classical Parashari & Jaimini principles applied with mathematical precision.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-700" />,
      title: 'Zero Fear-Mongering & Honest Remedies',
      subtitle: 'Simple, Affordable Solutions',
      description: 'Unlike commercial astrologers who scare clients into costly thousands-of-rupees pujas, Acharya ji prescribes clean Vedic stotras, planetary mantras, and lifestyle/karmic corrections.'
    },
    {
      icon: <Building className="w-6 h-6 text-blue-700" />,
      title: 'Two Physical Chambers in Ghaziabad',
      subtitle: 'Indirapuram & Raj Nagar',
      description: 'Real physical presence for over two decades. Visit in person at Aditya Mega City (Indirapuram) or RDC (Raj Nagar) with prior appointment, or consult via secure video call.'
    },
    {
      icon: <Compass className="w-6 h-6 text-purple-700" />,
      title: 'Specialized Ghaziabad High-Rise Vastu',
      subtitle: 'Zero Structural Demolition',
      description: 'Deep experience with typical society floorplans (Indirapuram, Vaishali, Raj Nagar Ext., Crossings Republik). Energy balancing using metal wires, color therapy, and sacred geometry.'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & Trust Narrative */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Why 18,500+ Families Trust Us</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-serif-heading leading-tight">
              Why Acharya Devendra Shastri is Rated the Best Astrologer in Ghaziabad
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Astrology is a divine science of timing and planetary influences (Jyotish Vigyan). When interpreted correctly, it provides clarity during life's critical crossroads — whether you are choosing between career paths, evaluating matrimonial compatibility, or harmonizing your living space.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Clear 5-Year Life Timeline & Mahadasha mapping</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Confidentiality & Patient 45-minute 1-on-1 dialogue</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Prashna Kundli available if exact birth time is missing</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenBookingModal(undefined, selectedLocality)}
                className="px-6 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Schedule a 1-on-1 Consultation</span>
              </button>
            </div>
          </div>

          {/* Right Column: 4 Pillars Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-amber-50/40 border border-amber-200/70 hover:border-amber-400 hover:bg-amber-50/80 transition-all space-y-3"
              >
                <div className="p-3 rounded-xl bg-white w-fit shadow-xs border border-amber-200/80">
                  {pillar.icon}
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-serif-heading">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-amber-800 font-semibold mt-0.5">
                    {pillar.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

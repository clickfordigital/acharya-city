import React, { useState } from 'react';
import { 
  Sparkles, 
  HeartHandshake, 
  Briefcase, 
  Home, 
  ShieldAlert, 
  Gem, 
  Check, 
  Calendar, 
  MessageCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { ASTROLOGY_SERVICES, ASTROLOGER_PROFILE } from '../data/astrologyData';
import { AstrologerService } from '../types';

interface ServicesSectionProps {
  onOpenBookingModal: (serviceId?: string, localityId?: string) => void;
  selectedLocality: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBookingModal,
  selectedLocality
}) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'kundli' | 'marriage' | 'career' | 'vastu'>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-rose-600" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-blue-600" />;
      case 'Home':
        return <Home className="w-5 h-5 text-emerald-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-purple-600" />;
      case 'Gem':
        return <Gem className="w-5 h-5 text-cyan-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-600" />;
    }
  };

  const handleWhatsAppService = (service: AstrologerService) => {
    const text = encodeURIComponent(`Pranam Acharya Ji. I am interested in booking "${service.title}" for a consultation in Ghaziabad.`);
    window.open(`https://wa.me/${ASTROLOGER_PROFILE.whatsappNumber}?text=${text}`, '_blank');
  };

  const filteredServices = ASTROLOGY_SERVICES.filter(service => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'kundli' && (service.id.includes('kundli') || service.id.includes('gemstone'))) return true;
    if (filterCategory === 'marriage' && service.id.includes('milan')) return true;
    if (filterCategory === 'career' && service.id.includes('career')) return true;
    if (filterCategory === 'vastu' && service.id.includes('vastu')) return true;
    return true;
  });

  return (
    <section id="services" className="py-16 bg-white border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Classical Vedic Consultation Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-serif-heading">
            Authentic Astrological Guidance in Ghaziabad
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Scientifically grounded Vedic astrology and Vastu Shastra tailored to resolve life challenges without superstitious panic or expensive rituals.
          </p>

          {/* Quick Filter Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'kundli', label: 'Kundli & Horoscope' },
              { id: 'marriage', label: 'Marriage & Matchmaking' },
              { id: 'career', label: 'Career & Business' },
              { id: 'vastu', label: 'Flat & Villa Vastu' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  filterCategory === tab.id
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-2xl border border-amber-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group hover:border-amber-400"
            >
              <div>
                {/* Card Header & Badge */}
                <div className="p-5 pb-3 border-b border-amber-100/60 bg-gradient-to-b from-amber-50/50 to-transparent">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-white shadow-xs border border-amber-200/80 group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-0.5 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif-heading">
                    {service.title}
                  </h3>
                  <p className="text-xs text-amber-800 font-medium font-vedic mt-0.5">
                    {service.hindiTitle}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {service.tagline}
                  </p>
                </div>

                {/* Benefits List */}
                <div className="p-5 space-y-3">
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-1">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Common problems tags */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {service.popularFor.map((item, idx) => (
                        <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                          #{item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with Pricing & CTA */}
              <div className="p-5 pt-3 bg-slate-50/70 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-slate-900 font-serif-heading">
                      ₹{service.discountedPrice}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      ₹{service.originalPrice}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      City Discount
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    id={`book-service-btn-${service.id}`}
                    onClick={() => onOpenBookingModal(service.id, selectedLocality)}
                    className="py-2.5 px-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-amber-300" />
                    <span>Book Slot</span>
                  </button>

                  <button
                    onClick={() => handleWhatsAppService(service)}
                    className="py-2.5 px-3 rounded-xl bg-white hover:bg-emerald-50 border border-emerald-500 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about customized consultations */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs sm:text-sm font-semibold text-amber-950">
            Need a customized consultation (e.g. Newborn Naamkaran, Corporate Vastu, or Emergency Prashna Kundli)?
          </p>
          <p className="text-xs text-slate-600">
            Acharya Devendra Shastri provides tailored astrological remedies for families and institutions across Ghaziabad & Delhi NCR.
          </p>
          <a
            href={`tel:${ASTROLOGER_PROFILE.phone}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 underline decoration-amber-400 decoration-2"
          >
            <span>Call Helpline {ASTROLOGER_PROFILE.phone} for immediate assistance</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

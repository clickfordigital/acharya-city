import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  ShieldCheck, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Calendar
} from 'lucide-react';
import { TESTIMONIALS, ASTROLOGER_PROFILE } from '../data/astrologyData';

interface TestimonialsSectionProps {
  onOpenBookingModal: (serviceId?: string, localityId?: string) => void;
  selectedLocality: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenBookingModal,
  selectedLocality
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  return (
    <section id="reviews" className="py-16 bg-stone-50/60 border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Real Experiences from Ghaziabad Residents</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-serif-heading">
            Trusted by 18,500+ Clients in Ghaziabad & NCR
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Read how authentic Vedic astrology guidance and practical remedies have brought clarity, peace, and progress to local families.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-2xl border border-amber-200/80 shadow-md hover:shadow-lg transition-all flex flex-col justify-between relative space-y-4"
            >
              <div className="space-y-3">
                {/* Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{testimonial.date}</span>
                </div>

                <div className="inline-block px-2 py-0.5 rounded bg-amber-50 text-amber-900 text-[10px] font-semibold border border-amber-200">
                  {testimonial.serviceUsed}
                </div>

                {/* Comment */}
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Client Profile */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${testimonial.avatarBg} text-white font-bold text-xs flex items-center justify-center shadow-xs shrink-0`}>
                  {testimonial.clientName.charAt(0)}
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1">
                    <p className="text-xs font-bold text-slate-900 truncate">{testimonial.clientName}</p>
                    {testimonial.verified && (
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" title="Verified Client" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 flex items-center gap-1 truncate">
                    <MapPin className="w-3 h-3 text-amber-700 shrink-0" />
                    <span>{testimonial.locality}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metric Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-amber-200 p-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-lg font-serif-heading">
              4.9
            </div>
            <div>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                ))}
              </div>
              <p className="text-xs font-semibold text-slate-800 mt-0.5">
                Rated #1 Astrologer in Ghaziabad based on 1,400+ public reviews
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBookingModal(undefined, selectedLocality)}
            className="px-5 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-amber-300" />
            <span>Experience the Guidance Yourself</span>
          </button>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  Phone,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { ASTROLOGER_PROFILE } from '../data/astrologyData';

interface FaqSectionProps {
  cityName: string;
  onOpenBookingModal: (serviceId?: string, localityId?: string) => void;
  selectedLocality?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  cityName,
  onOpenBookingModal,
  selectedLocality
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Namaste Acharya Ganesh, I have a question regarding consultation with Astrologer Hanish Bagga in ${cityName}.`);
    window.open(`https://wa.me/${ASTROLOGER_PROFILE.whatsappNumber}?text=${text}`, '_blank');
  };

  const faqs = [
    {
      question: `Q1. What services does the best astrologer in ${cityName} offer?`,
      answerNode: (
        <div className="space-y-2.5">
          <p>
            <strong>Ans:</strong> Services offered by Astrologers may vary according to different astrologers. However, here are some common services that a reputable astrologer offers:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-1.5 font-semibold text-amber-950">
            <div className="flex items-center gap-1.5">• Astro Vastu</div>
            <div className="flex items-center gap-1.5">• Vedic Astrology</div>
            <div className="flex items-center gap-1.5">• Match Making</div>
            <div className="flex items-center gap-1.5">• Career Predictions</div>
            <div className="flex items-center gap-1.5">• Residential Vastu</div>
            <div className="flex items-center gap-1.5">• Horoscope Readings</div>
          </div>
          <p className="text-stone-600 text-xs">
            It's essential to choose an astrologer with a good reputation. Remember that the quality and effectiveness of astrological services can vary based on the astrologer's expertise.
          </p>
        </div>
      )
    },
    {
      question: `Q2. What qualities define the best astrologer in ${cityName}?`,
      answerNode: (
        <div className="space-y-2.5">
          <p>
            <strong>Ans:</strong> The best qualities in an astrologer can be defined by the combinations of few fundamental qualities such as:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-2 font-medium text-stone-800 text-xs sm:text-sm">
            <li>• Expertise in Parashari & Jamini Vedic systems</li>
            <li>• Precision in Mahadasha & Antardasha timing</li>
            <li>• Clear communication skills with deep empathy</li>
            <li>• Compassionate & non-judgemental attitude</li>
            <li>• Continuous research and empirical case studies</li>
            <li>• High professional ethics and strict confidentiality</li>
            <li>• Verified client reviews and community trust</li>
          </ul>
          <p className="text-stone-600 text-xs pt-1">
            These qualities collectively contribute to the unmatched reputation and proven effectiveness of Astrologer Hanish Bagga in {cityName}.
          </p>
        </div>
      )
    },
    {
      question: `Q3. Who is a genuine astrologer in ${cityName}?`,
      answerNode: (
        <div className="space-y-2">
          <p>
            <strong>Ans:</strong> <strong>Astrologer Hanish Bagga</strong> is the genuine Astrologer in {cityName}. He is not motivated solely by commercial gain but is genuinely committed to helping individuals by providing practical, cost-free or low-cost Vedic remedies.
          </p>
          <p className="font-bold text-amber-900">
            One comprehensive solution to all your life challenges – Hanish Bagga at Acharya Ganesh.
          </p>
        </div>
      )
    },
    {
      question: `Q4. What is the general cost associated with consulting the best astrologer?`,
      answerNode: (
        <div className="space-y-2">
          <p>
            <strong>Ans:</strong> We believe that sacred Vedic astrology should be utilized to uplift people and solve real-life hardships. Consequently, we have kept our consultation charges accessible, transparent, and competitive starting from ₹2,100. With our online and direct telephonic astrology services, thousands have found peace and direction.
          </p>
        </div>
      )
    },
    {
      question: `Q5. Can astrology by date of birth predict the future?`,
      answerNode: (
        <div className="space-y-2">
          <p>
            <strong>Ans:</strong> Yes, Vedic astrology can accurately predict tendencies, favorable periods, and potential roadblocks with the help of your exact date, time, and place of birth. Astrologers analyze planetary alignments (Graha Sthiti), house lords (Bhavas), and transits (Gochar) to decipher upcoming life cycles.
          </p>
          <p className="text-xs text-stone-500">
            For educational videos and weekly astrological insights, subscribe to our YouTube channel: <strong>Acharya Ganesh</strong>.
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="faqs" className="py-14 sm:py-18 bg-white border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        {/* Section Header - Center Aligned */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-300 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-serif-heading tracking-tight">
            FAQs about Best Astrologer in {cityName}
          </h2>

          <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full" />

          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto">
            Everything you need to know before booking your personalized Vedic astrology consultation with Astrologer Hanish Bagga
          </p>
        </div>

        {/* FAQ Accordion List - Centered Container */}
        <div className="space-y-3.5 text-left pt-2">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-stone-50/50 rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:border-amber-300 transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-stone-900 flex items-center justify-between gap-4 hover:bg-amber-50/40 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${isOpen ? 'bg-amber-700' : 'bg-stone-400'}`} />
                    <span>{faq.question}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-amber-800 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-200/80 bg-white">
                    {faq.answerNode}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Center-Aligned "Still Have Questions?" Contact Card */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-900 via-stone-900 to-amber-950 text-white shadow-xl text-center space-y-4 border border-amber-700/40">
          <div className="space-y-1.5 max-w-xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold font-serif-heading text-amber-200">
              Still Have a Question Regarding Consultation in {cityName}?
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/80">
              Our Vedic astrology support desk is available to assist you with appointment slots, report delivery timelines, and queries.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleWhatsApp}
              className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat via WhatsApp</span>
            </button>

            <a
              href={`tel:${ASTROLOGER_PROFILE.phone}`}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-2 border border-amber-300/30 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Call Helpline ({ASTROLOGER_PROFILE.phone})</span>
            </a>

            <button
              onClick={() => onOpenBookingModal(undefined, selectedLocality)}
              className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs font-extrabold flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

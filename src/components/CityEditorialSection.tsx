import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  Compass, 
  Heart, 
  Briefcase, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  Send,
  MapPin,
  Flame,
  Activity,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { 
  ASTROLOGER_PROFILE, 
  GHAZIABAD_LOCALITIES, 
  SERVICE_CATEGORIES, 
  FAQS,
  MAJOR_CITIES_LIST 
} from '../data/astrologyData';

interface CityEditorialSectionProps {
  cityName: string;
  selectedLocality: string;
  onSelectLocality: (localityId: string) => void;
  onOpenBookingModal: (serviceId?: string, localityId?: string) => void;
}

export const CityEditorialSection: React.FC<CityEditorialSectionProps> = ({
  cityName,
  selectedLocality,
  onSelectLocality,
  onOpenBookingModal
}) => {
  // Lead Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Astrology Guidance',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Interactive Topic Filter
  const [activeTopic, setActiveTopic] = useState<'all' | 'career' | 'marriage' | 'vastu' | 'health' | 'wealth'>('all');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      onOpenBookingModal(formData.service, selectedLocality);
      setFormSubmitted(false);
      setFormData({ fullName: '', email: '', phone: '', service: 'Astrology Guidance', message: '' });
    }, 1500);
  };

  const handleWhatsAppCall = () => {
    const text = encodeURIComponent(`Hello Astrologer Hanish Bagga Ji. I would like to book a 1-on-1 Consultation Call regarding my horoscope.`);
    window.open(`https://wa.me/${ASTROLOGER_PROFILE.whatsappNumber}?text=${text}`, '_blank');
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-8 sm:py-12 bg-white text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
          {/* ================= LEFT MAIN EDITORIAL CONTENT (8 Cols) ================= */}
          <div className="lg:col-span-8 space-y-10">
            {/* 1. Best Astrologer in City Section */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Premier Vedic Jyotish & Astro-Vastu Guidance</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-stone-900 leading-snug">
                Best Astrologer in {cityName}
              </h2>

              <div className="text-sm sm:text-base text-stone-700 leading-relaxed space-y-3.5 font-normal">
                <p>
                  Do you currently experience issues? Your planets and stars are most likely not where you maintain that they should be. There are occasions when you can't distinguish the reason for your issues in {cityName}, and in those cases, you should look for the advice of an expert astrologer who can help you. Contact astrologer{' '}
                  <strong className="text-amber-900 font-semibold cursor-pointer hover:underline" onClick={() => onOpenBookingModal()}>
                    Hanish Bagga
                  </strong>{' '}
                  immediately if you want to utilize her practiced astrology, horoscope, and Best Astrologer in {cityName}. He is a specialist in this field and will make a point to track down the most fitting solution to your interests in general. You can exploit every last bit of his services at the least conceivable expense. He is famous for delivering accurate results. So why are you still thinking? Get Astrologer Hanish Bagga to settle your problems immediately.
                </p>

                <p>
                  With his significant knowledge of astrology, Hanish Bagga has assisted endless people in {cityName} and across India with discovering their actual potential and defeating problems preventing their way to progress. Contact Hanish Bagga if you are searching for a top-rated Astrologer in {cityName}. Astrologer Hanish Bagga is a respected astrologer with a deep understanding of astrology. He is a specialist in Vedic Astrology, Kundali, Janampatri, Vastu Dosha, Horoscopes,{' '}
                  <span className="text-amber-800 font-semibold underline cursor-pointer" onClick={() => onOpenBookingModal('match-making')}>
                    match making
                  </span>, Numerology, Love Marriage Issues, Naukri Issue Solutions, Nadi Astrology, Vashikaran remedies, and so on.
                </p>

                <div className="p-3 bg-amber-50/70 border-l-4 border-amber-700 rounded-r-xl text-xs sm:text-sm text-stone-800">
                  <strong>Read Also: </strong>
                  <button 
                    onClick={() => onOpenBookingModal('match-making')}
                    className="text-amber-900 font-bold hover:underline cursor-pointer ml-1"
                  >
                    Best Astrologer for Match-Making & Kundli Milan in NCR & North India
                  </button>
                </div>
              </div>
            </div>

            {/* 2. Interactive Topic Pillars Selector */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-50/80 via-white to-amber-50/80 border border-amber-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-900 uppercase tracking-wider font-serif-heading">
                  Quick Focus Consultation Areas
                </span>
                <span className="text-[11px] text-amber-800 font-medium">Click to explore solutions</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {SERVICE_CATEGORIES.slice(0, 6).map((service) => (
                  <button
                    key={service.id}
                    onClick={() => onOpenBookingModal(service.id, selectedLocality)}
                    className="p-2.5 rounded-xl bg-white border border-stone-200 hover:border-amber-500 hover:bg-amber-50/50 text-left transition-all group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-stone-900 group-hover:text-amber-900">{service.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-700 transition-transform group-hover:translate-x-0.5" />
                    </div>
                    <span className="text-[11px] text-stone-500 line-clamp-1 mt-1">{service.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Experience The Excellence of Astrologer Hanish Bagga */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-stone-900 leading-snug">
                Experience The Excellence of Astrologer Hanish Bagga in {cityName}
              </h2>

              <div className="text-sm sm:text-base text-stone-700 leading-relaxed space-y-3.5 font-normal">
                <p>
                  Vedic astrology is viewed as a fortune of India, and Astrologer Hanish Bagga's genuine vision to fix the issues of thousands of people adds to keeping up with its importance. Assuming you wish to experience the magic of Indian soothsaying, Hanish Bagga is the right choice for you.
                </p>

                <p>
                  While there are various astrologers accessible in {cityName}, Hanish Bagga stands apart as quite possibly one of the most remarkable astrologers in the state. You will observe his expertise when you consult him, giving you exact results and solutions for any personal and professional problems you might be looking for in your job or life.
                </p>

                <p>
                  A closer glance at Astrologer Hanish Bagga's profession reveals that his prosperity and success aren't for the time being or because of magical powers. He has been practicing Vedic astrology, relationship astrology, horoscope reading, janam kundali understanding, and profound practices across India, including {cityName}, since early on. His devotion and expertise have acquired him widespread appreciation.
                </p>
              </div>

              {/* 3 Core Strengths Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-800 font-bold text-xs font-serif-heading">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Non-Fear Based</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-snug">No superstition or forced rituals; purely logical Vedic remedies.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-800 font-bold text-xs font-serif-heading">
                    <Compass className="w-4 h-4 text-amber-700" />
                    <span>Zero Demolition Vastu</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-snug">Fix energy blockages in apartments without breaking walls.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-800 font-bold text-xs font-serif-heading">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>98.6% Proven Results</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-snug">Over 40,000 satisfied consultations across India & abroad.</p>
                </div>
              </div>
            </div>

            {/* 4. Golden CTA Banner matching screenshot */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 border border-amber-300 shadow-md p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Background Zodiac Wheel Artwork */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-64 h-64 text-amber-900 animate-spin-slow">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="1" />
                  <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="1" />
                  <line x1="36" y1="36" x2="164" y2="164" stroke="currentColor" strokeWidth="1" />
                  <line x1="36" y1="164" x2="164" y2="36" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>

              {/* Left Text in Banner */}
              <div className="relative z-10 space-y-1 text-center sm:text-left">
                <span className="font-serif-heading italic text-lg sm:text-xl text-stone-900 font-semibold block">
                  Design Your Own Future
                </span>
                <h3 className="font-serif-heading font-extrabold text-xl sm:text-2xl text-stone-950 leading-tight">
                  Book your Consultation and Start the Journey Today!
                </h3>
              </div>

              {/* Right Button in Banner */}
              <div className="relative z-10 shrink-0">
                <button
                  onClick={() => onOpenBookingModal(undefined, selectedLocality)}
                  className="px-8 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm sm:text-base shadow-lg transition-all transform hover:scale-105 cursor-pointer"
                >
                  Book Now
                </button>
              </div>
            </div>

            {/* 5. Best Astrology Solutions in City */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-stone-900 leading-snug">
                Best Astrology Solutions in {cityName} with Hanish Bagga
              </h2>

              <div className="text-sm sm:text-base text-stone-700 leading-relaxed space-y-3 font-normal">
                <p>
                  Are you looking for a trustworthy astrologer in {cityName}? If yes, then you can reach out to Astrologer Hanish Bagga, who is known for being the Best Astrologer in {cityName}.
                </p>

                <p>
                  Astrologer Hanish Bagga offers genuine solutions that work for all mysterious and Vastu-related issues. He is one of the most recognized astrologers and the best Astrology Consultant in {cityName}. He has broad knowledge in{' '}
                  <button 
                    onClick={() => onOpenBookingModal('astrology-guidance')}
                    className="text-amber-800 font-bold underline hover:text-amber-900 cursor-pointer"
                  >
                    Astrology Services
                  </button>
                  . His ideas are easy and smooth for everybody in {cityName} to apply. He helped a lot of others with defeating their life obstacles.
                </p>

                <div className="p-3 bg-amber-50/70 border-l-4 border-amber-700 rounded-r-xl text-xs sm:text-sm text-stone-800">
                  <strong>Read Also: </strong>
                  <button 
                    onClick={() => onOpenBookingModal('match-making')}
                    className="text-amber-900 font-bold hover:underline cursor-pointer ml-1"
                  >
                    Best Astrologer for Match-Making in Northern & Central India
                  </button>
                </div>
              </div>
            </div>

            {/* 6. FAQs Accordion Section Matching Screenshot */}
            <div className="space-y-6 pt-4 border-t border-stone-200">
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-stone-900">
                  FAQs about Best Astrologer in {cityName}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600">
                  Everything you need to know before booking your astrological consultation
                </p>
              </div>

              {/* Accordion Questions */}
              <div className="space-y-3">
                {/* Q1: Services Offered */}
                <div className="rounded-xl border border-stone-200 overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleFaq(0)}
                    className="w-full p-4 text-left font-bold text-sm sm:text-base text-stone-900 flex items-center justify-between gap-3 hover:bg-stone-50 transition-colors"
                  >
                    <span>Q1. What services does the best astrologer in {cityName} offer?</span>
                    {openFaqIndex === 0 ? <ChevronUp className="w-4 h-4 text-amber-800 shrink-0" /> : <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />}
                  </button>
                  {openFaqIndex === 0 && (
                    <div className="p-4 pt-0 text-xs sm:text-sm text-stone-700 space-y-2.5 border-t border-stone-100 bg-stone-50/50">
                      <p>
                        <strong>Ans:</strong> Services offered by Astrologers may vary according to different astrologers. However, here are some common services that a reputable astrologer offers:
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 font-semibold text-amber-950">
                        <div className="flex items-center gap-1.5">• Astro vastu</div>
                        <div className="flex items-center gap-1.5">• Astrology</div>
                        <div className="flex items-center gap-1.5">• Match Making</div>
                        <div className="flex items-center gap-1.5">• Career Predictions</div>
                        <div className="flex items-center gap-1.5">• Vastu</div>
                        <div className="flex items-center gap-1.5">• Horoscope Predictions</div>
                      </div>
                      <p className="text-stone-600 text-xs pt-1">
                        It's essential to choose an astrologer with a good reputation. Remember that the quality and effectiveness of astrological services can vary based on the astrologer's expertise.
                      </p>
                    </div>
                  )}
                </div>

                {/* Q2: Qualities that define the best astrologer */}
                <div className="rounded-xl border border-stone-200 overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleFaq(1)}
                    className="w-full p-4 text-left font-bold text-sm sm:text-base text-stone-900 flex items-center justify-between gap-3 hover:bg-stone-50 transition-colors"
                  >
                    <span>Q2. What qualities define the best astrologer in {cityName}?</span>
                    {openFaqIndex === 1 ? <ChevronUp className="w-4 h-4 text-amber-800 shrink-0" /> : <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />}
                  </button>
                  {openFaqIndex === 1 && (
                    <div className="p-4 pt-0 text-xs sm:text-sm text-stone-700 space-y-2.5 border-t border-stone-100 bg-stone-50/50">
                      <p>
                        <strong>Ans:</strong> The best qualities in astrologer can be defined by the combinations of few basic qualities such as:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-2 font-medium text-stone-800">
                        <li>• Expertise in Parashari & Jamini systems</li>
                        <li>• Accuracy in Dasha timing</li>
                        <li>• Communication Skills with empathy</li>
                        <li>• Non-Judgemental Attitude</li>
                        <li>• Continue Learning & Research</li>
                        <li>• Professionalism & Ethical values</li>
                        <li>• Clients Feedback & Trust</li>
                      </ul>
                      <p className="text-stone-600 text-xs pt-1">
                        These qualities collectively contribute to the reputation and effectiveness of the best astrologer in {cityName}.
                      </p>
                    </div>
                  )}
                </div>

                {/* Q3: Who is a genuine astrologer */}
                <div className="rounded-xl border border-stone-200 overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleFaq(2)}
                    className="w-full p-4 text-left font-bold text-sm sm:text-base text-stone-900 flex items-center justify-between gap-3 hover:bg-stone-50 transition-colors"
                  >
                    <span>Q3. Who is a genuine astrologer in {cityName}?</span>
                    {openFaqIndex === 2 ? <ChevronUp className="w-4 h-4 text-amber-800 shrink-0" /> : <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />}
                  </button>
                  {openFaqIndex === 2 && (
                    <div className="p-4 pt-0 text-xs sm:text-sm text-stone-700 space-y-2 border-t border-stone-100 bg-stone-50/50">
                      <p>
                        <strong>Ans:</strong> <strong>Hanish Bagga</strong> is the genuine Astrologer in {cityName}. He is not motivated solely by financial gain but is genuinely committed to helping individuals by giving simple and easy remedies.
                      </p>
                      <p className="font-bold text-amber-900">
                        One solution to all your problems – Hanish Bagga.
                      </p>
                    </div>
                  )}
                </div>

                {/* Q4: Cost associated with consulting */}
                <div className="rounded-xl border border-stone-200 overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleFaq(3)}
                    className="w-full p-4 text-left font-bold text-sm sm:text-base text-stone-900 flex items-center justify-between gap-3 hover:bg-stone-50 transition-colors"
                  >
                    <span>Q4. What is the general cost associated with consulting the best astrologer?</span>
                    {openFaqIndex === 3 ? <ChevronUp className="w-4 h-4 text-amber-800 shrink-0" /> : <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />}
                  </button>
                  {openFaqIndex === 3 && (
                    <div className="p-4 pt-0 text-xs sm:text-sm text-stone-700 space-y-2 border-t border-stone-100 bg-stone-50/50">
                      <p>
                        <strong>Ans:</strong> We believe that astrology should be utilized to help people in improving their lives not exclusively to earn more. Consequently, we have kept our pricing standards reachable and profoundly competitive. With our online or offline astrology services, many individuals have found peace and a way out of their hardships. Our rates are the best.
                      </p>
                    </div>
                  )}
                </div>

                {/* Q5: Date of birth future prediction */}
                <div className="rounded-xl border border-stone-200 overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleFaq(4)}
                    className="w-full p-4 text-left font-bold text-sm sm:text-base text-stone-900 flex items-center justify-between gap-3 hover:bg-stone-50 transition-colors"
                  >
                    <span>Q5. Can astrology by date of birth predict the future?</span>
                    {openFaqIndex === 4 ? <ChevronUp className="w-4 h-4 text-amber-800 shrink-0" /> : <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />}
                  </button>
                  {openFaqIndex === 4 && (
                    <div className="p-4 pt-0 text-xs sm:text-sm text-stone-700 space-y-2 border-t border-stone-100 bg-stone-50/50">
                      <p>
                        <strong>Ans:</strong> Yes, astrology can predict the future with the help of a date of birth. Astrologers analyze the places of celestial bodies at the time of a person's birth, alongside current planetary transits, to decipher likely themes, energies, and tendencies that might appear in their lives.
                      </p>
                      <p className="text-xs text-stone-500">
                        For interesting astrology-related videos, subscribe to us on YouTube channel: <strong>Acharya Ganesh</strong>.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT STICKY SIDEBAR (4 Cols) ================= */}
          <div className="lg:col-span-4 space-y-6">
            {/* 1. "Get In Touch" Lead Form Card */}
            <div className="rounded-2xl border border-amber-200/80 bg-amber-50/40 p-5 sm:p-6 shadow-sm space-y-4">
              <div className="border-b border-amber-200/60 pb-3">
                <h3 className="text-lg font-bold font-serif-heading text-stone-900">
                  Get In Touch
                </h3>
                <p className="text-xs text-stone-600">
                  Schedule your consultation with Astrologer Hanish Bagga
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="text-sm font-bold text-emerald-900">Details Received!</h4>
                  <p className="text-xs text-emerald-700">Opening full consultation booking window...</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter name"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-1 focus:ring-amber-700"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Email address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter mail"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-1 focus:ring-amber-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Phone number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter Phone"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-1 focus:ring-amber-700"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-1 focus:ring-amber-700 text-stone-800"
                      >
                        <option value="Astro Vastu">Astro Vastu</option>
                        <option value="Astrology Guidance">Astrology Guidance</option>
                        <option value="Match Making">Match Making</option>
                        <option value="Career Prediction">Career Prediction</option>
                        <option value="Health Astrology">Health Astrology</option>
                        <option value="Love Astrology">Love Astrology</option>
                        <option value="Wealth & Finance">Wealth & Finance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-1 focus:ring-amber-700 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>

            {/* 2. "Consultation Call" Promo Banner Card Matching Screenshot */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-amber-900/30 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 text-white p-5 space-y-4 relative">
              {/* Header Badge */}
              <div className="text-center pb-2 border-b border-stone-800">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block font-serif-heading">
                  CONSULTATION CALL
                </span>
                <h4 className="text-lg font-bold font-serif-heading text-white">
                  Solution in <span className="text-amber-300">One Call</span>
                </h4>
              </div>

              {/* 5 Focus Areas Checklist */}
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Health</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Career</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Legal Disputes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Marriage Issues</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Finance/Property</span>
                </li>
              </ul>

              {/* Price & Expert Callout */}
              <div className="pt-2 border-t border-stone-800 text-center space-y-1">
                <span className="text-[11px] text-slate-400 block">Starting From</span>
                <div className="text-base font-extrabold text-amber-300">
                  ₹ 15000 + GST Only /-
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-white pt-1">
                  EXPERT ASTROLOGER <br />
                  <span className="text-amber-400 font-serif-heading text-sm">HANISH BAGGA</span>
                </div>
              </div>

              {/* Call Action Bar */}
              <div className="pt-2 space-y-2">
                <a
                  href={`tel:${ASTROLOGER_PROFILE.phone}`}
                  className="w-full py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: {ASTROLOGER_PROFILE.phone}</span>
                </a>

                <button
                  onClick={handleWhatsAppCall}
                  className="w-full py-2 px-3 rounded-xl border border-stone-700 bg-stone-900/80 hover:bg-stone-800 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp for Slot</span>
                </button>
              </div>
            </div>

            {/* 3. Quick Localities Covered Directory */}
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2.5">
              <div className="flex items-center justify-between text-xs font-bold text-stone-900 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-800" />
                  Localities in {cityName}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {GHAZIABAD_LOCALITIES.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => onSelectLocality(loc.id)}
                    className={`px-2.5 py-1 rounded-md text-[11px] transition-all cursor-pointer ${
                      selectedLocality === loc.id
                        ? 'bg-amber-800 text-white font-bold'
                        : 'bg-white text-stone-700 border border-stone-300 hover:bg-amber-100 hover:text-stone-900'
                    }`}
                  >
                    {loc.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

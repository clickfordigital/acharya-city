import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  Phone, 
  User, 
  CreditCard,
  Building,
  Video
} from 'lucide-react';
import { ASTROLOGER_PROFILE, ASTROLOGY_SERVICES, GHAZIABAD_LOCALITIES } from '../data/astrologyData';
import { BookingFormData } from '../types';

interface ConsultationBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialLocalityId?: string;
}

export const ConsultationBookingModal: React.FC<ConsultationBookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialLocalityId
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    consultationMode: 'in_person_indirapuram',
    serviceType: initialServiceId || ASTROLOGY_SERVICES[0].id,
    dob: '',
    birthTime: '',
    birthCity: 'Ghaziabad, UP',
    localityInGhaziabad: initialLocalityId || 'indirapuram',
    preferredDate: new Date().toISOString().split('T')[0],
    preferredTimeSlot: '11:00 AM – 01:00 PM',
    specificConcerns: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const activeService = ASTROLOGY_SERVICES.find(s => s.id === formData.serviceType) || ASTROLOGY_SERVICES[0];
  const activeLocality = GHAZIABAD_LOCALITIES.find(l => l.id === formData.localityInGhaziabad) || GHAZIABAD_LOCALITIES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'GZB-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setIsSuccess(true);
  };

  const handleWhatsAppConfirmation = () => {
    const text = encodeURIComponent(
      `*Consultation Booking Request*\n` +
      `*Booking Ref:* ${bookingRef}\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phoneNumber}\n` +
      `*Service:* ${activeService.title}\n` +
      `*Mode:* ${formData.consultationMode}\n` +
      `*Locality in Ghaziabad:* ${activeLocality.name}\n` +
      `*DOB:* ${formData.dob} (${formData.birthTime})\n` +
      `*Birth Place:* ${formData.birthCity}\n` +
      `*Preferred Slot:* ${formData.preferredDate} (${formData.preferredTimeSlot})\n` +
      `*Concerns:* ${formData.specificConcerns || 'General full chart reading'}`
    );
    window.open(`https://wa.me/${ASTROLOGER_PROFILE.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-amber-200 shadow-2xl overflow-hidden relative">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-900 via-amber-950 to-stone-900 text-white p-5 sm:p-6 flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Ghaziabad Consultation Desk</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-heading">
              {isSuccess ? 'Consultation Confirmed' : 'Book Appointment with Acharya Ji'}
            </h3>
            <p className="text-xs text-amber-200/80">
              {isSuccess 
                ? 'Your request has been received. Our team will verify your slot shortly.' 
                : 'Complete the form below to lock your preferred chamber or online time slot.'
              }
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold text-slate-500 uppercase">Appointment Reference</span>
                <p className="text-2xl font-bold font-serif-heading text-amber-900">{bookingRef}</p>
                <p className="text-sm font-semibold text-slate-800">
                  Namaste {formData.fullName}, your consultation has been logged!
                </p>
              </div>

              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-left text-xs space-y-2 text-slate-700 max-w-lg mx-auto">
                <div className="flex justify-between border-b border-amber-200/60 pb-1.5">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-bold text-slate-900">{activeService.title}</span>
                </div>
                <div className="flex justify-between border-b border-amber-200/60 pb-1.5">
                  <span className="text-slate-500">Mode:</span>
                  <span className="font-semibold text-slate-900">
                    {formData.consultationMode === 'in_person_indirapuram' && 'Indirapuram Main Chamber'}
                    {formData.consultationMode === 'in_person_rajnagar' && 'Raj Nagar RDC Chamber'}
                    {formData.consultationMode === 'video_call' && 'HD Video Call (Google Meet/Zoom)'}
                    {formData.consultationMode === 'phone_call' && 'Direct Telephonic Session'}
                    {formData.consultationMode === 'whatsapp_report' && 'Digital Horoscope PDF & Voice Notes'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-amber-200/60 pb-1.5">
                  <span className="text-slate-500">Slot Date & Time:</span>
                  <span className="font-semibold text-slate-900">{formData.preferredDate} ({formData.preferredTimeSlot})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Total Consultation Fee:</span>
                  <span className="font-bold text-emerald-800">₹{activeService.discountedPrice} (City Rate)</span>
                </div>
              </div>

              <div className="space-y-3 pt-2 max-w-md mx-auto">
                <button
                  onClick={handleWhatsAppConfirmation}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Details on WhatsApp for Instant Confirmation</span>
                </button>

                <button
                  onClick={handleReset}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
                >
                  Close & Return to Page
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Consultation Mode Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                  1. Select Consultation Mode *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'in_person_indirapuram', label: 'Indirapuram Chamber', sub: 'Aditya Mega City', icon: <Building className="w-4 h-4 text-amber-700" /> },
                    { id: 'in_person_rajnagar', label: 'Raj Nagar RDC Chamber', sub: 'Near Shaheed Sthal Metro', icon: <Building className="w-4 h-4 text-amber-700" /> },
                    { id: 'video_call', label: 'HD Video Call', sub: 'Google Meet / Zoom', icon: <Video className="w-4 h-4 text-blue-600" /> },
                    { id: 'phone_call', label: 'Phone Consultation', sub: 'Direct 1-on-1 Call', icon: <Phone className="w-4 h-4 text-emerald-600" /> },
                  ].map((mode) => (
                    <label
                      key={mode.id}
                      className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                        formData.consultationMode === mode.id
                          ? 'border-amber-500 bg-amber-50/80 ring-2 ring-amber-400/30'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="consultationMode"
                        value={mode.id}
                        checked={formData.consultationMode === mode.id}
                        onChange={(e) => setFormData({ ...formData, consultationMode: e.target.value as any })}
                        className="hidden"
                      />
                      <div className="p-2 rounded-lg bg-white shadow-2xs border border-slate-200">
                        {mode.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">{mode.label}</p>
                        <p className="text-[10px] text-slate-500">{mode.sub}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                  2. Select Required Service *
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 font-medium text-slate-800 bg-white"
                >
                  {ASTROLOGY_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} — ₹{s.discountedPrice} (Save ₹{s.originalPrice - s.discountedPrice})
                    </option>
                  ))}
                </select>
              </div>

              {/* Client Info & Birth Details */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  3. Client & Birth Chart Information *
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp / Mobile Number *"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[10px] text-slate-500 mb-0.5">Date of Birth *</label>
                    <input
                      type="date"
                      required
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full text-xs px-2 py-1.5 rounded-lg border border-slate-300 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-500 mb-0.5">Birth Time (AM/PM) *</label>
                    <input
                      type="time"
                      required
                      value={formData.birthTime}
                      onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                      className="w-full text-xs px-2 py-1.5 rounded-lg border border-slate-300 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-500 mb-0.5">Birth City & State *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ghaziabad, UP"
                      value={formData.birthCity}
                      onChange={(e) => setFormData({ ...formData, birthCity: e.target.value })}
                      className="w-full text-xs px-2 py-1.5 rounded-lg border border-slate-300 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] text-slate-500 mb-0.5">Your Area in Ghaziabad *</label>
                    <select
                      value={formData.localityInGhaziabad}
                      onChange={(e) => setFormData({ ...formData, localityInGhaziabad: e.target.value })}
                      className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white font-medium"
                    >
                      {GHAZIABAD_LOCALITIES.map((l) => (
                        <option key={l.id} value={l.id}>{l.name} ({l.landmark})</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-500 mb-0.5">Preferred Time Slot *</label>
                    <select
                      value={formData.preferredTimeSlot}
                      onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                      className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white font-medium"
                    >
                      <option value="10:30 AM – 01:00 PM">Morning (10:30 AM – 01:00 PM)</option>
                      <option value="02:00 PM – 05:00 PM">Afternoon (02:00 PM – 05:00 PM)</option>
                      <option value="05:30 PM – 08:00 PM">Evening (05:30 PM – 08:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Specific questions or problems (e.g. marriage delay, job transition, flat vastu query)..."
                    value={formData.specificConcerns}
                    onChange={(e) => setFormData({ ...formData, specificConcerns: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Fee summary card */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-900">Total Consultation Fee:</p>
                  <p className="text-[10px] text-emerald-700 font-semibold">Special Ghaziabad Resident Rate</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-amber-900 font-serif-heading">₹{activeService.discountedPrice}</span>
                  <span className="text-xs text-slate-400 line-through ml-2">₹{activeService.originalPrice}</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="modal-submit-booking-btn"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Confirm Appointment & Lock Slot</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Confidential Consultation • Pay After Verification</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

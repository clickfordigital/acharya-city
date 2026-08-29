import React, { useState } from 'react';
import { 
  Phone, 
  User, 
  Menu, 
  X, 
  LogIn, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { ASTROLOGER_PROFILE } from '../data/astrologyData';

interface HeaderProps {
  onOpenBookingModal: (serviceId?: string, localityId?: string) => void;
  selectedLocality?: string;
  onSelectLocality?: (localityId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBookingModal,
  selectedLocality,
  onSelectLocality
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState<'student' | 'client' | null>(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginSubmitted, setLoginSubmitted] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#chambers' },
    { label: 'Courses', href: '#services' },
    { label: 'Products', href: '#services' },
    { label: 'Reports', href: '#services' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#chambers' },
    { label: 'Blogs', href: '#faqs' },
  ];

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSubmitted(true);
    setTimeout(() => {
      setLoginSubmitted(false);
      setAuthModal(null);
      setLoginEmail('');
    }, 1800);
  };

  return (
    <header className="w-full bg-white border-b border-stone-200 sticky top-0 z-50 shadow-xs">
      {/* Top Header Row (Logo, Phone Numbers, Login Buttons) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            {/* Authentic Brand Emblem SVG matching user reference */}
            <div className="relative flex flex-col items-center">
              {/* Circular Mandala Emblem */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-stone-900 border-2 border-amber-700/80 p-0.5 shadow-md flex items-center justify-center overflow-hidden">
                {/* Sunrays/Zodiac Mandala Ring */}
                <div className="absolute inset-0 rounded-full border border-amber-500/30 opacity-70 animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-amber-600/40">
                    <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
                  </svg>
                </div>

                {/* Acharya Guru Silhouette */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  <div className="w-6 h-6 rounded-full bg-amber-200 border border-amber-800 flex items-center justify-center text-[10px] font-bold text-amber-950">
                    ॐ
                  </div>
                  {/* Saffron Robe Guru Body */}
                  <div className="w-8 h-4 bg-gradient-to-t from-amber-600 to-amber-500 rounded-t-full mt-0.5 border-t border-amber-300"></div>
                </div>
              </div>

              {/* Ribbon Banner Below */}
              <div className="-mt-2 z-20 bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 text-stone-900 border border-amber-800/60 rounded-md px-2 py-0.5 shadow-sm text-center">
                <span className="font-serif-heading font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-950 block leading-none">
                  Acharya Ganesh
                </span>
                <span className="text-[7.5px] sm:text-[8.5px] font-medium text-amber-900 block leading-tight font-vedic">
                  जो सही राह दिखाए
                </span>
              </div>
            </div>
          </a>

          {/* Right Controls: Phone Numbers & Login Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {/* Phone 1: +91 73000-04325 */}
            <a 
              href="tel:+917300004325"
              className="flex items-center gap-2.5 text-stone-900 hover:text-amber-800 transition-colors group"
            >
              <div className="w-9 h-9 rounded-full border-2 border-stone-800 flex items-center justify-center group-hover:border-amber-800 group-hover:bg-amber-50 transition-all">
                <Phone className="w-4 h-4 text-stone-800 group-hover:text-amber-800" />
              </div>
              <span className="font-bold text-[15px] tracking-tight text-stone-900 group-hover:text-amber-800">
                +91 73000-04325
              </span>
            </a>

            {/* Phone 2: +91 73000-04326 */}
            <a 
              href="tel:+917300004326"
              className="flex items-center gap-2.5 text-stone-900 hover:text-amber-800 transition-colors group"
            >
              <div className="w-9 h-9 rounded-full border-2 border-stone-800 flex items-center justify-center group-hover:border-amber-800 group-hover:bg-amber-50 transition-all">
                <Phone className="w-4 h-4 text-stone-800 group-hover:text-amber-800" />
              </div>
              <span className="font-bold text-[15px] tracking-tight text-stone-900 group-hover:text-amber-800">
                +91 73000-04326
              </span>
            </a>

            {/* Log in Pill Button */}
            <button
              onClick={() => setAuthModal('client')}
              className="rounded-full border-2 border-stone-900 px-5 py-2 flex items-center gap-2 text-stone-900 font-bold text-sm hover:bg-stone-900 hover:text-white transition-all cursor-pointer shadow-2xs"
            >
              <User className="w-4 h-4 stroke-[2.5]" />
              <span>Log in</span>
            </button>

            {/* Course Login Pill Button */}
            <button
              onClick={() => setAuthModal('student')}
              className="rounded-full border-2 border-stone-900 px-5 py-2 flex items-center gap-1.5 text-stone-900 font-bold text-sm hover:bg-stone-900 hover:text-white transition-all cursor-pointer shadow-2xs"
            >
              <GraduationCap className="w-4 h-4 stroke-[2.5]" />
              <span>Course Login</span>
            </button>
          </div>

          {/* Mobile Right Controls: Quick Call & Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+917300004325"
              className="p-2 rounded-full border-2 border-stone-800 text-stone-800 hover:bg-amber-50"
              title="Call Helpline"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-stone-300 text-stone-800 hover:bg-stone-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Header Row: Centered Navigation Links (Desktop) */}
      <div className="hidden lg:block border-t border-stone-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center space-x-8 xl:space-x-12 py-2.5">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-[15px] font-semibold text-stone-800 hover:text-amber-800 transition-colors py-1 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl">
          {/* Mobile Nav Links */}
          <div className="grid grid-cols-2 gap-2 text-sm font-semibold text-stone-800">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-stone-50 hover:bg-amber-50 hover:text-amber-800 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </a>
            ))}
          </div>

          {/* Contact Helpline Cards on Mobile */}
          <div className="pt-2 space-y-2 border-t border-stone-100 text-xs">
            <a
              href="tel:+917300004325"
              className="flex items-center justify-between p-3 rounded-xl border border-stone-200 bg-stone-50 font-bold text-stone-900"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-800" />
                <span>+91 73000-04325</span>
              </div>
              <span className="text-[11px] text-amber-800 font-semibold">Call Now</span>
            </a>

            <a
              href="tel:+917300004326"
              className="flex items-center justify-between p-3 rounded-xl border border-stone-200 bg-stone-50 font-bold text-stone-900"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-800" />
                <span>+91 73000-04326</span>
              </div>
              <span className="text-[11px] text-amber-800 font-semibold">Call Now</span>
            </a>
          </div>

          {/* Auth Action Buttons on Mobile */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setAuthModal('client');
              }}
              className="py-2.5 px-3 rounded-full border-2 border-stone-900 font-bold text-xs text-stone-900 hover:bg-stone-900 hover:text-white flex items-center justify-center gap-1.5 transition-all"
            >
              <User className="w-3.5 h-3.5" />
              <span>Log in</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setAuthModal('student');
              }}
              className="py-2.5 px-3 rounded-full border-2 border-stone-900 font-bold text-xs text-stone-900 hover:bg-stone-900 hover:text-white flex items-center justify-center gap-1.5 transition-all"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Course Login</span>
            </button>
          </div>
        </div>
      )}

      {/* Login / Portal Modal */}
      {authModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl border border-stone-200 shadow-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setAuthModal(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1.5 rounded-full hover:bg-stone-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2 mb-6">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-900 mx-auto flex items-center justify-center">
                {authModal === 'student' ? (
                  <GraduationCap className="w-6 h-6 text-amber-800" />
                ) : (
                  <User className="w-6 h-6 text-amber-800" />
                )}
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-stone-900">
                {authModal === 'student' ? 'Student Course Portal' : 'Client Account Login'}
              </h3>
              <p className="text-xs text-stone-600">
                {authModal === 'student' 
                  ? 'Access your Vedic Astrology & Vastu video modules and notes.' 
                  : 'View your previous Kundli charts, consultations, and prescribed remedies.'}
              </p>
            </div>

            {loginSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-900">Magic Login Link Sent!</h4>
                <p className="text-xs text-emerald-700">
                  Please check your inbox at <strong>{loginEmail || 'your email'}</strong> to sign in securely.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAuthSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Registered Mobile or Email
                  </label>
                  <input
                    type="text"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="Enter phone (+91) or email"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Password / OTP
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Enter password or OTP"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Sign In Securely</span>
                </button>

                <div className="text-center pt-2 text-xs text-stone-500">
                  <span>Need help accessing your account? </span>
                  <a href={`tel:${ASTROLOGER_PROFILE.phone}`} className="text-amber-800 font-bold hover:underline">
                    Call {ASTROLOGER_PROFILE.phone}
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ChamberLocationSection } from './components/ChamberLocationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingActionBar } from './components/FloatingActionBar';
import { ConsultationBookingModal } from './components/ConsultationBookingModal';

export default function App() {
  const [selectedLocality, setSelectedLocality] = useState<string>('indirapuram');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>();
  const [bookingLocalityId, setBookingLocalityId] = useState<string | undefined>();

  const handleOpenBookingModal = (serviceId?: string, localityId?: string) => {
    setBookingServiceId(serviceId);
    setBookingLocalityId(localityId || selectedLocality);
    setBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setBookingModalOpen(false);
  };

  const handleSelectLocality = (localityId: string) => {
    setSelectedLocality(localityId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/40 text-slate-800 antialiased">
      {/* Top Header & Navigation */}
      <Header
        onOpenBookingModal={handleOpenBookingModal}
        selectedLocality={selectedLocality}
        onSelectLocality={handleSelectLocality}
      />

      {/* Main Streamlined City Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section (Headline, Profile, Quick Booking Form & WhatsApp/Call) */}
        <HeroSection
          onOpenBookingModal={handleOpenBookingModal}
          selectedLocality={selectedLocality}
          onSelectLocality={handleSelectLocality}
        />

        {/* 2. Core Vedic Services (Transparent Pricing & Direct Booking) */}
        <ServicesSection
          onOpenBookingModal={handleOpenBookingModal}
          selectedLocality={selectedLocality}
        />

        {/* 3. Physical Chambers & Ghaziabad Localities Served */}
        <ChamberLocationSection
          onOpenBookingModal={handleOpenBookingModal}
          selectedLocality={selectedLocality}
          onSelectLocality={handleSelectLocality}
        />

        {/* 4. Verified Client Reviews from Ghaziabad Localities */}
        <TestimonialsSection
          onOpenBookingModal={handleOpenBookingModal}
          selectedLocality={selectedLocality}
        />

        {/* 5. Key FAQs */}
        <FaqSection
          onOpenBookingModal={() => handleOpenBookingModal()}
          selectedLocality={selectedLocality}
        />
      </main>

      {/* 6. Clean Footer */}
      <Footer
        onSelectLocality={handleSelectLocality}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Sticky Bottom Action Bar for Easy Mobile Conversions */}
      <FloatingActionBar
        onOpenBookingModal={() => handleOpenBookingModal()}
        selectedLocality={selectedLocality}
      />

      {/* Consultation Booking Modal */}
      <ConsultationBookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBookingModal}
        initialServiceId={bookingServiceId}
        initialLocalityId={bookingLocalityId}
      />
    </div>
  );
}


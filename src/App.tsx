import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CityEditorialSection } from './components/CityEditorialSection';
import { FaqSection } from './components/FaqSection';
import { LatestBlogsSection } from './components/LatestBlogsSection';
import { Footer } from './components/Footer';
import { FloatingActionBar } from './components/FloatingActionBar';
import { ConsultationBookingModal } from './components/ConsultationBookingModal';

export default function App() {
  const [currentCity, setCurrentCity] = useState<string>('Delhi');
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

  const handleSelectCity = (city: string) => {
    setCurrentCity(city);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-stone-900 antialiased font-sans">
      {/* 1. Authentic Header with Logo, Phone Numbers, Login Pills & Nav */}
      <Header
        onOpenBookingModal={handleOpenBookingModal}
        selectedLocality={selectedLocality}
        onSelectLocality={handleSelectLocality}
      />

      {/* Main City Page Workspace */}
      <main className="flex-grow">
        {/* 2. Cosmic Space Banner with Stats (16+ Yrs, 7k+ Students, 40k+ Calls) */}
        <HeroSection
          cityName={currentCity}
          onOpenBookingModal={handleOpenBookingModal}
          selectedLocality={selectedLocality}
          onSelectCity={handleSelectCity}
        />

        {/* 3. 2-Column Enhanced Editorial + Sticky Lead Form & Solutions Section */}
        <CityEditorialSection
          cityName={currentCity}
          selectedLocality={selectedLocality}
          onSelectLocality={handleSelectLocality}
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* 4. Center-Aligned FAQs Section */}
        <FaqSection
          cityName={currentCity}
          onOpenBookingModal={handleOpenBookingModal}
          selectedLocality={selectedLocality}
        />

        {/* 5. Latest Blogs Carousel / Cards (Rudrabhishek Puja & Astrology Remedies) */}
        <LatestBlogsSection />
      </main>

      {/* 5. 4-Column Footer with Full Services & Nationwide City Directory */}
      <Footer
        onSelectCity={handleSelectCity}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Sticky Bottom Action Bar for Easy Mobile Access */}
      <FloatingActionBar
        onOpenBookingModal={() => handleOpenBookingModal()}
        selectedLocality={selectedLocality}
      />

      {/* Interactive Consultation Booking Modal */}
      <ConsultationBookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBookingModal}
        initialServiceId={bookingServiceId}
        initialLocalityId={bookingLocalityId}
      />
    </div>
  );
}


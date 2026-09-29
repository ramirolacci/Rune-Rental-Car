import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VehicleRange from './components/VehicleRange';
import LocationSection from './components/LocationSection';
import CarSelector from './components/CarSelector';
import StoriesSection from './components/StoriesSection';
import BannerMarquee from './components/BannerMarquee';
import DownloadSection from './components/DownloadSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import CarDetailsModal from './components/CarDetailsModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [searchParams, setSearchParams] = useState({
    location: 'Dallas, Texas',
    pickupDate: '2026-10-15',
    returnDate: '2026-10-18'
  });

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleSelectCarForBooking = (car) => {
    setSelectedCar(car);
    setIsBookingOpen(true);
  };

  const handleOpenCarDetails = (car) => {
    setSelectedCar(car);
    setIsDetailsOpen(true);
  };

  const handleSearchSubmit = (params) => {
    setSearchParams(params);
    setIsBookingOpen(true);
  };

  const handleSelectCategory = (categoryTitle) => {
    const section = document.getElementById('ride');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <Navbar onOpenBooking={handleOpenBooking} />
      
      <Hero onSearchSubmit={handleSearchSubmit} />
      
      <VehicleRange onSelectCategory={handleSelectCategory} />
      
      <LocationSection onOpenLocations={handleOpenBooking} />
      
      <CarSelector 
        onSelectCarForBooking={handleSelectCarForBooking}
        onOpenCarDetails={handleOpenCarDetails}
      />
      
      <StoriesSection />
      
      <BannerMarquee />
      
      <DownloadSection />
      
      <Newsletter />
      
      <Footer />

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        selectedCar={selectedCar}
        searchParams={searchParams}
      />

      <CarDetailsModal 
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        car={selectedCar}
        onBookCar={(car) => {
          setSelectedCar(car);
          setIsBookingOpen(true);
        }}
      />
    </div>
  );
}

export default App;

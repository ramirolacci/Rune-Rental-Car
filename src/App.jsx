import React from 'react';
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

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <VehicleRange />
      <LocationSection />
      <CarSelector />
      <StoriesSection />
      <BannerMarquee />
      <DownloadSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

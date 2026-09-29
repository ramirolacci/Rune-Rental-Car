import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

const cars = [
  {
    id: 1,
    name: 'Rüne Gran Turismo',
    image: '/assets/select-1.png',
    price: 225,
    specs: { speed: '200', gear: '6', seats: '5', mileage: '15' }
  },
  {
    id: 2,
    name: 'Rüne Executive SUV',
    image: '/assets/select-2.png',
    price: 455,
    specs: { speed: '215', gear: '6', seats: '5', mileage: '16' }
  },
  {
    id: 3,
    name: 'Rüne Sport Coupe',
    image: '/assets/select-3.png',
    price: 275,
    specs: { speed: '306', gear: '6', seats: '5', mileage: '12' }
  },
  {
    id: 4,
    name: 'Rüne Hyperion Supercar',
    image: '/assets/select-4.png',
    price: 625,
    specs: { speed: '350', gear: '6', seats: '2', mileage: '08' }
  },
  {
    id: 5,
    name: 'Rüne Luxury Sedan',
    image: '/assets/select-5.png',
    price: 395,
    specs: { speed: '254', gear: '6', seats: '5', mileage: '10' }
  }
];

const CarSelector = ({ onSelectCarForBooking, onOpenCarDetails }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCar = cars[activeIndex] || cars[0];

  return (
    <section className="select__container" id="ride">
      <motion.h2 
        className="section__header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        ELIGE EL AUTO DE TUS SUEÑOS HOY
      </motion.h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        speed={800}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: -20,
          depth: 220,
          modifier: 1,
          scale: 0.88,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="swiper"
      >
        {cars.map((car, index) => (
          <SwiperSlide key={car.id}>
            <div className={`select__card ${index === activeIndex ? 'show__info' : ''}`}>
              <img src={car.image} alt={car.name} />
              
              <div className="select__info">
                <div className="select__info__card">
                  <span><i className="ri-speed-up-line"></i></span>
                  <h4>{car.specs.speed} <span>km/h</span></h4>
                </div>
                <div className="select__info__card">
                  <span><i className="ri-settings-5-line"></i></span>
                  <h4>{car.specs.gear} <span>velocidades</span></h4>
                </div>
                <div className="select__info__card">
                  <span><i className="ri-roadster-line"></i></span>
                  <h4>{car.specs.seats} <span>asientos</span></h4>
                </div>
                <div className="select__info__card">
                  <span><i className="ri-signpost-line"></i></span>
                  <h4>{car.specs.mileage} <span>autonomía</span></h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <form className="select__form" onSubmit={(e) => e.preventDefault()}>
        <div className="select__price">
          <span><i className="ri-price-tag-3-line"></i></span>
          <div><span id="select-price">${activeCar.price}</span> /día</div>
        </div>
        <div className="select__btns">
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={() => onOpenCarDetails(activeCar)}
          >
            Ver detalles
          </button>
          <button 
            type="button" 
            className="btn"
            onClick={() => onSelectCarForBooking(activeCar)}
          >
            Alquilar ahora
          </button>
        </div>
      </form>
    </section>
  );
};

export default CarSelector;

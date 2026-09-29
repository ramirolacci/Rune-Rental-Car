import React from 'react';
import { motion } from 'framer-motion';

const vehicleCategories = [
  { id: 1, title: 'CARS', image: '/assets/range-1.jpg' },
  { id: 2, title: 'SUVS', image: '/assets/range-2.jpg' },
  { id: 3, title: 'VANS', image: '/assets/range-3.jpg' },
  { id: 4, title: 'ELECTRIC', image: '/assets/range-4.jpg' }
];

const VehicleRange = () => {
  return (
    <section className="section__container range__container" id="about">
      <motion.h2 
        className="section__header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        WIDE RANGE OF VEHICLE
      </motion.h2>
      
      <div className="range__grid">
        {vehicleCategories.map((cat, index) => (
          <motion.div 
            key={cat.id} 
            className="range__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <img src={cat.image} alt={cat.title} />
            <div className="range__details">
              <h4>{cat.title}</h4>
              <a href="#ride" aria-label={`Explore ${cat.title}`}>
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VehicleRange;

import React from 'react';
import { motion } from 'framer-motion';

const LocationSection = () => {
  return (
    <section className="section__container location__container" id="rent">
      <motion.div 
        className="location__image"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img src="/assets/location.png" alt="Find car location" />
      </motion.div>

      <motion.div 
        className="location__content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="section__header">FIND CAR IN YOUR LOCATIONS</h2>
        <p>
          Discover the perfect vehicle tailored to your needs, wherever you are.
          Our 'Find Car in Your Locations' feature allows you to effortlessly
          search and select from our premium fleet available near you. Whether
          you're looking for a luxury sedan, a spacious SUV, or a sporty
          convertible, our easy-to-use tool ensures you find the ideal car for
          your journey. Simply enter your location, and let us connect you with
          top-tier vehicles ready for rental.
        </p>
        <div className="location__btn">
          <button 
            className="btn"
            onClick={() => alert('Locating nearest available rental hubs...')}
          >
            Find a Location
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default LocationSection;

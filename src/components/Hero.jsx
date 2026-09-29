import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [formData, setFormData] = useState({
    location: '',
    start: '',
    stop: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loc = formData.location || 'Dallas, Texas';
    alert(`Searching cars in ${loc} from ${formData.start || 'Aug 16'} to ${formData.stop || 'Aug 18'}...`);
  };

  return (
    <header>
      <div className="header__container" id="home">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          PREMIUM CAR RENTAL
        </motion.h1>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="input__group">
            <label htmlFor="location">Pick up & Return location</label>
            <input
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Dallas, Texas"
            />
          </div>
          <div className="input__group">
            <label htmlFor="start">Start</label>
            <input
              type="text"
              name="start"
              id="start"
              value={formData.start}
              onChange={handleChange}
              placeholder="Aug 16, 10:00 AM"
            />
          </div>
          <div className="input__group">
            <label htmlFor="stop">Stop</label>
            <input
              type="text"
              name="stop"
              id="stop"
              value={formData.stop}
              onChange={handleChange}
              placeholder="Aug 18, 10:00 PM"
            />
          </div>
          <button type="submit" className="btn" aria-label="Search">
            <i className="ri-search-line"></i>
          </button>
        </motion.form>

        <motion.img 
          src="/assets/header.png" 
          alt="Premium Rental Car Header"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>

      <a href="#about" className="scroll__down" aria-label="Scroll to details">
        <i className="ri-arrow-down-line"></i>
      </a>
    </header>
  );
};

export default Hero;

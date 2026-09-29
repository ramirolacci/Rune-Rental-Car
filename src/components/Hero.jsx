import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onSearchSubmit }) => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    start: '',
    stop: ''
  });

  const handleChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchParams);
  };

  return (
    <header>
      <div className="header__container" id="home">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ALQUILER DE AUTOS PREMIUM
        </motion.h1>

        <motion.form 
          action="/" 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="input__group">
            <label htmlFor="location">Lugar de retiro y devolución</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Dallas, Texas"
              value={searchParams.location}
              onChange={handleChange}
            />
          </div>
          <div className="input__group">
            <label htmlFor="start">Inicio</label>
            <input
              type="text"
              name="start"
              id="start"
              placeholder="16 Ago, 10:00 AM"
              value={searchParams.start}
              onChange={handleChange}
            />
          </div>
          <div className="input__group">
            <label htmlFor="stop">Fin</label>
            <input
              type="text"
              name="stop"
              id="stop"
              placeholder="18 Ago, 10:00 PM"
              value={searchParams.stop}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn" aria-label="Buscar autos">
            <i className="ri-search-line"></i>
          </button>
        </motion.form>

        <motion.img 
          src="/assets/header.png" 
          alt="Auto de alquiler premium Rüne" 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>

      <a href="#about" className="scroll__down" aria-label="Ver detalles">
        <i className="ri-arrow-down-line"></i>
      </a>
    </header>
  );
};

export default Hero;

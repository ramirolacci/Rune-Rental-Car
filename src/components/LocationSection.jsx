import React from 'react';
import { motion } from 'framer-motion';

const LocationSection = ({ onOpenLocations }) => {
  return (
    <section className="section__container location__container" id="rent">
      <motion.div 
        className="location__image"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img src="/assets/location.png" alt="Ubicaciones de autos Rüne" />
      </motion.div>

      <motion.div 
        className="location__content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="section__header">ENCUENTRA AUTOS EN TU UBICACIÓN</h2>
        <p>
          Descubre el vehículo perfecto adaptado a tus necesidades, estés donde estés.
          Nuestra función 'Encuentra autos en tu ubicación' te permite buscar y seleccionar
          fácilmente entre nuestra flota premium disponible cerca de ti. Ya sea que busques un sedán de lujo,
          un espacioso SUV o un deportivo convertible, nuestra herramienta fácil de usar te asegura encontrar
          el auto ideal para tu viaje. Simplemente ingresa tu ubicación y déjanos conectarte con vehículos
          de primer nivel listos para alquilar.
        </p>
        <div className="location__btn">
          <button className="btn" onClick={onOpenLocations}>
            Encontrar una ubicación
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default LocationSection;

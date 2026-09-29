import React from 'react';
import { motion } from 'framer-motion';

const DownloadSection = () => {
  return (
    <section className="download">
      <div className="section__container download__container">
        <motion.div 
          className="download__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section__header">ALQUILER DE AUTOS PREMIUM</h2>
          <div className="download__links">
            <a href="#ios" onClick={(e) => { e.preventDefault(); alert('Redirigiendo a la App Store de Apple...'); }}>
              <img src="/assets/apple.png" alt="Descargar en la App Store" />
            </a>
            <a href="#android" onClick={(e) => { e.preventDefault(); alert('Redirigiendo a Google Play Store...'); }}>
              <img src="/assets/google.png" alt="Disponible en Google Play" />
            </a>
          </div>
        </motion.div>
        <motion.div 
          className="download__image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="/assets/download.png" alt="App móvil Rüne" />
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;

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
          <h2 className="section__header">PREMIUM CAR RENTAL</h2>
          <div className="download__links">
            <a href="#download-ios" onClick={(e) => { e.preventDefault(); alert('Redirecting to Apple App Store...'); }}>
              <img src="/assets/apple.png" alt="Download on Apple App Store" />
            </a>
            <a href="#download-android" onClick={(e) => { e.preventDefault(); alert('Redirecting to Google Play Store...'); }}>
              <img src="/assets/google.png" alt="Get it on Google Play" />
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
          <img src="/assets/download.png" alt="Rüne Mobile App Preview" />
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;

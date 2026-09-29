import React from 'react';
import { motion } from 'framer-motion';

const stories = [
  {
    id: 1,
    day: '01',
    month: 'Misión',
    year: 'Rüne',
    title: 'EXCELENCIA Y COMPROMISO',
    desc: 'En Rüne nos dedicamos a transformar cada viaje en una experiencia extraordinaria. Ofrecemos una atención personalizada las 24 horas y procesos de reserva sin complicaciones.',
    image: '/assets/story-1.jpg'
  },
  {
    id: 2,
    day: '100%',
    month: 'Flota',
    year: 'De Élite',
    title: 'VEHÍCULOS PREMIUM EXCLUSIVOS',
    desc: 'Contamos con una selección única de deportivos de alta gama, sedanes ejecutivos y SUVs de lujo, impecablemente mantenidos para garantizar tu máximo confort y seguridad.',
    image: '/assets/story-2.jpg'
  },
  {
    id: 3,
    day: '24/7',
    month: 'Servicio',
    year: 'VIP Global',
    title: 'EXPERIENCIA A TU MEDIDA',
    desc: 'Más de 10,000 clientes confían en Rüne para sus viajes de negocios y escapadas de placer. Entregas personalizadas en aeropuerto y ubicaciones seleccionadas.',
    image: '/assets/story-3.jpg'
  }
];

const StoriesSection = () => {
  return (
    <section className="section__container story__container" id="contact">
      <motion.h2 
        className="section__header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        SOBRE NOSOTROS
      </motion.h2>

      <div className="story__grid">
        {stories.map((story, index) => (
          <motion.div 
            key={story.id} 
            className="story__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="story__date">
              <span>{story.day}</span>
              <div>
                <p>{story.month}</p>
                <p>{story.year}</p>
              </div>
            </div>
            <h4>{story.title}</h4>
            <p>{story.desc}</p>
            <img src={story.image} alt={story.title} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StoriesSection;

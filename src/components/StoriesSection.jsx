import React from 'react';
import { motion } from 'framer-motion';

const stories = [
  {
    id: 1,
    day: '12',
    month: 'Enero',
    year: '2024',
    title: 'Aventuras en la carretera abierta',
    desc: 'Únete a nosotros mientras nos sumergimos en las apasionantes historias de viajeros que se embarcaron en viajes inolvidables con ALQUILER DE AUTOS PREMIUM.',
    image: '/assets/story-1.jpg'
  },
  {
    id: 2,
    day: '04',
    month: 'Marzo',
    year: '2024',
    title: 'Lujo y confort: Experiencias',
    desc: 'En esta serie, destacamos los toques de lujo, la comodidad sin igual y el servicio excepcional que hacen que cada viaje sea único.',
    image: '/assets/story-2.jpg'
  },
  {
    id: 3,
    day: '18',
    month: 'Junio',
    year: '2024',
    title: 'Autos que se adaptan a tu estilo de vida',
    desc: 'Lee sobre cómo nuestros versátiles vehículos se han integrado perfectamente en la vida de profesionales y familias por igual.',
    image: '/assets/story-3.jpg'
  }
];

const StoriesSection = () => {
  return (
    <section className="section__container story__container">
      <motion.h2 
        className="section__header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        HISTORIAS AL VOLANTE
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

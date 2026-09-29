import React from 'react';
import { motion } from 'framer-motion';

const stories = [
  {
    id: 1,
    day: '12',
    month: 'January',
    year: '2024',
    title: 'Adventures on the Open Road',
    desc: 'Join us as we dive into the exhilarating stories of travelers who embarked on unforgettable journeys with PREMIUM CAR RENTAL.',
    image: '/assets/story-1.jpg'
  },
  {
    id: 2,
    day: '04',
    month: 'March',
    year: '2024',
    title: 'Luxury and Comfort: Experiences',
    desc: 'In this series, we highlight the luxurious touches, unparalleled comfort, and exceptional service that make every ride.',
    image: '/assets/story-2.jpg'
  },
  {
    id: 3,
    day: '18',
    month: 'June',
    year: '2024',
    title: 'Cars that Adapt to Your Lifestyle',
    desc: 'Read about how our versatile vehicles have seamlessly integrated into the lives of professionals and families alike.',
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
        STORIES BEHIND THE WHEEL
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

import React from 'react';

const bannerImages = [
  '/assets/banner-1.png',
  '/assets/banner-2.png',
  '/assets/banner-3.png',
  '/assets/banner-4.png',
  '/assets/banner-5.png',
  '/assets/banner-6.png',
  '/assets/banner-7.png',
  '/assets/banner-8.png',
  '/assets/banner-9.png',
  '/assets/banner-10.png',
];

const BannerMarquee = () => {
  // Combine original array twice to achieve seamless infinite scroll
  const marqueeItems = [...bannerImages, ...bannerImages];

  return (
    <section className="banner__container">
      <div className="banner__wrapper">
        {marqueeItems.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt={`Car Brand ${ (index % 10) + 1 }`}
            aria-hidden={index >= 10}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerMarquee;

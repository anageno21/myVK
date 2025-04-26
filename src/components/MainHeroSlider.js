import React, { useState, useEffect, useMemo } from 'react';
import './MainHeroSlider.css';

const MainHeroSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const defaultSlides = [
    {
      type: 'video',
      src: 'https://drive.google.com/uc?export=download&id=1a_FIuv9ZVCEeYTdd9mIdfUJUZ37RQhUy', // hero-video-1.mp4
    },
    // Προσθέστε περισσότερα slides αν χρειάζεται
  ];

  const displayedSlides = useMemo(() => {
    const slidesToUse = slides && slides.length > 0 ? slides : defaultSlides;
    if (!slidesToUse || slidesToUse.length === 0) return [];
    const totalSlides = slidesToUse.length;
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    const nextIndex = (currentSlide + 1) % totalSlides;
    return [
      slidesToUse[prevIndex],
      slidesToUse[currentSlide],
      slidesToUse[nextIndex],
    ];
  }, [currentSlide, slides]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (slides || defaultSlides).length) % (slides || defaultSlides).length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (slides || defaultSlides).length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    const handleResize = () => {
      // Handle resize logic if needed
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide]);

  if (!displayedSlides || displayedSlides.length === 0) {
    return null;
  }

  return (
    <div className="main-hero-slider">
      <div className="slider-container">
        {displayedSlides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === 1 ? 'active' : ''}`}
          >
            {slide.type === 'video' ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="hero-video"
              >
                <source src={slide.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="hero-image"
              />
            )}
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button onClick={handlePrevSlide} className="prev-button">
          ❮
        </button>
        <button onClick={handleNextSlide} className="next-button">
          ❯
        </button>
      </div>
    </div>
  );
};

export default MainHeroSlider;
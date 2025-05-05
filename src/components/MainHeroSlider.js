import React from 'react';
import './HeroSlider.css';

const HeroSlider = () => {
  return (
    <div className="hero-slider">
      <div className="slider-item">
        <img src="/images/slide1.jpg" alt="Slide 1" />
        <div className="slider-content">
          <h1>Welcome to Anageno</h1>
          <p>Find peace within yourself with our expert therapists.</p>
        </div>
      </div>
      {/* Προσθήκη περισσότερων slides αν χρειάζεται */}
    </div>
  );
};

export default HeroSlider;
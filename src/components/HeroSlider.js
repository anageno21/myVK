import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const HeroSlider = ({ contentType, src, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false); // State για σφάλματα φόρτωσης εικόνας

  // Log props για debugging
  console.log('HeroSlider Props (inside component):', { contentType, src, images });

  // Αν contentType είναι 'slideshow', κάνουμε κύκλο στις εικόνες
  useEffect(() => {
    if (contentType === 'slideshow' && images && images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [contentType, images]);

  // Handler για σφάλματα φόρτωσης εικόνας
  const handleImageError = () => {
    console.error('Failed to load image:', src);
    setImageError(true);
  };

  if (contentType === 'video') {
    console.log('Rendering video in HeroSlider');
    return (
      <div className="hero-slider">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  } else if (contentType === 'slideshow' && images && images.length > 0) {
    console.log('Rendering slideshow in HeroSlider');
    return (
      <div className="hero-slider">
        {imageError ? (
          <p>Failed to load slideshow image</p>
        ) : (
          <img
            src={images[currentImageIndex]}
            alt={`Hero Slider Image ${currentImageIndex + 1}`}
            className="hero-image"
            onError={handleImageError}
          />
        )}
      </div>
    );
  } else if (contentType === 'image') {
    console.log('Rendering single image in HeroSlider');
    return (
      <div className="hero-slider">
        {imageError ? (
          <p>Failed to load image: {src}</p>
        ) : (
          <img
            src={src}
            alt="Hero Slider Image"
            className="hero-image"
            onError={handleImageError}
          />
        )}
      </div>
    );
  } else {
    console.log('Rendering fallback in HeroSlider');
    return (
      <div className="hero-slider">
        <p>Invalid HeroSlider content type</p>
      </div>
    );
  }
};

export default HeroSlider;
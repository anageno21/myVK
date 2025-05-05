import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const HeroSlider = ({ contentType, src, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  // Log props για debugging
  console.log('HeroSlider Props (inside component):', { contentType, src, images });

  // Επιπλέον έλεγχοι για τα props
  const isValidContentType = ['video', 'slideshow', 'image'].includes(contentType);
  const isValidSrc = typeof src === 'string' && src.trim() !== '';
  const isValidImages = Array.isArray(images) && images.length > 0 && images.every(img => typeof img === 'string' && img.trim() !== '');

  // Αν contentType είναι 'slideshow', κάνουμε κύκλο στις εικόνες
  useEffect(() => {
    if (contentType === 'slideshow' && isValidImages) {
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

  if (!isValidContentType) {
    console.log('Invalid content type:', contentType);
    return (
      <div className="hero-slider">
        <p>Invalid HeroSlider content type</p>
      </div>
    );
  }

  if (contentType === 'video') {
    console.log('Rendering video in HeroSlider');
    if (!isValidSrc) {
      return (
        <div className="hero-slider">
          <p>Invalid video source</p>
        </div>
      );
    }
    return (
      <div className="hero-slider">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  if (contentType === 'slideshow') {
    console.log('Rendering slideshow in HeroSlider');
    if (!isValidImages) {
      return (
        <div className="hero-slider">
          <p>Invalid slideshow images</p>
        </div>
      );
    }
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
  }

  if (contentType === 'image') {
    console.log('Rendering single image in HeroSlider');
    if (!isValidSrc) {
      return (
        <div className="hero-slider">
          <p>Invalid image source</p>
        </div>
      );
    }
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
  }

  // Fallback (δεν θα έπρεπε να φτάσει εδώ λόγω του ελέγχου isValidContentType)
  return (
    <div className="hero-slider">
      <p>Invalid HeroSlider content type</p>
    </div>
  );
};

export default HeroSlider;
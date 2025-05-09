// src/components/HeroSlider.js
import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const HeroSlider = ({ contentType, src, images = [], onSlideChange = () => {} }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  // Log props για debugging
  console.log('HeroSlider Props (inside component):', { contentType, src, images });

  // Επιπλέον έλεγχοι για τα props
  const isValidContentType = ['video', 'slideshow', 'image', 'video-then-slideshow'].includes(contentType);
  const isValidSrc = typeof src === 'string' && src.trim() !== '';
  const isValidImages = Array.isArray(images) && images.length > 0 && images.every(item => typeof item === 'string' && item.trim() !== '');

  // Δημιουργία λίστας slides
  const slides = [];
  if (contentType === 'video' && isValidSrc) {
    slides.push({ type: 'video', src });
  } else if (contentType === 'image' && isValidSrc) {
    slides.push({ type: 'image', src });
  } else if (contentType === 'slideshow' && isValidImages) {
    slides.push(...images.map(item => ({ type: 'image', src: item })));
  } else if (contentType === 'video-then-slideshow' && isValidSrc && isValidImages) {
    if (!isVideoFinished) {
      slides.push({ type: 'video', src });
    } else {
      slides.push(...images.map(item => ({ type: 'image', src: item })));
    }
  }

  // Εναλλαγή slides κάθε 5 δευτερόλεπτα
  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % slides.length;
        if (nextIndex === 0 && contentType === 'video-then-slideshow' && isVideoFinished) {
          setIsVideoFinished(false);
          return 0;
        }
        return nextIndex;
      });

      if (contentType === 'video-then-slideshow' && !isVideoFinished) {
        setIsVideoFinished(true);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length, contentType, isVideoFinished]);

  // Ενημερώνουμε το parent component για το τρέχον slide
  useEffect(() => {
    if (typeof onSlideChange === 'function') {
      if (contentType === 'video-then-slideshow') {
        if (!isVideoFinished) {
          onSlideChange(0); // Βίντεο (index 0)
        } else {
          onSlideChange(currentSlideIndex + 1); // Φωτογραφίες (index 1, 2, 3, 4)
        }
      } else {
        onSlideChange(currentSlideIndex);
      }
    }
  }, [currentSlideIndex, isVideoFinished, contentType, onSlideChange]);

  // Handler για σφάλματα φόρτωσης εικόνας
  const handleImageError = () => {
    console.error('Failed to load image:', src);
    setImageError(true);
  };

  // Handler για το τέλος του βίντεο
  const handleVideoEnded = () => {
    console.log('Video finished playing');
    setIsVideoFinished(true);
    setCurrentSlideIndex(0);
  };

  if (!isValidContentType || slides.length === 0) {
    console.log('Invalid content type or no slides:', contentType);
    return (
      <div className="hero-slider">
        <p>Invalid HeroSlider content type or no slides available</p>
      </div>
    );
  }

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="hero-slider">
      {currentSlide.type === 'image' ? (
        <div className="hero-slide">
          {imageError ? (
            <p>Failed to load image: {currentSlide.src}</p>
          ) : (
            <>
              <img
                src={currentSlide.src}
                alt={`Hero Slider Image ${currentSlideIndex + 1}`}
                className="hero-image"
                onError={handleImageError}
              />
              <div className="hero-overlay"></div>
            </>
          )}
        </div>
      ) : (
        <>
          <video
            autoPlay
            muted
            playsInline
            className="hero-video"
            onEnded={handleVideoEnded}
          >
            <source src={currentSlide.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </>
      )}
    </div>
  );
};

export default HeroSlider;
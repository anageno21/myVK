// src/components/HeroSlider.js
import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const HeroSlider = ({ contentType, src, images = [] }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  // Log props για debugging
  console.log('HeroSlider Props (inside component):', { contentType, src, images });

  // Επιπλέον έλεγχοι για τα props
  const isValidContentType = ['video', 'slideshow', 'image', 'video-then-slideshow'].includes(contentType);
  const isValidSrc = typeof src === 'string' && src.trim() !== '';
  const isValidImages = Array.isArray(images) && images.length > 0 && images.every(img => typeof img === 'string' && img.trim() !== '');

  // Δημιουργία λίστας slides
  const slides = [];
  if (contentType === 'video' && isValidSrc) {
    slides.push({ type: 'video', src });
  } else if (contentType === 'image' && isValidSrc) {
    slides.push({ type: 'image', src });
  } else if (contentType === 'slideshow' && isValidImages) {
    images.forEach(img => slides.push({ type: 'image', src: img }));
  } else if (contentType === 'video-then-slideshow' && isValidSrc && isValidImages) {
    if (!isVideoFinished) {
      slides.push({ type: 'video', src });
    } else {
      images.forEach(img => slides.push({ type: 'image', src: img }));
    }
  }

  // Εναλλαγή slides κάθε 5 δευτερόλεπτα
  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % slides.length;
        // Εάν φτάσαμε στο τέλος του slideshow και είμαστε σε video-then-slideshow
        if (nextIndex === 0 && contentType === 'video-then-slideshow' && isVideoFinished) {
          setIsVideoFinished(false); // Επαναφέρουμε το βίντεο
          return 0;
        }
        return nextIndex;
      });

      // Εάν είμαστε σε video-then-slideshow και το βίντεο δεν έχει τελειώσει
      if (contentType === 'video-then-slideshow' && !isVideoFinished) {
        setIsVideoFinished(true);
      }
    }, 5000); // 5 δευτερόλεπτα για κάθε slide

    return () => clearInterval(interval);
  }, [slides.length, contentType, isVideoFinished]);

  // Handler για σφάλματα φόρτωσης εικόνας
  const handleImageError = () => {
    console.error('Failed to load image:', src);
    setImageError(true);
  };

  // Handler για το τέλος του βίντεο (δεν το χρειαζόμαστε πλέον, αλλά το αφήνω για συμβατότητα)
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
        imageError ? (
          <p>Failed to load image: {currentSlide.src}</p>
        ) : (
          <img
            src={currentSlide.src}
            alt={`Hero Slider Image ${currentSlideIndex + 1}`}
            className="hero-image"
            onError={handleImageError}
          />
        )
      ) : (
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
      )}
    </div>
  );
};

export default HeroSlider;
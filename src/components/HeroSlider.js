// src/components/HeroSlider.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State για το burger menu

  const languages = [
    { value: 'English', label: 'English' },
    { value: 'Ukrainian', label: 'Українська' },
    { value: 'Russian', label: 'Русский' },
  ];

  const handleLanguageToggle = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
    console.log("Selected language:", language);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const slides = [
    {
      type: 'video',
      src: '/videos/hero-video-1.mp4',
      title: "выбрать формат сессий с терапевтом, если нужна личная поддержка",
      text: "At Anageno, our specialized therapy for children offers a safe and nurturing environment where your child can express their feelings, develop emotional resilience, and navigate life’s challenges with confidence.",
    },
    {
      type: 'image',
      src: '/images/section/hero 2.png',
      title: "Strengthen Your Emotional Core",
      text: "Our therapy sessions focus on empowering you to regain emotional balance and resilience. Let us guide you through life’s obstacles with care and proven strategies.",
    },
    {
      type: 'image',
      src: '/images/section/hero 3.png',
      title: "Renew Your Strength and Resilience",
      text: "We focus on renewing your strength and resilience. Our tailored therapy sessions offer the support and strategies you need to overcome challenges & thrive.",
    },
    {
      type: 'image',
      src: '/images/section/hero 4.png',
      title: "Discover Inner Peace and Balance",
      text: "Our expert therapists provide personalized sessions to help you find inner peace and emotional balance in your daily life.",
    },
    {
      type: 'image',
      src: '/images/section/hero 5.png',
      title: "Empower Your Mind and Spirit",
      text: "Join our therapy programs to empower your mind and spirit, unlocking your full potential with professional guidance.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero-slider">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <img src="/images/logo/logo-white.png" alt="Anageno" />
          </Link>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <span>☰</span>
        </div>
        <nav className={`header-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navigation">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/our-service">Services</Link></li>
            <li><Link to="/our-therapists">Councillors</Link></li>
            <li><Link to="/our-product">Shop</Link></li>
            <li><Link to="/blog-grid">Blog</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
          </ul>
          <div className="header-language">
            <div className="custom-select" onClick={handleLanguageToggle}>
              <span className="selected-language">{selectedLanguage}</span>
            </div>
            {isLanguageOpen && (
              <ul className="language-options">
                {languages.map((lang) => (
                  <li
                    key={lang.value}
                    onClick={() => handleLanguageSelect(lang.label)}
                    className={lang.label === selectedLanguage ? 'active' : ''}
                  >
                    {lang.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="header-login">
            <Link to="/login" className="login-link">Log In</Link>
          </div>
        </nav>
      </div>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          {slide.type === 'image' ? (
            <img src={slide.src} alt={`Hero Slide ${index + 1}`} className="slide-image" />
          ) : (
            <video
              className="slide-video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={slide.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="slide-overlay"></div>
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
            <Link to="/learn-more" className="read-more">Read More</Link>
          </div>
        </div>
      ))}
      <div className="pagination">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
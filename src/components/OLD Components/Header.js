// src/components/HeroSlider.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

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

  const slides = [
    {
      image: '/images/section/hero 1.png',
      title: "выбрать формат сессий с терапевтом, если нужна личная поддержка", // Άλλαξα τον τίτλο
      text: "At Anageno, our specialized therapy for children offers a safe and nurturing environment where your child can express their feelings, develop emotional resilience, and navigate life’s challenges with confidence.",
    },
    {
      image: '/images/section/hero 2.png',
      title: "Strengthen Your Emotional Core",
      text: "Our therapy sessions focus on empowering you to regain emotional balance and resilience. Let us guide you through life’s obstacles with care and proven strategies.",
    },
    {
      image: '/images/section/hero 3.png',
      title: "Renew Your Strength and Resilience",
      text: "We focus on renewing your strength and resilience. Our tailored therapy sessions offer the support and strategies you need to overcome challenges & thrive.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
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
        <nav className="header-menu">
          <ul className="navigation">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/our-service">Services</Link></li>
            <li><Link to="/our-therapists">Councillors</Link></li>
            <li><Link to="/our-product">Shop</Link></li>
            <li><Link to="/blog-grid">Blog</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
          </ul>
        </nav>
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
      </div>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.image} alt={`Hero Slide ${index + 1}`} className="slide-image" />
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
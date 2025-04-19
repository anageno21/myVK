// src/components/HeroSlider.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      title: "Межличностные отношения", // Αντικατάσταση τίτλου
      text: "Научитесь слышать и не предавать себя в любых отношениях", // Αντικατάσταση κειμένου
      description: "Здесь мы разбираемся, почему повторяются болезненные сценарии, учимся говорить о своих чувствах и строить контакт — честно, спокойно и с уважением к себе.", // Προσθήκη επιπλέον περιγραφής
    },
    {
      type: 'image',
      src: '/images/section/hero 3.png',
      title: "Самооценка и уверенность в себе", // Αντικατάσταση τίτλου
      text: "Строим уверенность, повышаем самооценку — шаг за шагом", // Αντικατάσταση κειμένου
      description: "Здесь вы разберётесь, откуда берётся внутренний критик, научитесь замечать свои сильные стороны и поддерживать себя в трудные моменты. Вы получите реальные инструменты, чтобы опираться на себя, а не на чужую оценку.", // Προσθήκη επιπλέον περιγραφής
    },
    {
      type: 'image',
      src: '/images/section/hero 4.png',
      title: "Адаптация", // Αντικατάσταση τίτλου
      text: "Как не потерять себя в новой реальности", // Αντικατάσταση κειμένου
      description: "Разберётесь, как сохранить психическое равновесие в условиях перемен. Научитесь гибкости мышления, приёму «маленьких шагов» и эмоциональной устойчивости.", // Προσθήκη επιπλέον περιγραφής
    },
    {
      type: 'image',
      src: '/images/section/hero 5.png',
      title: "Стресс и тревожность", // Αντικατάσταση τίτλου
      text: "Когда всё внутри слишком долго было в напряжении", // Αντικατάσταση κειμένου
      description: "Здесь вы разберётесь, как стресс и тревожность накапливаются, влияют на тело и поведение. Вы научитесь восстанавливаться, регулировать напряжение и возвращать себе энергию — шаг за шагом.", // Προσθήκη επιπλέον περιγραφής
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
            {slide.description && <p>{slide.description}</p>} {/* Προσθήκη επιπλέον περιγραφής */}
            <Link to="/learn-more" className="read-more">Читать больше</Link> {/* Αντικατάσταση Read More */}
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
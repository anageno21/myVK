// src/components/HeroSlider.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Νέο state για το dropdown του Services
  const [isCouncillorsDropdownOpen, setIsCouncillorsDropdownOpen] = useState(false); // Νέο state για το dropdown του Councillors

  const languages = [
    { value: 'English', label: 'English' },
    { value: 'Ukrainian', label: 'Українська' },
    { value: 'Russian', label: 'Русский' },
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    console.log("Selected language:", language);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
    if (isCouncillorsDropdownOpen) setIsCouncillorsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleCouncillorsDropdown = () => {
    setIsCouncillorsDropdownOpen(!isCouncillorsDropdownOpen);
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
      title: "Межличностные отношения",
      text: "Научитесь слышать и не предавать себя в любых отношениях",
      description: "Здесь мы разбираемся, почему повторяются болезненные сценарии, учимся говорить о своих чувствах и строить контакт — честно, спокойно и с уважением к себе.",
    },
    {
      type: 'image',
      src: '/images/section/hero 3.png',
      title: "Самооценка и уверенность в себе",
      text: "Строим уверенность, повышаем самооценку — шаг за шагом",
      description: "Здесь вы разберётесь, откуда берётся внутренний критик, научитесь замечать свои сильные стороны и поддерживать себя в трудные моменты. Вы получите реальные инструменты, чтобы опираться на себя, а не на чужую оценку.",
    },
    {
      type: 'image',
      src: '/images/section/hero 4.png',
      title: "Адаптация",
      text: "Как не потерять себя в новой реальности",
      description: "Разберётесь, как сохранить психическое равновесие в условиях перемен. Научитесь гибкости мышления, приёму «маленьких шагов» и эмоциональной устойчивости.",
    },
    {
      type: 'image',
      src: '/images/section/hero 5.png',
      title: "Стресс и тревожность",
      text: "Когда всё внутри слишком долго было в напряжении",
      description: "Здесь вы разберётесь, как стресс и тревожность накапливаются, влияют на тело и поведение. Вы научитесь восстанавливаться, регулировать напряжение и возвращать себе энергию — шаг за шагом.",
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
            <li className="dropdown">
              <span onClick={toggleDropdown}>Services</span>
              <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                <li><Link to="/relationship-service">Relationship</Link></li>
                <li><Link to="/stress-anxiety">Stress / Anxiety</Link></li>
                <li><Link to="/self-confidence">Self-Confidence / Self-Esteem</Link></li>
                <li><Link to="/adaptation">Adaptation</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <span onClick={toggleCouncillorsDropdown}>Councillors</span>
              <ul className={`dropdown-menu ${isCouncillorsDropdownOpen ? 'open' : ''}`}>
                <li><Link to="/victoria-kotenko">Victoria Kotenko</Link></li>
              </ul>
            </li>
            <li><Link to="/our-product">Shop</Link></li>
            <li><Link to="/blog-grid">Blog</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
          </ul>
          <div className="header-language">
            <div className="custom-select">
              <span className="selected-language">{selectedLanguage}</span>
            </div>
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
            {slide.description && <p>{slide.description}</p>}
            <Link to="/learn-more" className="read-more">Читать больше</Link>
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
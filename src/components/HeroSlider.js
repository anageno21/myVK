import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSlider.css';

const HeroSlider = ({ showOnlyVideo = false, videoSrc = '/videos/hero-video-1.mp4' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCouncillorsDropdownOpen, setIsCouncillorsDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null); // For delayed closing

  const languages = [
    { value: 'English', label: 'English' },
    { value: 'Ukrainian', label: 'Українська' },
    { value: 'Russian', label: 'Русский' },
  ];

  const slides = [
    {
      type: 'video',
      src: videoSrc,
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

  const displayedSlides = showOnlyVideo ? [slides[0]] : slides;

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    console.log("Selected language:", language);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
    if (isCouncillorsDropdownOpen) setIsCouncillorsDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
    setIsCouncillorsDropdownOpen(false); // Close the other dropdown
  };

  const toggleCouncillorsDropdown = (e) => {
    e.stopPropagation();
    setIsCouncillorsDropdownOpen(!isCouncillorsDropdownOpen);
    setIsDropdownOpen(false); // Close the other dropdown
  };

  const handleMouseEnterDropdown = (dropdownType) => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Clear any closing timeout
    }
    if (dropdownType === 'services') {
      setIsDropdownOpen(true);
      setIsCouncillorsDropdownOpen(false);
    } else if (dropdownType === 'councillors') {
      setIsCouncillorsDropdownOpen(true);
      setIsDropdownOpen(false);
    }
  };

  const handleMouseLeaveDropdown = () => {
    const id = setTimeout(() => {
      setIsDropdownOpen(false);
      setIsCouncillorsDropdownOpen(false);
    }, 200); // 200ms delay before closing
    setTimeoutId(id);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Prevent closing while hovering over the dropdown
    }
  };

  const handleDropdownMouseLeave = () => {
    handleMouseLeaveDropdown(); // Close after leaving the dropdown
  };

  const handleFocusDropdown = (dropdownType) => {
    if (dropdownType === 'services') {
      setIsDropdownOpen(true);
      setIsCouncillorsDropdownOpen(false);
    } else if (dropdownType === 'councillors') {
      setIsCouncillorsDropdownOpen(true);
      setIsDropdownOpen(false);
    }
  };

  const handleBlurDropdown = () => {
    handleMouseLeaveDropdown(); // Close after losing focus
  };

  useEffect(() => {
    if (displayedSlides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % displayedSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [displayedSlides]); // Use displayedSlides as the dependency

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
            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnterDropdown('services')}
              onMouseLeave={handleMouseLeaveDropdown}
              onFocus={() => handleFocusDropdown('services')}
              onBlur={handleBlurDropdown}
            >
              <div className="dropdown-header">
                <Link
                  to="/our-service"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Navigating to /our-service");
                  }}
                >
                  Services
                </Link>
                <span onClick={toggleDropdown} className="dropdown-toggle">
                  <i className={`las ${isDropdownOpen ? 'la-angle-up' : 'la-angle-down'}`}></i>
                </span>
              </div>
              <ul
                className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <li><Link to="/relationship-service">Relationship</Link></li>
                <li><Link to="/stress-anxiety">Stress / Anxiety</Link></li>
                <li><Link to="/self-confidence">Self-Confidence / Self-Esteem</Link></li>
                <li><Link to="/adaptation">Adaptation</Link></li>
              </ul>
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnterDropdown('councillors')}
              onMouseLeave={handleMouseLeaveDropdown}
              onFocus={() => handleFocusDropdown('councillors')}
              onBlur={handleBlurDropdown}
            >
              <div className="dropdown-header">
                <Link
                  to="/our-therapists"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Navigating to /our-therapists");
                  }}
                >
                  Councillors
                </Link>
                <span onClick={toggleCouncillorsDropdown} className="dropdown-toggle">
                  <i className={`las ${isCouncillorsDropdownOpen ? 'la-angle-up' : 'la-angle-down'}`}></i>
                </span>
              </div>
              <ul
                className={`dropdown-menu ${isCouncillorsDropdownOpen ? 'open' : ''}`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <li><Link to="/victoria-kotenko">Victoria Kotenko</Link></li>
              </ul>
            </li>
            <li><Link to="/our-product">Shop</Link></li>
            <li>
              <Link
                to="/blog-grid"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Navigating to /blog-grid");
                }}
              >
                Blog
              </Link>
            </li>
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
      {displayedSlides.map((slide, index) => (
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
            <button className="read-more">Читать больше</button>
          </div>
        </div>
      ))}
      {displayedSlides.length > 1 && (
        <div className="pagination">
          {displayedSlides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSlider;
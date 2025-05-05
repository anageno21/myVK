import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiMail, FiMusic, FiMessageCircle, FiTwitter, FiFacebook } from 'react-icons/fi';
import './ProfileHeader.css';

const ProfileHeader = ({ isDarkBackground = true }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCouncillorsDropdownOpen, setIsCouncillorsDropdownOpen] = useState(false);

  const languages = [
    { value: 'English', label: 'English' },
    { value: 'Ukrainian', label: 'Українська' },
    { value: 'Russian', label: 'Русский' },
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
    if (isCouncillorsDropdownOpen) setIsCouncillorsDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
    setIsCouncillorsDropdownOpen(false);
  };

  const toggleCouncillorsDropdown = (e) => {
    e.stopPropagation();
    setIsCouncillorsDropdownOpen(!isCouncillorsDropdownOpen);
    setIsDropdownOpen(false);
  };

  const handleMouseEnterDropdown = (dropdownType) => {
    if (dropdownType === 'services') {
      setIsDropdownOpen(true);
      setIsCouncillorsDropdownOpen(false);
    } else if (dropdownType === 'councillors') {
      setIsCouncillorsDropdownOpen(true);
      setIsDropdownOpen(false);
    }
  };

  const handleMouseLeaveDropdown = () => {
    setIsDropdownOpen(false);
    setIsCouncillorsDropdownOpen(false);
  };

  return (
    <div className="profile-header-wrapper">
      <div className="header-logo">
        <Link to="/">
          <img src="/images/logo/Logo.png" alt="Anageno" />
        </Link>
      </div>
      <div className="header-container">
        <div className="burger-menu" onClick={toggleMenu}>
          <span>☰</span>
        </div>
        <nav className={`header-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navigation">
            <li><Link to="/about" className={isDarkBackground ? 'light-text' : 'dark-text'}>О нас</Link></li>
            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnterDropdown('services')}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <div className="dropdown-header">
                <Link
                  to="/our-service"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Navigating to /our-service");
                  }}
                  className={isDarkBackground ? 'light-text' : 'dark-text'}
                >
                  Услуги
                </Link>
                <span onClick={toggleDropdown} className={`dropdown-toggle ${isDarkBackground ? 'light-text' : 'dark-text'}`}>
                  <i className={`las ${isDropdownOpen ? 'la-angle-up' : 'la-angle-down'}`}></i>
                </span>
              </div>
              <ul
                className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}
                onMouseEnter={() => handleMouseEnterDropdown('services')}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <li><Link to="/services/relationships" className={isDarkBackground ? 'light-text' : 'dark-text'}>Отношения</Link></li>
                <li><Link to="/services/stress-anxiety" className={isDarkBackground ? 'light-text' : 'dark-text'}>Стресс / Тревога</Link></li>
                <li><Link to="/services/self-confidence" className={isDarkBackground ? 'light-text' : 'dark-text'}>Уверенность в себе</Link></li>
                <li><Link to="/services/adaptation" className={isDarkBackground ? 'light-text' : 'dark-text'}>Адаптация</Link></li>
              </ul>
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnterDropdown('councillors')}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <div className="dropdown-header">
                <Link
                  to="/our-therapists"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Navigating to /our-therapists");
                  }}
                  className={isDarkBackground ? 'light-text' : 'dark-text'}
                >
                  Терапевты
                </Link>
                <span onClick={toggleCouncillorsDropdown} className={`dropdown-toggle ${isDarkBackground ? 'light-text' : 'dark-text'}`}>
                  <i className={`las ${isCouncillorsDropdownOpen ? 'la-angle-up' : 'la-angle-down'}`}></i>
                </span>
              </div>
              <ul
                className={`dropdown-menu ${isCouncillorsDropdownOpen ? 'open' : ''}`}
                onMouseEnter={() => handleMouseEnterDropdown('councillors')}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <li><Link to="/victoria-kotenko" className={isDarkBackground ? 'light-text' : 'dark-text'}>Виктория Котенко</Link></li>
              </ul>
            </li>
            <li><Link to="/our-product" className={isDarkBackground ? 'light-text' : 'dark-text'}>Магазин</Link></li>
            <li>
              <Link
                to="/blog-library"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Navigating to /blog-library");
                }}
                className={isDarkBackground ? 'light-text' : 'dark-text'}
              >
                Блог
              </Link>
            </li>
            <li><Link to="/contact-us" className={isDarkBackground ? 'light-text' : 'dark-text'}>Контакты</Link></li>
          </ul>
          <div className="header-language">
            <div className={`custom-select ${isDarkBackground ? 'light-text' : 'dark-text'}`}>
              <span className="selected-language">{selectedLanguage}</span>
            </div>
            <ul className="language-options">
              {languages.map((lang) => (
                <li
                  key={lang.value}
                  onClick={() => handleLanguageSelect(lang.label)}
                  className={`${lang.label === selectedLanguage ? 'active' : ''} ${isDarkBackground ? 'light-text' : 'dark-text'}`}
                >
                  {lang.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="header-login">
            <Link to="/login" className={`login-link ${isDarkBackground ? 'light-text' : 'dark-text'}`}>Войти</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ProfileHeader;
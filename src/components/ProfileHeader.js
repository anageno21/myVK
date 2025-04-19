// src/components/ProfileHeader.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfileHeader.css';

const ProfileHeader = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="profile-header-wrapper">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <img src="/images/logo/logo.png" alt="Anageno" />
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
                <li><Link to="/relationship">Relationship</Link></li>
                <li><Link to="/stress-anxiety">Stress / Anxiety</Link></li>
                <li><Link to="/self-confidence">Self-Confidence / Self-Esteem</Link></li>
                <li><Link to="/adaptation">Adaptation</Link></li>
              </ul>
            </li>
            <li><Link to="/our-therapists">Councillors</Link></li>
            <li><Link to="/our-product">Shop</Link></li>
            <li><Link to="/blog-grid">Blog</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
          </ul>
          <div className={`header-language ${isLanguageOpen ? 'open' : ''}`}>
            <div className="custom-select" onClick={handleLanguageToggle}>
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
    </div>
  );
};

export default ProfileHeader;
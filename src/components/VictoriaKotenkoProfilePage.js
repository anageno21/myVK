// src/components/VictoriaKotenkoProfilePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'react-feather';
import ProfileHeader from './ProfileHeader';
import TwoColumnSection from './TwoColumnSection';
import VideoHighlightSection from './VideoHighlightSection';
import './VictoriaKotenkoProfilePage.css';

const VictoriaKotenkoProfilePage = () => {
  return (
    <div className="victoria-kotenko-profile-page">
      <ProfileHeader />
      <TwoColumnSection />
      <VideoHighlightSection />
      <main className="therapist-profile-content">
        <div className="container">
          <div className="profile-body">
            <h3>Contact Information</h3>
            <p>
              Email: <a href="mailto:[Insert Email]">[Insert Email]</a>
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/viktoriia_cyprus_psy/" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} className="social-icon" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61567082072960" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} className="social-icon" />
              </a>
              <a href="[Insert Twitter Link]" target="_blank" rel="noopener noreferrer">
                <Twitter size={24} className="social-icon" />
              </a>
            </div>
            <button className="book-session-button">Book a Session</button>
            <Link to="/" className="learn-more-button">
              Learn More About Anageno
            </Link>
          </div>
        </div>
      </main>
      {/* Το <NewFooter /> αφαιρέθηκε, αφού καλείται ήδη στο App.js */}
    </div>
  );
};

export default VictoriaKotenkoProfilePage;
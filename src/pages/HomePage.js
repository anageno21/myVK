// src/pages/HomePage.js
import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ProfileHeader from '../components/ProfileHeader';
import AboutAnageno from '../components/AboutAnageno';
import SpecialisingSection from '../components/SpecialisingSection';
import FavouriteTopics from '../components/FavouriteTopics';
import ConnectWithUs from '../components/ConnectWithUs';
import '../components/HeroSlider.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <ProfileHeader />
      <div className="hero-section" style={{ position: 'relative' }}>
        <HeroSlider
          contentType="video-then-slideshow" // Χρησιμοποιούμε το νέο contentType
          src="/videos/hero-video-1.mp4"
          images={[
            '/images/section/hero 2.png',
            '/images/section/hero 3.png',
            '/images/section/hero 4.png',
            '/images/section/hero 5.png',
          ]}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            maxWidth: '1020px',
            margin: '0 auto',
            left: '0',
            right: '0',
            transform: 'translateY(-50%)',
            color: '#fff',
            textAlign: 'left',
            zIndex: 6,
            fontFamily: 'Playfair Display, serif',
          }}
        >
          <h2
            style={{
              fontSize: '62px',
              lineHeight: '1.0',
              maxWidth: '500px',
              marginBottom: '20px',
              color: '#fff',
            }}
          >
            Добро пожаловать в пространство, созданное именно для тебя.
          </h2>
        </div>
      </div>
      <AboutAnageno />
      <SpecialisingSection />
      <FavouriteTopics />
      <ConnectWithUs />
    </div>
  );
};

export default HomePage;
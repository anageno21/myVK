// src/pages/HomePage.js
import React from 'react';
import HeroSlider from '../components/HeroSlider'; // Διορθώθηκε από MainHeroSlider
import AboutAnageno from '../components/AboutAnageno';
import SpecialisingSection from '../components/SpecialisingSection';
import FavouriteTopics from '../components/FavouriteTopics';
import ConnectWithUs from '../components/ConnectWithUs';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSlider />
      <AboutAnageno />
      <SpecialisingSection />
      <FavouriteTopics />
      <ConnectWithUs />
    </div>
  );
};

export default HomePage;
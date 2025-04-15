// src/pages/HomePage.js
import React from 'react';
import HeroSlider from '../components/HeroSlider';
import AboutAnageno from '../components/AboutAnageno';
import SpecialisingSection from '../components/SpecialisingSection';
// import HowWeWork from '../components/HowWeWork'; // Παραμένει απενεργοποιημένη
import FavouriteTopics from '../components/FavouriteTopics';
import ConnectWithUs from '../components/ConnectWithUs';
import FAQ from '../components/FAQ';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSlider />
      <AboutAnageno />
      <SpecialisingSection />
      {/* <HowWeWork /> */} {/* Παραμένει απενεργοποιημένη */}
      <FavouriteTopics />
      <ConnectWithUs />
      <FAQ />
    </div>
  );
};

export default HomePage;
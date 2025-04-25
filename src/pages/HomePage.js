import React from 'react';
import MainHeroSlider from '../components/MainHeroSlider';
import AboutAnageno from '../components/AboutAnageno';
import SpecialisingSection from '../components/SpecialisingSection';
import FavouriteTopics from '../components/FavouriteTopics';
import ConnectWithUs from '../components/ConnectWithUs';

const HomePage = () => {
  return (
    <div className="home-page">
      <MainHeroSlider showOnlyVideo={false} videoSrc="/videos/hero-video-1.mp4" />
      <AboutAnageno />
      <SpecialisingSection />
      <FavouriteTopics />
      <ConnectWithUs />
    </div>
  );
};

export default HomePage;
import React from 'react';
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
    </div>
  );
};

export default VictoriaKotenkoProfilePage;
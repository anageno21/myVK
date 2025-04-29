import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import NewFooter from '../components/NewFooter';

const AdaptationPage = () => {
  return (
    <div className="adaptation-page">
      <ProfileHeader />
      <div className="container">
        <h1>Адаптация</h1>
        <p>Как не потерять себя в новой реальности. Научитесь сохранять психическое равновесие в условиях перемен с техниками гибкости мышления.</p>
        {/* Θα προσθέσουμε περισσότερο περιεχόμενο στη συνέχεια */}
      </div>
      <NewFooter />
    </div>
  );
};

export default AdaptationPage;

import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import NewFooter from '../components/NewFooter';

const SelfEsteemPage = () => {
  return (
    <div className="self-esteem-page">
      <ProfileHeader />
      <div className="container">
        <h1>Самооценка и уверенность в себе</h1>
        <p>Строим уверенность, повыхаем самооценку — шаг за шагом. Узнайте, как замечать свои сильные стороны и поддерживать себя в трудные моменты.</p>
        {/* Θα προσθέσουμε περισσότερο περιεχόμενο στη συνέχεια */}
      </div>
      <NewFooter />
    </div>
  );
};

export default SelfEsteemPage;
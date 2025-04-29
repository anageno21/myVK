import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import NewFooter from '../components/NewFooter';

const FreePackagePage = () => {
  return (
    <div className="free-package-page">
      <ProfileHeader />
      <div className="container">
        <h1>Бесплатный Вводный Пакет</h1>
        <p>Попробуй бесплатно! Этот вводный пакет дает тебе доступ к базовым материалам на 3 дня, чтобы ты мог начать свой путь к личностному росту.</p>
        {/* Θα προσθέσουμε περισσότερο περιεχόμενο στη συνέχεια */}
      </div>
      <NewFooter />
    </div>
  );
};

export default FreePackagePage;

import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import NewFooter from '../components/NewFooter';

const StressAnxietyPage = () => {
  return (
    <div className="stress-anxiety-page">
      <ProfileHeader />
      <div className="container">
        <h1>Стресс и тревожность</h1>
        <p>Когда всё внутри слишком долго было в напряжении. Разберётесь, как стресс и тревожность накапливаются, влияют на тело и поведение. Вы научитесь восстанавливаться и регулировать напряжение.</p>
        {/* Θα προσθέσουμε περισσότερο περιεχόμενο στη συνέχεια */}
      </div>
      <NewFooter />
    </div>
  );
};

export default StressAnxietyPage;
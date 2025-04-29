import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import NewFooter from '../components/NewFooter';

const RelationshipsPage = () => {
  return (
    <div className="relationships-page">
      <ProfileHeader />
      <div className="container">
        <h1>Межличностные отношения</h1>
        <p>Научитесь слышать и не предавать себя в любых отношениях. Мы разбираемся, почему повторяются болезненные сценарии, учимся говорить о своих чувствах и строить контакт — честно, спокойно и с уважением к себе.</p>
        {/* Θα προσθέσουμε περισσότερο περιεχόμενο στη συνέχεια */}
      </div>
      <NewFooter />
    </div>
  );
};

export default RelationshipsPage;
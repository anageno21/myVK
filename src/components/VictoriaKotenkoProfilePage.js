// src/components/VictoriaKotenkoProfilePage.js
import React from 'react';
import ProfileHeader from './ProfileHeader';
import TwoColumnSection from './TwoColumnSection';
import VideoHighlightSection from './VideoHighlightSection';
import therapists from '../data/therapistsData'; // Εισαγωγή των δεδομένων
import './VictoriaKotenkoProfilePage.css';

const VictoriaKotenkoProfilePage = () => {
  // Παίρνουμε την Viktoria Kotenko από τα δεδομένα (id: 1)
  const viktoria = therapists.find(therapist => therapist.id === 1);

  // Εάν δεν βρεθεί η Viktoria, εμφανίζουμε μήνυμα σφάλματος ή κενό περιεχόμενο
  if (!viktoria) {
    return (
      <div className="victoria-kotenko-profile-page">
        <ProfileHeader />
        <p>Ошибка: Психолог не найден.</p>
      </div>
    );
  }

  return (
    <div className="victoria-kotenko-profile-page">
      <ProfileHeader />
      <TwoColumnSection therapist={viktoria} />
      <VideoHighlightSection therapist={viktoria} />
    </div>
  );
};

export default VictoriaKotenkoProfilePage;
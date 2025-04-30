import React from 'react';
import ProfileHeader from '../components/ProfileHeader'; // Υποθέτω ότι υπάρχει αυτό το component
import './RegisterPage.css'; // Θα δημιουργήσουμε και το CSS αρχείο

function RegisterPage() {
  return (
    <div className="register-page">
      <ProfileHeader />
      <main className="register-content">
        <div className="container">
          <h1>Регистрация</h1>
          <p>Зарегистрируйся, чтобы получить доступ к нашим услугам и начать заботиться о своём эмоциональном благополучии.</p>
          {/* Μπορείς να προσθέσεις φόρμα εγγραφής εδώ αργότερα */}
          <button className="register-button">Зарегистрироваться</button>
        </div>
      </main>
    </div>
  );
}

export default RegisterPage;
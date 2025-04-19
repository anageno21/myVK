// src/components/TherapistProfilePage.js
import React from 'react';
import ProfileHeader from './ProfileHeader';
import TwoColumnSection from './TwoColumnSection';
import VideoHighlightSection from './VideoHighlightSection';
import './TherapistProfilePage.css';

const TherapistProfilePage = () => {
  return (
    <div className="therapist-profile-page">
      <ProfileHeader />
      <TwoColumnSection />
      <VideoHighlightSection />
      <main className="therapist-profile-content">
        <div className="container">
          <div className="profile-header">
            <img
              src="/images/therapists/therapist-placeholder.jpg"
              alt="Therapist"
              className="therapist-image"
            />
          </div>
          <div className="profile-body">
            <h3>Qualifications</h3>
            <ul>
              <li>[Qualification 1]</li>
              <li>[Qualification 2]</li>
              <li>[Qualification 3]</li>
            </ul>
            <h3>Contact Information</h3>
            <p>
              Email: <a href="mailto:therapist@anageno.com">therapist@anageno.com</a><br />
              Phone: +30 123 456 7890
            </p>
            <button className="book-session-button">Book a Session</button>
          </div>
        </div>
      </main>
      <NewFooter />
    </div>
  );
};

export default TherapistProfilePage;
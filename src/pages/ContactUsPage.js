import React from 'react';
import ProfileHeader from '../components/ProfileHeader'; // Προσθήκη του ProfileHeader
import ConnectWithUs from '../components/ConnectWithUs';

function ContactUsPage() {
  return (
    <div>
      <ProfileHeader /> {/* Προσθήκη του ProfileHeader */}
      <ConnectWithUs />
    </div>
  );
}

export default ContactUsPage;
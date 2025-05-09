// src/pages/ContactUsPage.js
import React, { useContext } from 'react';
import { HeaderContext } from '../context/HeaderContext'; // Εισαγωγή του HeaderContext

const ContactUsPage = () => {
  const profileHeader = useContext(HeaderContext); // Χρήση του HeaderContext

  return (
    <div className="contact-us-page">
      {profileHeader} {/* Χρήση του profileHeader από το HeaderContext */}
      <h1>Contact Us</h1>
      {/* Το υπόλοιπο περιεχόμενο της σελίδας */}
    </div>
  );
};

export default ContactUsPage;
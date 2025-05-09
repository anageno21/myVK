// src/components/ConnectWithUs.js
import React from 'react';
import './ConnectWithUs.css';

const ConnectWithUs = () => {
  return (
    <section className="connect-with-us-section">
      <div className="container">
        <div className="split-container">
          <div className="left-section">
            <div className="section-header">
              <h2>
                <span className="highlight">BOOK A</span> Free Consultation - Begin <span className="highlight">YOUR HEALING JOURNEY</span>
              </h2>
              <p>Connect with a dedicated specialist today and take the first step towards a healthier, more fulfilling life.</p>
            </div>
            {/* Αφαίρεσα το contact-info μαζί με το email, το τηλέφωνο, και τη διεύθυνση */}
          </div>
          <div className="right-section">
            <form className="consultation-form">
              <h3>Get A Free Consultation</h3>
              <input type="text" placeholder="Your Name*" required />
              <input type="tel" placeholder="Phone Number" />
              <select>
                <option value="" disabled selected>Choose Services</option>
                <option value="therapy">Therapy</option>
                <option value="self-care">Self-Care</option>
                <option value="trauma">Trauma</option>
              </select>
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
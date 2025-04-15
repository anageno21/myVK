// src/components/AboutAnageno.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutAnageno.css';

const AboutAnageno = () => {
  return (
    <section className="about-anageno">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="image-frame">
              <img src="/images/section/aboutAnagenoVK.jpg" alt="About Anageno" />
              <div className="image-content">
                <h3>Viktoria Kotenko</h3>
                <p>Psychologist Counsellor</p>
                <Link to="/learn-more" className="read-more">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="therapy-frame">
            <div className="frame-content">
              <span className="sub-title">About Anageno</span>
              <h2>Trusted Professionals Dedicated to Your Mental</h2>
              <p>
                Anageno is a reputable center for counseling and psychological therapy, with a team of experienced professionals ready to listen and support you. We believe that everyone has the ability to heal and grow, with the right guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAnageno;
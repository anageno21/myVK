// src/components/Slider.js
import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(/images/hero/hero-1.jpg)` }} data-aos="fade-in">
      <div className="container">
        <h1 data-aos="fade-up">Support Your Child’s Emotional Growth</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          At Anageno, our specialized therapy for children offers a safe and nurturing environment where your child can express their feelings, develop emotional resilience, and navigate life’s challenges with confidence.
        </p>
        <Link to="/book-appointment" className="btn" data-aos="fade-up" data-aos-delay="400">
          Book a Consultation
        </Link>
      </div>
    </section>
  );
};

export default Slider;
// src/components/SpecialisingSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SpecialisingSection.css';

const SpecialisingSection = () => {
  return (
    <section className="specialising-section">
      <div className="container">
        <div className="section-header">
          <span className="sub-title">Specialising Services</span>
          <h2>Empowering Women’s Mental Health</h2>
          <p>
            Our all-female team provides specialized psychology services to support women in overcoming challenges and achieving emotional well-being.
          </p>
        </div>
        <div className="specialising-content">
          <div className="specialising-grid">
            <Link to="/learn-more" className="specialising-card" title="Learn More">
              <img src="/images/section/relationship.jpg" alt="Relationship" className="card-image" />
              <h3>Relationship</h3>
              <p>
                Strengthen your relationships with our counseling services, designed to foster communication and emotional connection.
              </p>
            </Link>
            <Link to="/learn-more" className="specialising-card" title="Learn More">
              <img src="/images/section/stress-anxiety.jpg" alt="Stress/Anxiety" className="card-image" />
              <h3>Stress/Anxiety</h3>
              <p>
                Learn effective techniques to manage stress and build resilience through our specialized women’s mental health programs.
              </p>
            </Link>
            <Link to="/learn-more" className="specialising-card" title="Learn More">
              <img src="/images/section/Self-esteem.jpg" alt="Self-Confidence/Self-Esteem" className="card-image" />
              <h3>Self-Confidence/Self-Esteem</h3>
              <p>
                Our team provides tailored therapy to help women manage anxiety, offering tools and strategies to regain control and find peace.
              </p>
            </Link>
            <Link to="/learn-more" className="specialising-card" title="Learn More">
              <img src="/images/section/Adaptation.jpg" alt="Adaptation" className="card-image" />
              <h3>Adaptation</h3>
              <p>
                We offer compassionate support for new mothers, addressing postpartum challenges with expert guidance and care.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialisingSection;
import React from 'react';

function AboutSection() {
  return (
    <section className="about-section">
      <div
        className="hero-slide"
        style={{
          backgroundImage: `url(/images/hero/hero-image.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '600px',
        }}
      >
        <div className="tf-container">
          <div className="row">
            <div className="col-md-6">
              <div className="hero-content-box">
                <h2 className="hero-title">Unlock Your Full Potential</h2>
                <p className="hero-subtitle">
                  Experience transformative therapy that focuses on unlocking your full potential
                </p>
                <a href="/book-appointment.html" className="tf-btn style-default btn-color-secondary">
                  <span>Book a Consultation</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
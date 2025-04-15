import React from 'react';

function AboutSectionAbout() {
  return (
    <div className="section-box-about page-about">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <h2 className="wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                Welcome to Anageno
              </h2>
              <p className="description text-1 lh-30 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                It is a trusted counseling and therapy center, staffed by experienced professionals dedicated to listening, supporting, and guiding you. We believe in everyone's potential to heal and grow with the right care.
              </p>
            </div>
            <div className="box-about">
              <div className="image-wrap wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                <img
                  className="lazyload"
                  data-src="/images/section/section-about-3.jpg"
                  src="/images/section/section-about-3.jpg"
                  alt="About Anageno"
                />
              </div>
              <div className="wrap-content">
                <div className="item wow fadeInLeft" data-wow-duration="1000" data-wow-delay="0s">
                  <h3>Our Mission</h3>
                  <p>
                    At Anageno, our mission is to provide compassionate, personalized mental health care that helps individuals and families overcome challenges. We are committed to creating a safe, supportive space for healing and growth, using evidence-based therapy to guide clients toward mental well-being.
                  </p>
                  <p>
                    Our team of experienced therapists works with each client to develop tailored strategies for resilience and self-awareness. We aim to equip individuals with the tools they need to build healthier relationships, manage stress, and create lasting change.
                  </p>
                </div>
                <div className="item wow fadeInRight" data-wow-duration="1000" data-wow-delay="0s">
                  <h3>Our Vision</h3>
                  <p>
                    Our vision is to be a leading center for mental health, where everyone has access to the care and support they need. We strive to create a world where mental health is prioritized, free from stigma, and where people feel empowered to seek help.
                  </p>
                  <p>
                    We aim to build a community where seeking therapy is encouraged and supported. By promoting mental health awareness and providing high-quality care, we hope to make a lasting positive impact on the lives of our clients.
                  </p>
                </div>
              </div>
              <div className="wrap-counter">
                <div className="counter-item has-icon">
                  <div className="icon">
                    <i className="icon-SketchLogo"></i>
                  </div>
                  <div className="count">
                    <div className="counter-number">
                      <div className="odometer style-1-1">0</div>
                      <span className="sub">Years</span>
                    </div>
                    <p>Years of Experience</p>
                  </div>
                </div>
                <div className="counter-item has-icon">
                  <div className="icon">
                    <i className="icon-Smiley"></i>
                  </div>
                  <div className="count">
                    <div className="counter-number">
                      <div className="odometer style-1-2">0</div>
                      <span className="sub">k</span>
                    </div>
                    <p>Happy customers</p>
                  </div>
                </div>
                <div className="counter-item has-icon">
                  <div className="icon">
                    <i className="icon-HandHeart"></i>
                  </div>
                  <div className="count">
                    <div className="counter-number">
                      <div className="odometer style-1-3">10</div>
                    </div>
                    <p>Therapy Sessions</p>
                  </div>
                </div>
                <div className="counter-item has-icon">
                  <div className="icon">
                    <i className="icon-Certificate"></i>
                  </div>
                  <div className="count">
                    <div className="counter-number">
                      <div className="odometer style-1-4">0</div>
                    </div>
                    <p>Certifications/Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSectionAbout;
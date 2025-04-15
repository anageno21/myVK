// src/components/AboutSectionHome.js
import React from 'react';

const AboutSectionHome = () => {
  return (
    <div className="section-box-about page-home-3 tf-spacing-1">
      <div className="tf-container">
        <div className="wrap-box-about">
          <div className="row">
            <div className="col-md-6">
              <div className="box-about">
                <div className="icon wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                  <img src="/images/item/favicon.png" alt="Anageno" />
                </div>
                <div className="heading-section text-start">
                  <p className="text-2 sub wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                    About Anageno
                  </p>
                  <h3 className="wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                    Trusted Professionals Dedicated to Your Mental
                  </h3>
                  <p className="description text-1 lh-30 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                    Anageno is a reputable center for counseling and psychological therapy, with a team of experienced professionals ready to listen and support you. We believe that everyone has the ability to heal and grow, with the right guidance.
                  </p>
                </div>
                <div className="wrap-counter layout-2">
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
                      <p>Happy Customers</p>
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
                      <p>Awards Winner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-5 offset-xl-1 offset-0">
              <div className="image-wrap wow fadeInRight effec-overlay" data-wow-duration="1000" data-wow-delay="0s">
                <img
                  className="lazyload"
                  data-src="/images/section/section-benefit.jpg"
                  src="/images/section/section-benefit.jpg"
                  alt="Anageno"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionHome;
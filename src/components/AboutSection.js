import React from 'react';

function AboutSection() {
  return (
    <div className="section-box-about">
      <div className="tf-container">
        <div className="wrap-box-about">
          <div className="row justify-center">
            <div className="col-lg-8">
              <div className="box-about">
                <div className="heading-section animate__bounce" data-wow-duration="1000">
                  <p className="text-2 sub wow fadeInUp" data-wow-duration="1000">
                    About Anageno
                  </p>
                  <h3 className="wow fadeInUp" data-wow-duration="1000">
                    We Provide Professional, Dedicated, And Experienced Psychological Support
                  </h3>
                  <p className="description text-1 lh-30 wow fadeInUp" data-wow-duration="1000">
                    It is a trusted counseling and therapy center, staffed by experienced professionals
                    dedicated to listening, supporting, and guiding you. We believe in everyone's potential
                    to heal and grow with the right care.
                  </p>
                </div>
                <a
                  className="tf-btn mx-auto style-default btn-color-white has-boder pd-26 wow fadeInUp"
                  href="/about.html"
                >
                  <span>Learn More About Us</span>
                </a>
                <div className="item">
                  <img src="/images/section/section-about-1.jpg" alt="About Anageno" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
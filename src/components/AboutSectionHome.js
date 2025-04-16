import React from 'react';

function AboutSectionHome() {
  return (
    <div className="section-box-about page-home-4 tf-spacing-4">
      <div className="tf-container">
        <div className="wrap-box-about">
          <div className="row">
            <div className="col-md-6">
              <div className="image-wrap wow fadeInLeft effec-overlay" data-wow-duration="1000" data-wow-delay="0s">
                <img
                  className="lazyload"
                  data-src="/images/section/section-about-2.jpg"
                  src="/images/section/section-about-2.jpg"
                  alt="About Anageno"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="box-about">
                <div className="heading-section text-start">
                  <p className="text-2 sub wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                    About Anageno
                  </p>
                  <h3 className="wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                    Trusted professionals dedicated to your mental
                  </h3>
                  <p className="description text-1 lh-30 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                    Anageno is a reputable center for counseling and psychological therapy, with a team of experienced professionals ready to listen and support you.
                  </p>
                </div>
                <div className="wrap-icons-box-list">
                  <div className="icons-box-list effec-icon wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                    <div className="icon">
                      <i className="icon-HandHeart"></i>
                    </div>
                    <div className="content">
                      <h6 className="title"><a href="#">Personalized Care</a></h6>
                      <p>We tailor treatment plans to your needs, guiding your healing journey.</p>
                    </div>
                  </div>
                  <div className="icons-box-list effec-icon wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                    <div className="icon">
                      <i className="icon-SketchLogo"></i>
                    </div>
                    <div className="content">
                      <h6 className="title"><a href="#">Experienced Professionals</a></h6>
                      <p>Our therapists offer expert care with effective, personalized strategies.</p>
                    </div>
                  </div>
                  <div className="icons-box-list effec-icon wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                    <div className="icon">
                      <i className="icon-Lifebuoy"></i>
                    </div>
                    <div className="content">
                      <h6 className="title"><a href="#">Supportive Environment</a></h6>
                      <p>We create a safe, supportive space for positive, lasting change.</p>
                    </div>
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

export default AboutSectionHome;
import React from 'react';

function ProcessSection() {
  return (
    <section className="section-process tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <p className="text-2 sub wow fadeInUp" data-wow-duration="1000" data-wow-delay="0">
                How We Work
              </p>
              <h3 className="wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                Counseling & Therapy Process
              </h3>
              <p className="description text-1 lh-30 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                Supporting you from consultation to care for a smooth path to mental well-being.
              </p>
            </div>
            <div className="wrap-process">
              <div className="process-item">
                <div className="item">1</div>
                <div className="content">
                  <h5 className="title">
                    <a href="#">Contact Consultation</a>
                  </h5>
                  <p>
                    Contact us via phone, email to schedule an initial consultation where we’ll explore
                    your needs.
                  </p>
                </div>
              </div>
              <div className="process-item">
                <div className="item">
                  2
                  <span className="line"></span>
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="#">Customized Plan</a>
                  </h5>
                  <p>
                    We’ll develop a personalized therapy plan based on your specific needs and goals to
                    ensure the most support.
                  </p>
                </div>
              </div>
              <div className="process-item">
                <div className="item">
                  3
                  <span className="line"></span>
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="#">Therapy Sessions</a>
                  </h5>
                  <p>
                    Contact us via phone, email to schedule an initial consultation where we’ll explore
                    your needs.
                  </p>
                </div>
              </div>
              <div className="process-item">
                <div className="item">
                  4
                  <span className="line"></span>
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="#">Ongoing Support</a>
                  </h5>
                  <p>
                    We’ll provide continuous support, regularly review your progress, and adjust the plan
                    as needed to help you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
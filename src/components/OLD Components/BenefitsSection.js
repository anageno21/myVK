import React from 'react';

function BenefitsSection() {
  return (
    <div className="section-benefits tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-6">
            <div className="box-benefits">
              <div className="heading-section text-start">
                <p className="text-2 sub wow fadeInUp" data-wow-duration="1000">
                  Why Choose Us
                </p>
                <h3 className="wow fadeInUp" data-wow-duration="1000">
                  Benefits of Choosing Anageno
                </h3>
                <p className="description text-1 lh-30 wow fadeInUp" data-wow-duration="1000">
                  We are deeply committed to bringing positive, meaningful, and lasting change to your
                  life, empowering you to thrive & achieve your fullest potential.
                </p>
              </div>
              <ul className="list-check">
                <li className="wow fadeInUp" data-wow-duration="1000">
                  <h5 className="title">
                    <i className="icon-CheckCircle"></i> Top Psychologists:
                  </h5>
                  <p>
                    Our team of professionals is highly qualified and experienced in the field of
                    psychology and therapy.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1000">
                  <h5 className="title">
                    <i className="icon-CheckCircle"></i> Effective Methods:
                  </h5>
                  <p>
                    We use modern, proven therapeutic methods to help you achieve a balanced and more
                    fulfilling life.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1000">
                  <h5 className="title">
                    <i className="icon-CheckCircle"></i> Ongoing Support:
                  </h5>
                  <p>
                    We provide support not only during therapy sessions but also with advice and
                    guidance after each session.
                  </p>
                </li>
              </ul>
              <a
                className="tf-btn style-default btn-color-white has-boder pd-26 wow fadeInUp"
                href="/contact-us.html"
                data-wow-duration="1000"
              >
                <span>Contact Us Now</span>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-wrap wow fadeInRight effec-overlay" data-wow-duration="1000">
              <img
                className="lazyload"
                data-src="/images/section/section-benefit.jpg"
                src="/images/section/section-benefit.jpg"
                alt="Anageno Benefits"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;
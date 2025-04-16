import React from 'react';

function CtaSection() {
  return (
    <section className="section-cta">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="wrap-content bg-1">
              <div className="box-cta">
                <div className="heading-section text-start">
                  <p className="text-2 sub wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                    BEGIN YOUR HEALING JOURNEY
                  </p>
                  <h3 className="wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                    Begin Your Transformation to a More Fulfilling Life
                  </h3>
                  <p className="description text-1 lh-30 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                    We offer compassionate, personalized care to address your unique needs. We are committed to working with you to find a resolution promptly. Let’s take the first step towards a healthier, happier you.
                  </p>
                </div>
                <a
                  className="tf-btn style-default btn-color-secondary pd-28"
                  href="/contact-us.html"
                >
                  <span>
                    Book a Consultation <i className="icon-ArrowRight arr-1"></i>
                  </span>
                </a>
              </div>
              <div className="image-wrap wow fadeInRight" data-wow-duration="1000" data-wow-delay="0s">
                <img
                  className="lazyload"
                  data-src="/images/section/section-cta.png"
                  src="/images/section/section-cta.png"
                  alt="Begin Your Healing Journey"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
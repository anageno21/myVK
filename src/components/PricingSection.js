import React from 'react';

function PricingSection() {
  return (
    <section className="section-pricing bg-1 tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <p className="text-2 sub wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                Pricing Plans
              </p>
              <h3 className="wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                Affordable care for you
              </h3>
              <p className="description text-1 lh-30 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                We offer flexible pricing to fit different needs while ensuring accessibility.
              </p>
            </div>
            <div className="grid-layout-3 gap-30">
              <div className="pricing-item wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                <div className="pricing">
                  <h5>Basic Plan</h5>
                  <p><span className="h3">$80.00</span>/ per session</p>
                </div>
                <p className="description">
                  Ideal for those needing occasional therapy with flexible scheduling to manage stress, anxiety, or personal challenges.
                </p>
                <ul className="list-check">
                  <li>
                    <i className="icon-check"></i>
                    <p>Flexible scheduling with no long-term commitment.</p>
                  </li>
                  <li>
                    <i className="icon-check"></i>
                    <p>Access to licensed therapists.</p>
                  </li>
                  <li>
                    <i className="icon-check"></i>
                    <p>Ideal for short-term or as-needed therapy.</p>
                  </li>
                </ul>
                <a href="#" className="tf-btn style-default btn-color-white has-boder pd-26">
                  <span>Book Session</span>
                </a>
                <div className="item">
                  <img src="/images/item/pricing-item.png" alt="Basic Plan" />
                </div>
              </div>
              <div className="pricing-item wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.1s">
                <div className="pricing">
                  <h5>Standard Plan</h5>
                  <p><span className="h3">$100.00</span>/ per session</p>
                </div>
                <p className="description">
                  Great for occasional therapy, offering flexible scheduling and support for stress or personal issues.
                </p>
                <ul className="list-check">
                  <li>
                    <i className="icon-check"></i>
                    <p>Suitable for long-term mental health improvement and relationship support</p>
                  </li>
                  <li>
                    <i className="icon-check"></i>
                    <p>Regular sessions with priority scheduling.</p>
                  </li>
                  <li>
                    <i className="icon-check"></i>
                    <p>Personalized treatment plans</p>
                  </li>
                </ul>
                <a href="#" className="tf-btn style-default btn-color-secondary pd-28">
                  <span>Book Session</span>
                </a>
                <div className="item">
                  <img src="/images/item/pricing-item.png" alt="Standard Plan" />
                </div>
                <div className="sale-off">
                  <p className="text-2">50% Off Now</p>
                </div>
              </div>
              <div className="pricing-item wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.2s">
                <div className="pricing">
                  <h5>Premium Plan</h5>
                  <p><span className="h3">$130.00</span>/ per session</p>
                </div>
                <p className="description">
                  Designed for those who need flexible therapy sessions to handle stress, anxiety, and personal concerns.
                </p>
                <ul className="list-check">
                  <li>
                    <i className="icon-check"></i>
                    <p>Priority scheduling and extended session times</p>
                  </li>
                  <li>
                    <i className="icon-check"></i>
                    <p>Customized care for more complex cases</p>
                  </li>
                  <li>
                    <i className="icon-check"></i>
                    <p>Family or couples therapy included</p>
                  </li>
                </ul>
                <a href="#" className="tf-btn style-default btn-color-white has-boder pd-26">
                  <span>Book Session</span>
                </a>
                <div className="item">
                  <img src="/images/item/pricing-item.png" alt="Premium Plan" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
import React from 'react';

function ServicesSectionHome() {
  return (
    <section className="section-service tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="wrap-heading">
              <div className="heading-section text-start">
                <p className="text-2 sub wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                  What We Do
                </p>
                <h3 className="wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                  Counseling & Therapy Services
                </h3>
                <p className="description text-1 lh-30 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                  We offer a wide range of services to meet your personal needs
                </p>
              </div>
              <a
                className="tf-btn style-default btn-color-white has-boder pd-26 wow fadeInUp"
                href="/our-service.html"
                data-wow-duration="1000"
                data-wow-delay="0.1s"
              >
                <span>Explore Our Services</span>
              </a>
            </div>
            <div className="grid-layout-3 multi-item">
              <div className="service-item h-280 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                <div className="content z-5">
                  <h5 className="title">
                    <a href="/service-details.html">Individual Counseling</a>
                  </h5>
                  <p>Personal psychological support to help you overcome stress, anxiety, and regain confidence.</p>
                </div>
                <a href="/service-details.html" className="tf-btn-link z-5">
                  <span data-text="Read More">Read More</span>
                  <i className="icon-ArrowRight"></i>
                </a>
              </div>
              <div className="service-item h-280 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.1s">
                <div className="content z-5">
                  <h5 className="title">
                    <a href="/service-details.html">Family Therapy</a>
                  </h5>
                  <p>Improve family relationships, resolve conflicts, and build a healthy living environment.</p>
                </div>
                <a href="/service-details.html" className="tf-btn-link z-5">
                  <span data-text="Read More">Read More</span>
                  <i className="icon-ArrowRight"></i>
                </a>
              </div>
              <div className="service-item h-280 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.2s">
                <div className="content z-5">
                  <h5 className="title">
                    <a href="/service-details.html">Couples Therapy</a>
                  </h5>
                  <p>Enhance understanding affection between couples, helping to strengthen the relationship.</p>
                </div>
                <a href="/service-details.html" className="tf-btn-link z-5">
                  <span data-text="Read More">Read More</span>
                  <i className="icon-ArrowRight"></i>
                </a>
              </div>
              <div className="service-item h-280 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                <div className="content z-5">
                  <h5 className="title">
                    <a href="/service-details.html">Group Therapy</a>
                  </h5>
                  <p>Join others with similar challenges, sharing experiences and support in a guided group setting.</p>
                </div>
                <a href="/service-details.html" className="tf-btn-link z-5">
                  <span data-text="Read More">Read More</span>
                  <i className="icon-ArrowRight"></i>
                </a>
              </div>
              <div className="service-item h-280 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.1s">
                <div className="content z-5">
                  <h5 className="title">
                    <a href="/service-details.html">Child & Adolescent Therapy</a>
                  </h5>
                  <p>Specialized support for children and teens, helping them navigate emotional challenges and build resilience.</p>
                </div>
                <a href="/service-details.html" className="tf-btn-link z-5">
                  <span data-text="Read More">Read More</span>
                  <i className="icon-ArrowRight"></i>
                </a>
              </div>
              <div className="service-item h-280 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.2s">
                <div className="content z-5">
                  <h5 className="title">
                    <a href="/service-details.html">Trauma Counseling</a>
                  </h5>
                  <p>Focused therapy to help you heal from past trauma and regain control over your life.</p>
                </div>
                <a href="/service-details.html" className="tf-btn-link z-5">
                  <span data-text="Read More">Read More</span>
                  <i className="icon-ArrowRight"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSectionHome;
import React from 'react';

function PageTitleHome() {
  return (
    <div className="page-title-homepage-4">
      <div className="swiper-container slide-effect-fade slider-page-title-home">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              className="lazyload"
              data-src="/images/page-title/page-title-home-4.1.jpg"
              src="/images/page-title/page-title-home-4.1.jpg"
              alt="Revitalize Your Mind And Spirit"
            />
            <div className="content-inner">
              <div className="tf-container">
                <div className="row">
                  <div className="col-12">
                    <div className="wrap-content">
                      <div className="heading fade-item fade-item1">
                        <h2 className="title">Revitalize Your Mind And Spirit</h2>
                        <p className="description fade-item fade-item2">
                          Our personalized therapy sessions are designed to help you regain mental clarity and emotional strength.
                        </p>
                      </div>
                      <div className="fade-item fade-item3">
                        <a
                          className="tf-btn style-default btn-color-secondary pd-28"
                          href="/contact-us.html"
                        >
                          <span>
                            Book a Consultation <i className="icon-ArrowRight arr-1"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <img
              className="lazyload"
              data-src="/images/page-title/page-title-home-4.2.jpg"
              src="/images/page-title/page-title-home-4.2.jpg"
              alt="Unlock Your Full Potential"
            />
            <div className="content-inner">
              <div className="tf-container">
                <div className="row">
                  <div className="col-12">
                    <div className="wrap-content">
                      <div className="heading">
                        <h2 className="title fade-item fade-item1">Unlock Your Full Potential</h2>
                        <p className="description fade-item fade-item2">
                          Experience transformative therapy that focuses on unlocking your full potential.
                        </p>
                      </div>
                      <div className="fade-item fade-item3">
                        <a
                          className="tf-btn style-default btn-color-secondary pd-28"
                          href="/contact-us.html"
                        >
                          <span>
                            Book a Consultation <i className="icon-ArrowRight arr-1"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <img
              className="lazyload"
              data-src="/images/page-title/page-title-home-4.3.jpg"
              src="/images/page-title/page-title-home-4.3.jpg"
              alt="Find Clarity and Inner Peace"
            />
            <div className="content-inner">
              <div className="tf-container">
                <div className="row">
                  <div className="col-12">
                    <div className="wrap-content">
                      <div className="heading">
                        <h2 className="title fade-item fade-item1">Find Clarity and Inner Peace</h2>
                        <p className="description fade-item fade-item2">
                          Take a step towards mental clarity and inner peace with our professional therapy services.
                        </p>
                      </div>
                      <div className="fade-item fade-item3">
                        <a
                          className="tf-btn style-default btn-color-secondary pd-28"
                          href="/contact-us.html"
                        >
                          <span>
                            Book a Consultation <i className="icon-ArrowRight arr-1"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-button-next button page-title-next">
        <i className="icon-CaretRight"></i>
      </div>
      <div className="swiper-button-prev button page-title-prev">
        <i className="icon-CaretLeft"></i>
      </div>
      <div className="swiper-pagination pagination-page-title-home"></div>
    </div>
  );
}

export default PageTitleHome;
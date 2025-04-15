// src/components/ServicesSectionHome.js
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSectionHome = () => {
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
              <Link
                to="/our-service"
                className="tf-btn style-default btn-color-white has-boder pd-26 wow fadeInUp"
                data-wow-duration="1000"
                data-wow-delay="0.1s"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>
            <div className="grid-layout-3 multi-item">
              <div className="service-item style-3 hover-img wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                <div className="content z-5">
                  <h5 className="title">
                    <Link to="/service-details">Individual Counseling</Link>
                  </h5>
                  <p>Personal psychological support to help you overcome stress, anxiety, and regain confidence.</p>
                </div>
                <div className="image-wrap z-5 relative">
                  <Link to="/service-details">
                    <img
                      className="lazyload"
                      data-src="/images/section/service-item-1.jpg"
                      src="/images/section/service-item-1.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <Link to="/service-details" className="tf-btn-link z-5">
                  <span data-text="Read More">Read More</span>
                  <i className="icon-ArrowRight"></i>
                </Link>
              </div>
              <div className="service-item style-3 hover-img wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.1s">
                <div className="content z-5">
                  <h5 className="title">
                    <Link to="/service-details">Family Therapy</Link>
                  </h5>
                  <p>Improve family relationships, resolve conflicts, and build a healthy living environment.</p>
                </div>
                <div className="image-wrap z-5 relative">
                  <Link to="/service-details">
                    <img
                      className="lazyload"
                      data-src="/images/section/service-item-2.jpg"
                      src="/images/section/service-item-2.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <Link to="/service-details" className="tf-btn-link z-5">
                  <span data-text="Read More">Read More</span>
                  <i className="icon-ArrowRight"></i>
                </Link>
              </div>
              <div className="service-item style-3 hover-img wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.2s">
                <div className="content z-5">
                  <h5 className="title">
                    <Link to="/service-details">Couples Therapy</Link>
                  </h5>
                  <p>Enhance understanding affection between couples, helping to strengthen the relationship.</p>
                </div>
                <div className="image-wrap z-5 relative">
                  <Link to="/service-details">
                    <img
                      className="lazyload"
                      data-src="/images/section/service-item-3.jpg"
                      src="/images/section/service-item-3.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <Link to="/service-details" className="tf-btn-link z-5">
                  <span data-text="Read More">Read More</span>
                  <i className="icon-ArrowRight"></i>
                </Link>
              </div>
              <div className="service-item style-3 hover-img wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                <div className="content z-5">
                  <h5 className="title">
                    <Link to="/service-details">Group Therapy</Link>
                  </h5>
                  <p>Join others with similar challenges, sharing experiences and support in a group setting.</p>
                </div>
                <div className="image-wrap z-5 relative">
                  <Link to="/service-details">
                    <img
                      className="lazyload"
                      data-src="/images/section/service-item-4.jpg"
                      src="/images/section/service-item-4.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <Link to="/service-details" className="tf-btn-link z-5">
                  <span data-text="Read More">Read More</span>
                  <i className="icon-ArrowRight"></i>
                </Link>
              </div>
              <div className="service-item style-3 hover-img wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.1s">
                <div className="content z-5">
                  <h5 className="title">
                    <Link to="/service-details">Child & Adolescent Therapy</Link>
                  </h5>
                  <p>Specialized support for children and teens, helping them navigate emotional challenges.</p>
                </div>
                <div className="image-wrap z-5 relative">
                  <Link to="/service-details">
                    <img
                      className="lazyload"
                      data-src="/images/section/service-item-5.jpg"
                      src="/images/section/service-item-5.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <Link to="/service-details" className="tf-btn-link z-5">
                  <span data-text="Read More">Read More</span>
                  <i className="icon-ArrowRight"></i>
                </Link>
              </div>
              <div className="service-item style-3 hover-img wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.2s">
                <div className="content z-5">
                  <h5 className="title">
                    <Link to="/service-details">Trauma Counseling</Link>
                  </h5>
                  <p>Focused therapy to help you heal from past trauma and regain control over your life.</p>
                </div>
                <div className="image-wrap z-5 relative">
                  <Link to="/service-details">
                    <img
                      className="lazyload"
                      data-src="/images/section/service-item-6.jpg"
                      src="/images/section/service-item-6.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <Link to="/service-details" className="tf-btn-link z-5">
                  <span data-text="Read More">Read More</span>
                  <i className="icon-ArrowRight"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionHome;
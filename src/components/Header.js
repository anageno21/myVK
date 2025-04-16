import React from 'react';

function Header() {
  return (
    <header id="header-main" className="header style-absolute">
      <div className="header-inner">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="header-inner-wrap">
                <div className="header-logo">
                  <a href="/" className="site-logo">
                    <img
                      id="logo_header"
                      alt="Anageno Logo"
                      src="/images/logo/logo.png"
                      data-retina="/images/logo/logo@2x.png"
                    />
                  </a>
                </div>
                <nav className="main-menu">
                  <ul className="navigation">
                    <li className="has-child relative">
                      <a href="javascript:void(0)">Home</a>
                      <ul className="sub-menu">
                        <li><a href="/index.html">Homepage 01</a></li>
                        <li><a href="/home-02.html">Homepage 02</a></li>
                        <li><a href="/home-03.html">Homepage 03</a></li>
                        <li><a href="/home-04.html">Homepage 04</a></li>
                        <li><a href="/home-slide-text-scroll.html">Home slide text scroll</a></li>
                      </ul>
                    </li>
                    <li className="has-child">
                      <a href="/our-service.html">Services</a>
                      <div className="sub-menu service-link">
                        <div className="tf-container">
                          <div className="row">
                            <div className="col-12">
                              <div className="wrap-cta">
                                <div className="left">
                                  <h5 className="wg-title">Counseling & Therapy Services</h5>
                                  <div className="wrap-service">
                                    <div className="service-item-list">
                                      <h6><a href="/service-details.html">Family Therapy</a></h6>
                                      <p className="text-2">
                                        Improve family relationships, resolve conflicts, and build a healthy living environment.
                                      </p>
                                    </div>
                                    <div className="service-item-list">
                                      <h6><a href="/service-details.html">Child & Adolescent Therapy</a></h6>
                                      <p className="text-2">
                                        Specialized support for children and teens, helping them navigate emotional challenges.
                                      </p>
                                    </div>
                                    <div className="service-item-list">
                                      <h6><a href="/service-details.html">Group Therapy</a></h6>
                                      <p className="text-2">
                                        Join others with similar challenges, sharing experiences and support in a guided group setting.
                                      </p>
                                    </div>
                                    <div className="service-item-list">
                                      <h6><a href="/service-details.html">Couples Therapy</a></h6>
                                      <p className="text-2">
                                        Enhance understanding affection between couples, helping to strengthen the relationship.
                                      </p>
                                    </div>
                                    <div className="service-item-list">
                                      <h6><a href="/service-details.html">Trauma Counseling</a></h6>
                                      <p className="text-2">
                                        Focused therapy to help you heal from past trauma and regain control over your life.
                                      </p>
                                    </div>
                                    <div className="service-item-list">
                                      <h6><a href="/service-details.html">Individual Counseling</a></h6>
                                      <p className="text-2">
                                        Personal psychological support to help you overcome stress, anxiety, and regain confidence.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="right">
                                  <h5 className="wg-title">What’s New</h5>
                                  <div className="wrap-list">
                                    <div className="box-listings">
                                      <div className="image-wrap">
                                        <img src="/images/blog/blog-details-list-1.jpg" alt="Blog Post" />
                                      </div>
                                      <div className="content">
                                        <ul className="meta">
                                          <li className="text-2">Oct 17, 2024</li>
                                        </ul>
                                        <div className="title text-1 fw-5 line-clamp-2">
                                          <a href="/blog-details.html" className="line-clamp-2">
                                            How Cognitive Behavioral Therapy Can Transform
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="box-listings">
                                      <div className="image-wrap">
                                        <img src="/images/blog/blog-details-list-2.jpg" alt="Blog Post" />
                                      </div>
                                      <div className="content">
                                        <ul className="meta">
                                          <li className="text-2">Oct 19, 2024</li>
                                        </ul>
                                        <div className="title text-1 fw-5">
                                          <a href="/blog-details.html" className="line-clamp-2">
                                            Effective Strategies for Managing Anxiety
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="box-listings">
                                      <div className="image-wrap">
                                        <img src="/images/blog/blog-details-list-4.jpg" alt="Blog Post" />
                                      </div>
                                      <div className="content">
                                        <ul className="meta">
                                          <li className="text-2">Oct 26, 2024</li>
                                        </ul>
                                        <div className="title text-1 fw-5">
                                          <a href="/blog-details.html" className="line-clamp-2">
                                            Techniques for Everyday Stress Relief
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
                      </div>
                    </li>
                    <li className="has-child relative">
                      <a href="javascript:void(0)">Pages</a>
                      <ul className="sub-menu">
                        <li><a href="/about.html">About</a></li>
                        <li><a href="/our-therapists.html">Therapists</a></li>
                        <li><a href="/book-appointment.html">Appointment</a></li>
                      </ul>
                    </li>
                    <li className="has-child relative current-menu-item">
                      <a href="javascript:void(0)">Shop</a>
                      <ul className="sub-menu">
                        <li><a href="/our-product.html">Our Product</a></li>
                        <li><a href="/shop-cart.html">Shop Cart</a></li>
                        <li><a href="/shop-check-out.html">Check Out</a></li>
                        <li className="current-item"><a href="/product-details.html">Shop Details</a></li>
                      </ul>
                    </li>
                    <li className="has-child relative">
                      <a href="javascript:void(0)">Blogs</a>
                      <ul className="sub-menu">
                        <li><a href="/blog-grid.html">Blog Grid</a></li>
                        <li><a href="/blog-details.html">Blog Details 1</a></li>
                        <li><a href="/blog-details-2.html">Blog Details 2</a></li>
                      </ul>
                    </li>
                    <li><a href="/contact-us.html">Contact</a></li>
                  </ul>
                </nav>
                <div className="header-right">
                  <div className="btn-get">
                    <a className="tf-btn style-default btn-color-secondary pd-40" href="/book-appointment.html">
                      <span>Get Your Consult!</span>
                    </a>
                  </div>
                  <div
                    className="mobile-button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#menu-mobile"
                    aria-controls="menu-mobile"
                  >
                    <i className="icon-menu"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
// src/components/PageTitleHome.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const PageTitleHome = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  useEffect(() => {
    // Initialize Swiper pagination
    const pagination = document.querySelector('.pagination-page-title-home');
    if (pagination) {
      pagination.classList.add('swiper-pagination');
    }
  }, []);

  return (
    <div className="page-title-homepage-3">
      <Swiper
        className="swiper-container slide-effect-fade slider-page-title-home"
        modules={[Pagination]}
        pagination={{
          el: '.pagination-page-title-home',
          clickable: true,
        }}
        loop={true}
      >
        <SwiperSlide className="swiper-slide">
          <img
            className="lazyload"
            data-src="/images/page-title/page-title-home-3.1.jpg"
            src="/images/page-title/page-title-home-3.1.jpg"
            alt=""
          />
          <header id="header-main" className="header header-style-absolute header-default">
            <div className="header-inner">
              <div className="tf-container">
                <div className="row">
                  <div className="col-12">
                    <div className="header-inner-wrap">
                      <div className="header-logo">
                        <Link to="/" className="site-logo">
                          <img id="logo_header" alt="Anageno" src="/images/logo/logo-white.png" />
                        </Link>
                      </div>
                      <div className="header-logo-2">
                        <Link to="/" className="site-logo">
                          <img id="logo_header" alt="Anageno" src="/images/logo/logo.png" />
                        </Link>
                      </div>
                      <nav className="main-menu">
                        <ul className="navigation">
                          <li className={`has-child relative ${openMenu === 'home' ? 'menu-open' : ''}`}>
                            <button
                              onClick={() => toggleMenu('home')}
                              aria-expanded={openMenu === 'home'}
                            >
                              Home
                            </button>
                            <ul className="sub-menu">
                              <li><Link to="/">Homepage 01</Link></li>
                              <li><Link to="/home-02">Homepage 02</Link></li>
                              <li className="current-item"><Link to="/home-03">Homepage 03</Link></li>
                              <li><Link to="/home-04">Homepage 04</Link></li>
                              <li><Link to="/home-slide-text-scroll">Home slide text scroll</Link></li>
                            </ul>
                          </li>
                          <li className="has-child">
                            <Link to="/our-service">Services</Link>
                            <div className="sub-menu service-link">
                              <div className="tf-container">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="wrap-cta">
                                      <div className="left">
                                        <h5 className="wg-title">Counseling & Therapy Services</h5>
                                        <div className="wrap-service">
                                          <div className="service-item-list">
                                            <h6><Link to="/service-details">Family Therapy</Link></h6>
                                            <p className="text-2">
                                              Improve family relationships, resolve conflicts, and build a healthy living environment.
                                            </p>
                                          </div>
                                          <div className="service-item-list">
                                            <h6><Link to="/service-details">Child & Adolescent Therapy</Link></h6>
                                            <p className="text-2">
                                              Specialized support for children and teens, helping them navigate emotional challenges.
                                            </p>
                                          </div>
                                          <div className="service-item-list">
                                            <h6><Link to="/service-details">Group Therapy</Link></h6>
                                            <p className="text-2">
                                              Join others with similar challenges, sharing experiences and support in a guided group setting.
                                            </p>
                                          </div>
                                          <div className="service-item-list">
                                            <h6><Link to="/service-details">Couples Therapy</Link></h6>
                                            <p className="text-2">
                                              Enhance understanding affection between couples, helping to strengthen the relationship.
                                            </p>
                                          </div>
                                          <div className="service-item-list">
                                            <h6><Link to="/service-details">Trauma Counseling</Link></h6>
                                            <p className="text-2">
                                              Focused therapy to help you heal from past trauma and regain control over your life.
                                            </p>
                                          </div>
                                          <div className="service-item-list">
                                            <h6><Link to="/service-details">Individual Counseling</Link></h6>
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
                                              <img src="/images/blog/blog-details-list-1.jpg" alt="Blog Post 1" />
                                            </div>
                                            <div className="content">
                                              <ul className="meta">
                                                <li className="text-2">Oct 17, 2024</li>
                                              </ul>
                                              <div className="title text-1 fw-5 line-clamp-2">
                                                <Link to="/blog-details" className="line-clamp-2">
                                                  How Cognitive Behavioral Therapy Can Transform
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="box-listings">
                                            <div className="image-wrap">
                                              <img src="/images/blog/blog-details-list-2.jpg" alt="Blog Post 2" />
                                            </div>
                                            <div className="content">
                                              <ul className="meta">
                                                <li className="text-2">Oct 19, 2024</li>
                                              </ul>
                                              <div className="title text-1 fw-5">
                                                <Link to="/blog-details" className="line-clamp-2">
                                                  Effective Strategies for Managing Anxiety
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="box-listings">
                                            <div className="image-wrap">
                                              <img src="/images/blog/blog-details-list-4.jpg" alt="Blog Post 3" />
                                            </div>
                                            <div className="content">
                                              <ul className="meta">
                                                <li className="text-2">Oct 26, 2024</li>
                                              </ul>
                                              <div className="title text-1 fw-5">
                                                <Link to="/blog-details" className="line-clamp-2">
                                                  Techniques for Everyday Stress Relief
                                                </Link>
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
                          <li className={`has-child relative ${openMenu === 'pages' ? 'menu-open' : ''}`}>
                            <button
                              onClick={() => toggleMenu('pages')}
                              aria-expanded={openMenu === 'pages'}
                            >
                              Pages
                            </button>
                            <ul className="sub-menu">
                              <li><Link to="/about">About</Link></li>
                              <li><Link to="/our-therapists">Therapists</Link></li>
                              <li><Link to="/book-appointment">Appointment</Link></li>
                            </ul>
                          </li>
                          <li className={`has-child relative ${openMenu === 'shop' ? 'menu-open' : ''}`}>
                            <button
                              onClick={() => toggleMenu('shop')}
                              aria-expanded={openMenu === 'shop'}
                            >
                              Shop
                            </button>
                            <ul className="sub-menu">
                              <li><Link to="/our-product">Our Product</Link></li>
                              <li><Link to="/shop-cart">Shop Cart</Link></li>
                              <li><Link to="/shop-check-out">Check Out</Link></li>
                              <li><Link to="/product-details">Shop Details</Link></li>
                            </ul>
                          </li>
                          <li className={`has-child relative ${openMenu === 'blogs' ? 'menu-open' : ''}`}>
                            <button
                              onClick={() => toggleMenu('blogs')}
                              aria-expanded={openMenu === 'blogs'}
                            >
                              Blogs
                            </button>
                            <ul className="sub-menu">
                              <li><Link to="/blog-grid">Blog Grid</Link></li>
                              <li><Link to="/blog-details">Blog Details 1</Link></li>
                              <li><Link to="/blog-details-2">Blog Details 2</Link></li>
                            </ul>
                          </li>
                          <li><Link to="/contact-us">Contact</Link></li>
                        </ul>
                      </nav>
                      <div className="header-right">
                        <div className="btn-get">
                          <Link to="/book-appointment" className="tf-btn style-default btn-color-secondary pd-40">
                            <span>Get Your Consult!</span>
                          </Link>
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
          <div className="content-inner">
            <div className="tf-container">
              <div className="row">
                <div className="col-12">
                  <div className="wrap-content">
                    <div className="heading fade-item fade-item1">
                      <h2 className="title text-white">Support Your Child’s Emotional Growth</h2>
                      <p className="description text-white fade-item fade-item2">
                        At Anageno, our specialized therapy for children offers a safe and nurturing environment where your child can express their feelings, develop emotional resilience, and navigate life’s challenges with confidence.
                      </p>
                    </div>
                    <div className="fade-item fade-item3">
                      <Link to="/book-appointment" className="tf-btn style-default btn-color-secondary pd-28">
                        <span>Book a Consultation <i className="icon-ArrowRight arr-1"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="lazyload"
            data-src="/images/page-title/page-title-home-3.2.jpg"
            src="/images/page-title/page-title-home-3.2.jpg"
            alt=""
          />
          <header id="header-main" className="header header-style-absolute header-default">
            <div className="header-inner">
              <div className="tf-container">
                <div className="row">
                  <div className="col-12">
                    <div className="header-inner-wrap">
                      <div className="header-logo">
                        <Link to="/" className="site-logo">
                          <img id="logo_header" alt="Anageno" src="/images/logo/logo-white.png" />
                        </Link>
                      </div>
                      <div className="header-logo-2">
                        <Link to="/" className="site-logo">
                          <img id="logo_header" alt="Anageno" src="/images/logo/logo.png" />
                        </Link>
                      </div>
                      <nav className="main-menu">
                        <ul className="navigation">
                          <li className={`has-child relative ${openMenu === 'home' ? 'menu-open' : ''}`}>
                            <button
                              onClick={() => toggleMenu('home')}
                              aria-expanded={openMenu === 'home'}
                            >
                              Home
                            </button>
                            <ul className="sub-menu">
                              <li><Link to="/">Homepage 01</Link></li>
                              <li><Link to="/home-02">Homepage 02</Link></li>
                              <li className="current-item"><Link to="/home-03">Homepage 03</Link></li>
                              <li><Link to="/home-04">Homepage 04</Link></li>
                              <li><Link to="/home-slide-text-scroll">Home slide text scroll</Link></li>
                            </ul>
                          </li>
                          <li className="has-child">
                            <Link to="/our-service">Services</Link>
                            <div className="sub-menu service-link">
                              <div className="tf-container">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="wrap-cta">
                                      <div className="left">
                                        <h5 className="wg-title">Counseling & Therapy Services</h5>
                                        <div className="wrap-service">
                                          <div className="service-item-list">
                                            <h6><Link to="/service-details">Family Therapy</Link></h6>
                                            <p className="text-2">
                                              Improve family relationships, resolve conflicts, and build a healthy living environment.
                                            </p>
                                          </div>
                                          <div className="service-item-list">
                                            <h6><Link to="/service-details">Child & Adolescent Therapy</Link></h6>
                                            <p className="text-2">
                                              Specialized support for children and teens, helping them navigate emotional challenges.
                                            </p>
                                          </div>
                                          <div className="service-item-list">
                                            <h6><Link to="/service-details">Group Therapy</Link></h6>
                                            <p className="text-2">
                                              Join others with similar challenges, sharing experiences and support in a guided group setting.
                                            </p>
                                          </div>
                                          <div className="service-item-list">
                                            <h6><Link to="/service-details">Couples Therapy</Link></h6>
                                            <p className="text-2">
                                              Enhance understanding affection between couples, helping to strengthen the relationship.
                                            </p>
                                          </div>
                                          <div className="service-item-list">
                                            <h6><Link to="/service-details">Trauma Counseling</Link></h6>
                                            <p className="text-2">
                                              Focused therapy to help you heal from past trauma and regain control over your life.
                                            </p>
                                          </div>
                                          <div className="service-item-list">
                                            <h6><Link to="/service-details">Individual Counseling</Link></h6>
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
                                              <img src="/images/blog/blog-details-list-1.jpg" alt="Blog Post 1" />
                                            </div>
                                            <div className="content">
                                              <ul className="meta">
                                                <li className="text-2">Oct 17, 2024</li>
                                              </ul>
                                              <div className="title text-1 fw-5 line-clamp-2">
                                                <Link to="/blog-details" className="line-clamp-2">
                                                  How Cognitive Behavioral Therapy Can Transform
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="box-listings">
                                            <div className="image-wrap">
                                              <img src="/images/blog/blog-details-list-2.jpg" alt="Blog Post 2" />
                                            </div>
                                            <div className="content">
                                              <ul className="meta">
                                                <li className="text-2">Oct 19, 2024</li>
                                              </ul>
                                              <div className="title text-1 fw-5">
                                                <Link to="/blog-details" className="line-clamp-2">
                                                  Effective Strategies for Managing Anxiety
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="box-listings">
                                            <div className="image-wrap">
                                              <img src="/images/blog/blog-details-list-4.jpg" alt="Blog Post 3" />
                                            </div>
                                            <div className="content">
                                              <ul className="meta">
                                                <li className="text-2">Oct 26, 2024</li>
                                              </ul>
                                              <div className="title text-1 fw-5">
                                                <Link to="/blog-details" className="line-clamp-2">
                                                  Techniques for Everyday Stress Relief
                                                </Link>
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
                          <li className={`has-child relative ${openMenu === 'pages' ? 'menu-open' : ''}`}>
                            <button
                              onClick={() => toggleMenu('pages')}
                              aria-expanded={openMenu === 'pages'}
                            >
                              Pages
                            </button>
                            <ul className="sub-menu">
                              <li><Link to="/about">About</Link></li>
                              <li><Link to="/our-therapists">Therapists</Link></li>
                              <li><Link to="/book-appointment">Appointment</Link></li>
                            </ul>
                          </li>
                          <li className={`has-child relative ${openMenu === 'shop' ? 'menu-open' : ''}`}>
                            <button
                              onClick={() => toggleMenu('shop')}
                              aria-expanded={openMenu === 'shop'}
                            >
                              Shop
                            </button>
                            <ul className="sub-menu">
                              <li><Link to="/our-product">Our Product</Link></li>
                              <li><Link to="/shop-cart">Shop Cart</Link></li>
                              <li><Link to="/shop-check-out">Check Out</Link></li>
                              <li><Link to="/product-details">Shop Details</Link></li>
                            </ul>
                          </li>
                          <li className={`has-child relative ${openMenu === 'blogs' ? 'menu-open' : ''}`}>
                            <button
                              onClick={() => toggleMenu('blogs')}
                              aria-expanded={openMenu === 'blogs'}
                            >
                              Blogs
                            </button>
                            <ul className="sub-menu">
                              <li><Link to="/blog-grid">Blog Grid</Link></li>
                              <li><Link to="/blog-details">Blog Details 1</Link></li>
                              <li><Link to="/blog-details-2">Blog Details 2</Link></li>
                            </ul>
                          </li>
                          <li><Link to="/contact-us">Contact</Link></li>
                        </ul>
                      </nav>
                      <div className="header-right">
                        <div className="btn-get">
                          <Link to="/book-appointment" className="tf-btn style-default btn-color-secondary pd-40">
                            <span>Get Your Consult!</span>
                          </Link>
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
          <div className="content-inner">
            <div className="tf-container">
              <div className="row">
                <div className="col-12">
                  <div className="wrap-content mx-auto text-center">
                    <div className="heading fade-item fade-item1">
                      <h2 className="title text-white">Strengthen Your Emotional Core</h2>
                      <p className="description text-white fade-item fade-item2">
                        Our therapy sessions focus on empowering you to regain emotional balance and resilience. Let us guide you through life’s obstacles with care and proven strategies.
                      </p>
                    </div>
                    <div className="fade-item fade-item3">
                      <Link to="/book-appointment" className="tf-btn style-default btn-color-secondary pd-28 mx-auto">
                        <span>Book a Consultation <i className="icon-ArrowRight arr-1"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="lazyload"
            data-src="/images/page-title/page-title-home-3.3.jpg"
            src="/images/page-title/page-title-home-3.3.jpg"
            alt=""
          />
          <header id="header-main" className="header header-style-absolute header-default">
            <div className="header-inner">
              <div className="tf-container">
                <div className="row">
                  <div className="col-12">
                    <div className="header-inner-wrap">
                      <div className="header-logo">
                        <Link to="/" className="site-logo">
                          <img id="logo_header" alt="Anageno" src="/images/logo/logo-white.png" />
                        </Link>
                      </div>
                      <div className="header-logo-2">
                        <Link to="/" className="site-logo">
                          <img id="logo_header" alt="Anageno" src="/images/logo/logo.png" />
                        </Link>
                      </div>
                      <nav className="main-menu">
                        <ul className="navigation">
                          <li className={`has-child relative ${openMenu === 'home' ? 'menu-open' : ''}`}>
                            <button
                              onClick={() => toggleMenu('home')}
                              aria-expanded={openMenu === 'home'}
                            >
                              Home
                            </button>
                            <ul className="sub-menu">
                              <li><Link to="/">Homepage 01</Link></li>
                              <li><Link to="/home-02">Homepage 02</Link></li>
                              <li className="current-item"><Link to="/home-03">Homepage 03</Link></li>
                              <li><Link to="/home-04">Homepage 04</Link></li>
                              <li><Link to="/home-slide-text-scroll">Home slide text scroll</Link></li>
                            </ul>
                          </li>
                          <li className="has-child">
                            <Link to="/our-service">Services</Link>
                            <div className="sub-menu service-link">
                              <div className="tf-container">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="wrap-cta">
                                      <div className="left">
                                        <h5 className="wg-title">Counseling & Therapy Services</h5>
                                        <div className="wrap-service">
                                          <div className="service-item-list">
                                            <h6><Link to="/service-details">Family Therapy</Link></h6>
                                            <p className="text-2">
                                              Improve family relationships, resolve conflicts, and build a healthy living environment.
                                            </p>
                                          </div>
                                          <div className="service-item-list">
                                            <h6><Link to="/service-details">Child & Adolescent Therapy</Link></h6>
                                            <p className="text-2">
                                              Specialized support for children and teens, helping them navigate emotional challenges.
                                            </p>
                                          </div>
                                          <div className="service-item-list">
                                            <h6><Link to="/service-details">Group Therapy</Link></h6>
                                            <p className="text-2">
                                              Join others with similar challenges, sharing experiences and support in a guided group setting.
                                            </p>
                                          </div>
                                          <div className="service-item-list">
                                            <h6><Link to="/service-details">Couples Therapy</Link></h6>
                                            <p className="text-2">
                                              Enhance understanding affection between couples, helping to strengthen the relationship.
                                            </p>
                                          </div>
                                          <div className="service-item-list">
                                            <h6><Link to="/service-details">Trauma Counseling</Link></h6>
                                            <p className="text-2">
                                              Focused therapy to help you heal from past trauma and regain control over your life.
                                            </p>
                                          </div>
                                          <div className="service-item-list">
                                            <h6><Link to="/service-details">Individual Counseling</Link></h6>
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
                                              <img src="/images/blog/blog-details-list-1.jpg" alt="Blog Post 1" />
                                            </div>
                                            <div className="content">
                                              <ul className="meta">
                                                <li className="text-2">Oct 17, 2024</li>
                                              </ul>
                                              <div className="title text-1 fw-5 line-clamp-2">
                                                <Link to="/blog-details" className="line-clamp-2">
                                                  How Cognitive Behavioral Therapy Can Transform
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="box-listings">
                                            <div className="image-wrap">
                                              <img src="/images/blog/blog-details-list-2.jpg" alt="Blog Post 2" />
                                            </div>
                                            <div className="content">
                                              <ul className="meta">
                                                <li className="text-2">Oct 19, 2024</li>
                                              </ul>
                                              <div className="title text-1 fw-5">
                                                <Link to="/blog-details" className="line-clamp-2">
                                                  Effective Strategies for Managing Anxiety
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="box-listings">
                                            <div className="image-wrap">
                                              <img src="/images/blog/blog-details-list-4.jpg" alt="Blog Post 3" />
                                            </div>
                                            <div className="content">
                                              <ul className="meta">
                                                <li className="text-2">Oct 26, 2024</li>
                                              </ul>
                                              <div className="title text-1 fw-5">
                                                <Link to="/blog-details" className="line-clamp-2">
                                                  Techniques for Everyday Stress Relief
                                                </Link>
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
                          <li className={`has-child relative ${openMenu === 'pages' ? 'menu-open' : ''}`}>
                            <button
                              onClick={() => toggleMenu('pages')}
                              aria-expanded={openMenu === 'pages'}
                            >
                              Pages
                            </button>
                            <ul className="sub-menu">
                              <li><Link to="/about">About</Link></li>
                              <li><Link to="/our-therapists">Therapists</Link></li>
                              <li><Link to="/book-appointment">Appointment</Link></li>
                            </ul>
                          </li>
                          <li className={`has-child relative ${openMenu === 'shop' ? 'menu-open' : ''}`}>
                            <button
                              onClick={() => toggleMenu('shop')}
                              aria-expanded={openMenu === 'shop'}
                            >
                              Shop
                            </button>
                            <ul className="sub-menu">
                              <li><Link to="/our-product">Our Product</Link></li>
                              <li><Link to="/shop-cart">Shop Cart</Link></li>
                              <li><Link to="/shop-check-out">Check Out</Link></li>
                              <li><Link to="/product-details">Shop Details</Link></li>
                            </ul>
                          </li>
                          <li className={`has-child relative ${openMenu === 'blogs' ? 'menu-open' : ''}`}>
                            <button
                              onClick={() => toggleMenu('blogs')}
                              aria-expanded={openMenu === 'blogs'}
                            >
                              Blogs
                            </button>
                            <ul className="sub-menu">
                              <li><Link to="/blog-grid">Blog Grid</Link></li>
                              <li><Link to="/blog-details">Blog Details 1</Link></li>
                              <li><Link to="/blog-details-2">Blog Details 2</Link></li>
                            </ul>
                          </li>
                          <li><Link to="/contact-us">Contact</Link></li>
                        </ul>
                      </nav>
                      <div className="header-right">
                        <div className="btn-get">
                          <Link to="/book-appointment" className="tf-btn style-default btn-color-secondary pd-40">
                            <span>Get Your Consult!</span>
                          </Link>
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
          <div className="content-inner">
            <div className="tf-container">
              <div className="row">
                <div className="col-12">
                  <div className="wrap-content ml-auto text-end">
                    <div className="heading">
                      <h2 className="title text-white fade-item fade-item1">Renew Your Strength and Resilience</h2>
                      <p className="description text-white fade-item fade-item2">
                        We focus on renewing your strength and resilience. Our tailored therapy sessions offer the support and strategies you need to overcome challenges & thrive.
                      </p>
                    </div>
                    <div className="fade-item fade-item3">
                      <Link to="/book-appointment" className="tf-btn style-default btn-color-secondary pd-28 ml-auto">
                        <span>Book a Consultation <i className="icon-ArrowRight arr-1"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination pagination-page-title-home"></div>
    </div>
  );
};

export default PageTitleHome;
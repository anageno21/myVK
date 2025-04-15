// src/components/MobileNav.js
import React from 'react';
import { Link } from 'react-router-dom';

const MobileNav = () => {
  return (
    <div className="offcanvas offcanvas-start mobile-nav-wrap" tabIndex="-1" id="menu-mobile" aria-labelledby="menu-mobile">
      <div className="offcanvas-header top-nav-mobile">
        <div className="offcanvas-title">
          <Link to="/">
            <img src="/images/logo/logo@2x.png" alt="Anageno" />
          </Link>
        </div>
        <div data-bs-dismiss="offcanvas" aria-label="Close">
          <i className="icon-close"></i>
        </div>
      </div>
      <div className="offcanvas-body inner-mobile-nav">
        <div className="mb-body">
          <ul id="menu-mobile-menu">
            <li className="menu-item menu-item-has-children-mobile current-menu-item">
              <Link
                to="#dropdown-menu-one"
                className="item-menu-mobile collapsed"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-one"
              >
                Home
              </Link>
              <div id="dropdown-menu-one" className="collapse" data-bs-parent="#menu-mobile-menu">
                <ul className="sub-mobile">
                  <li className="menu-item"><Link to="/">Homepage 01</Link></li>
                  <li className="menu-item"><Link to="/home-02">Homepage 02</Link></li>
                  <li className="menu-item current-item"><Link to="/home-03">Homepage 03</Link></li>
                  <li className="menu-item"><Link to="/home-04">Homepage 04</Link></li>
                  <li className="menu-item"><Link to="/home-slide-text-scroll">Home slide text scroll</Link></li>
                </ul>
              </div>
            </li>
            <li className="menu-item">
              <Link to="/about" className="item-menu-mobile">About</Link>
            </li>
            <li className="menu-item menu-item-has-children-mobile">
              <Link
                to="#dropdown-menu-two"
                className="item-menu-mobile collapsed"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-two"
              >
                Services
              </Link>
              <div id="dropdown-menu-two" className="collapse" data-bs-parent="#menu-mobile-menu">
                <ul className="sub-mobile">
                  <li className="menu-item"><Link to="/our-service">Our Service</Link></li>
                  <li className="menu-item"><Link to="/service-details">Service Details</Link></li>
                </ul>
              </div>
            </li>
            <li className="menu-item">
              <Link to="/our-therapists" className="item-menu-mobile">Therapists</Link>
            </li>
            <li className="menu-item menu-item-has-children-mobile">
              <Link
                to="#dropdown-menu-three"
                className="item-menu-mobile collapsed"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-three"
              >
                Pages
              </Link>
              <div id="dropdown-menu-three" className="collapse" data-bs-parent="#menu-mobile-menu">
                <ul className="sub-mobile">
                  <li className="menu-item menu-item-has-children-mobile-2">
                    <Link
                      to="#sub-product-one"
                      className="item-menu-mobile collapsed"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="sub-product-one"
                    >
                      Shop
                    </Link>
                    <div id="sub-product-one" className="collapse">
                      <ul className="sub-mobile">
                        <li className="menu-item"><Link to="/our-product">Shop Product</Link></li>
                        <li className="menu-item"><Link to="/shop-cart">Shop Cart</Link></li>
                        <li className="menu-item"><Link to="/shop-check-out">Check Out</Link></li>
                        <li className="menu-item"><Link to="/product-details">Shop Details</Link></li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item"><Link to="/book-appointment">Appointment</Link></li>
                </ul>
              </div>
            </li>
            <li className="menu-item menu-item-has-children-mobile">
              <Link
                to="#dropdown-menu-four"
                className="item-menu-mobile collapsed"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-four"
              >
                Blogs
              </Link>
              <div id="dropdown-menu-four" className="collapse" data-bs-parent="#menu-mobile-menu">
                <ul className="sub-mobile">
                  <li className="menu-item"><Link to="/blog-grid">Blog Grid</Link></li>
                  <li className="menu-item"><Link to="/blog-details">Blog Details 1</Link></li>
                  <li className="menu-item"><Link to="/blog-details-2">Blog Details 2</Link></li>
                </ul>
              </div>
            </li>
            <li className="menu-item">
              <Link to="/contact-us" className="item-menu-mobile">Contact</Link>
            </li>
          </ul>
          <div className="support">
            <button className="text-need">Need help?</button>
            <ul className="mb-info">
              <li>Call Us Now: <span className="number">1-555-678-8888</span></li>
              <li>Support 24/7: <a href="mailto:support@anageno.com">support@anageno.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
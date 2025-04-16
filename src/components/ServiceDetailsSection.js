import React from 'react';

function ServiceDetailsSection() {
  return (
    <section className="section-service-details page-service-details">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="wrap-service-details">
              <div className="service-details-content">
                <div className="image-wrap">
                  <img src="/images/service/service-details-1.jpg" alt="Family Therapy" />
                </div>
                <h1 className="title">Family Therapy</h1>
                <div className="content">
                  <p>
                    Family therapy at Anageno focuses on improving communication, resolving conflicts, and strengthening relationships within your family. Our expert therapists work with you to address specific challenges and foster a healthier, more supportive home environment.
                  </p>
                  <h3>Why Choose Family Therapy?</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <ul className="list">
                    <li>Enhances family communication</li>
                    <li>Resolves ongoing conflicts</li>
                    <li>Builds stronger emotional bonds</li>
                    <li>Supports family members through transitions</li>
                  </ul>
                  <div className="image-wrap">
                    <img src="/images/service/service-details-2.jpg" alt="Family Therapy Image" />
                  </div>
                  <h3>How It Works</h3>
                  <p>
                    Our family therapy sessions are tailored to your unique needs. During the process, our therapists facilitate open discussions, teach conflict resolution skills, and provide tools to improve family dynamics. Whether you’re dealing with parenting issues, sibling rivalry, or major life changes, we’re here to help.
                  </p>
                  <blockquote>
                    <p>
                      “Family therapy helped us reconnect and understand each other better. It’s been a game-changer for us.” – Client Testimonial
                    </p>
                  </blockquote>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="service-details-nav">
                  <div className="nav-item prev">
                    <a href="#" className="btn-nav">
                      <i className="icon-ArrowLeft"></i>
                      <span>Previous Service</span>
                    </a>
                    <h6><a href="#">Individual Counseling</a></h6>
                  </div>
                  <div className="nav-item next">
                    <a href="#" className="btn-nav">
                      <span>Next Service</span>
                      <i className="icon-ArrowRight"></i>
                    </a>
                    <h6><a href="#">Couples Therapy</a></h6>
                  </div>
                </div>
              </div>
              <div className="service-details-sidebar">
                <div className="widget widget-services">
                  <h6>All Services</h6>
                  <ul>
                    <li><a href="/service-details.html">Individual Counseling</a></li>
                    <li className="active"><a href="/service-details.html">Family Therapy</a></li>
                    <li><a href="/service-details.html">Couples Therapy</a></li>
                    <li><a href="/service-details.html">Group Therapy</a></li>
                    <li><a href="/service-details.html">Child & Adolescent Therapy</a></li>
                    <li><a href="/service-details.html">Trauma Counseling</a></li>
                  </ul>
                </div>
                <div className="widget widget-contact">
                  <h6>Contact Us</h6>
                  <ul className="list-info">
                    <li>
                      <i className="icon-Envelope"></i>
                      <a href="mailto:support@anageno.com">support@anageno.com</a>
                    </li>
                    <li>
                      <i className="icon-PhoneCall"></i>1-333-345-6868
                    </li>
                    <li>
                      <i className="icon-MapPin"></i>101 E 129th St, East Chicago, IN 46312, US
                    </li>
                  </ul>
                  <a href="/contact-us.html" className="tf-btn-link">
                    <span data-text="Get in Touch">Get in Touch</span>
                    <i className="icon-ArrowRight"></i>
                  </a>
                </div>
                <div className="widget widget-download">
                  <h6>Download Brochure</h6>
                  <a href="#" className="tf-btn style-default btn-color-secondary pd-40 boder-8">
                    <span>Download PDF</span>
                    <i className="icon-Download"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetailsSection;
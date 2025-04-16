import React from 'react';

function ContactSection() {
  return (
    <section className="section-contact page-contact">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="wrap-content">
              <div className="box-contact">
                <div className="heading-section text-start">
                  <p className="text-2 sub">Why Choose Us</p>
                  <h3>Free Consultation - Begin Your Healing Journey</h3>
                  <p className="description text-1 lh-30">
                    Connect with a dedicated specialist today and take the first step towards a healthier, more fulfilling life.
                  </p>
                </div>
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
                <a href="#" className="tf-btn-link z-5">
                  <span data-text="Open map">Open map</span>
                  <i className="icon-ArrowRight"></i>
                </a>
              </div>
              <form
                className="form-consultation"
                method="post"
                id="contactform"
                action="./contact/contact-process.php"
              >
                <h4 className="mb-20 text-center">Get A Free Consultation</h4>
                <fieldset className="name">
                  <input
                    type="text"
                    name="name"
                    className="tf-input style-1"
                    placeholder="Your Name*"
                    tabIndex="2"
                    aria-required="true"
                    required
                  />
                </fieldset>
                <fieldset className="phone">
                  <input
                    type="number"
                    name="phone"
                    className="tf-input style-1"
                    placeholder="Phone Number"
                    tabIndex="2"
                    aria-required="true"
                    required
                  />
                </fieldset>
                <div className="select-custom mb-20">
                  <select id="service" data-default="" name="select">
                    <option value="---">Choose Services</option>
                    <option value="Individual Counseling">Individual Counseling</option>
                    <option value="Family Therapy">Family Therapy</option>
                    <option value="Couples Therapy">Couples Therapy</option>
                    <option value="Group Therapy">Group Therapy</option>
                    <option value="Child & Adolescent Therapy">Child & Adolescent Therapy</option>
                    <option value="Trauma Counseling">Trauma Counseling</option>
                  </select>
                </div>
                <fieldset className="message">
                  <textarea
                    id="message"
                    className="tf-input"
                    name="message"
                    rows="4"
                    placeholder="Your message"
                    tabIndex="4"
                    aria-required="true"
                    required
                  ></textarea>
                </fieldset>
                <button className="tf-btn style-default btn-color-secondary pd-40 boder-8 send-wrap" type="submit">
                  <span>Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
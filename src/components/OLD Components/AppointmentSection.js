import React from 'react';

function AppointmentSection() {
  return (
    <section className="section-appointment page-appointment">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <h2 className="wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                Schedule Your Appointment
              </h2>
              <p className="description text-1 lh-30 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                Take the first step towards healing by booking a session with one of our expert therapists at Anageno.
              </p>
            </div>
            <form className="form-appointment" method="post" id="appointmentform" action="./contact/appointment-process.php">
              <div className="form-group">
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
                <fieldset className="email">
                  <input
                    type="email"
                    name="email"
                    className="tf-input style-1"
                    placeholder="Your Email*"
                    tabIndex="2"
                    aria-required="true"
                    required
                  />
                </fieldset>
              </div>
              <div className="form-group">
                <fieldset className="phone">
                  <input
                    type="number"
                    name="phone"
                    className="tf-input style-1"
                    placeholder="Phone Number*"
                    tabIndex="2"
                    aria-required="true"
                    required
                  />
                </fieldset>
                <div className="select-custom">
                  <select id="service" name="service" data-default="">
                    <option value="---">Choose Services</option>
                    <option value="Individual Counseling">Individual Counseling</option>
                    <option value="Family Therapy">Family Therapy</option>
                    <option value="Couples Therapy">Couples Therapy</option>
                    <option value="Group Therapy">Group Therapy</option>
                    <option value="Child & Adolescent Therapy">Child & Adolescent Therapy</option>
                    <option value="Trauma Counseling">Trauma Counseling</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="select-custom">
                  <select id="therapist" name="therapist" data-default="">
                    <option value="---">Choose Therapists</option>
                    <option value="Annette Black">Annette Black</option>
                    <option value="Jane Cooper">Jane Cooper</option>
                    <option value="Brooklyn Simmons">Brooklyn Simmons</option>
                    <option value="Leslie Alexander">Leslie Alexander</option>
                    <option value="Robert Fox">Robert Fox</option>
                    <option value="Jenny Wilson">Jenny Wilson</option>
                  </select>
                </div>
                <fieldset className="date">
                  <input
                    type="date"
                    name="date"
                    className="tf-input style-1"
                    placeholder="Preferred Date*"
                    tabIndex="2"
                    aria-required="true"
                    required
                  />
                </fieldset>
              </div>
              <fieldset className="message">
                <textarea
                  id="message"
                  className="tf-input"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  tabIndex="4"
                  aria-required="true"
                  required
                ></textarea>
              </fieldset>
              <button className="tf-btn style-default btn-color-secondary pd-40 boder-8 send-wrap" type="submit">
                <span>Book Now</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppointmentSection;
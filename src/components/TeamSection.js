import React from 'react';

function TeamSection() {
  return (
    <section className="section-team tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <p className="text-2 sub wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                Our Teams
              </p>
              <h3 className="wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                Meet Our Expert Therapists
              </h3>
              <p className="description text-1 lh-30 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                A team of licensed therapists focused on your mental health and growth.
              </p>
            </div>
            <div className="grid-layout-4 gap-30">
              <div className="team-item hover-img wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                <div className="image-wrap">
                  <a href="/therapists-details.html">
                    <img
                      className="lazyload"
                      data-src="/images/section/team-item-1.jpg"
                      src="/images/section/team-item-1.jpg"
                      alt="Dr. Emily Stevens"
                    />
                  </a>
                </div>
                <div className="info">
                  <h5 className="name"><a href="/therapists-details.html">Dr. Emily Stevens</a></h5>
                  <p className="text-2">Lead Therapist</p>
                </div>
                <ul className="tf-social style-1">
                  <li><a href="#"><i className="icon-FacebookLogo"></i></a></li>
                  <li><a href="#"><i className="icon-x"></i></a></li>
                  <li><a href="#"><i className="icon-LinkedinLogo"></i></a></li>
                  <li><a href="#"><i className="icon-instagram"></i></a></li>
                </ul>
              </div>
              <div className="team-item hover-img wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.1s">
                <div className="image-wrap">
                  <a href="/therapists-details.html">
                    <img
                      className="lazyload"
                      data-src="/images/section/team-item-2.jpg"
                      src="/images/section/team-item-2.jpg"
                      alt="Michael Carter"
                    />
                  </a>
                </div>
                <div className="info">
                  <h5 className="name"><a href="/therapists-details.html">Michael Carter</a></h5>
                  <p className="text-2">Family Therapist</p>
                </div>
                <ul className="tf-social style-1">
                  <li><a href="#"><i className="icon-FacebookLogo"></i></a></li>
                  <li><a href="#"><i className="icon-x"></i></a></li>
                  <li><a href="#"><i className="icon-LinkedinLogo"></i></a></li>
                  <li><a href="#"><i className="icon-instagram"></i></a></li>
                </ul>
              </div>
              <div className="team-item hover-img wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.2s">
                <div className="image-wrap">
                  <a href="/therapists-details.html">
                    <img
                      className="lazyload"
                      data-src="/images/section/team-item-3.jpg"
                      src="/images/section/team-item-3.jpg"
                      alt="Sarah Martinez"
                    />
                  </a>
                </div>
                <div className="info">
                  <h5 className="name"><a href="/therapists-details.html">Sarah Martinez</a></h5>
                  <p className="text-2">Child & Adolescent Therapist</p>
                </div>
                <ul className="tf-social style-1">
                  <li><a href="#"><i className="icon-FacebookLogo"></i></a></li>
                  <li><a href="#"><i className="icon-x"></i></a></li>
                  <li><a href="#"><i className="icon-LinkedinLogo"></i></a></li>
                  <li><a href="#"><i className="icon-instagram"></i></a></li>
                </ul>
              </div>
              <div className="team-item hover-img wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.3s">
                <div className="image-wrap">
                  <a href="/therapists-details.html">
                    <img
                      className="lazyload"
                      data-src="/images/section/team-item-4.jpg"
                      src="/images/section/team-item-4.jpg"
                      alt="Dr. James Mcavoy"
                    />
                  </a>
                </div>
                <div className="info">
                  <h5 className="name"><a href="/therapists-details.html">Dr. James Mcavoy</a></h5>
                  <p className="text-2">Clinical Psychologist</p>
                </div>
                <ul className="tf-social style-1">
                  <li><a href="#"><i className="icon-FacebookLogo"></i></a></li>
                  <li><a href="#"><i className="icon-x"></i></a></li>
                  <li><a href="#"><i className="icon-LinkedinLogo"></i></a></li>
                  <li><a href="#"><i className="icon-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
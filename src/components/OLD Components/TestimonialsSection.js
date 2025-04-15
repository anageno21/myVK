// src/components/TestimonialsSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TestimonialsSection = () => {
  return (
    <section className="section-testimonials bg-1 home-page-3 tf-spacing-1">
      <div className="heading-section">
        <p className="text-2 sub wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
          Client Testimonials
        </p>
        <h3 className="wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
          What Our Clients Are Saying
        </h3>
        <p className="description text-1 lh-30 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
          Hear firsthand accounts of healing and positive change.
        </p>
      </div>
      <Swiper className="swiper-container slider-testimonial-center" loop={true}>
        <SwiperSlide className="swiper-slide">
          <div className="wg-testimonial style-text-center">
            <div className="rating">
              <i className="icon-favorite_major"></i>
              <i className="icon-favorite_major"></i>
              <i className="icon-favorite_major"></i>
              <i className="icon-favorite_major"></i>
              <i className="icon-favorite_major"></i>
            </div>
            <div className="content">
              <p className="text text-1 lh-30 fw-4 mb-16">
                "I am incredibly grateful for the compassionate and professional care I received. The support from the team was instrumental in my personal growth and healing journey."
              </p>
              <div className="bot">
                <div className="info">
                  <h6 className="title">
                    <Link to="/therapists-details">Sarah M.</Link>
                  </h6>
                  <p>New York, NY</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="wg-testimonial style-text-center">
            <div className="rating">
              <i className="icon-favorite_major"></i>
              <i className="icon-favorite_major"></i>
              <i className="icon-favorite_major"></i>
              <i className="icon-favorite_major"></i>
              <i className="icon-favorite_major"></i>
            </div>
            <div className="content">
              <p className="text text-1 lh-30 fw-4 mb-16">
                "The expertise and encouragement from Anageno made a significant difference in my life. The tailored approach and dedicated therapists helped me overcome my challenges and achieve my goals."
              </p>
              <div className="bot">
                <div className="info">
                  <h6 className="title">
                    <Link to="/therapists-details">John R.</Link>
                  </h6>
                  <p>Los Angeles, CA</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="wg-testimonial style-text-center">
            <div className="rating">
              <i className="icon-favorite_major"></i>
              <i className="icon-favorite_major"></i>
              <i className="icon-favorite_major"></i>
              <i className="icon-favorite_major"></i>
              <i className="icon-favorite_major"></i>
            </div>
            <div className="content">
              <p className="text text-1 lh-30 fw-4 mb-16">
                "Thanks to Anageno’s exceptional team, I have gained valuable insights and tools to manage my stress effectively. The personalized care and understanding truly made a positive impact."
              </p>
              <div className="bot">
                <div className="info">
                  <h6 className="title">
                    <Link to="/therapists-details">Emily T.</Link>
                  </h6>
                  <p>Chicago, IL</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="wg-testimonial style-text-center">
            <div className="rating">
              <i className="icon-favorite_major"></i>
              <i className="icon-favorite_major"></i>
              <i className="icon-favorite_major"></i>
              <i className="icon-favorite_major"></i>
              <i className="icon-favorite_major"></i>
            </div>
            <div className="content">
              <p className="text text-1 lh-30 fw-4 mb-16">
                "I can't thank Anageno enough for their unwavering support and guidance. The personalized therapy sessions and insightful feedback have been crucial in my journey towards a more balanced life."
              </p>
              <div className="bot">
                <div className="info">
                  <h6 className="title">
                    <Link to="/therapists-details">Michael L.</Link>
                  </h6>
                  <p>Miami, FL</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;
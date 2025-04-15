import React from 'react';
import Slider from './Slider';

const TestimonialsCenterSection = () => {
  const slides = [
    {
      content: (
        <div className="testimonial-item">
          <p>"This spa is amazing! I felt so relaxed."</p>
          <h4>John Doe</h4>
        </div>
      ),
    },
    {
      content: (
        <div className="testimonial-item">
          <p>"Best massage I've ever had!"</p>
          <h4>Jane Smith</h4>
        </div>
      ),
    },
    {
      content: (
        <div className="testimonial-item">
          <p>"Highly recommend their services!"</p>
          <h4>Emily Johnson</h4>
        </div>
      ),
    },
    {
      content: (
        <div className="testimonial-item">
          <p>"A truly rejuvenating experience."</p>
          <h4>Michael Brown</h4>
        </div>
      ),
    },
  ];

  const options = {
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    observer: true,
    observeParents: true,
    breakpoints: {
      0: { slidesPerView: 1.1 },
      767: { slidesPerView: 2 },
      991: { slidesPerView: 2.1 },
      1200: { slidesPerView: 3.5 },
    },
  };

  return (
    <section className="testimonials-center-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="slider-testimonial-center">
              <Slider slides={slides} options={options} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCenterSection;
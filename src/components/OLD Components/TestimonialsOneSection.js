import React from 'react';
import Slider from './Slider';

const TestimonialsOneSection = () => {
  const slides = [
    {
      content: (
        <div className="testimonial-item">
          <p>"Amazing experience! I will definitely come back."</p>
          <h4>Alice Green</h4>
        </div>
      ),
    },
    {
      content: (
        <div className="testimonial-item">
          <p>"The staff is so professional and friendly."</p>
          <h4>Robert White</h4>
        </div>
      ),
    },
  ];

  const options = {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.pagination-testimonial-1',
      clickable: true,
    },
  };

  return (
    <section className="testimonials-one-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title">Client Testimonials</h2>
            <div className="slider-testimonial-1">
              <Slider slides={slides} options={options} />
              <div className="pagination-testimonial-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsOneSection;
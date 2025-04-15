import React from 'react';
import Slider from './Slider';

const LayoutThreeSection = () => {
  const slides = [
    {
      content: (
        <div className="layout-item">
          <img src="/images/layout/layout3-1.jpg" alt="Item 1" />
          <h4>Service 1</h4>
          <p>Description of service 1.</p>
        </div>
      ),
    },
    {
      content: (
        <div className="layout-item">
          <img src="/images/layout/layout3-2.jpg" alt="Item 2" />
          <h4>Service 2</h4>
          <p>Description of service 2.</p>
        </div>
      ),
    },
    {
      content: (
        <div className="layout-item">
          <img src="/images/layout/layout3-3.jpg" alt="Item 3" />
          <h4>Service 3</h4>
          <p>Description of service 3.</p>
        </div>
      ),
    },
  ];

  const options = {
    spaceBetween: 30,
    slidesPerView: 3,
    pagination: {
      el: '.pagination-layout',
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      550: { slidesPerView: 2 },
      767: { slidesPerView: 2.4 },
      991: { slidesPerView: 3 },
    },
  };

  return (
    <section className="layout-three-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title">Our Services</h2>
            <div className="slider-layout-3">
              <Slider slides={slides} options={options} />
              <div className="pagination-layout"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayoutThreeSection;
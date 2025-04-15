import React from 'react';
import Slider from './Slider';

const LayoutFourSection = () => {
  const slides = [
    {
      content: (
        <div className="layout-item">
          <img src="/images/layout/layout4-1.jpg" alt="Item 1" />
          <h4>Product 1</h4>
          <p>Description of product 1.</p>
        </div>
      ),
    },
    {
      content: (
        <div className="layout-item">
          <img src="/images/layout/layout4-2.jpg" alt="Item 2" />
          <h4>Product 2</h4>
          <p>Description of product 2.</p>
        </div>
      ),
    },
    {
      content: (
        <div className="layout-item">
          <img src="/images/layout/layout4-3.jpg" alt="Item 3" />
          <h4>Product 3</h4>
          <p>Description of product 3.</p>
        </div>
      ),
    },
    {
      content: (
        <div className="layout-item">
          <img src="/images/layout/layout4-4.jpg" alt="Item 4" />
          <h4>Product 4</h4>
          <p>Description of product 4.</p>
        </div>
      ),
    },
  ];

  const options = {
    spaceBetween: 30,
    slidesPerView: 4,
    pagination: {
      el: '.pagination-layout',
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      550: { slidesPerView: 2 },
      767: { slidesPerView: 3 },
      991: { slidesPerView: 4 },
    },
  };

  return (
    <section className="layout-four-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title">Our Products</h2>
            <div className="slider-layout-4">
              <Slider slides={slides} options={options} />
              <div className="pagination-layout"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayoutFourSection;
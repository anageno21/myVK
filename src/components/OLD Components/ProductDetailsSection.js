import React from 'react';
import PhotoSwipeGallery from './Gallery';

const ProductDetailsSection = () => {
  const galleryItems = [
    {
      src: '/images/products/product1.jpg',
      thumbnail: '/images/products/product1-thumb.jpg',
      width: '1200',
      height: '800',
      alt: 'Product 1',
    },
    {
      src: '/images/products/product2.jpg',
      thumbnail: '/images/products/product2-thumb.jpg',
      width: '1200',
      height: '800',
      alt: 'Product 2',
    },
  ];

  return (
    <section className="product-details-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div id="gallery-started" className="product-gallery">
              <PhotoSwipeGallery items={galleryItems} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-details">
              <h2>Product Name</h2>
              <p>Product description goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSection;
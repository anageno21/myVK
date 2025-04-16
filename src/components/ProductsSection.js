import React from 'react';

function ProductsSection() {
  return (
    <section className="section-product page-product">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <h2 className="wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                Explore Our Wellness Products
              </h2>
              <p className="description text-1 lh-30 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                Discover a range of products designed to support your mental health and well-being, curated by Anageno.
              </p>
            </div>
            <div className="wrap-product-grid">
              <div className="product-item wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                <div className="image-wrap">
                  <img src="/images/product/product-1.jpg" alt="Mindfulness Journal" />
                  <a href="/shop-cart.html" className="btn-add-cart">
                    <i className="icon-Cart"></i>
                  </a>
                </div>
                <div className="content">
                  <h5><a href="/product-details.html">Mindfulness Journal</a></h5>
                  <div className="price">$19.99</div>
                  <div className="rating">
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                  </div>
                </div>
              </div>
              <div className="product-item wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                <div className="image-wrap">
                  <img src="/images/product/product-2.jpg" alt="Stress Relief Kit" />
                  <a href="/shop-cart.html" className="btn-add-cart">
                    <i className="icon-Cart"></i>
                  </a>
                </div>
                <div className="content">
                  <h5><a href="/product-details.html">Stress Relief Kit</a></h5>
                  <div className="price">$29.99</div>
                  <div className="rating">
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_minor"></i>
                  </div>
                </div>
              </div>
              <div className="product-item wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                <div className="image-wrap">
                  <img src="/images/product/product-3.jpg" alt="Aromatherapy Set" />
                  <a href="/shop-cart.html" className="btn-add-cart">
                    <i className="icon-Cart"></i>
                  </a>
                </div>
                <div className="content">
                  <h5><a href="/product-details.html">Aromatherapy Set</a></h5>
                  <div className="price">$34.99</div>
                  <div className="rating">
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                  </div>
                </div>
              </div>
              <div className="product-item wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                <div className="image-wrap">
                  <img src="/images/product/product-4.jpg" alt="Self-Care Planner" />
                  <a href="/shop-cart.html" className="btn-add-cart">
                    <i className="icon-Cart"></i>
                  </a>
                </div>
                <div className="content">
                  <h5><a href="/product-details.html">Self-Care Planner</a></h5>
                  <div className="price">$24.99</div>
                  <div className="rating">
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_minor"></i>
                  </div>
                </div>
              </div>
              <div className="product-item wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                <div className="image-wrap">
                  <img src="/images/product/product-5.jpg" alt="Meditation Cushion" />
                  <a href="/shop-cart.html" className="btn-add-cart">
                    <i className="icon-Cart"></i>
                  </a>
                </div>
                <div className="content">
                  <h5><a href="/product-details.html">Meditation Cushion</a></h5>
                  <div className="price">$39.99</div>
                  <div className="rating">
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                  </div>
                </div>
              </div>
              <div className="product-item wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                <div className="image-wrap">
                  <img src="/images/product/product-6.jpg" alt="Relaxation Tea Blend" />
                  <a href="/shop-cart.html" className="btn-add-cart">
                    <i className="icon-Cart"></i>
                  </a>
                </div>
                <div className="content">
                  <h5><a href="/product-details.html">Relaxation Tea Blend</a></h5>
                  <div className="price">$14.99</div>
                  <div className="rating">
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_minor"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination-wrap">
              <ul className="pagination">
                <li className="page-item active">
                  <a href="#" className="page-link">1</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">2</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">3</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    <i className="icon-ArrowRight"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
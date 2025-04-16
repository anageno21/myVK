import React from 'react';

function ProductDetailsSection() {
  return (
    <section className="section-product-details page-product-details">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="wrap-product-details">
              <div className="product-details-content">
                <div className="product-images">
                  <div className="main-image">
                    <img src="/images/product/product-details-1.jpg" alt="Mindfulness Journal" />
                  </div>
                  <div className="thumbnail-images">
                    <img src="/images/product/product-details-1.jpg" alt="Thumbnail 1" />
                    <img src="/images/product/product-details-2.jpg" alt="Thumbnail 2" />
                    <img src="/images/product/product-details-3.jpg" alt="Thumbnail 3" />
                  </div>
                </div>
                <div className="product-info">
                  <h1 className="title">Mindfulness Journal</h1>
                  <div className="rating">
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <i className="icon-favorite_major"></i>
                    <span className="text-2">(5 Reviews)</span>
                  </div>
                  <div className="price">$19.99</div>
                  <p className="description">
                    The Mindfulness Journal by Anageno is designed to help you cultivate a daily practice of mindfulness and self-reflection. With guided prompts and ample space for your thoughts, it’s the perfect tool to support your mental well-being.
                  </p>
                  <div className="quantity-cart">
                    <div className="quantity-wrap">
                      <button className="btn-quantity minus">-</button>
                      <input type="number" value="1" min="1" />
                      <button className="btn-quantity plus">+</button>
                    </div>
                    <a href="/shop-cart.html" className="tf-btn style-default btn-color-secondary pd-40 boder-8">
                      <span>Add to Cart</span>
                      <i className="icon-Cart"></i>
                    </a>
                  </div>
                  <div className="product-meta">
                    <p><strong>SKU:</strong> MJ-001</p>
                    <p><strong>Category:</strong> Self-Care</p>
                    <p><strong>Tags:</strong> Mindfulness, Journal, Wellness</p>
                  </div>
                </div>
              </div>
              <div className="product-details-tabs">
                <ul className="tabs-nav">
                  <li className="active"><a href="#description">Description</a></li>
                  <li><a href="#reviews">Reviews (5)</a></li>
                </ul>
                <div className="tabs-content">
                  <div id="description" className="tab-pane active">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <div id="reviews" className="tab-pane">
                    <div className="reviews-list">
                      <div className="review-item">
                        <div className="avatar">
                          <img src="/images/avatar/avatar-1.jpg" alt="Reviewer" />
                        </div>
                        <div className="content">
                          <div className="rating">
                            <i className="icon-favorite_major"></i>
                            <i className="icon-favorite_major"></i>
                            <i className="icon-favorite_major"></i>
                            <i className="icon-favorite_major"></i>
                            <i className="icon-favorite_major"></i>
                          </div>
                          <h6>Sarah M.</h6>
                          <span className="text-2">Oct 18, 2024</span>
                          <p>
                            This journal has been a fantastic addition to my daily routine. The prompts really help me focus and stay present.
                          </p>
                        </div>
                      </div>
                      <div className="review-item">
                        <div className="avatar">
                          <img src="/images/avatar/avatar-2.jpg" alt="Reviewer" />
                        </div>
                        <div className="content">
                          <div className="rating">
                            <i className="icon-favorite_major"></i>
                            <i className="icon-favorite_major"></i>
                            <i className="icon-favorite_major"></i>
                            <i className="icon-favorite_major"></i>
                            <i className="icon-favorite_minor"></i>
                          </div>
                          <h6>John R.</h6>
                          <span className="text-2">Oct 20, 2024</span>
                          <p>
                            Great quality and design. It’s been helpful, though I wish it had a few more pages.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="review-form">
                      <h4>Add a Review</h4>
                      <form className="form-review" method="post" id="reviewform" action="./contact/review-process.php">
                        <div className="rating-input">
                          <span>Your Rating:</span>
                          <div className="stars">
                            <input type="radio" id="star5" name="rating" value="5" />
                            <label htmlFor="star5"></label>
                            <input type="radio" id="star4" name="rating" value="4" />
                            <label htmlFor="star4"></label>
                            <input type="radio" id="star3" name="rating" value="3" />
                            <label htmlFor="star3"></label>
                            <input type="radio" id="star2" name="rating" value="2" />
                            <label htmlFor="star2"></label>
                            <input type="radio" id="star1" name="rating" value="1" />
                            <label htmlFor="star1"></label>
                          </div>
                        </div>
                        <fieldset className="name">
                          <input
                            type="text"
                            name="name"
                            className="tf-input style-1"
                            placeholder="Your Name*"
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
                            aria-required="true"
                            required
                          />
                        </fieldset>
                        <fieldset className="review">
                          <textarea
                            id="review"
                            className="tf-input"
                            name="review"
                            rows="5"
                            placeholder="Your Review*"
                            aria-required="true"
                            required
                          ></textarea>
                        </fieldset>
                        <button className="tf-btn style-default btn-color-secondary pd-40 boder-8" type="submit">
                          <span>Submit Review</span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsSection;
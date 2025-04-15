import React from 'react';

function ShopCartSection() {
  return (
    <section className="section-cart page-cart">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="wrap-cart">
              <div className="cart-table">
                <table className="table-cart">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product-item">
                        <div className="image-wrap">
                          <img src="/images/product/product-1.jpg" alt="Mindfulness Journal" />
                        </div>
                        <div className="content">
                          <h6><a href="/product-details.html">Mindfulness Journal</a></h6>
                        </div>
                      </td>
                      <td className="price">$19.99</td>
                      <td className="quantity">
                        <div className="quantity-wrap">
                          <button className="btn-quantity minus">-</button>
                          <input type="number" value="1" min="1" />
                          <button className="btn-quantity plus">+</button>
                        </div>
                      </td>
                      <td className="subtotal">$19.99</td>
                      <td className="remove">
                        <a href="#" className="btn-remove">
                          <i className="icon-Close"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="product-item">
                        <div className="image-wrap">
                          <img src="/images/product/product-2.jpg" alt="Stress Relief Kit" />
                        </div>
                        <div className="content">
                          <h6><a href="/product-details.html">Stress Relief Kit</a></h6>
                        </div>
                      </td>
                      <td className="price">$29.99</td>
                      <td className="quantity">
                        <div className="quantity-wrap">
                          <button className="btn-quantity minus">-</button>
                          <input type="number" value="2" min="1" />
                          <button className="btn-quantity plus">+</button>
                        </div>
                      </td>
                      <td className="subtotal">$59.98</td>
                      <td className="remove">
                        <a href="#" className="btn-remove">
                          <i className="icon-Close"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="cart-totals">
                <h4>Cart Totals</h4>
                <div className="totals-inner">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span className="price">$79.97</span>
                  </div>
                  <div className="shipping">
                    <span>Shipping</span>
                    <span className="price">$10.00</span>
                  </div>
                  <div className="total">
                    <span>Total</span>
                    <span className="price">$89.97</span>
                  </div>
                </div>
                <a href="/shop-check-out.html" className="tf-btn style-default btn-color-secondary pd-40 boder-8">
                  <span>Proceed to Checkout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopCartSection;
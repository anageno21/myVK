import React from 'react';

function CheckoutSection() {
  return (
    <section className="section-checkout page-checkout">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="wrap-checkout">
              <div className="checkout-form">
                <h4>Billing Details</h4>
                <form className="form-checkout" method="post" id="checkoutform" action="./contact/checkout-process.php">
                  <div className="form-group">
                    <fieldset className="name">
                      <input
                        type="text"
                        name="first-name"
                        className="tf-input style-1"
                        placeholder="First Name*"
                        aria-required="true"
                        required
                      />
                    </fieldset>
                    <fieldset className="name">
                      <input
                        type="text"
                        name="last-name"
                        className="tf-input style-1"
                        placeholder="Last Name*"
                        aria-required="true"
                        required
                      />
                    </fieldset>
                  </div>
                  <fieldset className="company">
                    <input
                      type="text"
                      name="company"
                      className="tf-input style-1"
                      placeholder="Company Name (optional)"
                    />
                  </fieldset>
                  <fieldset className="address">
                    <input
                      type="text"
                      name="address"
                      className="tf-input style-1"
                      placeholder="Street Address*"
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset className="city">
                    <input
                      type="text"
                      name="city"
                      className="tf-input style-1"
                      placeholder="Town / City*"
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset className="state">
                    <input
                      type="text"
                      name="state"
                      className="tf-input style-1"
                      placeholder="State*"
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset className="zip">
                    <input
                      type="text"
                      name="zip"
                      className="tf-input style-1"
                      placeholder="ZIP Code*"
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset className="phone">
                    <input
                      type="number"
                      name="phone"
                      className="tf-input style-1"
                      placeholder="Phone*"
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset className="email">
                    <input
                      type="email"
                      name="email"
                      className="tf-input style-1"
                      placeholder="Email Address*"
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset className="notes">
                    <textarea
                      id="notes"
                      className="tf-input"
                      name="notes"
                      rows="4"
                      placeholder="Order Notes (optional)"
                    ></textarea>
                  </fieldset>
                </form>
              </div>
              <div className="checkout-order">
                <h4>Your Order</h4>
                <div className="order-inner">
                  <div className="order-table">
                    <table className="table-order">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Mindfulness Journal x 1</td>
                          <td>$19.99</td>
                        </tr>
                        <tr>
                          <td>Stress Relief Kit x 2</td>
                          <td>$59.98</td>
                        </tr>
                        <tr className="subtotal">
                          <td>Subtotal</td>
                          <td>$79.97</td>
                        </tr>
                        <tr className="shipping">
                          <td>Shipping</td>
                          <td>$10.00</td>
                        </tr>
                        <tr className="total">
                          <td>Total</td>
                          <td>$89.97</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="payment-methods">
                    <h6>Payment Methods</h6>
                    <div className="method-item">
                      <input type="radio" id="paypal" name="payment" value="paypal" checked />
                      <label htmlFor="paypal">PayPal</label>
                    </div>
                    <div className="method-item">
                      <input type="radio" id="credit-card" name="payment" value="credit-card" />
                      <label htmlFor="credit-card">Credit Card</label>
                    </div>
                    <div className="method-item">
                      <input type="radio" id="bank-transfer" name="payment" value="bank-transfer" />
                      <label htmlFor="bank-transfer">Direct Bank Transfer</label>
                    </div>
                  </div>
                  <button className="tf-btn style-default btn-color-secondary pd-40 boder-8" type="submit">
                    <span>Place Order</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutSection;
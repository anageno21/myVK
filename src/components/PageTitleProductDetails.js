import React from 'react';

function PageTitleProductDetails() {
  return (
    <div className="page-title">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <h3 className="title">Product Details</h3>
            <ul className="breadcrumbs">
              <li><a href="/">Home</a></li>
              <li><a href="/our-product.html">Shop</a></li>
              <li>Product Details</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTitleProductDetails;
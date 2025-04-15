import React from 'react';
import { Link } from 'react-router-dom';

function PageTitleService() {
  return (
    <div className="page-title">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <h3 className="title">Our Services</h3>
            <ul className="breadcrumbs">
              <li><Link to="/">Home</Link></li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTitleService;
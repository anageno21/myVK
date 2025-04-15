// src/components/TopBar.js
import React from 'react';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="top-bar-inner">
              <div className="left-content">
                <span>Call Us Now: 1-555-676-8888</span>
                <span>Support 24/7: support@anageno.com</span>
              </div>
              <div className="right-content">
                <div className="language-switcher">
                  <button className="language-btn">
                    EN
                    <span className="arrow">▼</span>
                  </button>
                  <ul className="language-menu">
                    <li><a href="#lang-en">EN</a></li>
                    <li><a href="#lang-ua">UA</a></li>
                    <li><a href="#lang-ru">RU</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
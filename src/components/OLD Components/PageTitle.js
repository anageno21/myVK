import React from 'react';

const PageTitle = ({ title, breadcrumbs, isHomePage }) => {
  // Προσθέτουμε ένα console.log για να ελέγξουμε την τιμή του isHomePage
  console.log('PageTitle isHomePage:', isHomePage);

  // Ελέγχουμε αν το isHomePage είναι true (ή undefined, για να είμαστε πιο ασφαλείς)
  const isHome = isHomePage === true;

  return (
    <section className="page-title">
      {isHome ? (
        <div className="page-title-home">
          <div className="slider-page-title-home">
            <div
              className="page-title-slide"
              style={{
                backgroundImage: `url(/images/hero/hero-image-1.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '600px',
              }}
            >
              <div className="tf-container">
                <div className="row">
                  <div className="col-md-6 custom-offset">
                    <div className="hero-content-box">
                      <h1>Welcome to Our Spa</h1>
                      <p>Relax, Rejuvenate, Refresh</p>
                      <a href="/book-appointment.html" className="tf-btn style-default btn-color-secondary">
                        <span>Book a Consultation</span>
                        <i className="icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-title-inner">
                <h1>{title || 'Default Title'}</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    {Array.isArray(breadcrumbs) && breadcrumbs.length > 0 ? (
                      breadcrumbs.map((crumb, index) => (
                        <li key={index} className="breadcrumb-item">
                          {crumb.link ? (
                            <a href={crumb.link}>{crumb.text}</a>
                          ) : (
                            <span>{crumb.text}</span>
                          )}
                        </li>
                      ))
                    ) : (
                      <li className="breadcrumb-item">
                        <span>No breadcrumbs available</span>
                      </li>
                    )}
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PageTitle;
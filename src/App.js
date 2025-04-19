// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewFooter from './components/NewFooter';
import VictoriaKotenkoProfilePage from './components/VictoriaKotenkoProfilePage'; // Εξασφάλιση εισαγωγής

// Placeholder components for missing pages
const AboutSection = () => <div>About Section Placeholder</div>;
const ServicesSection = () => <div>Services Section Placeholder</div>;
const TherapistSection = () => <div>Therapist Section Placeholder</div>;
const AppointmentSection = () => <div>Appointment Section Placeholder</div>;
const BlogGridSection = () => <div>Blog Grid Section Placeholder</div>;
const BlogDetailsSection = () => <div>Blog Details Section Placeholder</div>;
const ServiceDetailsSection = () => <div>Service Details Section Placeholder</div>;
const ProductsSection = () => <div>Products Section Placeholder</div>;
const ShopCartSection = () => <div>Shop Cart Section Placeholder</div>;
const CheckoutSection = () => <div>Checkout Section Placeholder</div>;
const ProductDetailsSection = () => <div>Product Details Section Placeholder</div>;

const AboutPage = () => {
  return (
    <>
      <AboutSection />
    </>
  );
};

const ContactPage = () => {
  return (
    <div>Contact Page Placeholder</div>
  );
};

const ServicesPage = () => {
  return (
    <>
      <ServicesSection />
    </>
  );
};

const TherapistsPage = () => {
  return (
    <>
      <TherapistSection />
    </>
  );
};

const AppointmentPage = () => {
  return (
    <>
      <AppointmentSection />
    </>
  );
};

const BlogGridPage = () => {
  return (
    <>
      <BlogGridSection />
    </>
  );
};

const BlogDetailsPage = () => {
  return (
    <>
      <BlogDetailsSection />
    </>
  );
};

const ServiceDetailsPage = () => {
  return (
    <>
      <ServiceDetailsSection />
    </>
  );
};

const ProductsPage = () => {
  return (
    <>
      <ProductsSection />
    </>
  );
};

const CartPage = () => {
  return (
    <>
      <ShopCartSection />
    </>
  );
};

const CheckoutPage = () => {
  return (
    <>
      <CheckoutSection />
    </>
  );
};

const ProductDetailsPage = () => {
  return (
    <>
      <ProductDetailsSection />
    </>
  );
};

const TherapistsDetailsPage = () => {
  return (
    <>
      <div>
        <h1>Therapists Details</h1>
        <p>This is a placeholder for the Therapists Details page.</p>
      </div>
    </>
  );
};

const LoginPage = () => {
  return (
    <div>
      <h1>Log In</h1>
      <p>This is a placeholder for the Log In page.</p>
    </div>
  );
};

const LearnMorePage = () => {
  return (
    <div>
      <h1>Learn More</h1>
      <p>This is a placeholder for the Learn More page.</p>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleLoad = () => {
      setIsLoading(false);
    };
    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <Router>
      <div id="wrapper">
        {isLoading && (
          <div id="loading">
            <div id="loading-center">
              <div className="loader-container">
                <div className="wrap-loader">
                  <div className="loader"></div>
                  <div className="icon">
                    <img src="/images/logo/favicon.png" alt="Anageno Loading Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!isLoading && (
          <>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/our-service" element={<ServicesPage />} />
              <Route path="/our-therapists" element={<TherapistsPage />} />
              <Route path="/book-appointment" element={<AppointmentPage />} />
              <Route path="/blog-grid" element={<BlogGridPage />} />
              <Route path="/blog-details" element={<BlogDetailsPage />} />
              <Route path="/service-details" element={<ServiceDetailsPage />} />
              <Route path="/our-product" element={<ProductsPage />} />
              <Route path="/shop-cart" element={<CartPage />} />
              <Route path="/shop-check-out" element={<CheckoutPage />} />
              <Route path="/product-details" element={<ProductDetailsPage />} />
              <Route path="/therapists-details" element={<TherapistsDetailsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/learn-more" element={<LearnMorePage />} />
              <Route path="/victoria-kotenko" element={<VictoriaKotenkoProfilePage />} />
            </Routes>
            <NewFooter />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
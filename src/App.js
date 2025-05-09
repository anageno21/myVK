// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import VictoriaKotenkoProfilePage from './components/VictoriaKotenkoProfilePage';
import BlogGridPage from './pages/BlogGridPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import TherapistsPage from './pages/TherapistsPage';
import TherapistsDetailsPage from './pages/TherapistsDetailsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ServicesPage from './pages/ServicesPage';
import NewFooter from './components/NewFooter';
import RelationshipServicePage from './pages/RelationshipServicePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-service" element={<ServicesPage />} />
        <Route path="/relationship-service" element={<RelationshipServicePage />} /> {/* Αλλαγή από /service-details σε /relationship-service */}
        <Route path="/our-product" element={<ProductPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/victoria-kotenko" element={<VictoriaKotenkoProfilePage />} />
        <Route path="/blog-grid" element={<BlogGridPage />} />
        <Route path="/blog-details" element={<BlogDetailsPage />} />
        <Route path="/our-therapists" element={<TherapistsPage />} />
        <Route path="/therapist-details" element={<TherapistsDetailsPage />} />
      </Routes>
      <NewFooter />
    </>
  );
}

export default App;
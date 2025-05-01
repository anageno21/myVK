import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import VictoriaKotenkoProfilePage from './components/VictoriaKotenkoProfilePage';
import BlogLibrary from './pages/BlogLibrary';
import BlogDetailsSection from './components/BlogDetailsSection';
import TherapistLibrary from './pages/TherapistLibrary';
import TherapistsDetailsPage from './pages/TherapistsDetailsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ServicesPage from './pages/ServicesPage';
import NewFooter from './components/NewFooter';
import RelationshipServicePage from './pages/RelationshipServicePage';
import RelationshipsPage from './pages/RelationshipsPage';
import StressAnxietyPage from './pages/StressAnxietyPage';
import SelfConfidencePage from './pages/SelfConfidencePage';
import AdaptationPage from './pages/AdaptationPage';
import FreePackagePage from './pages/FreePackagePage';
import RegisterPage from './pages/RegisterPage';
import TestPage from './pages/TestPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-service" element={<ServicesPage />} />
        <Route path="/services/relationships" element={<RelationshipsPage />} />
        <Route path="/services/stress-anxiety" element={<StressAnxietyPage />} />
        <Route path="/services/self-confidence" element={<SelfConfidencePage />} />
        <Route path="/services/adaptation" element={<AdaptationPage />} />
        <Route path="/free-package" element={<FreePackagePage />} />
        <Route path="/relationship-service" element={<RelationshipServicePage />} />
        <Route path="/our-product" element={<ProductPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/victoria-kotenko" element={<VictoriaKotenkoProfilePage />} />
        <Route path="/blog-library" element={<BlogLibrary />} />
        <Route path="/blog-details/:slug" element={<BlogDetailsSection />} />
        <Route path="/our-therapists" element={<TherapistLibrary />} />
        <Route path="/therapist-details" element={<TherapistsDetailsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
      <NewFooter />
    </>
  );
}

export default App;
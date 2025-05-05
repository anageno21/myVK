import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import ContactUsPage from './pages/ContactUsPage'; // Αντικατάσταση του ContactPage με το ContactUsPage
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
import TestAttachmentStyleQuestionnaire from './pages/tests/TestAttachmentStyleQuestionnaire';
import TestBecksDepressionInventory from './pages/tests/TestBecksDepressionInventory';
import TestCompACT from './pages/tests/TestCompACT';
import TestGeneralSelfEfficacyScale from './pages/tests/TestGeneralSelfEfficacyScale';
import TestLuscherColorTest from './pages/tests/TestLuscherColorTest';
import TestMaritalSatisfactionAssessment from './pages/tests/TestMaritalSatisfactionAssessment';
import TestRelationshipScalesQuestionnaire from './pages/tests/TestRelationshipScalesQuestionnaire';
import TestRobsonSelfConceptQuestionnaire from './pages/tests/TestRobsonSelfConceptQuestionnaire';
import TestRosenbergSelfEsteemScale from './pages/tests/TestRosenbergSelfEsteemScale';
import TestRRS from './pages/tests/TestRRS';
import TestSelfCompassionScale from './pages/tests/TestSelfCompassionScale';
import TestZungSelfRatingAnxietyScale from './pages/tests/TestZungSelfRatingAnxietyScale';
import FreeTherapyToolbox from './pages/FreeTherapyToolbox';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
        <Route path="/contact-us" element={<ContactUsPage />} /> {/* Αντικατάσταση του ContactPage */}
        <Route path="/victoria-kotenko" element={<VictoriaKotenkoProfilePage />} />
        <Route path="/blog-library" element={<BlogLibrary />} />
        <Route path="/blog-details/:slug" element={<BlogDetailsSection />} />
        <Route path="/our-therapists" element={<TherapistLibrary />} />
        <Route path="/therapist-details" element={<TherapistsDetailsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/test-attachment-style" element={<TestAttachmentStyleQuestionnaire />} />
        <Route path="/test-becks-depression-inventory" element={<TestBecksDepressionInventory />} />
        <Route path="/test-compact" element={<TestCompACT />} />
        <Route path="/test-general-self-efficacy-scale" element={<TestGeneralSelfEfficacyScale />} />
        <Route path="/test-luscher-color-test" element={<TestLuscherColorTest />} />
        <Route path="/test-marital-satisfaction-assessment" element={<TestMaritalSatisfactionAssessment />} />
        <Route path="/test-relationship-scales-questionnaire" element={<TestRelationshipScalesQuestionnaire />} />
        <Route path="/test-robson-self-concept-questionnaire" element={<TestRobsonSelfConceptQuestionnaire />} />
        <Route path="/test-rosenberg-self-esteem-scale" element={<TestRosenbergSelfEsteemScale />} />
        <Route path="/test-rrs" element={<TestRRS />} />
        <Route path="/test-self-compassion-scale" element={<TestSelfCompassionScale />} />
        <Route path="/test-zung-self-rating-anxiety-scale" element={<TestZungSelfRatingAnxietyScale />} />
        <Route path="/free-therapy-toolbox" element={<FreeTherapyToolbox />} />
      </Routes>
      <NewFooter />
    </>
  );
}

export default App;
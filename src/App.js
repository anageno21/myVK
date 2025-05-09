// src/App.js
import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HeaderProvider } from './context/HeaderContext';
import { AuthProvider } from './context/AuthContext'; // Εισαγωγή του AuthProvider

// Lazy loading όλων των σελίδων
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'));
const VictoriaKotenkoProfilePage = lazy(() => import('./components/VictoriaKotenkoProfilePage'));
const BlogLibrary = lazy(() => import('./pages/BlogLibrary'));
const BlogDetailsSection = lazy(() => import('./components/BlogDetailsSection'));
const TherapistLibrary = lazy(() => import('./pages/TherapistLibrary'));
const TherapistsDetailsPage = lazy(() => import('./pages/TherapistsDetailsPage'));
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const NewFooter = lazy(() => import('./components/NewFooter'));
const RelationshipServicePage = lazy(() => import('./pages/RelationshipServicePage'));
const RelationshipsPage = lazy(() => import('./pages/RelationshipsPage'));
const StressAnxietyPage = lazy(() => import('./pages/StressAnxietyPage'));
const SelfConfidencePage = lazy(() => import('./pages/SelfConfidencePage'));
const AdaptationPage = lazy(() => import('./pages/AdaptationPage'));
const FreePackagePage = lazy(() => import('./pages/FreePackagePage'));
const TestAttachmentStyleQuestionnaire = lazy(() => import('./pages/tests/TestAttachmentStyleQuestionnaire'));
const TestBecksDepressionInventory = lazy(() => import('./pages/tests/TestBecksDepressionInventory'));
const TestCompACT = lazy(() => import('./pages/tests/TestCompACT'));
const TestGeneralSelfEfficacyScale = lazy(() => import('./pages/tests/TestGeneralSelfEfficacyScale'));
const TestLuscherColorTest = lazy(() => import('./pages/tests/TestLuscherColorTest'));
const TestMaritalSatisfactionAssessment = lazy(() => import('./pages/tests/TestMaritalSatisfactionAssessment'));
const TestRelationshipScalesQuestionnaire = lazy(() => import('./pages/tests/TestRelationshipScalesQuestionnaire'));
const TestRobsonSelfConceptQuestionnaire = lazy(() => import('./pages/tests/TestRobsonSelfConceptQuestionnaire'));
const TestRosenbergSelfEsteemScale = lazy(() => import('./pages/tests/TestRosenbergSelfEsteemScale'));
const TestRRS = lazy(() => import('./pages/tests/TestRRS'));
const TestSelfCompassionScale = lazy(() => import('./pages/tests/TestSelfCompassionScale'));
const TestZungSelfRatingAnxietyScale = lazy(() => import('./pages/tests/TestZungSelfRatingAnxietyScale'));
const FreeTherapyToolbox = lazy(() => import('./pages/FreeTherapyToolbox'));
const AvailabilityPage = lazy(() => import('./pages/AvailabilityPage'));

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AuthProvider>
      <HeaderProvider>
        <Suspense fallback={<div>Loading...</div>}>
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
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/victoria-kotenko" element={<VictoriaKotenkoProfilePage />} />
            <Route path="/blog-library" element={<BlogLibrary />} />
            <Route path="/blog-details/:slug" element={<BlogDetailsSection />} />
            <Route path="/our-therapists" element={<TherapistLibrary />} />
            <Route path="/therapist-details" element={<TherapistsDetailsPage />} />
            <Route path="/availability" element={<AvailabilityPage />} />
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
        </Suspense>
      </HeaderProvider>
    </AuthProvider>
  );
}

export default App;
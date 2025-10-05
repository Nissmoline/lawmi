import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Breadcrumbs from './components/Breadcrumbs';
import SecurityHeaders from './components/SecurityHeaders';
import LanguageInitializer from './components/LanguageInitializer';
import LoadingSpinner from './components/LoadingSpinner';
import { initializeCookieSystem } from './utils/cookieUtils';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const FamilyLawPage = lazy(() => import('./pages/FamilyLawPage'));
const ImmigrationPage = lazy(() => import('./pages/ImmigrationPage'));
const CriminalPage = lazy(() => import('./pages/CriminalPage'));
const CivilPage = lazy(() => import('./pages/CivilPage'));
const TranslationsPage = lazy(() => import('./pages/TranslationsPage'));
const CorporatePage = lazy(() => import('./pages/CorporatePage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const GoldenVisaPage = lazy(() => import('./pages/GoldenVisaPage'));
const DivorcePage = lazy(() => import('./pages/DivorcePage'));
const MultilingualBlogPage = lazy(() => import('./pages/MultilingualBlogPage'));
const ImpressumPage = lazy(() => import('./pages/ImpressumPage'));

const GoogleAnalytics = lazy(() => import('./components/GoogleAnalytics'));
import './styles/globals.css';
import './App.css';

function App() {
  useEffect(() => {
    initializeCookieSystem();
  }, []);

  return (
    <Router>
      <div id="root">
        <LanguageInitializer />
        <SecurityHeaders />
        <Suspense fallback={<LoadingSpinner />}>
          <GoogleAnalytics />
        </Suspense>
        <Header />
        <Breadcrumbs />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/family" element={<FamilyLawPage />} />
              <Route path="/immigration" element={<ImmigrationPage />} />
              <Route path="/criminal" element={<CriminalPage />} />
              <Route path="/civil" element={<CivilPage />} />
              <Route path="/translations" element={<TranslationsPage />} />
              <Route path="/corporate" element={<CorporatePage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/golden-visa" element={<GoldenVisaPage />} />
              <Route path="/divorce" element={<DivorcePage />} />
              <Route path="/blog" element={<MultilingualBlogPage />} />
              <Route path="/impressum" element={<ImpressumPage />} />

              {/* Redirect old language URLs to default */}
              <Route path="/de" element={<Navigate to="/" replace />} />
              <Route path="/de/*" element={<Navigate to="/" replace />} />
              <Route path="/en" element={<Navigate to="/" replace />} />
              <Route path="/en/*" element={<Navigate to="/" replace />} />
              <Route path="/ru" element={<Navigate to="/" replace />} />
              <Route path="/ru/*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;

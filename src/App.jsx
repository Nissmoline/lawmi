import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import SEOHead from './components/SEOHead';
import Breadcrumbs from './components/Breadcrumbs';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SecurityHeaders from './components/SecurityHeaders';
import DynamicSEO from './components/DynamicSEO';
import { initializeCookieSystem } from './utils/cookieUtils';
import HomePage from './pages/HomePage';
import FamilyLawPage from './pages/FamilyLawPage';
import ImmigrationPage from './pages/ImmigrationPage';
import CriminalPage from './pages/CriminalPage';
import CivilPage from './pages/CivilPage';
import TranslationsPage from './pages/TranslationsPage';
import CorporatePage from './pages/CorporatePage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import './styles/globals.css';
import './App.css';

function App() {
  const { t } = useTranslation();
  
  useEffect(() => {
    initializeCookieSystem();
  }, []);

  return (
    <Router>
      <div id="root">
        <SecurityHeaders />
        <SEOHead 
          title={t('seo.home.title')}
          description={t('seo.home.description')}
          keywords={t('seo.home.keywords')}
          canonical="https://milawyer.gr/"
          hreflang={{
            "el": "https://milawyer.gr/",
            "en": "https://milawyer.gr/",
            "ru": "https://milawyer.gr/",
            "x-default": "https://milawyer.gr/"
          }}
        />
        <PerformanceOptimizer />
        <DynamicSEO />
        <Header />
        <Breadcrumbs />
        <main>
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
            
            {/* Redirect old language URLs to default */}
            <Route path="/de" element={<Navigate to="/" replace />} />
            <Route path="/de/*" element={<Navigate to="/" replace />} />
            <Route path="/en" element={<Navigate to="/" replace />} />
            <Route path="/en/*" element={<Navigate to="/" replace />} />
            <Route path="/ru" element={<Navigate to="/" replace />} />
            <Route path="/ru/*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;

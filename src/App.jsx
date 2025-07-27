import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import SEOHead from './components/SEOHead';
import Breadcrumbs from './components/Breadcrumbs';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SecurityHeaders from './components/SecurityHeaders';
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
  useEffect(() => {
    initializeCookieSystem();
  }, []);

  return (
    <Router>
      <div id="root">
        <SecurityHeaders />
        <SEOHead 
          title="Μαρίνα Ιλιούσινα - Δικηγόρος στην Αθήνα | Νομικές Υπηρεσίες"
          description="Δικηγόρος Μαρίνα Ιλιούσινα στην Αθήνα. Εξειδικευμένες νομικές υπηρεσίες σε οικογενειακό δίκαιο, μεταναστευτικό δίκαιο, ποινικό δίκαιο, αστικό δίκαιο και εταιρικό δίκαιο. Επικοινωνήστε μαζί μας για δωρεάν πρώτη συμβουλή."
          keywords="δικηγόρος αθήνα, νομικές υπηρεσίες, οικογενειακό δίκαιο, μεταναστευτικό δίκαιο, ποινικό δίκαιο, αστικό δίκαιο, εταιρικό δίκαιο, μαρίνα ιλιούσινα"
          canonical="https://milawyer.gr/"
        />
        <PerformanceOptimizer />
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
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;

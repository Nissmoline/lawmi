import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  shouldShowCookieBanner, 
  handleCookieConsent, 
  handleCookieDecline, 
  updateCookiePreferences,
  logCookieUsage 
} from '../utils/cookieUtils';
import './CookieBanner.css';

const CookieBanner = () => {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (shouldShowCookieBanner()) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    handleCookieConsent({
      necessary: true,
      functional: true,
      analytics: true
    });
    logCookieUsage('banner', 'accepted_all');
    setShowBanner(false);
  };

  const declineAll = () => {
    handleCookieDecline();
    logCookieUsage('banner', 'declined_all');
    setShowBanner(false);
  };

  const acceptSelected = () => {
    const analytics = document.getElementById('analytics-cookies').checked;
    const functional = document.getElementById('functional-cookies').checked;
    
    updateCookiePreferences({
      functional,
      analytics
    });
    logCookieUsage('banner', 'accepted_selected');
    setShowBanner(false);
    setShowSettings(false);
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  const closeSettings = () => {
    setShowSettings(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      {/* Основный banner */}
      {!showSettings && (
        <div className="cookie-banner">
          <div className="cookie-banner-content">
            <div className="cookie-banner-text">
              <h3>{t('cookies.banner.title')}</h3>
              <p>
                {t('cookies.banner.description')}
              </p>
            </div>
            <div className="cookie-banner-buttons">
              <button 
                className="cookie-btn cookie-btn-secondary" 
                onClick={openSettings}
              >
                {t('cookies.banner.settings')}
              </button>
              <button 
                className="cookie-btn cookie-btn-secondary" 
                onClick={declineAll}
              >
                {t('cookies.banner.reject')}
              </button>
              <button 
                className="cookie-btn cookie-btn-primary" 
                onClick={acceptAll}
              >
                {t('cookies.banner.accept')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно настроек */}
      {showSettings && (
        <div className="cookie-settings-overlay">
          <div className="cookie-settings-modal">
            <div className="cookie-settings-header">
              <h3>Ρυθμίσεις Cookies</h3>
              <button className="cookie-close-btn" onClick={closeSettings}>
                ×
              </button>
            </div>
            
            <div className="cookie-settings-content">
              <div className="cookie-category">
                <div className="cookie-category-header">
                  <div className="cookie-category-info">
                    <h4>Αναγκαία Cookies</h4>
                    <p>Αυτά τα cookies είναι απαραίτητα για τη λειτουργία του ιστότοπου και δεν μπορούν να απενεργοποιηθούν.</p>
                  </div>
                  <div className="cookie-toggle">
                    <input 
                      type="checkbox" 
                      id="necessary-cookies" 
                      checked 
                      disabled 
                    />
                    <label htmlFor="necessary-cookies"></label>
                  </div>
                </div>
              </div>

              <div className="cookie-category">
                <div className="cookie-category-header">
                  <div className="cookie-category-info">
                    <h4>Λειτουργικά Cookies</h4>
                    <p>Αυτά τα cookies επιτρέπουν στον ιστότοπο να θυμάται τις επιλογές σας και να παρέχει βελτιωμένες λειτουργίες.</p>
                  </div>
                  <div className="cookie-toggle">
                    <input 
                      type="checkbox" 
                      id="functional-cookies" 
                      defaultChecked 
                    />
                    <label htmlFor="functional-cookies"></label>
                  </div>
                </div>
              </div>

              <div className="cookie-category">
                <div className="cookie-category-header">
                  <div className="cookie-category-info">
                    <h4>Αναλυτικά Cookies</h4>
                    <p>Αυτά τα cookies μας βοηθούν να κατανοήσουμε πώς χρησιμοποιείτε τον ιστότοπο και να τον βελτιώσουμε.</p>
                  </div>
                  <div className="cookie-toggle">
                    <input 
                      type="checkbox" 
                      id="analytics-cookies" 
                      defaultChecked 
                    />
                    <label htmlFor="analytics-cookies"></label>
                  </div>
                </div>
              </div>
            </div>

            <div className="cookie-settings-footer">
              <button 
                className="cookie-btn cookie-btn-secondary" 
                onClick={closeSettings}
              >
                Ακύρωση
              </button>
              <button 
                className="cookie-btn cookie-btn-primary" 
                onClick={acceptSelected}
              >
                Αποθήκευση Ρυθμίσεων
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner; 
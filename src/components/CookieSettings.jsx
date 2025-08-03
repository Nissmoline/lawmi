import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  getAllCookiePreferences, 
  updateCookiePreferences, 
  logCookieUsage 
} from '../utils/cookieUtils';
import './CookieSettings.css';

const CookieSettings = () => {
  const { t } = useTranslation();
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState(getAllCookiePreferences());

  const handleToggle = (cookieType) => {
    setPreferences(prev => ({
      ...prev,
      [cookieType]: !prev[cookieType]
    }));
  };

  const handleSave = () => {
    updateCookiePreferences({
      functional: preferences.functional,
      analytics: preferences.analytics
    });
    logCookieUsage('settings', 'updated');
    setShowSettings(false);
  };

  const handleCancel = () => {
    setPreferences(getAllCookiePreferences());
    setShowSettings(false);
  };

  if (!showSettings) {
    return (
      <button 
        className="cookie-settings-link" 
        onClick={() => setShowSettings(true)}
      >
        {t('cookies.settings.title')}
      </button>
    );
  }

  return (
    <div className="cookie-settings-overlay">
      <div className="cookie-settings-modal">
        <div className="cookie-settings-header">
          <h3>{t('cookies.settings.title')}</h3>
          <button className="cookie-close-btn" onClick={handleCancel}>
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
                  id="necessary-cookies-settings" 
                  checked 
                  disabled 
                />
                <label htmlFor="necessary-cookies-settings"></label>
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
                  id="functional-cookies-settings" 
                  checked={preferences.functional}
                  onChange={() => handleToggle('functional')}
                />
                <label htmlFor="functional-cookies-settings"></label>
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
                  id="analytics-cookies-settings" 
                  checked={preferences.analytics}
                  onChange={() => handleToggle('analytics')}
                />
                <label htmlFor="analytics-cookies-settings"></label>
              </div>
            </div>
          </div>
        </div>

        <div className="cookie-settings-footer">
          <button 
            className="cookie-btn cookie-btn-secondary" 
            onClick={handleCancel}
          >
            Ακύρωση
          </button>
          <button 
            className="cookie-btn cookie-btn-primary" 
            onClick={handleSave}
          >
            Αποθήκευση Ρυθμίσεων
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieSettings; 
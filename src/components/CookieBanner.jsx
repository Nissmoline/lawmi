import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  shouldShowCookieBanner,
  handleCookieConsent,
  handleCookieDecline,
  updateCookiePreferences,
  logCookieUsage,
  getAllCookiePreferences,
  COOKIE_PREFERENCES_EVENT,
} from '../utils/cookieUtils';
import './CookieBanner.css';

const DEFAULT_DECLINED_PREFERENCES = {
  necessary: true,
  functional: false,
  analytics: false,
};

const CookieBanner = () => {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState(() => getAllCookiePreferences());

  useEffect(() => {
    if (shouldShowCookieBanner()) {
      setShowBanner(true);
    }
  }, []);

  useEffect(() => {
    const syncPreferences = () => {
      setPreferences(getAllCookiePreferences());
    };

    window.addEventListener(COOKIE_PREFERENCES_EVENT, syncPreferences);
    return () => {
      window.removeEventListener(COOKIE_PREFERENCES_EVENT, syncPreferences);
    };
  }, []);

  const acceptAll = () => {
    const updated = { necessary: true, functional: true, analytics: true };
    handleCookieConsent(updated);
    setPreferences(updated);
    logCookieUsage('banner', 'accepted_all');
    setShowBanner(false);
  };

  const declineAll = () => {
    handleCookieDecline();
    setPreferences(DEFAULT_DECLINED_PREFERENCES);
    logCookieUsage('banner', 'declined_all');
    setShowBanner(false);
  };

  const acceptSelected = () => {
    updateCookiePreferences({
      functional: preferences.functional,
      analytics: preferences.analytics,
    });
    logCookieUsage('banner', 'accepted_selected');
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (type) => (event) => {
    const { checked } = event.target;
    setPreferences((prev) => ({
      ...prev,
      [type]: checked,
    }));
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      {!showSettings && (
        <div className="cookie-banner">
          <div className="cookie-banner-content">
            <div className="cookie-banner-text">
              <h3>{t('cookies.banner.title')}</h3>
              <p>{t('cookies.banner.description')}</p>
            </div>
            <div className="cookie-banner-buttons">
              <button
                className="cookie-btn cookie-btn-secondary"
                onClick={() => setShowSettings(true)}
                type="button"
              >
                {t('cookies.banner.settings')}
              </button>
              <button
                className="cookie-btn cookie-btn-secondary"
                onClick={declineAll}
                type="button"
              >
                {t('cookies.banner.reject')}
              </button>
              <button
                className="cookie-btn cookie-btn-primary"
                onClick={acceptAll}
                type="button"
              >
                {t('cookies.banner.accept')}
              </button>
            </div>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="cookie-settings-overlay">
          <div className="cookie-settings-modal">
            <div className="cookie-settings-header">
              <h3>{t('cookies.settings.title')}</h3>
              <button
                className="cookie-close-btn"
                onClick={() => setShowSettings(false)}
                type="button"
                aria-label={t('cookies.settings.close')}
              >
                ?
              </button>
            </div>

            <div className="cookie-settings-content">
              <div className="cookie-category">
                <div className="cookie-category-header">
                  <div className="cookie-category-info">
                    <h4>{t('cookies.settings.necessary')}</h4>
                    <p>{t('cookies.settings.necessaryDesc')}</p>
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
                    <h4>{t('cookies.settings.functional')}</h4>
                    <p>{t('cookies.settings.functionalDesc')}</p>
                  </div>
                  <div className="cookie-toggle">
                    <input
                      type="checkbox"
                      id="functional-cookies"
                      checked={preferences.functional}
                      onChange={togglePreference('functional')}
                    />
                    <label htmlFor="functional-cookies"></label>
                  </div>
                </div>
              </div>

              <div className="cookie-category">
                <div className="cookie-category-header">
                  <div className="cookie-category-info">
                    <h4>{t('cookies.settings.analytics')}</h4>
                    <p>{t('cookies.settings.analyticsDesc')}</p>
                  </div>
                  <div className="cookie-toggle">
                    <input
                      type="checkbox"
                      id="analytics-cookies"
                      checked={preferences.analytics}
                      onChange={togglePreference('analytics')}
                    />
                    <label htmlFor="analytics-cookies"></label>
                  </div>
                </div>
              </div>
            </div>

            <div className="cookie-settings-footer">
              <button
                className="cookie-btn cookie-btn-secondary"
                onClick={() => setShowSettings(false)}
                type="button"
              >
                {t('cookies.settings.close')}
              </button>
              <button
                className="cookie-btn cookie-btn-primary"
                onClick={acceptSelected}
                type="button"
              >
                {t('cookies.settings.save')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;

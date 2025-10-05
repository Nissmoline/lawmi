export const COOKIE_PREFERENCES_EVENT = 'cookie-preferences-updated';

const emitPreferenceUpdate = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(COOKIE_PREFERENCES_EVENT));
  }
};

export const getCookiePreference = (cookieType) => {
  return localStorage.getItem(`${cookieType}Cookies`) === 'true';
};

export const setCookiePreference = (cookieType, value) => {
  localStorage.setItem(`${cookieType}Cookies`, value.toString());
};

export const getAllCookiePreferences = () => ({
  necessary: getCookiePreference('necessary'),
  functional: getCookiePreference('functional'),
  analytics: getCookiePreference('analytics'),
});

export const hasUserMadeChoice = () => {
  return (
    localStorage.getItem('cookiesAccepted') !== null ||
    localStorage.getItem('cookiesDeclined') !== null
  );
};

export const clearCookiePreferences = () => {
  localStorage.removeItem('cookiesAccepted');
  localStorage.removeItem('cookiesDeclined');
  localStorage.removeItem('necessaryCookies');
  localStorage.removeItem('functionalCookies');
  localStorage.removeItem('analyticsCookies');
  emitPreferenceUpdate();
};

export const canUseAnalytics = () => getCookiePreference('analytics');
export const canUseFunctional = () => getCookiePreference('functional');
export const canUseNecessary = () => true;

export const setupDefaultPreferences = () => {
  if (!hasUserMadeChoice()) {
    setCookiePreference('necessary', true);
    setCookiePreference('functional', false);
    setCookiePreference('analytics', false);
    emitPreferenceUpdate();
  }
};

export const handleCookieConsent = (preferences) => {
  const { necessary = true, functional = false, analytics = false } = preferences;

  setCookiePreference('necessary', necessary);
  setCookiePreference('functional', functional);
  setCookiePreference('analytics', analytics);

  localStorage.setItem('cookiesAccepted', 'true');
  localStorage.removeItem('cookiesDeclined');
  emitPreferenceUpdate();
};

export const handleCookieDecline = () => {
  setCookiePreference('necessary', true);
  setCookiePreference('functional', false);
  setCookiePreference('analytics', false);

  localStorage.setItem('cookiesDeclined', 'true');
  localStorage.removeItem('cookiesAccepted');
  emitPreferenceUpdate();
};

export const getCookieConsentStatus = () => {
  const accepted = localStorage.getItem('cookiesAccepted') === 'true';
  const declined = localStorage.getItem('cookiesDeclined') === 'true';

  if (accepted) return 'accepted';
  if (declined) return 'declined';
  return 'pending';
};

export const isCookieAllowed = (cookieType) => {
  switch (cookieType) {
    case 'necessary':
      return canUseNecessary();
    case 'functional':
      return canUseFunctional();
    case 'analytics':
      return canUseAnalytics();
    default:
      return false;
  }
};

export const logCookieUsage = (cookieType, action) => {
  if (canUseAnalytics()) {
    console.log(`Cookie usage: ${cookieType} - ${action}`);
  }
};

export const initializeCookieSystem = () => {
  setupDefaultPreferences();

  if (canUseAnalytics()) {
    logCookieUsage('system', 'initialized');
  }
};

export const shouldShowCookieBanner = () => !hasUserMadeChoice();

export const updateCookiePreferences = (preferences) => {
  const { functional, analytics } = preferences;

  setCookiePreference('functional', functional);
  setCookiePreference('analytics', analytics);

  localStorage.setItem('cookiesAccepted', 'true');
  localStorage.removeItem('cookiesDeclined');

  if (canUseAnalytics()) {
    logCookieUsage('preferences', 'updated');
  }

  emitPreferenceUpdate();
};

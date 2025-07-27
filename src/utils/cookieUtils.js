// Cookie utilities for managing cookie preferences

export const getCookiePreference = (cookieType) => {
  return localStorage.getItem(`${cookieType}Cookies`) === 'true';
};

export const setCookiePreference = (cookieType, value) => {
  localStorage.setItem(`${cookieType}Cookies`, value.toString());
};

export const getAllCookiePreferences = () => {
  return {
    necessary: getCookiePreference('necessary'),
    functional: getCookiePreference('functional'),
    analytics: getCookiePreference('analytics')
  };
};

export const hasUserMadeChoice = () => {
  return localStorage.getItem('cookiesAccepted') !== null || 
         localStorage.getItem('cookiesDeclined') !== null;
};

export const clearCookiePreferences = () => {
  localStorage.removeItem('cookiesAccepted');
  localStorage.removeItem('cookiesDeclined');
  localStorage.removeItem('necessaryCookies');
  localStorage.removeItem('functionalCookies');
  localStorage.removeItem('analyticsCookies');
};

// Function to check if we can use analytics cookies
export const canUseAnalytics = () => {
  return getCookiePreference('analytics');
};

// Function to check if we can use functional cookies
export const canUseFunctional = () => {
  return getCookiePreference('functional');
};

// Function to check if we can use necessary cookies (always true)
export const canUseNecessary = () => {
  return true; // Necessary cookies are always allowed
};

// Function to set up default cookie preferences
export const setupDefaultPreferences = () => {
  if (!hasUserMadeChoice()) {
    // Set default preferences (all enabled by default)
    setCookiePreference('necessary', true);
    setCookiePreference('functional', true);
    setCookiePreference('analytics', true);
  }
};

// Function to handle cookie consent
export const handleCookieConsent = (preferences) => {
  const { necessary = true, functional = true, analytics = true } = preferences;
  
  setCookiePreference('necessary', necessary);
  setCookiePreference('functional', functional);
  setCookiePreference('analytics', analytics);
  
  localStorage.setItem('cookiesAccepted', 'true');
  localStorage.removeItem('cookiesDeclined');
};

// Function to handle cookie decline
export const handleCookieDecline = () => {
  setCookiePreference('necessary', true);
  setCookiePreference('functional', false);
  setCookiePreference('analytics', false);
  
  localStorage.setItem('cookiesDeclined', 'true');
  localStorage.removeItem('cookiesAccepted');
};

// Function to get cookie consent status
export const getCookieConsentStatus = () => {
  const accepted = localStorage.getItem('cookiesAccepted') === 'true';
  const declined = localStorage.getItem('cookiesDeclined') === 'true';
  
  if (accepted) return 'accepted';
  if (declined) return 'declined';
  return 'pending';
};

// Function to check if specific cookie type is allowed
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

// Function to log cookie usage (for analytics purposes)
export const logCookieUsage = (cookieType, action) => {
  if (canUseAnalytics()) {
    console.log(`Cookie usage: ${cookieType} - ${action}`);
    // Here you could integrate with actual analytics service
    // Example: Google Analytics, Matomo, etc.
  }
};

// Function to initialize cookie system
export const initializeCookieSystem = () => {
  setupDefaultPreferences();
  
  // Log initialization if analytics are allowed
  if (canUseAnalytics()) {
    logCookieUsage('system', 'initialized');
  }
};

// Function to get cookie banner visibility status
export const shouldShowCookieBanner = () => {
  return !hasUserMadeChoice();
};

// Function to update cookie preferences from settings
export const updateCookiePreferences = (preferences) => {
  const { functional, analytics } = preferences;
  
  setCookiePreference('functional', functional);
  setCookiePreference('analytics', analytics);
  
  // Mark as accepted since user made a choice
  localStorage.setItem('cookiesAccepted', 'true');
  localStorage.removeItem('cookiesDeclined');
  
  // Log the update if analytics are allowed
  if (canUseAnalytics()) {
    logCookieUsage('preferences', 'updated');
  }
}; 
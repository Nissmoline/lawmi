import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { canUseAnalytics, COOKIE_PREFERENCES_EVENT } from '../utils/cookieUtils';
import { LANGUAGE_SWITCH_EVENT } from '../utils/languageUtils';

const GA_MEASUREMENT_ID = 'G-5CY4QQN1FW';
const GA_STREAM_ID = '12194715519';
const SERVICE_PAGES = ['/family', '/immigration', '/criminal', '/civil', '/corporate', '/translations', '/golden-visa', '/divorce', '/blog'];
let gaScriptInjected = false;

const GoogleAnalytics = () => {
  const location = useLocation();
  const [analyticsAllowed, setAnalyticsAllowed] = useState(() => canUseAnalytics());

  const trackEvent = useCallback((action, category, label, value) => {
    if (!analyticsAllowed || typeof window.gtag !== 'function') {
      return;
    }

    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }, [analyticsAllowed]);

  useEffect(() => {
    const handlePreferenceChange = () => {
      setAnalyticsAllowed(canUseAnalytics());
    };

    window.addEventListener(COOKIE_PREFERENCES_EVENT, handlePreferenceChange);
    return () => {
      window.removeEventListener(COOKIE_PREFERENCES_EVENT, handlePreferenceChange);
    };
  }, []);

  useEffect(() => {
    if (!analyticsAllowed) {
      return;
    }

    if (!gaScriptInjected) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);
      gaScriptInjected = true;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
  }, [analyticsAllowed]);

  useEffect(() => {
    if (!analyticsAllowed || typeof window.gtag !== 'function') {
      return;
    }

    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
      page_path: location.pathname,
      send_page_view: true,
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
      stream_id: GA_STREAM_ID,
    });
  }, [analyticsAllowed, location.pathname]);

  useEffect(() => {
    if (!analyticsAllowed) {
      return;
    }

    const phoneHandler = () => trackEvent('phone_click', 'contact', 'phone_number', 1);
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach((link) => link.addEventListener('click', phoneHandler));

    return () => {
      phoneLinks.forEach((link) => link.removeEventListener('click', phoneHandler));
    };
  }, [analyticsAllowed, trackEvent]);

  useEffect(() => {
    if (!analyticsAllowed) {
      return;
    }

    const emailHandler = () => trackEvent('email_click', 'contact', 'email_address', 1);
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach((link) => link.addEventListener('click', emailHandler));

    return () => {
      emailLinks.forEach((link) => link.removeEventListener('click', emailHandler));
    };
  }, [analyticsAllowed, trackEvent]);

  useEffect(() => {
    if (!analyticsAllowed) {
      return;
    }

    if (SERVICE_PAGES.includes(location.pathname)) {
      const serviceType = location.pathname.substring(1);
      trackEvent('service_page_view', 'service', serviceType, 1);
    }
  }, [analyticsAllowed, location.pathname, trackEvent]);

  useEffect(() => {
    if (!analyticsAllowed) {
      return;
    }

    const handleLanguageSwitch = (event) => {
      trackEvent('language_change', 'user_interaction', event.detail?.language || '', 1);
    };

    window.addEventListener(LANGUAGE_SWITCH_EVENT, handleLanguageSwitch);
    return () => {
      window.removeEventListener(LANGUAGE_SWITCH_EVENT, handleLanguageSwitch);
    };
  }, [analyticsAllowed, trackEvent]);

  return null;
};

export default GoogleAnalytics;

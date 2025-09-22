import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-5CY4QQN1FW';
const GA_STREAM_ID = '12194715519';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    const initGA = () => {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true,
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure',
        stream_id: GA_STREAM_ID,
        // Enhanced ecommerce for legal services
        custom_map: {
          'custom_parameter_1': 'service_type',
          'custom_parameter_2': 'language',
          'custom_parameter_3': 'page_category'
        }
      });
    };

    // Track page view on route change
    const trackPageView = () => {
      if (window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_title: document.title,
          page_location: window.location.href,
          page_path: location.pathname,
          send_page_view: true,
          stream_id: GA_STREAM_ID
        });
      }
    };

    // Initialize GA on first load
    if (!window.gtag) {
      initGA();
    }

    // Track page view on route change
    trackPageView();

  }, [location.pathname]);

  // Track specific events
  const trackEvent = (action, category, label, value) => {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  };

  // Track phone clicks
  useEffect(() => {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
      link.addEventListener('click', () => {
        trackEvent('phone_click', 'contact', 'phone_number', 1);
      });
    });
  }, []);

  // Track email clicks
  useEffect(() => {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
      link.addEventListener('click', () => {
        trackEvent('email_click', 'contact', 'email_address', 1);
      });
    });
  }, []);

  // Track service page visits
  useEffect(() => {
    const servicePages = ['/family', '/immigration', '/criminal', '/civil', '/corporate', '/translations', '/golden-visa', '/divorce', '/blog'];
    if (servicePages.includes(location.pathname)) {
      const serviceType = location.pathname.substring(1);
      trackEvent('service_page_view', 'service', serviceType, 1);
    }
  }, [location.pathname]);

  // Track language changes
  useEffect(() => {
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
      languageSelector.addEventListener('change', (e) => {
        trackEvent('language_change', 'user_interaction', e.target.value, 1);
      });
    }
  }, []);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;

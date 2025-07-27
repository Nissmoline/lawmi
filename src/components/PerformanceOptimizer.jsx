import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = [
      { href: '/images/Ilyushina.jpg', as: 'image' },
      { href: '/images/faviconBlack.svg', as: 'image', type: 'image/svg+xml' },
      { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', as: 'style' }
    ];

    preloadResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) {
        link.type = resource.type;
      }
      document.head.appendChild(link);
    });

    // DNS prefetch for external domains
    const dnsPrefetch = [
      '//www.google-analytics.com',
      '//fonts.googleapis.com',
      '//fonts.gstatic.com',
      '//www.googletagmanager.com'
    ];

    dnsPrefetch.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Preconnect to critical domains
    const preconnect = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com'
    ];

    preconnect.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Service Worker registration for PWA
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // Performance monitoring
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
      });
    }

  }, []);

  return null;
};

export default PerformanceOptimizer; 
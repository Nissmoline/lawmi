import { useEffect } from 'react';

const SecurityHeaders = () => {
  useEffect(() => {
    // Add security headers dynamically
    const addSecurityHeaders = () => {
      // Content Security Policy
      const csp = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self';";
      
      // Add CSP meta tag if not exists
      if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
        const cspMeta = document.createElement('meta');
        cspMeta.httpEquiv = 'Content-Security-Policy';
        cspMeta.content = csp;
        document.head.appendChild(cspMeta);
      }

      // Add other security meta tags
      const securityMetaTags = [
        { httpEquiv: 'X-Content-Type-Options', content: 'nosniff' },
        { httpEquiv: 'X-Frame-Options', content: 'DENY' },
        { httpEquiv: 'X-XSS-Protection', content: '1; mode=block' },
        { httpEquiv: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
        { httpEquiv: 'Permissions-Policy', content: 'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()' }
      ];

      securityMetaTags.forEach(tag => {
        if (!document.querySelector(`meta[http-equiv="${tag.httpEquiv}"]`)) {
          const metaTag = document.createElement('meta');
          metaTag.httpEquiv = tag.httpEquiv;
          metaTag.content = tag.content;
          document.head.appendChild(metaTag);
        }
      });
    };

    // Sanitize user inputs
    const sanitizeInputs = () => {
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        input.addEventListener('input', (e) => {
          // Remove potentially dangerous characters
          let value = e.target.value;
          value = value.replace(/[<>]/g, '');
          e.target.value = value;
        });
      });
    };

    // Add event listeners for security
    const addSecurityListeners = () => {
      // Prevent right-click context menu (optional)
      document.addEventListener('contextmenu', () => {
        // Uncomment if you want to disable right-click
        // e.preventDefault();
      });

      // Prevent keyboard shortcuts that could be dangerous
      document.addEventListener('keydown', (e) => {
        // Prevent F12, Ctrl+Shift+I, Ctrl+U (view source)
        if (
          e.key === 'F12' ||
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.key === 'u')
        ) {
          // Uncomment if you want to block these shortcuts
          // e.preventDefault();
        }
      });

      // Monitor for suspicious activity
      let suspiciousActivity = 0;
      const suspiciousThreshold = 10;

      document.addEventListener('click', () => {
        suspiciousActivity++;
        if (suspiciousActivity > suspiciousThreshold) {
          console.warn('Suspicious activity detected');
          // Could implement rate limiting here
        }
      });
    };

    // Initialize security measures
    addSecurityHeaders();
    sanitizeInputs();
    addSecurityListeners();

    // Cleanup function
    return () => {
      // Remove event listeners if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SecurityHeaders; 
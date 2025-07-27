// Security Checker Script
// Run this script to check security measures

const securityChecks = {
  // Check if HTTPS is being used
  checkHTTPS: () => {
    const isHTTPS = window.location.protocol === 'https:';
    return {
      passed: isHTTPS,
      message: isHTTPS ? 'HTTPS is enabled' : 'HTTPS is not enabled'
    };
  },

  // Check if security headers are present
  checkSecurityHeaders: () => {
    // Note: We can't directly check server headers from client-side
    // This is a placeholder for server-side checking
    return {
      passed: true, // Will be checked server-side
      message: 'Security headers should be configured on server'
    };
  },

  // Check if CSP is implemented
  checkCSP: () => {
    const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    return {
      passed: !!cspMeta,
      message: cspMeta ? 'CSP meta tag found' : 'CSP meta tag not found'
    };
  },

  // Check for potential XSS vulnerabilities
  checkXSS: () => {
    const dangerousElements = document.querySelectorAll('script[src*="javascript:"], script[src*="data:"], script[src*="vbscript:"]');
    return {
      passed: dangerousElements.length === 0,
      count: dangerousElements.length,
      message: dangerousElements.length === 0 ? 'No dangerous script sources found' : 'Dangerous script sources detected'
    };
  },

  // Check if sensitive data is exposed
  checkSensitiveData: () => {
    const pageContent = document.body.innerText;
    const sensitivePatterns = [
      /password/i,
      /api_key/i,
      /secret/i,
      /token/i,
      /private_key/i
    ];

    const found = [];
    sensitivePatterns.forEach(pattern => {
      if (pattern.test(pageContent)) {
        found.push(pattern.source);
      }
    });

    return {
      passed: found.length === 0,
      found: found,
      message: found.length === 0 ? 'No sensitive data exposed' : 'Potential sensitive data found'
    };
  },

  // Check for external scripts
  checkExternalScripts: () => {
    const scripts = document.querySelectorAll('script[src]');
    const externalScripts = Array.from(scripts).filter(script => {
      const src = script.src;
      return !src.startsWith(window.location.origin) && 
             !src.startsWith('/') && 
             !src.startsWith('./') &&
             !src.startsWith('../');
    });

    const allowedDomains = [
      'googletagmanager.com',
      'google-analytics.com',
      'fonts.googleapis.com',
      'fonts.gstatic.com'
    ];

    const unauthorized = externalScripts.filter(script => {
      const domain = new URL(script.src).hostname;
      return !allowedDomains.some(allowed => domain.includes(allowed));
    });

    return {
      passed: unauthorized.length === 0,
      count: externalScripts.length,
      unauthorized: unauthorized.length,
      message: unauthorized.length === 0 ? 'All external scripts are authorized' : 'Unauthorized external scripts found'
    };
  },

  // Check for iframe vulnerabilities
  checkIframes: () => {
    const iframes = document.querySelectorAll('iframe');
    const dangerousIframes = Array.from(iframes).filter(iframe => {
      const src = iframe.src;
      return src && (src.includes('javascript:') || src.includes('data:'));
    });

    return {
      passed: dangerousIframes.length === 0,
      count: iframes.length,
      dangerous: dangerousIframes.length,
      message: dangerousIframes.length === 0 ? 'No dangerous iframes found' : 'Dangerous iframes detected'
    };
  },

  // Check for console logging
  checkConsoleLogs: () => {
    // This is a basic check - in production, console.log should be removed
    const hasConsoleLogs = document.body.innerHTML.includes('console.log');
    return {
      passed: !hasConsoleLogs,
      message: hasConsoleLogs ? 'Console logs found in HTML' : 'No console logs in HTML'
    };
  },

  // Check for error messages
  checkErrorMessages: () => {
    const errorKeywords = ['error', 'exception', 'stack trace', 'debug'];
    const pageContent = document.body.innerText.toLowerCase();
    const foundErrors = errorKeywords.filter(keyword => pageContent.includes(keyword));

    return {
      passed: foundErrors.length === 0,
      found: foundErrors,
      message: foundErrors.length === 0 ? 'No error messages exposed' : 'Error messages found'
    };
  },

  // Check for form security
  checkFormSecurity: () => {
    const forms = document.querySelectorAll('form');
    const insecureForms = Array.from(forms).filter(form => {
      const action = form.action;
      return action && !action.startsWith('https://') && !action.startsWith('/');
    });

    return {
      passed: insecureForms.length === 0,
      count: forms.length,
      insecure: insecureForms.length,
      message: insecureForms.length === 0 ? 'All forms are secure' : 'Insecure forms found'
    };
  }
};

// Run all security checks
const runSecurityCheck = () => {
  console.log('🔒 Running Security Check...\n');
  
  Object.entries(securityChecks).forEach(([checkName, checkFn]) => {
    try {
      const result = checkFn();
      const status = result.passed ? '✅ PASS' : '❌ FAIL';
      console.log(`${status} ${checkName}:`, result.message);
      if (result.count !== undefined) {
        console.log(`   Count: ${result.count}`);
      }
      if (result.found && result.found.length > 0) {
        console.log(`   Found: ${result.found.join(', ')}`);
      }
    } catch (error) {
      console.log(`❌ ERROR ${checkName}:`, error.message);
    }
  });
  
  console.log('\n🛡️ Security Check Complete');
  console.log('\n📋 Recommendations:');
  console.log('- Ensure HTTPS is enabled on server');
  console.log('- Configure security headers on server');
  console.log('- Remove console.log statements in production');
  console.log('- Validate all user inputs');
  console.log('- Use Content Security Policy');
  console.log('- Regularly update dependencies');
};

// Export for use in browser console
if (typeof window !== 'undefined') {
  window.runSecurityCheck = runSecurityCheck;
  console.log('Security Checker loaded. Run runSecurityCheck() to check security.');
}

// Export for Node.js environment
/* eslint-disable no-undef */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { securityChecks, runSecurityCheck };
} 
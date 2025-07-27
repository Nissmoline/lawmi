// SEO Checker Script
// Run this script to check SEO optimization

const seoChecks = {
  // Check if all required meta tags are present
  checkMetaTags: () => {
    const required = [
      'title',
      'description',
      'viewport',
      'robots',
      'og:title',
      'og:description',
      'og:image',
      'twitter:card',
      'twitter:title',
      'twitter:description'
    ];

    const missing = [];
    required.forEach(tag => {
      const element = document.querySelector(`meta[name="${tag}"], meta[property="${tag}"]`);
      if (!element) {
        missing.push(tag);
      }
    });

    return {
      passed: missing.length === 0,
      missing
    };
  },

  // Check if favicon is properly set
  checkFavicon: () => {
    const favicon = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
    return {
      passed: !!favicon,
      href: favicon?.href || 'Not found'
    };
  },

  // Check if structured data is present
  checkStructuredData: () => {
    const structuredData = document.querySelector('script[type="application/ld+json"]');
    return {
      passed: !!structuredData,
      content: structuredData?.textContent ? 'Present' : 'Not found'
    };
  },

  // Check if images have alt attributes
  checkImageAlt: () => {
    const images = document.querySelectorAll('img');
    const withoutAlt = Array.from(images).filter(img => !img.alt);
    
    return {
      passed: withoutAlt.length === 0,
      count: images.length,
      withoutAlt: withoutAlt.length
    };
  },

  // Check if headings are properly structured
  checkHeadings: () => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const h1Count = document.querySelectorAll('h1').length;
    
    return {
      passed: h1Count === 1,
      total: headings.length,
      h1Count
    };
  },

  // Check if canonical URL is set
  checkCanonical: () => {
    const canonical = document.querySelector('link[rel="canonical"]');
    return {
      passed: !!canonical,
      href: canonical?.href || 'Not found'
    };
  },

  // Check if hreflang tags are present
  checkHreflang: () => {
    const hreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');
    return {
      passed: hreflang.length > 0,
      count: hreflang.length
    };
  },

  // Check page load speed
  checkPageSpeed: () => {
    if ('performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0];
      const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
      
      return {
        passed: loadTime < 3000,
        loadTime: Math.round(loadTime),
        unit: 'ms'
      };
    }
    return { passed: false, error: 'Performance API not available' };
  }
};

// Run all checks
const runSEOCheck = () => {
  console.log('🔍 Running SEO Check...\n');
  
  Object.entries(seoChecks).forEach(([checkName, checkFn]) => {
    try {
      const result = checkFn();
      const status = result.passed ? '✅ PASS' : '❌ FAIL';
      console.log(`${status} ${checkName}:`, result);
    } catch (error) {
      console.log(`❌ ERROR ${checkName}:`, error.message);
    }
  });
  
  console.log('\n📊 SEO Check Complete');
};

// Export for use in browser console
if (typeof window !== 'undefined') {
  window.runSEOCheck = runSEOCheck;
  console.log('SEO Checker loaded. Run runSEOCheck() to check SEO.');
}

// Export for Node.js environment
/* eslint-disable no-undef */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { seoChecks, runSEOCheck };
} 
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image, 
  canonical,
  structuredData,
  hreflang = {},
  noindex = false,
  nofollow = false
}) => {
  const location = useLocation();

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update robots meta tag
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      let robotsContent = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
      if (noindex) {
        robotsContent = 'noindex, nofollow';
      } else if (nofollow) {
        robotsContent = 'index, nofollow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
      }
      metaRobots.setAttribute('content', robotsContent);
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink && canonical) {
      canonicalLink.setAttribute('href', canonical);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && description) {
      ogDescription.setAttribute('content', description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://milawyer.gr${location.pathname}`);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage && image) {
      ogImage.setAttribute('content', image);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle && title) {
      twitterTitle.setAttribute('content', title);
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription && description) {
      twitterDescription.setAttribute('content', description);
    }

    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', `https://milawyer.gr${location.pathname}`);
    }

    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage && image) {
      twitterImage.setAttribute('content', image);
    }

    // Update hreflang tags dynamically
    if (Object.keys(hreflang).length > 0) {
      // Remove existing hreflang tags
      const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');
      existingHreflang.forEach(tag => tag.remove());

      // Add new hreflang tags
      Object.entries(hreflang).forEach(([lang, url]) => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang;
        link.href = url;
        document.head.appendChild(link);
      });
    }

    // Update structured data if provided
    if (structuredData) {
      const existingScript = document.querySelector('script[data-seo-structured]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-structured', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Update page URL for analytics
    if (window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_title: title || document.title,
        page_location: `https://milawyer.gr${location.pathname}`,
        send_page_view: true,
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure'
      });
    }

    // Update breadcrumb structured data
    updateBreadcrumbStructuredData(location.pathname);

    // Scroll to top on route change
    window.scrollTo(0, 0);

  }, [title, description, keywords, image, canonical, structuredData, hreflang, noindex, nofollow, location.pathname]);

  // Function to update breadcrumb structured data
  const updateBreadcrumbStructuredData = (pathname) => {
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Αρχική",
          "item": "https://milawyer.gr/"
        }
      ]
    };

    // Add breadcrumbs based on current path
    if (pathname === '/family') {
      breadcrumbData.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Οικογενειακό Δίκαιο",
        "item": "https://milawyer.gr/family"
      });
    } else if (pathname === '/immigration') {
      breadcrumbData.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Μεταναστευτικό Δίκαιο",
        "item": "https://milawyer.gr/immigration"
      });
    } else if (pathname === '/criminal') {
      breadcrumbData.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Ποινικό Δίκαιο",
        "item": "https://milawyer.gr/criminal"
      });
    } else if (pathname === '/civil') {
      breadcrumbData.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Αστικό Δίκαιο",
        "item": "https://milawyer.gr/civil"
      });
    } else if (pathname === '/corporate') {
      breadcrumbData.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Εταιρικό Δίκαιο",
        "item": "https://milawyer.gr/corporate"
      });
    } else if (pathname === '/translations') {
      breadcrumbData.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Μεταφράσεις & Επικυρώσεις",
        "item": "https://milawyer.gr/translations"
      });
    }

    // Remove existing breadcrumb structured data
    const existingBreadcrumb = document.querySelector('script[data-seo-breadcrumb]');
    if (existingBreadcrumb) {
      existingBreadcrumb.remove();
    }

    // Add new breadcrumb structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-breadcrumb', 'true');
    script.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(script);
  };

  return null; // This component doesn't render anything
};

export default SEOHead; 
import { useEffect, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const GA_MEASUREMENT_ID = 'G-5CY4QQN1FW';
const GA_STREAM_ID = '12194715519';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image, 
  canonical,
  structuredData,
  hreflang = {},
  faqItems = [],
  noindex = false,
  nofollow = false
}) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const sanitizedFaqItems = useMemo(() => {
    if (!Array.isArray(faqItems)) {
      return [];
    }

    const stripHtml = (value) => {
      if (typeof value !== 'string') {
        return '';
      }

      return value
        .replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    };

    return faqItems
      .map((item) => {
        if (!item) {
          return null;
        }

        const question = stripHtml(item.question);
        const answer = stripHtml(item.answer);

        if (!question || !answer) {
          return null;
        }

        return {
          question,
          answer
        };
      })
      .filter(Boolean);
  }, [faqItems]);

  const updateBreadcrumbStructuredData = useCallback((pathname) => {
    const baseUrl = 'https://milawyer.gr';
    const breadcrumbMap = {
      '/family': 'family',
      '/immigration': 'immigration',
      '/criminal': 'criminal',
      '/civil': 'civil',
      '/corporate': 'corporate',
      '/translations': 'translations',
      '/golden-visa': 'goldenVisa',
      '/divorce': 'divorce',
      '/privacy': 'privacy',
      '/terms': 'terms',
      '/blog': 'blog'
    };

    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": t('breadcrumbs.home'),
          "item": `${baseUrl}/`
        }
      ]
    };

    const breadcrumbKey = breadcrumbMap[pathname];
    if (breadcrumbKey) {
      breadcrumbData.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": t(`breadcrumbs.${breadcrumbKey}`),
        "item": `${baseUrl}${pathname}`
      });
    }

    const existingBreadcrumb = document.querySelector('script[data-seo-breadcrumb]');
    if (existingBreadcrumb) {
      existingBreadcrumb.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-breadcrumb', 'true');
    script.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(script);
  }, [t]);

  const addLocalBusinessStructuredData = useCallback((pathname) => {
    const language = i18n.language || 'el';
    const baseUrl = 'https://milawyer.gr';
    const normalizedPath = pathname === '/' ? '' : pathname;

    const alternateNames = {
      el: 'Δικηγόρος Αθήνα - Μαρίνα Ιλιουσίνα | Ρωσόφωνος Δικηγόρος',
      en: 'Marina Ilyushina - Greek Lawyer in Athens',
      ru: 'Марина Илюшина - русскоязычный адвокат в Афинах'
    };

    const localizedDescription = t('seo.home.description');

    const serviceTypeMap = {
      '/': {
        el: ['Οικογενειακό Δίκαιο', 'Μεταναστευτικό Δίκαιο', 'Ποινικό Δίκαιο', 'Αστικό Δίκαιο', 'Εταιρικό Δίκαιο', 'Golden Visa', 'Μεταφράσεις Νομικών Εγγράφων'],
        en: ['Family Law', 'Immigration Law', 'Criminal Law', 'Civil Law', 'Corporate Law', 'Golden Visa', 'Legal Translations'],
        ru: ['Семейное право', 'Иммиграционное право', 'Уголовное право', 'Гражданское право', 'Корпоративное право', 'Golden Visa', 'Юридические переводы']
      },
      '/family': {
        el: ['Οικογενειακό Δίκαιο', 'Διαζύγια', 'Επιμέλεια Παιδιών', 'Διατροφές', 'Διαθήκες'],
        en: ['Family Law', 'Divorces', 'Child Custody', 'Alimony', 'Wills'],
        ru: ['Семейное право', 'Разводы', 'Опека детей', 'Алименты', 'Завещания']
      },
      '/immigration': {
        el: ['Μεταναστευτικό Δίκαιο', 'Golden Visa', 'Άδειες Διαμονής', 'Ιθαγένεια'],
        en: ['Immigration Law', 'Golden Visa', 'Residence Permits', 'Citizenship'],
        ru: ['Иммиграционное право', 'Golden Visa', 'Виды на жительство', 'Гражданство']
      },
      '/criminal': {
        el: ['Ποινικό Δίκαιο', 'Ποινική Υπεράσπιση', 'Πλημμελήματα', 'Κακουργήματα'],
        en: ['Criminal Law', 'Criminal Defense', 'Misdemeanors', 'Felonies'],
        ru: ['Уголовное право', 'Уголовная защита', 'Проступки', 'Преступления']
      },
      '/civil': {
        el: ['Αστικό Δίκαιο', 'Αγοραπωλησία Ακινήτων', 'Συμβόλαια', 'Αποζημιώσεις'],
        en: ['Civil Law', 'Property Transactions', 'Contracts', 'Compensation Claims'],
        ru: ['Гражданское право', 'Сделки с недвижимостью', 'Договоры', 'Компенсации']
      },
      '/corporate': {
        el: ['Εταιρικό Δίκαιο', 'Ίδρυση Εταιρειών', 'Εμπορικές Συμβάσεις', 'Εταιρική Διακυβέρνηση'],
        en: ['Corporate Law', 'Company Formation', 'Commercial Contracts', 'Corporate Governance'],
        ru: ['Корпоративное право', 'Создание компаний', 'Коммерческие договоры', 'Корпоративное управление']
      },
      '/translations': {
        el: ['Μεταφράσεις', 'Επικυρώσεις', 'Αποστίλ'],
        en: ['Legal Translations', 'Certifications', 'Apostille'],
        ru: ['Юридические переводы', 'Заверения', 'Апостиль']
      },
      '/golden-visa': {
        el: ['Golden Visa', 'Άδειες Διαμονής Επενδυτών', 'Επενδυτικές Υπηρεσίες'],
        en: ['Golden Visa', 'Investor Residence Permits', 'Investment Services'],
        ru: ['Golden Visa', 'ВНЖ инвестора', 'Инвестиционные услуги']
      },
      '/divorce': {
        el: ['Διαζύγια', 'Επιμέλεια Παιδιών', 'Διατροφές', 'Οικογενειακές Διαφορές'],
        en: ['Divorces', 'Child Custody', 'Alimony', 'Family Disputes'],
        ru: ['Разводы', 'Опека детей', 'Алименты', 'Семейные споры']
      }
    };

    const serviceTypes = (serviceTypeMap[pathname] && serviceTypeMap[pathname][language])
      || serviceTypeMap['/'][language];

    const localBusinessData = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "LegalService", "Attorney"],
      "@id": `${baseUrl}${normalizedPath}#legalService`,
      "name": language === 'el' ? "Μαρίνα Ιλιουσίνα - Δικηγόρος Αθήνα" : "Marina Ilyushina Law Office",
      "alternateName": alternateNames[language] || alternateNames.en,
      "description": localizedDescription.trim(),
      "url": `${baseUrl}${normalizedPath}`,
      "logo": "https://milawyer.gr/favicon.ico",
      "image": "https://milawyer.gr/images/Ilyushina.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Στουρνάρη 39",
        "addressLocality": "Αθήνα",
        "postalCode": "106 82",
        "addressCountry": "GR",
        "addressRegion": "Αττική"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+30-698-336-3775",
        "contactType": "legal services",
        "availableLanguage": ["Greek", "Russian", "English"],
        "areaServed": "GR",
        "email": "ilyushina.law@gmail.com"
      },
      "knowsLanguage": ["Greek", "Russian", "English"],
      "areaServed": {
        "@type": "Country",
        "name": "Greece"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.9849,
        "longitude": 23.7312
      },
      "sameAs": [
        "https://www.facebook.com/aquamarinegr/",
        "https://www.instagram.com/aquamarinegr/",
        "https://t.me/aquamarineru",
        "https://maps.google.com/?q=Στουρνάρη+39,+Αθήνα+106+82"
      ],
      "foundingDate": "2020",
      "numberOfEmployees": "1",
      "priceRange": "€€",
      "openingHours": "Mo-Fr 09:00-17:00",
      "currenciesAccepted": "EUR",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "hasMap": "https://maps.google.com/?q=Στουρνάρη+39,+Αθήνα+106+82"
    };

    if (serviceTypes && serviceTypes.length > 0) {
      localBusinessData.serviceType = serviceTypes;
    }

    const existingLocalBusiness = document.querySelector('script[data-seo-local-business]');
    if (existingLocalBusiness) {
      existingLocalBusiness.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-local-business', 'true');
    script.textContent = JSON.stringify(localBusinessData);
    document.head.appendChild(script);
  }, [i18n.language, t]);

  useEffect(() => {
    // Clean up all structured data scripts on route change to prevent duplication
    const cleanupStructuredData = () => {
      // Remove all SEO-related scripts
      const seoScripts = document.querySelectorAll('script[data-seo-structured], script[data-seo-faq], script[data-seo-breadcrumb], script[data-seo-local-business]');
      seoScripts.forEach(script => script.remove());
    };

    // Clean up before adding new data
    cleanupStructuredData();

    const globalKeywords = t('seo.common.keywords', { defaultValue: '' }).trim();
    const combinedKeywords = [keywords, globalKeywords]
      .map(value => (typeof value === 'string' ? value.trim() : ''))
      .filter(value => value.length > 0)
      .join(', ');
    const language = i18n.language || 'el';
    const ogLocaleMap = {
      el: 'el_GR',
      en: 'en_GB',
      ru: 'ru_RU'
    };

    document.documentElement.lang = language;

    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const trimmedDescription = description ? description.trim() : '';
    if (metaDescription && trimmedDescription) {
      metaDescription.setAttribute('content', trimmedDescription);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && combinedKeywords) {
      metaKeywords.setAttribute('content', combinedKeywords);
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
      ogDescription.setAttribute('content', description.trim());
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    const pageUrl = `https://milawyer.gr${location.pathname}`;
    if (ogUrl) {
      ogUrl.setAttribute('content', pageUrl);
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', ogLocaleMap[language] || ogLocaleMap.el);
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
      twitterDescription.setAttribute('content', description.trim());
    }

    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', pageUrl);
    }

    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage && image) {
      twitterImage.setAttribute('content', image);
    }

    // Update hreflang tags dynamically with current language
    if (Object.keys(hreflang).length > 0) {
      // Remove existing hreflang tags
      const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');
      existingHreflang.forEach(tag => tag.remove());

      // Add new hreflang tags with current language
      Object.entries(hreflang).forEach(([lang, url]) => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang;
        link.href = url;
        document.head.appendChild(link);
      });
      
      // Add current language hreflang
      const currentLang = i18n.language;
      if (hreflang[currentLang]) {
        const currentLangLink = document.createElement('link');
        currentLangLink.rel = 'alternate';
        currentLangLink.hreflang = currentLang;
        currentLangLink.href = hreflang[currentLang];
        document.head.appendChild(currentLangLink);
      }
    }

    // Update structured data if provided
    const defaultStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      "url": pageUrl,
      "name": title || document.title,
      "description": trimmedDescription || metaDescription?.getAttribute('content') || '',
      "inLanguage": language,
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://milawyer.gr/#website"
      },
      "primaryImageOfPage": image || 'https://milawyer.gr/images/Ilyushina.jpg',
      "about": {
        "@type": "Organization",
        "name": 'Marina Ilyushina Law Office',
        "url": 'https://milawyer.gr'
      }
    };

    const structuredDataPayload = structuredData || defaultStructuredData;

    const existingScript = document.querySelector('script[data-seo-structured]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-structured', 'true');
    script.textContent = JSON.stringify(structuredDataPayload);
    document.head.appendChild(script);

    // Remove existing FAQ scripts for current page to prevent duplication
    const existingFaqScripts = document.querySelectorAll(`script[data-seo-faq][data-page="${location.pathname}"]`);
    existingFaqScripts.forEach(script => script.remove());
    
    // Also remove any FAQPage structured data that might exist with same URL
    const allScripts = document.querySelectorAll('script[type="application/ld+json"]');
    allScripts.forEach(script => {
      try {
        const data = JSON.parse(script.textContent);
        if (data['@type'] === 'FAQPage' && data.url === pageUrl) {
          script.remove();
        }
      } catch {
        // Ignore parsing errors
      }
    });

    if (sanitizedFaqItems.length > 0) {
      const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "url": pageUrl,
        "mainEntity": sanitizedFaqItems.map(({ question, answer }) => ({
          "@type": "Question",
          "name": question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": answer
          }
        }))
      };

      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.setAttribute('data-seo-faq', 'true');
      faqScript.setAttribute('data-page', location.pathname); // Add page identifier
      faqScript.textContent = JSON.stringify(faqStructuredData);
      document.head.appendChild(faqScript);
    }

    // Update page URL for analytics
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: title || document.title,
        page_location: pageUrl,
        send_page_view: true,
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure',
        stream_id: GA_STREAM_ID
      });
    }

    // Update breadcrumb structured data
    updateBreadcrumbStructuredData(location.pathname);

    // Add local business structured data for Greek SEO
    addLocalBusinessStructuredData(location.pathname);

    // Scroll to top on route change
    window.scrollTo(0, 0);

  }, [title, description, keywords, image, canonical, structuredData, sanitizedFaqItems, hreflang, noindex, nofollow, location.pathname, i18n.language, t, updateBreadcrumbStructuredData, addLocalBusinessStructuredData]);
  return null; // This component doesn't render anything
};

export default SEOHead; 

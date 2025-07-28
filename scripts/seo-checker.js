#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Greek SEO Keywords for validation
const GREEK_SEO_KEYWORDS = [
  'δικηγόρος αθήνα',
  'δικηγόρος',
  'νομικές υπηρεσίες αθήνα',
  'μαρίνα ιλιούσινα',
  'οικογενειακό δίκαιο',
  'μεταναστευτικό δίκαιο',
  'ποινικό δίκαιο',
  'αστικό δίκαιο',
  'εταιρικό δίκαιο',
  'μεταφράσεις',
  'επικυρώσεις',
  'διαζύγια',
  'επιμέλεια',
  'διατροφές',
  'διαθήκες',
  'άδειες διαμονής',
  'golden visa',
  'ιθαγένεια',
  'ποινική υπεράσπιση',
  'πλημμελήματα',
  'κακουργήματα',
  'αποζημιώσεις',
  'συμβόλαια',
  'αδικοπραξίες',
  'ίδρυση εταιρειών',
  'εμπορικές συμβάσεις'
];

// Required meta tags for Greek SEO
const REQUIRED_META_TAGS = [
  'title',
  'description',
  'keywords',
  'robots',
  'language',
  'geo.region',
  'geo.placename',
  'geo.position'
];

// Required Open Graph tags
const REQUIRED_OG_TAGS = [
  'og:title',
  'og:description',
  'og:url',
  'og:image',
  'og:type',
  'og:locale'
];

// Required Twitter tags
const REQUIRED_TWITTER_TAGS = [
  'twitter:card',
  'twitter:title',
  'twitter:description',
  'twitter:url',
  'twitter:image'
];

// Required structured data types
const REQUIRED_STRUCTURED_DATA = [
  'LocalBusiness',
  'LegalService',
  'Person',
  'FAQPage'
];

function checkGreekSEO() {
  console.log('🔍 Checking Greek SEO optimization...\n');

  // Check index.html
  const indexPath = path.join(__dirname, '../index.html');
  if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    checkIndexHTML(indexContent);
  } else {
    console.log('❌ index.html not found');
  }

  // Check sitemap
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    checkSitemap(sitemapContent);
  } else {
    console.log('❌ sitemap.xml not found');
  }

  // Check robots.txt
  const robotsPath = path.join(__dirname, '../public/robots.txt');
  if (fs.existsSync(robotsPath)) {
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');
    checkRobotsTxt(robotsContent);
  } else {
    console.log('❌ robots.txt not found');
  }

  // Check SEOHead component
  const seoHeadPath = path.join(__dirname, '../src/components/SEOHead.jsx');
  if (fs.existsSync(seoHeadPath)) {
    const seoHeadContent = fs.readFileSync(seoHeadPath, 'utf8');
    checkSEOHead(seoHeadContent);
  } else {
    console.log('❌ SEOHead.jsx not found');
  }

  // Check HomePage component
  const homePagePath = path.join(__dirname, '../src/pages/HomePage.jsx');
  if (fs.existsSync(homePagePath)) {
    const homePageContent = fs.readFileSync(homePagePath, 'utf8');
    checkHomePage(homePageContent);
  } else {
    console.log('❌ HomePage.jsx not found');
  }

  // Check Greek translations
  const translationsPath = path.join(__dirname, '../src/locales/el/translations.json');
  if (fs.existsSync(translationsPath)) {
    const translationsContent = fs.readFileSync(translationsPath, 'utf8');
    checkGreekTranslations(translationsContent);
  } else {
    console.log('❌ Greek translations not found');
  }

  console.log('\n✅ Greek SEO check completed!');
}

function checkIndexHTML(content) {
  console.log('📄 Checking index.html...');

  // Check for Greek language declaration
  if (content.includes('lang="el"')) {
    console.log('✅ Greek language declaration found');
  } else {
    console.log('❌ Greek language declaration missing');
  }

  // Check for required meta tags
  REQUIRED_META_TAGS.forEach(tag => {
    if (content.includes(`name="${tag}"`) || content.includes(`name='${tag}'`)) {
      console.log(`✅ Meta tag ${tag} found`);
    } else {
      console.log(`❌ Meta tag ${tag} missing`);
    }
  });

  // Check for Open Graph tags
  REQUIRED_OG_TAGS.forEach(tag => {
    if (content.includes(`property="${tag}"`) || content.includes(`property='${tag}'`)) {
      console.log(`✅ Open Graph tag ${tag} found`);
    } else {
      console.log(`❌ Open Graph tag ${tag} missing`);
    }
  });

  // Check for Twitter tags
  REQUIRED_TWITTER_TAGS.forEach(tag => {
    if (content.includes(`property="${tag}"`) || content.includes(`property='${tag}'`)) {
      console.log(`✅ Twitter tag ${tag} found`);
    } else {
      console.log(`❌ Twitter tag ${tag} missing`);
    }
  });

  // Check for structured data
  REQUIRED_STRUCTURED_DATA.forEach(type => {
    if (content.includes(`"@type": "${type}"`)) {
      console.log(`✅ Structured data ${type} found`);
    } else {
      console.log(`❌ Structured data ${type} missing`);
    }
  });

  // Check for Greek keywords
  const foundKeywords = GREEK_SEO_KEYWORDS.filter(keyword => 
    content.toLowerCase().includes(keyword.toLowerCase())
  );
  
  console.log(`✅ Found ${foundKeywords.length}/${GREEK_SEO_KEYWORDS.length} Greek keywords`);
  
  if (foundKeywords.length < GREEK_SEO_KEYWORDS.length * 0.7) {
    console.log('⚠️  Consider adding more Greek keywords');
  }
}

function checkSitemap(content) {
  console.log('🗺️  Checking sitemap.xml...');

  // Check for Greek URLs
  const greekUrls = [
    '/family',
    '/immigration', 
    '/criminal',
    '/civil',
    '/corporate',
    '/translations',
    '/dikigoros-athina',
    '/nomikes-ypiresies',
    '/metanaftiko-dikaio',
    '/oikogeneiako-dikaio',
    '/poiniko-dikaio'
  ];

  greekUrls.forEach(url => {
    if (content.includes(url)) {
      console.log(`✅ Greek URL ${url} found in sitemap`);
    } else {
      console.log(`❌ Greek URL ${url} missing from sitemap`);
    }
  });

  // Check for hreflang tags
  if (content.includes('hreflang="el"')) {
    console.log('✅ Greek hreflang tags found');
  } else {
    console.log('❌ Greek hreflang tags missing');
  }
}

function checkRobotsTxt(content) {
  console.log('🤖 Checking robots.txt...');

  // Check for sitemap reference
  if (content.includes('Sitemap:')) {
    console.log('✅ Sitemap reference found');
  } else {
    console.log('❌ Sitemap reference missing');
  }

  // Check for Greek-specific paths
  const greekPaths = [
    '/dikigoros-athina',
    '/nomikes-ypiresies',
    '/metanaftiko-dikaio',
    '/oikogeneiako-dikaio',
    '/poiniko-dikaio'
  ];

  greekPaths.forEach(path => {
    if (content.includes(`Allow: ${path}`)) {
      console.log(`✅ Greek path ${path} allowed in robots.txt`);
    } else {
      console.log(`❌ Greek path ${path} not allowed in robots.txt`);
    }
  });
}

function checkSEOHead(content) {
  console.log('🔧 Checking SEOHead component...');

  // Check for Greek SEO functionality
  if (content.includes('addLocalBusinessStructuredData')) {
    console.log('✅ Local business structured data function found');
  } else {
    console.log('❌ Local business structured data function missing');
  }

  if (content.includes('updateBreadcrumbStructuredData')) {
    console.log('✅ Breadcrumb structured data function found');
  } else {
    console.log('❌ Breadcrumb structured data function missing');
  }

  // Check for Greek path handling
  if (content.includes('/family') && content.includes('/immigration')) {
    console.log('✅ Greek path handling found');
  } else {
    console.log('❌ Greek path handling missing');
  }
}

function checkHomePage(content) {
  console.log('🏠 Checking HomePage component...');

  // Check for SEOHead import
  if (content.includes('import SEOHead')) {
    console.log('✅ SEOHead import found');
  } else {
    console.log('❌ SEOHead import missing');
  }

  // Check for Greek keywords in content
  const foundKeywords = GREEK_SEO_KEYWORDS.filter(keyword => 
    content.toLowerCase().includes(keyword.toLowerCase())
  );
  
  console.log(`✅ Found ${foundKeywords.length}/${GREEK_SEO_KEYWORDS.length} Greek keywords in HomePage`);
  
  // Check for contact information
  if (content.includes('+30-698-336-3775')) {
    console.log('✅ Phone number found');
  } else {
    console.log('❌ Phone number missing');
  }

  if (content.includes('ilyushina.law@gmail.com')) {
    console.log('✅ Email found');
  } else {
    console.log('❌ Email missing');
  }

  if (content.includes('Φυλής 153')) {
    console.log('✅ Address found');
  } else {
    console.log('❌ Address missing');
  }
}

function checkGreekTranslations(content) {
  console.log('🇬🇷 Checking Greek translations...');

  try {
    const translations = JSON.parse(content);
    
    if (translations.seo) {
      console.log('✅ SEO translations found');
    } else {
      console.log('❌ SEO translations missing');
    }

    if (translations.keywords) {
      console.log('✅ Keywords translations found');
    } else {
      console.log('❌ Keywords translations missing');
    }

    // Check for specific service translations
    const services = ['family', 'immigration', 'criminal', 'civil', 'corporate', 'translations'];
    services.forEach(service => {
      if (translations.seo && translations.seo[service]) {
        console.log(`✅ ${service} SEO translations found`);
      } else {
        console.log(`❌ ${service} SEO translations missing`);
      }
    });

  } catch (error) {
    console.log('❌ Invalid JSON in translations file');
  }
}

// Run the check
if (import.meta.url === `file://${process.argv[1]}`) {
  checkGreekSEO();
}

export { checkGreekSEO }; 
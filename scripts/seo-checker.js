#!/usr/bin/env node

/**
 * SEO Checker Script
 * Validates SEO elements and provides recommendations
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SEO checklist items
const seoChecklist = {
  metaTags: {
    title: { required: true, maxLength: 60, description: 'Page title' },
    description: { required: true, maxLength: 160, description: 'Meta description' },
    keywords: { required: true, description: 'Meta keywords' },
    robots: { required: true, description: 'Robots meta tag' },
    canonical: { required: true, description: 'Canonical URL' }
  },
  structuredData: {
    localBusiness: { required: true, description: 'LocalBusiness schema' },
    legalService: { required: true, description: 'LegalService schema' },
    person: { required: true, description: 'Person schema' },
    faq: { required: true, description: 'FAQ schema' },
    breadcrumb: { required: true, description: 'Breadcrumb schema' }
  },
  technical: {
    sitemap: { required: true, description: 'XML sitemap' },
    robots: { required: true, description: 'robots.txt file' },
    hreflang: { required: true, description: 'Hreflang tags' },
    favicon: { required: true, description: 'Favicon files' }
  },
  content: {
    headings: { required: true, description: 'H1, H2, H3 structure' },
    images: { required: true, description: 'Alt text for images' },
    internalLinks: { required: true, description: 'Internal linking' },
    pageSpeed: { required: true, description: 'Page loading speed' }
  }
};

function checkSEO() {
  console.log('🔍 Starting SEO Check...\n');
  
  let totalChecks = 0;
  let passedChecks = 0;
  
  // Check HTML file
  const htmlPath = path.join(__dirname, '..', 'index.html');
  if (fs.existsSync(htmlPath)) {
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    console.log('📄 Checking index.html...');
    
    // Check meta tags
    Object.entries(seoChecklist.metaTags).forEach(([tag, config]) => {
      totalChecks++;
      const regex = new RegExp(`<meta[^>]*name="${tag}"[^>]*>`, 'i');
      const match = htmlContent.match(regex);
      
      if (match) {
        console.log(`  ✅ ${config.description}: Found`);
        passedChecks++;
        
        // Check length for title and description
        if (config.maxLength) {
          const contentMatch = match[0].match(/content="([^"]*)"/);
          if (contentMatch && contentMatch[1].length > config.maxLength) {
            console.log(`  ⚠️  ${config.description}: Too long (${contentMatch[1].length}/${config.maxLength} chars)`);
          }
        }
      } else {
        console.log(`  ❌ ${config.description}: Missing`);
      }
    });
    
    // Check structured data
    console.log('\n📊 Checking Structured Data...');
    Object.entries(seoChecklist.structuredData).forEach(([type, config]) => {
      totalChecks++;
      
      // Handle different schema types with proper matching
      let searchPattern;
      switch(type) {
        case 'faq':
          searchPattern = /"@type":\s*"FAQPage"/i;
          break;
        case 'breadcrumb':
          searchPattern = /"@type":\s*"BreadcrumbList"/i;
          break;
        case 'localBusiness':
          searchPattern = /"@type":\s*"LocalBusiness"/i;
          break;
        case 'legalService':
          searchPattern = /"@type":\s*"LegalService"/i;
          break;
        case 'person':
          searchPattern = /"@type":\s*"Person"/i;
          break;
        default:
          searchPattern = new RegExp(`"@type":\\s*"${type}"`, 'i');
      }
      
      const match = htmlContent.match(searchPattern);
      
      if (match) {
        console.log(`  ✅ ${config.description}: Found`);
        passedChecks++;
      } else {
        console.log(`  ❌ ${config.description}: Missing`);
      }
    });
    
    // Check hreflang
    totalChecks++;
    const hreflangCount = (htmlContent.match(/hreflang=/g) || []).length;
    if (hreflangCount >= 3) {
      console.log(`  ✅ Hreflang tags: Found ${hreflangCount} tags`);
      passedChecks++;
    } else {
      console.log(`  ❌ Hreflang tags: Only ${hreflangCount} tags found (need at least 3)`);
    }
    
  } else {
    console.log('❌ index.html not found');
  }
  
  // Check sitemap
  console.log('\n🗺️  Checking Sitemap...');
  totalChecks++;
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    console.log('  ✅ XML Sitemap: Found');
    passedChecks++;
  } else {
    console.log('  ❌ XML Sitemap: Missing');
  }
  
  // Check robots.txt
  totalChecks++;
  const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
  if (fs.existsSync(robotsPath)) {
    console.log('  ✅ robots.txt: Found');
    passedChecks++;
  } else {
    console.log('  ❌ robots.txt: Missing');
  }
  
  // Check favicon
  totalChecks++;
  const faviconPath = path.join(__dirname, '..', 'public', 'favicon.ico');
  if (fs.existsSync(faviconPath)) {
    console.log('  ✅ Favicon: Found');
    passedChecks++;
  } else {
    console.log('  ❌ Favicon: Missing');
  }
  
  // Calculate score
  const score = Math.round((passedChecks / totalChecks) * 100);
  
  console.log('\n📊 SEO Score Summary:');
  console.log(`   Total Checks: ${totalChecks}`);
  console.log(`   Passed: ${passedChecks}`);
  console.log(`   Failed: ${totalChecks - passedChecks}`);
  console.log(`   Score: ${score}%`);
  
  if (score >= 90) {
    console.log('\n🎉 Excellent SEO! Your site is well optimized.');
  } else if (score >= 70) {
    console.log('\n👍 Good SEO! Some improvements needed.');
  } else if (score >= 50) {
    console.log('\n⚠️  Average SEO. Several improvements needed.');
  } else {
    console.log('\n🚨 Poor SEO. Major improvements required.');
  }
  
  // Recommendations
  console.log('\n💡 Recommendations:');
  console.log('   1. Ensure all meta tags are present and optimized');
  console.log('   2. Add structured data for all page types');
  console.log('   3. Optimize images with proper alt text');
  console.log('   4. Improve page loading speed');
  console.log('   5. Add more internal links');
  console.log('   6. Create high-quality, keyword-rich content');
  console.log('   7. Build local citations and backlinks');
  console.log('   8. Monitor Core Web Vitals');
  
  return score;
}

// Run the SEO check
checkSEO();

export { checkSEO, seoChecklist };
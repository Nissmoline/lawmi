#!/usr/bin/env node

/**
 * Structured Data Validator Script
 * 
 * This script validates that there are no duplicate FAQPage structured data
 * on the website and checks for other SEO issues.
 */

/* eslint-env node */
/* global process */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function validateStructuredData() {
  log('🔍 Validating Structured Data...', 'cyan');
  
  const issues = [];
  const warnings = [];
  
  // Check index.html for static structured data
  const indexPath = path.join(__dirname, '../index.html');
  if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    
    // Count FAQPage occurrences in static HTML
    const faqPageMatches = indexContent.match(/"@type":\s*"FAQPage"/g);
    if (faqPageMatches && faqPageMatches.length > 1) {
      issues.push(`❌ Found ${faqPageMatches.length} FAQPage structured data in index.html`);
    } else if (faqPageMatches && faqPageMatches.length === 1) {
      log('✅ Found 1 FAQPage in static HTML (OK)', 'green');
    }
    
    // Check for other potential issues
    const scriptTags = indexContent.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>/g);
    if (scriptTags) {
      log(`📊 Found ${scriptTags.length} structured data scripts in index.html`, 'blue');
    }
  }
  
  // Check SEOHead component for potential duplication issues
  const seoHeadPath = path.join(__dirname, '../src/components/SEOHead.jsx');
  if (fs.existsSync(seoHeadPath)) {
    const seoHeadContent = fs.readFileSync(seoHeadPath, 'utf8');
    
    // Check if cleanup logic exists
    if (seoHeadContent.includes('cleanupStructuredData')) {
      log('✅ Found cleanup logic in SEOHead component', 'green');
    } else {
      warnings.push('⚠️  No cleanup logic found in SEOHead component');
    }
    
    // Check if FAQPage has unique @id
    if (seoHeadContent.includes('"@id": `${pageUrl}#faq`')) {
      log('✅ FAQPage has unique @id', 'green');
    } else {
      warnings.push('⚠️  FAQPage might not have unique @id');
    }
    
    // Check if script removal logic exists
    if (seoHeadContent.includes('data-page=')) {
      log('✅ Found page-specific script removal logic', 'green');
    } else {
      warnings.push('⚠️  No page-specific script removal logic found');
    }
  }
  
  // Check pages that use FAQ
  const pagesWithFaq = ['DivorcePage.jsx', 'GoldenVisaPage.jsx'];
  pagesWithFaq.forEach(pageName => {
    const pagePath = path.join(__dirname, `../src/pages/${pageName}`);
    if (fs.existsSync(pagePath)) {
      const pageContent = fs.readFileSync(pagePath, 'utf8');
      if (pageContent.includes('faqItems')) {
        log(`✅ ${pageName} uses FAQ items correctly`, 'green');
      }
    }
  });
  
  // Summary
  log('\n📋 VALIDATION SUMMARY:', 'bright');
  
  if (issues.length === 0) {
    log('✅ No critical issues found!', 'green');
  } else {
    log('❌ Critical issues found:', 'red');
    issues.forEach(issue => log(`   ${issue}`, 'red'));
  }
  
  if (warnings.length > 0) {
    log('⚠️  Warnings:', 'yellow');
    warnings.forEach(warning => log(`   ${warning}`, 'yellow'));
  }
  
  // Recommendations
  log('\n💡 RECOMMENDATIONS:', 'cyan');
  log('1. Deploy the updated SEOHead component', 'blue');
  log('2. Test the website with Google Rich Results Test', 'blue');
  log('3. Monitor Google Search Console for FAQPage errors', 'blue');
  log('4. Clear any cached versions of the site', 'blue');
  
  return issues.length === 0;
}

// Run validation
const isValid = validateStructuredData();
process.exit(isValid ? 0 : 1);

export { validateStructuredData };

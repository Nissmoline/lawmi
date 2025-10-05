#!/usr/bin/env node

/**
 * Analytics Checker - проверяет работу Google Analytics и GTM
 * Usage: node scripts/check-analytics.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function checkAnalytics() {
  console.log('🔍 Checking Analytics Configuration\n');
  
  // Check index.html
  const indexPath = path.join(__dirname, '..', 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    console.error('❌ index.html not found');
    return;
  }
  
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Check for GTM
  const hasGTM = indexContent.includes('GTM-');
  const hasGTMScript = indexContent.includes('googletagmanager.com/gtm.js');
  const hasGTMIframe = indexContent.includes('googletagmanager.com/ns.html');
  
  // Check for GA4
  const hasGA4Script = indexContent.includes('googletagmanager.com/gtag/js');
  
  // Check GoogleAnalytics.jsx
  const gaPath = path.join(__dirname, '..', 'src', 'components', 'GoogleAnalytics.jsx');
  let hasGA4Component = false;
  let gaMeasurementId = '';
  let gaStreamId = '';
  
  if (fs.existsSync(gaPath)) {
    const gaContent = fs.readFileSync(gaPath, 'utf8');
    hasGA4Component = true;
    
    // Extract GA IDs
    const measurementIdMatch = gaContent.match(/GA_MEASUREMENT_ID = '([^']+)'/);
    const streamIdMatch = gaContent.match(/GA_STREAM_ID = '([^']+)'/);
    
    if (measurementIdMatch) gaMeasurementId = measurementIdMatch[1];
    if (streamIdMatch) gaStreamId = streamIdMatch[1];
  }
  
  console.log('📊 Analytics Configuration:');
  console.log('─'.repeat(50));
  
  // GTM Status
  console.log('\n🏷️  Google Tag Manager (GTM):');
  if (hasGTM) {
    console.log('   ❌ GTM code found in index.html');
    console.log('   ⚠️  This may cause conflicts with GA4');
  } else {
    console.log('   ✅ No GTM code found');
  }
  
  if (hasGTMScript) {
    console.log('   ❌ GTM script tag found');
  } else {
    console.log('   ✅ No GTM script tag');
  }
  
  if (hasGTMIframe) {
    console.log('   ❌ GTM noscript iframe found');
  } else {
    console.log('   ✅ No GTM noscript iframe');
  }
  
  // GA4 Status
  console.log('\n📈 Google Analytics 4 (GA4):');
  if (hasGA4Component) {
    console.log('   ✅ GoogleAnalytics.jsx component found');
    console.log(`   📋 Measurement ID: ${gaMeasurementId}`);
    console.log(`   📋 Stream ID: ${gaStreamId}`);
  } else {
    console.log('   ❌ GoogleAnalytics.jsx component not found');
  }
  
  if (hasGA4Script) {
    console.log('   ✅ GA4 script tag found in index.html');
  } else {
    console.log('   ❌ No GA4 script tag in index.html');
  }
  
  // Recommendations
  console.log('\n💡 Recommendations:');
  console.log('─'.repeat(50));
  
  if (hasGTM && hasGA4Component) {
    console.log('   ⚠️  You have both GTM and GA4 configured');
    console.log('   🔧 Recommendation: Remove GTM, keep only GA4');
    console.log('   📝 Reason: GTM is often blocked by ad blockers');
  }
  
  if (!hasGA4Component) {
    console.log('   ❌ No GA4 component found');
    console.log('   🔧 Recommendation: Add GoogleAnalytics.jsx component');
  }
  
  if (gaMeasurementId && gaStreamId) {
    console.log('   ✅ GA4 properly configured');
    console.log('   🎯 Ready for production deployment');
  }
  
  // Test URLs
  console.log('\n🧪 Test URLs:');
  console.log('─'.repeat(50));
  if (gaMeasurementId) {
    console.log(`   📊 GA4 Script: https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`);
    console.log(`   📊 GA4 Config: https://analytics.google.com/analytics/web/#/p${gaMeasurementId}/reports`);
  }
  
  // Final Status
  console.log('\n🎯 Final Status:');
  console.log('─'.repeat(50));
  
  if (!hasGTM && hasGA4Component && gaMeasurementId) {
    console.log('   ✅ PERFECT! Clean GA4 setup without GTM conflicts');
  } else if (hasGTM && hasGA4Component) {
    console.log('   ⚠️  CONFLICT! Both GTM and GA4 configured');
  } else if (!hasGA4Component) {
    console.log('   ❌ MISSING! No GA4 configuration found');
  } else {
    console.log('   ⚠️  PARTIAL! GA4 configured but may have issues');
  }
  
  console.log('\n🚀 Next Steps:');
  if (hasGTM) {
    console.log('   1. Remove GTM code from index.html');
    console.log('   2. Deploy updated version');
    console.log('   3. Test GA4 in production');
  } else {
    console.log('   1. Deploy current version');
    console.log('   2. Test GA4 in production');
    console.log('   3. Monitor analytics data');
  }
}

// Run the check
checkAnalytics();

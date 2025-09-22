#!/usr/bin/env node

/**
 * Script to automatically update sitemap.xml with current date
 * Run this script before each deployment to keep sitemap fresh
 * 
 * Usage:
 *   node scripts/update-sitemap.js
 *   npm run seo:update
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

// Ensure we're in the correct directory
process.chdir(path.dirname(fileURLToPath(import.meta.url)));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicSitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const distSitemapPath = path.join(__dirname, '..', 'dist', 'sitemap.xml');

function updateSitemap() {
  try {
    // Check if public sitemap exists
    if (!fs.existsSync(publicSitemapPath)) {
      console.error('❌ Sitemap not found in public folder:', publicSitemapPath);
      console.error('💡 Make sure you have a sitemap.xml file in the public folder');
      process.exit(1);
    }

    // Read current sitemap from public folder with error handling
    let sitemapContent;
    try {
      sitemapContent = fs.readFileSync(publicSitemapPath, 'utf8');
    } catch (readError) {
      console.error('❌ Error reading sitemap:', readError.message);
      process.exit(1);
    }
    
    // Validate sitemap content before processing
    if (!sitemapContent || sitemapContent.trim().length === 0) {
      console.error('❌ Sitemap file is empty or invalid');
      process.exit(1);
    }
    
    // Get current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Replace all lastmod dates with current date
    const updatedContent = sitemapContent.replace(
      /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
      `<lastmod>${currentDate}</lastmod>`
    );
    
    // Check if any changes were made
    if (updatedContent === sitemapContent) {
      console.log('ℹ️  No lastmod dates found to update');
    }
    
    // Write updated sitemap to public folder with error handling
    try {
      fs.writeFileSync(publicSitemapPath, updatedContent, 'utf8');
      console.log(`✅ Sitemap updated in public folder: ${publicSitemapPath}`);
    } catch (writeError) {
      console.error('❌ Error writing to public sitemap:', writeError.message);
      process.exit(1);
    }
    
    // Also update dist folder if it exists
    if (fs.existsSync(distSitemapPath)) {
      try {
        fs.writeFileSync(distSitemapPath, updatedContent, 'utf8');
        console.log(`✅ Sitemap updated in dist folder: ${distSitemapPath}`);
      } catch (distWriteError) {
        console.error('⚠️  Warning: Could not update dist sitemap:', distWriteError.message);
        // Don't exit, just warn
      }
    }
    
    console.log(`📅 Updated with date: ${currentDate}`);
    
    // Validate sitemap
    validateSitemap(updatedContent);
    
  } catch (error) {
    console.error('❌ Unexpected error updating sitemap:', error.message);
    console.error('Stack trace:', error.stack);
    process.exit(1);
  }
}

function validateSitemap(content) {
  try {
    // Check if sitemap has required elements
    const hasUrlset = content.includes('<urlset');
    const hasUrls = (content.match(/<url>/g) || []).length;
    const hasLastmod = (content.match(/<lastmod>/g) || []).length;
    
    console.log('\n📊 Sitemap Validation:');
    console.log(`   ✅ URLset element: ${hasUrlset ? 'Found' : 'Missing'}`);
    console.log(`   ✅ URLs count: ${hasUrls}`);
    console.log(`   ✅ Lastmod tags: ${hasLastmod}`);
    
    if (hasUrlset && hasUrls > 0 && hasLastmod > 0) {
      console.log('   🎉 Sitemap is valid and ready for search engines!');
    } else {
      console.log('   ⚠️  Sitemap may have issues - please check manually');
    }
    
  } catch (error) {
    console.log('   ⚠️  Could not validate sitemap:', error.message);
  }
}

// Run the update
updateSitemap();

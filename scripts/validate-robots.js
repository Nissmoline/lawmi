#!/usr/bin/env node

/**
 * Simple robots.txt validator
 * Checks for common syntax errors and validates structure
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function validateRobotsTxt(filePath) {
  try {
    console.log(`🔍 Validating robots.txt: ${filePath}`);
    
    if (!fs.existsSync(filePath)) {
      console.error('❌ robots.txt file not found');
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    let errors = [];
    let warnings = [];
    let hasUserAgent = false;
    let hasSitemap = false;
    let lineNumber = 0;
    
    // Valid directives
    const validDirectives = [
      'User-agent', 'Allow', 'Disallow', 'Sitemap', 'Crawl-delay',
      'Host', 'Clean-param'
    ];
    
    // Invalid/experimental directives that cause validation errors
    const invalidDirectives = [
      'Content-signal', 'content-signal', 'X-', 'x-'
    ];
    
    for (let line of lines) {
      lineNumber++;
      line = line.trim();
      
      // Skip empty lines and comments
      if (!line || line.startsWith('#')) {
        continue;
      }
      
      // Check for invalid directives
      for (let invalid of invalidDirectives) {
        if (line.toLowerCase().startsWith(invalid.toLowerCase())) {
          errors.push(`Line ${lineNumber}: Invalid directive "${invalid}" - not supported by standard robots.txt`);
        }
      }
      
      // Parse directive
      const colonIndex = line.indexOf(':');
      if (colonIndex === -1) {
        errors.push(`Line ${lineNumber}: Invalid syntax - missing colon`);
        continue;
      }
      
      const directive = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      
      // Check if directive is valid
      if (!validDirectives.includes(directive)) {
        warnings.push(`Line ${lineNumber}: Unknown directive "${directive}" - may not be supported`);
      }
      
      // Check specific directives
      if (directive === 'User-agent') {
        hasUserAgent = true;
        if (!value || value === '') {
          errors.push(`Line ${lineNumber}: User-agent directive requires a value`);
        }
      }
      
      if (directive === 'Sitemap') {
        hasSitemap = true;
        if (!value.startsWith('http')) {
          errors.push(`Line ${lineNumber}: Sitemap URL should be absolute (starting with http)`);
        }
      }
      
      if (directive === 'Disallow' && value && !value.startsWith('/') && value !== '*') {
        warnings.push(`Line ${lineNumber}: Disallow path should start with "/" or be "*"`);
      }
      
      if (directive === 'Allow' && value && !value.startsWith('/') && value !== '*') {
        warnings.push(`Line ${lineNumber}: Allow path should start with "/" or be "*"`);
      }
      
      if (directive === 'Crawl-delay') {
        const delay = parseInt(value);
        if (isNaN(delay) || delay < 0) {
          errors.push(`Line ${lineNumber}: Crawl-delay should be a positive number`);
        }
      }
    }
    
    // Check for required elements
    if (!hasUserAgent) {
      warnings.push('No User-agent directive found - robots.txt may not work properly');
    }
    
    if (!hasSitemap) {
      warnings.push('No Sitemap directive found - consider adding your sitemap URL');
    }
    
    // Report results
    console.log('\n📊 Validation Results:');
    
    if (errors.length === 0) {
      console.log('✅ No critical errors found!');
    } else {
      console.log(`❌ ${errors.length} error(s) found:`);
      errors.forEach(error => console.log(`   • ${error}`));
    }
    
    if (warnings.length > 0) {
      console.log(`⚠️  ${warnings.length} warning(s):`);
      warnings.forEach(warning => console.log(`   • ${warning}`));
    }
    
    // Overall status
    if (errors.length === 0) {
      console.log('\n🎉 robots.txt is valid and ready for search engines!');
      return true;
    } else {
      console.log('\n💥 robots.txt has errors and needs to be fixed before deployment.');
      return false;
    }
    
  } catch (error) {
    console.error('❌ Error validating robots.txt:', error.message);
    return false;
  }
}

// Validate both public and dist versions
const publicPath = path.join(__dirname, '..', 'public', 'robots.txt');
const distPath = path.join(__dirname, '..', 'dist', 'robots.txt');

console.log('🤖 robots.txt Validator\n');

const publicValid = validateRobotsTxt(publicPath);

if (fs.existsSync(distPath)) {
  console.log('\n' + '='.repeat(50) + '\n');
  validateRobotsTxt(distPath);
}

if (!publicValid) {
  process.exit(1);
}

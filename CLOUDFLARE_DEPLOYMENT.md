# Cloudflare Pages Deployment Guide

## Overview
This guide covers deploying the MiLawyer React application to Cloudflare Pages with optimal performance and security settings.

## Prerequisites
- Cloudflare account
- GitHub repository connected to Cloudflare Pages
- Node.js 18+ for local builds

## Files Added for Cloudflare Deployment

### 1. `_headers`
- Security headers for all routes
- Cache control for static assets
- CSP, HSTS, and other security policies

### 2. `_redirects`
- SPA routing configuration
- All routes redirect to index.html with 200 status
- Custom redirects can be added here

### 3. `wrangler.toml`
- Cloudflare Wrangler configuration
- Build settings and environment variables
- Production and staging environments

### 4. `.cloudflare/pages.json`
- Pages-specific configuration
- Route-based headers and caching rules

## Deployment Steps

### Option 1: Cloudflare Dashboard (Recommended)

1. **Connect Repository**
   - Go to Cloudflare Dashboard → Pages
   - Click "Create a project"
   - Connect your GitHub repository

2. **Configure Build Settings**
   ```
   Build command: npm run build
   Build output directory: dist
   Root directory: / (leave empty)
   ```

3. **Environment Variables** (if needed)
   - Add any environment variables in the Cloudflare dashboard
   - Example: `NODE_VERSION=18`

4. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will automatically build and deploy

### Option 2: Wrangler CLI

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Deploy**
   ```bash
   npm run build:cloudflare
   wrangler pages deploy dist
   ```

## Build Configuration

### Package.json Scripts
- `npm run build` - Standard Vite build
- `npm run build:cloudflare` - Build with Cloudflare-specific files

### Vite Configuration
- Optimized for production builds
- Security headers enabled
- Asset optimization and minification

## Performance Optimizations

### Caching Strategy
- Static assets: 1 year cache with immutable
- HTML: No cache (always fresh)
- JS/CSS: 1 year cache with immutable

### Security Headers
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Content-Security-Policy: Strict CSP
- HSTS: 1 year with preload

## Custom Domain Setup

1. **Add Custom Domain**
   - Go to Pages project settings
   - Add custom domain
   - Update DNS records as instructed

2. **SSL/TLS Settings**
   - Set to "Full (strict)" for maximum security
   - Enable HSTS in Cloudflare dashboard

## Monitoring and Analytics

### Cloudflare Analytics
- Enable Web Analytics in Cloudflare dashboard
- Monitor performance metrics
- Track user behavior

### Error Monitoring
- Set up error tracking (e.g., Sentry)
- Monitor 404s and other errors
- Use Cloudflare's error logs

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (use 18+)
   - Verify all dependencies are installed
   - Check build logs in Cloudflare dashboard

2. **Routing Issues**
   - Ensure `_redirects` file is in dist folder
   - Verify SPA routing is working
   - Check for conflicting redirects

3. **Asset Loading**
   - Verify asset paths are correct
   - Check if assets are being cached properly
   - Ensure CDN is serving assets

### Debug Commands
```bash
# Local build test
npm run build:cloudflare

# Check dist folder contents
ls -la dist/

# Test local preview
npm run preview
```

## Security Checklist

- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] CSP policy implemented
- [ ] HSTS enabled
- [ ] No sensitive data in build
- [ ] Environment variables secured
- [ ] Dependencies updated

## Performance Checklist

- [ ] Assets optimized and compressed
- [ ] Caching headers set correctly
- [ ] Images optimized
- [ ] Code splitting implemented
- [ ] Bundle size optimized
- [ ] CDN enabled

## Maintenance

### Regular Tasks
1. Update dependencies monthly
2. Monitor performance metrics
3. Review security headers
4. Update SSL certificates (automatic with Cloudflare)
5. Backup configuration files

### Updates
1. Test locally with `npm run build:cloudflare`
2. Deploy to staging first
3. Monitor for issues
4. Deploy to production

## Support

For Cloudflare-specific issues:
- Cloudflare Documentation: https://developers.cloudflare.com/pages/
- Community Forum: https://community.cloudflare.com/
- Support: Available in Cloudflare dashboard 
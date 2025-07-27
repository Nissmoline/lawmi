# Image Optimization Guidelines

## Recommended Image Formats

### For Photos (Photographs)
- **WebP** (primary) - Best compression, modern browsers
- **JPEG** (fallback) - Good compression, universal support
- **AVIF** (future) - Best compression, limited support

### For Icons and Graphics
- **SVG** (primary) - Scalable, small file size
- **PNG** (fallback) - Lossless, good for graphics with transparency

## Image Sizes

### Hero Images
- Desktop: 1920x1080px
- Tablet: 1024x768px
- Mobile: 768x1024px

### Service Icons
- Desktop: 256x256px
- Mobile: 128x128px

### Thumbnails
- Desktop: 400x300px
- Mobile: 300x225px

## Optimization Commands

### Using ImageOptim (Mac)
```bash
# Install ImageOptim
brew install --cask imageoptim

# Optimize all images in folder
imageoptim /path/to/images/
```

### Using Squoosh (Web)
1. Go to https://squoosh.app/
2. Upload images
3. Choose format and quality
4. Download optimized images

### Using Sharp (Node.js)
```javascript
const sharp = require('sharp');

sharp('input.jpg')
  .webp({ quality: 80 })
  .toFile('output.webp');
```

## Current Images

### Optimized Images
- `main.jpg` - Hero image (1920x1080)
- `famaly.png` - Family law icon (256x256)
- `immigration.png` - Immigration law icon (256x256)
- `criminal.png` - Criminal law icon (256x256)
- `civil.png` - Civil law icon (256x256)
- `corporate.png` - Corporate law icon (256x256)
- `translate.png` - Translation icon (256x256)

### To Do
- [ ] Convert PNG icons to SVG
- [ ] Optimize hero image (main.jpg)
- [ ] Create WebP versions
- [ ] Add responsive image sizes
- [ ] Implement lazy loading

## Performance Tips

1. **Use appropriate formats**
   - WebP for photos
   - SVG for icons
   - PNG for graphics with transparency

2. **Optimize file sizes**
   - Compress images without losing quality
   - Use progressive JPEGs
   - Minimize PNG files

3. **Implement responsive images**
   - Use `srcset` and `sizes` attributes
   - Provide multiple sizes for different screens

4. **Lazy load images**
   - Use `loading="lazy"` attribute
   - Implement intersection observer

5. **Cache images**
   - Use service worker for caching
   - Set appropriate cache headers 
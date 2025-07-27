import React, { useState, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false,
  sizes = '100vw',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Generate WebP src if supported
  const generateWebPSrc = (originalSrc) => {
    if (originalSrc.endsWith('.jpg') || originalSrc.endsWith('.jpeg')) {
      return originalSrc.replace(/\.(jpg|jpeg)$/i, '.webp');
    }
    if (originalSrc.endsWith('.png')) {
      return originalSrc.replace(/\.png$/i, '.webp');
    }
    return originalSrc;
  };

  const webpSrc = generateWebPSrc(src);

  useEffect(() => {
    // Preload critical images
    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setError(true);
    }
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  if (error) {
    return (
      <div 
        className={`image-error ${className}`}
        style={{ 
          width: width || '100%', 
          height: height || '200px',
          backgroundColor: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#999'
        }}
        {...props}
      >
        {alt || 'Image'}
      </div>
    );
  }

  return (
    <picture>
      {/* WebP format for modern browsers */}
      <source 
        srcSet={webpSrc} 
        type="image/webp" 
        sizes={sizes}
      />
      
      {/* Fallback to original format */}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'loaded' : ''}`}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage; 
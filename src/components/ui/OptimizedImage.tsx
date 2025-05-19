
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  sizes?: string;
}

/**
 * OptimizedImage component for SEO and performance optimized images
 * Supports lazy loading, WebP format detection, and appropriate sizing
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  sizes = '100vw'
}) => {
  const [supportsWebP, setSupportsWebP] = useState<boolean | null>(null);
  
  // Check WebP support
  useEffect(() => {
    const checkWebP = async () => {
      if (supportsWebP !== null) return;
      
      const webPSupport = document.createElement('canvas')
        .toDataURL('image/webp')
        .indexOf('data:image/webp') === 0;
        
      setSupportsWebP(webPSupport);
    };
    
    checkWebP();
  }, [supportsWebP]);

  // Function to get WebP version if supported
  const getOptimizedSrc = () => {
    // If WebP is supported and the original is not already WebP
    if (supportsWebP && src && !src.endsWith('.webp')) {
      // For external images or images that don't have specific handling
      return src;
    }
    
    // Fallback to original
    return src;
  };

  // While determining WebP support, render nothing to prevent layout shifts
  if (supportsWebP === null) {
    return <div className={`${className} bg-gray-100`} style={{ width, height }}></div>;
  }

  return (
    <img 
      src={getOptimizedSrc()}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      sizes={sizes}
    />
  );
};

export default OptimizedImage;

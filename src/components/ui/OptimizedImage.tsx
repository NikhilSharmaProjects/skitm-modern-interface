
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  aspectRatio?: string;
}

/**
 * Enhanced OptimizedImage component for SEO and performance
 * Features: WebP/AVIF support, responsive images, lazy loading, proper aspect ratios
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  sizes = '100vw',
  aspectRatio
}) => {
  const [supportsModernFormats, setSupportsModernFormats] = useState<{
    webp: boolean;
    avif: boolean;
  } | null>(null);
  
  // Check modern format support
  useEffect(() => {
    const checkFormats = async () => {
      if (supportsModernFormats !== null) return;
      
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      
      const webpSupport = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      
      // Check AVIF support
      const avifSupport = await new Promise<boolean>((resolve) => {
        const avifImg = new Image();
        avifImg.onload = () => resolve(true);
        avifImg.onerror = () => resolve(false);
        avifImg.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
      });
      
      setSupportsModernFormats({ webp: webpSupport, avif: await avifSupport });
    };
    
    checkFormats();
  }, [supportsModernFormats]);

  // Generate srcSet for responsive images
  const generateSrcSet = (baseSrc: string) => {
    if (!baseSrc.startsWith('/') || baseSrc.includes('http')) return baseSrc;
    
    // For local images, generate different sizes
    const ext = baseSrc.substring(baseSrc.lastIndexOf('.'));
    const nameWithoutExt = baseSrc.substring(0, baseSrc.lastIndexOf('.'));
    
    return [
      `${baseSrc} 1x`,
      `${nameWithoutExt}@2x${ext} 2x`
    ].join(', ');
  };

  // Get optimized source based on format support
  const getOptimizedSrc = () => {
    if (!supportsModernFormats) return src;
    
    const { webp, avif } = supportsModernFormats;
    
    // For external URLs, return as-is
    if (src.includes('http') || src.includes('//')) return src;
    
    // For local images, try to use modern formats
    if (avif && !src.endsWith('.avif')) {
      const avifSrc = src.replace(/\.(jpe?g|png|webp)$/i, '.avif');
      return avifSrc;
    }
    
    if (webp && !src.endsWith('.webp') && !src.endsWith('.avif')) {
      const webpSrc = src.replace(/\.(jpe?g|png)$/i, '.webp');
      return webpSrc;
    }
    
    return src;
  };

  // Show placeholder while loading format support
  if (supportsModernFormats === null) {
    return (
      <div 
        className={`${className} bg-muted animate-pulse`} 
        style={{ 
          width, 
          height,
          aspectRatio: aspectRatio || (width && height ? `${width}/${height}` : undefined)
        }}
        aria-label={`Loading ${alt}`}
      />
    );
  }

  const optimizedSrc = getOptimizedSrc();
  const srcSet = generateSrcSet(optimizedSrc);

  return (
    <picture>
      {/* Modern format sources */}
      {supportsModernFormats?.avif && !src.includes('http') && (
        <source 
          srcSet={src.replace(/\.(jpe?g|png|webp)$/i, '.avif')}
          type="image/avif"
          sizes={sizes}
        />
      )}
      {supportsModernFormats?.webp && !src.includes('http') && !src.endsWith('.avif') && (
        <source 
          srcSet={src.replace(/\.(jpe?g|png)$/i, '.webp')}
          type="image/webp"
          sizes={sizes}
        />
      )}
      
      {/* Fallback image */}
      <img 
        src={optimizedSrc}
        srcSet={srcSet}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        sizes={sizes}
        style={{
          aspectRatio: aspectRatio || (width && height ? `${width}/${height}` : undefined),
          objectFit: 'cover'
        }}
        onError={(e) => {
          // Fallback to original if optimized version fails
          const target = e.target as HTMLImageElement;
          if (target.src !== src) {
            target.src = src;
          }
        }}
      />
    </picture>
  );
};

export default OptimizedImage;

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  aspectRatio?: string;
}

/**
 * Generates srcset for responsive images with WebP support
 * Uses Lovable's image CDN capabilities for optimization
 */
function generateSrcSet(src: string, widths: number[], format: 'webp' | 'original' = 'original') {
  return widths
    .map(w => {
      const separator = src.includes('?') ? '&' : '?';
      const formatParam = format === 'webp' ? '&fm=webp' : '';
      return `${src}${separator}w=${w}&q=80${formatParam} ${w}w`;
    })
    .join(', ');
}

export function ResponsiveImage({
  src,
  alt,
  className,
  priority = false,
  sizes = '100vw',
  aspectRatio,
}: ResponsiveImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Common breakpoint widths for srcset
  const widths = [320, 480, 640, 768, 1024, 1280, 1536, 1920];

  // Generate srcsets for WebP and fallback
  const webpSrcSet = generateSrcSet(src, widths, 'webp');
  const fallbackSrcSet = generateSrcSet(src, widths, 'original');

  // Default sizes attribute for responsive behavior
  const defaultSizes = '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px';

  const handleLoad = () => setImageLoaded(true);
  const handleError = () => setImageError(true);

  return (
    <picture className={cn('block', aspectRatio && 'relative')}>
      {/* WebP source for modern browsers */}
      <source
        type="image/webp"
        srcSet={webpSrcSet}
        sizes={sizes || defaultSizes}
      />
      
      {/* Fallback for browsers without WebP support */}
      <source
        srcSet={fallbackSrcSet}
        sizes={sizes || defaultSizes}
      />
      
      {/* Base img element */}
      <img
        src={src}
        alt={alt}
        className={cn(
          'w-full h-full transition-opacity duration-300',
          !imageLoaded && !priority && 'opacity-0',
          imageLoaded && 'opacity-100',
          className
        )}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          objectFit: 'cover',
          contentVisibility: priority ? 'visible' : 'auto',
        }}
      />
      
      {/* Skeleton placeholder while loading */}
      {!imageLoaded && !priority && !imageError && (
        <div 
          className="absolute inset-0 bg-muted animate-pulse"
          aria-hidden="true"
        />
      )}
    </picture>
  );
}

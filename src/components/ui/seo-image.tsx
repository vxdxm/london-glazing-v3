import React from 'react';
import { OptimizedLazyImage } from './optimized-lazy-image';

interface SEOImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  aspectRatio?: number;
  priority?: boolean;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

/**
 * SEO-optimized image component with automatic lazy loading,
 * proper sizing attributes, and enhanced alt text
 */
export function SEOImage({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  aspectRatio,
  priority = false,
  objectFit = "cover",
}: SEOImageProps) {
  // Enhanced alt text for better SEO
  const enhancedAlt = alt.includes('secondary glazing') 
    ? alt 
    : `${alt} - Professional secondary glazing installation by London specialists`;

  return (
    <OptimizedLazyImage
      src={src}
      alt={enhancedAlt}
      width={width}
      height={height}
      className={className}
      aspectRatio={aspectRatio}
      priority={priority}
      objectFit={objectFit}
    />
  );
}
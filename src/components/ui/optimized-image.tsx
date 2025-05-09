
import React from 'react';
import { AspectRatio } from './aspect-ratio';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  aspectRatio?: number;
  priority?: boolean;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  lazyBoundary?: string;
  onError?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  aspectRatio,
  priority = false,
  objectFit = "cover",
  lazyBoundary = "200px",
  onError,
}: OptimizedImageProps) {
  // Add query params to optimize CDN delivery if src is a URL
  const optimizedSrc = src.startsWith('http') && !src.includes('?') 
    ? `${src}?auto=format,compress&q=80` 
    : src;
  
  const imgStyle = {
    objectFit,
    // Add will-change to optimize GPU rendering for animations
    willChange: 'transform',
  } as React.CSSProperties;
  
  // Fix TypeScript error by explicitly casting loading to appropriate type
  const imgProps = {
    src: optimizedSrc,
    alt,
    className: cn("w-full h-full", className),
    style: imgStyle,
    loading: priority ? ("eager" as "eager") : ("lazy" as "lazy"),
    decoding: "async" as const,
    width,
    height,
    onError,
    // Use lowercase fetchpriority as a data attribute instead
    "data-fetchpriority": priority ? "high" : "auto",
  };

  if (aspectRatio) {
    return (
      <AspectRatio ratio={aspectRatio} className={className}>
        <img {...imgProps} />
      </AspectRatio>
    );
  }

  return <img {...imgProps} />;
}

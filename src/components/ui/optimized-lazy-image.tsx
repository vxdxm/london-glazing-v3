
import React, { useState } from 'react';
import { AspectRatio } from './aspect-ratio';
import { cn } from '@/lib/utils';

interface OptimizedLazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  aspectRatio?: number;
  priority?: boolean;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedLazyImage({
  src,
  alt,
  width,
  height,
  className,
  aspectRatio,
  priority = false,
  objectFit = "cover",
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y1ZjVmNSIvPjwvc3ZnPg==",
  onLoad,
  onError,
}: OptimizedLazyImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleLoad = () => {
    setImageLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setImageError(true);
    onError?.();
  };

  const imgStyle = {
    objectFit,
    transition: 'opacity 0.3s ease-in-out',
    opacity: imageLoaded ? 1 : 0,
  } as React.CSSProperties;

  const imgProps = {
    src: imageError ? placeholder : src,
    alt,
    className: cn("w-full h-full", className),
    style: imgStyle,
    loading: priority ? "eager" as const : "lazy" as const,
    decoding: "async" as const,
    width,
    height,
    onLoad: handleLoad,
    onError: handleError,
  };

  if (aspectRatio) {
    return (
      <AspectRatio ratio={aspectRatio} className={cn("relative overflow-hidden", className)}>
        {!imageLoaded && (
          <div 
            className="absolute inset-0 bg-gray-200 animate-pulse"
            style={{ backgroundImage: `url(${placeholder})` }}
          />
        )}
        <img {...imgProps} />
      </AspectRatio>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {!imageLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ backgroundImage: `url(${placeholder})` }}
        />
      )}
      <img {...imgProps} />
    </div>
  );
}


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
}: OptimizedImageProps) {
  const imgStyle = {
    objectFit,
  } as React.CSSProperties;
  
  const imgProps = {
    src,
    alt,
    className: cn("w-full h-full", className),
    style: imgStyle,
    loading: priority ? "eager" : "lazy" as "eager" | "lazy", // Add proper type assertion here
    decoding: "async" as const,
    width,
    height,
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

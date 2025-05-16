
import React from 'react';
import { AspectRatio } from './aspect-ratio';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
  className?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  priority?: boolean;
  onError?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  aspectRatio = 16/9,
  className,
  objectFit = 'cover',
  priority = false,
  onError
}) => {
  const imgClasses = cn(
    'w-full h-full',
    objectFit === 'cover' && 'object-cover',
    objectFit === 'contain' && 'object-contain',
    objectFit === 'fill' && 'object-fill',
    objectFit === 'none' && 'object-none',
    objectFit === 'scale-down' && 'object-scale-down',
    className
  );

  if (aspectRatio) {
    return (
      <AspectRatio ratio={aspectRatio}>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={imgClasses}
          loading={priority ? "eager" : "lazy"}
          onError={onError}
        />
      </AspectRatio>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(imgClasses, 'block')}
      loading={priority ? "eager" : "lazy"}
      onError={onError}
    />
  );
};

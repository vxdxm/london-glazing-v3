/**
 * SEO Performance utilities for Core Web Vitals optimization
 */

export const preloadCriticalImages = (imageUrls: string[]) => {
  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

export const generateImageSizes = (baseWidth: number) => {
  return `(max-width: 768px) ${Math.floor(baseWidth * 0.8)}px, 
          (max-width: 1024px) ${Math.floor(baseWidth * 0.9)}px, 
          ${baseWidth}px`;
};

export const optimizeImageLoading = {
  // Critical images should load eagerly
  hero: { loading: 'eager' as const, fetchpriority: 'high' },
  // Above-the-fold images
  aboveTheFold: { loading: 'eager' as const, fetchpriority: 'auto' },
  // Below-the-fold images
  belowTheFold: { loading: 'lazy' as const, fetchpriority: 'auto' },
};

export const createImagePreloadHints = (images: Array<{src: string, type?: string}>) => {
  return images.map(({ src, type = 'image/jpeg' }) => ({
    rel: 'preload',
    as: 'image',
    href: src,
    type,
  }));
};

export const generateResponsiveImageSrcSet = (baseSrc: string, sizes: number[] = [400, 800, 1200]) => {
  return sizes
    .map(size => `${baseSrc}?w=${size}&q=80 ${size}w`)
    .join(', ');
};
/**
 * Performance monitoring utilities for Core Web Vitals
 */

export const measureCLS = () => {
  if ('LayoutShift' in window) {
    let cls = 0;
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          cls += (entry as any).value;
        }
      }
    }).observe({ type: 'layout-shift', buffered: true });
    return cls;
  }
  return null;
};

export const measureLCP = () => {
  return new Promise((resolve) => {
    if ('LargestContentfulPaint' in window) {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        resolve((lastEntry as any).startTime);
      }).observe({ type: 'largest-contentful-paint', buffered: true });
    } else {
      resolve(null);
    }
  });
};

export const measureFID = () => {
  return new Promise((resolve) => {
    if ('FirstInputDelay' in window) {
      new PerformanceObserver((list) => {
        const firstInput = list.getEntries()[0];
        resolve((firstInput as any).processingStart - (firstInput as any).startTime);
      }).observe({ type: 'first-input', buffered: true });
    } else {
      resolve(null);
    }
  });
};

export const reportWebVitals = (metric: any) => {
  console.log(`[Web Vitals] ${metric.name}: ${metric.value}`);
  
  // You can send metrics to analytics here
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
};

export const optimizeForCoreWebVitals = () => {
  // Prevent layout shifts
  document.addEventListener('DOMContentLoaded', () => {
    // Add size attributes to images without them
    const images = document.querySelectorAll('img:not([width]):not([height])');
    images.forEach((img) => {
      const imgElement = img as HTMLImageElement;
      if (imgElement.naturalWidth && imgElement.naturalHeight) {
        imgElement.width = imgElement.naturalWidth;
        imgElement.height = imgElement.naturalHeight;
      }
    });
  });

  // Preload critical resources
  const preloadCriticalResources = () => {
    const criticalImages = [
      '/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg',
      '/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  };

  preloadCriticalResources();
};

import { useEffect } from 'react';

export function useScrollBehavior() {
  useEffect(() => {
    // Check if browser supports IntersectionObserver
    if ('IntersectionObserver' in window) {
      // Add logging to track scroll issues
      console.log('ScrollBehavior: Setting up intersection observer');
      
      // Create observer for header overlap detection
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // When an element with data-scroll-padding is intersecting viewport
            if (entry.isIntersecting) {
              const element = entry.target;
              console.log('ScrollBehavior: Element visible:', element);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      // Observe all elements that might be impacted by header overlap
      document.querySelectorAll('[data-scroll-padding]').forEach((el) => {
        observer.observe(el);
      });
      
      return () => {
        observer.disconnect();
      };
    } else {
      // Fallback for browsers without IntersectionObserver
      console.log('ScrollBehavior: Browser does not support IntersectionObserver');
    }
    
    // Detect iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      console.log('ScrollBehavior: iOS device detected');
      // Add iOS specific fixes
      document.documentElement.classList.add('ios-device');
    }
    
    // Log viewport dimensions
    const logViewportSize = () => {
      console.log(`ScrollBehavior: Viewport size: ${window.innerWidth}x${window.innerHeight}`);
    };
    
    logViewportSize();
    window.addEventListener('resize', logViewportSize);
    
    return () => {
      window.removeEventListener('resize', logViewportSize);
    };
  }, []);
}

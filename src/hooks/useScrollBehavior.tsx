
import { useEffect, useState } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

export const useScrollBehavior = (viewHeight: number) => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 });
  const [showContent, setShowContent] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  const handleScroll = () => {
    // Only execute if window is defined (browser environment)
    if (typeof window !== 'undefined') {
      const position = { x: window.scrollX, y: window.scrollY };
      setScrollPosition(position);

      // Determine scroll direction
      if (position.y > lastScrollTop) {
        setScrollDirection('down');
      } else if (position.y < lastScrollTop) {
        setScrollDirection('up');
      }

      setLastScrollTop(position.y <= 0 ? 0 : position.y);

      // Show content when scrolled down enough
      if (position.y > viewHeight) {
        setShowContent(true);
      } else {
        setShowContent(false);
      }
    }
  };

  // Detect iOS device to handle body fixed positioning issues
  const isIOS = () => {
    if (typeof window !== 'undefined' && window.navigator) {
      return /iPad|iPhone|iPod/.test(window.navigator.userAgent) && 
             !(window as any).MSStream; // Cast window to any to avoid TypeScript errors
    }
    return false;
  };

  useEffect(() => {
    // Only add event listener if window is defined (browser environment)
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
    
    // Return a no-op cleanup function when not in browser environment
    return () => {};
  }, [lastScrollTop, viewHeight]);

  return { scrollPosition, showContent, scrollDirection, isIOS: isIOS() };
};

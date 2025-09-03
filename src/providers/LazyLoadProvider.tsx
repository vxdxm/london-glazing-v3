
import React, { createContext, useContext, ReactNode, useRef, useMemo } from 'react';

interface LazyLoadContextType {
  isIntersecting: (element: HTMLElement) => boolean;
  observeElement: (element: HTMLElement, callback: IntersectionObserverCallback) => void;
  unobserveElement: (element: HTMLElement) => void;
}

const LazyLoadContext = createContext<LazyLoadContextType | undefined>(undefined);

export const useLazyLoad = () => {
  const context = useContext(LazyLoadContext);
  if (context === undefined) {
    throw new Error('useLazyLoad must be used within a LazyLoadProvider');
  }
  return context;
};

export const LazyLoadProvider = ({ children }: { children: ReactNode }) => {
  // Safety check for React hooks during hot reload
  if (typeof React === 'undefined' || !React.useRef) {
    return <>{children}</>;
  }
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsMap = useRef(new Map<HTMLElement, IntersectionObserverCallback>());
  
  // Use requestIdleCallback for non-critical operations if available
  const scheduleCallback = 
    typeof window !== 'undefined' && 'requestIdleCallback' in window
    ? window.requestIdleCallback
    : (cb: () => void) => setTimeout(cb, 1);

  // Initialize the observer only once when needed
  const getObserver = () => {
    if (!observerRef.current && typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const callback = elementsMap.current.get(entry.target as HTMLElement);
            if (callback) {
              // Use requestAnimationFrame for smoother animations
              if (entry.isIntersecting) {
                window.requestAnimationFrame(() => {
                  callback([entry], observerRef.current!);
                });
              } else {
                callback([entry], observerRef.current!);
              }
            }
          });
        },
        {
          rootMargin: '200px 0px',
          threshold: 0.01,
        }
      );
    }
    return observerRef.current;
  };

  const value = useMemo(
    () => ({
      isIntersecting: (element: HTMLElement) => {
        if (!('IntersectionObserver' in window)) {
          return true;
        }
        
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
      },
      observeElement: (element: HTMLElement, callback: IntersectionObserverCallback) => {
        if (!('IntersectionObserver' in window)) {
          // Fix the type issue by creating a proper IntersectionObserverEntry
          const mockEntry = {
            isIntersecting: true,
            target: element,
            boundingClientRect: element.getBoundingClientRect(),
            intersectionRatio: 1,
            intersectionRect: element.getBoundingClientRect(),
            rootBounds: null,
            time: Date.now()
          } as IntersectionObserverEntry;
          
          scheduleCallback(() => {
            callback([mockEntry], {} as IntersectionObserver);
          });
          return;
        }
        
        elementsMap.current.set(element, callback);
        getObserver()?.observe(element);
      },
      unobserveElement: (element: HTMLElement) => {
        if (!('IntersectionObserver' in window)) {
          return;
        }
        
        getObserver()?.unobserve(element);
        elementsMap.current.delete(element);
      },
    }),
    []
  );

  return (
    <LazyLoadContext.Provider value={value}>
      {children}
    </LazyLoadContext.Provider>
  );
};

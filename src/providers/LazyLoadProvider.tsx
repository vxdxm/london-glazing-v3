
import React, { createContext, useContext, ReactNode } from 'react';

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
  const observerRef = React.useRef<IntersectionObserver | null>(null);
  const elementsMap = React.useRef(new Map<HTMLElement, IntersectionObserverCallback>());

  React.useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const callback = elementsMap.current.get(entry.target as HTMLElement);
          if (callback) {
            callback([entry], observerRef.current!);
          }
        });
      },
      {
        rootMargin: '200px 0px',
        threshold: 0.01,
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        elementsMap.current.clear();
      }
    };
  }, []);

  const value = React.useMemo(
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
          callback([{ isIntersecting: true, target: element } as IntersectionObserverEntry], {} as IntersectionObserver);
          return;
        }
        
        elementsMap.current.set(element, callback);
        observerRef.current?.observe(element);
      },
      unobserveElement: (element: HTMLElement) => {
        if (!('IntersectionObserver' in window)) {
          return;
        }
        
        observerRef.current?.unobserve(element);
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

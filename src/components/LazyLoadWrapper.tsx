
import React, { ReactNode, useRef, useEffect, useState } from 'react';
import { useLazyLoad } from '@/providers/LazyLoadProvider';

interface LazyLoadWrapperProps {
  children: ReactNode;
  placeholder?: ReactNode;
  threshold?: number;
  rootMargin?: string;
}

export function LazyLoadWrapper({
  children,
  placeholder,
  threshold = 0.1,
  rootMargin = '200px 0px',
}: LazyLoadWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { observeElement, unobserveElement } = useLazyLoad();

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        if (currentRef) unobserveElement(currentRef);
      }
    };

    observeElement(currentRef, handleIntersection);
    
    return () => {
      if (currentRef) unobserveElement(currentRef);
    };
  }, [observeElement, unobserveElement]);

  return (
    <div ref={ref} className="w-full">
      {isVisible ? children : placeholder || (
        <div className="w-full h-40 bg-gray-100 animate-pulse rounded" />
      )}
    </div>
  );
}

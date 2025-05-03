
import React, { useState, useEffect } from 'react';

/**
 * Custom hook for lazily loading components
 * @param componentImport - A function that returns a dynamic import of a component
 * @returns The lazy-loaded component or a fallback
 */
export function useLazyComponent<T extends React.ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>,
  Fallback: React.ComponentType | null = null
) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadComponent = async () => {
      try {
        const module = await componentImport();
        if (isMounted) {
          setComponent(() => module.default);
        }
      } catch (error) {
        console.error("Failed to load component:", error);
      }
    };

    loadComponent();

    return () => {
      isMounted = false;
    };
  }, [componentImport]);

  if (Component) {
    return Component;
  }

  return Fallback || (() => <div className="h-20 w-full animate-pulse bg-gray-200 rounded" />);
}

import { useEffect, useState } from 'react';

interface WebVitalsMetrics {
  CLS: number | null;
  FID: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
}

interface WebVitalsThresholds {
  CLS: { good: number; needs_improvement: number };
  FID: { good: number; needs_improvement: number };
  FCP: { good: number; needs_improvement: number };
  LCP: { good: number; needs_improvement: number };
  TTFB: { good: number; needs_improvement: number };
}

const WEB_VITALS_THRESHOLDS: WebVitalsThresholds = {
  CLS: { good: 0.1, needs_improvement: 0.25 },
  FID: { good: 100, needs_improvement: 300 },
  FCP: { good: 1800, needs_improvement: 3000 },
  LCP: { good: 2500, needs_improvement: 4000 },
  TTFB: { good: 800, needs_improvement: 1800 }
};

/**
 * Hook for real-time Web Vitals monitoring and optimization
 */
export const useWebVitals = () => {
  const [metrics, setMetrics] = useState<WebVitalsMetrics>({
    CLS: null,
    FID: null,
    FCP: null,
    LCP: null,
    TTFB: null
  });

  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Check if PerformanceObserver is supported
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      setIsSupported(true);
      measureWebVitals();
    }
  }, []);

  const measureWebVitals = () => {
    // Measure Cumulative Layout Shift (CLS)
    if ('PerformanceObserver' in window) {
      let cls = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            cls += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, CLS: cls }));
      });

      try {
        clsObserver.observe({ type: 'layout-shift', buffered: true });
      } catch (e) {
        console.warn('CLS measurement not supported');
      }

      // Measure First Input Delay (FID)
      const fidObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const fid = (entry as any).processingStart - (entry as any).startTime;
          setMetrics(prev => ({ ...prev, FID: fid }));
        }
      });

      try {
        fidObserver.observe({ type: 'first-input', buffered: true });
      } catch (e) {
        console.warn('FID measurement not supported');
      }

      // Measure Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        const lcp = (lastEntry as any).startTime;
        setMetrics(prev => ({ ...prev, LCP: lcp }));
      });

      try {
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {
        console.warn('LCP measurement not supported');
      }

      // Measure First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, FCP: entry.startTime }));
          }
        }
      });

      try {
        fcpObserver.observe({ type: 'paint', buffered: true });
      } catch (e) {
        console.warn('FCP measurement not supported');
      }

      // Measure Time to First Byte (TTFB)
      const navigationObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const navEntry = entry as PerformanceNavigationTiming;
          const ttfb = navEntry.responseStart - navEntry.requestStart;
          setMetrics(prev => ({ ...prev, TTFB: ttfb }));
        }
      });

      try {
        navigationObserver.observe({ type: 'navigation', buffered: true });
      } catch (e) {
        console.warn('TTFB measurement not supported');
      }
    }
  };

  const getMetricStatus = (metricName: keyof WebVitalsMetrics, value: number | null) => {
    if (value === null) return 'unknown';
    
    const thresholds = WEB_VITALS_THRESHOLDS[metricName];
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.needs_improvement) return 'needs-improvement';
    return 'poor';
  };

  const getOverallScore = (): 'good' | 'needs-improvement' | 'poor' | 'unknown' => {
    const statuses = Object.entries(metrics).map(([key, value]) => 
      getMetricStatus(key as keyof WebVitalsMetrics, value)
    );

    if (statuses.includes('unknown')) return 'unknown';
    if (statuses.includes('poor')) return 'poor';
    if (statuses.includes('needs-improvement')) return 'needs-improvement';
    return 'good';
  };

  const reportToAnalytics = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      Object.entries(metrics).forEach(([name, value]) => {
        if (value !== null) {
          (window as any).gtag('event', name, {
            value: Math.round(name === 'CLS' ? value * 1000 : value),
            event_category: 'Web Vitals',
            non_interaction: true,
          });
        }
      });
    }
  };

  return {
    metrics,
    isSupported,
    getMetricStatus,
    getOverallScore,
    reportToAnalytics,
    thresholds: WEB_VITALS_THRESHOLDS
  };
};

/**
 * Component for displaying Web Vitals metrics (for development/admin use)
 */
export const WebVitalsDisplay: React.FC = () => {
  const { metrics, getMetricStatus, getOverallScore } = useWebVitals();

  if (process.env.NODE_ENV !== 'development') {
    return null; // Only show in development
  }

  const overallScore = getOverallScore();
  const scoreColors = {
    good: 'text-green-600',
    'needs-improvement': 'text-yellow-600',
    poor: 'text-red-600',
    unknown: 'text-gray-600'
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border text-xs z-50">
      <div className="font-bold mb-2">
        Web Vitals: <span className={scoreColors[overallScore]}>{overallScore}</span>
      </div>
      <div className="space-y-1">
        {Object.entries(metrics).map(([name, value]) => (
          <div key={name} className="flex justify-between items-center">
            <span>{name}:</span>
            <span className={`font-mono ${scoreColors[getMetricStatus(name as keyof WebVitalsMetrics, value)]}`}>
              {value !== null 
                ? `${name === 'CLS' ? value.toFixed(3) : Math.round(value)}${name === 'CLS' ? '' : 'ms'}`
                : 'N/A'
              }
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
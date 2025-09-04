'use client';

import React, { useEffect } from 'react';

// Google Analytics type declarations
declare global {
  function gtag(...args: any[]): void;
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface PerformanceMonitorProps {
  pageName: string;
  enableLogging?: boolean;
}

export default function PerformanceMonitor({ pageName, enableLogging = false }: PerformanceMonitorProps) {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const logPerformance = (metric: any) => {
      if (enableLogging) {
        console.log(`Performance Metric - ${pageName}:`, {
          name: metric.name,
          value: metric.value,
          rating: metric.rating,
          delta: metric.delta,
          id: metric.id,
          navigationType: metric.navigationType,
          entries: metric.entries,
        });
      }

      // Send to analytics (if configured)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: pageName,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          custom_parameter: {
            metric_name: metric.name,
            metric_value: metric.value,
            metric_rating: metric.rating,
            page_name: pageName,
          },
        });
      }
    };

    // Import and observe Core Web Vitals
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
      onCLS(logPerformance);
      onFCP(logPerformance);
      onLCP(logPerformance);
      onTTFB(logPerformance);
    });

    // Monitor page load performance
    const pageLoadStart = performance.now();
    
    const handlePageLoad = () => {
      const pageLoadTime = performance.now() - pageLoadStart;
      
      if (enableLogging) {
        console.log(`Page Load Time - ${pageName}:`, `${pageLoadTime.toFixed(2)}ms`);
      }

      // Send page load time to analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'page_load_time', {
          event_category: 'Performance',
          event_label: pageName,
          value: Math.round(pageLoadTime),
          custom_parameter: {
            page_name: pageName,
            load_time_ms: Math.round(pageLoadTime),
          },
        });
      }
    };

    // Listen for page load completion
    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    // Monitor resource loading
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'resource' && entry.name.includes('jacksonvillehousecleaningservice.com')) {
          if (enableLogging) {
            console.log(`Resource Load - ${pageName}:`, {
              name: entry.name,
              duration: entry.duration,
              size: 'transferSize' in entry ? entry.transferSize : 'N/A',
              type: 'initiatorType' in entry ? entry.initiatorType : 'N/A',
            });
          }
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });

    // Monitor long tasks
    const longTaskObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) { // Tasks longer than 50ms
          if (enableLogging) {
            console.warn(`Long Task Detected - ${pageName}:`, {
              duration: entry.duration,
              startTime: entry.startTime,
              name: entry.name,
            });
          }
        }
      });
    });

    longTaskObserver.observe({ entryTypes: ['longtask'] });

    // Cleanup
    return () => {
      observer.disconnect();
      longTaskObserver.disconnect();
      window.removeEventListener('load', handlePageLoad);
    };
  }, [pageName, enableLogging]);

  // This component doesn't render anything
  return null;
}

// Hook for performance monitoring
export function usePerformanceMonitoring(pageName: string, enableLogging = false) {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const logPerformance = (metric: any) => {
      if (enableLogging) {
        console.log(`Performance Metric - ${pageName}:`, metric);
      }
    };

    // Import and observe Core Web Vitals
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(logPerformance);
      onINP(logPerformance);
      onFCP(logPerformance);
      onLCP(logPerformance);
      onTTFB(logPerformance);
    });
  }, [pageName, enableLogging]);
}

// Utility functions for performance optimization
export const performanceUtils = {
  // Debounce function for performance
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function for performance
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // Check if element is in viewport
  isInViewport: (element: Element): boolean => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Lazy load images
  lazyLoadImages: () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  },
};

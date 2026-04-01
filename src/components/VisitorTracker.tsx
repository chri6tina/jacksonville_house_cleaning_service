"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // We only want to alert the admin ONCE per browser session to prevent Telegram span
    const hasBeenTracked = sessionStorage.getItem('visitor_tracked_session');
    
    // Only track if we haven't tracked them during this tab/browser lifetime
    if (!hasBeenTracked) {
      sessionStorage.setItem('visitor_tracked_session', 'true');

      // Attempt to capture the URL they came from (Google, Facebook, etc.)
      const referrer = document.referrer;
      const currentTime = new Date().toLocaleString('en-US', { timeZoneName: 'short' });

      // Ping our backend route to trigger Telegram
      fetch('/api/track-visitor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pathname,
          referrer,
          time: currentTime,
        }),
      }).catch((err) => {
        // Silent catch: never break the user experience if tracking fails
        console.error('Visitor telemetry silent failure:', err);
      });
    }
  }, [pathname]);

  // Completely invisible component
  return null;
}

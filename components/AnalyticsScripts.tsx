'use client';

import Script from 'next/script';

interface AnalyticsScriptsProps {
  gaId?: string;
  clarityId?: string;
  adsenseId?: string;
}

export function AnalyticsScripts({ gaId, clarityId, adsenseId }: AnalyticsScriptsProps) {
  return (
    <>
      {/* Google Analytics 4 - Official Implementation */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
            async
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}

      {/* Microsoft Clarity - Official Implementation */}
      {clarityId && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      )}

      {/* Google AdSense */}
      {adsenseId && (
        <Script
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      )}
    </>
  );
}

// Custom hook for tracking events
export function useAnalytics() {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const trackConversionStart = () => {
    trackEvent('conversion_start', {
      tool_name: 'MP4 to GIF',
      event_category: 'engagement',
    });
  };

  const trackConversionComplete = (fileSize: number, duration: number) => {
    trackEvent('conversion_complete', {
      file_size: fileSize,
      duration: duration,
      event_category: 'engagement',
    });
  };

  const trackPageView = (pageName: string) => {
    trackEvent('page_view', {
      page_title: pageName,
      event_category: 'navigation',
    });
  };

  return {
    trackEvent,
    trackConversionStart,
    trackConversionComplete,
    trackPageView,
  };
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

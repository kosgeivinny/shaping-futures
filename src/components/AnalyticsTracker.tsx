// src/components/AnalyticsTracker.tsx
"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_ID = "G-0TL33P5V0H"; 

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Combine pathname and search params to get the full URL path
  const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');

  // Track page views on route changes
  useEffect(() => {
    // We check for gtag availability before calling it.
    // Thanks to your global.d.ts file, this is now correctly typed!
    if (typeof window.gtag !== "undefined") {
      // Send a 'page_view' event on every route change (except the initial load)
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_path: url,
        send_to: GA_ID, // Explicitly target your Measurement ID
      });
      // console.log("GA Page View Sent:", url); // Uncomment for debugging
    }
  }, [url]); // This hook runs whenever the full URL changes

  return (
    <>
      {/* 1. Load the core gtag library script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      
      {/* 2. Initialize DataLayer and the config function */}
      {/* The config command handles the initial page view when the script loads. */}
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}'); 
        `}
      </Script>
    </>
  );
}
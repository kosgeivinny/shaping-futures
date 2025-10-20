"use client";

import Script from "next/script";
import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_ID = "G-0TL33P5V0H";

// --- Inner component handles GA events safely inside Suspense ---
function AnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "page_view", {
        page_title: document.title,
        page_path: url,
        send_to: GA_ID,
      });
    }
  }, [url]);

  return null;
}

// --- Main Analytics component ---
export default function AnalyticsTracker() {
  return (
    <>
      {/* Load Google Analytics core library */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />

      {/* Initialize GA configuration */}
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>

      {/* Suspense boundary for hooks using useSearchParams */}
      <Suspense fallback={null}>
        <AnalyticsInner />
      </Suspense>
    </>
  );
}

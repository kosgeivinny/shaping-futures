"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "page_view", {
        page_path: pathname + (searchParams.toString() ? `?${searchParams}` : ""),
      });
    }
  }, [pathname, searchParams]);

  return null;
}

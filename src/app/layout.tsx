// src/app/layout.tsx

import type { Metadata } from "next";
import Script from "next/script"; // ✅ Import for Google Analytics
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GlobalPreloader from "@/components/GlobalPreloader";
import { AnimatePresence } from "framer-motion";
import AnalyticsTracker from "@/components/AnalyticsTracker"; // 👈 Moved to separate client file

// --- Font Configuration ---
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- Metadata Configuration (SEO) ---
export const metadata: Metadata = {
  title: {
    default: "Shaping Futures | Empowering Youth",
    template: "%s | Shaping Futures",
  },
  description:
    "Empowering youth through dance, education, and community support in Nairobi.",
};

// --- Root Layout Component ---
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics (GA4) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0TL33P5V0H"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0TL33P5V0H');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Client-side route tracker for GA */}
        <AnalyticsTracker />

        <AnimatePresence mode="wait" initial={true}>
          <GlobalPreloader>
            <Header />
            <main>{children}</main>
            <Footer />
          </GlobalPreloader>
        </AnimatePresence>
      </body>
    </html>
  );
}

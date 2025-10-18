// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GlobalPreloader from "@/components/GlobalPreloader";
import { AnimatePresence } from "framer-motion";
import Analytics from "@/components/AnalyticsTracker"; // ✅ new clean analytics client file

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Load Google Analytics scripts here */}
        <Analytics />

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

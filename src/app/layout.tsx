// src/app/layout.tsx

import type { Metadata } from "next";
// Next.js Fonts: Use the optimized font loader
import { Geist, Geist_Mono } from "next/font/google";
// Global styles import
import "../styles/globals.css";

// Component Imports
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GlobalPreloader from "@/components/GlobalPreloader"; 

// Framer Motion Import for exit animations
import { AnimatePresence } from 'framer-motion';

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
    default: "Shaping Futures | Empowering Youth", // Default title
    template: "%s | Shaping Futures", // Template for page-specific titles
  },
  description: "Empowering youth through dance, education, and community support in Nairobi.", // Slightly richer description
};

// --- Layout Component ---

// Define the expected structure of the content passed to the layout
type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/*
          AnimatePresence is crucial here:
          - mode="wait" ensures the Preloader finishes its exit animation before mounting the main content.
          - initial={true} ensures the preloader runs on the initial load.
        */}
        <AnimatePresence mode="wait" initial={true}>
          {/* We pass the entire application structure (Header, main content, Footer) 
            as children to the GlobalPreloader, allowing it to control the initial view 
            and exit sequence before displaying the final page.
          */}
          <GlobalPreloader>
            <Header />
            {/* The main content area where page components are rendered */}
            <main>
              {children}
            </main>
            <Footer />
          </GlobalPreloader>
        </AnimatePresence>
      </body>
    </html>
  );
}
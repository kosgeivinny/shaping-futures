'use client'; 

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 
import Image from 'next/image'; 

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55"; 

// Define the Component Props Interface
interface GlobalPreloaderProps {
    children: React.ReactNode;
}

// Logo source (adjust this to your logo's path)
const logoSrc = "/logo.png"; 

export default function GlobalPreloader({ children }: GlobalPreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  // Framer Motion variants for the logo and background fade-out
  const logoVariants = {
    initial: { 
      opacity: 1, 
      scale: 0.8, 
      filter: 'blur(4px)' 
    },
    animate: { 
      opacity: [1, 1, 0], 
      scale: [0.8, 1, 20], 
      filter: ['blur(4px)', 'blur(0px)', 'blur(0px)'], 
      transition: { 
        duration: 1.2, 
        // FIX: Removed 'ease: "easeOut"' to satisfy TypeScript's strict Easing type check
        times: [0, 0.5, 1] 
      }
    },
    exit: { 
      opacity: 0, 
      transition: { duration: 0.5, delay: 0.6 } 
    }
  };

  const backgroundVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5, delay: 0.6 } } 
  };

  return (
    // NOTE: AnimatePresence must wrap GlobalPreloader in layout.tsx
    <> 
      {/* 1. Preloader Overlay */}
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden" 
          style={{ backgroundColor: PRIMARY_BLUE }}
          variants={backgroundVariants}
          initial="initial"
          exit="exit" 
          key="preloader-overlay"
        >
          {/* Your Logo (Image component) */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate" 
            className="relative" 
            key="preloader-logo-animation" 
          >
            <Image
              src={logoSrc}
              alt="Shaping Futures Logo"
              width={150} 
              height={150}
              priority 
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      )}
      
      {/* 2. Main Page Content */}
      {!isLoading && children} 
    </>
  );
}
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";
const WHITE = "#ffffff";
const LIGHT_GRAY = "#f8f9fb";

export default function HeroSection() {
  // State and logic... (unchanged)
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoPoster = "/images/gallery/landscape6.jpg"; 

  // FIX: Explicitly type the 'event' parameter as a Synthetic Event on an HTMLVideoElement
  const handleVideoLoad = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const videoElement = event.currentTarget; 
    if (videoElement.readyState >= 3) {
      setVideoLoaded(true);
      videoElement.play();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  // End of State and logic...

  return (
    <section className="relative h-screen w-full">
      
      {/* Background/Video/Overlay logic... (unchanged) */}
      {!videoLoaded && (
        <Image
          src={videoPoster}
          alt="Shaping Futures Youth Dance"
          fill
          priority
          className="object-cover transition-opacity duration-1000"
          style={{ opacity: videoLoaded ? 0 : 1 }}
        />
      )}

      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={videoPoster}
        onLoadedData={handleVideoLoad}
        style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 1000ms ease-in' }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/60"></div>

      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
            <Loader2 className="w-10 h-10 animate-spin" style={{ color: ACCENT_YELLOW }} />
        </div>
      )}
      {/* End of Background/Video/Overlay logic... */}

      {/* Content */}
      <motion.div
        className="relative z-30 flex h-full w-full items-center justify-center text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate={videoLoaded ? "visible" : "hidden"}
      >
        <div className="max-w-4xl">
          <motion.h1 
            className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight" 
            style={{ color: WHITE }}
            variants={itemVariants}
          >
            Empowering Youth, <br />
            <span style={{ color: ACCENT_YELLOW }}>Shaping Brighter Futures.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl mb-10 font-medium" 
            style={{ color: LIGHT_GRAY }}
            variants={itemVariants}
          >
            Join our mission to provide education, life skills, and opportunity through dance and community support.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Link
              href="/get-involved/donation"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 transform hover:scale-[1.05] hover:shadow-2xl"
              style={{ backgroundColor: ACCENT_YELLOW, color: PRIMARY_BLUE }}
            >
              Donate Now →
            </Link>
            
            {/* SECONDARY BUTTON FIX */}
            <Link
              href="/get-involved/volunteer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-bold border-2 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg hover:bg-white"
              style={{ 
                borderColor: WHITE, 
                color: WHITE,
              }}
              // Use onMouseEnter/Leave to apply the text and border color directly
              onMouseEnter={(e) => {
                // FIX: Apply colors directly to the element's style
                e.currentTarget.style.color = PRIMARY_BLUE;
                e.currentTarget.style.borderColor = PRIMARY_BLUE;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = WHITE;
                e.currentTarget.style.borderColor = WHITE;
              }}
            >
              Become a Volunteer
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
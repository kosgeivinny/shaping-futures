"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55"; // Your desired Navy Blue for background
const ACCENT_YELLOW = "#f2e63d";

// --- Data: CONFIRMED 7 PARTNERS ---
const partners = [
  { name: "Partner 1", logo: "/images/partners/logo1.jpg" },
  { name: "Partner 2", logo: "/images/partners/logo2.jpg" },
  { name: "Partner 3", logo: "/images/partners/logo3.jpg" },
  { name: "Partner 4", logo: "/images/partners/logo4.jpg" },
  { name: "Partner 5", logo: "/images/partners/logo5.jpg" },
  { name: "Partner 6", logo: "/images/partners/logo6.jpg" },
  { name: "Partner 7", logo: "/images/partners/logo7.jpg" },
];

export default function Partners() {
  return (
    // CRITICAL FIX: Set background color to PRIMARY_BLUE
    <section className="py-20" style={{ backgroundColor: PRIMARY_BLUE }}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title - Changed text color to white */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Our Valued <span style={{ color: ACCENT_YELLOW }}>Partners</span> & Sponsors
        </h2>
        <p className="mt-3 text-lg text-gray-300 max-w-3xl mx-auto">
          We’re proud to collaborate with organizations and individuals that support our mission of empowering youth and shaping brighter futures.
        </p>
        <div className="w-16 h-1" style={{ backgroundColor: ACCENT_YELLOW, margin: '12px auto 0' }} />

        {/* Logos Grid */}
        <div className="mt-16">
          {/* Top Row: 4 Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-12 items-center justify-center max-w-5xl mx-auto">
            {partners.slice(0, 4).map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex justify-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={100}
                  // Logos are now initially bright but low opacity for sophistication on the dark background
                  className="h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: 3 Logos - Centered using Tailwind utilities */}
          <div className="grid grid-cols-3 gap-x-8 md:gap-x-12 gap-y-12 items-center justify-center max-w-3xl mx-auto mt-12">
            {partners.slice(4, 7).map((partner, idx) => (
              <motion.div
                key={idx + 4} // Ensure unique key
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (idx + 4) * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex justify-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={100}
                  className="h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
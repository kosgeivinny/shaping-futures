"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";
const WHITE = "#ffffff";
const LIGHT_GRAY = "#f8f9fb";

export default function AboutSection() {
  return (
    // Background is PRIMARY_BLUE, adding a subtle pattern/overlay for texture
    <section className="relative py-24 md:py-32" style={{ backgroundColor: PRIMARY_BLUE }}>
      {/* Optional: Subtle background texture overlay for premium feel */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Image/Video with Animation */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-96 md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/40"
        >
          <Image
            src="/images/about.jpg" 
            alt="Youth dancing at Shaping Futures"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right: Text with Enhanced Typography and Animation */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
        >
          {/* New: Sub-headline for quick context */}
          <p className="text-xl font-semibold mb-3 tracking-wider flex items-center" style={{ color: ACCENT_YELLOW }}>
            <Heart className="w-5 h-5 mr-2 fill-current" />
            Our Mission in Action
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ color: WHITE }}>
            We&apos;re <span style={{ color: ACCENT_YELLOW }}>Empowering</span> the Next Generation.
          </h2>
          
          {/* Shortened, punchier paragraph */}
          <p className="text-xl mb-8 leading-relaxed" style={{ color: LIGHT_GRAY }}>
            At <strong>Shaping Futures</strong>, we believe every young person deserves a bright start. We empower youth through <strong>professional dance training</strong> and comprehensive <strong>community support</strong>—covering education, essential needs, and vital life skills.
          </p>

          <p className="text-xl mb-8 leading-relaxed italic" style={{ color: LIGHT_GRAY }}>
            We don&apos;t just teach skills; we build character, confidence, and community resilience.
          </p>
          
          {/* Final CTA */}
          <Link
            href="/about"
            className="inline-block px-8 py-3 rounded-full font-bold text-lg shadow-xl transition-all duration-300 transform hover:scale-[1.05] hover:shadow-2xl"
            style={{ backgroundColor: ACCENT_YELLOW, color: PRIMARY_BLUE }}
          >
            Read Our Full Story →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";
// Using a subtle light gradient to differentiate from the pure white or light gray sections
const SUBTLE_BG = "linear-gradient(to top, #f0f4f8, #ffffff)"; 

export default function FounderMessage() {
  return (
    // Using a subtle gradient for background contrast
    <section className="py-20" style={{ background: SUBTLE_BG }}>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-extrabold"
                style={{ color: PRIMARY_BLUE }}
            >
                Our <span style={{ color: ACCENT_YELLOW }}>Vision</span>
            </motion.h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                A personal message from the founder on the belief that drives our mission.
            </p>
            <div className="w-16 h-1" style={{ backgroundColor: ACCENT_YELLOW, margin: '12px auto 0' }} />
        </div>

        {/* Founder Profile & Quote - Horizontal Layout */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl flex flex-col md:flex-row items-start gap-8"
        >
            {/* COLUMN 1: IMAGE (Portrait) */}
            <div className="flex-shrink-0 w-full md:w-56 flex flex-col items-center text-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <Image
                        src="/images/founder.jpeg" // Using the recommended founder image placeholder
                        alt="Kevin Odhiambo, Founder"
                        fill
                        className="object-cover object-top"
                    />
                </div>
                <h3 className="mt-4 text-xl font-bold" style={{ color: PRIMARY_BLUE }}>
                    Kevin Odhiambo
                </h3>
                <p className="text-gray-600 text-sm">Founder & Visionary</p>
            </div>
            
            {/* COLUMN 2: MESSAGE & SIGNATURE */}
            <div className="flex-grow">
                <p className="text-xl md:text-2xl italic font-serif text-gray-800 leading-snug border-l-4 pl-4" style={{ borderColor: ACCENT_YELLOW }}>
                    “I believe in the power of opportunity. One small act—a meal, a lesson, a word of encouragement—can truly change the trajectory of a life. This belief is what gave birth to <strong>Shaping Futures</strong>, and together, we are shaping the future of an entire generation.”
                </p>
                <p className="mt-6 text-lg font-semibold text-gray-700">
                    — Kevin Odhiambo
                </p>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
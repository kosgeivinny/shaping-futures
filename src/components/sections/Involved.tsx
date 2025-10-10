"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GetInvolvedCTA() {
  return (
    <section className="relative py-24 bg-[#2d2f55] text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Be Part of the Change
        </motion.h2>

        {/* Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-20 h-1 bg-[#f2e63d] mx-auto mt-4 rounded-full origin-left"
        />

        {/* Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto"
        >
          Whether through volunteering, donations, or spreading the word — 
          your involvement helps shape brighter futures for children and youth.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="get-involved/donation"
            className="px-8 py-3 rounded-xl bg-[#f2e63d] text-[#2d2f55] font-semibold hover:bg-yellow-400 transition"
          >
            Donate
          </Link>
          <Link
            href="/get-involved"
            className="px-8 py-3 rounded-xl border-2 border-white font-semibold hover:bg-white hover:text-[#2d2f55] transition"
          >
            Join Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

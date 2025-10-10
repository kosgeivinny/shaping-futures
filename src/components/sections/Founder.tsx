"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#2d2f55]"
        >
          A Message from Our Founder
        </motion.h2>

        <div className="w-20 h-1 bg-[#f2e63d] mx-auto mt-3 rounded-full" />

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 text-lg md:text-xl italic text-gray-700 leading-relaxed"
        >
          “For as long as I can remember, I have believed in the power of
          opportunity. The idea that one small act of kindness—a meal, a lesson,
          a word of encouragement—can change the trajectory of a life. This
          belief is what gave birth to <span className="font-semibold">Shaping Futures</span>.”
        </motion.blockquote>

        {/* Founder profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center"
        >
          <Image
            src="/images/awards.jpg" 
            alt="Kevin Odhiambo"
            width={100}
            height={100}
            className="rounded-full shadow-lg"
          />
          <h3 className="mt-4 text-xl font-semibold text-[#2d2f55]">
            Kevin Odhiambo
          </h3>
          <p className="text-gray-600">Founder & Visionary, Shaping Futures</p>
        </motion.div>

        {/* Closing CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-lg text-gray-700 font-medium"
        >
          Together, we are not just shaping individual lives —
          we are shaping the future of an entire generation.
        </motion.p>

        {/* Newsletter / CTA */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f2e63d] w-full sm:w-80"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#2d2f55] text-white rounded-xl shadow-md hover:bg-[#24264a] transition"
          >
            Stay Connected
          </button>
        </motion.form>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "Partner 1", logo: "/images/partners/logo1.jpg" },
  { name: "Partner 2", logo: "/images/partners/logo2.jpg" },
  { name: "Partner 3", logo: "/images/partners/logo3.jpg" },
  { name: "Partner 4", logo: "/images/partners/logo4.jpg" },
  { name: "Partner 5", logo: "/images/partners/logo5.jpg" },
];

export default function Partners() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2d2f55]">
          Our Partners
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          We’re proud to collaborate with organizations that support our mission
          of empowering youth and shaping brighter futures.
        </p>
        <div className="w-20 h-1 bg-[#f2e63d] mx-auto mt-4 rounded-full" />

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center mt-12">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={80}
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

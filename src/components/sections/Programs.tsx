"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";
// CRITICAL FIX: Changed background to a distinct Pale Blue-Gray
const PALE_BG = "#f0f4f8"; 

const programs = [
  {
    title: "Dance Training",
    slug: "dance",
    image: "/images/programs/dance.jpg",
    description:
      "Empowering youth through professional dance training and competitions.",
  },
  {
    title: "Mtoto na Elimu",
    slug: "mtoto-na-elimu",
    image: "/images/programs/education.jpg",
    description:
      "Sponsoring children’s education to ensure access to quality learning.",
  },
  {
    title: "Life Skills & Mentorship",
    slug: "life-skills",
    image: "/images/programs/lifeskills.png",
    description:
      "Inviting coaches and volunteers to mentor youth with practical life skills.",
  },
  {
    title: "Clothes Donation",
    slug: "clothes-donation",
    image: "/images/programs/clothes.jpg",
    description:
      "Supporting families and children with clothing donations from the community.",
  },
  {
    title: "Feeding Program",
    slug: "feeding",
    image: "/images/programs/feeding.jpg",
    description:
      "Providing meals to vulnerable children and youth to promote well-being.",
  },
  {
    title: "Sanitary Towel Donations",
    slug: "sanitary-donation",
    image: "/images/programs/sanitary.png",
    description:
      "Providing sanitary towels to girls in the community to promote dignity.",
  },
];

export default function Programs() {
  return (
    // CRITICAL FIX: Set background color to PALE_BG (#f0f4f8)
    <section className="py-20" style={{ backgroundColor: PALE_BG }}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Title and Subheading */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: PRIMARY_BLUE }}>
                Our Core <span style={{ color: ACCENT_YELLOW }}>Programs</span>
            </h2>
            <p className="mt-3 text-lg text-gray-700 max-w-3xl mx-auto">
                We drive change through six distinct, impactful initiatives focused on education, health, and empowerment.
            </p>
            <div className="w-20 h-1" style={{ backgroundColor: ACCENT_YELLOW, margin: '12px auto 0' }} />
        </motion.div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              // Cards remain white (bg-white) which provides great contrast on the pale blue-gray background
              className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 transform hover:shadow-2xl hover:translate-y-[-4px]"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow text-left">
                {/* Program Title */}
                <h3 className="text-2xl font-bold mb-3" style={{ color: PRIMARY_BLUE }}>
                  <Sparkles className="w-5 h-5 inline mr-2 align-text-bottom" style={{ color: ACCENT_YELLOW }} />
                  {program.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-700 mb-4 flex-grow leading-relaxed">{program.description}</p>
                
                {/* CTA Link */}
                <Link
                  href={`/programs/${program.slug}`}
                  className="inline-flex items-center mt-3 font-bold text-lg transition-colors duration-300 group"
                  style={{ color: ACCENT_YELLOW }}
                >
                  Discover Impact
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" style={{ color: PRIMARY_BLUE }}/>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
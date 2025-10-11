"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";
const WHITE = "#ffffff"; // Make sure this is consistent if used in other places for contrast.

// --- Data: Two best, most diverse stories ---
const stories = [
  {
    title: "Dominic’s Success: From Learner to Tech Innovator",
    text: "The first beneficiary of the Mtoto na Elimu program, Dominic gained quality education and mentorship. His hard work and innovation have since led him to international recognition, inspiring many.",
    image: "/images/dominic.jpeg", 
    link: "/programs",
  },
  {
    title: "Mike’s Journey: From Aspiring Dancer to Fierce Competitor",
    text: "Mike, a dedicated dancer from the Shaping Futures program, transformed his raw talent into a refined craft through mentorship and rigorous training, and now competes on major stages.",
    image: "/images/brian.jpg", 
    link: "/programs",
  },
];

export default function SuccessStories() {
  return (
    // Re-confirming background color. Let's assume WHITE for better contrast after a navy section
    <section className="py-20" style={{ backgroundColor: WHITE }}> 
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: PRIMARY_BLUE }}>
          Lives <span className="text-[#f2e63d]">Transformed</span>
        </h2>
        <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
          Real stories of children and youth whose lives have been transformed through our programs.
        </p>
        <div className="w-20 h-1" style={{ backgroundColor: ACCENT_YELLOW, margin: '12px auto 0' }} />

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row hover:shadow-3xl transition-all duration-300 text-left"
            >
              {/* Image Container - ADJUSTED WIDTH FOR LESS CROPPING */}
              {/* Changed lg:w-1/3 to lg:w-2/5 */}
              <div className="relative w-full h-64 lg:w-2/5 lg:h-auto overflow-hidden"> 
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  // Keep object-cover, but now with more container width, less cropping will occur
                  className="object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
              
              {/* Content Container - Adjusted to match image container width */}
              {/* Changed lg:w-2/3 to lg:w-3/5 */}
              <div className="p-6 md:p-8 flex flex-col flex-grow lg:w-3/5"> 
                <h3 className="text-2xl font-bold" style={{ color: PRIMARY_BLUE }}>
                  {story.title}
                </h3>
                <p className="mt-3 text-gray-700 flex-grow leading-relaxed">{story.text}</p>
                
                {/* Enhanced CTA */}
                <Link
                  href={story.link}
                  className="inline-flex items-center mt-5 font-semibold text-lg transition-colors duration-300 group"
                  style={{ color: PRIMARY_BLUE }}
                >
                  Read Full Story
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" style={{ color: ACCENT_YELLOW }}/>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Final CTA to all stories */}
        <div className="mt-16">
            <Link
                href="/programs" 
                className="inline-flex items-center justify-center font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-300 group"
                style={{ backgroundColor: ACCENT_YELLOW, color: PRIMARY_BLUE }}
                >
                See All Impact Stories
                <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
// Import icons that best represent your specific data
import { Users, School, Home, HeartHandshake } from "lucide-react"; 

// --- Theme Variables (Re-declared for component use) ---
const ACCENT_YELLOW = "#f2e63d";
const DARK_BG = "#1f2041"; // Slightly darker blue for background contrast
const CARD_BG = "#353764"; // Lighter blue for card background

// --- NEW DATA ---
const stats = [
  { label: "Children and families supported through our clothes donation drives.", target: 7700, icon: Users },
  { label: "Students supported with school fees & supplies", target: 20, icon: School },
  { label: "Children’s homes visited and supported with essential donations.", target: 17, icon: Home },
  { label: "Volunteers & mentors actively engaged", target: 30, icon: HeartHandshake },
];

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [count, setCount] = useState(0);

  // Combine refs
  const setRefs = (node: HTMLSpanElement) => {
    ref.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // 2s
      const increment = target / (duration / 16); 

      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(interval);
    }
  }, [inView, target]);

  // Format number with commas for large targets
  const formattedCount = new Intl.NumberFormat().format(Math.round(count));

  return <span ref={setRefs}>{formattedCount}</span>;
}

export default function Impact() {
  return (
    <section className="py-24" style={{ backgroundColor: DARK_BG }} id="impact">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Title & Subheading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          <span style={{color: ACCENT_YELLOW}}>Our Impact</span> at a Glance
        </h2>
        <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
          Together with our partners and supporters, <strong>Shaping Futures</strong> has created life-changing opportunities for children and youth across Kenya.
        </p>
        <div className="w-24 h-1" style={{ backgroundColor: ACCENT_YELLOW, margin: '16px auto 0' }} />

        {/* Stats Grid - Adjusted to 4 columns on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }} // Reduced delay for faster animation
              viewport={{ once: true, amount: 0.5 }}
              className="p-8 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-[1.03] cursor-default flex flex-col justify-center h-full"
              style={{ backgroundColor: CARD_BG }}
            >
              {/* Icon */}
              <stat.icon className="w-10 h-10 mx-auto mb-4" style={{ color: ACCENT_YELLOW }} />
              
              {/* Counter - Removed the unnecessary '+' since the target is very specific */}
              <p className="text-5xl font-black mb-3" style={{ color: ACCENT_YELLOW }}>
                <Counter target={stat.target} />+
              </p>
              
              {/* Label */}
              <p className="mt-2 text-lg font-semibold text-white leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
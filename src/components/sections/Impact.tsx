"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";

const stats = [
  { label: "Youth Empowered", target: 500 },
  { label: "Programs Run", target: 120 },
  { label: "Communities Reached", target: 35 },
];

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });
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
      const step = Math.ceil(target / (duration / 16));

      const interval = setInterval(() => {
        start += step;
        if (start >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(interval);
    }
  }, [inView, target]);

  return <span ref={setRefs}>{count}</span>;
}

export default function Impact() {
  return (
    <section className="py-20 bg-[#2d2f55] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Impact
        </h2>
        <div className="w-20 h-1 bg-[#f2e63d] mx-auto mt-3 rounded-full" />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#353764] p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <p className="text-4xl font-bold text-[#f2e63d]">
                <Counter target={stat.target} />+
              </p>
              <p className="mt-2 text-gray-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

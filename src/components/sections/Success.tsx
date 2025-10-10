"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stories = [
  {
    title: "Confidence Through Dance",
    text: "A young child discovered her passion for dance, building confidence and inspiring others in her community to believe in themselves.",
    image: "/images/brian.jpg", // replace with your real image
    link: "/stories/dance",
  },
  {
    title: "Dream Achieved with Mtoto na Elimu",
    text: "Through the Mtoto na Elimu program, a girl fulfilled her dream of education and now motivates others to pursue their goals.",
    image: "/images/amina.png", // replace with your real image
    link: "/stories/mtoto-na-elimu",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2d2f55]">
          Success Stories
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Real stories of children whose lives have been transformed through
          Shaping Futures programs.
        </p>
        <div className="w-20 h-1 bg-[#f2e63d] mx-auto mt-3 rounded-full" />

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <div className="overflow-hidden relative w-full h-64">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#2d2f55]">
                  {story.title}
                </h3>
                <p className="mt-2 text-gray-600">{story.text}</p>
                <a
                  href={story.link}
                  className="inline-block mt-4 text-[#2d2f55] font-medium hover:text-[#f2e63d] transition"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

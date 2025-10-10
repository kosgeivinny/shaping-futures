"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image/Video */}
        <div className="relative h-80 md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/about.jpg" // <-- add an image in public/images
            alt="Youth dancing at Shaping Futures"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d2f55] mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At{" "}
            <span className="font-semibold text-[#f2e63d]">
              Shaping Futures
            </span>
            , we empower youth through dance and community programs. From
            nurturing talent on the stage to supporting education, life skills,
            and essential needs, we are committed to creating brighter futures
            for young people in our community.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 rounded-xl bg-[#2d2f55] text-white font-semibold hover:bg-[#f2e63d] hover:text-[#2d2f55] transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

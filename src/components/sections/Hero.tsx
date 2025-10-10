"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Empowering Youth Through Dance & Community Support
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="get-involved/donation"
              className="px-6 py-3 rounded-2xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved/volunteer"
              className="px-6 py-3 rounded-2xl border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// app/get-involved/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Handshake, Users, Calendar } from "lucide-react";

// --- Custom Colors and Styles ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";

// --- Data for Sponsors (Using Placeholders for stability) ---
const sponsorLogos = [
  { text: 'Tech Corp', width: 150, height: 80, url: '/images/partners/logo1.jpg' },
  { text: 'Green Energy', width: 150, height: 80, url: '/images/partners/logo2.jpg' },
  { text: 'Local Bank', width: 150, height: 80, url: '/images/partners/logo3.jpg' },
  { text: 'Health Org', width: 150, height: 80, url: '/images/partners/logo4.jpg' },
  { text: 'Creative Studio', width: 150, height: 80, url: '/images/partners/logo5.jpg' },
  { text: 'Education Fund', width: 150, height: 80, url: '/images/partners/logo6.jpg' },
  { text: 'Logistics Co', width: 150, height: 80, url: '/images/partners/logo7.jpg' },
];


// Helper component to replace Next.js Link and Shadcn Button (using standard <a> tag)
const CustomLink = ({ href, children, className, style }: { href: string; children: React.ReactNode; className?: string, style?: React.CSSProperties }) => (
    <a href={href} className={className} style={style}>
        {children}
    </a>
);

export default function GetInvolvedPage() {
  const actionItems = [
    {
      icon: <Users className="w-10 h-10" style={{ color: ACCENT_YELLOW }} />,
      title: "Volunteer",
      desc: "Our backbone! Offer your skills in teaching, mentoring, or event support and inspire the next generation.",
      btn: "Become a Volunteer",
      link: "/get-involved/volunteer",
    },
    {
      icon: <Heart className="w-10 h-10" style={{ color: ACCENT_YELLOW }} />,
      title: "Donate",
      desc: "Your financial support directly fuels our core programs: feeding, education, and artistic training. Every gift matters.",
      btn: "Donate Now",
      link: "/get-involved/donation",
    },
    {
      icon: <Handshake className="w-10 h-10" style={{ color: ACCENT_YELLOW }} />,
      title: "Form a Partnership",
      desc: "Collaborate as an organization, school, or sponsor to expand our reach and multiply our impact together.",
      btn: "Propose a Partnership",
      link: "/contact", 
    },
    {
      icon: <Calendar className="w-10 h-10" style={{ color: ACCENT_YELLOW }} />,
      title: "Attend Our Events",
      desc: "Join our workshops, fundraisers, and showcases. See firsthand the positive transformation happening in the community.",
      btn: "View Events Calendar",
      link: "/events",
    },
  ];

  return (
    <main className="bg-[#f8f9fb] text-gray-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#2d2f55] to-[#1f2041] text-white pt-32 pb-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4"
        >
          How You Can <span style={{ color: ACCENT_YELLOW }}>Get Involved</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto text-xl text-gray-200"
        >
          Join us in making a difference! Your support is <strong>invaluable</strong>—whether through your time, resources, or financial help.
        </motion.p>
        
        {/* Hero CTAs */}
        <div className="flex justify-center gap-4 mt-10">
          <CustomLink 
            href="/get-involved/volunteer"
            style={{ backgroundColor: ACCENT_YELLOW, color: PRIMARY_BLUE }} 
            className="hover:opacity-90 font-semibold py-3 px-8 text-lg rounded-full shadow-lg transition duration-200 inline-block transform hover:scale-[1.02]"
          >
            Sign Up to Volunteer
          </CustomLink>
          <CustomLink
            href="/get-involved/donation"
            style={{ borderColor: ACCENT_YELLOW, color: ACCENT_YELLOW }}
            className={`font-semibold py-3 px-8 text-lg rounded-full border-2 transition duration-200 inline-block hover:bg-white/10`}
          >
            Donate Now
          </CustomLink>
        </div>
      </section>

      {/* 2. WAYS TO GET INVOLVED (Core Action Cards) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#2d2f55]">
          Find Your <span className={`text-[${ACCENT_YELLOW}]`}>Way to Impact</span>
        </h2>
        
        {/* Grid adjusted to 4 columns on large screens for visual appeal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {actionItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 4px ${ACCENT_YELLOW}40` }}
              transition={{ type: "spring", stiffness: 200 }}
              className="h-full"
            >
              {/* Card - Replaced Shadcn Card with custom styled div */}
              <div className="shadow-xl rounded-2xl overflow-hidden border-t-4 border-transparent hover:border-[#f2e63d] transition-all duration-300 h-full flex flex-col bg-white">
                <div className="p-6 text-center flex flex-col items-center gap-3 flex-grow">
                  {item.icon}
                  <h3 className="text-xl font-bold text-[#2d2f55]">{item.title}</h3>
                  <p className="text-gray-600 flex-grow mb-4">{item.desc}</p>
                  <CustomLink href={item.link} className="mt-auto w-full">
                    <button 
                      style={{ backgroundColor: ACCENT_YELLOW, color: PRIMARY_BLUE }} 
                      className="hover:bg-yellow-400 font-semibold w-full py-2.5 rounded-lg shadow transition duration-200"
                    >
                      {item.btn}
                    </button>
                  </CustomLink>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. PARTNERS / SPONSORS SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-[#2d2f55] mb-12">
                Trusted By Our <span className={`text-[${ACCENT_YELLOW}]`}>Partners</span>
            </h2>

            {/* Sponsor Image Grid - Using placehold.co links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-center">
                {sponsorLogos.map((logo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="p-3 bg-gray-50 rounded-lg shadow-inner hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Replaced Next.js Image with standard img tag and placeholder URL */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={logo.url}
                            alt={`Logo of ${logo.text}`}
                            width={logo.width} 
                            height={logo.height} 
                            className="w-full h-auto object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                    </motion.div>
                ))}
            </div>
            <div className="text-center mt-12">
                <CustomLink href="/contact" className="inline-block">
                    <button 
                        style={{ borderColor: PRIMARY_BLUE, color: PRIMARY_BLUE }}
                        className="bg-transparent border-2 hover:bg-gray-100 font-semibold py-3 px-8 text-lg rounded-full transition duration-200"
                    >
                        Join Our Partnership Network
                    </button>
                </CustomLink>
            </div>
        </div>
      </section>

      {/* 4. FINAL CTA (Styled for consistency) */}
      <section className="text-center py-16 text-black" style={{ backgroundColor: ACCENT_YELLOW }}>
        <h2 className="text-3xl font-bold mb-6" style={{ color: PRIMARY_BLUE }}>
          Ready to Make an Impact?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <CustomLink
            href="/get-involved/volunteer"
            className="bg-[#2d2f55] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#1f2041] transition inline-block"
          >
            Volunteer Today
          </CustomLink>
          <CustomLink
            href="/get-involved/donation"
            className="bg-transparent border-2 border-[#2d2f55] text-[#2d2f55] font-semibold px-6 py-3 rounded-lg hover:bg-[#2d2f55] hover:text-white transition inline-block"
          >
            Donate Now
          </CustomLink>
        </div>
      </section>
    </main>
  );
}

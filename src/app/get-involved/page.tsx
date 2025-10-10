// app/get-involved/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image"; // Necessary for the sponsor logos
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; 
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Handshake, Users, Calendar } from "lucide-react";

// --- Custom Colors and Styles ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";

// --- Data for Sponsors (Extracted from your HTML) ---
const sponsorLogos = [
  { src: '/images/partners/logo1.jpg', alt: 'Sponsor 1' },
  { src: '/images/partners/logo2.jpg', alt: 'Sponsor 2' },
  { src: '/images/partners/logo3.jpg', alt: 'Sponsor 3' },
  { src: '/images/partners/logo4.jpg', alt: 'Sponsor 4' },
  { src: '/images/partners/logo5.jpg', alt: 'Sponsor 5' },
  { src: '/images/partners/logo6.jpg', alt: 'Sponsor 6' },
  { src: '/images/partners/logo7.jpg', alt: 'Sponsor 7' },
];

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
    // Combining 'Partner' and 'Events' from your HTML into two stronger options
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
          <Link href="/get-involved/volunteer" passHref>
            <Button 
              style={{ backgroundColor: ACCENT_YELLOW, color: PRIMARY_BLUE }} 
              className="hover:opacity-90 font-semibold py-3 px-8 text-lg rounded-full shadow-lg"
            >
              Sign Up to Volunteer
            </Button>
          </Link>
          <Link href="/get-involved/donation" passHref>
            <Button
              variant="outline"
              style={{ borderColor: ACCENT_YELLOW, color: ACCENT_YELLOW }}
              className="hover:bg-white/10 font-semibold py-3 px-8 text-lg rounded-full"
            >
              Donate Now
            </Button>
          </Link>
        </div>
      </section>

      {/* 2. WAYS TO GET INVOLVED (Core Action Cards) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2d2f55]">
          Find Your Way to Impact
        </h2>
        
        {/* Grid adjusted to 4 columns on large screens for visual appeal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {actionItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 4px ${ACCENT_YELLOW}40` }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="shadow-xl rounded-2xl overflow-hidden border-t-4 border-transparent hover:border-[#f2e63d] transition-all duration-300 h-full flex flex-col">
                <CardContent className="p-6 text-center flex flex-col items-center gap-3 flex-grow">
                  {item.icon}
                  <h3 className="text-xl font-bold text-[#2d2f55]">{item.title}</h3>
                  <p className="text-gray-600 flex-grow">{item.desc}</p>
                  <Link href={item.link} passHref className="mt-4 w-full">
                    <Button 
                      style={{ backgroundColor: ACCENT_YELLOW, color: PRIMARY_BLUE }} 
                      className="hover:bg-yellow-400 font-semibold w-full"
                    >
                      {item.btn}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. PARTNERS / SPONSORS SECTION (Adopted from your HTML) */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#2d2f55] mb-12">
                Trusted By Our <span style={{ color: ACCENT_YELLOW }}>Partners</span>
            </h2>

            {/* Sponsor Image Grid - Eye-Catching */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-center">
                {sponsorLogos.map((logo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="p-4 bg-gray-50 rounded-lg shadow-inner hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Use Next.js Image Component for optimization */}
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={150} 
                            height={80} 
                            className="w-full h-auto object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                    </motion.div>
                ))}
            </div>
            <div className="text-center mt-12">
                <Link href="/contact" passHref>
                    <Button 
                        variant="outline"
                        style={{ borderColor: PRIMARY_BLUE, color: PRIMARY_BLUE }}
                        className="hover:bg-gray-100 font-semibold py-3 px-8 text-lg rounded-full"
                    >
                        Join Our Partnership Network
                    </Button>
                </Link>
            </div>
        </div>
      </section>

      {/* 4. INITIATIVES & TESTIMONIALS (Retained from previous enhanced version) */}
      {/* (Sections 3, 4, and 5 from the previous reply would follow here) */}
      {/* ... [Current Initiatives, Testimonial, Final CTA sections] ... */}
    </main>
  );
}
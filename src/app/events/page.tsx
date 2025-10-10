// src/app/events/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Shirt, Zap } from "lucide-react";

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
// RESOLVED: Removed unused variables DARK_BLUE and LIGHT_GRAY_BG
const ACCENT_YELLOW = "#f2e63d";
const WHITE = "#ffffff"; 

export default function EventsPage() {
  const pastEvents = [
    { img: "/images/events/event8.jpg", title: "MO Dance Competition", date: "August 2025", desc: "Shaping Futures Crew Shines Bright at the MO Dance Competition!" },
    { img: "/images/events/event7.jpeg", title: "14th Edition Clothes Give Away", date: "June 2025", desc: "Spreading Dignity and Warmth during our 14th Edition Clothes Donation." },
    { img: "/images/events/event6.jpg", title: "Mental & Sexual Health Workshop", date: "May 2025", desc: "Empowering youth through education on healthy choices and wellbeing." },
    { img: "/images/events/event5.jpg", title: "April Holiday 2025 Programs", date: "April 2025", desc: "A season of growth and learning through our packed April Programs." },
    { img: "/images/events/event4.jpg", title: "13th Edition Clothes Give Away", date: "March 2025", desc: "Delivering dignity and warmth at Goodluck Children’s Home." },
    { img: "/images/events/event3.jpg", title: "12th Edition Clothes Give Away", date: "January 2025", desc: "Another milestone in our mission to uplift the community." },
    { img: "/images/events/event2.jpg", title: "11th Edition Clothes Give Away", date: "December 2024", desc: "Impactful Outreach: 11th Edition Clothes Donation Successfully Held" },
    { img: "/images/events/event1.jpg", title: "JIF Business Fellowship on Global Marketing", date: "November 2024", desc: "Expanding Horizons: Shaping Futures Attends The Business Fellowship on Global Marketing Trends" },
  ];

  return (
    <main className="bg-white text-gray-800">

      {/* 1. HERO SECTION (Dark Blue) */}
      <section className="relative bg-gradient-to-b from-[#2d2f55] to-[#1f2041] text-center pt-32 pb-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-4"
          style={{ color: ACCENT_YELLOW }}
        >
          <span style={{ color: WHITE }}>Upcoming</span> & Past Events
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed">
          Stay connected with our community — from outreach to dance, training, and transformation.
        </p>
      </section>

      {/* 2. UPCOMING EVENT (High Contrast Light Section: #f8f9fb) */}
      <section className="py-20 px-6 bg-[#f8f9fb] text-gray-800 border-b border-gray-200">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
          style={{ color: PRIMARY_BLUE }}
        >
          Next Event: 15th Edition Clothes Give Away
        </motion.h2>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center bg-white p-8 rounded-2xl shadow-2xl border-t-8" style={{ borderColor: PRIMARY_BLUE }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/events/event9.jpg" // Placeholder image for upcoming event
              alt="15th Edition Clothes Give Away"
              width={600}
              height={400}
              className="rounded-xl shadow-xl border-4"
              style={{ borderColor: ACCENT_YELLOW }}
            />
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold" style={{ color: PRIMARY_BLUE }}>
              Spreading Dignity and Warmth
            </h3>
            
            <div className="space-y-3 text-lg">
                <p className="flex items-center gap-3 font-semibold">
                    <Calendar className="w-6 h-6" style={{ color: ACCENT_YELLOW }} />
                    <span className="text-gray-700">Date:</span> **Saturday, 1st November 2025 (11:00 AM)**
                </p>
                <p className="flex items-center gap-3 font-semibold">
                    <MapPin className="w-6 h-6" style={{ color: ACCENT_YELLOW }} />
                    <span className="text-gray-700">Location:</span> **Black Stars Hall, Kibra**
                </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              We need your hands and resources! Your involvement helps us provide essential clothing, motivational talks, and a safe space for community connection.
            </p>

            <ul className="list-none p-0 space-y-2 pt-2">
                <li className="flex items-center gap-2 text-gray-600"><Shirt className="w-5 h-5" style={{ color: PRIMARY_BLUE }}/> Clothes collection and distribution</li>
                <li className="flex items-center gap-2 text-gray-600"><Users className="w-5 h-5" style={{ color: PRIMARY_BLUE }}/> Motivation talks and community engagement</li>
                <li className="flex items-center gap-2 text-gray-600"><Zap className="w-5 h-5" style={{ color: PRIMARY_BLUE }}/> Dance and performance sessions</li>
            </ul>

            <div className="pt-8 flex flex-wrap gap-4">
              <Link
                href="/get-involved/volunteer"
                className="bg-[#f2e63d] text-[#2d2f55] font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition"
              >
                Sign Up to Volunteer
              </Link>
              <Link
                href="/get-involved/donation"
                className="border border-[#2d2f55] text-[#2d2f55] font-semibold px-6 py-3 rounded-lg hover:bg-[#2d2f55] hover:text-white transition"
              >
                Donate Clothes/Funds
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WEEKLY SESSIONS (Accent Block: ACCENT_YELLOW) */}
      <section className="py-12 px-6 text-center" style={{ backgroundColor: ACCENT_YELLOW }}>
        <h2 className="text-3xl font-bold mb-2" style={{ color: PRIMARY_BLUE }}>
          Weekly Training Sessions & Workshops
        </h2>
        <p className="max-w-3xl mx-auto text-lg" style={{ color: PRIMARY_BLUE }}>
          Every **Saturday** from **10 AM – 5 PM**, join our **dance, leadership, and life skills** training sessions at our premises.
        </p>
      </section>

      {/* 4. PAST EVENTS GALLERY (Dark, but lighter than footer: #2c3e50) */}
      <section className="py-24 px-6 bg-[#2c3e50] border-t border-[#f2e63d]/30 text-white">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: ACCENT_YELLOW }}>
          Past Events Highlights
        </h2>
        
        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {pastEvents.map((event, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.5)" }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#34495e] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src={event.img}
                alt={event.title}
                width={500}
                height={350}
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
              <div className="p-5 text-left">
                <p className="text-sm font-light text-gray-400 mb-1">{event.date}</p>
                <h3 className="text-xl font-semibold mb-2" style={{ color: ACCENT_YELLOW }}>{event.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Link to Full Gallery */}
        <div className="text-center mt-16">
            <Link
                href="/gallery"
                className="bg-transparent border border-[#f2e63d] text-[#f2e63d] font-semibold px-8 py-3 rounded-full hover:bg-[#f2e63d] hover:text-[#2d2f55] transition text-lg"
            >
                View Full Photo Gallery →
            </Link>
        </div>
      </section>

      {/* 5. FINAL CTA (ACCENT_YELLOW for contrast against the dark blue footer) */}
      <section className="text-center py-16 text-black" style={{ backgroundColor: ACCENT_YELLOW }}>
        <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_BLUE }}>
          Ready to Get Involved?
        </h2>
        <p className="text-gray-800 mb-6">Your involvement makes transformation possible.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/get-involved/volunteer"
            // Button is dark blue on yellow background
            className="bg-[#2d2f55] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#1f2041] transition"
          >
            Volunteer
          </Link>
          <Link
            href="/get-involved/donation"
            // Button is outline blue on yellow background
            className="bg-transparent border border-[#2d2f55] text-[#2d2f55] font-semibold px-6 py-3 rounded-lg hover:bg-[#2d2f55] hover:text-white transition"
          >
            Donate
          </Link>
        </div>
      </section>
    </main>
  );
}
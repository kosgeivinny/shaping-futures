// src/app/events/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Shirt, Zap } from "lucide-react";

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";
const WHITE = "#ffffff"; 
const LIGHT_BACKGROUND = "#f8f9fb"; // Used for Section 2 background
const LIGHT_YELLOW_ACCENT = "#fcf9cc"; // Lighter yellow for the weekly banner

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

      {/* 1. HERO SECTION (Polished Dark Blue with Texture) */}
      <section 
        className="relative bg-gradient-to-b from-[#2d2f55] to-[#1f2041] text-center pt-32 pb-20 px-6 overflow-hidden"
      >
        {/* Subtle texture layer for visual depth (consistent with other pages) */}
        <div 
          className="absolute inset-0 z-0 w-full h-full opacity-90" 
          style={{ 
            backgroundImage: `radial-gradient(ellipse at center, rgba(45, 47, 85, 0.4) 0%, rgba(31, 32, 65, 0.8) 100%)`, 
            pointerEvents: 'none'
          }}
        ></div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 relative z-10"
          style={{ color: ACCENT_YELLOW }}
        >
          <span style={{ color: WHITE }}>Upcoming</span> & Past Events
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed relative z-10">
          Stay connected with our community — from outreach to dance, training, and transformation.
        </p>
      </section>

      {/* 2. UPCOMING EVENT (High Contrast Light Section: #f8f9fb) */}
      <section className={`py-20 px-6 bg-[${LIGHT_BACKGROUND}] text-gray-800`}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-4xl font-extrabold text-center mb-16 text-[${PRIMARY_BLUE}]`}
        >
          Next Event: 15th Edition Clothes Give Away
        </motion.h2>

        <div className={`max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-2xl shadow-2xl border-t-8 border-[${PRIMARY_BLUE}]`}>
          
          <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            // FIX 1: Removed fixed aspect ratio (aspect-[3/2]) so the height is determined by the description column (due to grid behavior).
            // FIX 2: Added h-full and w-full for the image wrapper to fill its column.
            className="relative w-full h-full" 
          >
            <Image
              src="/images/events/event9.jpg" 
              alt="15th Edition Clothes Give Away"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              // FIX 3: Changed back to object-cover so the image fills the entire height/width of the container (at the risk of minor cropping, which is acceptable for large visuals).
              // Removed border for a cleaner look that maximizes image size within the card.
              className={`rounded-xl object-cover shadow-xl`} 
              unoptimized
            />
          </motion.div>

          <div className="space-y-6">
            <h3 className={`text-3xl font-extrabold text-[${PRIMARY_BLUE}]`}>
              Spreading Dignity and Warmth
            </h3>
            
            {/* Event Details - Cleaned up for better scanning */}
            <div className="space-y-3 text-xl font-semibold">
                <p className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 flex-shrink-0" style={{ color: ACCENT_YELLOW }} />
                    <span className="text-gray-700">Sat, 1st November 2025 at 11:00 AM</span>
                </p>
                <p className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 flex-shrink-0" style={{ color: ACCENT_YELLOW }} />
                    <span className="text-gray-700">Black Stars Hall, Kibra</span>
                </p>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
              We need your hands and resources! Your involvement helps us provide essential clothing, motivational talks, and a safe space for community connection.
            </p>

            <ul className="list-none p-0 space-y-2 pt-2">
                <li className="flex items-center gap-2 text-gray-600 font-medium"><Shirt className="w-5 h-5 flex-shrink-0" style={{ color: PRIMARY_BLUE }}/> Clothes collection and distribution</li>
                <li className="flex items-center gap-2 text-gray-600 font-medium"><Users className="w-5 h-5 flex-shrink-0" style={{ color: PRIMARY_BLUE }}/> Motivation talks and community engagement</li>
                <li className="flex items-center gap-2 text-gray-600 font-medium"><Zap className="w-5 h-5 flex-shrink-0" style={{ color: PRIMARY_BLUE }}/> Dance and performance sessions</li>
            </ul>

            {/* CTA Buttons */}
            <div className="pt-8 flex flex-wrap gap-4">
              <Link
                href="/get-involved/volunteer"
                className={`bg-[${ACCENT_YELLOW}] text-[${PRIMARY_BLUE}] font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.03] transition transform text-lg`}
              >
                Sign Up to Volunteer
              </Link>
              <Link
                href="/get-involved/donation"
                className={`border border-[${PRIMARY_BLUE}] text-[${PRIMARY_BLUE}] font-semibold px-8 py-3 rounded-full hover:bg-[${PRIMARY_BLUE}] hover:text-white transition text-lg`}
              >
                Donate Clothes/Funds
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WEEKLY SESSIONS (Accent Block: LIGHT_YELLOW_ACCENT) */}
      <section className="py-12 px-6 text-center" style={{ backgroundColor: LIGHT_YELLOW_ACCENT }}>
        <h2 className={`text-3xl font-extrabold mb-2 text-[${PRIMARY_BLUE}]`}>
          Weekly Training Sessions & Workshops
        </h2>
        <p className={`max-w-3xl mx-auto text-lg font-medium text-[${PRIMARY_BLUE}]`}>
          Every <strong>Saturday</strong> from <strong>10 AM – 5 PM</strong>, join our <strong>dance, leadership, and life skills</strong> training sessions at our premises.
        </p>
      </section>

      {/* 4. PAST EVENTS GALLERY (Fixed Aspect Ratio for Portrait Images) */}
      <section className="py-24 px-6 bg-[#2c3e50] border-t border-[#f2e63d]/30 text-white">
        <h2 className={`text-4xl font-extrabold text-center mb-16 text-[${ACCENT_YELLOW}]`}>
          Past Events Highlights
        </h2>
        
        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pastEvents.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.7)" }}
              className="relative bg-[#34495e] rounded-xl overflow-hidden shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[3/4] bg-gray-900">
                  <Image
                      src={event.img}
                      alt={event.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      // Image styling to flow with the rounded container
                      style={{borderRadius: '0.75rem 0.75rem 0 0'}} 
                  />
              </div>
              
              <div className="p-5 text-left">
                <p className="text-sm font-light text-gray-400 mb-1">{event.date}</p>
                <h3 className={`text-xl font-bold mb-2 text-[${ACCENT_YELLOW}]`}>{event.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Link to Full Gallery */}
        <div className="text-center mt-16">
            <Link
                href="/gallery"
                className={`bg-transparent border-2 border-[${ACCENT_YELLOW}] text-[${ACCENT_YELLOW}] font-semibold px-8 py-3 rounded-full hover:bg-[${ACCENT_YELLOW}] hover:text-[${PRIMARY_BLUE}] transition text-lg`}
            >
                View Full Photo Gallery →
            </Link>
        </div>
      </section>

      {/* 5. FINAL CTA (ACCENT_YELLOW) */}
      <section className="text-center py-16 text-black" style={{ backgroundColor: ACCENT_YELLOW }}>
        <h2 className={`text-3xl font-extrabold mb-4 text-[${PRIMARY_BLUE}]`}>
          Ready to Get Involved?
        </h2>
        <p className={`text-[${PRIMARY_BLUE}] font-medium mb-6`}>Your involvement makes transformation possible.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/get-involved/volunteer"
            className={`bg-[${PRIMARY_BLUE}] text-white font-bold px-7 py-3 rounded-full shadow hover:bg-[#1f2041] transition text-base`}
          >
            Volunteer
          </Link>
          <Link
            href="/get-involved/donation"
            className={`bg-transparent border-2 border-[${PRIMARY_BLUE}] text-[${PRIMARY_BLUE}] font-bold px-7 py-3 rounded-full hover:bg-[${PRIMARY_BLUE}] hover:text-white transition text-base`}
          >
            Donate
          </Link>
        </div>
      </section>
    </main>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Repeat2, Zap } from "lucide-react";
import { motion } from "framer-motion";

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";
const WHITE = "#ffffff"; // Used for section background
const LIGHT_GRAY = "#f8f9fb"; // Used for subtle contrast elements inside the cards

// --- Data for the Next Major Event (from your Events Page) ---
const upcomingMajorEvent = {
  title: "15th Edition Clothes Give Away",
  date: "Saturday, 1st November 2025",
  location: "Black Stars Hall, Kibra",
  description: "Join us for our largest community drive. We are distributing essential clothing, offering mentorship, and celebrating with empowering performances. Your support ensures dignity and warmth for families in need.",
  image: "/images/events/event9.jpg", // Placeholder image for upcoming event
};

// --- Data for the Weekly Sessions (from your Events Page) ---
const weeklySessions = {
    title: "Weekly Training Sessions",
    time: "Every Saturday, 10 AM – 5 PM",
    focus: "Dance, Leadership, and Life Skills",
    image: "/images/gallery/landscape16.jpg", // Placeholder for a landscape image
    imageAlt: "Youth participating in a weekly training session"
};

export default function HomeEvents() {
  return (
    // CRITICAL FIX: Changed section background to PURE WHITE for clear separation
    <section className="py-20" style={{ backgroundColor: WHITE }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: PRIMARY_BLUE }}>
            What&apos;s Happening Now
          </h2>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Stay engaged with our next <strong>major initiative</strong> and our <strong>consistent weekly programs</strong> that empower youth.
          </p>
          <div className="w-20 h-1 mt-4 mx-auto rounded-full" style={{ backgroundColor: ACCENT_YELLOW }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* COLUMN 1: UPCOMING MAJOR EVENT (High Priority Card) */}
          <motion.div 
            className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-3xl hover:translate-y-[-4px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            {/* Image Container */}
            <div 
              className="relative w-full h-96 border-b border-gray-100 flex items-center justify-center p-4 rounded-t-xl"
              style={{ background: 'linear-gradient(to bottom right, #f0f4f8, #e0e7ed)' }}
            > 
                <Image
                    src={upcomingMajorEvent.image}
                    alt={upcomingMajorEvent.title}
                    fill
                    className="object-contain rounded-lg border border-gray-200 shadow-sm" 
                />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4" style={{ backgroundColor: ACCENT_YELLOW, color: PRIMARY_BLUE }}>
                Next Major Outreach
              </span>
              <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_BLUE }}>
                {upcomingMajorEvent.title}
              </h3>
              
              {/* Event Details */}
              <div className="space-y-3 text-gray-700 mb-6 text-base">
                  <p className="flex items-center font-semibold">
                      <Calendar className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: ACCENT_YELLOW }} />
                      {upcomingMajorEvent.date}
                  </p>
                  <p className="flex items-center font-semibold">
                      <MapPin className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: PRIMARY_BLUE }} />
                      {upcomingMajorEvent.location}
                  </p>
              </div>

              <p className="text-gray-700 mb-8 flex-grow leading-relaxed">{upcomingMajorEvent.description}</p>
              
              {/* Primary CTA */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-auto">
                <Link
                    href="/events" // Direct link to the specific event details on the events page
                    className="inline-flex items-center justify-center w-full font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-300 group"
                    style={{ backgroundColor: PRIMARY_BLUE, color: WHITE }}
                >
                    View Details & How to Help
                    <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          {/* COLUMN 2: WEEKLY SESSIONS (Recurring Opportunity Card) */}
          <motion.div 
            className="p-8 rounded-xl shadow-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-3xl"
            style={{ backgroundColor: WHITE, borderTop: `8px solid ${ACCENT_YELLOW}` }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div>
                <Repeat2 className="w-10 h-10 mb-5" style={{ color: PRIMARY_BLUE }} />
                <h3 className="text-3xl font-extrabold mb-4" style={{ color: PRIMARY_BLUE }}>
                    {weeklySessions.title}
                </h3>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                    Our commitment is year-round. Every week, we run core programs focused on building life skills and artistic confidence in our youth.
                </p>

                {/* Sub-card background now uses LIGHT_GRAY for visual separation */}
                <div className="p-5 rounded-lg border-l-4" style={{ borderColor: PRIMARY_BLUE, backgroundColor: LIGHT_GRAY }}> 
                    <p className="text-xl font-bold mb-1" style={{ color: PRIMARY_BLUE }}>
                        <Zap className="w-5 h-5 inline mr-3" style={{ color: ACCENT_YELLOW }}/> Core Focus: <span className="font-extrabold">{weeklySessions.focus}</span>
                    </p>
                    <p className="text-gray-700 font-semibold mt-1">Time: {weeklySessions.time}</p>
                </div>

                {/* NEW: Landscape image for Weekly Sessions */}
                <div className="relative w-full aspect-video mt-8 rounded-lg overflow-hidden shadow-md border border-gray-200">
                    <Image
                        src={weeklySessions.image}
                        alt={weeklySessions.imageAlt}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            
            {/* CTA for all events and sessions */}
            <div className="mt-10 pt-4 border-t border-gray-200">
                <Link
                  href="/events"
                  className="inline-flex items-center font-extrabold text-lg transition-colors duration-300 group"
                  style={{ color: PRIMARY_BLUE }}
                >
                  Explore All Sessions & Past Highlights
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
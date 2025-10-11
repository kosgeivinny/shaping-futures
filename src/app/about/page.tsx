// src/app/about/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion"; 
// Assuming '@/lib/teamData' is available and correctly exports teamMembers
import { teamMembers } from "@/lib/teamData"; 

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";
const WHITE = "#ffffff";

// --- Framer Motion Component for Link ---
// This is the cleanest way to apply Framer Motion props like whileHover to Next.js Link.
const MotionLink = motion(Link);

// --- Type Definitions ---
interface ValueCardProps {
  icon: string;
  title: string;
  text: string | React.ReactNode; 
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

// --- Component for Mission, Vision, Values Cards ---
const ValueCard = ({ icon, title, text }: ValueCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="bg-[#353769]/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-t-4 border-[#f2e63d] hover:shadow-3xl transition-all duration-300"
  >
    <div className="text-[#f2e63d] text-4xl mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
    <div className="text-gray-300">{text}</div>
  </motion.div>
);

// --- Component for Standard Team Member Card ---
const TeamCard = ({ member, index }: { member: TeamMember, index: number }) => (
  <motion.div
    key={member.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }} 
    className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 text-center border border-transparent hover:border-[#2d2f55]/30 cursor-pointer"
  >
    <div className="relative w-36 h-36 mx-auto mb-4">
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="144px"
        className="object-cover rounded-full border-4 border-[#2d2f55]/10 shadow-lg"
        unoptimized
      />
    </div>
    <h3 className="font-extrabold text-xl text-[#2d2f55] leading-snug">
      {member.name}
    </h3>
    <p className="text-base text-gray-600 mb-3">{member.role}</p>
    <p className="text-sm italic text-gray-500 leading-relaxed">{member.bio}</p>
  </motion.div>
);

// --- Component for Highlighted (CEO/Founder) Team Member Card ---
const HighlightedTeamCard = ({ member }: { member: TeamMember }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.01, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
    className="bg-white col-span-full rounded-2xl p-10 shadow-2xl transition-all duration-500 text-center border-t-8 border-[#2d2f55] my-4 max-w-3xl mx-auto cursor-pointer"
  >
    <div className="relative w-48 h-48 mx-auto mb-6">
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="192px"
        className="object-cover rounded-full border-4 border-[#f2e63d] shadow-2xl"
        unoptimized
      />
    </div>
    <h3 className="text-4xl font-extrabold text-[#2d2f55] leading-snug">
      {member.name}
    </h3>
    <p className="text-xl font-semibold text-[#f2e63d] mb-4">{member.role}</p>
    <p className="text-lg text-gray-700 leading-relaxed italic max-w-lg mx-auto">&quot;{member.bio}&quot;</p>
  </motion.div>
);
// ---------------------------------------------------

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  
  // Create a subtle parallax/zoom effect for the hero image background
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const valueCardsData = [
    {
      icon: "📘",
      title: "Our Mission",
      text: "Our mission is to empower youth through the transformative power of dance and community support. We believe that every child deserves the opportunity to thrive and succeed, both academically and personally.",
    },
    {
      icon: "👁️",
      title: "Our Vision",
      text: "We envision a world where every child has access to resources and support that enable them to reach their full potential. Through our programs, we aim to create a positive and lasting impact on the lives of the children we serve.",
    },
    {
      icon: "✨",
      title: "Core Values",
      text: (
        <ul className="text-gray-300 space-y-2 text-left mx-auto max-w-xs list-disc list-inside">
          <li>Inclusivity & Belonging</li>
          <li>Empowerment & Confidence</li>
          <li>Community & Unity</li>
          <li>Excellence & Integrity</li>
        </ul>
      ),
    },
  ];

  // Assuming teamMembers has at least one member
  const founder = teamMembers[0];
  const coreTeam = teamMembers.slice(1);

  return (
    <main className="bg-[#f3f4f9] text-gray-800">
      
      {/* 1. HERO SECTION (Parallax) */}
      <motion.section 
        className="relative bg-gradient-to-b from-[#2d2f55] via-[#2d2f55] to-[#1f2041] text-white px-6 text-center overflow-hidden"
      >
        <motion.div 
            style={{ y: yParallax, scale: useTransform(scrollYProgress, [0, 0.5], [1, 1.1]) }} 
            className="absolute inset-0 z-0 w-full h-full" 
        >
          {/* Simulating a dark background/texture */}
          <div className="w-full h-full bg-[#2d2f55] opacity-20"></div>
        </motion.div>

        <div className="relative z-10 py-32"> 
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            style={{ color: ACCENT_YELLOW }}
          >
            <span style={{ color: WHITE }}>Our Story</span> & Our Team
          </motion.h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-200 leading-relaxed">
            Meet the dedicated individuals driving the mission of Shaping Futures.
          </p>
        </div>
      </motion.section>

      {/* 2. WHO WE ARE / HISTORY SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7 }}
                className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
                <Image
                    src="/images/gallery/landscape11.jpg"
                    alt="Youth participating in Shaping Futures program"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    unoptimized
                />
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-4xl font-bold text-[#2d2f55] mb-6">
                    Building Brighter Futures, <span style={{ color: ACCENT_YELLOW }}>One Step at a Time</span>
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Welcome! We are dedicated to making a positive impact in the community through various programs, with a primary focus on dance. Our goal is to provide <strong>support and opportunities for children in need,</strong> helping them develop their skills and talents while fostering a sense of community and belonging.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Our approach is holistic: We address immediate needs while investing in long-term development. Every program is designed to nurture confidence and resilience, ensuring every child has the <strong>opportunity to dream and achieve</strong> a self-determined future.
                </p>
            </motion.div>
        </div>
      </section>

      {/* 3. MISSION, VISION, VALUES */}
      <section className="bg-[#2d2f55] text-white py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: ACCENT_YELLOW }}>
            Our Core Pillars
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {valueCardsData.map((card, index) => (
            <ValueCard key={index} {...card} />
          ))}
        </div>
      </section>
      
      {/* 4. TEAM SECTION - Full Display */}
      <section className="py-20 px-6 bg-[#f3f4f9]">
        <h2 className="text-4xl font-extrabold text-center text-[#2d2f55] mb-4">
          Meet The Entire Dedicated Team
        </h2>
        <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our success is driven by the passion and dedication of our staff, volunteers, and leadership.
        </p>

        {/* Highlighted Founder/CEO */}
        {founder && <HighlightedTeamCard member={founder as TeamMember} />}

        {/* Core Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
          {coreTeam.map((member, index) => (
            <TeamCard key={member.id} member={member as TeamMember} index={index} />
          ))}
        </div>
      </section>

      {/* 5. FINAL CTA SECTION (ACCENT COLOR) */}
      <section className="text-center py-20 text-black" style={{ backgroundColor: ACCENT_YELLOW }}>
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-2xl font-semibold leading-relaxed mb-8" style={{ color: PRIMARY_BLUE }}>
            Inspired by our commitment? Join us in making more impactful moments possible.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            {/* FIX: Using MotionLink (motion(Link)) to handle animation and routing smoothly */}
            <MotionLink 
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)", 
                backgroundColor: "#1f2041" // Darker blue on hover
              }}
              transition={{ duration: 0.2 }}
              
              href="/get-involved/donation"
              className="inline-block text-white font-extrabold px-10 py-4 rounded-lg shadow-xl text-lg uppercase tracking-wider transform"
              style={{ backgroundColor: PRIMARY_BLUE }} 
            >
              Support Our Work Today
            </MotionLink>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
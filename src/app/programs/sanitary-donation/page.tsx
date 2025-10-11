"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Droplet, BookOpen, School, Gift } from 'lucide-react'; 

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";
const WHITE = "#ffffff";
const LIGHT_PINK = "#fef0f8"; // Light background for this sensitive topic
const IMPACT_COLOR = "#e91e63"; // A strong color for the cause (Pink/Red)

// --- Data for Program Components (What We Offer) ---
const programComponents = [
  { 
    title: "Sanitary Product Supply", 
    description: "Consistent provision of high-quality pads and other menstrual products to girls.", 
    icon: Droplet, // Represents blood/menstruation
    color: IMPACT_COLOR 
  },
  { 
    title: "Menstrual Health Education", 
    description: "Workshops to demystify periods, teach hygiene, and empower girls with knowledge.", 
    icon: BookOpen, 
    color: PRIMARY_BLUE 
  },
  { 
    title: "School Retention", 
    description: "Directly addressing period poverty, ensuring girls do not miss school days.", 
    icon: School, 
    color: IMPACT_COLOR
  },
  { 
    title: "Ending Stigma", 
    description: "Running awareness campaigns within the community to normalize menstruation.", 
    icon: Heart, 
    color: PRIMARY_BLUE
  },
];

// --- Data for the Image Gallery (Placeholder paths) ---
const galleryImages = [
    { src: '/images/sanitary/sanitary1.png', alt: 'Sanitary Towel Donation Distribution' },
    { src: '/images/sanitary/sanitary2.png', alt: 'Menstrual Health Workshop' },
    { src: '/images/sanitary/sanitary1.png', alt: 'Packs of donated sanitary towels' },
];

export default function SanitaryDonationPage() {

    // Helper component for rendering program components
    const ComponentCard = ({ title, description, icon: Icon, color, delay }: typeof programComponents[0] & { delay: number }) => (
        <motion.div 
            className="p-6 bg-white rounded-xl shadow-xl border-b-4" 
            style={{ borderColor: color }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: delay }}
            whileHover={{ y: -5, boxShadow: "0 15px 25px rgba(0, 0, 0, 0.1)" }}
        >
            <Icon className="w-8 h-8 mb-3" style={{ color: color }} />
            <h4 className="text-xl font-bold mb-2" style={{ color: PRIMARY_BLUE }}>{title}</h4>
            <p className="text-gray-600 text-sm">{description}</p>
        </motion.div>
    );

  return (
    <main className={`bg-[${LIGHT_PINK}]`}>
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-16 text-center bg-gradient-to-b from-[#2d2f55] to-[#1f2041]">
        
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" 
             style={{ backgroundImage: 'url("/images/programs/sanitary.jpg")' }} 
        />
        
        <div className="relative max-w-4xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ color: WHITE }}>
                    Restore <span style={{ color: IMPACT_COLOR }}>Dignity & Education</span>
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                    Our program tackles period poverty directly, providing free sanitary products and essential health education to keep girls confident and in the classroom.
                </p>
                {/* Primary CTA in the Hero */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='inline-block'>
                    <Link 
                        href="/get-involved/donation" 
                        className="inline-flex items-center bg-[#f2e63d] text-[#2d2f55] font-extrabold px-10 py-4 rounded-full shadow-2xl text-lg transition-colors duration-300 hover:bg-[#ffe85e] group"
                    >
                        Support a Girl Now
                        <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </motion.div>
        </div>
      </section>
      
      ---
      
      {/* 2. PROGRAM COMPONENTS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12" style={{ color: PRIMARY_BLUE }}>
            Our Four Pillars of Support
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programComponents.map((component, index) => (
                <ComponentCard key={index} {...component} delay={index * 0.15} />
            ))}
        </div>
      </section>

      ---

      {/* 3. IMPACT STATEMENT & DONATION CTA - Split Section */}
      <section className="py-20 px-6" style={{ backgroundColor: WHITE }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Impact Text */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
            >
                <h3 className="text-4xl font-extrabold" style={{ color: PRIMARY_BLUE }}>
                    The Link Between Dignity and Destiny
                </h3>
                <p className="text-lg text-gray-700">
                    When girls lack access to basic sanitary protection, they miss up to <strong>20% of their school year</strong>, falling behind academically and risking dropout.
                </p>
                <div className="p-4 rounded-lg border-l-4" style={{ borderColor: IMPACT_COLOR, backgroundColor: LIGHT_PINK }}>
                    <p className="font-semibold text-gray-800 flex items-center">
                        <School className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: IMPACT_COLOR }} />
                        Providing pads means securing their education. It&apos;s the simplest way to keep a girl in school.
                    </p>
                </div>
            </motion.div>

            {/* Donation CTA Card */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7 }}
                className="p-8 rounded-xl shadow-2xl" style={{ backgroundColor: IMPACT_COLOR }}
            >
                <Gift className="w-12 h-12 mb-4 mx-auto" style={{ color: ACCENT_YELLOW }} />
                <h4 className="text-3xl font-extrabold text-center mb-4" style={{ color: WHITE }}>
                    Fund a Girl&apos;s Year of Pads
                </h4>
                <p className="text-center text-gray-200 mb-6">
                    A small monthly donation ensures one girl receives products and education for 12 months, guaranteeing consistent attendance.
                </p>
                
                <Link 
                    href="/get-involved/donation"
                    className="inline-flex items-center justify-center w-full bg-[#f2e63d] text-[#2d2f55] font-extrabold px-8 py-3 rounded-full shadow-lg text-lg transition-colors duration-300 hover:bg-[#ffe85e]"
                >
                    Make a Monthly Donation
                    <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
            </motion.div>
        </div>
      </section>

      ---

      {/* 4. PROGRAM GALLERY (3 Images in a Single Row) */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10" style={{ color: PRIMARY_BLUE }}>
            Distribution in Focus
        </h2>
        
        {/* Using grid-cols-3 and a square ratio for the three images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {galleryImages.map((img, index) => (
                <motion.div
                    key={index}
                    className="relative w-full overflow-hidden rounded-lg shadow-md"
                    // Square ratio for consistent look across the three images
                    style={{ paddingBottom: '100%' }} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <Image 
                        src={img.src} 
                        alt={img.alt} 
                        layout="fill" 
                        objectFit="cover"
                        className="transition-transform duration-500"
                    />
                </motion.div>
            ))}
        </div>
      </section>

      ---

      {/* 5. DUAL CTA - Product Donation & Volunteer */}
      <section className="text-center py-20 text-black" style={{ backgroundColor: ACCENT_YELLOW }}>
        <h2 className="text-4xl font-extrabold mb-4" style={{ color: PRIMARY_BLUE }}>
          Have Products or Time to Give?
        </h2>
        <p className="text-gray-800 mb-10 max-w-2xl mx-auto text-lg">
          We welcome direct donations of sealed sanitary products or volunteers to assist with educational workshops and distribution logistics.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
            
            {/* CTA 1: Donate Products/Funds */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                    href="/get-involved/donation"
                    className="inline-flex items-center bg-[#2d2f55] text-white font-extrabold px-8 py-3 rounded-full shadow-2xl text-lg transition-colors duration-300 hover:bg-[#1f2041] group"
                >
                    <Gift className="w-5 h-5 mr-2" />
                    Drop Off Products
                </Link>
            </motion.div>

            {/* CTA 2: Volunteer for Education */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                    href="/get-involved/volunteer"
                    className="inline-flex items-center border-2 border-[#2d2f55] bg-transparent text-[#2d2f55] font-extrabold px-8 py-3 rounded-full shadow-2xl text-lg transition-all duration-300 hover:bg-[#2d2f55] hover:text-white group"
                >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Volunteer for Workshops
                </Link>
            </motion.div>
        </div>
      </section>
    </main>
  );
}
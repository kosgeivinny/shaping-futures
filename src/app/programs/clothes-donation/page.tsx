"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shirt, MapPin, Heart, ArrowRight, HandCoins, Users } from 'lucide-react'; 

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";
const WHITE = "#ffffff";

// --- Data for the Donation Steps Section ---
const donationSteps = [
  { 
    title: "Sort with Care", 
    description: "Select gently used clothes, ensuring they are clean and in good condition to provide maximum dignity.", 
    icon: Shirt // Represents the item
  },
  { 
    title: "Drop Off or Arrange", 
    description: "Visit our designated drop-off points or contact us to schedule a convenient collection.", 
    icon: MapPin // Represents location/logistics
  },
  { 
    title: "See the Impact", 
    description: "Your donation is quickly sorted and distributed directly to families and individuals in need.", 
    icon: Heart // Represents the end result/impact
  },
];

// --- Data for the Image Gallery (Placeholder paths) ---
const galleryImages = [
    { src: '/images/cloths/cloth1.jpg', alt: 'Clothes Donation Distribution' },
    { src: '/images/cloths/cloth2.jpg', alt: 'Bags of donated clothes ready for sorting' },
    { src: '/images/cloths/cloth3.jpg', alt: 'Child receiving donated shirt' },
    { src: '/images/cloths/cloth4.png', alt: 'Volunteer sorting clothes' },
    { src: '/images/cloths/cloth5.png', alt: 'Clothes organized for distribution' },
    { src: '/images/cloths/cloth6.jpg', alt: 'Warm coat donation' },
];

export default function ClothesDonationPage() {

    // Helper component for rendering steps
    const StepCard = ({ title, description, icon: Icon, delay }: typeof donationSteps[0] & { delay: number }) => (
        <motion.div 
            className="p-6 bg-white rounded-xl shadow-lg border-b-4" 
            style={{ borderColor: ACCENT_YELLOW }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: delay }}
        >
            <Icon className="w-8 h-8 mb-3" style={{ color: PRIMARY_BLUE }} />
            <h4 className="text-xl font-bold mb-2" style={{ color: PRIMARY_BLUE }}>{title}</h4>
            <p className="text-gray-600 text-sm">{description}</p>
        </motion.div>
    );

  return (
    <main className="bg-[#f8f9fb]">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-16 text-center bg-gradient-to-b from-[#2d2f55] to-[#1f2041]">
        
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" 
             style={{ backgroundImage: 'url("/images/programs/clothes.jpg")' }} 
        />
        
        <div className="relative max-w-4xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ color: WHITE }}>
                    Give the Gift of <span style={{ color: ACCENT_YELLOW }}>Warmth & Dignity</span>
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                    Our Clothes Donation Program provides essential clothing to families and individuals facing hardship. Your generosity offers comfort and hope.
                </p>
                {/* Primary CTA in the Hero */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='inline-block'>
                    <Link 
                        href="/get-involved/donation"
                        className="inline-flex items-center bg-[#f2e63d] text-[#2d2f55] font-extrabold px-10 py-4 rounded-full shadow-2xl text-lg transition-colors duration-300 hover:bg-[#ffe85e] group"
                    >
                        Start Your Donation Today
                        <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </motion.div>
        </div>
      </section>
      
      ---
      
      {/* 2. PROGRAM OVERVIEW / WHY IT MATTERS */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
        >
            <p className="text-base font-semibold uppercase tracking-widest" style={{ color: ACCENT_YELLOW }}>
                Our Mission
            </p>
            <h2 className="text-4xl font-extrabold" style={{ color: PRIMARY_BLUE }}>
                Why Clothing Donations Are Critical
            </h2>
            <p className="text-lg text-gray-700">
                A warm coat, a fresh outfit—these items are often taken for granted, but for families in difficult circumstances, they are essentials that restore <strong>dignity and confidence</strong>.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                <li><strong>Immediate Comfort:</strong> Provides warmth and protection against the elements.</li>
                <li><strong>Restored Dignity:</strong> Ensures children and adults have appropriate attire for school, interviews, and community life.</li>
                <li><strong>Financial Relief:</strong> Frees up scarce financial resources for food and shelter.</li>
            </ul>
        </motion.div>

        {/* Placeholder for a single large, impactful image or a statistic box */}
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-80 rounded-xl shadow-2xl overflow-hidden"
        >
             {/* Using the first image for a high-impact visual */}
            <Image 
                src='/images/programs/clothes.jpg'
                alt={galleryImages[0].alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
            />
        </motion.div>
      </section>

      ---

      {/* 3. HOW TO DONATE - Step-by-Step Guide */}
      <section className="py-20 px-6" style={{ backgroundColor: WHITE }}>
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center mb-6" style={{ color: PRIMARY_BLUE }}>
                Simple Steps to Give Hope
            </h2>
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                We make the process easy and transparent. Follow these steps to ensure your contribution reaches those who need it most.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
                {donationSteps.map((step, index) => (
                    <StepCard key={index} {...step} delay={index * 0.2} />
                ))}
            </div>

            {/* In-Section CTA */}
            <motion.div 
                className="mt-12 text-center"
                whileHover={{ y: -3 }}
            >
                <Link 
                    href="/get-involved/donations"
                    className="inline-flex items-center bg-[#2d2f55] text-white font-extrabold px-8 py-3 rounded-full shadow-xl text-lg transition-colors duration-300 hover:bg-[#1f2041]"
                >
                    View Drop-off Locations & Guidelines
                    <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
            </motion.div>
        </div>
      </section>

      ---
      
      {/* 4. IMPACT GALLERY (Visual Storytelling) */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10" style={{ color: PRIMARY_BLUE }}>
            Your Impact in Pictures
        </h2>
        
        {/* Gallery Grid - UPDATED FOR 2 ROWS OF 3 IMAGES (LANDSCAPE FRIENDLY) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
                <motion.div
                    key={index}
                    className="relative w-full overflow-hidden rounded-lg shadow-md"
                    // Set paddingBottom to 66.66% for a 3:2 landscape aspect ratio (better than 100% for landscape images)
                    style={{ paddingBottom: '66.66%' }} 
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

      {/* 5. DUAL CTA - Other Ways to Support (Financial & Volunteer) */}
      <section className="text-center py-20 text-black" style={{ backgroundColor: ACCENT_YELLOW }}>
        <h2 className="text-4xl font-extrabold mb-4" style={{ color: PRIMARY_BLUE }}>
          Can&apos;t Donate Clothes Right Now?
        </h2>
        <p className="text-gray-800 mb-10 max-w-2xl mx-auto text-lg">
          You can still provide warmth and stability through financial support or by lending a hand with sorting and logistics.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
            
            {/* CTA 1: Donate Money */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                    href="/get-involved/donation"
                    className="inline-flex items-center bg-[#2d2f55] text-white font-extrabold px-8 py-3 rounded-full shadow-2xl text-lg transition-colors duration-300 hover:bg-[#1f2041] group"
                >
                    <HandCoins className="w-5 h-5 mr-2" />
                    Give a Financial Gift
                </Link>
            </motion.div>

            {/* CTA 2: Volunteer */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                    href="/get-involved/volunteer"
                    className="inline-flex items-center border-2 border-[#2d2f55] bg-transparent text-[#2d2f55] font-extrabold px-8 py-3 rounded-full shadow-2xl text-lg transition-all duration-300 hover:bg-[#2d2f55] hover:text-white group"
                >
                    <Users className="w-5 h-5 mr-2" />
                    Become a Volunteer
                </Link>
            </motion.div>
        </div>
      </section>
    </main>
  );
}
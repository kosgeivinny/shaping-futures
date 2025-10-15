"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
// CORRECTED: Added Handshake to the import list
import { ArrowRight, Utensils, Heart, Home, ChefHat, Salad, Handshake } from 'lucide-react'; 

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";
const WHITE = "#ffffff";
const LIGHT_GRAY = "#f8f9fb";

// --- Data for Program Components (What We Provide) ---
const programComponents = [
  { 
    title: "Nutritious Meals", 
    description: "Providing weekly, balanced meals crucial for the health and energy of growing children.", 
    icon: Utensils 
  },
  { 
    title: "Health & Development", 
    description: "Ensuring proper nutrition to support cognitive function and strong physical growth.", 
    icon: Heart 
  },
  { 
    title: "Community Outreach", 
    description: "Distributing meals directly to families and at community centers where the need is greatest.", 
    icon: Home 
  },
  { 
    title: "Nutritional Education", 
    description: "Running workshops for families on healthy eating and food preparation with limited resources.", 
    icon: Salad 
  },
];

// --- Data for the Image Gallery (Placeholder paths) ---
const galleryImages = [
    { src: '/images/feeding/feed1.jpg', alt: 'Meal Distribution in the community' },
    { src: '/images/feeding/feed6.jpg', alt: 'Volunteers serving hot meals' },
    { src: '/images/feeding/feed2.jpg', alt: 'Community Feeding Event setup' },
    { src: '/images/feeding/feed3.jpg', alt: 'Children enjoying a healthy meal' },
    { src: '/images/feeding/feed5.jpg', alt: 'Nutritional education session' },
    { src: '/images/feeding/feed4.jpg', alt: 'Food preparation and cooking area' },
];

export default function FeedingProgramPage() {

    // Helper component for rendering program components
    const ComponentCard = ({ title, description, icon: Icon, delay }: typeof programComponents[0] & { delay: number }) => (
        <motion.div 
            className="p-6 bg-white rounded-xl shadow-lg border-r-4" 
            style={{ borderColor: ACCENT_YELLOW }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: delay }}
            whileHover={{ y: -5, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
        >
            <Icon className="w-8 h-8 mb-3" style={{ color: PRIMARY_BLUE }} />
            <h4 className="text-xl font-bold mb-2" style={{ color: PRIMARY_BLUE }}>{title}</h4>
            <p className="text-gray-600 text-sm">{description}</p>
        </motion.div>
    );

  return (
    <main className="bg-[${LIGHT_GRAY}]">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-16 text-center bg-gradient-to-b from-[#2d2f55] to-[#1f2041]">
        
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" 
             style={{ backgroundImage: 'url("/images/programs/feeding.jpg")' }} 
        />
        
        <div className="relative max-w-4xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ color: WHITE }}>
                    Nourishing <span style={{ color: ACCENT_YELLOW }}>Hope</span>
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                    Our Feeding Program ensures children and families have access to the <strong>nutritious meals</strong> essential for health, growth, and the ability to learn.
                </p>
                {/* Primary CTA in the Hero */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='inline-block'>
                    <Link 
                        href="/get-involved/donation" 
                        className="inline-flex items-center bg-[#f2e63d] text-[#2d2f55] font-extrabold px-10 py-4 rounded-full shadow-2xl text-lg transition-colors duration-300 hover:bg-[#ffe85e] group"
                    >
                        Sponsor a Meal Today
                        <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </motion.div>
        </div>
      </section>
      
      
      
      {/* 2. PROGRAM COMPONENTS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12" style={{ color: PRIMARY_BLUE }}>
            More Than Food: Our Holistic Approach
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programComponents.map((component, index) => (
                <ComponentCard key={index} {...component} delay={index * 0.15} />
            ))}
        </div>
      </section>

      

      {/* 3. IMPACT STATEMENT & CALL TO ACTION */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: WHITE }}>
        <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-extrabold mb-4" style={{ color: PRIMARY_BLUE }}>
                $5 Can Provide a Week of Nourishment
            </h3>
            <p className="text-lg text-gray-700 mb-8">
                Hunger prevents children from learning, playing, and growing. By sponsoring meals, you directly contribute to a child&apos;s <strong>physical and educational development</strong>.
            </p>
            
            <motion.div 
                className="inline-block p-6 rounded-xl shadow-2xl" 
                style={{ backgroundColor: ACCENT_YELLOW }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <Utensils className="w-10 h-10 flex-shrink-0" style={{ color: PRIMARY_BLUE }} />
                    <p className="text-xl font-bold" style={{ color: PRIMARY_BLUE }}>
                        Target: Feed 200 children weekly. Help us reach our goal!
                    </p>
                    <Link 
                        href="/get-involved/donation"
                        className="inline-flex items-center flex-shrink-0 bg-[#2d2f55] text-white font-extrabold px-6 py-3 rounded-full transition-colors duration-300 hover:bg-[#1f2041] group"
                    >
                        Donate Now
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </motion.div>
        </div>
      </section>

      

      {/* 4. PROGRAM GALLERY (2 Rows of 3 for visibility) */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10" style={{ color: PRIMARY_BLUE }}>
            Meals and Smiles
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
                <motion.div
                    key={index}
                    className="relative w-full overflow-hidden rounded-lg shadow-md"
                    // 3:2 landscape ratio for general food/serving images
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

      

      {/* 5. DUAL CTA - Volunteer & Partner */}
      <section className="text-center py-20 text-black" style={{ backgroundColor: LIGHT_GRAY }}>
        <h2 className="text-4xl font-extrabold mb-4" style={{ color: PRIMARY_BLUE }}>
          Give Your Time or Resources
        </h2>
        <p className="text-gray-800 mb-10 max-w-2xl mx-auto text-lg">
          We need hands to prepare and distribute food, and partners to ensure a sustainable supply chain.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
            
            {/* CTA 1: Volunteer to cook/serve */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                    href="/get-involved/volunteer"
                    className="inline-flex items-center bg-[#2d2f55] text-white font-extrabold px-8 py-3 rounded-full shadow-2xl text-lg transition-colors duration-300 hover:bg-[#1f2041] group"
                >
                    <ChefHat className="w-5 h-5 mr-2" />
                    Volunteer to Serve
                </Link>
            </motion.div>

            {/* CTA 2: Partnership (Farms, Corporates, Restaurants) */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                    href="/contact"
                    className="inline-flex items-center border-2 border-[#2d2f55] bg-transparent text-[#2d2f55] font-extrabold px-8 py-3 rounded-full shadow-2xl text-lg transition-all duration-300 hover:bg-[#2d2f55] hover:text-white group"
                >
                    <Handshake className="w-5 h-5 mr-2" />
                    Explore Partnership
                </Link>
            </motion.div>
        </div>
      </section>
    </main>
  );
}
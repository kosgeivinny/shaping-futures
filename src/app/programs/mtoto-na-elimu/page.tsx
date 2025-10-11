"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, GraduationCap, Users, Shield, Zap, DollarSign } from 'lucide-react'; 

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";
const WHITE = "#ffffff";
const LIGHT_GRAY = "#f8f9fb";

// --- Data for Program Components (Support Offered) ---
const programComponents = [
  { 
    title: "School Fee Sponsorship", 
    description: "Covering tuition and educational expenses for students from underprivileged backgrounds.", 
    icon: DollarSign 
  },
  { 
    title: "Personalized Mentorship", 
    description: "One-on-one guidance to boost motivation, set career goals, and ensure well-being.", 
    icon: Users 
  },
  { 
    title: "Academic Monitoring", 
    description: "Regular check-ins and school visits to track progress and provide timely intervention.", 
    icon: BookOpen 
  },
  { 
    title: "Resource Provision", 
    description: "Supplying books, uniforms, and stationary to remove barriers to learning.", 
    icon: Shield 
  },
];

// --- Data for the Image Gallery (Placeholder paths) ---
const galleryImages = [
    { src: '/images/elimu/elimu1.jpg', alt: 'Education Support session' },
    { src: '/images/elimu/elimu2.jpg', alt: 'School visit and interaction' },
    { src: '/images/elimu/elimu3.jpg', alt: 'Student receiving mentorship' },
    { src: '/images/elimu/elimu4.jpg', alt: 'Children learning in a group session' },
    { src: '/images/elimu/elimu5.jpg', alt: 'Academic progress check with a student' },
    { src: '/images/elimu/elimu6.jpg', alt: 'Scholarship beneficiaries group photo' },
];

export default function MtotoNaElimuPage() {

    // Helper component for rendering program components
    const ComponentCard = ({ title, description, icon: Icon, delay }: typeof programComponents[0] & { delay: number }) => (
        <motion.div 
            className="p-6 bg-white rounded-xl shadow-lg border-l-4" 
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
             style={{ backgroundImage: 'url("/images/programs/education.jpg")' }} 
        />
        
        <div className="relative max-w-4xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <p className="text-lg font-semibold tracking-widest uppercase mb-2" style={{ color: ACCENT_YELLOW }}>
                    Mtoto na Elimu Program
                </p>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ color: WHITE }}>
                    The Power of <span style={{ color: ACCENT_YELLOW }}>Education</span>
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                    We believe every child deserves a chance at quality education. We assist students with school fees, mentorship, and resources to secure a brighter future.
                </p>
                {/* Primary CTA in the Hero */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='inline-block'>
                    <Link 
                        href="/get-involved/donation" 
                        className="inline-flex items-center bg-[#f2e63d] text-[#2d2f55] font-extrabold px-10 py-4 rounded-full shadow-2xl text-lg transition-colors duration-300 hover:bg-[#ffe85e] group"
                    >
                        Sponsor a Child Today
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
            How We Empower Learners
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programComponents.map((component, index) => (
                <ComponentCard key={index} {...component} delay={index * 0.15} />
            ))}
        </div>
      </section>

      ---

      {/* 3. URGENCY & SPONSORSHIP CTA - Split Section */}
      <section className="py-20 px-6" style={{ backgroundColor: WHITE }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Urgency and Impact Text */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
            >
                <h3 className="text-4xl font-extrabold" style={{ color: PRIMARY_BLUE }}>
                    The Critical Need for Sponsorship
                </h3>
                <p className="text-lg text-gray-700">
                    For many children, the dream of an education is stopped short by financial barriers. Your <strong>single sponsorship</strong> can cover tuition, uniform, and books for an entire year.
                </p>
                <div className="p-4 rounded-lg border-l-4" style={{ borderColor: ACCENT_YELLOW, backgroundColor: LIGHT_GRAY }}>
                    <p className="font-semibold text-gray-800 flex items-center">
                        <Zap className="w-5 h-5 mr-2" style={{ color: PRIMARY_BLUE }} />
                        <strong>A fully sponsored child stays in school and breaks the cycle of poverty.</strong>
                    </p>
                </div>
            </motion.div>

            {/* Sponsorship CTA Card */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7 }}
                className="p-8 rounded-xl shadow-2xl" style={{ backgroundColor: PRIMARY_BLUE }}
            >
                <GraduationCap className="w-12 h-12 mb-4 mx-auto" style={{ color: ACCENT_YELLOW }} />
                <h4 className="text-3xl font-extrabold text-center mb-4" style={{ color: WHITE }}>
                    Be a Lifeline. Be a Sponsor.
                </h4>
                <p className="text-center text-gray-300 mb-6">
                    Join our community of sponsors and receive regular updates on the academic progress of the child you support.
                </p>
                
                <Link 
                    href="/get-involved/donation"
                    className="inline-flex items-center justify-center w-full bg-[#f2e63d] text-[#2d2f55] font-extrabold px-8 py-3 rounded-full shadow-lg text-lg transition-colors duration-300 hover:bg-[#ffe85e]"
                >
                    Sponsor a Student
                    <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
            </motion.div>
        </div>
      </section>

      ---

      {/* 4. PROGRAM GALLERY (2 Rows of 3 for portrait visibility) */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10" style={{ color: PRIMARY_BLUE }}>
            Faces of the Future
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
                <motion.div
                    key={index}
                    className="relative w-full overflow-hidden rounded-lg shadow-md"
                    // 100% padding bottom gives a square ratio. This works best for portrait images 3-across, allowing
                    // consistent cropping while keeping the 3-column structure.
                    style={{ paddingBottom: '100%' }} 
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

      {/* 5. DUAL CTA - Other Ways to Support (Mentorship & General Donation) */}
      <section className="text-center py-20 text-black" style={{ backgroundColor: ACCENT_YELLOW }}>
        <h2 className="text-4xl font-extrabold mb-4" style={{ color: PRIMARY_BLUE }}>
          Can You Offer Time or Resources?
        </h2>
        <p className="text-gray-800 mb-10 max-w-2xl mx-auto text-lg">
          Not everyone can sponsor a child entirely, but every contribution, large or small, helps secure their success.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
            
            {/* CTA 1: Volunteer as a Mentor/Tutor */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                    href="/get-involved/volunteer"
                    className="inline-flex items-center bg-[#2d2f55] text-white font-extrabold px-8 py-3 rounded-full shadow-2xl text-lg transition-colors duration-300 hover:bg-[#1f2041] group"
                >
                    <Users className="w-5 h-5 mr-2" />
                    Volunteer as a Tutor
                </Link>
            </motion.div>

            {/* CTA 2: Donate General Funds/Resources */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                    href="/get-involved/donation"
                    className="inline-flex items-center border-2 border-[#2d2f55] bg-transparent text-[#2d2f55] font-extrabold px-8 py-3 rounded-full shadow-2xl text-lg transition-all duration-300 hover:bg-[#2d2f55] hover:text-white group"
                >
                    <DollarSign className="w-5 h-5 mr-2" />
                    Donate Resources
                </Link>
            </motion.div>
        </div>
      </section>
    </main>
  );
}
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Briefcase, DollarSign, Users, MessageSquare, Target } from 'lucide-react'; 

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";
const WHITE = "#ffffff";

// --- Data for Core Modules Section ---
const coreModules = [
  { 
    title: "Financial Literacy", 
    description: "Budgeting, saving, and smart spending for long-term financial independence.", 
    icon: DollarSign 
  },
  { 
    title: "Effective Communication", 
    description: "Learning to express ideas clearly, listen actively, and manage conflict constructively.", 
    icon: MessageSquare 
  },
  { 
    title: "Decision Making & Problem Solving", 
    description: "Developing critical thinking to navigate challenges and make informed choices.", 
    icon: Brain 
  },
  { 
    title: "Career & Leadership Readiness", 
    description: "Mentorship and training to prepare for the job market and take initiative.", 
    icon: Briefcase 
  },
];

// --- Data for the Image Gallery (Placeholder paths) ---
const galleryImages = [
    { src: '/images/lifeskills/lifeskills1.jpg', alt: 'Group discussion on problem-solving' },
    { src: '/images/lifeskills/lifeskills2.jpg', alt: 'Interactive training session' },
    { src: '/images/lifeskills/lifeskills3.jpg', alt: 'Public speaking and presentation practice' },
    { src: '/images/lifeskills/lifeskills4.jpg', alt: 'Workshop on critical decision-making' },
    { src: '/images/lifeskills/lifeskills5.jpg', alt: 'Financial literacy class in action' },
    { src: '/images/lifeskills/lifeskills6.jpg', alt: 'Confidence building activity' },
];

export default function LifeSkillsPage() {

    // Helper component for rendering core modules
    const ModuleCard = ({ title, description, icon: Icon, delay }: typeof coreModules[0] & { delay: number }) => (
        <motion.div 
            className="p-6 bg-white rounded-xl shadow-lg border-t-4" 
            style={{ borderColor: PRIMARY_BLUE }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: delay }}
            whileHover={{ y: -5, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
        >
            <Icon className="w-8 h-8 mb-3" style={{ color: ACCENT_YELLOW }} />
            <h4 className="text-xl font-bold mb-2" style={{ color: PRIMARY_BLUE }}>{title}</h4>
            <p className="text-gray-600 text-sm">{description}</p>
        </motion.div>
    );

  return (
    <main className="bg-[${LIGHT_GRAY}]">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-16 text-center bg-gradient-to-b from-[#2d2f55] to-[#1f2041]">
        
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" 
             style={{ backgroundImage: 'url("/images/programs/lifeskills.png")' }} 
        />
        
        <div className="relative max-w-4xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ color: WHITE }}>
                    Building <span style={{ color: ACCENT_YELLOW }}>Independent Futures</span>
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                    Our Life Skills Program equips youth with the essential knowledge, confidence, and tools required to thrive in the modern world and achieve lasting independence.
                </p>
                {/* Primary CTA in the Hero */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='inline-block'>
                    <Link 
                        href="/get-involved" 
                        className="inline-flex items-center bg-[#f2e63d] text-[#2d2f55] font-extrabold px-10 py-4 rounded-full shadow-2xl text-lg transition-colors duration-300 hover:bg-[#ffe85e] group"
                    >
                        Apply for the Program
                        <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </motion.div>
        </div>
      </section>
      
      ---
      
      {/* 2. PROGRAM OVERVIEW / CORE MODULES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12" style={{ color: PRIMARY_BLUE }}>
            Core Pillars of Empowerment
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreModules.map((module, index) => (
                <ModuleCard key={index} {...module} delay={index * 0.15} />
            ))}
        </div>
      </section>

      ---

      {/* 3. BENEFITS & IMPACT - Split Section */}
      <section className="py-20 px-6" style={{ backgroundColor: WHITE }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Benefits Text */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
            >
                <p className="text-base font-semibold uppercase tracking-widest" style={{ color: ACCENT_YELLOW }}>
                    Tangible Outcomes
                </p>
                <h3 className="text-4xl font-extrabold" style={{ color: PRIMARY_BLUE }}>
                    What Participants Gain
                </h3>
                <p className="text-lg text-gray-700">
                    This program isn&apos;t just theoretical; it delivers real-world skills that translate directly into <strong>better opportunities and greater self-sufficiency</strong>.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <Target className="w-5 h-5 mt-1 mr-3 flex-shrink-0" style={{ color: PRIMARY_BLUE }}/>
                        <div>
                            <strong className="block text-gray-800">Enhanced Self-Confidence:</strong> The ability to trust one&apos;s own judgments and speak assertively.
                        </div>
                    </li>
                    <li className="flex items-start">
                        <Users className="w-5 h-5 mt-1 mr-3 flex-shrink-0" style={{ color: PRIMARY_BLUE }}/>
                        <div>
                            <strong className="block text-gray-800">Improved Social Navigation:</strong> Stronger teamwork, negotiation, and conflict resolution skills.
                        </div>
                    </li>
                    <li className="flex items-start">
                        <DollarSign className="w-5 h-5 mt-1 mr-3 flex-shrink-0" style={{ color: PRIMARY_BLUE }}/>
                        <div>
                            <strong className="block text-gray-800">Path to Financial Freedom:</strong> Practical skills to manage income and avoid unnecessary debt.
                        </div>
                    </li>
                </ul>
            </motion.div>

            {/* Impact Statistic Card */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7 }}
                className="p-8 rounded-xl shadow-2xl bg-[#2d2f55] text-white space-y-4"
            >
                <p className="text-6xl font-extrabold" style={{ color: ACCENT_YELLOW }}>75%</p>
                <h4 className="text-2xl font-bold">Of Participants Report Increased Job Readiness</h4>
                <p className="text-gray-300">
                    Our tailored curriculum is designed in partnership with community leaders to ensure the skills taught are relevant and highly valued by local employers and institutions.
                </p>
            </motion.div>
        </div>
      </section>

      ---

      {/* 4. PROGRAM GALLERY (2 Rows of 3 for visibility) */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10" style={{ color: PRIMARY_BLUE }}>
            Learning in Action
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
                <motion.div
                    key={index}
                    className="relative w-full overflow-hidden rounded-lg shadow-md"
                    style={{ paddingBottom: '66.66%' }} // 3:2 landscape ratio
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

      {/* 5. GET INVOLVED CTA (Enrollment & Mentorship) */}
      <section className="text-center py-20 text-black" style={{ backgroundColor: ACCENT_YELLOW }}>
        <h2 className="text-4xl font-extrabold mb-4" style={{ color: PRIMARY_BLUE }}>
          Ready to Invest in a Future?
        </h2>
        <p className="text-gray-800 mb-10 max-w-2xl mx-auto text-lg">
          Whether you&apos;re looking to enroll a student or share your professional expertise, this is where futures are shaped.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
            
            {/* CTA 1: Apply for the Program */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                    href="/contact"
                    className="inline-flex items-center bg-[#2d2f55] text-white font-extrabold px-8 py-3 rounded-full shadow-2xl text-lg transition-colors duration-300 hover:bg-[#1f2041] group"
                >
                    <Briefcase className="w-5 h-5 mr-2" />
                    Enroll a Student
                </Link>
            </motion.div>

            {/* CTA 2: Volunteer as a Mentor/Trainer */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                    href="/get-involved/volunteer"
                    className="inline-flex items-center border-2 border-[#2d2f55] bg-transparent text-[#2d2f55] font-extrabold px-8 py-3 rounded-full shadow-2xl text-lg transition-all duration-300 hover:bg-[#2d2f55] hover:text-white group"
                >
                    <Users className="w-5 h-5 mr-2" />
                    Become a Mentor
                </Link>
            </motion.div>
        </div>
      </section>
    </main>
  );
}
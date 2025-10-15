// src/app/get-involved/volunteer/page.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, GraduationCap, Users, Heart, Award, CheckCircle } from 'lucide-react';

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";

// --- Data for Key Volunteer Roles ---
const volunteerRoles = [
  { 
    icon: GraduationCap, 
    title: 'Academic Tutor', 
    description: 'Help students with core subjects (Math, English, Science) to improve school performance.' 
  },
  { 
    icon: Users, 
    title: 'Mentorship Coach', 
    description: 'Provide guidance on life skills, career paths, and personal development (Matches Mentorship interest).' 
  },
  { 
    icon: Heart, 
    title: 'Outreach & Event Support', 
    description: 'Assist with feeding programs, clothes distribution, and organizing community events (Matches Events/Fundraising).' 
  },
  { 
    icon: Award, 
    title: 'Digital Skills Training', 
    description: 'Teach basic computer, digital literacy, or social media skills to staff and youth.' 
  },
];

// Data for FAQ
const faqs = [
    { 
        question: "Do I need prior experience?", 
        answer: "No! We welcome volunteers from all backgrounds. We provide a full orientation and training to ensure you are comfortable and effective in your role." 
    },
    { 
        question: "How much time do I need to commit?", 
        answer: "We request a minimum commitment of 4 hours per week for at least 3 months. This consistency is essential for the children's growth and trust." 
    },
    {
        question: "Will I receive a certificate?",
        answer: "Yes! All dedicated volunteers who complete their agreed-upon commitment period will receive an official Volunteer Certificate from Shaping Futures."
    }
];

// --- Custom Components to replace dependencies ---

// Helper component to replace Next.js Link (using standard <a> tag for navigation)
const CustomLink = ({ href, children, className, style }: { href: string; children: React.ReactNode; className?: string, style?: React.CSSProperties }) => (
    <a href={href} className={className} style={style}>
        {children}
    </a>
);

// Custom Button implementation (replaces Shadcn Button)
const CustomButton = ({ type = "button", children, style, className, disabled }: { type?: "submit" | "button"; children: React.ReactNode; style?: React.CSSProperties; className?: string; disabled?: boolean }) => (
    <button
        type={type}
        style={style}
        className={`font-semibold py-3 px-8 text-lg rounded-lg transition duration-200 shadow-lg ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
        disabled={disabled}
    >
        {children}
    </button>
);


export default function VolunteerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Placeholder for form submission logic
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
        setIsSubmitting(false);
        // In a real app, you would validate and send data here.
        setIsSuccess(true); 

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
            setIsSuccess(false);
        }, 5000);
        
        // Clear form
        (e.target as HTMLFormElement).reset(); 
    }, 1500);
  };
    
  return (
    <main className="bg-[#f8f9fb] text-gray-800 font-inter">
      
      {/* Success Notification Modal (Replaces alert()) */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 p-4"
          >
            <div className="max-w-md mx-auto bg-green-500 text-white p-4 rounded-xl shadow-2xl flex items-center gap-3">
              <CheckCircle className="w-6 h-6" />
              <div>
                <h4 className="font-bold">Application Successful!</h4>
                <p className="text-sm">Thank you! We will be in touch within 7 days.</p>
              </div>
              <button onClick={() => setIsSuccess(false)} className="ml-auto p-1 rounded-full hover:bg-green-600">
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#2d2f55] to-[#1f2041] text-white pt-32 pb-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4"
        >
          Be the <span style={{ color: ACCENT_YELLOW }}>Change.</span> Volunteer Today!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto text-xl text-gray-200"
        >
          Your time and unique skills can transform lives. Join us and make a lasting impact.
        </motion.p>
        <div className="mt-8">
            <CustomLink href="#application" 
                style={{ backgroundColor: ACCENT_YELLOW, color: PRIMARY_BLUE }} 
                className="inline-block hover:opacity-90 font-semibold py-3 px-8 text-lg rounded-full shadow-lg transition duration-200 transform hover:scale-[1.02]"
            >
                Start Volunteering
            </CustomLink>
        </div>
      </section>

      {/* 2. WHY VOLUNTEER (Benefit Cards) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#2d2f55]">
          Why Join Shaping Futures?
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 bg-white rounded-xl shadow-xl border-t-4 border-l-2 hover:shadow-2xl transition duration-300" style={{ borderColor: ACCENT_YELLOW }}>
                <Heart className="w-8 h-8 mx-auto mb-3" style={{ color: PRIMARY_BLUE }} />
                <h3 className="text-xl font-bold text-[#2d2f55] mb-2">Make a Lasting Impact</h3>
                <p className="text-gray-600">Directly transform a child&apos;s confidence and future prospects.</p>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 bg-white rounded-xl shadow-xl border-t-4 border-l-2 hover:shadow-2xl transition duration-300" style={{ borderColor: ACCENT_YELLOW }}>
                <GraduationCap className="w-8 h-8 mx-auto mb-3" style={{ color: PRIMARY_BLUE }} />
                <h3 className="text-xl font-bold text-[#2d2f55] mb-2">Gain New Skills & Experience</h3>
                <p className="text-gray-600">Develop leadership, teaching, and mentorship skills in a real-world setting.</p>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 bg-white rounded-xl shadow-xl border-t-4 border-l-2 hover:shadow-2xl transition duration-300" style={{ borderColor: ACCENT_YELLOW }}>
                <Users className="w-8 h-8 mx-auto mb-3" style={{ color: PRIMARY_BLUE }} />
                <h3 className="text-xl font-bold text-[#2d2f55] mb-2">Join a Passionate Community</h3>
                <p className="text-gray-600">Connect with dedicated mentors, staff, and vibrant youth in Kibera.</p>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 bg-white rounded-xl shadow-xl border-t-4 border-l-2 hover:shadow-2xl transition duration-300" style={{ borderColor: ACCENT_YELLOW }}>
                <Award className="w-8 h-8 mx-auto mb-3" style={{ color: PRIMARY_BLUE }} />
                <h3 className="text-xl font-bold text-[#2d2f55] mb-2">Receive Official Certification</h3>
                <p className="text-gray-600">Get an official certificate upon successful completion of your service term.</p>
            </motion.div>
        </div>
      </section>
      
      {/* 3. VOLUNTEER ROLES */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-[#2d2f55]">
            Key Roles We Need
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {volunteerRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className="p-6 border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:translate-y-[-2px]"
              >
                <role.icon className="w-8 h-8 mb-3" style={{ color: PRIMARY_BLUE }} />
                <h3 className="text-xl font-bold text-[#2d2f55] mb-2">{role.title}</h3>
                <p className="text-gray-600">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPLICATION FORM */}
      <section id="application" className="py-20 px-6 max-w-7xl mx-auto bg-[#f8f9fb]">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-2xl border-t-8" style={{ borderColor: ACCENT_YELLOW }}>
          <h2 className="text-4xl font-extrabold text-center mb-4 text-[#2d2f55]">
            Start Your Application
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8">
            Please fill out the details below. Our Welfare Team will review your application.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Full Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input type="text" id="name" name="name" required 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2e63d] focus:border-[#f2e63d]"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input type="email" id="email" name="email" required 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2e63d] focus:border-[#f2e63d]"
                    />
                </div>
            </div>

            {/* Phone & Area of Interest */}
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2e63d] focus:border-[#f2e63d]"
                    />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Area of Interest *</label>
                  <select id="interest" name="interest" required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2e63d] focus:border-[#f2e63d] bg-white"
                  >
                    <option value="">-- Select --</option>
                    <option value="Mentorship">Mentorship</option>
                    <option value="Teaching">Teaching / Tutoring</option>
                    <option value="Fundraising">Fundraising</option>
                    <option value="Events">Event Planning</option>
                    <option value="Digital">Digital Skills Training</option>
                  </select>
                </div>
            </div>

            {/* Availability */}
            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">Preferred Availability *</label>
              <select id="availability" name="availability" required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2e63d] focus:border-[#f2e63d] bg-white"
              >
                <option value="">-- Select --</option>
                <option value="Weekdays">Weekdays</option>
                <option value="Weekends">Weekends</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>


            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Tell us about yourself and why you want to volunteer (Optional)</label>
              <textarea id="message" name="message" rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2e63d] focus:border-[#f2e63d]"
              ></textarea>
            </div>
            
            <CustomButton 
                type="submit" 
                style={{ backgroundColor: PRIMARY_BLUE, color: 'white' }} 
                className="w-full text-xl"
                disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                </span>
              ) : 'Complete Application'}
            </CustomButton>
          </form>
        </div>
      </section>

      {/* 5. TESTIMONIALS & FAQ (Combined Section) */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
            
            {/* Testimonials */}
            <div>
                <h2 className="text-3xl font-bold mb-8 text-[#2d2f55] border-b-4 pb-2" style={{ borderColor: ACCENT_YELLOW }}>
                    What Our Volunteers Say
                </h2>
                
                <div className="space-y-6">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="bg-white p-6 rounded-xl shadow-lg border-l-4" style={{ borderColor: PRIMARY_BLUE }}>
                        <p className="italic text-gray-700 mb-3">
                            Volunteering here has been life-changing! I have made a genuine impact and gained so much practical experience in return. The organization is truly dedicated.
                        </p>
                        <p className="font-semibold text-[#2d2f55]">— John M., Mentor</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="bg-white p-6 rounded-xl shadow-lg border-l-4" style={{ borderColor: PRIMARY_BLUE }}>
                        <p className="italic text-gray-700 mb-3">
                            I love being part of this incredible community! The sense of purpose and the connections made with the children are priceless.
                        </p>
                        <p className="font-semibold text-[#2d2f55]">— Sarah T., Event Coordinator</p>
                    </motion.div>
                </div>
            </div>
            
            {/* FAQ Section */}
            <div>
                <h2 className="text-3xl font-bold mb-8 text-[#2d2f55] border-b-4 pb-2" style={{ borderColor: ACCENT_YELLOW }}>
                    Frequently Asked Questions
                </h2>
                
                {/* Accordion Style List */}
                <div className="space-y-4">
                    {faqs.map((item, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }}
                            className="bg-white p-4 rounded-lg shadow-md border-l-4 border-l-[#2d2f55]"
                        >
                            <h4 className="font-extrabold text-[#2d2f55] mb-1">{item.question}</h4>
                            <p className="text-gray-600 text-base">{item.answer}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 6. FINAL CTA (Contact Info) */}
      <section 
        className="py-16 text-center text-black" 
        style={{ backgroundColor: ACCENT_YELLOW }}
      >
        <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_BLUE }}>
          Still Have Questions?
        </h2>
        <p className="max-w-xl mx-auto mb-6 text-lg" style={{ color: PRIMARY_BLUE }}>
          We are here to help. Reach out directly to our Welfare Team.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 font-semibold text-lg text-gray-700">
            <p className="flex items-center gap-2" style={{ color: PRIMARY_BLUE }}>
                <Mail className="w-5 h-5" style={{ color: PRIMARY_BLUE }}/> 
                <strong>Email:</strong> <a href="mailto:info@shapingfutures.or.ke" className="hover:underline">info@shapingfutures.or.ke</a>
            </p>
            <p className="flex items-center gap-2" style={{ color: PRIMARY_BLUE }}>
                <strong>Phone:</strong> <a href="tel:+254757050679" className="hover:underline">+254 757 050 679</a>
            </p>
        </div>
      </section>
    </main>
  );
}

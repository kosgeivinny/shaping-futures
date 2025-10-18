// src/app/contact/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
// Using lucide-react icons for visual elements
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react"; 

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";
const WHITE = "#ffffff";

// --- Success Message Component ---
const SuccessMessage = () => (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg shadow-md mb-6`}
        role="alert"
    >
        <div className="flex items-center">
            <CheckCircle className="w-6 h-6 mr-3" />
            <p className="font-semibold">Message Sent!</p>
        </div>
        <p className="text-sm mt-1">Thank you for reaching out. We will get back to you shortly.</p>
    </motion.div>
);

// Helper component to replace Next.js Link for external/internal navigation in this environment
const CustomLink = ({ href, children, className }: { href: string; children: React.ReactNode; className: string }) => (
    <a href={href} className={className}>
        {children}
    </a>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setIsSubmitted(false); // Clear success message on new input
  };

  // Custom handler for form submission (simulated since no backend here)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Clear form data after successful submission
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <main className="bg-[#f8f9fb] text-gray-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#2d2f55] to-[#1f2041] text-center pt-32 pb-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-4"
          style={{ color: ACCENT_YELLOW }}
        >
          <span style={{ color: WHITE }}>Get</span> In Touch
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed">
          We would love to hear from you. Reach out to us through the form or using the details below.
        </p>
      </section>

      {/* 2. CONTACT DETAILS & FORM */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* A. CONTACT INFORMATION */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-3xl font-bold text-[#2d2f55] mb-4">
              Our Details
            </h2>
            <div className="space-y-6">
              
              {/* Email */}
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-current" style={{ color: PRIMARY_BLUE }} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Email Address</h3>
                  <CustomLink href="mailto:info@shapingfutures.or.ke" className="text-gray-600 hover:text-[#2d2f55] transition">
                    info@shapingfutures.or.ke
                  </CustomLink>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-current" style={{ color: PRIMARY_BLUE }} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Phone Numbers</h3>
                  <div className="text-gray-600 space-y-1">
                    <CustomLink href="tel:+254757050679" className="block hover:text-[#2d2f55] transition">
                        +254 757 050 679 (Admin)
                    </CustomLink>
                    <CustomLink href="tel:+254711620062" className="block hover:text-[#2d2f55] transition">
                        +254 711 620 062 (Support)
                    </CustomLink>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-current" style={{ color: PRIMARY_BLUE }} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Our Location</h3>
                  <p className="text-gray-600">
                    Piedmont Plaza - 4th Floor, Ngong Road,<br/>
                    Nairobi, Kenya.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* B. CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-white p-8 rounded-xl shadow-2xl border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-[#2d2f55] mb-6">
              Send Us a Message
            </h2>

            {isSubmitted && <SuccessMessage />}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[${ACCENT_YELLOW}] focus:border-[${ACCENT_YELLOW}] transition duration-150`}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[${ACCENT_YELLOW}] focus:border-[${ACCENT_YELLOW}] transition duration-150`}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[${ACCENT_YELLOW}] focus:border-[${ACCENT_YELLOW}] transition duration-150 resize-none`}
                  placeholder="How can we help you?"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200 transform
                  ${isSubmitting
                    ? `bg-[${PRIMARY_BLUE}] text-white opacity-70 cursor-not-allowed`
                    : `bg-[${PRIMARY_BLUE}] text-white hover:bg-[${ACCENT_YELLOW}] hover:text-[${PRIMARY_BLUE}] hover:shadow-lg`
                  }`}
              >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                    </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 3. MAP LOCATION */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#2d2f55] mb-6 text-center">
            <span className={`text-[${ACCENT_YELLOW}]`}>Find</span> Us Here
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden shadow-lg border-4 border-white"
          >
            {/* Embedded Google Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7924872116937!2d36.76533819999999!3d-1.2992979000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f110014b8dfb3%3A0x521a723af1f68533!2sShaping%20Futures!5e0!3m2!1sen!2ske!4v1760811551327!5m2!1sen!2ske"
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shaping Futures Location at Piedmont Plaza"
            />
          </motion.div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="text-center py-16 text-black" style={{ backgroundColor: ACCENT_YELLOW }}>
        <h2 className="text-3xl font-bold mb-6" style={{ color: PRIMARY_BLUE }}>
          Inspired by Our Journey?
        </h2>
        {/* Removed descriptive line for a punchier CTA */}
        <div className="flex flex-wrap justify-center gap-4">
          <CustomLink
            href="/get-involved/volunteer"
            className="bg-[#2d2f55] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#1f2041] transition"
          >
            Volunteer Today
          </CustomLink>
          <CustomLink
            href="/get-involved/donation"
            className="bg-transparent border-2 border-[#2d2f55] text-[#2d2f55] font-semibold px-6 py-3 rounded-lg hover:bg-[#2d2f55] hover:text-white transition"
          >
            Donate Now
          </CustomLink>
        </div>
      </section>
    </main>
  );
}

// src/app/get-involved/donation/page.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, PiggyBank, Repeat, Shirt, Copy, Check, CheckCircle } from 'lucide-react';

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";

// Suggested donation amounts with brief impact descriptions
const suggestedAmounts = [
  { amount: '$ 5', impact: 'Funds one day of meals for 5 children.' },
  { amount: '$ 20', impact: 'Provides one student with full school supplies.' },
  { amount: '$ 50', impact: 'Sponsors a student for one month of mentorship.' },
  { amount: '$ 150', impact: 'Covers partial tuition for a student for one term.' },
];


// --- Custom Components to replace dependencies and ensure compatibility ---

// Helper component to replace Next.js Link (using standard <a> tag for navigation)
const CustomLink = ({ href, children, className, style }: { href: string; children: React.ReactNode; className?: string, style?: React.CSSProperties }) => (
    <a href={href} className={className} style={style}>
        {children}
    </a>
);

// Custom Button implementation (replaces Shadcn Button)
const CustomButton = ({ type = "button", children, style, className, disabled, onClick }: { type?: "submit" | "button"; children: React.ReactNode; style?: React.CSSProperties; className?: string; disabled?: boolean; onClick?: () => void }) => (
    <button
        type={type}
        style={style}
        className={`font-semibold py-3 px-8 text-lg rounded-lg transition duration-200 shadow-lg ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
        disabled={disabled}
        onClick={onClick}
    >
        {children}
    </button>
);


// Helper component for copying details (Enhanced with copy functionality using document.execCommand)
const CopyDetail = ({ label, value }: { label: string; value: string }) => {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleCopy = () => {
    try {
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = value;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);

        setCopied(true);
        setError('');
        setTimeout(() => setCopied(false), 2000); // Reset state after 2 seconds
    } catch (err) {
        console.error("Failed to copy:", err);
        setError('Copy failed. Please copy manually.');
        setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="py-3 border-b border-gray-100 last:border-b-0">
        <div className="flex justify-between items-center">
            <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-bold text-[#2d2f55] mr-2 text-sm sm:text-base">{label}:</span>
                <span className="font-semibold text-gray-800 text-sm sm:text-base">{value}</span>
            </div>
            <button 
                onClick={handleCopy} 
                className={`ml-4 p-2 rounded-full transition-colors ${
                    copied ? 'bg-green-500 text-white' : 'text-gray-500 hover:bg-gray-100'
                }`}
                aria-label={`Copy ${label}`}
            >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
        </div>
        <AnimatePresence>
            {error && (
                <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 text-xs text-red-500 font-medium"
                >
                    {error}
                </motion.p>
            )}
        </AnimatePresence>
    </div>
  );
};


export default function DonationPage() {
    const [showOnlineMessage, setShowOnlineMessage] = useState(false);
    
    // Simulate navigation/payment start
    const handleOnlinePaymentClick = () => {
        setShowOnlineMessage(true);
        setTimeout(() => setShowOnlineMessage(false), 4000);
    }
    
  return (
    <main className="bg-[#f8f9fb] text-gray-800 font-inter">
        
        {/* Mock Payment Message (Replaces external navigation/payment gateway) */}
        <AnimatePresence>
            {showOnlineMessage && (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 right-0 z-50 p-4"
              >
                <div className="max-w-xl mx-auto bg-indigo-500 text-white p-4 rounded-xl shadow-2xl flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" />
                  <div>
                    <h4 className="font-bold">Redirecting to Payment Gateway...</h4>
                    <p className="text-sm">In a real application, you would be redirected to a secure payment portal.</p>
                  </div>
                  <button onClick={() => setShowOnlineMessage(false)} className="ml-auto p-1 rounded-full hover:bg-indigo-600">
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
          Support<span style={{ color: ACCENT_YELLOW }}> Our Mission</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200"
        >
          Your generosity fuels our programs and empowers youth through education,
          skills development, and mentorship.
        </motion.p>
      </section>

      {/* 2. DONATION SPLIT CONTAINER (Impact vs. Options) */}
      <section className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        
        {/* LEFT COLUMN: IMPACT & SUGGESTED AMOUNTS */}
        <div className="lg:col-span-1 space-y-8 order-2 lg:order-1"> 
            
            {/* Impact & Transparency */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="p-6 rounded-xl shadow-xl border-t-4 hover:shadow-2xl transition duration-300" style={{ borderColor: ACCENT_YELLOW, backgroundColor: 'white' }}>
                <h3 className="text-2xl font-bold mb-4 flex items-center text-[#2d2f55]">
                    <Gift className="w-6 h-6 mr-3" />
                    Your Impact
                </h3>
                <p className="text-gray-700 mb-4 text-base">
                    Every donation provides essentials, ensuring a child can focus on learning, growth, and development.
                </p>
                <ul className="space-y-3 list-none p-0 text-gray-700 text-sm">
                    <li className="flex items-start">
                        <span className="mr-2 text-xl" style={{ color: ACCENT_YELLOW }}>•</span>
                        Provides meals for our feeding program children.
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-xl" style={{ color: ACCENT_YELLOW }}>•</span>
                        Supports school supplies and student tuition.
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-xl" style={{ color: ACCENT_YELLOW }}>•</span>
                        Helps fund mentorship & skill-building workshops.
                    </li>
                </ul>
            </motion.div>
            
            {/* Suggested Amounts */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-[#2d2f55] mb-4">Suggested Amounts</h4>
                {suggestedAmounts.map((item, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="mb-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition"
                    >
                        <p className="font-bold text-lg" style={{ color: PRIMARY_BLUE }}>{item.amount}</p>
                        <p className="text-sm text-gray-600">{item.impact}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* RIGHT COLUMN: DONATION OPTIONS (The HOW) */}
        <div className="lg:col-span-2 space-y-8 order-1 lg:order-2"> 
            
            {/* Monetary Donations */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border-l-8" style={{ borderColor: PRIMARY_BLUE }}> 
                <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center text-[#2d2f55]">
                    <PiggyBank className="w-7 h-7 mr-3" style={{ color: ACCENT_YELLOW }} />
                    Financial Donation Options
                </h3>
                <p className="text-gray-700 mb-6 text-base">Choose the most convenient way to make a one-time gift.</p>
                
                {/* Primary CTA (Placeholder for Online Payment Gateway) */}
                <CustomButton 
                    onClick={handleOnlinePaymentClick}
                    style={{ backgroundColor: ACCENT_YELLOW, color: PRIMARY_BLUE }} 
                    className="w-full justify-center text-xl mb-6 shadow-xl"
                >
                    Pay Online Now (International Cards/EFT)
                </CustomButton>
                
                <h4 className="text-xl font-bold mt-8 mb-4 text-[#2d2f55]">M-Pesa Donations (Kenya)</h4>
                <div className="bg-gray-50 p-4 rounded-lg space-y-1">
                    <CopyDetail label="Paybill Number" value="400200" />
                    <CopyDetail label="Account Number" value="011134596870000" />
                </div>

                <h4 className="text-xl font-bold mt-8 mb-4 text-[#2d2f55]">Bank Transfer</h4>
                <div className="bg-gray-50 p-4 rounded-lg space-y-1">
                    <CopyDetail label="Bank Name" value="Cooperative Bank" />
                    <CopyDetail label="Account Name" value="Shaping Futures Foundation" />
                    <CopyDetail label="Account Number" value="01134596870000" />
                </div>
            </div>

            {/* Recurring Donations */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-l-red-500">
                <h3 className="text-2xl font-bold mb-4 flex items-center text-red-700">
                    <Repeat className="w-6 h-6 mr-3" />
                    Make a Lasting Impact: Give Monthly
                </h3>
                <p className="text-gray-700 mb-4 text-base">
                    Become a dedicated monthly donor and provide reliable, continued support for our ongoing expenses like tuition and food.
                </p>
                <CustomButton 
                    style={{ backgroundColor: 'rgb(220, 38, 38)', color: 'white' }}
                    className="w-full justify-center text-lg"
                >
                    Set Up Monthly Gift
                </CustomButton>
            </div>

            {/* In-Kind Donations (Clothes) */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-l-green-500">
                <h3 className="text-2xl font-bold mb-4 flex items-center text-green-700">
                    <Shirt className="w-6 h-6 mr-3" />
                    Donate Clothes & Supplies
                </h3>
                <p className="text-gray-700 mb-4 text-base">
                    Support our clothes donation program by providing gently used clothing and school materials.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                    <p><strong>Contact:</strong> +254 757 050 679</p>
                    <p><strong>Email:</strong> info@shapingfutures.or.ke</p>
                    <p><strong>Drop-off Location:</strong> Piedmont Plaza, Opp. Kenya Science, Off Ngong Road</p>
                </div>
                <CustomLink href="/contact" className="block mt-6">
                    <CustomButton 
                        style={{ border: '2px solid rgb(34, 197, 94)', color: 'rgb(20, 150, 60)', backgroundColor: 'transparent' }}
                        className="w-full justify-center hover:bg-green-50 py-3 font-semibold"
                    >
                        Arrange a Drop-off
                    </CustomButton>
                </CustomLink>
            </div>
        </div>
      </section>

      {/* 3. FINAL CTA / PARTNERSHIP REMINDER */}
      <section 
        className="py-12 md:py-16 px-4 md:px-6 text-center text-black" 
        style={{ backgroundColor: ACCENT_YELLOW }} 
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: PRIMARY_BLUE }}>
          Looking to Partner or Sponsor?
        </h2>
        <p className="max-w-xl mx-auto mb-6 text-base" style={{ color: PRIMARY_BLUE }}>
          If you are a business interested in corporate giving or sponsorship, please visit our dedicated contact channel.
        </p>
        <CustomLink href="/contact">
          <CustomButton 
            style={{ backgroundColor: PRIMARY_BLUE, color: 'white' }} 
            className="w-full max-w-sm justify-center text-lg rounded-full shadow-lg"
          >
            Become a Corporate Partner
          </CustomButton>
        </CustomLink>
      </section>
    </main>
  );
}

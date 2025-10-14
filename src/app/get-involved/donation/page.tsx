// src/app/get-involved/donation/page.tsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
// Assuming Button is a component that accepts className and style props
import { Button } from '@/components/ui/button'; 
import { Gift, PiggyBank, Repeat, Shirt, Copy } from 'lucide-react';
import { useState } from 'react';

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

// Helper component for copying details (Enhanced with copy functionality)
const CopyDetail = ({ label, value }: { label: string; value: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset state after 2 seconds
  };

  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
      <div className="flex flex-col sm:flex-row sm:items-center">
        <span className="font-bold text-[#2d2f55] mr-2">{label}:</span>
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
  );
};

// Assuming Check icon is available from lucide-react (adding it here for completeness)
const Check = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);


export default function DonationPage() {
  return (
    <main className="bg-[#f8f9fb] text-gray-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#2d2f55] to-[#1f2041] text-white pt-32 pb-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4"
        >
          <span style={{ color: ACCENT_YELLOW }}>Support Our Mission</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200" // Reduced mobile font size slightly
        >
          Your generosity fuels our programs and empowers youth through education,
          skills development, and mentorship.
        </motion.p>
      </section>

      {/* 2. DONATION SPLIT CONTAINER (Impact vs. Options) */}
      <section className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        
        {/* LEFT COLUMN: IMPACT & SUGGESTED AMOUNTS (Now stacked on mobile) */}
        <div className="lg:col-span-1 space-y-8 order-2 lg:order-1"> {/* Order 2 on mobile so Impact comes after main donation form on desktop but is ready for stacking */}
            
            {/* Impact & Transparency */}
            <div className="p-6 rounded-xl shadow-lg border-t-4" style={{ borderColor: ACCENT_YELLOW, backgroundColor: 'white' }}>
                <h3 className="text-2xl font-bold mb-4 flex items-center text-[#2d2f55]">
                    <Gift className="w-6 h-6 mr-3" />
                    Your Impact
                </h3>
                <p className="text-gray-700 mb-4 text-base">
                    Every donation provides essentials, ensuring a child can focus on learning, growth, and dance.
                </p>
                <ul className="space-y-3 list-none p-0 text-gray-700 text-sm"> {/* Smaller font for bullet points on mobile */}
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
            </div>
            
            {/* Suggested Amounts */}
            <div className="bg-gray-100 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-[#2d2f55] mb-4">Suggested Amounts</h4>
                {suggestedAmounts.map((item, index) => (
                    <div key={index} className="mb-3 p-3 bg-white rounded shadow-sm hover:shadow-md transition">
                        <p className="font-bold text-lg" style={{ color: PRIMARY_BLUE }}>{item.amount}</p>
                        <p className="text-sm text-gray-600">{item.impact}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* RIGHT COLUMN: DONATION OPTIONS (The HOW) - Now full width on mobile/tablet */}
        <div className="lg:col-span-2 space-y-8 order-1 lg:order-2"> {/* Order 1 on mobile to prioritize main form */}
            
            {/* Monetary Donations */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border-l-8 border-[#2d2f55]"> {/* Reduced mobile padding slightly */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center text-[#2d2f55]">
                    <PiggyBank className="w-7 h-7 mr-3" style={{ color: ACCENT_YELLOW }} />
                    Financial Donation Options
                </h3>
                <p className="text-gray-700 mb-6 text-base">Choose the most convenient way to make a one-time gift.</p>
                
                {/* Primary CTA (Placeholder for Online Payment Gateway) */}
                <Button 
                    style={{ backgroundColor: ACCENT_YELLOW, color: PRIMARY_BLUE }} 
                    className="w-full justify-center hover:bg-yellow-400 font-semibold py-3 px-8 text-lg rounded-lg mb-6 shadow-md"
                >
                    Pay Online Now (International Cards/EFT)
                </Button>
                
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
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                <h3 className="text-2xl font-bold mb-4 flex items-center text-red-700">
                    <Repeat className="w-6 h-6 mr-3" />
                    Make a Lasting Impact: Give Monthly
                </h3>
                <p className="text-gray-700 mb-4 text-base">
                    Become a dedicated monthly donor and provide reliable, continued support for our ongoing expenses like tuition and food.
                </p>
                <Button 
                    className="w-full justify-center bg-red-600 text-white hover:bg-red-700 font-semibold py-3 px-6 rounded-lg"
                >
                    Set Up Monthly Gift
                </Button>
            </div>

            {/* In-Kind Donations (Clothes) */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
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
                <Link href="/contact" passHref className="block mt-6">
                    <Button variant="outline" className="w-full justify-center border-green-500 text-green-700 hover:bg-green-50 py-3 font-semibold">
                        Arrange a Drop-off
                    </Button>
                </Link>
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
        <p className="max-w-xl mx-auto mb-6 text-base">
          If you are a business interested in corporate giving or sponsorship, please visit our dedicated contact channel.
        </p>
        <Link href="/contact" passHref>
          <Button 
            style={{ backgroundColor: PRIMARY_BLUE, color: 'white' }} 
            className="w-full max-w-sm justify-center hover:bg-[#1f2041] font-semibold py-3 px-8 text-lg rounded-full shadow-lg"
          >
            Become a Corporate Partner
          </Button>
        </Link>
      </section>
    </main>
  );
}
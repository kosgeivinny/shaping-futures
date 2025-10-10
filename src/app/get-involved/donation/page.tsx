// src/app/get-involved/donation/page.tsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Gift, PiggyBank, Repeat, Shirt } from 'lucide-react';

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";

// Suggested donation amounts with brief impact descriptions
const suggestedAmounts = [
  { amount: 'Ksh 500', impact: 'Funds one day of meals for 5 children.' },
  { amount: 'Ksh 2,000', impact: 'Provides one student with full school supplies.' },
  { amount: 'Ksh 5,000', impact: 'Sponsors a student for one month of mentorship.' },
  { amount: 'Ksh 15,000', impact: 'Covers partial tuition for a student for one term.' },
];

// Helper component for copying details
const CopyDetail = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-center py-2 border-b border-gray-100">
    <span className="font-medium text-gray-600">{label}</span>
    <span className="font-semibold text-gray-800 flex items-center">
      {value}
    </span>
  </div>
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
          className="max-w-3xl mx-auto text-xl text-gray-200"
        >
          Your generosity fuels our programs and empowers youth through education,
          skills development, and mentorship.
        </motion.p>
      </section>

      {/* 2. DONATION SPLIT CONTAINER (Impact vs. Options) */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        
        {/* LEFT COLUMN: IMPACT & TRANSPARENCY (The WHY) */}
        <div className="lg:col-span-1 space-y-8">
            <div className="p-6 rounded-xl shadow-lg border-t-4" style={{ borderColor: ACCENT_YELLOW, backgroundColor: 'white' }}>
                <h3 className="text-2xl font-bold mb-4 flex items-center text-[#2d2f55]">
                    <Gift className="w-6 h-6 mr-3" />
                    Your Impact
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                    Every donation provides essentials, ensuring a child can focus on learning, growth, and dance.
                </p>
                <ul className="space-y-3 list-none p-0 text-gray-700">
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
                    <div key={index} className="mb-2 p-3 bg-white rounded shadow-sm hover:shadow-md transition">
                        <p className="font-bold" style={{ color: PRIMARY_BLUE }}>{item.amount}</p>
                        <p className="text-sm text-gray-600">{item.impact}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* RIGHT COLUMN: DONATION OPTIONS (The HOW) */}
        <div className="lg:col-span-2 space-y-12">
            
            {/* Monetary Donations */}
            <div className="bg-white p-8 rounded-xl shadow-2xl border-l-8 border-[#2d2f55]">
                <h3 className="text-3xl font-bold mb-4 flex items-center text-[#2d2f55]">
                    <PiggyBank className="w-7 h-7 mr-3" style={{ color: ACCENT_YELLOW }} />
                    Financial Donation Options
                </h3>
                <p className="text-lg text-gray-700 mb-6">Choose the most convenient way to make a one-time gift.</p>
                
                {/* Primary CTA (Placeholder for Online Payment Gateway) */}
                <Button 
                    style={{ backgroundColor: ACCENT_YELLOW, color: PRIMARY_BLUE }} 
                    className="hover:bg-yellow-400 font-semibold py-3 px-8 text-lg rounded-lg mb-6 shadow-md"
                >
                    Pay Online Now (International Cards/EFT)
                </Button>
                
                <h4 className="text-xl font-bold mt-8 mb-4 text-[#2d2f55]">M-Pesa Donations (Kenya)</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <CopyDetail label="Paybill Number" value="400200" />
                    <CopyDetail label="Account Number" value="011134596870000" />
                </div>

                <h4 className="text-xl font-bold mt-8 mb-4 text-[#2d2f55]">Bank Transfer</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
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
                <p className="text-gray-700 mb-4">
                    Become a dedicated monthly donor and provide reliable, continued support for our ongoing expenses like tuition and food.
                </p>
                <Button 
                    className="bg-red-600 text-white hover:bg-red-700 font-semibold py-2 px-6 rounded-lg"
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
                <p className="text-gray-700 mb-4">
                    Support our clothes donation program by providing gently used clothing and school materials.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg space-y-1 text-sm">
                    <p><strong>Contact:</strong> +254 757 050 679</p>
                    <p><strong>Email:</strong> info@shapingfutures.or.ke</p>
                    <p><strong>Drop-off Location:</strong> Piedmont Plaza, Opp. Kenya Science, Off Ngong Road</p>
                </div>
                <Link href="/contact" passHref className="block mt-4">
                    <Button variant="outline" className="border-green-500 text-green-700 hover:bg-green-50">
                        Arrange a Drop-off
                    </Button>
                </Link>
            </div>
        </div>
      </section>

      {/* 3. FINAL CTA / PARTNERSHIP REMINDER (Re-directing the corporate section) */}
      <section 
        // CHANGED: Use Accent Yellow background for strong contrast
        className="py-16 text-center text-black" 
        style={{ backgroundColor: ACCENT_YELLOW }} 
      >
        <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_BLUE }}>
          Looking to Partner or Sponsor?
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          If you are a business interested in corporate giving or sponsorship, please visit our dedicated contact channel.
        </p>
        <Link href="/contact" passHref>
          <Button 
            // Button color changed for contrast: dark blue button on yellow background
            style={{ backgroundColor: PRIMARY_BLUE, color: 'white' }} 
            className="hover:bg-[#1f2041] font-semibold py-3 px-8 text-lg rounded-full shadow-lg"
          >
            Become a Corporate Partner
          </Button>
        </Link>
      </section>
    </main>
  );
}
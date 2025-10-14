"use client";

import Image from "next/image";
import Link from "next/link";
// Assuming SocialIcons component handles Lucide icons and hover logic
import SocialIcons from "@/components/ui/SocialIcons"; 
import { Mail } from "lucide-react";

// --- Theme Variables ---
const ACCENT_YELLOW = "#f2e63d";
const PRIMARY_BLUE = "#2d2f55";

export default function Footer() {
  return (
    <footer className="bg-[#2d2f55] text-gray-300 pt-16 pb-8 relative"> 
      {/* The main footer structure remains relative to contain the layout */}
      
      {/* 5. ENHANCED FLOATING WHATSAPP BUTTON (GLOBAL ELEMENT) */}
      <Link
        // 🚨 IMPORTANT: Replace 254700000000 with your actual country code and phone number.
        href="https://wa.me/254757050679?text=Hello%20Shaping%20Futures%2C%20I%20have%20a%20question%20about%20your%20mission."
        target="_blank"
        rel="noopener noreferrer"
        // Key changes: wider padding, rounded-full for the pill shape, flex layout for icon + text
        className={`
          fixed bottom-6 right-6 z-50 
          bg-[#25D366] text-white 
          flex items-center space-x-2 
          py-3 pr-5 pl-4 rounded-full shadow-2xl 
          transition-all duration-300 transform 
          hover:scale-[1.05] hover:shadow-xl
        `}
        aria-label="Chat with us on WhatsApp"
      >
        {/* WhatsApp Icon (Increased size for prominence) */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp flex-shrink-0">
          <path d="M12.9 5.87A7.92 7.92 0 0 0 12 5C8.13 5 5 8.13 5 12c0 1.34.38 2.58 1.04 3.66L5 19l3.96-1.04A7.92 7.92 0 0 0 12 19c3.87 0 7-3.13 7-7a7.92 7.92 0 0 0-.9-3.1v-.01A7.92 7.92 0 0 0 12.9 5.87zM16.5 14.5c-.1.25-.6.5-1 .5s-.9-.3-1.3-.8c-.4-.5-1-1.3-1.4-1.8s-.3-.6-.5-.9c0-.2.1-.4.2-.5.1-.1.2-.3.3-.4s.2-.2.3-.3c.1-.1.2-.1.3-.3.1-.2 0-.4-.1-.5s-.4-.4-.6-.6c-.2-.2-.5-.4-.7-.6-.2-.2-.4-.3-.6-.3h-.1c-.2 0-.4 0-.6.1-.2.1-.4.3-.6.4s-.3.5-.5.7c-.2.2-.4.4-.6.6-.2.2-.3.4-.3.6 0 .2 0 .4.1.6 0 .2.2.4.3.5s.4.5.7.8c.2.3.5.6.7.9.2.3.4.6.6.9.1.2.2.4.4.7.2.3.4.5.6.7.2.2.4.3.6.4.2.1.4.1.6.1.2 0 .4-.1.6-.2s.3-.3.4-.5c.2-.2.3-.4.3-.5.1-.2.1-.4 0-.6 0-.1-.1-.3-.2-.4z"/>
        </svg>

        {/* Descriptive Text */}
        <span className="font-bold text-lg leading-none">Chat with us</span>
      </Link>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* 1. Logo & Tagline (Column 1) */}
        <div>
          <Image
            src="/logo.png"
            alt="Shaping Futures Logo"
            width={60} // Slightly larger logo
            height={60}
            className="mb-4"
          />
          <p className="text-sm leading-relaxed max-w-[250px]">
            Empowering youth through education, creativity, and
            community support. <strong>Together, we are shaping futures.</strong>
          </p>
          
          {/* Social Media (Moved here for better branding association) */}
          <div className="mt-6">
            <h4 className="text-white font-semibold mb-3">Connect With Us</h4>
            {/* Note: Ensure SocialIcons applies the accent yellow hover logic */}
            <SocialIcons className={`justify-start text-gray-300 [&>a:hover]:text-[${ACCENT_YELLOW}] space-x-4`} /> 
          </div>
        </div>

        {/* 2. Quick Links (Column 2) */}
        <div>
          <h3 className={`text-[${ACCENT_YELLOW}] text-xl font-extrabold mb-5 uppercase tracking-wider`}>
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Our Programs", href: "/programs" },
              { name: "Upcoming Events", href: "/events" },
              { name: "Get Involved", href: "/get-involved" },
              { name: "Gallery", href: "/gallery" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`hover:text-white transition-colors duration-200 relative before:content-['•'] before:mr-2 before:text-[${ACCENT_YELLOW}]`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Contact Info & CTA (Column 3) */}
        <div>
          <h3 className={`text-[${ACCENT_YELLOW}] text-xl font-extrabold mb-5 uppercase tracking-wider`}>
            Reach Out
          </h3>
          
          {/* Contact Details */}
          <div className="space-y-3 mb-6">
            <p className="text-sm flex items-start">
              <span className={`text-[${ACCENT_YELLOW}] mr-3 mt-1 flex-shrink-0`}>📍</span>
              Nairobi, Kenya
            </p>
            <p className="text-sm flex items-center">
              <span className={`text-[${ACCENT_YELLOW}] mr-3 flex-shrink-0`}>📧</span>
              <Link
                href="mailto:info@shapingfutures.or.ke"
                className="hover:text-white transition"
              >
                info@shapingfutures.or.ke
              </Link>
            </p>
            <p className="text-sm flex items-center">
              <span className={`text-[${ACCENT_YELLOW}] mr-3 flex-shrink-0`}>📞</span>
              <Link
                href="tel:+254757050679"
                className="hover:text-white transition"
              >
                +254 757 050 679
              </Link>
            </p>
          </div>

          {/* Newsletter CTA Button */}
          <Link
            href="/contact#newsletter" // Link to the newsletter form/section on the contact page
            className={`inline-flex items-center bg-[${ACCENT_YELLOW}] text-[${PRIMARY_BLUE}] font-bold px-4 py-2 rounded-lg shadow-md hover:bg-white transition-colors duration-300 mt-4`}
          >
            <Mail className="w-5 h-5 mr-2" />
            Join Our Newsletter
          </Link>
        </div>

        {/* 4. Support Call-to-Action (Column 4) */}
        <div className="lg:pl-6 border-l border-gray-600/50 hidden lg:block"> {/* Added a subtle border for separation */}
             <h3 className={`text-[${ACCENT_YELLOW}] text-xl font-extrabold mb-5 uppercase tracking-wider`}>
                Make An Impact
            </h3>
            <p className="text-sm leading-relaxed mb-4">
                Your support directly fuels our mission. Every donation helps a child dream bigger and achieve more.
            </p>
            <Link
                href="/get-involved/donation"
                className={`inline-block bg-white text-[${PRIMARY_BLUE}] font-extrabold px-6 py-3 rounded-xl shadow-lg hover:bg-[${ACCENT_YELLOW}] hover:text-[${PRIMARY_BLUE}] transition-colors duration-300 transform hover:scale-[1.02]`}
            >
                Donate Today!
            </Link>
        </div>
      </div>

      {/* Bottom Bar (Copyright) */}
      <div className="mt-12 border-t border-gray-600 pt-8 text-center text-sm text-gray-400 relative">
        {/* Subtle accent line using the brand color */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-gradient-to-r from-transparent via-[${ACCENT_YELLOW}] to-transparent`}></div>
        <p className="pt-2">
          © {new Date().getFullYear()} Shaping Futures. All rights reserved. |{" "}
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link> |{" "}
          <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
        </p>
      </div>
    </footer>
  );
}
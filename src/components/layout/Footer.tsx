"use client";

import Image from "next/image";
import Link from "next/link";
// Assuming SocialIcons component handles Lucide icons and hover logic
import SocialIcons from "@/components/ui/SocialIcons"; 
import { Mail } from "lucide-react";

// --- Theme Variables ---
export default function Footer() {
  return (
    <footer className="bg-[#2d2f55] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* 1. Logo & Tagline (Column 1) */}
        <div>
          <Image
            src="/logo.png"
            alt="Shaping Futures Logo"
            width={50} // Slightly larger logo
            height={50}
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
            <SocialIcons className="justify-start text-gray-300 [&>a:hover]:text-[#f2e63d] space-x-4" /> 
          </div>
        </div>

        {/* 2. Quick Links (Column 2) */}
        <div>
          <h3 className="text-[#f2e63d] text-xl font-extrabold mb-5 uppercase tracking-wider">
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
                  className="hover:text-white transition-colors duration-200 relative before:content-['•'] before:mr-2 before:text-[#f2e63d]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Contact Info & CTA (Column 3) */}
        <div>
          <h3 className="text-[#f2e63d] text-xl font-extrabold mb-5 uppercase tracking-wider">
            Reach Out
          </h3>
          
          {/* Contact Details */}
          <div className="space-y-3 mb-6">
            <p className="text-sm flex items-start">
              <span className="text-[#f2e63d] mr-3 mt-1 flex-shrink-0">📍</span>
              Nairobi, Kenya
            </p>
            <p className="text-sm flex items-center">
              <span className="text-[#f2e63d] mr-3 flex-shrink-0">📧</span>
              <Link
                href="mailto:info@shapingfutures.or.ke"
                className="hover:text-white transition"
              >
                info@shapingfutures.or.ke
              </Link>
            </p>
            <p className="text-sm flex items-center">
              <span className="text-[#f2e63d] mr-3 flex-shrink-0">📞</span>
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
            className="inline-flex items-center bg-[#f2e63d] text-[#2d2f55] font-bold px-4 py-2 rounded-lg shadow-md hover:bg-white transition-colors duration-300 mt-4"
          >
            <Mail className="w-5 h-5 mr-2" />
            Join Our Newsletter
          </Link>
        </div>

        {/* 4. Support Call-to-Action (Column 4) */}
        <div className="lg:pl-6 border-l border-gray-600/50 hidden lg:block"> {/* Added a subtle border for separation */}
             <h3 className="text-[#f2e63d] text-xl font-extrabold mb-5 uppercase tracking-wider">
                Make An Impact
            </h3>
            <p className="text-sm leading-relaxed mb-4">
                Your support directly fuels our mission. Every donation helps a child dream bigger and achieve more.
            </p>
            <Link
                href="/get-involved/donation"
                className="inline-block bg-white text-[#2d2f55] font-extrabold px-6 py-3 rounded-xl shadow-lg hover:bg-[#f2e63d] hover:text-[#2d2f55] transition-colors duration-300 transform hover:scale-[1.02]"
            >
                Donate Today!
            </Link>
        </div>
      </div>

      {/* Bottom Bar (Copyright) */}
      <div className="mt-12 border-t border-gray-600 pt-8 text-center text-sm text-gray-400 relative">
        {/* Subtle accent line using the brand color */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-gradient-to-r from-transparent via-[#f2e63d] to-transparent"></div>
        <p className="pt-2">
          © {new Date().getFullYear()} Shaping Futures. All rights reserved. |{" "}
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link> |{" "}
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
        </p>
      </div>
    </footer>
  );
}
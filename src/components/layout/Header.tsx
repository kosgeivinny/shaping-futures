"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shirt, BookOpen, GraduationCap, Soup, Heart, Music, Facebook, Twitter, Instagram } from "lucide-react"; 

// --- Theme Variables (Retained for consistency) ---
const ACCENT_YELLOW = "#f2e63d";

// --- Programs Data (Updated to your specific list) ---
const programLinks = [
  { 
    title: "Dance Program", 
    href: "/programs/dance", 
    description: "Building confidence through movement and artistic expression.",
    icon: Music
  },
  { 
    title: "Clothes Donation Drive", 
    href: "/programs/clothes-donation", 
    description: "Providing essential clothing and dignity to children in need.",
    icon: Shirt 
  },
  { 
    title: "Life Skills Training", 
    href: "/programs/life-skills", 
    description: "Guiding youth with essential skills for successful adulthood.",
    icon: BookOpen 
  },
  { 
    title: "Mtoto na Elimu (Education)", 
    href: "/programs/education", 
    description: "Supporting access to quality education and school supplies.",
    icon: GraduationCap 
  },
  { 
    title: "Feeding Program", 
    href: "/programs/feeding", 
    description: "Ensuring children receive nutritious meals for healthy development.",
    icon: Soup 
  },
  { 
    title: "Sanitary Donation", 
    href: "/programs/sanitary-donation", 
    description: "Promoting health and dignity with necessary hygiene products.",
    icon: Heart 
  },
];

// --- Dropdown Menu Item Component (No change) ---
const DropdownItem = ({ title, href, description, icon: Icon }: typeof programLinks[0]) => (
  <Link 
    href={href} 
    className="flex items-start p-3 rounded-lg transition-colors duration-200 hover:bg-[#2d2f55]/10 group"
  >
    <Icon className="w-6 h-6 mr-3 text-[#2d2f55] group-hover:text-[#f2e63d] transition-colors flex-shrink-0" />
    <div>
      <p className="font-semibold text-gray-900 group-hover:text-[#2d2f55] leading-tight">{title}</p>
      <p className="text-xs text-gray-500 mt-0.5">{description}</p>
    </div>
  </Link>
);

// --- Social Icons Component (Using Lucide Icons) ---
const SocialIcons = ({ scrolled }: { scrolled: boolean }) => {
    const iconColor = scrolled ? 'text-gray-600' : 'text-white';
    const hoverColor = `hover:text-[${ACCENT_YELLOW}]`;

    return (
        <div className={`flex space-x-4 ${iconColor}`}>
            <a href="#" aria-label="Facebook" className={`transition transform hover:scale-110 ${hoverColor}`}>
                <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="TikTok" className={`transition transform hover:scale-110 ${hoverColor}`}>
                <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className={`transition transform hover:scale-110 ${hoverColor}`}>
                <Instagram className="w-5 h-5" />
            </a>
        </div>
    );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variant for the dropdown animation
  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, scaleY: 0.95, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.3 } },
  };

  const primaryNavLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    // Programs slot here
    { href: "/events", label: "Events" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? `bg-white shadow-xl border-b border-gray-100` : "bg-transparent"
      }`}
      style={{
        backdropFilter: scrolled ? 'none' : 'blur(4px)',
        WebkitBackdropFilter: scrolled ? 'none' : 'blur(4px)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Shaping Futures"
            width={180}
            height={60}
            className={`h-10 w-auto transition-transform duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}
            priority
          />
        </Link>

        {/* Nav, Programs Dropdown, and Socials */}
        <nav className="flex items-center space-x-6 font-medium text-gray-800">
          
          {primaryNavLinks.map((link) => {
            const textColor = scrolled ? 'text-gray-800' : 'text-white';
            const hoverColor = `hover:text-[${ACCENT_YELLOW}]`; 
            const afterBg = `after:bg-[${ACCENT_YELLOW}]`;

            // Navigation Links
            const navLinkElement = (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors duration-200 ${textColor} ${hoverColor}
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] ${afterBg} after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.label}
              </Link>
            );

            // Programs Mega Dropdown insertion point
            if (link.label === "Events") {
              return (
                <div key="programs-dropdown" className="flex items-center space-x-6">
                  {/* Programs Mega Dropdown */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsProgramsOpen(true)}
                    onMouseLeave={() => setIsProgramsOpen(false)}
                  >
                    <Link
                      href="/programs"
                      className={`flex items-center transition-colors duration-200 cursor-pointer ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-[${ACCENT_YELLOW}]`}
                      onClick={(e) => {
                        // Allows direct link click while retaining dropdown functionality
                        if (isProgramsOpen) e.preventDefault();
                        setIsProgramsOpen(!isProgramsOpen);
                      }}
                    >
                      Programs
                      <ChevronDown 
                        className={`ml-1 w-4 h-4 transition-transform duration-300 ${isProgramsOpen ? 'rotate-180' : 'rotate-0'}`} 
                      />
                    </Link>

                    {/* Dropdown Content */}
                    <AnimatePresence>
                      {isProgramsOpen && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={dropdownVariants}
                          className="absolute left-1/2 transform -translate-x-1/2 mt-4 p-4 bg-white rounded-xl shadow-2xl w-[600px] border-t-4 border-[#2d2f55] origin-top"
                        >
                          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                            {programLinks.map((program) => (
                              <DropdownItem key={program.href} {...program} />
                            ))}
                          </div>
                          {/* Footer/Call to Action inside the dropdown */}
                          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center bg-[#f7f7f7] p-3 rounded-lg">
                            <p className="text-sm font-semibold text-[#2d2f55]">See the full scope of our work.</p>
                            <Link href="/programs" className="text-sm font-bold text-white bg-[#f2e63d] py-1.5 px-4 rounded-full transition-opacity hover:opacity-90">
                              View All Programs
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {/* Continue rendering the rest of the links */}
                  {navLinkElement}
                </div>
              );
            }
            return navLinkElement;
          })}

          {/* Social Media Icons (Now at the far right) */}
          <SocialIcons scrolled={scrolled} />
          
        </nav>
      </div>
    </header>
  );
}
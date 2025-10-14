"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
// Ensure all necessary Lucide icons are imported
import { ChevronDown, Shirt, BookOpen, GraduationCap, Soup, Heart, Music, Menu, X, ArrowRight } from "lucide-react"; 

// 🚨 IMPORT THE SHARED SOCIALICONS COMPONENT 🚨
import SocialIcons from "@/components/ui/SocialIcons"; 

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55"; // Defined for use in color classes
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
    href: "/programs/mtoto-na-elimu", 
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

// --- Dropdown Menu Item Component (Desktop Mega-Dropdown item) ---
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

// ❌ DELETED: Removed the local SocialIcons definition to use the shared component

// --- Mobile Navigation List Item Component ---
const MobileNavLink = ({ href, label, onClick }: { href: string, label: string, onClick: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className="flex justify-between items-center py-3 px-4 text-white hover:bg-[#353769] transition-colors rounded-lg text-lg font-medium"
  >
    {label}
    <ArrowRight className={`w-5 h-5 text-[${ACCENT_YELLOW}]`} />
  </Link>
);


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false); // Desktop Dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile Sidebar
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false); // Programs dropdown inside mobile sidebar

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variant for the desktop dropdown animation
  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, scaleY: 0.95, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.3 } },
  };
  
  // Variant for the mobile sidebar animation
  const sidebarVariants = {
    hidden: { x: "100%", transition: { duration: 0.3 } },
    visible: { x: 0, transition: { duration: 0.4 } },
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
  
  // Function to close all menus
  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsProgramsOpen(false);
    setIsMobileProgramsOpen(false);
  };

  return (
    <header
      // ✅ FIX: Raised z-index to z-[100] for better stacking context over videos
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
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

        {/* --- DESKTOP NAV (Hidden on Mobile) --- */}
        <nav className="hidden lg:flex items-center space-x-6 font-medium text-gray-800">
          
          {primaryNavLinks.map((link) => {
            const textColor = scrolled ? 'text-gray-800' : 'text-white';
            const hoverColor = `hover:text-[${ACCENT_YELLOW}]`; 
            const afterBg = `after:bg-[${ACCENT_YELLOW}]`;

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
                  {/* Programs Mega Dropdown - Desktop Only */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsProgramsOpen(true)}
                    onMouseLeave={() => setIsProgramsOpen(false)}
                  >
                    <Link
                      href="/programs"
                      className={`flex items-center transition-colors duration-200 cursor-pointer ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-[${ACCENT_YELLOW}]`}
                      onClick={(e) => {
                         // Prevents navigation if dropdown is open or if it's opened via click on touch devices
                        if (!isProgramsOpen) {
                            e.preventDefault(); 
                            setIsProgramsOpen(true);
                        }
                      }}
                    >
                      Programs
                      <ChevronDown 
                        className={`ml-1 w-4 h-4 transition-transform duration-300 ${isProgramsOpen ? 'rotate-180' : 'rotate-0'}`} 
                      />
                    </Link>

                    <AnimatePresence>
                      {isProgramsOpen && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={dropdownVariants}
                          className={`absolute left-1/2 transform -translate-x-1/2 mt-4 p-4 bg-white rounded-xl shadow-2xl w-[600px] border-t-4 border-[${PRIMARY_BLUE}] origin-top`}
                        >
                          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                            {programLinks.map((program) => (
                              <DropdownItem key={program.href} {...program} />
                            ))}
                          </div>
                          <div className={`mt-4 pt-4 border-t border-gray-100 flex justify-between items-center bg-[#f7f7f7] p-3 rounded-lg`}>
                            <p className={`text-sm font-semibold text-[${PRIMARY_BLUE}]`}>See the full scope of our work.</p>
                            <Link href="/programs" className={`text-sm font-bold text-white bg-[${ACCENT_YELLOW}] py-1.5 px-4 rounded-full transition-opacity hover:opacity-90`}>
                              View All Programs
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {navLinkElement}
                </div>
              );
            }
            return navLinkElement;
          })}

          {/* ✅ USING SHARED SOCIALICONS COMPONENT */}
          <SocialIcons 
            className={`space-x-4 ${scrolled ? 'text-gray-600' : 'text-white'} [&>a:hover]:text-[${ACCENT_YELLOW}]`} 
          />
        </nav>

        {/* --- MOBILE HAMBURGER ICON (Visible on Mobile) --- */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? `text-[${PRIMARY_BLUE}] hover:bg-gray-100` : 'text-white hover:bg-white/10'}`}
          aria-label="Toggle Menu"
        >
          <Menu className="w-6 h-6" />
        </button>

      </div>
      
      {/* --- MOBILE OFF-CANVAS SIDEBAR --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // ✅ FIX: Z-index set to z-[101] to ensure it is above the main header (z-[100])
            className="fixed inset-0 bg-black/50 z-[101] lg:hidden" // Backdrop
            onClick={closeMenus}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sidebarVariants}
              // Sidebar styling
              className={`absolute top-0 right-0 w-3/4 max-w-sm h-full bg-[${PRIMARY_BLUE}] shadow-2xl p-6 overflow-y-auto`}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Header and Close Button */}
              <div className="flex justify-between items-center pb-6 border-b border-gray-700">
                <Image
                    src="/logo.png"
                    alt="Shaping Futures"
                    width={150}
                    height={50}
                    className="h-10 w-auto"
                />
                <button 
                  onClick={closeMenus}
                  className={`p-2 text-white hover:text-[${ACCENT_YELLOW}] transition-colors`}
                  aria-label="Close Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="pt-6 space-y-2">
                
                {/* Regular Links */}
                {primaryNavLinks
                    .flatMap(link => link.label === 'Events' ? [{ href: '/programs', label: 'Programs' }, link] : [link])
                    .filter(link => link.label !== 'Programs' || !isMobileProgramsOpen)
                    .map(link => (
                      <MobileNavLink 
                        key={link.href} 
                        href={link.href} 
                        label={link.label} 
                        onClick={closeMenus} 
                      />
                ))}


                {/* Programs Collapsible Menu */}
                <div className="border-t border-gray-700 pt-2 mt-2">
                    <button
                        onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                        className={`flex justify-between items-center w-full py-3 px-4 text-white hover:bg-[#353769] transition-colors rounded-lg text-lg font-bold`}
                    >
                        Programs
                        <ChevronDown 
                            className={`w-5 h-5 transition-transform duration-300 ${isMobileProgramsOpen ? `rotate-180 text-[${ACCENT_YELLOW}]` : 'rotate-0'}`} 
                        />
                    </button>
                    
                    {/* Collapsible Programs List */}
                    <AnimatePresence>
                        {isMobileProgramsOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden bg-[#353769] rounded-lg mt-1"
                            >
                                {programLinks.map(program => (
                                    <Link
                                        key={program.href}
                                        href={program.href}
                                        onClick={closeMenus}
                                        className={`block py-2 pl-8 pr-4 text-sm text-gray-200 hover:text-white hover:bg-[${PRIMARY_BLUE}] transition-colors`}
                                    >
                                        {program.title}
                                    </Link>
                                ))}
                                <Link
                                    href="/programs"
                                    onClick={closeMenus}
                                    className={`block py-2 pl-8 pr-4 text-sm text-[${ACCENT_YELLOW}] hover:text-white hover:bg-[${PRIMARY_BLUE}] transition-colors font-semibold border-t border-gray-700`}
                                >
                                    View All Programs
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
              </div>
              
              {/* Mobile CTA and Socials */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                  <Link
                    href="/get-involved/donation"
                    onClick={closeMenus}
                    className={`flex justify-center items-center w-full bg-[${ACCENT_YELLOW}] text-[${PRIMARY_BLUE}] font-extrabold px-5 py-3 rounded-xl shadow-lg transition-colors hover:bg-white text-lg`}
                  >
                    Donate Today!
                  </Link>

                  <div className="flex justify-center space-x-6 mt-6">
                    {/* ✅ USING SHARED SOCIALICONS COMPONENT */}
                    <SocialIcons className={`text-white hover:text-[${ACCENT_YELLOW}] space-x-6`} />
                  </div>
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
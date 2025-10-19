"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Shirt,
  BookOpen,
  GraduationCap,
  Soup,
  Heart,
  Music,
  Menu,
  X,
} from "lucide-react";

import SocialIcons from "@/components/ui/SocialIcons";

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";

// --- Programs Data ---
const programLinks = [
  {
    title: "Dance Program",
    href: "/programs/dance",
    description: "Building confidence through movement and artistic expression.",
    icon: Music,
  },
  {
    title: "Clothes Donation Drive",
    href: "/programs/clothes-donation",
    description: "Providing essential clothing and dignity to children in need.",
    icon: Shirt,
  },
  {
    title: "Life Skills Training",
    href: "/programs/life-skills",
    description: "Guiding youth with essential skills for successful adulthood.",
    icon: BookOpen,
  },
  {
    title: "Mtoto na Elimu (Education)",
    href: "/programs/mtoto-na-elimu",
    description: "Supporting access to quality education and school supplies.",
    icon: GraduationCap,
  },
  {
    title: "Feeding Program",
    href: "/programs/feeding",
    description: "Ensuring children receive nutritious meals for healthy development.",
    icon: Soup,
  },
  {
    title: "Sanitary Donation",
    href: "/programs/sanitary-donation",
    description: "Promoting health and dignity with necessary hygiene products.",
    icon: Heart,
  },
];

// --- Dropdown Menu Item (Desktop) ---
const DropdownItem = ({ title, href, description, icon: Icon }: typeof programLinks[0]) => (
  <Link
    href={href}
    className="flex items-start p-3 rounded-lg transition-colors duration-200 hover:bg-[#2d2f55]/10 group"
  >
    <Icon className="w-6 h-6 mr-3 text-[#2d2f55] group-hover:text-[#f2e63d] transition-colors flex-shrink-0" />
    <div>
      <p className="font-semibold text-gray-900 group-hover:text-[#2d2f55] leading-tight">
        {title}
      </p>
      <p className="text-xs text-gray-500 mt-0.5">{description}</p>
    </div>
  </Link>
);

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, scaleY: 0.95 },
    visible: { opacity: 1, y: 0, scaleY: 1 },
  };

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  const primaryNavLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/events", label: "Events" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-xl border-b border-gray-100"
          : "bg-[#2d2f55] lg:bg-transparent"
      }`}
      style={{
        backdropFilter: scrolled ? "none" : "blur(4px)",
        WebkitBackdropFilter: scrolled ? "none" : "blur(4px)",
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
            className={`h-10 w-auto transition-transform duration-300 ${
              scrolled ? "scale-90" : "scale-100"
            }`}
            priority
          />
        </Link>

        {/* --- DESKTOP NAV --- */}
        <nav className="hidden lg:flex items-center space-x-6 font-medium text-gray-800">
          {primaryNavLinks.map((link) => {
            const isProgramsActive =
              pathname.startsWith("/programs") && link.href === "/programs";
            const isGetInvolvedActive =
              pathname.startsWith("/get-involved") && link.href === "/get-involved";
            const isActive =
              pathname === link.href || isProgramsActive || isGetInvolvedActive;

            const textColor = scrolled ? "text-gray-800" : "text-white";
            const hoverColor = `hover:text-[${ACCENT_YELLOW}]`;
            const afterBg = `after:bg-[${ACCENT_YELLOW}]`;

            if (link.label === "Programs") {
              return (
                <div
                  key="programs-dropdown"
                  className="relative"
                  onMouseEnter={() => setIsProgramsOpen(true)}
                  onMouseLeave={() => setIsProgramsOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center transition-colors duration-200 cursor-pointer ${
                      isProgramsActive
                        ? `text-[${ACCENT_YELLOW}]`
                        : scrolled
                        ? "text-gray-800"
                        : "text-white"
                    } hover:text-[${ACCENT_YELLOW}]`}
                  >
                    Programs
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                        isProgramsOpen ? "rotate-180" : "rotate-0"
                      }`}
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
                        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center bg-[#f7f7f7] p-3 rounded-lg">
                          <p className={`text-sm font-semibold text-[${PRIMARY_BLUE}]`}>
                            See the full scope of our work.
                          </p>
                          <Link
                            href="/programs"
                            className={`text-sm font-bold text-[#2d2f55] bg-[${ACCENT_YELLOW}] py-1.5 px-4 rounded-full transition-opacity hover:opacity-90 hover:bg-[#2d2f55] hover:text-white`}
                          >
                            View All Programs
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors duration-200 ${
                  isActive ? `text-[${ACCENT_YELLOW}] after:w-full` : textColor
                } ${hoverColor}
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                ${afterBg} after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.label}
              </Link>
            );
          })}

          <SocialIcons
            className={`space-x-4 ${
              scrolled ? "text-gray-600" : "text-white"
            } [&>a:hover]:text-[${ACCENT_YELLOW}]`}
          />
        </nav>

        {/* --- MOBILE MENU ICON --- */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled
              ? `text-[${PRIMARY_BLUE}] hover:bg-gray-100`
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle Menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* --- MOBILE MENU (SIDEBAR) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[99]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Sidebar */}
            <motion.div
              className={`fixed top-0 right-0 h-full w-4/5 max-w-sm z-[100] flex flex-col shadow-2xl transition-colors duration-300 ${
                scrolled ? "bg-white text-gray-800" : `bg-[${PRIMARY_BLUE}] text-white`
              }`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            >
              <div
                className={`flex items-center justify-between p-5 border-b ${
                  scrolled ? "border-gray-200" : "border-white/30"
                }`}
              >
                <Image src="/logo.png" alt="Shaping Futures" width={140} height={40} />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close Menu"
                  className={scrolled ? "text-gray-700" : "text-white"}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav
                className={`flex flex-col p-5 space-y-4 font-medium ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {primaryNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-2 border-b ${
                      scrolled ? "border-gray-100" : "border-white/30"
                    } hover:text-[${ACCENT_YELLOW}]`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div
                className={`mt-auto p-5 border-t ${
                  scrolled ? "border-gray-200" : "border-white/30"
                }`}
              >
                <SocialIcons
                  className={`flex space-x-5 ${
                    scrolled ? "text-gray-600" : "text-white"
                  } [&>a:hover]:text-[${ACCENT_YELLOW}]`}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

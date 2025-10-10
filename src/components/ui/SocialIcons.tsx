"use client";

import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";

interface SocialIconsProps {
  className?: string;
}

export default function SocialIcons({ className }: SocialIconsProps) {
  return (
    <div className={`flex items-center space-x-4 text-xl ${className ?? ""}`}>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className="transition transform hover:text-[#f2e63d] hover:scale-110"
      >
        <FaFacebook />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className="transition transform hover:text-[#f2e63d] hover:scale-110"
      >
        <FaInstagram />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noreferrer"
        className="transition transform hover:text-[#f2e63d] hover:scale-110"
      >
        <FaYoutube />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        className="transition transform hover:text-[#f2e63d] hover:scale-110"
      >
        <FaXTwitter />
      </a>
      <a
        href="https://tiktok.com/@shapingfutures"
        target="_blank"
        rel="noreferrer"
        className="transition transform hover:text-[#f2e63d] hover:scale-110"
      >
        <SiTiktok />
      </a>
      <a
        href="https://wa.me/254700123456"
        target="_blank"
        rel="noreferrer"
        className="transition transform hover:text-[#f2e63d] hover:scale-110"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

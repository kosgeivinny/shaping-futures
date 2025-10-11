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
        href="https://www.facebook.com/SHAFFS35"
        target="_blank"
        rel="noreferrer"
        className="transition transform hover:text-[#f2e63d] hover:scale-110"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com/shapingfutures35/"
        target="_blank"
        rel="noreferrer"
        className="transition transform hover:text-[#f2e63d] hover:scale-110"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.youtube.com/@shapingfutures5429"
        target="_blank"
        rel="noreferrer"
        className="transition transform hover:text-[#f2e63d] hover:scale-110"
      >
        <FaYoutube />
      </a>
      <a
        href="https://x.com/ShapingF23501"
        target="_blank"
        rel="noreferrer"
        className="transition transform hover:text-[#f2e63d] hover:scale-110"
      >
        <FaXTwitter />
      </a>
      <a
        href="https://www.tiktok.com/@shaping_futures?_t=8pitydSW0yT&_r=1"
        target="_blank"
        rel="noreferrer"
        className="transition transform hover:text-[#f2e63d] hover:scale-110"
      >
        <SiTiktok />
      </a>
      <a
        href="https://wa.me/254757050679"
        target="_blank"
        rel="noreferrer"
        className="transition transform hover:text-[#f2e63d] hover:scale-110"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

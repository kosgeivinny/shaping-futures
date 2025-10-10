// src/app/gallery/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PlayCircle } from "lucide-react"; 

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";
const WHITE = "#ffffff";

// --- Type Definitions ---
type PhotoItem = {
  id: string;
  type: 'photo';
  category: 'portrait' | 'landscape';
  src: string;
  title: string;
  description: string;
};

type VideoItem = {
  id: string;
  type: 'video';
  category: 'video';
  src: string;
  title: string;
  description: string;
};

type MediaItem = PhotoItem | VideoItem;

// --- Data Separation ---
const allPlaceholderPhotos: PhotoItem[] = [
  ...Array.from({ length: 26 }, (_, i) => ({
    id: `p${i + 1}`,
    type: 'photo' as const,
    category: 'portrait' as const,
    src: `/images/gallery/portrait${i + 1}.jpg`,
    title: `Portrait Image ${i + 1}`,
    description: `A close-up moment from our activities.`,
  })),
  ...Array.from({ length: 34 }, (_, i) => ({
    id: `l${i + 1}`,
    type: 'photo' as const,
    category: 'landscape' as const,
    src: `/images/gallery/landscape${i + 1}.jpg`,
    title: `Landscape Image ${i + 1}`,
    description: `A wider view of our community events.`,
  })),
];

const videoMedia: VideoItem[] = [
  { id: 'v1', type: 'video', category: 'video', src: '/videos/video1.mp4', title: 'Dance Performance Highlights', description: '' },
  { id: 'v2', type: 'video', category: 'video', src: '/videos/video2.mp4', title: 'Community Outreach Day', description: '' },
  { id: 'v3', type: 'video', category: 'video', src: '/videos/video3.mp4', title: 'Life Skills Workshop Recap', description: '' },
  { id: 'v4', type: 'video', category: 'video', src: '/videos/video4.mp4', title: 'Volunteer Impact Story', description: '' },
  { id: 'v5', type: 'video', category: 'video', src: '/videos/video5.mp4', title: 'Behind the Scenes', description: '' },
];

const landscapePhotos = allPlaceholderPhotos.filter(item => item.category === 'landscape');
const portraitPhotos = allPlaceholderPhotos.filter(item => item.category === 'portrait');

export default function GalleryPage() {
  // start with first video id so it auto-plays on mount
  const [activeVideoId, setActiveVideoId] = useState<string | null>('v1');

  // keep refs to each video element so we can programmatically play/pause
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  // When activeVideoId changes, play the active video and pause others
  useEffect(() => {
    const refs = videoRefs.current;
    Object.keys(refs).forEach((id) => {
      const el = refs[id];
      if (!el) return;
      if (id === activeVideoId) {
        // ensure muted for autoplay, try to play (catch to avoid uncaught promise)
        el.muted = true;
        // optional: keep currentTime where it was, or reset — I keep position
        el.play().catch(() => { /* autoplay may be blocked by browser policies */ });
      } else {
        try {
          el.pause();
          // optional: reset time so hovering starts from beginning
          // el.currentTime = 0;
        } catch (e) {
          return e;
        }
      }
    });
  }, [activeVideoId]);

  // Landscape Col Span adjusted for 3 items in a row on large screens
  const getLandscapeColSpan = () => {
    return "col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-2";
  };

  // Portrait photos and Videos always use the default 1 column
  const getPortraitVideoColSpan = () => "col-span-1";

  // Correct Aspect Ratio Logic (Unchanged)
  const getItemPadding = (item: MediaItem) => {
    if (item.type === 'video' || item.category === 'portrait') return '150%'; // 2:3 ratio
    if (item.category === 'landscape') return '66.66%'; // 3:2 ratio
    return '100%';
  };

  return (
    <main className="bg-[#f8f9fb] text-gray-800">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#2d2f55] to-[#1f2041] text-center pt-32 pb-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-4"
          style={{ color: ACCENT_YELLOW }}
        >
          <span style={{ color: WHITE }}>Our Impact in</span> Pictures & Videos
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed">
          Explore moments of transformation, joy, and community from Shaping Futures.
        </p>
      </section>

      {/* 2. MEDIA GALLERY GRID */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <AnimatePresence>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold mb-8 text-[#2d2f55] text-center"
          >
            Video Highlights
          </motion.h2>

          {/* A. VIDEO GRID (5 columns on XL) */}
          <motion.div
            layout
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 auto-rows-fr mb-16`}
          >
            {videoMedia.map((item) => {
              const isCurrentlyPlaying = item.id === activeVideoId;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`relative group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow ${getPortraitVideoColSpan()}`}
                >
                  {/* NATIVE HTML5 VIDEO PLAYER */}
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: getItemPadding(item) }}
                    onMouseEnter={() => setActiveVideoId(item.id)}
                  >
                    <video
                      ref={(el) => {
                        if (el) {
                          videoRefs.current[item.id] = el;
                        }
                      }}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      key={item.id}
                      src={item.src}
                      title={item.title}
                      poster="/images/gallery/portrait1.jpg"
                      controls={isCurrentlyPlaying}
                      loop
                      muted // keep muted so autoplay works
                      playsInline
                      // don't rely solely on attribute autoPlay; we call play() programmatically in effect
                      autoPlay={isCurrentlyPlaying}
                    >
                      Your browser does support the video tag.
                    </video>

                    {/* Optional Overlay when video is not playing (NO DARK BACKGROUND) */}
                    {!isCurrentlyPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <PlayCircle className="w-16 h-16 text-white text-opacity-90 drop-shadow-lg" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* *** CONSOLIDATED PHOTO GRID SECTION *** */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold mb-8 mt-12 text-[#2d2f55] text-center"
          >
            Photo Gallery
          </motion.h2>

          {/* B. LANDSCAPE PHOTO GRID (3 in a row on XL) */}
          <motion.div layout className={`grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 auto-rows-fr mb-12`}>
            {landscapePhotos.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`relative group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow ${getLandscapeColSpan()}`}
              >
                <Link href={item.src} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-full h-auto" style={{ paddingBottom: getItemPadding(item) }}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* C. PORTRAIT PHOTO GRID (Standard single-column flow) */}
          <motion.div layout className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 auto-rows-fr`}>
            {portraitPhotos.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`relative group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow ${getPortraitVideoColSpan()}`}
              >
                <Link href={item.src} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-full h-auto" style={{ paddingBottom: getItemPadding(item) }}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 4. FINAL CTA */}
      <section className="text-center py-16 text-black" style={{ backgroundColor: ACCENT_YELLOW }}>
        <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_BLUE }}>
          Inspired by Our Journey?
        </h2>
        <p className="text-gray-800 mb-6">Join us in making more such impactful moments possible.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/get-involved/volunteer"
            className="bg-[#2d2f55] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#1f2041] transition"
          >
            Volunteer Today
          </Link>
          <Link
            href="/get-involved/donation"
            className="bg-transparent border border-[#2d2f55] text-[#2d2f55] font-semibold px-6 py-3 rounded-lg hover:bg-[#2d2f55] hover:text-white transition"
          >
            Donate Now
          </Link>
        </div>
      </section>
    </main>
  );
}

"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Heart,
  Users,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  Trophy,
  School,
  HandCoins,
  Handshake,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";
const WHITE = "#ffffff";

// --- Data for the Benefits/Impact Section ---
const benefits = [
  {
    title: "Unleash Creativity",
    description:
      "Our diverse curriculum nurtures imagination and artistic freedom, allowing children to express themselves fully.",
    icon: Sparkles,
  },
  {
    title: "Physical Wellness",
    description:
      "Dance is a fun way to improve physical fitness, coordination, flexibility, and motor skills.",
    icon: Heart,
  },
  {
    title: "Build Confidence",
    description:
      "Through performance opportunities and skill mastery, participants gain confidence and self-esteem that extends beyond the studio.",
    icon: CheckCircle,
  },
  {
    title: "Teamwork & Social Skills",
    description:
      "Group choreography fosters collaboration, communication, and strong bonds among peers.",
    icon: Users,
  },
];

// --- Video Data ---
const danceVideos = [
  { id: "dv1", src: "/videos/dance/video1.mp4", description: "Energetic group hip-hop session." },
  { id: "dv2", src: "/videos/dance/video2.mp4", description: "Graceful ballet rehearsal." },
  { id: "dv3", src: "/videos/dance/video3.mp4", description: "African contemporary movement class." },
  { id: "dv4", src: "/videos/dance/video4.mp4", description: "Improvisation and free expression." },
  { id: "dv5", src: "/videos/dance/video5.mp4", description: "Annual showcase final performance." },
  { id: "dv6", src: "/videos/dance/video6.mp4", description: "Warm-up and stretching routines." },
];

export default function DanceProgramPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(danceVideos[0]?.id || null);
  const [lastPlayedId, setLastPlayedId] = useState(danceVideos[0]?.id || null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {
    const refs = videoRefs.current;
    Object.keys(refs).forEach((id) => {
      const el = refs[id];
      if (!el) return;
      if (id === activeVideoId) {
        el.muted = true;
        el.play().catch(() => {});
      } else {
        el.pause();
      }
    });
  }, [activeVideoId]);

  const handleMouseEnter = (id: string) => {
    setActiveVideoId(id);
    setLastPlayedId(id);
  };

  const handleContainerMouseLeave = () => setActiveVideoId(lastPlayedId);
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const data = new FormData(form);

  try {
    setIsSubmitted(false);
    setIsSubmitting(true);

    await fetch("https://formsubmit.co/ajax/info@shapingfutures.or.ke", {
      method: "POST",
      body: data,
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
    form.reset();

    // Hide success after 4 seconds
    setTimeout(() => setIsSubmitted(false), 4000);

  } catch (error) {
    console.error("Error submitting form:", error);
    setIsSubmitting(false);
  }
};


  const BenefitCard = ({ title, description, icon: Icon }: typeof benefits[0]) => (
    <motion.div
      className="p-6 bg-white rounded-xl shadow-lg border-t-4"
      style={{ borderColor: ACCENT_YELLOW }}
      whileHover={{ y: -5 }}
    >
      <Icon className="w-8 h-8 mb-3" style={{ color: PRIMARY_BLUE }} />
      <h4 className="text-xl font-bold mb-2" style={{ color: PRIMARY_BLUE }}>
        {title}
      </h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );

  return (
    <main className="bg-[#f8f9fb]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-16 text-center bg-gradient-to-b from-[#2d2f55] to-[#1f2041]">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/programs/dance.jpg")' }}
        />
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ color: WHITE }}>
              <span style={{ color: ACCENT_YELLOW }}>Empower</span> Dance Academy
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Dance is a powerful tool for <strong>self-expression, discipline, and community building</strong>. It&apos;s
              where young futures learn to soar with confidence and grace.
            </p>

            {/* Button Opens Modal */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center bg-[#f2e63d] text-[#2d2f55] font-extrabold px-10 py-4 rounded-full shadow-2xl text-lg transition-colors duration-300 hover:bg-[#ffe85e] group"
            >
              Start Their Dance Journey
              <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 2. DANCE VIDEO GALLERY */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto" ref={containerRef} onMouseLeave={handleContainerMouseLeave}>
        <h2 className="text-3xl font-bold text-center mb-10" style={{ color: PRIMARY_BLUE }}>
          See Our Students in Motion 🎬
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {danceVideos.map((item) => {
            const isCurrentlyPlaying = item.id === activeVideoId;
            return (
              <motion.div
                key={item.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                onMouseEnter={() => handleMouseEnter(item.id)}
                whileHover={{ y: -3 }}
              >
                <div className="relative w-full" style={{ paddingBottom: "150%" }}>
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[item.id] = el;
                    }}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={item.src}
                    controls
                    loop
                    muted
                    playsInline
                    autoPlay={isCurrentlyPlaying}
                  />
                  {!isCurrentlyPlaying && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
                      <PlayCircle className="w-12 h-12 text-white/90" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. IMPACT STATS */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <Trophy className="w-10 h-10 mx-auto mb-3" style={{ color: ACCENT_YELLOW }} />
            <h3 className="text-3xl font-bold" style={{ color: PRIMARY_BLUE }}>50+</h3>
            <p className="text-sm text-gray-600">Styles of Dance Taught</p>
          </div>
          <div>
            <Users className="w-10 h-10 mx-auto mb-3" style={{ color: ACCENT_YELLOW }} />
            <h3 className="text-3xl font-bold" style={{ color: PRIMARY_BLUE }}>150+</h3>
            <p className="text-sm text-gray-600">Students Empowered Annually</p>
          </div>
          <div>
            <School className="w-10 h-10 mx-auto mb-3" style={{ color: ACCENT_YELLOW }} />
            <h3 className="text-3xl font-bold" style={{ color: PRIMARY_BLUE }}>6 Yrs</h3>
            <p className="text-sm text-gray-600">Of Community Dance Education</p>
          </div>
        </div>
      </section>

      {/* 4. BENEFITS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12" style={{ color: PRIMARY_BLUE }}>
          More Than Steps: <span style={{ color: ACCENT_YELLOW }}>Our Core Impact</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </section>

      {/* 5. CTA */}
      <section className="text-center py-20 text-black" style={{ backgroundColor: ACCENT_YELLOW }}>
        <h2 className="text-4xl font-extrabold mb-4" style={{ color: PRIMARY_BLUE }}>
          Ready to See Your Child Soar?
        </h2>
        <p className="text-gray-800 mb-8 max-w-2xl mx-auto text-lg">
          Spaces are limited in our popular classes. Secure your child&apos;s spot for a journey of artistic growth and confidence.
        </p>
        <motion.div whileHover={{ scale: 1.05 }}>
          <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center bg-[#2d2f55] text-white font-extrabold px-10 py-4 rounded-full shadow-2xl text-lg hover:bg-[#1f2041] group">
              View Enrollment Details
              <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </section>

      {/* 6. SUPPORT SECTION */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center relative">
        <h2 className="text-3xl font-bold mb-8" style={{ color: PRIMARY_BLUE }}>
          Help Our Dancers Shine Brighter
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <motion.button
            whileHover={{ y: -3 }}
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center w-full md:w-auto bg-white text-gray-800 font-semibold px-6 py-3 border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg"
          >
            <Handshake className="w-5 h-5 mr-2" style={{ color: PRIMARY_BLUE }} />
            Enroll or Get Involved
          </motion.button>

          <Link
            href="/get-involved/volunteer"
            className="inline-flex items-center justify-center w-full md:w-auto bg-white text-gray-800 font-semibold px-6 py-3 border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg"
          >
            <Users className="w-5 h-5 mr-2" style={{ color: ACCENT_YELLOW }} />
            Volunteer Time
          </Link>

          <Link
            href="/get-involved/donation"
            className="inline-flex items-center justify-center w-full md:w-auto bg-white text-gray-800 font-semibold px-6 py-3 border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg"
          >
            <HandCoins className="w-5 h-5 mr-2" style={{ color: PRIMARY_BLUE }} />
            Make a Donation
          </Link>
        </div>

        {/* Enrollment Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 w-[90%] max-w-md shadow-2xl relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-600 hover:text-black">
                  <X className="w-5 h-5" />
                </button>

                {!isSubmitted ? (
                  <>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_BLUE }}>
                      Enroll Your Child
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">
                      Please fill in your details to enroll in our free dance program.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4 text-left">
                      <input type="text" name="Student" placeholder="Student Name" required className="w-full border border-gray-300 rounded-lg p-2" />
                      <input type="email" name="Email" placeholder="Parent Email" required className="w-full border border-gray-300 rounded-lg p-2" />
                      <input type="text" name="Parent" placeholder="Parent Name" required className="w-full border border-gray-300 rounded-lg p-2" />
                      <input type="tel" name="Number" placeholder="Phone Number" required className="w-full border border-gray-300 rounded-lg p-2" />
                      <input type="text" name="Area" placeholder="Area of Residence" required className="w-full border border-gray-300 rounded-lg p-2" />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-4 py-2 rounded-md text-white ${
                          isSubmitting ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                        }`}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-lg font-semibold text-green-600">
                      🎉 Thank you! Your enrollment has been received.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">We’ll reach out to you soon.</p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}

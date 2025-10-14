"use client";

import Link from "next/link"; // Use Link for internal navigation
import Image from "next/image";
import { motion } from "framer-motion";
import { JSX } from "react";

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";
const LIGHT_BACKGROUND = "#f3f4f9";

// --- Data Structure Definitions ---
// Define the common structure for a story item
interface StoryItem {
  title: string;
  image: string;
  text: string | JSX.Element;
}

const stories: StoryItem[] = [
  {
    title: "Mike’s Journey: From Aspiring Dancer to Fierce Competitor",
    image: "/images/brian.jpg",
    text: `Mike, a dedicated dancer from the Shaping Futures program, is making waves in the battle scene. Through mentorship and rigorous training, he transformed his raw talent into a refined craft and now competes on major stages.`,
  },
  {
    title: "Dominic’s Success: From Learner to Tech Innovator",
    image: "/images/dominic.jpeg",
    text: `Dominic, the first beneficiary of the Mtoto na Elimu program, gained quality education and mentorship through Shaping Futures. His hard work and innovation have led him to international recognition, inspiring many.`,
  },
  {
    title: "National Diversity Awards UK Nomination",
    image: "/images/awards.jpg",
    text: (
      <>
        September 2025 – Shaping Futures founder, Kevin Odhiambo was nominated for the Positive Role Model Award at the National Diversity Awards UK.{" "}
        <a
          target="_blank"
          href="https://www.nationaldiversityawards.co.uk/awards-2025/nominations/kevin-odhiambo-ochieng/"
          className={`text-[${ACCENT_YELLOW}] hover:text-white underline font-semibold transition`}
        >
          Read more
        </a>
      </>
    ),
  },
  {
    title: "Meet Kevin Odhiambo: The Visionary Behind Shaping Futures",
    image: "/images/founder.jpeg",
    text: `Nominated for Founder of the Year Award (FOYA) 2023, Kevin’s dedication continues to empower the youth through mentorship and opportunity.`,
  },
  {
    title: "Shaping Futures: A Dance Crew Making Waves",
    image: "/images/shapingkibra.jpeg",
    text: `🏆 Awarded Best Dance Crew of the Year at the 8Town Kibra Awards, Shaping Futures continues to inspire through passion, discipline, and creativity.`,
  },
  {
    title: "Spreading Warmth, Restoring Dignity",
    image: "/images/clothingstory.jpeg",
    text: `Over 5,000 lives touched through our Clothes Donation Program — restoring dignity and hope to vulnerable communities.`,
  },
  {
    title: "Nourishing Lives, Spreading Hope",
    image: "/images/feedingstory.jpeg",
    text: `Our Feeding Program ensures children receive nutritious meals and emotional support — proving that small acts of kindness create lasting impact.`,
  },
];

// --- Type Definition for Story Card Props (now correctly typed) ---
interface StoryCardProps {
  story: StoryItem;
  i: number;
  aspectRatio?: string;
  objectPosition?: string;
}

// --- Utility Component for Reusable Story Card ---
const StoryCard = ({ story, i, aspectRatio = "aspect-square", objectPosition = "object-top" }: StoryCardProps) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5, delay: i * 0.1 }}
    className="bg-[#353769] rounded-xl shadow-2xl overflow-hidden flex flex-col h-full"
  >
    <div className={`relative w-full ${aspectRatio}`}>
      <Image
        src={story.image}
        alt={story.title}
        fill
        sizes="(max-width: 640px) 100vw, 33vw"
        className={`object-cover hover:scale-105 transition-transform duration-500 ${objectPosition}`}
      />
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
    <div className="p-6 flex flex-col justify-between flex-grow">
      <h3 className={`text-xl font-extrabold text-[${ACCENT_YELLOW}] mb-3`}>
        {story.title}
      </h3>
      <p className="text-gray-300 leading-relaxed text-sm">
        {story.text}
      </p>
    </div>
  </motion.div>
);


// --- Main Component ---
export default function ProgramsPage() {
  const programs = [
    {
      title: "Clothes Donation",
      image: "/images/programs/clothes.jpg",
      description:
        "Providing warm clothing and essentials to underprivileged children.",
      link: "/programs/clothes-donation",
    },
    {
      title: "Dance",
      image: "/images/programs/dance.jpg",
      description:
        "Helping children express themselves through dance and gain confidence.",
      link: "/programs/dance",
    },
    {
      title: "Life Skills",
      image: "/images/programs/lifeskills.png",
      description:
        "Equipping children with essential skills for a brighter future.",
      link: "/programs/life-skills",
    },
    {
      title: "Mtoto na Elimu",
      image: "/images/programs/education.jpg",
      description:
        "Supporting children’s education and providing school materials.",
      link: "/programs/mtoto-na-elimu",
    },
    {
      title: "Feeding Program",
      image: "/images/programs/feeding.jpg",
      description:
        "Ensuring children have access to nutritious meals for a healthier life.",
      link: "/programs/feeding",
    },
    {
      title: "Sanitary Donation",
      image: "/images/programs/sanitary.png",
      description:
        "Providing sanitary pads and hygiene education to young girls.",
      link: "/programs/sanitary-donation",
    },
  ];

  // Split the stories into two groups for distinct layouts
  const portraitStories = stories.slice(0, 5);
  const landscapeStories = stories.slice(5);

  return (
    <main className={`bg-[${LIGHT_BACKGROUND}] text-gray-800`}>
      
      {/* 1. HERO SECTION */}
      <section 
        // FIX: Increased padding-bottom to prevent text spill on diagonal cut.
        className={`relative bg-[${PRIMARY_BLUE}] text-white py-24 pb-32 px-6 text-center overflow-hidden`}
        style={{ backgroundImage: `linear-gradient(180deg, ${PRIMARY_BLUE}, #1f2041)` }}
      >
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-wide mb-4"
          >
            Our <span className={`text-[${ACCENT_YELLOW}]`}>Programs</span>
          </motion.h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-200 leading-relaxed">
            Empowering children and transforming communities through impactful
            initiatives in dance, education, feeding, and more.
          </p>
        </div>
        {/* Aesthetic diagonal divider (Padding fix addresses the spill) */}
        <svg className="absolute bottom-0 left-0 w-full h-auto text-[#f3f4f9]" viewBox="0 0 100 10" preserveAspectRatio="none">
            <polygon fill="currentColor" points="0,10 100,10 100,0"/>
        </svg>
      </section>

      {/* 2. PROGRAM GRID */}
      <section className={`py-16 px-6 max-w-7xl mx-auto bg-[${LIGHT_BACKGROUND}]`}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-extrabold text-[${PRIMARY_BLUE}] mb-4`}>
            Our Key <span className={`text-[${ACCENT_YELLOW}]`}>Initiatives</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg">
            We are committed to creating a lasting impact through programs that
            promote education, creativity, and empowerment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((prog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all border-b-4 border-transparent hover:border-[#f2e63d]"
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className={`text-2xl font-extrabold text-[${PRIMARY_BLUE}] mb-2`}>
                  {prog.title}
                </h3>
                <p className="text-gray-600 mb-4">{prog.description}</p>
                {/* 🚀 FIX: Program Button Hover State 
                    - Default: Blue background, White text.
                    - Hover: Yellow background, PRIMARY_BLUE text.
                */}
                <Link
                  href={prog.link}
                  className={`inline-block bg-[${PRIMARY_BLUE}] text-white px-6 py-2 rounded-full 
                    hover:bg-[${ACCENT_YELLOW}] hover:text-[${PRIMARY_BLUE}] transition font-semibold text-base shadow-md`}
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SUCCESS STORIES - OPTIMIZED GRID */}
      <section className={`bg-[${PRIMARY_BLUE}] text-white py-16 px-6`}>
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className={`text-4xl font-extrabold mb-4 text-[${ACCENT_YELLOW}]`}>
            Success Stories
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto text-xl">
            Real stories of transformation from children and youth whose lives
            have been touched by our programs.
          </p>
        </div>

        {/* --- First Five Stories (Portrait/Square Layout with Adjusted Focus) --- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {portraitStories.map((story, i) => (
            <StoryCard 
              key={`portrait-${i}`} 
              story={story} 
              i={i} 
              aspectRatio="aspect-square" 
              // Custom focus to show the subject lower in the image area
              objectPosition="object-[50%_30%]" 
            />
          ))}
        </div>
        
        {/* --- Last Two Stories (Landscape Layout) --- */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {landscapeStories.map((story, i) => (
            <StoryCard 
              key={`landscape-${i}`} 
              story={story} 
              i={i} 
              aspectRatio="aspect-video" 
              // Standard center focus for landscape images
              objectPosition="object-center" 
            /> 
          ))}
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className={`py-20 text-center bg-[${LIGHT_BACKGROUND}]`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`text-4xl font-extrabold text-[${PRIMARY_BLUE}] mb-4`}>
            Make a <span className={`text-[${ACCENT_YELLOW}]`}>Difference</span> Today!
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-xl">
            Join us in transforming lives — volunteer, donate, or spread the word.
          </p>
          <div className="flex justify-center gap-6">
            {/* 🚀 FIX: CTA Button Hover State 1 (Become a Volunteer) 
                - Default: Blue background, White text.
                - Hover: Slightly darker Blue background, White text. (Kept your original style but simplified color)
            */}
            <Link
              href="/get-involved/volunteer"
              className={`bg-[${PRIMARY_BLUE}] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1f2041] transition shadow-lg`}
            >
              Become a Volunteer
            </Link>
            {/* 🚀 FIX: CTA Button Hover State 2 (Donate Now) 
                - Default: Yellow background, PRIMARY_BLUE text.
                - Hover: Yellow background, PRIMARY_BLUE text + transform scale. (Kept your original style)
            */}
            <Link
              href="/get-involved/donation"
              className={`bg-[${ACCENT_YELLOW}] text-[${PRIMARY_BLUE}] px-8 py-3 rounded-full font-bold hover:shadow-xl transition transform hover:scale-[1.05]`}
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
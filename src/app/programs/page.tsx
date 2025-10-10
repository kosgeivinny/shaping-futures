"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

  const stories = [
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
      title: "Shaping Futures: A Dance Crew Making Waves",
      image: "/images/shapingkibra.jpeg",
      text: `🏆 Awarded Best Dance Crew of the Year at the 8Town Kibra Awards, Shaping Futures continues to inspire through passion, discipline, and creativity.`,
    },
    {
      title: "Meet Kevin Odhiambo: The Visionary Behind Shaping Futures",
      image: "/images/founder.jpeg",
      text: `Nominated for Founder of the Year Award (FOYA) 2023, Kevin’s dedication continues to empower the youth through mentorship and opportunity.`,
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

  return (
    <main className="bg-[#f3f4f9] text-gray-800">
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-[#2d2f55] via-[#2d2f55] to-[#1f2041] text-white py-24 px-6 text-center overflow-hidden">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4"
          >
            Our <span className="text-[#f2e63d]">Programs</span>
          </motion.h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed">
            Empowering children and transforming communities through impactful
            initiatives in dance, education, feeding, and more.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#f3f4f9] to-transparent"></div>
      </section>

      {/* PROGRAM GRID */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2d2f55] mb-4">
            Our Key <span className="text-[#f2e63d]">Initiatives</span>
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
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-transparent hover:border-[#f2e63d]/30"
            >
              <div className="relative w-full h-56">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#2d2f55] mb-2">
                  {prog.title}
                </h3>
                <p className="text-gray-600 mb-4">{prog.description}</p>
                <a
                  href={prog.link}
                  className="inline-block bg-[#2d2f55] text-white px-4 py-2 rounded-lg hover:bg-[#f2e63d] hover:text-[#2d2f55] transition font-semibold"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="bg-gradient-to-b from-[#2d2f55] to-[#24264a] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Success <span className="text-[#f2e63d]">Stories</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Real stories of transformation from children and youth whose lives
            have been touched by our programs.
          </p>
        </div>

        <div className="space-y-16">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                i % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              <div className="relative w-full md:w-1/2 h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-[#f2e63d] mb-3">
                  {story.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{story.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 text-center bg-[#f3f4f9]">
        <h2 className="text-3xl font-bold text-[#2d2f55] mb-4">
          Make a <span className="text-[#f2e63d]">Difference</span> Today!
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Join us in transforming lives — volunteer, donate, or spread the word.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/get-involved/volunteer"
            className="bg-[#2d2f55] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#f2e63d] hover:text-[#2d2f55] transition"
          >
            Volunteer
          </a>
          <a
            href="/get-involved/donation"
            className="bg-[#f2e63d] text-[#2d2f55] px-6 py-3 rounded-lg font-semibold hover:bg-[#2d2f55] hover:text-[#f2e63d] transition"
          >
            Donate Now
          </a>
        </div>
      </section>
    </main>
  );
}

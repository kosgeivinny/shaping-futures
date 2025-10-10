"use client";

import Link from "next/link";
import Image from "next/image";

const programs = [
  {
    title: "Dance Training",
    slug: "dance-training",
    image: "/images/programs/dance.jpg",
    description:
      "Empowering youth through professional dance training and competitions.",
  },
  {
    title: "Clothes Donation",
    slug: "clothes-donation",
    image: "/images/programs/clothes.jpg",
    description:
      "Supporting families and children with clothing donations from the community.",
  },
  {
    title: "Feeding Program",
    slug: "feeding-program",
    image: "/images/programs/feeding.jpg",
    description:
      "Providing meals to vulnerable children and youth to promote well-being.",
  },
  {
    title: "Mtoto na Elimu",
    slug: "mtoto-na-elimu",
    image: "/images/programs/education.jpg",
    description:
      "Sponsoring children’s education to ensure access to quality learning.",
  },
  {
    title: "Life Skills",
    slug: "life-skills",
    image: "/images/programs/lifeskills.png",
    description:
      "Inviting coaches and volunteers to mentor youth with practical life skills.",
  },
  {
    title: "Sanitary Towel Donations",
    slug: "sanitary-donation",
    image: "/images/programs/sanitary.png",
    description:
      "Providing sanitary towels to girls in the community to promote dignity.",
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-[#fffde7]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d2f55] mb-12">
          Our Programs
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-[#f2e63d] hover:shadow-xl hover:scale-[1.02] transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2d2f55] mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-700 mb-4">{program.description}</p>
                <Link
                  href={`/programs/${program.slug}`}
                  className="inline-block px-4 py-2 rounded-lg bg-[#2d2f55] text-white font-medium hover:bg-[#f2e63d] hover:text-[#2d2f55] transition"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

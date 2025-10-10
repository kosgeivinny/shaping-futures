"use client";

import Image from "next/image";
import Link from "next/link";

const events = [
  {
    title: "Youth Dance Festival",
    date: "Sept 20, 2025",
    location: "Nairobi",
    description: "Join us for an energetic performance showcasing our youth’s talent.",
    image: "/images/events/event1.jpg",
  },
  {
    title: "Community Outreach",
    date: "Oct 10, 2025",
    location: "Eldoret",
    description: "A day of giving back: clothes donation, mentorship, and performances.",
    image: "/images/events/event2.jpg",
  },
  {
    title: "National Dance Competition",
    date: "Nov 5, 2025",
    location: "Kisumu",
    description: "Our team competes on the national stage to inspire young dancers.",
    image: "/images/events/event3.jpg",
  },
];

export default function Events() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d2f55]">
            Upcoming Events
          </h2>
          <div className="w-20 h-1 bg-[#f2e63d] mx-auto mt-3 rounded-full" />
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              {event.image && (
                <div className="relative w-full h-80 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover rounded-t-xl transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2d2f55] mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  {event.date} • {event.location}
                </p>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Link
                  href="/events"
                  className="text-[#2d2f55] font-semibold hover:text-[#f2e63d] transition"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/events"
            className="inline-block px-6 py-3 rounded-xl bg-[#2d2f55] text-white font-semibold hover:bg-[#414385] transition"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}

// src/app/get-involved/volunteer/page.tsx
"use client";

import { motion } from 'framer-motion';
// --- RESOLVED: Removed Clock and CheckCircle. Mail is used below. ---
import { Mail, GraduationCap, Users, Heart, Award } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// --- Theme Variables ---
const PRIMARY_BLUE = "#2d2f55";
const ACCENT_YELLOW = "#f2e63d";

// Data for Key Volunteer Roles (Expanded to match form fields)
const volunteerRoles = [
  { 
    icon: GraduationCap, 
    title: 'Academic Tutor', 
    description: 'Help students with core subjects (Math, English, Science) to improve school performance.' 
  },
  { 
    icon: Users, 
    title: 'Mentorship Coach', 
    description: 'Provide guidance on life skills, career paths, and personal development (Matches Mentorship interest).' 
  },
  { 
    icon: Heart, 
    title: 'Outreach & Event Support', 
    description: 'Assist with feeding programs, clothes distribution, and organizing community events (Matches Events/Fundraising).' 
  },
  { 
    icon: Users, 
    title: 'Digital Skills Training', 
    description: 'Teach basic computer, digital literacy, or social media skills to staff and youth.' 
  },
];

// Data for FAQ
const faqs = [
    { 
        question: "Do I need prior experience?", 
        answer: "No! We welcome volunteers from all backgrounds. We provide a full orientation and training to ensure you are comfortable and effective in your role." 
    },
    { 
        question: "How much time do I need to commit?", 
        // Note: Using the specific 4-hour commitment from the previous draft for clarity
        answer: "We request a minimum commitment of **4 hours per week** for at least 3 months. This consistency is essential for the children's growth and trust." 
    },
    {
        question: "Will I receive a certificate?",
        answer: "Yes! All dedicated volunteers who complete their agreed-upon commitment period will receive an official Volunteer Certificate from Shaping Futures."
    }
];


export default function VolunteerPage() {
  // Placeholder for form submission logic
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real Next.js app, you'd use a server action or API route here (e.g., /api/volunteer)
    alert("Thank you for your application! We will be in touch within 7 days."); 
    // You would typically reset the form here
  };

  return (
    <main className="bg-[#f8f9fb] text-gray-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#2d2f55] to-[#1f2041] text-white pt-32 pb-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4"
        >
          Be the <span style={{ color: ACCENT_YELLOW }}>Change.</span> Volunteer Today!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto text-xl text-gray-200"
        >
          Your time and unique skills can transform lives. Join us and make a lasting impact.
        </motion.p>
        <div className="mt-8">
            <Link href="#application" passHref>
                <Button 
                    style={{ backgroundColor: ACCENT_YELLOW, color: PRIMARY_BLUE }} 
                    className="hover:opacity-90 font-semibold py-3 px-8 text-lg rounded-full shadow-lg"
                >
                    Start Volunteering
                </Button>
            </Link>
        </div>
      </section>

      {/* 2. WHY VOLUNTEER (Adopted from HTML) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2d2f55]">
          Why Join Shaping Futures?
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
            
            <div className="p-6 bg-white rounded-xl shadow-lg border-b-4 border-l-2" style={{ borderColor: ACCENT_YELLOW }}>
                <Heart className="w-8 h-8 mx-auto mb-3" style={{ color: PRIMARY_BLUE }} />
                <h3 className="text-xl font-bold text-[#2d2f55] mb-2">Make a Lasting Impact</h3>
                <p className="text-gray-600">Directly transform a childs confidence and future prospects.</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-lg border-b-4 border-l-2" style={{ borderColor: ACCENT_YELLOW }}>
                <GraduationCap className="w-8 h-8 mx-auto mb-3" style={{ color: PRIMARY_BLUE }} />
                <h3 className="text-xl font-bold text-[#2d2f55] mb-2">Gain New Skills & Experience</h3>
                <p className="text-gray-600">Develop leadership, teaching, and mentorship skills in a real-world setting.</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-lg border-b-4 border-l-2" style={{ borderColor: ACCENT_YELLOW }}>
                <Users className="w-8 h-8 mx-auto mb-3" style={{ color: PRIMARY_BLUE }} />
                <h3 className="text-xl font-bold text-[#2d2f55] mb-2">Join a Passionate Community</h3>
                <p className="text-gray-600">Connect with dedicated mentors, staff, and vibrant youth in Kibera.</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-lg border-b-4 border-l-2" style={{ borderColor: ACCENT_YELLOW }}>
                <Award className="w-8 h-8 mx-auto mb-3" style={{ color: PRIMARY_BLUE }} />
                <h3 className="text-xl font-bold text-[#2d2f55] mb-2">Receive a Certificate</h3>
                <p className="text-gray-600">Receive an official Volunteer Certificate upon successful completion of your term.</p>
            </div>
        </div>
      </section>
      
      {/* 3. VOLUNTEER ROLES */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2d2f55]">
            Key Roles We Need
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteerRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}
                className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <role.icon className="w-8 h-8 mb-3" style={{ color: ACCENT_YELLOW }} />
                <h3 className="text-xl font-bold text-[#2d2f55] mb-2">{role.title}</h3>
                <p className="text-gray-600">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPLICATION FORM (Adapted from HTML form fields) */}
      <section id="application" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl border-t-8" style={{ borderColor: PRIMARY_BLUE }}>
          <h2 className="text-3xl font-bold text-center mb-4 text-[#2d2f55]">
            Sign Up to Volunteer
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8">
            Please fill out the details below. Our Welfare Team will review your application and be in touch soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input type="text" id="name" name="name" required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2e63d] focus:border-[#f2e63d]"
              />
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input type="email" id="email" name="email" required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2e63d] focus:border-[#f2e63d]"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input type="tel" id="phone" name="phone" required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2e63d] focus:border-[#f2e63d]"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                {/* Area of Interest */}
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Area of Interest *</label>
                  <select id="interest" name="interest" required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2e63d] focus:border-[#f2e63d] bg-white"
                  >
                    <option value="">-- Select --</option>
                    <option value="Mentorship">Mentorship</option>
                    <option value="Teaching">Teaching / Tutoring</option>
                    <option value="Fundraising">Fundraising</option>
                    <option value="Events">Event Planning</option>
                    <option value="Digital">Digital Skills Training</option>
                  </select>
                </div>

                {/* Availability */}
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">Availability *</label>
                  <select id="availability" name="availability" required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2e63d] focus:border-[#f2e63d] bg-white"
                  >
                    <option value="">-- Select --</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Weekends">Weekends</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to volunteer? (Optional)</label>
              <textarea id="message" name="message" rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f2e63d] focus:border-[#f2e63d]"
              ></textarea>
            </div>
            
            <Button type="submit" 
              style={{ backgroundColor: PRIMARY_BLUE, color: 'white' }} 
              className="hover:bg-[#1f2041] font-semibold py-3 px-8 text-lg rounded-lg w-full"
            >
              Become a Volunteer
            </Button>
          </form>
        </div>
      </section>

      {/* 5. TESTIMONIALS & FAQ (Combined Section) */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
            
            {/* Testimonials */}
            <div>
                <h2 className="text-3xl font-bold mb-8 text-[#2d2f55] border-b-4 pb-2" style={{ borderColor: ACCENT_YELLOW }}>
                    What Our Volunteers Say
                </h2>
                
                <div className="space-y-6">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-l-indigo-400">
                        <p className="italic text-gray-700 mb-3">
                            Volunteering here has been life-changing! I have made a genuine impact and gained so much practical experience in return.
                        </p>
                        <p className="font-semibold text-[#2d2f55]">— John, Mentor</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-l-indigo-400">
                        <p className="italic text-gray-700 mb-3">
                            I love being part of this incredible community! The sense of purpose and the connections made are priceless.
                        </p>
                        <p className="font-semibold text-[#2d2f55]">— Sarah, Event Planner</p>
                    </motion.div>
                </div>
            </div>
            
            {/* FAQ Section */}
            <div>
                <h2 className="text-3xl font-bold mb-8 text-[#2d2f55] border-b-4 pb-2" style={{ borderColor: ACCENT_YELLOW }}>
                    Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                    {faqs.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-[#2d2f55] mb-1">{item.question}</h4>
                            <p className="text-gray-600 text-sm">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 6. FINAL CTA (Contact Info) */}
      <section 
        className="py-16 text-center text-black" 
        style={{ backgroundColor: ACCENT_YELLOW }}
      >
        <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_BLUE }}>
          Still Have Questions?
        </h2>
        <p className="max-w-xl mx-auto mb-6 text-lg">
          We are here to help. Reach out directly to our Welfare Team.
        </p>
        <div className="flex justify-center gap-6 font-semibold text-lg text-gray-700">
            {/* --- FIX APPLIED HERE for Mail --- */}
            <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" style={{ color: PRIMARY_BLUE }}/> 
                <strong>Email:</strong> <a href="mailto:info@shapingfutures.or.ke" className="hover:underline">info@shapingfutures.or.ke</a>
            </p>
            <p><strong>Phone:</strong> <a href="tel:+254757050679" className="hover:underline">+254 757 050 679</a></p>
        </div>
      </section>
    </main>
  );
}
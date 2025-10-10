// src/lib/teamData.ts
import { StaticImageData } from 'next/image';

// --- IMPORTANT: Next.js Image requires imported modules for local files ---
// If your images are in the 'public' folder, you can define a simple interface 
// for the string path and use the 'unoptimized' prop on Next/Image, OR you 
// must import each image as a module. For clean code, it's often better to 
// import them if they are local, but since I can't do that, I'll use string 
// paths and assume your component handles the casting/paths correctly.

// If you are using string paths from the public folder, your components need 
// to be adapted, but for simplicity here, we'll keep the team member structure clean.

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string; // Using string path for simplicity, assume it's in public folder
}

export const teamMembers: TeamMember[] = [
  // LEADERSHIP
  { 
    id: 't1', 
    name: "Kevin Odhiambo", 
    role: "Founder & CEO", 
    bio: "Kevin provides the vision and passion that drives all of Shaping Futures' programs, focusing on empowering youth through artistic expression. His dedication is the foundation of our community impact.", 
    image: "/images/team/photo1.jpg" 
  },
  { 
    id: 't2', 
    name: "Rodger Miller", 
    role: "Chief Operating Officer (COO)", 
    bio: "Rodger oversees daily operations, ensuring all outreach and program logistics run smoothly and efficiently across the community, translating our vision into actionable steps.", 
    image: "/images/team/photo9.jpg" 
  },
  { 
    id: 't3', 
    name: "Lawrence Odhiambo", 
    role: "Secretary", 
    bio: "Lawrence handles all official documentation, records, and communication for the board and organizational compliance, ensuring transparency and governance.", 
    image: "/images/team/photo2.jpg" 
  },
  { 
    id: 't4', 
    name: "Diana Owuor", 
    role: "Treasurer", 
    bio: "Diana manages the financial health of the organization, ensuring transparent and responsible allocation of funds to maximize our impact per shilling spent.", 
    image: "/images/team/photo5.jpg" 
  },
  { 
    id: 't5', 
    name: "Sylvia Waseni", 
    role: "Head of Communication", 
    bio: "Sylvia manages all public relations, social media, and internal/external communication strategies, ensuring the world hears our story clearly and compellingly.", 
    image: "/images/team/photo8.jpg" 
  },
  // CORE TEAM
  { 
    id: 't6', 
    name: "Felix Ochieng", 
    role: "Fundraiser & Development", 
    bio: "Felix leads our fundraising campaigns and secures partnerships crucial for program expansion and sustainability, turning community support into real-world action.", 
    image: "/images/team/photo4.jpg" 
  },
  { 
    id: 't7', 
    name: "Kelvin Ouma", 
    role: "Welfare Department Lead", 
    bio: "Kelvin focuses on the physical and emotional well-being of the youth, managing the feeding and resource programs with compassion and efficiency.", 
    image: "/images/team/photo6.jpg" 
  },
  { 
    id: 't8', 
    name: "Samuel Ouma", 
    role: "Lead Choreographer", 
    bio: "Samuel is responsible for the dance program curriculum, training, and inspiring creativity in our young artists, helping them find their voice through movement.", 
    image: "/images/team/photo7.jpg" 
  },
  { 
    id: 't9', 
    name: "Esther Githinji", 
    role: "Girl-Child Champion", 
    bio: "Esther advocates for and manages programs specifically aimed at supporting young girls, including the critical sanitary donation drive, ensuring dignity and access.", 
    image: "/images/team/photo3.jpg" 
  },
  { 
    id: 't10', 
    name: "Presley Midundo", 
    role: "Marketing Director", 
    bio: "Presley drives awareness of Shaping Futures' mission and impact across various digital platforms, mobilizing community engagement and volunteerism.", 
    image: "/images/team/photo10.jpg" 
  },
];
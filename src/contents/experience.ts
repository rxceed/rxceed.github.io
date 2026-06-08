export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    role: "Laboratory Assistant",
    company: "B401 Robotics and Intelligent System Lab – ITS Computer Engineering",
    period: "Aug 2025 – Present",
    description:
      "Mentored underclassmen on digital systems, circuit design, and telematics fundamentals.",
    bullets: [
      "Mentored underclassmen on digital system and circuit design, focusing on practical real-world application.",
      "Mentored underclassmen on basics of telematics, including soldering basics, hardware prototyping, and minimum system design.",
    ],
    tags: ["Digital Circuits", "Embedded Systems", "Mentoring", "Hardware Prototyping"],
  },
  {
    role: "Practicum Assistant",
    company: "B300 Multimedia and Internet of Things Lab – ITS Computer Engineering",
    period: "Aug 2025 – Nov 2025",
    description:
      "Mentored underclassmen on computer programming fundamentals and data structures.",
    bullets: [
      "Mentored underclassmen on basics of computer programming, focusing on fundamental logic and data structure.",
    ],
    tags: ["Programming Fundamentals", "Data Structures", "Teaching", "IoT"],
  },
];

export interface OrganizationalExperience {
  role: string;
  organization: string;
  period: string;
  description: string;
  bullets: string[];
  tags: string[];
}

export const organizationalExperiences: OrganizationalExperience[] = [
  {
    role: "Expert Staff of IT Development",
    organization: "Multimedia and Game Event (MAGE) 11",
    period: "Feb 2025 – Nov 2025",
    description:
      "Developed and maintained the official website and registration system for a large-scale university technology event.",
    bullets: [
      "Collaborated in a team of 11, together developed the website as an information and registration hub for the event.",
      "Maintained communication with the secretarial division, ensuring the website and registration system runs in production properly for both committee and event participants.",
    ],
    tags: ["Web Development", "Backend", "Team Collaboration"],
  },
  {
    role: "Staff of Research and Profession",
    organization: "Himpunan Mahasiswa Teknik Komputer (HIMATEKKOM) ITS",
    period: "Apr 2025 – Dec 2025",
    description: "Managed programs to increase student engagement in competitions.",
    bullets: [
      "Managed Competition Center program to increase student engagement in competitions.",
    ],
    tags: ["Student Organization", "Program Management"],
  },
  {
    role: "Staff of External and Media Information",
    organization: "UKM Kendo ITS",
    period: "Oct 2023 – Dec 2023",
    description: "Managed social media content and documented club activities.",
    bullets: [
      "Managed social media content and communication to increase engagement.",
      "Documented club's activities and events.",
    ],
    tags: ["Social Media", "Content Creation", "Documentation"],
  },
];

export interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Engineering",
    school: "Institut Teknologi Sepuluh Nopember (ITS) – Surabaya, Indonesia",
    period: "2023 – Expected Apr 2027",
    description: "GPA: 3.79/4.00. Focused on embedded systems, IoT, backend development, and deep learning.",
  },
  {
    degree: "High School Diploma",
    school: "SMA Negeri 1 Lawang – Kabupaten Malang, Indonesia",
    period: "2020 – 2023",
    description: "Graduated from one of the top high schools in Malang regency.",
  },
];

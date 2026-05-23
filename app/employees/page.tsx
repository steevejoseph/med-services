import type { Metadata } from "next";
import EmployeeCard, { type ResumeData } from "@/components/EmployeeCard";

export const metadata: Metadata = {
  title: "Team | Global Enterprise Solutions & Services LLC",
};

const imranResume: ResumeData = {
  summary:
    "Dedicated CDL Class A Driver with over two and a half decades of experience in Hazmat and Tanker operations, ensuring compliance with DOT and FMCSA regulations. Holds certifications in HIPAA training, OSHA Bloodborne Pathogens, and a TWIC card. Demonstrates expertise in safe driving practices, secure freight handling, and vehicle maintenance.",
  experience: [
    {
      period: "09/2001 – Present",
      role: "Driver",
      company: "Mondelez International – Florida",
      bullets: [
        "Achieved safe freight delivery by operating Class A vehicles per safety standards.",
        "Conducted pre-trip/post-trip inspections ensuring vehicle safety compliance.",
        "Maintained accurate driver logs & delivery records using ELD systems effectively.",
        "Trained new drivers on company policies & operational standards efficiently.",
      ],
    },
    {
      period: "03/1996 – 03/2001",
      role: "Driver",
      company: "Clean Venture – New Jersey",
      bullets: [
        "Achieved dependable service through a clean driving record & safety compliance.",
        "Executed accurate loading & unloading to manage inventory effectively.",
        "Followed established safety protocols for all transportation operations.",
      ],
    },
  ],
  skills: [
    "CDL Class A", "Hazmat Endorsement", "Tanker Endorsement", "TWIC Card",
    "Defensive Driving", "ELD", "FMCSA Regulations", "Route Planning",
    "Freight & Medical Transport", "Load Securement", "HIPAA Compliance",
    "OSHA Bloodborne Pathogen", "Logbooks", "Local & Regional",
  ],
  licenses: [
    "Commercial Driver's License (CDL) Class A",
    "Hazmat Endorsement",
    "TWIC Card",
    "Smith System Defensive Driving",
    "OSHA 40 Hour Hazardous Waste/Emergency Response Training (29 CFR 1910.10.(e)(2))",
    "Confined Space Training Seminar (OSHA 29 CFR 1910.146)",
    "OSHA 8 Hour Hazardous Waste/Emergency Response Refresher Training (29 CFR 1910.120(e)(2))",
    "OSHA Bloodborne Pathogens",
    "HIPAA Training",
  ],
  education: [
    {
      degree: "High School Diploma",
      school: "Cornerstone Christian Correspondence School",
      location: "Townsend, Georgia",
    },
  ],
  downloadUrl: "/assets/imran-dastajir-resume.pdf",
};

const ruqaiyahResume: ResumeData = {
  summary:
    "Detail-oriented professional with customer service, administrative, and logistics experience. Holds HIPAA, OSHA Bloodborne Pathogen, TWIC Card, and Smith System Defensive Driving credentials. Demonstrated ability to balance multiple responsibilities, having completed college coursework simultaneously with high school.",
  experience: [
    {
      period: "01/2025 – Present",
      role: "Customer Service Associate",
      company: "Walmart – Winter Garden, FL",
      bullets: [
        "Assist customers with returns and financial services at the customer service desk.",
        "Support cashiers in resolving point-of-sale issues and ensuring smooth operations.",
      ],
    },
    {
      period: "05/2024 – 12/2024",
      role: "Office Assistant",
      company: "Max Realty & Consulting LLC – Winter Garden, FL",
      bullets: [
        "Organized and filed client documents, maintaining accurate records.",
      ],
    },
  ],
  skills: [
    "Customer Service", "Document Management", "Financial Services",
    "Time Management", "Team Collaboration", "HIPAA Compliance",
    "OSHA Bloodborne Pathogen", "Defensive Driving",
  ],
  licenses: [
    "HIPAA Certificate",
    "OSHA Bloodborne Pathogen",
    "TWIC Card",
    "Smith System Defensive Driving",
  ],
  education: [
    {
      degree: "Associate of Arts (A.A.)",
      school: "Valencia College",
      location: "Orlando, FL — Aug 2023 – Apr 2025",
    },
    {
      degree: "High School Diploma",
      school: "West Orange High School",
      location: "Winter Garden, FL — Aug 2021 – May 2025",
    },
  ],
  downloadUrl: "/assets/ruqaiyah-dastajir-resume.pdf",
};

const rafeezaResume: ResumeData = {
  summary:
    "Dedicated professional with over five years of experience in nutrition services within Orange County Public Schools, ensuring individuals receive meals tailored to specific health requirements. Background in household operations management and community leadership.",
  experience: [
    {
      period: "08/2020 – Present",
      role: "Nutrition Associate",
      company: "Orange County Public School – Orlando, FL",
      bullets: [
        "Ensure individuals receive accurate meals based on their specific health requirements.",
      ],
    },
    {
      period: "11/2003 – 08/2020",
      role: "Home Manager",
      company: "",
      bullets: [
        "Managed household finances and daily operations.",
        "Coached son's soccer team for three years, developing team leadership skills.",
      ],
    },
  ],
  skills: [
    "Nutrition Services", "Health Compliance", "Operations Management",
    "Team Leadership", "Community Engagement",
  ],
  licenses: [],
  education: [
    {
      degree: "High School (attended)",
      school: "Queens New York High School",
      location: "New York, NY — Sep 1995 – Dec 1998",
    },
  ],
  downloadUrl: "/assets/rafeeza-dastajir-resume.pdf",
};

const employees = [
  {
    name: "Imran Dastajir",
    title: "Medical Courier / Logistics Specialist",
    photo: "/assets/photos/imran.png",
    resume: imranResume,
    certs: [
      { name: "HIPAA Training", file: "/pdfs/id_hippa_imran.pdf" },
      {
        name: "Bloodborne Pathogen",
        file: "/pdfs/id_bloodborne_pathogen_imran.pdf",
      },
    ],
  },
  {
    name: "Ruqaiyah Dastajir",
    title: "Medical Courier / Logistics Specialist",
    photo: "/assets/photos/ruqaiyah.png",
    resume: ruqaiyahResume,
    certs: [
      { name: "HIPAA Training", file: "/pdfs/rd_hippa_ruqaiyah.pdf" },
      {
        name: "Bloodborne Pathogen",
        file: "/pdfs/rd_bloodborne_pathogen_ruqaiyah.pdf",
      },
    ],
  },
  {
    name: "Abed Syed",
    title: "Logistics Specialist",
    photo: "/assets/photos/abed.png",
    resume: null,
    certs: [],
  },
  {
    name: "Rafeeza Dastajir",
    title: "Logistics Specialist",
    photo: "/assets/photos/rafeeza.png",
    resume: rafeezaResume,
    certs: [],
  },
];

export default function EmployeesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Our Team</h1>
      <p className="text-slate-500 mb-10">
        Meet the qualified professionals behind Global Enterprise Solutions &amp; Services LLC.
      </p>

      <div className="space-y-6">
        {employees.map((emp) => (
          <EmployeeCard key={emp.name} {...emp} />
        ))}
      </div>
    </div>
  );
}

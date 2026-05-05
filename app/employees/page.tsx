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
  education: {
    degree: "High School Diploma",
    school: "Cornerstone Christian Correspondence School",
    location: "Townsend, Georgia",
  },
  downloadUrl: "/assets/imran-dastajir-resume.pdf",
};

const employees = [
  {
    name: "Imran Dastajir",
    title: "Medical Courier / Logistics Specialist",
    photo: "/assets/photos/imran.png",
    resume: imranResume,
    certs: [
      { name: "HIPAA Training", file: "/pdfs/id_hippa_imran.pdf" },
      { name: "Bloodborne Pathogen", file: "/pdfs/id_bloodborne_pathogen_imran.pdf" },
    ],
  },
  {
    name: "Ruqaiyah Dastajir",
    title: "Logistics Specialist",
    photo: "/assets/photos/ruqaiyah.png",
    resume: null,
    certs: [
      { name: "HIPAA Training", file: "/pdfs/rd_hippa_ruqaiyah.pdf" },
      { name: "Bloodborne Pathogen", file: "/pdfs/rd_bloodborne_pathogen_ruqaiyah.pdf" },
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
    photo: undefined,
    resume: null,
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

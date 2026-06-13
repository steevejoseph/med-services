import type { Metadata } from "next";
import EmployeeCard from "@/components/EmployeeCard";

export const metadata: Metadata = {
  title: "Team | Global Enterprise Solutions & Services LLC",
};

const employees = [
  {
    name: "Imran Dastajir",
    title: "Managing Director",
    photo: "/assets/photos/imran.png",
    introduction:
      "Imran founded Global Enterprise Solutions & Services LLC on more than 25 years of hands-on logistics experience. He holds a CDL Class A license with Hazmat and Tanker endorsements and a TWIC card, and built his career across long-haul Hazmat transport at Clean Venture (NJ) and over two decades of safe freight operations with Mondelez International throughout Florida. His HIPAA certification and OSHA Bloodborne Pathogen training position him to lead a courier operation where compliance and patient-safety accountability are non-negotiable.",
    downloadUrl: "/assets/imran-dastajir-resume.pdf",
    certs: [
      { name: "HIPAA Training", file: "/pdfs/id_hippa_imran.pdf" },
      { name: "Bloodborne Pathogen", file: "/pdfs/id_bloodborne_pathogen_imran.pdf" },
    ],
  },
  {
    name: "Abed Syed",
    title: "District Sales Manager",
    photo: "/assets/photos/abed.png",
    introduction:
      "Abed leads business development and client partnerships for Global Enterprise Solutions & Services LLC across Central Florida. He brings a results-driven approach to building relationships with hospital procurement teams and healthcare facilities, ensuring they understand the compliance standards and service reliability that set GESS apart.",
    downloadUrl: undefined,
    certs: [],
  },
  {
    name: "Ismaiel Dastajir",
    title: "Logistics Manager",
    photo: undefined,
    introduction:
      "Ismaiel oversees route coordination and delivery logistics, keeping GESS operations running on schedule across the region. His focus on process reliability and real-time problem-solving ensures that time-sensitive medical and pharmaceutical shipments reach their destinations without delay.",
    downloadUrl: undefined,
    certs: [],
  },
  {
    name: "Ruqaiyah R.",
    title: "Operations Manager",
    photo: "/assets/photos/ruqaiyah.png",
    introduction:
      "Ruqaiyah manages the day-to-day operations of GESS, bringing administrative precision and a compliance-first mindset to every delivery cycle. She holds HIPAA, OSHA Bloodborne Pathogen, TWIC Card, and Smith System Defensive Driving credentials. Currently completing her Associate of Arts at Valencia College while simultaneously earning her diploma from West Orange High School, Ruqaiyah demonstrates the discipline and multi-tasking ability that keep a fast-moving courier operation on track.",
    downloadUrl: "/assets/ruqaiyah-dastajir-resume.pdf",
    certs: [
      { name: "HIPAA Training", file: "/pdfs/rd_hippa_ruqaiyah.pdf" },
      { name: "Bloodborne Pathogen", file: "/pdfs/rd_bloodborne_pathogen_ruqaiyah.pdf" },
    ],
  },
  {
    name: "Rafeeza D.",
    title: "HR Manager",
    photo: "/assets/photos/rafeeza2.png",
    introduction:
      "Rafeeza brings over five years of health-compliance and service-delivery experience as a Nutrition Associate with Orange County Public Schools, where she ensures every individual receives meals matched to specific dietary and medical requirements. Her background in household operations management and community leadership — including three years coaching youth soccer — reflects a people-first approach she carries into HR, where she supports the hiring, credentialing, and wellbeing of the GESS team.",
    downloadUrl: "/assets/rafeeza-dastajir-resume.pdf",
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

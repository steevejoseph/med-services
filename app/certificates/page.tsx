import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications | Global Enterprise Solutions & Services LLC",
};

const certs = [
  { name: "HIPAA Training (ID)", file: "/pdfs/id_hippa.pdf" },
  { name: "Bloodborne Pathogen (ID)", file: "/pdfs/id_bloodborne_pathogen.pdf" },
  { name: "HIPAA Training (RD)", file: "/pdfs/rd_hippa.pdf" },
  { name: "Bloodborne Pathogen (RD)", file: "/pdfs/rd_bloodborne_pathogen.pdf" },
];

export default function CertificatesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Certifications</h1>
      <p className="text-slate-500 mb-8">
        Our credentials demonstrate our commitment to safe, compliant, and
        professional medical device delivery.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certs.map((cert) => (
          <a
            key={cert.file}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
          >
            <div className="relative w-full h-64 overflow-hidden bg-slate-50">
              <iframe
                src={cert.file}
                className="absolute top-0 left-0 w-[200%] h-[200%] pointer-events-none"
                style={{ transform: "scale(0.5)", transformOrigin: "0 0" }}
                title={cert.name}
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors" />
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="font-medium text-slate-800 text-sm">{cert.name}</span>
              <span className="text-xs text-blue-600 group-hover:underline">View PDF</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

import PlaceholderBanner from "@/components/PlaceholderBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications | Global Enterprise Solutions & Services LLC",
};

const placeholderCerts = [
  { name: "DOT Compliance Certificate", issuer: "Issuing Body", expires: "MM/YYYY" },
  { name: "Medical Courier Certification", issuer: "Issuing Body", expires: "MM/YYYY" },
  { name: "HIPAA Training Completion", issuer: "Issuing Body", expires: "MM/YYYY" },
  { name: "Driver Qualification Certificate", issuer: "Issuing Body", expires: "MM/YYYY" },
];

export default function CertificatesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Certifications</h1>
      <p className="text-slate-500 mb-8">
        Our credentials demonstrate our commitment to safe, compliant, and
        professional medical device delivery.
      </p>

      <PlaceholderBanner section="Certification" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {placeholderCerts.map((cert) => (
          <div
            key={cert.name}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl mt-1">📋</div>
              <div>
                <h3 className="font-semibold text-slate-800">{cert.name}</h3>
                <p className="text-slate-500 text-sm mt-1">
                  Issued by: <span className="text-slate-400 italic">{cert.issuer}</span>
                </p>
                <p className="text-slate-500 text-sm">
                  Expires: <span className="text-slate-400 italic">{cert.expires}</span>
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 bg-slate-100 text-slate-500 text-xs px-3 py-1 rounded-full italic">
                  Document to be uploaded
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

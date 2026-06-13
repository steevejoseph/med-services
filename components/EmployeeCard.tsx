"use client";

import { useState } from "react";

type Cert = { name: string; file: string };

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none"
      className={`transition-transform duration-200 text-slate-400 ${open ? "rotate-180" : ""}`}
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CertsContent({ certs }: { certs: Cert[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
      {certs.map((cert) => (
        <a
          key={cert.file}
          href={cert.file}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group bg-white"
        >
          <div className="relative w-full h-48 overflow-hidden bg-slate-50">
            <iframe
              src={cert.file}
              className="absolute top-0 left-0 w-[200%] h-[200%] pointer-events-none"
              style={{ transform: "scale(0.5)", transformOrigin: "0 0" }}
              title={cert.name}
            />
            <div className="absolute inset-0 group-hover:bg-black/5 transition-colors" />
          </div>
          <div className="px-3 py-2 flex items-center justify-between">
            <span className="font-medium text-slate-700 text-sm">{cert.name}</span>
            <span className="text-xs text-brand group-hover:underline">View PDF</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default function EmployeeCard({ name, title, introduction, downloadUrl, certs, photo }: {
  name: string;
  title: string;
  introduction?: string;
  downloadUrl?: string;
  certs: Cert[];
  photo?: string;
}) {
  const [certsOpen, setCertsOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      <div className="p-6 flex items-start gap-4">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-2 border-brand-border shrink-0"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-purple-50 border-2 border-brand-border flex items-center justify-center text-2xl shrink-0 text-slate-400">
            👤
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-800">{name}</h2>
              <p className="text-brand text-sm font-medium mb-3">{title}</p>
            </div>
            {downloadUrl && (
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs text-brand border border-brand-border rounded-lg px-3 py-1.5 hover:bg-purple-50 transition-colors"
              >
                Resume PDF
              </a>
            )}
          </div>
          {introduction ? (
            <p className="text-slate-600 text-sm leading-relaxed">{introduction}</p>
          ) : (
            <p className="text-slate-400 text-sm italic">Bio coming soon.</p>
          )}
        </div>
      </div>

      {certs.length > 0 && (
        <div className="border-t border-slate-100">
          <button
            onClick={() => setCertsOpen((v) => !v)}
            className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors text-left"
          >
            <span className="font-medium text-slate-700">Certificates</span>
            <Chevron open={certsOpen} />
          </button>
          {certsOpen && (
            <div className="px-6 pb-6">
              <CertsContent certs={certs} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

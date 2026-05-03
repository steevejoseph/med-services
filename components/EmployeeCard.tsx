"use client";

import { useState } from "react";

type Cert = { name: string; file: string };

type Experience = {
  period: string;
  role: string;
  company: string;
  bullets: string[];
};

export type ResumeData = {
  summary: string;
  experience: Experience[];
  skills: string[];
  licenses: string[];
  education: { degree: string; school: string; location: string };
  downloadUrl?: string;
};

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

function ResumeContent({ resume }: { resume: ResumeData }) {
  return (
    <div className="space-y-6 pt-4">
      {resume.downloadUrl && (
        <a
          href={resume.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-brand-hover transition-colors"
        >
          Download Resume PDF
        </a>
      )}

      <div>
        <h4 className="text-xs font-semibold text-brand uppercase tracking-wider mb-2">Professional Summary</h4>
        <p className="text-slate-600 text-sm leading-relaxed">{resume.summary}</p>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-brand uppercase tracking-wider mb-3">Experience</h4>
        <div className="space-y-5">
          {resume.experience.map((exp) => (
            <div key={exp.company}>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{exp.role}</p>
                  <p className="text-slate-500 text-sm">{exp.company}</p>
                </div>
                <span className="text-xs text-slate-400 shrink-0 mt-0.5">{exp.period}</span>
              </div>
              <ul className="mt-2 space-y-1">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="text-slate-500 text-sm flex gap-2">
                    <span className="text-brand shrink-0 mt-0.5">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-brand uppercase tracking-wider mb-2">Core Skills</h4>
        <div className="flex flex-wrap gap-2">
          {resume.skills.map((skill) => (
            <span key={skill} className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-brand uppercase tracking-wider mb-2">Licenses & Certifications</h4>
        <ul className="space-y-1">
          {resume.licenses.map((lic) => (
            <li key={lic} className="text-slate-600 text-sm flex gap-2">
              <span className="text-gold shrink-0">✓</span>
              <span>{lic}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-brand uppercase tracking-wider mb-2">Education</h4>
        <p className="text-slate-800 text-sm font-medium">{resume.education.degree}</p>
        <p className="text-slate-500 text-sm">{resume.education.school}</p>
        <p className="text-slate-400 text-sm">{resume.education.location}</p>
      </div>
    </div>
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

type Section = "resume" | "certs";

export default function EmployeeCard({ name, title, resume, certs, photo }: {
  name: string;
  title: string;
  resume: ResumeData | null;
  certs: Cert[];
  photo?: string;
}) {
  const [open, setOpen] = useState<Section | null>(null);
  const toggle = (s: Section) => setOpen(prev => prev === s ? null : s);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      <div className="p-6 flex items-center gap-4">
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
        <div>
          <h2 className="text-xl font-semibold text-slate-800">{name}</h2>
          <p className="text-brand text-sm font-medium">{title}</p>
        </div>
      </div>

      <div className="border-t border-slate-100 divide-y divide-slate-100">
        <div>
          <button
            onClick={() => toggle("resume")}
            className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors text-left"
          >
            <span className="font-medium text-slate-700">Resume</span>
            <Chevron open={open === "resume"} />
          </button>
          {open === "resume" && (
            <div className="px-6 pb-6">
              {resume
                ? <ResumeContent resume={resume} />
                : <p className="pt-4 text-slate-400 text-sm italic">Resume content coming soon.</p>
              }
            </div>
          )}
        </div>

        {certs.length > 0 && (
          <div>
            <button
              onClick={() => toggle("certs")}
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors text-left"
            >
              <span className="font-medium text-slate-700">Certificates</span>
              <Chevron open={open === "certs"} />
            </button>
            {open === "certs" && (
              <div className="px-6 pb-6">
                <CertsContent certs={certs} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

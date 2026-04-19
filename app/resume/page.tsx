import PlaceholderBanner from "@/components/PlaceholderBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Global Enterprise Solutions & Services LLC",
};

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Resume</h1>
      <p className="text-slate-500 mb-8">
        Background and professional experience of our leadership team.
      </p>

      <PlaceholderBanner section="Resume" />

      <div className="space-y-8">
        {/* Summary */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-700 mb-3">Professional Summary</h2>
          <div className="h-4 bg-slate-100 rounded w-full mb-2" />
          <div className="h-4 bg-slate-100 rounded w-5/6 mb-2" />
          <div className="h-4 bg-slate-100 rounded w-4/6" />
        </section>

        {/* Experience */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">Experience</h2>
          {[1, 2].map((i) => (
            <div key={i} className={`${i > 1 ? "mt-6 pt-6 border-t border-slate-100" : ""}`}>
              <div className="flex justify-between items-start">
                <div className="h-4 bg-slate-100 rounded w-48 mb-1" />
                <div className="h-4 bg-slate-100 rounded w-24" />
              </div>
              <div className="h-3 bg-slate-100 rounded w-36 mb-3" />
              <div className="h-3 bg-slate-100 rounded w-full mb-1" />
              <div className="h-3 bg-slate-100 rounded w-5/6" />
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">Education</h2>
          <div className="h-4 bg-slate-100 rounded w-56 mb-1" />
          <div className="h-3 bg-slate-100 rounded w-40 mb-1" />
          <div className="h-3 bg-slate-100 rounded w-24" />
        </section>

        {/* Skills */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">Skills &amp; Qualifications</h2>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-7 bg-slate-100 rounded-full w-24" />
            ))}
          </div>
        </section>
      </div>

      <p className="text-center text-slate-400 text-sm mt-10 italic">
        Full resume details will be added here.
      </p>
    </div>
  );
}

import PlaceholderBanner from "@/components/PlaceholderBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employees | Global Enterprise Solutions & Services LLC",
};

const employees = [
  {
    name: "Imran",
    title: "Title / Role",
    bio: "Background and professional information coming soon.",
  },
  {
    name: "Binti Imran",
    title: "Title / Role",
    bio: "Background and professional information coming soon.",
  },
];

export default function EmployeesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Our Team</h1>
      <p className="text-slate-500 mb-8">
        Meet the qualified professionals behind Global Enterprise Solutions
        &amp; Services LLC.
      </p>

      <PlaceholderBanner section="Employee profile" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {employees.map((emp) => (
          <div
            key={emp.name}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center"
          >
            {/* Avatar placeholder */}
            <div className="mx-auto mb-5 w-24 h-24 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-3xl text-slate-400">
              👤
            </div>
            <h2 className="text-xl font-semibold text-slate-800">{emp.name}</h2>
            <p className="text-blue-600 text-sm font-medium mt-1 mb-3 italic">
              {emp.title}
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">{emp.bio}</p>
            <div className="mt-4 inline-flex items-center gap-1.5 bg-slate-100 text-slate-400 text-xs px-3 py-1 rounded-full italic">
              Full profile coming soon
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

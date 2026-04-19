"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/certificates", label: "Certificates" },
  { href: "/resume", label: "Resume" },
  { href: "/employees", label: "Employees" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="bg-slate-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="text-center sm:text-left">
          <span className="text-lg font-semibold tracking-tight leading-tight">
            Global Enterprise Solutions &amp; Services LLC
          </span>
        </Link>
        <nav className="flex gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === href
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

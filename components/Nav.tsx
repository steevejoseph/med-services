"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import GlobeLogo from "./GlobeLogo";

const links = [
  { href: "/", label: "Home" },
  { href: "/employees", label: "Our Team" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="bg-brand-dark text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 text-center sm:text-left">
          <GlobeLogo size={40} />
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
                  ? "bg-gold text-white"
                  : "text-purple-200 hover:bg-brand hover:text-white"
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

import Link from "next/link";

const columns = [
  {
    heading: "Services",
    links: [
      { label: "Same Day Delivery", href: "/services/same-day-delivery" },
      { label: "Express Delivery", href: "/services/express-delivery" },
      { label: "Medical Courier", href: "/services/medical-courier" },
      { label: "Legal Courier", href: "/services/legal-courier" },
      { label: "Same Day Freight", href: "/services/same-day-freight" },
      { label: "White Glove Services", href: "/services/white-glove-services" },
      { label: "TSA Hazmat Transport", href: "/services/tsa-hazmat" },
      { label: "Package Delivery", href: "/services/package-delivery" },
      { label: "Scheduled Routes", href: "/services/scheduled-routes" },
      { label: "View All Services →", href: "/services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/employees" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-purple-300 text-sm mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Brand column */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/globe-trans-bg.png"
            alt="Global Enterprises"
            className="h-12 w-12 rounded-full object-cover mb-4"
          />
          <p className="text-purple-200 font-semibold mb-2">
            Global Enterprises Solutions &amp; Services LLC
          </p>
          <p className="text-purple-400 leading-relaxed text-xs">
            Central Florida–based courier and logistics company serving
            hospitals, law firms, businesses, and industries with on-demand
            delivery, hazmat transport, and express solutions.
          </p>
          <div className="mt-4 space-y-1 text-xs text-purple-400">
            <p>
              <a
                href="tel:3216896776"
                className="hover:text-white transition-colors"
              >
                📱 (321) 689-6776
              </a>
            </p>
            <p>
              <a
                href="mailto:iglobalproworks@gmail.com"
                className="hover:text-white transition-colors"
              >
                ✉️ iglobalproworks@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Sitemap columns */}
        {columns.map((col) => (
          <div key={col.heading}>
            <h3 className="text-white font-semibold uppercase tracking-wider text-xs mb-4">
              {col.heading}
            </h3>
            <ul className="space-y-2">
              {col.links.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-purple-900 px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-purple-500">
          <p>
            &copy; {new Date().getFullYear()} Global Enterprises Solutions &amp;
            Services LLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

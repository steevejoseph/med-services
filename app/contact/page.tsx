import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Global Enterprise Solutions & Services LLC",
};

const contactFields = [
  {
    icon: "👤",
    label: "Contact Name",
    value: "Imran Dastajir",
    href: null,
  },
  {
    icon: "✉️",
    label: "Email",
    value: "iglobalproworks@gmail.com",
    href: "mailto:iglobalproworks@gmail.com",
  },
  {
    icon: "📬",
    label: "Mailing Address",
    value:
      "15502 STONEYBROOK WEST PKWY \
            SUITE, 104\
            WINTER GARDEN, FL 34787",
    href: null,
  },
  {
    icon: "🌐",
    label: "Website",
    value: "www.example.com",
    href: "https://www.example.com",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "321-689-6776",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Contact Us</h1>
      <p className="text-slate-500 mb-10">
        Reach out to learn more about our medical courier services or to discuss
        a delivery partnership.
      </p>

      <div className="space-y-4">
        {contactFields.map(({ icon, label, value, href }) => (
          <div
            key={label}
            className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm"
          >
            <span className="text-2xl mt-0.5">{icon}</span>
            <div>
              <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-1">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="text-slate-700 hover:text-brand transition-colors whitespace-pre-line"
                >
                  {value}
                </a>
              ) : (
                <p className="text-slate-700 whitespace-pre-line">{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-brand-dark rounded-2xl p-8 text-center text-white">
        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
          Ready to partner with us?
        </p>
        <p className="text-purple-200 text-sm leading-relaxed">
          We work with hospitals and healthcare providers across the region. Get
          in touch to discuss your logistics needs.
        </p>
      </div>
    </div>
  );
}

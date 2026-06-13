import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Global Enterprise Solutions & Services LLC",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-dark text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-purple-200 text-lg leading-relaxed max-w-xl mx-auto">
            We are proudly serving hospitals and healthcare organizations
            throughout Central Florida. Contact us via the form below or reach
            us directly.
          </p>

          {/* Quick-dial links */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm font-medium">
            <a
              href="tel:3216896776"
              className="flex items-center gap-2 text-gold hover:text-white transition-colors"
            >
              📱 (321) 689-6776
            </a>
            <a
              href="mailto:iglobalproworks@gmail.com"
              className="flex items-center gap-2 text-gold hover:text-white transition-colors"
            >
              ✉️ iglobalproworks@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-slate-800 mb-6">Get in Touch</h2>

            {[
              { icon: "👤", label: "Contact", value: "Imran Dastajir", href: null },
              { icon: "📱", label: "Phone", value: "(321) 689-6776", href: "tel:3216896776" },
              { icon: "✉️", label: "Email", value: "iglobalproworks@gmail.com", href: "mailto:iglobalproworks@gmail.com" },
              {
                icon: "📬",
                label: "Mailing Address",
                value: "15502 Stoneybrook West Pkwy\nSuite 104\nWinter Garden, FL 34787",
                href: null,
              },
              { icon: "🌐", label: "Website", value: "www.globalenterprises.io", href: "https://www.globalenterprises.io/" },
            ].map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="bg-white border border-slate-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm"
              >
                <span className="text-xl mt-0.5">{icon}</span>
                <div>
                  <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-1">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="text-slate-700 hover:text-brand transition-colors text-sm whitespace-pre-line">
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-700 text-sm whitespace-pre-line">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-6">Send a Message</h2>
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand py-12 px-6 text-center text-white">
        <p className="text-lg font-semibold mb-2">Ready to schedule a delivery?</p>
        <p className="text-purple-200 text-sm">
          Call us directly at{" "}
          <a href="tel:3216896776" className="text-gold hover:underline font-medium">
            (321) 689-6776
          </a>{" "}
          — available on-demand for your delivery needs.
        </p>
      </section>
    </div>
  );
}

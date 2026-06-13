import Link from "next/link";
import { services } from "@/lib/services-data";

const featuredServices = services.slice(0, 4);

const nav = [
  {
    href: "/about",
    icon: "ℹ️",
    title: "About Us",
    description:
      "Our mission, values, and what makes Global Enterprise Solutions & Services LLC a trusted healthcare logistics partner.",
  },
  {
    href: "/services",
    icon: "🚐",
    title: "Our Services",
    description:
      "Same day delivery, medical courier, legal courier, freight, and more — on-demand across Central Florida.",
  },
  {
    href: "/employees",
    icon: "👥",
    title: "Our Team",
    description:
      "Credentialed professionals with verified résumés, HIPAA training, and certifications available to review.",
  },
  {
    href: "/contact",
    icon: "✉️",
    title: "Contact Us",
    description:
      "Schedule a delivery or discuss a partnership. Reach us by phone, email, or through our contact form.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative text-white py-28 px-6 text-center"
        style={{
          backgroundImage: "url('/assets/truck-and-globe.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-brand-dark/75" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Medical Courier &amp; Logistics Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Reliable. Credentialed. Ready.
          </h1>
          <p className="text-purple-200 text-lg leading-relaxed mb-10">
            Global Enterprise Solutions &amp; Services LLC provides professional
            same day delivery of medical devices, specimens, pharmaceuticals,
            and more — serving hospitals and health providers across Central
            Florida with full transparency on credentials and compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="bg-gold hover:bg-gold-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View Our Services
            </Link>
            <Link
              href="/contact"
              className="border border-purple-400 hover:border-white text-purple-200 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Schedule a Delivery
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-brand text-white py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { stat: "HIPAA & BBP Aware", label: "Compliance-focused operations" },
            { stat: "On-Demand", label: "Flexible scheduling for facilities" },
            { stat: "Vetted Staff", label: "Background-checked personnel" },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <div className="text-2xl font-bold">{stat}</div>
              <div className="text-purple-200 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest text-center mb-2">
            What We Offer
          </p>
          <h2 className="text-2xl font-bold text-center text-slate-800 mb-12">
            Same Day Delivery &amp; Rush Courier Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featuredServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group flex gap-5 bg-slate-50 hover:bg-white border border-slate-200 hover:border-brand-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <span className="text-3xl shrink-0 mt-0.5">{svc.icon}</span>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1 group-hover:text-brand transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {svc.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block bg-brand hover:bg-brand-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Site navigation cards */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-slate-800 mb-3">
            Everything you need to evaluate us
          </h2>
          <p className="text-slate-500 text-sm text-center mb-12 max-w-xl mx-auto">
            When evaluating a delivery partner, you need more than a pitch. This
            site puts every credential, certificate, and contact detail one click
            away.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nav.map(({ href, icon, title, description }) => (
              <Link
                key={href}
                href={href}
                className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-brand-border transition-all"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-brand transition-colors">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-dark py-16 px-6 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">Schedule a Delivery Today</h2>
        <p className="text-purple-200 text-sm mb-8 max-w-xl mx-auto">
          Available on-demand for hospitals and healthcare providers across
          Central Florida. Call us or send a message and we&rsquo;ll be in
          touch promptly.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:3216896776"
            className="bg-gold hover:bg-gold-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            (321) 689-6776
          </a>
          <Link
            href="/contact"
            className="border border-purple-400 hover:border-white text-purple-200 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

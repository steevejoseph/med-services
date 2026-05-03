import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Global Enterprise Solutions & Services LLC",
};

const values = [
  {
    icon: "🛡️",
    title: "Compliance",
    description:
      "Every delivery is executed within the regulatory framework that healthcare demands — HIPAA-aware operations, credentialed staff, and documented procedures at every step.",
  },
  {
    icon: "⏱️",
    title: "Precision & Speed",
    description:
      "Time-critical shipments require zero margin for error. We prioritize on-time delivery of medical specimens, pharmaceuticals, and sensitive materials without compromise.",
  },
  {
    icon: "🔒",
    title: "Security",
    description:
      "From chain-of-custody protocols to vetted, background-checked personnel, we treat every shipment with the confidentiality and care it deserves.",
  },
  {
    icon: "📋",
    title: "Accountability",
    description:
      "We maintain transparent records, clear communication, and measurable performance — giving healthcare organizations the documentation and confidence they need.",
  },
  {
    icon: "🤝",
    title: "Reliability",
    description:
      "Consistent, dependable service for both routine and urgent deliveries. Healthcare providers count on us because we show up — on time, every time.",
  },
  {
    icon: "⭐",
    title: "Operational Excellence",
    description:
      "We hold ourselves to the highest standards of professional conduct, continuous improvement, and service quality across every engagement.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Mission */}
      <section className="bg-brand-dark text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Our Mission
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
            Delivering Critical Healthcare Logistics with Unmatched Reliability
          </h1>
          <p className="text-purple-200 text-lg leading-relaxed">
            Our specialized medical courier services provide secure, compliant,
            and time-critical transportation for healthcare organizations that
            demand precision, accountability, and exceptional service.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Who We Are</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Global Enterprise Solutions &amp; Services LLC is a specialized
              medical courier and logistics company based in Winter Garden,
              Florida. We provide last-mile delivery of critical healthcare
              materials — including medical specimens, pharmaceuticals, supplies,
              and sensitive healthcare equipment — to hospitals and health
              providers across the region.
            </p>
            <p>
              Founded on a commitment to compliance and operational excellence,
              we bring decades of professional transportation experience to every
              engagement. Our team holds active CDL Class A licenses, Hazmat and
              Tanker endorsements, TWIC cards, and HIPAA and OSHA certifications
              — credentials that meet the rigorous standards healthcare
              organizations require from their logistics partners.
            </p>
            <p>
              Whether the delivery is routine or time-critical, we operate with
              the same discipline: documented procedures, vetted personnel, and
              an unwavering focus on getting it right.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-slate-100 max-w-5xl mx-auto" />

      {/* Values */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
              What Drives Us
            </p>
            <h2 className="text-2xl font-bold text-slate-800">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="bg-brand py-12 px-6 text-center text-white">
        <p className="text-lg font-semibold mb-2">
          Ready to evaluate us as a logistics partner?
        </p>
        <p className="text-purple-200 text-sm mb-6">
          Review our team credentials, certifications, and professional background.
        </p>
        <a
          href="/employees"
          className="inline-block bg-gold hover:bg-gold-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          View Our Team &amp; Credentials
        </a>
      </section>
    </div>
  );
}

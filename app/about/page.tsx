import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Global Enterprises Solutions & Services LLC",
};

const values = [
  {
    icon: "🛡️",
    title: "Compliance",
    description:
      "Every delivery is executed within the regulatory framework that healthcare demands — HIPAA and Bloodborne Pathogen aware operations, credentialed staff, and documented procedures at every step.",
  },
  {
    icon: "⏱️",
    title: "Precision & Speed",
    description:
      "Time-critical shipments require zero margin for error. We prioritize on-time delivery of specimens, legal filings, hazardous materials, and sensitive cargo without compromise.",
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
            Credentialed Logistics for Every Industry — Not Just Healthcare
          </h1>
          <p className="text-purple-200 text-lg leading-relaxed">
            From medical specimens and legal filings to hazardous materials and
            white glove deliveries, we bring the same compliance discipline and
            operational accountability to every cargo type, every client, every time.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Who We Are</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Global Enterprises Solutions &amp; Services LLC is a
              full-spectrum courier and logistics company based in Winter
              Garden, Florida. We serve hospitals, law firms, businesses,
              manufacturers, and institutions across Central Florida — handling
              everything from same day package delivery and medical specimens to
              TSA Hazmat transport, white glove installations, and express
              priority dispatch.
            </p>
            <p>
              Founded on a commitment to compliance and operational excellence,
              we bring decades of professional transportation experience to
              every engagement. Our team holds active CDL Class A licenses,
              Hazmat and Tanker endorsements, TWIC cards, and HIPAA, Bloodborne
              Pathogen, and OSHA HAZWOPER certifications — credentials that
              meet the rigorous standards of regulated industries and
              institutional clients alike.
            </p>
            <p>
              Whether the delivery is a routine run or a complex regulated
              shipment, we operate with the same discipline: documented
              procedures, vetted personnel, and an unwavering focus on getting
              it right.
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
            <h2 className="text-2xl font-bold text-slate-800">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {description}
                </p>
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
          Review our team credentials, certifications, and professional
          background.
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

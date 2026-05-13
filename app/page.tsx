import Link from "next/link";

const sections = [
  {
    href: "/employees",
    title: "Our Team",
    description:
      "Meet the qualified professionals behind Global Enterprise Solutions & Services LLC — including their résumés, certifications, and credentials.",
    icon: "👥",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative text-white py-24 px-6 text-center"
        style={{
          backgroundImage: "url('/assets/truck-and-globe.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-brand-dark/75" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            {}
            {/* <img
              src="/assets/globe-trans-bg.png"
              alt="Global Enterprises"
              className="w-36 rounded-full shadow-2xl"
            /> */}
          </div>
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Medical Device Delivery Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Reliable. Credentialed. Ready.
          </h1>
          <p className="text-purple-200 text-lg leading-relaxed mb-10">
            We provide professional last-mile delivery of medical devices and
            supplies to hospitals and health providers — with full transparency
            on credentials and compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/employees"
              className="bg-gold hover:bg-gold-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View Our Credentials
            </Link>
            <Link
              href="/employees"
              className="border border-purple-400 hover:border-white text-purple-200 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-brand text-white py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            {
              stat: "HIPAA & BBP Aware",
              label: "Compliance-focused operations",
            },
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

      {/* Section cards */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-slate-800 mb-12">
            Everything you need to evaluate us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {sections.map(({ href, title, description, icon }) => (
              <Link
                key={href}
                href={href}
                className="group bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md hover:border-brand-border transition-all"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-brand transition-colors">
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

      {/* Trust statement */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-slate-700 mb-4">
            Built for healthcare procurement teams
          </h2>
          <p className="text-slate-500 leading-relaxed">
            When evaluating a delivery partner, you need more than a pitch — you
            need documentation. This site exists so that everything a compliance
            or procurement officer needs is one click away.
          </p>
        </div>
      </section>
    </>
  );
}

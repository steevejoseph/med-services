import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Global Enterprise Solutions & Services LLC",
};

const services = [
  {
    icon: "🏥",
    title: "Medical Device Delivery",
    description:
      "Reliable last-mile delivery of medical devices and durable medical equipment directly to hospitals, clinics, and health providers. We handle equipment of all sizes with care and chain-of-custody documentation.",
    features: ["Hospitals & outpatient facilities", "Chain-of-custody documentation", "Signature confirmation"],
  },
  {
    icon: "🧪",
    title: "Specimen & Lab Transport",
    description:
      "Time-sensitive transport of medical specimens, lab samples, and diagnostic materials. We prioritize integrity and speed to ensure samples arrive on time and within required conditions.",
    features: ["STAT and scheduled pickups", "Temperature-sensitive handling", "Direct lab-to-facility routing"],
  },
  {
    icon: "💊",
    title: "Pharmaceutical Delivery",
    description:
      "Secure, compliant delivery of pharmaceuticals and controlled medical supplies to healthcare facilities. Our credentialed team follows strict handling protocols at every step.",
    features: ["HIPAA-aware operations", "Secure chain of custody", "Compliance documentation"],
  },
  {
    icon: "⚡",
    title: "STAT & Emergency Courier",
    description:
      "When minutes matter, we respond. Our STAT courier service handles urgent, unscheduled delivery requests with the speed and precision that critical healthcare situations demand.",
    features: ["On-demand dispatch", "Priority routing", "Real-time status updates"],
  },
  {
    icon: "🔄",
    title: "Scheduled Route Delivery",
    description:
      "Predictable, recurring delivery schedules for facilities that need consistent supply runs. We work with your logistics team to build routes that reduce overhead and improve reliability.",
    features: ["Daily, weekly, or custom frequency", "Route optimization", "Flexible scheduling for facilities"],
  },
  {
    icon: "📦",
    title: "Medical Supply Logistics",
    description:
      "Beyond devices and pharmaceuticals — we transport the full range of healthcare supplies your facility depends on, from PPE and consumables to surgical materials and support equipment.",
    features: ["Local & regional coverage", "Vetted, background-checked staff", "Load securement & safe handling"],
  },
];

const steps = [
  { step: "01", title: "Request a Delivery", description: "Contact us with your delivery details — location, timing, and materials. We'll confirm availability and dispatch." },
  { step: "02", title: "Secure Pickup", description: "Our credentialed driver collects your shipment following proper handling and chain-of-custody protocols." },
  { step: "03", title: "Confirmed Delivery", description: "Your materials are delivered on time with signature confirmation and delivery documentation provided." },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-dark text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Medical Courier Services Built for Healthcare
          </h1>
          <p className="text-purple-200 text-lg leading-relaxed">
            From routine supply runs to urgent STAT deliveries, we provide
            secure, compliant, and time-critical transportation for the
            healthcare organizations that need it most.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, description, features }) => (
              <div
                key={title}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-semibold text-slate-800 text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{description}</p>
                <ul className="space-y-1">
                  {features.map((f) => (
                    <li key={f} className="text-sm text-slate-500 flex gap-2">
                      <span className="text-gold shrink-0">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
              How It Works
            </p>
            <h2 className="text-2xl font-bold text-slate-800">Simple, reliable, documented</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {steps.map(({ step, title, description }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-12 px-6 text-center text-white">
        <p className="text-lg font-semibold mb-2">Ready to schedule a delivery?</p>
        <p className="text-purple-200 text-sm mb-6">
          Available for hospitals and healthcare providers across the region.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gold hover:bg-gold-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}

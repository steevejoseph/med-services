import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services | Global Enterprise Solutions & Services LLC",
};

const steps = [
  {
    n: "1",
    title: "Contact Us",
    body: "Reach out by phone or through our contact page. Give us your pickup location, destination, and what needs to be delivered.",
  },
  {
    n: "2",
    title: "Your Package is Delivered",
    body: "Safe, experienced, and credentialed drivers handle your shipment with full chain-of-custody documentation.",
  },
  {
    n: "3",
    title: "Delivery Confirmation",
    body: "Signature confirmation and delivery documentation provided on every job — for your records and ours.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-dark text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-5">Our Services</h1>
          <p className="text-purple-200 text-lg leading-relaxed max-w-2xl mx-auto">
            Serving hospitals, businesses, and organizations throughout Central
            Florida, Global Enterprise Solutions &amp; Services LLC offers same
            day delivery and rush courier services to fit all your delivery
            needs. Available on-demand for both routine and time-critical
            shipments.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((svc) => (
            <div
              key={svc.slug}
              className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col"
            >
              <div className="bg-slate-50 px-8 pt-8 pb-6 flex-1">
                <div className="text-4xl mb-4">{svc.icon}</div>
                <h2 className="text-xl font-bold text-slate-800 mb-3">{svc.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed">{svc.tagline}</p>
              </div>
              <div className="px-8 py-5 border-t border-slate-100 bg-white">
                <Link
                  href={`/services/${svc.slug}`}
                  className="inline-block bg-brand hover:bg-brand-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest text-center mb-2">
            Easy Pickup &amp; Delivery Process
          </p>
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-3">
            How It Works
          </h2>
          <p className="text-slate-500 text-sm text-center mb-12 max-w-xl mx-auto">
            Global Enterprise Solutions &amp; Services LLC provides a broad range
            of same day delivery and rush courier services, available on-demand to
            serve your needs. Here&rsquo;s how it works:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {steps.map(({ n, title, body }) => (
              <div key={n} className="text-center">
                <div className="w-14 h-14 rounded-full bg-brand text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {n}
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand py-14 px-6 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">Schedule a Delivery Today</h2>
        <p className="text-purple-200 text-sm mb-8 max-w-xl mx-auto">
          Schedule a pickup and delivery and see why organizations across Central
          Florida choose Global Enterprise Solutions &amp; Services LLC for their
          courier and logistics needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:3216896776"
            className="bg-white text-brand font-semibold px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors"
          >
            (321) 689-6776
          </a>
          <Link
            href="/contact"
            className="bg-gold hover:bg-gold-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/services-data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return {};
  return {
    title: `${svc.title} | Global Enterprises Solutions & Services LLC`,
  };
}

const steps = [
  {
    n: "1",
    title: "Contact Us",
    body: "By phone or through our contact page — give us your pickup location, destination, and delivery details.",
  },
  {
    n: "2",
    title: "Your Package is Delivered",
    body: "Safe, experienced, and credentialed courier drivers handle your shipment with full documentation.",
  },
  {
    n: "3",
    title: "Delivery Confirmation",
    body: "Real-time confirmation and signature documentation provided for every delivery.",
  },
];

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  return (
    <div>
      {/* Hero */}
      <section
        className="relative text-white py-20 px-6"
        style={
          svc.heroImage
            ? {
                backgroundImage: `url('${svc.heroImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        {svc.heroImage && <div className="absolute inset-0 bg-brand-dark/30" />}
        {!svc.heroImage && <div className="absolute inset-0 bg-brand-dark" />}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{svc.title}</h1>
          <p className="text-purple-200 text-lg leading-relaxed max-w-2xl mb-8">
            {svc.heroSubheading}
          </p>
          <div className="flex flex-wrap gap-4">
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
        </div>
      </section>

      {/* What we deliver */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            What We Deliver
          </h2>
          <p className="text-slate-500 leading-relaxed mb-10 max-w-2xl">
            {svc.deliverablesIntro}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {svc.deliverables.map(({ icon, iconImg, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-6 text-center"
              >
                {iconImg
                  ? <img src={iconImg} alt={label} className="w-8 h-8 object-contain" />
                  : <span className="text-3xl">{icon}</span>}
                <span className="text-slate-700 text-sm font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
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
            {svc.howItWorksIntro}
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

      {/* Overview */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            {svc.overviewHeading}
          </h2>
          <div className="space-y-4">
            {svc.overview.split("\n\n").map((para, i) => (
              <p key={i} className="text-slate-600 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-14 px-6 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">Schedule a Delivery Today</h2>
        <p className="text-purple-200 text-sm mb-8 max-w-xl mx-auto">
          Schedule a pickup and delivery and see why organizations across
          Central Florida choose Global Enterprises Solutions &amp; Services LLC
          for their courier and logistics needs.
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
        <p className="mt-8 text-purple-300 text-sm">
          ←{" "}
          <Link href="/services" className="hover:text-white underline">
            View all services
          </Link>
        </p>
      </section>
    </div>
  );
}

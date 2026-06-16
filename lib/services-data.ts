export type ServiceItem = {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  heroSubheading: string;
  deliverablesIntro: string;
  deliverables: { icon: string; label: string }[];
  howItWorksIntro: string;
  overviewHeading: string;
  overview: string;
};

export const services: ServiceItem[] = [
  {
    slug: "same-day-delivery",
    icon: "🚐",
    title: "Same Day Delivery",
    tagline:
      "Overnight delivery doesn't always do the trick — sometimes you need your packages delivered the same day.",
    heroSubheading:
      "Global Enterprises Solutions & Services LLC is a trusted provider of same day delivery and rush courier services across Central Florida. We're available on-demand so you'll always have access to our fast, reliable, and professional delivery expertise.",
    deliverablesIntro:
      "We serve businesses and organizations across the region with rush delivery of critical materials. Come and see how our same day delivery services can streamline all your delivery needs:",
    deliverables: [
      { icon: "📦", label: "Package Delivery" },
      { icon: "🏥", label: "Medical Courier" },
      { icon: "⚖️", label: "Legal Courier" },
      { icon: "🚛", label: "Same Day Freight" },
      { icon: "🔄", label: "Scheduled Route Deliveries" },
      { icon: "📬", label: "Interoffice Mail Runs" },
    ],
    howItWorksIntro:
      "Global Enterprises Solutions & Services LLC provides a broad range of same day delivery and rush courier services, available on-demand to serve your delivery needs at any time. See how our convenient same day delivery services are already serving clients throughout Central Florida:",
    overviewHeading: "Same Day Delivery Overview",
    overview:
      "When you need a package delivered today — not tomorrow — Global Enterprises Solutions & Services LLC is ready. Our same day delivery service handles everything from small packages to large freight, dispatched quickly and delivered professionally by our credentialed, background-checked team.\n\nWe use optimized routing and direct communication with your team from pickup to drop-off, ensuring your delivery arrives on time with confirmation documentation. Whether your need is routine or urgent, we bring the same level of professionalism and accountability to every job.\n\nGlobal Enterprises Solutions & Services LLC offers same day delivery services for businesses and organizations across Central Florida. Contact us today to schedule your pickup.",
  },
  {
    slug: "medical-courier",
    icon: "🏥",
    title: "Medical Courier Services",
    tagline:
      "Revitalize your patient care by streamlining your medical supply and equipment deliveries.",
    heroSubheading:
      "Global Enterprises Solutions & Services LLC offers a comprehensive selection of compliant and fast medical courier services for hospitals, clinics, laboratories, and health organizations across Central Florida. We have been delivering medical equipment, pharmaceuticals, and medical specimens to Florida health organizations with full HIPAA and OSHA compliance.",
    deliverablesIntro:
      "We serve countless health organizations with rush deliveries of vital medical supplies. From life-saving medical equipment to pharmaceuticals and prosthetics, we can have your packages STAT delivered, professionally and safely. Come and see how our medical courier services can streamline all your medical deliveries:",
    deliverables: [
      { icon: "🧪", label: "Medical Specimens" },
      { icon: "💧", label: "Urine Samples" },
      { icon: "🩸", label: "Bloodwork & Biopsies" },
      { icon: "🦷", label: "Prosthetics & Implants" },
      { icon: "🏥", label: "Medical Equipment & Devices" },
      { icon: "💊", label: "Medical Prescriptions" },
    ],
    howItWorksIntro:
      "Global Enterprises Solutions & Services LLC provides same day medical courier services available on-demand to serve your delivery needs. See how our medical courier services are already serving health organizations throughout Central Florida:",
    overviewHeading: "Medical Courier Services Overview",
    overview:
      "When it comes to same day medical courier services, Global Enterprises Solutions & Services LLC is a leading provider to health organizations across Central Florida, delivering crucial medical supplies to help facilities keep up with their patient care and lab work. We employ OSHA and HIPAA trained drivers who are experienced in performing STAT deliveries, using the most direct and efficient routes to complete medical deliveries while handling your packages with the greatest of care.\n\nWe know how important it is to get your medical supplies on time. A shortage can lead to patients suffering and budgets buckling. With our experienced, credentialed drivers and full chain-of-custody documentation, you and your patients can rest easy knowing that your packages will deliver on time, every time.\n\nOur medical courier services are available on-demand for whenever you are in urgent need of medical supplies, equipment, or specimens. Contact us today to schedule a pickup.",
  },
  {
    slug: "legal-courier",
    icon: "⚖️",
    title: "Legal Courier Services",
    tagline:
      "Stay on top of your legal deadlines with our fast, reliable legal courier services.",
    heroSubheading:
      "Global Enterprises Solutions & Services LLC offers premium same day legal courier services throughout Central Florida. Our experienced team delivers legal documents with speed and security to courthouses, law firms, and clerk offices — on time, every time.",
    deliverablesIntro:
      "The progress of your casework can depend on the timing of your legal deadlines and document submissions. We handle all types of legal documents with the urgency and confidentiality they require:",
    deliverables: [
      { icon: "📋", label: "Court Filings" },
      { icon: "📜", label: "Complaints & Petitions" },
      { icon: "⚖️", label: "Motions & Orders" },
      { icon: "📁", label: "Legal Briefs & Pleadings" },
      { icon: "🏛️", label: "Court Document Retrievals" },
      { icon: "📄", label: "Summons & Process Documents" },
    ],
    howItWorksIntro:
      "Global Enterprises Solutions & Services LLC provides same day legal courier services available on-demand. See how our streamlined delivery process keeps your legal operations running on schedule:",
    overviewHeading: "Legal Courier Services Overview",
    overview:
      "The progress of your casework can depend on the timing of your legal deadlines and document submissions. At Global Enterprises Solutions & Services LLC, we understand the stakes — missed deadlines can have serious consequences for your clients and your practice.\n\nOur legal courier team handles court filings, document retrievals, and processing with the speed and professionalism that legal work demands. We deliver directly to courthouses, law firms, clerk offices, and any other location your case requires, using direct and efficient routes to meet your promised timeframes.\n\nAll legal courier services include confirmation documentation, giving your firm a clear record of every delivery. Available on-demand across Central Florida — contact us to schedule your next legal delivery.",
  },
  {
    slug: "same-day-freight",
    icon: "🚛",
    title: "Same Day Freight",
    tagline:
      "No job is too big — same day freight delivery for large cargo and palletized materials.",
    heroSubheading:
      "Global Enterprises Solutions & Services LLC can rush deliver large cargo and palletized materials to locations across Central Florida and surrounding areas. No job is too big when it comes to our same day freight delivery services.",
    deliverablesIntro:
      "Our same day freight service handles cargo of all sizes, from oversized packages to large palletized shipments. We have the fleet and the experience to handle your freight needs:",
    deliverables: [
      { icon: "📦", label: "Large Packages" },
      { icon: "📦", label: "Multiple Packages" },
      { icon: "🤲", label: "White Glove Delivery" },
      { icon: "🛋️", label: "Furniture & Equipment" },
      { icon: "⚖️", label: "Overweight Cargo" },
      { icon: "🚛", label: "LTL Freight — Local & Regional" },
    ],
    howItWorksIntro:
      "Global Enterprises Solutions & Services LLC provides same day freight delivery services on-demand. Our streamlined process gets your large cargo picked up and delivered efficiently:",
    overviewHeading: "Same Day Freight Overview",
    overview:
      "When standard courier vehicles aren't enough, Global Enterprises Solutions & Services LLC steps up. Our same day freight service handles cargo of all sizes, from multiple oversized packages to palletized materials, delivered directly to your destination the same day.\n\nOur team of experienced, background-checked drivers handles your freight with care, using proper load securement and professional handling throughout transit. Every freight delivery comes with confirmation documentation and direct communication with your team from pickup to drop-off.\n\nWhether you need white glove handling, furniture delivery, or LTL freight shipped locally or regionally, we have the capacity and the expertise to get it there on time. Contact us today to schedule your same day freight pickup.",
  },
  {
    slug: "package-delivery",
    icon: "📦",
    title: "Package Delivery",
    tagline:
      "Fast, reliable package delivery for businesses and organizations that need it done right.",
    heroSubheading:
      "Global Enterprises Solutions & Services LLC provides professional package delivery services for businesses, healthcare organizations, and institutions across Central Florida. From single packages to multi-stop deliveries, our credentialed team gets it there on time.",
    deliverablesIntro:
      "We handle all types of package deliveries with the same level of care and professionalism. Whether it's a single item or a multi-package run, we've got you covered:",
    deliverables: [
      { icon: "📦", label: "Business Packages" },
      { icon: "🗂️", label: "Documents & Files" },
      { icon: "💼", label: "Office Supplies" },
      { icon: "🖥️", label: "Electronics & Equipment" },
      { icon: "🎁", label: "Sensitive Items" },
      { icon: "🔄", label: "Multi-Stop Deliveries" },
    ],
    howItWorksIntro:
      "Scheduling a package delivery with Global Enterprises Solutions & Services LLC is straightforward. Here's how our delivery process works:",
    overviewHeading: "Package Delivery Overview",
    overview:
      "Businesses and organizations across Central Florida depend on Global Enterprises Solutions & Services LLC for fast, professional package delivery. Our on-demand service dispatches quickly and delivers with the accountability your operations require — including signature confirmation and delivery documentation on every job.\n\nOur team of background-checked, credentialed drivers handles your packages with care and professionalism from pickup to drop-off. We serve a wide range of clients, from healthcare organizations and law firms to businesses and institutions of all kinds.\n\nWhether you need a single package delivered across town or a multi-stop run across the region, Global Enterprises Solutions & Services LLC has the capacity and the expertise to handle it. Contact us to schedule your delivery today.",
  },
  {
    slug: "scheduled-routes",
    icon: "🔄",
    title: "Scheduled Route Deliveries",
    tagline:
      "Predictable, recurring delivery schedules that reduce overhead and improve reliability for your facility.",
    heroSubheading:
      "Global Enterprises Solutions & Services LLC works with hospitals, clinics, laboratories, and businesses to establish recurring delivery routes that keep operations running smoothly. Consistent, on-time, and fully documented — every run.",
    deliverablesIntro:
      "Our scheduled route service handles a wide range of recurring delivery needs. We work with your logistics team to build routes optimized for your facility's requirements:",
    deliverables: [
      { icon: "🏥", label: "Inter-Facility Medical Runs" },
      { icon: "💊", label: "Pharmacy Replenishment" },
      { icon: "🧪", label: "Daily Specimen Pickups" },
      { icon: "📬", label: "Interoffice Mail Runs" },
      { icon: "📦", label: "Supply Chain Replenishment" },
      { icon: "🔄", label: "Custom Route Scheduling" },
    ],
    howItWorksIntro:
      "Setting up a scheduled delivery route with Global Enterprises Solutions & Services LLC is simple. We work with your team to design a route that fits your schedule and volume:",
    overviewHeading: "Scheduled Route Deliveries Overview",
    overview:
      "For facilities that need consistent, predictable delivery service, Global Enterprises Solutions & Services LLC offers customized scheduled route delivery. We work directly with your logistics or operations team to design routes that match your volume, timing, and compliance requirements.\n\nScheduled routes are ideal for hospital systems running daily specimen pickups, pharmacies managing recurring replenishment, and businesses with regular interoffice delivery needs. Our drivers learn your facilities, your contacts, and your protocols — delivering a level of consistency you can count on.\n\nEvery scheduled route includes full delivery documentation and confirmation, giving your compliance and operations teams the records they need. Contact us to discuss how we can build a scheduled route program that works for your organization.",
  },
];

export function getService(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}

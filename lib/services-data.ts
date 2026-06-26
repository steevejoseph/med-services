export type ServiceItem = {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  heroImage?: string;
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
    heroImage:
      "https://images.pexels.com/photos/6940962/pexels-photo-6940962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&fit=crop",
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
    heroImage:
      "https://images.pexels.com/photos/36595248/pexels-photo-36595248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&fit=crop",
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
    heroImage:
      "https://images.pexels.com/photos/16603615/pexels-photo-16603615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&fit=crop",
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
    heroImage:
      "https://images.pexels.com/photos/11087837/pexels-photo-11087837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&fit=crop",
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
    heroImage:
      "https://images.pexels.com/photos/4440774/pexels-photo-4440774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&fit=crop",
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
    heroImage:
      "https://images.pexels.com/photos/7706571/pexels-photo-7706571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&fit=crop",
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
  {
    slug: "express-delivery",
    icon: "⚡",
    title: "Express Delivery",
    tagline: "When minutes matter — priority dispatch for your most time-sensitive shipments.",
    heroImage:
      "https://images.pexels.com/photos/36500482/pexels-photo-36500482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&fit=crop",
    heroSubheading:
      "Global Enterprises Solutions & Services LLC provides express delivery service for clients who cannot afford to wait. From the moment you call, we dispatch immediately and take the most direct route to your destination — no stops, no delays.",
    deliverablesIntro:
      "Our express service is built for situations where standard delivery timelines simply aren't an option. We handle urgent shipments across every industry:",
    deliverables: [
      { icon: "📋", label: "Time-Sensitive Documents" },
      { icon: "🏥", label: "Urgent Medical Supplies" },
      { icon: "⚙️", label: "Critical Parts & Components" },
      { icon: "💼", label: "Priority Business Cargo" },
      { icon: "⚖️", label: "Rush Legal Filings" },
      { icon: "🚛", label: "Emergency Freight" },
    ],
    howItWorksIntro:
      "Express delivery with Global Enterprises Solutions & Services LLC is straightforward — you call, we move. Here's how our priority dispatch process works:",
    overviewHeading: "Express Delivery Overview",
    overview:
      "When a shipment cannot wait, Global Enterprises Solutions & Services LLC dispatches immediately with no intermediate stops. Our express delivery service is a dedicated, point-to-point run — your cargo goes directly from pickup to destination with real-time communication throughout.\n\nWe serve clients across industries including healthcare, legal, manufacturing, and business services. Whether it's a critical component needed on a production floor, a filing due before a court closes, or emergency medical supplies for a healthcare facility, our drivers are trained to move fast without cutting corners on care or documentation.\n\nEvery express delivery includes confirmation documentation and direct driver contact from pickup to drop-off. Contact us the moment you need it — we're ready.",
  },
  {
    slug: "white-glove-services",
    icon: "🤍",
    title: "White Glove Services",
    tagline: "Premium handling, careful placement, and full accountability for high-value or sensitive deliveries.",
    heroImage:
      "https://images.pexels.com/photos/6466483/pexels-photo-6466483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&fit=crop",
    heroSubheading:
      "Some shipments require more than just getting there — they require expertise, extra care, and hands-on placement. Global Enterprises Solutions & Services LLC provides white glove delivery service for clients who need their items handled with the highest level of professionalism.",
    deliverablesIntro:
      "Our white glove service is designed for shipments where the standard approach isn't enough. We handle high-value, fragile, and specialized cargo with the care it demands:",
    deliverables: [
      { icon: "🏥", label: "Medical Devices & Instruments" },
      { icon: "🖥️", label: "Electronics & Technology" },
      { icon: "🛋️", label: "Furniture & Large Items" },
      { icon: "🎨", label: "Artwork & Specialty Items" },
      { icon: "📦", label: "High-Value Equipment" },
      { icon: "🔬", label: "Sensitive Lab Equipment" },
    ],
    howItWorksIntro:
      "Our white glove process goes beyond standard delivery — we handle every detail from pickup through placement:",
    overviewHeading: "White Glove Services Overview",
    overview:
      "White glove delivery from Global Enterprises Solutions & Services LLC means your shipment receives dedicated, careful handling from the moment it's picked up to the moment it's placed in its final position. We don't leave items at the door — we bring them in, position them, and remove packaging when needed.\n\nThis service is ideal for hospitals receiving sensitive medical instruments, businesses taking delivery of high-value electronics, or any client whose cargo requires more than a standard drop-off. Our trained staff treats every item as if it's irreplaceable — because often, it is.\n\nAll white glove deliveries include full documentation, professional handling, and direct communication with your receiving team. Contact us to discuss your specific requirements.",
  },
  {
    slug: "tsa-hazmat",
    icon: "⚠️",
    title: "TSA Hazmat Transport",
    tagline: "Certified hazardous materials transport — fully compliant, safely handled, and thoroughly documented.",
    heroImage:
      "https://images.pexels.com/photos/28447189/pexels-photo-28447189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&fit=crop",
    heroSubheading:
      "Global Enterprises Solutions & Services LLC provides certified hazardous materials transport with drivers holding CDL Class A licenses with active Hazmat endorsements, TWIC cards, and OSHA 40-hour HAZWOPER training. We move regulated cargo safely, legally, and with complete documentation.",
    deliverablesIntro:
      "Our Hazmat-certified drivers and fully compliant fleet are equipped to transport a wide range of regulated materials:",
    deliverables: [
      { icon: "🧪", label: "Chemicals & Solvents" },
      { icon: "🔥", label: "Flammables & Compressed Gases" },
      { icon: "⚠️", label: "OSHA-Classified Hazardous Materials" },
      { icon: "🏭", label: "Industrial & Manufacturing Cargo" },
      { icon: "🧴", label: "Regulated Cleaning & Lab Agents" },
      { icon: "📋", label: "DOT-Regulated Shipments" },
    ],
    howItWorksIntro:
      "Hazmat transport requires more than just a truck — it requires certification, planning, and documentation at every step. Here's how we handle it:",
    overviewHeading: "TSA Hazmat Transport Overview",
    overview:
      "Transporting hazardous materials legally and safely requires certified personnel, proper equipment, and meticulous documentation. Global Enterprises Solutions & Services LLC meets those requirements with CDL Class A Hazmat-endorsed drivers, TWIC card holders, and staff trained under OSHA's 40-hour HAZWOPER standard (29 CFR 1910.120).\n\nWe handle the full compliance burden — proper placarding, manifest preparation, route planning in accordance with DOT and FMCSA regulations, and chain-of-custody records for every load. Our Confined Space and Bloodborne Pathogen certifications round out a team that understands regulated cargo at a level most couriers cannot match.\n\nWhether you're moving industrial chemicals, lab agents, or other DOT-regulated materials across Central Florida, Global Enterprises Solutions & Services LLC provides the certified capacity to do it right. Contact us to discuss your hazmat transport requirements.",
  },
];

export function getService(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}

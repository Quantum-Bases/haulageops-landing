import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Heavy Materials Transport Management | HaulageOps",
  description:
    "Heavy materials transport — concrete, steel, oversized loads, site deliveries — requires dispatch coordination, subcontractor networks and client project visibility.",
};

const proofStrip = [
  { strong: "Document store", label: "permits and access approvals per job" },
  { strong: "Sub portal", label: "specialist hauliers coordinated without calls" },
  { strong: "Delivery scheduling", label: "precise windows, forward scheduling" },
  { strong: "Client portal", label: "site delivery visibility for project teams" },
  { strong: "Live GPS", label: "load position visible to dispatch and client" },
  { strong: "Digital POD", label: "photo and signature captured at delivery" },
];

const characteristics = [
  {
    title: "Permit requirements and access restrictions",
    p: "Oversized and overweight loads require route permits, access approvals and in some cases police escort coordination. Even standard heavy deliveries to construction sites often require access approval, delivery booking windows and induction documentation. Managing these documents against each individual job — not just at the fleet level — is a core requirement for heavy materials operators.",
    bullets: [
      "Job-level document storage for permits, access approvals and escorts",
      "Document expiry tracking with alerts for permit renewals",
      "Driver access to job documents through the driver app in the field",
    ],
  },
  {
    title: "Precise delivery windows",
    p: "Construction site deliveries — precast concrete, structural steel, large plant — are often booked against specific site programmes. Delivering outside the agreed window can mean a crane or lifting crew standing by at cost, or a gate closure that means the load cannot be accepted and must return. Scheduling precision and client visibility of delivery progress matter more here than in most transport sectors.",
    bullets: [
      "Forward job scheduling with time windows per delivery",
      "Client portal showing live delivery status against scheduled window",
      "Push notifications to drivers for delivery window reminders",
    ],
  },
  {
    title: "Specialist subcontractor hauliers",
    p: "Heavy materials transport frequently requires subcontractor hauliers with specialist vehicles — low-loaders, extendable trailers, self-loading hiabs, crane trucks. Your owned fleet may not carry every load type. Coordinating specialist subs without losing visibility — knowing whether they have confirmed the job, where they are and whether delivery is on track — requires a subcontractor portal rather than a phone call chain.",
    bullets: [
      "Subcontractor portal for specialist haulier job coordination",
      "Sub haulier confirmation, status updates and docket submission",
      "Separate sub pay rates tracked per specialist job type",
    ],
  },
  {
    title: "Client project site visibility",
    p: "Civil engineers, project managers and site foremen waiting on a heavy materials delivery need to know where it is — not to receive an update call from your office, but to plan site activities around the arrival. The client portal gives project-side contacts a live delivery status view that removes the need for your dispatch team to field status calls throughout the day.",
    bullets: [
      "Client portal shows live job status and GPS position",
      "Delivery confirmation and POD visible to client on completion",
      "Project-level job history for construction programme records",
    ],
  },
];

const loadTypes = [
  {
    title: "Concrete products and precast",
    p: "Precast concrete panels, beams, columns, drainage products and other concrete elements delivered to construction sites on precise programme windows. High value, time-sensitive, client site coordination required. Digital POD with photo at delivery. Client portal visibility for site teams waiting on critical path items.",
  },
  {
    title: "Structural steel and fabrications",
    p: "Structural steel sections, fabricated components, reinforcement materials to construction sites and steel fabrication yards. Delivery booking requirements, access restrictions and programme sensitivity. Subcontractor hauliers for specialist flatbed and extendable trailer loads. Per-load or project-based billing structures.",
  },
  {
    title: "Quarry products and aggregate",
    p: "High-volume quarry products — crushed rock, aggregate, road base, drainage stone — delivered to civil construction sites and infrastructure projects. Per-tonne billing, high load volume, multiple delivery points per day. The dispatch and digital docket workflow is the same as quarry operations — the difference is you are the haulage contractor, not the quarry.",
    link: { label: "Quarries & Aggregates", href: "/industries/quarries-and-aggregates" },
  },
  {
    title: "Oversized plant and equipment",
    p: "Plant and equipment movements — excavators, compactors, cranes, industrial equipment — requiring low-loaders, route permits and access coordination. Lower load frequency but high coordination requirement per move. Permit documentation, route approval storage and POD against the delivery job record.",
  },
];

const lifecycle = [
  {
    num: "1",
    title: "Create delivery job with permit documents attached",
    p: "Create the delivery job with scheduled window, delivery address and load details. Attach permit documentation, access approval and any site induction records to the job. The driver can access these documents from the driver app in the field.",
  },
  {
    num: "2",
    title: "Assign to owned fleet or specialist sub haulier",
    p: "If the load requires a specialist vehicle, assign to a subcontractor haulier through the portal. The sub receives the job details and attached documents, confirms acceptance, and their status is visible on the dispatch board.",
  },
  {
    num: "3",
    title: "Client sees live delivery status",
    p: "The client project team logs into the client portal and sees the live delivery status — en route, on site, delivered. GPS position updates in real time. The project manager does not need to call dispatch to know where the load is.",
  },
  {
    num: "4",
    title: "Digital POD at delivery",
    p: "Driver captures proof of delivery at the site — photo of the delivered load, client signature, timestamp. Stored in Azure Blob Storage against the job record. Available for client download from the portal and attached when invoicing.",
  },
  {
    num: "5",
    title: "Invoice from job record",
    p: "Invoice generated from the completed delivery job with POD attached. The rate — per load, per tonne or project fixed-fee — is already applied from the rate card. Push to Xero. Client accesses the invoice through the portal.",
  },
  {
    num: "6",
    title: "Project delivery record maintained",
    p: "Job history against the client account provides a complete project delivery record — load type, delivery date, POD, invoice. Available for project programme reconciliation without requiring a manual report to be compiled.",
  },
];

const capabilities = [
  {
    title: "Document management — permits and access approvals",
    href: "/platform/document-management",
    p: "The document management system stores job-level documentation in Azure Blob Storage — route permits, access approvals, site induction records, police escort paperwork, delivery booking confirmations. Documents are attached to the job record and accessible to drivers through the driver app. Document expiry tracking alerts you when permits approach their renewal date before they cause a job delay.",
    bullets: [
      "Job-level permit and access document storage in Azure",
      "Driver access to job documents via the driver app in the field",
      "Document expiry alerts for permit renewals",
    ],
  },
  {
    title: "Subcontractor portal for specialist hauliers",
    href: "/platform/subcontractor-portal",
    p: "The subcontractor portal gives each specialist sub haulier a dedicated mobile login to receive job assignments, view Mapbox maps with delivery location, confirm job acceptance, update delivery status and submit digital POD. Sub hauliers do not pay for portal access. You maintain visibility of their delivery progress without phone calls. Separate sub pay rates are tracked against each specialist job.",
    bullets: [
      "Specialist sub hauliers access portal at no cost to them",
      "Job confirmation, status updates and POD submission via mobile",
      "Separate sub pay rate tracked against each delivery",
    ],
  },
  {
    title: "Client portal — site delivery visibility",
    href: "/platform/client-portal",
    p: "The client portal gives construction project teams a dedicated login to track live delivery status against the scheduled window, view GPS position, access delivery confirmation and download POD documentation. Project managers and site engineers managing critical path deliveries can check status themselves rather than calling your dispatch team. Client access is job-specific — no cross-project or cross-client data is visible.",
    bullets: [
      "Live delivery status and GPS position visible to client",
      "Delivery confirmation and POD download from portal",
      "Project delivery history for programme records",
    ],
  },
  {
    title: "Proof of delivery — photo and signature",
    href: "/solutions/proof-of-delivery",
    p: "The proof of delivery system captures photo of the delivered load, customer signature and timestamp through the driver app or subcontractor portal at the delivery point. Stored in Azure Blob Storage against the job record. Available for client download from the portal and attached to the invoice when it is generated. For high-value loads where delivery disputes are costly, a timestamped photo and signature remove ambiguity.",
    bullets: [
      "Photo, signature and timestamp captured at delivery point",
      "Stored in Azure — accessible from admin panel and client portal",
      "Attached to invoice automatically on generation",
    ],
  },
];

const faqs = [
  {
    q: "Can I attach route permits and access approvals directly to individual delivery jobs?",
    a: "Yes. The document management system allows you to attach files — PDFs, images, signed approvals — to individual job records. These are stored in Azure Blob Storage and accessible to the driver through the driver app in the field. If you need the driver to present a permit at a weigh station or site gate, the document is available on their phone without printing or emailing it separately.",
  },
  {
    q: "We use specialist sub hauliers with their own vehicles — how do we coordinate them without losing visibility?",
    a: "Each sub haulier gets a dedicated subcontractor portal login. When you assign a job to them, they receive the job details and any attached documents through the portal. They confirm acceptance, update their status as they progress, and submit digital POD at delivery. Their status and GPS position appear on your dispatch board in real time. You have visibility of their delivery progress without phone calls or text updates.",
  },
  {
    q: "Our construction clients want to know where their delivery is without calling us — how does that work?",
    a: "The client portal gives each client a dedicated login showing live delivery status against their scheduled jobs. GPS position updates in real time as the driver or sub haulier updates status in the app or portal. When the delivery completes, the POD is visible in the client portal immediately. The client project manager can track the delivery from their desk without your dispatch team fielding status calls throughout the morning.",
  },
  {
    q: "We bill some clients per load and others on a project fixed-fee. Can both billing structures work in the same account?",
    a: "Yes. HaulageOps rate management handles per-load, per-tonne, hourly and fixed-fee billing structures in the same account. Different clients can have different billing structures — per load for ad hoc deliveries, fixed-fee for framework or project contracts. The applicable rate card is applied to a job when it is created against a client, removing the need to manually calculate the charge per delivery.",
  },
  {
    q: "Does HaulageOps integrate with GPS tracking hardware on our vehicles?",
    a: "HaulageOps uses phone-based GPS tracking through the driver app — the driver's mobile becomes the tracking device without additional hardware. If you already have GPS hardware on your vehicles, keep it — HaulageOps is the operations layer above it, not a replacement. Hardware telematics integration is on the roadmap. For the current release, phone-based GPS via the driver app provides live position on the dispatch board.",
  },
  {
    q: "We also do civil construction logistics alongside heavy materials — does HaulageOps cover both?",
    a: "Yes. The civil construction and construction logistics pages cover the broader construction logistics context. Heavy materials transport operates within the same HaulageOps platform — the same dispatch board, subcontractor portal, document management and client portal apply across both. Operators running mixed construction logistics and heavy materials delivery run both in the same account.",
  },
];

const relatedCards = [
  {
    title: "Construction Logistics",
    href: "/industries/construction-logistics",
    p: "Construction logistics providers managing site deliveries, material movements and subcontractor haulage across multiple projects simultaneously.",
  },
  {
    title: "Civil Construction",
    href: "/industries/civil-construction",
    p: "Civil contractors managing materials logistics alongside construction programmes — coordinating haulage across project phases, subcontractors and client reporting.",
  },
  {
    title: "Document Management",
    href: "/platform/document-management",
    p: "Job-level document storage in Azure Blob Storage — permits, access approvals, contracts and compliance records with expiry tracking and driver app access.",
  },
  {
    title: "Subcontractor Portal",
    href: "/platform/subcontractor-portal",
    p: "The dedicated portal for specialist sub hauliers — job confirmation, Mapbox maps, status updates and digital POD submission from any mobile browser, at no cost to the sub.",
  },
];

export default function HeavyMaterialsPage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb */}
      <div className="pt-24 pb-0 bg-[#FFF9F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B]">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/industries" className="hover:text-[#E8652B]">Industries</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Heavy Materials Transport</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Heavy Materials Transport
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Heavy materials delivery needs coordination across your full transport network.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Concrete products, structural steel, oversized plant, quarry aggregate and construction materials all carry the same coordination requirements: precise delivery windows, access restrictions, permit documentation, specialist subcontractor hauliers for loads your fleet cannot carry, and client project teams who need to know where their delivery is.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/document-management">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Document Management
              </Button>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-300 fill-mode-both">
            {["Permit and access document management", "Subcontractor haulier coordination", "Precise delivery window scheduling", "Client site project visibility"].map((pill) => (
              <span key={pill} className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-[#334155] bg-[#F1F5F9] border border-[#E2E8F0]">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-[#0F172A] py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 text-center">
            {proofStrip.map((item) => (
              <div key={item.strong} className="flex flex-col items-center justify-center gap-1">
                <strong className="text-white text-lg font-bold leading-tight">{item.strong}</strong>
                <span className="text-[#94A3B8] text-xs uppercase tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HEAVY MATERIALS CHARACTERISTICS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Heavy Materials Characteristics</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            What makes heavy materials transport operationally distinct.
          </h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Heavy materials transport sits at the more complex end of the haulage spectrum — fewer loads per day than tipper operations, but significantly higher coordination requirements per load. Permit management, access restrictions, precise delivery timing and specialist vehicle requirements add layers that standard transport management systems do not handle well.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {characteristics.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p}</p>
                <ul className="mt-5 space-y-3">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                      <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOAD TYPES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Load Types</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The load types HaulageOps handles for heavy materials operators.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {loadTypes.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p}</p>
                {card.link ? (
                  <Link href={card.link.href} className="mt-3 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                    {card.link.label} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HAULAGEOPS FOR HEAVY MATERIALS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">HaulageOps for Heavy Materials</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The coordination workflow for heavy materials delivery operations.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycle.map((step) => (
              <div key={step.num} className="bg-[#0F172A] rounded-2xl p-6">
                <span className="text-[#E8652B] font-bold text-2xl">{step.num}</span>
                <h3 className="mt-3 font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">{step.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM CAPABILITIES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Platform Capabilities</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The HaulageOps features heavy materials operators rely on.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {capabilities.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">{card.title}</Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.p}</p>
                <ul className="mt-5 space-y-3">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                      <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={card.href} className="mt-4 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  View details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREEN EXAMPLE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Screen Example</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Heavy materials job record in HaulageOps.
          </h2>
          <div className="mt-8 rounded-2xl bg-[#0D1525] border border-[#1E293B] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 bg-[#1E293B]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E8652B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#94A3B8]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
              <span className="ml-3 text-xs font-semibold text-[#CBD5E1]">HaulageOps — Job Record (Heavy Materials Delivery)</span>
            </div>
            <div className="p-6">
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Job record screen for a precast concrete delivery: Job details panel showing client (civil construction contractor), load type (precast bridge beams), delivery address (infrastructure site, with Google Maps preview), scheduled delivery window (07:00-09:00), assigned driver (sub haulier, shown as subcontractor with portal status: Accepted). Document panel on right showing three attached files: Route Permit (PDF, expires 15 Aug), Site Access Approval (PDF), Delivery Booking Confirmation (PDF). Job status timeline at bottom: Created, Dispatched, Accepted by sub, En route (current). Client portal visibility toggle: ON.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">FAQ</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Common questions from heavy materials transport operators.
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-[#E2E8F0] bg-white rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-[#0F172A] text-sm list-none hover:bg-[#F8FAFC]">
                  {faq.q}
                  <ChevronRight className="h-4 w-4 text-[#94A3B8] shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9]">
                  <p className="pt-4">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See how HaulageOps coordinates heavy materials delivery operations.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              A 20-minute demo covers permit document management, specialist sub haulier coordination, client site visibility and proof of delivery — in the context of how a heavy materials transport operation actually runs.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED PAGES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related Pages</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Related industries and platform features.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">{card.title}</Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.p}</p>
                <Link href={card.href} className="mt-3 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  View page <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

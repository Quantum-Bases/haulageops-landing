import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Waste and Recycling Logistics Software | HaulageOps",
  description:
    "Waste and recycling transport operators managing collections, transfer and disposal routes with subcontractors, clients and compliance obligations.",
};

const proofStrip = [
  { strong: "Dispatch board", label: "collections, transfers and sub haulers in one view" },
  { strong: "Sub portal", label: "free for all your subcontractor haulers" },
  { strong: "Document store", label: "waste transfer notes in Azure Blob Storage" },
  { strong: "Client portal", label: "collection history and service reporting" },
  { strong: "Per-weight billing", label: "and per-collection billing structures" },
  { strong: "Xero", label: "invoice from completed service records" },
];

const characteristics = [
  {
    title: "Scheduled collections and service contracts",
    p: "Waste collection operations typically run on recurring service schedules — weekly collections, fortnightly recycling rounds, on-call skip and bin lifts. These are managed as recurring jobs in HaulageOps using the job scheduling and job template system. Client service contracts define the collection frequency, material stream and billing terms.",
    bullets: [
      "Recurring job scheduling for collection routes",
      "Job templates per collection type and material stream",
      "Contract management for service agreements with expiry alerts",
    ],
  },
  {
    title: "Multiple material streams",
    p: "Waste transport operators frequently handle multiple material streams — general waste, construction and demolition debris, recycling streams, green waste, hazardous waste under separate permit. Each stream may carry different documentation requirements, different approved disposal or transfer facilities, and different billing rates. HaulageOps manages multiple rate cards and document types across the same account.",
    bullets: [
      "Rate cards per client and material stream",
      "Document management per job type — permits, transfer notes, consignment records",
      "Per-tonne, per-collection and fixed-fee billing structures",
    ],
  },
  {
    title: "Subcontractor haulers for overflow",
    p: "When owned fleet capacity is exceeded — surge volumes, vehicle maintenance, additional contract wins — waste transport operators bring in subcontractor haulers. Coordinating those subs, maintaining visibility of their collections and ensuring their digital documentation meets your obligations requires a subcontractor portal, not a WhatsApp group.",
    bullets: [
      "Subcontractor portal for dedicated sub hauler login",
      "Job acceptance, status updates and docket submission via portal",
      "Sub pay rates tracked separately from client charge rates",
    ],
  },
  {
    title: "Client service reporting obligations",
    p: "Waste management clients — local authorities, commercial property managers, construction contractors — often require service reporting as a contract obligation: collection records, weights, material streams and disposal documentation. The client portal in HaulageOps gives each client a dedicated login to access their service history, collection records and invoices without requiring reports to be manually compiled and emailed.",
    bullets: [
      "Client portal login — each client sees only their service records",
      "Collection history, dockets and invoices accessible self-service",
      "No cost to clients — included in your HaulageOps subscription",
    ],
  },
];

const scopeHandles = [
  "Collection scheduling and dispatch coordination",
  "Subcontractor hauler portal and coordination",
  "Document storage for transfer notes, permits and consignment records",
  "Digital docket capture per collection or transfer run",
  "Per-weight and per-collection billing with Xero invoicing",
  "Client portal for service history, docket access and invoices",
  "Audit trail for all job and dispatch actions",
];

const scopeNotBuilt = [
  "Not a waste management system (WMS)",
  "No weighbridge integration (roadmap)",
  "Not an environmental regulatory reporting platform",
];

const lifecycle = [
  {
    num: "1",
    title: "Schedule recurring collections",
    p: "Collection routes and service schedules are set up as recurring jobs using the job scheduling system. Each collection type — skip lift, bin exchange, bulk transfer — has its own job template with the applicable rate, material stream and documentation requirements.",
  },
  {
    num: "2",
    title: "Assign to owned and sub haulers",
    p: "Drivers are assigned to collection routes from the dispatch board. Subcontractor haulers receive their collections through the sub portal and confirm acceptance. Overflow capacity is managed by bringing in subs without losing job visibility.",
  },
  {
    num: "3",
    title: "Track collections in real time",
    p: "GPS position and job status update on the dispatch board as drivers progress through collection rounds. Status updates — en route, on site, loading, complete — are visible to dispatch without requiring check-in calls.",
  },
  {
    num: "4",
    title: "Capture digital docket and transfer documentation",
    p: "Driver submits the collection docket — weight, photo, timestamp, client signature if required. Transfer documentation is stored against the job record. All records in Azure Blob Storage, accessible from the admin panel.",
  },
  {
    num: "5",
    title: "Invoice from completed service records",
    p: "Pull completed collections for a client and period, generate the invoice with docket pack attached, push to Xero. Client can access their service records and invoice from the client portal without a manual report.",
  },
  {
    num: "6",
    title: "Client service reporting from the portal",
    p: "Clients access their collection history, material stream records, dockets and invoices through the client portal. Service reporting that previously required a manual export and email is now self-service for the client.",
  },
];

const capabilities = [
  {
    title: "Document management — transfer notes and permits",
    href: "/platform/document-management",
    p: "The document management system stores job-level documentation in Azure Blob Storage — waste transfer notes, carrier permits, environmental consignment records, tip site acceptance documentation. Documents are attached to job records and accessible from the admin panel. Document expiry tracking alerts you when permits or carrier licences approach their renewal date.",
    bullets: [
      "Job-level document storage in Azure Blob Storage",
      "Document expiry tracking with alerts",
      "Accessible from admin panel and downloadable for client records",
    ],
  },
  {
    title: "Subcontractor portal for sub haulers",
    href: "/platform/subcontractor-portal",
    p: "The subcontractor portal gives each of your subcontractor haulers a dedicated login to receive collections, accept or decline, view Mapbox maps for collection and transfer locations, update status and submit digital dockets. Sub haulers do not pay for portal access. Your overflow capacity is coordinated through the portal rather than through phone calls and manual tracking.",
    bullets: [
      "Sub haulers access portal free — no separate licence",
      "Job acceptance, status updates and docket submission via mobile",
      "Visible on dispatch board alongside owned fleet",
    ],
  },
  {
    title: "Client portal — service history and reporting",
    href: "/platform/client-portal",
    p: "The client portal gives waste management clients a self-service login to view their collection history, material stream records, transfer documentation and invoices. Clients with contractual service reporting requirements can access their own records without requiring you to compile and send a manual report. Access is client-specific — no cross-client data is visible.",
    bullets: [
      "Collection history and material stream records by period",
      "Docket and documentation download from portal",
      "Invoice access and outstanding balance visibility",
    ],
  },
  {
    title: "Billing — per-weight and per-collection",
    href: "/platform/billing-and-invoicing",
    p: "The billing and invoicing system handles the two primary waste transport billing structures — per-weight (tonne) and per-collection — alongside fixed-fee service contract billing. Rate cards are managed per client and collection type, with effective dating for contract renewals. The Xero integration pushes invoices from completed collection records with two-way payment sync.",
    bullets: [
      "Per-tonne, per-collection and fixed-fee billing structures",
      "Rate cards per client and collection type with effective dating",
      "Xero OAuth2 integration with real-time payment webhook",
    ],
  },
];

const faqs = [
  {
    q: "Does HaulageOps handle waste transfer note documentation?",
    a: "Yes. Waste transfer notes and other job-level documentation are stored in the document management system against each job record. Drivers can attach documents through the driver app. The documents are stored in Azure Blob Storage and accessible from the admin panel and client portal. Document expiry tracking alerts you when carrier licences or environmental permits approach their renewal date. HaulageOps is not an environmental regulatory compliance system — it is a document storage and operational coordination platform.",
  },
  {
    q: "We use subcontractor haulers for overflow collections — how is their documentation managed?",
    a: "Subcontractor haulers submit digital dockets through the subcontractor portal at the point of collection or transfer. The docket — photo, weight, timestamp, signature — is stored against the job record immediately and visible in the admin panel. If your sub haulers need to attach transfer notes or permits, document upload is available through the portal. Sub hauler documentation is managed within the same job record as owned driver documentation.",
  },
  {
    q: "Our clients require monthly service reports — can HaulageOps produce these?",
    a: "The client portal gives each client a self-service login to access their collection history, material stream records, dockets and invoices. Clients who need to compile their own monthly service records can access the data directly from the portal rather than waiting for a manually compiled report from your team. The admin panel also provides job history reports by client and period that can be used as the basis for formal service reporting where required.",
  },
  {
    q: "We do both scheduled collections and on-call skip lifts — can both run in the same account?",
    a: "Yes. Scheduled recurring collections and on-demand skip lifts or bin exchanges run as different job types in the same HaulageOps account. Recurring collections are set up with the job scheduling system. On-call jobs are created from the dispatch board or from templates when the call comes in. Different billing rates and documentation requirements apply per job type — all managed within the same account.",
  },
  {
    q: "Is HaulageOps built specifically for the waste sector?",
    a: "HaulageOps is not a dedicated waste sector platform — it is purpose-built for bulk haulage and construction logistics operators. Waste transport operators fit the platform well because the operational characteristics overlap significantly: subcontractor networks, per-weight billing, document management requirements, and client service reporting. The platform handles the transport coordination side of the operation. It is not a waste management system (WMS), waste facility management platform or environmental compliance reporting tool.",
  },
  {
    q: "We invoice clients by weight collected each month — is that supported?",
    a: "Yes. Per-tonne (weight) billing is a standard billing structure in HaulageOps. Rate cards for waste collection clients can be set up on a per-tonne basis, with the weight captured via digital docket at each collection by the driver. Monthly invoicing pulls all completed collections for a client in a period, applies the rate card, and generates the invoice from the total weight collected — with the individual collection dockets attached as evidence.",
  },
];

const relatedCards = [
  {
    title: "Bulk Haulage",
    href: "/industries/bulk-haulage",
    p: "Multi-client bulk haulage operations — the primary design context for HaulageOps. Subcontractor networks, per-tonne billing, digital dockets and Xero invoicing.",
  },
  {
    title: "Document Management",
    href: "/platform/document-management",
    p: "How document storage works in HaulageOps — Azure Blob Storage, job-level document attachment, expiry tracking and access from admin panel and client portal.",
  },
  {
    title: "Subcontractor Portal",
    href: "/platform/subcontractor-portal",
    p: "The dedicated portal for subcontractor haulers — job queue, acceptance, Mapbox maps, status updates and digital docket submission from any mobile browser.",
  },
  {
    title: "Haulage Dispatch",
    href: "/solutions/haulage-dispatch",
    p: "The dispatch coordination solution — how the dispatch board, driver app and subcontractor portal work together across an owned and sub fleet operation.",
  },
];

export default function WasteAndRecyclingPage() {
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
            <span className="text-[#0F172A] font-medium">Waste & Recycling</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Waste & Recycling Logistics
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Waste and recycling logistics connected from collection to invoice.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Waste and recycling transport operators managing scheduled collections, transfer runs and disposal logistics share the same operational challenges as bulk haulage — subcontractor haulers, per-weight or per-collection billing, digital documentation requirements, and clients who need service reporting. HaulageOps covers the transport coordination side of that operation.
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
            {["Dispatch and subcontractor coordination", "Document management for transfer notes", "Per-tonne and per-collection billing", "Client service reporting via portal"].map((pill) => (
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

      {/* WASTE TRANSPORT CHARACTERISTICS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Waste Transport Characteristics</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The operational characteristics of waste and recycling transport.
          </h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Waste and recycling transport operators sit at the intersection of service contract obligations, documentation requirements and subcontractor coordination. The transport coordination layer — scheduling, dispatch, subcontractors, billing and client reporting — maps onto the HaulageOps platform directly.
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

      {/* HONEST ABOUT SCOPE */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Honest About Scope</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            What HaulageOps covers — and what it does not.
          </h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            This is worth being direct about. HaulageOps is focused on transport coordination — the dispatch, driver, subcontractor and billing side of waste logistics. It is not a waste management system (WMS) or waste facility management platform.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
              <h3 className="font-bold text-[#0F172A]">What HaulageOps handles for waste transport</h3>
              <ul className="mt-5 space-y-3">
                {scopeHandles.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
              <h3 className="font-bold text-[#0F172A]">What HaulageOps is not built for</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                HaulageOps is not purpose-built for waste facility operations, landfill site management, materials recovery facility (MRF) processing records, weighbridge integration or environmental regulatory reporting. These are specialist WMS and environmental compliance system requirements. If waste facility management or regulatory compliance reporting is the primary need, HaulageOps is the transport coordination layer — not the complete waste management platform.
              </p>
              <ul className="mt-5 space-y-3">
                {scopeNotBuilt.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HAULAGEOPS FOR WASTE TRANSPORT */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">HaulageOps for Waste Transport</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The transport coordination workflow for waste and recycling operators.
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
            The HaulageOps features that apply to waste and recycling transport.
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
            Waste transport dispatch in HaulageOps.
          </h2>
          <div className="mt-8 rounded-2xl bg-[#0D1525] border border-[#1E293B] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 bg-[#1E293B]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E8652B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#94A3B8]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
              <span className="ml-3 text-xs font-semibold text-[#CBD5E1]">HaulageOps — Dispatch Board (Waste & Recycling Collections)</span>
            </div>
            <div className="p-6">
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Dispatch board showing a morning collection run: 5 owned collection vehicles on scheduled routes (colour-coded by status — en route, on site, complete), 2 subcontractor haulers on overflow collections shown in sub panel with portal status. Job list on left showing collection type tags: general waste, recycling, C&D, green waste. Document indicator icon showing jobs with transfer note attached vs pending. Collection count at top: "Today: 34 scheduled / 18 complete / 16 in progress". Filter by material stream, by driver, by client service contract.
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
            Common questions from waste and recycling transport operators.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See how HaulageOps fits your waste transport operation.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              A 20-minute demo covers dispatch coordination, subcontractor portal, document management and client service reporting — we'll be direct about where the platform fits your operation and where it does not.
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

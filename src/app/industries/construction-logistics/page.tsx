import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Construction Logistics Management Software | HaulageOps",
  description:
    "Construction logistics operators managing deliveries to active sites with multiple clients, complex rates and subcontractor networks need more than a basic TMS.",
};

const proofStrip = [
  { strong: "Multi-client", label: "dispatch on one board" },
  { strong: "Per-client", label: "rate cards" },
  { strong: "Client portal", label: "per site super" },
  { strong: "Xero", label: "multi-client invoicing" },
  { strong: "Sub portal", label: "no sub licence required" },
  { strong: "2–4 weeks", label: "onboarding" },
];

const breakCards = [
  {
    title: "Dispatching across multiple active clients simultaneously",
    p: "When three clients need deliveries on the same morning and your fleet is at capacity, allocation decisions happen fast. Without a single dispatch view that shows all client jobs alongside available fleet and sub capacity, those decisions get made by memory and phone — and the record of what was decided doesn't exist.",
  },
  {
    title: "Sub coordination when capacity is exceeded",
    p: "When your own trucks are committed, you call sub operators. Without a structured delegation system, you are calling through a contact list, relaying site access instructions verbally, and hoping the sub driver arrives briefed. When the sub delivers late or to the wrong point, the client calls you, not the sub.",
  },
  {
    title: "Different rate cards per client",
    p: "Client A is on $22/tonne for road base. Client B is on $19/tonne for the same material because of a volume commitment. Client C is on a per-load rate. When rate cards live in Excel and invoicing happens in Xero manually, the wrong rate is applied regularly enough to generate invoice disputes. The dispute costs more time to resolve than the original error cost.",
  },
  {
    title: "Site supers expecting real-time delivery confirmation",
    p: "Construction site supervisors run tight programmes. When aggregate for a road base layer is due and the truck hasn't appeared, the super calls. If your dispatcher is managing five other clients' jobs, that call interrupts the work and still doesn't give the super a direct answer. The super wants to know where the truck is without calling anyone.",
  },
  {
    title: "Invoice disputes on deliveries",
    p: "Construction clients query invoices when the load count doesn't match their site record. Without per-delivery POD — a digital docket with timestamp and signature per delivery — disputes are resolved by negotiation rather than evidence. Negotiated disputes either cost you money or cost you the client relationship.",
  },
  {
    title: "Multi-client billing through one accounting system",
    p: "Raising invoices for six clients in Xero, each with different rate structures, each from a different job record — and making sure the right job data goes to the right client invoice — is the manual process that breaks first as the client roster grows. Every time it breaks, someone's invoice is wrong and you find out when they call to query it.",
  },
];

const lifecycle = [
  {
    num: "01",
    title: "Clients set up with their own rate cards",
    p: "Each builder client has their own record in HaulageOps with their rate card — per-tonne, per-load or day rate per material type, with effective dating. When a job is created for that client, the rate is pulled from their card automatically. There is no cross-contamination between clients' rates.",
  },
  {
    num: "02",
    title: "Multi-client dispatch from one board",
    p: "The dispatch board shows all active jobs across all clients, filtered however your dispatcher prefers — by client, by site, by driver, by status. Assigning an owned driver to a job sends a push notification to their phone. Delegating to a sub sends the job to the Subcontractor Portal. Both happen from the same board.",
  },
  {
    num: "03",
    title: "Site access instructions per delivery",
    p: "Each job includes site-specific instructions for the driver — access window, entry point, site contact name and number, any restrictions on vehicle height or weight. Instructions are visible in the driver app before they leave the yard. Site supers stop getting calls from drivers who can't find the access gate.",
  },
  {
    num: "04",
    title: "Digital POD per delivery",
    p: "Every delivery generates a digital POD record — docket photograph, GPS timestamp, and site contact signature captured in the driver app. The POD is attached to the job record immediately. When a client queries a delivery, the evidence is in the system before the call ends.",
  },
  {
    num: "05",
    title: "Client portal — each client sees only their jobs",
    p: "Site supers and project managers log into the Client Portal and see the status of their deliveries, POD documents, and their invoices. They do not see other clients' jobs, your sub details, or your internal costs. RBAC controls access precisely — you can give a site super access to live delivery status only, or give a project manager access to invoices as well.",
  },
  {
    num: "06",
    title: "Invoice per client, sync to Xero",
    p: "At billing time, each client's completed job data is the source for their invoice. Rate is already on the job. Quantities are recorded. The invoice is created in HaulageOps and synced to Xero per client — no manual re-entry, no risk of applying Client A's rate to Client B's invoice. Invoice status (draft, sent, paid, overdue) is visible in HaulageOps and in the client portal.",
  },
];

const modules = [
  {
    title: "Client Portal",
    href: "/platform/client-portal",
    p: "Each construction client gets their own portal login. Site supers see live delivery status for their site. Project managers see job history, POD documents and invoices. Each client's portal is isolated — they cannot see any other client's data. You control what each portal user can access via role-based permissions.",
    bullets: [
      "Live delivery status — site super sees truck ETA without calling",
      "POD documents and dockets accessible per delivery",
      "Invoice history — paid, outstanding, overdue",
      "Client-specific — no cross-client data exposure",
    ],
  },
  {
    title: "Rate Management",
    href: "/platform/rate-management",
    p: "Per-client rate cards mean the correct rate is on the job at creation — not looked up at invoicing time. Different material rates per client, effective dating for rate changes, and separate client charge and sub pay rates eliminate the manual rate-lookup that causes invoice errors.",
    bullets: [
      "Per-client rate card — completely isolated between clients",
      "Per-material-type rates within one client card",
      "Effective dating — rate changes don't affect historical invoices",
      "Separate charge rate (client) and pay rate (sub) per job",
    ],
  },
  {
    title: "Owned & Subcontracted Fleets",
    href: "/solutions/owned-and-subcontracted-fleets",
    p: "Dispatch your owned trucks and your sub network from one board. When owned capacity is committed, delegate to subs via the Subcontractor Portal — they accept, run the delivery, and update status independently. Your clients see a delivery happen; they don't see which operator ran it.",
    bullets: [
      "Owned and sub trucks on one dispatch board",
      "Sub delegation from the same job record",
      "Sub status visible alongside own fleet status",
      "Client portal shows delivery — not who made it",
    ],
  },
  {
    title: "Proof of Delivery",
    href: "/solutions/proof-of-delivery",
    p: "Every construction site delivery generates a POD record — docket photograph, GPS-tagged timestamp, and site contact signature. The POD is in the system before the driver has left the site. When a client queries a delivery, the evidence is accessible in seconds — from the job record or from the client's own portal.",
    bullets: [
      "Docket photo capture at point of delivery",
      "Customer signature on driver's phone",
      "GPS timestamp per delivery event",
      "Stored in Azure — accessible from admin and client portal",
    ],
  },
  {
    title: "Billing & Invoicing",
    href: "/platform/billing-and-invoicing",
    p: "Multi-client billing with Xero sync means each client gets their invoice from their job data at their rate — no manual assembly. Invoice lifecycle (draft, sent, paid, overdue, voided) is tracked in HaulageOps and in Xero. Clients can see their invoice status in the portal.",
    bullets: [
      "Per-client invoice from job data — rate already applied",
      "Xero OAuth2 sync — draft invoices, payment webhooks",
      "Invoice status tracking in HaulageOps and client portal",
      "Invoice dispute resolution backed by digital POD",
    ],
  },
  {
    title: "Subcontractor Portal",
    href: "/platform/subcontractor-portal",
    p: "Construction logistics operators who run sub networks use the Subcontractor Portal for structured delegation. Subs get their own login — free for them, no HaulageOps subscription required. They accept jobs, receive site instructions, update status, and appear on your dispatch board alongside your owned fleet.",
    bullets: [
      "Dedicated sub login — no second licence cost",
      "Site instructions delivered with the job — not by phone",
      "Accept/decline with confirmation record",
      "Sub status live on your dispatch board",
    ],
  },
];

const faqs = [
  {
    q: "How do I handle multiple active construction projects at once?",
    a: "Each construction project and client has its own record in HaulageOps. Jobs are created under the relevant client and project. The dispatch board shows all active jobs across all clients simultaneously — you can filter by client, by site, by driver, or by status depending on what you need to see. Assigning trucks to jobs works the same way regardless of which client the job belongs to. At invoicing time, each client's completed job data feeds their invoice separately — there is no manual split required because the data is already separated at the job level.",
  },
  {
    q: "Can different clients have different portal access levels?",
    a: "Yes. Role-based access control (RBAC) lets you configure what each portal user can see. A site supervisor might get access to live delivery status and POD documents only. A project manager at the same company might additionally get access to invoice history and their rate card. A different client entirely gets their own isolated portal with their own permission configuration. No client can see another client's data — the isolation is enforced at the data level, not just the UI level.",
  },
  {
    q: "How do per-load rates work when delivery sizes vary?",
    a: "Per-load rates apply a fixed charge to each delivery event, regardless of the exact load size. When a client has agreed a per-load rate because their deliveries are consistently truck-capacity loads, this simplifies billing — every completed delivery records one load at the agreed rate. If you have some clients on per-tonne and others on per-load, both rate types are supported in HaulageOps. The rate type is set on the client's rate card and applies to all jobs created for that client unless you override it at the job level for a specific movement.",
  },
  {
    q: "What does the site super see in the client portal?",
    a: "The site supervisor sees the jobs scheduled for their site, the live status of each delivery (job accepted, driver en route, at site, delivered), estimated time of arrival based on GPS tracking, and POD records for completed deliveries. They can see what has been delivered, with timestamps and docket evidence, without calling the office. They do not see other clients' work, your sub details, internal costs, or rate information unless you have specifically configured their access to include rate visibility.",
  },
  {
    q: "How do I manage subcontractor overflow when my fleet is committed across multiple clients?",
    a: "From the dispatch board, when all owned trucks are allocated, you delegate overflow jobs to your subcontractor network via the Subcontractor Portal. Sub companies see the delegated job in their portal queue, accept it, and their drivers receive the job including site access instructions. Status updates from sub drivers appear on your dispatch board alongside your own fleet. The client's portal shows a delivery event — it does not identify whether the delivery was made by your driver or a sub driver. You control what client-facing information is surfaced.",
  },
  {
    q: "How does Xero invoicing work when I have six clients to bill?",
    a: "Each client's invoice is created from their completed job data in HaulageOps — quantity, rate and any additional charges already recorded at the job level. When you initiate billing, invoices are generated per client (not one combined invoice) and synced to Xero via OAuth2. Each invoice appears in Xero as a separate invoice against the corresponding customer contact. Payment status in Xero feeds back to HaulageOps via webhook so you can see payment status per client in the system without switching back and forth between platforms.",
  },
  {
    q: "Is HaulageOps appropriate for a construction logistics company managing 20–40 trucks?",
    a: "Yes. The target operator profile for HaulageOps is 15 to 80 vehicles — a mix of owned trucks and subcontracted capacity — running in bulk haulage and construction logistics. A construction logistics company with 20 to 40 owned and subcontracted trucks, multiple concurrent builder clients, varied material types, and per-client rate structures is exactly the profile the platform is built for. It is not designed for parcel delivery, 3PL warehousing, or freight forwarding — that narrowness means every feature in the platform has a direct application to construction logistics operations.",
  },
];

const relatedCards = [
  {
    title: "Civil Construction",
    href: "/industries/civil-construction",
    p: "If your work is primarily under principal contractors on defined civil projects — rather than multi-client open logistics — the civil construction page covers that structure including compliance and audit requirements.",
  },
  {
    title: "Bulk Haulage",
    href: "/industries/bulk-haulage",
    p: "If per-tonne billing, high-frequency short cycles, and docket management are the core operational challenge, the bulk haulage page covers that in detail including the full dispatch-to-invoice workflow.",
  },
  {
    title: "Client Portal",
    href: "/platform/client-portal",
    p: "The detailed breakdown of what the Client Portal shows each construction client — live delivery status, POD records, invoices — and how RBAC controls access per portal user.",
  },
  {
    title: "Owned & Subcontracted Fleets",
    href: "/solutions/owned-and-subcontracted-fleets",
    p: "Managing a mixed fleet for construction logistics — owned trucks as core capacity, sub operators for overflow — from one dispatch board without separate coordination systems for each.",
  },
];

export default function ConstructionLogisticsPage() {
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
            <span className="text-[#0F172A] font-medium">Construction Logistics</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Construction Logistics
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Construction logistics is too complex for a generic transport system.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Multiple concurrent projects, multiple clients with different rate structures, active construction sites with access restrictions, subcontractor overflow, and every site super expecting a call when the truck is five minutes away — construction logistics needs a system built for that reality, not a horizontal TMS with a construction filter applied.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/solutions/owned-and-subcontracted-fleets">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Owned &amp; Sub Fleets
              </Button>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-300 fill-mode-both">
            {["Multi-client dispatch", "Per-client rate cards", "Client portal per site contact", "Subcontractor overflow"].map((pill) => (
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
                <strong className="text-white text-2xl font-bold">{item.strong}</strong>
                <span className="text-[#94A3B8] text-xs uppercase tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT CONSTRUCTION LOGISTICS ACTUALLY INVOLVES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What Construction Logistics Actually Involves</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Multiple clients, multiple sites, multiple rate structures — running simultaneously
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                Construction logistics is not civil construction from the operator&apos;s perspective. Where civil construction operators typically work under one or two principal contractors at a time, a construction logistics operator is running deliveries for five or ten construction clients concurrently — different builders, different projects, different sites, different material types, and different rate agreements with each.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Active construction sites add a layer of operational complexity that general TMS tools are not built for. Sites have access restrictions — time windows, vehicle height limits, one-way access roads, marshalling requirements. A delivery that arrives outside the access window holds up the programme and creates friction with the site super. That friction becomes a client relationship problem. The site super expects the driver to arrive correctly briefed on site access, not to call the office from the gate.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Material types in construction logistics are also diverse within a single day&apos;s dispatch. One truck might deliver aggregate to a road base layer in the morning and collect concrete washout from a different site in the afternoon. Another might deliver drainage pipe bedding material at 7am and run fill to a slab preparation later. Managing the rate implications of different material types, different clients, and different billing models across a day of varied dispatch requires a system that holds all of it — not separate spreadsheets per client.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#0F172A] mb-4">Construction logistics operational characteristics</h3>
              <ul className="space-y-3 text-[#475569] text-sm leading-relaxed">
                {[
                  "Multiple concurrent projects for different builder clients",
                  "Active construction sites with access windows and restrictions",
                  "Multiple material types: aggregates, fill, concrete washout, waste, formwork material",
                  "Different rate structures per client — some on per-tonne, some per-load, some day rate",
                  "Client contacts (site supers) expecting real-time delivery confirmation",
                  "Owned fleet as core capacity, sub operators for overflow or specialist work",
                  "Invoice disputes most common when POD evidence is not per-delivery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="font-bold text-[#0F172A] mt-8 mb-4">The billing challenge</h3>
              <p className="text-[#475569] text-sm leading-relaxed">
                When you have six active clients, each with a different rate card, and each day&apos;s dispatch mixes client jobs across your fleet, the invoicing process at week&apos;s end is where errors accumulate. A rate applied to the wrong client, a load count off by one, a delivery billed at last month&apos;s rate — each is small individually and expensive collectively when clients catch them and lose confidence in your billing accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE CONSTRUCTION LOGISTICS OPERATIONS BREAK DOWN */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Where Construction Logistics Operations Break Down</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The specific failure points that make generic TMS tools inadequate for construction logistics
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breakCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HAULAGEOPS FOR CONSTRUCTION LOGISTICS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">HaulageOps for Construction Logistics</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Multi-client dispatch, per-client rates, client self-service, and Xero — in one operation
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

          {/* Multi-client dispatch board mockup */}
          <div className="mt-12 rounded-2xl bg-[#0D1525] border border-[#1E293B] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 bg-[#1E293B]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E8652B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#94A3B8]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
              <span className="ml-3 text-xs font-semibold text-[#CBD5E1]">HaulageOps — Multi-Client Construction Logistics Dispatch Board</span>
            </div>
            <div className="p-6">
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Screenshot: Admin Panel dispatch board in multi-client view. Left column: job list showing 8 active jobs across 4 clients (client names colour-coded). Each job shows: client name, site address, material type, rate type (per tonne / per load), assigned driver or sub, current status (en route / at site / delivered). Filter bar at top: &quot;All clients&quot; dropdown currently showing all. Right side: map with 6 truck positions marked — 4 own trucks (blue pins), 2 sub trucks (orange pins). One selected job highlighted: driver name, ETA displayed as &quot;12 minutes&quot;, last POD photo thumbnail visible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELEVANT PLATFORM FEATURES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Relevant Platform Features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The features construction logistics operators use most in HaulageOps
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((card) => (
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
                  {card.title} details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently Asked Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Construction logistics questions about HaulageOps
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

      {/* RELATED PAGES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related Pages</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Related industries and features for construction logistics operators
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

      {/* CTA BAND */}
      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See how HaulageOps handles multi-client construction logistics</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              20-minute demo: multi-client dispatch board, per-client rate cards, site super portal access, subcontractor delegation, digital POD, and Xero invoicing per client — shown as one connected operation.
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
    </MainLayout>
  );
}

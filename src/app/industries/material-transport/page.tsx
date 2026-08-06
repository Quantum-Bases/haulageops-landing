import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Material Transport Management Software | HaulageOps",
  description:
    "Material transport operators managing high-volume deliveries, per-tonne billing and subcontractor networks need a connected TMS, not another spreadsheet.",
};

const proofStrip = [
  { strong: "Rate cards", label: "per client, material and destination" },
  { strong: "Dispatch board", label: "owned drivers and sub drivers together" },
  { strong: "Digital docket", label: "per load, photo and tonnage captured on app" },
  { strong: "Sub portal", label: "free for all your subcontractor drivers" },
  { strong: "Client portal", label: "delivery status and invoices self-service" },
  { strong: "Xero", label: "invoice from completed deliveries same day" },
];

const characteristics = [
  {
    title: "High-volume deliveries to multiple points",
    p: "Material deliveries typically involve multiple loads to multiple delivery addresses for multiple clients in a single day. A landscaping supplies business might have eight to fifteen deliveries running simultaneously across owned trucks and sub drivers. Keeping track of what was delivered where, by whom and at what weight requires a system, not a spreadsheet.",
    bullets: [
      "Multiple delivery points per driver per day",
      "Google Maps address autocomplete for fast job creation",
      "Job history by client, material type and delivery location",
    ],
  },
  {
    title: "Volume-based billing across material types",
    p: "Material transport billing is typically per-tonne or per-load, with rates varying by material type, client contract and destination distance. A single account might carry per-tonne rates for aggregate, per-load rates for topsoil, and fixed-price rates for specific contract clients. HaulageOps rate cards handle all of these in one system.",
    bullets: [
      "Per-tonne, per-load and fixed-fee structures simultaneously",
      "Rate cards per client with material-type variants",
      "Effective dating for seasonal and contract rate changes",
    ],
  },
  {
    title: "Sub drivers when own fleet is at capacity",
    p: "Material transport operators frequently supplement their owned fleet with subcontractor drivers during peak periods, large orders or when a regular driver is unavailable. Bringing in subs without losing visibility of delivery status — or spending the morning on the phone — is exactly what the subcontractor portal addresses.",
    bullets: [
      "Sub drivers receive jobs through dedicated portal login",
      "Accept/decline, status updates and docket submission from mobile",
      "Separate sub pay rates tracked against each delivery job",
    ],
  },
  {
    title: "Clients who want delivery proof",
    p: "Landscape contractors, builders and civil contractors receiving material deliveries increasingly want more than a paper docket handed at the gate. They want delivery confirmation, tonnage records and invoices they can access without calling. The client portal gives each client a self-service view of their jobs, dockets and invoices.",
    bullets: [
      "Client portal login for each client — no cost to them",
      "Live delivery status, docket download and invoice access",
      "Client-specific rate cards visible in portal",
    ],
  },
];

const challenges = [
  {
    title: "Managing sub drivers without losing track of deliveries",
    paras: [
      "When your own fleet is at capacity and you bring in sub drivers, the question is always: have they delivered, what did they deliver, and did the client sign off? Paper dockets texted as photos or handed in at end of week are a common answer — but they create re-entry work and delay the invoicing cycle.",
      "Sub drivers in HaulageOps submit digital dockets through the subcontractor portal immediately after each delivery. The docket — photo, signature, tonnage, timestamp — is attached to the job record as it happens, not reconstructed later.",
    ],
  },
  {
    title: "Different rates across a large client portfolio",
    paras: [
      "Material transport operators with multiple clients quickly run into complexity managing different rates for different materials, different destinations, and different pricing structures per client. A spreadsheet rate table works until it has forty rows and a price change needs to ripple through active jobs.",
      "HaulageOps rate cards store each client's rate structure — per material, per destination, per billing type — and apply them automatically when a job is created against that client. Effective dating means rate changes go live on the right date without manual updates to existing scheduled jobs.",
    ],
  },
  {
    title: "Invoice delays from docket backlog",
    paras: [
      "Material transport operations that collect paper dockets generate a backlog that delays invoicing by days or weeks. The time between a delivery and an invoice represents cash sitting uncollected. Digital dockets submitted at the point of delivery mean the invoice can go out the same day the deliveries complete.",
      "The docket is already attached when you invoice. Jobs completed today can be invoiced today. Xero receives the invoice immediately. The gap between delivery and payment starts closing the moment the driver submits their docket in the field.",
    ],
  },
];

const lifecycle = [
  {
    num: "1",
    title: "Create delivery jobs with rate cards pre-applied",
    p: "Jobs are created against a client, material type and delivery address. The applicable rate card applies automatically. Google Maps address autocomplete speeds up delivery point entry for unfamiliar addresses.",
  },
  {
    num: "2",
    title: "Assign to owned drivers and sub drivers",
    p: "The dispatch board shows available owned drivers alongside confirmed sub drivers. Jobs are assigned and dispatched. Sub drivers receive job notification through the portal. Owned drivers receive it through the driver app.",
  },
  {
    num: "3",
    title: "Track deliveries as they happen",
    p: "GPS position and job status update in real time on the dispatch board. Clients who have portal access can see delivery status themselves. Your dispatcher has one view for the full fleet — owned and sub.",
  },
  {
    num: "4",
    title: "Digital docket captured at delivery",
    p: "The driver captures the docket through the app or sub portal — tonnage, delivery photo, client signature if required. Stored against the job record immediately. No paper, no re-entry required at the office.",
  },
  {
    num: "5",
    title: "Invoice from completed deliveries",
    p: "Pull completed delivery jobs by client, generate the invoice with dockets attached, push to Xero. Clients can access their invoices through the portal. Payment status syncs back from Xero in real time.",
  },
  {
    num: "6",
    title: "Reporting by client, material and driver",
    p: "Job history and financial reports by client, material type, driver and period. Management reporting gives visibility across the operation without building a separate reporting spreadsheet.",
  },
];

const capabilities = [
  {
    title: "Rate management — per material and per client",
    href: "/platform/rate-management",
    p: "The rate management system stores rate cards per client, with material-type variants and effective dating for contract changes. Per-tonne, per-load, hourly and fixed-fee structures all run in the same account. The correct rate applies automatically when a job is created against a client and material type — no manual rate lookup required.",
    bullets: [
      "Rate cards by client with material and destination variants",
      "Effective dating for seasonal and contract rate changes",
      "Separate client charge rate and subcontractor pay rate per job",
    ],
  },
  {
    title: "Subcontractor portal for sub drivers",
    href: "/platform/subcontractor-portal",
    p: "The subcontractor portal is a dedicated web login for your sub drivers. They receive job assignments, view Mapbox maps for pick-up and delivery locations, update job status, and submit digital dockets — all without needing to be a paying HaulageOps customer. Your sub drivers access it at no cost.",
    bullets: [
      "Sub drivers access portal free — no separate licence required",
      "Job queue, accept/decline, status updates from mobile browser",
      "Mapbox maps for pick-up and delivery routing",
    ],
  },
  {
    title: "Dispatch board — all drivers, one view",
    href: "/platform/dispatch-management",
    p: "The dispatch board shows owned drivers and subcontractor drivers together in a single real-time view. Job status updates via the driver app and sub portal appear immediately. GPS positions are tracked via phone-based location — no hardware telematics required. Reassignment is handled from the board as the day develops.",
    bullets: [
      "Live job status across owned and sub drivers",
      "Phone-based GPS — no additional hardware needed",
      "Reassignment and job modification from the dispatch board",
    ],
  },
  {
    title: "Client portal — delivery visibility and invoices",
    href: "/platform/client-portal",
    p: "The client portal gives each of your clients a dedicated login to view their delivery status, download completed dockets, access invoices and check outstanding balances. Clients who want to track whether a load is on the way do not need to call your office. Their view is limited to their own jobs and invoices — no cross-client data is visible.",
    bullets: [
      "Client-specific login — each client sees only their jobs",
      "Live delivery status, job history, docket and invoice download",
      "No cost to clients — included in your HaulageOps subscription",
    ],
  },
];

const faqs = [
  {
    q: "We deliver multiple material types to the same client at different rates. Can HaulageOps handle that?",
    a: "Yes. Rate cards in HaulageOps are set per client and can include multiple material-type variants within the same card. When you create a job for that client, you select the material type and the applicable rate applies automatically. You can have per-tonne rates for bulk materials and per-load rates for bagged or unit products all on the same client rate card.",
  },
  {
    q: "Our sub drivers use their own vehicles — do they need any special setup to use the portal?",
    a: "No. The subcontractor portal is a web-based login that works in any mobile browser. Sub drivers access it at a URL you share with them, log in with credentials you create for them in HaulageOps, and receive their jobs directly. They do not need to download an app or have any HaulageOps account of their own. Setting up a new sub driver takes a few minutes in the admin panel.",
  },
  {
    q: "Can we give clients visibility of their deliveries in progress without them calling us?",
    a: "Yes. The client portal gives each client a dedicated login showing their live job status, job history, dockets and invoices. When a client wants to know if their delivery is on the way, they check the portal. When they want to download a delivery docket for their own records, they access it from the portal. This reduces inbound calls to your dispatch team significantly.",
  },
  {
    q: "We invoice weekly for some clients and daily for others. Can HaulageOps accommodate both?",
    a: "Yes. Invoicing frequency is not constrained by the system — you can generate invoices from completed jobs at any point. Daily invoicing pulls today's completed deliveries for a client and generates the invoice. Weekly invoicing pulls the week's completed jobs. The billing workflow is the same in both cases — only the frequency and the date range you select changes.",
  },
  {
    q: "Does HaulageOps integrate with MYOB or only with Xero?",
    a: "Xero is the standard integration with native OAuth2 sync and real-time payment webhooks. MYOB integration is available as an add-on subject to scope — raise this in your demo conversation if MYOB is your accounting system. HaulageOps billing and invoicing works independently of any accounting integration — you can manage the full invoice lifecycle inside the platform and export manually if needed.",
  },
  {
    q: "We're a quarry supplying materials — is this the right page, or is Quarries & Aggregates more relevant?",
    a: "The Quarries & Aggregates page covers the quarry-side dispatch operation — scheduling outbound loads from a fixed production site and managing delivery scheduling. Material Transport applies if you are the haulage business delivering material rather than the quarry dispatching product. Both workflows use the same HaulageOps platform — the distinction is which operation you sit in.",
  },
];

const relatedCards = [
  {
    title: "Bulk Haulage",
    href: "/industries/bulk-haulage",
    p: "Multi-client bulk haulage operations — the primary design context for HaulageOps. Per-tonne billing, subcontractor networks and docket-to-invoice workflows.",
  },
  {
    title: "Quarries & Aggregates",
    href: "/industries/quarries-and-aggregates",
    p: "Quarry and aggregate operations managing outbound load scheduling, client order fulfilment and delivery coordination from a fixed production site.",
  },
  {
    title: "Rate Management",
    href: "/platform/rate-management",
    p: "How HaulageOps handles per-tonne, per-load, hourly and fixed-fee rate cards across multiple clients, material types and billing structures.",
  },
  {
    title: "Haulage Dispatch",
    href: "/solutions/haulage-dispatch",
    p: "The dispatch coordination solution — how the dispatch board, driver app and subcontractor portal work together across an owned and sub fleet.",
  },
];

export default function MaterialTransportPage() {
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
            <span className="text-[#0F172A] font-medium">Material Transport</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Material Transport
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Material transport at volume needs more than a tracking sheet.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            High-volume material deliveries — aggregate, topsoil, landscaping supply, construction fill — generate the same operational challenges as bulk haulage: per-tonne billing, multiple delivery points per day, subcontractor drivers when your own fleet is at capacity, and dockets that need to close into invoices quickly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/rate-management">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Rate Management
              </Button>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-300 fill-mode-both">
            {["Per-tonne and per-load rate cards", "Subcontractor portal — no extra licences", "Digital dockets per delivery", "Client portal for delivery visibility"].map((pill) => (
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

      {/* WHAT MATERIAL TRANSPORT INVOLVES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What Material Transport Involves</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The operational pattern of a material transport business.
          </h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Material transport operators deliver bulk construction materials — aggregate, topsoil, sand, gravel, recycled fill, landscaping products — across multiple clients and delivery points every day. The billing structures, docket requirements and subcontractor patterns of this work map directly onto what HaulageOps was built for.
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

      {/* COMMON CHALLENGES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common Challenges</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Where material transport operations run into trouble.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                {card.paras.map((p) => (
                  <p key={p} className="mt-3 text-sm text-[#475569] leading-relaxed">{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HAULAGEOPS FOR MATERIAL TRANSPORT */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">HaulageOps for Material Transport</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            How HaulageOps handles the material transport workflow.
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
            The HaulageOps features that apply directly to material transport.
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
            Material transport rate management in HaulageOps.
          </h2>
          <div className="mt-8 rounded-2xl bg-[#0D1525] border border-[#1E293B] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 bg-[#1E293B]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E8652B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#94A3B8]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
              <span className="ml-3 text-xs font-semibold text-[#CBD5E1]">HaulageOps — Rate Management (Material Transport Client)</span>
            </div>
            <div className="p-6">
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Rate card screen for a landscaping supplies client showing material-type pricing table: crushed aggregate (per tonne), decorative pebbles (per load), topsoil (per tonne), sand (per tonne), recycled fill (per tonne). Each row shows current rate, effective from date, and an edit action. Below the table: subcontractor pay rate column showing separate rates for sub drivers on each material type. At bottom: rate history log showing previous rates with effective and expiry dates. Add new rate button and effective date picker visible at top right.
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
            Common questions from material transport operators.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See how HaulageOps fits your material transport operation.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              A 20-minute demo covers rate card setup, subcontractor portal, digital docket workflow and Xero invoicing — in the context of how a material transport business actually runs, not a generic product tour.
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

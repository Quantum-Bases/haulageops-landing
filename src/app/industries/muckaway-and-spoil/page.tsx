import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Muckaway and Spoil Removal Operations | HaulageOps",
  description:
    "Muckaway and spoil removal operators managing excavation contracts, tipper allocation and tip site coordination need a dispatch system that handles the pace and complexity.",
};

const proofStrip = [
  { strong: "Job templates", label: "replicate recurring muckaway loads fast" },
  { strong: "Sub tipper portal", label: "free — no extra licences required" },
  { strong: "Docket per load", label: "captured at tip, photo and tonnage" },
  { strong: "Live GPS", label: "own and sub tippers on one board" },
  { strong: "Per-load billing", label: "and per-tonne structures supported" },
  { strong: "Xero", label: "contractor invoice from completed job records" },
];

const characteristics = [
  {
    title: "High-speed excavation removal",
    p: "A busy muckaway contract might run a tipper every ten to fifteen minutes from a single excavation. Over a full day across multiple contracts, the number of individual load records, dockets and tip confirmations adds up quickly. A system designed for one or two loads per truck per day cannot keep up with this pace without creating a paperwork backlog by midmorning.",
    bullets: [
      "Job templates for recurring excavation site + tip combinations",
      "Multiple load records per truck per day without manual re-entry",
      "Digital docket captured at tip — timestamped and geotagged",
    ],
  },
  {
    title: "Multiple excavation contracts simultaneously",
    p: "Most muckaway operators run multiple active contracts at the same time — different client sites, different tip sites, different tip materials, different billing rates. Coordinating drivers and sub tippers across all of these from a single dispatch point, while maintaining per-load traceability on each, requires a dispatch board that handles multi-site operations without needing a separate system per site.",
    bullets: [
      "Dispatch board shows all active contracts and sites in one view",
      "Jobs tagged by client, site and tip destination",
      "Separate rate structures per contract — per load or per tonne",
    ],
  },
  {
    title: "Sub tippers for surge capacity",
    p: "Muckaway contracts frequently require more tipper capacity than an owned fleet can supply — particularly when excavation pace increases or multiple contracts hit a surge at the same time. Bringing in sub tippers needs to be fast, and visibility of their work needs to be maintained once they go offsite to the tip. Phone calls and WhatsApp are not a coordination system.",
    bullets: [
      "Sub tippers receive jobs through the subcontractor portal",
      "Status updates and docket submission via portal mobile login",
      "Live GPS position on the dispatch board — no phone calls needed",
    ],
  },
  {
    title: "Per-load verification at tip",
    p: "Muckaway billing depends on load counts and tonnage verified at the tip site. The docket is the proof of what was tipped, when and by whom. Paper dockets work until they go missing, get wet, or arrive three days later. Digital dockets submitted by the driver at the point of tipping remove all three of those failure modes.",
    bullets: [
      "Driver submits docket at tip through driver app or sub portal",
      "Photo, tonnage and timestamp stored against the load record",
      "Docket available to review and invoice against immediately",
    ],
  },
];

const challenges = [
  {
    title: "Coordinating multiple dig sites and tip sites",
    paras: [
      "A muckaway operator running three active excavation contracts might have trucks cycling between four different dig sites and three tip sites — each with different clients, different billing rates and different tip acceptance requirements. Managing this across a whiteboard or a spreadsheet creates allocation errors, missed loads and invoicing disputes when the load count does not match the tip site records.",
      "The HaulageOps dispatch board shows every active job, every driver and every site in a single view. Jobs are tagged by site, so load counts per excavation contract are tracked automatically as drivers submit dockets.",
    ],
  },
  {
    title: "Losing visibility of sub tippers at the tip",
    paras: [
      "Sub tippers are most opaque at the tip site — the point where load verification matters most. Without a digital docket workflow, you rely on the sub tipper to accurately report what was tipped and when. That relies on trust and memory, neither of which is an audit trail.",
      "The subcontractor portal requires the sub tipper driver to submit a docket at each tip — photo of the tipped load, tonnage, timestamp and tip location. That submission is attached to the job record immediately and visible to your dispatch team in real time.",
    ],
  },
  {
    title: "Invoicing contractor clients accurately",
    paras: [
      "Muckaway contractors invoice by load count or by tonnage, sometimes both — and disputes arise when the client's own count does not match yours. Digital dockets with timestamps and photos create an auditable record that both sides can reference. Invoice disputes become verifiable rather than based on recollection.",
      "Invoices in HaulageOps are generated from completed job records. The docket is already attached. The load count and tonnage are already in the system. The invoice matches the docket record exactly.",
    ],
  },
];

const lifecycle = [
  {
    num: "1",
    title: "Create jobs from excavation site templates",
    p: "Set up a job template for each active excavation contract — dig site, tip site, billing rate. Creating a new load for the day takes seconds. Multiple loads of the same type are bulk-created against the template.",
  },
  {
    num: "2",
    title: "Assign to owned and sub tippers",
    p: "Allocate loads to owned drivers and sub tippers from the dispatch board. Sub tippers receive their assignments through the subcontractor portal. Acceptance confirmation is visible on the board immediately.",
  },
  {
    num: "3",
    title: "Track loads between dig and tip",
    p: "GPS tracking shows each tipper's position in real time. Status updates — loaded, in transit, tipping, returning — appear on the dispatch board as drivers update in the app or sub portal.",
  },
  {
    num: "4",
    title: "Digital docket at every tip",
    p: "Driver submits the docket at the tip site — photo, tonnage, timestamp. The docket is stored against the load record immediately. Load count and tonnage accumulate automatically against the excavation contract job record.",
  },
  {
    num: "5",
    title: "Invoice contractor from job records",
    p: "Pull the completed loads for a contract period, review the docket-backed load count and tonnage, generate the invoice. The docket evidence is attached. Disputes have an auditable record to reference.",
  },
  {
    num: "6",
    title: "Xero sync for payment tracking",
    p: "Invoice pushes to Xero and payment status syncs back via real-time webhook. Paid and outstanding invoices visible in HaulageOps without switching between systems.",
  },
];

const capabilities = [
  {
    title: "Subcontractor portal — sub tipper coordination",
    href: "/platform/subcontractor-portal",
    p: "The subcontractor portal gives each of your sub tippers a dedicated mobile login. They see their job queue, accept or decline assignments, view Mapbox maps for dig site and tip site locations, update status at each stage, and submit digital dockets at the tip. Sub tippers do not pay for portal access — only the operating company holds the HaulageOps subscription.",
    bullets: [
      "Sub tippers access portal free — no separate licence required",
      "Accept/decline, status updates, docket submission from mobile browser",
      "Mapbox maps for dig site and tip site routing",
    ],
  },
  {
    title: "Digital dockets — per load at tip",
    href: "/solutions/digital-dockets",
    p: "The digital docket workflow captures proof at the point of tipping: photo of the load, tonnage confirmation, GPS location of the tip site, and timestamp. This is stored in Azure Blob Storage against the load record and is available immediately for review, client reporting and invoice generation. No paper dockets to collect, photograph or re-enter.",
    bullets: [
      "Photo, tonnage and timestamp at tip submission",
      "Stored in Azure Blob Storage — accessible from admin panel",
      "Docket attached to invoice automatically on generation",
    ],
  },
  {
    title: "Dispatch board — multi-site muckaway view",
    href: "/platform/dispatch-management",
    p: "The dispatch board shows all active excavation jobs across all sites in a single real-time view. Filter by site, by contract or by driver. Load count per contract accumulates live as dockets are submitted. GPS positions of owned and sub tippers visible simultaneously. No secondary tracking system required.",
    bullets: [
      "Multi-site view with filter by contract or site",
      "Real-time load count accumulating per contract",
      "Live GPS — owned and sub tippers in one view",
    ],
  },
  {
    title: "Job-to-invoice for contractor billing",
    href: "/solutions/job-to-invoice",
    p: "The job-to-invoice workflow generates invoices directly from completed job records — the load count, tonnage and applicable rate are already in the system from the job records and dockets. The invoice matches the docket record. Disputes have a timestamped, photo-backed load history to reference rather than a spreadsheet count.",
    bullets: [
      "Invoice generated from completed load records directly",
      "Docket package included with invoice for client reference",
      "Xero integration for payment tracking and reconciliation",
    ],
  },
];

const faqs = [
  {
    q: "Can I track load counts per excavation contract separately from total fleet activity?",
    a: "Yes. Jobs in HaulageOps are created against a specific client and contract. Load records accumulate against that contract job. The dispatch board can be filtered by contract to show the running load count and total tonnage for a specific excavation job. At invoice time, the load count and tonnage for that contract are already in the system — no reconciliation of a separate tally sheet required.",
  },
  {
    q: "We run tip sites with specific acceptance requirements — how does documentation work?",
    a: "Document management in HaulageOps allows you to attach site-specific documentation to job records — tip site acceptance letters, environmental permits, waste classification records. These are stored in Azure Blob Storage against the job and accessible to drivers through the app. The digital docket submitted at tip is a separate capture — photo, tonnage and timestamp — that serves as per-load evidence of disposal.",
  },
  {
    q: "How do sub tipper rates work when I'm billing the client per load?",
    a: "Each job in HaulageOps carries two rate structures: the client charge rate (what you invoice the client) and the subcontractor pay rate (what you pay the sub tipper). Both are managed in the rate management system independently. When you invoice the client per load, the system uses the client rate. What you owe the sub tipper is tracked separately using the sub pay rate. Your margin per load is visible in reporting without manual calculation.",
  },
  {
    q: "We sometimes need to redirect a tipper to a different tip site mid-day — how is that handled?",
    a: "From the dispatch board, you can modify a live job to update the tip site destination. The driver receives the updated job details through a push notification on the driver app (Firebase FCM). If the tip site change also changes the applicable billing rate, the job can be updated to the correct rate before the docket is submitted. Changes to job details are logged in the audit trail with timestamp and user record.",
  },
  {
    q: "Can clients see the load count and dockets for their excavation contract in real time?",
    a: "Yes. The client portal gives each client a dedicated login to view job status, load history and dockets for their contracts. An excavation contractor who wants to know how many loads have moved today without calling your dispatcher can check the portal. Dockets are downloadable from the portal for the client's own site records.",
  },
  {
    q: "We also do tipper hire work alongside muckaway contracts — can both run in the same account?",
    a: "Yes. The same HaulageOps account handles both muckaway contracts (per-load and per-tonne billing) and tipper hire (typically hourly billing) simultaneously. Different rate structures apply per client and job type. The tipper fleets page covers the high-churn daily dispatch side of tipper hire operations — most operators running both will recognise their operation across both pages.",
  },
];

const relatedCards = [
  {
    title: "Earthworks",
    href: "/industries/earthworks",
    p: "Earthworks operators managing cut-and-fill, excavation removal and site materials across multiple active contracts — with both owned plant and subcontractor tippers.",
  },
  {
    title: "Tipper Fleets",
    href: "/industries/tipper-fleets",
    p: "High-churn tipper operations running multiple jobs per day across owned trucks and sub tippers — covering dispatch, docket and end-of-day invoicing at pace.",
  },
  {
    title: "Subcontractor Portal",
    href: "/platform/subcontractor-portal",
    p: "The dedicated portal for sub tippers — job queue, accept/decline, Mapbox maps, status updates and digital docket submission from any mobile browser.",
  },
  {
    title: "Digital Dockets",
    href: "/solutions/digital-dockets",
    p: "How digital docket capture works in the driver app and sub portal — photo, tonnage, signature and timestamp, stored against the load record and attached to invoices.",
  },
];

export default function MuckawaySpoilPage() {
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
            <span className="text-[#0F172A] font-medium">Muckaway & Spoil Removal</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Muckaway & Spoil Removal
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Muckaway operations move fast. Your dispatch system needs to keep up.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Excavation removal runs at the pace of the digger. Multiple loads per hour, multiple sites running simultaneously, subcontractor tippers supplementing your owned fleet, and per-load verification at the tip — muckaway operations need dispatch and docket management that matches the pace, not a spreadsheet you update after the fact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/subcontractor-portal">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Subcontractor Portal
              </Button>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-300 fill-mode-both">
            {["Rapid job creation from templates", "Sub tipper portal — real-time visibility", "Digital docket per load at tip", "Job-to-invoice for contractor billing"].map((pill) => (
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

      {/* MUCKAWAY CHARACTERISTICS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Muckaway Characteristics</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            What makes muckaway operations distinctly demanding.
          </h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Muckaway and spoil removal sits at the high-intensity end of tipper operations. The pace is set by excavation progress, not by your dispatch schedule — and the coordination complexity grows fast when you're running multiple excavation contracts simultaneously.
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
            Where muckaway operations break down without the right system.
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

      {/* HAULAGEOPS FOR MUCKAWAY */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">HaulageOps for Muckaway</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            How HaulageOps handles the muckaway and spoil removal workflow.
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
            The HaulageOps features muckaway operators rely on.
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
            Muckaway dispatch board in HaulageOps.
          </h2>
          <div className="mt-8 rounded-2xl bg-[#0D1525] border border-[#1E293B] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 bg-[#1E293B]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E8652B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#94A3B8]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
              <span className="ml-3 text-xs font-semibold text-[#CBD5E1]">HaulageOps — Dispatch Board (Muckaway Multi-Site View)</span>
            </div>
            <div className="p-6">
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Dispatch board showing two active muckaway contracts side by side. Left panel: Contract A (basement excavation, City Road site) — 6 loads dispatched, 4 tipped and docketed, 2 in transit shown with GPS position. Right panel: Contract B (infrastructure dig, Highway site) — 4 loads dispatched, 2 tipped, 2 loading. Sub tipper section showing 3 sub drivers: 2 active with status, 1 returning from tip. Load counter at top of each contract panel showing running total: "Contract A: 42 loads today / 18.6 tonnes". Filter controls: by site, by driver, by contract status.
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
            Common questions from muckaway and spoil removal operators.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See muckaway dispatch and docket management in a 20-minute demo.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              We'll show the multi-site dispatch board, sub tipper portal, per-load digital docket capture and job-to-invoice workflow — in the context of how a muckaway and spoil removal operation actually runs.
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

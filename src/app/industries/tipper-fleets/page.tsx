import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Tipper Fleet Management Software | HaulageOps",
  description:
    "Manage tipper fleet operations — high job churn, driver allocation, subcontractor tippers, per-tonne and hourly billing, digital dockets and Xero invoicing.",
};

const proofStrip = [
  { strong: "Job templates", label: "replicate recurring loads in seconds" },
  { strong: "Sub portal", label: "free for all your sub tippers" },
  { strong: "Digital docket", label: "per load, attached to invoice automatically" },
  { strong: "Per-tonne + hourly", label: "billing structures built in" },
  { strong: "Xero sync", label: "invoice from completed jobs same day" },
  { strong: "Live GPS", label: "owned and sub tippers on one dispatch board" },
];

const characteristics = [
  {
    title: "Multiple jobs per truck per day",
    p: "A tipper running earthworks or aggregate delivery might complete three to five loads before midday. Each load is a separate job with its own pick-up point, tip or delivery destination, tonnage and docket. Managing this pace on a whiteboard or a spreadsheet creates a bottleneck that grows every day.",
    bullets: [
      "Job templates for recurring load types — create in seconds",
      "Each load gets its own job record, docket and status",
      "Driver app shows the next job the moment the current one closes",
    ],
  },
  {
    title: "Mix of owned tippers and sub tippers",
    p: "Most tipper operators run their own fleet to a base capacity and bring in subcontractor tippers for peak demand, large contracts or specialist loads. Coordinating subs without losing visibility — or spending the morning on the phone — is the core operational challenge the subcontractor portal solves.",
    bullets: [
      "Sub tippers get a dedicated portal login at no cost to them",
      "Job acceptance, status updates and docket submission via the portal",
      "Separate sub pay rates alongside client charge rates per job",
    ],
  },
  {
    title: "Per-tonne and hourly billing",
    p: "Tipper fleet billing mixes per-tonne, per-load and hourly structures depending on the client contract and job type. HaulageOps rate cards handle all three simultaneously — the correct rate applies automatically when a job is created against a client, and the invoice generates from the completed job record without manual calculation.",
    bullets: [
      "Rate cards per client, job type and material",
      "Per-tonne, per-load and hourly structures in the same account",
      "Effective dating for rate changes and contract renewals",
    ],
  },
  {
    title: "A docket for every load",
    p: "Dockets are the audit trail of tipper operations — they prove what was loaded, what was tipped, when and where. In the driver app, the driver captures a digital docket per load including photo evidence, customer signature and tonnage confirmation. The docket is attached to the job record and ready when you invoice.",
    bullets: [
      "Driver captures digital docket on iOS or Android app",
      "Photo, signature and tonnage all stored against the load",
      "Docket attached automatically when the invoice is generated",
    ],
  },
];

const challenges = [
  {
    title: "Allocation at the pace of the day",
    paras: [
      "Tipper allocation changes constantly — a driver finishes early and needs a new job, a sub tipper becomes available at short notice, a client site changes the tip location. A dispatch system that can't update and reassign jobs in real time forces your dispatcher back to the phone and the whiteboard.",
      "HaulageOps dispatch board shows all jobs and all drivers — owned and sub — in one view. Reassignment is a drag-and-drop action. The driver app updates immediately via push notification.",
    ],
  },
  {
    title: "Sub tipper visibility when they go offsite",
    paras: [
      "Sub tippers are hard to track once they leave your yard. Without a portal or app, you rely on phone calls or text messages to know if they've tipped, if they're heading back, and if the load tonnage matches the docket. That uncertainty stacks up across a day with multiple subs running.",
      "The subcontractor portal gives each sub driver a mobile login. Their status updates appear on your dispatch board in real time. Dockets are submitted digitally — not texted as a photo or handed in as paper at end of day.",
    ],
  },
  {
    title: "Dockets piling up into an invoicing backlog",
    paras: [
      "Paper dockets collected at the end of each run, entered manually into a spreadsheet, then compared against client purchase orders before an invoice can go out — this is the process most tipper operators describe, and it causes invoicing delays of days or weeks.",
      "When the digital docket is submitted at the load, it's already in the system. End-of-day invoicing pulls completed jobs for a client, attaches the dockets, and pushes the invoice to Xero. The docket is already attached when you invoice.",
    ],
  },
];

const lifecycle = [
  {
    num: "1",
    title: "Create jobs from templates",
    p: "Recurring load types — the same quarry to the same site, the same material — are saved as job templates. Creating a job for the day takes seconds, not minutes. Multiple loads of the same type are bulk-created against a template.",
  },
  {
    num: "2",
    title: "Assign to owned drivers and sub tippers",
    p: "The dispatch board shows available owned drivers and which sub tippers are confirmed for the day. Jobs are assigned from the board. Sub tippers receive their jobs through the subcontractor portal and accept or decline from their mobile login.",
  },
  {
    num: "3",
    title: "Track loads in real time",
    p: "Owned drivers update job status through the driver app. Sub tippers update through the subcontractor portal. GPS positions appear on the dispatch board. You know where every truck is without making a phone call.",
  },
  {
    num: "4",
    title: "Digital docket at every load",
    p: "When a load completes, the driver captures the docket digitally — tonnage, timestamp, photo, and client signature if required. The docket is stored in the job record immediately. No paper to collect, no re-entry at end of day.",
  },
  {
    num: "5",
    title: "Invoice from completed jobs",
    p: "At end of day — or weekly for contract clients — pull completed jobs by client, review the job list and dockets, and generate the invoice. The docket is already attached. The rate has already been applied. Push to Xero and it's done.",
  },
  {
    num: "6",
    title: "Xero tracks payment",
    p: "Xero syncs invoice payment status back to HaulageOps via webhook. Paid, overdue and outstanding invoices are visible in the billing dashboard without needing to switch to Xero to check. The two-way sync keeps both systems current.",
  },
];

const capabilities = [
  {
    title: "Dispatch board — owned and sub in one view",
    href: "/platform/dispatch-management",
    p: "The dispatch board shows all active jobs, all owned drivers and all subcontractor tippers in a single real-time view. Job status updates as drivers update in the field. Reassignment is immediate. No secondary system needed to track sub tipper progress.",
    bullets: [
      "Real-time job and driver status via Socket.io",
      "Phone-based GPS tracking — no hardware required",
      "Drag-and-drop reassignment for live jobs",
    ],
  },
  {
    title: "Driver app — iOS and Android, works offline",
    href: "/platform/driver-app",
    p: "The driver app is the driver's interface for the full job lifecycle — receiving jobs, updating status, capturing dockets with photo and signature, and submitting break and rest records. It works offline and synchronises when connectivity returns, which matters on sites with poor signal.",
    bullets: [
      "Offline-capable — synchronises when connectivity returns",
      "Push notifications for new job assignments (Firebase FCM)",
      "Digital docket capture: photo, signature, tonnage, timestamp",
    ],
  },
  {
    title: "Subcontractor portal — dedicated sub login",
    href: "/platform/subcontractor-portal",
    p: "The subcontractor portal gives each of your sub tippers a dedicated login to view their job queue, accept or decline jobs, view Mapbox job maps, update status and submit dockets. Sub tippers do not pay for portal access — only the operating company holds the HaulageOps subscription.",
    bullets: [
      "Sub tippers access portal at no cost to them",
      "Accept/decline jobs from mobile portal login",
      "Mapbox maps for pick-up and delivery locations",
    ],
  },
  {
    title: "Billing and Xero integration",
    href: "/platform/billing-and-invoicing",
    p: "The billing system generates invoices from completed job records. The Xero integration uses OAuth2 with a 6-hourly sync plus real-time payment webhooks. Invoices created in HaulageOps appear in Xero. Payments recorded in Xero update the invoice status in HaulageOps.",
    bullets: [
      "Invoice lifecycle: draft, sent, paid, overdue, voided",
      "Xero OAuth2 integration with real-time payment webhooks",
      "Invoice summary and docket package sent directly to client",
    ],
  },
];

const faqs = [
  {
    q: "Can I schedule multiple jobs per driver per day in HaulageOps?",
    a: "Yes. Each driver can be assigned multiple sequential jobs in a single day. The dispatch board shows their full day's allocation. When the driver completes a job in the driver app, the next job in their queue is displayed automatically. Jobs can be added, re-ordered or re-assigned at any point during the day from the dispatch board.",
  },
  {
    q: "How do sub tipper rates work — do I set different rates for subs vs my own drivers?",
    a: "Yes. HaulageOps maintains two separate rate structures on each job: the client charge rate (what you invoice the client) and the subcontractor pay rate (what you pay the sub). These are managed independently through the rate management system. You can set fixed sub pay rates per job type, per tonne or per hour — separate from whatever you charge the client. This means your margin is tracked per job without manual calculation.",
  },
  {
    q: "How fast can I close out a day's jobs and get invoices out?",
    a: "In practice, end-of-day invoicing for a day's completed tipper jobs takes minutes rather than hours. Pull all completed jobs for a client, review the job list and the attached digital dockets, generate the invoice, and push to Xero. Because the dockets were submitted digitally as each load completed, there is no re-entry, no paper to collect, and no reconciliation step. How fast you close depends on client count and invoice complexity, but the system removes the manual work, not just the paperwork.",
  },
  {
    q: "My sub tippers don't have smartphones — can they still use the portal?",
    a: "The subcontractor portal is a web-based login that works on any modern mobile browser, including older Android and iPhone devices. Sub tippers do not need to download an app. If a sub tipper has no mobile device at all, you can still create and manage their jobs from the dispatch board — the portal is their self-service channel, but it is not the only way to record their work.",
  },
  {
    q: "Do I need to use Xero, or does HaulageOps work with other accounting software?",
    a: "Xero is the standard integration. MYOB integration is available as an add-on, subject to scope — ask about this in your demo if MYOB is your system. The billing and invoicing module in HaulageOps works independently of Xero — you can generate, manage and track invoices inside HaulageOps without any accounting sync. The Xero sync adds two-way invoice and payment visibility between the two systems.",
  },
  {
    q: "Can clients see their job status and invoices without me sending them updates?",
    a: "Yes. The client portal gives each client a dedicated login to view their live job status, job history, delivered dockets and invoices — including outstanding balances. Clients who want to check whether a delivery is on its way or download a docket for their own records can do so without calling your office. Access is role-controlled and client-specific.",
  },
  {
    q: "We run tipper hire alongside muckaway contracts. Can HaulageOps handle both in the same account?",
    a: "Yes. Both tipper hire (typically hourly billing) and muckaway contracts (typically per-tonne or per-load billing) run inside the same HaulageOps account with different rate structures applied per client and job type. The muckaway and spoil page covers the specific tip site coordination side of that operation.",
  },
];

const relatedCards = [
  {
    title: "Bulk Haulage",
    href: "/industries/bulk-haulage",
    p: "Multi-client bulk haulage operations with per-tonne rate cards, subcontractor networks and docket-to-invoice workflows. The core use case HaulageOps was built around.",
  },
  {
    title: "Earthworks",
    href: "/industries/earthworks",
    p: "Earthworks operators coordinating cut-and-fill, excavation removal and site materials across multiple active contracts — with both owned plant and subcontractor tippers.",
  },
  {
    title: "Dispatch Management",
    href: "/platform/dispatch-management",
    p: "The real-time dispatch board — how jobs, drivers and subcontractors are coordinated from a single operational view, with live status and GPS positioning.",
  },
  {
    title: "Driver App",
    href: "/platform/driver-app",
    p: "iOS and Android, offline-capable. How drivers receive jobs, update status, capture digital dockets with photo and signature, and log break records in the field.",
  },
];

export default function TipperFleetsPage() {
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
            <span className="text-[#0F172A] font-medium">Tipper Fleets</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Tipper Fleet Operations
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            High-churn tipper fleet operations need a system that matches the pace.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            When your tippers run three or four jobs a day, your sub tippers go offsite and your dockets pile up by afternoon — you need dispatch and billing that closes the day cleanly, not a spreadsheet you fill in retrospectively.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/dispatch-management">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Dispatch Management
              </Button>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-300 fill-mode-both">
            {["Multiple jobs per driver per day", "Sub tipper portal — no extra licences", "Digital docket per load", "End-of-day Xero invoicing"].map((pill) => (
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

      {/* OPERATIONAL CHARACTERISTICS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Operational Characteristics</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            How tipper fleet operations actually work.
          </h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Tipper operations are defined by high daily job churn, a mix of owned and subcontracted capacity, and a constant pressure to close out the day&apos;s dockets into invoices before the next morning starts. HaulageOps was built for exactly this pattern.
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
            Where tipper operations break down without the right system.
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

      {/* HAULAGEOPS FOR TIPPER FLEETS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">HaulageOps for Tipper Fleets</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The workflow from job creation to invoice close-out.
          </h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Here is how the day runs in HaulageOps for a tipper fleet operation managing owned trucks and subcontractor tippers across multiple clients.
          </p>
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
            The specific features tipper operations rely on.
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
            Tipper fleet dispatch board in HaulageOps.
          </h2>
          <div className="mt-8 rounded-2xl bg-[#0D1525] border border-[#1E293B] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 bg-[#1E293B]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E8652B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#94A3B8]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
              <span className="ml-3 text-xs font-semibold text-[#CBD5E1]">HaulageOps — Dispatch Board (Tipper Fleet View)</span>
            </div>
            <div className="p-6">
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Dispatch board showing a tipper fleet operation mid-morning: 8 owned tipper jobs across 3 drivers, colour-coded by status (in progress, loading, tipping, complete). Sub tipper panel on the right showing 4 subcontractor tippers — 2 active with live GPS position, 1 accepted/not yet on site, 1 pending acceptance. Job list column on left with client name, material type, tonnage and estimated completion. Quick-assign button to create a new job from template. Filter options: by driver, by client, by job status, by date.
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
            Common questions from tipper fleet operators.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See tipper fleet dispatch in a 20-minute demo.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              We&apos;ll walk through job creation from templates, sub tipper allocation, digital docket capture and end-of-day Xero invoicing — mapped to how your operation actually runs, not a generic product overview.
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
            Explore related industries and platform features.
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

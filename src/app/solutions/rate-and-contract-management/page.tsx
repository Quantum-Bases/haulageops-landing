import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
  CalendarClock,
  FileText,
  AlertTriangle,
} from "lucide-react";

export const metadata = {
  title: "Haulage Rate and Contract Management | HaulageOps",
  description:
    "Client rate cards, subcontractor pay rates, contract lifecycle and effective dating — all connected to jobs from creation through to invoicing.",
};

const proofStrip = [
  "Per-tonne, per-load, hourly, fixed",
  "Client rate cards",
  "Subcontractor pay rates",
  "Effective dating",
  "Contract lifecycle",
  "Auto-expiry alerts",
];

const rateCards = [
  {
    title: "Client rate cards",
    desc: "Each client in HaulageOps has a rate card — a structured set of rates for the job types, materials and routes you run for them. When a job is created for that client, the system pulls the correct rate from the rate card automatically. No lookup required.",
    bullets: [
      "Per-tonne, per-load, hourly and fixed-fee rate types",
      "Different rates for different job types within one client",
      "Rate applied at job creation — visible at dispatch, invoice and in reporting",
      "Client can view their rate card in the client portal",
    ],
  },
  {
    title: "Subcontractor pay rates",
    desc: "Where a subcontractor makes the delivery, the job carries both the client charge rate and the subcontractor pay rate. These are stored separately and neither is visible to the other party. The margin sits in the job record, visible to management, without ever appearing on a client invoice or a subcontractor payment confirmation.",
    bullets: [
      "Subcontractor pay rate stored against the subcontractor agreement",
      "Applied alongside the client charge rate on the same job",
      "Internal margin visible in management reporting",
      "Not visible to client or subcontractor — appropriate access per role",
    ],
  },
  {
    title: "Effective dating",
    desc: "Rate changes happen — fuel adjustments, annual contract renewals, negotiated increases. Effective dating lets you enter a new rate with a future start date. When that date arrives, the new rate applies automatically. Historical jobs retain the rate that was in effect when they were created — the record is accurate, not overwritten.",
    bullets: [
      "Future rate changes entered in advance with an effective date",
      "Rate transitions automatically on the effective date",
      "Historical job records show the rate that was active at the time",
      "No manual rate-update step required across all pending jobs",
    ],
  },
  {
    title: "Special rates for individual jobs",
    desc: "When a client negotiates a one-off rate for a specific delivery — a spot rate, a difficult location premium, a larger-than-standard load — that rate can be applied to that specific job without changing the client's rate card for all future jobs. The exception is recorded at job level, separate from the standard rate agreement.",
    bullets: [
      "Job-level rate override where negotiated",
      "Client rate card unchanged by a single job exception",
      "Job record shows the applied rate with appropriate context",
      "Audit trail records who set the override rate and when",
    ],
  },
];

const contractSteps = [
  {
    num: "01",
    title: "Creation and review",
    desc: "Contract records are created in the admin panel with the relevant client, rate terms, start date and end date. The contract document can be attached. Contracts enter a review workflow before becoming active — ensuring the right people have confirmed the terms before jobs start being created against them.",
  },
  {
    num: "02",
    title: "Active and governing rates",
    desc: "Once approved, the contract is active and its rate terms govern job creation for the defined client over the contract period. The contract status is visible in the admin panel — active, pending, approaching expiry. Rate cards are linked to the contract, so the relationship between agreed terms and applied rates is clear.",
  },
  {
    num: "03",
    title: "Expiry alerts and renewal",
    desc: "Before a contract reaches its end date, the system generates an expiry alert. The operations or commercial team is notified that the contract needs renewal or replacement before the current terms expire. No more discovering expired contracts because nobody was tracking dates. The alert creates a prompt for the renewal conversation while there is still time to have it.",
  },
];

const contracts = [
  { client: "Meridian Quarries", name: "Rate Agreement", dates: "01 Jul 2025 → 30 Jun 2026", rateCards: "2 rate cards", doc: "Signed PDF attached", status: "Active", statusCls: "bg-[#16A34A]/15 text-[#4ADE80]" },
  { client: "Apex Civil", name: "Bulk Haulage Contract", dates: "15 Jan 2025 → 14 Jan 2026", rateCards: "3 rate cards", doc: "Signed PDF attached", status: "Expiring Soon", statusCls: "bg-[#F59E0B]/15 text-[#FBBF24]" },
  { client: "Bayside Concrete", name: "Service Level Terms", dates: "01 Sep 2024 → 31 Aug 2025", rateCards: "1 rate card", doc: "Renewal outstanding", status: "Expired", statusCls: "bg-[#DC2626]/15 text-[#F87171]" },
];

const faqs = [
  {
    q: "What if a client negotiates a special rate for a specific job?",
    a: "A job-level rate override can be applied at the point of job creation without changing the client's rate card. The override is recorded on the job record with an audit trail showing who applied it and when. The client's rate card for all other jobs remains unchanged. This handles one-off spot rates, difficult-access premiums or other agreed exceptions without corrupting the standard rate agreement.",
  },
  {
    q: "How do rate changes work without breaking historical job records?",
    a: "Effective dating is the mechanism. When a rate changes, the new rate is entered with a future effective date. Jobs created before that date continue to use the previous rate. Jobs created from the effective date onwards use the new rate. Historical records show the rate that was active when the job was created — the record is accurate to the actual rate in effect, not overwritten by the new rate.",
  },
  {
    q: "Can I see the margin between the client rate and the subcontractor pay rate per job?",
    a: "Yes. Management users with appropriate access can see both the client charge rate and the subcontractor pay rate on a job, and the implied margin. This is visible in the job record and surfaces in management reporting. The client sees the invoice with the client charge rate; the subcontractor sees their pay rate in their portal. The margin view is internal only, visible to the roles you configure with that access level.",
  },
  {
    q: "What rate types does HaulageOps support?",
    a: "Per-tonne, per-load, hourly and fixed-fee rate types are supported. Different job types for the same client can have different rate types — for example, a per-tonne rate for aggregate deliveries and a fixed-fee rate for a dedicated site service. The rate card is flexible enough to reflect the way rates are actually structured in the client agreement, not forced into one format.",
  },
  {
    q: "How far in advance can I set a future rate change?",
    a: "Effective-dated rate changes can be set as far in advance as needed. There is no restriction on how early a future rate change is entered. This means a rate negotiated months in advance can be entered immediately, with the effective date set to when it comes into force, without any action required on the transition date.",
  },
  {
    q: "How do contract expiry alerts work?",
    a: "When a contract is approaching its end date, the system generates an alert visible in the admin panel for users with appropriate access. The alert is designed to prompt a renewal conversation before the contract expires — not after. The notification period before expiry can be configured. Once the contract expires, its status changes in the system so it is clear that a renewal is outstanding.",
  },
];

export default function RateAndContractManagementPage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb */}
      <div className="pt-24 pb-0 bg-[#FFF9F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B]">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/solutions" className="hover:text-[#E8652B]">Solutions</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Rate &amp; Contract Management</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Commercial
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Every rate agreed, stored and applied automatically when jobs are created.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Client rate cards, subcontractor pay rates, effective dating for future changes, and contract lifecycle from creation through expiry — all connected so the right rate reaches the right invoice without anyone looking it up manually.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/rate-management">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Rate Management Platform
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-[#0F172A] py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {proofStrip.map((item) => (
              <div key={item} className="flex flex-col items-center justify-center gap-1">
                <span className="text-white font-bold text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* THE RATE PROBLEM */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Rate Problem in Haulage</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            One job. Two rates. Multiple agreements. One invoice that has to be right.
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                Every job in a bulk haulage operation has at least two rate dimensions that matter: the rate you charge the client and — if a subcontractor makes the delivery — the rate you pay the subcontractor. These need to stay separate, stay correct over time, and both need to end up on the right documents without anyone calculating manually each time.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                The problem most operators face isn&apos;t that they don&apos;t know their rates. They&apos;ve negotiated them, they know what was agreed. The problem is that the rates live in spreadsheets or documents that are separate from the jobs they apply to. When a job is created, someone has to look up the rate. When an invoice goes out, someone has to check it&apos;s the right rate. When a rate changes, someone has to update multiple documents and hope nothing gets missed.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Rate disputes are almost always caused by this gap: the rate that was applied to the invoice is different from what the client understood was agreed, either because the wrong version of a spreadsheet was referenced, a rate change wasn&apos;t propagated, or a special rate negotiated for one client was mixed up with the standard rate.
              </p>
            </div>
            <div>
              <p className="text-[#475569] leading-relaxed">
                Contracts create a second layer of complexity. Contract terms govern which rates apply for a given client over a given period. When a contract is approaching expiry, the rates under it may no longer be valid — but if there&apos;s no system tracking that expiry, jobs keep getting created and invoiced at rates that may no longer be agreed.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                When the same operator manages multiple clients, each with different rate structures, different job types and different contract periods, the combination of a job management spreadsheet and a rates spreadsheet and a contracts folder creates a system where errors are not occasional — they&apos;re built in.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                The solution is to store rates and contracts in the same system as the jobs they apply to, and have the rate applied automatically at job creation rather than looked up at invoice time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RATE MANAGEMENT IN HAULAGEOPS */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Rate Management in HaulageOps</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Rates stored once. Applied automatically. Separate for client and subcontractor.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {rateCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.desc}</p>
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

      {/* CONTRACT LIFECYCLE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Contract Lifecycle</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            From contract creation to expiry alert — all managed in the platform.
          </h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Contracts in haulage govern which rates apply, for which client, over which period. When a contract expires, the rates it defines may no longer be valid. HaulageOps manages the contract lifecycle so expiry doesn&apos;t arrive unnoticed.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {contractSteps.map((step) => (
              <div key={step.num} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                <span className="text-3xl font-black text-[#E8652B]/20 leading-none">{step.num}</span>
                <h3 className="mt-2 font-bold text-[#0F172A] text-base">{step.title}</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            {/* Contract management view visual */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                Contract Management View
              </div>
              <div className="p-4 sm:p-5 space-y-3">
                {contracts.map((c) => (
                  <div key={c.client} className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-white text-[11px] font-semibold">{c.client} — {c.name}</p>
                        <p className="text-[#94A3B8] text-[10px] mt-0.5 flex items-center gap-1">
                          <CalendarClock className="h-3 w-3" /> {c.dates}
                        </p>
                      </div>
                      <span className={`px-1.5 py-0.5 rounded text-[9px] font-semibold ${c.statusCls}`}>{c.status}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-[9px] text-[#94A3B8]">
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#334155]/40">
                        <FileText className="h-2.5 w-2.5" /> {c.rateCards}
                      </span>
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#334155]/40">
                        <AlertTriangle className="h-2.5 w-2.5" /> {c.doc}
                      </span>
                    </div>
                  </div>
                ))}
                <p className="text-[10px] text-[#475569]">
                  Contract list with status badges, linked rate cards and document attachments — expiry never arrives unnoticed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTED TO BILLING */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Connected to Billing</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Rate at job creation equals rate at invoice. No reconciliation step.
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                Because the rate is stored in the system at job creation and flows through to the completed job record, the invoice is built from that data — not entered fresh. There is no step where someone looks up the rate and types it into an invoice. The rate that was agreed is the rate that appears on the invoice.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                When a client queries a rate on an invoice, the response is immediate: the rate was applied from the rate card in effect on that date, visible in the job record. There is no &quot;let me check the spreadsheet&quot; step. The agreed rate, the job, and the invoice are all connected in the same system.
              </p>
            </div>
            <div>
              <p className="text-[#475569] leading-relaxed">
                For operators managing multiple clients with different rate structures, this removes what is otherwise a persistent source of invoicing errors. Different clients have different rates. Different job types within one client have different rates. When those rate cards are in the system and applied automatically, the variation is handled correctly without anyone having to check which rate applies each time.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                See the <Link href="/solutions/job-to-invoice" className="text-[#E8652B] hover:underline font-medium">Job to Invoice solution</Link> and <Link href="/solutions/reducing-invoice-delays" className="text-[#E8652B] hover:underline font-medium">Reducing Invoice Delays</Link> for how rate management connects to the broader billing workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently Asked Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Rate and contract management — common questions.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Rates agreed once. Applied correctly every time.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              A demo covers client rate cards, subcontractor pay rates, effective dating and how the contract lifecycle works in practice — 20 minutes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/rate-management">
              <Button size="lg" variant="outline" className="border-[#334155] text-white hover:bg-[#1E293B]">
                Rate Management
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

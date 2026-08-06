import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Reduce Invoice Delays in Bulk Haulage | HaulageOps",
  description:
    "Three causes account for almost all invoice delays in bulk haulage: missing dockets, re-entry time and rate confusion. HaulageOps removes each manual step at its source.",
};

const proofStrip = [
  "Digital POD at delivery",
  "No docket chasing",
  "Invoice built from job data",
  "No re-entry step",
  "Rate stored at creation",
  "Xero sync included",
];

const causes = [
  {
    title: "Cause 1: Missing dockets",
    paras: [
      "The driver completes the delivery and keeps the signed docket. It sits in the cab until the driver returns to base, or arrives in a bundle at the end of the week. The admin team can't invoice until the dockets arrive because the invoice needs to reference delivery confirmation. The delay isn't because invoicing is slow — it's because the evidence hasn't arrived yet.",
      "In operations that use subcontractors, the problem compounds: the sub's dockets may arrive even later or need to be chased individually.",
    ],
    bullets: [
      "The fix: digital POD captured on the driver app at the point of delivery",
      "Photo, document upload or customer signature — submitted immediately",
      "Attached to the job record on submission — available for invoicing right away",
      "Works offline — synchronises when connectivity returns",
    ],
  },
  {
    title: "Cause 2: Re-entry time",
    paras: [
      "Even when dockets arrive on time, the information has to be transferred: job details from the dispatch record into a spreadsheet, from the spreadsheet into the invoicing system, from the invoicing system into the accounting software. Each transfer takes time and introduces the opportunity for transcription errors.",
      "For a 10-truck operation running 20 jobs a day, the re-entry time is manageable. At 30 trucks with subcontractors, it becomes a part-time job in itself — or a backlog that grows faster than it gets cleared.",
    ],
    bullets: [
      "The fix: invoice built directly from the completed job record",
      "Job data, rate and POD already in the system — no transcription step",
      "Invoice syncs to Xero via OAuth2 — no re-entry in accounting software",
      "Draft/sent/paid/overdue lifecycle managed in one place",
    ],
  },
  {
    title: "Cause 3: Rate confusion",
    paras: [
      "When the rate applied to an invoice doesn't match what the client understood was agreed, the invoice gets queried. The query has to be resolved — which means finding the original rate agreement, checking what rate was in effect on the job date, and either reissuing the invoice or explaining the discrepancy. That process can add days or weeks to payment.",
      "Rate confusion happens when rates are in one document and invoices are in another, with no automated connection between them. The person creating the invoice looks up the rate manually — and occasionally gets the wrong version, the wrong client, or the pre-increase rate.",
    ],
    bullets: [
      "The fix: rate stored in the system at job creation and applied automatically",
      "Client rate cards with effective dating — correct rate for the correct period",
      "Rate on the invoice matches rate agreed in the client rate card — no lookup",
      "Disputes answered from the job record: rate applied, date, client agreement",
    ],
  },
  {
    title: "The cash flow consequence",
    paras: [
      "Each day of invoice delay is a day of outstanding receivables. For a haulage operation running significant volume, the working capital impact of consistently late invoices is material. If the average job-to-invoice gap is two weeks rather than two days, and payment terms are 30 days, the business is waiting 44 days for money earned on day one.",
      "Reducing invoice delays isn't just an administrative improvement — it directly affects how much cash the business has available for fuel, wages, maintenance and growth. The faster the invoice goes out, the sooner the payment clock starts.",
    ],
    bullets: [
      "Invoice ready when job completes — not days or weeks later",
      "Payment terms start running sooner",
      "Outstanding receivables reduced as a natural consequence",
      "Finance team has accurate, real-time invoice status in the platform",
    ],
  },
];

const manualSteps = [
  "Job completed. Driver keeps docket in cab.",
  "Admin team waits for dockets — end of day, end of week.",
  "Dockets arrive in a batch. Some are missing.",
  "Missing dockets chased by phone or message.",
  "Job details transcribed from docket to spreadsheet.",
  "Rate looked up in a separate rate document.",
  "Invoice created manually in accounting system.",
  "Invoice checked against job record for accuracy.",
  "Invoice sent to client.",
  "Payment terms start — 10–21 days after job completion.",
];

const connectedSteps = [
  "Job completed. Driver submits digital POD from driver app.",
  "POD attached to job record immediately — available now.",
  "Job marked complete. Rate already applied from rate card.",
  "Invoice generated from completed job record — no transcription.",
  "Invoice syncs to Xero automatically.",
  "Invoice sent to client — same day as job completion if desired.",
  "Payment terms start — day of delivery.",
];

const relatedCards = [
  {
    title: "Job to Invoice",
    desc: "The complete job-to-invoice workflow — how a completed job record becomes an accurate invoice without re-entry and syncs to Xero in real time.",
    href: "/solutions/job-to-invoice",
  },
  {
    title: "Digital Dockets",
    desc: "Driver-captured digital dockets from the iOS or Android app. Works offline. Attached to the job record at submission. No waiting, no chasing, no re-entry.",
    href: "/solutions/digital-dockets",
  },
  {
    title: "Billing & Invoicing",
    desc: "The platform feature behind the billing workflow — invoice lifecycle, Xero integration, client portal invoice visibility and payment status tracking.",
    href: "/platform/billing-and-invoicing",
  },
];

const faqs = [
  {
    q: "What if the driver doesn't have mobile signal when completing a delivery?",
    a: "The driver app is offline-capable. The driver can capture POD — photo, document upload or customer signature — while offline. The data is stored on the device and synchronises to the job record automatically when connectivity is restored. The driver does not need to be in range when completing the delivery. This is a confirmed capability, not a workaround — it was built specifically because many bulk haulage sites have poor or no mobile coverage.",
  },
  {
    q: "How fast can I issue an invoice after a job is complete?",
    a: "As soon as the job is marked complete and POD has been submitted, the invoice can be generated from the job record. There is no mandatory waiting period. For operators who batch-invoice at the end of the day or week, the system supports that workflow equally. The point is that the invoice is ready when the job is complete — when you send it is your decision, not a function of when the dockets arrive or when someone has time to enter the data.",
  },
  {
    q: "What happens if a job is disputed by the client?",
    a: "Disputed jobs can be held in draft invoice status while the dispute is resolved. The job record contains the digital POD (with timestamp, driver and submission details), the rate that was applied and its source in the rate card, and the full audit trail of job actions. This gives you a clear basis for resolving the dispute: the evidence is already attached, the rate is already documented, and the timeline is already recorded. Invoices can be voided and reissued once disputes are resolved.",
  },
  {
    q: "Does the invoice go to Xero automatically or does someone have to push it?",
    a: "Invoices sync to Xero via OAuth2. The sync runs on a 6-hourly cron schedule and also supports real-time payment webhooks — so when a client pays in Xero, the payment status is reflected in HaulageOps. The sync is configured once during setup and then runs without manual action required. Invoice creation in HaulageOps creates a corresponding record in Xero; manual entry in Xero is not required.",
  },
  {
    q: "What about invoices for jobs done by subcontractors?",
    a: "The client invoice reflects the client charge rate regardless of whether the delivery was made by an owned driver or a subcontractor. The invoice is built from the job record — which holds both the client rate and the subcontractor pay rate separately. The client sees their rate; you see the margin. POD submitted by subcontractors through their portal attaches to the same job record and is available to attach to the client invoice just as POD from owned drivers is.",
  },
  {
    q: "Is MYOB or another accounting system supported?",
    a: "Xero is the standard integration. MYOB is available as an add-on subject to scope discussion. Other accounting systems are considered on request. If your accounting system is not listed, raise it during the demo — the team can advise on current availability and roadmap plans.",
  },
];

export default function ReducingInvoiceDelaysPage() {
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
            <span className="text-[#0F172A] font-medium">Reduce Invoice Delays</span>
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
            Late invoices almost always start with a missing docket. Here&apos;s the fix.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Three causes account for almost all invoice delays in bulk haulage: missing dockets, re-entry time and rate confusion. HaulageOps addresses each one at its source — not by speeding up the manual process, but by removing the manual step entirely.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/solutions/job-to-invoice">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Job to Invoice Solution
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

      {/* THE THREE CAUSES OF INVOICE DELAY */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Three Causes of Invoice Delay</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Identify which one is slowing your billing. Usually it&apos;s all three.
          </h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Late invoices have a direct cash flow cost. The longer the gap between job completion and invoice payment, the longer the business is waiting for money it has already earned. Understanding which causes apply is the first step — and in most haulage operations, all three are present to some degree.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {causes.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                {card.paras.map((p) => (
                  <p key={p} className="mt-3 text-sm text-[#475569] leading-relaxed">{p}</p>
                ))}
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

      {/* BEFORE AND AFTER */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Before and After</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The manual process versus the connected process.
          </h2>
          <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0]">
              <h3 className="font-bold text-[#0F172A] mb-5">Manual process (current state)</h3>
              <ol className="space-y-3">
                {manualSteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-[#334155]">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-[#FEE2E2] text-[#DC2626] text-[11px] font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0]">
              <h3 className="font-bold text-[#0F172A] mb-5">Connected process (HaulageOps)</h3>
              <ol className="space-y-3">
                {connectedSteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-[#334155]">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-[#DCFCE7] text-[#16A34A] text-[11px] font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9] pt-5">
                Three steps removed. Zero transcription. Rate already correct. POD already attached.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SOLUTIONS AND FEATURES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related Solutions and Features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Connected to the complete billing workflow
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">
                    {card.title}
                  </Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
                <Link href={card.href} className="mt-3 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  View page <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#475569]">
            Also relevant:{" "}
            <Link href="/platform/rate-management" className="text-[#E8652B] hover:underline font-medium">Rate Management</Link>
            {" · "}
            <Link href="/solutions/rate-and-contract-management" className="text-[#E8652B] hover:underline font-medium">Rate &amp; Contract Management</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently Asked Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Reducing invoice delays — common questions.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Invoice the day the job closes — not the week after.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              A demo covers digital POD, rate application and the job-to-invoice workflow end to end — 20 minutes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/solutions/job-to-invoice">
              <Button size="lg" variant="outline" className="border-[#334155] text-white hover:bg-[#1E293B]">
                Job to Invoice
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

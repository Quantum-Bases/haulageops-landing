import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
  RefreshCw,
  AlertTriangle,
  X,
} from "lucide-react";

export const metadata = {
  title: "Job to Invoice — Haulage Billing Workflow | HaulageOps",
  description:
    "From job completion to invoice in minutes, not days. Rates attach to jobs, POD confirms delivery, and invoices sync to Xero without re-entering anything.",
};

const heroKickers = [
  "Rate set at job creation",
  "Digital POD on completion",
  "Invoice generated from job",
  "Xero sync — no re-entry",
];

const proofStrip = [
  { strong: "Zero", sub: "data re-entry job to invoice" },
  { strong: "6-hourly", sub: "Xero cron sync + real-time webhooks" },
  { strong: "OAuth2", sub: "secure Xero connection" },
  { strong: "Azure", sub: "POD stored, attached to every job" },
  { strong: "Client portal", sub: "invoices visible without email" },
  { strong: "Draft → Sent → Paid", sub: "full invoice lifecycle tracked" },
];

const oldProcessProblems = [
  "Job completed Monday — invoice sent Friday at best",
  "Admin rebuilds the transaction from notes and spreadsheet cross-reference",
  "Paper docket in the driver cab — arrives late, illegible, or not at all",
  "Rate looked up manually — risk of applying outdated rate version",
  "Invoice typed into accounting software — re-entry of data already captured at dispatch",
  "Client emailed a PDF — no self-service visibility for the client",
];

const oldChain = [
  { day: "Monday", text: "Job runs. Paper docket left in the cab." },
  { day: "Wednesday", text: "Driver brings the docket back to the office." },
  { day: "Thursday", text: "Admin finds rate card in spreadsheet, cross-references job register, re-enters into accounting software.", breakPoint: true },
  { day: "Friday", text: "Invoice emailed to client as a PDF.", breakPoint: true },
];

const lifecycleSteps = [
  {
    num: "01",
    title: "Job created with rate",
    desc: "When a job is created in the dispatch board, the client's rate card is selected at that point. Per-tonne, per-load, hourly, or fixed-fee rates are all configured in the rate management module with effective dating. The correct rate is applied to the job at creation — not reconstructed from a spreadsheet three days later.",
  },
  {
    num: "02",
    title: "Driver completes the job",
    desc: "The driver marks the job as delivered in the driver app. This triggers the status update on the dispatch board and in the client portal. The delivery timestamp is recorded automatically — it is not self-reported to admin, it is captured in the system at the moment of action.",
  },
  {
    num: "03",
    title: "POD attached at the site",
    desc: "At the delivery point, the driver captures a photograph of the delivery, collects the customer signature on screen, and uploads any required document. All three are stored in Azure Blob Storage and immediately attached to the job record. The POD is in the system before the truck leaves the site — not in the driver's cab on the way back to the depot.",
  },
  {
    num: "04",
    title: "Invoice generated from job",
    desc: "With the job complete and POD attached, the invoice is generated directly from the job record. The client, the rate, the delivery date, and the POD are all already present — the invoice requires no manual assembly. Invoices move through a lifecycle: Draft, Sent, Paid, Overdue, or Voided. Each transition is logged.",
  },
  {
    num: "05",
    title: "Xero sync — automatically",
    desc: "The invoice syncs to Xero via OAuth2. The sync runs on a 6-hourly cron schedule and also responds to real-time payment webhooks from Xero. When a client pays the invoice in Xero, the payment status updates in HaulageOps automatically. No manual reconciliation between the two systems.",
  },
  {
    num: "06",
    title: "Client sees the invoice in their portal",
    desc: "The client does not receive a PDF attachment. They log into the client portal and see their invoices, the underlying job records, and the POD — all connected. If they have a question about a charge, they can see exactly what was delivered, when, and the signed proof. Disputes start with evidence already on the table.",
  },
];

const haulageTimeline = [
  { time: "Monday AM", text: "Job dispatched with rate attached" },
  { time: "Monday PM", text: "Job completed — driver captures digital POD at site" },
  { time: "Monday PM", text: "Invoice generated from completed job record" },
  { time: "Monday PM", text: "Invoice syncs to Xero" },
  { time: "Monday PM", text: "Client sees invoice in their portal" },
];

const comparisonRows = [
  {
    step: "Rate applied to job",
    old: "Looked up in a separate spreadsheet after the job, at invoice time.",
    haulage: "Applied from client rate card at job creation. Locked to the job record.",
  },
  {
    step: "Proof of delivery",
    old: "Paper docket in driver's cab. Collected when driver returns. Sometimes lost or illegible.",
    haulage: "Digital capture in driver app at the delivery site. Stored in Azure, attached to job immediately.",
  },
  {
    step: "Job completion recorded",
    old: "Driver tells someone. Admin notes it. Spreadsheet updated if remembered.",
    haulage: "Driver marks delivered in app. Timestamp recorded automatically. Dispatch board updates.",
  },
  {
    step: "Invoice created",
    old: "Admin rebuilds from notes, cross-references rate card, types into accounting software.",
    haulage: "Generated directly from completed job record. No manual assembly. Seconds, not hours.",
  },
  {
    step: "Accounting system updated",
    old: "Manual entry into Xero or MYOB. Separate from the haulage records.",
    haulage: "Xero sync via OAuth2 — automatic. 6-hourly cron plus real-time payment webhooks.",
  },
  {
    step: "Client receives invoice",
    old: "PDF attached to an email. Client may not read it for days.",
    haulage: "Invoice visible in client portal immediately. No email attachment required.",
  },
  {
    step: "Payment tracking",
    old: "Monitor Xero manually. Chase overdue invoices separately.",
    haulage: "Payment webhooks from Xero update invoice status in HaulageOps automatically.",
  },
  {
    step: "Invoice dispute",
    old: "Locate the paper docket, find the WhatsApp thread, hope the rate spreadsheet was current.",
    haulage: "POD, rate, delivery timestamp, and job record all connected. Dispute starts with complete evidence.",
  },
];

const xeroBullets = [
  "OAuth2 authorisation — secure, no manual API keys",
  "Invoice creation: generated in HaulageOps, pushed to Xero",
  "6-hourly cron sync for routine reconciliation",
  "Real-time payment webhooks — Xero payment received, HaulageOps invoice status updates",
  "Invoice lifecycle tracked: Draft, Sent, Paid, Overdue, Voided",
  "No manual reconciliation between the two systems",
];

const notDoBullets = [
  "No copying invoice details from HaulageOps into Xero manually",
  "No logging into Xero to check payments then updating HaulageOps by hand",
  "No end-of-week reconciliation session between two systems",
  "No risk of invoice existing in one system but not the other",
  "No double-entry of client information — client records align across both systems",
];

const portalInvoices = [
  { ref: "INV-0241", job: "JOB-1844 · Apex Civil — Crushed rock delivery", amount: "$2,340.00", status: "Sent", statusCls: "bg-[#FBBF24]/15 text-[#FBBF24]" },
  { ref: "INV-0242", job: "JOB-1845 · Meridian Quarries — Spoil removal", amount: "$1,875.00", status: "Paid", statusCls: "bg-[#16A34A]/15 text-[#4ADE80]" },
  { ref: "INV-0243", job: "JOB-1847 · Apex Civil — Concrete aggregate", amount: "$3,120.00", status: "Sent", statusCls: "bg-[#FBBF24]/15 text-[#FBBF24]" },
];

const portalBullets = [
  "Invoices visible in client portal as soon as generated — no email required",
  "Invoice linked to the underlying job record and POD",
  "Delivery photo and signed record visible alongside the charge",
  "Historical invoice and job history accessible to the client self-service",
  "Rate card visible — clients can see the agreed rates applying to their account",
];

const faqs = [
  {
    q: "How quickly does an invoice sync to Xero after it is generated in HaulageOps?",
    a: "The Xero sync runs on a 6-hourly cron schedule, so the maximum delay for routine invoice creation is six hours. Real-time payment webhooks operate instantly — when Xero records a payment against an invoice, the status in HaulageOps updates immediately without waiting for the next cron cycle.",
  },
  {
    q: "What if the rate needs to change after a job has been created?",
    a: "Rates can be updated on a job before the invoice is generated. If a job was created under a rate that has since been revised — for example, a fuel levy adjustment was agreed mid-period — the rate can be corrected on the job record before the invoice is produced. Once an invoice is in Sent or Paid status, changes go through a credit/void workflow to maintain the audit trail. Rate management supports effective dating so future jobs pick up new rates automatically without manual correction.",
  },
  {
    q: "Can a client dispute an invoice through the portal?",
    a: "The client portal shows the invoice alongside the job record and POD, which means most queries are answered before they become disputes. If a client has a question, they contact you through your normal channels — there is no dispute button in the portal itself. The value is that the evidence is already in their view: delivery photograph, signature, date and time, and the rate that was applied. Disputes that do arise start with a complete record on both sides.",
  },
  {
    q: "What invoice statuses does HaulageOps track?",
    a: "Invoices move through a full lifecycle: Draft (created but not yet sent), Sent (dispatched to client), Paid (payment received, confirmed by Xero webhook), Overdue (past due date without payment), and Voided (cancelled). Each status transition is logged with a timestamp and the user who made the change. Overdue invoices are visible in the billing module without needing to run a manual report.",
  },
  {
    q: "Does HaulageOps support invoicing for subcontractor jobs separately from owned driver jobs?",
    a: "Yes. When a job is delegated to a subcontractor, the system tracks two rates: the client charge rate (what your client pays) and the subcontractor pay rate (what you pay the sub). The client invoice is generated from the client charge rate. The subcontractor's cost is recorded against the job as a separate entry, allowing you to see margin at the job level. The subcontractor does not have access to your client's invoice or your charge rate.",
  },
  {
    q: "Is POD required before an invoice can be generated?",
    a: "POD capture is built into the driver workflow, but the system does not enforce a hard block on invoice generation if POD has not been captured. In practice, having POD attached before invoicing is strongly advisable — it is the evidence that supports the charge. The system makes POD status visible on the job record so billing admin can see immediately whether POD is present before generating the invoice.",
  },
  {
    q: "What if we use MYOB instead of Xero?",
    a: "The standard HaulageOps product integrates with Xero. MYOB integration is available as an add-on but is not part of the standard subscription — it requires scoping and is priced accordingly. If MYOB is your accounting system, contact us before signing up to confirm what is available for your configuration.",
  },
];

const relatedCards = [
  {
    title: "Billing & Invoicing",
    desc: "Full feature breakdown of the HaulageOps invoice module: lifecycle states, Xero sync mechanics, client portal invoice visibility, and payment tracking.",
    href: "/platform/billing-and-invoicing",
    linkLabel: "Platform detail",
  },
  {
    title: "Xero Integration",
    desc: "OAuth2 connection, 6-hourly cron sync, real-time payment webhooks, and what the integration does and does not handle automatically.",
    href: "/platform/integrations/xero",
    linkLabel: "Xero Integration",
  },
  {
    title: "Rate Management",
    desc: "Per-tonne, per-load, hourly and fixed-fee rate cards. Effective dating, client-specific rates, and how rate cards apply to jobs automatically at dispatch.",
    href: "/platform/rate-management",
    linkLabel: "Rate Management",
  },
  {
    title: "Digital Dockets",
    desc: "How digital POD capture replaces paper dockets, what is captured at the delivery site, and why it matters for invoice generation speed and dispute resolution.",
    href: "/solutions/digital-dockets",
    linkLabel: "Digital Dockets",
  },
];

export default function JobToInvoicePage() {
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
            <span className="text-[#0F172A] font-medium">Job to Invoice</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Haulage Billing Workflow
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            The job is done. The invoice is built. Xero is already updated.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Because the rate is attached to the job at dispatch and the POD is captured at the delivery site, there is nothing to reconstruct and nothing to re-enter. The completed job record becomes the invoice — automatically synced to Xero.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/billing-and-invoicing">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Billing &amp; Invoicing Feature Detail
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-300 fill-mode-both">
            {heroKickers.map((pill) => (
              <span key={pill} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F1F5F9] text-xs font-medium text-[#334155]">
                <CheckCircle className="h-3.5 w-3.5 text-[#16A34A] shrink-0" />
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-[#0F172A] py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {proofStrip.map((item) => (
              <div key={item.strong} className="flex flex-col items-center justify-center gap-1">
                <span className="text-white font-bold text-sm">{item.strong}</span>
                <span className="text-[#94A3B8] text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* THE OLD PROCESS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Old Process</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Why haulage invoicing takes days instead of hours
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                In most haulage operations, invoicing happens at the end of the week — or worse, whenever admin can get around to it. The job happened Monday. The driver had the docket. The docket arrived on Thursday. Admin cross-referenced it against the job register — which was a spreadsheet someone maintained separately — found the rate for that client in a rate card document, built the invoice in accounting software, attached the PDF, and emailed it. The client received it Friday. Payment terms are 30 days. You will be paid five weeks after the truck ran.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                The delay is not the fault of the admin team. The delay is structural: the job record, the rate, and the proof of delivery exist in three separate places. Pulling them together takes time. If the docket is missing, the invoice is delayed further. If the rate card was updated last month and this job used the old rate, someone has to find the discrepancy and fix it before sending.
              </p>
              <ul className="mt-6 space-y-3">
                {oldProcessProblems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <X className="h-4 w-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {/* Old billing process visual */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
                <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                  The Old Billing Process
                </div>
                <div className="p-4 sm:p-5 space-y-2">
                  {oldChain.map((step) => (
                    <div key={step.day} className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[#FBBF24] text-[10px] font-bold uppercase tracking-wider">{step.day}</span>
                        {step.breakPoint && (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#DC2626]/15 text-[#F87171] text-[9px] font-semibold">
                            <AlertTriangle className="h-2.5 w-2.5" /> Breaks here
                          </span>
                        )}
                      </div>
                      <p className="text-[#E2E8F0] text-[11px] mt-1 leading-relaxed">{step.text}</p>
                    </div>
                  ))}
                  <p className="text-[10px] text-[#94A3B8]">
                    Five-day lag from job completion to invoice delivery — with two points where the process commonly breaks: missing docket, wrong rate version.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE HAULAGEOPS PROCESS */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The HaulageOps Process</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Job created with rate. Driver completes. POD attached. Invoice generated. Xero updated.
          </h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Every step in the HaulageOps billing workflow connects to the same job record. Nothing is reconstructed. Nothing is re-entered. The invoice is a function of the job — and because the job is already structured, generating it takes seconds rather than an afternoon.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycleSteps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                <span className="text-3xl font-black text-[#E8652B]/20 leading-none">{step.num}</span>
                <h3 className="mt-2 font-bold text-[#0F172A] text-base">{step.title}</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SPEED MATTERS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Why Speed Matters</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Invoice delay is a cash flow problem, not just an admin inconvenience
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                In haulage, the cost of running a truck is immediate. Fuel, driver wages, maintenance, and subcontractor payments all occur at the time of the job. The revenue from that same job is delayed by however long it takes to create and send an invoice, plus the client&apos;s payment terms, plus however long that client takes to actually pay.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                If your job-to-invoice time is five days, and payment terms are 30 days, and your client pays at day 35 on average, you are funding five weeks of operations before you receive the money for work already completed. At scale — 50 trucks, 200+ jobs per week — that timing gap translates directly into working capital pressure.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Reducing job-to-invoice time does not speed up payment terms, but it starts the clock earlier. If the invoice goes out the same day the job completes rather than four days later, payment arrives four days earlier. Across a large operation running hundreds of jobs per week, that is meaningful.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                HaulageOps removes the structural delay. The invoice is not waiting for the docket to arrive at the office. The rate does not need to be looked up. The job record already has everything the invoice needs — the invoice generation is the last step in a connected workflow, not the start of a separate one.
              </p>
            </div>
            <div>
              {/* HaulageOps timeline visual */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
                <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                  Job to Invoice — HaulageOps Timeline
                </div>
                <div className="p-4 sm:p-5 space-y-2">
                  {haulageTimeline.map((step, i) => (
                    <div key={step.time + i} className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[#FBBF24] text-[10px] font-bold uppercase tracking-wider">{step.time}</span>
                        <CheckCircle className="h-3 w-3 text-[#4ADE80]" />
                      </div>
                      <p className="text-[#E2E8F0] text-[11px] mt-1 leading-relaxed">{step.text}</p>
                    </div>
                  ))}
                  <p className="text-[10px] text-[#94A3B8]">
                    The entire chain completes within the same day — compared to the traditional five-day process shown above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OLD PROCESS VS HAULAGEOPS */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Old Process vs HaulageOps</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            What changes at each step of the billing workflow
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="text-left px-5 py-3 font-semibold rounded-tl-xl">Step</th>
                  <th className="text-left px-5 py-3 font-semibold">Old Process</th>
                  <th className="text-left px-5 py-3 font-semibold rounded-tr-xl text-[#E8652B]">HaulageOps</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.step} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="px-5 py-3 text-[#0F172A] font-medium border-b border-[#E2E8F0]">{row.step}</td>
                    <td className="px-5 py-3 text-[#64748B] border-b border-[#E2E8F0]">{row.old}</td>
                    <td className="px-5 py-3 text-[#16A34A] font-semibold border-b border-[#E2E8F0]">{row.haulage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* THE XERO CONNECTION */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Xero Connection</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            One integration that runs both ways — invoices out, payments back
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
              <h3 className="font-bold text-[#0F172A] flex items-center gap-2">
                <RefreshCw className="h-4 w-4 text-[#E8652B]" /> How the Xero integration works
              </h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                HaulageOps connects to Xero via OAuth2 — authorised once through the Xero login flow, no API keys to manage manually. When an invoice is generated in HaulageOps, it syncs to your Xero organisation automatically. The sync runs on a 6-hourly cron schedule for routine updates and responds to real-time payment webhooks when a payment is received in Xero.
              </p>
              <ul className="mt-5 space-y-3">
                {xeroBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/platform/integrations/xero" className="mt-5 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                Full Xero Integration detail <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
              <h3 className="font-bold text-[#0F172A] flex items-center gap-2">
                <X className="h-4 w-4 text-[#DC2626]" /> What you do not do with HaulageOps + Xero
              </h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                You do not re-enter invoice data into Xero. You do not check Xero manually to see if a client has paid and then update HaulageOps separately. You do not maintain two records of the same transaction. The integration removes the manual steps at both ends of the billing lifecycle — invoice creation and payment receipt — so the two systems stay in sync automatically.
              </p>
              <ul className="mt-5 space-y-3">
                {notDoBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/platform/billing-and-invoicing" className="mt-5 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                Billing &amp; Invoicing platform detail <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 p-5 rounded-2xl border border-[#F39A2D] bg-[#FFF8EC]">
            <p className="text-sm text-[#334155] leading-relaxed">
              <strong className="text-[#0F172A]">MYOB note:</strong> MYOB integration is available as an add-on subject to scoping. It is not part of the standard product. Contact us to discuss your accounting system requirements before assuming compatibility.
            </p>
          </div>
        </div>
      </section>

      {/* CLIENT PORTAL INVOICING */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Client Portal Invoicing</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Your client sees the invoice, the POD, and the job record — without calling you
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                When an invoice is generated in HaulageOps, it becomes visible in the client portal immediately. The client logs in to their dedicated portal and sees their invoices alongside the job records and POD that the invoice is based on. They can view the delivery photograph, the signed delivery record, and the invoice breakdown — all in one place.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                This reduces inbound queries from clients. They do not email asking for a copy of the docket. They do not call asking what a particular line item relates to. The supporting evidence is attached to the invoice — the client can see it as soon as they see the invoice.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                For clients with high job volumes, the client portal also provides access to historical invoices and job-level reporting. They can review their spending by period, by job type, or by material — without your admin team generating a custom report for each request.
              </p>
              <ul className="mt-6 space-y-3">
                {portalBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {/* Client portal invoice view visual */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
                <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                  Client Portal — Invoice View
                </div>
                <div className="p-4 sm:p-5 space-y-3">
                  {portalInvoices.map((inv) => (
                    <div key={inv.ref} className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <p className="text-white text-[11px] font-semibold">{inv.ref}</p>
                          <p className="text-[#94A3B8] text-[10px] mt-0.5">{inv.job}</p>
                          <p className="text-[#E2E8F0] text-[11px] font-bold mt-1">{inv.amount}</p>
                        </div>
                        <span className={`px-1.5 py-0.5 rounded text-[9px] font-semibold ${inv.statusCls}`}>{inv.status}</span>
                      </div>
                    </div>
                  ))}
                  <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                    <p className="text-[10px] text-[#94A3B8] uppercase tracking-wider font-bold">Linked evidence — INV-0241</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-[#3B82F6]/15 text-[#60A5FA] text-[9px] font-semibold">Photo</span>
                      <span className="px-1.5 py-0.5 rounded bg-[#16A34A]/15 text-[#4ADE80] text-[9px] font-semibold">Signature</span>
                      <span className="px-1.5 py-0.5 rounded bg-[#F59E0B]/15 text-[#FBBF24] text-[9px] font-semibold">Job JOB-1844</span>
                      <span className="text-[9px] text-[#94A3B8] ml-auto">View full POD →</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-[#475569]">
                    Client sees the charge, the underlying job, and the signed proof together — no email attachment, no query to admin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently Asked Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Job to invoice — common questions.
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
            The billing workflow connects to these features and solutions
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">
                    {card.title}
                  </Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
                <Link href={card.href} className="mt-3 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  {card.linkLabel} <ArrowRight className="h-3.5 w-3.5" />
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See the job-to-invoice workflow in a 20-minute demo</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              We will walk through job creation, rate application, POD capture and Xero sync with your billing process in mind.
            </p>
          </div>
          <Link href="/demo" className="shrink-0">
            <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
              Book a Demo
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}

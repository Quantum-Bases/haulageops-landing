import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, Camera, FileText, Check } from "lucide-react";

export const metadata = {
  title: "Haulage Invoicing Software | HaulageOps",
  description:
    "Generate invoices from completed jobs, push them to Xero and give clients access in the portal. No re-entering data. No chasing missing dockets.",
};

const heroKickers = [
  "Built from completed job",
  "Full lifecycle: draft → paid",
  "Xero sync + payment webhooks",
  "POD attached at completion",
  "Client portal invoice access",
];

const proofStrip = [
  { strong: "Auto-built", sub: "from completed job record" },
  { strong: "5-stage", sub: "invoice lifecycle" },
  { strong: "Xero OAuth2", sub: "6-hourly + webhooks" },
  { strong: "POD attached", sub: "no chasing dockets" },
  { strong: "Client portal", sub: "invoice + payment status" },
  { strong: "No re-entry", sub: "rate & job detail carry through" },
];

const invoiceContent = [
  "Client name and billing details from the client record",
  "Job date, material type, pickup and delivery site",
  "Rate applied (per-tonne, per-load, hourly or fixed-fee) from the client rate card",
  "Quantity — tonnes, loads, or hours as applicable to the rate type",
  "Calculated invoice value",
  "Proof of delivery: photos, documents, customer signature — already attached at job completion",
  "Job reference and job ID for the client's records",
];

const lifecycleSteps = [
  {
    num: "01",
    title: "Draft",
    desc: "Invoice is generated from the completed job record. Finance can review the details, confirm the rate, check the attached POD, and make any adjustments before sending. The invoice is not visible to the client at this stage.",
  },
  {
    num: "02",
    title: "Sent",
    desc: "Invoice is sent to the client. It appears in the client portal with \"Sent\" status. The invoice is simultaneously pushed to Xero as an approved invoice awaiting payment. The client can download the PDF from their portal.",
  },
  {
    num: "03",
    title: "Paid",
    desc: "When payment is recorded in Xero, the Xero payment webhook fires and updates the invoice status in HaulageOps to Paid. The client portal shows the invoice as paid. Finance can see payment confirmed without checking Xero separately.",
  },
  {
    num: "04",
    title: "Overdue",
    desc: "If a payment due date passes without a payment event from Xero, the invoice status moves to Overdue. Finance can see all overdue invoices in the billing dashboard and prioritise follow-up. The client portal also reflects the overdue status.",
  },
  {
    num: "05",
    title: "Voided",
    desc: "If an invoice needs to be cancelled — disputed, duplicated, or raised in error — it can be voided. Voided invoices are retained in the system for audit purposes with the void reason recorded. The job record is not deleted — only the invoice is voided.",
  },
];

const xeroToXero = [
  "Invoice creation: client, line items, rate, quantity, job reference, due date",
  "Invoice status updates (sent, voided)",
  "Sync runs every 6 hours via a scheduled cron job",
  "Real-time push available when invoice is sent — does not wait for next cron cycle",
];

const xeroFromXero = [
  "Payment events: when a payment is recorded against an invoice in Xero, a webhook fires back to HaulageOps",
  "Invoice status in HaulageOps updates to Paid when the webhook is received",
  "Client portal invoice status updates to Paid",
  "Finance dashboard in HaulageOps reflects the payment without a manual step",
];

const comparisonRows = [
  {
    step: "Get the docket from the driver",
    manual: "Wait days for paper to return — sometimes it never does",
    haulageops: "POD captured at delivery and attached to job record immediately",
  },
  {
    step: "Find the right rate for this client and job",
    manual: "Look up spreadsheet — hope it's the current version",
    haulageops: "Rate was attached at job creation from client rate card",
  },
  {
    step: "Enter invoice into accounting software",
    manual: "Manually re-enter client, job, rate, quantity into Xero",
    haulageops: "Invoice generated from job record and pushed to Xero automatically",
  },
  {
    step: "Attach the docket",
    manual: "Scan paper docket, attach PDF to Xero invoice manually",
    haulageops: "POD already attached to invoice from the job record",
  },
  {
    step: "Send the invoice",
    manual: "Email PDF from Xero or accounting software",
    haulageops: "Invoice sent from HaulageOps — visible in client portal and pushed to Xero",
  },
  {
    step: "Check if it has been paid",
    manual: "Check Xero, email accounts team, call client",
    haulageops: "Xero payment webhook updates HaulageOps and client portal status automatically",
  },
  {
    step: "Client asks for a copy of the invoice",
    manual: "Find in Xero, export PDF, email to client",
    haulageops: "Client downloads from their portal — no one needs to send it",
  },
  {
    step: "Client disputes the docket",
    manual: "Find paper, photograph, email back and forth",
    haulageops: "POD with photo, documents and signature is in the system — share portal access",
  },
];

const connectedModules = [
  {
    title: "Xero Integration",
    href: "/platform/integrations/xero",
    desc: "OAuth2 connection, 6-hourly cron sync, real-time payment webhooks. Invoices flow from HaulageOps to Xero. Payment confirmations flow from Xero back to HaulageOps. No manual export step. No double-entry.",
  },
  {
    title: "Rate Management",
    href: "/platform/rate-management",
    desc: "The rate on every invoice comes from the rate management module — client rate card, rate type, effective date. Rate integrity from rate card to invoice to Xero means no rate discrepancies and no manual rate lookup at invoice time.",
  },
  {
    title: "Client Portal",
    href: "/platform/client-portal",
    desc: "Every invoice sent from HaulageOps is visible to the relevant client in their portal. Clients can see invoice status (sent, paid, overdue) and download PDF invoices without calling your office. Payment status updates when Xero confirms the payment.",
  },
];

const faqs = [
  {
    q: "How does the Xero sync work exactly?",
    a: "HaulageOps connects to Xero via OAuth2 — you authorise the connection from within your HaulageOps account settings, and Xero grants a secure token. Once connected, invoices generated in HaulageOps are pushed to Xero as approved invoices. The sync runs on a 6-hourly cron schedule, but invoices are also pushed in real time when marked as Sent. Payment events from Xero arrive via webhook: when a payment is recorded against an invoice in Xero (manually entered or via a connected bank feed), Xero sends a webhook to HaulageOps and the invoice status is updated to Paid immediately. This keeps both systems in sync without anyone manually updating either.",
  },
  {
    q: "What if an invoice is disputed by the client?",
    a: "If a client disputes an invoice — questioning the rate, the quantity, or the delivery evidence — you have everything needed to respond without searching filing cabinets. The job record attached to the invoice contains the rate applied (from the rate card), the POD captured by the driver (photo, documents, customer signature), and the audit trail showing who created and approved the job. You can share portal access so the client can view the POD themselves. If the dispute results in a credit or correction, the invoice can be voided and a new invoice raised. The voided invoice is retained in the system for the audit trail.",
  },
  {
    q: "Can a client see an invoice before it has been sent?",
    a: "No. An invoice in Draft status is not visible in the client portal. The invoice only appears in the client's portal once it reaches Sent status. This gives your finance team the opportunity to review and correct the invoice before the client sees it. Once sent, the invoice is visible to the client in their portal with a Sent status, and they can download it as a PDF.",
  },
  {
    q: "Can I batch multiple jobs into a single invoice?",
    a: "HaulageOps generates invoices from job records. The standard workflow is one invoice per job or a grouped invoice for multiple jobs for the same client over a billing period. The specific batching configuration depends on your billing cadence — weekly billing, project-based billing, or per-job. This is something configured during implementation to match your existing billing approach. Book a demo to discuss how your current billing structure would map to the HaulageOps invoicing workflow.",
  },
  {
    q: "Does HaulageOps connect to MYOB?",
    a: "Xero is the standard accounting integration. A MYOB integration is available as an add-on subject to scope — it is not included as standard. If MYOB is your primary accounting system, raise this in your demo conversation and we can discuss the options available for your situation.",
  },
  {
    q: "What happens to an invoice if the associated job is amended after the invoice is raised?",
    a: "Once an invoice is in Sent status, the job record and invoice are treated as finalised for billing purposes. If a job needs to be corrected after invoicing — for example, a quantity discrepancy is identified after the invoice is sent — the standard process is to void the original invoice and raise a new one from the corrected job record. Both the void action and the new invoice are recorded in the audit trail. The original job record is not deleted.",
  },
];

export default function BillingAndInvoicingPage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb */}
      <div className="pt-24 pb-0 bg-[#FFF9F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B]">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/platform" className="hover:text-[#E8652B]">Platform</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Billing &amp; Invoicing</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Billing &amp; Invoicing
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            The job is complete. The invoice is already built.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Invoice generated from the completed job record — rate, POD and job detail already attached. Full invoice lifecycle in HaulageOps. Xero sync via OAuth2. Client sees invoice status in their portal. No re-entering data. No chasing dockets.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/solutions/job-to-invoice">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Job to Invoice Workflow
              </Button>
            </Link>
          </div>
          {/* Kicker pills */}
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {proofStrip.map((item) => (
              <div key={item.strong} className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-sm">{item.strong}</span>
                <span className="text-[#94A3B8] text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHERE INVOICES COME FROM */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Where Invoices Come From</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Manual invoice processes fail because they start with a blank page. HaulageOps starts from the job.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            The typical haulage invoicing process goes like this: wait for the docket to return from the driver, find the rate for that client and job type, re-enter the job details into your accounting software, attach the docket manually, send it, then follow up for payment. Each step introduces delay. Dockets get lost. Rates get applied incorrectly. Data gets re-entered with errors.
          </p>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            In HaulageOps, the invoice does not start from a blank page. It starts from the completed job record — which already contains the client, the service, the rate, the date, the quantity, and the proof of delivery captured by the driver at the moment of completion. Finance teams do not reconstruct a job from paper; they review a job record and generate an invoice from it.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">What is already on the invoice when a job completes</h3>
              <ul className="space-y-3">
                {invoiceContent.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-[#475569] leading-relaxed">
                Finance reviews the record, confirms the details, and the invoice is generated. No data entry. No rate lookup. No docket hunting.
              </p>
            </div>
            {/* Invoice visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden flex flex-col">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                HaulageOps — Invoice Generated from Job
              </div>
              <div className="flex-1 p-6 text-[#94A3B8] text-sm font-mono leading-relaxed">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-semibold">INV-2026-0847</span>
                  <span className="px-2 py-0.5 rounded bg-[#3B82F6]/20 text-[#60A5FA] text-[10px] font-semibold">Sent</span>
                </div>
                <div className="space-y-2 text-xs">
                  <p>Client: <span className="text-white font-medium">&quot;Laing O'Rourke Civil&quot;</span></p>
                  <p>Job date: 28 Jul 2026</p>
                  <p>Material: Type 1 Crushed Limestone</p>
                  <p>Pickup: Breedon Quarry</p>
                  <p>Delivery: M25 Junction 10 Project</p>
                  <p>Rate: <span className="text-white">$18.50</span> per tonne</p>
                  <p>Quantity: 22.4 tonnes</p>
                  <p className="text-[#FBBF24] font-semibold">Total: $414.40</p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#1E293B] border border-[#334155] text-[10px] text-[#94A3B8]">
                    <Camera className="h-3 w-3 text-[#4ADE80]" /> POD Photo
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#1E293B] border border-[#334155] text-[10px] text-[#94A3B8]">
                    <FileText className="h-3 w-3 text-[#4ADE80]" /> Scale Docket – 28 Jul
                  </span>
                </div>
                <p className="mt-4 flex items-center gap-1.5 text-[10px] text-[#4ADE80] font-semibold">
                  <Check className="h-3 w-3" /> Synced to Xero
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-[10px]">
                  <span className="px-2 py-1 rounded bg-[#E8652B] text-white font-semibold">Send to Client</span>
                  <span className="px-2 py-1 rounded bg-[#334155] text-[#94A3B8] font-semibold">Mark Paid</span>
                  <span className="px-2 py-1 rounded bg-[#334155] text-[#94A3B8] font-semibold">Void</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INVOICE LIFECYCLE */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Invoice Lifecycle</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            From completed job to paid invoice — five stages, all tracked.
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* XERO INTEGRATION */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Xero Integration</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            OAuth2 connection. Invoices push to Xero. Payments come back via webhook.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            HaulageOps connects to Xero via a secure OAuth2 integration. You authorise the connection once from your HaulageOps account settings — no API keys to manage, no manual exports. From that point, the invoice data flows between the two systems automatically.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">What flows from HaulageOps to Xero</h3>
              <ul className="space-y-3">
                {xeroToXero.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-[#475569] leading-relaxed">
                Invoices appear in Xero as approved invoices under the correct client contact. Your Xero chart of accounts and tax codes can be mapped during implementation to ensure invoices land in the correct categories.
              </p>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">What flows from Xero back to HaulageOps</h3>
              <ul className="space-y-3">
                {xeroFromXero.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-[#475569] leading-relaxed">
                This bidirectional flow means HaulageOps and Xero stay in sync without anyone manually updating both systems. Payment confirmation is automatic when Xero receives the payment — whether recorded by your accounts team in Xero directly or received through a connected bank feed.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-[#475569]">
            Full details:{" "}
            <Link href="/platform/integrations/xero" className="text-[#E8652B] hover:underline font-medium">
              Xero Integration
            </Link>{" "}
            — setup, sync behaviour, field mapping and payment webhook configuration.
          </p>
        </div>
      </section>

      {/* WHAT THIS REPLACES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What This Replaces</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The manual invoice process has at least six failure points. This removes them.
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="text-left px-5 py-3 font-semibold rounded-tl-xl">Invoice step</th>
                  <th className="text-left px-5 py-3 font-semibold">Manual process</th>
                  <th className="text-left px-5 py-3 font-semibold rounded-tr-xl text-[#E8652B]">HaulageOps workflow</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.step} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="px-5 py-3 text-[#0F172A] font-medium border-b border-[#E2E8F0]">{row.step}</td>
                    <td className="px-5 py-3 text-[#64748B] border-b border-[#E2E8F0]">{row.manual}</td>
                    <td className="px-5 py-3 text-[#16A34A] font-semibold border-b border-[#E2E8F0]">{row.haulageops}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RELATED PLATFORM FEATURES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related Platform Features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Billing and invoicing connects to these platform areas.
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {connectedModules.map((mod) => (
              <div key={mod.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={mod.href} className="hover:text-[#E8652B] transition-colors">
                    {mod.title}
                  </Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#475569]">
            Also see:{" "}
            <Link href="/solutions/job-to-invoice" className="text-[#E8652B] hover:underline font-medium">
              Job to Invoice
            </Link>{" "}
            — the full operational picture of how a job moves from dispatch through to a paid invoice without any manual data re-entry.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Frequently asked about HaulageOps billing and invoicing.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See the job-to-invoice workflow in a live demo.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Book a 20-minute session and walk through how a completed job becomes a Xero-synced invoice — with the docket already attached and the rate already applied.
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

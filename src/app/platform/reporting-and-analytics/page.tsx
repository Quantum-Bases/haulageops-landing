import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import { ExecutiveReportingMockup, InvoiceGeneratedMockup } from "@/components/shared/platform-mockups";

export const metadata = {
  title: "Haulage Operations Reporting and Analytics | HaulageOps",
  description:
    "Operational, financial and compliance reporting across jobs, drivers, clients and invoices — without asking anyone to rebuild the data from scratch.",
};

const heroKickers = [
  "Operational reporting",
  "Financial reporting",
  "Compliance reporting",
  "Client-specific reports",
];

const proofStrip = [
  "Job history by client, driver, period",
  "Revenue and invoice status",
  "Outstanding accounts receivable",
  "Driver activity and availability",
  "Compliance records and expiry status",
  "Client portal reporting self-service",
];

const reportCards = [
  {
    title: "Operational reporting",
    desc: "The job-level data that tells you how the business ran over any period — volumes, completion rates, client-specific activity, and operational trends. Filter by client, driver, vehicle, date range, or job type.",
    points: [
      "Job history by client — loads, tonnage, completion status",
      "Job history by driver — what each driver moved and when",
      "Job history by period — week, month, quarter",
      "Jobs by status — completed, in progress, cancelled",
      "Subcontractor job allocation and completion",
    ],
  },
  {
    title: "Financial reporting",
    desc: "Revenue by client and period, invoice status across the book, outstanding accounts, and payment timing. Finance gets structured job-based reporting — not a pile of paper dockets and a spreadsheet to reconcile.",
    points: [
      "Revenue by client and period",
      "Invoice status: draft, sent, paid, overdue, voided",
      "Outstanding accounts receivable — aged by client",
      "Subcontractor cost summary by period",
      "Rate card usage — which rates were applied to which jobs",
    ],
  },
  {
    title: "Driver and fleet reporting",
    desc: "Driver activity, availability, break records, and document compliance status — in one view. Fleet utilisation and document expiry across vehicles. Know who is available, who has lapsed compliance, and which vehicles need attention.",
    points: [
      "Driver job history and load volumes",
      "Break and rest record summary for compliance review",
      "Driver document expiry status — licence, medical, induction",
      "Vehicle document expiry — registration, permits",
      "Fleet utilisation by vehicle and period",
    ],
  },
  {
    title: "Compliance reporting",
    desc: "The compliance picture across drivers, vehicles, subcontractors, and contracts — with expiry status highlighted. Management can see outstanding compliance items without calling the operations team.",
    points: [
      "Documents expiring within a configurable window",
      "Contracts approaching expiry — client and subcontractor",
      "Subcontractor compliance status across the network",
      "Break and rest records for the selected period",
      "Audit log summary — activity by user or by job",
    ],
  },
];

const dashboardPoints = [
  "Summary dashboard: jobs today, revenue MTD, outstanding invoices",
  "Drill into any client, driver, or period for detail",
  "Compliance status flags at the top level — no hunting through individual records",
  "Financial overview without needing access to Xero",
  "Export any report view to CSV for further analysis",
];

const dashboardStats = [
  { label: "Jobs Today", value: "24" },
  { label: "Revenue MTD", value: "$187,400" },
  { label: "Outstanding Invoices", value: "8 ($43,200)" },
  { label: "Documents Expiring Soon", value: "3" },
];

const clientCards = [
  {
    title: "Job history and status",
    desc: "Clients can view their jobs — in progress and historical — through the Client Portal. Status updates flow through in real time. A client asking \u201cwhere is my truck?\u201d gets the answer from the portal, not from your dispatcher.",
  },
  {
    title: "Invoice history and POD",
    desc: "Invoices are visible in the Client Portal with their current status. POD and delivery dockets are attached. A client disputing a delivery has the signed docket in front of them before the conversation starts.",
  },
  {
    title: "Client-specific report exports",
    desc: "Clients who need a period summary — loads delivered this month, total tonnage by site — can access and export this through the Client Portal. Management is not asked to build a custom report for each client at month end.",
  },
];

const liveDataPoints = [
  "Job data: reflected in reports as jobs are completed",
  "Invoice status: updated when changed in HaulageOps or via Xero webhook",
  "Compliance status: updated when documents are uploaded or expiry dates change",
  "All reports exportable to CSV from the reporting interface",
  "No manual data consolidation — the report is the data, not a copy of it",
];

const invoiceRows = [
  { num: "INV-2026-0841", client: "Laing O'Rourke", jobs: "12", amount: "$8,400", sent: "18 Jun", status: "Paid" },
  { num: "INV-2026-0843", client: "Balfour Beatty", jobs: "9", amount: "$6,750", sent: "20 Jun", status: "Sent" },
  { num: "INV-2026-0844", client: "Apex Civil", jobs: "14", amount: "$12,300", sent: "22 Jun", status: "Overdue" },
  { num: "INV-2026-0845", client: "Redlands Council", jobs: "7", amount: "$5,150", sent: "25 Jun", status: "Sent" },
];

const relatedCards = [
  {
    title: "Audit Trail",
    href: "/platform/audit-trail",
    linkLabel: "Audit trail",
    desc: "The audit trail feeds into compliance reporting — who did what and when, queryable by management directly without needing to ask the operations team to provide a history.",
  },
  {
    title: "Billing & Invoicing",
    href: "/platform/billing-and-invoicing",
    linkLabel: "Billing & invoicing",
    desc: "Invoice status, outstanding accounts, and revenue reporting draw directly from the billing module — the same records that produce the invoices, reflected in reports without re-entry.",
  },
  {
    title: "Client Portal",
    href: "/platform/client-portal",
    linkLabel: "Client portal",
    desc: "Client-facing reporting is delivered through the Client Portal — clients see their own job history, invoices, and POD without requiring your office to produce custom reports on request.",
  },
];

const faqs = [
  {
    q: "What can be exported from the reporting module?",
    a: "Any report view can be exported to CSV. This includes job history reports, financial summaries, invoice status reports, driver activity, compliance status, and audit log exports. The exported file contains the same data visible in the reporting interface — no reformatting required. CSV exports are compatible with Excel, Google Sheets, and most accounting or business intelligence tools.",
  },
  {
    q: "How far back does reporting go?",
    a: "Reports draw from the full history of your HaulageOps data — from the point your account was set up. There is no rolling window that cuts off historical data for reporting purposes. A job completed in the first week of your HaulageOps deployment remains queryable in reports indefinitely, subject to your data retention settings.",
  },
  {
    q: "Can clients see their own reports through the Client Portal?",
    a: "Yes. The Client Portal gives clients access to their own job history, delivery status, POD, and invoices. Clients can filter their history by date range and export a summary. This means clients can self-serve their end-of-month volume reconciliation and invoice review without contacting your office to request a custom report.",
  },
  {
    q: "How often does reporting data update?",
    a: "Reporting reflects live data. Job events — completion, status changes, POD uploads — appear in reports as they occur. Invoice status updates when changed in HaulageOps or when a payment event arrives from Xero via webhook. There is no nightly batch or manual sync required to keep reporting current.",
  },
  {
    q: "Can we report on subcontractor activity separately from owned fleet activity?",
    a: "Yes. Job reports can be filtered to show owned fleet jobs, subcontractor jobs, or both. This lets you see the split of your operational capacity — how many loads were handled by each subcontractor, what rates were applied, and how that compares to your owned fleet performance over the same period.",
  },
  {
    q: "Is the Management Reporting portal separate from the Admin Panel?",
    a: "Management Reporting is one of the five role-specific portals in HaulageOps. Directors and ops managers with management-level access can view the reporting dashboard without having access to the full dispatch and admin workflow. This keeps the operational view clean for dispatch staff while giving management the visibility they need.",
  },
];

const barData = [
  { label: "Apex Civil", value: 62 },
  { label: "Balfour Beatty", value: 48 },
  { label: "Laing O'Rourke", value: 41 },
  { label: "Redlands Council", value: 33 },
];

export default function ReportingAnalyticsPage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb */}
      <div className="pt-24 pb-0 bg-neutral-50/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/platform" className="hover:text-[#E8652B]">Platform</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Reporting &amp; Analytics</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-neutral-50/80 via-white to-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Platform — Reporting &amp; Analytics
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Operational data you can actually use, without rebuilding it from scratch.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Job history, revenue, outstanding invoices, driver activity, compliance status, client-specific volumes — the data that runs your business is already in HaulageOps. Reporting surfaces it without asking anyone to rebuild a spreadsheet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform">
              <Button size="lg" variant="outline" className="border-neutral-200 text-neutral-700 hover:bg-neutral-50/50">
                Platform Overview
              </Button>
            </Link>
          </div>
          {/* Kicker pills */}
          <div className="mt-8 flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-300 fill-mode-both">
            {heroKickers.map((pill) => (
              <span key={pill} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 text-xs font-medium text-neutral-700">
                <CheckCircle className="h-3.5 w-3.5 text-[#E8652B] shrink-0" />
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-neutral-900 py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {proofStrip.map((item) => (
              <div key={item} className="flex items-center justify-center gap-2">
                <CheckCircle className="h-3.5 w-3.5 text-[#E8652B] shrink-0" />
                <span className="text-white font-bold text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT GETS REPORTED */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What gets reported</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 max-w-3xl">
            Four reporting categories cover every level of the business.
          </h2>
          <p className="mt-6 text-neutral-600 max-w-3xl leading-relaxed">
            Reporting in HaulageOps is not a separate data warehouse that needs to be fed — it draws directly from the live job, billing, driver, and compliance records that are already being maintained as part of daily operations. When a job is completed, the data is already in the report.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {reportCards.map((card) => (
              <div key={card.title} className="bg-neutral-50/50 rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{card.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{card.desc}</p>
                <ul className="mt-5 space-y-3">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-neutral-700">
                      <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANAGEMENT DASHBOARD */}
      <section className="py-20 bg-neutral-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Management dashboard</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 max-w-xl">
                The view management needs — without calling the dispatcher.
              </h2>
              <p className="mt-6 text-neutral-600 leading-relaxed">
                The Management Reporting portal in HaulageOps is one of the five role-specific portals. It provides cross-operational visibility — operational, financial, and compliance data in a single view — designed for directors and ops managers who need to understand the business without being inside the dispatch workflow.
              </p>
              <ul className="mt-6 space-y-3">
                {dashboardPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-neutral-600 leading-relaxed">
                The data feeding the dashboard is the same live data that operations works with — not a separate system that needs to be updated manually or synced on a schedule.
              </p>
            </div>
            {/* Management reporting dashboard visual mockup */}
            <div className="shadow-2xl rounded-2xl overflow-hidden border border-neutral-800">
              <ExecutiveReportingMockup />
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT REPORTING */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Client reporting</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 max-w-3xl">
            Clients can view their own job and invoice history without calling you.
          </h2>
          <p className="mt-6 text-neutral-600 max-w-3xl leading-relaxed">
            The Client Portal in HaulageOps gives clients self-service access to their own operational data — job status, delivery history, POD, invoices, and rate cards. Client-specific reporting means clients can see what they need without a phone call to your office asking for a summary.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {clientCards.map((card) => (
              <div key={card.title} className="bg-neutral-50/50 rounded-2xl p-6 border border-neutral-200">
                <h3 className="font-bold text-neutral-900 mb-2">{card.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/platform/client-portal">
              <Button variant="outline" className="border-neutral-200 text-neutral-700 hover:bg-neutral-50/50">
                Client Portal <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* EXPORT AND UPDATE FREQUENCY */}
      <section className="py-20 bg-neutral-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Financial reporting visual mockup */}
            <div className="shadow-2xl rounded-2xl overflow-hidden border border-neutral-800 order-1 lg:order-none">
              <InvoiceGeneratedMockup />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Export and update frequency</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 max-w-xl">
                Live data, exportable on demand.
              </h2>
              <p className="mt-6 text-neutral-600 leading-relaxed">
                Reporting in HaulageOps reflects the current state of the data. When a job is completed, it appears in job reports immediately. When an invoice status changes — including payment received from Xero — the financial reports reflect that change without a manual update or a nightly batch job.
              </p>
              <ul className="mt-6 space-y-3">
                {liveDataPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-neutral-600 leading-relaxed">
                The contrast to a spreadsheet-based reporting approach: when your data lives in HaulageOps, the report does not need to be rebuilt each time. The data is already there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PLATFORM FEATURES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related platform features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 max-w-3xl">
            Reporting connects every part of the platform.
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {relatedCards.map((card) => (
              <div key={card.title} className="bg-neutral-50/50 rounded-2xl p-6 border border-neutral-200">
                <h3 className="font-bold text-neutral-900 mb-2">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">
                    {card.title}
                  </Link>
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{card.desc}</p>
                <Link href={card.href} className="mt-3 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  {card.linkLabel} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/platform/compliance">
              <Button variant="outline" className="border-neutral-200 text-neutral-700 hover:bg-neutral-50/50">
                Compliance &amp; Audit <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-neutral-50/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently asked questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900">
            Reporting and analytics — common questions.
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-neutral-200 bg-white rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-neutral-900 text-sm list-none hover:bg-neutral-50/50">
                  {faq.q}
                  <ChevronRight className="h-4 w-4 text-neutral-400 shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                  <p className="pt-4">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Stop calling the dispatcher for a summary. The data is already there.</h2>
            <p className="mt-2 text-neutral-400 text-sm leading-relaxed max-w-xl">
              See how HaulageOps surfaces operational, financial, and compliance reporting from your live job data — in a 20-minute demo.
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

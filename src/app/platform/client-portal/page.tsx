import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, ArrowRight, Download, Truck } from "lucide-react";

export const metadata = {
  title: "Client Portal for Haulage Operators | HaulageOps",
  description:
    "Give clients live job visibility, delivery evidence, invoices and rate cards without status calls. The HaulageOps client portal is included with every account.",
};

const heroKickers = [
  "Live job status",
  "POD & docket access",
  "Invoices & payment status",
  "Agreed rate card access",
  "Client-specific reports",
];

const proofStrip = [
  { label: "Self-service", detail: "not just a tracking link" },
  { label: "Live status", detail: "real-time job updates" },
  { label: "POD access", detail: "photos, docs, signatures" },
  { label: "Invoices", detail: "view & download direct" },
  { label: "Rate cards", detail: "agreed rates on file" },
  { label: "RBAC", detail: "no cross-client data leaks" },
];

const clientAccessPoints = [
  "Live status of every current job assigned to them",
  "Job history — searchable and filterable by date, material, site",
  "Proof of delivery: photos, uploaded documents, customer signature records",
  "Invoices with status (draft, sent, paid, overdue)",
  "Invoice download in PDF format",
  "Agreed rate cards for the services you provide to them",
  "Client-specific reports: delivery volumes, job history, financial summary",
  "No access to other clients' data, internal driver information, or your margins",
];

const portalCards = [
  {
    title: "Live job status",
    desc: "Each job assigned to a client updates in real time as the driver moves through the status workflow: dispatched, en route, at pickup, loading, in transit, at delivery, complete. The client sees exactly what stage their delivery is at — updated live — without calling your office or your driver.",
    points: [
      "Real-time status for all current jobs",
      "Material type, pickup and delivery site visible per job",
      "Scheduled time vs actual progress visible",
      "No dispatcher involvement required",
    ],
  },
  {
    title: "Proof of delivery",
    desc: "When a driver completes a job and captures POD — photograph, delivery documents, customer signature — the evidence is immediately accessible in the client portal. The client does not need to wait for you to email a docket. They can access and download POD records themselves, linked to the specific job.",
    points: [
      "Photos captured at delivery site",
      "Uploaded scale dockets, delivery notes, weigh tickets",
      "Customer signature captured via driver app",
      "Downloadable and accessible via portal immediately on completion",
    ],
  },
  {
    title: "Invoices and payment status",
    desc: "Invoices generated from completed jobs appear in the client portal once they reach the appropriate stage. Clients can see invoice status (sent, paid, overdue) and download invoices in PDF. Payment status updates when Xero payment events are received. This eliminates \u201ccan you resend the invoice?\u201d and \u201chas my payment been received?\u201d from your inbox.",
    points: [
      "Invoice list with status: sent, paid, overdue",
      "Download invoice PDF directly from portal",
      "Payment confirmed when Xero payment event received",
      "Invoice linked to the job and POD records",
    ],
  },
  {
    title: "Rate cards and reporting",
    desc: "Clients can view their agreed rate cards in the portal — the rates you have set for their jobs. This removes rate disputes caused by emailed rate sheets going out of date. The rate in the portal is the rate in the system. Client-specific reports show delivery volumes, job history and financial summaries for their account.",
    points: [
      "Agreed rate card visible per rate type (per-tonne, per-load, hourly)",
      "Effective dating — clients see current rates, not superseded ones",
      "Client-specific delivery and financial reporting",
      "Downloadable report data",
    ],
  },
];

const accessCards = [
  {
    title: "Client sees",
    desc: "Their own jobs (current and historical), their proof of delivery records, their invoices and payment status, their agreed rate card, and their client-specific reports. Nothing else.",
  },
  {
    title: "Client cannot see",
    desc: "Other clients' jobs, your internal dispatch board, driver identities and positions, subcontractor information, your internal cost rates or subcontractor pay rates, or any other client's invoices or rate cards.",
  },
  {
    title: "Multiple users per client",
    desc: "A client company can have multiple portal users — project manager, accounts payable, site supervisor — each with their own login. You control who is given access and can revoke individual user access without affecting the client company record.",
  },
];

const comparisonRows = [
  {
    ask: "\u201cWhere is my delivery?\u201d",
    email: "Client calls you. You call the driver. You call the client.",
    portal: "Client checks their portal — live status visible without calling anyone",
  },
  {
    ask: "\u201cCan I get the docket for last Tuesday?\u201d",
    email: "You search your email, find the scan, attach and reply",
    portal: "Client downloads POD directly from portal by job date",
  },
  {
    ask: "\u201cCan you resend invoice #1047?\u201d",
    email: "You find it in Xero, export PDF, email it",
    portal: "Client downloads invoice from their portal invoice list",
  },
  {
    ask: "\u201cHas my payment been received?\u201d",
    email: "You check Xero and reply by email",
    portal: "Client sees payment status in portal — updates when Xero confirms",
  },
  {
    ask: "\u201cWhat rate are you charging for aggregates?\u201d",
    email: "You email a rate schedule (which may be outdated)",
    portal: "Client views their live rate card in the portal — always current",
  },
  {
    ask: "\u201cHow many loads did you do for us last month?\u201d",
    email: "You pull a report and email it manually",
    portal: "Client generates their own report from the portal",
  },
];

const tenderCards = [
  {
    title: "Live visibility",
    desc: "Large clients — particularly principal contractors on construction projects — want to know where their material is without calling the haulier. The client portal gives their project managers real-time job status without requiring manual updates from your team.",
  },
  {
    title: "Digital delivery evidence",
    desc: "Construction contracts often require proof of delivery and docket records for payment certification. Digital POD accessible directly in the client portal means clients have evidence on hand without chasing paper, and you have a defensible record without searching filing cabinets.",
  },
  {
    title: "Formal rate transparency",
    desc: "Agreed rates stored in the system and visible in the client portal reduce invoice dispute risk. The rate the client sees in their portal is the rate applied to their invoice — both come from the same record in HaulageOps.",
  },
];

const clientJobs = [
  { status: "In Transit", meta: "JOB-2026-04472 · 28 t Type 1 Limestone · Apex Quarry → Midland Site B", cls: "text-[#E8652B] bg-[#E8652B]/15" },
  { status: "At Delivery", meta: "JOB-2026-04471 · 24 t Roadbase · Apex Quarry → Midland Site B", cls: "text-[#3B82F6] bg-[#3B82F6]/15" },
  { status: "Scheduled", meta: "JOB-2026-04475 · 28 t Type 1 · 13:30 pickup", cls: "text-[#94A3B8] bg-[#334155]" },
];

const clientInvoices = [
  { num: "INV-2026-0839", amount: "$8,400", status: "Paid", cls: "text-[#4ADE80] bg-[#16A34A]/20" },
  { num: "INV-2026-0841", amount: "$12,300", status: "Sent", cls: "text-[#3B82F6] bg-[#3B82F6]/15" },
  { num: "INV-2026-0842", amount: "$5,150", status: "Overdue", cls: "text-[#F87171] bg-[#EF4444]/15" },
];

const faqs = [
  {
    q: "How many clients can I give portal access to?",
    a: "There is no fixed limit on the number of client companies you can add to the portal. Each client company gets isolated access to their own data. Within each client company, you can create multiple portal user accounts — project managers, accounts payable contacts, site supervisors — each with their own login. You control who has access and can revoke individual user access at any time without affecting the client company record.",
  },
  {
    q: "Can clients download invoices from the portal?",
    a: "Yes. Invoices that have reached the appropriate stage in the billing lifecycle — typically once they have been sent — are visible in the client's portal invoice list. Clients can download invoices as PDFs directly from the portal without needing to request them from your team. Invoice status (sent, paid, overdue) updates automatically based on payment events from Xero.",
  },
  {
    q: "What can clients see versus what is kept internal?",
    a: "Clients can see: their own jobs (live and historical), proof of delivery for their jobs (photos, documents, signatures), their invoices and payment status, their agreed rate cards, and their client-specific reports. Clients cannot see: your internal dispatch board, driver names and GPS positions, subcontractor information, other clients' jobs or invoices, your internal cost rates or subcontractor pay rates, or your margin on any job. The role-based access control enforces this separation at the data level — it is not a display choice, it is an access control boundary.",
  },
  {
    q: "Does the client need to pay for the portal?",
    a: "No. Like the subcontractor portal, client portal access is free for the client. Only the operating haulage company pays the HaulageOps subscription. Giving your clients portal access does not incur additional per-client fees — it is included in the platform.",
  },
  {
    q: "Can clients see a job that is in progress before it is complete?",
    a: "Yes. The client portal shows live job status in real time. As a driver moves through the job status workflow — dispatched, en route, at pickup, loading, in transit, at delivery — the client can see each status change as it happens. They can see that their delivery is in transit before it arrives, and that it is at the delivery site as the driver arrives. This is particularly useful for construction project managers who need to coordinate on-site receiving.",
  },
  {
    q: "How are rate cards displayed in the client portal?",
    a: "The rate card visible in the client portal reflects the rates you have set for that specific client in the rate management module. If you have multiple rate types (per-tonne, per-load, hourly, fixed-fee), all applicable rates for that client are displayed. Effective dating means the client sees the current active rates, not superseded rate schedules. The rates shown are the rates applied to their invoices — consistency between the rate card and the invoice is a key design goal of the system.",
  },
  {
    q: "Can the client portal be used to build trust with larger construction clients during a tender?",
    a: "Yes — this is an increasingly common use case. When responding to a haulage tender from a Tier 1 or Tier 2 construction contractor, being able to demonstrate that you offer a dedicated client portal with live job tracking, digital POD, invoice access and agreed rate visibility signals operational maturity. Some operators include a client portal demonstration as part of their tender response to differentiate themselves from operators running on paper and spreadsheets.",
  },
];

export default function ClientPortalPage() {
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
            <span className="text-[#0F172A] font-medium">Client Portal</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Platform — Client Portal
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Clients see their jobs, invoices and POD. You stop taking status calls.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            A full self-service portal — not just a tracking link. Live job status, proof of delivery, invoices, rate cards and client-specific reports. Every client gets their own credentialed access. They see their data only.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/solutions/client-visibility">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Client Visibility
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {proofStrip.map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center gap-0.5">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-[#E8652B] shrink-0" />
                  <span className="text-white font-bold text-sm">{item.label}</span>
                </div>
                <span className="text-[#94A3B8] text-xs">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT THE CLIENT PORTAL IS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What the client portal is</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            A dedicated portal — not a shared view, not an email attachment, not a tracking link.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            Many haulage operators manage client communication through a combination of email, phone calls, PDF attachments and occasional tracking links. The client calls to ask where their delivery is. The dispatcher calls the driver. The dispatcher calls the client back. Then the client asks about the invoice. Then the client asks for a copy of the docket. Then the client queries the rate applied.
          </p>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            The HaulageOps client portal replaces all of that with a self-service web application. Each client gets their own login. From that login, they can answer all of these questions themselves — without calling your office. Live job status, proof of delivery, invoice access and rate cards are all in one place, and none of it requires your team to manually send anything.
          </p>
          <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="font-bold text-[#0F172A] text-lg">What clients can access in their portal</h3>
              <ul className="mt-5 space-y-3">
                {clientAccessPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Client portal dashboard visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                HaulageOps — Client Portal Dashboard
              </div>
              <div className="p-4 sm:p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-white font-semibold text-sm">Midland Civils Ltd</p>
                  <div className="flex gap-1 text-[10px]">
                    {["Jobs", "Deliveries", "Invoices", "Rate Cards", "Reports"].map((tab, i) => (
                      <span key={tab} className={`px-2 py-1 rounded ${i === 0 ? "bg-[#E8652B] text-white font-semibold" : "bg-[#1E293B] border border-[#334155] text-[#94A3B8]"}`}>
                        {tab}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                  <p className="text-[#94A3B8] text-[10px] uppercase tracking-wider mb-2">Active jobs — today</p>
                  <div className="space-y-1.5">
                    {clientJobs.map((job) => (
                      <div key={job.status} className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <Truck className="h-3.5 w-3.5 text-[#64748B]" />
                          <span className="text-white text-[11px]">{job.meta}</span>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold whitespace-nowrap ${job.cls}`}>{job.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                  <p className="text-[#94A3B8] text-[10px] uppercase tracking-wider mb-2">Recent invoices</p>
                  <div className="space-y-1.5">
                    {clientInvoices.map((inv) => (
                      <div key={inv.num} className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-white text-[11px]">{inv.num}</span>
                          <span className="text-[#64748B] text-[10px]">{inv.amount}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${inv.cls}`}>{inv.status}</span>
                          <Download className="h-3 w-3 text-[#64748B]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-[10px]">
                  <span className="px-2.5 py-1 rounded bg-[#E8652B] text-white font-semibold">View Rate Card</span>
                  <span className="px-2.5 py-1 rounded bg-[#1E293B] border border-[#334155] text-[#94A3B8]">Download POD for last delivery</span>
                </div>
                <p className="text-[10px] text-[#475569]">
                  Clients see only their company&apos;s data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S IN THE PORTAL */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What&apos;s in the portal</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Five things every client wants to access without calling you.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {portalCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-8 border border-[#E2E8F0]">
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
                <ul className="mt-5 space-y-3">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-[#334155]">
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

      {/* ACCESS CONTROL */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Access control</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Each client sees their data. Only their data.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            Role-based access control (RBAC) in HaulageOps ensures that each client portal login is isolated to that client&apos;s records. There are no shared login credentials, no risk of one client seeing another&apos;s job history, and no accidental exposure of internal information.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {accessCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMAILING PDFs VS CLIENT PORTAL */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Emailing PDFs vs client portal</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            What the client portal replaces in your current workflow.
          </h2>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
            <table className="w-full text-left text-sm min-w-[720px]">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="px-5 py-3.5 font-semibold text-xs uppercase tracking-wider">Client interaction</th>
                  <th className="px-5 py-3.5 font-semibold text-xs uppercase tracking-wider">Email + phone workflow</th>
                  <th className="px-5 py-3.5 font-semibold text-xs uppercase tracking-wider text-[#F39A2D]">HaulageOps client portal</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.ask} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="px-5 py-3.5 font-semibold text-[#0F172A]">{row.ask}</td>
                    <td className="px-5 py-3.5 text-[#64748B]">{row.email}</td>
                    <td className="px-5 py-3.5 text-[#E8652B] font-medium">{row.portal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ENTERPRISE TENDER READINESS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Enterprise tender readiness</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            A client portal makes you a more credible supplier to large construction and civils clients.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            Tier 1 and Tier 2 construction contractors increasingly include operational visibility requirements in haulage tenders. Being able to offer live job tracking, digital POD, invoice access and agreed rate card visibility through a dedicated client portal demonstrates the kind of operational maturity that separates professional haulage operators from those running on spreadsheets and phone calls.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {tenderCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#475569]">
            See also: <Link href="/platform/rate-management" className="text-[#E8652B] hover:underline font-medium">Rate Management</Link> and <Link href="/platform/billing-and-invoicing" className="text-[#E8652B] hover:underline font-medium">Billing &amp; Invoicing</Link> — how rates flow from rate card through to invoice and client portal.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently asked questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Frequently asked about the HaulageOps client portal.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See the client portal in a live demo.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Book a 20-minute session to see how live job status, POD access, invoice downloads and rate cards work together in the client-facing portal — and what your clients would see from day one.
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

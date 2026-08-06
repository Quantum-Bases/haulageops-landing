import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, ArrowRight, FileText } from "lucide-react";

export const metadata = {
  title: "Haulage Compliance Management | HaulageOps",
  description:
    "Comprehensive audit trail, document management, driver record tracking and expiry alerts built into daily operations — not bolted on after the fact.",
};

const heroKickers = [
  "Full audit trail",
  "Azure document storage",
  "Expiry alerts",
  "Break & rest recording",
  "Contract lifecycle",
];

const proofStrip = [
  { label: "Every action", detail: "logged with user + timestamp" },
  { label: "Azure Blob", detail: "secure document storage" },
  { label: "Expiry alerts", detail: "licences, medicals, rego" },
  { label: "Break records", detail: "driver app timestamps" },
  { label: "RBAC", detail: "access control per role" },
  { label: "Audit export", detail: "management pull logs directly" },
];

const complianceCards = [
  {
    title: "Audit trail",
    desc: "Every action taken in HaulageOps is logged automatically: job created, driver assigned, status changed, POD uploaded, invoice generated, document uploaded, user logged in. Each log entry records who, what, and when — with no ability to edit or delete log entries.",
  },
  {
    title: "Document management",
    desc: "Driver licences, medical certificates, vehicle registrations, permits, contracts, insurance certificates and delivery dockets — all stored in Azure Blob Storage, linked to the relevant entity in the system, and accessible to authorised users without searching filing cabinets.",
  },
  {
    title: "Expiry alerts",
    desc: "Document records carry expiry dates. When a driver licence, medical, vehicle registration or insurance certificate is approaching expiry, the system generates an alert. Operators can act on expiring documents before compliance lapses — not after the fact.",
  },
];

const auditTrailItems = [
  "Job created — user, timestamp, job details at creation",
  "Driver assigned or subcontractor delegated — who made the assignment, when",
  "Job status changed — driver or dispatcher, stage, timestamp",
  "Rate applied or overridden — user, rate value, timestamp",
  "POD captured — driver, type of capture (photo/document/signature), timestamp",
  "Invoice generated, sent, paid, or voided — user, action, timestamp",
  "Document uploaded — user, document type, linked entity",
  "User login and access events — who accessed the system, when",
  "Contract created, approved, amended or expired",
  "Break period started and ended — driver identity, timestamps",
];

const auditLogRows = [
  { time: "14:32:07", user: "M. Clarke (Finance)", action: "Invoice Generated", detail: "INV-2026-0847 created from job" },
  { time: "14:28:55", user: "K. Patel (Dispatch)", action: "Job Completed", detail: "Status updated to Completed" },
  { time: "13:41:02", user: "T. Wilson (Driver)", action: "POD Captured", detail: "Photo + customer signature uploaded" },
  { time: "13:40:18", user: "T. Wilson (Driver)", action: "Status: At Delivery", detail: "Location recorded" },
  { time: "11:03:44", user: "T. Wilson (Driver)", action: "Status: In Transit", detail: "En route to delivery site" },
  { time: "09:17:22", user: "K. Patel (Dispatch)", action: "Job Dispatched", detail: "Assigned to T. Wilson" },
  { time: "09:12:05", user: "K. Patel (Dispatch)", action: "Job Created", detail: "Client: Laing O&apos;Rourke, Material: Type 1 Limestone" },
];

const documentCards = [
  {
    title: "Driver document records",
    points: [
      "Heavy vehicle licence — stored with class and expiry date",
      "Medical certificate — stored with expiry date and alert threshold",
      "Induction records — site inductions, safety training completions",
      "Any additional certification required by clients or contracts",
    ],
    desc: "Expiry alerts are generated ahead of the expiry date so licences and medicals can be renewed before they lapse. A driver record showing an expired licence is visible to management in the driver management module — dispatchers can be prevented from assigning expired-document drivers through RBAC configuration.",
    link: { label: "Driver Management", href: "/platform/driver-management" },
  },
  {
    title: "Vehicle document records",
    points: [
      "Vehicle registration — stored with expiry date and alert",
      "Vehicle inspection records and service history",
      "Permits — oversize, restricted access, route permits",
      "Insurance certificates linked to fleet records",
    ],
    desc: "Fleet document records are maintained in the fleet management module. Expiry alerts for vehicle registrations and permits ensure vehicles do not operate outside their permitted compliance dates. Fleet availability and document status are visible to dispatch when assigning vehicles to jobs.",
    link: { label: "Document Management", href: "/platform/document-management" },
  },
  {
    title: "Contract and compliance documents",
    points: [
      "Client contracts — full lifecycle with approval workflow and versioning",
      "Subcontractor agreements — stored against subcontractor records",
      "Insurance certificates — company-level and subcontractor-level",
      "Delivery dockets and POD evidence — stored against job records",
    ],
    desc: "Contract management in HaulageOps includes creation, review, approval, versioning and auto-expiry alerts. When a contract approaches its end date, an alert is generated so renewal or renegotiation can begin before the contract lapses — reducing the risk of operating without a current agreement.",
    link: { label: "Contract Management", href: "/platform/contract-management" },
  },
  {
    title: "Operational delivery evidence",
    points: [
      "POD photos captured by driver at delivery site",
      "Scale dockets and weigh tickets uploaded from the driver app",
      "Customer signatures captured via the driver app signature pad",
      "All POD linked to the specific job record",
    ],
    desc: "Delivery evidence is not a separate filing process — it is created as part of the driver's normal job completion workflow. Because it is stored in Azure and linked to the job record, it is immediately accessible to dispatch, finance, management and the client portal without any manual filing or distribution step.",
    link: { label: "Audit Trail", href: "/platform/audit-trail" },
  },
];

const breakRestCards = [
  {
    title: "What is recorded",
    desc: "Driver identity, break start time, break end time, duration, date, and which job or shift the break occurred during. All stored in the HaulageOps system and accessible in the management and compliance reporting view.",
  },
  {
    title: "Relevance to fatigue compliance",
    desc: "Break records provide a structured digital record relevant to fatigue management obligations, including Chain of Responsibility frameworks where operators have duties as schedulers and employers. This supports — but does not replace — your formal fatigue management obligations and procedures.",
  },
  {
    title: "Important limitation",
    desc: "The HaulageOps driver app is not an Electronic Work Diary (EWD) or Electronic Logging Device (ELD). An ELD/EWD capability is on the product roadmap. The break recording feature provides a digital record within the platform, not a certified EWD output. If your regulatory environment requires a certified EWD, that obligation exists separately.",
  },
];

const rbacCards = [
  {
    title: "Management and director access",
    points: [
      "Full audit trail access — filter by user, job, action type, date range",
      "Export audit logs for external review or regulatory response",
      "All driver and vehicle document records and expiry status",
      "Contract lifecycle status and approval history",
      "Driver break and rest records",
      "Financial reporting and invoice history",
    ],
    desc: "Management can pull any compliance record directly from the system without calling anyone or waiting for someone to compile a report. This is particularly relevant when responding to a regulator request or preparing for a principal contractor audit.",
  },
  {
    title: "Dispatcher and operational access",
    points: [
      "Driver document status — can see if a licence is current or expiring",
      "Vehicle availability and compliance status",
      "Job audit trail for jobs they have access to",
      "Cannot edit compliance records or audit log entries",
      "Cannot access contract approval history or financial audit data",
    ],
    desc: "Dispatchers have the operational visibility they need — whether a driver is compliant to work — without access to the broader compliance and financial audit records that are the domain of management.",
  },
];

const relatedCards = [
  {
    title: "Audit Trail",
    href: "/platform/audit-trail",
    linkLabel: "Audit Trail",
    desc: "The comprehensive action log behind every job, user action, document upload and invoice event. Every entry carries user identity, action detail and timestamp. Immutable and exportable for regulatory or contractual purposes.",
  },
  {
    title: "Document Management",
    href: "/platform/document-management",
    linkLabel: "Document management",
    desc: "Azure Blob Storage for all compliance-relevant documents: driver licences, medicals, vehicle registrations, permits, contracts, insurance, dockets and POD. Linked to entities, searchable, and accessible to authorised users only.",
  },
  {
    title: "Break & Rest Management",
    href: "/platform/break-and-rest-management",
    linkLabel: "Break & rest management",
    desc: "Driver-initiated break recording in the mobile app. Structured digital records with timestamps, accessible to management. Relevant to fatigue compliance obligations — note: not an EWD.",
  },
];

const faqs = [
  {
    q: "Is HaulageOps an Electronic Work Diary (EWD)?",
    a: "No. HaulageOps is not an Electronic Work Diary and does not provide a certified EWD output. The driver app records break and rest periods with timestamps as part of the normal job workflow, and these records are accessible to management through the platform. This provides a structured digital record of break activity within HaulageOps, but it is not equivalent to — and does not substitute for — a certified EWD under the relevant national heavy vehicle regulations. An EWD/ELD capability is on the HaulageOps product roadmap. If your operation requires a certified EWD, that obligation exists and must be fulfilled separately from HaulageOps.",
  },
  {
    q: "Does HaulageOps handle NHVR requirements?",
    a: "HaulageOps is not certified or approved by the National Heavy Vehicle Regulator (NHVR) and makes no claim to satisfy specific NHVR regulatory requirements. The platform provides operational records — audit trail, document storage, break records, driver and vehicle document expiry tracking — that are relevant to Chain of Responsibility (CoR) obligations. These records demonstrate that your business operates with structured processes and documented evidence. Whether those records satisfy a specific NHVR compliance requirement depends on the specific obligation. Operators should take independent legal advice on their CoR obligations and how their system of records supports compliance. See our Chain of Responsibility page for a more detailed discussion.",
  },
  {
    q: "What records are kept in the audit trail?",
    a: "The audit trail records every action performed in the HaulageOps system: job creation, driver and subcontractor assignment, job status changes, rate application and overrides, POD capture, invoice generation, sending, payment confirmation and voiding, document uploads, user login events, contract lifecycle actions (creation, approval, amendment, expiry), and break period records. Each entry contains the user identity (name and role), the specific action taken, any relevant detail (job ID, document type, invoice number), and the precise timestamp. Log entries cannot be edited or deleted.",
  },
  {
    q: "Can I export audit logs for an external audit or regulatory response?",
    a: "Yes. Audit logs can be filtered by date range, user, job, action type or entity and exported to CSV for external review. Management and director users have direct access to pull and export these records without requiring a system administrator or developer to run a query. This means if a principal contractor audits your operations, or a regulator requests records, you can produce a structured export from the platform directly.",
  },
  {
    q: "How are document expiry alerts delivered?",
    a: "Document expiry alerts are generated within the HaulageOps platform. When a driver licence, medical certificate, vehicle registration, permit or insurance certificate is approaching its expiry date, an alert appears in the relevant management dashboard. The alert threshold — how many days before expiry the alert triggers — is configurable during implementation. Management users can see a summary of all expiring documents without reviewing every individual record. Dispatch-level users can see driver and vehicle compliance status without accessing the underlying document records.",
  },
  {
    q: "What happens to compliance records if we stop using HaulageOps?",
    a: "Your operational data — audit trail, job history, documents, driver records, contract records — can be exported during offboarding. Audit logs are exportable to CSV and documents stored in Azure Blob Storage can be downloaded. HaulageOps does not hold your compliance records hostage. The offboarding process, data export timeline and format are covered as part of the standard implementation and terms of service. If data retention requirements for your industry extend beyond your subscription period, raise this during your demo conversation so we can discuss options.",
  },
  {
    q: "Can the compliance module handle subcontractor compliance records?",
    a: "Subcontractor compliance records — insurance certificates, operator licences, subcontractor agreements — can be stored against the subcontractor record in the HaulageOps admin panel. Document expiry alerts apply to subcontractor records as well as driver and vehicle records. This means you can track whether a subcontractor's public liability insurance is current, whether their agreement with you is still valid, and whether any permits they hold are about to expire — all from within the platform, without maintaining a separate spreadsheet of subcontractor compliance status.",
  },
];

export default function CompliancePage() {
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
            <span className="text-[#0F172A] font-medium">Compliance &amp; Audit</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Compliance &amp; Audit
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Compliance built into how you run every job, not how you prepare for an audit.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Comprehensive audit trail on every action. Document management in Azure Blob Storage. Driver and vehicle document expiry alerts. Break and rest recording in the driver app. Contract lifecycle with auto-expiry. RBAC controls who can see and edit compliance records.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/solutions/audit-ready-operations">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Audit-Ready Operations
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

      {/* WHAT COMPLIANCE MEANS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What compliance means in haulage</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Compliance in haulage is not a filing exercise. It is a daily operational requirement.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            Haulage operators face compliance obligations across multiple areas simultaneously: driver licences and medical certificates must be current, vehicle registrations and inspection records must be maintained, fatigue and rest obligations must be recorded, contracts and insurance must not lapse, and every operational decision must be traceable. Preparing for an audit by pulling this information together from filing cabinets, email threads and spreadsheets is a sign that compliance is not embedded in operations — it is bolted on afterwards.
          </p>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            HaulageOps builds compliance into the daily operational workflow. The audit trail is generated automatically by the platform — dispatchers do not create it, managers do not maintain it. Document expiry alerts are generated from the records stored in the system. Break records are created by drivers as part of their normal job workflow. There is nothing extra to do to be compliant — compliance is a byproduct of running your operations through the platform.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {complianceCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE AUDIT TRAIL */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The audit trail</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Every action. Every user. Every timestamp. Immutable and immediately accessible.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            The HaulageOps audit trail is comprehensive — not selective. It does not require anyone to remember to log an action. Every operation performed through the platform generates a log entry automatically. Management and directors can pull audit logs directly from the system without asking anyone to compile a report.
          </p>
          <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="font-bold text-[#0F172A] text-lg">What the audit trail records</h3>
              <ul className="mt-5 space-y-3">
                {auditTrailItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Audit log view visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                HaulageOps — Audit Log View
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-2 text-[10px] mb-4">
                  <span className="px-2.5 py-1 rounded bg-[#1E293B] border border-[#334155] text-[#94A3B8]">JOB-2026-04471</span>
                  <span className="px-2.5 py-1 rounded bg-[#1E293B] border border-[#334155] text-[#94A3B8]">All users</span>
                  <span className="px-2.5 py-1 rounded bg-[#1E293B] border border-[#334155] text-[#94A3B8]">All actions</span>
                  <span className="px-2.5 py-1 rounded bg-[#1E293B] border border-[#334155] text-[#94A3B8]">Any date</span>
                  <span className="ml-auto px-2.5 py-1 rounded bg-[#E8652B] text-white font-semibold">Export to CSV</span>
                </div>
                <div className="space-y-1.5 text-[#94A3B8] font-mono text-[11px]">
                  <div className="grid grid-cols-12 gap-2 px-2 text-[10px] uppercase tracking-wider text-[#64748B] border-b border-[#334155] pb-1.5">
                    <span className="col-span-3">Timestamp</span>
                    <span className="col-span-3">User</span>
                    <span className="col-span-3">Action</span>
                    <span className="col-span-3">Detail</span>
                  </div>
                  {auditLogRows.map((row) => (
                    <div key={row.time} className="grid grid-cols-12 gap-2 px-2 py-1.5 rounded bg-[#1E293B] border border-[#334155] items-center">
                      <span className="col-span-3 text-white">{row.time}</span>
                      <span className="col-span-3">{row.user}</span>
                      <span className="col-span-3 text-[#E8652B] font-semibold">{row.action}</span>
                      <span className="col-span-3 truncate">{row.detail}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[10px] text-[#475569]">
                  Chronological from most recent to oldest. Filter by user, action type or date range.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENT MANAGEMENT */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Document management</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Driver records, vehicle documents, contracts and dockets — stored in Azure, linked to the entity, accessible to authorised users.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            HaulageOps uses Azure Blob Storage for all document storage. Documents are uploaded through the platform and linked to the relevant driver, vehicle, client, contract or job record. Authorised users can retrieve any document directly from the system — no email chains, no shared drives, no filing cabinets.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {documentCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">{card.title}</h3>
                <ul className="space-y-3">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-[#334155]">
                      <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-[#475569] leading-relaxed">{card.desc}</p>
                <Link href={card.link.href} className="mt-5 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  {card.link.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BREAK AND REST RECORDING */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Break and rest recording</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Drivers record breaks in the app. Records are timestamped and stored automatically.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            The HaulageOps driver app includes break and rest period recording. Drivers start and stop break periods directly from the app during their shift. Each break is recorded with driver identity, start timestamp, end timestamp and duration. Break records are associated with the driver&apos;s work history and are accessible to management without requiring the driver to submit a separate timesheet or logbook entry.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {breakRestCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#475569]">
            See: <Link href="/platform/break-and-rest-management" className="text-[#E8652B] hover:underline font-medium">Break &amp; Rest Management</Link> for the full detail of how fatigue-relevant records work in HaulageOps.
          </p>
        </div>
      </section>

      {/* ACCESS CONTROL */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Access control for compliance records</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            RBAC controls who can view, edit and export compliance information.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            Not every user in HaulageOps should have access to every compliance record. A dispatcher needs to know whether a driver&apos;s licence is current — they do not need to view audit logs or contract approval history. A director needs full access to the audit trail without being able to edit operational records. RBAC in HaulageOps enforces these boundaries at the access control level.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {rbacCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">{card.title}</h3>
                <ul className="space-y-3">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-[#334155]">
                      <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PLATFORM FEATURES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related platform features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Compliance connects to these platform areas.
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
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
          <div className="mt-8 p-6 bg-white border border-[#E2E8F0] rounded-2xl flex items-start gap-3">
            <FileText className="h-5 w-5 text-[#E8652B] shrink-0 mt-0.5" />
            <p className="text-sm text-[#475569] leading-relaxed">
              For operators in Australia: <Link href="/au/chain-of-responsibility" className="text-[#E8652B] hover:underline font-medium">Chain of Responsibility</Link> — how HaulageOps audit trail, break records and document management relate to CoR obligations under the Heavy Vehicle National Law.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently asked questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Frequently asked about compliance and audit in HaulageOps.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See the audit trail and compliance features in a live demo.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Book a 20-minute session to see how the audit trail, document management, expiry alerts and break recording work together as part of daily operations — not as a separate compliance layer.
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

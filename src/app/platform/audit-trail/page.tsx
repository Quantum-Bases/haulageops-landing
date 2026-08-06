import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Haulage Audit Trail and Action Logging | HaulageOps",
  description:
    "Every action in HaulageOps is logged with user identity, timestamp and detail. Full audit trail across jobs, documents, invoices and access events.",
};

const heroKickers = [
  "User identity on every log entry",
  "Precise timestamps",
  "Exportable records",
  "Multi-tenant isolation",
];

const proofStrip = [
  "Job events logged end-to-end",
  "Document upload & access events",
  "Invoice creation, changes & payment",
  "User access and role changes",
  "Exportable for audit preparation",
  "Tenants see only their own records",
];

const logCategories = [
  {
    title: "Job events",
    desc: "The complete lifecycle of every job is captured — from creation through assignment, dispatch, status changes, completion, and POD upload. Each event records the acting user, the timestamp, and the relevant job detail.",
    points: [
      "Job created — by which user, when",
      "Job assigned to driver or subcontractor",
      "Status changes: en route, on site, loaded, complete",
      "POD uploaded — including the uploading user",
      "Job edited or cancelled — with the reason if entered",
    ],
  },
  {
    title: "Document events",
    desc: "Every document stored, accessed, or deleted in HaulageOps is captured in the audit log. This includes delivery dockets, POD photographs, driver licences, vehicle registrations, contracts, and insurance certificates.",
    points: [
      "Document uploaded — by which user to which record",
      "Document accessed — who viewed the file and when",
      "Document updated or replaced — version history",
      "Expiry date changes — who modified and when",
    ],
  },
  {
    title: "Invoice and billing events",
    desc: "Every step in the invoice lifecycle is logged — from the initial draft through to payment received. Finance can query whether an invoice was sent, when, and what happened to its status, without calling dispatch.",
    points: [
      "Invoice created and which jobs it covers",
      "Invoice sent to client",
      "Status changed: draft, sent, paid, overdue, voided",
      "Rate applied and under which contract",
      "Payment received event from Xero webhook",
    ],
  },
  {
    title: "Access and role events",
    desc: "User login events, role assignments, and permission changes are captured. If a user's access level is changed — or if a new user is added or removed — it appears in the audit log with the administrator who made the change.",
    points: [
      "User login and session events",
      "Role assigned or changed",
      "New user created or user deactivated",
      "Portal access granted or revoked",
    ],
  },
];

const whoWhatWhen = [
  { label: "Who:", desc: "the authenticated user identity — not a role name, the actual user account" },
  { label: "What:", desc: "a specific description of the action taken and the record it affected" },
  { label: "When:", desc: "a precise timestamp — date and time, not just a date" },
];

const jobHistoryRows = [
  { time: "09:14", user: "Sarah K", action: "Job created", detail: "client Apex Civil" },
  { time: "09:22", user: "Sarah K", action: "Driver assigned", detail: "Mike T" },
  { time: "11:03", user: "Mike T (driver app)", action: "Status: En route", detail: "" },
  { time: "13:47", user: "Mike T", action: "POD uploaded", detail: "2 photos" },
  { time: "14:02", user: "Sarah K", action: "Job marked complete", detail: "" },
];

const corCards = [
  {
    title: "The problem with verbal instructions",
    desc: "When dispatch is managed through phone calls, WhatsApp messages, and verbal instructions, the audit trail is the person's memory. That is not evidence of a managed process — it is a gap in your due diligence record.",
  },
  {
    title: "What a system audit log provides",
    desc: "A continuous, automated, tamper-resistant log shows that your operations are managed through a documented system — not verbal agreements. Every assignment, status update, and document upload has a record.",
  },
  {
    title: "Exportable for audit preparation",
    desc: "Audit logs in HaulageOps can be exported for preparation purposes. If you receive an inquiry from a regulator, client, or insurer, you can produce a structured record of activity across the relevant time period without reconstructing it from memory.",
  },
];

const isolationPoints = [
  "Tenant isolation enforced at the data layer",
  "Exports contain only your own organisation's records",
  "No cross-tenant audit record access under any role",
  "Subcontractor actions visible within your job records only",
];

const relatedCards = [
  {
    title: "Compliance & Audit",
    href: "/platform/compliance",
    linkLabel: "Compliance overview",
    desc: "The audit trail is one part of the broader compliance toolkit — alongside document expiry tracking, break and rest records, and contract management. See how it connects.",
  },
  {
    title: "Document Management",
    href: "/platform/document-management",
    linkLabel: "Document management",
    desc: "Every document upload, access, and expiry event is captured in the audit log. Document management and the audit trail operate as a single evidence system.",
  },
  {
    title: "Reporting & Analytics",
    href: "/platform/reporting-and-analytics",
    linkLabel: "Reporting & analytics",
    desc: "Management reporting surfaces operational and financial data on top of the same underlying record set that feeds the audit trail — giving management a consistent view of the business.",
  },
];

const faqs = [
  {
    q: "How far back does the audit trail go?",
    a: "The audit trail retains the full history of your account from the point HaulageOps was set up for your organisation. There is no rolling deletion of older records within the standard retention period. If you have specific retention requirements — for regulatory, insurance, or contractual purposes — discuss these during onboarding.",
  },
  {
    q: "Can audit records be deleted or altered?",
    a: "No. Audit log entries are write-once records. No user — including an administrator — can delete or alter an audit log entry through the HaulageOps interface. This is intentional: the value of an audit trail depends on it being tamper-resistant. If a user takes an action that turns out to be incorrect, the corrective action also appears in the log — both entries are preserved.",
  },
  {
    q: "Who can see the audit trail?",
    a: "Access to the audit log is controlled by RBAC. By default, management-level users can query the full audit history. Dispatch and driver roles see only the audit information relevant to their own actions and assigned jobs. You can configure the access tiers during setup to match your internal structure.",
  },
  {
    q: "Can we export the audit trail for an external audit or inquiry?",
    a: "Yes. The audit log can be exported in structured format — filtered by date range, event type, or user. The export contains only your organisation's records. This is designed to support audit preparation, insurance inquiries, client reviews, and regulatory requests without requiring you to reconstruct information manually.",
  },
  {
    q: "Does the audit trail cover actions taken on the driver mobile app?",
    a: "Yes. Actions taken through the driver mobile app — status updates, POD uploads, break records — are logged to the same audit trail as actions taken in the Admin Panel. The user identity in these log entries is the authenticated driver account, not a generic device identifier.",
  },
  {
    q: "Does the audit trail cover subcontractor portal actions?",
    a: "Yes. When a subcontractor accepts or declines a job through the Subcontractor Portal, that action is logged with the subcontractor's user identity and timestamp. These entries appear in your organisation's audit log alongside all other job events, giving you a complete picture of the assignment lifecycle.",
  },
];

export default function AuditTrailPage() {
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
            <span className="text-[#0F172A] font-medium">Audit Trail</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Platform — Audit Trail
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Every action. Every user. Every timestamp. The audit trail runs continuously.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Every action taken in HaulageOps is logged automatically — who did it, what they did, and exactly when. Jobs, documents, invoices, access events and role changes. Management can query the history without asking the team.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/compliance">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Compliance Overview
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
              <div key={item} className="flex items-center justify-center gap-2">
                <CheckCircle className="h-3.5 w-3.5 text-[#E8652B] shrink-0" />
                <span className="text-white font-bold text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT GETS LOGGED */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What gets logged</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The audit trail covers every consequential action across all five portals.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            The audit log is not a manually-maintained record — it runs automatically in the background whenever a user takes a consequential action in HaulageOps. There is no opt-in, no gap in coverage, and no way for a user to take an action that bypasses the log.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {logCategories.map((cat) => (
              <div key={cat.title} className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">{cat.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{cat.desc}</p>
                <ul className="mt-5 space-y-3">
                  {cat.points.map((point) => (
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

      {/* STRUCTURE OF EACH LOG ENTRY */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Structure of each log entry</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-xl">
                Who, what, and when — on every single record.
              </h2>
              <p className="mt-6 text-[#475569] leading-relaxed">
                Every entry in the HaulageOps audit log contains three pieces of information: the user identity of the person who took the action, a description of what the action was, and the precise timestamp at which it occurred. Together, these three fields make the log usable for investigation, dispute resolution, and audit preparation.
              </p>
              <ul className="mt-6 space-y-3">
                {whoWhatWhen.map((item) => (
                  <li key={item.label} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span><strong>{item.label}</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[#475569] leading-relaxed">
                Management can query this history directly from the HaulageOps reporting interface without needing to ask the operations team. &ldquo;Who changed the rate on job 4821 and when?&rdquo; is a query, not an investigation.
              </p>
            </div>
            {/* Job history visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                Audit log — job history view
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded bg-[#1E293B] border border-[#334155] text-[#94A3B8] text-[10px]">Job #4821</span>
                  <span className="px-2.5 py-1 rounded bg-[#E8652B] text-white text-[10px] font-semibold">Export to CSV</span>
                </div>
                <div className="space-y-1.5 text-[#94A3B8] font-mono text-[11px]">
                  <div className="grid grid-cols-12 gap-2 px-2 text-[10px] uppercase tracking-wider text-[#64748B] border-b border-[#334155] pb-1.5">
                    <span className="col-span-3">Timestamp</span>
                    <span className="col-span-4">User</span>
                    <span className="col-span-5">Action</span>
                  </div>
                  {jobHistoryRows.map((row) => (
                    <div key={row.time + row.action} className="grid grid-cols-12 gap-2 px-2 py-1.5 rounded bg-[#1E293B] border border-[#334155] items-center">
                      <span className="col-span-3 text-white">{row.time}</span>
                      <span className="col-span-4">{row.user}</span>
                      <span className="col-span-5 text-[#E8652B] font-semibold">
                        {row.action}
                        {row.detail && <span className="text-[#94A3B8] font-normal"> — {row.detail}</span>}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[10px] text-[#475569]">
                  Each row shows exact timestamp, user, and action detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAIN OF RESPONSIBILITY */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Chain of responsibility</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Demonstrable due diligence — not a verbal claim.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            Under Chain of Responsibility obligations applicable in the Australian market, operators must be able to demonstrate active management of safety-relevant activities — not simply state that processes exist. An audit trail that runs automatically, covers all consequential actions, and can be queried and exported is a direct piece of that evidence.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {corCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/au/chain-of-responsibility">
              <Button variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Chain of Responsibility <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* MULTI-TENANT ISOLATION */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Export and query visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden order-1 lg:order-none">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                Audit log — export and query view
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex flex-wrap gap-2 text-[10px] mb-4">
                  <span className="px-2.5 py-1 rounded bg-[#1E293B] border border-[#334155] text-[#94A3B8]">From — date</span>
                  <span className="px-2.5 py-1 rounded bg-[#1E293B] border border-[#334155] text-[#94A3B8]">To — date</span>
                  <span className="px-2.5 py-1 rounded bg-[#1E293B] border border-[#334155] text-[#94A3B8]">Jobs / Invoices / Documents / Access</span>
                  <span className="px-2.5 py-1 rounded bg-[#1E293B] border border-[#334155] text-[#94A3B8]">User</span>
                </div>
                <div className="space-y-1.5 text-[#94A3B8] font-mono text-[11px]">
                  <div className="grid grid-cols-12 gap-2 px-2 text-[10px] uppercase tracking-wider text-[#64748B] border-b border-[#334155] pb-1.5">
                    <span className="col-span-3">Timestamp</span>
                    <span className="col-span-4">User</span>
                    <span className="col-span-5">Action</span>
                  </div>
                  {[...jobHistoryRows.slice(0, 3)].map((row) => (
                    <div key={row.time + row.action} className="grid grid-cols-12 gap-2 px-2 py-1.5 rounded bg-[#1E293B] border border-[#334155] items-center">
                      <span className="col-span-3 text-white">{row.time}</span>
                      <span className="col-span-4">{row.user}</span>
                      <span className="col-span-5 text-[#E8652B] font-semibold">{row.action}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-[10px] text-[#94A3B8]">
                  <span>847 records matching the current filter</span>
                  <span className="px-2.5 py-1 rounded bg-[#E8652B] text-white font-semibold">Export to CSV</span>
                </div>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Multi-tenant isolation</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-xl">
                Your audit records are yours. No cross-tenant visibility.
              </h2>
              <p className="mt-6 text-[#475569] leading-relaxed">
                HaulageOps is a multi-tenant SaaS platform — meaning multiple operating companies run on the same infrastructure. Audit records are strictly isolated by tenant. An operator can only see their own audit history. There is no mechanism for one tenant&apos;s data to appear in another&apos;s audit log.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                This isolation applies equally to the export function. When you export audit records, you export your own records only. This is enforced at the database query level, not just the interface layer.
              </p>
              <ul className="mt-6 space-y-3">
                {isolationPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PLATFORM FEATURES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related platform features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The audit trail connects compliance across the platform.
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {relatedCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
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
          <div className="mt-8 text-center">
            <Link href="/au/chain-of-responsibility">
              <Button variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Chain of Responsibility (AU) <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently asked questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Audit trail — common questions.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Replace verbal instructions with a documented audit record.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              See how HaulageOps logs every job, document, invoice, and access event automatically — with user identity and timestamp on every entry.
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

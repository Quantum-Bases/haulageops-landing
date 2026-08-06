import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Civil Construction Logistics Software | HaulageOps",
  description:
    "Manage logistics for civil construction projects — mixed owned and subcontracted fleets, project reporting for principal contractors, digital POD and audit-ready operations.",
};

const proofStrip = [
  { strong: "Project", label: "billing separation" },
  { strong: "Sub compliance", label: "documents tracked" },
  { strong: "Audit trail", label: "every action logged" },
  { strong: "Mixed rates", label: "per tonne, per load, day rate" },
  { strong: "Client portal", label: "for principal contractor" },
  { strong: "2–4 weeks", label: "onboarding" },
];

const breakCards = [
  {
    title: "Coordinating sub tippers on day rate",
    p: "When subcontracted tippers are booked on a day rate, the billing is straightforward — but confirming how many subs worked, which days, and on which projects requires daily records. When that tracking lives in WhatsApp or a manual log, invoice reconciliation with the sub becomes an argument at month end.",
  },
  {
    title: "Providing project managers with job data without exposing costs",
    p: "The principal contractor's project manager wants daily delivery counts, material volumes, and POD evidence. They do not need — and should not see — your subcontractor pay rates or internal margin. Sharing spreadsheets or raw data to satisfy this requirement exposes more than intended.",
  },
  {
    title: "Maintaining safety and compliance records across all operators",
    p: "Driver licences, vehicle inspections, site induction records, and insurance certificates need to be current for every operator on site — own and sub. On active civil projects, the principal contractor may audit these records at any time. Paper files and email attachments are not a reliable system for proving currency on demand.",
  },
  {
    title: "Invoice reconciliation for project reporting",
    p: "Civil construction clients often require invoice reconciliation against project cost codes or programme milestones. When invoices are built manually from paper records, matching them to project cost codes after the fact is labour-intensive and error-prone. When invoices come from the job record in the system, cost code allocation is part of the job setup.",
  },
  {
    title: "Large daily demand fluctuations",
    p: "Civil projects don't have consistent daily transport demand. A week of heavy aggregate delivery might be followed by three days of minimal movement during a concrete pour. Dispatching efficiently across that variability — scaling sub numbers up and down — requires a system that handles variable allocation, not a fixed roster.",
  },
  {
    title: "Multiple material types per project",
    p: "A single civil project might require road base, drainage aggregate, concrete washout removal, topsoil and fill — each with a different rate, different delivery instructions, and sometimes different sub operators. Managing these as separate job types within one project, rather than as separate spreadsheets, is the difference between clear project records and confusion at billing time.",
  },
];

const lifecycle = [
  {
    num: "01",
    title: "Project setup with cost codes and rates",
    p: "Create the project with the principal contractor as client. Set the material types, rate structures (per-tonne aggregate, day-rate tippers, per-load fill), and any project-specific billing reference or cost code. The setup takes 10 minutes and every job created under the project inherits the rate card.",
  },
  {
    num: "02",
    title: "Daily dispatch — own fleet and sub tippers",
    p: "Each day, assign your own trucks to jobs. Delegate overflow or specialist movements to subcontractor companies via the Subcontractor Portal. Subs confirm via their portal — no phone calls. The dispatch board shows own and sub tippers side by side with live status.",
  },
  {
    num: "03",
    title: "Compliance records attached to drivers and vehicles",
    p: "Driver licences, medical certificates, site inductions, and vehicle inspection records are stored in HaulageOps with expiry dates. Expiry alerts notify before documents lapse. For sub operators, the sub portal allows document uploads against their driver and vehicle records. The audit trail shows when each record was updated and by whom.",
  },
  {
    num: "04",
    title: "Digital POD per delivery",
    p: "Every delivery is recorded with a digital docket, GPS timestamp, and site supervisor signature captured in the driver app. POD evidence is attached to the job record in real time. The principal contractor's project manager can see delivery records in their Client Portal without waiting for a weekly report.",
  },
  {
    num: "05",
    title: "Principal contractor portal — delivery data, not internal costs",
    p: "The principal contractor sees what they need: delivery status, load counts, material volumes by type, POD documents, and invoices. They do not see your sub pay rates or internal costs. RBAC controls exactly what each client portal user can access — set at your end, not theirs.",
  },
  {
    num: "06",
    title: "Invoice by project, audit trail preserved",
    p: "Invoice the principal contractor from completed job data — no manual counting. Xero sync puts the invoice in your accounting system without re-entry. The comprehensive audit log records every action taken across the project — who created, assigned, updated, and completed each job — which is the record that matters in an incident review or compliance audit.",
  },
];

const modules = [
  {
    title: "Audit-Ready Operations",
    href: "/solutions/audit-ready-operations",
    p: "Every action taken in HaulageOps is recorded in a comprehensive audit trail — timestamp, user, and detail. This is the record that answers the question in an incident review: who knew what, when, and what did they do about it? Document expiry tracking covers drivers, vehicles, and subcontractors.",
    bullets: [
      "Comprehensive action log — every job event, every update",
      "Document expiry alerts for licences, inspections, insurance",
      "Subcontractor compliance document management",
      "RBAC controls who can view, edit or delete records",
    ],
  },
  {
    title: "Subcontractor Portal",
    href: "/platform/subcontractor-portal",
    p: "Sub tipper companies get dedicated portal access — job queue, accept/decline, Mapbox maps, document uploads for compliance records. You coordinate all subs from one dispatch board. They do not need a HaulageOps subscription. Compliance documents they upload are visible to you and can be shared with the principal contractor if required.",
    bullets: [
      "Dedicated login per sub company — free for them",
      "Accept/decline with confirmation loop",
      "Compliance document upload from sub side",
      "Live status updates to your dispatch board",
    ],
  },
  {
    title: "Client Portal",
    href: "/platform/client-portal",
    p: "The principal contractor project manager logs in to see delivery performance against the project — loads, quantities, material types, POD documents and invoices. They get the reporting they need for their programme without calling you. What they see is controlled by RBAC — internal costs and sub details are never exposed.",
    bullets: [
      "Live project delivery status and load counts",
      "Material volume by type — separate lines per material",
      "POD documents and dockets accessible to client",
      "Invoice history and payment status",
    ],
  },
  {
    title: "Rate Management",
    href: "/platform/rate-management",
    p: "Civil projects often run per-tonne, per-load and day-rate billing simultaneously across different job types and phases. HaulageOps handles all three rate types within one project, with separate client charge rates and sub pay rates. Rate history is preserved — changing a rate mid-project does not alter historical invoices.",
    bullets: [
      "Mixed rate types within one project",
      "Per-tonne, per-load, hourly and day-rate support",
      "Separate charge and pay rate per job type",
      "Effective-dated rate changes without historical impact",
    ],
  },
];

const faqs = [
  {
    q: "How do I separate billing by project when I run multiple civil projects concurrently?",
    a: "Each project is a separate entity in HaulageOps with its own client, rate card, and job records. Jobs are created under the project they belong to. Invoicing is per project — you invoice each principal contractor from their project's completed job data, not from a combined record that you then have to split manually. Management reporting can filter by project to show load counts, tonnes, revenue and cost per project separately. If you run three civil projects concurrently for different principal contractors, each has its own ring-fenced data in the system.",
  },
  {
    q: "What reports can I give the principal contractor?",
    a: "The Client Portal gives the principal contractor direct access to their project's delivery data — daily and cumulative load counts, material volumes by type, delivery timestamps, POD documents and docket records, and invoices. This covers the reporting most principal contractors require for programme management without you producing a separate report each time. What is visible in the portal is controlled by role-based access — you set the permissions, the principal contractor sees what you have configured and nothing beyond it.",
  },
  {
    q: "How do I manage subcontractor compliance documentation?",
    a: "Subcontractor companies have records in HaulageOps including their drivers and vehicles. Their driver and vehicle documents — licences, medicals, vehicle inspection certificates, insurance — are stored in the system with expiry dates. HaulageOps generates expiry alerts before documents lapse so you can follow up before they become a site access issue. Sub companies can also upload documents via their portal, which reduces your admin in chasing paperwork. The audit trail records when each document was uploaded, updated, or reviewed.",
  },
  {
    q: "How do per-tonne and day-rate billing work in the same project?",
    a: "Within a single civil project, you can have jobs on different rate types. Aggregate deliveries run on a per-tonne rate. Sub tippers booked for the day run on a day rate. Any slower specialist movement runs on hourly. All three rate types are set in the rate management module and applied to the relevant job type at creation. At billing time, the invoice is built from the completed job records — per-tonne jobs multiply quantity by rate, day-rate jobs count the number of confirmed days, and the totals go to the same invoice for the principal contractor.",
  },
  {
    q: "Can subcontractors see the documents they need to upload without accessing our internal system?",
    a: "Yes. The Subcontractor Portal is a separate, dedicated interface for sub companies. They log in and see their job queue, history, and a document section where they can upload their driver and vehicle compliance records. They cannot see your internal operations, your other subcontractors' records, or your client data. Document uploads from the sub side are visible to your admin team and generate the same expiry alerts as documents you upload directly.",
  },
  {
    q: "Does HaulageOps have an audit trail that satisfies a compliance review?",
    a: "HaulageOps logs every action taken in the system with a timestamp, the user who took the action, and the detail of what changed. This covers job creation, assignment, status updates, document uploads, invoice creation, and any edit or deletion. The audit trail is comprehensive — not a summary log. In the context of a chain of responsibility review or a safety incident investigation, the question is: what did your management system record at the time? The HaulageOps audit trail provides the timestamped, attributed record that answers that question.",
  },
  {
    q: "Is HaulageOps suitable for civil construction or is it mainly for bulk haulage?",
    a: "HaulageOps is built for operators in bulk haulage and construction logistics — civil construction sits squarely in that scope. The features most used in civil construction — subcontractor portal, compliance document management, client portal with project reporting, mixed rate structures, and the audit trail — are all core platform features, not workarounds or adaptations. Civil construction operators who run mixed own and sub fleets on project-based work are the target user, not an edge case the platform accommodates.",
  },
];

const relatedCards = [
  {
    title: "Earthworks",
    href: "/industries/earthworks",
    p: "Earthworks logistics overlaps heavily with civil construction — project-based tipper demand, subcontractor overflow, and head contractor reporting. The earthworks page covers those specifics.",
  },
  {
    title: "Construction Logistics",
    href: "/industries/construction-logistics",
    p: "If you manage deliveries across multiple concurrent construction clients rather than working under a single principal contractor, the construction logistics page covers that multi-client structure.",
  },
  {
    title: "Subcontractor Portal",
    href: "/platform/subcontractor-portal",
    p: "The detailed breakdown of how sub companies access the portal, accept jobs, update progress and upload compliance documents — without a HaulageOps subscription of their own.",
  },
  {
    title: "Client Portal",
    href: "/platform/client-portal",
    p: "How the Client Portal gives principal contractor project managers delivery visibility, POD access and invoice history — without exposing your internal cost structure.",
  },
];

export default function CivilConstructionPage() {
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
            <span className="text-[#0F172A] font-medium">Civil Construction</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Civil Construction Logistics
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Civil construction logistics connected across owned trucks, subcontractors and principal contractor reporting.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Civil construction puts unique pressure on transport logistics — project-based demand, mixed fleets, principal contractor reporting obligations, and compliance records that must survive an audit. HaulageOps gives you the operations layer that connects all of it without separate systems for each part.
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
          <div className="mt-10 flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-300 fill-mode-both">
            {["Principal contractor reporting", "Mixed fleet dispatch", "Compliance audit trail", "Digital POD"].map((pill) => (
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
                <strong className="text-white text-2xl font-bold">{item.strong}</strong>
                <span className="text-[#94A3B8] text-xs uppercase tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT CIVIL CONSTRUCTION LOGISTICS INVOLVES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What Civil Construction Logistics Involves</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Project-based, compliance-heavy, and dependent on visibility you can prove
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                Civil construction — roads, bridges, drainage, retaining structures, earthworks on infrastructure projects — generates transport logistics work that is project-scoped rather than route-based. Each project has a defined start and end, a specific set of material movements, and a principal contractor who bears responsibility for what happens on their site. That last point matters for transport operators: the principal contractor&apos;s compliance obligations extend to the subcontractors they engage, which means they need evidence of your compliance, not just your word.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                The transport mix on civil projects is typically a combination of your own trucks running the core material movements and subcontracted tippers filling surge demand when project phases overlap or excavation rates increase. Managing that mix — and maintaining compliance records across all operators — is where paper-based systems become unreliable. A missing driver induction record or an expired vehicle inspection discovered after an incident creates a liability that your WhatsApp records cannot resolve.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Daily demand on civil projects also fluctuates significantly. Bridge construction requires aggregate deliveries in one phase and might not need trucks for a week during concrete pours. Drainage installation requires gravel at specific points in the programme. Managing fleet and sub allocation against a programme that changes daily requires a dispatch system that can scale up and down without rebuilding.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#0F172A] mb-4">Typical parties in civil construction logistics</h3>
              <ul className="space-y-3 text-[#475569] text-sm leading-relaxed">
                {[
                  "Transport logistics manager — coordinates own fleet and sub overflow, manages compliance, reports to principal contractor",
                  "Own truck drivers — core material movements across the project",
                  "Subcontractor operators — tipper overflow and specialist vehicle work",
                  "Principal contractor project manager — requires delivery performance and compliance evidence",
                  "Site supervisor — controls site access and material placement; signs off on deliveries",
                  "Safety manager (yours and the principal's) — requires driver and vehicle compliance records",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="font-bold text-[#0F172A] mt-8 mb-4">Charging models in civil construction</h3>
              <ul className="space-y-3 text-[#475569] text-sm leading-relaxed">
                {[
                  "Per tonne — aggregate, fill and spoil measured by weight",
                  "Per load — used where uniform load sizes substitute for weighbridge",
                  "Day rate — tippers on standby or assigned to a project day regardless of load count",
                  "Project milestone billing — less common; invoice tied to programme milestone completion",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CIVIL CONSTRUCTION OPERATIONAL CHALLENGES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Civil Construction Operational Challenges</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Where civil construction logistics operations are most likely to fail without the right system
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breakCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HAULAGEOPS FOR CIVIL CONSTRUCTION */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">HaulageOps for Civil Construction</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            How HaulageOps connects civil construction logistics from dispatch to audit
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

          {/* Compliance dashboard mockup */}
          <div className="mt-12 rounded-2xl bg-[#0D1525] border border-[#1E293B] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 bg-[#1E293B]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E8652B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#94A3B8]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
              <span className="ml-3 text-xs font-semibold text-[#CBD5E1]">HaulageOps — Civil Construction Compliance Dashboard</span>
            </div>
            <div className="p-6">
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Screenshot: Management Reporting view filtered to a civil construction project. Top row: four compliance status tiles — Drivers (12 active, 1 licence expiring in 14 days), Vehicles (8 active, 0 overdue inspections), Subcontractors (3 companies, 1 insurance document expiring in 21 days), Site Inductions (all current). Below: project job summary — total loads this week: 47, total tonnes: 1,150, own fleet loads: 31, sub loads: 16. Bottom: audit log excerpt showing last 5 actions with timestamp, user and action description.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELEVANT PLATFORM FEATURES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Relevant Platform Features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            HaulageOps features most relevant to civil construction operators
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {modules.map((card) => (
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
                  {card.title} details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently Asked Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Civil construction logistics questions about HaulageOps
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
            Related industries and features for civil construction operators
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

      {/* CTA BAND */}
      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See HaulageOps running a civil construction project</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              20-minute demo covering project setup, mixed rate billing, sub compliance document management, principal contractor portal, and audit trail — the features civil construction operators use most.
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
    </MainLayout>
  );
}

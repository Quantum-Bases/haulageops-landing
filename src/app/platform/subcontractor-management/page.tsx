import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Subcontractor Management for Haulage | HaulageOps",
  description:
    "Maintain subcontractor records, contact details, documents and rate agreements — connected to the portal where you delegate work and track their progress.",
};

const heroKickers = [
  "Company records and contacts",
  "Insurance and document storage",
  "Rate agreements per sub",
  "Full job history",
];

const proofStrip = [
  { strong: "Records", sub: "Company, contacts, vehicles, docs" },
  { strong: "Insurance", sub: "Certificates stored and tracked" },
  { strong: "Pay rates", sub: "Separate from client charge rates" },
  { strong: "Job history", sub: "Every job delegated, tracked and recorded" },
  { strong: "Portal connected", sub: "Records link to subcontractor portal access" },
];

const recordHolds = [
  "Company name and trading name if different",
  "Primary contact — name, phone, email",
  "Additional contacts — operations, accounts, emergency",
  "Vehicles — vehicle types and capacities they operate",
  "Service area — regions or sites they cover",
  "Status — active, preferred, inactive, pending compliance review",
  "ABN or business registration — for payment and contracting purposes",
  "Payment terms — agreed payment period for their invoices",
  "Notes — operational notes about working with this subcontractor",
];

const recordDocuments = [
  "Public liability insurance — certificate of currency with expiry tracking",
  "Vehicle insurance — policy details and expiry",
  "Workers compensation — where applicable to their employment structure",
  "Sub-contractor agreement — signed contract stored in Azure",
  "Licences and permits — relevant operating licences for their fleet",
  "Induction records — site-specific inductions where required",
  "Any other compliance document — uploaded and stored against the subcontractor record",
];

const rateAgreementPoints = [
  "Rate agreements stored per subcontractor",
  "Multiple rate types supported: per-tonne, per-load, hourly, fixed",
  "Rates separate from client charge rates — margin is internal",
  "Historical rates preserved on completed jobs",
  "Updated agreements apply to new delegations only",
  "Rate history reviewable for financial reconciliation",
];

const delegationFlowPoints = [
  "Job created → assigned to named subcontractor",
  "Sub receives job in their portal with pay rate and job details",
  "Sub accepts or declines from their portal — timestamped",
  "Acceptance visible on your dispatch board immediately",
  "Declined jobs return to your queue for reassignment",
  "Subcontractor does not need to be a HaulageOps customer — portal access is free for them",
];

const comparisonRows = [
  {
    situation: "Delegating a job",
    whatsapp: "WhatsApp message, verbal confirmation, hope they got it",
    haulageops: "Job sent via platform, sub accepts in portal — timestamped",
  },
  {
    situation: "Rate dispute with a sub",
    whatsapp: "Scroll back through WhatsApp messages to find what was agreed",
    haulageops: "Rate agreement on file — applied to job record at creation",
  },
  {
    situation: "Sub's insurance expired",
    whatsapp: "Discovered when a claim is made, or not at all",
    haulageops: "Expiry alert surfaced in the subcontractor record before it lapses",
  },
  {
    situation: "How many jobs has this sub done for us?",
    whatsapp: "Count backwards through a spreadsheet",
    haulageops: "Job history on the subcontractor record — filter by date",
  },
  {
    situation: "Sub's contact details",
    whatsapp: "Saved in someone's personal phone contacts",
    haulageops: "Stored on the subcontractor record, accessible to all dispatchers",
  },
  {
    situation: "Sub's signed contract",
    whatsapp: "In a folder somewhere, maybe scanned, maybe not",
    haulageops: "Uploaded to the subcontractor record in Azure Blob Storage",
  },
];

const complianceCards = [
  {
    title: "Insurance certificate tracking",
    desc: "Public liability insurance is the most common document requirement for subcontractors. Upload the certificate of currency against the subcontractor record and enter the expiry date. As the expiry approaches, the admin panel flags the record. A subcontractor whose insurance has lapsed is visually flagged in the subcontractor management list and in the job delegation view.",
  },
  {
    title: "Contract management connection",
    desc: "Sub-contractor agreements can be stored directly against the subcontractor record or managed through the separate contract management module. If managed in contract management, the agreement links back to the subcontractor record, and contract expiry alerts flow through the same flagging system. An expired contract with a subcontractor is surfaced before the next job is delegated, not after.",
  },
  {
    title: "Tracking active vs inactive subs",
    desc: "Subcontractor status — active, preferred, inactive, pending compliance review — is set on the record and visible in the delegation view. A subcontractor who is pending a compliance document renewal can be marked as pending review, which flags them during job delegation. This allows your team to manage the delegation decision with full information rather than finding out post-assignment that there is a documentation gap.",
  },
];

const connectedModules = [
  {
    title: "Subcontractor Portal",
    href: "/platform/subcontractor-portal",
    desc: "The subcontractor portal is where your subs receive jobs, accept or decline, update status and view their job history with your company. Subcontractor management is the record-keeping side — the portal is how they interact with those records operationally. Both are part of the same subcontractor relationship in HaulageOps.",
  },
  {
    title: "Contract Management",
    href: "/platform/contract-management",
    desc: "Sub-contractor agreements managed through the contract management module link to the subcontractor record. Contract creation, review, approval, versioning and auto-expiry alerts are all handled in contract management. Expired contracts surface in both the contract management module and the subcontractor record's document status.",
  },
  {
    title: "Rate Management",
    href: "/platform/rate-management",
    desc: "Subcontractor pay rates are stored as a distinct rate type in rate management — separate from client charge rates. The rate management module handles the logic for rate types, effective dating and rate history. Subcontractor rate agreements pull from this module and apply automatically when jobs are delegated.",
  },
];

const faqs = [
  {
    q: "How many subcontractors can I manage in HaulageOps?",
    a: "There is no fixed cap on the number of subcontractor records you can maintain. Operators in the target range typically work with between 5 and 30 subcontractors regularly, with a broader pool they draw on periodically. The subcontractor management panel is designed for that scale — filtering by status, vehicle type and document compliance lets you navigate a large subcontractor list efficiently. If you have a significantly larger subcontractor network, raise this in your demo discussion so we can confirm the platform handles your volume comfortably.",
  },
  {
    q: "Can subcontractors upload their own insurance documents?",
    a: "Subcontractors can submit documents through their portal, which your admin team can then accept and store against the subcontractor record. The document storage itself is managed on your side — your admin team controls what is saved to the subcontractor's compliance record. This avoids a situation where a subcontractor self-certifies compliance by uploading their own documents without review. Your team reviews and accepts the submission; the document is stored once accepted. Subcontractors cannot directly edit their own compliance record in your admin panel.",
  },
  {
    q: "How do I track which subcontractors have done good work for us?",
    a: "The job history tab on each subcontractor record shows every job delegated to them through HaulageOps — the job, date, material, completion status and any notes. For performance tracking beyond job count and completion, the notes field on the subcontractor record allows dispatchers and managers to record qualitative observations. Subcontractor-specific reporting is available in the management reporting module — jobs completed per sub, on-time rates based on status update timing, and job volume over periods. For more structured performance management, the job history data provides the quantitative foundation.",
  },
  {
    q: "Does the subcontractor need to have their own HaulageOps account?",
    a: "No. Subcontractors access their dedicated portal with credentials provided by you when you onboard them. They do not need to purchase HaulageOps or have their own account. The subcontractor portal is included as part of the operating company's HaulageOps subscription — there is no per-subcontractor licence fee. A subcontractor you work with across 10 different operators using HaulageOps would receive 10 separate portal invitations, each giving access to that specific operator's jobs for them. They do not see across different operators' platforms.",
  },
  {
    q: "Can I set different pay rates for different types of work with the same subcontractor?",
    a: "Yes. Rate agreements stored against a subcontractor record can be set at a granular level — different rates per job type, per material type, per vehicle type, or per route. If you pay a subcontractor a different per-tonne rate for aggregate than for fill material, both rates can be stored. When a job is delegated to that subcontractor, the applicable rate is selected from their rate agreement based on the job type. This avoids manually looking up and entering the correct rate each time a job is delegated.",
  },
  {
    q: "What happens if a subcontractor declines a job?",
    a: "When a subcontractor declines a job in their portal, the job is returned to your dispatch board with a declined status visible. Dispatch is notified and can reassign the job to another driver or subcontractor. The decline is recorded on the job history — who it was offered to, when they declined, and when it was reassigned. This creates a transparent record of the delegation attempt rather than leaving a gap in the audit trail. Subcontractors can add a note when declining — for example, that they are unavailable on that date — which helps dispatchers understand the reason and plan alternatives.",
  },
];

export default function SubcontractorManagementPage() {
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
            <span className="text-[#0F172A] font-medium">Subcontractor Management</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            External Partners
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Manage your subcontractors the same way you manage your own fleet.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Subcontractor records, insurance documents, rate agreements and job history — maintained in HaulageOps and connected to the portal where you delegate work and track progress. Not managed via WhatsApp. Not scattered across inboxes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/subcontractor-portal">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Subcontractor Portal
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {proofStrip.map((item) => (
              <div key={item.strong} className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-sm">{item.strong}</span>
                <span className="text-[#94A3B8] text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SUBCONTRACTOR RECORDS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Subcontractor Records</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            A complete record for every subcontractor in your network.
          </h2>
          <p className="mt-6 text-[#475569] max-w-4xl leading-relaxed">
            Subcontractor management in HaulageOps gives each subcontractor company a profile that holds their operational information, compliance documents and rate agreements. These are not static HR records — they connect directly to the job delegation workflow. When you assign a job to a subcontractor, you select from your managed subcontractor list. Their pay rate is already on file. Their document status is visible. Their job history shows what they have done for you before.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">What each subcontractor record holds</h3>
              <ul className="space-y-3">
                {recordHolds.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">Documents stored per subcontractor</h3>
              <ul className="space-y-3">
                {recordDocuments.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <ShieldCheck className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM VIEW — VISUAL SPEC */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Platform View</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Subcontractor panel — records, documents and job history in one place.
          </h2>
          <div className="mt-10 rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
            <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
              HaulageOps — Subcontractor Management Panel
            </div>
            <div className="p-6 sm:p-8 text-[#94A3B8] text-sm font-mono leading-relaxed">
              <p>
                Screenshot: Subcontractor management table. Columns: Company Name, Primary Contact, Vehicle Types, Status (Active/Preferred/Inactive — colour-coded), Insurance Expiry (green/amber/red), Jobs This Month, Total Jobs. Filter bar: Status / Insurance Status / Vehicle Type.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#1E293B] text-[#64748B] uppercase tracking-wider text-[10px]">
                      <th className="text-left px-3 py-2 font-semibold">Company</th>
                      <th className="text-left px-3 py-2 font-semibold">Contact</th>
                      <th className="text-left px-3 py-2 font-semibold">Vehicles</th>
                      <th className="text-left px-3 py-2 font-semibold">Status</th>
                      <th className="text-left px-3 py-2 font-semibold">Insurance</th>
                      <th className="text-left px-3 py-2 font-semibold">Jobs This Month</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { company: "Redlands Haulage", contact: "G. Smith", vehicles: "Tipper x4", status: "Active", statusCls: "text-[#4ADE80] bg-[#16A34A]/20", insurance: "12 Nov 2026", insuranceCls: "text-[#4ADE80]", jobs: "34" },
                      { company: "Brisbane Bulk Cartage", contact: "M. O'Brien", vehicles: "Tipper x6, Road Train", status: "Preferred", statusCls: "text-[#E8652B] bg-[#E8652B]/20", insurance: "02 Mar 2027", insuranceCls: "text-[#4ADE80]", jobs: "58" },
                      { company: "Logan Tipping Services", contact: "J. Nguyen", vehicles: "Tipper x2", status: "Active", statusCls: "text-[#4ADE80] bg-[#16A34A]/20", insurance: "Expires in 25 days", insuranceCls: "text-[#FBBF24] bg-[#FBBF24]/10 px-1.5 py-0.5 rounded font-semibold", jobs: "19" },
                      { company: "Sunshine Coast Haulage", contact: "P. Wilson", vehicles: "Dog & Trailer", status: "Inactive", statusCls: "text-[#94A3B8] bg-[#334155]", insurance: "30 Jun 2026", insuranceCls: "text-[#4ADE80]", jobs: "0" },
                    ].map((row) => (
                      <tr key={row.company} className="border-t border-[#1E293B]">
                        <td className="px-3 py-2.5 text-white font-medium">{row.company}</td>
                        <td className="px-3 py-2.5">{row.contact}</td>
                        <td className="px-3 py-2.5">{row.vehicles}</td>
                        <td className="px-3 py-2.5">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${row.statusCls}`}>{row.status}</span>
                        </td>
                        <td className={`px-3 py-2.5 ${row.insuranceCls}`}>{row.insurance}</td>
                        <td className="px-3 py-2.5">{row.jobs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-[#475569] text-xs">
                One row highlighted amber — public liability expires in 25 days. Clicking a subcontractor opens a detail panel with tabs: Profile, Documents, Rate Agreements, Job History, Notes. Job History tab shows last 10 delegated jobs with status and completion date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RATE AGREEMENTS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Rate Agreements</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Subcontractor pay rates stored separately from client charge rates.
          </h2>
          <p className="mt-6 text-[#475569] max-w-4xl leading-relaxed">
            Every job in HaulageOps carries two rate fields: the client charge rate (what you bill the client) and the subcontractor pay rate (what you pay the sub for their portion of the work). These are stored separately — your margin is not visible to the subcontractor. When you delegate a job to a subcontractor, they see the pay rate agreed for their work, not the rate you have charged the client.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">How subcontractor rate agreements work</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Rate agreements are stored per subcontractor in their profile. You can set different rates for different job types, vehicle types, or routes with the same subcontractor. When delegating a job, the applicable pay rate is pulled from the rate agreement stored on the subcontractor&apos;s record — the dispatcher does not need to look up and manually enter a rate each time a job is delegated.
              </p>
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                Rate agreements support the same rate types as client rate cards: per-tonne, per-load, hourly and fixed fee. If you renegotiate rates with a subcontractor, the updated rate agreement is saved to their record. Jobs already completed at the prior rate retain that historical rate in their job records — only new delegations use the updated rate.
              </p>
              <ul className="mt-5 space-y-3">
                {rateAgreementPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">The delegation flow</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                The workflow for delegating work to a subcontractor flows from the subcontractor management record to the subcontractor portal. When a dispatcher creates a job and assigns it to a subcontractor, that job appears in the subcontractor&apos;s portal queue. The subcontractor logs into their dedicated portal, sees the job with the agreed pay rate and job details, and accepts or declines.
              </p>
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                If the subcontractor accepts, the job status updates on your dispatch board. If they decline, the job is returned to your queue for reassignment. This replaces the WhatsApp message, the phone call, the verbal agreement, and the eventual argument about what was agreed — with a documented, time-stamped acceptance record in the platform.
              </p>
              <ul className="mt-5 space-y-3">
                {delegationFlowPoints.map((item) => (
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

      {/* THE ALTERNATIVE — COMPARISON */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Alternative</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Managing subcontractors via WhatsApp and spreadsheets costs you more than you think.
          </h2>
          <p className="mt-6 text-[#475569] max-w-4xl leading-relaxed">
            Most operators who manage subcontractors without a dedicated system rely on a combination of phone calls, WhatsApp messages, and a spreadsheet that tracks who has been paid what. This works until it doesn&apos;t — until a rate dispute emerges with no written record, until an insurance certificate has lapsed and nobody noticed, until a sub completes a job but it cannot be invoiced because the details were never formally confirmed.
          </p>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="text-left px-5 py-3 font-semibold rounded-tl-xl">Situation</th>
                  <th className="text-left px-5 py-3 font-semibold">WhatsApp + spreadsheet</th>
                  <th className="text-left px-5 py-3 font-semibold rounded-tr-xl text-[#E8652B]">HaulageOps subcontractor management</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.situation} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="px-5 py-3 text-[#0F172A] font-medium border-b border-[#E2E8F0]">{row.situation}</td>
                    <td className="px-5 py-3 text-[#64748B] border-b border-[#E2E8F0]">{row.whatsapp}</td>
                    <td className="px-5 py-3 text-[#16A34A] font-semibold border-b border-[#E2E8F0]">{row.haulageops}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DOCUMENT COMPLIANCE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Document Compliance</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Know which subcontractors are document-compliant before you delegate work.
          </h2>
          <p className="mt-6 text-[#475569] max-w-4xl leading-relaxed">
            Delegating work to a subcontractor whose insurance has lapsed, whose vehicles are unregistered, or whose contract with your company has expired creates risk for your operation. HaulageOps tracks the documents stored against each subcontractor record and surfaces alerts as expiry dates approach — the same mechanism used for fleet and driver document tracking.
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

      {/* CONNECTED PLATFORM */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Connected Platform</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Subcontractor management connects to the portal, contracts and rates.
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {connectedModules.map((mod) => (
              <div key={mod.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
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
            <Link href="/solutions/subcontractor-coordination" className="text-[#E8652B] hover:underline font-medium">
              Subcontractor Coordination solution
            </Link>{" "}
            |{" "}
            <Link href="/solutions/owned-and-subcontracted-fleets" className="text-[#E8652B] hover:underline font-medium">
              Owned &amp; Subcontracted Fleets
            </Link>{" "}
            |{" "}
            <Link href="/resources/guides/subcontractor-management" className="text-[#E8652B] hover:underline font-medium">
              Subcontractor Management Guide
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Subcontractor Management — frequently asked questions
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Replace your subcontractor WhatsApp chain with a managed record.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              In a 20-minute demo we&apos;ll show you subcontractor records, the delegation flow, how the portal works from the sub&apos;s side, and rate agreements — all live.
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

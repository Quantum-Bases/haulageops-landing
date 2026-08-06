import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, ArrowRight, FileText } from "lucide-react";

export const metadata = {
  title: "Contract Management for Haulage Operators | HaulageOps",
  description:
    "Full contract lifecycle management — creation, review, approval, versioning, storage and expiry alerts — for client and subcontractor agreements.",
};

const heroKickers = [
  "Full lifecycle management",
  "Version history",
  "Auto-expiry alerts",
  "Azure document storage",
];

const proofStrip = [
  "Draft → Review → Approval → Active → Alert → Renewal",
  "Client + subcontractor agreements",
  "Approval logged with user & timestamp",
  "Full version history retained",
  "Auto-alert before contracts lapse",
  "Rates linked directly to contracts",
];

const lifecycleSteps = [
  {
    num: "01",
    title: "Draft",
    desc: "A new contract is created in HaulageOps — parties, effective dates, rates or rate schedule reference, and scope of services. The contract starts in Draft status and is only visible to users with contract-creation access.",
  },
  {
    num: "02",
    title: "Review",
    desc: "The contract is submitted for internal review. Reviewers can view the full document and leave notes. Any change at this stage creates a new version, preserving the previous draft. The contract cannot be used for job assignments while under review.",
  },
  {
    num: "03",
    title: "Approval",
    desc: "An authorised approver confirms the contract. The approval is logged with the approver's user identity and timestamp — this record cannot be edited later. Once approved, the contract moves to Active and its rates become available to link to jobs.",
  },
  {
    num: "04",
    title: "Active",
    desc: "The contract is live. Rate cards linked to this contract are applied to relevant jobs. The contract record shows start date, end date, and the rates in effect. Any amendment creates a new version under the same contract record.",
  },
  {
    num: "05",
    title: "Expiry Alert",
    desc: "HaulageOps generates an alert ahead of the contract end date — before the lapse, not after. The lead time is configurable per contract. No more contracts expiring silently while jobs continue under lapsed terms.",
  },
  {
    num: "06",
    title: "Renewal",
    desc: "The contract owner initiates renewal (a new version or a new record) or allows the contract to lapse. Lapsed contracts cannot be used for new job assignments. All versions, approvals, and activity remain accessible.",
  },
];

const versionControlPoints = [
  "Compare current version against any prior version",
  "See which user submitted each version for approval",
  "Identify which version was active on any given job date",
  "Retain full history even after a contract expires",
  "The approval gate prevents accidental overwrites",
];

const clientContractPoints = [
  "Link client rate cards to the governing contract",
  "Effective dating on rates within the contract",
  "Expiry alert before the client agreement lapses",
  "Contract history visible alongside the client job record",
];

const subcontractorContractPoints = [
  "Stored alongside the subcontractor's profile and documents",
  "Expiry alerts for each agreement independently",
  "Link the agreed subcontractor pay rates to the contract",
  "Supports responsible contractor management documentation",
];

const responsibleManagementPoints = [
  "Approval record shows who authorised each contract version",
  "Expiry alerts prevent unintentional lapse",
  "Contract history remains accessible after expiry",
  "Supports documentation for responsible contractor management",
];

const documentStorageCards = [
  {
    title: "Attached to the record",
    desc: "The signed document file is stored directly against the contract record in HaulageOps — not in a separate shared drive folder that may or may not correspond to the correct version of the agreement.",
  },
  {
    title: "Microsoft Azure storage",
    desc: "Files are stored in Microsoft Azure Blob Storage — the same infrastructure that backs the rest of the HaulageOps document store, including POD photographs, driver documents, and vehicle records.",
  },
  {
    title: "Access controlled by role",
    desc: "RBAC determines who can view, create, approve, or delete contract records. Dispatch staff do not carry the same access as management. Every contract action is recorded in the audit log with the acting user's identity.",
  },
];

const relatedCards = [
  {
    title: "Rate Management",
    href: "/platform/rate-management",
    linkLabel: "Rate management",
    desc: "Client charge rates and subcontractor pay rates can be linked directly to the governing contract — so the rate applied to a job traces back to an approved commercial agreement.",
  },
  {
    title: "Document Management",
    href: "/platform/document-management",
    linkLabel: "Document management",
    desc: "Contract files sit alongside driver licences, vehicle registrations, insurance certificates and POD in a single document store — all in Azure, all attached to the relevant record.",
  },
  {
    title: "Subcontractor Management",
    href: "/platform/subcontractor-management",
    linkLabel: "Subcontractor management",
    desc: "Subcontractor agreements form part of the subcontractor record — alongside insurance details, ABN, pay rates, and job history. Document and contract expiry alerts in one place.",
  },
];

const faqs = [
  {
    q: "How many contracts can we manage in HaulageOps?",
    a: "There is no hard cap on contract records. You can manage client contracts and subcontractor agreements across your full network. Each contract record is independent, with its own lifecycle, version history, and expiry alert configuration.",
  },
  {
    q: "Can we set custom review dates and renewal reminders per contract?",
    a: "Yes. Each contract carries an expiry date and a configurable alert lead time — the number of days before expiry that HaulageOps triggers the alert. Critical long-term agreements can have a longer notice window; shorter-term arrangements are configured accordingly. Alerts go to the contract owner assigned to that record.",
  },
  {
    q: "What happens when a contract expires?",
    a: "When a contract passes its expiry date without being renewed, it moves to Expired status. Expired contracts are flagged in the system and cannot be used as the basis for new job assignments. The contract record — including all versions, approvals, and attached documents — remains accessible for historical reference. Rate cards linked to an expired contract also become inactive.",
  },
  {
    q: "Who can approve contracts — can we restrict that to management?",
    a: "Yes. Contract approval is gated by role. RBAC means you can restrict the approval action to management-level users while allowing dispatch or admin staff to draft or submit contracts for review. The approval itself is logged with the approver's user identity and timestamp — a permanent, uneditable record.",
  },
  {
    q: "Can we attach the actual signed contract document, not just the contract fields?",
    a: "Yes. You can attach the signed document — PDF, DOCX, or image — directly to the contract record. It is stored in Azure Blob Storage alongside the contract metadata and version history. When a specific document version is needed for a dispute or audit inquiry, you retrieve it directly from the contract record.",
  },
  {
    q: "How does contract management connect to rates and invoicing?",
    a: "Rate cards in HaulageOps can be linked to a specific contract. When that contract expires or is superseded, the rate card status reflects that. Jobs run under those rates trace back to the governing agreement. This creates a direct line from invoice line item to the contract that authorised it — useful when a client disputes a charge or when you need to document the basis for a rate change.",
  },
  {
    q: "Is contract management available on all HaulageOps plans?",
    a: "Contract management is part of the HaulageOps platform. Book a demo to walk through the setup relevant to your contract volumes, approval structure, and team size.",
  },
];

export default function ContractManagementPage() {
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
            <span className="text-[#0F172A] font-medium">Contract Management</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Platform — Contract Management
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Every contract created, approved, stored and monitored in one place.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Client agreements, subcontractor contracts, rate schedules — the full lifecycle from draft through to expiry alert, with version history and approval workflow at every stage.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Platform Overview
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

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">How it works</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            A defined process from first draft to renewal.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            Every contract moves through a structured workflow. Nothing sits in someone&apos;s inbox or gets overwritten without a record. The stages are visible, the approvals are tracked, and the expiry date is monitored from the moment the contract goes active.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycleSteps.map((step) => (
              <div key={step.num} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                <span className="text-3xl font-black text-[#E8652B]/20 leading-none">{step.num}</span>
                <h3 className="mt-2 font-bold text-[#0F172A] text-base">{step.title}</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERSION CONTROL */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Version control</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-xl">
                Every change is a new version, not an overwrite.
              </h2>
              <p className="mt-6 text-[#475569] leading-relaxed">
                When a contract is amended — rates adjusted, scope changed, extension agreed — HaulageOps creates a new version rather than replacing the existing document. The full history is retained: who made the change, what changed, and when.
              </p>
              <ul className="mt-6 space-y-3">
                {versionControlPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Version history visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                Contract record — version history panel
              </div>
              <div className="p-6 text-[#94A3B8] text-sm font-mono leading-relaxed space-y-3">
                {[
                  { v: "v1 Original", meta: "Approved 12 Jan by John M", status: "Approved", statusCls: "text-[#4ADE80] bg-[#16A34A]/20" },
                  { v: "v2 Rate Amendment", meta: "Approved 3 Apr by Sarah K", status: "Approved", statusCls: "text-[#4ADE80] bg-[#16A34A]/20" },
                  { v: "v3 Current", meta: "Pending review", status: "Draft", statusCls: "text-[#94A3B8] bg-[#334155]" },
                ].map((row) => (
                  <div key={row.v} className="flex items-center justify-between bg-[#1E293B] rounded-lg px-3 py-2 border border-[#334155] text-xs">
                    <div>
                      <p className="text-white font-semibold">{row.v}</p>
                      <p className="text-[#64748B] text-[10px]">{row.meta}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${row.statusCls}`}>{row.status}</span>
                  </div>
                ))}
                <p className="text-[10px] text-[#475569] pt-1">
                  Side-by-side diff showing changed rate fields between v1 and v2.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU MANAGE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What you manage</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Client contracts and subcontractor agreements — both in one place.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            Most operators manage two sets of commercial agreements simultaneously: what they charge clients and what they pay subcontractors. Both live in HaulageOps, linked to the parties, the rates, and the jobs they apply to.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Client contracts</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Agreements that define the terms under which you haul for a specific client — rates, payment terms, scope of work, review dates. Linked to the client record so the rates applied to that client&apos;s jobs always trace back to an approved, current agreement.
              </p>
              <ul className="mt-5 space-y-3">
                {clientContractPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/platform/rate-management" className="mt-5 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                How rate cards work <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Subcontractor agreements</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                The terms under which an external subcontractor works for you — pay rates, insurance requirements, obligations, and responsible contractor acknowledgements. Stored alongside the subcontractor record, with expiry alerts so you know when renewal is due before work continues under a lapsed agreement.
              </p>
              <ul className="mt-5 space-y-3">
                {subcontractorContractPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/platform/subcontractor-management" className="mt-5 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                Subcontractor management <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSIBLE MANAGEMENT */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Subcontractor contract record visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden order-1 lg:order-none">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                Subcontractor contract record — expiry and status view
              </div>
              <div className="p-6 text-[#94A3B8] text-sm font-mono leading-relaxed space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-xs">Redlands Haulage Pty Ltd</span>
                  <span className="px-2 py-0.5 rounded bg-[#16A34A]/20 text-[#4ADE80] text-[10px] font-semibold">Active</span>
                </div>
                <div className="space-y-2 text-xs">
                  <p>Expiry: <span className="text-[#FBBF24] font-semibold">30 Sep 2026 — 45 days</span></p>
                  <p>Linked pay rate card: <span className="text-white">Per-tonne aggregate</span></p>
                  <p>Version: <span className="text-white">v2 current</span></p>
                  <p>Approved by: Sarah K, 3 Apr 2026</p>
                  <p className="flex items-center gap-1.5">
                    <FileText className="h-3 w-3 text-[#4ADE80]" /> Signed agreement PDF — Azure storage
                  </p>
                </div>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Responsible management</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-xl">
                Contracts as part of your documented due diligence.
              </h2>
              <p className="mt-6 text-[#475569] leading-relaxed">
                Having a contract is not the same as having a managed contract. An agreement emailed as a Word document three years ago, never updated, with no expiry alert, is not evidence of active management.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Contract management in HaulageOps means every agreement has a status, a review date, an approval record, and an expiry alert. When you are asked to demonstrate that your commercial relationships are actively managed — whether by a client, insurer, or regulator — you have a record that shows exactly that, including who approved each version and when.
              </p>
              <ul className="mt-6 space-y-3">
                {responsibleManagementPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/platform/compliance">
                  <Button variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-white">
                    Compliance &amp; Audit <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENT STORAGE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Document storage</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The signed agreement lives with the contract record.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            Contract records in HaulageOps are not just metadata fields — you can attach the actual signed document directly to the contract record. Files are stored in Microsoft Azure Blob Storage. When an auditor or your solicitor asks for a specific version of an agreement, you retrieve it from one place, not from someone&apos;s inbox.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {documentStorageCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          {/* Highlighted callout */}
          <div className="mt-10 p-6 sm:p-7 bg-[#F7F8FA] border-l-4 border-[#F39A2D] rounded-r-lg">
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
              <strong>The difference from emailing Word documents:</strong> A contract stored as an email attachment has no version history, no status, no expiry alert, and no record of who approved it. It may exist in one person&apos;s inbox and nowhere else. If that person leaves, the contract is effectively lost. HaulageOps records the full lifecycle — including the signed file — in a system that persists regardless of staff changes.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED PLATFORM FEATURES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related platform features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Contract management connects to the rest of operations.
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
          <div className="mt-8 text-center">
            <Link href="/platform/compliance">
              <Button variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Compliance &amp; Audit Trail <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently asked questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Contract management — common questions.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Stop managing contracts in email threads and shared folders.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              See how HaulageOps handles the full contract lifecycle — creation, approval, versioning, and expiry alerts — in a 20-minute demo.
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

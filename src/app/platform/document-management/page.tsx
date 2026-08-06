import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, ArrowRight, FileText, Camera, Signature } from "lucide-react";

export const metadata = {
  title: "Haulage Document Management | HaulageOps",
  description:
    "Store dockets, licences, permits, contracts, insurance documents and POD in Azure cloud storage — attached to the jobs, drivers and vehicles they relate to.",
};

const heroKickers = [
  "Microsoft Azure Blob Storage",
  "Attached to the relevant record",
  "Expiry tracking",
  "Role-based access",
];

const proofStrip = [
  "Delivery dockets & POD photographs",
  "Driver licences, medicals & inductions",
  "Vehicle registrations & permits",
  "Insurance certificates & contracts",
  "Expiry alerts before documents lapse",
  "Drivers upload POD from the mobile app",
];

const storageCards = [
  {
    title: "Delivery evidence",
    desc: "The documents that prove a delivery occurred — and that protect you when a client disputes a load. These are attached directly to the job record so they are already in place when the invoice is built.",
    points: [
      "Delivery dockets (PDF or photo)",
      "POD photographs captured on the driver app",
      "Customer signature captured on the driver app",
      "Load tickets and scale dockets",
      "Site access or delivery confirmation documents",
    ],
    links: [
      { label: "Digital dockets", href: "/solutions/digital-dockets" },
      { label: "Proof of delivery", href: "/solutions/proof-of-delivery" },
    ],
  },
  {
    title: "Driver compliance documents",
    desc: "The documents your drivers are required to hold — and that you are required to be able to demonstrate are current. Stored against the driver record with expiry tracking so you know when renewal is due.",
    points: [
      "Driver licence (class, expiry date)",
      "Medical certificates",
      "Site induction records",
      "Dangerous goods licences where applicable",
      "Training records and certifications",
    ],
    links: [
      { label: "Driver management", href: "/platform/driver-management" },
    ],
  },
  {
    title: "Vehicle and fleet documents",
    desc: "Registrations, permits, and insurance are attached to the vehicle record — not filed in a cabinet or emailed to the office. When a vehicle approaches permit expiry, HaulageOps surfaces it before it becomes a compliance issue.",
    points: [
      "Vehicle registration certificates",
      "Mass management permits",
      "Over-dimension permits",
      "Vehicle inspection records",
      "Insurance certificates of currency",
    ],
    links: [
      { label: "Fleet management", href: "/platform/fleet-management" },
    ],
  },
  {
    title: "Commercial and compliance documents",
    desc: "Contracts, subcontractor agreements, and insurance documents for your business relationships are stored alongside the relevant party record — not in a shared folder that only one person knows how to navigate.",
    points: [
      "Client contracts linked to the client record",
      "Subcontractor agreements linked to the subcontractor record",
      "Public liability and professional indemnity certificates",
      "Work health and safety policies",
    ],
    links: [
      { label: "Contract management", href: "/platform/contract-management" },
    ],
  },
];

const storageInfraPoints = [
  "Microsoft Azure Blob Storage — enterprise-grade reliability",
  "Files accessible through role-appropriate portal views",
  "No dependency on local servers or shared drives",
  "Consistent access whether your team is in the office or remote",
];

const driverDocRows = [
  { type: "Licence — Heavy Combination", meta: "Expires 14 Mar 2026", status: "Current", statusCls: "text-[#4ADE80] bg-[#16A34A]/20" },
  { type: "Medical", meta: "Expires 8 Nov 2025 — 67 days", status: "Expiring Soon", statusCls: "text-[#FBBF24] bg-[#D97706]/20" },
  { type: "Induction — Site A", meta: "Completed 22 Jan 2025", status: "Current", statusCls: "text-[#4ADE80] bg-[#16A34A]/20" },
];

const expiryCards = [
  {
    title: "Driver document expiry",
    desc: "Licence classes, medicals, and inductions all have expiry dates. HaulageOps surfaces upcoming expirations in the driver record and in management reporting, so the office knows before the driver arrives for a shift with a lapsed licence.",
  },
  {
    title: "Vehicle permit expiry",
    desc: "Mass management permits, over-dimension approvals, and registrations expire. HaulageOps tracks the expiry date on each vehicle document and alerts before the permit lapses — before the vehicle is dispatched onto a restricted route.",
  },
  {
    title: "Subcontractor document expiry",
    desc: "Subcontractor insurance certificates, agreements, and ABN registrations are tracked alongside their other records. If a subcontractor's public liability is about to expire, that surfaces before you assign them to a job.",
  },
];

const roleAccessPoints = [
  "Drivers see their own documents on the mobile app — licence, inductions, their job dockets",
  "Clients see their delivery dockets and invoices through the Client Portal",
  "Dispatch sees job documents and can upload dockets and POD",
  "Management sees the full document store across all records",
  "Subcontractors do not have access to other operators' documents",
];

const podRows = [
  { icon: "Camera", name: "POD Photo 1", meta: "Uploaded 14:03 by Mike T (driver)", note: "Thumbnail preview" },
  { icon: "Camera", name: "POD Photo 2", meta: "Uploaded 14:03", note: "Thumbnail preview" },
  { icon: "Signature", name: "Customer Signature", meta: "Captured 14:04 via driver app", note: "Signature pad" },
];

const relatedCards = [
  {
    title: "Compliance & Audit",
    href: "/platform/compliance",
    linkLabel: "Compliance overview",
    desc: "Document storage feeds directly into compliance — expiry tracking, audit trail of document events, and the management reporting view of outstanding compliance items.",
  },
  {
    title: "Audit Trail",
    href: "/platform/audit-trail",
    linkLabel: "Audit trail",
    desc: "Every document upload, access, and change is captured in the audit trail with user identity and timestamp. Document events are part of the comprehensive action log.",
  },
  {
    title: "Driver Management",
    href: "/platform/driver-management",
    linkLabel: "Driver management",
    desc: "Driver licences, medicals, and induction records are stored against the driver record with expiry tracking — part of the driver compliance picture alongside availability and break records.",
  },
];

const faqs = [
  {
    q: "Where are documents physically stored?",
    a: "All documents uploaded to HaulageOps are stored in Microsoft Azure Blob Storage. Azure is Microsoft's enterprise cloud storage service, used by large organisations globally. Your files are not stored on a local server, a shared drive, or any on-premises infrastructure. They are accessible anywhere with an internet connection through the appropriate HaulageOps portal.",
  },
  {
    q: "How long are documents kept?",
    a: "Documents are retained for the lifetime of your HaulageOps subscription and for the standard retention period after any offboarding. If you have specific retention requirements — regulatory, insurance, or contractual — these should be discussed during setup so the appropriate configuration is in place from the start.",
  },
  {
    q: "Who can access which documents?",
    a: "Access is controlled by RBAC. Drivers can see their own personal compliance documents and the dockets for their own jobs through the mobile app. Clients can see their delivery dockets and invoices through the Client Portal. Dispatch and admin staff can access job documents and upload materials. Management has full visibility across all document types. No role has access to documents outside its defined scope.",
  },
  {
    q: "What file types are supported?",
    a: "HaulageOps supports the common document formats used in haulage operations: PDF, JPEG, PNG, and HEIC (from iPhone cameras). The driver app captures photos natively on iOS and Android. For office-uploaded documents, standard PDF and image formats cover the majority of use cases — licences, registrations, insurance certificates, contracts, and dockets.",
  },
  {
    q: "Can drivers upload documents from their phones?",
    a: "Yes. The HaulageOps driver app on iOS and Android allows drivers to capture POD photographs and customer signatures directly from their phone camera. These are uploaded to Azure and attached to the job record immediately — no emailing, no USB cable, no handing in a paper copy at the end of the day. Drivers can also see their own compliance documents on the app.",
  },
  {
    q: "What happens to documents when a driver leaves or a vehicle is sold?",
    a: "Documents stored against a driver or vehicle record are retained even after the driver is deactivated or the vehicle is removed from the fleet. This is important for audit and historical record purposes — you may need to evidence that a driver held a valid licence on a specific date well after they have stopped working for you. The records remain accessible to management through the Admin Panel.",
  },
];

export default function DocumentManagementPage() {
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
            <span className="text-[#0F172A] font-medium">Document Management</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Platform — Document Management
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Documents attached where they belong — not buried in shared drives.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Every document in HaulageOps — docket, POD, driver licence, vehicle registration, insurance certificate, contract — is stored in Azure cloud storage and attached to the specific job, driver, or vehicle record it relates to.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/solutions/digital-dockets">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Digital Dockets
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

      {/* WHAT GETS STORED */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What gets stored</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Every document type a haulage operator carries — in one place.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            Haulage operations generate a significant volume of documents across three categories: delivery evidence, driver compliance, and fleet compliance. HaulageOps handles all three, attaching each document to the record it belongs to rather than filing it in a folder structure that requires someone to know the naming convention.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {storageCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
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
                <div className="mt-5 flex flex-wrap gap-4">
                  {card.links.map((link) => (
                    <Link key={link.label} href={link.href} className="inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                      {link.label} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORAGE INFRASTRUCTURE */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Storage infrastructure</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-xl">
                Files stored in Microsoft Azure — not on someone&apos;s laptop.
              </h2>
              <p className="mt-6 text-[#475569] leading-relaxed">
                Every document stored in HaulageOps is held in Microsoft Azure Blob Storage. This means the files are not stored on a local server in your office, not in a shared drive that goes down when the internet does, and not on a laptop that leaves with a staff member.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Azure provides the storage reliability and redundancy you would expect from enterprise infrastructure. Files are accessible from the Admin Panel, from the Client Portal (for their dockets and invoices), and from management reporting — all controlled by RBAC.
              </p>
              <ul className="mt-6 space-y-3">
                {storageInfraPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Driver record — document store visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                Driver record — document store
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-white font-semibold text-sm">Mike Thompson</p>
                    <p className="text-[#64748B] text-[10px]">Driver profile — documents</p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#E8652B] text-white text-[10px] font-semibold">+ Upload</span>
                </div>
                <div className="space-y-1.5 text-[#94A3B8] font-mono text-[11px]">
                  <div className="grid grid-cols-12 gap-2 px-2 text-[10px] uppercase tracking-wider text-[#64748B] border-b border-[#334155] pb-1.5">
                    <span className="col-span-6">Document</span>
                    <span className="col-span-3">Expiry</span>
                    <span className="col-span-3 text-right">Status</span>
                  </div>
                  {driverDocRows.map((row) => (
                    <div key={row.type} className="grid grid-cols-12 gap-2 px-2 py-1.5 rounded bg-[#1E293B] border border-[#334155] items-center">
                      <span className="col-span-6 flex items-center gap-1.5 text-white">
                        <FileText className="h-3 w-3 text-[#E8652B]" /> {row.type}
                      </span>
                      <span className="col-span-3">{row.meta}</span>
                      <span className="col-span-3 flex justify-end">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${row.statusCls}`}>{row.status}</span>
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[10px] text-[#475569]">
                  Each row shows file type, expiry, and a View button.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPIRY TRACKING */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Expiry tracking</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            HaulageOps flags documents before they lapse, not after.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            For time-sensitive documents — driver licences, vehicle registrations, permits, insurance certificates — HaulageOps tracks the expiry date and generates an alert ahead of lapse. You set the alert lead time. The alert lands before the compliance gap occurs.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {expiryCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          {/* Highlighted callout */}
          <div className="mt-10 p-6 sm:p-7 bg-[#F7F8FA] border-l-4 border-[#F39A2D] rounded-r-lg">
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
              <strong>The problem with paper dockets:</strong> A driver who stacks paper dockets in the cab for two weeks before handing them to the office is creating a gap of two weeks in which those dockets could be lost, damaged, or disputed. The customer signed the docket on site — but if it goes missing, that signature is gone. The driver app captures the photo and signature on delivery, stores them in Azure immediately, and attaches them to the job record. The docket is already in the office before the truck is back in the yard.
            </p>
          </div>
        </div>
      </section>

      {/* ACCESS BY ROLE */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Job record — POD and docket view visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden order-1 lg:order-none">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                Job record — POD and docket view
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-white font-semibold text-sm">JOB-2026-04471</p>
                    <p className="text-[#64748B] text-[10px]">Documents tab — 3 items attached</p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#E8652B] text-white text-[10px] font-semibold">Invoice</span>
                </div>
                <div className="space-y-1.5 text-[#94A3B8] font-mono text-[11px]">
                  {podRows.map((row) => {
                    const Icon = row.icon === "Camera" ? Camera : Signature;
                    return (
                      <div key={row.name} className="flex items-center justify-between px-3 py-2 rounded bg-[#1E293B] border border-[#334155]">
                        <div className="flex items-center gap-2.5">
                          <Icon className="h-3.5 w-3.5 text-[#E8652B]" />
                          <div>
                            <p className="text-white text-xs font-semibold">{row.name}</p>
                            <p className="text-[#64748B] text-[10px]">{row.meta} — {row.note}</p>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-[#334155] text-[10px] text-[#94A3B8]">View</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Access by role</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-xl">
                Each portal user sees the documents relevant to them.
              </h2>
              <p className="mt-6 text-[#475569] leading-relaxed">
                Document access in HaulageOps is controlled by the same RBAC that governs the rest of the platform. Different users have access to different documents based on their role — not because of individual file permissions configured manually, but because the role determines what is visible.
              </p>
              <ul className="mt-6 space-y-3">
                {roleAccessPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[#475569] leading-relaxed">
                There is no emailing documents to the office, no sharing individual files by hand, and no risk of a driver seeing another driver&apos;s personal licence records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PLATFORM FEATURES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related platform features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Document management connects across the platform.
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
            <Link href="/solutions/digital-dockets">
              <Button variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Digital Dockets Solution <ArrowRight className="h-4 w-4" />
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
            Document management — common questions.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Stop hunting for documents that should already be in the system.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              See how HaulageOps attaches every docket, licence, permit, and POD to the record it belongs to — stored in Azure, accessible by role, tracked for expiry.
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

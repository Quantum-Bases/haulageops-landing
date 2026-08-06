import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
  Camera,
  PenLine,
  FileUp,
  MapPin,
  Clock,
  Receipt,
  Wallet,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Proof of Delivery for Bulk Haulage | HaulageOps",
  description:
    "Capture delivery photographs, customer signatures, and supporting documents at the point of delivery on the driver's mobile device. Stored in Azure, attached to the job instantly.",
};

const heroKickers = [
  "Photo at delivery site",
  "Customer signature on screen",
  "Document upload",
  "Azure Blob Storage",
];

const proofStrip = [
  { strong: "3 POD types", sub: "Photo, signature, document" },
  { strong: "Offline-capable", sub: "Syncs automatically on reconnect" },
  { strong: "Azure stored", sub: "Blob Storage, every delivery" },
  { strong: "Client portal", sub: "Client views their own POD" },
  { strong: "Finance-ready", sub: "POD present before invoice runs" },
  { strong: "Audit trail", sub: "Timestamp, GPS, chain of custody" },
];

const captureCards = [
  {
    title: "Delivery photograph",
    desc: "The driver uses the phone camera within the HaulageOps driver app to take a photograph at the point of delivery. This typically shows the delivered material at the delivery address — the aggregate tipped at the correct stockpile, the spoil deposited at the designated area, the materials placed at the site entrance. The photograph is timestamped with the time of capture and geotagged using the device's location services. It uploads to Azure Blob Storage and attaches directly to the job record in the admin panel and client portal.",
  },
  {
    title: "Customer signature",
    desc: "The receiving party — a site supervisor, a weighbridge operator, a site manager — signs directly on the driver's phone screen within the driver app. This is a digital signature capture: the person draws their signature using their finger on the touchscreen, not a handwritten mark photographed from paper. Their name is entered alongside the signature. The signature image is stored in Azure and attached to the job record as part of the POD. It is visible in the admin panel and in the client's portal.",
  },
  {
    title: "Document upload",
    desc: "Where a physical document exists at the delivery site — a scale ticket from the weighbridge, a site delivery receipt, a permit check record — the driver photographs it within the driver app and uploads it as a document attachment. The document is stored in Azure Blob Storage, named with the job reference and upload timestamp, and attached to the job record alongside the delivery photograph and signature. It becomes part of the complete POD record for that delivery.",
  },
];

const workflowSteps = [
  {
    num: "01",
    title: "Driver marks job delivered",
    desc: "In the driver app, the driver navigates to the active job and marks it as Delivered. This triggers the POD capture workflow within the same screen — the driver does not need to navigate elsewhere or remember a separate step.",
  },
  {
    num: "02",
    title: "Photograph captured",
    desc: "The driver takes a photograph of the delivery using the in-app camera. The timestamp and GPS coordinates are recorded automatically. The photograph is compressed appropriately for mobile upload without losing the visual detail needed for dispute purposes.",
  },
  {
    num: "03",
    title: "Signature collected",
    desc: "The driver hands the phone to the receiving party, who enters their name and signs on the screen. The signature is captured as a vector drawing — not a photograph of a handwritten signature — and stored as part of the POD record. The driver takes the phone back when complete.",
  },
  {
    num: "04",
    title: "Document uploaded (if required)",
    desc: "If a scale ticket or delivery receipt exists on paper, the driver photographs it through the document upload function and submits it. The document attaches to the same job POD record as the photograph and signature.",
  },
  {
    num: "05",
    title: "Upload to Azure",
    desc: "All three captures upload to Azure Blob Storage. If the site has no connectivity, the uploads queue locally and complete automatically when signal is available. The driver does not need to take any action — the sync is handled by the app.",
  },
  {
    num: "06",
    title: "Available instantly across portals",
    desc: "Once uploaded, the POD is visible in the admin panel against the job record, and in the client portal for that client's jobs. Finance sees the POD before generating the invoice. The client can view and download their delivery records without contacting your team.",
  },
];

const podChain = [
  "Job created with rate attached — at dispatch, not at invoice time",
  "Driver completes delivery — status updates to Delivered in real time",
  "POD captured at site — photo, signature, document all attached to job",
  "Finance reviews job record — POD visible, rate confirmed, ready to invoice",
  "Invoice generated from completed job — no re-entry, no reconstruction",
  "Invoice syncs to Xero via OAuth2 — automatically, on cron or real-time webhook",
  "Client sees invoice in their portal — with POD evidence already alongside it",
  "Payment received in Xero — webhook updates invoice status in HaulageOps",
];

const chainCards = [
  { icon: CheckCircle, label: "Job", detail: "Rate attached at creation" },
  { icon: Camera, label: "POD", detail: "Photo + signature + document" },
  { icon: Receipt, label: "Invoice", detail: "Generated from job + POD" },
  { icon: Wallet, label: "Xero", detail: "Synced, payment status" },
  { icon: ShieldCheck, label: "Client portal", detail: "Invoice + POD visible" },
];

const podItems = [
  { icon: Camera, label: "Delivery photograph", meta: "Timestamp overlay \"14:23 Monday\" — tap to expand", cls: "text-[#60A5FA] bg-[#3B82F6]/15" },
  { icon: PenLine, label: "Customer signature", meta: "J. Williams — Site Supervisor · drawn on screen", cls: "text-[#4ADE80] bg-[#16A34A]/15" },
  { icon: FileUp, label: "Scale ticket", meta: "PDF thumbnail · upload timestamp · tap to open", cls: "text-[#FBBF24] bg-[#F59E0B]/15" },
];

const comparisonRows = [
  {
    situation: "POD captured",
    paper: "Driver collects paper signature on docket at delivery. Docket stays in the cab.",
    digital: "Driver captures photo + signature + document in app. Uploaded to Azure before leaving site.",
  },
  {
    situation: "POD available to admin",
    paper: "When driver returns. Could be same day, could be days later.",
    digital: "Immediately after upload — in some cases before the driver has left the delivery site.",
  },
  {
    situation: "POD available to client",
    paper: "Client calls requesting copy. Admin scans and emails. May take several days.",
    digital: "Client views their POD in their self-service portal — no contact with your team required.",
  },
  {
    situation: "No mobile signal at site",
    paper: "Paper docket unaffected by signal — but carries all the usual handling risks.",
    digital: "Driver app works offline. Captures queue and upload automatically on reconnect.",
  },
  {
    situation: "Client disputes delivery",
    paper: "Retrieve paper docket from filing. Hope it is legible. Hope it is the right one.",
    digital: "Timestamped photograph, named signature, and GPS record retrieved instantly from Azure.",
  },
  {
    situation: "Finance generates invoice",
    paper: "Waits for docket. Re-enters job details. Attaches scanned docket manually.",
    digital: "POD already attached. Invoice generated from job record. Nothing to re-enter.",
  },
  {
    situation: "Audit or compliance review",
    paper: "Pull physical files. Records may be incomplete or misfiled.",
    digital: "Full delivery record retrievable by job, date, client, or driver — complete chain of custody in Azure.",
  },
];

const faqs = [
  {
    q: "What format are the delivery photographs stored in?",
    a: "Delivery photographs are captured via the phone camera within the driver app and stored in Azure Blob Storage as image files (JPEG). They are timestamped at the point of capture, geotagged where location services are available, and attached to the job record by reference. They can be viewed directly from the admin panel or client portal and downloaded by authorised admin users.",
  },
  {
    q: "Can the client download their POD from the portal?",
    a: "Clients can view their delivery photographs, signature records, and uploaded documents in the client portal. The ability to download individual files depends on your portal configuration. The client portal provides self-service visibility — the primary outcome is that clients stop contacting your admin team for POD copies because they can see the records directly.",
  },
  {
    q: "What if the receiving party refuses to sign?",
    a: "If a customer declines to sign at the delivery site, the driver can complete the POD workflow with the delivery photograph and document upload without a signature. The absence of a signature is noted rather than forcing an incomplete record. The delivery photograph and timestamp still constitute a record of delivery. If signature refusal is a regular occurrence for a particular client site, this is a commercial relationship issue that your team would need to address separately.",
  },
  {
    q: "How is storage handled — is there a limit on how many POD records we can keep?",
    a: "POD records are stored in Azure Blob Storage as part of your HaulageOps subscription. There is no manual file management required on your end — the system handles storage against the relevant job records. For specific questions about storage limits at your expected job volume, contact us when discussing your subscription configuration.",
  },
  {
    q: "Does POD capture work when the driver is using subcontractor capacity?",
    a: "Yes. When a job is delegated to a subcontractor and the sub's driver completes the delivery, the POD capture workflow operates the same way in the driver app. The captures upload to Azure and attach to the job record in your admin panel, where your dispatch and finance teams can see them. Your client's portal also shows the POD regardless of whether your driver or a subcontractor's driver made the delivery.",
  },
  {
    q: "Does the app require the driver to capture all three POD elements, or are some optional?",
    a: "The required elements of POD capture can be configured to match your operational requirements. In practice, the photograph is the most universally captured element. Signature capture depends on whether the delivery site has an authorised person available to sign. Document upload applies when a physical document exists at the site. The system allows the driver to complete POD with the elements that are available at that delivery point rather than blocking completion when a signature is not obtainable.",
  },
  {
    q: "Is the digital signature capture legally equivalent to a paper signature?",
    a: "The legal standing of electronic signatures varies by jurisdiction and context. HaulageOps captures a named digital signature — drawn on screen by the receiving party — alongside a timestamped photograph and GPS record. This creates a stronger evidentiary record than a paper signature on a docket processed days later. For specific legal questions about your jurisdiction and contract requirements, consult your commercial or legal advisors.",
  },
];

const relatedCards = [
  {
    title: "Driver App",
    desc: "The iOS and Android app used by drivers to receive jobs, update status, and capture POD — offline-capable, with Firebase push notifications for job alerts.",
    href: "/platform/driver-app",
    linkLabel: "Driver App detail",
  },
  {
    title: "Digital Dockets",
    desc: "Digital dockets as the broader delivery record concept — what they replace, how the capture workflow works, and how they attach to jobs for immediate availability.",
    href: "/solutions/digital-dockets",
    linkLabel: "Digital Dockets",
  },
  {
    title: "Job to Invoice",
    desc: "The full billing workflow — how the POD-confirmed completed job record becomes an invoice and syncs to Xero without re-entry at any step.",
    href: "/solutions/job-to-invoice",
    linkLabel: "Job to Invoice",
  },
  {
    title: "Client Portal",
    desc: "How clients access their own jobs, POD records, invoices, and rate cards through a dedicated self-service portal — reducing inbound queries to your admin team.",
    href: "/platform/client-portal",
    linkLabel: "Client Portal",
  },
];

export default function ProofOfDeliveryPage() {
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
            <span className="text-[#0F172A] font-medium">Proof of Delivery</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Proof of Delivery for Haulage
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Signed, photographed and stored before the driver leaves the site.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            HaulageOps captures delivery photographs, customer signatures, and supporting documents at the point of delivery — on the driver&apos;s mobile device, offline-capable. All three are stored in Azure and immediately attached to the job record.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/driver-app">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Driver App Detail
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

      {/* WHY POD MATTERS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Why POD Matters</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Proof of delivery is the evidence that connects the job to the invoice — and protects you in a dispute
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                In bulk haulage, proof of delivery serves four distinct purposes. Understanding each one clarifies why a timestamped digital record is meaningfully better than a paper signature on a docket that ends up in a filing cabinet.
              </p>
              <h3 className="mt-6 font-bold text-[#0F172A]">Dispute resolution</h3>
              <p className="mt-2 text-[#475569] leading-relaxed">
                When a client claims a delivery did not happen, was short, or was at the wrong location, the POD is your primary evidence. A photograph of the delivered material at the correct address, timestamped and geotagged, is a substantially stronger record than a paper docket that you are relying on someone to have kept. A customer signature captured digitally is harder to dispute than a handwritten mark on a form that may have been processed days later.
              </p>
              <h3 className="mt-6 font-bold text-[#0F172A]">Invoice evidence</h3>
              <p className="mt-2 text-[#475569] leading-relaxed">
                Before you send an invoice for a delivery, you need confidence that the delivery was completed as specified. Digital POD gives your billing team that confidence without requiring them to call the driver or locate a paper docket. The invoice follows immediately from the completed job record because the evidence is already attached.
              </p>
              <h3 className="mt-6 font-bold text-[#0F172A]">Client satisfaction</h3>
              <p className="mt-2 text-[#475569] leading-relaxed">
                Large clients managing multiple sites and multiple haulage suppliers will ask for delivery records. Being able to give a client self-service access to their POD — through the client portal, without a phone call or email — is a material operational advantage over operators who have to dig through a filing cabinet for a copy.
              </p>
              <h3 className="mt-6 font-bold text-[#0F172A]">Compliance and audit readiness</h3>
              <p className="mt-2 text-[#475569] leading-relaxed">
                An audit trail of delivery records — what was delivered, when, where, and who confirmed receipt — is relevant to Chain of Responsibility compliance and to any contractual obligation to demonstrate delivery performance. A complete, timestamped digital record supports audit readiness in a way that paper filing cannot.
              </p>
            </div>
            <div>
              {/* POD in job record visual spec */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
                <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                  POD in the Job Record
                </div>
                <div className="p-4 sm:p-5 space-y-3">
                  <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-white text-[11px] font-semibold">JOB-1844 — Apex Civil</p>
                        <p className="text-[#64748B] text-[10px]">Driver: L. Chen · Status: Delivered · Completed 14:23</p>
                      </div>
                      <span className="px-1.5 py-0.5 rounded bg-[#16A34A]/15 text-[#4ADE80] text-[9px] font-semibold">POD — Complete</span>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {podItems.map((pod) => {
                      const Icon = pod.icon;
                      return (
                        <div key={pod.label} className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                          <Icon className="h-4 w-4 text-[#64748B]" />
                          <p className="text-white text-[10px] font-semibold mt-2">{pod.label}</p>
                          <p className="text-[#64748B] text-[9px] mt-0.5 leading-relaxed">{pod.meta}</p>
                          <span className={`inline-block mt-2 px-1.5 py-0.5 rounded text-[8px] font-semibold ${pod.cls}`}>Attached</span>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-[10px] text-[#475569]">
                    Finance team sees this view before generating the invoice — POD present, rate confirmed, ready to bill.
                  </p>
                </div>
              </div>
              {/* Callout */}
              <div className="mt-4 p-5 bg-[#F5F7FA] border border-[#E2E8F0] rounded-2xl">
                <p className="font-semibold text-[#0F172A] mb-3">POD is captured before the truck moves:</p>
                <ul className="space-y-3">
                  {["Photograph taken at the delivery point", "Signature collected from the receiving party", "Any document uploaded while still on site", "All three attached to the job record immediately"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                      <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT GETS CAPTURED */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What Gets Captured</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Three capture types — all on the driver&apos;s phone, all attached to the job
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {captureCards.map((card, i) => {
              const Icon = [Camera, PenLine, FileUp][i];
              return (
                <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-[#FFF0E6]">
                    <Icon className="h-5 w-5 text-[#E8652B]" />
                  </span>
                  <h3 className="mt-4 font-bold text-[#0F172A]">{card.title}</h3>
                  <p className="mt-2 text-sm text-[#475569] leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE CAPTURE WORKFLOW */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Capture Workflow</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            How POD flows from delivery site to admin panel to client portal
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step) => (
              <div key={step.num} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                <span className="text-3xl font-black text-[#E8652B]/20 leading-none">{step.num}</span>
                <h3 className="mt-2 font-bold text-[#0F172A] text-base">{step.title}</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FROM POD TO INVOICE TO XERO */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">From POD to Invoice to Xero</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The complete chain — job, POD, invoice, payment
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                POD is not a standalone feature — it is the link between the completed job and the invoice that can be issued without dispute. In HaulageOps, the chain is connected throughout:
              </p>
              <ul className="mt-5 space-y-3">
                {podChain.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[#475569] leading-relaxed">
                At no step in this chain does someone need to retrieve a paper document, call a driver, or cross-reference a separate spreadsheet. The POD is the piece that connects the operational record to the billing record — and in HaulageOps, it is captured at the point where it actually happens.
              </p>
            </div>
            {/* Connected chain visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                Job to Payment — Connected Chain
              </div>
              <div className="p-4 sm:p-5 flex flex-col gap-2">
                {chainCards.map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.label}>
                      <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                        <div className="flex items-center gap-2">
                          <Icon className="h-3.5 w-3.5 text-[#E8652B]" />
                          <span className="text-white text-[11px] font-semibold">{card.label}</span>
                        </div>
                        <p className="text-[#94A3B8] text-[10px] mt-0.5">{card.detail}</p>
                      </div>
                      {i < chainCards.length - 1 && (
                        <div className="flex justify-center py-0.5">
                          <ArrowRight className="h-3 w-3 text-[#FBBF24]" />
                        </div>
                      )}
                    </div>
                  );
                })}
                <p className="text-[10px] text-[#475569]">
                  One record links all five — no broken links, no separate systems, no manual re-entry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAPER SIGNATURE VS DIGITAL POD */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Paper Signature vs Digital POD</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            What the comparison actually looks like in practice
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="text-left px-5 py-3 font-semibold rounded-tl-xl">Situation</th>
                  <th className="text-left px-5 py-3 font-semibold">Paper signature / manual process</th>
                  <th className="text-left px-5 py-3 font-semibold rounded-tr-xl text-[#E8652B]">HaulageOps digital POD</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.situation} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="px-5 py-3 text-[#0F172A] font-medium border-b border-[#E2E8F0]">{row.situation}</td>
                    <td className="px-5 py-3 text-[#64748B] border-b border-[#E2E8F0]">{row.paper}</td>
                    <td className="px-5 py-3 text-[#16A34A] font-semibold border-b border-[#E2E8F0]">{row.digital}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently Asked Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Proof of delivery — common questions.
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
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related Pages</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            POD connects to these features and solutions
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See POD capture in action — live demo in 20 minutes</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              We will walk through the driver app, POD capture, and how the delivery record flows into the invoice and client portal.
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

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
  WifiOff,
  FileText,
  CloudUpload,
  Download,
} from "lucide-react";

export const metadata = {
  title: "Digital Dockets for Bulk Haulage | HaulageOps",
  description:
    "The HaulageOps driver app captures delivery photographs, customer signatures, and supporting documents at the delivery site. Stored in Azure, attached to the job, invoice-ready.",
};

const heroKickers = [
  "Photo + signature + document",
  "Works offline",
  "Azure Blob Storage",
  "Visible in client portal",
];

const proofStrip = [
  { strong: "3 capture types", sub: "Photo, signature, document" },
  { strong: "Azure stored", sub: "All dockets in Blob Storage" },
  { strong: "Offline-capable", sub: "App queues, syncs on return" },
  { strong: "Instant", sub: "Attached to job before truck leaves" },
  { strong: "Client portal", sub: "Client sees their own dockets" },
  { strong: "Invoice-ready", sub: "POD present before billing runs" },
];

const paperProblems = [
  {
    title: "Lost or late dockets",
    desc: "The docket leaves the delivery site in the driver's cab. It might arrive at the office the same day. It might arrive Friday. It might never arrive — left in a jacket pocket, dropped at the depot, or handed to the wrong person. Every missing docket is a job that cannot be invoiced until someone tracks it down. In a fleet running 50+ jobs per week, docket chasing becomes a standing administrative burden.",
  },
  {
    title: "Wrong job, wrong reference",
    desc: "A paper docket associated with the wrong job number causes the wrong invoice to be generated or delays both invoices while the error is investigated. When dockets are manually sorted and filed, matching errors are common. A driver picks up two dockets from two different clients on the same day. The paperwork gets mixed. Admin applies both to the wrong jobs. The error surfaces when the client queries the invoice.",
  },
  {
    title: "Illegible or incomplete",
    desc: "Handwritten dockets completed in a vehicle cab, in the rain, by a driver who has already run three loads that morning are not always clearly written. Illegible weight readings, missing reference numbers, and incomplete signatures cause admin to go back to the driver for clarification — adding more days to the process. A photograph is always legible. A captured signature is always complete.",
  },
  {
    title: "No client visibility",
    desc: "The client's copy of the docket, if they receive one at all, is whatever the receiving site keeper kept. They cannot log in anywhere to see their delivery records. They call your admin team for a copy. Admin finds the docket, scans it, and emails it. For high-volume clients this becomes a regular request that consumes time on both sides.",
  },
  {
    title: "No audit trail",
    desc: "A paper docket in a filing cabinet is not an audit trail. There is no record of when it arrived, who handled it, or whether the version filed matches what was originally captured at the delivery site. If a dispute goes to mediation or legal process, a paper docket offers limited evidential weight compared to a timestamped digital record with GPS location, signature capture, and a documented chain of custody in Azure storage.",
  },
  {
    title: "Invoice delay is the consequence",
    desc: "Every docket problem — lost, late, illegible, mismatched — adds time between the job completing and the invoice being sent. In bulk haulage where margins are tight and job volumes are high, invoice delay accumulates into a material cash flow gap. The docket problem is not a paperwork inconvenience — it is a working capital issue.",
  },
];

const captureSteps = [
  { icon: Camera, label: "Delivery photograph", detail: "Timestamped and geotagged using the phone's location services. Uploads to Azure Blob Storage and attaches to the job record." },
  { icon: PenLine, label: "Customer signature", detail: "The receiving party signs directly on the driver's phone screen. Drawn on the device, not photographed from paper — stored as part of the POD record." },
  { icon: FileUp, label: "Document upload", detail: "Scale ticket, weighbridge docket, site entry record — photographed and uploaded through the same workflow, attached to the job in Azure Blob Storage." },
  { icon: WifiOff, label: "Offline operation", detail: "No connectivity at the site? All three captures queue locally and upload automatically when signal returns — no action from the driver, nothing lost." },
];

const appScreens = [
  { title: "Job detail", body: "Delivery address shown. \"Mark Delivered\" button active.", icon: CheckCircle },
  { title: "POD capture", body: "Three options: Take Photo, Collect Signature, Upload Document.", icon: FileText },
  { title: "Signature screen", body: "Customer name field plus blank drawing area on the device.", icon: PenLine },
  { title: "Confirmation", body: "\"POD captured — 3 items attached\" with upload status. Offline indicator when no signal.", icon: CloudUpload },
];

const adminPods = [
  { icon: Camera, label: "Delivery photograph", meta: "Captured 14:32 · GPS -33.87, 151.21", cls: "text-[#60A5FA] bg-[#3B82F6]/15" },
  { icon: PenLine, label: "Customer signature", meta: "Signed by J. Marshall · 14:33", cls: "text-[#4ADE80] bg-[#16A34A]/15" },
  { icon: FileUp, label: "Scale Ticket — uploaded by driver", meta: "Captured 14:31 · 23.4 t gross", cls: "text-[#FBBF24] bg-[#F59E0B]/15" },
];

const comparisonRows = [
  {
    scenario: "Docket captured",
    paper: "Handwritten at delivery site, stored in cab.",
    digital: "Photographed and signed on driver's phone at delivery site. Uploaded to Azure.",
  },
  {
    scenario: "Docket arrives at office",
    paper: "When the driver returns. Sometimes days later. Sometimes never.",
    digital: "Attached to job record the moment the driver uploads — before they leave the site.",
  },
  {
    scenario: "Docket matched to the correct job",
    paper: "Manually matched by admin. Errors possible, especially at high volume.",
    digital: "Automatically attached to the active job in the driver app — no manual matching.",
  },
  {
    scenario: "Client wants a copy",
    paper: "Admin finds the paper copy, scans it, emails the client.",
    digital: "Client logs into their portal and views it themselves — no admin involvement.",
  },
  {
    scenario: "Docket lost",
    paper: "Invoice delayed. Ask the driver. Hope the site has a copy. Chase for days.",
    digital: "Cannot be lost — it is in Azure Blob Storage, attached to the job record.",
  },
  {
    scenario: "No signal at delivery site",
    paper: "Paper docket is unaffected — but still has all the usual problems above.",
    digital: "Driver app works offline. Captures queue locally, upload on reconnect. Nothing lost.",
  },
  {
    scenario: "Docket used to generate invoice",
    paper: "Admin retrieves paper docket, reads details, enters into billing system.",
    digital: "POD already attached to job record. Invoice generated directly from job — no re-entry.",
  },
  {
    scenario: "Dispute about delivery",
    paper: "Locate the paper docket. Hope it is legible. Hope it was correctly filed.",
    digital: "Timestamped photo, signature, and document in Azure. Complete chain of evidence available instantly.",
  },
];

const faqs = [
  {
    q: "What if the driver has no mobile signal at the delivery site?",
    a: "The driver app is offline-capable. If there is no connectivity at the delivery site — which is common at quarries, on construction sites with temporary facilities, or in rural locations — the app continues to operate normally. Photographs, signatures, and document uploads are captured and stored locally on the device. When the driver returns to an area with signal, the app uploads everything automatically without any action from the driver. The job record in the admin panel and client portal updates as soon as the sync completes.",
  },
  {
    q: "Can my clients see their own digital dockets?",
    a: "Yes. Clients who have a client portal login can see the dockets for their own jobs. The delivery photograph, signature capture, and any uploaded documents are visible in the portal alongside the job detail and invoice. Clients cannot see dockets for other clients' jobs, and they cannot see your other operational data. Access is scoped strictly to their own records.",
  },
  {
    q: "How are the photographs stored? Can I download them?",
    a: "All photographs, signature images, and uploaded documents are stored in Azure Blob Storage. They can be viewed directly from the job record in the admin panel or client portal. Download is available from the admin panel for admin and billing users. The files are stored with timestamps and job references — there is no manual filing or folder organisation required on your end.",
  },
  {
    q: "Does the driver need to be on the correct job in the app for the docket to attach correctly?",
    a: "Yes. The POD capture is initiated from within the active job in the driver app, so the docket automatically attaches to that job. The driver cannot accidentally attach a docket to the wrong job by going through the normal capture workflow. If a driver is managing multiple jobs, they work through each job sequentially and capture POD against each one separately.",
  },
  {
    q: "What if a subcontractor's driver is completing the delivery — does this work the same way?",
    a: "Yes. When a job is delegated to a subcontractor, their driver uses the same driver app and the same POD capture workflow. The docket is captured and stored in Azure in the same way, and it attaches to the job record in your admin panel — not in the subcontractor's portal only. Your client sees the docket in their portal regardless of whether the delivery was made by your driver or the sub's driver.",
  },
  {
    q: "Is digital POD acceptable as evidence in a payment dispute?",
    a: "HaulageOps generates a timestamped record that includes delivery photograph, customer signature, GPS location data, and the chain of custody in Azure storage. Whether this meets the evidentiary standard for a specific dispute depends on the jurisdiction and the nature of the dispute. What it provides — compared to a paper docket — is a more complete, tamper-evident, and immediately accessible record. We recommend discussing your specific evidence requirements with your legal or commercial advisors.",
  },
];

const relatedCards = [
  {
    title: "Driver App",
    desc: "The iOS and Android app drivers use to receive jobs, update status, capture POD, and log breaks — offline-capable with Firebase push notifications.",
    href: "/platform/driver-app",
    linkLabel: "Driver App detail",
  },
  {
    title: "Proof of Delivery",
    desc: "The full POD workflow — how photograph, signature, and document capture combine to create a complete delivery record for invoicing and dispute resolution.",
    href: "/solutions/proof-of-delivery",
    linkLabel: "Proof of Delivery",
  },
  {
    title: "Job to Invoice",
    desc: "How the digital docket connects directly to invoice generation — the rate is already attached, the POD is already present, and the invoice builds from the completed job record.",
    href: "/solutions/job-to-invoice",
    linkLabel: "Job to Invoice",
  },
  {
    title: "Document Management",
    desc: "Azure Blob Storage for all operational documents: dockets, licences, permits, contracts, and insurance records — stored against the relevant record in the system.",
    href: "/platform/document-management",
    linkLabel: "Document Management",
  },
];

export default function DigitalDocketsPage() {
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
            <span className="text-[#0F172A] font-medium">Digital Dockets</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Digital Dockets for Haulage
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            No more paper dockets. No more missing delivery records.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            The HaulageOps driver app captures delivery photographs, customer signatures, and supporting documents at the delivery site. Each record is stored in Azure and attached to the job immediately — available for invoicing before the truck leaves the site.
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

      {/* WHAT A DOCKET IS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What a Docket Is</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The delivery record that connects the job to the invoice
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                In haulage, a docket is the delivery record that confirms a job was completed — what was delivered, where, when, and who received it. In bulk haulage, it is often a scale ticket showing the weight of material delivered, a site sign-off from the receiving party, or a combination of both. The docket is the evidence that the work was done and the basis on which the invoice is issued.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Without a docket, you have a driver&apos;s word that the delivery happened. That is often good enough for the invoice, until a client disputes a charge. At that point, the paper docket — if it can be found — is the only evidence you have. If it is lost, the dispute is harder. If it is illegible, it may as well be lost. If it was for the wrong job, it actively makes things worse.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Digital dockets in HaulageOps are the direct replacement: the same information, captured on the driver&apos;s mobile device at the delivery site, stored in Azure, attached to the job record, and visible in the client portal — without any of the delays or risks that come with paper.
              </p>
            </div>
            {/* Paper vs digital visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                Paper Docket vs Digital Docket
              </div>
              <div className="p-4 sm:p-5 grid sm:grid-cols-2 gap-3">
                <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                  <p className="text-[#F87171] text-[10px] uppercase tracking-wider font-bold mb-2">Paper workflow</p>
                  <p className="text-[10px] text-[#94A3B8] leading-relaxed">Handwritten at site → stored in cab → arrives at depot days later → admin files it.</p>
                  <ul className="mt-2 space-y-1 text-[9px] text-[#F87171]">
                    <li>Lost in cab</li>
                    <li>Arrives three days late</li>
                    <li>Illegible handwriting</li>
                    <li>Wrong job reference</li>
                  </ul>
                </div>
                <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                  <p className="text-[#4ADE80] text-[10px] uppercase tracking-wider font-bold mb-2">Digital workflow</p>
                  <p className="text-[10px] text-[#94A3B8] leading-relaxed">Photo + signature captured in app at site → instant upload to Azure → attached to job record.</p>
                  <ul className="mt-2 space-y-1 text-[9px] text-[#4ADE80]">
                    <li>Zero handling time</li>
                    <li>Available in admin panel immediately</li>
                    <li>Visible in client portal</li>
                    <li>Cannot be lost</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PAPER DOCKET PROBLEM */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Paper Docket Problem</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Why paper dockets cause invoice delays even when the job runs perfectly
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paperProblems.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW DIGITAL DOCKETS WORK */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">How Digital Dockets Work</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Captured at the site. Stored in Azure. Attached to the job before the truck moves.
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                When a driver completes a delivery in the HaulageOps driver app, the POD capture workflow begins automatically. The driver does not need to navigate to a separate section or look up a job reference — they are already in the correct job in the app.
              </p>
              <div className="mt-6 space-y-5">
                {captureSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.label} className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-[#FFF0E6] shrink-0">
                        <Icon className="h-5 w-5 text-[#E8652B]" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-[#0F172A] text-sm">{step.label}</h3>
                        <p className="mt-1 text-sm text-[#475569] leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Driver app capture visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                Driver App — Digital Docket Capture
              </div>
              <div className="p-4 sm:p-5 space-y-3">
                {appScreens.map((screen, i) => {
                  const Icon = screen.icon;
                  return (
                    <div key={screen.title} className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] text-[#64748B] font-mono">Screen {i + 1}</span>
                        <Icon className="h-3.5 w-3.5 text-[#E8652B]" />
                        <span className="text-white text-[11px] font-semibold">{screen.title}</span>
                      </div>
                      <p className="text-[#94A3B8] text-[10px] mt-1 leading-relaxed">{screen.body}</p>
                    </div>
                  );
                })}
                <p className="text-[10px] text-[#475569]">
                  Offline mode indicator visible when signal is unavailable — captures queue and upload automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE DIGITAL DOCKETS ARE VISIBLE */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Where Digital Dockets Are Visible</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The docket is already there when you need it — in every portal that needs it
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-[#E2E8F0]">
              <h3 className="font-bold text-[#0F172A] text-lg">Admin &amp; Dispatch Panel</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                The moment a docket is captured and synced, it is visible in the admin panel against the job record. Dispatchers and billing admin can see the POD status on every job without asking the driver. When it is time to generate an invoice, the docket is already attached — there is no chase, no wait, no manual filing step between delivery and billing.
              </p>
              <ul className="mt-5 space-y-3">
                {["POD status visible on the job record immediately after sync", "All three capture types — photo, signature, document — accessible from the job", "Download or view in browser — no separate file access required", "Available for invoice generation without any manual step"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-[#E2E8F0]">
              <h3 className="font-bold text-[#0F172A] text-lg">Client Portal</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                Your clients have access to their own delivery records through the client portal. When a docket is captured against one of their jobs, it becomes visible in their portal alongside the job detail and — once generated — the invoice. Clients do not need to call your office for a copy of the docket. They see it the same day the delivery was made.
              </p>
              <ul className="mt-5 space-y-3">
                {["Client sees their own dockets in self-service portal", "POD linked to the job record and the invoice", "Delivery photograph, signature, and any uploaded documents all accessible", "Reduces inbound queries from clients requesting POD copies"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Admin panel job record with POD */}
          <div className="mt-10 rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
            <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
              Admin Panel — Job Record with POD Attached
            </div>
            <div className="p-4 sm:p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-white text-sm font-semibold">JOB-1844 — Apex Civil</p>
                  <p className="text-[#94A3B8] text-[10px]">Driver: L. Chen · Status: Delivered · Completed 14:35</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#E8652B] text-white text-[10px] font-semibold">Generate Invoice — active</span>
              </div>
              <div>
                <p className="text-[#94A3B8] text-[10px] uppercase tracking-wider mb-2">POD — 3 items attached</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {adminPods.map((pod) => {
                    const Icon = pod.icon;
                    return (
                      <div key={pod.label} className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                        <div className="flex items-center gap-2">
                          <Icon className="h-3.5 w-3.5 text-[#64748B]" />
                          <span className={`px-1.5 py-0.5 rounded text-[9px] font-semibold ${pod.cls}`}>Attached</span>
                        </div>
                        <p className="text-white text-[10px] font-semibold mt-2">{pod.label}</p>
                        <p className="text-[#64748B] text-[9px] mt-0.5">{pod.meta}</p>
                        <Download className="h-3 w-3 text-[#64748B] mt-2" />
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className="text-[10px] text-[#475569]">
                POD present and complete — invoice can be generated directly from the job record, no manual step between delivery and billing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAPER VS DIGITAL */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Paper vs Digital</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            What changes when you stop relying on paper dockets
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="text-left px-5 py-3 font-semibold rounded-tl-xl">Scenario</th>
                  <th className="text-left px-5 py-3 font-semibold">Paper Docket</th>
                  <th className="text-left px-5 py-3 font-semibold rounded-tr-xl text-[#E8652B]">HaulageOps Digital Docket</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.scenario} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="px-5 py-3 text-[#0F172A] font-medium border-b border-[#E2E8F0]">{row.scenario}</td>
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
            Digital dockets — common questions.
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
            Digital dockets connect to these features and solutions
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See digital docket capture in a 20-minute demo</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              We will show you the driver app POD capture workflow and how a docket moves from the delivery site into the job record and invoice — in real time.
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

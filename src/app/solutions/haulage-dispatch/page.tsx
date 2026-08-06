import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
  MessageCircle,
  Phone,
  ClipboardList,
  FileSpreadsheet,
  Truck,
  Building2,
} from "lucide-react";

export const metadata = {
  title: "Haulage Dispatch Software | HaulageOps",
  description:
    "Run your full haulage dispatch from one board. Assign owned drivers, delegate to subcontractors, track live status and stop chasing updates by phone.",
};

const heroKickers = [
  "Real-time board",
  "Owned + subcontractor assignment",
  "Digital POD on completion",
  "Invoice generated from job",
];

const proofStrip = [
  { strong: "One board", sub: "Owned + subcontracted together" },
  { strong: "Real-time", sub: "Socket.io live status updates" },
  { strong: "Offline-capable", sub: "Driver app syncs on return" },
  { strong: "5 portals", sub: "Around one live job record" },
  { strong: "Azure stored", sub: "POD + documents on every job" },
  { strong: "Xero-connected", sub: "Invoice syncs without re-entry" },
];

const problemBullets = [
  "No job gets lost in a WhatsApp thread",
  "No subcontractor job falls off the board because it was sent by phone",
  "No status chase required — the board tells you exactly where everything is",
  "No rate reconstruction at invoice time — it was locked to the job at creation",
];

const fragmentedChannels = [
  { icon: MessageCircle, label: "WhatsApp group", detail: "Owned drivers" },
  { icon: Phone, label: "Mobile phone", detail: "Subcontractors" },
  { icon: ClipboardList, label: "Whiteboard / spreadsheet", detail: "Day board" },
  { icon: FileSpreadsheet, label: "Separate Excel file", detail: "Client rates" },
];

const lifecycleSteps = [
  {
    num: "01",
    title: "Create the job",
    desc: "Job details entered in the admin panel: pickup location, delivery point, material type, scheduled date and time. Google Maps address autocomplete handles addressing. Recurring jobs use templates — create once, schedule forward as far as needed.",
  },
  {
    num: "02",
    title: "Apply the rate",
    desc: "The client's rate card is already in the system — per-tonne, per-load, hourly, or fixed-fee with effective dating. Select it at job creation. The charge is locked to the job record. No guessing at invoice time, no rate disputes between job and billing.",
  },
  {
    num: "03",
    title: "Assign or delegate",
    desc: "Owned driver: pushed to the driver app with a Firebase FCM notification. Driver accepts and status appears on the board as Assigned. Subcontractor: delegated from your dispatch board to their dedicated portal. They accept or decline. Status flows back automatically to your board.",
  },
  {
    num: "04",
    title: "Track live status",
    desc: "Real-time dispatch board via Socket.io. Each job shows current status: Assigned, En Route, On Site, Loaded, Delivered. Mobile GPS from the driver app shows location. No phone call required to know where your trucks are or what your subcontractors are doing right now.",
  },
  {
    num: "05",
    title: "Capture POD",
    desc: "Driver completes delivery and captures proof of delivery: a delivery photograph, customer signature on screen, and any supporting document if required. All uploaded via the driver app and stored in Azure Blob Storage. Automatically attached to the job record — no docket to chase.",
  },
  {
    num: "06",
    title: "Generate invoice",
    desc: "Job is complete. POD is attached. Rate was set at creation. Invoice is generated from the job record — no re-entry, no missing dockets, no rebuilding from notes. Syncs to Xero automatically. Client sees the invoice in their portal without waiting for an email.",
  },
];

const ownedDriverPoints = [
  "Driver availability scheduling — only available drivers appear for assignment",
  "Push notification on assignment — no call or text needed to alert driver",
  "Mobile GPS position visible on dispatch board during the job",
  "Offline-capable — status updates queue if signal drops, sync automatically on return",
  "Break and rest records captured in app for fatigue compliance purposes",
  "POD captured at delivery — photo, signature, document upload all attached to job",
];

const subcontractorPoints = [
  "Dedicated portal login for each subcontractor — separate from your admin panel",
  "Sub sees only their assigned jobs — not your other clients, rates, or operations",
  "Accept or decline with Mapbox map view showing job locations",
  "Status updates flow back to your dispatch board without manual intervention",
  "Separate subcontractor pay rate vs client charge rate — margin stays in the system",
  "Sub's driver captures POD — visible in your admin and your client's portal immediately",
];

const boardBullets = [
  "Job statuses: Assigned, En Route, On Site, Loaded, Delivered, Complete",
  "Owned and subcontracted jobs consolidated in one view",
  "Filter by date, client, driver, subcontractor, or status",
  "Mobile GPS position for owned driver jobs",
  "Full audit trail — every status change timestamped and attributed to a user",
];

const dispatchBoardJobs = [
  { id: "JOB-1842", client: "Midland Civils", assignee: "Driver — T. Reynolds", time: "07:30", site: "Quarry Rd → Site 4", status: "Delivered", cls: "bg-[#16A34A]/15 text-[#4ADE80]" },
  { id: "JOB-1843", client: "Balfour Beatty", assignee: "Sub — D. Okafor", time: "08:00", site: "Wharf St → Depot 2", status: "En Route", cls: "bg-[#3B82F6]/15 text-[#60A5FA]" },
  { id: "JOB-1844", client: "Apex Civil", assignee: "Driver — L. Chen", time: "08:30", site: "Yard 3 → Site 9", status: "On Site", cls: "bg-[#F59E0B]/15 text-[#FBBF24]" },
  { id: "JOB-1845", client: "Redlands Council", assignee: "Sub — G. Patel", time: "09:00", site: "Depot 1 → Works 2", status: "Assigned", cls: "bg-[#64748B]/20 text-[#94A3B8]" },
];

const comparisonRows = [
  {
    task: "Alerting a driver to a new job",
    manual: "Phone call or WhatsApp. Wait for confirmation. Call again if no response.",
    haulageops: "Firebase push notification on assignment. Driver accepts in app. Confirmation visible on dispatch board immediately.",
  },
  {
    task: "Sending a job to a subcontractor",
    manual: "Phone call or typed WhatsApp message with job details. No confirmation workflow or audit trail.",
    haulageops: "Delegated from dispatch board. Sub accepts or declines in their portal. Status flows back automatically — no call needed.",
  },
  {
    task: "Answering a client status query",
    manual: "Call driver. Wait. Call sub. Wait. Call client back 20 minutes later with stale information.",
    haulageops: "Check dispatch board — current status visible immediately. Client can also check their own jobs in the client portal.",
  },
  {
    task: "Knowing which rate applies",
    manual: "Cross-reference job against rate spreadsheet. Apply manually to the invoice. Risk of using wrong rate version.",
    haulageops: "Rate applied from client rate card at job creation. Locked to job record. Appears on invoice automatically — no lookup required.",
  },
  {
    task: "Collecting POD after delivery",
    manual: "Chase driver for paper docket. Wait for it to arrive at the office. Hope it isn't lost or illegible.",
    haulageops: "Driver captures photo and signature at the delivery site. Attached to the job record immediately. No chase required.",
  },
  {
    task: "Generating the invoice",
    manual: "Reconstruct job from notes, cross-check rate from spreadsheet, re-enter into accounting software.",
    haulageops: "Invoice generated directly from completed job record. Syncs to Xero automatically. No re-entry at any step.",
  },
];

const userCards = [
  {
    title: "Dispatchers and Traffic Coordinators",
    desc: "The primary users of the dispatch board. Create jobs, assign drivers, delegate to subcontractors, and monitor live status across the full fleet without making a phone call to find out what is happening. The board replaces the whiteboard, the spreadsheet, and the WhatsApp group as the authoritative day view.",
  },
  {
    title: "Traffic Planners",
    desc: "Forward-schedule jobs using the scheduling calendar and job templates. Recurring jobs are set up once and generate automatically. Planners see driver availability across the fleet before assigning — no double-booking, no conflicting schedules, no phone calls to check who is available on a given date.",
  },
  {
    title: "Operations Managers",
    desc: "Full visibility across active and historical jobs. Every action carries an audit trail — who created the job, when it was assigned, what status changes occurred and when. Management reporting shows fleet utilisation, job completion rates, and client volumes without rebuilding data from spreadsheets after the fact.",
  },
];

const industries = [
  { label: "Bulk Haulage", href: "/industries/bulk-haulage" },
  { label: "Earthworks", href: "/industries/earthworks" },
  { label: "Civil Construction", href: "/industries/civil-construction" },
  { label: "Tipper Fleets", href: "/industries/tipper-fleets" },
];

const faqs = [
  {
    q: "Do my subcontractors need their own HaulageOps account?",
    a: "No. Subcontractors get a dedicated portal login that is included with your subscription. They do not pay separately and do not need their own licence. They see only the jobs you delegate to them — not your other operations, your other subcontractors, your rates, or your client details beyond what is necessary for them to complete the job.",
  },
  {
    q: "Can I use HaulageOps dispatch for owned trucks only if I don't currently use subcontractors?",
    a: "Yes. The subcontractor portal is available to you but not required. If your operation is entirely owned fleet, you use the dispatch board to assign owned drivers, track live status via the driver app, and manage POD and invoicing through the full job lifecycle. The subcontractor functionality is there if your network grows or if you take on overflow capacity.",
  },
  {
    q: "Does the dispatch board require hardware GPS trackers fitted to the trucks?",
    a: "No. Live tracking uses the GPS on the driver's mobile device via the driver app. This covers the majority of tracking use cases — you see the driver's position and status updates in real time. If you already have hardware telematics installed, keep them — HaulageOps is the operations layer above the hardware. Hardware GPS integration is on the product roadmap but is not a built feature at present.",
  },
  {
    q: "What happens if a driver loses mobile signal during a job?",
    a: "The driver app is offline-capable. If the driver loses connectivity — in a quarry, on a remote site, or underground — the app continues to function. Status updates and POD captures are queued locally on the device and synchronise automatically when connectivity returns. No data is lost and dispatchers see the update as soon as the driver is back in range.",
  },
  {
    q: "Can I track both owned drivers and subcontractors on the same board?",
    a: "Yes. The dispatch board shows all active work regardless of whether it is assigned to an owned driver or delegated to a subcontractor. Status flows back from both channels — the driver app for owned drivers and the subcontractor portal for external subs. The result is a single consolidated view of everything running that day.",
  },
  {
    q: "Is there a limit to how many subcontractors I can manage from one account?",
    a: "There is no fixed published limit on subcontractor portal logins. If you regularly use 20 or 30 subcontractors, all of them can have active portal logins. If you are managing a very large subcontractor network, contact us to discuss enterprise setup appropriate to your scale and volume.",
  },
  {
    q: "Is there an audit trail of dispatch decisions and job changes?",
    a: "Yes. Every action in HaulageOps — job creation, assignment, reassignment, status changes, POD capture, invoice generation — is logged with a timestamp and the identity of the user who performed it. If there is a dispute about when a job was assigned, who accepted it, or when delivery was recorded, the audit trail provides the definitive record without relying on anyone's memory or a WhatsApp scroll.",
  },
];

const relatedCards = [
  {
    title: "Dispatch Management Platform",
    desc: "The full feature breakdown of the HaulageOps dispatch board — board views, assignment workflows, scheduling and real-time tracking in detail.",
    href: "/platform/dispatch-management",
    linkLabel: "View platform detail",
  },
  {
    title: "Subcontractor Portal",
    desc: "How the dedicated subcontractor portal works — job queue, accept and decline, Mapbox maps, status updates, and the data separation between your admin panel and their view.",
    href: "/platform/subcontractor-portal",
    linkLabel: "Subcontractor Portal",
  },
  {
    title: "Live Job Tracking",
    desc: "Real-time status via Socket.io, mobile GPS tracking, push notifications and the mechanics of how live updates reach your dispatch board without hardware telematics.",
    href: "/platform/live-job-tracking",
    linkLabel: "Live Tracking",
  },
];

export default function HaulageDispatchPage() {
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
            <span className="text-[#0F172A] font-medium">Haulage Dispatch</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Haulage Dispatch Software
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            One dispatch board. Every truck. Every subcontractor. No phone tag.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Jobs in HaulageOps carry their rate, their assigned driver or subcontractor, and their live status — all visible on a single dispatch board without a single phone call to find out what is happening across your fleet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/dispatch-management">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Dispatch Platform Detail
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
              <div key={item.strong} className="flex flex-col items-center justify-center gap-1">
                <span className="text-white font-bold text-sm">{item.strong}</span>
                <span className="text-[#94A3B8] text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* THE DISPATCH PROBLEM */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Dispatch Problem</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            How haulage dispatch actually runs today — and where it breaks
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                If you are managing 15 or more trucks — some owned, some subcontracted — your dispatch process almost certainly runs across at least four separate systems: a WhatsApp group for drivers, a phone for subcontractors, a whiteboard or spreadsheet for the day board, and a separate file for client rates.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                The job exists in four places and none of them are connected. When a client calls to ask where their load is, you call the driver. The driver does not always pick up. You call the subcontractor. The subcontractor says they will check with their driver. You call the client back twenty minutes later with information that is already stale.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                That is not a people problem. It is a system problem. The job record does not exist in a single authoritative place, so every status query requires a phone call to reconstruct what is happening. Every day is a retrieval exercise rather than an operational one.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                HaulageOps creates a single job record from the moment of creation through to invoice. The dispatch board shows every active job. The driver updates status from the app. The subcontractor updates from their portal. You — and your client, in their own separate portal — see all of it without picking up the phone.
              </p>
              <ul className="mt-6 space-y-3">
                {problemBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Dispatch before HaulageOps visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                Dispatch Before HaulageOps
              </div>
              <div className="p-4 sm:p-5 space-y-3">
                {fragmentedChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <div key={channel.label} className="bg-[#1E293B] border border-[#334155] rounded-lg p-3 flex items-center gap-3">
                      <Icon className="h-4 w-4 text-[#64748B] shrink-0" />
                      <div>
                        <p className="text-white text-xs font-semibold">{channel.label}</p>
                        <p className="text-[#64748B] text-[10px]">{channel.detail}</p>
                      </div>
                    </div>
                  );
                })}
                <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                  <p className="text-[#F87171] text-[11px] font-semibold">Client query</p>
                  <p className="text-[#94A3B8] text-[10px] mt-1 leading-relaxed">
                    Triggers a chain of phone calls with no definitive answer at the end. The job exists in four places — none connected.
                  </p>
                </div>
                <p className="text-[10px] text-[#475569]">
                  Fragmented dispatch: four separate channels, status reconstructed by phone call every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE HAULAGEOPS DISPATCH WORKFLOW */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The HaulageOps Dispatch Workflow</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            From job creation to invoice — in one connected record
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            Every job follows the same lifecycle. The rate is applied when the job is created. The driver or subcontractor is assigned from the dispatch board. Status flows back automatically. The POD is captured in the driver app at the delivery site. The invoice is generated directly from the completed job record.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycleSteps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                <span className="text-3xl font-black text-[#E8652B]/20 leading-none">{step.num}</span>
                <h3 className="mt-2 font-bold text-[#0F172A] text-base">{step.title}</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO ASSIGNMENT PATHS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Two Assignment Paths</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Owned driver workflow vs subcontractor delegation — from the same board
          </h2>
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <div className="bg-[#F8FAFC] rounded-2xl p-7 border border-[#E2E8F0]">
              <h3 className="font-bold text-[#0F172A] text-xl">Owned Driver Dispatch</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                Jobs assigned to your own drivers directly from the dispatch board. The driver receives a Firebase push notification on their iOS or Android device. They open the HaulageOps driver app, review job details including pickup location via Google Maps, accept the job, and their status flows back to your board in real time via Socket.io.
              </p>
              <ul className="mt-5 space-y-3">
                {ownedDriverPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/platform/driver-app" className="inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  Driver App full detail <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-7 border border-[#E2E8F0]">
              <h3 className="font-bold text-[#0F172A] text-xl">Subcontractor Delegation</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                Jobs delegated to external subcontractors directly from your dispatch board — the same board used for owned drivers. The subcontractor logs into their dedicated HaulageOps portal. They do not need a separate licence or their own subscription. They see only the jobs you delegate to them, accept or decline, and their status flows back to your board automatically.
              </p>
              <ul className="mt-5 space-y-3">
                {subcontractorPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-2">
                <Link href="/platform/subcontractor-portal" className="inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  Subcontractor Portal detail <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/solutions/subcontractor-coordination" className="inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  Subcontractor Coordination solution <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE DISPATCH BOARD */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Dispatch Board</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Every active job visible. Nothing disappears into someone&apos;s phone.
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                The HaulageOps dispatch board shows all active work in a single view: owned driver jobs and subcontractor-delegated jobs together. Each job card displays the current status, the assigned driver or subcontractor, the scheduled time, and the pickup and delivery locations.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Status updates happen via Socket.io in real time. When a driver marks a job as Delivered in the app, the dispatch board updates without a page refresh. Dispatchers do not need to call, text, or refresh a spreadsheet to know what is happening across the fleet.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                If a job is sitting in Assigned status and the scheduled time has passed, it is visible on the board. Nothing is hidden. Nothing falls through the gap because a driver did not reply to a WhatsApp message. The system shows you the exception so you can act on it immediately.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                The board is the single source of truth for dispatchers, traffic planners, and operations managers. Everyone is looking at the same picture of the day&apos;s work.
              </p>
              <ul className="mt-6 space-y-3">
                {boardBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Dispatch board visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                HaulageOps Dispatch Board
              </div>
              <div className="p-4 sm:p-5 space-y-3">
                <div className="flex flex-wrap gap-1 text-[10px]">
                  {["All jobs", "Owned", "Subcontracted", "En Route", "Delivered"].map((filter, i) => (
                    <span key={filter} className={`px-2.5 py-1 rounded ${i === 0 ? "bg-[#E8652B] text-white font-semibold" : "bg-[#1E293B] border border-[#334155] text-[#94A3B8]"}`}>
                      {filter}
                    </span>
                  ))}
                </div>
                {dispatchBoardJobs.map((job) => (
                  <div key={job.id} className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <Truck className="h-3.5 w-3.5 text-[#64748B] shrink-0" />
                        <span className="text-white text-[11px] font-semibold">{job.id}</span>
                        <span className="text-[#64748B] text-[10px] truncate">{job.client}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold whitespace-nowrap ${job.cls}`}>{job.status}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1.5 text-[10px] text-[#94A3B8]">
                      <Building2 className="h-3 w-3 text-[#64748B]" />
                      <span>{job.assignee}</span>
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-1.5 text-[10px] text-[#64748B]">
                      <span>{job.time}</span>
                      <span className="truncate">{job.site}</span>
                    </div>
                  </div>
                ))}
                <p className="text-[10px] text-[#475569]">
                  Owned driver and subcontracted jobs side by side — status updates via Socket.io, no page refresh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANUAL VS HAULAGEOPS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Manual vs HaulageOps</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            What changes when dispatch runs in one system
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="text-left px-5 py-3 font-semibold rounded-tl-xl">Dispatch Task</th>
                  <th className="text-left px-5 py-3 font-semibold">Manual / Fragmented Process</th>
                  <th className="text-left px-5 py-3 font-semibold rounded-tr-xl text-[#E8652B]">HaulageOps</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.task} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="px-5 py-3 text-[#0F172A] font-medium border-b border-[#E2E8F0]">{row.task}</td>
                    <td className="px-5 py-3 text-[#64748B] border-b border-[#E2E8F0]">{row.manual}</td>
                    <td className="px-5 py-3 text-[#16A34A] font-semibold border-b border-[#E2E8F0]">{row.haulageops}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHO USES THIS */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Who Uses This</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Built for the people running the operation day to day
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {userCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 sm:p-7 bg-white border border-[#E2E8F0] rounded-2xl">
            <p className="font-semibold text-[#0F172A] mb-4">Used across bulk haulage, earthworks, civil construction and tipper operations:</p>
            <div className="flex flex-wrap gap-3">
              {industries.map((item) => (
                <Link key={item.label} href={item.href}>
                  <Button variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently Asked Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Haulage Dispatch — common questions.
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
            More on the dispatch and tracking workflow
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
          <p className="mt-6 text-sm text-[#475569] text-center">
            <Link href="/industries/bulk-haulage" className="text-[#E8652B] hover:underline font-medium">
              Bulk Haulage industry page <ArrowRight className="h-3.5 w-3.5 inline" />
            </Link>
          </p>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See the dispatch board in a 20-minute demo</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              We will walk through job creation, driver assignment, subcontractor delegation, and live status tracking with your operation in mind.
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

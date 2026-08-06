import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
  Truck,
  Building2,
  Phone,
  PhoneOff,
  Lock,
  LockOpen,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

export const metadata = {
  title: "Haulage Subcontractor Coordination | HaulageOps",
  description:
    "Coordinate external subcontractors from the same dispatch workflow you use for owned trucks. They get their own portal. You keep full visibility and control.",
};

const heroKickers = [
  "Dedicated sub portal",
  "Accept / decline workflow",
  "Status flows back to your board",
  "No second licence required",
];

const proofStrip = [
  { strong: "Dedicated portal", sub: "Free for every subcontractor" },
  { strong: "Accept/decline", sub: "Structured job confirmation" },
  { strong: "Live status", sub: "Flows back to your dispatch board" },
  { strong: "Separate rates", sub: "Client charge vs sub pay tracked" },
  { strong: "Digital POD", sub: "Sub driver captures, you see it" },
  { strong: "Data separation", sub: "Sub sees only their jobs" },
];

const problemBullets = [
  "Job sent by phone = job exists only in someone's memory",
  "No confirmation workflow = no certainty the sub has accepted",
  "No status channel = no update without calling them",
  "No POD from sub = invoice evidence relies on paper dockets arriving at your office",
  "Client query = phone chain with no guaranteed answer",
];

const lifecycleSteps = [
  {
    num: "01",
    title: "You delegate from your dispatch board",
    desc: "From the same dispatch board used for owned drivers, you select a job and delegate it to a subcontractor. You choose which subcontractor company receives it. The job does not leave your board — it appears on your board as Delegated with the sub's name, and simultaneously appears in the sub's portal as a job awaiting acceptance.",
  },
  {
    num: "02",
    title: "Sub accepts or declines in their portal",
    desc: "The subcontractor logs into their dedicated HaulageOps portal. They see their job queue — only the jobs you have delegated to them, not your other operations or other clients. They review the job detail and Mapbox map showing pickup and delivery locations, then accept or decline. If they decline, the job returns to unassigned on your board for reassignment.",
  },
  {
    num: "03",
    title: "Sub's driver picks up the job",
    desc: "Once the sub accepts, the job is assigned to one of their drivers. The sub's driver operates through the same HaulageOps driver app used by your own drivers. They receive a Firebase push notification, see the job detail including navigation to the pickup point, and begin the job. The sub manages their driver assignment in their portal — you do not need to be involved in that step.",
  },
  {
    num: "04",
    title: "Status flows back to your board",
    desc: "As the sub's driver progresses through the job — En Route, On Site, Loaded, Delivered — each status update flows back to your dispatch board in real time. You see the sub's job on your board with live status, exactly as you see your owned driver jobs. When your client calls asking where their delivery is, you look at the board. You do not call the sub.",
  },
  {
    num: "05",
    title: "Sub's driver captures POD",
    desc: "At the delivery point, the sub's driver captures POD in the driver app — photograph, customer signature, and document upload. The POD attaches to the job record in your admin panel. Your client sees it in their client portal. Your finance team sees it when generating the invoice. The sub's driver capturing POD is indistinguishable from your own driver capturing POD, from the perspective of your records and your client's portal.",
  },
  {
    num: "06",
    title: "Margin stays in the system",
    desc: "The job carries two rates: the client charge rate (what your client pays you) and the subcontractor pay rate (what you pay the sub). Both are recorded against the job. Your client's invoice is generated from the client charge rate. The sub's cost is visible at the job level. Your margin — the difference between the two — is in the system, not calculated manually at month end from two separate spreadsheets.",
  },
];

const subSees = [
  "Only the jobs delegated to them — not your other clients' jobs",
  "Job details: pickup and delivery address, material, scheduled time",
  "Mapbox map showing job locations for navigation context",
  "Their own job history and status records",
  "Their own pay rate for each job — not your client charge rate",
];

const subDoesNotSee = [
  "Your client's name or contact details beyond what the job requires",
  "Your client charge rate — they see only their own pay rate",
  "Your margin on the job",
  "Other subcontractors you work with",
  "Your owned fleet details, other client accounts, or your billing records",
];

const compareCards = [
  {
    title: "vs Allotrac",
    desc: "Allotrac is a per-vehicle subscription model — typically $30–150 per vehicle per month. External subcontractors who are not Allotrac customers have no self-service portal. You coordinate with them outside the system — by phone, WhatsApp, or email — with all the visibility loss that entails. There is no subcontractor-facing portal built into the product that allows a non-customer sub to accept jobs, update status, and capture POD within your workflow.",
    points: [
      "No sub portal for non-Allotrac customers",
      "Subcontractor coordination requires out-of-system communication",
      "Status from subs cannot flow back to your dispatch board automatically",
    ],
    footnote: "HaulageOps: subcontractor portal included, no licence required for the sub.",
  },
  {
    title: "vs MyTrucking",
    desc: "MyTrucking offers job sharing between operators, but the subcontractor must also be a paying MyTrucking customer for the sharing to work. If your sub uses a different system — or no system — the connected workflow is not available. This creates a two-tier subcontractor network: the subs you can coordinate digitally (those already on MyTrucking) and those you still coordinate by phone. HaulageOps does not require the sub to be a customer of any platform.",
    points: [
      "Subcontractor sharing requires sub to be a MyTrucking subscriber",
      "Subs not on MyTrucking are coordinated outside the platform",
      "Creates inconsistent visibility depending on which sub you are using",
    ],
    footnote: "HaulageOps: any subcontractor gets a portal login — no platform subscription required from them.",
  },
];

const commercialBullets = [
  "The client invoice is generated from the client charge rate — correctly, automatically",
  "The sub's cost is visible against the job before and after delivery",
  "Job-level margin is visible in reporting without a manual reconciliation exercise",
  "The sub does not see your client charge rate — they see only their own pay rate",
  "Your client does not see your sub arrangements or your margin",
];

const faqs = [
  {
    q: "Do my subcontractors need to pay for HaulageOps to use the portal?",
    a: "No. Subcontractor portal access is included in your HaulageOps subscription. The subcontractor company gets their own dedicated login at no charge to them. They do not need to purchase their own subscription or licence. This is intentional — requiring subs to pay for access creates a coordination problem, as you would only have connected visibility for the subs who chose to subscribe. HaulageOps gives all your subs portal access as part of your arrangement, not theirs.",
  },
  {
    q: "Can a subcontractor see my other clients, rates, or operational data?",
    a: "No. The subcontractor portal is scoped strictly to the jobs delegated to that specific sub company. They see their job queue, job detail (pickup and delivery information, material, scheduled time), their own pay rate, and their job history. They cannot see your other client accounts, your client charge rates, your margin, other subcontractors you work with, or any other part of your admin panel. The data separation is enforced at the architecture level, not through a setting you could accidentally change.",
  },
  {
    q: "How does the subcontractor accept a job? Do they need to be online when I delegate it?",
    a: "No. When you delegate a job to a subcontractor from your dispatch board, it appears in their portal job queue immediately. The sub does not need to be logged in at that exact moment — they will see the job in their queue the next time they log in. If a Firebase push notification is configured for their account, they can also receive a notification prompt. They then accept or decline through the portal interface. If they decline, the job returns to your board as unassigned.",
  },
  {
    q: "What happens if a subcontractor declines a job?",
    a: "If the subcontractor declines, the job is returned to unassigned status on your dispatch board with the decline noted. You can then delegate it to a different subcontractor or assign it to an owned driver. The decline is logged as part of the job's audit trail — you have a record of which sub was offered the job and declined, useful for capacity planning discussions with your sub network.",
  },
  {
    q: "Can my client tell whether their delivery was made by my driver or a subcontractor?",
    a: "The client portal shows job status and POD for the client's jobs. By default, the client sees the status of their delivery — not the internal detail of whether it was an owned driver or a subcontracted one. If your commercial arrangement with a client requires disclosure of subcontractor use, that is a relationship-level decision you would handle through your contract terms — the system does not surface subcontractor identity to clients unless you configure it to do so.",
  },
  {
    q: "How many subcontractors can I manage at once?",
    a: "There is no fixed published cap on the number of subcontractor portal logins. Operators managing 10 to 30 regular subcontractors are the typical use case. If you are managing a very large network of external capacity providers, contact us to discuss the enterprise configuration appropriate to your volume.",
  },
  {
    q: "Does the subcontractor's driver use a separate app, or the same HaulageOps driver app?",
    a: "The sub's driver uses the same HaulageOps driver app (iOS and Android). The app is publicly available and the sub's driver installs it and logs in with credentials linked to the subcontractor's portal account. From the driver's perspective, the app experience is the same as for your own drivers — they receive jobs assigned by the subcontractor, update status, and capture POD. The job and its POD records then flow back to your admin panel as part of your operation's records.",
  },
];

const relatedCards = [
  {
    title: "Subcontractor Portal",
    desc: "Full feature breakdown of the dedicated subcontractor portal — job queue, accept and decline workflow, Mapbox maps, driver assignment, and job history.",
    href: "/platform/subcontractor-portal",
    linkLabel: "Portal detail",
  },
  {
    title: "Subcontractor Management",
    desc: "How subcontractor records are managed in the admin panel — company details, rate configuration, document storage, and performance history.",
    href: "/platform/subcontractor-management",
    linkLabel: "Management detail",
  },
  {
    title: "Owned & Subcontracted Fleets",
    desc: "Running a mixed fleet — how owned trucks and subcontracted capacity are managed from the same dispatch board without separate workflows for each.",
    href: "/solutions/owned-and-subcontracted-fleets",
    linkLabel: "Mixed fleet solution",
  },
  {
    title: "Bulk Haulage Industry",
    desc: "How HaulageOps is applied across bulk haulage operations where subcontracted capacity is a standard part of meeting client demand and covering peak volumes.",
    href: "/industries/bulk-haulage",
    linkLabel: "Bulk Haulage",
  },
];

export default function SubcontractorCoordinationPage() {
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
            <span className="text-[#0F172A] font-medium">Subcontractor Coordination</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Subcontractor Coordination
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Delegate to subcontractors without losing visibility or control.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            When you delegate a job to a subcontractor in HaulageOps, they receive it in their own dedicated portal. They accept or decline. Their status flows back to your dispatch board. Their driver captures POD. Your client sees the delivery. You see all of it — without one phone call to chase an update.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/subcontractor-portal">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Subcontractor Portal Detail
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

      {/* THE SUBCONTRACTOR PROBLEM */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Subcontractor Problem</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The moment a job goes to a subcontractor by phone, you lose the thread
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                Using subcontracted capacity is a normal part of running a bulk haulage operation — particularly for operators managing overflow volumes, specialist equipment requirements, or geographic coverage beyond their owned fleet. The commercial relationship with subs is well understood. The operational coordination is where it gets difficult.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                When you send a job to a subcontractor by phone or WhatsApp, you have transferred the job and lost the thread at the same time. The sub might confirm verbally. They might reply &ldquo;on it&rdquo; in a WhatsApp message. They start the job. At some point during the day, your client calls to ask where their delivery is. You call the sub. The sub says they will check with their driver. You wait. You call the client back with second-hand information that is already twenty minutes old.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                This is not a problem of subcontractors being unreliable. It is a problem of structure: the job left your system when it left your control. There is no mechanism by which status can flow back to you without a phone call. HaulageOps creates that mechanism — a dedicated portal for the subcontractor that is connected to your dispatch board, so delegation and visibility exist at the same time.
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
            {/* Broken phone chain visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                Subcontractor Coordination — Current State
              </div>
              <div className="p-4 sm:p-5 space-y-3">
                <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                  <p className="text-white text-[11px] font-semibold">Your dispatch board</p>
                  <p className="text-[#94A3B8] text-[10px] mt-1">Shows owned trucks only. Sub jobs sent by phone/WhatsApp disappear from the board.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 bg-[#1E293B] border border-[#334155] rounded-lg p-2.5">
                    <Phone className="h-3.5 w-3.5 text-[#F87171] shrink-0" />
                    <span className="text-[10px] text-[#94A3B8]">You call the sub — voicemail</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#1E293B] border border-[#334155] rounded-lg p-2.5">
                    <PhoneOff className="h-3.5 w-3.5 text-[#F87171] shrink-0" />
                    <span className="text-[10px] text-[#94A3B8]">Sub calls their driver — no answer</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#1E293B] border border-[#334155] rounded-lg p-2.5">
                    <Phone className="h-3.5 w-3.5 text-[#FBBF24] shrink-0" />
                    <span className="text-[10px] text-[#94A3B8]">Sub calls back 20 min later — estimated status</span>
                  </div>
                </div>
                <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                  <p className="text-[#F87171] text-[11px] font-semibold">Client receives stale information</p>
                  <p className="text-[#94A3B8] text-[10px] mt-1">No audit trail. No delivery record until the docket arrives by post.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE HAULAGEOPS MODEL */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The HaulageOps Model</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            How subcontractor coordination works when the sub has their own portal
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            The structural fix is a dedicated portal for the subcontractor — connected to your dispatch board, showing only their jobs, receiving delegated work from your dispatch workflow and sending status back in the same channel. That is what the HaulageOps subcontractor portal provides.
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

      {/* PORTAL DATA SEPARATION */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Portal Data Separation</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Your client sees their portal. Your sub sees their portal. They never overlap.
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                One of the operational risks of connecting external parties to a shared system is data leakage — a subcontractor seeing your client&apos;s full rate card, or a client seeing your subcontractor relationships. HaulageOps uses role-based access control (RBAC) and multi-tenant architecture to prevent this by design.
              </p>
              <h3 className="mt-6 font-bold text-[#0F172A]">What the subcontractor sees in their portal</h3>
              <ul className="mt-3 space-y-3">
                {subSees.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <LockOpen className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="mt-6 font-bold text-[#0F172A]">What the subcontractor does NOT see</h3>
              <ul className="mt-3 space-y-3">
                {subDoesNotSee.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <Lock className="h-4 w-4 text-[#F87171] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[#475569] leading-relaxed">
                Your client&apos;s portal is equally scoped. They see their own jobs, their own POD, their own invoices, and their own rate cards. They do not see your subcontractor relationships or the fact that a particular job was fulfilled by a sub rather than your own fleet — unless your operational arrangement requires that disclosure.
              </p>
            </div>
            {/* Three portals — zero overlap visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                Three Portals — Zero Overlap
              </div>
              <div className="p-4 sm:p-5 space-y-4">
                <div className="bg-[#1E293B] border border-[#E8652B]/40 rounded-lg p-3">
                  <p className="text-white text-[11px] font-semibold">Your Admin Panel</p>
                  <p className="text-[#94A3B8] text-[10px] mt-1">Full view of all jobs, clients, subcontractors, both rates, full audit trail, management reports.</p>
                </div>
                <div className="flex items-center justify-center gap-1 text-[9px] text-[#FBBF24]">
                  <ArrowRight className="h-3 w-3" /> Delegates job to
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 text-[#FBBF24] shrink-0" />
                      <p className="text-white text-[10px] font-semibold">Subcontractor Portal</p>
                    </div>
                    <p className="text-[#94A3B8] text-[9px] mt-1 leading-relaxed">Scoped to their jobs only — queue, accept/decline, history, their pay rate.</p>
                  </div>
                  <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#4ADE80] shrink-0" />
                      <p className="text-white text-[10px] font-semibold">Client Portal</p>
                    </div>
                    <p className="text-[#94A3B8] text-[9px] mt-1 leading-relaxed">Scoped to their jobs only — status, POD, invoices, their rate card.</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-1 text-[9px] text-[#FBBF24]">
                  <ArrowRight className="h-3 w-3" /> Status and POD flow back
                </div>
                <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-3 flex items-center gap-2">
                  <Lock className="h-3.5 w-3.5 text-[#4ADE80] shrink-0" />
                  <p className="text-[#94A3B8] text-[10px] leading-relaxed">Data separation enforced at the architecture level — no settings to accidentally change.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW THIS COMPARES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">How This Compares</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Why most haulage software handles subcontractors poorly
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {compareCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-7 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] text-xl">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.desc}</p>
                <ul className="mt-5 space-y-3">
                  {card.points.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                      <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm italic text-[#1A7F37]">{card.footnote}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 sm:p-7 bg-[#EFFAF2] border border-[#3AAA60] rounded-2xl">
            <strong className="block mb-2 text-[#0F172A]">The HaulageOps subcontractor model:</strong>
            <p className="text-sm text-[#334155] leading-relaxed">
              Your subscription includes subcontractor portal access for as many external subs as you work with. The sub does not pay HaulageOps. The sub does not need their own subscription. They log in, see their jobs, accept or decline, update status, and capture POD — and all of that flows back to your dispatch board and your client&apos;s portal as part of your operation.
            </p>
          </div>
        </div>
      </section>

      {/* THE COMMERCIAL LAYER */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Commercial Layer</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Client charge rate and subcontractor pay rate — tracked separately, margin visible at job level
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                When you use a subcontractor, you are managing two commercial relationships simultaneously: the rate you charge your client for the job, and the rate you pay the sub to execute it. The difference is your margin on that job. In most haulage operations, these two numbers live in different places — the client rate in one spreadsheet, the sub invoice in another — and the margin calculation happens once a month, by hand, after the fact.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                In HaulageOps, both rates are attached to the job at dispatch. The client charge rate comes from the client&apos;s rate card — the same rate card that drives the invoice. The subcontractor pay rate is configured against the sub&apos;s record and applies when the job is delegated. Both rates sit on the same job record.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">This means:</p>
              <ul className="mt-4 space-y-3">
                {commercialBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Dual rate view visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                Job Record — Dual Rate View (Admin Only)
              </div>
              <div className="p-4 sm:p-5 space-y-3">
                <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-white text-[11px] font-semibold">JOB-1843 — Balfour Beatty</span>
                    <span className="px-1.5 py-0.5 rounded bg-[#3B82F6]/15 text-[#60A5FA] text-[9px] font-semibold">Subcontracted</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between gap-3 text-[10px]">
                      <span className="text-[#94A3B8]">Client Charge Rate</span>
                      <span className="text-[#FBBF24] font-semibold">$24 / tonne</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-[10px]">
                      <span className="text-[#94A3B8]">Subcontractor Pay Rate</span>
                      <span className="text-[#94A3B8] font-semibold">$18 / tonne</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-[10px] border-t border-[#334155] pt-2">
                      <span className="text-[#94A3B8]">Margin</span>
                      <span className="text-[#4ADE80] font-semibold">$6 / tonne</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                    <p className="text-[#94A3B8] text-[9px] uppercase tracking-wider mb-1.5">Sub portal view</p>
                    <p className="text-[10px] text-white">Pay Rate: $18 / tonne</p>
                    <p className="text-[9px] text-[#64748B] mt-1">Client charge rate not visible.</p>
                  </div>
                  <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                    <p className="text-[#94A3B8] text-[9px] uppercase tracking-wider mb-1.5">Client portal view</p>
                    <p className="text-[10px] text-white">Invoice: $2,640</p>
                    <p className="text-[9px] text-[#64748B] mt-1">No rate breakdown visible.</p>
                  </div>
                </div>
                <p className="text-[10px] text-[#475569]">
                  <FileCheck className="h-3 w-3 inline text-[#4ADE80]" /> Margin sits at the job level — no manual reconciliation at month end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently Asked Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Subcontractor coordination — common questions.
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
            Subcontractor coordination connects to these features and solutions
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See the subcontractor portal in a 20-minute demo</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              We will show you delegation from the dispatch board, the sub&apos;s portal acceptance view, and how status flows back — using your type of operation as the example.
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

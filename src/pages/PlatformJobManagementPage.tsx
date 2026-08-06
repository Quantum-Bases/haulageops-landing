"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight } from "lucide-react";

const lifecycleSteps = [
  {
    num: "01",
    title: "Create",
    desc: "Dispatcher or operations manager creates the job. Origin, destination, material, quantity, schedule and instructions entered once. Google Maps address autocomplete reduces errors on site names.",
  },
  {
    num: "02",
    title: "Price",
    desc: "Rate confirmed at creation from the client's rate card. Rate type (per-tonne, per-load, hourly, fixed) selected and value locked in. Subcontractor pay rate set separately if the job is being delegated. No rate negotiation happens at invoice time — it was agreed when the job was booked.",
  },
  {
    num: "03",
    title: "Assign",
    desc: "Job assigned to an owned driver and vehicle, or delegated to a named subcontractor. The assigned party receives the job immediately — driver through the mobile app push notification, subcontractor through their portal. Dispatcher does not need to call either to confirm.",
  },
  {
    num: "04",
    title: "Track",
    desc: "Status updates flow from the driver app to the dispatch board without phone calls. En route, on site, loaded, delivered — each status change is timestamped on the job record. Dispatchers see the board updating live via real-time connection.",
  },
  {
    num: "05",
    title: "POD",
    desc: "At delivery, the driver captures proof of delivery through the mobile app: photos of the load, the delivery docket, and customer signature. All POD is attached to the job record and stored in Azure. The docket is already there when you go to invoice.",
  },
  {
    num: "06",
    title: "Invoice",
    desc: "From the completed job record, an invoice is generated with rate and quantity already populated. Sent to the client portal and synced to Xero via OAuth2. The job record links to the invoice — no double-entry, no hunting for the rate that was agreed three weeks ago.",
  },
];

const historyCards = [
  {
    title: "Status timeline",
    desc: "Every status change on a job is recorded with a timestamp and the identity of who triggered it — whether the driver through the app, the dispatcher from the admin panel, or the system automatically. The timeline is visible on the job record and cannot be edited retroactively.",
  },
  {
    title: "Edit history",
    desc: "If a job is edited after creation — a rate correction, a change to the assigned driver, a destination update — the change is logged in the audit trail. The previous value and the new value are both recorded alongside the user who made the change and when.",
  },
  {
    title: "POD and document archive",
    desc: "All proof of delivery attachments, signed dockets and job documents are retained on the job record in Azure Blob Storage. They do not expire. A job from two years ago still has its POD accessible — useful when a client queries a delivery from a prior period.",
  },
];

const connectedModules = [
  {
    title: "Dispatch Management",
    href: "/platform/dispatch-management",
    desc: "The dispatch board shows every active job in real time. Assign, reassign, prioritise and monitor all jobs from a single view. Live status updates flow in as drivers move through their route.",
  },
  {
    title: "Job Scheduling",
    href: "/platform/job-scheduling",
    desc: "Plan forward work on the scheduling calendar. Use job templates to recreate recurring runs. View driver and subcontractor availability before locking in assignments. Schedule a week of work without calling anyone.",
  },
  {
    title: "Rate Management",
    href: "/platform/rate-management",
    desc: "Client rate cards and subcontractor pay rates are stored in the platform. When a job is created, the applicable rate is pulled in automatically from the rate card — no manual rate lookup, no rate disputes at invoice time.",
  },
];

const faqs = [
  {
    q: "How many jobs can the system handle?",
    a: "HaulageOps is built for operators running between 15 and 80 vehicles. Operators in that range typically create hundreds of jobs per week. The platform does not impose a per-job limit — job history is retained indefinitely and the dispatch board is designed for the volume a fleet of that size generates. If your operation is significantly outside that range, discuss your requirements during a demo.",
  },
  {
    q: "Can I edit a job after it has been dispatched to a driver?",
    a: "Yes. A dispatcher can edit job fields — destination, instructions, rate, assignment — after a job has been sent to a driver. The driver's app will reflect the updated information. All edits are logged in the job's audit trail: what was changed, the previous value, the new value, who made the change, and when. This gives you an honest record of what happened rather than hiding corrections.",
  },
  {
    q: "How do job templates work? Can any dispatcher use them?",
    a: "Any user with dispatcher access can create a job from a template. Templates are created from any completed job — you save the origin, destination, material, rate and instructions, then give the template a name. When creating a new job, you select the template and it pre-fills the form. You still confirm the date and make the assignment before saving. Templates are visible to all dispatchers in your organisation, so a template one person creates is available for the whole team.",
  },
  {
    q: "What happens to a job's rate if the rate card changes mid-contract?",
    a: "Rates are locked at job creation from the active rate card at that time. If you update a client's rate card, existing created jobs retain the rate that was set when they were created. New jobs created after the rate card update will pull in the new rates. This avoids accidentally applying new rates to work that was already booked and agreed at the prior rate. Rate cards in HaulageOps support effective dating — you can set a future start date for a new rate so it activates at the right time.",
  },
  {
    q: "Do subcontractors see the client rate when I assign them a job?",
    a: "No. The client charge rate and the subcontractor pay rate are stored as separate fields on the job record. When a job is delegated to a subcontractor via their portal, they see the job details — origin, destination, material, instructions, schedule — but not the client charge rate. They see only the pay rate agreed for their portion of the work. This is a deliberate design: your margin stays internal.",
  },
  {
    q: "Can clients see job details before the job is completed?",
    a: "Yes. Clients with access to the client portal can see their jobs in progress — status, estimated completion, driver assignment if you choose to share it, and location updates. You control what level of detail clients see through the portal settings. Once completed, the job record is visible in their portal with POD attached and a link to the invoice when raised.",
  },
  {
    q: "Is there a mobile view for dispatchers, or is job management desktop-only?",
    a: "The Admin & Dispatch Panel is a browser-based application accessible on any device. Dispatchers who need to create or manage jobs from a tablet or phone in the field can do so through the browser. The experience is optimised for desktop workflows because dispatch management at scale — viewing many jobs simultaneously, bulk creation, scheduling — benefits from a larger screen. The Driver App (iOS and Android) is the mobile-native experience designed for drivers, not dispatchers.",
  },
];

export function PlatformJobManagementPage() {
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
            <span className="text-[#0F172A] font-medium">Job Management</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4"
          >
            Core Operations
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1]"
          >
            Every haulage job created once. Managed end to end.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed"
          >
            The job record is the unit of work that every other part of HaulageOps connects to. Origin, destination, material, quantity, schedule, rate, assigned party and instructions — set at creation and carried through to the invoice without re-keying.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
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
          </motion.div>
          {/* Kicker pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {["Rate confirmed at creation", "Full audit timeline on every job", "POD attached at completion", "Dispatcher and driver see the same job"].map((pill) => (
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
            {[
              { strong: "6-step lifecycle", sub: "Create to Invoice, fully recorded" },
              { strong: "One record", sub: "Rate, assignment, POD, invoice, audit" },
              { strong: "Job templates", sub: "Recurring work created in seconds" },
              { strong: "Bulk creation", sub: "Multiple jobs from a single action" },
              { strong: "Zero re-keying", sub: "From job creation to Xero invoice" },
            ].map((item) => (
              <div key={item.strong} className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-sm">{item.strong}</span>
                <span className="text-[#94A3B8] text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* JOB RECORD FIELDS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Job Record</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Every field your operation needs. Nothing you don't.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            When a job is created in HaulageOps, you fill in the fields that matter for bulk haulage: where it starts, where it ends, what material is being moved, how much, when, and at what rate. That information travels with the job record through its entire lifecycle — it does not need to be re-entered at dispatch, re-confirmed at invoicing, or hunted down from a separate spreadsheet when a client queries a charge.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {/* Core fields */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">Core job fields</h3>
              <ul className="space-y-3">
                {[
                  ["Origin", "pickup location with Google Maps address autocomplete"],
                  ["Destination", "delivery site with routing distance calculated"],
                  ["Material", "what is being hauled (configurable material types)"],
                  ["Quantity", "tonnes, loads, cubic metres or other unit"],
                  ["Schedule", "date and time window for the movement"],
                  ["Rate type", "per-tonne, per-load, hourly or fixed fee"],
                  ["Rate value", "confirmed from the client rate card at creation"],
                  ["Assigned party", "owned driver/vehicle or named subcontractor"],
                  ["Instructions", "site-specific notes for the driver"],
                  ["Job reference", "your internal or client purchase order reference"],
                ].map(([label, detail]) => (
                  <li key={label} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span><strong>{label}</strong> — {detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* What attaches */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">What attaches to the record over its life</h3>
              <ul className="space-y-3">
                {[
                  ["Status history", "every status change timestamped and attributed"],
                  ["Driver updates", "en-route, on-site, loaded, delivered"],
                  ["POD documents", "photos, dockets and customer signature from the driver app"],
                  ["Docket images", "uploaded from site or captured in the driver app"],
                  ["Invoice reference", "once invoiced, the invoice links back to the job"],
                  ["Audit events", "who created, edited, reassigned, or completed the job and when"],
                  ["Subcontractor pay record", "separate cost rate stored alongside client charge rate"],
                  ["Documents", "any supporting files attached by dispatch or management"],
                ].map(([label, detail]) => (
                  <li key={label} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span><strong>{label}</strong> — {detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DISPATCHER & DRIVER VIEW */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Platform View</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The dispatcher's view and the driver's view — the same job.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            Dispatchers see the full job record including rate, assignment history and all attached documents. Drivers see the same job through the mobile app: origin, destination, material, instructions and POD requirement. No information is re-entered at either end — what dispatch creates, the driver receives.
          </p>
          <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-[#0D1525] p-8 text-[#94A3B8] text-sm font-mono leading-relaxed">
            <div className="text-[#E8652B] font-bold mb-2 text-xs uppercase tracking-widest">HaulageOps — Job Record Detail</div>
            <p>Full job detail view in the Admin & Dispatch Panel showing: job header (origin → destination, material, quantity, rate), assignment section (driver name, vehicle, subcontractor if applicable), status timeline (Created 09:12 → Assigned 09:15 → En Route 07:44 → Delivered 11:02), POD attachments section (3 photos, 1 signed docket), and linked invoice reference. Sidebar shows client name and job reference number.</p>
          </div>
        </div>
      </section>

      {/* JOB LIFECYCLE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Job Lifecycle</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Create → Price → Assign → Track → POD → Invoice
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            A haulage job in HaulageOps moves through a defined lifecycle. Each step is recorded. No step requires data from outside the system — the information set at creation follows the job all the way to billing.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycleSteps.map((step) => (
              <div key={step.num} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <span className="text-3xl font-black text-[#E8652B]/20 leading-none">{step.num}</span>
                <h3 className="mt-2 text-lg font-bold text-[#0F172A]">{step.title}</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMPLATES & BULK CREATION */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Recurring Work</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Job templates and bulk creation for work that repeats.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A]">Job templates for recurring runs</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                If you have a site supply run that goes from the same quarry to the same construction site every day, you do not rebuild that job from scratch each morning. Save the job as a template — origin, destination, material type, rate and instructions are stored. When the work recurs, load the template, confirm the date and assign the driver. Done in under a minute.
              </p>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                Templates are particularly useful for operators managing long-running site contracts where the same movement repeats across days or weeks. They reduce data-entry errors on repetitive work and ensure the rate applied is consistent with the agreed contract rate.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Save any job as a reusable template",
                  "Templates store all core fields except date and assignment",
                  "Create a new job from a template in seconds",
                  "Templates can be updated when contract rates change",
                  "Useful for daily site supply, quarry to plant, regular materials runs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0F172A]">Bulk job creation</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                When a large site contract requires creating many jobs at once — multiple trucks running the same route on the same day, or a week of work assigned to different drivers — bulk job creation allows a dispatcher to generate multiple job records from a single action rather than clicking through the creation form repeatedly.
              </p>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                Bulk creation maintains the same field completeness as single job creation. Each job generated carries its own rate, assignment and schedule. They appear individually on the dispatch board and can be managed independently once created.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Generate multiple jobs in a single action",
                  "Each job is an independent record on the dispatch board",
                  "Assign different drivers to each job in the bulk creation flow",
                  "Useful for large site mobilisations and week-ahead planning",
                  "All generated jobs appear in the job history with full audit trail",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* JOB HISTORY */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Audit & History</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Complete job history with a full timeline on every record.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            Every job that passes through HaulageOps — created, completed, cancelled or edited — is retained in the job history. Dispatch can search and filter job history by date range, client, driver, subcontractor, material or status. Management reporting draws from the same history for financial and operational analysis.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {historyCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-[#0D1525] p-8 text-[#94A3B8] text-sm font-mono leading-relaxed">
            <div className="text-[#E8652B] font-bold mb-2 text-xs uppercase tracking-widest">HaulageOps — Job History View</div>
            <p>Job history table in Admin Panel. Columns: Job ID, Client, Origin, Destination, Material, Quantity, Rate, Driver/Sub, Status (colour-coded: Completed green, Cancelled grey, In Progress blue), Date. Filter bar above: date range picker, client dropdown, status filter, driver filter. Clicking any row opens the full job record detail view. Pagination at bottom shows 50 jobs per page.</p>
          </div>
        </div>
      </section>

      {/* CONNECTED PLATFORM */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Connected Platform</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The job connects to everything else in HaulageOps.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            Job management is the foundation. The other modules in HaulageOps work because the job record is the shared source of truth they all read from and write to.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {connectedModules.map((mod) => (
              <div key={mod.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
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
            <Link href="/solutions/haulage-dispatch" className="text-[#E8652B] hover:underline font-medium">Haulage Dispatch solution</Link>
            {" | "}
            <Link href="/solutions/job-to-invoice" className="text-[#E8652B] hover:underline font-medium">Job to Invoice workflow</Link>
            {" | "}
            <Link href="/platform/billing-and-invoicing" className="text-[#E8652B] hover:underline font-medium">Billing & Invoicing</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Job Management — frequently asked questions
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-[#E2E8F0] rounded-xl overflow-hidden">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See job management working in a live demo.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              We'll walk through creating a job, dispatching it, tracking it to completion and generating the invoice — your actual workflow, not a slide deck.
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

export default PlatformJobManagementPage;

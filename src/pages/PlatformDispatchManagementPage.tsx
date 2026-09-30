"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight } from "lucide-react";
import { DispatchManagementMockup } from "@/components/shared/platform-mockups";

const assignmentSteps = [
  {
    num: "01",
    title: "Job Created",
    desc: "A job record is created with client, material, pickup site, delivery site, rate and scheduled time. Rates are attached from the client rate card automatically.",
  },
  {
    num: "02",
    title: "Assign or Delegate",
    desc: "Dispatcher assigns the job to an owned driver — or delegates to a subcontractor. Owned driver receives a push notification via Firebase FCM. Subcontractor sees the job in their portal immediately.",
  },
  {
    num: "03",
    title: "Dispatched",
    desc: "Job status moves to Dispatched. The driver or subcontractor confirms, and the dispatch board updates in real time via Socket.io — no refresh needed.",
  },
  {
    num: "04",
    title: "In Progress",
    desc: "Driver marks En Route, then At Pickup, then Loading. Each status change updates the dispatch board and is logged in the audit trail with timestamp and user identity.",
  },
  {
    num: "05",
    title: "In Transit",
    desc: "Load is moving. Dispatcher can see live GPS position on the board. Client can see live status in their portal. No one needs to call anyone to find out where the truck is.",
  },
  {
    num: "06",
    title: "Completed",
    desc: "Driver captures POD — photo, documents, customer signature — at delivery. Job status moves to Completed. Invoice record is automatically available for billing. Docket is attached. Done.",
  },
];

const roleViews = [
  {
    title: "Dispatcher view",
    desc: "Full dispatch board with all jobs across owned and subcontracted fleet. Can create, assign, reassign and monitor every job. Can see all driver positions and subcontractor statuses. Access to rate confirmation before dispatch.",
  },
  {
    title: "Driver view (mobile app)",
    desc: "Driver sees only their own assigned jobs. Job details, pickup and delivery instructions, status update controls, POD capture and break records. Cannot see other drivers' jobs, rates or client information.",
  },
  {
    title: "Management view",
    desc: "Operational overview across all jobs, revenue and compliance. Financial reporting, audit trail access, driver and fleet record management. Management can pull any log without calling anyone.",
  },
];

const comparisonTable = [
  { activity: "Assign a job to a driver", manual: "WhatsApp message, hope they read it", haulageOps: "Assign in board, driver gets push notification" },
  { activity: "Delegate to a subcontractor", manual: "Call or text, wait for reply", haulageOps: "Delegate in board, sub sees it in portal immediately" },
  { activity: "Know where the truck is", manual: "Call the driver", haulageOps: "Live GPS on dispatch board — no call needed" },
  { activity: "Check job status", manual: "Call, text or chase on WhatsApp", haulageOps: "Status updates in real time, visible on board" },
  { activity: "Confirm POD was captured", manual: "Wait for paper docket (possibly days)", haulageOps: "Photo + signature attached at job completion" },
  { activity: "Audit who dispatched what", manual: "No record — it's in a chat thread", haulageOps: "Full audit log: user, action, timestamp" },
  { activity: "Client asks where their delivery is", manual: "Dispatcher calls driver, calls client back", haulageOps: "Client sees live status in their own portal" },
  { activity: "Subcontractor rate vs client charge", manual: "Someone knows — it's in their head", haulageOps: "Separate rates stored per job, margin stays in system" },
];

const relatedModules = [
  {
    title: "Job Management",
    href: "/platform/job-management",
    desc: "Every dispatched job starts as a job record. Create, schedule, template and manage the full job lifecycle from creation through to completed delivery and billing.",
  },
  {
    title: "Subcontractor Portal",
    href: "/platform/subcontractor-portal",
    desc: "Delegated jobs flow directly into the subcontractor's own credentialed portal. No shared logins. No WhatsApp. Subcontractors accept, update and complete jobs without needing to be a HaulageOps customer themselves.",
  },
  {
    title: "Live Job Tracking",
    href: "/platform/live-job-tracking",
    desc: "Real-time GPS positions and Socket.io status updates combine to give dispatchers full situational awareness. See every truck, every status, every moment — without calling anyone.",
  },
];

const faqs = [
  {
    q: "How many jobs can the dispatch board handle at once?",
    a: "The dispatch board is not limited by a fixed job count — it is filtered by date range, driver, client or status so dispatchers only see what is relevant to them at any given moment. Operators with 15 to 80 vehicles and multiple subcontractors run their full daily job schedule from the same board. Performance is maintained by the real-time Socket.io connection rather than repeated page loads.",
  },
  {
    q: "How do subcontractors receive their jobs?",
    a: "When a dispatcher delegates a job to a subcontractor, the job appears immediately in that subcontractor's dedicated portal. The subcontractor logs in with their own credentials — they do not need to be a HaulageOps customer or pay any subscription. They see only the jobs delegated to them, along with interactive Mapbox maps showing pickup and delivery sites. They can accept or decline, and all status updates feed back to your dispatch board in real time.",
  },
  {
    q: "What happens to dispatch tracking when a driver loses mobile signal?",
    a: "The driver mobile app is offline-capable. Status updates made without connectivity are queued locally and synchronised when the device returns to range. This is particularly important for quarry, rural and remote site work where connectivity is intermittent. GPS tracking requires an active connection — so positions will not update during an offline period, but the last known position is retained on the board until the device reconnects.",
  },
  {
    q: "Can a dispatcher reassign a job that is already in progress?",
    a: "Yes. A dispatcher can reassign a job to a different driver or delegate to a subcontractor at any point before completion. Reassignment generates a new push notification to the newly assigned driver or subcontractor. The job history records the reassignment with a timestamp and the user who made the change — this is visible in the audit trail.",
  },
  {
    q: "Does the dispatch board require any additional GPS hardware?",
    a: "No hardware telematics integration is required. Live position data comes from the driver's mobile phone GPS, transmitted through the HaulageOps driver app. If your fleet already has GPS hardware units installed, those operate independently — HaulageOps is the operations layer above the hardware, not a replacement for it. A hardware telematics integration is on the product roadmap.",
  },
  {
    q: "Can clients see the dispatch board?",
    a: "No. Clients access their own separate client portal where they can see the status of their specific jobs, live updates, proof of delivery and invoices. They cannot see the full dispatch board, other clients' jobs, driver information, or internal rates. The role-based access control ensures each portal type shows only what is appropriate for that user.",
  },
  {
    q: "Can the dispatch board be viewed on a mobile device or tablet?",
    a: "The dispatch board is accessed through the admin and dispatch panel, which is a web application optimised for desktop use where dispatchers typically work. The driver mobile app (iOS and Android) is the mobile-first experience for drivers. A tablet can access the dispatch panel through a browser, and the layout is responsive, though the full board view is designed for a wider screen.",
  },
];

export function PlatformDispatchManagementPage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb Nav */}
      <div className="pt-24 pb-0 bg-neutral-50/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/platform" className="hover:text-[#E8652B]">Platform</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Dispatch Management</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-neutral-50/80 via-white to-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4"
          >
            Dispatch Management
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 max-w-4xl leading-[1.1]"
          >
            One dispatch board for every driver, truck and subcontractor you manage.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-3xl leading-relaxed"
          >
            Real-time job assignment, live GPS positions and status updates — owned fleet and subcontractors on the same board, no phone calls required.
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
            <Link href="/platform/live-job-tracking">
              <Button size="lg" variant="outline" className="border-neutral-200 text-neutral-700 hover:bg-neutral-50/50">
                See Live Tracking
              </Button>
            </Link>
          </motion.div>
          {/* Kicker pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Socket.io real-time updates",
              "Owned + subcontractor fleet",
              "Live mobile GPS",
              "Role-specific views",
              "No extra hardware",
            ].map((pill) => (
              <span key={pill} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 text-xs font-medium text-neutral-700">
                <CheckCircle className="h-3.5 w-3.5 text-[#E8652B] shrink-0" />
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-neutral-900 py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { strong: "Single board", sub: "owned + subcontracted" },
              { strong: "Real-time", sub: "Socket.io status updates" },
              { strong: "6-stage", sub: "job status lifecycle" },
              { strong: "Mobile GPS", sub: "live truck positions" },
              { strong: "Sub portal", sub: "no phone-tag dispatch" },
              { strong: "RBAC", sub: "role-based views" },
            ].map((item) => (
              <div key={item.strong} className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-sm">{item.strong}</span>
                <span className="text-neutral-400 text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* THE DISPATCH BOARD */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Dispatch Board</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 max-w-3xl">
            Every job, every driver, every subcontractor — one live view.
          </h2>
          <p className="mt-4 text-neutral-600 max-w-3xl leading-relaxed">
            Most haulage dispatch runs on a combination of WhatsApp messages, phone calls, and a spreadsheet that's always one version behind. HaulageOps replaces that with a single real-time dispatch board that shows every live job, every driver assignment, and every subcontractor delegation — updated the moment anything changes.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-neutral-50/50 rounded-2xl p-8 border border-neutral-200">
              <h3 className="text-xl font-bold text-neutral-900 mb-5">What the dispatch board shows</h3>
              <ul className="space-y-3">
                {[
                  "All jobs for the current day and forward schedule in a single scrollable board",
                  "Each job's current status: created, dispatched, in progress, at pickup, in transit, completed",
                  "Driver assigned — or subcontractor delegated — with a single visual indicator",
                  "Live GPS position of every driver using the mobile app, updated in real time via Socket.io",
                  "Material type, pickup site, delivery site and scheduled time visible at a glance",
                  "Overdue and delayed jobs highlighted so dispatchers can act without hunting for information",
                  "Day and week views to manage forward scheduling alongside live operations",
                  "Filter by driver, truck, client, subcontractor or job status",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full">
              <DispatchManagementMockup />
            </div>
          </div>
        </div>
      </section>

      {/* JOB ASSIGNMENT FLOW */}
      <section className="py-20 bg-neutral-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Job Assignment Flow</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 max-w-3xl">
            Assign to a driver. Delegate to a subcontractor. Both from the same board.
          </h2>
          <p className="mt-4 text-neutral-600 max-w-3xl leading-relaxed">
            Owned drivers and subcontractors operate differently, so HaulageOps handles them differently — but a dispatcher sees both in one place. Assigning a job to an owned driver sends a push notification to their mobile app. Delegating to a subcontractor pushes the job directly into their dedicated subcontractor portal.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignmentSteps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                <span className="text-3xl font-black text-[#E8652B]/20 leading-none">{step.num}</span>
                <h3 className="mt-2 text-lg font-bold text-neutral-900">{step.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OWNED FLEET VS SUBCONTRACTORS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Owned Fleet vs Subcontractors</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 max-w-3xl">
            Different assignment paths. One board to manage both.
          </h2>
          <p className="mt-4 text-neutral-600 max-w-3xl leading-relaxed">
            Operators managing a mix of owned trucks and subcontracted capacity face a specific problem: owned drivers get jobs through one channel, subs get them through another, and both need to feed status back to the same dispatch picture. HaulageOps is built for exactly this operating model.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {/* Owned fleet */}
            <div className="bg-neutral-50/50 rounded-2xl p-8 border border-neutral-200 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-neutral-900">Owned fleet dispatch</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  Jobs go directly to your employed drivers through the HaulageOps mobile app. The driver receives a push notification, sees full job details including origin, destination, material and any site instructions, and updates their status as they progress through the job. Their phone's GPS feeds live position back to the dispatch board.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {[
                    "Firebase FCM push notification on job assignment",
                    "Full job details visible in driver mobile app (iOS + Android)",
                    "Six-stage status workflow with driver-initiated updates",
                    "Live GPS position on dispatch board",
                    "POD capture at delivery: photo, documents, customer signature",
                    "Break and rest period recording for fatigue compliance",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                      <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/platform/driver-app" className="mt-8 text-sm font-semibold text-[#E8652B] hover:text-[#D05520]">
                Driver App details →
              </Link>
            </div>
            {/* Subcontractor dispatch */}
            <div className="bg-neutral-50/50 rounded-2xl p-8 border border-neutral-200 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-neutral-900">Subcontractor dispatch</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  Delegated jobs go directly to each subcontractor's dedicated portal — no shared logins, no WhatsApp forwards, no phone calls. The subcontractor logs into their own HaulageOps portal, sees their job queue, accepts or declines, and updates job status through the same lifecycle. Status feeds back to your dispatch board in real time.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {[
                    "Each subcontractor has their own credentialed portal login",
                    "Subcontractor sees only their own jobs — never other subs or internal rates",
                    "Accept or decline delegation from within the portal",
                    "Interactive Mapbox maps show pickup and delivery sites",
                    "Status updates feed back to your dispatch board in real time",
                    "Subcontractor does not need to be a HaulageOps customer",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                      <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/platform/subcontractor-portal" className="mt-8 text-sm font-semibold text-[#E8652B] hover:text-[#D05520]">
                Subcontractor Portal details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROLE-BASED VIEWS */}
      <section className="py-20 bg-neutral-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Role-Based Views</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 max-w-3xl">
            Dispatchers see dispatch. Management sees operations. Drivers see their jobs.
          </h2>
          <p className="mt-4 text-neutral-600 max-w-3xl leading-relaxed">
            Showing every user everything creates noise, mistakes and security gaps. HaulageOps uses role-based access control (RBAC) to give each person a view appropriate to their function. A dispatcher gets the live board. A driver gets their job queue. A manager gets the operational overview. A client gets their jobs and invoices — nothing else.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {roleViews.map((rv) => (
              <div key={rv.title} className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                <h3 className="font-bold text-neutral-900 mb-2">{rv.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{rv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANUAL DISPATCH VS HAULAGEOPS TABLE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Manual Dispatch vs HaulageOps</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 max-w-3xl">
            What gets replaced when you move from WhatsApp dispatch.
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-neutral-200 text-sm text-neutral-900">
                  <th className="py-4 px-4 font-bold">Dispatch activity</th>
                  <th className="py-4 px-4 font-bold text-neutral-500">WhatsApp + spreadsheet</th>
                  <th className="py-4 px-4 font-bold text-[#E8652B] bg-orange-50 border border-orange-200/50 rounded-t-lg">HaulageOps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] text-sm">
                {comparisonTable.map((row) => (
                  <tr key={row.activity} className="hover:bg-neutral-50/50">
                    <td className="py-4 px-4 font-medium text-neutral-900">{row.activity}</td>
                    <td className="py-4 px-4 text-neutral-500">{row.manual}</td>
                    <td className="py-4 px-4 font-semibold text-neutral-700 bg-orange-50 border border-orange-200 text-[#E8652B]/30">{row.haulageOps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RELATED PLATFORM FEATURES */}
      <section className="py-20 bg-neutral-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related Platform Features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 max-w-3xl">
            Dispatch connects to the rest of the platform.
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {relatedModules.map((mod) => (
              <div key={mod.title} className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                <h3 className="font-bold text-neutral-900 mb-2">
                  <Link href={mod.href} className="hover:text-[#E8652B] transition-colors">
                    {mod.title}
                  </Link>
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-neutral-600">
            Also connected:{" "}
            <Link href="/solutions/haulage-dispatch" className="text-[#E8652B] hover:underline font-medium">
              Haulage Dispatch solution
            </Link>{" "}
            — how dispatch fits into the complete operational picture for bulk haulage operators.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900">
            Frequently asked about HaulageOps dispatch management.
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-neutral-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-neutral-900 text-sm list-none hover:bg-neutral-50/50">
                  {faq.q}
                  <ChevronRight className="h-4 w-4 text-neutral-400 shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                  <p className="pt-4">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See the dispatch board in action.</h2>
            <p className="mt-2 text-neutral-400 text-sm leading-relaxed max-w-xl">
              Book a 20-minute demo and see how owned driver assignment, subcontractor delegation and live GPS tracking work together on one board.
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

export default PlatformDispatchManagementPage;

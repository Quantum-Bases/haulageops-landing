"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight } from "lucide-react";

const beforeAfterComparison = [
  { situation: "Client asks where their delivery is", phone: "Call the driver, call you back, relay to client", haulageOps: "Client checks their portal — no call needed" },
  { situation: "Dispatcher checks status of 10 active jobs", phone: "10 phone calls, some unanswered", haulageOps: "Dispatch board shows all 10 in real time" },
  { situation: "Subcontractor job status", phone: "Call the sub's driver or office", haulageOps: "Sub updates their portal — your board updates" },
  { situation: "When did that load deliver?", phone: "Ask the driver, check a WhatsApp message", haulageOps: "Delivery timestamp on the job record" },
  { situation: "Driver in low-signal area", phone: "Unreachable — no status update possible", haulageOps: "Last known status retained; syncs when signal returns" },
  { situation: "Evidence of delivery time for invoice dispute", phone: "No reliable record exists", haulageOps: "Timestamped status + POD stored on job record" },
];

const connectedModules = [
  {
    title: "Driver App",
    href: "/platform/driver-app",
    desc: "The iOS and Android driver app is where status updates originate. Offline-capable, push notification-driven, with POD capture built in. Everything the driver does in the app flows to the dispatch board and job record.",
  },
  {
    title: "Dispatch Management",
    href: "/platform/dispatch-management",
    desc: "The dispatch board is where live tracking is most visible. All active jobs, all drivers, all subcontractors — one view, updating in real time. Assign new jobs, see ETAs, manage reassignments without leaving the board.",
  },
  {
    title: "Subcontractor Portal",
    href: "/platform/subcontractor-portal",
    desc: "Subcontractors manage their assigned jobs through a dedicated portal. Status updates they make in their portal feed directly to your dispatch board. No phone calls. No WhatsApp chains. A clear record of what happened and when.",
  },
];

const faqs = [
  {
    q: "How accurate is the mobile GPS tracking?",
    a: "GPS accuracy depends on the quality of the driver's smartphone and the availability of satellite signals in their area. In open areas with a modern smartphone, position accuracy is typically within 5–10 metres. In urban areas with tall buildings or indoor environments, accuracy may reduce. The position data is sufficient to show which job site a driver is at and their general route — it is not intended for metre-precision asset tracking. If your operation requires that level of precision, you likely need dedicated telematics hardware for that purpose, which HaulageOps does not replace or replicate.",
  },
  {
    q: "What happens if a driver has no mobile signal on site?",
    a: "The driver app is offline-capable. If the driver loses signal, the app continues to function locally on their phone. They can still update their job status — the update is queued in the app. When the driver regains connectivity, the queued updates synchronise automatically to the dispatch board. The last known position and status remain visible to dispatch during the offline period. This means a driver working at a remote quarry or low-coverage site does not need to find a signal before updating their status.",
  },
  {
    q: "Can clients see the live GPS position of the driver, or just the job status?",
    a: "By default, clients see job status updates in their portal — Assigned, En Route, On Site, Delivered — rather than a live GPS pin of the driver's exact location. The level of visibility available to clients is controlled by the operating company's portal settings. If you want clients to see more or less detail, discuss your requirements during implementation. For most bulk haulage and construction logistics clients, job status visibility is sufficient — they want to know when the material is arriving, not to watch a truck icon move on a map.",
  },
  {
    q: "Does the driver need to keep the app open for GPS to work?",
    a: "The driver should have the app active during their working day for GPS and status updates to function as intended. Background location tracking depends on the permissions the driver grants on their phone's operating system and the platform policies (iOS and Android handle background app permissions differently). During setup and driver onboarding, we walk through the recommended app and permission settings to ensure consistent tracking behaviour. Drivers who close the app entirely between updates will not have continuous GPS tracks, but their manual status updates remain fully functional.",
  },
  {
    q: "Do we need to buy or install any hardware to use live tracking?",
    a: "No. Live job tracking in HaulageOps uses the GPS in the driver's existing iOS or Android smartphone via the driver app. There is no proprietary hardware to purchase, install, or maintain. If you already have in-cab GPS units installed for insurance, safety, or compliance purposes, keep them — HaulageOps does not conflict with those devices and does not require their removal. We are the operations management layer above your existing hardware.",
  },
  {
    q: "How do subcontractor job updates reach my dispatch board?",
    a: "When you delegate a job to a subcontractor through HaulageOps, the job appears in the subcontractor's dedicated portal. When the subcontractor updates the job status in their portal — accepted, en route, completed — that update is immediately reflected on your dispatch board via the same Socket.io real-time connection that handles your own driver updates. You see all active jobs — owned fleet and subcontracted — in one board, with status updates flowing in from both sources without any calls or messages between your team and the subcontractor.",
  },
];

export function PlatformLiveJobTrackingPage() {
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
            <span className="text-[#0F172A] font-medium">Live Job Tracking</span>
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
            See where every job stands without making a single phone call.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed"
          >
            Real-time status from owned drivers and subcontractors flows directly to the dispatch board. Mobile GPS from the driver's existing smartphone. Clients see their job status updating live in their portal. No proprietary hardware required.
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
            <Link href="/platform/dispatch-management">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Dispatch Management
              </Button>
            </Link>
          </motion.div>
          {/* Kicker pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Socket.io real-time updates",
              "Works on existing smartphones",
              "Subcontractors included",
              "Clients see live status too",
            ].map((pill) => (
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
              { strong: "Zero hardware", sub: "Uses the driver's existing phone" },
              { strong: "Real-time board", sub: "Socket.io pushes status instantly" },
              { strong: "Subcontractors too", sub: "Their portal updates show on your board" },
              { strong: "Client visibility", sub: "Live status in the client portal" },
              { strong: "Offline-capable", sub: "Driver app syncs when signal returns" },
            ].map((item) => (
              <div key={item.strong} className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-sm">{item.strong}</span>
                <span className="text-[#94A3B8] text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">How It Works</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Status flows from the driver's phone to the dispatch board automatically.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            When a driver picks up a job on their mobile app and updates their status — en route, on site, loaded, delivered — that status flows to the dispatch board without any phone call, text message or radio exchange. The mechanism is Socket.io, which maintains a persistent real-time connection between the driver app and the dispatch board. Status changes appear on the board within seconds of the driver tapping their phone.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">What the driver does</h3>
              <ul className="space-y-3">
                {[
                  "Opens the driver app on their iOS or Android phone",
                  "Sees their assigned jobs for the day",
                  "Taps to update status at each stage: En Route, On Site, Loaded, Delivered",
                  "App captures GPS position alongside each status update",
                  "At delivery, captures POD: photos, docket, customer signature",
                  "No phone call required at any stage",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">What dispatch sees</h3>
              <ul className="space-y-3">
                {[
                  "Dispatch board updates live as each driver moves through their job",
                  "Job cards show current status in real time: colour-coded by stage",
                  "Driver GPS position visible on the map panel",
                  "Status timestamps recorded on the job record automatically",
                  "No need to call drivers to ask where they are",
                  "Subcontractor jobs update via their portal — same board, same view",
                ].map((item) => (
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

      {/* PLATFORM VIEW VISUAL SPEC */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Platform View</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The dispatch board — updating live as jobs progress.
          </h2>
          <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-[#0D1525] p-8 text-[#94A3B8] text-sm font-mono leading-relaxed">
            <div className="text-[#E8652B] font-bold mb-2 text-xs uppercase tracking-widest">HaulageOps — Live Dispatch Board with GPS Map</div>
            <p>Split-view dispatch board. Left panel: job list with status columns (Assigned, En Route, On Site, Delivered). Each job card shows driver name, origin → destination, material and a coloured status badge. Right panel: map view showing driver location pins with truck icons, labelled with driver initials and job reference. One pin is mid-route (blue), one is at site (orange), two are delivered (green). Last status update timestamp shown on each card. Subcontractor job shown with different icon style.</p>
          </div>
        </div>
      </section>

      {/* MOBILE GPS — NO HARDWARE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Mobile GPS</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            No proprietary hardware. Uses the driver's existing smartphone.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            HaulageOps tracks driver location using the GPS in the driver's existing iOS or Android smartphone. There is no proprietary tracking hardware to purchase, install or maintain. The driver installs the HaulageOps driver app, and their phone's GPS becomes the tracking device.
          </p>
          <p className="mt-3 text-[#475569] max-w-3xl leading-relaxed">
            This is a deliberate design choice for operators in the 15–80 vehicle range. Proprietary in-cab telematics hardware is expensive per unit, requires installation across your fleet, and becomes a maintenance and replacement overhead. For many operators, that cost and complexity is not justified by the tracking benefit alone — particularly when most drivers already carry a smartphone capable of providing location data.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
              <h3 className="font-bold text-[#0F172A] mb-2">How GPS works in the app</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                When a driver opens their assigned job and begins work, the app requests location permission from the phone's OS. With permission granted, the app periodically captures and transmits the phone's GPS coordinates to the dispatch board. Position updates are visible to dispatch alongside the job status. The driver does not need to do anything additional — location updates automatically while the app is in use.
              </p>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
              <h3 className="font-bold text-[#0F172A] mb-2">Keep your existing GPS hardware</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Many fleet operators already have in-cab telematics units installed for insurance purposes, compliance requirements or fleet safety programmes. HaulageOps does not replace those units and does not require you to remove them. Your telematics hardware continues doing its safety and compliance role. HaulageOps is the operations layer above it — handling job assignment, status tracking, POD, billing and subcontractor coordination. Keep what you have. Add what you need.
              </p>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
              <h3 className="font-bold text-[#0F172A] mb-2">Offline capability</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                The driver app is offline-capable. If a driver loses mobile signal mid-route — in a tunnel, at a remote site, in a low-coverage area — the app continues functioning. Status updates and GPS data are queued locally and synchronised to the dispatch board when connectivity returns. The driver's last known position and most recent status remain visible to dispatch during the offline period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND YOUR OWN FLEET */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Beyond Your Own Fleet</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Subcontractor jobs and client visibility — all on the same board.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A]">Subcontractor job tracking</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                When you delegate a job to a subcontractor through HaulageOps, they manage that job through their own portal. They update job status from their side — accepted, en route, completed — and those updates flow back to your dispatch board in real time. You do not need to call the subcontractor to find out where the job stands. Their portal updates appear on your board alongside your own driver updates.
              </p>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                This is particularly useful for operators who mix owned fleet with subcontractor capacity. The dispatch board shows all active jobs — whether being run by your drivers or your subs — with the same status visibility. There is no separate tracking interface for subcontracted work.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Subcontractor status updates visible on your dispatch board",
                  "Subcontractors use their own dedicated portal — no additional seat required",
                  "Status updates timestamped and recorded on the job record",
                  "Subcontractor GPS visible if they are using the portal's map view",
                  "No phone calls required to check subcontractor progress",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0F172A]">Client visibility in the client portal</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                Clients who access their HaulageOps client portal can see the live status of their jobs without contacting your office. When a job moves from Assigned to En Route to Delivered, the client portal reflects that change. For clients running active construction sites who need to know when materials will arrive, this eliminates the inbound phone calls your dispatch team currently handles.
              </p>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                Client access is controlled by the operating company. You choose which clients have portal access and what level of job detail they can see. Clients cannot see rates set for other clients, cannot access internal operations, and cannot create or edit jobs. Their view is read-only for the jobs relevant to their account.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Clients see live job status in their portal — no calls to your office",
                  "Status updates: Assigned, En Route, On Site, Delivered",
                  "POD accessible to clients once job is completed",
                  "Client view is read-only — they cannot modify jobs",
                  "Access controlled per client by your admin team",
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

      {/* BEFORE AND AFTER TABLE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Before and After</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Managing status by phone versus a live dispatch board.
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-[#E2E8F0] text-sm text-[#0F172A]">
                  <th className="py-4 px-4 font-bold">Situation</th>
                  <th className="py-4 px-4 font-bold text-[#64748B]">Calling drivers</th>
                  <th className="py-4 px-4 font-bold text-[#E8652B] bg-[#FFF0E6]/50 rounded-t-lg">HaulageOps live board</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] text-sm">
                {beforeAfterComparison.map((row) => (
                  <tr key={row.situation} className="hover:bg-[#F8FAFC]">
                    <td className="py-4 px-4 font-medium text-[#0F172A]">{row.situation}</td>
                    <td className="py-4 px-4 text-[#64748B]">{row.phone}</td>
                    <td className="py-4 px-4 font-semibold text-[#334155] bg-[#FFF0E6]/30">{row.haulageOps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CONNECTED PLATFORM */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Connected Platform</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Live tracking connects to every part of the operation.
          </h2>
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
            <Link href="/platform/client-portal" className="text-[#E8652B] hover:underline font-medium">Client Portal</Link>
            {" | "}
            <Link href="/solutions/haulage-dispatch" className="text-[#E8652B] hover:underline font-medium">Haulage Dispatch solution</Link>
            {" | "}
            <Link href="/solutions/subcontractor-coordination" className="text-[#E8652B] hover:underline font-medium">Subcontractor Coordination</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Live Job Tracking — frequently asked questions
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See live tracking working in a demo.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              We'll show you the dispatch board updating in real time, how GPS appears alongside job status, and how clients see their jobs — no phone calls required at any stage.
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

export default PlatformLiveJobTrackingPage;

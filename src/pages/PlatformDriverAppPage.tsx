"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight } from "lucide-react";

const statusSteps = [
  {
    num: "01",
    title: "En Route",
    desc: "Driver confirms they are on their way to the pickup site. GPS tracking begins transmitting position to the dispatch board. Dispatch can see the truck moving toward the site.",
  },
  {
    num: "02",
    title: "At Pickup",
    desc: "Driver arrives at the pickup site and taps At Pickup. Timestamp is recorded. Site instructions are visible in full. Driver can view any special loading or access notes attached to the job.",
  },
  {
    num: "03",
    title: "Loading",
    desc: "Driver taps Loading when the loading process begins. This stage is relevant for bulk material where loading time is variable — quarry, aggregate, fill material. The timestamp creates an accurate loading duration record.",
  },
  {
    num: "04",
    title: "In Transit",
    desc: "Driver confirms load is complete and they are moving to the delivery site. Live GPS position continues on the board. This is the moment the client can see in their portal that the delivery is en route.",
  },
  {
    num: "05",
    title: "At Delivery",
    desc: "Driver arrives at the delivery site. Timestamp recorded. Driver can view delivery site access instructions before tapping Complete.",
  },
  {
    num: "06",
    title: "Complete + POD",
    desc: "Driver captures proof of delivery: photograph of the delivered material, document upload (scale docket, delivery note), and customer signature via the touchscreen signature pad. Job is marked complete. Docket is attached to the job record immediately. Invoice is ready to generate.",
  },
];

const podCards = [
  {
    title: "Photograph capture",
    desc: "Driver photographs the delivered material, the site, the load drop point — whatever your POD standard requires. The photo is time-stamped, geotagged where signal allows, and stored in Azure Blob Storage linked to the job record.",
  },
  {
    title: "Document upload",
    desc: "Scale dockets, weigh bridge tickets, delivery notes and any paper received at site can be photographed and uploaded directly from the app. All attached to the completed job record for immediate access by dispatch, finance and the client portal.",
  },
  {
    title: "Customer signature",
    desc: "The app includes a touchscreen signature pad. The customer or site representative signs directly on the driver's device. The signature is captured as an image, timestamped, and stored alongside the photo and documents as part of the POD record.",
  },
];

const paperVsAppTable = [
  { activity: "Receive job assignment", paper: "Phone call or WhatsApp", app: "Push notification with full job details" },
  { activity: "Find pickup location", paper: "Verbal instructions or text", app: "Address shown in job details, Google Maps routing" },
  { activity: "Update dispatch on status", paper: "Call or text the office", app: "Tap a status button — dispatch sees it instantly" },
  { activity: "Capture delivery evidence", paper: "Paper docket, often incomplete", app: "Photo + document + customer signature in one flow" },
  { activity: "Return docket to office", paper: "End of day — sometimes days later", app: "Attached to job record at moment of delivery" },
  { activity: "Record break times", paper: "Paper logbook, easy to forget", app: "Start/stop break in app with automatic timestamps" },
  { activity: "Work in areas with no signal", paper: "No change — paper always works", app: "App works offline, syncs on reconnect" },
  { activity: "Invoice follow-up time", paper: "Waits for docket return", app: "POD attached at completion — invoice ready immediately" },
];

const connectedModules = [
  {
    title: "Dispatch Management",
    href: "/platform/dispatch-management",
    desc: "Job assignments flow from the dispatch board to the driver app. Status updates flow back. Live GPS position shows on the dispatch board. Dispatcher and driver are connected without needing to call each other.",
  },
  {
    title: "Proof of Delivery",
    href: "/solutions/proof-of-delivery",
    desc: "POD captured in the driver app is the foundation of the digital docket workflow. Photo, documents and signature captured at delivery attach to the job record and are immediately available for invoicing and client portal access.",
  },
  {
    title: "Driver Management",
    href: "/platform/driver-management",
    desc: "Driver records, licence and medical document expiry, induction records and availability scheduling are managed in the admin panel. The driver app reflects each driver's identity and compliance standing in the system.",
  },
];

const faqs = [
  {
    q: "Which operating systems does the driver app support?",
    a: "The HaulageOps driver app is available for both iOS (iPhone) and Android. It is a production-ready mobile application, not a mobile browser wrapper. Drivers do not need a specific device model — any reasonably current iPhone or Android smartphone running a supported OS version is sufficient. There is no requirement for a dedicated device or ruggedised hardware, though operators may choose to provide company phones.",
  },
  {
    q: "Does the app really work without mobile signal?",
    a: "Yes — offline capability is confirmed in production. When a driver loses mobile connectivity, the app continues to function for all current assigned jobs. Status updates, break records and POD captures are stored locally on the device. When connectivity is restored — leaving a quarry, reaching the main road, returning to a coverage area — everything synchronises automatically in the background. The driver does not need to do anything to trigger the sync.",
  },
  {
    q: "How does POD synchronise to the job record?",
    a: "When a driver captures a photo, uploads a document, or records a customer signature, the data is immediately uploaded to Azure Blob Storage if the device is connected. If offline, the capture is queued locally and uploaded the moment connectivity returns. Once uploaded, the file is linked to the job record in HaulageOps and is accessible to dispatch, finance and management immediately — and to the client through the client portal.",
  },
  {
    q: "Can a driver see multiple jobs at once?",
    a: "Yes. The driver app shows all jobs assigned to that driver — current, upcoming and completed. A driver doing multiple runs in a day can see their full job queue and progress through each job sequentially. Jobs assigned for future dates are also visible so drivers can plan ahead. Completed jobs with their POD records remain accessible in the driver's history.",
  },
  {
    q: "What does break recording in the app cover?",
    a: "Drivers can start and stop break periods directly in the app. Each break is recorded with start time, end time and duration, associated with the driver's identity and the date. This record is relevant for fatigue and rest compliance obligations — particularly for operators working under Chain of Responsibility frameworks. Note: the HaulageOps driver app is not an Electronic Work Diary (EWD) or Electronic Logging Device (ELD). An ELD/EWD is on the product roadmap. The break recording feature provides a structured digital record to supplement — not replace — formal fatigue management obligations.",
  },
  {
    q: "How are drivers notified of new job assignments?",
    a: "When a dispatcher assigns a job to a driver, the driver receives a push notification on their device via Firebase FCM (Firebase Cloud Messaging). The notification includes the key job details — client, material, pickup site, delivery time. Tapping the notification opens the job directly in the app. Notifications are only sent when the device is connected; if a driver is offline when a job is assigned, the notification appears when connectivity is restored and the job is waiting in their queue.",
  },
];

export function PlatformDriverAppPage() {
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
            <span className="text-[#0F172A] font-medium">Driver App</span>
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
            Driver App
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1]"
          >
            The driver app that works where your trucks work — including offline.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed"
          >
            iOS and Android. Production-ready for bulk haulage. Job assignments, status updates, proof of delivery capture and break records — all in a single mobile workflow that synchronises when connectivity returns.
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
            <Link href="/solutions/proof-of-delivery">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Proof of Delivery
              </Button>
            </Link>
          </motion.div>
          {/* Kicker pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "iOS + Android",
              "Offline-capable — confirmed",
              "Firebase FCM push notifications",
              "Photo + signature POD",
              "Break & rest recording",
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { strong: "iOS + Android", sub: "production-ready app" },
              { strong: "Offline sync", sub: "quarry & remote sites" },
              { strong: "6-stage", sub: "job status workflow" },
              { strong: "POD capture", sub: "photo, docs, signature" },
              { strong: "Live GPS", sub: "to dispatch board" },
              { strong: "Break records", sub: "fatigue compliance" },
            ].map((item) => (
              <div key={item.strong} className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-sm">{item.strong}</span>
                <span className="text-[#94A3B8] text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BUILT FOR BULK HAULAGE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Built for Bulk Haulage</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Most driver apps are built for parcel fleets. This one is built for bulk haulage.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            Parcel delivery apps are built around address lists, barcode scans and route optimisation for metro areas. Bulk haulage looks nothing like that. Your drivers operate between quarries, earthworks sites, construction yards and rural locations — often without reliable mobile signal. The material being moved, the loading instructions, the site contact and the POD expectations are different from a courier run.
          </p>
          <p className="mt-3 text-[#475569] max-w-3xl leading-relaxed">
            The HaulageOps driver app is built around the bulk haulage job lifecycle: receive the job, navigate to the pickup, confirm loading, transit to the delivery site, capture proof of delivery with photo and customer signature, and record breaks. Every step is designed for a driver sitting in a cab, often on rough ground, with a phone rather than a purpose-built device.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">What the driver app does</h3>
              <ul className="space-y-3">
                {[
                  "Receives job assignments with push notification via Firebase FCM",
                  "Displays full job details: material, pickup site, delivery site, instructions, scheduled time",
                  "Six-stage status update workflow driven by the driver",
                  "Transmits live GPS position to the dispatch board",
                  "POD capture: photograph, document upload, customer signature",
                  "Break and rest period recording for fatigue management compliance",
                  "Driver availability scheduling — set available hours for the week",
                  "Works offline — queues updates and syncs on reconnect",
                  "Multiple jobs visible — driver can see their full day's work",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] p-8 text-[#94A3B8] text-sm font-mono leading-relaxed">
              <div className="text-[#E8652B] font-bold mb-2 text-xs uppercase tracking-widest">HaulageOps Driver App — Job View</div>
              <p>HaulageOps driver app on iPhone showing a job detail screen. Top section shows job ID, material type (Type 1 Crushed Limestone), pickup site (Hanson Quarry – Gate 3), delivery site (A14 Project Site – Bay 7), and scheduled time. Middle section shows the six status buttons: En Route (currently active, highlighted orange), At Pickup, Loading, In Transit, At Delivery, Complete. Below is a break recording section showing "Start Break" button and previous break entries with duration. Bottom section shows a "Capture POD" button leading to camera, document upload, and signature pad. The interface uses large tap targets suitable for gloved hands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* JOB STATUS WORKFLOW */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Job Status Workflow</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Six status stages. Driver-initiated. Real-time on the dispatch board.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            Every status update the driver makes appears on the dispatcher's board within seconds via the Socket.io real-time connection. No one needs to call the driver to find out where they are or what stage the job is at.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {statusSteps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                <span className="text-3xl font-black text-[#E8652B]/20 leading-none">{step.num}</span>
                <h3 className="mt-2 text-lg font-bold text-[#0F172A]">{step.title}</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFLINE CAPABILITY */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Offline Capability</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Works without signal. Synchronises when connectivity returns.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            Quarries, rural depots, earthworks sites and construction yards frequently have limited or no mobile coverage. A driver app that requires a constant connection is not a viable tool for bulk haulage. The HaulageOps driver app is built with offline capability confirmed in production.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">What works without signal</h3>
              <ul className="space-y-2.5">
                {[
                  "View all assigned job details already loaded before losing signal",
                  "Progress through job status stages — updates are queued locally",
                  "Capture photos and customer signatures for POD — stored locally",
                  "Record break and rest periods with timestamps",
                  "View site instructions and job notes already cached",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-[#475569] leading-relaxed">
                When the device reconnects, all queued status updates, captured photos, signatures and break records synchronise to the HaulageOps server in the order they were made.
              </p>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">What requires connectivity</h3>
              <ul className="space-y-2.5">
                {[
                  "Receiving new job assignments — push notifications require a connection",
                  "Live GPS position transmission to the dispatch board",
                  "Uploading documents captured during a job (queued until reconnected)",
                  "Accessing job details for jobs assigned while offline",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#475569]">
                    <span className="text-[#E8652B] font-bold shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-[#475569] leading-relaxed">
                For jobs assigned before going offline, the driver has everything they need. The system does not fail mid-job because a quarry has poor signal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF OF DELIVERY */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Proof of Delivery</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Photo, document upload, customer signature — captured at delivery and attached to the job record.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            Paper dockets get lost, damaged, delayed, or never returned to the office. When they are missing, invoicing stops. The HaulageOps driver app replaces the paper docket with a digital POD workflow captured at the moment of delivery. The evidence is attached to the job record instantly — no scanning, no chasing, no delay.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {podCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#475569]">
            See:{" "}
            <Link href="/solutions/proof-of-delivery" className="text-[#E8652B] hover:underline font-medium">Proof of Delivery</Link>
            {" and "}
            <Link href="/solutions/digital-dockets" className="text-[#E8652B] hover:underline font-medium">Digital Dockets</Link>
            {" — how POD fits into the broader billing and compliance workflow."}
          </p>
        </div>
      </section>

      {/* PAPER DOCKET VS DRIVER APP TABLE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Paper Docket vs Driver App</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            What changes when drivers use the app instead of paper dockets.
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-[#E2E8F0] text-sm text-[#0F172A]">
                  <th className="py-4 px-4 font-bold">Driver activity</th>
                  <th className="py-4 px-4 font-bold text-[#64748B]">Paper docket workflow</th>
                  <th className="py-4 px-4 font-bold text-[#E8652B] bg-[#FFF0E6]/50 rounded-t-lg">HaulageOps driver app</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] text-sm">
                {paperVsAppTable.map((row) => (
                  <tr key={row.activity} className="hover:bg-[#F8FAFC]">
                    <td className="py-4 px-4 font-medium text-[#0F172A]">{row.activity}</td>
                    <td className="py-4 px-4 text-[#64748B]">{row.paper}</td>
                    <td className="py-4 px-4 font-semibold text-[#334155] bg-[#FFF0E6]/30">{row.app}</td>
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
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related Platform Features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The driver app connects to these platform areas.
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
            <Link href="/solutions/digital-dockets" className="text-[#E8652B] hover:underline font-medium">
              Digital Dockets
            </Link>{" "}
            — the full picture of how app-captured POD eliminates the paper docket process from delivery to invoice.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Frequently asked about the HaulageOps driver app.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See the driver app in a live demo.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Book a 20-minute session and walk through the full driver workflow — job assignment, status updates, offline use, POD capture and sync — with a real demonstration of the production app.
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

export default PlatformDriverAppPage;

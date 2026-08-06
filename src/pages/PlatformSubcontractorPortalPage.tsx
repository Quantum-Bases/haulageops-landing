"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight } from "lucide-react";

const lifecycleSteps = [
  {
    num: "01",
    title: "You delegate the job",
    desc: "Dispatcher selects a job and chooses a subcontractor from your managed subcontractor list. The delegation is confirmed and the job is marked as delegated on your dispatch board.",
  },
  {
    num: "02",
    title: "Subcontractor receives notification",
    desc: "The subcontractor's portal queue updates immediately. Depending on their notification preferences, they may also receive an email alert. No phone call required from your team.",
  },
  {
    num: "03",
    title: "Accept or decline",
    desc: "The subcontractor logs into their portal, reviews the job details and the Mapbox map showing the route, and accepts or declines. Their response updates your dispatch board in real time.",
  },
  {
    num: "04",
    title: "Status updates flow back",
    desc: "As the subcontractor updates job status — en route, at pickup, loading, in transit, at delivery — each update appears on your dispatch board. You can see where delegated work is without making a single call.",
  },
  {
    num: "05",
    title: "Job completed with evidence",
    desc: "Completion is recorded in the portal with timestamp. Associated documents and POD information are accessible. The job feeds back into your billing workflow at the rate you set — not the rate visible to the subcontractor.",
  },
  {
    num: "06",
    title: "History and audit trail",
    desc: "Every delegated job, every accept/decline, every status change is recorded in the audit trail with user identity and timestamp. Management can review delegated work history without relying on anyone's memory.",
  },
];

const rateCards = [
  {
    title: "Client charge rate",
    desc: "Stored on the job record against the client rate card. Visible to your admin team, dispatchers and management. Used to generate the client invoice. Hidden from the subcontractor portal entirely.",
  },
  {
    title: "Subcontractor pay rate",
    desc: "Stored separately on the same job record. Visible to the subcontractor in their portal — so they know what they are being paid for the job. Completely separate from what the client sees or is charged.",
  },
  {
    title: "Margin stays in the system",
    desc: "The difference between client charge and subcontractor pay is visible in your internal reporting and financial overview. It never leaves the system, never lives in a spreadsheet column, and is never accidentally exposed to either party.",
  },
];

const compareRows = [
  {
    cap: "Dedicated subcontractor portal",
    allotrac: "No — no sub portal at all",
    mytrucking: "Partial — sub must also be a paying customer",
    haulageops: "Yes — free for your subcontractors",
  },
  {
    cap: "Subcontractor needs their own licence",
    allotrac: "N/A",
    mytrucking: "Yes — walled garden model",
    haulageops: "No — portal access is included",
  },
  {
    cap: "Accept / decline individual jobs",
    allotrac: "No structured workflow",
    mytrucking: "Only if sub is a MyTrucking customer",
    haulageops: "Yes — built into the sub portal",
  },
  {
    cap: "Status updates back to your dispatch board",
    allotrac: "Manual / phone",
    mytrucking: "Only within their closed platform",
    haulageops: "Yes — real-time Socket.io",
  },
  {
    cap: "Interactive maps for pickup/delivery",
    allotrac: "No",
    mytrucking: "Basic",
    haulageops: "Yes — Mapbox interactive maps",
  },
  {
    cap: "Separate pay vs charge rates",
    allotrac: "No",
    mytrucking: "No",
    haulageops: "Yes — margin stays private",
  },
  {
    cap: "Sub sees only their own jobs",
    allotrac: "N/A",
    mytrucking: "Within their own account only",
    haulageops: "Yes — isolated per subcontractor",
  },
];

const connectedModules = [
  {
    title: "Subcontractor Management",
    href: "/platform/subcontractor-management",
    desc: "Manage subcontractor company records, contacts, documents, compliance records and rates in the admin panel. The portal is where subs work — management is where you maintain oversight of the relationship.",
  },
  {
    title: "Client Portal",
    href: "/platform/client-portal",
    desc: "Just as subcontractors get their own portal, clients get theirs. Each portal is purpose-built for its user type — subcontractors see jobs and pay rates, clients see jobs, POD and invoices.",
  },
  {
    title: "Rate Management",
    href: "/platform/rate-management",
    desc: "Set separate client charge rates and subcontractor pay rates on every job. The rate management module controls what each portal shows — clients see their rate, subs see theirs, your margin stays internal.",
  },
];

const faqs = [
  {
    q: "How many subcontractors can I add?",
    a: "There is no hard cap on the number of subcontractor companies you can add to your HaulageOps account. Each subcontractor gets their own isolated portal access. Operators typically run with between 5 and 30 active subcontractor relationships, though the system handles larger networks. Each subcontractor company can have multiple user contacts — not just a single login per company.",
  },
  {
    q: "Does the subcontractor need to pay for HaulageOps?",
    a: "No. The subcontractor portal is free for the subcontractor to use. Only the operating company — your business — pays for the HaulageOps subscription. Your subcontractors receive a login, access their job queue and update status at no cost to them. This is a deliberate design choice: your subcontractors should not face a barrier to receiving and managing work from you.",
  },
  {
    q: "What can a subcontractor see in their portal?",
    a: "A subcontractor can see: jobs delegated to them (current and upcoming), job details including material, pickup and delivery sites, scheduled time and any site instructions, their pay rate for each job, job status controls, Mapbox maps for pickup and delivery locations, and their completed job history and associated documents. They cannot see: jobs delegated to other subcontractors, your client charge rates, your internal margin, other clients' job information, or anything in your admin and dispatch panel.",
  },
  {
    q: "How does the subcontractor receive notification of a new job?",
    a: "When you delegate a job to a subcontractor, their portal job queue updates immediately. Email notification options are configurable per subcontractor. The subcontractor does not need to be logged into the portal for the job to appear — it waits in their queue. You can see whether the job has been accepted or is still pending directly on your dispatch board.",
  },
  {
    q: "What happens if a subcontractor declines a job?",
    a: "If the subcontractor declines, the job returns to an unassigned state on your dispatch board and is flagged for reassignment. The decline is recorded in the audit trail with the timestamp and the subcontractor's identity. Your dispatcher is notified so they can reassign to another subcontractor or an owned driver. There is no obligation on either side beyond what is recorded in the job and any contract held in the system.",
  },
  {
    q: "Can a subcontractor access job history and past documents?",
    a: "Yes. A subcontractor can access their completed job history and associated documents within their portal. This gives them a record of work completed through your platform — useful for their own reconciliation and invoicing to you. They can only see documents related to their own jobs, not documents from other subcontractors or internal company records.",
  },
];

export function PlatformSubcontractorPortalPage() {
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
            <span className="text-[#0F172A] font-medium">Subcontractor Portal</span>
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
            External Partners
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1]"
          >
            Your subcontractors get their own portal. You keep full operational control.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed"
          >
            Every subcontractor gets a dedicated, credentialed login. Jobs flow from your dispatch board to their portal — no WhatsApp, no phone calls, no shared passwords, and no need for your subcontractors to pay for their own software.
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
            <Link href="/solutions/subcontractor-coordination">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Subcontractor Coordination
              </Button>
            </Link>
          </motion.div>
          {/* Kicker pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Dedicated login per subcontractor",
              "Accept / decline jobs",
              "Mapbox interactive maps",
              "Real-time status back to your board",
              "Margin stays private",
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
              { strong: "Free to use", sub: "for your subcontractors" },
              { strong: "Isolated", sub: "each sub sees only their jobs" },
              { strong: "Real-time", sub: "status feeds to your board" },
              { strong: "Mapbox maps", sub: "pickup & delivery sites" },
              { strong: "Private margin", sub: "pay rate hidden from sub" },
              { strong: "No second licence", sub: "unlike MyTrucking model" },
            ].map((item) => (
              <div key={item.strong} className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-sm">{item.strong}</span>
                <span className="text-[#94A3B8] text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY THIS MATTERS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Why This Matters</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Most haulage software treats subcontractor dispatch as an afterthought. We built it as a core portal.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            Operators managing a mixed fleet — some owned trucks, some subcontracted capacity — face a specific problem: how do you get jobs to subcontractors in a structured, auditable way without forcing them onto your internal system? The standard answer is WhatsApp, email, or a phone call. That means no confirmation record, no status tracking, no automated POD flow, and no way to audit what was delegated to whom.
          </p>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            HaulageOps&apos; subcontractor portal is a purpose-built, dedicated web application — not a workaround or a shared view of your admin panel. Each subcontractor company gets their own credentialed login. Your dispatcher delegates a job, it appears in the subcontractor&apos;s queue, they accept or decline, and every status update flows back to your dispatch board in real time.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* What it provides list */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">What the subcontractor portal provides</h3>
              <ul className="space-y-3">
                {[
                  "Unique login credentials for each subcontractor company",
                  "Job queue showing only that subcontractor's delegated work",
                  "Accept or decline functionality with confirmation fed back to dispatch",
                  "Full job detail: material type, pickup site, delivery site, scheduled time, instructions",
                  "Interactive Mapbox maps showing pickup and delivery locations",
                  "Job status update workflow through the full lifecycle",
                  "Job history and document access for completed deliveries",
                  "No need for the subcontractor to subscribe to HaulageOps themselves",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual spec mockup */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden flex flex-col">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                HaulageOps — Subcontractor Portal View
              </div>
              <div className="flex-1 p-6 text-[#94A3B8] text-sm font-mono leading-relaxed">
                <p>Portal logged in as <span className="text-white font-semibold">&quot;Redlands Haulage Pty Ltd&quot;</span></p>
                <div className="mt-4 space-y-3">
                  {[
                    { id: "#7841", material: "Crushed Rock", pickup: "Boral Quarry, Ormeau", delivery: "Pacific Motorway – Lot 4", time: "06:00 Tomorrow" },
                    { id: "#7842", material: "Sand", pickup: "Hanson Quarry, Stapylton", delivery: "Pacific Motorway – Lot 6", time: "07:30 Tomorrow" },
                    { id: "#7843", material: "Gravel", pickup: "Boral Quarry, Ormeau", delivery: "Pacific Motorway – Lot 5", time: "09:00 Tomorrow" },
                  ].map((job) => (
                    <div key={job.id} className="bg-[#1E293B] rounded-lg p-3 border border-[#334155]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[#E8652B] font-semibold text-xs">{job.id}</span>
                        <span className="text-[#64748B] text-xs">{job.time}</span>
                      </div>
                      <p className="text-white text-xs font-medium">{job.material}</p>
                      <p className="text-[#64748B] text-xs">↑ {job.pickup}</p>
                      <p className="text-[#64748B] text-xs">↓ {job.delivery}</p>
                      <div className="flex gap-2 mt-2">
                        <span className="px-2 py-0.5 rounded bg-[#16A34A]/20 text-[#4ADE80] text-xs font-semibold">Accept</span>
                        <span className="px-2 py-0.5 rounded bg-[#334155] text-[#94A3B8] text-xs font-semibold">Decline</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[#475569] text-xs">↳ Mapbox route map below — no internal rates visible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW THE FLOW WORKS */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">How the Flow Works</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            From your dispatch board to your subcontractor&apos;s job queue — in real time.
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* RATE PRIVACY */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Rate Privacy</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Your subcontractor sees their pay rate. Not your client charge rate. Not your margin.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            When you delegate a job to a subcontractor, HaulageOps stores two separate rates on the same job record: the rate you charge the client, and the rate you pay the subcontractor. The subcontractor portal shows only the subcontractor pay rate — the client charge rate and the margin between them are never visible to the subcontractor, regardless of what they can access in their portal.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {rateCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#475569]">
            See how rates work across the platform:{" "}
            <Link href="/platform/rate-management" className="text-[#E8652B] hover:underline font-medium">
              Rate Management
            </Link>
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">How We Compare</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Native subcontractor portal vs the workarounds competitors use.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            When evaluating haulage TMS options, the subcontractor question reveals a sharp divide. Some platforms have no sub-facing feature at all. Others require your subcontractors to also pay for a licence. HaulageOps is the only platform in this category with a native, free-for-the-sub dedicated portal.
          </p>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="text-left px-5 py-3 font-semibold rounded-tl-xl">Subcontractor capability</th>
                  <th className="text-left px-5 py-3 font-semibold">Allotrac</th>
                  <th className="text-left px-5 py-3 font-semibold">MyTrucking</th>
                  <th className="text-left px-5 py-3 font-semibold rounded-tr-xl text-[#E8652B]">HaulageOps</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={row.cap} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="px-5 py-3 text-[#0F172A] font-medium border-b border-[#E2E8F0]">{row.cap}</td>
                    <td className="px-5 py-3 text-[#64748B] border-b border-[#E2E8F0]">{row.allotrac}</td>
                    <td className="px-5 py-3 text-[#64748B] border-b border-[#E2E8F0]">{row.mytrucking}</td>
                    <td className="px-5 py-3 text-[#16A34A] font-semibold border-b border-[#E2E8F0]">{row.haulageops}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CONNECTED PLATFORM */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related Platform Features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The subcontractor portal connects to these platform areas.
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {connectedModules.map((mod) => (
              <div key={mod.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
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
            <Link href="/solutions/subcontractor-coordination" className="text-[#E8652B] hover:underline font-medium">
              Subcontractor Coordination
            </Link>{" "}
            — the operational case for why a dedicated portal changes how you manage external capacity.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Frequently asked about the HaulageOps subcontractor portal.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See the subcontractor portal in a live demo.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Watch how job delegation, accept/decline, real-time status and rate privacy work across your dispatch board and the subcontractor&apos;s portal in 20 minutes.
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

export default PlatformSubcontractorPortalPage;

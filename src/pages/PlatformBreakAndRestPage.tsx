"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, AlertTriangle } from "lucide-react";

const connectedModules = [
  {
    title: "Driver Management",
    href: "/platform/driver-management",
    desc: "Break records are stored against driver profiles alongside licence records, medical certificates and availability scheduling. The complete picture of each driver is accessible in the admin panel.",
  },
  {
    title: "Compliance & Audit",
    href: "/platform/compliance",
    desc: "Break records contribute to the broader audit trail in HaulageOps. All records are timestamped and tamper-resistant for holistic compliance evidence.",
  },
  {
    title: "Driver App",
    href: "/platform/driver-app",
    desc: "Break recording happens in the driver app. The same app the driver uses for jobs and POD also handles break recording — one app for all field functions.",
  },
];

const faqs = [
  {
    q: "Is HaulageOps an Electronic Work Diary (EWD)?",
    a: "No. HaulageOps is not an EWD and does not claim to be. An EWD under the NHVR framework is a certified system that records work and rest time to meet legislative requirements. HaulageOps records break start and end times entered by drivers in the mobile app for internal management and due-diligence purposes.",
  },
  {
    q: "Does the break recording satisfy NHVR fatigue management requirements?",
    a: "No. HaulageOps break records do not satisfy any specific NHVR regulatory requirement. Fatigue management compliance under the HVNL requires more than break records — it requires compliant scheduling, appropriate pay arrangements, driver training, and where required, use of an approved work diary.",
  },
  {
    q: "Can I export break records for a regulatory enquiry or audit?",
    a: "Yes. Break records can be filtered by driver and date range and exported from the management panel. The exported records show break start time, end time, duration, driver identity, and the job reference associated with each break.",
  },
  {
    q: "Can drivers edit or delete their break records after they are submitted?",
    a: "No. Break records submitted through the driver app are stored as tamper-resistant records in the platform. Drivers cannot edit or delete a break record after it has been submitted.",
  },
  {
    q: "Do breaks need to be recorded in real time, or can drivers enter them later?",
    a: "The break recording function is designed for real-time use — the driver taps to start a break when the break begins and taps to end it when they resume. The timestamps are generated at the time of the tap.",
  },
  {
    q: "Is break recording available to subcontractor drivers?",
    a: "Break recording through HaulageOps is available to drivers who use the HaulageOps driver app — which means your directly employed or managed drivers.",
  },
];

export function PlatformBreakAndRestPage() {
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
            <span className="text-[#0F172A] font-medium">Break & Rest Management</span>
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
            Mobile & Fleet
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1]"
          >
            Break records in the driver app. Evidence in the platform.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed"
          >
            Drivers record break start and end through the mobile app. Records are stored with timestamp and job context. Management can review break records per driver. Relevant for Chain of Responsibility fatigue management — not an Electronic Work Diary.
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
            <Link href="/platform/driver-management">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Driver Management
              </Button>
            </Link>
          </motion.div>
          {/* Kicker pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Recorded in the driver app",
              "Timestamped and stored",
              "CoR due-diligence evidence",
              "Not an EWD — clearly stated",
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
              { strong: "App-based", sub: "Driver records breaks from their phone" },
              { strong: "Timestamped", sub: "Start and end recorded with job context" },
              { strong: "Reviewable", sub: "Management can audit records per driver" },
              { strong: "Exportable", sub: "Records available for review and reporting" },
              { strong: "Honest", sub: "Not an EWD — we say so clearly" },
            ].map((item) => (
              <div key={item.strong} className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-sm">{item.strong}</span>
                <span className="text-[#94A3B8] text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DISCLAIMER BOX & HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Disclaimer */}
          <div className="p-6 rounded-2xl bg-[#FFF9F5] border border-[#FFE4D6] mb-12">
            <div className="flex items-center gap-2 text-[#E8652B] font-bold text-lg mb-2">
              <AlertTriangle className="h-5 w-5" />
              What HaulageOps break recording is — and is not
            </div>
            <p className="text-sm text-[#334155] leading-relaxed">
              <strong>HaulageOps records break and rest periods entered by drivers through the mobile app.</strong> Records are timestamped and stored against the driver's job history. Management can review and export these records.
            </p>
            <p className="mt-2 text-sm text-[#334155] leading-relaxed">
              <strong>HaulageOps is NOT an Electronic Work Diary (EWD) and does NOT replace the requirement for a certified EWD under NHVR regulations.</strong> If your operation requires an EWD under the Heavy Vehicle National Law, you must use a certified EWD system. HaulageOps break records are a supplementary record-keeping tool — useful for internal fatigue management and due-diligence evidence, not a substitute for a certified EWD where one is required.
            </p>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">How It Works</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Drivers record breaks through the app. You have a timestamped record.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            The break recording function in HaulageOps is a practical field tool. A driver who stops for a rest break during their shift opens the driver app and taps to start a break record. When they resume work, they tap to end the break. The record is stored with the start time, end time, duration, the driver's identity, and the job context at the time of the break.
          </p>
          <p className="mt-3 text-[#475569] max-w-3xl leading-relaxed">
            This creates a documented record of break behaviour that exists in the platform — accessible to management for review, downloadable for audit purposes, and associated with specific jobs and dates. It is not a complex fatigue management system. It is a straightforward record of when breaks were taken.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">What the driver does</h3>
              <ul className="space-y-3">
                {[
                  "Opens the HaulageOps driver app on their phone",
                  'Taps "Start Break" when beginning a rest period',
                  "App records the break start time automatically",
                  'Driver resumes work and taps "End Break"',
                  "Duration calculated and record saved to the platform",
                  "No manual time entry required — the app captures the times",
                  "Break can be categorised if required (meal break, short rest, etc.)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">What management sees</h3>
              <ul className="space-y-3">
                {[
                  "Break records per driver, per day, linked to job context",
                  "Start time, end time and duration stored for each break",
                  "Records visible in the management panel with date filter",
                  "History retained for internal review and audit readiness",
                  "Can be exported for reporting or regulatory enquiry",
                  "Gaps or anomalies in break patterns visible on review",
                  "Records cannot be retroactively edited by drivers",
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
            Break records — driver view in the app, management view in the panel.
          </h2>
          <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-[#0D1525] p-8 text-[#94A3B8] text-sm font-mono leading-relaxed">
            <div className="text-[#E8652B] font-bold mb-2 text-xs uppercase tracking-widest">HaulageOps — Break Records (Management View)</div>
            <p>Break records table in the management panel. Columns: Driver Name, Date, Job Reference, Break Start, Break End, Duration, Break Type. Filter bar: date range, driver name, minimum duration. Example rows show: Driver A — 02/08/2026 — Job #4421 — 10:32 — 10:52 — 20 min — Short Rest; Driver A — 02/08/2026 — Job #4421 — 12:45 — 13:15 — 30 min — Meal Break. Export to CSV button in top right. Total break time summary shown at bottom of filtered view.</p>
          </div>
        </div>
      </section>

      {/* COR & FATIGUE CONTEXT */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Chain of Responsibility Context</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Fatigue management and why break records matter for operators.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            Chain of Responsibility legislation in Australia places shared responsibility for road safety across all parties in the transport supply chain — not only the driver. For operators, this includes an obligation to take reasonable steps to ensure that schedules, pay structures and operational demands do not pressure drivers to exceed fatigue management limits.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A]">What CoR fatigue management obligations involve</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                Under the Heavy Vehicle National Law (HVNL) in Australia, operators have obligations to ensure drivers are not fatigued. This includes not scheduling work in a way that makes it impossible to take required rest breaks, not paying in a way that incentivises skipping rest, and ensuring that drivers who report fatigue are not pressured to continue. These are management and culture obligations — not just record-keeping obligations.
              </p>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A]">How break records support due diligence</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                If an incident occurs involving driver fatigue, regulators will look at what records the operating company maintained. Break records stored in HaulageOps provide timestamped, tamper-resistant evidence of when breaks were taken — or not taken. This evidence is available for the period covered by the platform's records, which are retained indefinitely.
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <h3 className="font-bold text-[#0F172A]">More on Chain of Responsibility</h3>
            <p className="mt-2 text-sm text-[#475569] leading-relaxed">
              For a detailed explanation of CoR obligations, how they apply to operators, and what a reasonable compliance approach looks like, see our{" "}
              <Link href="/au/chain-of-responsibility" className="text-[#E8652B] font-semibold hover:underline">
                Chain of Responsibility page
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* HONEST ABOUT LIMITS — NOT AN EWD */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Honest About Limits</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            HaulageOps is not an Electronic Work Diary. Here is what that means.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            An Electronic Work Diary (EWD) is a certified system approved under the NHVR's regulatory framework for recording work and rest time for heavy vehicle drivers. <strong>HaulageOps does not meet these requirements and is not an EWD.</strong>
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <h3 className="font-bold text-[#0F172A] mb-2">What HaulageOps break records ARE</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                A timestamped, driver-entered record of breaks taken during a work shift, stored in the platform against the driver's job history. Useful for internal fatigue management review, due-diligence evidence, management oversight, and supplementary documentation.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <h3 className="font-bold text-[#0F172A] mb-2">What HaulageOps break records are NOT</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Not an EWD. Not a certified fatigue management system. Not a substitute for a work diary where one is required by law. Not a real-time fatigue alert system.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <h3 className="font-bold text-[#0F172A] mb-2">What to use for EWD requirements</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                If your operation requires EWD compliance, use an NHVR-certified EWD product for that purpose. HaulageOps does not compete with or replicate certified EWD systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTED PLATFORM */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Connected Platform</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Break records connect to driver management, compliance and the driver app.
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
            <Link href="/au/chain-of-responsibility" className="text-[#E8652B] hover:underline font-medium">Chain of Responsibility (AU)</Link>
            {" | "}
            <Link href="/solutions/audit-ready-operations" className="text-[#E8652B] hover:underline font-medium">Audit-Ready Operations</Link>
            {" | "}
            <Link href="/platform/document-management" className="text-[#E8652B] hover:underline font-medium">Document Management</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Break & Rest Management — frequently asked questions
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See break recording and driver management working together.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              In a 20-minute demo we'll walk through the driver app, break recording, and how records appear in the management panel — including what gets exported for audit.
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

export default PlatformBreakAndRestPage;

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight } from "lucide-react";

const templateCards = [
  {
    title: "What templates store",
    desc: "Origin address, destination address, material type, quantity unit, rate type, rate value, client reference, and any standing driver instructions. Everything that does not change between recurrences of the same job is saved and pre-filled. Date and driver assignment are always confirmed fresh when the job is created from the template.",
  },
  {
    title: "When templates are most useful",
    desc: "Daily site supply runs that travel the same route. Quarry-to-plant movements that repeat on a set schedule. Recurring material deliveries on long-running construction contracts. Any job where the only thing changing between occurrences is the date and possibly the assigned driver.",
  },
  {
    title: "Keeping templates current",
    desc: "When a contract rate changes, update the template. The new rate will be pre-filled on all future jobs created from that template. Existing completed jobs created before the update retain the rate that was in effect when they were created. Templates can be renamed and edited by any dispatcher with the appropriate access level.",
  },
];

const recurringCards = [
  {
    title: "Daily site supply",
    desc: "A tipper running from a quarry to a construction site every weekday for eight weeks. Create the recurring job once: set origin, destination, material, rate, and the Monday-to-Friday pattern. Eight weeks of job records appear on the calendar. Assign drivers as roster clarity arrives. Adjust individual instances for public holidays or site shutdowns without rebuilding the series.",
  },
  {
    title: "Weekly scheduled runs",
    desc: "Regular deliveries that happen on a set day each week — a Friday waste collection, a Tuesday aggregate supply run. Define the job and the weekly pattern. The job appears on every relevant Friday (or Tuesday) on the calendar for as far ahead as you schedule. Your dispatcher does not need to remember to create it — it is already there.",
  },
  {
    title: "Multi-truck mobilisations",
    desc: "A large earthworks project requiring four trucks running the same route each day. Combine bulk job creation with recurring scheduling: create four instances of the recurring job, assign each to a different driver. All four appear on the scheduling calendar, all four are visible on the dispatch board when the work begins, and each produces its own job record, POD, and invoice line item.",
  },
];

const connectedModules = [
  {
    title: "Job Management",
    href: "/platform/job-management",
    desc: "Every scheduled job becomes a full job record the moment it is created. Origin, destination, rate and assignment travel with the record from scheduling through to completion and invoicing. Scheduling is how jobs get planned; job management is how they are executed.",
  },
  {
    title: "Dispatch Management",
    href: "/platform/dispatch-management",
    desc: "Jobs scheduled on the forward calendar appear on the dispatch board when their scheduled date arrives. Dispatchers manage the active day's work from the dispatch board — scheduling handles the planning that makes that board manageable rather than chaotic.",
  },
  {
    title: "Driver Management",
    href: "/platform/driver-management",
    desc: "Driver availability set through driver management flows into the scheduling calendar. Licence expiry and medical record status visible in driver management flags drivers who should not be assigned work until their records are renewed.",
  },
];

const faqs = [
  {
    q: "Can I create jobs in advance for future dates?",
    a: "Yes. The scheduling calendar lets you create jobs for any future date. A job created in advance sits on the calendar with a Scheduled status and becomes active on the dispatch board on its scheduled date. Drivers receive the job assignment notification when the job becomes active, not when it is first created — so scheduling a week ahead does not flood drivers with notifications days before their job starts.",
  },
  {
    q: "How far in advance can I schedule recurring jobs?",
    a: "There is no fixed limit on how far ahead you can schedule. Operators running long-running site contracts typically schedule recurring jobs for the contract duration — which may be several months. Each job instance is created as an independent record, so a 90-day recurring daily job creates 90 individual job records on the calendar. You can edit, cancel or reassign individual instances at any point before they become active.",
  },
  {
    q: "What happens if I need to change the schedule after jobs have been created?",
    a: "Individual job instances can be edited — date, driver, instructions — without affecting other instances in the series. If the whole recurring series needs to change (for example, a site contract that is extended or changes days), you can update the recurrence pattern and the remaining unstarted instances will reflect the change. Jobs that have already started or been completed are not affected by changes to the recurrence settings — only future, unstarted instances.",
  },
  {
    q: "Can different dispatchers use the same templates?",
    a: "Yes. Templates are shared across all dispatchers in your organisation. A template created by one dispatcher is visible and available to all others. This is intentional — it ensures consistency in how recurring work is set up, so the rate, origin and destination saved in the template are the same regardless of which dispatcher creates the job from it. If a template needs to be updated (for example, a rate change), one person updates it and all subsequent jobs from that template use the new values.",
  },
  {
    q: "Does scheduling work for subcontractor delegations as well as owned fleet?",
    a: "Yes. When scheduling a job on the forward calendar, you can assign it to either an owned driver or a named subcontractor. Subcontractor delegations scheduled in advance appear in the subcontractor's portal queue when the job becomes active on its scheduled date. The subcontractor can accept or decline from their portal. If they decline, the job surfaces on your dispatch board for reassignment to another driver or subcontractor.",
  },
  {
    q: "How does the system prevent double-booking a driver?",
    a: "When you assign a driver to a job in the scheduling calendar, the system checks whether that driver already has an active job assignment during the same time window. If a conflict exists, a warning is shown before the job is saved. You can override the conflict warning if the circumstances are genuinely compatible — for example, if the first job will be completed well before the second starts — but the flag ensures you have seen and considered the potential overlap before proceeding.",
  },
];

export function PlatformJobSchedulingPage() {
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
            <span className="text-[#0F172A] font-medium">Job Scheduling</span>
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
            Stop creating the same job every morning. Schedule it once.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed"
          >
            Job templates, recurring job creation and a forward scheduling calendar let your dispatchers plan the week ahead rather than react to this morning. Driver and subcontractor availability visible before you assign. No double-booking.
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
            <Link href="/platform/job-management">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Job Management
              </Button>
            </Link>
          </motion.div>
          {/* Kicker pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Job templates for recurring runs",
              "Forward scheduling calendar",
              "Driver availability visible",
              "No double-booking",
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
              { strong: "Templates", sub: "Save recurring jobs once" },
              { strong: "Calendar view", sub: "Plan by shift, day or week" },
              { strong: "Availability", sub: "Driver and sub capacity before you assign" },
              { strong: "No double-booking", sub: "System flags conflicts before they happen" },
              { strong: "Proactive dispatch", sub: "Plan ahead, not in reaction" },
            ].map((item) => (
              <div key={item.strong} className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-sm">{item.strong}</span>
                <span className="text-[#94A3B8] text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* THE SCHEDULING PROBLEM */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Scheduling Problem</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Most haulage dispatch is reactive. It does not need to be.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            In many bulk haulage operations, the dispatcher arrives in the morning and starts creating jobs for the day — the same jobs, going to the same sites, for the same clients, that were created yesterday. If a driver rings in sick or a vehicle is unavailable, the scramble begins. Work that could have been planned the day before gets sorted in the first 30 minutes of the working day under pressure.
          </p>
          <p className="mt-3 text-[#475569] max-w-3xl leading-relaxed">
            HaulageOps is built for operations that want to move from reactive to proactive dispatch. Job scheduling tools — templates, recurring job creation and a forward calendar — let the planning happen the day before, or at the start of the week, rather than under morning pressure. When the drivers start, their jobs are already there.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">Reactive dispatch (current state for many operators)</h3>
              <ul className="space-y-3">
                {[
                  "Dispatcher arrives early to create the day's jobs from scratch",
                  "Same job fields re-entered each morning for recurring runs",
                  "Driver availability discovered by phone call, not by looking at a system",
                  "Double-booking discovered when two drivers arrive at the same site",
                  "Schedule changes require calling every affected driver",
                  "Week-ahead planning done mentally or on a whiteboard",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#475569]">
                    <span className="text-[#EF4444] font-bold shrink-0">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">Proactive dispatch with HaulageOps</h3>
              <ul className="space-y-3">
                {[
                  "Recurring jobs scheduled once — they appear on the calendar for each recurrence",
                  "Templates used for daily site supply runs — create from template in seconds",
                  "Driver availability checked in the system before assigning",
                  "Scheduling calendar shows conflicts before jobs are saved",
                  "Week's work planned in advance — drivers receive jobs before the day starts",
                  "Schedule changes updated in the system — all affected parties notified",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* JOB TEMPLATES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Job Templates</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Save a job once. Create it again in seconds.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            Any job created in HaulageOps can be saved as a template. The template stores the origin, destination, material type, quantity unit, rate type, rate value and any standing instructions for the run. When the same work needs to happen again — tomorrow, next week, or next month — the dispatcher loads the template, confirms the date and makes the assignment. The form is already filled.
          </p>
          <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-[#0D1525] p-8 text-[#94A3B8] text-sm font-mono leading-relaxed">
            <div className="text-[#E8652B] font-bold mb-2 text-xs uppercase tracking-widest">HaulageOps — Job Creation from Template</div>
            <p>Job creation form with "Load from template" dropdown expanded. Template list shows: "Quarry A to Site 14 — Aggregate — Per Tonne", "Tip run — Spoil — Muckaway North", "Daily gravel supply — Client XYZ". Selected template has pre-filled fields: Origin (Quarry Address), Destination (Construction Site), Material (Crushed Aggregate), Rate Type (Per Tonne), Rate ($28.50/t). Only Date and Driver fields remain blank for the dispatcher to complete. Save as New Template button visible at the bottom.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {templateCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORWARD SCHEDULING & AVAILABILITY */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Forward Scheduling</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Plan the week on a calendar. See who is available before you assign.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            The scheduling calendar in HaulageOps gives dispatchers a forward view of planned work. Jobs scheduled for future dates appear on the calendar by day. Driver and subcontractor availability is visible in the same view, so you can see who is free before assigning a job — not discover a conflict after the fact.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A]">Driver availability in scheduling</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                Drivers can update their availability through the driver app — marking shifts they are available, days off, or periods when they are unavailable. Dispatchers see this availability when looking at the scheduling calendar. Assigning a job to a driver who has marked themselves unavailable on that day triggers a conflict flag before the job is saved.
              </p>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                Availability scheduling is particularly useful for operators who run mixed shift patterns or who have part-time drivers. Rather than maintaining a separate shift schedule in a spreadsheet and cross-referencing it with the job board, both are visible in the same system.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Drivers mark availability through the mobile app",
                  "Dispatcher sees availability when scheduling from the calendar",
                  "Conflicts flagged before the job is saved",
                  "Schedule by shift, day or week",
                  "Availability history retained for payroll and review",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0F172A]">Subcontractor capacity in scheduling</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                When planning work that will be delegated to subcontractors, their current job load is visible alongside your own fleet. A subcontractor who already has multiple active jobs on a given day may not have capacity for an additional delegation. Seeing this in the scheduling view before you delegate avoids the situation where a subcontractor accepts a job but cannot execute it at the required time.
              </p>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                Subcontractor capacity visibility is based on the jobs already delegated to them in HaulageOps. It does not pull in work they may be doing for other operators. Use it as a guide for managing your own delegations — do not treat it as a complete picture of their total workload.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Current HaulageOps delegations visible per subcontractor",
                  "Useful for avoiding over-delegation to a single sub",
                  "Subcontractors can accept or decline jobs in their portal",
                  "Declined jobs surface on the dispatch board for reassignment",
                  "Subcontractor job history used for performance review",
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

      {/* RECURRING WORK */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Recurring Work</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            For work that repeats on a schedule — create the pattern, not the job.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            Operators supplying materials to an active construction site often run the same job five days a week for months. Creating that job individually each morning is low-value repetition. HaulageOps supports recurring job creation — define the job, set the recurrence pattern (daily, weekly, specific days of the week), and the system creates the job instances on the calendar for the period you specify.
          </p>
          <p className="mt-3 text-[#475569] max-w-3xl leading-relaxed">
            Each instance is an independent job record. If you need to modify one instance — a date change, a different driver on a specific day — you edit that instance without affecting the others in the series. If the whole series needs to change, update the recurrence settings and the remaining unstarted instances update accordingly.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {recurringCards.map((rc) => (
              <div key={rc.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                <h3 className="font-bold text-[#0F172A] mb-2">{rc.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{rc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTED PLATFORM */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Connected Platform</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Scheduling connects to job management, dispatch and fleet.
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
            <Link href="/platform/fleet-management" className="text-[#E8652B] hover:underline font-medium">Fleet Management</Link>
            {" | "}
            <Link href="/solutions/haulage-dispatch" className="text-[#E8652B] hover:underline font-medium">Haulage Dispatch solution</Link>
            {" | "}
            <Link href="/solutions/owned-and-subcontracted-fleets" className="text-[#E8652B] hover:underline font-medium">Owned & Subcontracted Fleets</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Job Scheduling — frequently asked questions
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See scheduling working before you commit to anything.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              We'll walk through creating a recurring job template, scheduling a week of work on the calendar and showing driver availability — in a live 20-minute demo.
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

export default PlatformJobSchedulingPage;

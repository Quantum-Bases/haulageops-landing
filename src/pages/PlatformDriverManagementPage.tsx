"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight } from "lucide-react";

const rbacTable = [
  { role: "Driver (app)", visibility: "Their own profile only", management: "Cannot access or edit records", availability: "Set their own availability from app" },
  { role: "Dispatcher", visibility: "All driver records — read access", management: "View documents and expiry status", availability: "View all driver availability when scheduling" },
  { role: "Administrator", visibility: "Full access — read and write", management: "Upload, update, delete documents", availability: "Override and manage availability settings" },
  { role: "Management", visibility: "Full visibility including reporting", management: "Access all document records", availability: "View availability across all drivers" },
];

const connectedModules = [
  {
    title: "Driver App",
    href: "/platform/driver-app",
    desc: "The driver app is where drivers access their jobs, update status, capture POD and set availability. Driver management in the admin panel and the driver app are two sides of the same record.",
  },
  {
    title: "Break & Rest Management",
    href: "/platform/break-and-rest-management",
    desc: "Drivers record breaks through the driver app. Those records are linked to the driver's profile and job history in the platform to support fatigue management obligations.",
  },
  {
    title: "Fleet Management",
    href: "/platform/fleet-management",
    desc: "Driver profiles link to vehicle records. A driver assigned to a specific truck has that vehicle recorded on their profile for seamless dispatch matching.",
  },
];

const faqs = [
  {
    q: "How many drivers can I manage in HaulageOps?",
    a: "HaulageOps is designed for operators running between 15 and 80 vehicles, which typically means a similar number of drivers — plus a mix of casual and contractor drivers depending on your roster model. There is no hard cap on the number of driver profiles you can create.",
  },
  {
    q: "Can drivers update their own availability through the app?",
    a: "Yes. Drivers access the HaulageOps driver app on their iOS or Android phone to mark their availability for upcoming shifts or days. Those updates are reflected in the admin panel in real time for dispatchers and administrators.",
  },
  {
    q: "What driver records are stored in HaulageOps?",
    a: "Driver profiles store: name, contact details, employment type, licence class and number, licence expiry date, medical certificate expiry date, induction records with dates, assigned vehicle, and current availability status. Document files (PDFs, photos) can be uploaded and stored in Azure Blob Storage.",
  },
  {
    q: "How do document expiry alerts reach the right people?",
    a: "Expiry alerts are surfaced in the admin panel — visible to administrators and dispatchers when they log in. A driver with a document approaching expiry will have a flag visible in the driver management list and in the dispatch assignment view.",
  },
  {
    q: "Does HaulageOps verify driver licences with the licensing authority?",
    a: "No. HaulageOps stores the licence information you enter — class, number and expiry date — and tracks the expiry date you provide. Verification itself remains an operational responsibility.",
  },
  {
    q: "Is driver management relevant to Chain of Responsibility obligations?",
    a: "Maintaining records of driver licences, medical certificates and inductions is relevant to CoR due diligence — it demonstrates that the operating company takes steps to ensure the drivers it deploys are licensed and fit.",
  },
];

export function PlatformDriverManagementPage() {
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
            <span className="text-[#0F172A] font-medium">Driver Management</span>
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
            Driver records, documents and availability — all in your operations system.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed"
          >
            Driver profiles, licence classes, medical certificates, induction records and availability scheduling — stored in HaulageOps and connected to daily dispatch. Document expiry alerts surface before problems happen.
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
            <Link href="/platform/driver-app">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Driver App
              </Button>
            </Link>
          </motion.div>
          {/* Kicker pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Licence and medical tracking",
              "Induction records",
              "Document expiry alerts",
              "Availability scheduling",
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
              { strong: "Driver profiles", sub: "Name, licence class, contact, vehicle" },
              { strong: "Expiry alerts", sub: "Licence, medical, induction renewal" },
              { strong: "Availability", sub: "Drivers set availability in the app" },
              { strong: "Document upload", sub: "Stored in Azure, accessible always" },
              { strong: "CoR relevant", sub: "Know your driver is licensed and fit" },
            ].map((item) => (
              <div key={item.strong} className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-sm">{item.strong}</span>
                <span className="text-[#94A3B8] text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DRIVER RECORDS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Driver Records</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            A complete driver profile for every member of your team.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            Driver management in HaulageOps starts with a profile for each driver in your operation. That profile is not a standalone HR record — it connects directly to dispatch. When a dispatcher assigns a driver to a job, they see the driver's current status, availability and any document flags before making the assignment. The profile is a live operational record, not a filing cabinet.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">Core driver profile fields</h3>
              <ul className="space-y-3">
                {[
                  ["Full name", "and preferred name for dispatch and app display"],
                  ["Contact number", "mobile number for operational communication"],
                  ["Licence class", "MR, HR, HC, MC or equivalent for your jurisdiction"],
                  ["Licence number", "stored for reference and verification"],
                  ["Licence expiry date", "tracked with expiry alert"],
                  ["Assigned vehicle", "primary vehicle linked to the driver profile"],
                  ["Employment type", "employee, casual, or owner-operator"],
                  ["Status", "active, inactive, on leave"],
                ].map(([label, detail]) => (
                  <li key={label} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span><strong>{label}</strong> — {detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">Documents stored per driver</h3>
              <ul className="space-y-3">
                {[
                  ["Driving licence", "document image uploaded, expiry date tracked"],
                  ["Medical certificate", "upload and expiry date for commercial vehicle medical"],
                  ["Induction certificates", "site inductions, safety inductions, white cards"],
                  ["Fatigue management records", "relevant compliance documentation"],
                  ["Other compliance documents", "any driver-specific document your operation requires"],
                  ["Expiry alerts", "flagged in admin panel for each document type as renewal approaches"],
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

      {/* PLATFORM VIEW VISUAL SPEC */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Platform View</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Driver panel — records, documents and expiry status at a glance.
          </h2>
          <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-[#0D1525] p-8 text-[#94A3B8] text-sm font-mono leading-relaxed">
            <div className="text-[#E8652B] font-bold mb-2 text-xs uppercase tracking-widest">HaulageOps — Driver Management Panel</div>
            <p>Driver management table. Columns: Driver Name, Licence Class, Licence Expiry (green/amber/red status indicator), Medical Expiry, Induction Status, Availability (Available/On Leave/Unavailable), Assigned Vehicle, Last Job. Filter bar: All Drivers / Expiry Alerts / Available Today. One driver highlighted in amber — medical certificate expires in 22 days. Clicking a driver row opens a detail panel with full document list, job history tab, and availability calendar.</p>
          </div>
        </div>
      </section>

      {/* AVAILABILITY SCHEDULING */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Availability</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Drivers set their own availability. Dispatchers see it before assigning.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            Driver availability is managed through the driver app. Drivers mark themselves as available or unavailable for specific shifts, days or periods — leave, sick days, rest days — directly from their phone. Dispatchers see availability status in the driver management panel and in the scheduling calendar before making job assignments.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A]">How availability scheduling works</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                A driver opens their HaulageOps driver app and updates their availability for upcoming shifts or days. The update appears in the admin panel in real time. When a dispatcher is assigning jobs for tomorrow and checks the scheduling calendar, drivers marked as unavailable are either excluded from the assignable pool or flagged with a warning before the dispatcher selects them.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Drivers update availability from the mobile app",
                  "Updates visible in admin panel in real time",
                  "Scheduling calendar shows availability when planning forward work",
                  "Unavailable drivers flagged at point of assignment",
                  "Availability history retained for payroll reference",
                  "Dispatchers can manually override availability flags if circumstances require",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0F172A]">Shift and roster management</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                For operations running defined shift patterns — early shift, late shift, night shift — availability scheduling gives a forward view of which drivers are rostered on for each shift. Dispatchers planning the following day's work can see at a glance which drivers are on shift and assign jobs within the shift window rather than relying on memory.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Mark availability by shift, day or date range",
                  "Planned leave entered in advance — visible to dispatch ahead of time",
                  "On-the-day sick calls updated by driver through the app",
                  "Dispatcher notified when a driver marks themselves unavailable",
                  "Availability feeds directly into the scheduling calendar view",
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

      {/* COMPLIANCE RECORDS & COR */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Compliance Records</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Know your driver is licensed, medically fit and inducted before you assign them.
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <h3 className="font-bold text-[#0F172A] mb-2">Licence tracking</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Each driver's licence class and expiry date is stored on their profile. As the expiry date approaches, the driver management panel surfaces an alert — visible to dispatchers and administrators.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <h3 className="font-bold text-[#0F172A] mb-2">Medical certificate tracking</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Commercial vehicle drivers require a periodic medical certificate. The expiry date is stored and tracked per driver. Alerts surface before the certificate expires.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <h3 className="font-bold text-[#0F172A] mb-2">Induction records</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Many construction sites require drivers to hold a valid site induction. Induction certificates can be stored against the driver record with their issue date and any expiry.
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 rounded-2xl bg-[#FFF9F5] border border-[#FFE4D6]">
            <h3 className="font-bold text-[#0F172A]">Chain of Responsibility relevance</h3>
            <p className="mt-2 text-sm text-[#475569] leading-relaxed">
              Chain of Responsibility legislation in Australia places obligations on all parties in the transport supply chain. Knowing that your driver holds a current licence and medical certificate is a basic element of exercising duty of care. For details, visit our{" "}
              <Link href="/au/chain-of-responsibility" className="text-[#E8652B] font-semibold hover:underline">
                Chain of Responsibility page
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ROLE BASED ACCESS TABLE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Role-Based Access</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Drivers see the app. Dispatchers see the records. Management sees everything.
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-[#E2E8F0] text-sm text-[#0F172A]">
                  <th className="py-4 px-4 font-bold">Role</th>
                  <th className="py-4 px-4 font-bold text-[#64748B]">Driver records visibility</th>
                  <th className="py-4 px-4 font-bold text-[#64748B]">Document management</th>
                  <th className="py-4 px-4 font-bold text-[#E8652B]">Availability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] text-sm">
                {rbacTable.map((row) => (
                  <tr key={row.role} className="hover:bg-[#F8FAFC]">
                    <td className="py-4 px-4 font-semibold text-[#0F172A]">{row.role}</td>
                    <td className="py-4 px-4 text-[#475569]">{row.visibility}</td>
                    <td className="py-4 px-4 text-[#475569]">{row.management}</td>
                    <td className="py-4 px-4 text-[#334155]">{row.availability}</td>
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
            Driver management connects to app, breaks, fleet and compliance.
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
            <Link href="/platform/compliance" className="text-[#E8652B] hover:underline font-medium">Compliance & Audit</Link>
            {" | "}
            <Link href="/au/chain-of-responsibility" className="text-[#E8652B] hover:underline font-medium">Chain of Responsibility</Link>
            {" | "}
            <Link href="/solutions/audit-ready-operations" className="text-[#E8652B] hover:underline font-medium">Audit-Ready Operations</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Driver Management — frequently asked questions
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See driver records, availability and expiry alerts in a live demo.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              We'll walk through driver profiles, document tracking and how availability connects to the scheduling calendar — 20 minutes, no commitment.
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

export default PlatformDriverManagementPage;

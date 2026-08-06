"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight } from "lucide-react";

const vehicleCards = [
  {
    title: "Availability in dispatch",
    desc: "Vehicle availability status is set in the fleet panel and reflected immediately in the dispatch board. A dispatcher assigning jobs for the day can filter to show only available vehicles. If a vehicle breaks down mid-shift and is marked off-road, it is removed from the available pool for any subsequent job assignments that day.",
  },
  {
    title: "Vehicle type for job matching",
    desc: "Some jobs require a specific vehicle type — a semi for a long-haul run, a rigid tipper for a site with weight restrictions, a dog trailer for a particular material volume. Fleet records include vehicle type, which allows dispatchers to filter the available fleet to vehicles suited to the job at hand rather than scrolling through all units.",
  },
  {
    title: "Vehicle history by job",
    desc: "Every job assigned to a vehicle is linked to that vehicle's record. The vehicle history shows every job it has run: origin, destination, material, driver, date and status. This history is useful for understanding vehicle utilisation, for maintenance planning based on actual work done, and for identifying which vehicle ran a specific job when a query arises months later.",
  },
];

const mixedFleetCards = [
  {
    title: "Tipper and rigid fleets",
    desc: "Rigid tippers and small-body tippers used for urban or restricted-access sites can be managed alongside larger semi combinations. Payload capacity is stored per vehicle, so dispatchers assigning jobs that specify a minimum tonnage capacity can filter the available fleet to vehicles that meet the requirement.",
  },
  {
    title: "Semi and combination vehicles",
    desc: "Semi-tippers and dog or B-double combinations often require specific driver licence classes and have different compliance document requirements to a rigid vehicle. The vehicle record stores vehicle type, and driver management stores licence class — dispatch can verify both are matched before assigning.",
  },
  {
    title: "Specialised equipment",
    desc: "Operators who run specialised equipment — crane trucks, flat-deck vehicles, water carts — can create vehicle records for those units too. Notes fields allow you to store access restrictions, site limitations, or operator requirements specific to that vehicle. Not every field will be relevant to every vehicle type, and HaulageOps does not force a rigid template across all unit types.",
  },
];

const connectedModules = [
  {
    title: "Driver Management",
    href: "/platform/driver-management",
    desc: "Driver records — licence class, medical certificates, induction records — connect to fleet management at the point of vehicle assignment. Assigning a driver to a vehicle or job is most reliable when both the vehicle's compliance documents and the driver's personal records are current and visible in the same system.",
  },
  {
    title: "Dispatch Management",
    href: "/platform/dispatch-management",
    desc: "Fleet availability status feeds directly into the dispatch board. The vehicle selection in job assignment shows only available, appropriate vehicles. Document expiry flags surface at the point of assignment. Fleet management and dispatch share a live view of what is ready to work.",
  },
  {
    title: "Compliance & Audit",
    href: "/platform/compliance",
    desc: "Fleet document expiry tracking contributes to the broader compliance picture in HaulageOps. The platform's audit trail records every job assigned to every vehicle. Document storage in Azure Blob Storage means expiry records and compliance documents are available for review at any time.",
  },
];

const faqs = [
  {
    q: "How many vehicles can I manage in HaulageOps?",
    a: "HaulageOps is designed for operators running between 15 and 80 vehicles. There is no fixed per-vehicle cap within the platform, but the product is calibrated for that fleet-size range — the dispatch board, fleet view and reporting are designed around that operational scale. If your fleet is significantly larger, discuss your requirements during a demo so we can confirm the platform is the right fit for your volume.",
  },
  {
    q: "Can I manage different vehicle types — tippers, semis, dogs — in the same system?",
    a: "Yes. Vehicle type is a configurable field on each vehicle record. You can define the vehicle types relevant to your fleet — rigid tipper, semi-tipper, dog combination, B-double, water cart, and any others you operate. The fleet view can be filtered by vehicle type, so dispatchers assigning a job that requires a specific unit type can filter the available pool accordingly rather than scrolling through the entire fleet.",
  },
  {
    q: "How do document expiry alerts work, and who receives them?",
    a: "Expiry dates are entered on each vehicle's document record. The admin panel surfaces a flag for any vehicle whose documents are approaching or past their expiry date. The flag is visible in the fleet view to any user with access to the admin panel — administrators and dispatchers both see it. There is no automatic email notification system for expiry alerts in the current version — the alert is surfaced within the platform for your team to action. If you require external notification routing, raise this during your implementation discussion.",
  },
  {
    q: "Does HaulageOps replace our existing telematics or GPS tracking system?",
    a: "No. HaulageOps is the operations management layer — job management, dispatch, POD, billing and fleet records — not a telematics platform. If you have in-cab GPS units installed for insurance, safety or compliance purposes, keep them. Your telematics system continues doing its role. HaulageOps adds the job assignment, status tracking via driver app, POD capture and billing workflow on top of your existing setup. The two systems serve different purposes and do not conflict.",
  },
  {
    q: "Can I store vehicle documents — like the registration certificate or inspection report — in HaulageOps?",
    a: "Yes. Documents can be uploaded and stored against each vehicle record. Registration certificates, inspection reports, permits and any other vehicle-specific documents are stored in Azure Blob Storage and accessible from the vehicle's record in the admin panel. Expiry dates are tracked separately from the document file itself — you enter the expiry date manually, and the document file is stored for reference.",
  },
  {
    q: "How does fleet availability connect to the dispatch board?",
    a: "The availability status set on each vehicle record is reflected in real time in the dispatch board's vehicle selection. When a dispatcher assigns a vehicle to a job, the system shows available vehicles. Vehicles marked as off-road, under maintenance or otherwise unavailable are excluded from the assignable pool. If you change a vehicle's availability status mid-day — for example, marking it off-road after a breakdown — that change is reflected immediately in the dispatch board for any subsequent job assignments.",
  },
];

export function PlatformFleetManagementPage() {
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
            <span className="text-[#0F172A] font-medium">Fleet Management</span>
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
            Your fleet records, connected to your dispatch workflow.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed"
          >
            Vehicle profiles, availability tracking and document expiry alerts — all stored in HaulageOps and connected to the jobs you assign each day. No disconnected spreadsheet for rego renewals. No surprise that a vehicle's inspection lapsed last month.
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
              "Vehicle records and availability",
              "Document expiry alerts",
              "Assign vehicles to jobs",
              "Fleet view in dispatch board",
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
              { strong: "Vehicle profiles", sub: "Make, model, rego, type, capacity" },
              { strong: "Expiry alerts", sub: "Registration, inspection, CTP, permits" },
              { strong: "Availability", sub: "Which vehicles are ready for dispatch" },
              { strong: "Job history", sub: "Every job linked to the vehicle that ran it" },
              { strong: "Connected", sub: "Fleet records feed into daily dispatch" },
            ].map((item) => (
              <div key={item.strong} className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-sm">{item.strong}</span>
                <span className="text-[#94A3B8] text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VEHICLE RECORDS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Vehicle Records</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Every vehicle in your fleet has a profile. Every profile is connected to operations.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            Fleet management in HaulageOps starts with a vehicle record for each unit in your owned fleet. That record is not a standalone data entry — it connects directly to dispatch. When a dispatcher assigns a vehicle to a job, they select from the fleet records. The vehicle's availability, document status and capacity are visible at the point of assignment.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">What each vehicle record stores</h3>
              <ul className="space-y-3">
                {[
                  ["Make and model", "vehicle manufacturer and model name"],
                  ["Registration number", "current registered plate"],
                  ["Vehicle type", "tipper, semi, dog, B-double, rigid, etc."],
                  ["Payload capacity", "maximum load in tonnes or other unit"],
                  ["Availability status", "available, in use, off-road, under maintenance"],
                  ["Assigned driver", "primary driver linked to the vehicle (if applicable)"],
                  ["Notes", "internal notes about the vehicle's current condition or restrictions"],
                ].map(([label, detail]) => (
                  <li key={label} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span><strong>{label}</strong> — {detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">Document expiry tracked per vehicle</h3>
              <ul className="space-y-3">
                {[
                  ["Registration", "rego expiry date with alert before it lapses"],
                  ["Vehicle inspection / roadworthy", "last inspection date and next due"],
                  ["CTP / third-party insurance", "policy expiry date"],
                  ["Permits", "any load, route or oversize permits with expiry"],
                  ["Other compliance documents", "upload and track any vehicle-specific document"],
                  ["Expiry alerts", "flagged in the admin panel before they become problems"],
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
            Fleet view — available vehicles, expiring documents, current assignments.
          </h2>
          <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-[#0D1525] p-8 text-[#94A3B8] text-sm font-mono leading-relaxed">
            <div className="text-[#E8652B] font-bold mb-2 text-xs uppercase tracking-widest">HaulageOps — Fleet Management Panel</div>
            <p>Fleet management table in Admin Panel. Columns: Vehicle (rego + make/model), Type, Capacity, Status (Available/In Use/Off Road — colour-coded), Assigned Driver, Rego Expiry (green if current, amber if within 30 days, red if lapsed), Inspection Due, Current Job link. Filter bar: All Types / Available Only / Documents Expiring Soon. One row highlighted in amber — registration expires in 18 days. One row with red flag — inspection overdue. Clicking a vehicle row opens the vehicle detail panel with full document history.</p>
          </div>
        </div>
      </section>

      {/* DISPATCH CONNECTION */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Dispatch Connection</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Fleet availability feeds directly into the dispatch workflow.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            The point of maintaining fleet records in HaulageOps — rather than in a separate system — is the connection to daily dispatch. When a dispatcher creates a job and selects a vehicle to assign, they see the fleet list filtered to available vehicles of the appropriate type. A vehicle marked as under maintenance or off-road does not appear as assignable. A vehicle with an expired document is flagged before the assignment is saved.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {vehicleCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENT EXPIRY MANAGEMENT */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Document Expiry</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            No more discovering expired registrations the morning of a job.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            The most common fleet administration failure mode is simple: a registration or inspection slips past its expiry date because nobody was watching a spreadsheet closely enough. HaulageOps tracks document expiry dates for every vehicle and surfaces alerts before the expiry arrives — not after.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A]">How expiry alerts work</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                When you enter a document expiry date on a vehicle record — registration, inspection, CTP, permit — HaulageOps monitors that date and flags the vehicle in the admin panel as the expiry approaches. The alert threshold (for example, 30 days before expiry) can be set to give your admin team sufficient lead time to arrange renewal before operations are affected.
              </p>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                A vehicle with an expiring or lapsed document is visually flagged in the fleet view. Dispatchers assigning jobs see the flag on any vehicle in that state. The system does not automatically prevent assignment — it surfaces the information so the human making the decision has it — but the flag is prominent enough that it will not be overlooked.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Expiry dates entered once per document type per vehicle",
                  "Alerts surfaced in the admin panel as expiry approaches",
                  "Fleet view shows amber flag for approaching expiry, red for lapsed",
                  "Flag visible to dispatchers at the point of vehicle assignment",
                  "Documents stored in HaulageOps (Azure Blob Storage) alongside expiry dates",
                  "No separate spreadsheet for rego renewals required",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0F172A]">Why this matters for operations</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                Running a vehicle with a lapsed registration or an overdue inspection creates liability for the operating company. Beyond the direct penalty for the breach, it creates exposure in the event of an incident — insurers and regulators will look at the compliance record of the vehicle involved. Knowing that a vehicle's documents are current is a basic compliance obligation, not an advanced requirement.
              </p>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                The practical challenge for operators managing 15–80 vehicles is that tracking expiry dates across the fleet in a spreadsheet requires someone to actively review the spreadsheet regularly. Most operators find this either slips through gaps in busy periods, or requires a dedicated admin task that consumes disproportionate time. HaulageOps removes the need for active monitoring — the system flags what needs attention without anyone having to check a spreadsheet.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Reduces liability exposure from operating vehicles with lapsed documents",
                  "Removes reliance on a single person's memory or manual review",
                  "Relevant for Chain of Responsibility obligations",
                  "Provides an audit-ready record of document renewal history",
                  "Works alongside driver document management for complete fleet compliance visibility",
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

      {/* MIXED FLEETS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Mixed Fleets</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Tippers, semis, rigids, dogs — your mixed fleet, one place.
          </h2>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            Bulk haulage operators rarely run a single vehicle type. A typical fleet might include rigid tippers for urban site work, semi-tippers or dog combinations for higher-volume quarry runs, and specialised vehicles for specific material types. HaulageOps fleet management handles mixed vehicle types within a single fleet view.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {mixedFleetCards.map((mc) => (
              <div key={mc.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">{mc.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{mc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTED PLATFORM */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Connected Platform</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Fleet records connect to drivers, dispatch and compliance.
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
            <Link href="/platform/document-management" className="text-[#E8652B] hover:underline font-medium">Document Management</Link>
            {" | "}
            <Link href="/solutions/audit-ready-operations" className="text-[#E8652B] hover:underline font-medium">Audit-Ready Operations</Link>
            {" | "}
            <Link href="/platform/job-scheduling" className="text-[#E8652B] hover:underline font-medium">Job Scheduling</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Fleet Management — frequently asked questions
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Replace your rego-renewal spreadsheet with a connected fleet record.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              In a 20-minute demo we'll show you fleet records, document expiry alerts and how fleet availability connects to the dispatch board in real time.
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

export default PlatformFleetManagementPage;

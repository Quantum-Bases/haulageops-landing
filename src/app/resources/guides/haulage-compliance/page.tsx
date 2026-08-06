import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Haulage Compliance Guide for Bulk Transport Operators | HaulageOps",
  description:
    "A practical guide to compliance for bulk haulage operators — driver fatigue management, document retention, Chain of Responsibility, vehicle maintenance records and audit readiness.",
};

const complianceAreas = [
  {
    title: "Driver Fatigue Management",
    p: "Under the HVNL, drivers must comply with work and rest hour limits. Operators have an obligation not to schedule or incentivise work that requires drivers to breach these limits. Records of driver work and rest hours must be maintained.",
    link: { label: "Break & Rest Management", href: "/platform/break-and-rest-management" },
  },
  {
    title: "Vehicle Roadworthiness",
    p: "Operators must ensure vehicles are maintained and roadworthy. This includes scheduled maintenance, pre-trip inspections, defect reporting and keeping records that demonstrate vehicles were in a fit state for operation.",
    link: { label: "Fleet Management", href: "/platform/fleet-management" },
  },
  {
    title: "Driver Licensing & Medicals",
    p: "Driver licences (including heavy vehicle endorsements), medicals and any required competency certificates must be current and on file. Operators should track expiry dates and not permit driving with lapsed credentials.",
    link: { label: "Driver Management", href: "/platform/driver-management" },
  },
  {
    title: "Mass, Dimension & Load Restraint",
    p: "Heavy vehicles operating over mass limits face significant penalties and CoR liability. Operators who instruct or allow over-mass loads — even implicitly through scheduling pressure — may be found liable under CoR provisions.",
    link: { label: "CoR Overview", href: "/au/chain-of-responsibility" },
  },
  {
    title: "Subcontractor Compliance",
    p: "If you engage subcontractors, their compliance matters too. You need current insurance, registration, and licence records for every subcontractor vehicle. Under CoR, you may share responsibility for safety outcomes involving subcontractors you direct.",
    link: { label: "Subcontractor Management", href: "/platform/subcontractor-management" },
  },
  {
    title: "Audit Trail & Document Retention",
    p: "In the event of a regulatory inquiry, you need to be able to produce records demonstrating compliant operations. Digital records with tamper-proof timestamps are significantly easier to produce than paper files or spreadsheets.",
    link: { label: "Audit Trail", href: "/platform/audit-trail" },
  },
];

const retentionRecords = [
  { strong: "Driver work/rest records", desc: "Minimum 3 years under HVNL (standard hours); longer for advanced fatigue management" },
  { strong: "Vehicle maintenance logs", desc: "Ongoing; retain for at least the life of the vehicle plus 2 years" },
  { strong: "Driver licence and medical records", desc: "Current copies on file; update at each renewal" },
  { strong: "Subcontractor insurance and registration", desc: "Current at time of engagement; retained 2+ years" },
  { strong: "Job records and load documentation", desc: "Minimum 3 years for most operations" },
  { strong: "Incident and near-miss records", desc: "5 years or as required by your insurer" },
];

const faqs = [
  {
    q: "What compliance records does HaulageOps maintain automatically?",
    a: "HaulageOps maintains: driver break and rest logs (entered via the driver app), a full tamper-proof audit trail of all job, scheduling and user actions, document storage and expiry tracking for drivers and subcontractors, and vehicle registration records. These are not substitutes for a formal fatigue management system but provide the core operational records most operators need.",
  },
  {
    q: "Do I need a formal fatigue management accreditation?",
    a: "Not all operators need formal accreditation (BFM or AFM). Standard hours rules under the HVNL apply to most operators. However, if you operate under non-standard arrangements or want to claim exemptions, accreditation may be relevant. Seek advice from the NHVR or a qualified transport compliance consultant.",
  },
  {
    q: "How does CoR apply to my subcontractors?",
    a: "Your CoR obligations in relation to subcontractors depend on your level of direction and control. If you set their schedules, routes, or delivery timelines, you likely have CoR duties toward them. At minimum, you should hold current insurance and licence records for subcontractor vehicles and operators. See our CoR page for more detail.",
  },
];

export default function HaulageComplianceGuidePage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb + Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#FFF9F5] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/resources" className="hover:text-[#E8652B]">Resources</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Haulage Compliance Guide</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Guide · Compliance
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Haulage Compliance: A Practical Guide for Bulk Transport Operators
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Compliance in bulk haulage isn't a single thing — it's driver fatigue records, vehicle maintenance logs, document retention, load management, and Chain of Responsibility. This guide covers the key areas and what records you need to maintain.
          </p>
        </div>
      </section>

      {/* DISCLAIMER */}
      <div className="bg-[#FFF4E3] border-y border-[#F2C27D] py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-[#68410C] leading-relaxed">
          <strong>Disclaimer:</strong> This guide provides general information only. Regulatory requirements vary by jurisdiction and operation type. Seek independent legal and regulatory advice for your specific obligations.
        </div>
      </div>

      {/* CORE COMPLIANCE AREAS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">The Core Compliance Areas for Bulk Haulage Operators</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceAreas.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p}</p>
                <Link href={card.link.href} className="mt-3 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  {card.link.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COR + RECORDS */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Chain of Responsibility (AU)</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">CoR: What Every Operator Needs to Understand</h2>
              <div className="mt-4 space-y-4 text-sm text-[#475569] leading-relaxed">
                <p>The Heavy Vehicle National Law Chain of Responsibility provisions extend safety obligations to every party in the supply chain that influences a heavy vehicle driver's safety. This includes operators who set schedules, clients who set delivery deadlines, and loaders who manage mass.</p>
                <p>As an operator, CoR means you can be held responsible for safety outcomes even if you weren't driving. The standard is whether you took all reasonable steps to ensure compliance.</p>
                <p>The records that demonstrate "reasonable steps" include: documented safety policies, driver training records, break and rest logs, maintenance records, and evidence that schedules were achievable within legal limits.</p>
              </div>
              <Link href="/au/chain-of-responsibility" className="mt-5 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                Full CoR Guide <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Record-Keeping Essentials</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">What Records to Maintain and For How Long</h2>
              <ul className="mt-6 space-y-3">
                {retentionRecords.map((item) => (
                  <li key={item.strong} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span><strong className="text-[#0F172A]">{item.strong}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-[#7A8A94] leading-relaxed">
                Retention periods are general guidance. Confirm specific requirements for your jurisdiction and operation type with your legal adviser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">Compliance FAQs</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Want to see HaulageOps compliance tools?</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Book a demo and we'll walk through audit trail, document management and fatigue records.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

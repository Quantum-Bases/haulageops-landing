import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check } from "lucide-react";

export const metadata = {
  title: "Haulage Software Requirements Checklist | HaulageOps",
  description:
    "A practical requirements checklist for bulk haulage operators evaluating transport management software — 40+ requirements across dispatch, driver app, subcontractor management, billing, compliance and integration.",
};

type ChecklistItem = {
  req: string;
  desc: string;
  must: boolean;
};

type ChecklistSection = {
  title: string;
  items: ChecklistItem[];
};

const sections: ChecklistSection[] = [
  {
    title: "1. Dispatch & Job Management",
    items: [
      { req: "Create jobs with client, site, material, and rate", desc: "the basics of a job record must all be entered in one place", must: true },
      { req: "Dispatch view showing all active, scheduled and available trucks", desc: "you need to see the whole fleet at a glance", must: true },
      { req: "Reassign jobs mid-day", desc: "if a truck breaks down, you must be able to reallocate immediately", must: true },
      { req: "Multi-load jobs", desc: "one job with multiple trips (e.g. 10 loads of aggregate to a site)", must: true },
      { req: "Recurring job templates", desc: "create standing jobs that repeat daily or weekly without re-entering", must: false },
      { req: "Job scheduling calendar view", desc: "see the week ahead by truck", must: false },
    ],
  },
  {
    title: "2. Driver App",
    items: [
      { req: "iOS and Android app", desc: "your drivers use different phones; both must be supported", must: true },
      { req: "Job acceptance from the app", desc: "driver receives job on phone and confirms acceptance", must: true },
      { req: "Digital docket entry", desc: "driver captures load weight, material and delivery location from the app", must: true },
      { req: "Docket photo capture", desc: "driver can photograph weighbridge or supplier docket from within the app", must: true },
      { req: "Offline capability", desc: "docket entry works without mobile coverage and syncs when back in range", must: true },
      { req: "Break and rest logging", desc: "driver can log rest stops from the app for fatigue compliance records", must: false },
      { req: "Turn-by-turn navigation to site", desc: "integrated navigation to job location", must: false },
    ],
  },
  {
    title: "3. Subcontractor Management",
    items: [
      { req: "Subcontractors can receive and accept jobs", desc: "without purchasing their own subscription", must: true },
      { req: "Subcontractor docket submission", desc: "sub drivers can submit their own dockets through the system", must: true },
      { req: "Separate subcontractor vs owned-fleet views", desc: "clear distinction between your trucks and contracted vehicles", must: true },
      { req: "Document storage for subcontractor compliance", desc: "insurance, registration, and licence records per sub", must: true },
      { req: "Document expiry tracking and alerts", desc: "notification before insurance or registration lapses", must: true },
      { req: "Subcontractor self-service portal", desc: "subs can manage their own jobs, invoices and documents without your admin doing it for them", must: false },
      { req: "Subcontractor invoice reconciliation", desc: "compare sub's invoice to your records before approval", must: false },
    ],
  },
  {
    title: "4. Billing & Invoicing",
    items: [
      { req: "Rate management per client", desc: "different pricing structures (per tonne, per load, per hour) per client", must: true },
      { req: "Invoice generated from dockets", desc: "not manual entry; dockets become invoice line items automatically", must: true },
      { req: "Xero integration (live OAuth2)", desc: "invoices push to Xero with correct account codes and contact mapping", must: true },
      { req: "Invoice preview before sending", desc: "ability to review and amend before pushing to client or Xero", must: true },
      { req: "Multiple billing periods", desc: "weekly, fortnightly or monthly billing cycles per client", must: false },
      { req: "Client statement generation", desc: "summary of all deliveries and invoice amounts for a period", must: false },
    ],
  },
  {
    title: "5. Compliance & Records",
    items: [
      { req: "Full audit trail", desc: "tamper-proof log of all job creation, changes, and user actions with timestamps", must: true },
      { req: "Driver document storage", desc: "licence and medical certificate storage with expiry alerts", must: true },
      { req: "Break and rest reporting", desc: "exportable driver work/rest logs for HVNL compliance records", must: false },
      { req: "Vehicle maintenance tracking", desc: "scheduled maintenance records and defect logging", must: false },
    ],
  },
  {
    title: "6. Portals & Access Control",
    items: [
      { req: "Role-based access control", desc: "admin, dispatcher, driver, client and subcontractor roles with different permissions", must: true },
      { req: "Client portal", desc: "clients can log in to see their delivery records and docket photos", must: false },
      { req: "Reporting portal", desc: "management-level dashboards showing jobs, loads, revenue and driver utilisation", must: false },
    ],
  },
  {
    title: "7. Implementation & Support",
    items: [
      { req: "Named account manager", desc: "a specific person responsible for your implementation and ongoing support", must: true },
      { req: "Implementation timeline under 4 weeks", desc: "you shouldn't be waiting months to go live", must: true },
      { req: "Training included in setup cost", desc: "admin, dispatcher and driver training should be part of the package", must: true },
      { req: "Data migration assistance", desc: "help moving client, rate and supplier records from your current system", must: true },
      { req: "24/7 support for after-hours incidents", desc: "escalation path for critical operational issues outside business hours", must: false },
    ],
  },
];

export default function SoftwareRequirementsChecklistPage() {
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
            <span className="text-[#0F172A] font-medium">Software Requirements Checklist</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Checklist · Software Evaluation
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Haulage Software Requirements Checklist
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            40+ requirements across dispatch, driver app, subcontractor management, billing, and compliance. Use this as your evaluation scorecard before committing to any platform.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* HOW TO USE */}
          <div className="bg-[#F0F7FF] border border-[#BFDBFE] rounded-xl p-5 mb-12 text-sm text-[#1E40AF] leading-relaxed">
            <strong>How to use this checklist:</strong> Work through each requirement with your vendor during the demo. Mark{" "}
            <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide bg-[#FEE2E2] text-[#B91C1C]">Must</span>{" "}
            items as pass/fail — a platform that fails any must-have is not the right fit.{" "}
            <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide bg-[#FEF3C7] text-[#92400E]">Nice</span>{" "}
            items are differentiators to compare across vendors.
          </div>

          {sections.map((section) => (
            <div key={section.title} className="mb-10">
              <h2 className="text-lg font-extrabold text-[#0F172A] pb-2 mb-4 border-b-2 border-[#E8652B]">{section.title}</h2>
              <div>
                {section.items.map((item) => (
                  <div key={item.req} className="flex items-start gap-3 py-3 border-b border-[#EEF1F3] last:border-b-0">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-[#C6CFD5] bg-white">
                      <Check className="h-3 w-3 text-transparent" />
                    </span>
                    <span
                      className={`mt-0.5 shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${
                        item.must ? "bg-[#FEE2E2] text-[#B91C1C]" : "bg-[#FEF3C7] text-[#92400E]"
                      }`}
                    >
                      {item.must ? "Must" : "Nice"}
                    </span>
                    <span className="text-sm text-[#2D4250] leading-relaxed">
                      <strong className="text-[#0F172A]">{item.req}</strong> — {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to score HaulageOps against this checklist?</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Book a demo and we'll walk through every requirement live — no slides, just the platform.
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

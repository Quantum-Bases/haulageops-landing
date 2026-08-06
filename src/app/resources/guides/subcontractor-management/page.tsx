import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Subcontractor Management Guide for Haulage Operators | HaulageOps",
  description:
    "A practical guide to managing subcontractors in bulk haulage — onboarding, job allocation, docket collection, rate management, compliance records and when to use a subcontractor portal.",
};

const proofStrip = [
  "Onboarding process",
  "Rate & contract setup",
  "Job allocation workflows",
  "Docket collection",
  "Compliance records",
  "Billing & reconciliation",
];

const failurePoints = [
  { strong: "Docket collection", desc: "paper dockets arrive days late, are illegible, or go missing entirely" },
  { strong: "Rate disputes", desc: "verbal agreements are remembered differently by each party" },
  { strong: "Visibility gaps", desc: "you don't know how many loads a subcontractor ran until end of week" },
  { strong: "Invoice reconciliation", desc: "subcontractors invoice for loads you can't verify" },
  { strong: "Compliance", desc: "no record of whether the subcontractor's licence and insurance were current" },
  { strong: "Communication overhead", desc: "dispatch happening across multiple WhatsApp groups and phone calls" },
];

const pillars = [
  { strong: "Onboarding", desc: "Capture ABN, insurance, licence before first load" },
  { strong: "Rates & contracts", desc: "Written rate agreements per job type, in your system" },
  { strong: "Dispatch", desc: "Allocate jobs formally — not via text — so there's a record" },
  { strong: "Dockets", desc: "Digital capture at point of delivery, not paper posted later" },
  { strong: "Billing", desc: "Reconcile subcontractor invoices against system records, not memory" },
];

const onboardingCards = [
  {
    title: "Business & Identity",
    items: [
      "Business name and ABN",
      "Primary contact name and mobile",
      "Business address",
      "GST registration status",
    ],
  },
  {
    title: "Compliance Documents",
    items: [
      "Public liability insurance (current, with expiry)",
      "Vehicle registration (each truck they'll run)",
      "Driver's licence copy",
      "Any applicable permits or certifications",
    ],
  },
  {
    title: "Rate Agreement",
    items: [
      "Rate per tonne, per hour, or per load",
      "Which job types and materials apply",
      "Any surcharges (fuel, after-hours, wet weather)",
      "Payment terms",
    ],
  },
];

const rightWaySteps = [
  "Job is created in your system with client, site, load type and rate",
  "Subcontractor receives a job notification (SMS or portal notification)",
  "Subcontractor accepts or declines in the portal — creates a record",
  "After loading, subcontractor enters load weight and photographs docket",
  "Docket arrives in your system timestamped and linked to the job",
  "At end of week, every load is in the system — reconciliation is automatic",
];

const billingCards = [
  {
    title: "Subcontractor Self-Billing",
    p1: "Some operators let subcontractors generate their own invoices. This puts the burden of reconciliation on you. The subcontractor's invoice rarely matches your records exactly.",
    better: "Better: generate the invoice in your system from digital docket records, and share it with the subcontractor to approve.",
  },
  {
    title: "Weekly Reconciliation",
    p1: "At end of week, pull a report of all loads run by each subcontractor, cross-reference with dockets received, apply the agreed rate, and generate a payment summary.",
    better: "In HaulageOps, this is automated — all loads are in the system with the rate already attached.",
  },
  {
    title: "Rate Dispute Prevention",
    p1: "Every rate change should be documented in writing and stored against the subcontractor profile. If a subcontractor disputes a rate, you have the signed agreement and the effective date on record.",
    better: "HaulageOps stores rate history — you can see what rate applied on any given date.",
  },
];

const relatedFeatures = [
  {
    title: "Subcontractor Portal",
    href: "/platform/subcontractor-portal",
    p: "Browser-based portal where subcontractors accept jobs, record loads, and submit dockets without installing an app.",
  },
  {
    title: "Subcontractor Management",
    href: "/platform/subcontractor-management",
    p: "Profile management, document storage, rate agreements and compliance expiry tracking for all your subcontractors.",
  },
  {
    title: "Digital Dockets",
    href: "/solutions/digital-dockets",
    p: "Photo capture, timestamp and GPS at point of delivery. Dockets arrive in your Admin Portal in real time.",
  },
  {
    title: "Rate Management",
    href: "/platform/rate-management",
    p: "Store and manage subcontractor rates alongside client rates — all applied automatically at billing time.",
  },
];

export default function SubcontractorManagementGuidePage() {
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
            <span className="text-[#0F172A] font-medium">Subcontractor Management Guide</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Guide · Subcontractor Operations
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Subcontractor Management for Bulk Haulage Operators
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Managing subcontractors well is the difference between a flexible, scalable fleet and an operation constantly chasing dockets, reconciling disputed loads, and paying invoices you can't verify. This guide covers the fundamentals.
          </p>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-[#0F172A] py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 text-center">
            {proofStrip.map((item) => (
              <div key={item} className="flex flex-col items-center justify-center gap-1">
                <strong className="text-white text-sm font-bold leading-tight">{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROBLEM + FRAMEWORK */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Problem</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">Why Subcontractor Management Breaks Down</h2>
              <p className="mt-4 text-[#475569] leading-relaxed text-sm">
                Most operators start managing subcontractors the way they managed their first owned driver: WhatsApp message, verbal rate agreement, paper docket at the end of the job. This works with two subcontractors. It breaks at ten.
              </p>
              <p className="mt-3 text-[#475569] leading-relaxed text-sm">The common failure points:</p>
              <ul className="mt-4 space-y-3">
                {failurePoints.map((item) => (
                  <li key={item.strong} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span><strong className="text-[#0F172A]">{item.strong}</strong> — {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Framework</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">Five Pillars of Effective Subcontractor Management</h2>
              <ol className="mt-6 space-y-3 list-none">
                {pillars.map((item, idx) => (
                  <li key={item.strong} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF0E6] text-xs font-bold text-[#E8652B]">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-[#334155] leading-relaxed">
                      <strong className="text-[#0F172A]">{item.strong}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ONBOARDING */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Subcontractor Onboarding: What to Capture</h2>
          <p className="mt-3 text-[#475569] leading-relaxed max-w-3xl">
            Before a subcontractor runs their first load, you need a complete record on file.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {onboardingCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <ul className="mt-5 space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                      <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#475569] leading-relaxed">
            In HaulageOps, all of this is stored against the subcontractor profile with expiry alerts for insurance and registration documents. See{" "}
            <Link href="/resources/checklists/subcontractor-onboarding" className="text-[#E8652B] hover:underline font-medium">Subcontractor Onboarding Checklist</Link>.
          </p>
        </div>
      </section>

      {/* JOB ALLOCATION */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Job Allocation: Making the Dispatch Process Work</h2>
          <div className="mt-10 grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-4">The Wrong Way (Common)</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                A dispatcher calls or messages a subcontractor, they verbally agree to take a load, run it, and send a photo of the docket via WhatsApp. The photo is blurry. Three days later, no one can remember if it was 22 tonnes or 24 tonnes, or which client it was for.
              </p>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                This works until you scale. At 6 subcontractors running 4 loads a day, it becomes unmanageable.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-4">The Right Way (System-Supported)</h3>
              <ul className="space-y-3">
                {rightWaySteps.map((item) => (
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

      {/* BILLING SUBCONTRACTORS */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Billing Subcontractors: How to Reduce Disputes</h2>
          <p className="mt-3 text-[#475569] leading-relaxed max-w-3xl">
            Most subcontractor billing disputes come from the same source: nobody has a single authoritative record of what was actually delivered.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {billingCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p1}</p>
                <p className="mt-4 text-sm font-bold text-[#0F7673] leading-relaxed">{card.better}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PLATFORM FEATURES */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Related Platform Features</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedFeatures.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">{card.title}</Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.p}</p>
                <Link href={card.href} className="mt-3 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  View details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Managing subcontractors the hard way?</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Book a demo and we'll show you how HaulageOps handles the full subcontractor workflow.
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

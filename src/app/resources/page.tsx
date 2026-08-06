import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Haulage Operations Resources — Guides, Checklists and Tools | HaulageOps",
  description:
    "Free guides, checklists and tools for bulk haulage and construction logistics operators — from software selection to subcontractor management.",
};

const guides = [
  {
    title: "Bulk Haulage Operations Guide",
    href: "/resources/guides/bulk-haulage-operations",
    desc: "The complete end-to-end picture of how a bulk haulage operation runs — job lifecycle, rate structures, subcontractor coordination, digital dockets and the job-to-invoice process.",
    points: [
      "Job lifecycle: create, rate, assign, track, POD, invoice",
      "Rate structures explained: per-tonne, per-load, hourly, fixed",
      "Managing owned fleet vs subcontracted capacity",
      "Digital dockets and proof of delivery",
    ],
  },
  {
    title: "Subcontractor Management Guide",
    href: "/resources/guides/subcontractor-management",
    desc: "How to manage haulage subcontractors without losing control or visibility — from onboarding and rate agreements to job delegation, delivery confirmation and compliance records.",
    points: [
      "Why WhatsApp-based coordination breaks at volume",
      "Pay rate vs charge rate management",
      "Why subcontractors need their own portal login",
      "Document collection and compliance records",
    ],
  },
  {
    title: "Digital Dockets Guide",
    href: "/resources/guides/digital-dockets",
    desc: "What a docket is in haulage, why paper dockets fail at volume, and how digital docket capture works from job assignment through to invoice.",
    points: [
      "What a docket records and why it matters for invoicing",
      "Why paper dockets delay cash flow",
      "Digital capture: photo, signature, document upload",
      "Offline sync for low-connectivity sites",
    ],
  },
  {
    title: "Haulage Compliance Guide",
    href: "/resources/guides/haulage-compliance",
    desc: "Key compliance obligations for haulage operators — Chain of Responsibility, driver document management, vehicle records and the practices that demonstrate due diligence.",
    points: [
      "What Chain of Responsibility means in practice",
      "Driver fitness and document records",
      "Vehicle roadworthiness and permit management",
      "Break and fatigue management records",
    ],
  },
  {
    title: "Haulage Software Buyer's Guide",
    href: "/resources/guides/haulage-software-buyers-guide",
    desc: "How to evaluate haulage management software without buying the wrong thing — questions to ask every vendor, a demo script and common traps in software selection.",
    points: [
      "Questions to ask every vendor before committing",
      "How to run a meaningful vendor demo",
      "Common traps: telematics, parcel TMS, demo features",
      "Pricing and implementation questions",
    ],
  },
];

const checklists = [
  {
    title: "Software Requirements Checklist",
    href: "/resources/checklists/haulage-software-requirements",
    desc: "40 specific, verifiable questions to ask before you sign a haulage software contract. Each question has a clear pass/fail answer — not a vendor slide.",
    best: "ops managers shortlisting TMS options and running structured demos",
  },
  {
    title: "Implementation Checklist",
    href: "/resources/checklists/implementation",
    desc: "Step-by-step setup checklist covering data preparation, system configuration, testing and go-live. Follows the typical 2–4 week onboarding timeline.",
    best: "ops managers setting up a TMS for the first time",
  },
  {
    title: "Subcontractor Onboarding Checklist",
    href: "/resources/checklists/subcontractor-onboarding",
    desc: "What to collect and confirm before your first job with a new subcontractor — insurance, rate agreements, portal setup, compliance records and communication preferences.",
    best: "operators bringing a new subcontractor into their network",
  },
];

const tools = [
  {
    title: "ROI Calculator",
    href: "/resources/tools/haulage-software-roi-calculator",
    desc: "Estimate the return on investing in haulage management software. Inputs: fleet size, jobs per week, invoice delay, admin hours, subcontractor jobs per week.",
    note: "Estimates — actual results depend on your specific operation.",
    cta: "Run the calculator",
  },
  {
    title: "Admin Cost Calculator",
    href: "/resources/tools/admin-cost-calculator",
    desc: "Calculate what manual haulage admin is costing your business per week, month and year — and compare it against the cost of software automation.",
    note: "Estimates based on the hours and rate you enter.",
    cta: "Run the calculator",
  },
  {
    title: "Rate Card Template",
    href: "/resources/tools/rate-card-template",
    desc: "A structured rate card format for bulk haulage billing — per-tonne, per-load, hourly and fixed rate formats with client-specific pricing examples.",
    note: "Includes how HaulageOps stores and applies rate cards automatically.",
    cta: "View the template",
  },
];

export default function ResourcesPage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb + Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#FFF9F5] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Resources</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Resource Centre
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Resources for operators who run haulage and construction logistics.
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            These resources are designed for operators actively managing the problems — not generic supply chain theory. Each guide, checklist and tool covers a specific operational or commercial challenge that haulage operators face day to day.
          </p>
        </div>
      </section>

      {/* GUIDES */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Guides</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">In-depth operational guides</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Structured guides covering the full haulage operation — from how a job moves from creation to invoice, to managing subcontractor networks and staying audit-ready.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] flex flex-col">
                <h3 className="text-lg font-bold text-[#0F172A]">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">{card.title}</Link>
                </h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.desc}</p>
                <ul className="mt-4 space-y-2.5 flex-1">
                  {card.points.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                      <CheckCircle2 className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={card.href} className="mt-5 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  Read the guide <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLISTS */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Checklists</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">Operational checklists</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Structured checklists for the decisions and processes that most operators handle informally — and pay for in rework, confusion or wasted time when something goes wrong.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {checklists.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] flex flex-col">
                <h3 className="text-lg font-bold text-[#0F172A]">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">{card.title}</Link>
                </h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.desc}</p>
                <p className="mt-4 text-sm text-[#334155]"><strong className="text-[#0F172A]">Best for:</strong> {card.best}</p>
                <Link href={card.href} className="mt-5 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  Use the checklist <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Tools</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">Calculators and templates</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Practical tools for estimating cost and structuring the commercial fundamentals of a haulage operation — rate cards, ROI and admin cost analysis.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {tools.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] flex flex-col">
                <h3 className="text-lg font-bold text-[#0F172A]">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">{card.title}</Link>
                </h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.desc}</p>
                <p className="mt-4 text-xs text-[#94A3B8] italic">{card.note}</p>
                <Link href={card.href} className="mt-5 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  {card.cta} <ArrowRight className="h-3.5 w-3.5" />
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See the platform in action.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              A 20-minute demo covers one full job end-to-end — create, dispatch, subcontract, POD, invoice, Xero sync. No feature slides.
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

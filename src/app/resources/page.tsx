"use client";

import { useState } from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  ClipboardList,
  Calculator,
  Sparkles,
  FileText,
  FileSpreadsheet,
} from "lucide-react";

const guides = [
  {
    category: "Operational Guide",
    title: "Bulk Haulage Operations Guide",
    href: "/resources/guides/bulk-haulage-operations",
    desc: "The complete operational manual for running heavy haulage — rate structures, subcontractor coordination, digital dockets, and the job-to-invoice journey.",
    points: [
      "Job lifecycle: create, rate, assign, track, POD, invoice",
      "Rate structures: per-tonne, per-load, hourly, and minimums",
      "Managing owned fleets alongside subcontracted capacity",
    ],
  },
  {
    category: "Subcontractor Guide",
    title: "Subcontractor Management Guide",
    href: "/resources/guides/subcontractor-management",
    desc: "How to manage external haulage subbies without losing dispatch control — from rate agreements to live job delegation and automated RCTIs.",
    points: [
      "Why WhatsApp group dispatch breaks down at scale",
      "Managing separate client charge rates and subbie pay rates",
      "Self-service portal access vs administrative double handling",
    ],
  },
  {
    category: "Delivery Evidence",
    title: "Digital Dockets & Proof of Delivery",
    href: "/resources/guides/digital-dockets",
    desc: "Why physical paper dockets delay hundreds of thousands in monthly cash flow, and how mobile photo capture unlocks same-week invoicing.",
    points: [
      "What a docket records and why it matters for client billing",
      "Offline mobile photo capture in deep quarry pits",
      "Direct linking of dockets to live Xero invoice lines",
    ],
  },
  {
    category: "Safety & Compliance",
    title: "Heavy Vehicle Compliance Guide",
    href: "/resources/guides/haulage-compliance",
    desc: "Essential compliance practices for heavy tippers — Chain of Responsibility (CoR) records, driver induction tracking, and break management.",
    points: [
      "Practical implementation of Chain of Responsibility",
      "Driver licence, medical, and induction expiry tracking",
      "Immutable, timestamped dispatch and break audit trails",
    ],
  },
  {
    category: "Procurement",
    title: "Haulage Software Buyer's Guide",
    href: "/resources/guides/haulage-software-buyers-guide",
    desc: "How to evaluate transport management systems without buying the wrong software — essential questions, demo scripts, and vendor traps.",
    points: [
      "Critical questions to ask every software vendor",
      "Spotting generic parcel software disguised as bulk TMS",
      "Evaluating subcontractor licensing and onboarding costs",
    ],
  },
];

const checklists = [
  {
    category: "Checklist",
    title: "TMS Software Requirements Checklist",
    href: "/resources/checklists/haulage-software-requirements",
    desc: "40 specific, verifiable questions to ask before signing any transport software agreement. Each question has a clear operational pass/fail test.",
    best: "Operations managers shortlisting TMS options and conducting vendor demos.",
  },
  {
    category: "Checklist",
    title: "Fleet Implementation Checklist",
    href: "/resources/checklists/implementation",
    desc: "Step-by-step setup checklist covering spreadsheet data preparation, rate card testing, driver app installation, and parallel run go-live.",
    best: "Fleet owners and dispatch managers migrating to a new digital system.",
  },
  {
    category: "Checklist",
    title: "Subcontractor Onboarding Checklist",
    href: "/resources/checklists/subcontractor-onboarding",
    desc: "What to collect and verify before assigning your first job to a new subcontractor — insurances, rate schedules, portal setup, and safety compliance.",
    best: "Operators expanding their regular external haulage network.",
  },
];

const tools = [
  {
    category: "Interactive Tool",
    icon: Calculator,
    title: "Haulage Software ROI Calculator",
    href: "/resources/tools/haulage-software-roi-calculator",
    desc: "Model the exact financial return of automating dispatch, eliminating paper docket delays, and speeding up your weekly Xero billing cycle.",
    cta: "Calculate Your Fleet ROI",
  },
  {
    category: "Interactive Tool",
    icon: FileText,
    title: "Admin Cost & Leakage Calculator",
    href: "/resources/tools/admin-cost-calculator",
    desc: "Calculate what manual administration, phone tag, and spreadsheet reconciliation are costing your haulage business every month.",
    cta: "Calculate Admin Costs",
  },
  {
    category: "Template",
    icon: FileSpreadsheet,
    title: "Bulk Haulage Rate Card Template",
    href: "/resources/tools/rate-card-template",
    desc: "A structured Excel/Sheets template for organizing complex per-tonne, per-m3, hourly, and per-load pricing matrices across clients.",
    cta: "View Free Template",
  },
];

export default function ResourcesPage() {
  const [filter, setFilter] = useState<"all" | "guides" | "checklists" | "tools">("all");

  return (
    <MainLayout showCta={false}>
      {/* 1. Hero Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-neutral-50/80 via-white to-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Resources</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Operational Knowledge Hub
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.08]">
              Practical resources for operators who run
              <span className="block text-[#E8652B] mt-2">bulk haulage & construction logistics.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl font-normal">
              No generic supply-chain theory. Every guide, checklist, and calculator addresses the real-world friction of dispatching tippers, managing subcontractors, capturing dockets, and billing through Xero.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filter Navigation Bar */}
      <section className="bg-neutral-900 py-4 border-y border-neutral-800 sticky top-16 z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filter === "all" ? "bg-[#E8652B] text-white" : "text-neutral-300 hover:text-white hover:bg-neutral-800"
              }`}
            >
              All Resources
            </button>
            <button
              onClick={() => setFilter("guides")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filter === "guides" ? "bg-[#E8652B] text-white" : "text-neutral-300 hover:text-white hover:bg-neutral-800"
              }`}
            >
              Operational Guides
            </button>
            <button
              onClick={() => setFilter("checklists")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filter === "checklists" ? "bg-[#E8652B] text-white" : "text-neutral-300 hover:text-white hover:bg-neutral-800"
              }`}
            >
              Checklists
            </button>
            <button
              onClick={() => setFilter("tools")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filter === "tools" ? "bg-[#E8652B] text-white" : "text-neutral-300 hover:text-white hover:bg-neutral-800"
              }`}
            >
              Calculators & Tools
            </button>
          </div>
          <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
            Free operator downloads & templates
          </span>
        </div>
      </section>

      {/* 3. Guides Grid */}
      {(filter === "all" || filter === "guides") && (
        <section className="py-20 bg-white border-b border-neutral-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-[#E8652B] flex items-center justify-center">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-neutral-900">In-Depth Operational Guides</h2>
                <span className="text-xs text-neutral-500">Comprehensive manuals for bulk fleet workflows</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((card) => (
                <div
                  key={card.title}
                  className="bg-neutral-50/50 rounded-2xl p-7 border border-neutral-200 shadow-xs flex flex-col justify-between hover:border-[#E8652B]/70 transition-all"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8652B] block mb-2">
                      {card.category}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-900 leading-snug">
                      <Link href={card.href} className="hover:text-[#E8652B] transition-colors">
                        {card.title}
                      </Link>
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">{card.desc}</p>

                    <div className="mt-5 pt-4 border-t border-neutral-200/80">
                      <ul className="space-y-2">
                        {card.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2 text-xs text-neutral-700">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-200">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E8652B] hover:text-[#D05520]"
                    >
                      <span>Read the Full Guide</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Checklists Grid */}
      {(filter === "all" || filter === "checklists") && (
        <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-[#E8652B] flex items-center justify-center">
                <ClipboardList className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-neutral-900">Operational Checklists</h2>
                <span className="text-xs text-neutral-500">Standard operating procedures and procurement audits</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {checklists.map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-2xl p-7 border border-neutral-200 shadow-xs flex flex-col justify-between hover:border-[#E8652B]/70 transition-all"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8652B] block mb-2">
                      {card.category}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-900 leading-snug">
                      <Link href={card.href} className="hover:text-[#E8652B] transition-colors">
                        {card.title}
                      </Link>
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">{card.desc}</p>
                    <div className="mt-4 p-3 bg-neutral-50 rounded-xl border border-neutral-200/80 text-xs text-neutral-600">
                      <strong className="text-neutral-900 block mb-0.5">Best For:</strong>
                      {card.best}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E8652B] hover:text-[#D05520]"
                    >
                      <span>Use Checklist</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Calculators & Tools */}
      {(filter === "all" || filter === "tools") && (
        <section className="py-20 bg-white border-b border-neutral-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-[#E8652B] flex items-center justify-center">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-neutral-900">Calculators & Practical Tools</h2>
                <span className="text-xs text-neutral-500">Estimate ROI, administrative hours, and rate card formats</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {tools.map((card) => {
                const IconComp = card.icon;
                return (
                  <div
                    key={card.title}
                    className="bg-neutral-50/50 rounded-2xl p-7 border border-neutral-200 shadow-xs flex flex-col justify-between hover:border-[#E8652B]/70 transition-all"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 text-[#E8652B] flex items-center justify-center mb-4">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8652B] block mb-1">
                        {card.category}
                      </span>
                      <h3 className="text-xl font-bold text-neutral-900 leading-snug">
                        <Link href={card.href} className="hover:text-[#E8652B] transition-colors">
                          {card.title}
                        </Link>
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">{card.desc}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-200">
                      <Link
                        href={card.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E8652B] hover:text-[#D05520]"
                      >
                        <span>{card.cta}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6. CTA Footer */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] mb-2 block">
              See the Live Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Ready to see HaulageOps in action?
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Book a 20-minute operational walkthrough. We'll show you live dispatch, driver offline docket capture, and automated Xero invoicing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="w-full sm:w-auto bg-[#E8652B] hover:bg-[#D05520] text-white font-bold px-8 shadow-sm">
                Book a 20-Minute Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700 font-bold">
                Fleet Consultation Scope
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

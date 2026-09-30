"use client";

import { useState } from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Truck,
  FileCheck,
  DollarSign,
  ShieldAlert,
  ChevronRight,
  Sparkles,
  PhoneCall,
  Clock,
  MessageSquareOff,
  FileText,
  Users2,
  Receipt,
  ShieldCheck,
  TrendingUp,
  XCircle,
} from "lucide-react";
import { FaqSection } from "@/components/shared/FaqSection";

const challengeSolutions = [
  {
    icon: MessageSquareOff,
    tag: "Dispatch Chaos",
    title: "Replacing WhatsApp & Phone Call Dispatch",
    desc: "Group chats and phone calls collapse when managing 30+ loads a day. HaulageOps provides a single visual dispatch board where jobs are delegated to internal drivers or external subcontractors in seconds.",
    bullets: [
      "No more lost instructions or conflicting address texts",
      "Subcontractors accept or decline jobs with 1 click",
      "Live GPS status updates replace 'Where are you now?' phone calls",
      "Interactive Mapbox navigation provided to drivers and subbies",
    ],
    href: "/solutions/replacing-whatsapp-dispatch",
  },
  {
    icon: FileCheck,
    tag: "Lost Paper Dockets",
    title: "Eliminating Missing Physical Dockets & PODs",
    desc: "Paper weighbridge tickets get crumpled, oil-stained, or left in truck cabs for weeks. The HaulageOps driver app captures crisp photos and signatures on glass at the point of drop-off.",
    bullets: [
      "Offline-capable photo docket capture works in remote quarry pits",
      "Dockets are instantly linked to the specific job record in the cloud",
      "Head contractors and clients can access verified dockets self-service",
      "Zero missing paperwork when compiling end-of-month invoice runs",
    ],
    href: "/solutions/digital-dockets",
  },
  {
    icon: Receipt,
    tag: "Billing Delays",
    title: "Cutting Invoice Delays from Weeks to 48 Hours",
    desc: "Reconciling paper dockets against spreadsheets holds up hundreds of thousands of dollars in billing. HaulageOps automates rating and pushes invoice batches straight into Xero.",
    bullets: [
      "Pre-configured rate cards applied automatically to verified tonnages",
      "Automated creation of Recipient Created Tax Invoices (RCTIs) for subbies",
      "2-way OAuth2 direct sync into Xero without double-entry errors",
      "Immediate gross margin visibility on every completed job",
    ],
    href: "/solutions/reducing-invoice-delays",
  },
  {
    icon: Users2,
    tag: "Capacity Scaling",
    title: "Coordinating Owned Fleets & External Subbies",
    desc: "Most trucking software treats external subbies as second-class citizens or charges extra per user. HaulageOps gives subcontractors their own dedicated portal for free.",
    bullets: [
      "Zero per-seat licence fees for external haulage contractors",
      "Subbies see only the rates you pay them, never client charge rates",
      "Direct docket upload by subcontractors speeds up payment approvals",
      "Grow operational capacity without increasing back-office admin headcount",
    ],
    href: "/solutions/subcontractor-coordination",
  },
  {
    icon: DollarSign,
    tag: "Commercial Friction",
    title: "Managing Dual Client & Subcontractor Rate Cards",
    desc: "Bulk haulage rarely uses flat rates. HaulageOps handles separate client charge rates (e.g. $14.50/tonne) and subbie pay rates (e.g. $12.00/tonne or $165/hr) on the same job.",
    bullets: [
      "Support for per-tonne, per-m3, hourly, per-load, and minimum-charge rules",
      "Site-specific and material-specific automated rate matrices",
      "Prevent margin erosion before jobs are dispatched into the field",
      "Audit trail for special customer discount or surcharge approvals",
    ],
    href: "/solutions/rate-and-contract-management",
  },
  {
    icon: ShieldCheck,
    tag: "Legal Compliance",
    title: "Audit-Ready Chain of Responsibility (CoR)",
    desc: "Heavy vehicle national law requires demonstrable proof of safe working hours, vehicle maintenance, and induction compliance. HaulageOps maintains an immutable digital ledger.",
    bullets: [
      "Driver rest break logs and availability records recorded on mobile",
      "Automated expiry alerts for driver licences, insurance, and site inductions",
      "Tamper-proof timestamped audit trail of all dispatch changes",
      "Exportable compliance records ready for NHVR and safety regulators",
    ],
    href: "/solutions/audit-ready-operations",
  },
];

const roleSolutions = [
  {
    role: "Fleet Owners & Managing Directors",
    headline: "Protect your commercial margins and scale with total confidence.",
    benefits: [
      "Real-time visibility over gross profit per load, per vehicle, and per subbie",
      "Eliminate working capital bottlenecks caused by delayed invoice runs",
      "Expand fleet capacity rapidly using subcontractors without administrative bloat",
    ],
  },
  {
    role: "Dispatchers & Operations Managers",
    headline: "Reclaim 3 to 4 hours every day from repetitive phone tag.",
    benefits: [
      "One master screen showing live status for owned trucks and subcontractors",
      "Instant 1-click job allocations replace WhatsApp copy-pasting",
      "Client self-service portal ends 'Where is my delivery?' phone interruptions",
    ],
  },
  {
    role: "Finance & Accounts Teams",
    headline: "Turn month-end invoice nightmare into a 20-minute review.",
    benefits: [
      "Automatic matching of driver dockets to customer rate cards",
      "One-click batch generation of Xero sales invoices and subbie bills/RCTIs",
      "Zero manual data entry from crumpled physical weighbridge slips",
    ],
  },
  {
    role: "Drivers & Subcontractors",
    headline: "Clear instructions, zero friction, and faster payment cycles.",
    benefits: [
      "Clear turn-by-turn site directions and load notes right on their phone",
      "Offline-first mobile app that never crashes in remote quarry pits",
      "Instant transparent record of approved loads for dispute-free weekly pay",
    ],
  },
];

export function SolutionsPage() {
  const [activeRole, setActiveRole] = useState(0);

  return (
    <MainLayout>
      {/* 1. Hero Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-neutral-50/80 via-white to-white text-neutral-900 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Solutions</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Tailored Operational Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.08]">
              Purpose-built solutions for how
              <span className="block text-[#E8652B] mt-2">bulk haulage actually operates.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl font-normal">
              Generic logistics platforms fail when confronted with per-tonne rate cards, quarry weighbridge dockets, and mixed subbie fleets. HaulageOps was engineered specifically to dismantle those bottlenecks.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/demo">
                <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-bold cursor-pointer shadow-sm">
                  Book an Operational Walkthrough
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/platform">
                <Button size="lg" variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-bold">
                  Explore Platform Portals
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Before vs After Comparison Strip */}
      <section className="py-14 bg-neutral-900 text-white border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-3">
                <XCircle className="h-4 w-4" />
                The Fragmented Spreadsheet Way
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                <li>• Dispatchers text drivers and call subbies across 10 WhatsApp groups</li>
                <li>• Lost paper dockets hold up $100k+ in cash flow for 3 to 4 weeks</li>
                <li>• Head contractors phone the dispatch desk 20 times a day for updates</li>
                <li>• Subcontractors argue over pay rates and invoice amounts every Friday</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-800/80 border border-[#E8652B]/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8652B]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2 text-[#E8652B] font-bold text-xs uppercase tracking-wider mb-3">
                <CheckCircle className="h-4 w-4" />
                The HaulageOps Standard
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-200 leading-relaxed">
                <li>• Unified visual board with 1-click allocation to internal and subbie fleets</li>
                <li>• Drivers snap photo dockets offline; signed POD attaches in real-time</li>
                <li>• Clients view live loads and self-serve dockets directly from their portal</li>
                <li>• Auto-matched RCTIs and two-way Xero sync cut billing to under 48 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solutions by Operational Challenge */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Targeted Problem Solving</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Choose Your Operational Bottleneck
            </h2>
            <p className="mt-3 text-neutral-600 text-base">
              See how HaulageOps solves the specific headache holding your transport business back today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challengeSolutions.map((sol) => {
              const IconComp = sol.icon;
              return (
                <div
                  key={sol.title}
                  className="bg-white border border-neutral-200 rounded-2xl p-7 flex flex-col justify-between hover:border-[#E8652B]/70 transition-all shadow-xs"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-[#E8652B] flex items-center justify-center mb-5">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8652B] block mb-1">
                      {sol.tag}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-900 leading-snug">{sol.title}</h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed font-normal">{sol.desc}</p>

                    <ul className="mt-5 space-y-2">
                      {sol.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-neutral-700">
                          <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-neutral-100">
                    <Link
                      href={sol.href}
                      className="text-xs font-bold text-[#E8652B] hover:text-[#D05520] flex items-center justify-between"
                    >
                      <span>Explore workflow details</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Solutions by Role */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Role-Based Impact</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Value Delivered Across Your Entire Organisation
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto">
            {roleSolutions.map((r, idx) => (
              <button
                key={r.role}
                onClick={() => setActiveRole(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeRole === idx
                    ? "bg-neutral-900 text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {r.role.split("&")[0]}
              </button>
            ))}
          </div>

          <div className="bg-neutral-50/60 rounded-3xl p-8 sm:p-12 border border-neutral-200 max-w-4xl mx-auto shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] block mb-2">
              Impact for: {roleSolutions[activeRole].role}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 leading-tight">
              {roleSolutions[activeRole].headline}
            </h3>
            <div className="mt-8 space-y-4">
              {roleSolutions[activeRole].benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-neutral-200/80 shadow-xs">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-neutral-800 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-200 flex justify-end">
              <Link href="/demo">
                <Button className="bg-[#E8652B] hover:bg-[#D05520] text-white font-bold text-xs sm:text-sm">
                  Schedule a Walkthrough for Your Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <FaqSection />

      {/* 6. CTA Footer */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] mb-2 block">
              Ready to Upgrade Your Operations?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Stop letting operational friction burn your profit.
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              See how HaulageOps transforms dispatch speed, subbie relationships, and invoice turnaround in a 20-minute tailored walkthrough.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="w-full sm:w-auto bg-[#E8652B] hover:bg-[#D05520] text-white font-bold px-8 shadow-sm">
                Book a 20-Minute Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700 font-bold">
                Contact Operations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default SolutionsPage;

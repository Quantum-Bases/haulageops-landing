import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Truck,
  TrendingUp,
  FileCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Quote,
  Building2,
  Layers,
  Receipt,
  XCircle,
} from "lucide-react";

export const metadata = {
  title: "Case Study: Queensland Bulk Haulage Operator Replaces Spreadsheets | HaulageOps",
  description:
    "How an 18-truck bulk haulage and earthworks operator replaced spreadsheets, WhatsApp, and paper dockets with HaulageOps — cutting invoice delays from 4 weeks to 48 hours.",
};

const proofStrip = [
  "18 Owned Tippers + 6 Regular Subcontractors",
  "3-Week Parallel Go-Live",
  "Invoice Delays Cut from 4 Wks to Same-Week",
  "100% Paperless Driver Docket Capture",
  "Zero Subcontractor Seat Fees",
  "Direct 2-Way Xero Integration",
];

const results = [
  { metric: "4 Wks → 48h", strong: "Invoice Cycle Turnaround", desc: "Dockets arrive digitally as jobs complete; invoice batches push straight to Xero." },
  { metric: "100%", strong: "Paper Dockets Eliminated", desc: "Drivers take photos in the cab; originals stay on site with zero lost paperwork." },
  { metric: "6 Subbies", strong: "Autonomous Subcontractor Portal", desc: "External subbies receive work, view Mapbox routes, and submit dockets independently." },
  { metric: "< 20 Mins", strong: "Weekly Billing Preparation", desc: "What previously consumed an entire weekend is now audited and sent in under 20 minutes." },
  { metric: "Zero Calls", strong: "Client Self-Service Access", desc: "Head contractors download signed dockets directly instead of phoning the dispatch office." },
  { metric: "100% Audit", strong: "CoR Safety Trail", desc: "Timestamped records of driver breaks, site arrival geofences, and load weights." },
];

const featuresUsed = [
  {
    title: "Admin & Dispatch Control Board",
    desc: "Daily job allocation to 18 owned trucks and 6 external subcontractors from one single master board with live GPS status.",
    links: [{ label: "Dispatch Management", href: "/platform/dispatch-management" }],
  },
  {
    title: "Offline Driver Mobile App",
    desc: "Drivers accept jobs, record weighbridge load weights, photograph dockets, and collect signatures — even in low-reception quarry pits.",
    links: [
      { label: "Driver Mobile App", href: "/platform/driver-app" },
      { label: "Digital Dockets", href: "/solutions/digital-dockets" },
    ],
  },
  {
    title: "Dedicated Subcontractor Portal",
    desc: "Six external haulage contractors use the free browser portal to accept jobs and upload dockets directly with zero extra software seats.",
    links: [{ label: "Subcontractor Portal", href: "/platform/subcontractor-portal" }],
  },
  {
    title: "Two-Way Xero Accounting Sync",
    desc: "Completed loads automatically generate Xero sales invoices matched against agreed client rate cards and generate subbie RCTIs.",
    links: [
      { label: "Billing & Invoicing", href: "/platform/billing-and-invoicing" },
      { label: "Xero Integration", href: "/platform/integrations/xero" },
    ],
  },
];

export default function CustomerStoryPage() {
  return (
    <MainLayout showCta={false}>
      {/* 1. Breadcrumbs + Hero Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-neutral-50/80 via-white to-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Customer Stories</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Queensland Bulk Haulier</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Customer Case Study
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.08]">
              &ldquo;We went from WhatsApp and spreadsheets to a real system in three weeks.&rdquo;
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl font-normal">
              How a bulk haulage and civil earthworks operator running 18 company tippers and 6 regular subcontractors eliminated lost paper dockets and slashed invoice turnaround from 4 weeks to 48 hours.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/demo">
                <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-bold cursor-pointer shadow-sm">
                  Book a 20-Minute Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-bold">
                  Fleet Consultation Scope
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Proof Strip */}
      <section className="bg-neutral-900 py-6 border-y border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {proofStrip.map((item) => (
            <span key={item} className="text-xs sm:text-sm text-neutral-300 font-medium flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E8652B]" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* 3. The Challenge & Operation Snapshot */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Challenge</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
                Running 18 Tippers on WhatsApp Groups and a Shared Spreadsheet
              </h2>
              <div className="mt-6 space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                <p>
                  Before discovering HaulageOps, this Queensland earthworks operator was coordinating 18 owned trucks and up to 6 external subcontractors through three fragmented tools: a heavily formula-laden Excel sheet, 8 different WhatsApp group chats, and paper carbon dockets collected weekly.
                </p>
                <p>
                  As project volume surged, the system collapsed under its own weight. Drivers lost paper weighbridge tickets in truck cabs. Subcontractors had no central schedule, leading to duplicate assignments. And compiling end-of-month client invoices required hunting down missing paperwork for 3 to 4 weeks — tying up over $240,000 in unbilled working capital.
                </p>
              </div>

              <div className="mt-8 space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 bg-rose-50/60 p-3 rounded-xl border border-rose-200/60">
                  <XCircle className="h-4 w-4 text-rose-500 shrink-0" />
                  <span>3 to 4-week invoice delays due to manual docket reconciliation</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 bg-rose-50/60 p-3 rounded-xl border border-rose-200/60">
                  <XCircle className="h-4 w-4 text-rose-500 shrink-0" />
                  <span>Subcontractors calling dispatch every afternoon asking for job specs</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 bg-rose-50/60 p-3 rounded-xl border border-rose-200/60">
                  <XCircle className="h-4 w-4 text-rose-500 shrink-0" />
                  <span>Zero real-time proof of delivery to defend disputed client charges</span>
                </div>
              </div>
            </div>

            {/* Snapshot Card */}
            <div className="lg:col-span-5">
              <div className="bg-neutral-900 rounded-2xl border border-neutral-800 text-white p-7 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-6">
                  <span className="text-xs font-mono text-[#E8652B] font-bold uppercase tracking-wider">
                    Operator Profile
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    Live Case Study
                  </span>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700">
                    <span className="text-neutral-400 text-[10px] block">FLEET SIZE</span>
                    <span className="text-white font-bold text-sm">18 Owned Tippers + 6 Regular Subbies</span>
                  </div>
                  <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700">
                    <span className="text-neutral-400 text-[10px] block">PRIMARY OPERATIONS</span>
                    <span className="text-white font-bold text-sm">Civil Roadworks, Quarries & Bulk Earthmoving</span>
                  </div>
                  <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700">
                    <span className="text-neutral-400 text-[10px] block">PREVIOUS SYSTEM</span>
                    <span className="text-neutral-300">Shared Excel Spreadsheet + WhatsApp + Paper</span>
                  </div>
                  <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700">
                    <span className="text-neutral-400 text-[10px] block">ACCOUNTING LEDGER</span>
                    <span className="text-emerald-400 font-bold">Xero (Bi-Directional OAuth2 Sync)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quote Callout 1 */}
      <section className="py-16 bg-orange-50/60 border-b border-orange-200/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-10 w-10 text-[#E8652B] mx-auto mb-4 opacity-50" />
          <blockquote className="text-xl sm:text-2xl font-bold text-neutral-900 leading-relaxed">
            &ldquo;The thing that convinced me was the docket flow. A driver finishes a load, snaps a photo on his phone, and it shows up on my screen immediately. By the time I sit down to invoice at the end of the week, every single load is already reconciled.&rdquo;
          </blockquote>
          <p className="mt-4 text-xs sm:text-sm font-bold text-[#E8652B] uppercase tracking-wider">
            — Operations Director, Civil & Bulk Haulage Operator, QLD
          </p>
        </div>
      </section>

      {/* 5. The Implementation & Measurable Results */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Measurable Transformation</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              What Changed Inside the Business
            </h2>
            <p className="mt-3 text-neutral-600 text-base">
              Hard operational results achieved within the first 60 days of going live on HaulageOps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((r) => (
              <div
                key={r.strong}
                className="bg-white rounded-2xl p-7 border border-neutral-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#E8652B] block mb-2">
                    {r.metric}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900">{r.strong}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">{r.desc}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-bold text-emerald-600">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>Verified Operational Result</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Quote Callout 2 */}
      <section className="py-16 bg-neutral-900 text-white border-b border-neutral-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
            &ldquo;I used to dread the end of the month. Now invoicing takes less than 20 minutes because the rates, dockets, and tonnages are already verified. We just push the batch to Xero and send.&rdquo;
          </blockquote>
          <p className="mt-4 text-xs sm:text-sm font-bold text-[#E8652B] uppercase tracking-wider">
            — Accounts & Operations Manager
          </p>
        </div>
      </section>

      {/* 7. Features Used */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Platform Modules</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Features Implemented for This Fleet
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuresUsed.map((feat) => (
              <div key={feat.title} className="bg-neutral-50/50 rounded-2xl p-7 border border-neutral-200 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">{feat.title}</h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">{feat.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200/80 flex flex-wrap gap-4">
                  {feat.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#E8652B] hover:text-[#D05520]"
                    >
                      {link.label} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA Footer */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] mb-2 block">
              Similar Fleet Profile?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              See the exact same workflow configured for your trucks.
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Book a 20-minute operational demo. We'll show you live dispatch, driver offline docket capture, and Xero sync tailored to your operation.
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

import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Scale,
  Clock,
  FileText,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  Users2,
  Truck,
} from "lucide-react";

export const metadata = {
  title: "Chain of Responsibility (CoR) Compliance for Bulk Haulage | HaulageOps",
  description:
    "Under the Heavy Vehicle National Law (HVNL), Chain of Responsibility makes operators, schedulers, and loaders accountable. HaulageOps creates the tamper-proof digital records required during NHVR investigations.",
};

const proofStrip = [
  "HVNL CoR Compliant Architecture",
  "Immutable Action Audit Trail",
  "Driver Work & Rest Break Logging",
  "Digital Weighbridge Dockets as Evidence",
  "Automated Document Expiry Alerts",
  "Subcontractor Due Diligence Records",
];

const corRequirements = [
  "Do not cause, encourage, or permit drivers to exceed work hours or speed limits",
  "Maintain verifiable digital records of driver work, rest, and fatigue logs",
  "Ensure scheduled deliveries are operationally achievable within legal timeframes",
  "Retain tamper-proof evidence demonstrating due diligence across all supply chain links",
  "Be able to rapidly produce auditable operational records during NHVR investigations",
];

const supplyChainRoles = [
  {
    role: "Fleet Operator & Owner",
    obligation: "Responsible for safe vehicle maintenance, fatigue policies, and compliant driver scheduling.",
  },
  {
    role: "Scheduler & Dispatcher",
    obligation: "Must never set delivery timeframes, route expectations, or booking slots that necessitate speeding or fatigue breaches.",
  },
  {
    role: "Consignor & Client",
    obligation: "Must not impose contract conditions, commercial penalties, or loading slot delays that induce unsafe driving.",
  },
  {
    role: "Loader & Weighbridge Operator",
    obligation: "Must ensure vehicle mass limits, gross combination mass, axle configurations, and load restraint laws are strictly respected.",
  },
];

const helpCards = [
  {
    title: "Driver Work & Rest Break Logs",
    desc: "Drivers record pre-start checks and break durations in the mobile app. All logs are GPS-tagged, timestamped, and retained in cloud storage.",
    href: "/platform/break-and-rest-management",
    linkLabel: "Break & Rest Management",
  },
  {
    title: "Immutable Dispatch Audit Trail",
    desc: "Every job allocation, time modification, or rate change logs the user identity and exact second. Indisputable proof of safe scheduling.",
    href: "/platform/audit-trail",
    linkLabel: "Audit Trail Module",
  },
  {
    title: "Digital Dockets as Delivery Evidence",
    desc: "Weighbridge scale tickets and delivery slips are photographed and geocoded at pickup and drop-off, providing tamper-proof load proof.",
    href: "/solutions/digital-dockets",
    linkLabel: "Digital Dockets Workflow",
  },
  {
    title: "Licence & Insurance Expiry Vault",
    desc: "Driver licences, medicals, vehicle registrations, and subcontractor insurances are tracked with automated alerts before expiry.",
    href: "/platform/document-management",
    linkLabel: "Document Management",
  },
  {
    title: "Auditor-Ready Compliance Reports",
    desc: "Export comprehensive safety and dispatch records filtered by asset, driver, subcontractor, or date range ready for NHVR inspection.",
    href: "/platform/compliance",
    linkLabel: "Compliance Reporting",
  },
  {
    title: "Subcontractor Due Diligence Records",
    desc: "External subcontractor driver credentials, insurances, and load histories are preserved alongside internal company fleet records.",
    href: "/platform/subcontractor-management",
    linkLabel: "Subcontractor Management",
  },
];

const faqs = [
  {
    q: "What is the Heavy Vehicle National Law (HVNL) and who does it govern?",
    a: "The HVNL is the uniform national legislation governing heavy vehicles (gross vehicle mass over 4.5 tonnes) across NSW, QLD, VIC, SA, TAS, and the ACT. Administered by the National Heavy Vehicle Regulator (NHVR), it establishes statutory safety duties across all parties who influence transport tasks.",
  },
  {
    q: "Does Chain of Responsibility apply when using external subcontractors?",
    a: "Yes. Under the HVNL, engaging subcontractors does not outsource your safety duty. If your dispatchers schedule delivery times for a subcontractor that require them to speed or breach fatigue hours, your business can be prosecuted under CoR provisions. HaulageOps provides the documentation to prove reasonable steps were maintained.",
  },
  {
    q: "What records must an operator be able to produce during an NHVR audit?",
    a: "During an audit or safety investigation, operators are routinely required to produce driver work/rest records, vehicle maintenance logs, dispatch schedules, verified weighbridge dockets, and subcontractor insurance certificates. HaulageOps provides an exportable ledger of all these data points.",
  },
  {
    q: "Does HaulageOps replace an Electronic Work Diary (EWD)?",
    a: "HaulageOps includes built-in mobile break and rest recording as an operational safety and audit tool. For operators subject to formal Standard or Advanced Fatigue Management (AFM/BFM) accreditations, HaulageOps provides the record-keeping backbone while working alongside certified EWD devices.",
  },
];

export default function ChainOfResponsibilityPage() {
  return (
    <MainLayout showCta={false}>
      {/* 1. Hero Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-neutral-50/80 via-white to-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/solutions" className="hover:text-[#E8652B] transition-colors">Solutions</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Chain of Responsibility (AU)</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4">
              <Scale className="h-3.5 w-3.5" />
              Heavy Vehicle National Law (HVNL) · Australia
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.08]">
              Chain of Responsibility (CoR)
              <span className="block text-[#E8652B] mt-2">Compliance for Heavy Bulk Haulage.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl font-normal">
              Under Australian HVNL regulations, every party in the heavy transport supply chain — operators, schedulers, consignors, and loaders — shares legal responsibility for safety. HaulageOps automatically builds the tamper-proof digital records you need to demonstrate due diligence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/demo">
                <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-bold cursor-pointer shadow-sm">
                  Book a Compliance Walkthrough
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/solutions/audit-ready-operations">
                <Button size="lg" variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-bold">
                  Audit-Ready Operations
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

      {/* 3. Legal Notice Banner */}
      <section className="py-4 bg-orange-50/70 border-b border-orange-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-[#E8652B] shrink-0 mt-0.5" />
          <p className="text-xs text-neutral-700 leading-relaxed">
            <strong>Important Regulatory Notice:</strong> HaulageOps provides software tools to log, retain, and export operational safety data. This page is general operational guidance and does not constitute formal legal advice. Transport operators should consult qualified transport legal counsel to review their specific Chain of Responsibility safety management systems under the HVNL.
          </p>
        </div>
      </section>

      {/* 4. What is CoR & Supply Chain Table */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Statutory Duty</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
                CoR Under the HVNL: What Heavy Fleets Must Prove
              </h2>
              <div className="mt-6 space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                <p>
                  The Heavy Vehicle National Law makes safety accountability non-delegable. If an overloaded truck causes an incident, or a driver crashes due to fatigue caused by unrealistic scheduling deadlines, the managing director, dispatcher, and head contractor can all face substantial prosecution.
                </p>
                <p>
                  To defend against statutory penalties, an operator must prove they exercised &ldquo;reasonable steps&rdquo; — demonstrating that scheduling was realistic, driver break periods were logged, vehicle weights were verified, and documents were kept current.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {corRequirements.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Supply Chain Responsibilities Card */}
            <div className="lg:col-span-6">
              <div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#E8652B]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                  <span className="text-xs font-mono text-[#E8652B] font-bold uppercase">
                    Supply Chain Accountability
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    Shared Legal Duty
                  </span>
                </div>

                <div className="space-y-3">
                  {supplyChainRoles.map((r) => (
                    <div key={r.role} className="p-3.5 bg-neutral-800/80 rounded-xl border border-neutral-700">
                      <span className="text-[#E8652B] font-bold text-xs block mb-1">
                        {r.role}
                      </span>
                      <p className="text-neutral-300 text-xs leading-relaxed font-normal">
                        {r.obligation}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
                  <span>NHVR Compliance Framework</span>
                  <Link href="/demo" className="text-[#E8652B] font-bold hover:underline inline-flex items-center gap-1">
                    See Audit Tools <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How HaulageOps Creates the Evidence */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Automated Defense</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              The Records CoR Requires — Created Automatically
            </h2>
            <p className="mt-3 text-neutral-600 text-base">
              HaulageOps turns daily dispatching, driver mobile actions, and weighbridge dockets into an immutable defense ledger.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-neutral-200 rounded-2xl p-7 flex flex-col justify-between hover:border-[#E8652B]/70 transition-all shadow-xs"
              >
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed font-normal">{card.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <Link
                    href={card.href}
                    className="text-xs font-bold text-[#E8652B] hover:text-[#D05520] inline-flex items-center gap-1"
                  >
                    <span>{card.linkLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common Questions</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Chain of Responsibility FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border border-neutral-200 bg-neutral-50/50 rounded-2xl overflow-hidden shadow-xs"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-bold text-neutral-900 text-base list-none hover:bg-neutral-100/60 transition-colors">
                  <span>{faq.q}</span>
                  <ChevronRight className="h-5 w-5 text-neutral-400 shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed border-t border-neutral-200/60 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA Footer */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] mb-2 block">
              Protect Your Operation
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              See the compliance tools live in action.
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Book a 20-minute operational walkthrough. We'll show you how driver break logs, geofenced arrivals, and audit trails safeguard your fleet under the HVNL.
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
                Speak with Compliance Specialist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

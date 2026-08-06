import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Chain of Responsibility Compliance for Haulage Operators | HaulageOps",
  description:
    "Under the HVNL, CoR makes every party in the supply chain — including operators, schedulers and loaders — responsible for heavy vehicle safety. HaulageOps creates the records you need if you ever face an inquiry.",
};

const proofStrip = [
  "HVNL CoR applicable",
  "Tamper-proof audit trail",
  "Fatigue management records",
  "Driver work/rest logs",
  "Digital dockets as evidence",
  "Document retention built in",
];

const corRequirements = [
  "Do not cause or encourage drivers to exceed speed limits or work-hour limits",
  "Maintain records of driver work and rest times",
  "Ensure scheduled tasks are achievable within legal time limits",
  "Keep records demonstrating your safety practices",
  "Be able to produce records in the event of an inquiry or enforcement action",
];

const partyRows = [
  { party: "Operator", obligation: "Safe scheduling, fatigue management, vehicle maintenance" },
  { party: "Scheduler", obligation: "Do not set timelines that require breaching limits" },
  { party: "Consignor", obligation: "Do not set delivery demands that cause breaches" },
  { party: "Loader/Packer", obligation: "Ensure mass, dimension and load restraint compliance" },
];

const helpCards = [
  {
    title: "Driver Work & Rest Records",
    desc: "Drivers log break starts and ends from the app. Records are timestamped, job-linked and retained in the system. Available for export at any time.",
    href: "/platform/break-and-rest-management",
    linkLabel: "Break & Rest Management",
  },
  {
    title: "Job Scheduling Audit Trail",
    desc: "Every job is created, assigned and modified with a timestamp and user record. If a job timeline is changed, who changed it and when is recorded permanently.",
    href: "/platform/audit-trail",
    linkLabel: "Audit Trail",
  },
  {
    title: "Digital Dockets as Evidence",
    desc: "Every docket is captured digitally with timestamp, GPS data and job reference. Provides unambiguous delivery evidence if a load or timing is disputed.",
    href: "/solutions/digital-dockets",
    linkLabel: "Digital Dockets",
  },
  {
    title: "Document Management",
    desc: "Driver licences, vehicle registrations, subcontractor agreements and insurance certificates stored and expiry-tracked in one place. Exportable for regulatory review.",
    href: "/platform/document-management",
    linkLabel: "Document Management",
  },
  {
    title: "Compliance Reporting",
    desc: "Generate compliance reports by driver, vehicle, or date range. Useful for internal review and as evidence of proactive safety management practices.",
    href: "/platform/compliance",
    linkLabel: "Compliance Module",
  },
  {
    title: "Subcontractor Records",
    desc: "Subcontractor licence and insurance documents tracked alongside their job history. Know at any point what loads they ran and what documentation was current.",
    href: "/platform/subcontractor-management",
    linkLabel: "Subcontractor Management",
  },
];

const faqs = [
  {
    q: "What is the Heavy Vehicle National Law (HVNL)?",
    a: "The HVNL is the national legislation governing heavy vehicles in Australia (all states and territories except Western Australia and the Northern Territory). It covers vehicle standards, driver fatigue, mass and dimension limits, and Chain of Responsibility provisions. The NHVR (National Heavy Vehicle Regulator) administers the law.",
  },
  {
    q: "Does CoR apply to subcontractors?",
    a: "Yes. As the contracting operator, you may have CoR obligations in relation to subcontractors you engage — particularly if you set their schedules or delivery deadlines. The extent of your obligations depends on your role and level of influence. Seek legal advice specific to your operation.",
  },
  {
    q: "What records do I need to keep for CoR purposes?",
    a: "Requirements vary depending on your role and the type of load, but typically include: driver work and rest records, job scheduling records, vehicle maintenance records, mass and load documentation, and evidence of safety policies and procedures. HaulageOps maintains timestamped records of all job and driver activity automatically.",
  },
  {
    q: "Does HaulageOps replace a formal fatigue management system?",
    a: "No. HaulageOps provides break and rest logging as a record-keeping tool. For operators subject to Standard or Advanced fatigue management requirements under the HVNL, you should seek specific advice on your recordkeeping obligations. HaulageOps records can support a wider fatigue management system.",
  },
  {
    q: "Is the information on this page legal advice?",
    a: "No. The information on this page is general reference only. Chain of Responsibility obligations are complex and depend on your specific role in the supply chain. Always seek independent legal advice regarding your CoR obligations.",
  },
];

export default function ChainOfResponsibilityPage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb */}
      <div className="pt-24 pb-0 bg-[#FFF9F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B]">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/solutions" className="hover:text-[#E8652B]">Solutions</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Chain of Responsibility (AU)</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Australia · Heavy Vehicle National Law
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Chain of Responsibility Compliance for Haulage Operators
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Under the HVNL, CoR makes every party in the supply chain — including operators, schedulers and loaders — responsible for heavy vehicle safety. HaulageOps creates the records you need if you ever face an inquiry.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/solutions/audit-ready-operations">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Audit-Ready Operations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-[#0F172A] py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {proofStrip.map((item) => (
              <div key={item} className="flex flex-col items-center justify-center gap-1">
                <span className="text-white font-bold text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IMPORTANT NOTICE */}
      <div className="py-5 bg-[#FFF8EC] border-b border-[#F2C27D]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[#68410C] leading-relaxed">
            <strong>Important notice:</strong> HaulageOps is an operations management tool. The information on this page is provided for general reference only and is not legal advice. Chain of Responsibility obligations are complex and fact-specific. Operators should seek independent legal advice to understand their specific CoR obligations under the Heavy Vehicle National Law.
          </p>
        </div>
      </div>

      {/* WHAT IS CHAIN OF RESPONSIBILITY */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What is Chain of Responsibility?</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            CoR Under the HVNL: What Operators Need to Know
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                The Heavy Vehicle National Law (HVNL) Chain of Responsibility provisions extend safety obligations beyond the driver. Under CoR, any party in the supply chain that can influence a heavy vehicle driver&apos;s safety — including operators, schedulers, consignors, and loaders — has a duty of care.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                This means that as a haulage operator, you may be held responsible if your scheduling practices, payment structures, or operational demands contributed to a safety breach, even if you weren&apos;t in the cab.
              </p>
              <h3 className="mt-6 font-bold text-[#0F172A]">What CoR Requires of Operators</h3>
              <ul className="mt-4 space-y-3">
                {corRequirements.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {/* CoR party obligations visual */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
                <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                  CoR Party Obligations (Simplified)
                </div>
                <div className="p-4 sm:p-5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#1E293B] rounded-t-lg px-3 py-2 text-[#94A3B8] text-[10px] font-bold uppercase tracking-wider">Party</div>
                    <div className="bg-[#1E293B] rounded-t-lg px-3 py-2 text-[#94A3B8] text-[10px] font-bold uppercase tracking-wider">Key Obligation</div>
                    {partyRows.map((row, i) => (
                      <div key={row.party} className={`contents ${i % 2 === 0 ? "bg-[#111B2E]" : ""}`}>
                        <div className={`px-3 py-2.5 text-white text-[11px] font-bold border-t border-[#1E293B] ${i % 2 === 0 ? "bg-[#111B2E]" : "bg-[#0D1525]"}`}>{row.party}</div>
                        <div className={`px-3 py-2.5 text-[#94A3B8] text-[11px] border-t border-[#1E293B] ${i % 2 === 0 ? "bg-[#111B2E]" : "bg-[#0D1525]"}`}>{row.obligation}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-[#475569] mt-4">
                    This is a simplified summary. Seek legal advice for your specific obligations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW HAULAGEOPS HELPS */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">How HaulageOps Helps</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The Records CoR Requires — Created Automatically
          </h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            HaulageOps doesn&apos;t manage compliance for you. But it creates the accurate, timestamped, tamper-proof records that demonstrate you operated responsibly.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.desc}</p>
                <Link href={card.href} className="mt-3 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  {card.linkLabel} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently Asked Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Chain of Responsibility — common questions.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Want to see the compliance tools in action?</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Book a demo and we&apos;ll show you the audit trail, fatigue records and document management in HaulageOps.
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

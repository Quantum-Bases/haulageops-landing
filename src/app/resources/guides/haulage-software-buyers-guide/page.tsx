import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  BadgeDollarSign,
} from "lucide-react";

export const metadata = {
  title: "Haulage Software Buyer's Guide: How to Choose the Right Platform | HaulageOps",
  description:
    "A complete buyer's guide for bulk haulage operators evaluating dispatch and operations software — what to look for, the right questions to ask vendors, total cost of ownership, and a feature checklist.",
};

const requirements = [
  {
    title: "Dispatch & Job Management",
    p: "Is your primary problem creating, assigning and tracking jobs? Do you need a dispatch board that shows which trucks are where, who's free and what's scheduled for tomorrow?",
    callout: "This is the core of bulk haulage software. Every platform should handle this — test it thoroughly.",
  },
  {
    title: "Subcontractor Management",
    p: "Do you regularly use subcontractors? Can they accept jobs, submit dockets and receive allocations without being on your payroll system? Do you need to track their insurance and licence documents?",
    callout: "This is where many general platforms fall short. A dedicated subcontractor portal is a genuine differentiator.",
  },
  {
    title: "Billing & Accounting Integration",
    p: "Do you use Xero? How do invoices currently get created — manually from dockets, or automatically from the system? How much admin time does billing take each week?",
    callout: "If billing is your biggest admin bottleneck, the platform's billing module and Xero integration are critical requirements.",
  },
  {
    title: "Driver Communication",
    p: "Are you currently dispatching drivers via phone calls and WhatsApp? What information does a driver need — job location, load details, special instructions? What do they need to send back?",
    callout: "A driver app needs to be simple enough that your least tech-savvy driver will use it on day one.",
  },
  {
    title: "Compliance Records",
    p: "Do you have specific compliance obligations — fatigue management records, CoR documentation, document retention for audits? Or is this a \"nice to have\" rather than a current pain point?",
    callout: "Don't buy a compliance system if you need a dispatch system. Know which problem is most urgent.",
  },
  {
    title: "Client Visibility",
    p: "Do clients regularly ask for delivery updates, docket copies, or job summaries? Would a self-service client portal reduce your admin calls and build client confidence?",
    callout: "For operators with demanding construction or civil clients, a client portal can be a relationship differentiator.",
  },
];

const vendorQuestions = [
  {
    title: "Dispatch workflow",
    items: [
      "Show me how you create a job for tomorrow morning",
      "How do I see which trucks are available vs committed?",
      "Can I reassign a job mid-day if a truck breaks down?",
      "How does a driver receive the job?",
    ],
  },
  {
    title: "Subcontractor flow",
    items: [
      "Can a subcontractor accept a job without an app?",
      "How does a subcontractor submit a docket?",
      "Can I see their loads in real time?",
      "How does their invoice reconcile against my records?",
    ],
  },
  {
    title: "Billing & Xero",
    items: [
      "Show me how an invoice gets created from completed dockets",
      "What does the invoice look like in Xero — line items, account codes?",
      "What happens if a docket weight was entered wrong?",
      "Can I invoice per tonne, per load and per hour for different clients?",
    ],
  },
  {
    title: "Implementation & support",
    items: [
      "What does implementation include and how long does it take?",
      "Who is our account manager and how do we reach them?",
      "What is the total cost — setup, monthly, additional users?",
      "What does migration from our current system involve?",
    ],
  },
];

const tcoItems = [
  { strong: "Setup/implementation fee", desc: "One-time cost to configure the system for your operation" },
  { strong: "Monthly subscription", desc: "Per-truck or per-user pricing as you scale" },
  { strong: "Training time", desc: "Time for your team and drivers to get up to speed" },
  { strong: "Hardware", desc: "Some platforms require in-cab devices or telematics hardware" },
  { strong: "Integration costs", desc: "Does Xero integration cost extra? Any API fees?" },
  { strong: "Ongoing support", desc: "What support level is included vs premium?" },
];

const redFlags = [
  "Demo uses sample data only — won't show you a scenario from your actual operation",
  "Can't explain the Xero integration in concrete terms — just says \"it integrates\"",
  "Subcontractor management requires subcontractors to buy their own subscription",
  "Hidden per-user fees that make the system unaffordable once you add drivers and subcontractors",
  "Requires expensive in-cab hardware — adds cost and driver resistance",
  "Vague on implementation timeline — \"it varies\" without a concrete range",
  "Support is only available via a ticket system with no named account manager",
];

export default function HaulageSoftwareBuyersGuidePage() {
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
            <span className="text-[#0F172A] font-medium">Haulage Software Buyer's Guide</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Guide · Software Evaluation
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Haulage Software Buyer's Guide: Choosing the Right Platform for Your Operation
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Most haulage software decisions go wrong in the same two ways: buying a generic platform that doesn't fit the way you dispatch, or buying more system than you need. This guide helps you define your requirements and ask the right questions.
          </p>
        </div>
      </section>

      {/* STEP 1: REQUIREMENTS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">Step 1: Define Your Core Requirements</h2>
          <p className="mt-3 text-[#556671] text-sm leading-relaxed max-w-2xl">
            Before you talk to any vendor, be clear on what your operation actually needs. Not what sounds impressive — what you'll use every day.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p}</p>
                <p className="mt-4 text-xs font-bold text-[#1F8F5F]">{card.callout}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUESTIONS FOR VENDORS */}
      <section className="py-16 bg-[#0D1525]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">The Questions to Ask Every Vendor</h2>
          <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed max-w-2xl">
            Test these in a demo — not from a spec sheet. What you see the software actually do is the only thing that counts.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {vendorQuestions.map((group) => (
              <div key={group.title} className="bg-[#0F172A]/60 border border-[#1E293B] rounded-2xl p-6">
                <h3 className="font-bold text-white">{group.title}</h3>
                <ul className="mt-3 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#CBD5E1] leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TCO + RED FLAGS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-2">
                <BadgeDollarSign className="h-6 w-6 text-[#E8652B]" />
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">Total Cost of Ownership: What to Calculate</h2>
              </div>
              <p className="mt-3 text-sm text-[#556671] leading-relaxed">
                The sticker price of haulage software is rarely the full cost. Before committing, calculate:
              </p>
              <ul className="mt-5 space-y-3">
                {tcoItems.map((item) => (
                  <li key={item.strong} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle2 className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span><strong className="text-[#0F172A]">{item.strong}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-[#556671] leading-relaxed">
                HaulageOps pricing: from $1,500 standard setup, monthly per-truck licensing. No hardware required.{" "}
                <Link href="/pricing" className="text-[#0F5FAE] hover:underline font-medium">See full pricing →</Link>
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-[#E8652B]" />
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">Red Flags During the Evaluation</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {redFlags.map((flag) => (
                  <li key={flag} className="flex items-start gap-2 text-sm text-[#334155]">
                    <AlertTriangle className="h-4 w-4 text-[#B45309] shrink-0 mt-0.5" />
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to evaluate HaulageOps?</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Book a 20-minute demo and we'll answer every question in this guide live — with your operation in mind.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/resources/checklists/haulage-software-requirements" className="inline-flex items-center gap-1 text-sm text-[#F8FAFC] hover:text-[#E8652B] font-medium">
              Download the checklist <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

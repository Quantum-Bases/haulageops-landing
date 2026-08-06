import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Implementation & Onboarding | HaulageOps",
  description:
    "Most haulage operators go live on HaulageOps within 2–4 weeks. Our team handles data migration, driver app onboarding and Xero connection. See the full implementation process.",
};

const proofItems = [
  "Standard setup from $1,500",
  "2–4 week go-live",
  "Dedicated account manager",
  "Driver app training included",
  "Data migration support",
  "Xero connection included",
];

const processSteps = [
  {
    week: "WEEK 1",
    title: "Discovery & Configuration",
    p: "We map your current operation — clients, rates, job types, subcontractors, document templates. Your account manager configures HaulageOps to match how you work today.",
  },
  {
    week: "WEEK 1–2",
    title: "Data Migration",
    p: "We import existing data — client list, rate cards, fleet register, driver records, subcontractor details. For spreadsheet operators, we handle the mapping and import.",
  },
  {
    week: "WEEK 2",
    title: "Team Training",
    p: "Live training session for your dispatch team covering job creation, driver assignment, subcontractor management, billing, and reporting. Recorded for future reference.",
  },
  {
    week: "WEEK 2–3",
    title: "Driver App Rollout",
    p: "Drivers install the HaulageOps app on their own devices (iOS or Android). We provide step-by-step guides and your account manager can run a driver briefing session.",
  },
  {
    week: "WEEK 3",
    title: "Parallel Run",
    p: "Run HaulageOps alongside your existing system for one week. This gives your team confidence before cutting over and lets us catch any edge cases in your workflow.",
  },
  {
    week: "WEEK 3–4",
    title: "Go Live",
    p: "Cut over to HaulageOps as your primary system. Your account manager remains available for the first two weeks post-launch with daily check-ins if needed.",
  },
];

const standardItems = [
  "Dedicated account manager through setup and go-live",
  "Platform configuration to match your operation",
  "Data import — clients, rates, drivers, fleet",
  "Live training session for dispatch team",
  "Driver app installation guides",
  "Xero OAuth integration and invoice mapping",
  "One parallel-run week with support",
  "30-day post-launch check-in period",
];

const enterpriseItems = [
  "Extended discovery and workflow mapping",
  "Custom document templates (dockets, delivery slips)",
  "Multi-site or multi-entity configuration",
  "Full data migration from existing TMS or ERP",
  "On-site driver training if required",
  "Client portal configuration and client onboarding",
  "90-day dedicated support period post-launch",
];

const faqs = [
  {
    q: "Do we need to stop operating during implementation?",
    a: "No. The parallel-run approach means you keep using your existing system while HaulageOps is being set up. The cutover is a deliberate single moment — typically at the start of a new billing period — not a gradual migration that disrupts live operations.",
  },
  {
    q: "What do we need to provide?",
    a: "A spreadsheet or export of your client list, rate card, fleet register, and driver details is enough to start. Your account manager provides a simple template. We don't need access to your existing software — just the underlying data.",
  },
  {
    q: "How does driver onboarding work?",
    a: "Drivers download the HaulageOps app and log in using a code generated from your Admin Portal. Most drivers are fully operational within 30 minutes. We provide a one-page quick-start guide you can share with your drivers.",
  },
  {
    q: "What if subcontractors don't want to use an app?",
    a: "The subcontractor portal is browser-based. Subcontractors receive a job notification via SMS or email and can accept and submit dockets from any browser without installing anything.",
  },
  {
    q: "What happens after go-live?",
    a: "Your account manager remains your primary contact. Standard support is available via email with one business day response. We run quarterly reviews to make sure HaulageOps is working well for your operation.",
  },
];

export default function ImplementationPage() {
  return (
    <MainLayout showCta={false}>
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#FFF9F5] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Implementation</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4">
            Getting Started
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1]">
            Live in 2–4 Weeks, Without Disrupting Your Operation
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed">
            HaulageOps is designed for working operators. Our implementation team handles configuration, data migration and driver onboarding — so you keep running jobs while we set up the system.
          </p>
        </div>
      </section>

      <section className="bg-[#0D1525] py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {proofItems.map((item) => (
            <span key={item} className="text-sm text-[#CBD5E1] font-medium">{item}</span>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Implementation Process</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">The Implementation Process</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-2xl">A structured 4-phase approach that fits around your operational schedule.</p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.week} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#E8652B] bg-[#FFF0E6]">{step.week}</span>
                <h3 className="mt-3 text-lg font-bold text-[#0F172A]">{step.title}</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">{step.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Standard Implementation</span>
              <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">What's Included ($1,500)</h3>
              <ul className="mt-4 space-y-2.5">
                {standardItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <Check className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/demo">
                  <Button className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                    Book a Demo <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Enterprise Implementation</span>
              <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">Complex Fleet Setup (~$6,500)</h3>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                For larger fleets, complex rate structures, or existing TMS migrations. Includes everything in standard, plus:
              </p>
              <ul className="mt-4 space-y-2.5">
                {enterpriseItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <Check className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/contact">
                  <Button variant="outline" className="text-[#0F172A] font-semibold">
                    Talk to Us <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Implementation FAQs</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">Implementation FAQs</h2>
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

      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to get started?</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Book a demo and we'll talk through implementation for your specific fleet size and operation.
            </p>
          </div>
          <div className="shrink-0">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Check,
  ArrowRight,
  Sparkles,
  Calendar,
  CheckCircle2,
  FileSpreadsheet,
  Headphones,
  Laptop,
  Smartphone,
  ShieldCheck,
  Building2,
  Users2,
} from "lucide-react";

export const metadata = {
  title: "Implementation & Fleet Onboarding | HaulageOps",
  description:
    "Most bulk haulage operators go live on HaulageOps within 2 to 4 weeks with zero operational downtime. Our team handles data migration, driver onboarding, and 2-way Xero configuration.",
};

const proofBadges = [
  "2–4 Week Target Go-Live",
  "Zero Operational Disruption",
  "Full Data Migration Support",
  "Dedicated Implementation Lead",
  "Xero OAuth2 Sync Included",
  "Driver App Guides & Briefings",
];

const processPhases = [
  {
    phase: "PHASE 01",
    timeline: "Weeks 1–2",
    title: "Operational Discovery & Rule Mapping",
    desc: "We analyze your existing workflow — client agreements, complex per-tonne rate structures, subcontractor pay rules, tip-site requirements, and invoice schedules. Your dedicated implementation lead builds your configuration to match exactly how you operate.",
    deliverables: ["Fleet & driver profile templates", "Custom rate card mapping", "Subcontractor terms setup"],
  },
  {
    phase: "PHASE 02",
    timeline: "Weeks 2–3",
    title: "Data Migration & Accounting Setup",
    desc: "You hand us your existing spreadsheets, CSV exports, or legacy TMS extracts. We clean, validate, and import your client registry, vehicle inventory, driver inductions, and subcontractor profiles, then connect your Xero organisation via OAuth2.",
    deliverables: ["Full customer directory import", "Two-way Xero account mapping", "Historical rate card loading"],
  },
  {
    phase: "PHASE 03",
    timeline: "Weeks 3–4",
    title: "Team Training & Driver Rollout",
    desc: "Hands-on, interactive training for dispatchers and office staff covering daily allocation, subbie delegation, and billing. We supply simple, visual quick-start guides for drivers to download the mobile app and log their first loads.",
    deliverables: ["Live dispatcher walkthrough session", "Driver mobile quick-start guides", "Subcontractor portal invite links"],
  },
  {
    phase: "PHASE 04",
    timeline: "Week 4+",
    title: "Parallel Run & Confident Cutover",
    desc: "We run HaulageOps alongside your existing setup for 5 to 7 days to give your team complete confidence before switching. Your implementation lead remains on standby with rapid check-ins during your first end-of-week billing run.",
    deliverables: ["Parallel reconciliation check", "Official go-live transition", "30-day dedicated hypercare support"],
  },
];

const standardItems = [
  "Dedicated Implementation Specialist guiding your team end-to-end",
  "Full data migration assistance from spreadsheets, CSVs, or legacy software",
  "Setup of customized per-tonne, hourly, and per-load rate cards",
  "Subcontractor portal configuration with zero per-seat fees",
  "Direct two-way Xero OAuth2 integration and invoice line mapping",
  "Live video training session for dispatchers and office administrators",
  "Step-by-step driver onboarding guide for iOS and Android app install",
  "1-week parallel run support followed by 30-day priority hypercare",
];

const enterpriseItems = [
  "Everything included in Standard Fleet Onboarding",
  "Extended discovery for multi-depot, multi-branch, or multi-entity fleets",
  "Custom delivery docket and proof-of-delivery PDF templates",
  "High-volume data migration from existing enterprise ERP/TMS databases",
  "Client portal branded onboarding for your major head contractors",
  "Optional on-site dispatch and driver training sessions",
  "Custom SLA agreements and 90-day executive hypercare period",
];

const faqs = [
  {
    q: "Do we need to stop running trucks while implementing HaulageOps?",
    a: "Absolutely not. Our parallel-run methodology ensures you keep dispatching through your existing setup while our team configures HaulageOps in the background. The final cutover is a deliberate, smooth transition — typically at the start of a fresh billing week.",
  },
  {
    q: "What format does our current data need to be in?",
    a: "Simple Excel or Google Sheets spreadsheets are completely fine. We supply clean intake templates for your clients, vehicle assets, driver inductions, and rate cards. Our team handles the sanitisation and database import so you don't have to re-type records.",
  },
  {
    q: "How difficult is it for truck drivers to learn the mobile app?",
    a: "The HaulageOps driver app was designed specifically for drivers with varying tech comfort. It takes less than 5 minutes to learn: open the job, tap 'En Route', tap 'On Site', snap a photo of the weighbridge docket, and collect a signature. It works 100% offline in quarry pits.",
  },
  {
    q: "Do external subcontractors have to install complicated software?",
    a: "No. The Subcontractor Portal is a lightweight, responsive web application. Subbies receive a secure SMS or email link to view assigned loads, accept jobs, view Mapbox routes, and upload weighbridge dockets from any smartphone browser without installing anything.",
  },
  {
    q: "What ongoing support is provided after go-live?",
    a: "Every customer has direct access to our specialist support team with 1 business day email and phone turnaround, alongside continuous platform updates, automatic cloud backups, and scheduled quarterly operational reviews.",
  },
];

export default function ImplementationPage() {
  return (
    <MainLayout showCta={false}>
      {/* 1. Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-neutral-50/80 via-white to-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Implementation</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              White-Glove Fleet Onboarding
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.08]">
              Live in 2 to 4 weeks.
              <span className="block text-[#E8652B] mt-2">Zero disruption to daily dispatch.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl font-normal">
              You shouldn't have to pause your fleet to modernise your software. Our dedicated implementation team handles data migration, rate card building, and driver training so your trucks keep rolling.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/demo">
                <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-bold cursor-pointer shadow-sm">
                  Book an Implementation Walkthrough
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-bold">
                  Fleet Scope Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Proof Strip */}
      <section className="bg-neutral-900 py-6 border-y border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {proofBadges.map((badge) => (
            <span key={badge} className="text-xs sm:text-sm text-neutral-300 font-medium flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E8652B]" />
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* 3. Phased Rollout Blueprint */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Roadmap</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Our 4-Phase Operational Rollout
            </h2>
            <p className="mt-3 text-neutral-600 text-base">
              A structured, low-stress implementation process proven with bulk haulage fleets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processPhases.map((phase) => (
              <div
                key={phase.phase}
                className="bg-neutral-50/50 rounded-2xl p-7 border border-neutral-200 shadow-xs flex flex-col justify-between hover:border-[#E8652B]/60 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-[#E8652B] bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-full">
                      {phase.phase}
                    </span>
                    <span className="text-xs font-mono text-neutral-500 font-medium">
                      {phase.timeline}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 leading-snug">{phase.title}</h3>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">{phase.desc}</p>
                </div>

                <div className="mt-6 pt-5 border-t border-neutral-200/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block mb-2">
                    Key Outcomes:
                  </span>
                  <ul className="space-y-1.5">
                    {phase.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-neutral-700">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 font-bold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Implementation Scopes (Zero False Prices) */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Structured Support</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Tailored Onboarding for Every Fleet Size
            </h2>
            <p className="mt-3 text-neutral-600 text-base">
              Every implementation includes hands-on setup, custom rate card mapping, and training tailored to your fleet.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard Onboarding */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] block mb-2">
                  Growth & Established Fleets
                </span>
                <h3 className="text-2xl font-black text-neutral-900">Standard Fleet Onboarding</h3>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  Ideal for operators running 15 to 40 vehicles looking to transition off spreadsheets and WhatsApp quickly without hiring technical consultants.
                </p>

                <div className="mt-8 pt-6 border-t border-neutral-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-4">
                    What's Included as Standard:
                  </span>
                  <ul className="space-y-3">
                    {standardItems.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-neutral-100">
                <Link href="/demo">
                  <Button className="w-full bg-[#E8652B] hover:bg-[#D05520] text-white font-bold py-3 shadow-xs">
                    Discuss Standard Onboarding
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Enterprise Onboarding */}
            <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-10 border border-neutral-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E8652B]/10 rounded-full blur-3xl pointer-events-none" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] block mb-2">
                  Large Fleets & Multi-Depot
                </span>
                <h3 className="text-2xl font-black text-white">Enterprise & Custom Scope</h3>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                  Designed for heavy hauliers running 50+ assets, complex multi-entity companies, or fleets migrating off legacy on-premise TMS databases.
                </p>

                <div className="mt-8 pt-6 border-t border-neutral-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-4">
                    Everything in Standard, plus:
                  </span>
                  <ul className="space-y-3">
                    {enterpriseItems.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2 className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-neutral-800">
                <Link href="/contact">
                  <Button className="w-full bg-white text-neutral-900 hover:bg-neutral-100 font-bold py-3 shadow-xs">
                    Request Enterprise Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Implementation Answers</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Frequently Asked Implementation Questions
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

      {/* 6. CTA Footer */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] mb-2 block">
              Start with Certainty
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Plan your 2-to-4 week cutover today.
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Book a 20-minute operational walkthrough. We'll map your existing tools and chart a seamless transition timeline tailored to your fleet.
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
                Speak with Implementation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

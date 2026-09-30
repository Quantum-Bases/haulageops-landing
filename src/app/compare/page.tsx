import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Shield,
  Layers,
  Users,
  Building,
  Scale,
  Check,
  X,
  FileText,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "Compare Haulage Software — HaulageOps vs Alternatives | HaulageOps",
  description:
    "Objective, operator-grounded comparisons between HaulageOps and alternatives — spreadsheets, Allotrac, MyTrucking, Mandata and generic TMS platforms.",
};

const proofBadges = [
  "Purpose-Built for Bulk Haulage",
  "5 Native Portals Around 1 Job Record",
  "Dedicated Subcontractor Portal Included",
  "Bi-Directional Xero Accounting Sync",
  "Zero Per-Seat Fees for External Subbies",
  "Tailored Fleet Onboarding Support",
];

const approachPoints = [
  "Subcontractor coordination: whether subbies get their own portal or admin re-types everything",
  "Client transparency: true self-service access to live dockets vs passive tracking links",
  "Commercial rating depth: separate client charge rates and subcontractor pay rates on one load",
  "Offline resilience: mobile driver apps engineered for deep quarry basins and remote civil sites",
  "Transparent commercial scope: full platform access without surprise add-on gates",
  "Honest fit assessment: naming exactly when an alternative system is better suited",
];

const comparisons = [
  {
    tag: "Most Common Starting Point",
    title: "HaulageOps vs Spreadsheets & WhatsApp",
    href: "/compare/haulageops-vs-spreadsheets",
    desc: "Spreadsheets and WhatsApp are free and familiar, but they collapse when juggling 15+ trucks, lost paper dockets, client phone calls, and manual Xero re-entry.",
    points: [
      "When it makes operational sense to stay on spreadsheets",
      "Where 10+ trucks and external subbies break manual sheets",
      "How your existing client and rate data imports seamlessly",
    ],
    cta: "Read Spreadsheet Comparison",
  },
  {
    tag: "Australian Heavy Transport",
    title: "HaulageOps vs Allotrac",
    href: "/compare/haulageops-vs-allotrac",
    desc: "Both serve the Australian bulk transport sector. The structural difference: Allotrac requires dispatch to manage subbies on their behalf; HaulageOps provides subbies their own free portal to accept jobs and upload dockets directly.",
    points: [
      "Subcontractor self-service vs admin-heavy re-entry",
      "Per-vehicle pricing structures vs flexible fleet licensing",
      "Client portal: live signed dockets, rate cards, and invoice history",
    ],
    cta: "Read Allotrac Comparison",
  },
  {
    tag: "AU / NZ Mixed Fleets",
    title: "HaulageOps vs MyTrucking",
    href: "/compare/haulageops-vs-mytrucking",
    desc: "MyTrucking is a horizontal transport system covering livestock, timber, and rural freight. Its job-sharing only works if your subbie is also a paying MyTrucking user. HaulageOps subbie portal works for any contractor for free.",
    points: [
      "Horizontal sector spread vs deep bulk haulage focus",
      "Walled-garden subbie networks vs open subcontractor portal",
      "Dual rate cards for complex per-tonne bulk movements",
    ],
    cta: "Read MyTrucking Comparison",
  },
  {
    tag: "Enterprise Incumbents",
    title: "HaulageOps vs Mandata & Legacy TMS",
    href: "/compare/haulageops-vs-mandata",
    desc: "Legacy enterprise TMS platforms are feature-heavy but take 6–12 months to deploy and carry steep consulting fees. HaulageOps delivers faster time-to-value for growing mid-market operators.",
    points: [
      "Modern agile cloud architecture vs legacy client-server systems",
      "2 to 4-week structured onboarding vs multi-month consultancy",
      "Intuitive driver and dispatcher adoption without steep learning curves",
    ],
    cta: "Read Enterprise Comparison",
  },
];

const frameworkCards = [
  {
    title: "1. Subcontractor Coordination Architecture",
    desc: "How do your external owner-drivers and subbies interact with the system? Do they get a dedicated portal, or does your office spend all day re-typing information on their behalf?",
    questions: [
      "Do subbies get their own authenticated login?",
      "Can subbies accept/decline work and upload dockets without buying a licence?",
      "Can you generate automated RCTIs from verified subbie loads?",
    ],
  },
  {
    title: "2. Client Self-Service & Visibility",
    desc: "What can your clients actually see? An automated tracking email is not a client portal. Can your head contractor download verified signed dockets without phoning dispatch?",
    questions: [
      "Do clients have self-service access to historical signed dockets?",
      "Can clients review live job progress and delivered tonnages?",
      "Are agreed rate schedules visible to avoid invoice disputes?",
    ],
  },
  {
    title: "3. Two-Sided Commercial Rating",
    desc: "Does the system support charging the client per-tonne while paying the subcontractor hourly or per-load on the exact same run?",
    questions: [
      "Does the job record hold separate client charge and subbie pay rates?",
      "Does verified field data flow straight into Xero without double-keying?",
      "Can you view real-time gross profit margins before sending invoices?",
    ],
  },
  {
    title: "4. Driver Mobile Resilience",
    desc: "What happens when your trucks enter deep quarry pits, rural corridors, or basement excavations with zero mobile reception?",
    questions: [
      "Does the driver app work 100% offline without dropping data?",
      "Can drivers take photo dockets and collect customer signatures offline?",
      "Does data auto-sync to dispatch the moment cellular signal returns?",
    ],
  },
];

const faqs = [
  {
    q: "How do I know if HaulageOps is worth evaluating for our fleet?",
    a: "HaulageOps is designed specifically for bulk haulage, earthworks, and tipper operators managing 15 to 80+ vehicles with a mix of company trucks and external subcontractors. If you run under 5 trucks with simple fixed routes and no subcontractors, spreadsheets may remain sufficient. If you run parcel logistics or 3PL warehousing, we will tell you upfront that our platform is not built for your workflow.",
  },
  {
    q: "Are the comparison pages on this website objective?",
    a: "While written by HaulageOps, we deliberately avoid vague marketing jargon and ground all comparisons in verifiable architectural differences — such as whether subcontractors get free logins, whether the driver app works offline, and whether two-sided rate cards exist natively. We also explicitly outline the scenarios where competing platforms are better suited.",
  },
  {
    q: "Can we migrate our current clients, rate cards, and fleet records?",
    a: "Yes. Our structured onboarding program includes full data ingestion. Our team formats and imports your client directories, vehicle registers, driver inductions, subcontractor profiles, and complex rate card matrices directly from your spreadsheets or export files.",
  },
  {
    q: "What actually happens during a HaulageOps demo?",
    a: "A focused 20-minute operational session. In the first 10 minutes, we map your current fleet mix, subcontractor setup, and primary operational bottlenecks. In the remaining 10 minutes, we walk through the exact screens that solve those bottlenecks. If the platform is not a strong fit for your operation, we will tell you honestly.",
  },
  {
    q: "What if we are evaluating a system not listed here?",
    a: "Book a 20-minute discovery call and mention the vendor you are reviewing. We will provide an objective operational comparison based on your specific fleet requirements.",
  },
];

export default function ComparePage() {
  return (
    <MainLayout showCta={false}>
      {/* 1. Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-neutral-50/80 via-white to-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Compare Systems</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4">
              <Scale className="h-3.5 w-3.5" />
              Objective Software Comparisons
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.08]">
              Choosing haulage software?
              <span className="block text-[#E8652B] mt-2">Start with an honest operational comparison.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl font-normal">
              Most vendor comparison pages score every category in their own favour. We take an operator-first approach: naming where each tool genuinely excels, identifying where it breaks under bulk haulage conditions, and letting you decide what fits your fleet.
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
          {proofBadges.map((badge) => (
            <span key={badge} className="text-xs sm:text-sm text-neutral-300 font-medium flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E8652B]" />
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* 3. Our Approach to Comparisons */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Our Philosophy</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
                What a genuine, fair software evaluation looks like.
              </h2>
              <div className="mt-6 space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                <p>
                  Transport management software touches dispatch, fleet safety, driver retention, client trust, and cash flow. Making the wrong choice leads to wasted capital, administrative disruption, and an exhausted team.
                </p>
                <p>
                  We don't believe in generic checkmark grids where every box is green. On every comparison page, we evaluate software through the lens of heavy bulk haulage: whether the driver app functions in deep quarries, whether external subcontractors are charged seat fees, and whether dual client-versus-subbie rate cards are supported natively.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-neutral-50 rounded-2xl p-7 border border-neutral-200 shadow-xs">
                <h3 className="text-base font-bold text-neutral-900 mb-4">
                  The Six Core Dimensions We Evaluate:
                </h3>
                <ul className="space-y-3">
                  {approachPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                      <CheckCircle2 className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Comparison Cards Grid */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Platform Teardowns</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Select an Alternative to Compare
            </h2>
            <p className="mt-3 text-neutral-600 text-base">
              Detailed architectural comparisons breaking down workflows, pricing models, and sector focus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {comparisons.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-xs flex flex-col justify-between hover:border-[#E8652B]/70 transition-all"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8652B] block mb-2">
                    {card.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    <Link href={card.href} className="hover:text-[#E8652B] transition-colors">
                      {card.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {card.desc}
                  </p>

                  <div className="mt-6 pt-5 border-t border-neutral-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-2.5">
                      Key Analysis Areas:
                    </span>
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

                <div className="mt-8 pt-5 border-t border-neutral-100">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E8652B] hover:text-[#D05520]"
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Honest Fit Commitment & Intake Simulation */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Our Direct Commitment</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
                If HaulageOps isn't the right fit, we will tell you upfront in the first 10 minutes.
              </h2>
              <div className="mt-6 space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                <p>
                  Some transport operators discover during our discovery calls that their setup — e.g. 3 trucks on flat recurring runs without subcontractors — does not warrant an enterprise bulk haulage operating platform.
                </p>
                <p>
                  We would much rather have that frank discussion immediately than onboard a fleet that doesn't experience transformative value. Every walkthrough begins by evaluating your fleet size, subcontractor reliance, rate complexity, and existing software friction.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/demo">
                  <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-bold">
                    Book an Honest Operational Walkthrough
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Interactive Intake Framework Box */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-neutral-900 border border-neutral-800 text-white p-7 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E8652B]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
                    <span className="text-xs font-mono text-neutral-300 ml-2">Operator Discovery Intake</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    Step 1 of Walkthrough
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-neutral-800/90 rounded-xl border border-neutral-700">
                    <div className="text-neutral-400 text-[10px]">Q1: FLEET & SUBBIE COMPOSITION</div>
                    <div className="text-white font-semibold mt-0.5">24 Owned Tippers • 16 Regular Subcontractors</div>
                  </div>

                  <div className="p-3 bg-neutral-800/90 rounded-xl border border-neutral-700">
                    <div className="text-neutral-400 text-[10px]">Q2: PRIMARY FRICTION POINT</div>
                    <div className="text-white font-semibold mt-0.5">WhatsApp dispatch chaos & 3-week invoice turnaround</div>
                  </div>

                  <div className="p-3 bg-neutral-800/90 rounded-xl border border-neutral-700">
                    <div className="text-neutral-400 text-[10px]">Q3: RATE CARD COMPLEXITY</div>
                    <div className="text-white font-semibold mt-0.5">Per-tonne client charge vs hourly subbie pay rates</div>
                  </div>

                  <div className="p-3.5 bg-emerald-950/40 rounded-xl border border-emerald-800/60 flex items-center justify-between">
                    <div>
                      <div className="text-emerald-400 text-[10px] font-bold">ASSESSMENT RESULT</div>
                      <div className="text-white font-bold text-xs mt-0.5">Strong Strategic Fit for HaulageOps</div>
                    </div>
                    <Check className="h-5 w-5 text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Evaluation Framework (4 Cards) */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Evaluation Framework</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Questions to Ask Any Transport Software Vendor
            </h2>
            <p className="mt-3 text-neutral-600 text-base">
              Take these four critical questions into every vendor presentation to evaluate real operational capability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {frameworkCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-7 border border-neutral-200 shadow-xs">
                <h3 className="text-lg font-bold text-neutral-900">{card.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">{card.desc}</p>
                <div className="mt-5 pt-4 border-t border-neutral-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8652B] block mb-2">
                    Key Questions to Probe:
                  </span>
                  <ul className="space-y-2">
                    {card.questions.map((q) => (
                      <li key={q} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Got Questions?</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Common Questions About Comparing Haulage Software
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

      {/* 8. Final CTA Footer */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] mb-2 block">
              Still Evaluating?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Talk with an operator who understands your fleet.
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              We'll walk through your exact operation, current tools, and bottlenecks. If HaulageOps isn't the best fit, we will tell you straight.
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
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

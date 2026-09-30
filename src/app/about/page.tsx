import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Check,
  ArrowRight,
  Shield,
  Layers,
  Users,
  Building2,
  Smartphone,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  MapPin,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "About HaulageOps — Built on 40 Years of Bulk Haulage Heritage",
  description:
    "HaulageOps was built from the ground up by people who lived bulk haulage and construction logistics from the inside. 40 years of operational experience powering one unified platform.",
};

const proofStats = [
  { value: "40+ Years", label: "Bulk haulage operational experience behind the platform" },
  { value: "5 Portals", label: "Purpose-built role portals around one live job record" },
  { value: "100% Focused", label: "Dedicated strictly to bulk haulage, earthworks & tippers" },
  { value: "Operator-First", label: "Roadmap guided by daily dispatchers, not venture capital" },
];

const builtForItems = [
  "Bulk haulage operators managing owned and subcontracted fleets",
  "Fleets of 15 to 80+ vehicles with diverse capacity types",
  "Earthworks, civil construction, quarry and aggregate operations",
  "High-frequency, short-haul tipper movements and site cartage",
  "Operations juggling separate client charge rates and subcontractor pay rates",
  "Businesses requiring rapid docket-to-invoice reconciliation in Xero",
];

const notBuiltForItems = [
  "E-commerce parcel delivery & courier networks",
  "3PL pallet warehousing and pick-and-pack facilities",
  "International air and ocean freight forwarding",
  "Long-haul interstate dry-van general freight",
];

const differenceCards = [
  {
    icon: Users,
    title: "Native Subcontractor Portal — Zero Extra Licences",
    desc: "Most systems force subcontractors to buy their own software licence before they can receive work. In HaulageOps, the subcontractor portal is fully included. Your external subbies receive a dedicated web portal to accept jobs, view maps, update progress, and upload dockets directly — with zero cost to them and zero seat penalties to you.",
    linkHref: "/platform/subcontractor-portal",
    linkText: "Subcontractor Portal details",
  },
  {
    icon: Building2,
    title: "Dedicated Client Portal with Live Dockets & Invoices",
    desc: "Give major head contractors, civil builders, and quarry clients a private self-service dashboard. Clients see their live job progress, instant proof-of-delivery photos, verified dockets, agreed rate schedules, and invoice histories — drastically cutting phone interruptions to your dispatch team.",
    linkHref: "/platform/client-portal",
    linkText: "Client Portal details",
  },
  {
    icon: FileText,
    title: "Two-Sided Commercials Built In Standard",
    desc: "Every bulk haulage job carries two distinct financial sides: what you charge the client, and what you pay the subcontractor. HaulageOps handles per-tonne client charges alongside per-load or hourly subcontractor pay on the exact same load — auto-generating RCTIs and syncing seamlessly to Xero.",
    linkHref: "/platform/rate-management",
    linkText: "Rate Management details",
  },
  {
    icon: Smartphone,
    title: "Offline-First Driver App for Quarry Pits & Remote Corridors",
    desc: "Quarry bottoms, civil development sites, and rural corridors routinely lose mobile signal. The HaulageOps iOS and Android driver app operates seamlessly without connectivity — capturing timestamps, signatures, and docket photos locally, then auto-syncing the moment the truck regains signal.",
    linkHref: "/platform/driver-app",
    linkText: "Driver App details",
  },
];

const roadmapItems = [
  {
    feature: "Admin & Dispatch Board (5 Portals)",
    category: "Core Operations",
    status: "Live & Deployed",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    feature: "Driver Mobile App (iOS & Android)",
    category: "Driver Mobility",
    status: "Live & Deployed",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    feature: "Subcontractor Portal (Job delegation & RCTI)",
    category: "Contractor Coordination",
    status: "Live & Deployed",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    feature: "Client Self-Service Portal & Dockets",
    category: "Client Experience",
    status: "Live & Deployed",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    feature: "Xero 2-Way Sync (OAuth2, Invoicing & Bills)",
    category: "Accounting",
    status: "Live & Deployed",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    feature: "Hardware Telematics / GPS Integration Layer",
    category: "Fleet Tracking",
    status: "In Active Development",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    feature: "Electronic Work Diary (EWD) / Fatigue Logbook",
    category: "Compliance",
    status: "Roadmap 2026",
    badgeClass: "bg-neutral-100 text-neutral-700 border-neutral-200",
  },
  {
    feature: "Automated OCR Scale Ticket / Weighbridge Intake",
    category: "AI & Automation",
    status: "Roadmap 2026",
    badgeClass: "bg-neutral-100 text-neutral-700 border-neutral-200",
  },
  {
    feature: "MYOB & ERP Custom Connectors",
    category: "Accounting",
    status: "Available via Scope",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
  },
];

const values = [
  {
    title: "1. Operator-First Problem Solving",
    desc: "Every single feature begins with an actual friction point experienced in the yard or cab — not a marketing committee or an investor pitch. We build what dispatchers and drivers need to get home earlier, and aggressively decline bloat.",
  },
  {
    title: "2. Specificity Over Generic Mass-Market",
    desc: "We deliberately say no to e-commerce, 3PL, and pallet freight. Bulk haulage requires specialised multi-tonne billing, dual-rate matrices, and quarry-tough offline reliability. Specialising completely is how we deliver real operational leverage.",
  },
  {
    title: "3. Total Commercial Transparency",
    desc: "No hidden seat penalties for your subcontractors. No deceptive AI marketing claims. If a feature is on the roadmap, we say it's on the roadmap. If an integration requires custom scoping, we say so upfront before you ever sign.",
  },
];

const faqs = [
  {
    q: "Who is behind HaulageOps?",
    a: "HaulageOps was founded by a team with direct roots in bulk haulage operations alongside enterprise software engineers. The platform is grounded in over 40 years of family bulk haulage heritage — navigating the daily realities of mixed owned and subbie tipper fleets, complex client rate cards, paper docket chasing, and tight profit margins.",
  },
  {
    q: "Is HaulageOps venture capital backed?",
    a: "No. HaulageOps is independently run and operator-funded. Because we don't answer to venture capital growth targets, we are under zero pressure to bloat our product with generic features or increase prices every quarter. Our product roadmap is 100% dictated by the transport operators using it daily.",
  },
  {
    q: "Which geographic regions do you support?",
    a: "HaulageOps is currently live and operating across Australia, with full support for Australian compliance workflows (such as Chain of Responsibility audit records and fatigue tracking). We are also expanding to operators in New Zealand, the United Kingdom, and North America whose core bulk haulage mechanics are identical.",
  },
  {
    q: "Can I migrate data from our existing spreadsheets or legacy TMS?",
    a: "Yes. As part of our structured onboarding, our team handles the ingestion and formatting of your client records, vehicle registers, driver inductions, subcontractor profiles, and complex rate card matrices so you don't start from a blank screen.",
  },
  {
    q: "How do we get in touch with the team?",
    a: "You can book a 20-minute operational walkthrough directly on our Demo page, or reach out to our team via our Contact page. We respond to all operator enquiries within one business day.",
  },
];

export default function AboutPage() {
  return (
    <MainLayout showCta={false}>
      {/* 1. Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-neutral-50/80 via-white to-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">About</span>
          </nav>
          
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              About HaulageOps
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.08]">
              Built on 40 years of bulk haulage experience.
              <span className="block text-[#E8652B] mt-2">Built for operators, not investors.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl font-normal">
              Most logistics platforms were built for general freight, parcel couriers, or 3PL warehouses, then awkwardly retrofitted for heavy haulage. HaulageOps was forged directly inside a bulk tipper operation to solve the real-world friction of paper dockets, subcontractor dispatch, and delayed invoices.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Proof Stats Strip */}
      <section className="bg-neutral-900 py-10 border-y border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {proofStats.map((item) => (
              <div key={item.value} className="border-l-2 border-[#E8652B] pl-5">
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight block">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm text-neutral-400 mt-1 block leading-normal">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Origin Story & Architecture Graphic */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Our Origin</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
                The platform a real 40-year bulk haulage company desperately needed.
              </h2>
              <div className="mt-6 space-y-4 text-neutral-600 text-base leading-relaxed">
                <p>
                  HaulageOps wasn't born from an MBA business case or a venture incubator. It started when an Australian bulk haulage fleet operator with 40 years on the road hit the breaking point with generic software that couldn't handle how bulk transport actually works.
                </p>
                <p>
                  Every single morning involved dispatching 30 owned trucks and 20 external subcontractors via phone calls and chaotic WhatsApp group chats. Dockets arrived days later as crumpled, grease-stained papers tossed on the office desk. Clients called five times an hour demanding load statuses that dispatchers couldn't answer without interrupting drivers. And end-of-month invoicing took two full weeks because every client charge rate and subbie pay rate had to be cross-referenced manually.
                </p>
                <p>
                  We built HaulageOps to replace that chaos with pure operational control: a single platform structured around five role-specific portals (Dispatch, Drivers, Subcontractors, Clients, Management) where everyone touches the same live job record without stepping on each other's toes.
                </p>
              </div>
            </div>

            {/* Architecture Card Blueprint */}
            <div className="lg:col-span-5">
              <div className="bg-neutral-900 rounded-2xl p-7 border border-neutral-800 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#E8652B]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] flex items-center gap-1.5">
                    <Layers className="h-4 w-4" />
                    HaulageOps Architecture
                  </span>
                  <span className="text-[11px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded font-mono">
                    Single Job Record
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#E8652B]/20 text-[#E8652B] flex items-center justify-center font-bold text-xs">
                        01
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Admin & Dispatch Control</div>
                        <div className="text-xs text-neutral-400">Master allocation & multi-rate rules</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-medium bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                      Live
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                        02
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Driver Mobile App (Offline)</div>
                        <div className="text-xs text-neutral-400">Photo dockets, POD & GPS status</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-medium bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                      Live
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs">
                        03
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Subcontractor Portal</div>
                        <div className="text-xs text-neutral-400">Dedicated login, job queue & RCTI</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-medium bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                      Included
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">
                        04
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Client Self-Service Portal</div>
                        <div className="text-xs text-neutral-400">Live docket tracking & invoice history</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-medium bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                      Included
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                        05
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">2-Way Xero Accounting Sync</div>
                        <div className="text-xs text-neutral-400">Automated invoices & bills matching</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-medium bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                      OAuth2
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                  <span>Zero per-subbie user fees</span>
                  <Link href="/platform" className="text-[#E8652B] font-bold hover:underline inline-flex items-center gap-1">
                    Explore Platform <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Built For vs Not Built For */}
      <section className="py-20 bg-neutral-50/60 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Target Specialisation</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Clear on who we serve. Clear on who we don't.
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              Narrowing our focus is our greatest strength. By refusing to serve general couriers or warehousing, we keep HaulageOps laser-tailored to heavy bulk operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Built For */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">What HaulageOps is Built For</h3>
                  <span className="text-xs text-neutral-500">100% optimised operational scope</span>
                </div>
              </div>
              <ul className="space-y-3.5">
                {builtForItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5 font-bold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Built For */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                  <XCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">What HaulageOps is NOT For</h3>
                  <span className="text-xs text-neutral-500">Intentionally excluded categories</span>
                </div>
              </div>
              <ul className="space-y-3.5">
                {notBuiltForItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-600">
                    <XCircle className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-5 border-t border-neutral-100 text-xs text-neutral-500 leading-relaxed">
                If you run standard pallet logistics or 3PL storage, you will find generic TMS platforms elsewhere. If you run bulk materials and tippers, this is your home.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. What Makes Us Different (4 Cards) */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Architectural Edge</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Purpose-built for bulk haulage. Not adapted from parcel software.
            </h2>
            <p className="mt-4 text-neutral-600 text-base">
              Four fundamental architectural differences that separate HaulageOps from generic transport management tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {differenceCards.map((card) => {
              const IconComp = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-neutral-50/50 rounded-2xl p-8 border border-neutral-200 hover:border-[#E8652B]/60 transition-all flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-[#E8652B] flex items-center justify-center mb-6">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 leading-snug">{card.title}</h3>
                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-normal">{card.desc}</p>
                  </div>
                  <div className="mt-6 pt-5 border-t border-neutral-200/80">
                    <Link
                      href={card.linkHref}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#E8652B] hover:text-[#D05520]"
                    >
                      {card.linkText} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Honest Roadmap Table */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Honest Roadmap</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              What is live today. What is next.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600">
              We never pitch roadmap items as existing live features. Here is our exact transparent operational feature status:
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-200 text-xs font-bold uppercase tracking-wider text-neutral-600">
                    <th className="py-4 px-6">Capability / Integration</th>
                    <th className="py-4 px-6">Domain</th>
                    <th className="py-4 px-6 text-right">Operational Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-sm">
                  {roadmapItems.map((item) => (
                    <tr key={item.feature} className="hover:bg-neutral-50/70 transition-colors">
                      <td className="py-4 px-6 font-semibold text-neutral-900">
                        {item.feature}
                      </td>
                      <td className="py-4 px-6 text-neutral-600 text-xs">
                        {item.category}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${item.badgeClass}`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Company Values */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Operating Principles</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              How we build software for the haulage industry.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val) => (
              <div key={val.title} className="bg-neutral-50/50 rounded-2xl p-7 border border-neutral-200 shadow-xs">
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{val.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-20 bg-neutral-50/60 border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Answers to Common Queries</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Frequently Asked Questions About HaulageOps
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border border-neutral-200 bg-white rounded-2xl overflow-hidden shadow-xs"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-bold text-neutral-900 text-base list-none hover:bg-neutral-50/70 transition-colors">
                  <span>{faq.q}</span>
                  <ChevronRight className="h-5 w-5 text-neutral-400 shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA Strip */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] mb-2 block">
                Take the Next Step
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Experience the platform that 40 years of haulage built.
              </h2>
              <p className="mt-3 text-neutral-400 text-base leading-relaxed">
                Book a 20-minute operational walkthrough. We'll show you live dispatch, driver offline docket capture, subcontractor coordination, and automated Xero invoicing.
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
        </div>
      </section>
    </MainLayout>
  );
}

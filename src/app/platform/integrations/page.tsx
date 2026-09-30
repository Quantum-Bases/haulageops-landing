import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
  Plug,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  MapPin,
  Bell,
  Database,
  Radio,
  FileCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Integrations & Technical Ecosystem | HaulageOps",
  description:
    "Connect HaulageOps to your core accounting, mapping, push notification, and cloud infrastructure — featuring native Xero sync, Google Maps, Mapbox, and Azure storage.",
};

const proofStrip = [
  "Xero OAuth2 2-Way Accounting Sync",
  "Google Maps Address Autocomplete & Routing",
  "Mapbox Interactive Subcontractor Maps",
  "Microsoft Azure Cloud Blob Vault",
  "Firebase Cloud Messaging (FCM) Driver Push",
  "Socket.io Real-Time Live Dispatch Webhooks",
];

const liveIntegrations = [
  {
    icon: RefreshCw,
    title: "Xero Accounting Integration",
    badge: "Native Accounting",
    desc: "Direct two-way OAuth2 connection. Verified field dockets generate draft sales invoices with job-linked line items. Real-time webhooks sync payment confirmations directly back to the dispatch and client portals.",
    points: [
      "Invoices push with exact tonnage and rate card lines",
      "Real-time payment webhooks update status to 'Paid'",
      "Automated Recipient Created Tax Invoices (RCTIs) for subbies",
      "Zero manual ledger re-keying between operations and finance",
    ],
    href: "/platform/integrations/xero",
    linkLabel: "Explore Xero Integration Specs",
  },
  {
    icon: MapPin,
    title: "Google Maps Platform",
    badge: "Location & Geocoding",
    desc: "Address autocomplete and geocoding during job creation. Ensures accurate site coordinates, optimal heavy vehicle routing, and distance calculations for rate card evaluations.",
    points: [
      "Predictive autocomplete for quarry pits and civil sites",
      "Precision geocoding for automated driver arrival detection",
      "Accurate mileage calculations for per-km or travel rate rules",
      "Fewer wrong-site deliveries and driver turnarounds",
    ],
  },
  {
    icon: Radio,
    title: "Mapbox Interactive Maps",
    badge: "Subcontractor Mobility",
    desc: "Embedded mapping within the free Subcontractor Portal. External subbies and owner-drivers view job locations, route overviews, and site instructions from any web browser.",
    points: [
      "Zero app installation required for external subcontractors",
      "Interactive turn-by-turn route previews and satellite views",
      "Pickup and tipping location markers with custom site notes",
      "Eliminates repetitive calls asking dispatch for addresses",
    ],
  },
  {
    icon: Database,
    title: "Microsoft Azure Cloud Vault",
    badge: "Secure Document Store",
    desc: "Enterprise cloud blob storage for all signed proof-of-delivery photos, weighbridge scale tickets, driver licences, and insurance policies with geo-redundancy.",
    points: [
      "Encrypted file storage at rest with AES-256",
      "Tamper-evident links for client portal self-service downloads",
      "Fast global CDN delivery for heavy image uploads",
      "Automated disaster recovery and multi-region replication",
    ],
  },
  {
    icon: Bell,
    title: "Firebase Cloud Messaging (FCM)",
    badge: "Field Push Daemon",
    desc: "Reliable push notifications for the native iOS and Android driver mobile apps. Critical dispatch changes and new load assignments wake the app immediately.",
    points: [
      "Instant driver alerts when new jobs are dispatched",
      "Immediate notifications on site cancellations or urgent changes",
      "Works in background mode without keeping the app open",
      "Zero reliance on easily ignored SMS messages",
    ],
  },
  {
    icon: Plug,
    title: "Socket.io Real-Time Engine",
    badge: "Live Telemetry",
    desc: "Bidirectional WebSocket connection powering the Master Dispatch Board and Client Portal. Status changes from drivers appear on the board in sub-second time.",
    points: [
      "Sub-second state synchronisation across all dispatcher screens",
      "Live driver status shifts (En Route → On Site → Tipping → Done)",
      "Zero manual browser refresh needed to see current job progress",
      "Low-bandwidth data packets engineered for mobile connections",
    ],
  },
];

const roadmapItems = [
  {
    title: "Hardware Telematics / Fleet GPS Connectors",
    status: "In Active Development",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    desc: "API adapters to ingest position data from hardware telematics units (e.g. Navman, Samsara, Geotab) directly into the HaulageOps dispatch board.",
  },
  {
    title: "Weighbridge Scale Direct Ingestion",
    status: "Roadmap 2026",
    badgeClass: "bg-neutral-100 text-neutral-700 border-neutral-200",
    desc: "Direct digital connectivity with weighbridge indicator hardware to capture gross, tare, and net weights automatically at scale crossing.",
  },
  {
    title: "Electronic Work Diary (EWD) Fatigue Sync",
    status: "Roadmap 2026",
    badgeClass: "bg-neutral-100 text-neutral-700 border-neutral-200",
    desc: "Integration with NHVR-approved Electronic Work Diary systems to sync driver work and rest logs directly with dispatch schedules.",
  },
  {
    title: "MYOB & Custom Enterprise ERP Connectors",
    status: "Available via Scope",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
    desc: "Custom accounting bridges for larger operators running on-premise or cloud MYOB, SAP, or Microsoft Dynamics environments.",
  },
];

const howItWorks = [
  {
    num: "01",
    title: "Authorize OAuth2 Access",
    desc: "Connect your Xero account through official token-based authentication. HaulageOps never views or stores your raw accounting passwords.",
  },
  {
    num: "02",
    title: "Map Your Rate & Account Codes",
    desc: "During onboarding, our team maps your client directories, GST rules, and nominal revenue codes so draft invoices land in Xero clean.",
  },
  {
    num: "03",
    title: "Dispatch, Verify & Sync",
    desc: "Dispatch jobs as normal. Drivers capture digital dockets in the cab. Invoices batch into Xero, and payment webhooks update your board in real time.",
  },
];

export default function IntegrationsPage() {
  return (
    <MainLayout showCta={false}>
      {/* 1. Hero Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-neutral-50/80 via-white to-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/platform" className="hover:text-[#E8652B] transition-colors">Platform</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Integrations</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4">
              <Plug className="h-3.5 w-3.5" />
              Connected Ecosystem
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.08]">
              Connect HaulageOps to the tools
              <span className="block text-[#E8652B] mt-2">your transport business relies on.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl font-normal">
              From two-way Xero accounting synchronization and Google Maps geocoding to Mapbox subcontractor routes and Azure cloud storage, HaulageOps integrates with world-class infrastructure without data re-keying.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/platform/integrations/xero">
                <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-bold cursor-pointer shadow-sm">
                  Explore Xero Integration
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-bold">
                  Book a Demo Walkthrough
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

      {/* 3. Live Integrations Grid */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Production Ready</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Live Core Integrations
            </h2>
            <p className="mt-3 text-neutral-600 text-base">
              These connections are active, production-tested, and included as standard in your HaulageOps subscription.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveIntegrations.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-neutral-50/50 rounded-2xl p-7 border border-neutral-200 shadow-xs flex flex-col justify-between hover:border-[#E8652B]/70 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-[#E8652B] flex items-center justify-center">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">{item.desc}</p>

                    <div className="mt-6 pt-5 border-t border-neutral-200/80">
                      <ul className="space-y-2">
                        {item.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2 text-xs text-neutral-700">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {item.href && (
                    <div className="mt-6 pt-4 border-t border-neutral-200">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E8652B] hover:text-[#D05520]"
                      >
                        <span>{item.linkLabel}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. How the Flow Works */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Implementation Steps</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Connected in Minutes. Running Silently.
            </h2>
            <p className="mt-3 text-neutral-600 text-base">
              How HaulageOps syncs with your operational and financial stack.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {howItWorks.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-7 border border-neutral-200 shadow-xs">
                <span className="text-3xl font-black text-[#E8652B]/20 leading-none">{step.num}</span>
                <h3 className="mt-2 font-bold text-neutral-900 text-lg">{step.title}</h3>
                <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Roadmap Integrations */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Honest Roadmap</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Future Connectors in Evaluation
            </h2>
            <p className="mt-3 text-neutral-600 text-base">
              We never claim integrations we haven&apos;t built yet. Here is our direct development pipeline:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {roadmapItems.map((r) => (
              <div key={r.title} className="bg-neutral-50/50 rounded-2xl p-6 border border-neutral-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-neutral-900 text-base">{r.title}</h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${r.badgeClass}`}>
                      {r.status}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Footer */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] mb-2 block">
              Integrations Tailored to You
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Need a specific connector for your fleet?
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Talk to our engineering team. We'll review your software stack and evaluate your technical requirements during your 20-minute demo.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="w-full sm:w-auto bg-[#E8652B] hover:bg-[#D05520] text-white font-bold px-8 shadow-sm">
                Book a Demo Walkthrough
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700 font-bold">
                Contact Technical Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

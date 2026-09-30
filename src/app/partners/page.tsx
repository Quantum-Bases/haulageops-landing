import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ArrowRight,
  Handshake,
  CheckCircle2,
  Building2,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Users2,
  FileCheck,
  PhoneCall,
} from "lucide-react";

export const metadata = {
  title: "Partner Program — Technology, Accounting & Advisory | HaulageOps",
  description:
    "Partner with HaulageOps. Join our network of accounting advisors, telematics providers, and transport consultants modernising bulk haulage operations globally.",
};

const partnerTracks = [
  {
    icon: Building2,
    badge: "Financial & Accounting",
    title: "Accounting & Bookkeeping Advisors",
    desc: "For Xero certified advisors, bookkeeping practices, and transport CFOs who want to eliminate manual docket entry and accelerate client invoice cycles from weeks to 48 hours.",
    benefits: [
      "Dedicated partner sandbox environment with pre-loaded bulk haulage demo data",
      "Priority client onboarding with custom Xero nominal code mapping",
      "Direct technical liaison for automated RCTI and payment sync configurations",
      "Referral compensation and co-branded case studies",
    ],
  },
  {
    icon: Cpu,
    badge: "Hardware & Telematics",
    title: "Technology & Scale Integrators",
    desc: "For weighbridge scale manufacturers, GPS telematics vendors, and ruggedized in-cab tablet providers looking to connect into an operator-proven TMS workflow.",
    benefits: [
      "Access to open RESTful webhooks and automated docket ingest APIs",
      "Joint hardware validation and co-marketing opportunities",
      "Referral opportunities across our growing network of heavy tipper fleets",
      "Technical collaboration with our core engineering team",
    ],
  },
  {
    icon: ShieldCheck,
    badge: "Compliance & Safety",
    title: "Transport & CoR Consultants",
    desc: "For Chain of Responsibility (CoR) specialists, heavy vehicle auditors, and operational advisors helping fleets establish audit-proof digital safety systems.",
    benefits: [
      "Provide clients with tamper-evident digital driver break and inspection records",
      "Auditor access portal for streamlined NHVR and regulatory reviews",
      "Collaborative thought leadership and educational webinar co-hosting",
      "Early preview access to new compliance and work diary modules",
    ],
  },
];

const ecosystemMetrics = [
  { value: "48-Hour", label: "Average client invoice cycle with Xero sync" },
  { value: "100%", label: "Verified digital dockets with GPS evidence" },
  { value: "Zero", label: "Per-seat fees for external subcontractors" },
  { value: "2–4 Wks", label: "Average time-to-value for new client fleets" },
];

export default function PartnersPage() {
  return (
    <MainLayout showCta={false}>
      {/* 1. Hero Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-neutral-50/80 via-white to-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Partners</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4">
              <Handshake className="h-3.5 w-3.5" />
              Partner Ecosystem
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.08]">
              Partner with HaulageOps.
              <span className="block text-[#E8652B] mt-2">Modernise heavy transport together.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl font-normal">
              Join our network of accounting practices, telematics vendors, and transport consultants helping bulk haulage operators eliminate paperwork, streamline subcontractor payments, and protect operational margins.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-bold cursor-pointer shadow-sm">
                  Apply to Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/platform">
                <Button size="lg" variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-bold">
                  Explore the Platform
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Metrics Strip */}
      <section className="bg-neutral-900 py-10 border-y border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecosystemMetrics.map((item) => (
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

      {/* 3. Partner Tracks Grid */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Collaboration Tracks</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Tailored Programs for Industry Leaders
            </h2>
            <p className="mt-3 text-neutral-600 text-base">
              Choose the partnership model that best fits your expertise and client relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerTracks.map((track) => {
              const IconComp = track.icon;
              return (
                <div
                  key={track.title}
                  className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between hover:border-[#E8652B]/70 transition-all shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-[#E8652B] flex items-center justify-center">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-bold text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-full border border-neutral-200">
                        {track.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900">{track.title}</h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed font-normal">{track.desc}</p>

                    <div className="mt-6 pt-5 border-t border-neutral-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8652B] block mb-3">
                        Track Benefits:
                      </span>
                      <ul className="space-y-2.5">
                        {track.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-xs text-neutral-700">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-neutral-100">
                    <Link
                      href="/contact"
                      className="text-xs font-bold text-[#E8652B] hover:text-[#D05520] inline-flex items-center gap-1"
                    >
                      <span>Join as a {track.badge.split(" ")[0]} Partner</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Why Partner with HaulageOps */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The HaulageOps Advantage</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
                Software your transport clients will actually adopt and love.
              </h2>
              <div className="mt-6 space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                <p>
                  Most enterprise logistics implementations fail because the mobile apps are too difficult for drivers or external subcontractors refuse to pay software subscription fees.
                </p>
                <p>
                  HaulageOps eliminates those barriers: our driver app operates 100% offline in deep quarry pits, our subcontractor portal is completely free with zero per-seat fees, and verified dockets flow automatically into Xero. When you recommend HaulageOps, your clients succeed within 2 to 4 weeks.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-neutral-900 text-white rounded-3xl p-8 border border-neutral-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#E8652B]/10 rounded-full blur-3xl pointer-events-none" />
                <h3 className="text-lg font-bold text-white mb-4">Partner Support Commitments</h3>
                <div className="space-y-3.5 text-xs sm:text-sm text-neutral-300">
                  <div className="flex items-start gap-3 p-3 bg-neutral-800/80 rounded-xl border border-neutral-700">
                    <CheckCircle2 className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>Dedicated Partner Success Manager for joint client walkthroughs</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-neutral-800/80 rounded-xl border border-neutral-700">
                    <CheckCircle2 className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>Hands-on data migration support for your clients from day one</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-neutral-800/80 rounded-xl border border-neutral-700">
                    <CheckCircle2 className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>Comprehensive API documentation and developer sandbox access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA Footer */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] mb-2 block">
              Grow with HaulageOps
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Ready to explore a partnership?
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Connect with our partner team to discuss technical integration, referral structures, and joint client opportunities.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-[#E8652B] hover:bg-[#D05520] text-white font-bold px-8 shadow-sm">
                Apply for Partnership
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700 font-bold">
                Book a Demo Walkthrough
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

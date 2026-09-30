"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Check,
  ArrowRight,
  Calendar,
  ShieldCheck,
  Users,
  Truck,
  Building2,
  FileSpreadsheet,
  Zap,
  HelpCircle,
  Clock,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import { QuickQuoteForm } from "@/components/shared/QuickQuoteForm";

const proofItems = [
  { value: "Custom Quote", label: "Tailored to Your Fleet" },
  { value: "2–4 Weeks", label: "Average Go-Live Time" },
  { value: "Free Access", label: "For Every Subcontractor" },
  { value: "Free Access", label: "For Every Client Portal" },
  { value: "Unlimited", label: "Internal Users & Dispatchers" },
  { value: "CoR Ready", label: "Built for AU & NZ Regulations" },
];

const tiers = [
  {
    id: "starter",
    name: "Starter Fleet",
    badge: "Spreadsheet Replacement",
    bestFor: "Operators (10–25 trucks) moving away from manual paper dockets and WhatsApp dispatch.",
    setupPrice: "Included in Scope",
    setupLabel: "Complete configuration, rate setup & training",
    monthlyPrice: "Custom Tailored",
    monthlyPeriod: "quoted based on your active fleet size",
    popular: false,
    ctaText: "Request Fleet Quote",
    ctaLink: "#quote-form",
    features: [
      "Real-time drag-and-drop dispatch board",
      "Native Driver App (iOS & Android)",
      "Digital Proof of Delivery (dockets + signatures)",
      "Automated Xero OAuth2 two-way invoice sync",
      "Google Maps address autocomplete & route estimation",
      "Per-tonne, per-load, and hourly rate cards",
      "Unlimited internal dispatch & admin accounts",
      "Email & knowledge base support",
    ],
  },
  {
    id: "growth",
    name: "Growth & Subbies",
    badge: "Most Popular",
    bestFor: "Growing fleets (25–60 trucks) running owned tippers plus active subcontractor networks.",
    setupPrice: "Tailored Setup",
    setupLabel: "Includes rate matrix & subbie onboarding",
    monthlyPrice: "Volume Tiered",
    monthlyPeriod: "max cost-efficiency for owned + subbie mix",
    popular: true,
    ctaText: "Book 20-Min Demo & Quote",
    ctaLink: "https://calendly.com/admin-haulageops/30min",
    features: [
      "Everything in Starter Fleet",
      "Dedicated Subcontractor Portal (100% free for subbies)",
      "Client Visibility Portal (live tracking for your clients)",
      "Chain of Responsibility (CoR) compliance logs",
      "Australian fatigue & rest break tracking",
      "Subcontractor pay vs client charge rate splitting",
      "Document expiry alerts (licenses, rego, insurances)",
      "Dedicated WhatsApp & phone priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise & Multi-Depot",
    badge: "Civil & Quarry Scale",
    bestFor: "Large operators (60+ trucks), multi-depot civil fleets, and tier-1 infrastructure suppliers.",
    setupPrice: "Custom Scope",
    setupLabel: "Custom data migration & architecture",
    monthlyPrice: "Enterprise Contract",
    monthlyPeriod: "tailored SLAs & volume commitments",
    popular: false,
    ctaText: "Discuss Enterprise Scope",
    ctaLink: "https://calendly.com/admin-haulageops/30min",
    features: [
      "Everything in Growth & Subbies",
      "Multi-depot & multi-entity operational routing",
      "Historical data migration from legacy TMS/spreadsheets",
      "Dedicated Implementation Manager on your schedule",
      "Custom telematics, GPS, and weighbridge API hooks",
      "White-label branding & custom domain options",
      "99.9% uptime Service Level Agreement (SLA)",
      "Executive quarterly operational reviews",
    ],
  },
];

const comparisonCategories = [
  {
    category: "Dispatch & Core Operations",
    items: [
      { name: "Live Dispatch Board (Socket.io)", starter: true, growth: true, enterprise: true },
      { name: "Driver Mobile App (iOS & Android)", starter: true, growth: true, enterprise: true },
      { name: "Digital POD & Photo Docket Storage", starter: true, growth: true, enterprise: true },
      { name: "Google Maps Routing & Travel Time", starter: true, growth: true, enterprise: true },
      { name: "Multi-Depot Allocation", starter: false, growth: "Optional", enterprise: true },
    ],
  },
  {
    category: "Subcontractor & Client Portals",
    items: [
      { name: "Unlimited Internal User Accounts (No per-seat fees)", starter: true, growth: true, enterprise: true },
      { name: "Dedicated Subcontractor Portal (Job dispatch & map)", starter: true, growth: true, enterprise: true },
      { name: "Subbie Portal Access Cost (Per subcontractor)", starter: "Free (Included)", growth: "Free (Included)", enterprise: "Free (Included)" },
      { name: "Client Tracking & Docket Portal", starter: true, growth: true, enterprise: true },
      { name: "Client Portal Access Cost (Per client)", starter: "Free (Included)", growth: "Free (Included)", enterprise: "Free (Included)" },
    ],
  },
  {
    category: "Billing, Rates & Compliance",
    items: [
      { name: "Xero Two-Way Financial Sync", starter: true, growth: true, enterprise: true },
      { name: "Effective-Dated & Multi-Tier Rate Cards", starter: "Standard", growth: "Advanced", enterprise: "Custom" },
      { name: "Separate Subbie Pay vs Client Charge Rates", starter: false, growth: true, enterprise: true },
      { name: "Chain of Responsibility (CoR) Audit Trail", starter: "Basic", growth: true, enterprise: true },
      { name: "Vehicle & Driver Expiry Radar (Rego/Inductions)", starter: false, growth: true, enterprise: true },
    ],
  },
  {
    category: "Implementation & Support",
    items: [
      { name: "Data Migration from Excel/CSV", starter: "Self-serve template", growth: "Guided setup", enterprise: "Full white-glove" },
      { name: "Role-Based Team Training Sessions", starter: "1 Session", growth: "3 Sessions", enterprise: "Unlimited" },
      { name: "Dedicated Implementation Lead", starter: false, growth: true, enterprise: true },
      { name: "Support Channels", starter: "Email & Help Centre", growth: "Phone, WhatsApp & Email", enterprise: "Dedicated Slack/Teams + SLA" },
    ],
  },
];

const faqs = [
  {
    q: "Why don't you charge per internal dispatcher or admin user?",
    a: "We believe per-seat pricing penalizes operational efficiency. Heavy haulage companies often have dispatchers, weighbridge clerks, bookkeepers, and managers all touching jobs. You can add as many internal team members as you need with granular role-based permissions at zero extra cost.",
  },
  {
    q: "Do our subcontractors have to pay to use HaulageOps?",
    a: "Never. Your external subcontractors get their own secure, free portal login. They can accept loads, delegate to their drivers, submit digital dockets, and view their statements without paying a single dollar. This makes onboarding subcontractors effortless.",
  },
  {
    q: "What is included in the onboarding and setup phase?",
    a: "We don't hand you an empty account and wish you luck. Our implementation team imports your fleet and driver records, sets up your client charge rates and subbie pay rates, connects your Xero organization via OAuth2, and trains your dispatchers and drivers. Most operators are fully operational within 2–4 weeks.",
  },
  {
    q: "Can we connect HaulageOps with our existing accounting system?",
    a: "Yes. HaulageOps features native, bidirectional integration with Xero via OAuth2. Invoices generated from verified dockets sync automatically, and invoice payment statuses reflect back in HaulageOps. We also support custom exports and API integrations for enterprise ERPs.",
  },
  {
    q: "What happens if our fleet size increases or decreases seasonally?",
    a: "HaulageOps is designed for bulk haulage realities. Subcontractor vehicles you pull in for large projects cost nothing extra on your platform tier. You only pay for your active core fleet, giving you complete flexibility during seasonal peaks and quiet periods.",
  },
];

export default function PricingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <MainLayout showCta={false}>
      {/* ── Hero Section ── */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-neutral-50 via-white to-white text-neutral-900 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-bold">Pricing</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200/80 mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparent Bulk Haulage Pricing</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.08]">
              Straight forward pricing built for how heavy fleets{" "}
              <span className="text-[#E8652B]">actually operate</span>.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed font-normal">
              One operational subscription for your owned fleet. Zero per-user penalties for dispatchers.
              <strong> Free authenticated portals</strong> for every subcontractor and client you invite.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://calendly.com/admin-haulageops/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#E8652B] hover:bg-[#D05520] text-white font-bold px-7 py-6 text-base rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-2.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book 20-Min Operational Walkthrough</span>
                </Button>
              </a>

              <a href="#quote-form">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neutral-300 hover:bg-neutral-100 text-neutral-900 font-bold px-6 py-6 text-base rounded-xl transition-all cursor-pointer"
                >
                  <span>Request Fleet Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Metrics Ribbon ── */}
      <section className="bg-neutral-900 border-y border-neutral-800 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {proofItems.map((item) => (
              <div key={item.label} className="px-2">
                <p className="text-base sm:text-lg font-black text-white">{item.value}</p>
                <p className="text-xs text-neutral-400 mt-1 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Tiers Grid ── */}
      <section className="py-20 bg-neutral-50/60 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Fleet Plans
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Select the right tier for your operational scale
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              Every plan includes the core live dispatch engine and driver mobile apps. Pick the scope that fits your workflow.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-3xl flex flex-col transition-all duration-300 ${tier.popular
                    ? "bg-white border-2 border-[#E8652B] shadow-xl shadow-orange-500/10 lg:-translate-y-2"
                    : "bg-white border border-neutral-200 shadow-sm hover:border-neutral-300"
                  }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E8652B] text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{tier.badge}</span>
                  </div>
                )}

                <div className="p-8 pb-6 border-b border-neutral-100">
                  {!tier.popular && (
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 mb-3">
                      {tier.badge}
                    </span>
                  )}

                  <h3 className="text-2xl font-black text-neutral-900">{tier.name}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 min-h-[44px] leading-relaxed">
                    {tier.bestFor}
                  </p>

                  <div className="mt-6 pt-6 border-t border-neutral-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
                        {tier.monthlyPrice}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 font-medium mt-1">{tier.monthlyPeriod}</p>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-neutral-900">Setup & Migration</p>
                      <p className="text-[11px] text-neutral-500">{tier.setupLabel}</p>
                    </div>
                    <span className="text-sm font-black text-[#E8652B]">{tier.setupPrice}</span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                      What's Included
                    </p>
                    <ul className="space-y-3.5">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-neutral-700">
                          <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-neutral-100">
                    <a
                      href={tier.ctaLink}
                      target={tier.ctaLink.startsWith("http") ? "_blank" : undefined}
                      rel={tier.ctaLink.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      <Button
                        size="lg"
                        className={`w-full font-bold py-6 text-sm rounded-xl transition-all cursor-pointer ${tier.popular
                            ? "bg-[#E8652B] hover:bg-[#D05520] text-white shadow-md shadow-orange-500/20"
                            : "bg-neutral-900 hover:bg-neutral-800 text-white"
                          }`}
                      >
                        {tier.ctaText}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Low-Friction Instant Fleet Quote Section ── */}
      <section id="quote-form" className="py-20 bg-white border-b border-neutral-200 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Fleet Evaluation
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
                Get an exact proposal tailored to your operational scale
              </h2>
              <p className="mt-4 text-base text-neutral-600 leading-relaxed">
                Share your vehicle count and operational scope below. Our specialists evaluate your fleet structure,
                subcontractor mix, and rate cards to deliver an accurate, transparent proposal during your 20-minute walkthrough.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                  <div className="p-2 rounded-xl bg-white border border-neutral-200 text-[#E8652B] shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm">Flexible Core Fleet Sizing</h4>
                    <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                      Scale up during infrastructure surges and scale down during wet seasons without long-term per-vehicle penalties.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                  <div className="p-2 rounded-xl bg-white border border-neutral-200 text-[#E8652B] shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm">Unlimited Free Subbie Seats</h4>
                    <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                      Every subcontractor you bring on board gets full job dispatch, digital dockets, and route views without any extra fees.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                  <div className="p-2 rounded-xl bg-white border border-neutral-200 text-[#E8652B] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm">Complete Australian CoR Ready</h4>
                    <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                      Fatigue logs, break enforcement timers, and immutable audit logs included in your standard license.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div>
              <QuickQuoteForm
                source="pricing_page_calculator"
                className="border-2 border-neutral-200 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature Comparison Matrix Table ── */}
      <section className="py-20 bg-neutral-50/60 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Detailed Breakdown
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Compare plan capabilities side-by-side
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              Every feature engineered specifically for heavy materials, civil tippers, and bulk logistics.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-100/70">
                  <th className="py-5 px-6 font-black text-sm text-neutral-900 w-2/5">Platform Features</th>
                  <th className="py-5 px-6 font-bold text-sm text-neutral-900 w-1/5 text-center">Starter Fleet</th>
                  <th className="py-5 px-6 font-black text-sm text-[#E8652B] w-1/5 text-center bg-orange-50/40">
                    Growth & Subbies
                  </th>
                  <th className="py-5 px-6 font-bold text-sm text-neutral-900 w-1/5 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonCategories.map((group) => (
                  <React.Fragment key={group.category}>
                    <tr className="bg-neutral-50/80 border-y border-neutral-200">
                      <td colSpan={4} className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-neutral-700">
                        {group.category}
                      </td>
                    </tr>
                    {group.items.map((row, idx) => (
                      <tr
                        key={row.name}
                        className={`border-b border-neutral-100 hover:bg-neutral-50/50 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-neutral-50/20"
                          }`}
                      >
                        <td className="py-4 px-6 text-sm font-semibold text-neutral-800">{row.name}</td>
                        <td className="py-4 px-6 text-sm text-neutral-700 text-center">
                          {typeof row.starter === "boolean" ? (
                            row.starter ? (
                              <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                            ) : (
                              <span className="text-neutral-300 font-bold">—</span>
                            )
                          ) : (
                            <span className="text-xs font-bold text-neutral-700">{row.starter}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-sm text-neutral-900 text-center font-bold bg-orange-50/20">
                          {typeof row.growth === "boolean" ? (
                            row.growth ? (
                              <Check className="w-4 h-4 text-[#E8652B] mx-auto font-black" />
                            ) : (
                              <span className="text-neutral-300 font-bold">—</span>
                            )
                          ) : (
                            <span className="text-xs font-black text-[#E8652B]">{row.growth}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-sm text-neutral-700 text-center">
                          {typeof row.enterprise === "boolean" ? (
                            row.enterprise ? (
                              <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                            ) : (
                              <span className="text-neutral-300 font-bold">—</span>
                            )
                          ) : (
                            <span className="text-xs font-bold text-neutral-700">{row.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Subcontractor & Client Portal Model ── */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                The Network Economy
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
                Your external subcontractors and clients pay nothing. You control the platform.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                Legacy software vendors charge per login seat, forcing you to pay recurring monthly fees for every single subcontractor
                you want to dispatch to. That model fails in bulk haulage where subcontractor fleets fluctuate constantly.
              </p>
              <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                With HaulageOps, external portals are built into your platform license. Invite 5 or 50 subcontractors — they
                log in securely via web and mobile at <strong>zero cost</strong> to them and no additional user fees for you.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/platform/subcontractor-portal">
                  <Button variant="outline" className="border-neutral-300 font-bold text-xs cursor-pointer">
                    Explore Subcontractor Portal →
                  </Button>
                </Link>
                <Link href="/platform/client-portal">
                  <Button variant="outline" className="border-neutral-300 font-bold text-xs cursor-pointer">
                    Explore Client Portal →
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50/70">
                <div className="flex items-center gap-3 mb-2">
                  <span className="p-2 rounded-xl bg-orange-100 text-[#E8652B]">
                    <Users className="w-5 h-5" />
                  </span>
                  <h4 className="font-bold text-neutral-900 text-base">Subcontractor Portal Inclusions</h4>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                  Subbies log in to view assigned work orders, allocate to their internal drivers, see real-time Mapbox
                  routes, and upload delivery dockets directly into your system.
                </p>
                <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block">
                  ✓ Always Free for Subcontractors
                </span>
              </div>

              <div className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50/70">
                <div className="flex items-center gap-3 mb-2">
                  <span className="p-2 rounded-xl bg-blue-100 text-blue-600">
                    <Building2 className="w-5 h-5" />
                  </span>
                  <h4 className="font-bold text-neutral-900 text-base">Client Self-Serve Portal Inclusions</h4>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                  Civil contractors and quarry customers log in to track deliveries, view signed POD dockets in real-time,
                  and download billing summaries without calling dispatch.
                </p>
                <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block">
                  ✓ Always Free for Clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="py-20 bg-neutral-50/60 border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Got Questions?
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Frequently asked commercial questions
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              Clear, transparent answers about pricing, contracts, and onboarding.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left font-bold text-neutral-900 text-sm sm:text-base cursor-pointer hover:bg-neutral-50/60 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronRight
                      className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-90 text-[#E8652B]" : ""
                        }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final Conversion CTA ── */}
      <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-950/80 px-3 py-1 rounded-full border border-orange-800">
                Ready for Live Operations?
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Upgrade your haulage operations with zero guesswork.
              </h2>
              <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
                Book a 20-minute tailored walkthrough. We will review your fleet, rate cards, and dispatch workflows
                and provide a custom, audit-ready operational proposal within 24 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 shrink-0">
              <a
                href="https://calendly.com/admin-haulageops/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#E8652B] hover:bg-[#D05520] text-white font-bold px-8 py-6 text-base rounded-xl shadow-lg cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule 20-Min Call</span>
                </Button>
              </a>

              <a
                href="https://wa.me/61426887862?text=Hi%20HaulageOps%2C%20I%20have%20questions%20regarding%20pricing%20and%20fleet%20onboarding."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neutral-700 bg-neutral-800/80 hover:bg-neutral-800 text-white font-bold px-6 py-6 text-base rounded-xl cursor-pointer flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

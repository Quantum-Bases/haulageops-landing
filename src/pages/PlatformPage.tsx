"use client";

import { useState } from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Smartphone,
  Users,
  Building,
  Shield,
  FileText,
  Layers,
  ChevronRight,
  WifiOff,
  RefreshCw,
  Lock,
  Zap,
  MapPin,
  Clock,
  Sparkles,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import { FaqSection } from "@/components/shared/FaqSection";

const portals = [
  {
    id: "dispatch",
    badge: "Operational Nerve Centre",
    name: "Admin & Dispatch Control",
    icon: Layers,
    heroTitle: "Master allocation for owned trucks & subcontracted fleets.",
    summary:
      "A fast, high-density dispatch board engineered for dispatchers handling 20 to 100+ loads a day without spreadsheet gridlock.",
    features: [
      "Drag-and-drop multi-leg job creation with material, quarry, and site specs",
      "Instant allocation to internal company drivers or external subcontractors",
      "Live status monitoring (En Route, On Site, Loaded, Delivered)",
      "Automated dual rate calculation: client charge vs subcontractor pay",
      "Real-time vehicle availability and driver compliance warnings",
      "Bulk assignment tools for large civil infrastructure projects",
    ],
    techSpec: "Web-based responsive dashboard • Multi-user real-time state • Role-based permissions",
    href: "/platform/dispatch-management",
  },
  {
    id: "driver",
    badge: "Field Mobility",
    name: "Driver Mobile App (iOS & Android)",
    icon: Smartphone,
    heroTitle: "Offline-capable docket capture and instant delivery proof.",
    summary:
      "Designed specifically for bulk tipper drivers working in deep quarries, remote roads, and low-connectivity construction zones.",
    features: [
      "Offline-first architecture — full operation without cellular reception",
      "3-tap photo docket capture with auto-enhancement and timestamping",
      "Digital customer sign-on-glass proof of delivery (POD)",
      "Push notifications for new jobs, schedule revisions, and site safety alerts",
      "Automated GPS breadcrumbs and geofenced site arrivals",
      "Mandatory pre-start vehicle inspections and break logging",
    ],
    techSpec: "Native iOS & Android • SQLite local database • Auto-sync background daemon",
    href: "/platform/driver-app",
  },
  {
    id: "subcontractor",
    badge: "Zero Licence Fees",
    name: "Subcontractor Portal",
    icon: Users,
    heroTitle: "Empower external subbies without paying for extra seats.",
    summary:
      "A dedicated, secure portal for your external haulage contractors to receive work, update progress, and submit dockets directly.",
    features: [
      "Dedicated authenticated portal access with zero per-seat fees to you or them",
      "Subcontractors accept or decline assigned jobs with one click",
      "Interactive Mapbox route navigation and turn-by-turn site directions",
      "Direct docket and weighbridge slip upload from any browser or phone",
      "Automated Recipient Created Tax Invoices (RCTIs) generated from verified dockets",
      "Clear payment status visibility to eliminate 'where is my money' phone calls",
    ],
    techSpec: "Zero-install web portal • SMS/Email job dispatch links • Isolated multi-tenant security",
    href: "/platform/subcontractor-portal",
  },
  {
    id: "client",
    badge: "Client Self-Service",
    name: "Client Experience Portal",
    icon: Building,
    heroTitle: "End client 'where is my truck' calls forever.",
    summary:
      "A branded, transparent window for your head contractors, developers, and quarry customers to view their job progress self-sufficiently.",
    features: [
      "Live load status tracking and delivery confirmation feeds",
      "Instant self-service download of signed dockets and delivery photos",
      "Transparent breakdown of historical jobs, tonnages, and materials",
      "View and download current rate schedules agreed between both parties",
      "Invoice archive with direct Xero payment status integration",
      "Drastically reduces inbound dispatch interruptions and enquiry emails",
    ],
    techSpec: "Custom-branded client dashboard • Read-only access control • Secure document links",
    href: "/platform/client-portal",
  },
  {
    id: "financial",
    badge: "Commercial Control",
    name: "Management & Billing Engine",
    icon: BarChart3,
    heroTitle: "Commercial margin visibility and 2-way Xero synchronisation.",
    summary:
      "Bridge the costly gap between operational field dockets and commercial finance. Cut your invoice cycle from 3 weeks to 48 hours.",
    features: [
      "Two-way OAuth2 direct integration with Xero accounting",
      "Instant conversion of verified dockets into customer draft invoices",
      "Automated subcontractor bill creation matched against agreed pay rates",
      "Real-time job-level gross profit margin calculations before sending bills",
      "Comprehensive Chain of Responsibility (CoR) and safety audit logs",
      "Exportable operational reports for material volumes, tonnages, and plant hours",
    ],
    techSpec: "Xero Certified OAuth2 • Automated reconciliation • Immutable audit ledger",
    href: "/platform/billing-and-invoicing",
  },
];

const techPillars = [
  {
    icon: WifiOff,
    title: "Offline-First Resilience",
    desc: "Mobile devices store dockets and GPS breadcrumbs in local encrypted SQLite. When trucks enter zero-signal quarries, work never stops.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Cloud Vault",
    desc: "All photos, signed dockets, and rate cards are stored in high-availability cloud storage with tamper-evident audit trails.",
  },
  {
    icon: RefreshCw,
    title: "Bi-Directional Xero Sync",
    desc: "No double handling. Invoices and subcontractor bills flow directly into your accounting ledger with attached digital dockets.",
  },
  {
    icon: Shield,
    title: "Granular Role Governance",
    desc: "Subcontractors cannot see client rates. Clients cannot see subbie costs. Each persona operates strictly within their perimeter.",
  },
];

export function PlatformPage() {
  const [selectedPortal, setSelectedPortal] = useState(0);
  const activePortal = portals[selectedPortal];
  const ActiveIcon = activePortal.icon;

  return (
    <MainLayout>
      {/* 1. Hero Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-neutral-50/80 via-white to-white text-neutral-900 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Platform</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Unified Operations Blueprint
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.08]">
              One single platform. Five tailored portals.
              <span className="block text-[#E8652B] mt-2">Every party on the exact same job.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl font-normal">
              HaulageOps replaces fragmented spreadsheets, messaging groups, and paper dockets with a unified, role-governed operating system connecting dispatchers, internal drivers, external subcontractors, and paying clients.
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
                  View Licensing & Scope
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Portal Deep Dive */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Interactive Architecture</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Explore the Five Dedicated Portals
            </h2>
            <p className="mt-3 text-neutral-600 text-base">
              Click through the tabs below to see how each operational stakeholder interacts with the platform in real time.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-neutral-200/70 rounded-2xl max-w-4xl mx-auto mb-10">
            {portals.map((portal, idx) => {
              const Icon = portal.icon;
              const isActive = selectedPortal === idx;
              return (
                <button
                  key={portal.id}
                  onClick={() => setSelectedPortal(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-white text-neutral-900 shadow-sm border border-neutral-200"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/50"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-[#E8652B]" : "text-neutral-500"}`} />
                  <span>{portal.name.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Portal Feature Card */}
          <div className="bg-white rounded-3xl border border-neutral-200 shadow-md p-8 sm:p-12 transition-all">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4">
                  <ActiveIcon className="h-3.5 w-3.5" />
                  {activePortal.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 leading-tight">
                  {activePortal.name}
                </h3>
                <p className="text-base text-[#E8652B] font-semibold mt-1">
                  {activePortal.heroTitle}
                </p>
                <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {activePortal.summary}
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-3.5">
                  {activePortal.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                      <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono text-neutral-500">
                    {activePortal.techSpec}
                  </span>
                  <Link
                    href={activePortal.href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#E8652B] hover:text-[#D05520]"
                  >
                    View In-Depth Specs <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Graphical Blueprint Box */}
              <div className="lg:col-span-5 bg-neutral-900 rounded-2xl p-6 sm:p-8 text-white border border-neutral-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8652B]/15 rounded-full blur-2xl" />
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-5">
                  <span className="text-xs font-mono text-neutral-400">PORTAL SIMULATION</span>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                    ACTIVE
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-neutral-800/90 rounded-xl border border-neutral-700">
                    <div className="text-neutral-400 text-[10px] uppercase tracking-wider">Live Job Record #HO-8492</div>
                    <div className="text-white font-bold text-sm mt-0.5">Penrith Quarry → Western Airport Civil</div>
                  </div>

                  <div className="p-3 bg-neutral-800/90 rounded-xl border border-neutral-700 flex justify-between items-center">
                    <div>
                      <div className="text-neutral-400 text-[10px]">CURRENT MATERIAL</div>
                      <div className="text-neutral-200 font-semibold">20mm Recycled Roadbase</div>
                    </div>
                    <span className="text-[#E8652B] font-bold text-xs bg-[#E8652B]/10 px-2 py-1 rounded">
                      32.40 Tonnes
                    </span>
                  </div>

                  <div className="p-3 bg-neutral-800/90 rounded-xl border border-neutral-700 space-y-1.5">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-neutral-400">Assigned Asset:</span>
                      <span className="text-white font-semibold">Truck 14 + Super Dog</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-neutral-400">Driver Mode:</span>
                      <span className="text-emerald-400 font-semibold">Offline Verified (Sync Ready)</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-neutral-400">Xero Status:</span>
                      <span className="text-blue-400 font-semibold">Draft Invoiced #INV-9201</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-800 text-center">
                  <Link href="/demo" className="text-xs text-[#E8652B] hover:underline font-bold inline-flex items-center gap-1">
                    See this live in a walkthrough <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Portals Grid Overview */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">All Portals at a Glance</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Role-Specific Interfaces for Maximum Speed
            </h2>
            <p className="mt-3 text-neutral-600 text-base">
              Explore the dedicated technical specifications for each module of the platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portals.map((portal) => {
              const IconComp = portal.icon;
              return (
                <div
                  key={portal.id}
                  className="bg-neutral-50/40 border border-neutral-200 rounded-2xl p-7 flex flex-col justify-between hover:border-[#E8652B]/60 transition-all shadow-xs"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E8652B] mb-5">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8652B] block mb-1">
                      {portal.badge}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-900">{portal.name}</h3>
                    <p className="text-xs text-neutral-600 mt-2 leading-relaxed font-normal">{portal.summary}</p>
                    
                    <ul className="mt-5 space-y-2">
                      {portal.features.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-neutral-700">
                          <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-200">
                    <Link
                      href={portal.href}
                      className="text-xs font-bold text-[#E8652B] hover:text-[#D05520] flex items-center justify-between"
                    >
                      <span>Specifications & workflows</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Technical Foundations Grid */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Enterprise Reliability</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Engineered for Dusty Yards & Heavy Operations
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techPillars.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-[#E8652B] flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900">{item.title}</h3>
                  <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-normal">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <FaqSection />

      {/* 6. CTA Footer */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] mb-2 block">
              Experience the Full Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              See all five portals working in sync.
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              We'll walk you through a live job lifecycle in 20 minutes — from order entry to driver photo docket, subbie RCTI, and final Xero invoice sync.
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
                Talk to an Specialist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default PlatformPage;

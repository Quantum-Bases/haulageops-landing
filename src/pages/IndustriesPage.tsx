"use client";

import { useState } from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Truck,
  Building2,
  Mountain,
  HardHat,
  ChevronRight,
  Sparkles,
  Layers,
  FileText,
  Clock,
  Shield,
  XCircle,
  Navigation,
} from "lucide-react";
import { FaqSection } from "@/components/shared/FaqSection";

const industrySectors = [
  {
    name: "Bulk Haulage Operations",
    icon: Truck,
    badge: "Core Sector",
    desc: "Per-tonne, per-load, and hourly cartage across owned prime movers and external subbies. High volume, strict customer rate matrices, and rapid docket reconciliation.",
    href: "/industries/bulk-haulage",
    operationalFocus: [
      "Dynamic dual-rate engine (per-tonne client charge vs per-load subbie pay)",
      "Instant allocation to internal drivers or subcontracted fleet operators",
      "Real-time driver location and automated delivery timestamping",
      "Two-way Xero sync with automated Recipient Created Tax Invoices (RCTIs)",
    ],
    metric: "48-Hour Invoicing",
  },
  {
    name: "Tipper Fleets & Truck & Dogs",
    icon: Layers,
    badge: "High Frequency",
    desc: "Rigid tippers, truck & dogs, semi-tippers, and live-bottom trailers running rapid short-haul circuits between quarries, batch plants, and civil sites.",
    href: "/industries/tipper-fleets",
    operationalFocus: [
      "Rapid dispatch board optimized for 40 to 120 daily tipper loads",
      "Instant photo docket capture right from the driver's cab",
      "Driver availability scheduling and mandatory pre-start safety checklists",
      "Live turnaround cycle time tracking across loading and tipping zones",
    ],
    metric: "Zero Cab Paperwork",
  },
  {
    name: "Quarries & Aggregates",
    icon: Mountain,
    badge: "Heavy Materials",
    desc: "High-tonnage aggregate, gravel, and sand transport requiring weighbridge scale ticket verification and offline-capable mobile software in deep pits.",
    href: "/industries/quarries-and-aggregates",
    operationalFocus: [
      "Offline mobile app works in cellular dead zones inside quarry basins",
      "Weighbridge docket photo capture with three-layer verification",
      "Client self-service portal for instant quarry docket retrieval",
      "Material code and quarry pit specific pricing matrices",
    ],
    metric: "100% Offline Capable",
  },
  {
    name: "Civil Construction Logistics",
    icon: HardHat,
    badge: "Infrastructure",
    desc: "Major roadworks, civil subdivisions, and infrastructure projects requiring rigorous Chain of Responsibility (CoR) compliance and strict site safety tracking.",
    href: "/industries/civil-construction",
    operationalFocus: [
      "Immutable audit trail capturing all dispatch changes and timestamps",
      "Driver licence, site induction, and insurance expiry tracking",
      "Driver break logs and fatigue management compliance records",
      "Head contractor portal for live job tracking and safety document access",
    ],
    metric: "Audit-Ready CoR",
  },
  {
    name: "Earthworks & Spoil Cartage",
    icon: Navigation,
    badge: "Excavation",
    desc: "Project-based mass earthmoving requiring rapid surge capacity from subcontractors, tip-site tracking, and clear soil classification docket management.",
    href: "/industries/earthworks",
    operationalFocus: [
      "Rapid delegation to 20+ external subcontractors without per-seat fees",
      "Tip-site location tracking and automated tip-fee docket reconciliation",
      "Daily project volumetric reports and hourly plant hire sheets",
      "Clean client billing by site code, stage, or head contractor reference",
    ],
    metric: "Free Subbie Portal",
  },
  {
    name: "Muckaway & Environmental Spoil",
    icon: Building2,
    badge: "Regulated Waste",
    desc: "Controlled disposal and cartage of VENM, ENM, contaminated fill, and demolition spoil requiring strict tip-docket tracking and regulatory traceability.",
    href: "/industries/muckaway-and-spoil",
    operationalFocus: [
      "Mandatory tip-site docket photo attachment before job closure",
      "Clear tracking of disposal permits and soil classification certificates",
      "Customer verification dockets available instantly for EPA compliance",
      "Real-time volume tracking against site excavation budgets",
    ],
    metric: "Immutable Traceability",
  },
];

export function IndustriesPage() {
  return (
    <MainLayout>
      {/* 1. Hero Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-neutral-50/80 via-white to-white text-neutral-900 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Industries</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Heavy Materials & Transport Sectors
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.08]">
              Purpose-built for bulk haulage, civil earthworks &
              <span className="block text-[#E8652B] mt-2">heavy material operations.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl font-normal">
              From high-frequency tipper fleets to quarry weighbridge runs and large-scale civil projects, HaulageOps adapts to the exact commercial and operational nuances of your sector.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/demo">
                <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-bold cursor-pointer shadow-sm">
                  Book an Industry Walkthrough
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-bold">
                  View Fleet Consultation Scope
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Industries Grid */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Sector Specialisation</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Tailored Capabilities for Your Fleet
            </h2>
            <p className="mt-3 text-neutral-600 text-base">
              Explore how HaulageOps supports your specific material types, billing units, and site workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySectors.map((sector) => {
              const IconComp = sector.icon;
              return (
                <div
                  key={sector.name}
                  className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between hover:border-[#E8652B]/70 transition-all shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-[#E8652B] flex items-center justify-center">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-bold text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-full border border-neutral-200">
                        {sector.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-neutral-900">{sector.name}</h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed font-normal">{sector.desc}</p>

                    <div className="mt-6 pt-5 border-t border-neutral-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8652B] block mb-3">
                        Operational Workflows:
                      </span>
                      <ul className="space-y-2.5">
                        {sector.operationalFocus.map((focus) => (
                          <li key={focus} className="flex items-start gap-2 text-xs text-neutral-700">
                            <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{focus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-500 bg-neutral-50 px-2.5 py-1 rounded border border-neutral-200">
                      {sector.metric}
                    </span>
                    <Link
                      href={sector.href}
                      className="text-xs font-bold text-[#E8652B] hover:text-[#D05520] inline-flex items-center gap-1"
                    >
                      <span>Explore Sector</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. The Specialisation Boundary */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-900 rounded-3xl p-8 sm:p-12 text-white border border-neutral-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8652B]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] block mb-2">
                Operational Clarity
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Why we say no to general freight and couriers.
              </h3>
              <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                General freight software doesn't know what a weighbridge scale ticket is. It doesn't know how to handle 32.40 tonnes of 20mm aggregate, nor does it understand paying an owner-driver an RCTI split while charging a head contractor on a tiered rate card. By staying 100% focused on bulk haulage, civil earthworks, and tipper fleets, our platform fits your business from day one without custom development.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-wrap gap-6 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#E8652B]" />
                <span>Heavy Bulk Tippers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#E8652B]" />
                <span>Civil Earthworks Fleets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#E8652B]" />
                <span>Quarry & Aggregate Logistics</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-rose-400" />
                <span>Zero Parcel Couriers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQs */}
      <FaqSection />

      {/* 5. CTA Footer */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] mb-2 block">
              Built for Your Exact Sector
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              See HaulageOps configured for your fleet.
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Book a 20-minute consultation. We'll show you the exact rate cards, docket workflows, and subcontractor portals relevant to your haulage operations.
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

export default IndustriesPage;

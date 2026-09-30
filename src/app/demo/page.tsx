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
  Clock,
  Video,
  ShieldCheck,
  Monitor,
  Smartphone,
  Building2,
  FileCheck,
  FileText,
  Users,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { DemoBookingForm } from "@/components/demo/DemoBookingForm";

const kickerPills = [
  "20-Minute Workflow",
  "No Slide Decks",
  "Recorded for Your Team",
  "Proposal Within 24h",
  "Zero Sales Pressure",
];

const lifecycleSteps = [
  {
    num: "01",
    title: "Job Creation & Rate Engine",
    desc: "Create a job with client, pickup quarry, tip site, material, and target tonnage. Rate cards auto-populate from agreed client agreements (per-tonne, hourly, or fixed load).",
    icon: FileText,
  },
  {
    num: "02",
    title: "Owned & Subcontractor Allocation",
    desc: "Assign to an owned tipper driver or delegate directly to a subcontractor via their free portal. Keep visibility of subbie allocations without sharing client billing rates.",
    icon: Users,
  },
  {
    num: "03",
    title: "Live Socket.io Dispatch",
    desc: "Real-time dispatch board updates as drivers change states (Loading, In Transit, On Site) without page refreshes. Distance & ETA calculated via Google Maps API.",
    icon: Monitor,
  },
  {
    num: "04",
    title: "Driver Mobile App & Offline POD",
    desc: "Drivers complete pre-starts, capture docket photos, record weighbridge weights, and collect receiver signatures. Works completely offline on remote civil sites.",
    icon: Smartphone,
  },
  {
    num: "05",
    title: "Client Self-Serve Portal",
    desc: "Clients log in to their authenticated portal to track job deliveries live, view signed POD dockets, and download summaries without calling dispatch.",
    icon: Building2,
  },
  {
    num: "06",
    title: "Automated Xero Invoicing",
    desc: "Raise invoices with verified dockets attached. 6-hourly OAuth2 sync pushes transactions to Xero. When clients pay in Xero, HaulageOps updates automatically.",
    icon: FileCheck,
  },
];

const attendPoints = [
  {
    role: "Operations Manager or Director",
    desc: "Evaluates fleet utilization, subcontractor delegation, and operational visibility.",
  },
  {
    role: "Head Dispatcher or Fleet Allocator",
    desc: "Tests daily job scheduling, live status boards, and driver app communication.",
  },
  {
    role: "Finance or Billing Coordinator",
    desc: "Inspects rate cards, docket verification, subcontractor RCTIs, and Xero sync.",
  },
];

const prepCards = [
  {
    title: "A Typical Job Type",
    desc: "Think of your most common run — bulk earthworks, quarry aggregate supply, road base, or spoil cartage. We'll build that exact job live so the demo matches your commercial reality.",
  },
  {
    title: "Approximate Fleet Mix",
    desc: "Your rough numbers: owned trucks, regular subcontractor fleet, and active clients. This helps us configure the right rate tiers and show how the subbie portal will function.",
  },
  {
    title: "Current Operational Friction",
    desc: "What hurts right now: paper dockets lost in gloveboxes, WhatsApp dispatch chaos, late invoicing, or constant client status calls. We'll zero in on solving those first.",
  },
];

const fleetSizeOptions = [
  "Under 15 vehicles",
  "15–25 vehicles",
  "26–50 vehicles",
  "51–80 vehicles",
  "80+ vehicles (Multi-depot)",
];

const currentSystemOptions = [
  "Spreadsheets & WhatsApp",
  "Paper Dockets & Manual Invoicing",
  "Allotrac",
  "MyTrucking",
  "Other Transport Management System",
];

const faqs = [
  {
    q: "Is this a sales pitch or a practical demonstration?",
    a: "It is an operational walkthrough. We run through a live job from creation to Xero invoicing on the actual software — no PowerPoint slides. If HaulageOps isn't the right fit for your specific fleet setup, we will tell you directly on the call.",
  },
  {
    q: "Can you record the walkthrough for my business partners?",
    a: "Yes. Simply let us know at the start of the session and we will record the full video walkthrough. We will send you the private link immediately after so you can share it with directors, dispatchers, or your bookkeeping team.",
  },
  {
    q: "Do I need to prepare or install any software beforehand?",
    a: "Nothing at all. The demo runs directly in your web browser (Google Meet, Zoom, or Teams). You only need 20 minutes and a rough idea of your fleet size and primary haulage materials.",
  },
  {
    q: "How soon can our fleet go live after the walkthrough?",
    a: "Most operators go live within 2 to 4 weeks. Following the demo, we provide a written operational proposal within 24 hours. Once confirmed, our team handles data migration, rate card setup, driver onboarding, and Xero integration.",
  },
  {
    q: "What types of operations is HaulageOps built for?",
    a: "HaulageOps is purpose-built for bulk haulage, earthworks, civil construction, quarries, aggregates, muckaway, and tipper fleets managing owned trucks and subcontractor networks. It is not designed for parcel courier delivery or 3PL pallet warehousing.",
  },
];

export default function DemoPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <MainLayout showCta={false}>
      {/* ── Split Hero + Booking Card (Above the Fold) ── */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-neutral-50 via-white to-white text-neutral-900 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-bold">Book a Demo</span>
          </nav>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            {/* Left Column: Value Proposition & What to Expect */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200/80 mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>20-Minute Operational Walkthrough</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-900 leading-[1.1]">
                See your real haulage workflow live on{" "}
                <span className="text-[#E8652B]">HaulageOps</span>.
              </h1>

              <p className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
                No generic pitch decks. We walk through a single job the way your business actually operates — from
                dispatch board allocation through to driver mobile POD, free subcontractor portal view, and Xero-synced invoicing.
              </p>

              {/* Core Inclusions List */}
              <div className="mt-8 space-y-3.5">
                {[
                  "Live drag-and-drop dispatch board with real-time driver tracking",
                  "Driver mobile app with offline photo docket & receiver signature capture",
                  "Dedicated Subcontractor Portal — 100% free for your external subbies",
                  "Client Self-Serve Portal for live tracking & instant POD access",
                  "Two-way Xero OAuth2 sync connecting verified dockets directly to invoices",
                  "Australian Chain of Responsibility (CoR) fatigue & compliance audit logs",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold text-neutral-800 leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Assurance Pills */}
              <div className="mt-8 pt-8 border-t border-neutral-200 flex flex-wrap gap-2.5">
                {kickerPills.map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-neutral-100 text-neutral-700 border border-neutral-200"
                  >
                    <Check className="w-3 h-3 text-[#E8652B]" />
                    <span>{pill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Direct Calendly & Booking Form Card */}
            <div>
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-neutral-200 shadow-xl shadow-neutral-200/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8652B]" />
                    <h3 className="text-xl font-black text-neutral-900">Schedule Your Session</h3>
                  </div>
                  <span className="text-xs font-bold text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-md">
                    20 Mins
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 mb-6 leading-relaxed">
                  Choose a direct meeting time on Calendly, or share your details below so we can prepare your fleet scope.
                </p>

                {/* Direct 1-Click Calendly Button */}
                <a
                  href="https://calendly.com/admin-haulageops/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-5"
                >
                  <Button
                    size="lg"
                    className="w-full bg-[#E8652B] hover:bg-[#D05520] text-white font-bold py-6 text-base rounded-xl shadow-md shadow-orange-500/20 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Pick Instant Time via Calendly →</span>
                  </Button>
                </a>

                {/* Subtle Divider */}
                <div className="relative flex py-2 items-center mb-5">
                  <div className="flex-grow border-t border-neutral-200"></div>
                  <span className="flex-shrink mx-3 text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                    Or Share Details First
                  </span>
                  <div className="flex-grow border-t border-neutral-200"></div>
                </div>

                {/* Lead Ingestion Form (writes to Google Sheets /api/leads) */}
                <DemoBookingForm
                  fleetSizeOptions={fleetSizeOptions}
                  currentSystemOptions={currentSystemOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive Workflow Visual (Replacing Raw Text Placeholder) ── */}
      <section className="py-20 bg-neutral-900 text-white border-y border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-950/80 px-3 py-1 rounded-full border border-orange-800">
              Live Architecture
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white tracking-tight">
              One connected ecosystem. Zero fragmented silos.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400">
              During the walkthrough, you will watch one live load travel smoothly across all three operational interfaces.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* View 1: Dispatch Board */}
            <div className="bg-neutral-800/80 rounded-2xl p-6 border border-neutral-700/80 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-700">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-[#E8652B]" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">01. Dispatch Board</span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Live Socket.io
                </span>
              </div>
              <div className="mt-5 space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-700/60">
                  <div className="flex justify-between text-neutral-400 mb-1">
                    <span>JOB-9012</span>
                    <span className="text-emerald-400 font-bold">On Route (12m ETA)</span>
                  </div>
                  <p className="text-white font-bold text-sm">Boral Quarry &rarr; Runway Site B</p>
                  <p className="text-neutral-400 text-[11px] mt-1">Truck #08 · Driver: John Mitchell · 32.4t Agg</p>
                </div>
                <p className="text-neutral-400 text-xs font-sans mt-3 leading-relaxed">
                  Dispatcher drags job to Truck #08. Instant audio alert sounds on driver phone. No phone calls needed.
                </p>
              </div>
            </div>

            {/* View 2: Driver Mobile App */}
            <div className="bg-neutral-800/80 rounded-2xl p-6 border border-neutral-700/80 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-700">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#E8652B]" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">02. Driver Mobile App</span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  Offline Sync
                </span>
              </div>
              <div className="mt-5 space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-700/60">
                  <div className="flex justify-between text-neutral-400 mb-1">
                    <span>POD CAPTURE</span>
                    <span className="text-blue-400 font-bold">Docket #DK-88271</span>
                  </div>
                  <p className="text-white font-bold text-sm">Docket Photo Attached</p>
                  <p className="text-neutral-400 text-[11px] mt-1">Customer E-Signature Captured: G. Davies</p>
                </div>
                <p className="text-neutral-400 text-xs font-sans mt-3 leading-relaxed">
                  Driver photographs physical docket at weighbridge. Tonnage and signature attach to cloud instantly.
                </p>
              </div>
            </div>

            {/* View 3: Client Portal & Xero */}
            <div className="bg-neutral-800/80 rounded-2xl p-6 border border-neutral-700/80 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-700">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#E8652B]" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">03. Client Portal & Xero</span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  OAuth2 Synced
                </span>
              </div>
              <div className="mt-5 space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-700/60">
                  <div className="flex justify-between text-neutral-400 mb-1">
                    <span>INVOICE #INV-1092</span>
                    <span className="text-purple-400 font-bold">Matched to POD</span>
                  </div>
                  <p className="text-white font-bold text-sm">Synced to Xero Accounting</p>
                  <p className="text-neutral-400 text-[11px] mt-1">Client views verified load docket online without calling</p>
                </div>
                <p className="text-neutral-400 text-xs font-sans mt-3 leading-relaxed">
                  Invoice is generated automatically with docket image attached. Client views proof online; Xero records payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6-Step End-to-End Walkthrough Sequence ── */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Walkthrough Scope
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              One end-to-end job. Every operational step covered.
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              We follow the exact journey your dispatchers, drivers, and accountants experience every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycleSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200 shadow-xs hover:border-[#E8652B] hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black tracking-widest text-[#E8652B] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200/80">
                      STEP {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-neutral-100 group-hover:bg-orange-500 group-hover:text-white text-neutral-600 flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#E8652B] transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Who Should Attend & Preparation Guide ── */}
      <section className="py-20 bg-neutral-50/60 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Attendees Column */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Team Alignment
              </span>
              <h2 className="mt-3 text-3xl font-black text-neutral-900 tracking-tight">
                Who should attend the 20-minute session
              </h2>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                The demonstration is most effective when the people running the real operation can evaluate the platform together.
              </p>

              <div className="mt-8 space-y-4">
                {attendPoints.map((attendee) => (
                  <div
                    key={attendee.role}
                    className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-xs flex items-start gap-4"
                  >
                    <div className="p-2.5 rounded-xl bg-orange-50 text-[#E8652B] shrink-0 border border-orange-200/80">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-sm">{attendee.role}</h4>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">{attendee.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation Column */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Session Preparation
              </span>
              <h2 className="mt-3 text-3xl font-black text-neutral-900 tracking-tight">
                What to have in mind before the call
              </h2>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                No formal brief required. Having these 3 details handy helps us tailor the session to your reality.
              </p>

              <div className="mt-8 space-y-4">
                {prepCards.map((prep) => (
                  <div
                    key={prep.title}
                    className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-xs flex items-start gap-4"
                  >
                    <div className="p-2.5 rounded-xl bg-neutral-100 text-neutral-800 shrink-0 border border-neutral-200">
                      <Check className="w-5 h-5 text-[#E8652B]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-sm">{prep.title}</h4>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">{prep.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Demo Details
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Frequently asked questions about the walkthrough
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              Transparent, straightforward answers so you know exactly what to expect.
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
                      className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-90 text-[#E8652B]" : ""
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
                See HaulageOps configured for your fleet.
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
                  <span>Pick Instant Calendly Slot</span>
                </Button>
              </a>

              <a
                href="https://wa.me/61426887862?text=Hi%20HaulageOps%2C%20I%20would%20like%20to%20schedule%20a%20platform%20walkthrough."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neutral-700 bg-neutral-800/80 hover:bg-neutral-800 text-white font-bold px-6 py-6 text-base rounded-xl cursor-pointer flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Ask via WhatsApp</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

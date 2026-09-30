"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  ArrowRight,
  Monitor,
  Users,
  Building2,
  Smartphone,
  ChevronRight,
  Check,
  Sparkles,
  ShieldCheck,
  FileText,
  Camera,
  Clock,
  TrendingUp,
  Receipt,
  MapPin,
  Layers,
  Lock,
  CheckCircle2,
  AlertTriangle,
  Truck,
  FileCheck,
  Eye,
  RefreshCw,
  Sliders,
  Calendar,
  XCircle,
  HelpCircle,
} from "lucide-react";

export default function HowItWorksPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activePersona, setActivePersona] = useState<"admin" | "subbie" | "client" | "driver">("admin");
  const [activeLifecycleStep, setActiveLifecycleStep] = useState(0);
  const [activeDiff, setActiveDiff] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const lifecycleSteps = [
    {
      step: "01",
      title: "Job Creation",
      short: "Create",
      desc: "Client, route, product specification, tonnage target & dual rate cards.",
      detailTitle: "Single Entry, Permanent Record",
      detailDesc: "Input order parameters once. HaulageOps locks the client charge rate and subcontractor pay rate with effective dates, assigning geofences to pickup and drop-off points.",
      highlights: [
        "Effective-dated rate locking",
        "Geofenced quarry & tip sites",
        "Tonnage / load / hourly rules",
        "Duplicate order prevention",
      ],
      metric: "< 45 seconds to create and dispatch",
    },
    {
      step: "02",
      title: "Smart Delegation",
      short: "Delegate",
      desc: "Assign to internal fleet or push to external subcontractor portals instantly.",
      detailTitle: "Zero Phone Calls Required",
      detailDesc: "Dispatch jobs directly to internal drivers or assign bulk allocations to approved subcontractors. Subbies accept or decline in their dedicated portal with client rates 100% hidden.",
      highlights: [
        "Internal driver direct assignment",
        "Subbie batch allocation queue",
        "Automatic compliance verification",
        "SMS & push job alerts",
      ],
      metric: "100% subcontractor privacy maintained",
    },
    {
      step: "03",
      title: "Live Operations & Tracking",
      short: "Track Live",
      desc: "Real-time truck telemetry, site turnarounds, and route progress without radio calls.",
      detailTitle: "Total Operational Clarity",
      detailDesc: "Dispatchers, subbies, and clients see live truck statuses (En Route, Loading, In Transit, On Site) powered by Mapbox and GPS geofences.",
      highlights: [
        "Live truck location & speed",
        "Site geofence entry/exit stamps",
        "Turnaround & demurrage tracking",
        "Role-filtered map visibility",
      ],
      metric: "Zero 'where is my truck' client phone calls",
    },
    {
      step: "04",
      title: "Mobile POD & AI OCR",
      short: "Capture POD",
      desc: "Driver scans weighbridge dockets with 3-layer AI verification and site sign-off.",
      detailTitle: "Paper Replaced at the Weighbridge",
      detailDesc: "The driver app uses high-accuracy OCR to extract docket numbers, gross, tare, and net weights directly at the weighbridge. Captures tip photos and digital signatures even when 100% offline.",
      highlights: [
        "Offline-capable iOS & Android app",
        "3-layer net tonnage verification",
        "Timestamped GPS photo proof",
        "Digital site supervisor sign-off",
      ],
      metric: "99.8% OCR accuracy on standard weighbridge dockets",
    },
    {
      step: "05",
      title: "Two-Sided Invoicing",
      short: "Invoice & RCTI",
      desc: "Automated client sales invoices and subcontractor RCTIs generated from verified dockets.",
      detailTitle: "Instant Financial Reconciliation",
      detailDesc: "Verified dockets automatically calculate client invoice lines and subcontractor RCTIs simultaneously. Push directly to Xero via OAuth2 with attachments and zero manual re-keying.",
      highlights: [
        "Itemised client invoices",
        "Auto-generated subbie RCTIs",
        "Two-way Xero invoice sync",
        "Margin locked per load",
      ],
      metric: "Cut billing turnaround from 14 days to same-day",
    },
    {
      step: "06",
      title: "Immutable Audit Vault",
      short: "Audit & CoR",
      desc: "Every rate change, pre-start, docket, and status change permanently logged.",
      detailTitle: "Disputes Resolved in 30 Seconds",
      detailDesc: "Complete audit trails record who changed a rate, who signed for a load, pre-start safety checklists, and driver fatigue compliance ready for HVNL and client tenders.",
      highlights: [
        "Immutable cryptographic action logs",
        "Pre-start inspection archives",
        "Driver fatigue & break checks",
        "Exportable tender compliance packs",
      ],
      metric: "100% audit-ready compliance archive",
    },
  ];

  const differences = [
    {
      num: "01",
      title: "Four personas. One live job record.",
      subtitle: "Difference 1 of 5",
      quote: "“The industry is scattered. I need one window where everything is.”",
      whatWeDo:
        "Admin, subcontractor, client and driver each work in their own dedicated portal on the exact same live job. Delegate to a subbie without losing sight of it. Status, evidence and location flow straight back. Role-based access control (RBAC) decides strictly what each party sees.",
      inProduct: [
        "Subcontractor portal with dedicated login and zero client rate visibility",
        "Client portal white-labelled per client with live tracking & POD download",
        "Granular Role-based Access Control (RBAC) across all operations",
        "Instant multi-channel push and email notifications on job milestones",
      ],
      takeaway: "You delegate the job to anyone and keep 100% real-time visibility.",
    },
    {
      num: "02",
      title: "AI that reads the docket and the POD.",
      subtitle: "Difference 2 of 5",
      quote: "“About fifty docket photos a day come in over WhatsApp, and someone types every one of them in.”",
      whatWeDo:
        "The driver scans the docket at the weighbridge. Built-in OCR reads it instantly, and a three-layer verification checks the net tonnage against gross/tare calculations and order bounds before the record is accepted. Delivery photos and digital signatures attach directly to the load.",
      inProduct: [
        "In-app OCR docket capture with auto-cropping and contrast enhancement",
        "Three-layer tonnage verification (Gross - Tare = Net validation)",
        "Photo, document, weighbridge slip, and glass-signature POD capture",
        "100% offline-capable: queues scans safely and syncs when reconnected",
      ],
      takeaway: "Paper becomes billable at the weighbridge, not on Sunday night.",
    },
    {
      num: "03",
      title: "Two-sided money, from one job.",
      subtitle: "Difference 3 of 5",
      quote: "“I charge the client per tonne and pay the subbie hourly, and I reconcile that by hand.”",
      whatWeDo:
        "Each job carries client charge rates and subcontractor pay rates separately, effective-dated, with different billing methods on each side. The client invoice and the subcontractor RCTI are generated automatically from the exact same verified loads.",
      inProduct: [
        "Mixed rate models: per tonne, per load, hourly, minimums, or flat rate",
        "Separate, strictly confidential client and subbie rate matrices",
        "Auto-generated subcontractor Recipient Created Tax Invoices (RCTIs)",
        "Direct two-way Xero synchronization via secure OAuth2 connection",
      ],
      takeaway: "Margin is visible on the job in real time, not discovered at month end.",
    },
    {
      num: "04",
      title: "Auditability that turns into accountability.",
      subtitle: "Difference 4 of 5",
      quote: "“When a tender asks for evidence, we spend two days assembling it from paper, phones and inboxes.”",
      whatWeDo:
        "Every single action is logged against the job: who changed a rate, when a docket was captured, which driver signed the pre-start, what the client saw and when. Rate cards are versioned and effective-dated, so you can prove which rate applied on any date in history.",
      inProduct: [
        "Comprehensive all-actions audit trail with user and timestamp stamps",
        "Effective-dated rate card history with historic rollback protection",
        "Secure cloud document storage for weighbridge slips and site photos",
        "HVNL & Chain of Responsibility (CoR) pre-start and fatigue logs",
      ],
      takeaway: "Disputes end in thirty seconds with an audit record, not a week with a memory.",
    },
    {
      num: "05",
      title: "Live in two weeks, then shaped around you.",
      subtitle: "Difference 5 of 5",
      quote: "“Every rollout we've been quoted starts at three months and ends in a generic environment.”",
      whatWeDo:
        "Two weeks from contract to full operational go-live: fleet, drivers, clients, subcontractors, rate cards, Xero, and role-based permissions configured, followed by tailored training for each role. After go-live we continually shape the platform around your unique operations.",
      inProduct: [
        "White-labelled to your company brand, colours, and identity",
        "Deployed on your own branded custom sub-domains",
        "Role-tailored onboarding sessions for dispatchers, subbies, and drivers",
        "Continuous ongoing feature enhancements as part of our partnership",
      ],
      takeaway: "We don't force you into a generic mold — we build around your operation.",
    },
  ];

  return (
    <MainLayout showCta={false}>
      {/* ── 1. Hero & Walkthrough Video Section ── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Engineered for Australian Bulk Haulage
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-orange-50 text-[#E8652B] border border-orange-200">
              4 Portals · 1 Source of Truth
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200">
              Live in 14 Days
            </span>
          </div>

          {/* Heading & Subtitle */}
          <div className="max-w-4xl text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.12]">
              The operating system <br />
              for <span className="text-[#E8652B]">bulk haulage.</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-neutral-700 max-w-3xl font-normal leading-relaxed">
              Connect your dispatch office, drivers, subcontractors, and clients onto a single live job record. From dispatch order to AI docket verification to automated Xero billing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/demo">
                <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-bold px-7 h-12 shadow-xs cursor-pointer">
                  Book a 20-minute demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <button
                onClick={togglePlay}
                className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-lg font-semibold text-sm text-neutral-900 bg-white hover:bg-neutral-50 border border-neutral-300 transition-colors shadow-2xs cursor-pointer"
              >
                <Play className="h-4 w-4 fill-neutral-900" />
                <span>{isPlaying ? "Pause 90s Walkthrough" : "Watch 90s Walkthrough"}</span>
              </button>
            </div>
          </div>

          {/* Video Player Embed with Charcoal UI Chrome */}
          <div className="mt-12 max-w-5xl">
            <div className="rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-300 shadow-2xl">
              {/* Mockup Header */}
              <div className="px-4 py-3 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <span className="ml-3 text-xs text-neutral-400 font-mono hidden sm:inline">
                    app.haulageops.com/dispatch
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-neutral-800 text-neutral-200 border border-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8652B] animate-pulse" />
                    90s Product Walkthrough
                  </span>
                </div>
              </div>

              {/* Video Element & Overlays */}
              <div className="relative aspect-video bg-black flex items-center justify-center group">
                <video
                  ref={videoRef}
                  src="/HaulageOpsDemo_compressed.mp4"
                  poster="/video-poster.webp"
                  playsInline
                  preload="none"
                  className="w-full h-full object-contain"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Big play button overlay when paused */}
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-[#E8652B] hover:bg-[#D05520] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-105 z-20 cursor-pointer"
                    aria-label="Play video"
                  >
                    <Play className="h-8 w-8 fill-white ml-1" />
                  </button>
                )}

                {/* Bottom Custom Control Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-2 rounded-lg text-white hover:bg-white/20 transition-colors"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-white" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-lg text-white hover:bg-white/20 transition-colors"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="h-5 w-5 text-[#E8652B]" /> : <Volume2 className="h-5 w-5" />}
                    </button>
                    <span className="text-xs text-white/80 font-mono">
                      01:30 · Full platform overview
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleFullscreen}
                      className="p-2 rounded-lg text-white hover:bg-white/20 transition-colors"
                      title="Fullscreen"
                    >
                      <Maximize className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-left text-xs text-neutral-500 font-medium">
              Live walkthrough: dispatch allocation, driver app docket scanning, subcontractor portal, and automated Xero billing.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. The Problem: The Old Scattered Reality ── */}
      <section className="py-20 sm:py-24 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#E8652B] uppercase block mb-1">
              01 · THE OLD WAY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              A scattered, high-friction industry.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Your business is profitable, but your operations are fragmented across six tools that never speak to each other. Information gets lost, dockets sit in cabs, and billing lags weeks behind the work.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-xs flex flex-col justify-between hover:border-neutral-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center font-bold mb-4">
                  <XCircle className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">Coordination Chaos</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  Dispatching across owned and subcontractor tippers via WhatsApp groups and phone calls with zero shared live status.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-medium">Weekly Cost</span>
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
                  15–20 hrs lost admin
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-xs flex flex-col justify-between hover:border-neutral-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center font-bold mb-4">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">Client Status Interruption</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  The dispatcher is the only source of truth. Tier-1 project managers call and email every 30 minutes asking for ETAs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-medium">Business Impact</span>
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                  Client churn risk
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-xs flex flex-col justify-between hover:border-neutral-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center font-bold mb-4">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">Docket-to-Invoice Lag</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  Paper dockets sit in gloveboxes or get re-keyed by hand on Sundays, holding up cash flow by 14 to 28 days.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-medium">Financial Hit</span>
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
                  Cash-cycle delay
                </span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-xs flex flex-col justify-between hover:border-neutral-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center font-bold mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">Audit & Tender Panic</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  When a client disputes a rate or a regulator requests CoR proof, your team wastes days hunting through paper folders.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-medium">Legal Exposure</span>
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-neutral-100 text-neutral-800 border border-neutral-200">
                  HVNL / CoR exposure
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. The 3 Questions Test ── */}
      <section className="py-20 sm:py-24 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#E8652B] uppercase block mb-1">
              02 · THE 3-QUESTION TEST
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Comparing platforms? Ask three questions.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              If the software vendor cannot answer YES to all three, you are looking at a superficial GPS tracking tool, not an Australian bulk haulage operating system.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Question 1 */}
            <div className="rounded-2xl p-8 bg-neutral-50/70 border border-neutral-200 shadow-xs text-left relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#E8652B]">01</span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    HaulageOps: YES
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 leading-snug">
                  Does my subcontractor get their own authenticated login?
                </h3>
                <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                  Not a public link or an email blast. A secure portal where they manage their assigned trucks, accept loads, view their agreed pay rates, and receive auto-generated RCTIs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200/60 text-xs font-semibold text-neutral-500">
                Guarantees client charge rates remain 100% confidential.
              </div>
            </div>

            {/* Question 2 */}
            <div className="rounded-2xl p-8 bg-neutral-50/70 border border-neutral-200 shadow-xs text-left relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#E8652B]">02</span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    HaulageOps: YES
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 leading-snug">
                  Does my client get more than a simple truck tracking link?
                </h3>
                <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                  A professional, client-branded portal displaying live job progress, instant weighbridge dockets, signed proof of delivery, and downloadable CSV invoice reports.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200/60 text-xs font-semibold text-neutral-500">
                Eliminates 95% of incoming status and POD verification calls.
              </div>
            </div>

            {/* Question 3 */}
            <div className="rounded-2xl p-8 bg-neutral-50/70 border border-neutral-200 shadow-xs text-left relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#E8652B]">03</span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    HaulageOps: YES
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 leading-snug">
                  Can I prove which rate applied to a job last March?
                </h3>
                <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                  Versioned, effective-dated rate cards and an immutable chronological audit trail that proves who approved what rate on any given day.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200/60 text-xs font-semibold text-neutral-500">
                Ends rate and fuel-surcharge billing disputes in 30 seconds.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Interactive 4-Persona Portal Showcase ── */}
      <section className="py-20 sm:py-24 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#E8652B] uppercase block mb-1">
              03 · THE 4 PERSONAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              One platform. Four custom portals.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Every participant in the haulage cycle has their own purpose-built interface. Everyone works off the exact same live job record, seeing only the data their role permits.
            </p>
          </div>

          {/* Interactive Persona Selector Tabs */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                id: "admin",
                title: "1. Admin & Dispatch",
                subtitle: "Full operational & financial control",
                icon: Monitor,
                badge: "Replaces Master Spreadsheets",
              },
              {
                id: "subbie",
                title: "2. Subcontractor Portal",
                subtitle: "Dedicated queue, zero rate leaks",
                icon: Users,
                badge: "Replaces Phone Tag & WhatsApp",
              },
              {
                id: "client",
                title: "3. Client Live Portal",
                subtitle: "Live tracking & instant PODs",
                icon: Building2,
                badge: "Replaces Status Inquiries",
              },
              {
                id: "driver",
                title: "4. Driver Mobile App",
                subtitle: "Offline OCR docket scanning",
                icon: Smartphone,
                badge: "Replaces Paper Glovebox Dockets",
              },
            ].map((p) => {
              const Icon = p.icon;
              const isActive = activePersona === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePersona(p.id as any)}
                  className={`text-left p-4 sm:p-5 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? "bg-white border-[#E8652B] shadow-md ring-2 ring-[#E8652B]/20"
                      : "bg-white/80 border-neutral-200 hover:border-neutral-300 shadow-2xs"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        isActive
                          ? "bg-[#E8652B] text-white"
                          : "bg-neutral-100 text-neutral-700"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#E8652B]" />
                    )}
                  </div>
                  <h4 className="font-bold text-sm text-neutral-900">{p.title}</h4>
                  <p className="mt-1 text-xs text-neutral-500 leading-snug">{p.subtitle}</p>
                  <span className="inline-block mt-3 px-2 py-0.5 rounded text-[10px] font-bold bg-orange-50 text-[#E8652B] border border-orange-200">
                    {p.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Persona Live Interactive UI Mockup Showcase */}
          <div className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-left">
            {/* Top Chrome Bar */}
            <div className="px-5 py-3.5 bg-neutral-800/80 border-b border-neutral-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs font-semibold text-neutral-200 font-mono">
                  {activePersona === "admin" && "https://app.haulageops.com/dispatch/live-board"}
                  {activePersona === "subbie" && "https://portal.haulageops.com/subcontractor/jj-transport"}
                  {activePersona === "client" && "https://client.haulageops.com/view/cpb-motorway-p2"}
                  {activePersona === "driver" && "HaulageOps Mobile Driver App v3.4 (iOS / Android)"}
                </span>
              </div>
              <span className="text-xs text-neutral-400 font-medium hidden sm:inline">
                {activePersona === "admin" && "Role: Head Dispatcher & General Manager"}
                {activePersona === "subbie" && "Role: Verified Subcontractor (Free Access)"}
                {activePersona === "client" && "Role: Tier-1 Client Project Manager (Free Access)"}
                {activePersona === "driver" && "Role: Company & Subcontractor Drivers"}
              </span>
            </div>

            {/* Persona Content Area */}
            <div className="p-6 lg:p-8">
              {/* 1. Admin & Dispatch Console */}
              {activePersona === "admin" && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-800">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Monitor className="h-5 w-5 text-[#E8652B]" />
                        Master Dispatch & Financial Cockpit
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1">
                        Live Fleet: 28 Trucks Active (16 Company Fleet · 12 Subcontractor Trucks)
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Xero Connected · 100% Synced
                      </span>
                    </div>
                  </div>

                  {/* Dispatch Table Simulation */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left text-neutral-300">
                      <thead className="bg-neutral-950/70 text-neutral-400 uppercase tracking-wider text-[10px]">
                        <tr>
                          <th className="py-2.5 px-3">Job ID</th>
                          <th className="py-2.5 px-3">Client & Site</th>
                          <th className="py-2.5 px-3">Truck & Driver</th>
                          <th className="py-2.5 px-3">Material & Target</th>
                          <th className="py-2.5 px-3">Client Rate</th>
                          <th className="py-2.5 px-3">Subbie Rate</th>
                          <th className="py-2.5 px-3">Margin</th>
                          <th className="py-2.5 px-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-800">
                        <tr className="hover:bg-neutral-800/40">
                          <td className="py-3 px-3 font-mono font-bold text-[#E8652B]">#HO-8492</td>
                          <td className="py-3 px-3 font-semibold text-white">CPB Contractors · M12 Package</td>
                          <td className="py-3 px-3">
                            <span className="text-white font-medium">Truck #08</span> (Dave M. · Semi-Tipper)
                          </td>
                          <td className="py-3 px-3">38.4t Roadbase Class 2</td>
                          <td className="py-3 px-3 font-mono text-emerald-400 font-bold">$18.50/t ($710.40)</td>
                          <td className="py-3 px-3 font-mono text-neutral-400">$14.20/t ($545.28)</td>
                          <td className="py-3 px-3 font-mono text-emerald-400 font-bold">+$165.12 (23.2%)</td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                              In Transit
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-neutral-800/40">
                          <td className="py-3 px-3 font-mono font-bold text-[#E8652B]">#HO-8493</td>
                          <td className="py-3 px-3 font-semibold text-white">Lendlease · Western Airport Lot 4</td>
                          <td className="py-3 px-3">
                            <span className="text-orange-400 font-medium">Subbie JJ-02</span> (Sam K. · JJ Transport)
                          </td>
                          <td className="py-3 px-3">42.1t Fill Sand</td>
                          <td className="py-3 px-3 font-mono text-emerald-400 font-bold">$16.80/t ($707.28)</td>
                          <td className="py-3 px-3 font-mono text-neutral-400">$13.50/t ($568.35)</td>
                          <td className="py-3 px-3 font-mono text-emerald-400 font-bold">+$138.93 (19.6%)</td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                              Loading Quarry
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-neutral-800/40">
                          <td className="py-3 px-3 font-mono font-bold text-[#E8652B]">#HO-8494</td>
                          <td className="py-3 px-3 font-semibold text-white">John Holland · Rozelle Rail</td>
                          <td className="py-3 px-3">
                            <span className="text-white font-medium">Truck #14</span> (Mick T. · 8-Wheeler)
                          </td>
                          <td className="py-3 px-3">22.0t Aggregate 20mm</td>
                          <td className="py-3 px-3 font-mono text-emerald-400 font-bold">$22.00/t ($484.00)</td>
                          <td className="py-3 px-3 font-mono text-neutral-400">Internal Driver ($0.00)</td>
                          <td className="py-3 px-3 font-mono text-emerald-400 font-bold">+$484.00 (100%)</td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                              Docket Verified
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                      <span className="text-neutral-400 text-xs">Today's Invoiced Revenue</span>
                      <p className="text-lg font-black text-white mt-1">$28,490.50</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                      <span className="text-neutral-400 text-xs">Auto-Generated Subbie RCTIs</span>
                      <p className="text-lg font-black text-[#E8652B] mt-1">$14,210.00</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                      <span className="text-neutral-400 text-xs">Net Margin Locked</span>
                      <p className="text-lg font-black text-emerald-400 mt-1">$14,280.50 (50.1%)</p>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Subcontractor Portal */}
              {activePersona === "subbie" && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-800">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Users className="h-5 w-5 text-[#E8652B]" />
                        JJ Transport Pty Ltd · Subcontractor Portal
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1">
                        Dedicated secure portal. Subbies see only their jobs, their pay rates, and their auto-calculated RCTIs.
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Compliance Active · Insurance Current
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Active Allocated Job */}
                    <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-[#E8652B] font-bold">Job #HO-8493 (Allocated)</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Accepted
                        </span>
                      </div>
                      <h4 className="font-bold text-white text-sm">
                        Western Sydney Airport · Lot 4 Delivery
                      </h4>
                      <p className="text-xs text-neutral-400">
                        Pickup: Peppertree Quarry (Gate 2) → Tip: Lot 4B Compound
                      </p>
                      <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between text-xs">
                        <span className="text-neutral-400">Agreed Subbie Pay Rate:</span>
                        <span className="font-mono font-bold text-emerald-400">$13.50 / tonne</span>
                      </div>
                      <div className="text-[11px] text-neutral-500 flex items-center gap-1.5">
                        <Lock className="h-3.5 w-3.5 text-neutral-400" />
                        Client charge rates are completely obscured from subcontractor view.
                      </div>
                    </div>

                    {/* Auto-Generated RCTI Preview */}
                    <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-xs flex items-center gap-1.5">
                          <Receipt className="h-4 w-4 text-[#E8652B]" />
                          Weekly RCTI Statement (Auto-Drafted)
                        </span>
                        <span className="text-[10px] text-neutral-400">Period ending 29/09</span>
                      </div>
                      <div className="space-y-1.5 text-xs text-neutral-300">
                        <div className="flex justify-between py-1 border-b border-neutral-800/80">
                          <span>34 Verified Loads (1,340.2 tonnes)</span>
                          <span className="font-mono font-semibold text-white">$18,092.70</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-neutral-800/80">
                          <span>Fuel Levy Adjustment (+4.2%)</span>
                          <span className="font-mono font-semibold text-white">+$759.89</span>
                        </div>
                        <div className="flex justify-between py-1.5 font-bold text-sm text-emerald-400">
                          <span>Total RCTI Payable (Inc GST)</span>
                          <span className="font-mono">$20,737.85</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-neutral-400 pt-1">
                        Subcontractors download RCTIs directly without arguing over weekly hours or missing dockets.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Client Branded Portal */}
              {activePersona === "client" && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-800">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-[#E8652B]" />
                        CPB Contractors · Live Project Portal
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1">
                        Self-service visibility for head contractors. Live dockets, delivery photos, and daily summaries.
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8652B]/10 text-[#E8652B] border border-[#E8652B]/20">
                      Branded for Your Haulage Firm
                    </span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-5 text-xs">
                    <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                      <span className="text-neutral-400 text-[11px]">Today's Progress</span>
                      <p className="text-2xl font-black text-white">691.2 / 850t</p>
                      <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#E8652B] h-full w-[81%]" />
                      </div>
                      <p className="text-[11px] text-neutral-400">18 of 22 scheduled loads tipped</p>
                    </div>

                    <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                      <span className="text-neutral-400 text-[11px]">Active Trucks on Site</span>
                      <p className="text-2xl font-black text-emerald-400">4 En Route</p>
                      <p className="text-[11px] text-neutral-400">Avg site turnaround: 11 mins (No demurrage)</p>
                      <p className="text-[10px] text-neutral-500">Live GPS telemetry updating every 10s</p>
                    </div>

                    <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                      <span className="text-neutral-400 text-[11px]">Instant POD Export</span>
                      <p className="text-2xl font-black text-white">18 Dockets</p>
                      <p className="text-[11px] text-neutral-400">All weighbridge slips verified & signed</p>
                      <button className="w-full mt-1 py-1.5 px-3 rounded bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-[11px] transition-colors">
                        Download CSV + PDF Pack
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. Driver Mobile App */}
              {activePersona === "driver" && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-800">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Smartphone className="h-5 w-5 text-[#E8652B]" />
                        Driver Mobile Workflow (iOS & Android)
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1">
                        High-contrast, zero-training interface built for drivers wearing high-vis and gloves. Works 100% offline.
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Offline Mode: Armed & Ready
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Simulated Mobile Phone Card */}
                    <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 max-w-sm mx-auto w-full space-y-4 font-sans">
                      <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs">
                        <span className="font-bold text-white">Mick T. (Truck #08)</span>
                        <span className="text-emerald-400 font-mono">08:42 AM</span>
                      </div>
                      <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 space-y-1">
                        <span className="text-[10px] text-[#E8652B] font-bold uppercase tracking-wider">
                          Active Load · Job #HO-8492
                        </span>
                        <h5 className="font-bold text-white text-sm">Boral Quarry → Western Airport</h5>
                        <p className="text-xs text-neutral-400">Material: 38.4t Roadbase 20mm</p>
                      </div>

                      {/* OCR Scanner Simulation */}
                      <div className="p-4 rounded-xl bg-neutral-900/90 border border-emerald-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                            <Camera className="h-4 w-4" />
                            Weighbridge OCR Scan
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                            99.8% Match
                          </span>
                        </div>
                        <div className="space-y-1 text-xs font-mono text-neutral-300 bg-black/50 p-2.5 rounded">
                          <div className="flex justify-between">
                            <span>Docket #:</span>
                            <span className="text-white font-bold">BOR-992318</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Gross Wt:</span>
                            <span>57.85 tonnes</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Tare Wt:</span>
                            <span>19.45 tonnes</span>
                          </div>
                          <div className="flex justify-between text-emerald-400 font-bold pt-1 border-t border-neutral-800">
                            <span>Net Weight:</span>
                            <span>38.40 tonnes</span>
                          </div>
                        </div>
                      </div>

                      <button className="w-full py-3 rounded-xl bg-[#E8652B] hover:bg-[#D05520] text-white font-bold text-xs uppercase tracking-wider transition-colors">
                        Confirm Load & Begin Transit
                      </button>
                    </div>

                    {/* Driver Feature Checklist */}
                    <div className="flex flex-col justify-center space-y-4 text-xs text-neutral-300">
                      <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-white">Daily Pre-Start Checklist</p>
                          <p className="text-neutral-400 text-[11px] mt-0.5">
                            Mandatory tyre, brake, and safety walkaround photos logged before first ignition.
                          </p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-white">Zero Reception? No Problem.</p>
                          <p className="text-neutral-400 text-[11px] mt-0.5">
                            Quarries and remote tip sites often have zero mobile coverage. The app stores all dockets and auto-syncs the second 4G connects.
                          </p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-white">Sign-on-Glass & Photo Evidence</p>
                          <p className="text-neutral-400 text-[11px] mt-0.5">
                            Site supervisor signs on glass; driver captures tipped stockpile photo with GPS coordinates stamped permanently.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Interactive 6-Step Job Lifecycle Pipeline ── */}
      <section className="py-20 sm:py-24 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#E8652B] uppercase block mb-1">
              04 · THE COMPLETE PIPELINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Created once. Reconciled automatically.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Click each step to explore how delegation, GPS tracking, AI docket OCR, two-sided billing, and permanent audit logs hang off a single source of truth.
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {lifecycleSteps.map((item, idx) => {
              const isSelected = activeLifecycleStep === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveLifecycleStep(idx)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer relative ${
                    isSelected
                      ? "bg-neutral-900 border-neutral-900 text-white shadow-md"
                      : "bg-neutral-50/80 border-neutral-200 text-neutral-700 hover:bg-white hover:border-neutral-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-[#E8652B] text-white"
                          : "bg-neutral-200 text-neutral-800"
                      }`}
                    >
                      {item.step}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8652B] animate-pulse" />
                    )}
                  </div>
                  <h4 className="font-bold text-sm leading-tight">{item.title}</h4>
                  <p
                    className={`mt-1 text-[11px] leading-snug line-clamp-2 ${
                      isSelected ? "text-neutral-400" : "text-neutral-500"
                    }`}
                  >
                    {item.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Stepper Detail Card */}
          <div className="mt-8 bg-neutral-50/70 border border-neutral-200 rounded-2xl p-6 sm:p-10 shadow-xs text-left">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 text-[#E8652B] flex items-center justify-center font-black text-sm">
                    {lifecycleSteps[activeLifecycleStep].step}
                  </span>
                  <div>
                    <span className="text-[11px] font-bold text-[#E8652B] tracking-wider uppercase block">
                      STAGE {activeLifecycleStep + 1} OF 6
                    </span>
                    <h3 className="text-2xl font-black text-neutral-900">
                      {lifecycleSteps[activeLifecycleStep].detailTitle}
                    </h3>
                  </div>
                </div>

                <p className="text-base text-neutral-700 leading-relaxed font-normal pt-2">
                  {lifecycleSteps[activeLifecycleStep].detailDesc}
                </p>

                <div className="pt-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold bg-white border border-neutral-300 text-neutral-800 shadow-2xs">
                    <Sparkles className="h-4 w-4 text-[#E8652B]" />
                    {lifecycleSteps[activeLifecycleStep].metric}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white rounded-xl border border-neutral-200 p-6 shadow-xs">
                <span className="text-[11px] font-bold text-neutral-900 uppercase tracking-wider block mb-4">
                  CORE SYSTEM ACTIONS
                </span>
                <ul className="space-y-3">
                  {lifecycleSteps[activeLifecycleStep].highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-xs font-semibold text-neutral-800">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. The 5 Architectural Differences ── */}
      <section className="py-20 sm:py-24 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#E8652B] uppercase block mb-1">
              05 · THE ARCHITECTURAL DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Five reasons generic courier TMS fails in bulk haulage.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Standard logistics tools assume pallet drops, single drivers, and flat rates. Heavy bulk haulage demands multi-tier subcontractors, weighbridge net calculations, and effective-dated rate matrices.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="mt-10 flex flex-wrap gap-2 border-b border-neutral-200 pb-4">
            {differences.map((diff, index) => (
              <button
                key={diff.num}
                onClick={() => setActiveDiff(index)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeDiff === index
                    ? "bg-neutral-900 text-white shadow-xs"
                    : "bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-300 shadow-2xs"
                }`}
              >
                {diff.num}. {diff.title.split(".")[0]}
              </button>
            ))}
          </div>

          {/* Active Difference Panel */}
          <div className="mt-8">
            {differences.map((diff, index) => {
              if (activeDiff !== index) return null;
              return (
                <div
                  key={diff.num}
                  className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-8 sm:p-10"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-orange-50 border border-orange-200 text-[#E8652B] flex items-center justify-center font-bold text-sm">
                      {diff.num}
                    </span>
                    <h3 className="text-2xl font-bold text-neutral-900">
                      {diff.title}
                    </h3>
                  </div>

                  <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
                    {/* Left Column: What we heard + What HaulageOps does */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="bg-neutral-50/70 border border-neutral-200 rounded-xl p-5">
                        <span className="text-[11px] font-bold tracking-wider text-[#E8652B] uppercase block mb-1">
                          THE INDUSTRY REALITY
                        </span>
                        <p className="text-base text-neutral-900 italic font-medium">
                          {diff.quote}
                        </p>
                      </div>

                      <div>
                        <span className="text-[11px] font-bold tracking-wider text-[#E8652B] uppercase block mb-2">
                          WHAT HAULAGEOPS DOES
                        </span>
                        <p className="text-base text-neutral-700 leading-relaxed font-normal">
                          {diff.whatWeDo}
                        </p>
                      </div>
                    </div>

                    {/* Right Column: In the product checklist */}
                    <div className="lg:col-span-5 bg-neutral-50/70 border border-neutral-200 rounded-xl p-6">
                      <span className="text-[11px] font-bold tracking-wider text-neutral-900 uppercase block mb-4">
                        INSIDE THE PRODUCT
                      </span>
                      <ul className="space-y-3">
                        {diff.inProduct.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E8652B] mt-2 shrink-0" />
                            <span className="text-xs sm:text-sm font-semibold text-neutral-800">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Takeaway Bar */}
                  <div className="mt-8 p-4 rounded-xl bg-orange-50/80 border border-orange-200 flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-[#E8652B] shrink-0" />
                    <span className="text-sm font-bold text-neutral-900">
                      {diff.takeaway}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. Before vs After Comparison Table ── */}
      <section className="py-20 sm:py-24 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#E8652B] uppercase block mb-1">
              06 · WHAT CHANGES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              One unified workflow, not four manual steps a night.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Here is how daily operations transform when your fleet switches from fragmented tools to HaulageOps.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto">
            <div className="min-w-[700px] border border-neutral-300 rounded-xl overflow-hidden shadow-xs">
              {/* Table Header Bar */}
              <div className="grid grid-cols-12 bg-neutral-900 px-6 py-4 font-bold text-xs uppercase tracking-wider text-white">
                <div className="col-span-3">Workflow Area</div>
                <div className="col-span-4 text-neutral-400">Before HaulageOps</div>
                <div className="col-span-5 text-[#E8652B]">With HaulageOps</div>
              </div>

              {[
                {
                  area: "Job Allocation",
                  today: "Phone calls, scribbled diary notes, double-booked trucks",
                  withHo: "Live dispatch board, instant push notifications to subbie and driver portals",
                },
                {
                  area: "Docket Collection",
                  today: "~50 blurry photos a day over WhatsApp, lost paper in cabs",
                  withHo: "Driver app with automated OCR and 3-layer net tonnage verification",
                },
                {
                  area: "Subbie Pay & RCTIs",
                  today: "Manual hourly calcs, lost dockets, disputes over weekend invoices",
                  withHo: "Confidential subbie rates locked at order, auto-generated RCTI drafts",
                },
                {
                  area: "Client Invoicing",
                  today: "Re-keyed into Xero 14–21 days late, missing proof attachments",
                  withHo: "Direct two-way Xero sync with verified dockets & sign-on-glass attached",
                },
                {
                  area: "Audit & Compliance",
                  today: "Scattered across paper folders, mobile photos, and text messages",
                  withHo: "Immutable audit trail with pre-starts, weighbridge logs, and user timestamps",
                },
              ].map((row, idx) => (
                <div
                  key={row.area}
                  className={`grid grid-cols-12 px-6 py-4 text-sm items-center ${
                    idx % 2 === 0 ? "bg-white" : "bg-neutral-50/60"
                  } border-b border-neutral-200 last:border-b-0`}
                >
                  <div className="col-span-3 font-semibold text-neutral-900">
                    {row.area}
                  </div>
                  <div className="col-span-4 text-neutral-600 pr-4 text-xs sm:text-sm">
                    {row.today}
                  </div>
                  <div className="col-span-5 font-bold text-neutral-900 flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-[#E8652B] font-black">›</span>
                    <span>{row.withHo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Fit & Integrations ── */}
      <section className="py-20 sm:py-24 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#E8652B] uppercase block mb-1">
              07 · HONEST BOUNDARIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Built for heavy bulk, honest about our scope.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              We focus strictly on tipper fleets, earthworks, quarries, civil construction, and heavy aggregates. We don't try to be everything to everyone.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Where we fit */}
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-8">
              <h3 className="text-xs font-bold text-neutral-900 tracking-wider uppercase mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8652B]" />
                WHERE HAULAGEOPS IS BUILT TO EXCEL
              </h3>
              <ul className="space-y-3.5">
                {[
                  "Bulk haulage, truck & dog, and tipper fleets (15 to 80+ vehicles)",
                  "Civil construction and major infrastructure projects",
                  "Quarries, sand & gravel, and aggregate cartage",
                  "Earthworks, site cut, and muckaway removal",
                  "Mixed operations running owned trucks alongside heavy subbie fleets",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-neutral-800">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Where we don't */}
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-8">
              <h3 className="text-xs font-bold text-neutral-400 tracking-wider uppercase mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-400" />
                WORKFLOWS WE DO NOT CATER FOR
              </h3>
              <ul className="space-y-3.5">
                {[
                  "Last-mile courier and small parcel delivery",
                  "Warehouse & 3PL pallet racking management",
                  "International freight forwarding & air cargo",
                  "Hardware electronic logging devices (ELD) / proprietary OBD units",
                  "Cross-country long-haul interstate linehaul networks",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-neutral-500">
                    <XCircle className="h-4 w-4 text-neutral-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Integration Banner */}
          <div className="mt-10 bg-white rounded-xl border border-neutral-200 shadow-xs p-6 sm:p-7 text-left">
            <h4 className="text-sm font-bold text-neutral-900 mb-2">
              Keep your existing vehicle GPS. HaulageOps is the operations intelligence layer above it.
            </h4>
            <p className="text-xs text-neutral-500 mb-4">
              We connect smoothly into your accounting, mapping, and enterprise cloud stack:
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-bold text-neutral-800">
              {["Xero (OAuth2 Two-Way)", "Google Maps Platform", "Mapbox Telemetry", "Firebase Push Infrastructure", "Azure Cloud Storage", "MYOB (Custom)"].map((integ) => (
                <span key={integ} className="px-3.5 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 shadow-2xs">
                  {integ}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Implementation: Live in Two Weeks ── */}
      <section className="py-20 sm:py-24 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#E8652B] uppercase block mb-1">
              08 · RAPID ONBOARDING
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Live in your operation in 14 days.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              We don't do 6-month enterprise consultancy delays. Two weeks from contract to your entire fleet running live jobs with complete data integrity.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 text-left">
            {[
              {
                days: "Days 1–3",
                title: "Setup & Subdomain",
                desc: "Dedicated tenant deployment, your sub-domains, white-labelled to your company branding.",
              },
              {
                days: "Days 3–6",
                title: "Data Migration",
                desc: "Vehicles, drivers, customer accounts, subcontractor lists, and RBAC user permissions imported.",
              },
              {
                days: "Days 6–9",
                title: "Rates & Finance Sync",
                desc: "Complex client and subbie rate cards loaded, effective dates tested, Xero OAuth2 connected.",
              },
              {
                days: "Days 9–12",
                title: "Tailored Training",
                desc: "Dedicated 1-on-1 walkthroughs for dispatch, billing staff, subbie managers, and driver app.",
              },
              {
                days: "Days 12–14",
                title: "Parallel Run & Cutover",
                desc: "Live job test runs alongside legacy spreadsheets, final edge-case checks, production go-live.",
              },
            ].map((phase) => (
              <div
                key={phase.days}
                className="bg-neutral-50/70 border border-neutral-200 shadow-xs rounded-xl p-6 flex flex-col justify-between hover:bg-white transition-colors"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-orange-50 text-[#E8652B] border border-orange-200 mb-3">
                    {phase.days}
                  </span>
                  <h4 className="text-base font-bold text-neutral-900">
                    {phase.title}
                  </h4>
                  <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-normal">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 rounded-xl bg-orange-50/60 border border-orange-200 shadow-xs text-left max-w-4xl flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-[#E8652B] shrink-0" />
            <p className="text-xs sm:text-sm font-semibold text-neutral-900">
              <span className="font-extrabold text-[#E8652B]">Day 15 & Beyond: </span>
              Full production operations with dedicated Australian phone and Slack support. Then we customize, because no two bulk operations are identical.
            </p>
          </div>
        </div>
      </section>

      {/* ── 10. Commercial Approach: Fair, Transparent, Tailored ── */}
      <section className="py-20 sm:py-24 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#E8652B] uppercase block mb-1">
              09 · COMMERCIAL TRANSPARENCY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Priced around your fleet, not penalized per seat.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Legacy software charges per user seat. If you have 30 subcontractors and 40 clients, your software bill explodes. HaulageOps offers a transparent, all-inclusive fleet model with zero subcontractor charges.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Setup */}
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#E8652B] uppercase tracking-wider">
                  One-time onboarding
                </span>
                <h3 className="mt-2 text-2xl font-bold text-neutral-900">Dedicated Setup</h3>
                <p className="mt-4 text-sm text-neutral-600 leading-relaxed font-normal">
                  Custom tenant deployment, dedicated sub-domains, company branding, fleet data migration, and comprehensive role-based team training.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 text-xs text-neutral-500 font-medium">
                Complete white-glove onboarding
              </div>
            </div>

            {/* Platform & Support */}
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#E8652B] uppercase tracking-wider">
                  Predictable operations
                </span>
                <h3 className="mt-2 text-2xl font-bold text-neutral-900">Tailored Fleet Plan</h3>
                <p className="mt-4 text-sm text-neutral-600 leading-relaxed font-normal">
                  Custom-scoped based on your active vehicle count and operating depots. Includes continuous platform updates, hosting, and local AU support.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 text-xs text-neutral-500 font-medium">
                Tailored consultation call quote
              </div>
            </div>

            {/* Unlimited Ecosystem */}
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#E8652B] uppercase tracking-wider">
                  Unlimited network
                </span>
                <h3 className="mt-2 text-2xl font-bold text-neutral-900">Zero-Seat Penalty</h3>
                <p className="mt-4 text-sm text-neutral-600 leading-relaxed font-normal">
                  Invite unlimited subcontractor drivers, depot dispatchers, and client project managers. We never charge for expanding your ecosystem.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 text-xs text-neutral-500 font-medium">
                Subbies & clients pay $0
              </div>
            </div>
          </div>

          {/* 4 Fair-pricing badges */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="px-4 py-2 rounded-full text-xs font-bold bg-white text-neutral-800 border border-neutral-300 shadow-2xs">
              No Per-User Seat Penalties
            </span>
            <span className="px-4 py-2 rounded-full text-xs font-bold bg-white text-neutral-800 border border-neutral-300 shadow-2xs">
              No Client Portal Access Surcharges
            </span>
            <span className="px-4 py-2 rounded-full text-xs font-bold bg-orange-50 text-[#E8652B] border border-orange-200">
              Subcontractors Pay $0
            </span>
            <span className="px-4 py-2 rounded-full text-xs font-bold bg-orange-50 text-[#E8652B] border border-orange-200">
              Clients Pay $0
            </span>
          </div>

          <p className="mt-6 text-left text-xs text-neutral-500 font-medium">
            Pricing is fully transparent and customized based on your fleet structure, operating volume, and required modules during your consultation call.
          </p>
        </div>
      </section>

      {/* ── 11. Final High-Impact CTA ── */}
      <section className="py-20 sm:py-28 bg-white border-t border-neutral-200">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-300 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 p-8 sm:p-14 text-left text-neutral-900 shadow-sm relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="text-[11px] font-bold tracking-widest text-[#E8652B] uppercase block mb-2">
                TEST YOUR WORKFLOWS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
                See your operation live on HaulageOps.
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed font-normal">
                Book a 20-minute tailored walkthrough: live dispatch, subcontractor allocation, driver weighbridge OCR, and automated Xero billing on your actual routes.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/demo">
                  <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-bold px-8 py-6 h-auto text-base shadow-sm cursor-pointer">
                    Book a 20-minute demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" size="lg" className="border-neutral-300 text-neutral-900 font-bold px-7 py-6 h-auto text-base hover:bg-neutral-100 cursor-pointer">
                    Explore Pricing Structure
                  </Button>
                </Link>
              </div>

              <p className="mt-8 text-xs text-neutral-500 tracking-wide font-medium">
                The operations platform built specifically for Australian bulk haulage and tipper fleets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

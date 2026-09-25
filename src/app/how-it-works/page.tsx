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
} from "lucide-react";

export default function HowItWorksPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
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

  const differences = [
    {
      num: "1",
      title: "Four personas. One live job record.",
      subtitle: "Difference 1 of 5",
      quote: "“The industry is scattered. I need one window where everything is.”",
      whatWeDo:
        "Admin, subcontractor, client and driver each work in their own portal on the same job. Delegate to a subbie without losing sight of it. Status, evidence and location flow straight back. Role-based access decides exactly what each party sees.",
      inProduct: [
        "Subcontractor portal with own login",
        "Client portal, branded per client",
        "Role-based access control (RBAC)",
        "Push notifications on status change",
      ],
      takeaway: "You delegate the job and keep the visibility.",
    },
    {
      num: "2",
      title: "AI that reads the docket and the POD.",
      subtitle: "Difference 2 of 5",
      quote: "“About fifty docket photos a day come in over WhatsApp, and someone types every one of them in.”",
      whatWeDo:
        "The driver scans the docket in the app. OCR reads it, and a three-layer verification checks the tonnage, the reference and the image evidence before the record is accepted. Delivery photos and signatures attach to the same load.",
      inProduct: [
        "OCR docket capture in the driver app",
        "Three-layer tonnage verification",
        "Photo, document and signature POD",
        "Offline-capable, syncs on reconnect",
      ],
      takeaway: "Paper becomes billable at the weighbridge, not on Sunday night.",
    },
    {
      num: "3",
      title: "Two-sided money, from one job.",
      subtitle: "Difference 3 of 5",
      quote: "“I charge the client per tonne and pay the subbie hourly, and I reconcile that by hand.”",
      whatWeDo:
        "Each job carries client charge rates and subcontractor pay rates separately, effective-dated, with different billing methods on each side. The client invoice and the subcontractor RCTI are generated from the same verified loads.",
      inProduct: [
        "Per tonne, per load, hourly or fixed",
        "Separate client and subbie rate cards",
        "Auto-generated subcontractor RCTIs",
        "Xero sync via OAuth2",
      ],
      takeaway: "Margin is visible on the job, not discovered at month end.",
    },
    {
      num: "4",
      title: "Auditability that turns into accountability.",
      subtitle: "Difference 4 of 5",
      quote: "“When a tender asks for evidence, we spend two days assembling it from paper, phones and inboxes.”",
      whatWeDo:
        "Every action is logged against the job: who changed a rate, when a docket was captured, which driver signed the pre-start, what the client saw and when. Rate cards are versioned and effective-dated, so you can prove which rate applied on any date.",
      inProduct: [
        "All-actions audit trail",
        "Effective-dated rate history",
        "Managed document storage",
        "Break and fatigue management",
      ],
      takeaway: "Disputes end in thirty seconds with a record, not a week with a memory.",
    },
    {
      num: "5",
      title: "Live in two weeks, then shaped around you.",
      subtitle: "Difference 5 of 5",
      quote: "“Every rollout we've been quoted starts at three months and ends in a generic environment.”",
      whatWeDo:
        "Two weeks from contract signature to the full solution live: fleet, drivers, clients, subcontractors, rate cards, Xero and role-based permissions configured, then training for each role. After go-live we build to your operation.",
      inProduct: [
        "White-labelled to your brand",
        "Deployed on your sub-domains",
        "Training per role, not a generic demo",
        "Customisation as part of the relationship",
      ],
      takeaway: "We don't believe one solution fits all.",
    },
  ];

  return (
    <MainLayout showCta={false}>
      {/* ── 1. Hero & Video Section (Deck Slide 1 + Video) ── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-[#FEFBF9] border-b border-[#E6DED8]">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          {/* Top pills */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F7F2EE] text-[#202020] border border-[#E6DED8]">
              Built in Australia
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FAEDE7] text-[#A8552E] border border-[#D86D3C]/30">
              Four personas, one record
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F7F2EE] text-[#202020] border border-[#E6DED8]">
              Live in two weeks
            </span>
          </div>

          {/* Heading & Subtitle - Left Aligned strictly per Brand Guide */}
          <div className="max-w-4xl text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#202020] leading-[1.12]">
              The operating system <br />
              for <span className="text-[#D86D3C]">bulk haulage.</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-[#202020] max-w-3xl font-normal leading-relaxed">
              One platform for the haulage admin, the subcontractor, the client and the driver, from job creation to proof of delivery to invoice.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://calendly.com/admin-haulageops/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-[#D86D3C] hover:bg-[#A8552E] text-white font-semibold px-7 h-12 shadow-xs">
                  Book a 20-minute demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <button
                onClick={togglePlay}
                className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-lg font-medium text-sm text-[#202020] bg-[#F7F2EE] hover:bg-[#E6DED8]/60 border border-[#E6DED8] transition-colors"
              >
                <Play className="h-4 w-4 fill-[#202020]" />
                <span>{isPlaying ? "Pause 90s Walkthrough" : "Watch 90s Walkthrough"}</span>
              </button>
            </div>
          </div>

          {/* ── Featured Video Player Embed ── */}
          <div className="mt-12 max-w-5xl">
            <div className="rounded-2xl overflow-hidden bg-[#FEFBF9] border border-[#E6DED8] shadow-md">
              {/* Mockup Header - Navy chrome allowed per brand guide */}
              <div className="px-4 py-3 bg-[#20293A] border-b border-[#20293A] flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="ml-3 text-xs text-white/70 font-mono hidden sm:inline">
                    app.haulageops.com/dispatch
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#2E6B4F]/40 text-emerald-200 border border-[#2E6B4F]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    90s Product Walkthrough
                  </span>
                </div>
              </div>

              {/* Video Element & Overlays */}
              <div className="relative aspect-video bg-black flex items-center justify-center group">
                <video
                  ref={videoRef}
                  src="/HaulageOpsDemo_compressed.mp4"
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Big play button overlay when paused */}
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-[#D86D3C] hover:bg-[#A8552E] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-105 z-20"
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
                      {isMuted ? <VolumeX className="h-5 w-5 text-[#FFA07A]" /> : <Volume2 className="h-5 w-5" />}
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
            <p className="mt-3 text-left text-xs text-[#6B6560]">
              90-second overview: live dispatch, driver app docket capture, subcontractor queue, and automated Xero billing.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. The Problem: The Old Way (Deck Slide 2) ── */}
      <section className="py-20 sm:py-24 bg-[#FEFBF9] border-b border-[#E6DED8]">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#A8552E] uppercase block mb-1">
              01 · THE OLD WAY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020] tracking-tight">
              A scattered industry.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6B6560] leading-relaxed">
              The operation is real and profitable. It is also spread across six places that don't talk to each other: dispatch in WhatsApp, dockets in a glovebox, rates in a spreadsheet, the client on hold.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#F7F2EE] rounded-xl p-6 border border-[#E6DED8] flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#202020]">Coordination chaos</h3>
                <p className="mt-3 text-sm text-[#6B6560] leading-relaxed">
                  Dispatch across owned and subcontracted trucks by phone, with no shared job record.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E6DED8]">
                <span className="inline-block px-3 py-1 rounded-md text-xs font-bold bg-[#FAEDE7] text-[#A8552E]">
                  15–20 hrs/week admin
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F7F2EE] rounded-xl p-6 border border-[#E6DED8] flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#202020]">Client status calls</h3>
                <p className="mt-3 text-sm text-[#6B6560] leading-relaxed">
                  The operator is the only source of truth, so clients ring and email for updates.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E6DED8]">
                <span className="inline-block px-3 py-1 rounded-md text-xs font-bold bg-[#FAEDE7] text-[#A8552E]">
                  Client churn risk
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F7F2EE] rounded-xl p-6 border border-[#E6DED8] flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#202020]">Docket-to-invoice lag</h3>
                <p className="mt-3 text-sm text-[#6B6560] leading-relaxed">
                  Paper PODs re-keyed weekly, days behind the delivery that earned the money.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E6DED8]">
                <span className="inline-block px-3 py-1 rounded-md text-xs font-bold bg-[#FAEDE7] text-[#A8552E]">
                  Cash-cycle delay
                </span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#F7F2EE] rounded-xl p-6 border border-[#E6DED8] flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#202020]">Audit prep by hand</h3>
                <p className="mt-3 text-sm text-[#6B6560] leading-relaxed">
                  Compliance packs assembled manually from paper, phones and inboxes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E6DED8]">
                <span className="inline-block px-3 py-1 rounded-md text-xs font-bold bg-[#FAEDE7] text-[#A8552E]">
                  HVNL / CoR exposure
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. The 3 Questions Test (Deck Slide 3) ── */}
      <section className="py-20 sm:py-24 bg-[#FEFBF9] border-b border-[#E6DED8]">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#A8552E] uppercase block mb-1">
              02 · THE TEST
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020] tracking-tight">
              Comparing platforms? Ask three questions.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6B6560] leading-relaxed">
              If the answer to any of these is no, you are looking at a tracking tool, not an operating system.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl p-8 bg-[#F7F2EE] border border-[#E6DED8] text-left">
              <span className="text-3xl font-extrabold text-[#D86D3C]">01</span>
              <h3 className="mt-4 text-xl font-bold text-[#202020] leading-snug">
                Does my subcontractor get their own login?
              </h3>
              <p className="mt-4 text-sm text-[#6B6560] leading-relaxed">
                Not a shared link. Not a phone call. A real, authenticated portal.
              </p>
            </div>

            <div className="rounded-2xl p-8 bg-[#F7F2EE] border border-[#E6DED8] text-left">
              <span className="text-3xl font-extrabold text-[#D86D3C]">02</span>
              <h3 className="mt-4 text-xl font-bold text-[#202020] leading-snug">
                Does my client get more than a tracking link?
              </h3>
              <p className="mt-4 text-sm text-[#6B6560] leading-relaxed">
                Live job status, dockets, POD, invoices, their own rate card.
              </p>
            </div>

            <div className="rounded-2xl p-8 bg-[#F7F2EE] border border-[#E6DED8] text-left">
              <span className="text-3xl font-extrabold text-[#D86D3C]">03</span>
              <h3 className="mt-4 text-xl font-bold text-[#202020] leading-snug">
                Can I prove which rate applied last March?
              </h3>
              <p className="mt-4 text-sm text-[#6B6560] leading-relaxed">
                Effective-dated rate cards and an audit trail that survives a dispute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. The 4 Personas (Deck Slide 4) ── */}
      <section className="py-20 sm:py-24 bg-[#FEFBF9] border-b border-[#E6DED8]">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#A8552E] uppercase block mb-1">
              03 · THE SOLUTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020] tracking-tight">
              One platform. Every party on the job.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6B6560] leading-relaxed">
              Four personas work in their own portal on the same live job record. They see what they need, and nothing they shouldn't.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {/* Persona 1: Admin & Dispatch */}
            <div className="bg-[#F7F2EE] border border-[#E6DED8] rounded-xl p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAEDE7] text-[#A8552E] flex items-center justify-center shrink-0">
                  <Monitor className="h-6 w-6 text-[#D86D3C]" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-[#202020]">Admin & Dispatch</h3>
                  <p className="mt-1 text-sm text-[#6B6560] max-w-2xl leading-relaxed">
                    Full fleet, driver, job and financial control. Create and delegate jobs, manage rate cards, run invoicing and RCTIs.
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <span className="inline-block px-3 py-1.5 rounded-lg text-xs font-bold bg-[#FEFBF9] text-[#202020] border border-[#E6DED8]">
                  Replaces the master spreadsheet
                </span>
              </div>
            </div>

            {/* Persona 2: Subcontractor Portal */}
            <div className="bg-[#F7F2EE] border border-[#E6DED8] rounded-xl p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAEDE7] text-[#A8552E] flex items-center justify-center shrink-0">
                  <Users className="h-6 w-6 text-[#D86D3C]" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-[#202020]">Subcontractor Portal</h3>
                  <p className="mt-1 text-sm text-[#6B6560] max-w-2xl leading-relaxed">
                    Own login, dedicated job queue, accept or decline, Mapbox maps, document upload, job history. Free for every subbie.
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <span className="inline-block px-3 py-1.5 rounded-lg text-xs font-bold bg-[#FEFBF9] text-[#202020] border border-[#E6DED8]">
                  Replaces the phone call
                </span>
              </div>
            </div>

            {/* Persona 3: Client Portal */}
            <div className="bg-[#F7F2EE] border border-[#E6DED8] rounded-xl p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAEDE7] text-[#A8552E] flex items-center justify-center shrink-0">
                  <Building2 className="h-6 w-6 text-[#D86D3C]" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-[#202020]">Client Portal</h3>
                  <p className="mt-1 text-sm text-[#6B6560] max-w-2xl leading-relaxed">
                    Live job tracking, dockets and POD, invoice history, their own rate card, client-specific reporting.
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <span className="inline-block px-3 py-1.5 rounded-lg text-xs font-bold bg-[#FEFBF9] text-[#202020] border border-[#E6DED8]">
                  Replaces the status call
                </span>
              </div>
            </div>

            {/* Persona 4: Driver Mobile App */}
            <div className="bg-[#F7F2EE] border border-[#E6DED8] rounded-xl p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAEDE7] text-[#A8552E] flex items-center justify-center shrink-0">
                  <Smartphone className="h-6 w-6 text-[#D86D3C]" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-[#202020]">Driver Mobile App</h3>
                  <p className="mt-1 text-sm text-[#6B6560] max-w-2xl leading-relaxed">
                    iOS and Android, offline-capable. Pre-start checklist, load collected, load delivered, docket scan, signature.
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <span className="inline-block px-3 py-1.5 rounded-lg text-xs font-bold bg-[#FEFBF9] text-[#202020] border border-[#E6DED8]">
                  Replaces the paper docket
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-left text-sm text-[#6B6560]">
            Plus Management & Reporting: dashboards, financial reporting, compliance dashboards and full audit trails.
          </div>
        </div>
      </section>

      {/* ── 5. Job Lifecycle Pipeline (Deck Slide 5) ── */}
      <section className="py-20 sm:py-24 bg-[#FEFBF9] border-b border-[#E6DED8]">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#A8552E] uppercase block mb-1">
              JOB LIFECYCLE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020] tracking-tight">
              The job is created once. Everything attaches to it.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6B6560] leading-relaxed">
              Delegation, tracking, evidence, billing and audit all hang off a single live record.
            </p>
          </div>

          {/* 6 Step Linear Pipeline */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {[
              {
                step: "1",
                title: "Create",
                desc: "Client, route, schedule, quantity, rates",
              },
              {
                step: "2",
                title: "Delegate",
                desc: "Own fleet or subbie, driver assigned",
              },
              {
                step: "3",
                title: "Track live",
                desc: "Real-time status to admin and client",
              },
              {
                step: "4",
                title: "Capture POD",
                desc: "AI-read dockets, photos, signature, offline",
              },
              {
                step: "5",
                title: "Invoice",
                desc: "Client invoice and subbie RCTI",
              },
              {
                step: "6",
                title: "Audit",
                desc: "Immutable record of every action and rate",
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                className="relative bg-[#F7F2EE] border border-[#E6DED8] rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#FAEDE7] text-[#D86D3C] flex items-center justify-center font-bold text-sm mb-3">
                    {item.step}
                  </div>
                  <h4 className="text-base font-bold text-[#202020]">{item.title}</h4>
                  <p className="mt-2 text-xs text-[#6B6560] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {idx < 5 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#6B6560]">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. The 5 Architectural Differences (Deck Slides 6-10) ── */}
      <section className="py-20 sm:py-24 bg-[#FEFBF9] border-b border-[#E6DED8]">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#A8552E] uppercase block mb-1">
              04 · THE DIFFERENCES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020] tracking-tight">
              Five architectural differences.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6B6560] leading-relaxed">
              Why generic dispatch software and courier TMS fail in heavy bulk operations.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="mt-10 flex flex-wrap gap-2 border-b border-[#E6DED8] pb-4">
            {differences.map((diff, index) => (
              <button
                key={diff.num}
                onClick={() => setActiveDiff(index)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeDiff === index
                    ? "bg-[#202020] text-white"
                    : "bg-[#F7F2EE] text-[#6B6560] hover:text-[#202020] border border-[#E6DED8]"
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
                  className="bg-[#F7F2EE] rounded-2xl border border-[#E6DED8] p-8 sm:p-10"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#FAEDE7] text-[#D86D3C] flex items-center justify-center font-bold text-sm">
                      {diff.num}
                    </span>
                    <h3 className="text-2xl font-bold text-[#202020]">
                      {diff.title}
                    </h3>
                  </div>

                  <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
                    {/* Left Column: What we heard + What HaulageOps does */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="bg-[#FEFBF9] border border-[#E6DED8] rounded-xl p-5">
                        <span className="text-[11px] font-bold tracking-wider text-[#A8552E] uppercase block mb-1">
                          WHAT WE HEARD
                        </span>
                        <p className="text-base text-[#202020] italic font-medium">
                          {diff.quote}
                        </p>
                      </div>

                      <div>
                        <span className="text-[11px] font-bold tracking-wider text-[#A8552E] uppercase block mb-2">
                          WHAT HAULAGEOPS DOES
                        </span>
                        <p className="text-base text-[#202020] leading-relaxed">
                          {diff.whatWeDo}
                        </p>
                      </div>
                    </div>

                    {/* Right Column: In the product checklist */}
                    <div className="lg:col-span-5 bg-[#FEFBF9] border border-[#E6DED8] rounded-xl p-6">
                      <span className="text-[11px] font-bold tracking-wider text-[#A8552E] uppercase block mb-4">
                        IN THE PRODUCT
                      </span>
                      <ul className="space-y-3">
                        {diff.inProduct.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D86D3C] mt-2 shrink-0" />
                            <span className="text-sm font-medium text-[#202020]">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Takeaway Bar per Brand Reference (Orange tint fill) */}
                  <div className="mt-8 p-4 rounded-xl bg-[#FAEDE7] border border-[#D86D3C]/30 flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-[#D86D3C] shrink-0" />
                    <span className="text-sm font-bold text-[#A8552E]">
                      {diff.takeaway}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. Before vs After Comparison (Deck Slide 11) ── */}
      <section className="py-20 sm:py-24 bg-[#FEFBF9] border-b border-[#E6DED8]">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#A8552E] uppercase block mb-1">
              05 · WHAT CHANGES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020] tracking-tight">
              One workflow, not four manual steps a night.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6B6560] leading-relaxed">
              Subbies see allocation and address only. Client billing rates stay hidden.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto">
            <div className="min-w-[700px] border border-[#E6DED8] rounded-xl overflow-hidden">
              {/* Navy Chrome Table Header Bar per Brand Guide */}
              <div className="grid grid-cols-12 bg-[#20293A] px-6 py-4 font-bold text-xs uppercase tracking-wider text-white">
                <div className="col-span-3">Workflow Area</div>
                <div className="col-span-4 text-white/70">Today</div>
                <div className="col-span-5 text-[#FFA07A]">With HaulageOps</div>
              </div>

              {[
                {
                  area: "Job allocation",
                  today: "Phone calls, double-booked trucks",
                  withHo: "Availability calendar, instant driver & subbie notifications",
                },
                {
                  area: "Driver dockets",
                  today: "~50 photos a day over WhatsApp",
                  withHo: "Driver app with OCR and three-layer verification",
                },
                {
                  area: "Subbie payments",
                  today: "Daily manual calcs, mid-day rate changes",
                  withHo: "Separate subbie rates, auto-generated RCTIs",
                },
                {
                  area: "Client invoicing",
                  today: "Re-keyed into a separate tool",
                  withHo: "Client rates kept private, synced to Xero",
                },
                {
                  area: "Evidence & audit",
                  today: "Paper in a folder, photos on a phone",
                  withHo: "Docket, photo, signature and audit trail on the job",
                },
              ].map((row, idx) => (
                <div
                  key={row.area}
                  className={`grid grid-cols-12 px-6 py-4 text-sm items-center ${
                    idx % 2 === 0 ? "bg-[#FEFBF9]" : "bg-[#F7F2EE]"
                  } border-b border-[#E6DED8] last:border-b-0`}
                >
                  <div className="col-span-3 font-semibold text-[#202020]">
                    {row.area}
                  </div>
                  <div className="col-span-4 text-[#6B6560] pr-4">
                    {row.today}
                  </div>
                  <div className="col-span-5 font-semibold text-[#202020] flex items-center gap-2">
                    <span className="text-[#D86D3C]">›</span>
                    <span>{row.withHo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Fit & Integrations (Deck Slide 12) ── */}
      <section className="py-20 sm:py-24 bg-[#FEFBF9] border-b border-[#E6DED8]">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#A8552E] uppercase block mb-1">
              06 · FIT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020] tracking-tight">
              Built for the work, and honest about the edges.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6B6560] leading-relaxed">
              Bulk haulage and construction logistics operators running roughly 15 to 80 vehicles, mixed owned and subcontracted fleet.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Where we fit - Green #2E6B4F strictly per Brand Guide */}
            <div className="bg-[#F7F2EE] rounded-2xl border border-[#E6DED8] p-8">
              <h3 className="text-sm font-bold text-[#2E6B4F] tracking-wider uppercase mb-6">
                WHERE WE FIT
              </h3>
              <ul className="space-y-3.5">
                {[
                  "Bulk haulage and tipper fleets",
                  "Earthworks and muckaway",
                  "Quarries and aggregates",
                  "Civil infrastructure",
                  "Mixed owned + subcontracted fleets",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-[#202020]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B4F] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Where we don't - Slate #4A5568 strictly per Brand Guide */}
            <div className="bg-[#F7F2EE] rounded-2xl border border-[#E6DED8] p-8">
              <h3 className="text-sm font-bold text-[#4A5568] tracking-wider uppercase mb-6">
                WHERE WE DON'T
              </h3>
              <ul className="space-y-3.5">
                {[
                  "Parcel and last-mile delivery",
                  "3PL and warehouse management",
                  "Freight forwarding",
                  "Hardware telematics or ELD",
                  "Long-haul linehaul networks",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-[#6B6560]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4A5568] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Integration Banner */}
          <div className="mt-12 bg-[#F7F2EE] rounded-xl border border-[#E6DED8] p-6 text-left">
            <p className="text-sm font-bold text-[#A8552E] mb-4">
              Keep your GPS. We are the operations layer above it.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-semibold text-[#202020]">
              <span className="px-3.5 py-1.5 rounded-lg bg-[#FEFBF9] border border-[#E6DED8]">Xero</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#FEFBF9] border border-[#E6DED8]">Google Maps</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#FEFBF9] border border-[#E6DED8]">Mapbox</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#FEFBF9] border border-[#E6DED8]">Firebase FCM</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#FEFBF9] border border-[#E6DED8]">Azure Storage</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Implementation: Live in Two Weeks (Deck Slide 13) ── */}
      <section className="py-20 sm:py-24 bg-[#FEFBF9] border-b border-[#E6DED8]">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#A8552E] uppercase block mb-1">
              07 · IMPLEMENTATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020] tracking-tight">
              Live in two weeks.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6B6560] leading-relaxed">
              Two weeks from contract signature to the full solution running on your operation, not a demo environment with your logo on it.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 text-left">
            {[
              {
                days: "Days 1–3",
                title: "Environment & identity",
                desc: "Dedicated infrastructure, your sub-domains, white-labelled to your brand",
              },
              {
                days: "Days 3–6",
                title: "Your operation loaded",
                desc: "Fleet, drivers, user accounts and RBAC roles, clients, subcontractors",
              },
              {
                days: "Days 6–9",
                title: "Rates & finance",
                desc: "Client and subbie rate cards, effective dates, Xero OAuth2, invoice sync tested",
              },
              {
                days: "Days 9–12",
                title: "Training by role",
                desc: "Admin & billing, dispatch, driver app, subbie portal, client portal",
              },
              {
                days: "Days 12–14",
                title: "Parallel run & cutover",
                desc: "Live jobs alongside your current process, issues cleared, sign-off",
              },
            ].map((phase) => (
              <div
                key={phase.days}
                className="bg-[#F7F2EE] border border-[#E6DED8] rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-[#FAEDE7] text-[#A8552E] mb-3">
                    {phase.days}
                  </span>
                  <h4 className="text-base font-bold text-[#202020]">
                    {phase.title}
                  </h4>
                  <p className="mt-2 text-xs text-[#6B6560] leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 rounded-xl bg-[#FAEDE7] border border-[#D86D3C]/30 text-left max-w-4xl">
            <p className="text-sm font-bold text-[#A8552E]">
              Day 15: live in production, with support active from day one. Then we customise, because we don't believe one solution fits all.
            </p>
          </div>
        </div>
      </section>

      {/* ── 10. Commercial Model (Deck Slide 14) ── */}
      <section className="py-20 sm:py-24 bg-[#FEFBF9] border-b border-[#E6DED8]">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#A8552E] uppercase block mb-1">
              08 · COMMERCIAL MODEL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020] tracking-tight">
              Priced on the work, not the seat.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6B6560] leading-relaxed">
              Most platforms charge per seat, so every subbie and client you invite becomes a line on your bill, and the platform punishes you for the visibility you bought it for.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Setup */}
            <div className="bg-[#F7F2EE] rounded-2xl border border-[#E6DED8] p-8">
              <span className="text-xs font-bold text-[#A8552E] uppercase tracking-wider">
                One-time at signing
              </span>
              <h3 className="mt-2 text-2xl font-bold text-[#202020]">Setup</h3>
              <p className="mt-4 text-sm text-[#6B6560] leading-relaxed">
                White labelling, dedicated infrastructure, your sub-domains, demos and team training.
              </p>
            </div>

            {/* Platform & Support */}
            <div className="bg-[#F7F2EE] rounded-2xl border border-[#E6DED8] p-8">
              <span className="text-xs font-bold text-[#A8552E] uppercase tracking-wider">
                Monthly
              </span>
              <h3 className="mt-2 text-2xl font-bold text-[#202020]">Platform & support</h3>
              <p className="mt-4 text-sm text-[#6B6560] leading-relaxed">
                Access for your team, drivers, subbies and clients. Hosting, updates and support included.
              </p>
            </div>

            {/* Per docket */}
            <div className="bg-[#F7F2EE] rounded-2xl border border-[#E6DED8] p-8">
              <span className="text-xs font-bold text-[#A8552E] uppercase tracking-wider">
                Monthly on actual volume
              </span>
              <h3 className="mt-2 text-2xl font-bold text-[#202020]">Per docket</h3>
              <p className="mt-4 text-sm text-[#6B6560] leading-relaxed">
                Banded rate that falls as volume rises. You pay for the work that ran.
              </p>
            </div>
          </div>

          {/* 4 Fair-pricing badges */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="px-4 py-2 rounded-full text-xs font-bold bg-[#F7F2EE] text-[#202020] border border-[#E6DED8]">
              No per-user fee
            </span>
            <span className="px-4 py-2 rounded-full text-xs font-bold bg-[#F7F2EE] text-[#202020] border border-[#E6DED8]">
              No per-vehicle fee
            </span>
            <span className="px-4 py-2 rounded-full text-xs font-bold bg-[#FAEDE7] text-[#A8552E] border border-[#D86D3C]/30">
              Subbies pay nothing
            </span>
            <span className="px-4 py-2 rounded-full text-xs font-bold bg-[#FAEDE7] text-[#A8552E] border border-[#D86D3C]/30">
              Clients pay nothing
            </span>
          </div>

          <p className="mt-6 text-left text-xs text-[#6B6560]">
            Full figures, volume bands and worked examples are set out in the HaulageOps Commercial Proposal.
          </p>
        </div>
      </section>

      {/* ── 11. Final CTA: Slide 15 (Light Warm Paper per Brand Guide) ── */}
      <section className="py-24 sm:py-28 bg-[#FAEDE7] border-t border-[#E6DED8]">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold tracking-widest text-[#A8552E] uppercase block mb-2">
              NO OBLIGATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#202020] tracking-tight">
              See your operation on HaulageOps.
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-[#6B6560] leading-relaxed">
              20 minutes on your workflows: dispatch, delegation, client view, invoice. No obligation.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://calendly.com/admin-haulageops/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-[#D86D3C] hover:bg-[#A8552E] text-white font-semibold px-8 py-6 h-auto text-base shadow-sm">
                  Book a 20-minute demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>

            <p className="mt-8 text-xs text-[#6B6560] tracking-wide font-medium">
              The TMS for bulk haulage operators who run subcontractors and demanding clients.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

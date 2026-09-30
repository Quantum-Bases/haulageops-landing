"use client";

import React, { useState } from "react";
import {
  Truck,
  MapPin,
  Clock,
  FileText,
  CheckCircle2,
  AlertCircle,
  Building2,
  ShieldCheck,
  Layers,
  Wifi,
  WifiOff,
  Camera,
  PenTool,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Check,
  RefreshCw,
  Eye,
  FileCheck2,
  Scale,
  Navigation,
  Sparkles,
} from "lucide-react";

/**
 * 1. Bulk Haulage Dispatch Simulation Mockup
 */
export function BulkHaulageMockup() {
  const [activeTab, setActiveTab] = useState<"all" | "owned" | "subbie">("all");

  const jobs = [
    {
      id: "BH-4029",
      client: "Metro Civil Infrastructure",
      material: "20mm Crushed Blue Metal",
      tonnes: "32.40 t",
      rate: "$24.50 / t",
      vehicle: "TR-04 (Volvo FH16)",
      driver: "Mick Sullivan",
      type: "owned",
      status: "En Route",
      eta: "14 mins",
      route: "Dunmore Quarry → Westconnex Stg 3",
      statusColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      dotColor: "bg-blue-400",
    },
    {
      id: "BH-4030",
      client: "Hanson Concrete Batching",
      material: "Manufactured Sand",
      tonnes: "38.20 t",
      rate: "$19.80 / t",
      vehicle: "SUB-88 (Kenworth T659)",
      driver: "Dave Rawson (Rawson Heavy)",
      type: "subbie",
      status: "At Quarry Loading",
      eta: "Loading pit 2",
      route: "Penrith Lakes → Silverwater Plant",
      statusColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      dotColor: "bg-amber-400",
    },
    {
      id: "BH-4031",
      client: "CPB Contractors",
      material: "Road Base Type 1 (CBR 80)",
      tonnes: "41.50 t",
      rate: "$22.00 / t",
      vehicle: "TR-09 (Mack Super-Liner)",
      driver: "Samir K. (Owned)",
      type: "owned",
      status: "Delivered & Signed",
      eta: "Completed 11:24 AM",
      route: "Prospect Quarry → Badgerys Creek",
      statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      dotColor: "bg-emerald-400",
    },
  ];

  const filteredJobs =
    activeTab === "all" ? jobs : jobs.filter((j) => j.type === activeTab);

  return (
    <div className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-left">
      {/* Window Topbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-neutral-800/80 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-semibold text-neutral-200">
            HaulageOps Dispatch Live Board — Bulk Cartage Control
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-[11px] font-medium text-emerald-400 border border-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Socket.io Live
          </span>
          <span className="text-xs text-neutral-400 hidden sm:inline">
            18 Trucks Active · 1,420 Tonnes Today
          </span>
        </div>
      </div>

      {/* Filter Tabs & Quick Metrics */}
      <div className="px-5 py-3 bg-neutral-900/60 border-b border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 p-1 bg-neutral-950 rounded-lg border border-neutral-800">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1 text-xs rounded-md font-medium transition-all ${
              activeTab === "all"
                ? "bg-[#E8652B] text-white shadow-sm"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            All Fleets (18)
          </button>
          <button
            onClick={() => setActiveTab("owned")}
            className={`px-3 py-1 text-xs rounded-md font-medium transition-all ${
              activeTab === "owned"
                ? "bg-[#E8652B] text-white shadow-sm"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Owned Fleet (11)
          </button>
          <button
            onClick={() => setActiveTab("subbie")}
            className={`px-3 py-1 text-xs rounded-md font-medium transition-all ${
              activeTab === "subbie"
                ? "bg-[#E8652B] text-white shadow-sm"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Subcontractors (7)
          </button>
        </div>

        <div className="flex items-center gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            <span>Owned (Blue)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span>Subcontractor (Amber)</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Jobs list on Left, Live Docket / Details on Right */}
      <div className="p-5 lg:p-6 grid lg:grid-cols-12 gap-5">
        {/* Left Column: Job Queue */}
        <div className="lg:col-span-7 space-y-3">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 hover:border-neutral-700 transition-all text-left group"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-white group-hover:text-[#E8652B] transition-colors">
                      {job.id}
                    </span>
                    <span className="text-xs text-neutral-400 truncate max-w-[180px] sm:max-w-xs">
                      {job.client}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-neutral-200">
                    {job.material} ·{" "}
                    <span className="text-[#E8652B] font-semibold">{job.tonnes}</span>
                  </p>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border ${job.statusColor}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${job.dotColor}`} />
                  {job.status}
                </span>
              </div>

              <div className="mt-3 pt-3 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <Truck className="h-3.5 w-3.5 text-neutral-500" />
                  <span>{job.vehicle}</span>
                  <span className="text-neutral-600">|</span>
                  <span className="text-neutral-300">{job.driver}</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-400">
                  <MapPin className="h-3.5 w-3.5 text-[#E8652B]" />
                  <span className="truncate max-w-[160px]">{job.route}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Selected Job Dossier & Docket Verification */}
        <div className="lg:col-span-5 rounded-xl bg-neutral-950 border border-neutral-800 p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B]">
                Active Load Inspection
              </span>
              <span className="text-[11px] font-mono text-neutral-400">
                Ref: POD-88412
              </span>
            </div>

            <div className="mt-3 space-y-2.5 text-xs">
              <div className="flex justify-between">
                <span className="text-neutral-400">Client Contract:</span>
                <span className="text-white font-medium">CPB Western Bypass</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Billing Structure:</span>
                <span className="text-emerald-400 font-semibold">$22.00 / Tonne</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Weighbridge Gross/Tare:</span>
                <span className="text-neutral-200">58.20 t / 16.70 t (41.50 t Net)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">GPS Timestamp:</span>
                <span className="text-neutral-200">11:24:08 AM (Geofence Verified)</span>
              </div>
            </div>

            {/* Docket Preview Card */}
            <div className="mt-4 p-3 rounded-lg bg-neutral-900 border border-neutral-800">
              <div className="flex items-center justify-between text-xs text-neutral-300 mb-2">
                <span className="flex items-center gap-1.5 font-medium">
                  <FileCheck2 className="h-4 w-4 text-emerald-400" />
                  Digital POD Attached
                </span>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Ready to Invoice
                </span>
              </div>
              <div className="p-2.5 bg-neutral-950 rounded border border-neutral-800 flex items-center justify-between text-[11px]">
                <div>
                  <p className="text-white font-mono">Quarry_Scale_Ticket_0942.jpg</p>
                  <p className="text-neutral-500 text-[10px]">Sign-on-glass: J. Henderson (Site Foreman)</p>
                </div>
                <span className="h-6 w-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Check className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs">
            <span className="text-neutral-400">Xero Sync Status:</span>
            <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
              <CheckCircle2 className="h-3.5 w-3.5" /> Auto-sync enabled
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 2. Civil Construction Compliance Dashboard Mockup
 */
export function CivilConstructionMockup() {
  const complianceTiles = [
    { title: "Active Drivers", count: "12 / 12", note: "1 licence renews in 14d", status: "pass" },
    { title: "Vehicle Pre-starts", count: "8 / 8", note: "100% completed today", status: "pass" },
    { title: "Subcontractor Insurances", count: "3 Companies", note: "All policies current", status: "pass" },
    { title: "Site Inductions", count: "24 Inductions", note: "Major projects current", status: "pass" },
  ];

  const auditEvents = [
    { time: "10:48 AM", user: "Dave R. (Driver)", action: "Pre-start inspection logged: TR-08 passed 14-point safety check", ref: "COR-9921" },
    { time: "09:32 AM", user: "Dispatch Admin", action: "Assigned Job #CV-104 to Subcontractor Rawson Heavy ($185/hr)", ref: "DISP-412" },
    { time: "08:15 AM", user: "Samir K. (Driver)", action: "Rest break recorded: 20 min mandatory break at Eastern Creek", ref: "NHVR-774" },
    { time: "07:05 AM", user: "System (Webhook)", action: "Xero invoice batch INV-2026-09 synced for Stage 1 Spoil", ref: "XERO-881" },
  ];

  return (
    <div className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-left">
      <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-800/80 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-semibold text-neutral-200">
            Civil Construction Management & CoR Compliance Ledger
          </span>
        </div>
        <span className="text-xs text-neutral-400 font-mono">
          Project: Western Harbour Tunnel Pkg 2
        </span>
      </div>

      <div className="p-5 lg:p-6 space-y-6">
        {/* Top 4 Compliance Status Tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {complianceTiles.map((tile) => (
            <div
              key={tile.title}
              className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-neutral-400 text-xs">
                  <span>{tile.title}</span>
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                </div>
                <div className="mt-2 text-xl font-bold text-white">{tile.count}</div>
              </div>
              <p className="mt-2 text-[11px] text-neutral-400 font-medium">
                {tile.note}
              </p>
            </div>
          ))}
        </div>

        {/* Project Job Volume & Fleet Breakdown */}
        <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#E8652B] font-bold">
              Weekly Civil Delivery Summary
            </span>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="text-2xl font-black text-white">47 Loads</span>
              <span className="text-neutral-400 text-sm">/ 1,150 Total Tonnes</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-xs text-neutral-300">
            <div>
              <span className="text-neutral-500 block">Owned Fleet Loads</span>
              <span className="font-semibold text-blue-400">31 Loads (66%)</span>
            </div>
            <div>
              <span className="text-neutral-500 block">Subcontractor Loads</span>
              <span className="font-semibold text-amber-400">16 Loads (34%)</span>
            </div>
            <div>
              <span className="text-neutral-500 block">CoR Sign-Off</span>
              <span className="font-semibold text-emerald-400">100% Audit-Ready</span>
            </div>
          </div>
        </div>

        {/* Live Immutable Audit Log */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Live Chain of Responsibility (CoR) Audit Trail
            </span>
            <span className="text-[11px] text-neutral-500">Immutable Ledger</span>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden divide-y divide-neutral-800/80">
            {auditEvents.map((evt) => (
              <div key={evt.ref} className="p-3.5 flex items-start justify-between gap-4 text-xs">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-neutral-500 shrink-0 mt-0.5">{evt.time}</span>
                  <div>
                    <span className="font-semibold text-white mr-2">{evt.user}:</span>
                    <span className="text-neutral-300">{evt.action}</span>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 shrink-0">
                  {evt.ref}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. Earthworks & Spoil Project Dispatch Mockup
 */
export function EarthworksMockup() {
  return (
    <div className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-left">
      <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-800/80 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-semibold text-neutral-200">
            Earthworks Dispatch & Tip-Site Volumetric Tracking
          </span>
        </div>
        <span className="text-xs text-neutral-400">
          Client: Lendlease Civil (Gateway Project)
        </span>
      </div>

      <div className="p-5 lg:p-6 grid lg:grid-cols-12 gap-5">
        {/* Left: Project volumetric progress */}
        <div className="lg:col-span-5 rounded-xl bg-neutral-950 border border-neutral-800 p-5 flex flex-col justify-between">
          <div>
            <div className="pb-3 border-b border-neutral-800">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B]">
                Project Scope & Rates
              </span>
              <p className="mt-1 text-sm font-semibold text-white">
                Excavation Cut & Fill — Package 3B
              </p>
              <p className="text-xs text-neutral-400">
                Site: Elizabeth Drive Upgrade, Kemps Creek
              </p>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-neutral-400">Spoil Disposal Rate:</span>
                <span className="text-white font-semibold">$18.50 / Tonne</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Engineered Fill Rate:</span>
                <span className="text-white font-semibold">$340.00 / Load</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Designated Tip Site:</span>
                <span className="text-neutral-200 font-medium">Boral Kemps Creek Waste Fac.</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Soil Classification:</span>
                <span className="text-emerald-400 font-medium">VENM Certified (Cert #9011)</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-5 p-3 rounded-lg bg-neutral-900 border border-neutral-800">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-neutral-400">Today&apos;s Volumetric Progress</span>
                <span className="text-white font-bold">280t / 1,200t Target</span>
              </div>
              <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                <div className="bg-[#E8652B] h-full rounded-full" style={{ width: "23.3%" }} />
              </div>
              <p className="mt-2 text-[10px] text-neutral-400">
                14 loads logged · 4 tippers currently cycling
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between">
            <span>Tip-fee docket reconciliation:</span>
            <span className="text-emerald-400 font-medium">100% Matched</span>
          </div>
        </div>

        {/* Right: Active tipper allocations */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs text-neutral-400 px-1">
            <span>Active Tippers Dispatched</span>
            <span>3 Owned Fleet · 5 Subcontractors</span>
          </div>

          {[
            {
              truck: "TR-01 (Truck & Dog)",
              operator: "Owned Fleet · Driver: Gary",
              status: "Tipping at Kemps Creek",
              badge: "Tipping",
              cls: "bg-purple-500/10 text-purple-400 border-purple-500/20",
              dot: "bg-purple-400",
              detail: "Load 4 of 6 · Net 38.5t · Tip docket #4410",
            },
            {
              truck: "SUB-12 (Twin Steer Rigid)",
              operator: "Apex Haulage (Subbie) · Driver: Liam",
              status: "En Route to Dig Site",
              badge: "En Route",
              cls: "bg-blue-500/10 text-blue-400 border-blue-500/20",
              dot: "bg-blue-400",
              detail: "Accepted via Subbie Portal · ETA 8m",
            },
            {
              truck: "SUB-19 (Semi-Tipper)",
              operator: "K&M Transport (Subbie) · Driver: Steve",
              status: "Loading Spoil at Excavator 2",
              badge: "Loading",
              cls: "bg-amber-500/10 text-amber-400 border-amber-500/20",
              dot: "bg-amber-400",
              detail: "Load 3 · Tare 15.2t verified on digital docket",
            },
          ].map((item) => (
            <div
              key={item.truck}
              className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex items-start justify-between gap-3 text-xs"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">{item.truck}</span>
                  <span className="text-neutral-500">|</span>
                  <span className="text-neutral-400">{item.operator}</span>
                </div>
                <p className="mt-1 text-neutral-300 font-medium">{item.status}</p>
                <p className="mt-0.5 text-[11px] text-neutral-500">{item.detail}</p>
              </div>
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium border shrink-0 ${item.cls}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${item.dot}`} />
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * 4. Quarries & Aggregates Offline Driver App Mockup
 */
export function QuarryAggregatesMockup() {
  return (
    <div className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-left max-w-xl mx-auto">
      {/* Phone Header */}
      <div className="px-5 py-3.5 bg-neutral-800/90 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
          <span className="text-xs font-semibold text-white">
            HaulageOps Driver Mobile App (v2.8)
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-neutral-700/60 text-[10px] font-medium text-neutral-300 border border-neutral-600">
          <WifiOff className="h-3 w-3 text-amber-400" />
          <span>Offline Mode Active</span>
        </div>
      </div>

      {/* Offline Alert Strip */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 flex items-center gap-2 text-xs text-amber-300">
        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
        <span>In Quarry Basin: Dockets saved locally to device. Auto-syncs on exit.</span>
      </div>

      {/* App Body */}
      <div className="p-5 space-y-4">
        {/* Active Quarry Job Card */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#E8652B]">
                Active Aggregate Circuit
              </span>
              <h4 className="text-sm font-bold text-white mt-0.5">
                Boral Peppertree Quarry → Marulan Siding
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Material: 10mm Concrete Aggregate · Client: Holcim Aus
              </p>
            </div>
            <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-medium">
              Load 7 of 10
            </span>
          </div>

          <div className="mt-3 pt-3 border-t border-neutral-800 grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-neutral-500 block text-[10px]">Total Hauled Today</span>
              <span className="font-semibold text-white">163.80 Tonnes</span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[10px]">Avg Cycle Time</span>
              <span className="font-semibold text-emerald-400">38 mins / roundtrip</span>
            </div>
          </div>
        </div>

        {/* Action Buttons inside App */}
        <div className="grid grid-cols-2 gap-3">
          <button className="p-3.5 rounded-xl bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold text-xs flex flex-col items-center justify-center gap-1.5 shadow-lg shadow-orange-500/10 transition-colors">
            <Camera className="h-5 w-5" />
            <span>Photograph Scale Ticket</span>
          </button>
          <button className="p-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs flex flex-col items-center justify-center gap-1.5 border border-neutral-700 transition-colors">
            <PenTool className="h-5 w-5 text-emerald-400" />
            <span>Sign-on-Glass POD</span>
          </button>
        </div>

        {/* Last Recorded Load in Queue */}
        <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400">
              <FileText className="h-4 w-4" />
            </div>
            <div>
              <p className="text-white font-medium">Load #6 · 23.40t Net</p>
              <p className="text-[10px] text-neutral-500">Weighbridge ticket #99042 captured 11:42 AM</p>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-neutral-700">
            Queued for Sync
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * 5. Construction Logistics Multi-Client Dispatch Mockup
 */
export function ConstructionLogisticsMockup() {
  return (
    <div className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-left">
      <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-800/80 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-semibold text-neutral-200">
            Multi-Client Construction Logistics Board — Live Geofence Feed
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>4 Clients · 8 Active Loads</span>
        </div>
      </div>

      <div className="p-5 lg:p-6 grid lg:grid-cols-12 gap-5">
        {/* Left: Job feed */}
        <div className="lg:col-span-7 space-y-2.5">
          {[
            {
              client: "Multiplex Constructions",
              color: "text-sky-400",
              material: "Structural Precast Elements",
              site: "Sydney Metro Martin Place Site",
              assigned: "TR-03 (Owned) · Driver: Tony B.",
              status: "On Site — Unloading",
              statusCls: "bg-purple-500/10 text-purple-400 border-purple-500/20",
            },
            {
              client: "John Holland Group",
              color: "text-amber-400",
              material: "Road Base DGB20",
              site: "Rozelle Interchange Portal 4",
              assigned: "SUB-05 (Subbie) · Driver: Jack M.",
              status: "En Route · ETA 12m",
              statusCls: "bg-blue-500/10 text-blue-400 border-blue-500/20",
            },
            {
              client: "Lendlease Engineering",
              color: "text-emerald-400",
              material: "Recycled Crushed Concrete",
              site: "Western Sydney Airport Cargo Hub",
              assigned: "TR-11 (Owned) · Driver: Marcus T.",
              status: "Delivered & POD Verified",
              statusCls: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
            },
            {
              client: "CPB Contractors",
              color: "text-rose-400",
              material: "Drainage Ballast Agg",
              site: "Parramatta Light Rail Stg 2",
              assigned: "SUB-14 (Subbie) · Driver: Ken S.",
              status: "At Loading Quarry",
              statusCls: "bg-amber-500/10 text-amber-400 border-amber-500/20",
            },
          ].map((item) => (
            <div
              key={item.client}
              className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs flex items-start justify-between gap-3"
            >
              <div>
                <span className={`font-bold ${item.color}`}>{item.client}</span>
                <p className="font-medium text-white mt-0.5">{item.material}</p>
                <p className="text-neutral-400 text-[11px] mt-0.5">Site: {item.site}</p>
                <p className="text-neutral-500 text-[11px] mt-1">{item.assigned}</p>
              </div>
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-semibold border shrink-0 ${item.statusCls}`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>

        {/* Right: Live GPS & Map Summary */}
        <div className="lg:col-span-5 rounded-xl bg-neutral-950 border border-neutral-800 p-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-3 border-b border-neutral-800">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B]">
                Fleet Location Telemetry
              </span>
              <span className="text-[10px] text-neutral-400">Mapbox Live GPS</span>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8652B_1px,transparent_1px)] [background-size:12px_12px]" />
              <Navigation className="h-8 w-8 text-[#E8652B] mx-auto mb-2 animate-bounce" />
              <p className="text-xs font-semibold text-white">6 Trucks Tracked Live</p>
              <p className="text-[11px] text-neutral-400 mt-1">
                4 Owned Fleets (Blue Pins) · 2 Subcontractors (Orange Pins)
              </p>
              <div className="mt-3 flex justify-center gap-2 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                  Rozelle Portal: 2 trucks
                </span>
                <span className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                  Airport Hub: 3 trucks
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-xs">
              <div className="flex justify-between text-neutral-400">
                <span>Fastest Turnaround:</span>
                <span className="text-white font-medium">32m (Rozelle Interchange)</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Geofence Compliance:</span>
                <span className="text-emerald-400 font-medium">100% In-Bounds</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
            <span>Client Portal View:</span>
            <span className="text-[#E8652B] font-medium">Restricted to Client Jobs</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 6. Tipper Fleet Rapid Dispatch Mockup
 */
export function TipperFleetMockup() {
  return (
    <div className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-left">
      <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-800/80 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-semibold text-neutral-200">
            Tipper Fleet Dispatch Board — High-Churn Load Cycles
          </span>
        </div>
        <span className="text-xs text-neutral-400">8 Owned Tippers · 4 Subbie Tippers</span>
      </div>

      <div className="p-5 lg:p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            truck: "Tipper 01 (Truck & Dog)",
            driver: "Ben C. (Owned)",
            loads: "6 of 8 loads done",
            material: "Road Base 20mm",
            status: "En Route to Tip",
            statusCls: "bg-blue-500/10 text-blue-400 border-blue-500/20",
          },
          {
            truck: "Tipper 04 (Semi-Tipper)",
            driver: "Ray H. (Owned)",
            loads: "7 of 7 completed",
            material: "Clean Spoil",
            status: "All Daily Loads Done",
            statusCls: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
          },
          {
            truck: "SUB-02 (Rigid Tipper)",
            driver: "Samir (Subbie Portal)",
            loads: "4 of 6 loads done",
            material: "Crushed Agg",
            status: "Loading at Quarry Pit 1",
            statusCls: "bg-amber-500/10 text-amber-400 border-amber-500/20",
          },
          {
            truck: "SUB-07 (Truck & Dog)",
            driver: "Kev P. (Subbie Portal)",
            loads: "3 of 5 loads done",
            material: "Sand Fill",
            status: "En Route · ETA 9m",
            statusCls: "bg-blue-500/10 text-blue-400 border-blue-500/20",
          },
        ].map((tipper) => (
          <div
            key={tipper.truck}
            className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between text-xs"
          >
            <div>
              <div className="flex justify-between items-start">
                <span className="font-bold text-white">{tipper.truck}</span>
              </div>
              <p className="text-neutral-400 text-[11px] mt-0.5">{tipper.driver}</p>
              <div className="mt-3 p-2 bg-neutral-900 rounded border border-neutral-800">
                <p className="text-neutral-300 font-medium">{tipper.material}</p>
                <p className="text-[11px] text-neutral-500">{tipper.loads}</p>
              </div>
            </div>
            <div className="mt-3">
              <span
                className={`w-full block text-center py-1 rounded text-[11px] font-semibold border ${tipper.statusCls}`}
              >
                {tipper.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 7. Muckaway & Spoil Removal Mockup
 */
export function MuckawayMockup() {
  return (
    <div className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-left">
      <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-800/80 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-semibold text-neutral-200">
            Multi-Contract Muckaway & Spoil Tipping Feed
          </span>
        </div>
        <span className="text-xs text-neutral-400">Total Today: 42 Loads / 890 Tonnes</span>
      </div>

      <div className="p-5 lg:p-6 grid md:grid-cols-2 gap-5">
        {/* Contract A */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3 text-xs">
          <div className="flex justify-between items-start pb-2 border-b border-neutral-800">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#E8652B]">
                Contract A: Deep Basement Dig
              </span>
              <p className="text-white font-bold text-sm">City Road Towers — Excavation Stage 2</p>
            </div>
            <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px]">
              6 Tippers Active
            </span>
          </div>
          <div className="space-y-1.5 text-neutral-300">
            <p className="flex justify-between">
              <span className="text-neutral-500">Material Classification:</span>
              <span className="text-emerald-400 font-medium">VENM (Virgin Natural)</span>
            </p>
            <p className="flex justify-between">
              <span className="text-neutral-500">Authorized Tip Location:</span>
              <span>Horsley Park Rehabilitation Site</span>
            </p>
            <p className="flex justify-between">
              <span className="text-neutral-500">Loads Tipped & Reconciled:</span>
              <span className="font-semibold text-white">18 of 24 planned</span>
            </p>
          </div>
          <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-400">
            Next Tipper Due: TR-02 (In Transit, 6 mins out from City Rd)
          </div>
        </div>

        {/* Contract B */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3 text-xs">
          <div className="flex justify-between items-start pb-2 border-b border-neutral-800">
            <div>
              <span className="text-[10px] uppercase font-bold text-amber-400">
                Contract B: Infrastructure Trenching
              </span>
              <p className="text-white font-bold text-sm">M12 Motorway Spoil Cartage</p>
            </div>
            <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px]">
              4 Subbie Tippers
            </span>
          </div>
          <div className="space-y-1.5 text-neutral-300">
            <p className="flex justify-between">
              <span className="text-neutral-500">Material Classification:</span>
              <span className="text-amber-400 font-medium">ENM (Excavated Natural)</span>
            </p>
            <p className="flex justify-between">
              <span className="text-neutral-500">Authorized Tip Location:</span>
              <span>Genesis Waste Recycling Facility</span>
            </p>
            <p className="flex justify-between">
              <span className="text-neutral-500">Loads Tipped & Reconciled:</span>
              <span className="font-semibold text-white">12 of 16 planned</span>
            </p>
          </div>
          <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-400">
            Tip Docket Verification: 12 photos uploaded via Subbie Portal
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 8. Regional Haulage Corridor & Connectivity Gap Mockup
 */
export function RegionalHaulageMockup() {
  return (
    <div className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-left">
      <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-800/80 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-semibold text-neutral-200">
            Regional Freight Corridor & NHVR Fatigue Tracker
          </span>
        </div>
        <span className="text-xs text-neutral-400">Sydney ↔ Dubbo ↔ Parkes Route</span>
      </div>

      <div className="p-5 lg:p-6 grid sm:grid-cols-3 gap-4 text-xs">
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
          <div className="flex justify-between text-neutral-400">
            <span>Rig 1 (Kenworth T909)</span>
            <span className="text-emerald-400">Live GPS</span>
          </div>
          <p className="text-sm font-bold text-white">Driver: Greg M.</p>
          <p className="text-neutral-400 text-[11px]">Freight: 38t Structural Steel</p>
          <div className="pt-2 border-t border-neutral-800 text-[11px] space-y-1">
            <p className="text-neutral-300">Location: Bathurst Bypass</p>
            <p className="text-emerald-400">Fatigue: 4h 15m driven / Rest taken</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
          <div className="flex justify-between text-neutral-400">
            <span>Rig 2 (Mack Titan)</span>
            <span className="text-amber-400">Cached (Offline)</span>
          </div>
          <p className="text-sm font-bold text-white">Driver: Brett W.</p>
          <p className="text-neutral-400 text-[11px]">Freight: Bulk Cement Pods</p>
          <div className="pt-2 border-t border-neutral-800 text-[11px] space-y-1">
            <p className="text-neutral-300">Last Ping: 38 mins ago (Capertee Valley)</p>
            <p className="text-amber-400">App queuing GPS packets locally</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
          <div className="flex justify-between text-neutral-400">
            <span>Rig 3 (Subbie Kenworth)</span>
            <span className="text-blue-400">Subbie Portal</span>
          </div>
          <p className="text-sm font-bold text-white">Driver: Dave K. (K&M Haulage)</p>
          <p className="text-neutral-400 text-[11px]">Freight: 42t Aggregate</p>
          <div className="pt-2 border-t border-neutral-800 text-[11px] space-y-1">
            <p className="text-neutral-300">Location: Parkes Intermodal Hub</p>
            <p className="text-blue-400">Status: Delivered & Docket Uploaded</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 9. Heavy Materials & Precast Dossier Mockup
 */
export function HeavyMaterialsMockup() {
  return (
    <div className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-left">
      <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-800/80 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-semibold text-neutral-200">
            Heavy Materials Job Record — Oversize Precast Beam Transport
          </span>
        </div>
        <span className="text-xs text-neutral-400 font-mono">Job #HM-8812</span>
      </div>

      <div className="p-5 lg:p-6 grid lg:grid-cols-2 gap-5 text-xs">
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8652B]">
            Job Specifications
          </span>
          <div className="flex justify-between text-neutral-300">
            <span className="text-neutral-500">Client:</span>
            <span className="font-semibold text-white">CPB / John Holland JV</span>
          </div>
          <div className="flex justify-between text-neutral-300">
            <span className="text-neutral-500">Cargo Dimensions:</span>
            <span>34m Precast Bridge Beam (48.5 Tonnes)</span>
          </div>
          <div className="flex justify-between text-neutral-300">
            <span className="text-neutral-500">Delivery Window:</span>
            <span className="text-amber-400 font-semibold">01:00 AM – 04:30 AM (Night Shift)</span>
          </div>
          <div className="flex justify-between text-neutral-300">
            <span className="text-neutral-500">Prime Mover + Steerable Jinker:</span>
            <span>Rego: TR-12 (Drake 4x8 Jinker)</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
            Attached Heavy Transport Permits & Compliance
          </span>
          <div className="space-y-1.5">
            {[
              { name: "NHVR_Route_Permit_NSW_2026.pdf", status: "Verified & Current" },
              { name: "Traffic_Control_Escort_Plan.pdf", status: "Approved by Police Escort" },
              { name: "Bridge_Weight_Assessment_TfNSW.pdf", status: "Certified (Class 1 O/S)" },
            ].map((doc) => (
              <div
                key={doc.name}
                className="p-2 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-between text-[11px]"
              >
                <div className="flex items-center gap-2 text-neutral-300 truncate">
                  <FileText className="h-3.5 w-3.5 text-[#E8652B] shrink-0" />
                  <span className="truncate">{doc.name}</span>
                </div>
                <span className="text-emerald-400 text-[10px] shrink-0">{doc.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 10. Material Transport Dual Rate Card Mockup
 */
export function MaterialTransportMockup() {
  return (
    <div className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-left">
      <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-800/80 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-semibold text-neutral-200">
            Material Transport Dynamic Rate Card Matrix
          </span>
        </div>
        <span className="text-xs text-neutral-400">Client: ANL Landscaping Supplies</span>
      </div>

      <div className="p-5 lg:p-6 overflow-x-auto">
        <table className="w-full text-xs text-left">
          <thead>
            <tr className="border-b border-neutral-800 text-neutral-400 text-[11px]">
              <th className="pb-3 font-semibold">Material Classification</th>
              <th className="pb-3 font-semibold">Billing Unit</th>
              <th className="pb-3 font-semibold text-[#E8652B]">Client Charge Rate</th>
              <th className="pb-3 font-semibold text-neutral-400">Subbie Pay Rate</th>
              <th className="pb-3 font-semibold text-emerald-400">Gross Margin</th>
              <th className="pb-3 font-semibold text-right">Effective Window</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800/80">
            {[
              { name: "20mm Drainage Aggregate", unit: "Per Tonne", charge: "$24.50", pay: "$18.50", margin: "$6.00 / t (24.5%)", date: "Current" },
              { name: "Decorative River Pebbles", unit: "Per Load", charge: "$380.00", pay: "$300.00", margin: "$80.00 / load", date: "Current" },
              { name: "Premium Sandy Loam Topsoil", unit: "Per Tonne", charge: "$21.00", pay: "$16.00", margin: "$5.00 / t (23.8%)", date: "Current" },
              { name: "Nepean Washed River Sand", unit: "Per Tonne", charge: "$26.00", pay: "$20.00", margin: "$6.00 / t (23.0%)", date: "Current" },
            ].map((row) => (
              <tr key={row.name} className="hover:bg-neutral-950/60">
                <td className="py-3 font-medium text-white">{row.name}</td>
                <td className="py-3 text-neutral-400">{row.unit}</td>
                <td className="py-3 font-bold text-[#E8652B]">{row.charge}</td>
                <td className="py-3 text-neutral-300">{row.pay}</td>
                <td className="py-3 font-semibold text-emerald-400">{row.margin}</td>
                <td className="py-3 text-right text-neutral-500 font-mono text-[11px]">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/**
 * 11. Waste & Recycling Transfer Notes Mockup
 */
export function WasteRecyclingMockup() {
  return (
    <div className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-left">
      <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-800/80 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-semibold text-neutral-200">
            Regulated Waste Tracking & Environmental Transfer Notes
          </span>
        </div>
        <span className="text-xs text-neutral-400">EPA Regulatory Compliance View</span>
      </div>

      <div className="p-5 lg:p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
        {[
          {
            stream: "Construction & Demolition (C&D)",
            loads: "14 Collections Scheduled",
            transferNote: "WTN-2026-904 Attached",
            destination: "ResourceCo Recycling Facility",
            status: "Complete",
            statusCls: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
          },
          {
            stream: "Commercial Clean Fill (VENM)",
            loads: "8 Collections Active",
            transferNote: "Soil Report Cert #772 Attached",
            destination: "Penrith Lakes Quarry Rehab",
            status: "In Progress",
            statusCls: "bg-blue-500/10 text-blue-400 border-blue-500/20",
          },
          {
            stream: "Commercial Green Organics",
            loads: "6 Collections Scheduled",
            transferNote: "WTN-2026-905 Attached",
            destination: "SUEZ Organic Composting Facility",
            status: "En Route to Tip",
            statusCls: "bg-amber-500/10 text-amber-400 border-amber-500/20",
          },
        ].map((item) => (
          <div
            key={item.stream}
            className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between"
          >
            <div>
              <span className="font-bold text-white">{item.stream}</span>
              <p className="text-neutral-400 text-[11px] mt-1">{item.destination}</p>
              <div className="mt-3 p-2 bg-neutral-900 rounded border border-neutral-800 text-[11px]">
                <p className="text-emerald-400 font-medium">{item.transferNote}</p>
                <p className="text-neutral-500">{item.loads}</p>
              </div>
            </div>
            <span
              className={`mt-3 block text-center py-1 rounded text-[11px] font-semibold border ${item.statusCls}`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

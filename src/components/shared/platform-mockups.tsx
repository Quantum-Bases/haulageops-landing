"use client";

import React, { useState } from "react";
import {
  Truck,
  MapPin,
  Clock,
  CheckCircle2,
  AlertTriangle,
  FileText,
  User,
  ShieldCheck,
  Calendar,
  Layers,
  ArrowRight,
  TrendingUp,
  Receipt,
  Download,
  Search,
  Filter,
  RefreshCw,
  Phone,
  Lock,
  Building2,
  DollarSign,
  Camera,
} from "lucide-react";

/**
 * 1. Dispatch Management Live Board Mockup
 */
export function DispatchManagementMockup() {
  const [filter, setFilter] = useState("all");

  const jobs = [
    {
      id: "#HO-8492",
      client: "CPB Contractors",
      site: "Peppertree → Western Airport",
      material: "38.4t Roadbase 20mm",
      driver: "Dave M. (Truck #08)",
      isSubbie: false,
      status: "In Transit",
      statusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      time: "ETA 09:20 AM",
    },
    {
      id: "#HO-8493",
      client: "Lendlease Infra",
      site: "Dunmore Quarry → M12 Lot 4",
      material: "42.1t Fill Sand",
      driver: "JJ Transport (Subbie S-14)",
      isSubbie: true,
      status: "Loading Site",
      statusColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      time: "Turnaround 14m",
    },
    {
      id: "#HO-8494",
      client: "John Holland",
      site: "Boral Peats Ridge → Rozelle",
      material: "32.0t Agg 10mm",
      driver: "Mick T. (Truck #12)",
      isSubbie: false,
      status: "Dispatched",
      statusColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      time: "En Route to Pit",
    },
    {
      id: "#HO-8495",
      client: "Seymour Whyte",
      site: "Marulan → Badgerys Creek",
      material: "44.8t Ballast Rock",
      driver: "Apex Bulk (Subbie S-02)",
      isSubbie: true,
      status: "Completed",
      statusColor: "bg-neutral-800 text-neutral-300 border-neutral-700",
      time: "POD Verified",
    },
  ];

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden text-left font-sans">
      {/* Top Browser Bar */}
      <div className="px-5 py-3.5 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-mono text-neutral-400 hidden sm:inline">
            app.haulageops.com/dispatch-board
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Socket.io Feed
          </span>
        </div>
      </div>

      {/* Control Strip */}
      <div className="p-4 bg-neutral-900/90 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-neutral-400 font-medium">Quick Filter:</span>
          <button
            onClick={() => setFilter("all")}
            className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
              filter === "all" ? "bg-[#E8652B] text-white" : "bg-neutral-800 text-neutral-400 hover:text-white"
            }`}
          >
            All Fleets (28)
          </button>
          <button
            onClick={() => setFilter("subbie")}
            className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
              filter === "subbie" ? "bg-[#E8652B] text-white" : "bg-neutral-800 text-neutral-400 hover:text-white"
            }`}
          >
            Subcontractors (12)
          </button>
        </div>
        <div className="text-neutral-400 font-mono text-[11px]">
          Today: 42 Loads Scheduled · 98.2% On-Time
        </div>
      </div>

      {/* Live Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left text-neutral-300">
          <thead className="bg-neutral-950/70 text-neutral-400 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Job ID</th>
              <th className="py-3 px-4">Client & Project</th>
              <th className="py-3 px-4">Route & Material</th>
              <th className="py-3 px-4">Driver / Truck</th>
              <th className="py-3 px-4">Live Status</th>
              <th className="py-3 px-4">Timing</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800 font-sans">
            {jobs
              .filter((j) => (filter === "subbie" ? j.isSubbie : true))
              .map((row) => (
                <tr key={row.id} className="hover:bg-neutral-800/40 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-[#E8652B]">{row.id}</td>
                  <td className="py-3 px-4 font-semibold text-white">{row.client}</td>
                  <td className="py-3 px-4">
                    <div className="text-white font-medium">{row.site}</div>
                    <div className="text-neutral-400 text-[11px]">{row.material}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={row.isSubbie ? "text-amber-400 font-medium" : "text-neutral-200"}>
                      {row.driver}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold border ${row.statusColor}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono text-neutral-400 text-[11px]">{row.time}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Footer KPI bar */}
      <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex flex-wrap items-center justify-between text-xs text-neutral-400">
        <span className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span>No GPS hardware required — live tracking powered by driver mobile app</span>
        </span>
        <span className="text-[#E8652B] font-bold font-mono">1-Click Subbie Delegation Active</span>
      </div>
    </div>
  );
}

/**
 * 2. Job Record Detail Mockup (Job Management)
 */
export function JobManagementDetailMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl p-6 sm:p-7 text-left font-sans text-xs text-neutral-300">
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-neutral-800 gap-3">
        <div>
          <span className="text-[10px] font-mono text-[#E8652B] font-bold uppercase tracking-wider block">
            Job Record Detail · Single Source of Truth
          </span>
          <h4 className="text-lg font-bold text-white mt-0.5">
            #HO-8492: Boral Peppertree → Western Sydney Airport
          </h4>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          In Transit · Live
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-4 my-5">
        <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
          <span className="text-neutral-500 text-[11px] block">Client & PO Reference</span>
          <p className="font-bold text-white text-sm">CPB Contractors Pty Ltd</p>
          <p className="text-neutral-400 font-mono text-[11px]">PO-2026-M12-004</p>
        </div>
        <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
          <span className="text-neutral-500 text-[11px] block">Material & Agreed Rate</span>
          <p className="font-bold text-white text-sm">38.40t Roadbase Class 2</p>
          <p className="text-emerald-400 font-mono font-bold">$18.50 / tonne ($710.40)</p>
        </div>
        <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
          <span className="text-neutral-500 text-[11px] block">Assigned Truck & Driver</span>
          <p className="font-bold text-white text-sm">Truck #08 (Kenworth T909)</p>
          <p className="text-neutral-400">Dave Thornton (Company Fleet)</p>
        </div>
      </div>

      {/* Progress timeline */}
      <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
        <span className="text-neutral-400 font-bold uppercase tracking-wider text-[10px]">
          Job Lifecycle Audit Timeline
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] font-mono">
          <div className="p-2 rounded bg-neutral-900 border border-neutral-800">
            <span className="text-emerald-400 font-bold block">✓ 06:30 AM</span>
            <span className="text-neutral-300">Created by Allocator</span>
          </div>
          <div className="p-2 rounded bg-neutral-900 border border-neutral-800">
            <span className="text-emerald-400 font-bold block">✓ 06:45 AM</span>
            <span className="text-neutral-300">Driver Pre-Start Passed</span>
          </div>
          <div className="p-2 rounded bg-neutral-900 border border-neutral-800">
            <span className="text-emerald-400 font-bold block">✓ 07:15 AM</span>
            <span className="text-neutral-300">Loaded: 38.40t Scaled</span>
          </div>
          <div className="p-2 rounded bg-[#E8652B]/10 border border-[#E8652B]/30">
            <span className="text-[#E8652B] font-bold block">⚡ 08:05 AM</span>
            <span className="text-white">In Transit (ETA 08:45)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. Job History View Mockup
 */
export function JobHistoryMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl p-6 sm:p-7 text-left font-sans text-xs text-neutral-300">
      <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-4">
        <div>
          <span className="text-[10px] font-mono text-[#E8652B] font-bold uppercase tracking-wider block">
            Searchable Operational Archive
          </span>
          <h4 className="text-lg font-bold text-white">Historical Jobs & Verified Records</h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-md text-[11px] bg-neutral-800 text-neutral-300 border border-neutral-700">
            Filtered: Last 30 Days (412 Jobs)
          </span>
        </div>
      </div>

      <div className="space-y-2.5">
        {[
          { id: "#HO-8488", date: "Yesterday, 04:30 PM", client: "CPB Contractors", cargo: "128.5t Aggregate", status: "Invoiced", xero: "INV-9201" },
          { id: "#HO-8487", date: "Yesterday, 02:15 PM", client: "Lendlease", cargo: "94.2t Sand", status: "Invoiced", xero: "INV-9200" },
          { id: "#HO-8486", date: "Yesterday, 11:00 AM", client: "Seymour Whyte", cargo: "64.0t Roadbase", status: "Verified", xero: "Draft Ready" },
        ].map((item) => (
          <div key={item.id} className="p-3 rounded-xl bg-neutral-950 border border-neutral-800/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono font-bold text-[#E8652B]">{item.id}</span>
              <span className="text-neutral-400 font-mono text-[11px]">{item.date}</span>
              <span className="font-bold text-white">{item.client}</span>
              <span className="text-neutral-400">({item.cargo})</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px]">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                {item.status}
              </span>
              <span className="text-neutral-500">Xero: {item.xero}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 4. Fleet Management Panel Mockup
 */
export function FleetManagementMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl p-6 sm:p-7 text-left font-sans text-xs text-neutral-300">
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-neutral-800 gap-3 mb-5">
        <div>
          <span className="text-[10px] font-mono text-[#E8652B] font-bold uppercase tracking-wider block">
            Fleet Asset Registry & Compliance
          </span>
          <h4 className="text-lg font-bold text-white">Active Trucks, Tippers & Trailing Equipment</h4>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="px-2.5 py-1 rounded bg-neutral-800 text-white font-bold">
            Total Fleet: 35 Registered
          </span>
          <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-bold">
            28 Active Today
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {[
          { rego: "XN-84-AK", make: "Kenworth T909 (6x4)", config: "Truck & Quad Dog", odometer: "284,500 km", service: "Next in 4,200 km", status: "Active Dispatch", statusColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
          { rego: "CW-29-YT", make: "Mack Trident (8x4)", config: "Heavy Rigid Tipper", odometer: "192,100 km", service: "Next in 1,100 km", status: "Active Dispatch", statusColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
          { rego: "BL-99-PL", make: "Volvo FH16 (6x4)", config: "Semi-Tipper 48t GCM", odometer: "410,200 km", service: "Service Due 28/10", status: "Scheduled Service", statusColor: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
        ].map((truck) => (
          <div key={truck.rego} className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="font-mono font-black text-white text-sm bg-neutral-800 px-2 py-0.5 rounded">
                  {truck.rego}
                </span>
                <span className="font-bold text-neutral-200">{truck.make}</span>
                <span className="text-neutral-400 font-medium">· {truck.config}</span>
              </div>
              <div className="text-[11px] text-neutral-400 font-mono mt-1">
                Odometer: {truck.odometer} · Maintenance: {truck.service}
              </div>
            </div>
            <div>
              <span className={`px-2.5 py-1 rounded text-[11px] font-bold border ${truck.statusColor}`}>
                {truck.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 5. Driver Management Panel Mockup
 */
export function DriverManagementMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl p-6 sm:p-7 text-left font-sans text-xs text-neutral-300">
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-neutral-800 gap-3 mb-5">
        <div>
          <span className="text-[10px] font-mono text-[#E8652B] font-bold uppercase tracking-wider block">
            Driver Credentials & Fatigue Management
          </span>
          <h4 className="text-lg font-bold text-white">Heavy Vehicle Driver Compliance Matrix</h4>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          HVNL / BFM Standard Verified
        </span>
      </div>

      <div className="space-y-3">
        {[
          { name: "Dave Thornton", license: "MC (Multi-Combination)", medical: "Valid to Nov 2027", induction: "WestConnex · M12", hoursToday: "5.5h / 12h", status: "Active Driving" },
          { name: "Mick Patterson", license: "HC (Heavy Combination)", medical: "Valid to Mar 2028", induction: "Western Sydney Airport", hoursToday: "7.0h / 12h", status: "Taking Break" },
          { name: "Samira Khan", license: "HR (Heavy Rigid)", medical: "Valid to Aug 2027", induction: "Boral Quarries Inducted", hoursToday: "3.2h / 12h", status: "Active Driving" },
        ].map((d) => (
          <div key={d.name} className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm">{d.name}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-neutral-800 text-neutral-300">
                  {d.license}
                </span>
              </div>
              <div className="text-[11px] text-neutral-400 mt-1">
                Medical: {d.medical} · Site Induction: {d.induction}
              </div>
            </div>
            <div className="text-right">
              <span className="text-emerald-400 font-mono font-bold block">{d.hoursToday}</span>
              <span className="text-[10px] text-neutral-500">{d.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 6. Live Job Tracking with GPS Map Simulation
 */
export function LiveJobTrackingMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden text-left font-sans text-xs">
      <div className="px-5 py-3.5 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between text-white">
        <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
          <MapPin className="h-4 w-4 text-[#E8652B]" />
          <span>Mapbox Live Telemetry Stream · Sydney Metro & Western Corridor</span>
        </div>
        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          Updating every 10s
        </span>
      </div>

      <div className="p-6 bg-gradient-to-b from-neutral-900 to-neutral-950 grid lg:grid-cols-12 gap-6 items-center">
        {/* Visual Map Representation */}
        <div className="lg:col-span-7 bg-neutral-950 rounded-xl border border-neutral-800 p-5 relative overflow-hidden min-h-[220px] flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] text-neutral-400">
            <span className="font-bold text-white">Geofenced Active Corridor</span>
            <span>Speed: 74 km/h (M4 Motorway)</span>
          </div>

          {/* Graphical GPS Route Illustration */}
          <div className="my-6 relative flex items-center justify-between">
            <div className="w-full h-1.5 bg-neutral-800 rounded-full relative">
              <div className="w-[65%] h-full bg-[#E8652B] rounded-full" />
              {/* Truck Marker */}
              <div className="absolute top-1/2 left-[65%] -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#E8652B] text-white flex items-center justify-center shadow-lg border-2 border-white">
                <Truck className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>

          <div className="flex justify-between text-[11px] font-mono text-neutral-400">
            <div>
              <span className="text-white font-bold block">Peppertree Quarry</span>
              <span>Departed 07:15 AM</span>
            </div>
            <div className="text-right">
              <span className="text-white font-bold block">Western Sydney Airport</span>
              <span className="text-emerald-400 font-bold">ETA 08:42 AM (On Schedule)</span>
            </div>
          </div>
        </div>

        {/* Telemetry telemetry box */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
            <span className="text-[10px] uppercase text-neutral-500 font-bold block">Turnaround Performance</span>
            <p className="text-sm font-bold text-white mt-0.5">Average Site Wait: 8.5 Minutes</p>
            <p className="text-[11px] text-emerald-400 mt-1 font-mono">Zero Demurrage Incurred</p>
          </div>
          <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
            <span className="text-[10px] uppercase text-neutral-500 font-bold block">Customer Tracking Link</span>
            <p className="text-[11px] text-neutral-300 mt-0.5">
              Client sees real-time progress without downloading any app or calling allocators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 7. Job Creation from Template Mockup (Job Scheduling)
 */
export function JobSchedulingTemplateMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl p-6 sm:p-7 text-left font-sans text-xs text-neutral-300">
      <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-5">
        <div>
          <span className="text-[10px] font-mono text-[#E8652B] font-bold uppercase tracking-wider block">
            Rapid Multi-Leg Templating
          </span>
          <h4 className="text-lg font-bold text-white">Generate 50 Loads in 60 Seconds</h4>
        </div>
        <span className="px-2.5 py-1 rounded bg-[#E8652B]/10 text-[#E8652B] border border-[#E8652B]/20 font-bold text-[11px]">
          Template: M12 Sub-Base Run
        </span>
      </div>

      <div className="grid sm:grid-cols-3 gap-3.5 mb-4">
        <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
          <span className="text-neutral-500 text-[10px] block">Recurring Frequency</span>
          <p className="font-bold text-white text-xs mt-0.5">Mon–Fri · 6 Trucks / Day</p>
        </div>
        <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
          <span className="text-neutral-500 text-[10px] block">Material Locked</span>
          <p className="font-bold text-white text-xs mt-0.5">DGB20 Roadbase Spec</p>
        </div>
        <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
          <span className="text-neutral-500 text-[10px] block">Tonnage Target</span>
          <p className="font-bold text-emerald-400 text-xs mt-0.5">250 Tonnes / Day</p>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-between text-[11px]">
        <span className="text-neutral-400">Rates auto-populated from Client Rate Card (Effective dated to 31/12)</span>
        <span className="text-[#E8652B] font-bold font-mono">1-Click Clone & Dispatch</span>
      </div>
    </div>
  );
}

/**
 * 8. Break Records & Fatigue Management Mockup
 */
export function BreakAndRestMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl p-6 sm:p-7 text-left font-sans text-xs text-neutral-300">
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-neutral-800 gap-3 mb-5">
        <div>
          <span className="text-[10px] font-mono text-[#E8652B] font-bold uppercase tracking-wider block">
            Heavy Vehicle National Law (HVNL) Compliance
          </span>
          <h4 className="text-lg font-bold text-white">Driver Work & Rest Hour Tracker</h4>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          Standard Hours: 100% Compliant
        </span>
      </div>

      <div className="space-y-3">
        {[
          { driver: "Dave M.", truck: "Truck #08", workTime: "5h 15m", restTaken: "45m (Mandatory Rest)", nextRestDue: "In 2h 15m", status: "Within Legal Limit" },
          { driver: "Mick T.", truck: "Truck #12", workTime: "7h 00m", restTaken: "60m (Rest Completed)", nextRestDue: "In 45m", status: "Rest Prompt Sent" },
          { driver: "Samira K.", truck: "Truck #14", workTime: "3h 30m", restTaken: "30m (Pre-Trip Rest)", nextRestDue: "In 4h 00m", status: "Within Legal Limit" },
        ].map((item) => (
          <div key={item.driver} className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="font-bold text-white text-sm">{item.driver}</span>
              <span className="text-neutral-400 text-xs ml-2">({item.truck})</span>
              <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                Work: {item.workTime} · Rest Taken: {item.restTaken}
              </div>
            </div>
            <div className="text-right">
              <span className="text-[#E8652B] font-mono font-bold block">{item.nextRestDue}</span>
              <span className="text-[10px] text-emerald-400">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 9. Subcontractor Portal View Mockup
 */
export function SubcontractorPortalMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl p-6 sm:p-7 text-left font-sans text-xs text-neutral-300">
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-neutral-800 gap-3 mb-5">
        <div>
          <span className="text-[10px] font-mono text-[#E8652B] font-bold uppercase tracking-wider block">
            Subcontractor Self-Service Portal
          </span>
          <h4 className="text-lg font-bold text-white">JJ Transport Pty Ltd (Contractor ID: SUB-402)</h4>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          Dedicated Subbie Access · $0 Surcharge
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Allocated Job */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2.5">
          <div className="flex justify-between items-center">
            <span className="font-mono text-[#E8652B] font-bold">Job #HO-8493 (Assigned)</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400">
              Accepted
            </span>
          </div>
          <p className="font-bold text-white text-sm">Dunmore Quarry → M12 Motorway Lot 4</p>
          <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800 flex justify-between text-xs">
            <span className="text-neutral-400">Agreed Subbie Pay Rate:</span>
            <span className="font-mono font-bold text-emerald-400">$13.50 / tonne</span>
          </div>
          <p className="text-[11px] text-neutral-400 flex items-center gap-1.5">
            <Lock className="h-3 w-3 text-[#E8652B]" />
            Client charge rate ($16.80/t) is completely invisible.
          </p>
        </div>

        {/* Auto RCTI */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2.5">
          <div className="flex justify-between items-center">
            <span className="font-bold text-white">Auto-Drafted Weekly RCTI</span>
            <span className="text-[10px] text-neutral-400">Period ending 29/09</span>
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between text-neutral-400">
              <span>34 Verified Loads (1,340.2t):</span>
              <span className="text-white font-mono">$18,092.70</span>
            </div>
            <div className="flex justify-between text-neutral-400">
              <span>Fuel Surcharge (+4.2%):</span>
              <span className="text-white font-mono">+$759.89</span>
            </div>
            <div className="flex justify-between text-emerald-400 font-bold pt-1.5 border-t border-neutral-800 text-sm">
              <span>Total Payable (Inc GST):</span>
              <span className="font-mono">$20,737.85</span>
            </div>
          </div>
          <p className="text-[11px] text-neutral-500">
            One-click download. No disputes over lost paperwork or weekend hours.
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * 10. Client Portal Dashboard Mockup
 */
export function ClientPortalMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl p-6 sm:p-7 text-left font-sans text-xs text-neutral-300">
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-neutral-800 gap-3 mb-5">
        <div>
          <span className="text-[10px] font-mono text-[#E8652B] font-bold uppercase tracking-wider block">
            Branded Client Experience
          </span>
          <h4 className="text-lg font-bold text-white">CPB Contractors · Project M12 Package 2</h4>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8652B]/10 text-[#E8652B] border border-[#E8652B]/20">
          White-Labelled to Your Haulage Firm
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
          <span className="text-neutral-500 text-[11px]">Today's Delivery Progress</span>
          <p className="text-2xl font-black text-white">691.2 / 850t</p>
          <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
            <div className="bg-[#E8652B] h-full w-[81%]" />
          </div>
          <p className="text-[11px] text-neutral-400">18 of 22 scheduled tippers tipped</p>
        </div>

        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
          <span className="text-neutral-500 text-[11px]">Live Trucks En Route</span>
          <p className="text-2xl font-black text-emerald-400">4 Active</p>
          <p className="text-[11px] text-neutral-400">Next truck arrival: 12 mins</p>
          <p className="text-[10px] text-neutral-500">Site Turnaround: 9 mins (No delay)</p>
        </div>

        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
          <span className="text-neutral-500 text-[11px]">Instant Proof of Delivery</span>
          <p className="text-2xl font-black text-white">18 Dockets</p>
          <p className="text-[11px] text-neutral-400">Scale slips & signatures attached</p>
          <button className="w-full py-1.5 px-3 rounded bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-[11px] transition-colors">
            Download CSV + PDF Pack
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * 11. Invoice Generated from Job Mockup (Billing & Invoicing)
 */
export function InvoiceGeneratedMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl p-6 sm:p-7 text-left font-sans text-xs text-neutral-300">
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-neutral-800 gap-3 mb-5">
        <div>
          <span className="text-[10px] font-mono text-[#E8652B] font-bold uppercase tracking-wider block">
            Direct Xero Reconciliation
          </span>
          <h4 className="text-lg font-bold text-white">Invoice #INV-2026-9201 Generated from Job #HO-8492</h4>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
          Xero Connected · 2-Way Sync
        </span>
      </div>

      <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3 font-mono text-xs">
        <div className="flex justify-between text-neutral-400 border-b border-neutral-800 pb-2">
          <span>Item: 38.40 Tonnes Roadbase Class 2</span>
          <span className="text-white font-bold">$710.40 Ex GST</span>
        </div>
        <div className="flex justify-between text-neutral-400 border-b border-neutral-800 pb-2">
          <span>Subcontractor Cost: JJ Transport (SUB-402)</span>
          <span className="text-neutral-300 font-bold">$518.40 Ex GST</span>
        </div>
        <div className="flex justify-between text-emerald-400 font-bold pt-1 text-sm">
          <span>Locked Gross Profit Margin:</span>
          <span>+$192.00 (27.0%)</span>
        </div>
      </div>

      <p className="mt-4 text-[11px] text-neutral-400">
        Weighbridge slip #BOR-992318 and site supervisor digital signature permanently attached to invoice in Xero.
      </p>
    </div>
  );
}

/**
 * 12. Rate Card Matrix Mockup (Rate Management)
 */
export function RateCardMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl p-6 sm:p-7 text-left font-sans text-xs text-neutral-300">
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-neutral-800 gap-3 mb-5">
        <div>
          <span className="text-[10px] font-mono text-[#E8652B] font-bold uppercase tracking-wider block">
            Effective-Dated Rate Matrix
          </span>
          <h4 className="text-lg font-bold text-white">CPB Contractors · Contract Schedule 2026</h4>
        </div>
        <span className="px-2.5 py-1 rounded bg-neutral-800 text-neutral-300 font-mono text-[11px]">
          Version 3.2 · Effective 01/07 to 31/12
        </span>
      </div>

      <div className="space-y-2.5">
        {[
          { material: "Roadbase Class 2 (20mm)", method: "Per Tonne", rate: "$18.50 / t", subbieCost: "$14.20 / t", margin: "+23.2%" },
          { material: "Drainage Agg 20mm Blue Metal", method: "Per Tonne", rate: "$22.00 / t", subbieCost: "$17.50 / t", margin: "+20.5%" },
          { material: "Site Cut Excavation Spoil", method: "Per Load", rate: "$280.00 / load", subbieCost: "$220.00 / load", margin: "+21.4%" },
          { material: "Wet Hire Tipper Demurrage", method: "Hourly", rate: "$145.00 / hr", subbieCost: "$115.00 / hr", margin: "+20.7%" },
        ].map((r) => (
          <div key={r.material} className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="font-bold text-white">{r.material}</span>
              <span className="text-neutral-500 text-[11px] ml-2">({r.method})</span>
            </div>
            <div className="flex items-center gap-4 font-mono text-[11px]">
              <div>
                <span className="text-neutral-500 block text-[10px]">Client Billed:</span>
                <span className="text-white font-bold">{r.rate}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[10px]">Subbie Paid:</span>
                <span className="text-neutral-300">{r.subbieCost}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[10px]">Margin:</span>
                <span className="text-emerald-400 font-bold">{r.margin}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 13. Audit & Compliance Log Mockup (Compliance)
 */
export function AuditComplianceMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl p-6 sm:p-7 text-left font-sans text-xs text-neutral-300">
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-neutral-800 gap-3 mb-5">
        <div>
          <span className="text-[10px] font-mono text-[#E8652B] font-bold uppercase tracking-wider block">
            Chain of Responsibility (CoR) Audit Trail
          </span>
          <h4 className="text-lg font-bold text-white">Immutable Event & Safety Log</h4>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          Cryptographically Verified
        </span>
      </div>

      <div className="space-y-2 font-mono text-[11px]">
        {[
          { time: "06:15:22", user: "Dave Thornton (Driver #08)", event: "Pre-Start Inspection Passed", detail: "Tyres, brakes, lights verified with 4 photos" },
          { time: "07:18:04", user: "Driver App OCR Engine", event: "Weighbridge Docket Bor-992318 Scanned", detail: "Gross 57.85t, Tare 19.45t, Net 38.40t validated" },
          { time: "08:42:19", user: "Steve Andrews (Site Foreman)", event: "Sign-on-Glass POD Captured", detail: "Signed at Tip Compound Gate 4 (GPS stamped)" },
          { time: "08:42:25", user: "System Automation", event: "Draft Invoice #INV-9201 Synced to Xero", detail: "Attached weighbridge photo & customer signature" },
        ].map((log) => (
          <div key={log.time} className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 flex items-start gap-3">
            <span className="text-[#E8652B] font-bold shrink-0">{log.time}</span>
            <div className="flex-1">
              <span className="text-white font-bold">{log.event}</span>
              <span className="text-neutral-500 ml-2">by {log.user}</span>
              <p className="text-neutral-400 text-[10px] mt-0.5">{log.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 14. Supplier Management Panel Mockup
 */
export function SupplierManagementMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl p-6 sm:p-7 text-left font-sans text-xs text-neutral-300">
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-neutral-800 gap-3 mb-5">
        <div>
          <span className="text-[10px] font-mono text-[#E8652B] font-bold uppercase tracking-wider block">
            Supplier & Quarry Partner Directory
          </span>
          <h4 className="text-lg font-bold text-white">Quarry, Maintenance & Equipment Vendors</h4>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-neutral-800 text-neutral-300">
          Admin Perimeter Only
        </span>
      </div>

      <div className="space-y-3">
        {[
          { name: "Boral Peppertree Quarry", category: "Aggregates & Roadbase", contact: "Gatehouse (02 9840 2211)", terms: "30 Days EOM", activeJobs: "8 Active Loads" },
          { name: "Sydney Heavy Breakdown Recovery", category: "Fleet Maintenance & Towing", contact: "24/7 Hotline (1300 882 119)", terms: "Direct Debit", activeJobs: "Available" },
          { name: "Caltex / Ampol National Fuel", category: "Bulk Fuel Supply", contact: "Fleet Account #AU-99120", terms: "Weekly EFT", activeJobs: "Active" },
        ].map((sup) => (
          <div key={sup.name} className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="font-bold text-white text-sm">{sup.name}</span>
              <span className="text-neutral-500 text-[11px] ml-2">({sup.category})</span>
              <p className="text-[11px] text-neutral-400 mt-0.5">{sup.contact} · Terms: {sup.terms}</p>
            </div>
            <span className="text-emerald-400 font-mono text-[11px] font-bold">
              {sup.activeJobs}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 15. Subcontractor Management Panel Mockup (Admin Console)
 */
export function SubcontractorManagementMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl p-6 sm:p-7 text-left font-sans text-xs text-neutral-300">
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-neutral-800 gap-3 mb-5">
        <div>
          <span className="text-[10px] font-mono text-[#E8652B] font-bold uppercase tracking-wider block">
            Partner Fleets & Subcontractor Records
          </span>
          <h4 className="text-lg font-bold text-white">Subcontractor Fleet & Compliance Directory</h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-neutral-800 text-neutral-300 border border-neutral-700">
            Export RCTI Batches
          </span>
          <button className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#E8652B] text-white hover:bg-[#d4551d] transition-colors shadow-sm">
            + Onboard Subcontractor
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-neutral-800/70 text-neutral-400 uppercase tracking-wider text-[10px] border-b border-neutral-800">
              <th className="text-left px-3.5 py-3 font-semibold">Subcontractor Entity</th>
              <th className="text-left px-3.5 py-3 font-semibold">Contact / Dispatch</th>
              <th className="text-left px-3.5 py-3 font-semibold">Nominated Fleet</th>
              <th className="text-left px-3.5 py-3 font-semibold">Public Liability & CoR</th>
              <th className="text-left px-3.5 py-3 font-semibold">Agreed Pay Rate</th>
              <th className="text-left px-3.5 py-3 font-semibold">MTD Volume</th>
              <th className="text-left px-3.5 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800/80">
            {[
              {
                company: "Redlands Haulage Pty Ltd",
                abn: "ABN 84 102 933 219",
                contact: "Greg Smith · 0418 293 841",
                fleet: "4x Truck & Quad Dog",
                insurance: "Current (Expires Nov 2026)",
                insuranceStatus: "valid",
                rate: "$14.00/t (Peppertree Quarry)",
                volume: "34 loads · 1,120t",
                status: "Active",
                statusCls: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
              },
              {
                company: "Brisbane Bulk Cartage",
                abn: "ABN 19 822 401 552",
                contact: "Mick O'Brien · 0402 119 482",
                fleet: "6x Semi Tippers + A-Double",
                insurance: "Current (Expires Mar 2027)",
                insuranceStatus: "valid",
                rate: "$110.00/hr (Western Sydney Airport)",
                volume: "58 loads · 2,410t",
                status: "Preferred",
                statusCls: "bg-[#E8652B]/10 text-[#E8652B] border-[#E8652B]/30",
              },
              {
                company: "Logan Tipping Services",
                abn: "ABN 72 391 002 943",
                contact: "John Nguyen · 0433 982 104",
                fleet: "2x 8-Wheeler Rigid Tippers",
                insurance: "Expiring in 25 Days",
                insuranceStatus: "warning",
                rate: "$165.00/load (Metro Spoil)",
                volume: "19 loads · 620t",
                status: "Review Due",
                statusCls: "bg-amber-500/10 text-amber-400 border-amber-500/20",
              },
              {
                company: "Sunshine Coast Heavy Cartage",
                abn: "ABN 33 501 884 112",
                contact: "Paul Wilson · 0411 773 920",
                fleet: "3x Super B-Double",
                insurance: "Current (Expires Jun 2026)",
                insuranceStatus: "valid",
                rate: "$18.20/t (Interstate Long Haul)",
                volume: "0 loads (Standby)",
                status: "Inactive",
                statusCls: "bg-neutral-800 text-neutral-400 border-neutral-700",
              },
            ].map((sub) => (
              <tr key={sub.company} className="hover:bg-neutral-800/40 transition-colors">
                <td className="px-3.5 py-3.5">
                  <div className="font-bold text-white text-xs">{sub.company}</div>
                  <div className="text-[10px] text-neutral-500 font-mono">{sub.abn}</div>
                </td>
                <td className="px-3.5 py-3.5 text-neutral-300 font-medium">
                  {sub.contact}
                </td>
                <td className="px-3.5 py-3.5 text-neutral-400">
                  {sub.fleet}
                </td>
                <td className="px-3.5 py-3.5">
                  {sub.insuranceStatus === "warning" ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      ⚠ {sub.insurance}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400">
                      ✓ {sub.insurance}
                    </span>
                  )}
                </td>
                <td className="px-3.5 py-3.5 font-mono text-neutral-300">
                  {sub.rate}
                </td>
                <td className="px-3.5 py-3.5 font-mono text-neutral-200 font-semibold">
                  {sub.volume}
                </td>
                <td className="px-3.5 py-3.5">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${sub.statusCls}`}>
                    {sub.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-neutral-800/80 flex flex-wrap items-center justify-between text-[11px] text-neutral-400">
        <span>Showing 4 of 28 registered subcontractor transport providers</span>
        <div className="flex gap-4">
          <span className="text-[#E8652B] font-semibold cursor-pointer hover:underline">Download Current Insurance Audit Report (PDF)</span>
          <span className="text-neutral-500">|</span>
          <span className="text-neutral-300 font-semibold cursor-pointer hover:underline">Batch Generate Recipient Created Tax Invoices (RCTI)</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 16. Contract Version History & Rate Diff Mockup
 */
export function ContractVersionHistoryMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl p-6 sm:p-7 text-left font-sans text-xs text-neutral-300">
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-neutral-800 gap-3 mb-5">
        <div>
          <span className="text-[10px] font-mono text-[#E8652B] font-bold uppercase tracking-wider block">
            Commercial Agreement Governance
          </span>
          <h4 className="text-lg font-bold text-white">Master Haulage Agreement — CPB Contractors (M12)</h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Active · Executed
          </span>
          <button className="px-3 py-1 rounded-lg text-xs font-semibold bg-neutral-800 hover:bg-neutral-750 text-neutral-200 border border-neutral-700 flex items-center gap-1.5">
            <Download className="h-3.5 w-3.5" /> PDF Copy
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-3 mb-4">
        {[
          { v: "v1.0 Original", date: "Approved 12 Jan 2026", user: "John Morrison (Director)", status: "Superseded", cls: "text-neutral-400 bg-neutral-800" },
          { v: "v2.0 Rate Review", date: "Approved 03 Apr 2026", user: "Sarah Kelly (Commercial Mgr)", status: "Active (Current)", cls: "text-emerald-400 bg-emerald-500/10 border border-emerald-500/30" },
          { v: "v2.1 Fuel Levy Update", date: "Drafting · Pending Sign-off", user: "Sarah Kelly", status: "Draft Review", cls: "text-amber-400 bg-amber-500/10 border border-amber-500/30" },
        ].map((rev) => (
          <div key={rev.v} className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-white text-xs">{rev.v}</span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${rev.cls}`}>{rev.status}</span>
            </div>
            <p className="text-[11px] text-neutral-400">{rev.date}</p>
            <p className="text-[10px] text-neutral-500 mt-1">Sign-off: {rev.user}</p>
          </div>
        ))}
      </div>

      {/* Field-level diff preview */}
      <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-4">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider">
            Audit Diff: v1.0 vs v2.0 Rate Schedule Changes
          </span>
          <span className="text-[10px] text-[#E8652B] font-mono">2 rate modifications logged</span>
        </div>
        <div className="space-y-2 font-mono text-[11px]">
          <div className="p-2 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-between">
            <div>
              <span className="text-neutral-400">Item #1: Sub-base 40mm Cartage (Peppertree → Site)</span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-rose-400 line-through">$17.50 / tonne</span>
                <span className="text-neutral-500">→</span>
                <span className="text-emerald-400 font-bold">$18.85 / tonne</span>
                <span className="text-[10px] text-neutral-500 font-sans">(Indexed to diesel CPI)</span>
              </div>
            </div>
            <span className="text-emerald-400 text-xs font-sans font-semibold">+7.7%</span>
          </div>
          <div className="p-2 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-between">
            <div>
              <span className="text-neutral-400">Item #2: Demurrage / On-site Waiting Time (After 30 mins)</span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-rose-400 line-through">$120.00 / hour</span>
                <span className="text-neutral-500">→</span>
                <span className="text-emerald-400 font-bold">$140.00 / hour</span>
              </div>
            </div>
            <span className="text-emerald-400 text-xs font-sans font-semibold">+16.6%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 17. Subcontractor Agreement & Compliance Card Mockup
 */
export function SubcontractorAgreementMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl p-6 sm:p-7 text-left font-sans text-xs text-neutral-300">
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-neutral-800 gap-3 mb-4">
        <div>
          <span className="text-[10px] font-mono text-[#E8652B] font-bold uppercase tracking-wider block">
            Subcontractor Master Agreement
          </span>
          <h4 className="text-lg font-bold text-white">Redlands Haulage Pty Ltd (ABN 84 102 933 219)</h4>
        </div>
        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
          Agreement Renewal in 45 Days
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mb-4">
        <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">Commercial Terms</span>
          <div className="flex justify-between"><span className="text-neutral-500">Effective Date:</span><span className="text-white font-medium">01 Oct 2025</span></div>
          <div className="flex justify-between"><span className="text-neutral-500">Term Expiry:</span><span className="text-amber-400 font-bold">30 Sep 2026 (45 days)</span></div>
          <div className="flex justify-between"><span className="text-neutral-500">Payment Term:</span><span className="text-white">14 Days from RCTI</span></div>
          <div className="flex justify-between"><span className="text-neutral-500">Linked Rate Schedule:</span><span className="text-[#E8652B] font-semibold">Peppertree Sub-base ($14/t)</span></div>
        </div>
        <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">Chain of Responsibility & Insurance</span>
          <div className="flex justify-between"><span className="text-neutral-500">Public Liability ($20M):</span><span className="text-emerald-400 font-medium">✓ Valid (Policy #PL-9812)</span></div>
          <div className="flex justify-between"><span className="text-neutral-500">Workers Compensation:</span><span className="text-emerald-400 font-medium">✓ Current (NSW iCare)</span></div>
          <div className="flex justify-between"><span className="text-neutral-500">CoR & Fatigue Protocol:</span><span className="text-emerald-400 font-medium">✓ Signed 12 Jan 2026</span></div>
          <div className="flex justify-between"><span className="text-neutral-500">Induction Checklist:</span><span className="text-emerald-400 font-medium">✓ 4 Drivers Verified</span></div>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FileText className="h-4 w-4 text-[#E8652B]" />
          <div>
            <span className="text-white font-semibold block text-xs">Executed_Subcontractor_Agreement_Redlands_2026.pdf</span>
            <span className="text-[10px] text-neutral-500">Azure Blob Storage · SHA-256 Verified · Signed via DocuSign</span>
          </div>
        </div>
        <button className="px-3 py-1.5 rounded-lg text-xs font-bold bg-neutral-800 hover:bg-neutral-750 text-white border border-neutral-700">
          View Executed Doc
        </button>
      </div>
    </div>
  );
}

/**
 * 18. Audit Log Trail Mockup
 */
export function AuditLogTrailMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl p-6 sm:p-7 text-left font-sans text-xs text-neutral-300">
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-neutral-800 gap-3 mb-4">
        <div>
          <span className="text-[10px] font-mono text-[#E8652B] font-bold uppercase tracking-wider block">
            Tamper-Resistant Operations Trail
          </span>
          <h4 className="text-lg font-bold text-white">System Audit & Chain-of-Custody Log</h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-neutral-800 text-neutral-300 border border-neutral-700">
            Filtered: Job #4821
          </span>
          <button className="px-3 py-1 rounded-lg text-xs font-bold bg-[#E8652B] text-white">
            Export CSV
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-neutral-800/70 text-neutral-400 uppercase tracking-wider text-[10px] border-b border-neutral-800">
              <th className="text-left px-3 py-2.5 font-semibold">Timestamp (AEST)</th>
              <th className="text-left px-3 py-2.5 font-semibold">User / Actor</th>
              <th className="text-left px-3 py-2.5 font-semibold">Role</th>
              <th className="text-left px-3 py-2.5 font-semibold">Action Executed</th>
              <th className="text-left px-3 py-2.5 font-semibold">Telemetry & Detail</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800/80 font-mono text-[11px]">
            {[
              { time: "28/07 14:10:18", user: "Dave Reynolds", role: "Driver", action: "POD Signed", detail: "Signature captured by site foreman S. Clarke; 3 site photos uploaded to Azure", tag: "emerald" },
              { time: "28/07 14:02:44", user: "Dave Reynolds", role: "Driver", action: "Status: Delivered", detail: "Geofence auto-detect at M12 Western Sydney Lot 4 (-33.8821, 150.7933)", tag: "emerald" },
              { time: "28/07 11:32:04", user: "Dave Reynolds", role: "Driver", action: "Scale Docket Attached", detail: "Peppertree weighbridge ticket #WB-99214 uploaded (32.40t net)", tag: "blue" },
              { time: "28/07 09:18:12", user: "Sarah Kelly", role: "Commercial Mgr", action: "Rate Overridden", detail: "Changed $17.50/t to contract rate $18.85/t per CPB M12 Addendum v2", tag: "amber" },
              { time: "28/07 08:30:00", user: "Tom Vance", role: "Senior Dispatcher", action: "Job Dispatched", detail: "Assigned to Dave Reynolds (Vehicle: Kenworth T610 #SYD-910)", tag: "orange" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-neutral-800/40 transition-colors">
                <td className="px-3 py-2.5 text-neutral-400">{row.time}</td>
                <td className="px-3 py-2.5 text-white font-sans font-bold">{row.user}</td>
                <td className="px-3 py-2.5 text-neutral-400 font-sans">{row.role}</td>
                <td className="px-3 py-2.5">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-sans font-bold ${
                    row.tag === "emerald" ? "bg-emerald-500/10 text-emerald-400" :
                    row.tag === "amber" ? "bg-amber-500/10 text-amber-400" :
                    row.tag === "orange" ? "bg-orange-500/10 text-orange-400" :
                    "bg-blue-500/10 text-blue-400"
                  }`}>
                    {row.action}
                  </span>
                </td>
                <td className="px-3 py-2.5 text-neutral-300 font-sans text-xs">{row.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/**
 * 19. Driver Document Vault Mockup
 */
export function DriverDocumentVaultMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl p-6 sm:p-7 text-left font-sans text-xs text-neutral-300">
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-neutral-800 gap-3 mb-4">
        <div>
          <span className="text-[10px] font-mono text-[#E8652B] font-bold uppercase tracking-wider block">
            Cloud Credential Vault · Azure Encrypted
          </span>
          <h4 className="text-lg font-bold text-white">Dave Reynolds — Driver Compliance File</h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            Road Cleared · Fully Inducted
          </span>
          <button className="px-3 py-1 rounded-lg text-xs font-bold bg-[#E8652B] text-white">
            + Upload Document
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {[
          { doc: "Heavy Combination (HC) Driver Licence", exp: "Expires 14 Oct 2027", num: "LIC-NSW-489102", status: "Verified Current", ok: true },
          { doc: "Commercial Driver Medical (AUSTROADS)", exp: "Expires 22 Aug 2026 (22 Days)", num: "Dr. K. Patel · Sydney Metro", status: "Renewal Warning", ok: false },
          { doc: "General Construction Induction (White Card)", exp: "Never Expires", num: "SafeWork NSW #WC-883192", status: "Verified Current", ok: true },
          { doc: "CPB Contractors M12 Project Induction", exp: "Valid to 31 Dec 2026", num: "Induction ID #CPB-M12-094", status: "Verified Current", ok: true },
        ].map((item) => (
          <div key={item.doc} className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-white font-bold text-xs block">{item.doc}</span>
                <span className="text-[10px] text-neutral-500 font-mono">{item.num}</span>
              </div>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                item.ok ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400 border border-amber-500/30"
              }`}>
                {item.status}
              </span>
            </div>
            <div className="mt-3 pt-2 border-t border-neutral-900 flex items-center justify-between text-[11px]">
              <span className={item.ok ? "text-neutral-400" : "text-amber-400 font-semibold"}>{item.exp}</span>
              <span className="text-[#E8652B] font-semibold cursor-pointer hover:underline">View PDF</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 20. Job Docket & POD Inspector Mockup
 */
export function JobDocketPodInspectorMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl p-6 sm:p-7 text-left font-sans text-xs text-neutral-300">
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-neutral-800 gap-3 mb-4">
        <div>
          <span className="text-[10px] font-mono text-[#E8652B] font-bold uppercase tracking-wider block">
            Digital Proof of Delivery Verification
          </span>
          <h4 className="text-lg font-bold text-white">JOB-2026-04471 — Completed POD Package</h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            ✓ 3 Attachments Verified
          </span>
          <button className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#E8652B] text-white">
            Sync Invoice to Xero
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-white font-bold mb-1">
              <Camera className="h-4 w-4 text-[#E8652B]" /> Weighbridge Scale Docket
            </div>
            <p className="text-[11px] text-neutral-400">Captured at Peppertree Quarry outbound weighbridge</p>
          </div>
          <div className="mt-3 text-[10px] font-mono text-neutral-500 bg-neutral-900 p-2 rounded">
            Ticket #WB-99214<br />Gross: 48.60t · Tare: 16.20t<br />Net: 32.40t
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-white font-bold mb-1">
              <Camera className="h-4 w-4 text-[#E8652B]" /> Tipping Site Photo
            </div>
            <p className="text-[11px] text-neutral-400">Payload tipped at M12 Section 4 fill embankment</p>
          </div>
          <div className="mt-3 text-[10px] font-mono text-neutral-500 bg-neutral-900 p-2 rounded">
            GPS: -33.8821, 150.7933<br />Time: 14:02 AEST<br />Accuracy: ±4.2m
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-white font-bold mb-1">
              <ShieldCheck className="h-4 w-4 text-emerald-400" /> Customer Signature
            </div>
            <p className="text-[11px] text-neutral-400">Signed on glass by site foreman</p>
          </div>
          <div className="mt-3 text-[10px] font-mono text-neutral-500 bg-neutral-900 p-2 rounded">
            Signer: Steve Clarke<br />Title: Site Superintendent<br />Verified via SMS OTP
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 21. Executive Reporting & Operational KPI Mockup
 */
export function ExecutiveReportingMockup() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl p-6 sm:p-7 text-left font-sans text-xs text-neutral-300">
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-neutral-800 gap-3 mb-5">
        <div>
          <span className="text-[10px] font-mono text-[#E8652B] font-bold uppercase tracking-wider block">
            Executive Fleet & Revenue Analytics
          </span>
          <h4 className="text-lg font-bold text-white">Operational Velocity & Revenue Intelligence</h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-neutral-800 text-neutral-300 border border-neutral-700">
            Month-to-Date (August)
          </span>
          <button className="px-3 py-1 rounded-lg text-xs font-bold bg-[#E8652B] text-white">
            Export Executive Deck
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {[
          { label: "Total MTD Tonnage", val: "38,420 t", delta: "+12.4% vs July", color: "text-white" },
          { label: "Gross Billed Revenue", val: "$482,900", delta: "+8.9% MTD Target", color: "text-emerald-400" },
          { label: "Fleet Utilisation", val: "91.8%", delta: "24 of 26 Trucks Active", color: "text-[#E8652B]" },
          { label: "Avg Invoice Lag", val: "32 Hours", delta: "Down from 26 days", color: "text-white" },
        ].map((kpi) => (
          <div key={kpi.label} className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
            <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">{kpi.label}</span>
            <div className={`text-xl font-bold font-mono mt-1 ${kpi.color}`}>{kpi.val}</div>
            <span className="text-[10px] text-neutral-500 font-sans mt-0.5 block">{kpi.delta}</span>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider">Top Material Volume by Client</span>
            <span className="text-[10px] text-neutral-500 font-mono">Peppertree & Metro Jobs</span>
          </div>
          <div className="space-y-2.5">
            {[
              { client: "CPB Contractors (M12 Motorway)", tonnes: "14,800t", pct: 82 },
              { client: "Boral Concrete Metro", tonnes: "11,240t", pct: 64 },
              { client: "Multiplex Airport Terminal", tonnes: "8,120t", pct: 48 },
              { client: "Fulton Hogan Asphalt", tonnes: "4,260t", pct: 28 },
            ].map((row) => (
              <div key={row.client}>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-neutral-300 font-medium truncate max-w-[200px]">{row.client}</span>
                  <span className="font-mono text-neutral-400">{row.tonnes}</span>
                </div>
                <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-600 to-[#E8652B] rounded-full" style={{ width: `${row.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Xero Aged Receivables Status</span>
              <span className="text-xs font-bold text-emerald-400">96.2% On-Terms</span>
            </div>
            <p className="text-[11px] text-neutral-400 mb-3">Instant automated ledger sync every 6 hours via OAuth2</p>
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 flex justify-between items-center">
                <span className="text-neutral-300 font-medium">Current (0–30 Days)</span>
                <span className="font-mono text-white font-bold">$412,400</span>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 flex justify-between items-center">
                <span className="text-neutral-300 font-medium">31–60 Days</span>
                <span className="font-mono text-neutral-300 font-bold">$18,200</span>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 flex justify-between items-center">
                <span className="text-amber-400 font-medium">60+ Days Overdue</span>
                <span className="font-mono text-amber-400 font-bold">$0.00</span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-neutral-900 flex justify-between items-center text-[10px] text-neutral-500">
            <span>Last reconciliation webhook: 12 minutes ago</span>
            <span className="text-emerald-400 font-bold">Xero Connected ✓</span>
          </div>
        </div>
      </div>
    </div>
  );
}

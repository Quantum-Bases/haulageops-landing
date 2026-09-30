"use client";

import React, { useState } from "react";
import {
  MessageSquareOff,
  PhoneCall,
  CheckCircle2,
  XCircle,
  FileText,
  Camera,
  PenTool,
  Clock,
  ArrowRight,
  ShieldCheck,
  Truck,
  Users2,
  DollarSign,
  TrendingUp,
  Receipt,
  Check,
  AlertTriangle,
  Building2,
  MapPin,
  ExternalLink,
} from "lucide-react";

/**
 * 1. Replacing WhatsApp & Phone Dispatch Mockup
 */
export function ReplacingWhatsappMockup() {
  return (
    <div className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-left">
      <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-800/80 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-semibold text-neutral-200">
            Dispatch Communication: Unstructured Chaos vs HaulageOps
          </span>
        </div>
        <span className="text-xs text-neutral-400">Direct Comparison</span>
      </div>

      <div className="p-5 lg:p-6 grid md:grid-cols-2 gap-5 text-xs">
        {/* Before: WhatsApp Chaos */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-rose-500/20 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
            <span className="font-bold text-rose-400 flex items-center gap-1.5">
              <MessageSquareOff className="h-4 w-4" />
              Fragmented WhatsApp & Phone
            </span>
            <span className="text-[10px] bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded border border-rose-500/20">
              High Risk
            </span>
          </div>

          <div className="space-y-2 p-3 bg-neutral-900/80 rounded-lg font-sans text-[11px]">
            <div className="p-2 rounded bg-neutral-800 text-neutral-300">
              <p className="font-semibold text-white">Dispatcher (7:14 AM):</p>
              <p>Mick, take 2 loads roadbase to Lot 4B site. Need it before 9.</p>
            </div>
            <div className="p-2 rounded bg-neutral-800 text-neutral-300">
              <p className="font-semibold text-white">Mick Driver (7:22 AM):</p>
              <p>Which gate? And did you confirm rate with John?</p>
            </div>
            <div className="p-2 rounded bg-neutral-800/50 text-neutral-500 italic">
              *3 missed calls from head contractor asking truck ETA*
            </div>
            <div className="p-2 rounded bg-neutral-800/50 text-neutral-500 italic">
              *Paper docket lost in cab — invoice delayed 18 days*
            </div>
          </div>

          <ul className="space-y-1 text-neutral-400 text-[11px] pt-1">
            <li className="flex items-center gap-1.5 text-rose-400">
              <XCircle className="h-3.5 w-3.5 shrink-0" /> Zero formal audit trail
            </li>
            <li className="flex items-center gap-1.5 text-rose-400">
              <XCircle className="h-3.5 w-3.5 shrink-0" /> No rate locked to job instruction
            </li>
            <li className="flex items-center gap-1.5 text-rose-400">
              <XCircle className="h-3.5 w-3.5 shrink-0" /> Constant phone tag for location updates
            </li>
          </ul>
        </div>

        {/* After: HaulageOps Structured Flow */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-emerald-500/20 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
            <span className="font-bold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" />
              HaulageOps Single Job Record
            </span>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
              Automated
            </span>
          </div>

          <div className="space-y-2 p-3 bg-neutral-900/80 rounded-lg text-[11px]">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-white">Job #BH-4029 · Road Base Type 1</p>
                <p className="text-neutral-400 text-[10px]">Client: Lendlease · Gate 2 Kemps Creek</p>
              </div>
              <span className="text-emerald-400 font-bold">$24.50 / t Locked</span>
            </div>

            <div className="p-2.5 bg-neutral-950 rounded border border-neutral-800 space-y-1">
              <div className="flex justify-between text-[10px]">
                <span className="text-neutral-400">Push Notification (FCM):</span>
                <span className="text-white">Delivered & Accepted in 8s</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-neutral-400">Live GPS Location:</span>
                <span className="text-blue-400 font-medium">En Route (ETA 14m)</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-neutral-400">Proof of Delivery:</span>
                <span className="text-emerald-400 font-medium">Digital Signature & Photo Attached</span>
              </div>
            </div>
          </div>

          <ul className="space-y-1 text-neutral-300 text-[11px] pt-1">
            <li className="flex items-center gap-1.5 text-emerald-400">
              <Check className="h-3.5 w-3.5 shrink-0" /> Push notification with address navigation
            </li>
            <li className="flex items-center gap-1.5 text-emerald-400">
              <Check className="h-3.5 w-3.5 shrink-0" /> Client logs into portal self-service (0 calls)
            </li>
            <li className="flex items-center gap-1.5 text-emerald-400">
              <Check className="h-3.5 w-3.5 shrink-0" /> Immediate invoice generation into Xero
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/**
 * 2. Digital Dockets & POD Workflow Mockup
 */
export function DigitalDocketsMockup() {
  return (
    <div className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-left">
      <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-800/80 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-semibold text-neutral-200">
            Digital Docket Capture & Azure Blob Storage Ledger
          </span>
        </div>
        <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
          <CheckCircle2 className="h-3.5 w-3.5" /> 100% Paperless POD
        </span>
      </div>

      <div className="p-5 lg:p-6 grid sm:grid-cols-3 gap-4 text-xs">
        {/* Step 1: Camera Photo */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2.5">
          <div className="h-9 w-9 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
            <Camera className="h-5 w-5" />
          </div>
          <h4 className="font-bold text-white text-sm">1. Photo Weighbridge Ticket</h4>
          <p className="text-neutral-400 text-[11px] leading-relaxed">
            Driver captures physical scale ticket in the cab. Automatically timestamped with geotagged GPS coordinates.
          </p>
          <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-300 font-mono">
            Ticket #88412 · Net 38.40t
          </div>
        </div>

        {/* Step 2: Signature on Glass */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2.5">
          <div className="h-9 w-9 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
            <PenTool className="h-5 w-5" />
          </div>
          <h4 className="font-bold text-white text-sm">2. Sign-on-Glass at Site</h4>
          <p className="text-neutral-400 text-[11px] leading-relaxed">
            Site foreman or gatekeeper signs directly on the driver&apos;s phone. Name and role captured digitally.
          </p>
          <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-300 font-mono">
            Signed: J. Marshall (Foreman)
          </div>
        </div>

        {/* Step 3: Cloud & Invoice */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2.5">
          <div className="h-9 w-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <FileText className="h-5 w-5" />
          </div>
          <h4 className="font-bold text-white text-sm">3. Attached to Xero Invoice</h4>
          <p className="text-neutral-400 text-[11px] leading-relaxed">
            POD uploads to Azure Blob Storage and attaches to the job record before the truck even leaves the gate.
          </p>
          <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-emerald-400 font-mono">
            Ready for billing immediately
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. Job to Invoice & Dual Rating Mockup
 */
export function JobToInvoiceMockup() {
  return (
    <div className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-left">
      <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-800/80 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-semibold text-neutral-200">
            One-Click Job to Xero Invoice Conversion
          </span>
        </div>
        <span className="text-xs text-neutral-400">OAuth2 Native Sync</span>
      </div>

      <div className="p-5 lg:p-6 grid lg:grid-cols-12 gap-5 text-xs">
        {/* Completed Job Details */}
        <div className="lg:col-span-6 rounded-xl bg-neutral-950 border border-neutral-800 p-4 space-y-3">
          <div className="flex justify-between items-start pb-2 border-b border-neutral-800">
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-500">Completed Job</span>
              <p className="text-white font-bold text-sm">JOB-1844 · Apex Civil</p>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
              Delivered & Verified
            </span>
          </div>

          <div className="space-y-1.5 text-neutral-300">
            <p className="flex justify-between">
              <span className="text-neutral-500">Material Hauled:</span>
              <span>20mm Crushed Blue Metal</span>
            </p>
            <p className="flex justify-between">
              <span className="text-neutral-500">Verified Net Weight:</span>
              <span className="font-semibold text-white">41.20 Tonnes</span>
            </p>
            <p className="flex justify-between">
              <span className="text-neutral-500">Client Contract Rate:</span>
              <span className="text-[#E8652B] font-bold">$24.50 / Tonne</span>
            </p>
            <p className="flex justify-between">
              <span className="text-neutral-500">Subbie Cartage Cost:</span>
              <span className="text-neutral-400">$18.50 / Tonne</span>
            </p>
          </div>

          <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800 flex justify-between text-neutral-300">
            <span>Gross Profit Margin:</span>
            <span className="text-emerald-400 font-bold">$247.20 (24.5%)</span>
          </div>
        </div>

        {/* Xero Invoice Draft Output */}
        <div className="lg:col-span-6 rounded-xl bg-neutral-950 border border-neutral-800 p-4 space-y-3">
          <div className="flex justify-between items-start pb-2 border-b border-neutral-800">
            <div>
              <span className="text-[10px] uppercase font-bold text-blue-400">Xero Line Item</span>
              <p className="text-white font-bold text-sm">Invoice #INV-2026-042</p>
            </div>
            <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px]">
              Ready to Send
            </span>
          </div>

          <div className="space-y-1.5 text-neutral-300">
            <p className="flex justify-between">
              <span className="text-neutral-500">Billed Entity:</span>
              <span>Apex Civil Pty Ltd</span>
            </p>
            <p className="flex justify-between">
              <span className="text-neutral-500">Line Amount (ex GST):</span>
              <span className="text-white font-semibold">$1,009.40</span>
            </p>
            <p className="flex justify-between">
              <span className="text-neutral-500">GST (10%):</span>
              <span>$100.94</span>
            </p>
            <p className="flex justify-between font-bold text-white pt-1 border-t border-neutral-800">
              <span>Total Invoice Amount:</span>
              <span className="text-emerald-400 text-sm">$1,110.34</span>
            </p>
          </div>

          <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
            <span>2-way Xero sync: Status will update to &quot;Paid&quot; automatically via webhook.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. Subcontractor Coordination & Free Subbie Portal Mockup
 */
export function SubcontractorCoordinationMockup() {
  return (
    <div className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-left">
      <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-800/80 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-semibold text-neutral-200">
            Subcontractor Portal — Complete Rate Separation & Zero User Fees
          </span>
        </div>
        <span className="text-xs text-amber-400 font-medium">Free Subbie Logins</span>
      </div>

      <div className="p-5 lg:p-6 grid md:grid-cols-2 gap-5 text-xs">
        {/* Your Admin Panel (What You See) */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
          <span className="text-[10px] uppercase font-bold text-[#E8652B] tracking-wider">
            Your Dispatch Board
          </span>
          <p className="text-white font-bold text-sm">Job #SUB-9021 · Rawson Heavy Haulage</p>
          <div className="space-y-1.5 text-neutral-300">
            <p className="flex justify-between">
              <span className="text-neutral-500">Client Charge Rate:</span>
              <span className="font-bold text-[#E8652B]">$24.00 / t</span>
            </p>
            <p className="flex justify-between">
              <span className="text-neutral-500">Subbie Agreed Pay Rate:</span>
              <span className="text-white">$18.00 / t</span>
            </p>
            <p className="flex justify-between">
              <span className="text-neutral-500">Retained Margin:</span>
              <span className="text-emerald-400 font-semibold">$6.00 / t (25%)</span>
            </p>
          </div>
          <p className="text-[11px] text-neutral-500 italic pt-1 border-t border-neutral-800">
            Dispatcher sees full commercial margins across every subcontracted load.
          </p>
        </div>

        {/* Subcontractor Portal (What the Subbie Sees) */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
          <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
            Subcontractor Portal View
          </span>
          <p className="text-white font-bold text-sm">Allocated Job #SUB-9021</p>
          <div className="space-y-1.5 text-neutral-300">
            <p className="flex justify-between">
              <span className="text-neutral-500">Your Pay Rate:</span>
              <span className="font-bold text-white">$18.00 / t</span>
            </p>
            <p className="flex justify-between">
              <span className="text-neutral-500">Client Charge Rate:</span>
              <span className="text-neutral-500 font-mono">🔒 Hidden (Restricted)</span>
            </p>
            <p className="flex justify-between">
              <span className="text-neutral-500">Action:</span>
              <span className="text-emerald-400 font-medium">1-Click Accept Job</span>
            </p>
          </div>
          <p className="text-[11px] text-neutral-500 italic pt-1 border-t border-neutral-800">
            Subcontractors never see what you charge your client. Zero software cost for subs.
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * 5. Reducing Invoice Delays & Cash Flow Comparison Mockup
 */
export function ReducingInvoiceDelaysMockup() {
  return (
    <div className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-left">
      <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-800/80 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-semibold text-neutral-200">
            Cash Flow & Invoicing Cycle Comparison
          </span>
        </div>
        <span className="text-xs text-neutral-400">Working Capital Impact</span>
      </div>

      <div className="p-5 lg:p-6 grid md:grid-cols-2 gap-5 text-xs">
        <div className="p-4 rounded-xl bg-neutral-950 border border-rose-500/20 space-y-2.5">
          <div className="flex justify-between items-center text-rose-400 font-bold">
            <span>Traditional Paper Cycle</span>
            <span className="text-base">21–35 Days</span>
          </div>
          <div className="space-y-1.5 text-neutral-400 text-[11px]">
            <p>Day 1: Job completed, paper docket left in truck cab</p>
            <p>Day 7: Driver drops crumpled dockets at depot on Friday</p>
            <p>Day 14: Admin manually sorts & matches against Excel</p>
            <p>Day 21: Client queries missing reference number</p>
            <p className="text-rose-400 font-medium">Day 28+: Invoice finally approved for payment</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-neutral-950 border border-emerald-500/20 space-y-2.5">
          <div className="flex justify-between items-center text-emerald-400 font-bold">
            <span>HaulageOps Fast-Track</span>
            <span className="text-base">Under 48 Hours</span>
          </div>
          <div className="space-y-1.5 text-neutral-300 text-[11px]">
            <p>Hour 0: Delivery completed, photo docket & signature captured</p>
            <p>Hour 1: Docket auto-linked to job record in Azure</p>
            <p>Hour 4: Rate matrix calculates final billing line</p>
            <p>Hour 24: One-click sync directly into Xero invoice batch</p>
            <p className="text-emerald-400 font-medium">Hour 48: Client reviews verified POD and pays</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 6. Audit-Ready Operations & CoR Compliance Mockup
 */
export function AuditReadyOperationsMockup() {
  return (
    <div className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-left">
      <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-800/80 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-semibold text-neutral-200">
            Chain of Responsibility (CoR) Audit Trail & Safety Record
          </span>
        </div>
        <span className="text-xs text-emerald-400 font-mono">NHVR Compliant</span>
      </div>

      <div className="p-5 lg:p-6 space-y-3 text-xs">
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
            <span className="text-neutral-500 text-[10px] block">Driver Licences</span>
            <span className="text-white font-bold text-sm">100% Verified</span>
            <span className="text-emerald-400 text-[10px] block mt-0.5">0 expired</span>
          </div>
          <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
            <span className="text-neutral-500 text-[10px] block">Daily Pre-Start Checks</span>
            <span className="text-white font-bold text-sm">18 of 18 Logged</span>
            <span className="text-emerald-400 text-[10px] block mt-0.5">Completed before dispatch</span>
          </div>
          <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
            <span className="text-neutral-500 text-[10px] block">Subcontractor Insurance</span>
            <span className="text-white font-bold text-sm">All Current</span>
            <span className="text-emerald-400 text-[10px] block mt-0.5">Automated expiry alerts</span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-[11px] text-neutral-300">
          <p className="font-semibold text-white mb-1">Immutable Action Log:</p>
          <p className="text-neutral-400 font-mono text-[10px]">
            [2026-10-01 06:14:22] Driver Mick S. completed pre-start check for TR-04 (All items OK) · Hash: a7f83e...
          </p>
          <p className="text-neutral-400 font-mono text-[10px]">
            [2026-10-01 07:02:11] Dispatcher assigned Job #BH-4029 to TR-04 · Client: Metro Civil · Hash: e29c11...
          </p>
          <p className="text-neutral-400 font-mono text-[10px]">
            [2026-10-01 09:14:05] Digital POD signed by Site Foreman J. Henderson · Geotag verified · Hash: ff438b...
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * 7. Rate & Contract Management Mockup
 */
export function RateAndContractManagementMockup() {
  return (
    <div className="mt-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden text-left">
      <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-800/80 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#E8652B]" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-semibold text-neutral-200">
            Client & Subcontractor Dual Rate Engine Matrix
          </span>
        </div>
        <span className="text-xs text-neutral-400">Effective Dating Enabled</span>
      </div>

      <div className="p-5 lg:p-6 overflow-x-auto text-xs">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-neutral-800 text-neutral-400 text-[11px]">
              <th className="pb-3">Client / Project</th>
              <th className="pb-3">Material Stream</th>
              <th className="pb-3">Charge Rate</th>
              <th className="pb-3">Subbie Rate</th>
              <th className="pb-3">Minimum Load Rule</th>
              <th className="pb-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800/80">
            {[
              { client: "CPB Contractors", material: "DGB20 Road Base", charge: "$22.00 / t", sub: "$17.50 / t", min: "30t minimum", status: "Active" },
              { client: "Lendlease Civil", material: "VENM Spoil Removal", charge: "$18.50 / t", sub: "$14.00 / t", min: "Hourly demurrage after 45m", status: "Active" },
              { client: "Multiplex", material: "Crushed Aggregate", charge: "$360 / load", sub: "$280 / load", min: "Flat per-load", status: "Active" },
              { client: "John Holland", material: "Hourly Cartage Hire", charge: "$195.00 / hr", sub: "$160.00 / hr", min: "4 hr call-out", status: "Active" },
            ].map((row) => (
              <tr key={row.client} className="hover:bg-neutral-950/60">
                <td className="py-3 font-semibold text-white">{row.client}</td>
                <td className="py-3 text-neutral-300">{row.material}</td>
                <td className="py-3 font-bold text-[#E8652B]">{row.charge}</td>
                <td className="py-3 text-neutral-300">{row.sub}</td>
                <td className="py-3 text-neutral-400 text-[11px]">{row.min}</td>
                <td className="py-3 text-right">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

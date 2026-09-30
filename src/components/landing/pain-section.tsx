"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X, Check, TrendingDown, ChevronDown } from "lucide-react";

const pains = [
  {
    number: "01",
    title: "Coordination Chaos",
    category: "Dispatch Dilemma",
    image: "/images/pain-dispatch-chaos.webp",
    imageAlt: "Heavy dump truck on haul road",
    problemText: "Fleet allocated via WhatsApp groups and whiteboard notes. When subbies miss a run or double-book a tipper, no one knows until the loader is idling on site.",
    oldWay: {
      channel: "WhatsApp & Whiteboard Dispatch",
      scenario: "“Who's free for 32t aggregate at Peats Ridge?” Message gets buried, tippers get double-booked, and loaders idle waiting.",
    },
    haulageops: {
      feature: "1-Click Live Visual Dispatch",
      outcome: "Direct allocation to driver app & subbie portal with live GPS status feeds and instant in-cab digital acceptance.",
    },
    commercialCost: {
      headline: "15–20 Hours Lost / Week",
      detail: "Lost in administrative firefights, unassigned revenue loads, and expensive loader demurrage penalties.",
    },
  },
  {
    number: "02",
    title: "Endless Client Status Calls",
    category: "Customer Transparency",
    image: "/images/pain-client-calls.webp",
    imageAlt: "Construction site supervisor on mobile phone",
    problemText: "Project managers and site foremen constantly calling allocators asking 'Where's my truck? When will the asphalt arrive?' Your team becomes a human phone exchange.",
    oldWay: {
      channel: "Inbound Phone Chokehold",
      scenario: "Site Foreman: “Need ETA on truck #04.” Dispatcher rings 3 drivers while calls stack up and customer tempers flare.",
    },
    haulageops: {
      feature: "Live Client Tracking Portal",
      outcome: "Clients track live truck ETAs and delivery status on an interactive map with automated delivery milestone alerts.",
    },
    commercialCost: {
      headline: "Strained Tier-1 Contracts",
      detail: "Friction with head contractors, disputed site waiting fees, and high churn risk on repeat logistics tenders.",
    },
  },
  {
    number: "03",
    title: "Docket-to-Invoice Lag",
    category: "Cashflow & Billing",
    image: "/images/pain-docket-lag.webp",
    imageAlt: "Paper delivery dockets on clipboard",
    problemText: "Crumpled carbon-copy paper dockets sitting on truck dashboards for days, lost weighbridge tickets, and weekend manual re-keying into Xero or MYOB.",
    oldWay: {
      channel: "Crumpled Paper Dockets",
      scenario: "Muddy, illegible slips left behind truck sun visors. Weekend manual data entry into accounting spreadsheets.",
    },
    haulageops: {
      feature: "Mobile POD & Scale OCR",
      outcome: "Drivers photograph weighbridge tickets on glass at the scale; tickets match automatically to rates and sync straight to Xero.",
    },
    commercialCost: {
      headline: "10–14 Day Cashflow Lag",
      detail: "Delayed invoicing runs, working capital bottlenecks, and thousands in lost dockets written off each quarter.",
    },
  },
  {
    number: "04",
    title: "Manual Audit Scramble",
    category: "NHVR & CoR Compliance",
    image: "/images/pain-audit-prep.webp",
    imageAlt: "Heavy commercial vehicle combination on highway",
    problemText: "Scrambling through ring-binders, spreadsheets, and driver text messages whenever a safety auditor or head contractor asks for Chain of Responsibility evidence.",
    oldWay: {
      channel: "Scattered Binders & Glovebox Logs",
      scenario: "Auditor requests 6 months of driver fatigue and pre-start records. Days spent digging through paper boxes.",
    },
    haulageops: {
      feature: "Immutable CoR Audit Engine",
      outcome: "Every driver sign-off, digital pre-start, weighbridge slip, and route log timestamped and exported in 60 seconds.",
    },
    commercialCost: {
      headline: "$50k+ Fines & Tender Risk",
      detail: "Severe HVNL non-compliance exposure, personal executive penalties, and instant disqualification from government civil contracts.",
    },
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function PainSection() {
  // Collapsed by default to keep cards compact and all 4 visible at a glance
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleCard = (num: string) => {
    setExpanded((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  const allExpanded = pains.every((p) => expanded[p.number]);

  const toggleAll = () => {
    if (allExpanded) {
      setExpanded({});
    } else {
      const next: Record<string, boolean> = {};
      pains.forEach((p) => {
        next[p.number] = true;
      });
      setExpanded(next);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-neutral-50/60 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full mb-4 bg-white border border-neutral-300 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#E8652B]" />
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              The Reality in Australian Bulk Haulage
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
            Spreadsheets & WhatsApp don't scale when the fleet grows.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-600">
            Running 15 to 80 heavy vehicles on phone calls and paper dockets works when you start. But as volume multiplies, manual admin starts leaking profit, billable hours, and client trust.
          </p>

          {/* Quick Global Toggle */}
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={toggleAll}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 shadow-2xs transition-all cursor-pointer"
            >
              <span>{allExpanded ? "Collapse All Breakdowns" : "Expand All Breakdowns"}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#E8652B] transition-transform duration-200 ${allExpanded ? "rotate-180" : ""}`} />
            </button>
          </div>
        </motion.div>

        {/* 2x2 High-Impact Cards: All 4 Pains cleanly visible */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start"
        >
          {pains.map((pain) => {
            const isExpanded = !!expanded[pain.number];
            return (
              <motion.div
                key={pain.title}
                variants={itemVariants}
                className="flex flex-col rounded-2xl bg-white border border-neutral-200 shadow-sm overflow-hidden hover:shadow-md hover:border-neutral-300 transition-all duration-200"
              >
                {/* Real High-Resolution Photography Header (Compact & Crisp) */}
                <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-neutral-100">
                  <img
                    src={pain.image}
                    alt={pain.imageAlt}
                    width={600}
                    height={320}
                    decoding="async"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {/* Gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/75 via-neutral-900/20 to-black/20" />

                  {/* Badges on image */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase bg-white/95 text-neutral-900 shadow-xs border border-neutral-200">
                      PAIN {pain.number}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-neutral-900/80 text-white backdrop-blur-xs">
                      {pain.category}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3.5 right-3.5 z-10">
                    <h3 className="text-lg sm:text-xl font-black text-white drop-shadow-md">
                      {pain.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
                  {/* Problem Description */}
                  <p className="text-xs sm:text-sm leading-relaxed text-neutral-700 font-normal">
                    {pain.problemText}
                  </p>

                  {/* Commercial Impact Strip (Always visible, compact & punchy) */}
                  <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-6 h-6 rounded-md bg-orange-50 border border-orange-200/80 flex items-center justify-center shrink-0">
                        <TrendingDown className="w-3.5 h-3.5 text-[#E8652B]" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">Commercial Impact</span>
                    </div>
                    <span className="text-xs font-black text-neutral-900 bg-white border border-neutral-200 px-2.5 py-1 rounded-md shadow-2xs shrink-0">
                      {pain.commercialCost.headline}
                    </span>
                  </div>

                  {/* Hide / Unhide Toggle Button */}
                  <button
                    type="button"
                    onClick={() => toggleCard(pain.number)}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white hover:bg-neutral-50 border border-neutral-200 text-xs font-bold text-neutral-800 transition-colors shadow-2xs group cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8652B]" />
                      {isExpanded ? "Hide Comparison Breakdown" : "Compare The Old Way vs HaulageOps"}
                    </span>
                    <span className="flex items-center gap-1 text-[#E8652B] text-[11px] font-bold">
                      {isExpanded ? "Hide" : "Expand"}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                    </span>
                  </button>

                  {/* Expandable Breakdown Drawer */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="space-y-3 pt-1 overflow-hidden"
                      >
                        {/* The Old Way */}
                        <div className="rounded-xl border border-neutral-200 bg-neutral-50/80 p-3 sm:p-3.5">
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-neutral-200/90 text-neutral-800 font-bold text-[10px] tracking-wide uppercase">
                              <X className="w-3 h-3 text-neutral-500 stroke-[3]" />
                              The Old Way
                            </span>
                            <span className="text-[11px] font-semibold text-neutral-500 truncate">
                              {pain.oldWay.channel}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                            {pain.oldWay.scenario}
                          </p>
                        </div>

                        {/* HaulageOps Solution */}
                        <div className="rounded-xl border-2 border-[#E8652B]/40 bg-white p-3 sm:p-3.5 shadow-xs">
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#E8652B] text-white font-bold text-[10px] tracking-wide uppercase shadow-xs">
                              <Check className="w-3 h-3 text-white stroke-[3]" />
                              HaulageOps
                            </span>
                            <span className="text-xs font-bold text-neutral-900 truncate">
                              {pain.haulageops.feature}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-900 leading-relaxed font-medium">
                            {pain.haulageops.outcome}
                          </p>
                        </div>

                        {/* Extended Commercial Cost Detail */}
                        <div className="p-3 rounded-xl bg-orange-50/50 border border-orange-200/60 text-xs text-neutral-800 leading-relaxed">
                          <span className="font-bold text-neutral-900">Cost Impact: </span>
                          {pain.commercialCost.detail}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

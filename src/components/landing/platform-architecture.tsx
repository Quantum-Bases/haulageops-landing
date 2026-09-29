"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Smartphone,
  BarChart3,
  Eye,
  ArrowRight,
} from "lucide-react";

const portals = [
  {
    icon: LayoutDashboard,
    name: "Admin / Dispatch Panel",
    badge: "Core Command Hub",
    colSpan: "md:col-span-2 lg:col-span-7",
    description:
      "Full fleet, driver, job, and financial oversight. Live multi-load allocation, drag-and-drop tipper dispatch, and supplier ledger records.",
    highlights: ["Live Dispatch Board", "Subbie Allocation", "Xero Sync", "Fleet Overview"],
  },
  {
    icon: Users,
    name: "Subcontractor Portal",
    badge: "Free for Every Subbie",
    colSpan: "md:col-span-1 lg:col-span-5",
    description:
      "Dedicated job queue, real-time job accept/reject, Mapbox maps, document uploads, own login — free for every subcontractor with zero friction.",
    highlights: ["Mapbox Tracking", "Instant POD", "Own Login"],
  },
  {
    icon: Smartphone,
    name: "Driver Mobile App",
    badge: "Offline Pit-Ready",
    colSpan: "md:col-span-1 lg:col-span-4",
    description:
      "iOS and Android native. Operates 100% offline at quarry pits, one-tap accept, digital weighbridge ticket photo, and e-signatures.",
    highlights: ["Works Offline", "3-Tap POD", "iOS & Android"],
  },
  {
    icon: Eye,
    name: "Client Portal",
    badge: "Self-Service Tracking",
    colSpan: "md:col-span-1 lg:col-span-4",
    description:
      "Live truck ETA, delivery confirmations, signed dockets, rate cards, and transparent reporting — branded per client.",
    highlights: ["Live Progress", "Self-Serve POD", "Branded"],
  },
  {
    icon: BarChart3,
    name: "Management / Reporting",
    badge: "Audit-Ready Logs",
    colSpan: "md:col-span-1 lg:col-span-4",
    description:
      "Operational dashboards, financial margins, compliance records, and immutable NHVR Chain of Responsibility audit trails.",
    highlights: ["NHVR / CoR Logs", "Margin Analytics", "Audit Trail"],
  },
];

const lifecycleSteps = [
  "Order Created",
  "Allocate / Delegate",
  "Live GPS In-Transit",
  "Weighbridge POD",
  "3-Way Reconcile",
  "Instant Xero Invoice",
];

const integrations = [
  { name: "Xero", detail: "OAuth2, 6-hr cron + webhooks" },
  { name: "Google Maps", detail: "Address autocomplete, heavy routing" },
  { name: "Mapbox", detail: "Subcontractor portal live maps" },
  { name: "Firebase FCM", detail: "Real-time push notifications" },
  { name: "Azure Blob Storage", detail: "Encrypted documents & dockets" },
];

export function PlatformArchitecture() {
  return (
    <section
      id="platform"
      className="py-20 sm:py-28 bg-neutral-50/50 border-b border-neutral-200"
    >
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full mb-4 bg-white border border-neutral-300 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#E8652B]" />
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              The 5 Portals
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
            One platform. Five portals. Every party on the job.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-600">
            A connected architecture designed for real-world Australian bulk haulage operations — keeping your company drivers, subcontractors, dispatch team, and clients completely aligned.
          </p>
        </motion.div>

        {/* Bento Grid: 5 Portals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mb-16"
        >
          {portals.map((portal) => (
            <div
              key={portal.name}
              className={`group flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all duration-200 hover:border-[#E8652B] hover:shadow-md ${portal.colSpan}`}
            >
              <div>
                {/* Header row: Icon + Pill Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-800 border border-neutral-200 flex items-center justify-center group-hover:bg-[#E8652B] group-hover:text-white group-hover:border-[#E8652B] transition-all duration-200">
                    <portal.icon className="h-5 w-5" />
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-800 border border-neutral-200">
                    {portal.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl font-black tracking-tight text-neutral-900 mb-2">
                  {portal.name}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 font-normal">
                  {portal.description}
                </p>
              </div>

              {/* Bento Feature Highlight Tags */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-wrap gap-2">
                {portal.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-neutral-50 text-neutral-700 border border-neutral-200"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Job lifecycle strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-14 text-center w-full"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-6">
            End-to-End Bulk Haulage Job Lifecycle
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {lifecycleSteps.map((step, idx) => (
              <div key={step} className="flex items-center gap-2 sm:gap-3">
                <span className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-xs sm:text-sm font-bold text-neutral-900 shadow-xs">
                  {step}
                </span>
                {idx < lifecycleSteps.length - 1 && (
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#E8652B] hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Integration row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8 text-center w-full shadow-xs"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-6">
            Enterprise Transport Integrations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-start">
            {integrations.map((integ) => (
              <div key={integ.name} className="flex flex-col items-center text-center">
                <p className="text-sm font-black text-neutral-900">
                  {integ.name}
                </p>
                <p className="text-xs mt-1 text-neutral-500 font-medium">
                  {integ.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Honest note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 text-center"
        >
          <p className="text-xs sm:text-sm text-neutral-500 font-medium">
            Keep your existing telematics & in-cab GPS hardware. HaulageOps provides the operational delivery management layer on top.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

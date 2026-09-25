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
      "Full fleet, driver, job, and financial management. Supplier records for fuel, parts, and materials vendors.",
    highlights: ["Live Dispatch Board", "Subbie Allocation", "Xero Sync", "Fleet Management"],
  },
  {
    icon: Users,
    name: "Subcontractor Portal",
    badge: "Free for Every Subbie",
    colSpan: "md:col-span-1 lg:col-span-5",
    description:
      "Dedicated job queue, real-time updates, Mapbox maps, document uploads, own login — free for every subbie.",
    highlights: ["Mapbox Tracking", "Instant POD", "Own Login"],
  },
  {
    icon: Smartphone,
    name: "Driver Mobile App",
    badge: "Pit-Ready Offline",
    colSpan: "md:col-span-1 lg:col-span-4",
    description:
      "iOS and Android, offline-capable, POD capture, break logging, availability scheduling.",
    highlights: ["Works Offline", "3-Tap POD", "iOS & Android"],
  },
  {
    icon: Eye,
    name: "Client Portal",
    badge: "Self-Service",
    colSpan: "md:col-span-1 lg:col-span-4",
    description:
      "Live job tracking, invoices, rate cards, and reporting — branded per client.",
    highlights: ["Live Progress", "Self-Serve POD", "Branded"],
  },
  {
    icon: BarChart3,
    name: "Management / Reporting",
    badge: "Audit-Ready Logs",
    colSpan: "md:col-span-1 lg:col-span-4",
    description:
      "Dashboards, financial reporting, compliance dashboards, and immutable audit trails.",
    highlights: ["HVNL / CoR Logs", "Margin Analytics", "Audit Trail"],
  },
];

const lifecycleSteps = [
  "Create",
  "Assign / Delegate",
  "Track live",
  "Capture POD",
  "Invoice",
  "Audit-ready record",
];

const integrations = [
  { name: "Xero", detail: "OAuth2, 6-hr cron + webhooks" },
  { name: "Google Maps", detail: "Address autocomplete, routing" },
  { name: "Mapbox", detail: "Subcontractor portal maps" },
  { name: "Firebase FCM", detail: "Push notifications" },
  { name: "Azure Blob Storage", detail: "Documents and POD" },
];

export function PlatformArchitecture() {
  return (
    <section
      id="platform"
      className="py-20 sm:py-28"
      style={{ background: "#F7F2EE" }}
    >
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <div
            className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full mb-4 border"
            style={{ background: "#FAEDE7", borderColor: "#E8D5C4" }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#D86D3C" }}
            />
            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#D86D3C" }}
            >
              The platform
            </p>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
            style={{ color: "#202020" }}
          >
            One platform. Five portals. Every party on the job.
          </h2>
          <p
            className="mt-5 text-base sm:text-lg leading-relaxed"
            style={{ color: "#5C5047" }}
          >
            A connected architecture designed for real-world bulk haulage operations — keeping your drivers, subcontractors, operations team, and clients on the same page.
          </p>
        </motion.div>

        {/* Bento Grid: 5 Portals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mb-16"
        >
          {portals.map((portal) => (
            <div
              key={portal.name}
              className={`group flex flex-col justify-between rounded-2xl border p-6 sm:p-7 transition-all duration-300 hover:shadow-lg hover:border-[#D86D3C]/70 ${portal.colSpan}`}
              style={{
                background: "#FFFFFF",
                borderColor: "#E8D5C4",
              }}
            >
              <div>
                {/* Header row: Icon + Pill Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:scale-105"
                    style={{ background: "#FAEDE7" }}
                  >
                    <portal.icon
                      className="h-5 w-5"
                      style={{ color: "#D86D3C" }}
                    />
                  </div>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border"
                    style={{
                      background: "#FEFBF9",
                      borderColor: "#E8D5C4",
                      color: "#A8552E",
                    }}
                  >
                    {portal.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3
                  className="text-lg sm:text-xl font-bold tracking-tight mb-2"
                  style={{ color: "#202020" }}
                >
                  {portal.name}
                </h3>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: "#5C5047" }}
                >
                  {portal.description}
                </p>
              </div>

              {/* Bento Feature Highlight Tags */}
              <div
                className="mt-6 pt-4 border-t flex flex-wrap gap-2"
                style={{ borderColor: "#F2E8E0" }}
              >
                {portal.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold"
                    style={{
                      background: "#FAEDE7",
                      color: "#8A4520",
                    }}
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
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-14 text-center w-full"
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-6"
            style={{ color: "#8A7060" }}
          >
            Job lifecycle
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {lifecycleSteps.map((step, idx) => (
              <div key={step} className="flex items-center gap-2 sm:gap-3">
                <span
                  className="rounded-full border px-4 py-2 text-sm font-semibold whitespace-nowrap shadow-xs"
                  style={{
                    background: "#FEFBF9",
                    borderColor: "#E8D5C4",
                    color: "#202020",
                  }}
                >
                  {step}
                </span>
                {idx < lifecycleSteps.length - 1 && (
                  <ArrowRight
                    className="h-4 w-4 shrink-0 hidden sm:block"
                    style={{ color: "#D86D3C" }}
                  />
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
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl border p-6 sm:p-8 text-center w-full shadow-xs"
          style={{ background: "#FEFBF9", borderColor: "#E8D5C4" }}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-6"
            style={{ color: "#8A7060" }}
          >
            Integrations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-start">
            {integrations.map((integ) => (
              <div key={integ.name} className="flex flex-col items-center text-center">
                <p
                  className="text-sm font-bold"
                  style={{ color: "#202020" }}
                >
                  {integ.name}
                </p>
                <p className="text-xs mt-1" style={{ color: "#8A7060" }}>
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
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-sm italic" style={{ color: "#8A7060" }}>
            Keep your GPS. We are the operations layer above it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

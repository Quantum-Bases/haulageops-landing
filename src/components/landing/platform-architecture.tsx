"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  Users,
  Smartphone,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const portals = [
  {
    icon: LayoutDashboard,
    name: "Admin / Dispatch Panel",
    description:
      "Full fleet, driver, job, and financial management. Supplier records for fuel, parts, and materials vendors.",
  },
  {
    icon: Users,
    name: "Client Portal",
    description:
      "Live job tracking, invoices, rate cards, and reporting — branded per client.",
  },
  {
    icon: Users,
    name: "Subcontractor Portal",
    description:
      "Dedicated job queue, real-time updates, Mapbox maps, document uploads, own login — free for every subbie.",
    },
  {
    icon: Smartphone,
    name: "Driver Mobile App",
    description:
      "iOS and Android, offline-capable, POD capture, break logging, availability scheduling.",
  },
  {
    icon: BarChart3,
    name: "Management / Reporting",
    description:
      "Dashboards, financial reporting, compliance dashboards, and audit trails.",
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
    <section id="platform" className="py-20 sm:py-28 bg-[#0B1120] text-white">
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            One platform. Five portals. Every party on the job.
          </h2>
        </motion.div>

        {/* Portal cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20"
        >
          {portals.map((portal, idx) => (
            <div
              key={portal.name}
              className={`rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/8 transition-colors ${
                idx === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <portal.icon className="h-6 w-6 text-[#E8652B] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                {portal.name}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {portal.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Job lifecycle strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <p className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-6 text-center">
            Job lifecycle
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {lifecycleSteps.map((step, idx) => (
              <div key={step} className="flex items-center gap-2 sm:gap-3">
                <Badge
                  variant="secondary"
                  className="bg-white/10 text-white/90 border-white/10 px-4 py-2 text-sm font-medium whitespace-nowrap"
                >
                  {step}
                </Badge>
                {idx < lifecycleSteps.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-white/20 shrink-0 hidden sm:block" />
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
        >
          <p className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-6 text-center">
            Integrations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            {integrations.map((integ) => (
              <div key={integ.name} className="text-center">
                <p className="text-sm font-semibold text-white/80">
                  {integ.name}
                </p>
                <p className="text-xs text-white/40 mt-0.5">
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
          className="mt-12 text-center"
        >
          <p className="text-sm text-white/40 italic">
            Keep your GPS. We are the operations layer above it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

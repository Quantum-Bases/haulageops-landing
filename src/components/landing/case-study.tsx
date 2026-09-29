"use client";

import { motion } from "framer-motion";
import { Phone, FileText, Users, Clock, CheckCircle2, XCircle } from "lucide-react";

const beforeItems = [
  { icon: Phone, label: "Dispatch by phone and WhatsApp" },
  { icon: FileText, label: "Paper dockets on truck dashboards" },
  { icon: Users, label: "Subcontractors managed on blind trust" },
  { icon: Clock, label: "Weekend manual invoicing backlog" },
];

const afterItems = [
  "All five portals deployed — admin, client, subcontractor, driver, management",
  "Jobs delegated and tracked in real time across owned and subbie tippers",
  "Digital POD with weighbridge photo, docket capture, and e-signatures",
  "Invoices generated directly from jobs and synced to Xero automatically",
];

export function CaseStudy() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-neutral-200">
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
              Built on 40 Years of Fleet Experience
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
            Designed by Australian bulk haulage operators, for operators.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-600">
            A 40-year Australian heavy haulage operation ran dispatch by phone, dockets on paper, and subbies on trust. They engineered the platform that eliminated their admin bottlenecks. Now it is HaulageOps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45 }}
          >
            <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-6 sm:p-8 h-full shadow-xs">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-neutral-200">
                <XCircle className="h-4 w-4 text-neutral-500" />
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  The Old Paper Way
                </p>
              </div>
              <ul className="space-y-4">
                {beforeItems.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neutral-200 text-neutral-600 flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 opacity-80" />
                    </div>
                    <span className="text-sm line-through text-neutral-500 font-medium">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div className="rounded-xl border-2 border-neutral-900 bg-white p-6 sm:p-8 h-full relative overflow-hidden shadow-xs">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#E8652B]" />
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                    With HaulageOps
                  </p>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#E8652B] bg-orange-50 px-2.5 py-0.5 rounded border border-orange-200">
                  Proven in Heavy Fleets
                </span>
              </div>
              <ul className="space-y-4">
                {afterItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="shrink-0 mt-1 w-2 h-2 rounded-full bg-[#E8652B]" />
                    <span className="text-sm leading-relaxed text-neutral-900 font-semibold">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Live in Production Today - Softened to clean light slate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 max-w-5xl mx-auto"
        >
          <div className="rounded-xl border border-neutral-200 bg-neutral-50/80 p-6 sm:p-8 text-center shadow-xs">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E8652B]" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                Live In Production Across Australian Heavy Transport
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-neutral-800">
              {[
                "Admin & Live Dispatch Board",
                "Offline-Capable Driver App",
                "Subcontractor Self-Serve Portal",
                "Client Live ETA & Tracking",
                "Weighbridge Docket Photo Capture",
                "Tiered Rate Engine (Tonne/m³/Hour)",
                "Automated Xero & MYOB Sync",
                "NHVR / CoR Audit Trails",
              ].map((cap, i, arr) => (
                <span key={cap} className="inline-flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg border border-neutral-200 bg-white text-neutral-800 shadow-2xs">
                    {cap}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-[#E8652B] hidden sm:inline">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

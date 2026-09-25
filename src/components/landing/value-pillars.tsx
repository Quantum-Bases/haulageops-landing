"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Control every job across drivers, subcontractors, and clients",
    wedgeLine: "Delegate the job, keep the visibility.",
    description:
      "Delegate work to subcontractors and assign drivers without losing control of the job — because everyone works on the same live job record, in their own portal.",
    features: [
      "Subcontractor portal with own login, live job queue, and Mapbox maps",
      "Admin and dispatch panel with full fleet oversight",
      "Driver availability scheduling",
      "Role-based access control (RBAC)",
      "Push notifications for status changes",
    ],
    demoMoment:
      "Create job, delegate to subcontractor, sub accepts in their own portal, live status flows back. Under 3 minutes.",
  },
  {
    number: "02",
    title: "Every party sees it live, dispatch to POD",
    wedgeLine: "They log in. They don't ring in.",
    description:
      "Stop being the human status API. Clients and management see live job status, tracking, and delivery proof the moment it happens.",
    features: [
      "Real-time tracking via WebSocket (Socket.io)",
      "Client portal: job tracking, invoices, rate cards, reporting",
      "Offline-capable driver app (iOS and Android)",
      "POD capture: photo, document, and signature, Azure-stored",
    ],
    demoMoment:
      "Driver completes delivery offline at a quarry, app syncs, POD appears on the job, client portal shows it instantly.",
  },
  {
    number: "03",
    title: "Turn haulage workflows into auditable, billable, compliance-ready operations",
    wedgeLine: "The docket is already there when you invoice.",
    description:
      "Every job produces its own paper trail — rates applied, documents stored, actions logged, invoice generated — so audits, disputes, and billing stop being projects.",
    features: [
      "Rate management: per tonne, load, hour, or fixed — client-specific, effective-dated",
      "Invoice lifecycle with Xero sync (OAuth2, 6-hr cron plus webhooks)",
      "Contract lifecycle: versioning, approvals, auto-expiry",
      "All-actions audit trail with document management (Azure)",
      "Break and fatigue management",
    ],
    demoMoment:
      "Show a rate card with effective dating, job billed at the correct historical rate, invoice generated, Xero sync.",
  },
];

export function ValuePillars() {
  return (
    <section className="pb-20 sm:pb-28" style={{ background: "#FEFBF9" }}>
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
              The solution
            </p>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
            style={{ color: "#202020" }}
          >
            One platform. Every party on the job.
          </h2>
          <p
            className="mt-5 text-base sm:text-lg leading-relaxed"
            style={{ color: "#5C5047" }}
          >
            Connect dispatchers, owned drivers, subcontractors, and clients on a single shared operational record with real-time tracking, digital dockets, and automated billing.
          </p>
        </motion.div>

        <div className="space-y-20">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start`}
              >
                {/* Text side */}
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-5">
                    <span
                      className="text-7xl font-black tabular-nums leading-none select-none"
                      style={{ color: "#F2E8E0" }}
                    >
                      {pillar.number}
                    </span>
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight"
                    style={{ color: "#202020" }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="mt-4 leading-relaxed text-base"
                    style={{ color: "#5C5047" }}
                  >
                    {pillar.description}
                  </p>
                  <div
                    className="mt-5 flex items-center gap-2.5 rounded-xl px-4 py-3 border"
                    style={{
                      background: "#FAEDE7",
                      borderColor: "#E8BEAA",
                    }}
                  >
                    <ArrowRight
                      className="h-4 w-4 shrink-0"
                      style={{ color: "#D86D3C" }}
                    />
                    <span
                      className="text-sm font-bold"
                      style={{ color: "#A8552E" }}
                    >
                      {pillar.wedgeLine}
                    </span>
                  </div>
                </div>

                {/* Feature panel */}
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div
                    className="rounded-2xl border p-6 sm:p-8"
                    style={{
                      background: "#F7F2EE",
                      borderColor: "#E8D5C4",
                    }}
                  >
                    <h4
                      className="text-xs font-bold uppercase tracking-widest mb-5"
                      style={{ color: "#8A7060" }}
                    >
                      What this looks like
                    </h4>
                    <ul className="space-y-3.5">
                      {pillar.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div
                            className="shrink-0 mt-1.5 w-5 h-5 rounded-full flex items-center justify-center"
                            style={{ background: "#FAEDE7" }}
                          >
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ background: "#D86D3C" }}
                            />
                          </div>
                          <span
                            className="text-sm leading-relaxed"
                            style={{ color: "#202020" }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div
                      className="mt-6 pt-5 border-t"
                      style={{ borderColor: "#E8D5C4" }}
                    >
                      <p className="text-sm" style={{ color: "#5C5047" }}>
                        <span
                          className="font-bold"
                          style={{ color: "#202020" }}
                        >
                          Demo moment:{" "}
                        </span>
                        {pillar.demoMoment}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

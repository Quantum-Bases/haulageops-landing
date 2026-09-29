"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Control every job across drivers, subcontractors, and clients",
    wedgeLine: "Delegate the job, keep 100% live visibility.",
    description:
      "Delegate work to subcontractors and assign drivers without losing control of the job — because everyone works on the same live job record, in their own portal.",
    features: [
      "Subcontractor portal with dedicated login, live job queue, and Mapbox maps",
      "Admin and dispatch panel with full Australian fleet oversight",
      "Driver availability scheduling and fatigue pre-checks",
      "Role-based access control (RBAC) across allocators and accounting",
      "Instant push notifications for truck allocation & status changes",
    ],
    demoMoment:
      "Create job, delegate to subcontractor, sub accepts in their own portal, live status flows back. Under 3 minutes.",
  },
  {
    number: "02",
    title: "Every party sees it live, from dispatch to digital POD",
    wedgeLine: "They log in. They don't ring your dispatch desk.",
    description:
      "Stop being the human telephone exchange. Clients and site foremen see live truck tracking, ETA, and delivery proof the moment the tipper empties its load.",
    features: [
      "Real-time GPS vehicle tracking via high-speed WebSockets",
      "Client portal: live job tracking, weighbridge tickets, rate cards, and reporting",
      "Offline-capable driver app (iOS and Android) for remote quarries",
      "Digital POD capture: weighbridge docket photo, e-signature, and time-stamped location",
    ],
    demoMoment:
      "Driver completes delivery offline at a quarry pit, app syncs upon signal, POD appears instantly in client portal.",
  },
  {
    number: "03",
    title: "Turn haulage workflows into auditable, billable operations",
    wedgeLine: "The weighbridge docket is already attached when you invoice.",
    description:
      "Every job produces its own verified paper trail — agreed rates applied, weighbridge tickets attached, actions logged, invoice generated — so billing stops being a weekend chore.",
    features: [
      "Flexible rate management: per tonne, m³, load, hour, or fixed matrix",
      "Automated invoice lifecycle with native Xero & MYOB sync (OAuth2)",
      "Automated Subcontractor RCTIs generated directly from approved dockets",
      "NHVR Chain of Responsibility audit trail with immutable document storage",
      "Automatic break, waiting time, and demurrage capture",
    ],
    demoMoment:
      "Show a client rate card, job billed at the correct historical rate, weighbridge photo attached, invoice synced to Xero in seconds.",
  },
];

export function ValuePillars() {
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
              The Architecture
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
            One platform. Every party on the job.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-600">
            Connect dispatchers, company drivers, subbies, and quarry clients on a single shared operational record with real-time GPS, digital dockets, and automated billing.
          </p>
        </motion.div>

        <div className="space-y-16 sm:space-y-20">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45 }}
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                {/* Text side */}
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-4">
                    <span className="text-6xl sm:text-7xl font-black tabular-nums leading-none select-none text-neutral-300">
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-base text-neutral-600 font-normal">
                    {pillar.description}
                  </p>
                  
                  {/* Refined wedge line */}
                  <div className="mt-6 inline-flex items-center gap-2.5 rounded-lg px-4 py-2.5 bg-orange-50/90 text-neutral-900 border border-orange-200/80 text-xs sm:text-sm font-bold shadow-2xs">
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#E8652B]" />
                    <span>{pillar.wedgeLine}</span>
                  </div>
                </div>

                {/* Feature panel */}
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-6 sm:p-8 shadow-xs">
                    <div className="flex items-center justify-between mb-5 pb-3 border-b border-neutral-200/80">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                        Operational Capabilities
                      </h4>
                      <span className="text-[11px] font-mono font-semibold text-neutral-900 bg-white border border-neutral-200 px-2 py-0.5 rounded shadow-2xs">
                        Standard in Core
                      </span>
                    </div>

                    <ul className="space-y-3.5">
                      {pillar.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-neutral-800">
                          <div className="shrink-0 mt-0.5 w-4 h-4 rounded-full bg-orange-50 text-[#E8652B] flex items-center justify-center border border-orange-200">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-5 border-t border-neutral-200/80">
                      <p className="text-xs sm:text-sm text-neutral-600">
                        <span className="font-extrabold text-neutral-900">In practice: </span>
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

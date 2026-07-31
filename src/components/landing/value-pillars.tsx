"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Eye,
  FileCheck,
  ArrowRight,
  Users,
  MapPin,
  Bell,
  Smartphone,
  FileText,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: LayoutDashboard,
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
    icon: Eye,
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
    icon: FileCheck,
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
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="text-sm font-semibold text-[#E8652B] uppercase tracking-wider mb-3">
            The solution
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            One platform. Every party on the job.
          </h2>
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
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                  idx % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-bold text-[#E8652B]/20">
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
                    {pillar.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 bg-[#E8652B]/5 border border-[#E8652B]/15 rounded-lg px-4 py-3">
                    <ArrowRight className="h-4 w-4 text-[#E8652B] shrink-0" />
                    <span className="text-sm font-semibold text-[#E8652B]">
                      {pillar.wedgeLine}
                    </span>
                  </div>
                </div>

                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-muted/40 rounded-xl border border-border p-6 sm:p-8">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">
                      What this looks like
                    </h4>
                    <ul className="space-y-3.5">
                      {pillar.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="shrink-0 mt-1 w-5 h-5 rounded-full bg-[#E8652B]/10 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-[#E8652B]" />
                          </div>
                          <span className="text-foreground leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-5 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          Demo moment: 
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

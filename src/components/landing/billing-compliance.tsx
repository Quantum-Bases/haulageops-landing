"use client";

import { motion } from "framer-motion";
import { DollarSign, FileText, Shield, History, RefreshCcw, AlertCircle } from "lucide-react";

export function BillingCompliance() {
  return (
    <section className="py-20 sm:py-28 bg-[#0B1120] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            The right rate, on the right date, on every invoice.
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            Rates applied, documents stored, actions logged, invoice generated —
            so audits, disputes, and billing stop being projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Rate management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <DollarSign className="h-6 w-6 text-[#E8652B] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-3">Rate management</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Per-tonne, per-load, hourly, or fixed. Client-specific rate cards
              with effective dating, so the correct rate always applies — even
              for historical jobs.
            </p>
            <ul className="space-y-2">
              {["Per tonne / load / hour / fixed", "Client-specific cards", "Effective-dated pricing"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8652B] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Invoice + Xero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <RefreshCcw className="h-6 w-6 text-[#E8652B] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-3">Job to invoice to Xero</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              No re-keying. Invoices generated from completed jobs with the
              correct rates applied, then synced to Xero via OAuth2. Payments
              tracked back into the platform.
            </p>
            <ul className="space-y-2">
              {["OAuth2 Xero integration", "6-hour cron sync + webhooks", "Payment tracking back into platform"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8652B] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contract lifecycle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <History className="h-6 w-6 text-[#E8652B] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-3">Contract lifecycle</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Version-controlled contracts with approval workflows and
              auto-expiry alerts. Every change logged, every version
              retrievable.
            </p>
            <ul className="space-y-2">
              {["Versioning and approvals", "Auto-expiry alerts", "Linked to rate cards"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8652B] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Compliance section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8"
        >
          <div className="flex items-start gap-4">
            <Shield className="h-6 w-6 text-[#E8652B] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Audit trail and compliance records
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Every action on every job is logged — who did what, and when.
                Driver break and fatigue records stay with the job. Document
                expiry is visible before it becomes a problem. For Australian
                operators, this means evidence-ready records for Chain of
                Responsibility (CoR) and HVNL compliance.
              </p>
              <div className="flex flex-wrap gap-2">
                {["All-actions audit trail", "Break and fatigue records", "Document expiry tracking", "Subcontractor compliance docs"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-white/50 bg-white/5 border border-white/10 rounded-md px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Guardrail note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 text-center text-xs text-white/30 italic"
        >
          HaulageOps provides the tools and records to support your compliance
          obligations. It does not guarantee compliance outcomes.
        </motion.p>
      </div>
    </section>
  );
}

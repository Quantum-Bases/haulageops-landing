"use client";

import { motion } from "framer-motion";
import { DollarSign, RefreshCcw, History, Shield } from "lucide-react";

const cards = [
  {
    icon: DollarSign,
    title: "Rate management",
    description:
      "Per-tonne, per-load, hourly, or fixed. Client-specific rate cards with effective dating, so the correct rate always applies — even for historical jobs.",
    tags: ["Per tonne / load / hour / fixed", "Client-specific cards", "Effective-dated pricing"],
  },
  {
    icon: RefreshCcw,
    title: "Job to invoice to Xero",
    description:
      "No re-keying. Invoices generated from completed jobs with the correct rates applied, then synced to Xero via OAuth2. Payments tracked back into the platform.",
    tags: ["OAuth2 Xero integration", "6-hour cron sync + webhooks", "Payment tracking back into platform"],
  },
  {
    icon: History,
    title: "Contract lifecycle",
    description:
      "Version-controlled contracts with approval workflows and auto-expiry alerts. Every change logged, every version retrievable.",
    tags: ["Versioning and approvals", "Auto-expiry alerts", "Linked to rate cards"],
  },
];

export function BillingCompliance() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#FAEDE7" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className="inline-block w-8 h-0.5 rounded-full"
              style={{ background: "#D86D3C" }}
            />
            <p
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#D86D3C" }}
            >
              Billing &amp; Compliance
            </p>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight max-w-2xl"
            style={{ color: "#202020" }}
          >
            The right rate, on the right date, on every invoice.
          </h2>
          <p
            className="mt-5 text-lg leading-relaxed max-w-2xl"
            style={{ color: "#5C5047" }}
          >
            Rates applied, documents stored, actions logged, invoice generated —
            so audits, disputes, and billing stop being projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl border p-6 flex flex-col"
              style={{ background: "#FEFBF9", borderColor: "#E8D5C4" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shrink-0"
                style={{ background: "#FAEDE7" }}
              >
                <card.icon className="h-5 w-5" style={{ color: "#D86D3C" }} />
              </div>
              <h3
                className="text-base font-bold mb-2"
                style={{ color: "#202020" }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "#5C5047" }}
              >
                {card.description}
              </p>
              <ul className="mt-5 space-y-2 border-t pt-4" style={{ borderColor: "#E8D5C4" }}>
                {card.tags.map((tag) => (
                  <li
                    key={tag}
                    className="flex items-center gap-2 text-xs font-medium"
                    style={{ color: "#8A7060" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "#D86D3C" }}
                    />
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Compliance panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="rounded-2xl border p-6 sm:p-8"
          style={{ background: "#FEFBF9", borderColor: "#E8D5C4" }}
        >
          <div className="flex items-start gap-5">
            <div
              className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: "#FAEDE7" }}
            >
              <Shield className="h-5 w-5" style={{ color: "#D86D3C" }} />
            </div>
            <div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: "#202020" }}
              >
                Audit trail and compliance records
              </h3>
              <p
                className="text-sm leading-relaxed mb-5 max-w-3xl"
                style={{ color: "#5C5047" }}
              >
                Every action on every job is logged — who did what, and when.
                Driver break and fatigue records stay with the job. Document
                expiry is visible before it becomes a problem. For Australian
                operators, this means evidence-ready records for Chain of
                Responsibility (CoR) and HVNL compliance.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "All-actions audit trail",
                  "Break and fatigue records",
                  "Document expiry tracking",
                  "Subcontractor compliance docs",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold rounded-full px-3.5 py-1.5 border"
                    style={{
                      background: "#FAEDE7",
                      borderColor: "#E8BEAA",
                      color: "#A8552E",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 text-center text-xs italic"
          style={{ color: "#8A7060" }}
        >
          HaulageOps provides the tools and records to support your compliance
          obligations. It does not guarantee compliance outcomes.
        </motion.p>
      </div>
    </section>
  );
}

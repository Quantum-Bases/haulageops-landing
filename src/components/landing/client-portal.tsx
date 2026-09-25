"use client";

import { motion } from "framer-motion";
import { Eye, FileText, DollarSign, BarChart3, TrendingUp } from "lucide-react";

const clientFeatures = [
  {
    icon: Eye,
    title: "Live job tracking",
    description:
      "See every job status the moment it updates — no phone calls required.",
  },
  {
    icon: FileText,
    title: "Delivery proof",
    description:
      "POD photos, signed dockets, and compliance documents attached to every job.",
  },
  {
    icon: DollarSign,
    title: "Invoices and rate cards",
    description:
      "View invoices and the rate card applied to their account — self-service.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description:
      "Job history, volume summaries, and delivery performance at their fingertips.",
  },
];

export function ClientPortal() {
  return (
    <section
      id="client-portal"
      className="py-20 sm:py-28"
      style={{ background: "#F7F2EE" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
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
                Client portal
              </p>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight"
              style={{ color: "#202020" }}
            >
              They log in. They do not ring in.
            </h2>
            <p
              className="mt-5 leading-relaxed"
              style={{ color: "#5C5047" }}
            >
              A tracking link is not a portal. HaulageOps clients see live jobs,
              delivery proof, their invoices, and their rate card — self-service.
            </p>

            {/* Tender hook */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex items-start gap-3 rounded-xl border px-5 py-4"
              style={{ background: "#FAEDE7", borderColor: "#E8BEAA" }}
            >
              <TrendingUp
                className="h-4 w-4 shrink-0 mt-0.5"
                style={{ color: "#D86D3C" }}
              />
              <p className="text-sm leading-relaxed" style={{ color: "#5C5047" }}>
                Infrastructure clients increasingly make live visibility a
                condition of contract. Give them the portal before they demand
                it.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {clientFeatures.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.06 }}
                className="rounded-2xl border p-5 transition-shadow duration-300 hover:shadow-md"
                style={{ background: "#FEFBF9", borderColor: "#E8D5C4" }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "#FAEDE7" }}
                >
                  <feature.icon
                    className="h-4 w-4"
                    style={{ color: "#D86D3C" }}
                  />
                </div>
                <h3
                  className="text-sm font-bold mb-1.5"
                  style={{ color: "#202020" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5C5047" }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

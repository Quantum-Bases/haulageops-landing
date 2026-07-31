"use client";

import { motion } from "framer-motion";
import { Eye, FileText, DollarSign, BarChart3, TrendingUp } from "lucide-react";

const clientFeatures = [
  {
    icon: Eye,
    title: "Live job tracking",
    description: "See every job status the moment it updates — no phone calls required.",
  },
  {
    icon: FileText,
    title: "Delivery proof",
    description: "POD photos, signed dockets, and compliance documents attached to every job.",
  },
  {
    icon: DollarSign,
    title: "Invoices and rate cards",
    description: "View invoices and the rate card applied to their account — self-service.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description: "Job history, volume summaries, and delivery performance at their fingertips.",
  },
];

export function ClientPortal() {
  return (
    <section id="client-portal" className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            They log in. They do not ring in.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A tracking link is not a portal. HaulageOps clients see live jobs,
            delivery proof, their invoices, and their rate card — self-service.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-6 mb-12"
        >
          {clientFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl border border-border p-6"
            >
              <feature.icon className="h-5 w-5 text-[#E8652B] mb-3" />
              <h3 className="text-base font-semibold text-foreground mb-1.5">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Tender hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/60 rounded-lg px-5 py-3">
            <TrendingUp className="h-4 w-4 text-amber-600 shrink-0" />
            <p className="text-sm text-amber-900">
              Infrastructure clients increasingly make live visibility a condition
              of contract. Give them the portal before they demand it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

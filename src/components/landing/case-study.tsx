"use client";

import { motion } from "framer-motion";
import { Phone, FileText, Users, Clock, ArrowRight } from "lucide-react";

const beforeItems = [
  { icon: Phone, label: "Dispatch by phone and WhatsApp" },
  { icon: FileText, label: "Paper dockets" },
  { icon: Users, label: "Subcontractors on trust" },
  { icon: Clock, label: "Weekly manual invoicing" },
];

const afterItems = [
  "All five portals rolled out — admin, client, subcontractor, driver, management",
  "Jobs delegated and tracked in real time across owned and subcontracted fleet",
  "Digital POD with photo, document, and signature capture",
  "Invoices generated from jobs and synced to Xero automatically",
];

export function CaseStudy() {
  return (
    <section className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Built and proven with a 40-year bulk haulage operator.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A 40-year Australian bulk haulage operator ran dispatch by phone,
            dockets on paper, and subbies on trust. They built the platform
            that fixed it. Now it is HaulageOps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl border border-border p-6 sm:p-8 h-full">
              <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-4">
                Before
              </p>
              <ul className="space-y-4">
                {beforeItems.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-red-500/60 shrink-0" />
                    <span className="text-foreground">{item.label}</span>
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
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white rounded-xl border border-[#E8652B]/20 p-6 sm:p-8 h-full">
              <p className="text-xs font-semibold text-[#E8652B] uppercase tracking-wider mb-4">
                What changed
              </p>
              <ul className="space-y-4">
                {afterItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[#E8652B]" />
                    <span className="text-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
                </ul>
            </div>
          </motion.div>
        </div>

        {/* Results slot — reserved */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 max-w-2xl mx-auto text-center"
        >
          <div className="border border-dashed border-border rounded-xl p-8 bg-white/60">
            <p className="text-sm text-muted-foreground">
              Quantified efficiency results coming soon — this is a reserved
              component slot awaiting verified data from the founding operator.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

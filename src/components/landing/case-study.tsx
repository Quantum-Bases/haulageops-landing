"use client";

import { motion } from "framer-motion";
import { Phone, FileText, Users, Clock, CheckCircle2, XCircle } from "lucide-react";

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
    <section className="pb-20 sm:pb-28" style={{ background: "#F7F2EE" }}>
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
              Real operator
            </p>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
            style={{ color: "#202020" }}
          >
            Built and proven with a 40-year bulk haulage operator.
          </h2>
          <p
            className="mt-5 text-base sm:text-lg leading-relaxed"
            style={{ color: "#5C5047" }}
          >
            A 40-year Australian bulk haulage operator ran dispatch by phone,
            dockets on paper, and subbies on trust. They built the platform
            that fixed it. Now it is HaulageOps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="rounded-2xl border p-6 sm:p-8 h-full"
              style={{ background: "#FEFBF9", borderColor: "#E8D5C4" }}
            >
              <div className="flex items-center gap-2 mb-5">
                <XCircle className="h-4 w-4" style={{ color: "#C0392B" }} />
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#C0392B" }}
                >
                  Before
                </p>
              </div>
              <ul className="space-y-4">
                {beforeItems.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "#FDF2F2" }}
                    >
                      <item.icon
                        className="h-4 w-4"
                        style={{ color: "#C0392B", opacity: 0.7 }}
                      />
                    </div>
                    <span
                      className="text-sm line-through"
                      style={{ color: "#8A7060" }}
                    >
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
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              className="rounded-2xl border-2 p-6 sm:p-8 h-full relative overflow-hidden"
              style={{ background: "#FEFBF9", borderColor: "#D86D3C" }}
            >
              {/* Accent corner */}
              <div
                className="absolute top-0 right-0 w-20 h-20 opacity-10 rounded-bl-full"
                style={{ background: "#D86D3C" }}
              />
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle2
                  className="h-4 w-4"
                  style={{ color: "#D86D3C" }}
                />
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#D86D3C" }}
                >
                  What changed
                </p>
              </div>
              <ul className="space-y-4">
                {afterItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div
                      className="shrink-0 mt-1.5 w-2 h-2 rounded-full"
                      style={{ background: "#D86D3C" }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "#202020" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Results slot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 max-w-2xl mx-auto"
        >
          <div
            className="border border-dashed rounded-2xl p-6 text-center"
            style={{ borderColor: "#D86D3C", background: "#FAEDE766" }}
          >
            <p className="text-sm italic" style={{ color: "#8A7060" }}>
              Quantified efficiency results coming soon — this is a reserved
              component slot awaiting verified data from the founding operator.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

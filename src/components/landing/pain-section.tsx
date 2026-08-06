"use client";

import { motion } from "framer-motion";
import { Phone, Users, Clock, AlertTriangle } from "lucide-react";

const pains = [
  {
    icon: Phone,
    title: "Coordination chaos",
    description:
      "Dispatch across owned and subcontracted trucks by phone with no shared job record.",
    cost: "15–20 hrs/week admin; missed or double-booked jobs",
    hook: "Who owns the master sheet — and what happens on their day off?",
  },
  {
    icon: Users,
    title: "Client status calls",
    description:
      "The operator is the only source of truth. Clients call and email for updates.",
    cost: "Client churn risk; lost tenders",
    hook: "When a subbie is on the job, what can you actually see?",
  },
  {
    icon: Clock,
    title: "Docket-to-invoice lag",
    description:
      "Paper PODs re-keyed weekly, days behind delivery.",
    cost: "Cash-cycle delay; unbilled work",
    hook: "How long between delivery and invoice today?",
  },
  {
    icon: AlertTriangle,
    title: "Audit prep by hand",
    description:
      "Compliance packs assembled manually from paper, phones, and inboxes.",
    cost: "HVNL/CoR exposure; failed prequalification",
    hook: "",  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function PainSection() {
  return (
    <section className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#E8652B] uppercase tracking-wider mb-3">
            The old way
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Running a bulk haulage operation on spreadsheets and WhatsApp
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            The operation runs on your phone. Dispatch by WhatsApp. Dockets on
            paper. Subbies invisible after handoff. Clients calling for updates.
            Invoices a week behind the work. It works — until the fleet grows, the
            tender asks for evidence, or the ops manager resigns.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {pains.map((pain) => (
            <motion.div
              key={pain.title}
              variants={itemVariants}
              className="bg-white rounded-xl border border-border p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                  <pain.icon className="h-5 w-5 text-red-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground">
                    {pain.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {pain.description}
                  </p>
                  <div className="mt-4 flex items-start gap-2 bg-amber-50 border border-amber-200/60 rounded-lg px-4 py-3">
                    <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide shrink-0 mt-0.5">
                      Cost
                    </span>
                    <span className="text-sm text-amber-900">
                      {pain.cost}
                    </span>
                  </div>
                  {pain.hook && (
                    <p className="mt-3 text-sm text-muted-foreground italic">
                      {pain.hook}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

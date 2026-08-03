"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  LogIn,
  MapPin,
  Upload,
  ArrowRight,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const steps = [
  {
    icon: UserPlus,
    title: "Delegate",
    description: "Create a job and assign it to a subcontractor from the admin panel.",
  },
  {
    icon: LogIn,
    title: "Sub accepts",
    description: "The subcontractor sees the job in their own dedicated portal and accepts it.",
  },
  {
    icon: MapPin,
    title: "Live tracking flows back",
    description:
      "Real-time status, location, and updates flow back to the admin and client portals via WebSocket.",
  },
  {
    icon: Upload,
    title: "Documents captured",
    description:
      "POD photos, signed dockets, and compliance documents are captured against the job.",
  },
];

const faqItems = [
  {
    question: "Will my subbies actually use it?",
    answer:
      "The work and the payment evidence live in the portal. Subcontractors log in because that is where their jobs, delivery proof, and payment records are. It is in their interest.",
  },
  {
    question: "What does it cost them?",
    answer: "Nothing. Every subcontractor login is free, included in your subscription.",
  },
  {
    question: "What can they see?",
    answer:
      "Only their own jobs. Role-based access control ensures each subcontractor sees only what is assigned to them.",
  },
];

export function SubcontractorPortal() {
  return (
    <section id="subcontractor-portal" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-6"
        >
          <p className="text-sm font-semibold text-[#E8652B] uppercase tracking-wider mb-3">
            The differentiator
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Delegate the job. Keep the visibility.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            The moment a job goes to a subbie, it disappears — no status, no
            docs, no proof — until the invoice argument.
          </p>
        </motion.div>

        {/* 4-step walkthrough */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {steps.map((step, idx) => (
            <div key={step.title} className="relative">
              <div className="bg-muted/40 rounded-xl border border-border p-6 h-full">
                <div className="w-10 h-10 rounded-lg bg-[#E8652B]/10 flex items-center justify-center mb-4">
                  <step.icon className="h-5 w-5 text-[#E8652B]" />
                </div>
                <div className="text-xs font-semibold text-[#E8652B] uppercase tracking-wider mb-1">
                  Step {idx + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#E8652B]/30 z-10" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Competitor contrast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-[#0B1120] rounded-xl p-6 sm:p-8 text-white">
            <h3 className="text-lg font-semibold mb-3">How this compares</h3>
            <p className="text-white/70 leading-relaxed">
              Some platforms manage subcontractors as records in an admin screen,
              or require your subs to buy their own subscription. HaulageOps
              gives every sub their own free login with a live job queue, real-time
              updates, and document uploads.
            </p>
          </div>
        </motion.div>

        {/* Inline FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`sub-faq-${idx}`}>
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  LogIn,
  MapPin,
  Upload,
  ArrowRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    icon: UserPlus,
    title: "Delegate",
    description:
      "Create a job and assign it to a subcontractor from the admin panel.",
  },
  {
    icon: LogIn,
    title: "Sub accepts",
    description:
      "The subcontractor sees the job in their own dedicated portal and accepts it.",
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
    answer:
      "Nothing. Every subcontractor login is free, included in your subscription.",
  },
  {
    question: "What can they see?",
    answer:
      "Only their own jobs. Role-based access control ensures each subcontractor sees only what is assigned to them.",
  },
];

export function SubcontractorPortal() {
  return (
    <section
      id="subcontractor-portal"
      className="py-20 sm:py-28"
      style={{ background: "#FEFBF9" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
              The differentiator
            </p>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight max-w-2xl"
            style={{ color: "#202020" }}
          >
            Delegate the job. Keep the visibility.
          </h2>
          <p
            className="mt-5 text-lg leading-relaxed max-w-2xl"
            style={{ color: "#5C5047" }}
          >
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
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12"
        >
          {steps.map((step, idx) => (
            <div key={step.title} className="relative">
              <div
                className="rounded-2xl border p-6 h-full transition-shadow duration-300 hover:shadow-md"
                style={{ background: "#F7F2EE", borderColor: "#E8D5C4" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "#FAEDE7" }}
                >
                  <step.icon
                    className="h-5 w-5"
                    style={{ color: "#D86D3C" }}
                  />
                </div>
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-1.5"
                  style={{ color: "#D86D3C" }}
                >
                  Step {idx + 1}
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: "#202020" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5C5047" }}>
                  {step.description}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <ArrowRight
                  className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 z-10"
                  style={{ color: "#D86D3C", opacity: 0.4 }}
                />
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
          className="max-w-3xl mb-12"
        >
          <div
            className="rounded-2xl border-l-4 px-6 py-5"
            style={{
              background: "#FAEDE7",
              borderColor: "#D86D3C",
              borderLeftColor: "#D86D3C",
            }}
          >
            <h3
              className="text-base font-bold mb-2"
              style={{ color: "#202020" }}
            >
              How this compares
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#5C5047" }}>
              Some platforms manage subcontractors as records in an admin
              screen, or require your subs to buy their own subscription.
              HaulageOps gives every sub their own free login with a live job
              queue, real-time updates, and document uploads.
            </p>
          </div>
        </motion.div>

        {/* Inline FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-2xl"
        >
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqItems.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`sub-faq-${idx}`}
                className="rounded-xl border px-5 data-[state=open]:border-[#D86D3C] transition-colors duration-200"
                style={{ borderColor: "#E8D5C4", background: "#FFFFFF" }}
              >
                <AccordionTrigger
                  className="text-left text-sm font-semibold hover:no-underline py-4"
                  style={{ color: "#202020" }}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  className="text-sm leading-relaxed pb-4"
                  style={{ color: "#5C5047" }}
                >
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

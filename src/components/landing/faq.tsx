"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const faqItems = [
  {
    question: "We already use spreadsheets and WhatsApp.",
    answer:
      "Works until the fleet grows or the tender asks for evidence. The question is what it costs in hours — 15 to 20 hours a week in admin for a mixed fleet is common, and that is before you count the unbilled work from missed dockets.",
  },
  {
    question: "We already have GPS or telematics.",
    answer:
      "Keep it. HaulageOps runs jobs, subbies, and invoices. It is a different layer, not a replacement for your GPS provider.",
  },
  {
    question: "We use Xero.",
    answer:
      "We feed it. HaulageOps connects via OAuth2, syncs invoices every 6 hours via cron plus webhooks, and tracks payments back into the platform. Your books stay current without re-keying.",
  },
  {
    question: "Do you have AI route optimisation?",
    answer:
      "No, and we will not pretend to. HaulageOps uses Google Maps for address autocomplete and routing. Route optimisation is not on our roadmap.",
  },
  {
    question: "Do you have hardware telematics or ELD?",
    answer:
      "Not built. It is a roadmap item. Today, HaulageOps coexists with your existing telematics — it does not integrate with it.",
  },
  {
    question: "Will drivers and subs actually use it?",
    answer:
      "The driver app works offline with 3-tap POD capture — designed for the pit, not the office. Subcontractors log in because the paid work and delivery evidence live there, and the portal is free to them.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="pb-20 sm:pb-28" style={{ background: "#FEFBF9" }}>
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Left label column */}
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
                FAQ
              </p>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight"
              style={{ color: "#202020" }}
            >
              Frequently asked questions
            </h2>
            <p
              className="mt-5 leading-relaxed"
              style={{ color: "#5C5047" }}
            >
              Honest answers to the questions we hear most from operators
              evaluating HaulageOps.
            </p>

            <div
              className="mt-8 flex items-start gap-3 rounded-xl border p-5"
              style={{ background: "#FAEDE7", borderColor: "#E8BEAA" }}
            >
              <MessageCircle
                className="h-5 w-5 shrink-0 mt-0.5"
                style={{ color: "#D86D3C" }}
              />
              <div>
                <p
                  className="text-sm font-bold mb-1"
                  style={{ color: "#202020" }}
                >
                  Still have questions?
                </p>
                <p className="text-sm" style={{ color: "#5C5047" }}>
                  Book a 30-minute demo and we will walk through your specific
                  operation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Accordion column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="rounded-xl border px-5 data-[state=open]:border-[#D86D3C] transition-colors duration-200"
                  style={{ borderColor: "#E8D5C4", background: "#FFFFFF" }}
                >
                  <AccordionTrigger
                    className="text-left text-sm font-semibold hover:no-underline py-5"
                    style={{ color: "#202020" }}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-sm leading-relaxed pb-5"
                    style={{ color: "#5C5047" }}
                  >
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

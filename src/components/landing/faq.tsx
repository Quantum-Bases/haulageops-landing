"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Frequently asked questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
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

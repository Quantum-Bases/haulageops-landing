"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqItem, landingFaqs } from "@/data/faqData";

interface FaqSectionProps {
  title?: string;
  items?: FaqItem[];
  id?: string;
}

export function FaqSection({
  title = "Frequently asked questions",
  items = landingFaqs,
  id = "faq",
}: FaqSectionProps) {
  return (
    <section id={id} className="py-20 sm:py-28 bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 bg-white border border-neutral-300 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#E8652B]" />
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Clear Answers
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900">
            {title}
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
            {items.map((item, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border-neutral-200">
                <AccordionTrigger className="text-left text-base font-bold hover:no-underline text-neutral-900 hover:text-[#E8652B] transition-colors py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 leading-relaxed pb-4">
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

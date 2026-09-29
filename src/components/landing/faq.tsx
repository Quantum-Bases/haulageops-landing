"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqItems = [
  {
    question: "We already run dispatch on spreadsheets and WhatsApp.",
    answer:
      "That works until the fleet scales past 10 trucks or a tier-1 head contractor asks for auditable Chain of Responsibility evidence. The hidden cost is in admin hours — 15 to 20 hours a week chasing drivers for dockets, re-keying numbers into accounting, and unbilled work from lost weighbridge slips.",
  },
  {
    question: "We already have GPS or telematics installed in the trucks.",
    answer:
      "Keep it. HaulageOps runs delivery jobs, subcontractor allocations, and client invoicing. It provides the commercial delivery layer above your telematics, not a hardware replacement.",
  },
  {
    question: "How does the Xero & MYOB integration work?",
    answer:
      "HaulageOps connects securely via official OAuth2 APIs. Once a driver captures the digital weighbridge docket, the system automatically validates rates and pushes 3-way matched invoices to Xero with payment status synced back. No double entry.",
  },
  {
    question: "Do you have AI route optimisation?",
    answer:
      "No, and we will not pretend to. HaulageOps uses Google Maps for address autocomplete and heavy vehicle routing. Bulk transport operators need reliable job allocation, weighbridge dockets, and rate enforcement — not black-box algorithms.",
  },
  {
    question: "Will our drivers and subcontractors actually use the app?",
    answer:
      "The driver app is designed for quarry pits, not corporate offices. It operates 100% offline, requires only 3 taps to capture a weighbridge docket or sign-on-glass, and subcontractors get their own dedicated portal free of charge.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most fleets go live within 5 to 7 business days. We import your client rate cards, configure your vehicle profiles (tippers, truck-and-dog, B-doubles), and provide hands-on onboarding for your allocators.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-neutral-50/50 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          {/* Left label column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 bg-white border border-neutral-300 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#E8652B]" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Clear Answers
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 leading-tight">
              Frequently asked questions
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-600">
              Direct, transparent answers to the questions Australian fleet owners and allocators ask before migrating to HaulageOps.
            </p>

            {/* Clean Light Card */}
            <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-6 text-neutral-900 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#E8652B] flex items-center justify-center border border-orange-200">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <p className="text-sm font-black text-neutral-900">Have a specific workflow question?</p>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                Bring one of your actual run sheets or weighbridge tickets to a 20-minute live session. We'll show you how it runs.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#E8652B] hover:text-[#D05520] transition-colors"
              >
                Schedule 20-Min Live Demo
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Right accordion column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="rounded-xl border border-neutral-200 bg-white px-5 shadow-xs overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-bold text-sm sm:text-base py-4 text-neutral-900 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-neutral-600 pb-4 font-normal">
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

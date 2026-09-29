"use client";

import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Truck, FileCheck, DollarSign, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { FaqSection } from "@/components/shared/FaqSection";

const solutionPillars = [
  {
    title: "Haulage Dispatch & Subcontractor Coordination",
    desc: "Seamlessly combine internal drivers and external subcontractor capacity on a single unified dispatch board.",
    icon: Truck,
    href: "/solutions/haulage-dispatch",
    points: [
      "Assign owned trucks or delegate to subcontractors with 1 tap",
      "Real-time acceptance tracking from the subcontractor portal",
      "Live GPS tracking for owned and subcontracted drivers",
      "Eliminate repetitive phone calls and scattered WhatsApp chats",
    ],
  },
  {
    title: "Digital Dockets & Proof of Delivery",
    desc: "Instant delivery confirmation with 3-tap photo, document, and signature capture right from the driver app.",
    icon: FileCheck,
    href: "/solutions/digital-dockets",
    points: [
      "Offline-capable photo docket capture for remote quarry pits",
      "Customer signature capture with instant timestamping",
      "Automatic linking of paper dockets to the live job record",
      "Client portal immediate self-service docket downloads",
    ],
  },
  {
    title: "Job-to-Invoice & Commercial Control",
    desc: "Lock in agreed client rate cards and subcontractor pay rates at job creation to automate error-free invoicing.",
    icon: DollarSign,
    href: "/solutions/job-to-invoice",
    points: [
      "Support per-tonne, per-load, hourly, and fixed fee rates",
      "Separate client charge rate cards and subcontractor pay rates",
      "Direct 2-way Xero integration with automatic invoice sync",
      "Cut invoice processing time from 3 weeks to under 48 hours",
    ],
  },
  {
    title: "Audit-Ready Operations & Compliance",
    desc: "Maintain verifiable audit trails, driver break logs, and vehicle document expiry tracking automatically.",
    icon: ShieldAlert,
    href: "/solutions/audit-ready-operations",
    points: [
      "Complete action-level audit trail with user timestamps",
      "Driver licence, induction, and permit expiry alerts",
      "Break & rest period recording for operational compliance",
      "Chain of Responsibility evidence readily available",
    ],
  },
];

export function SolutionsPage() {
  return (
    <MainLayout>
      <section className="pt-32 pb-20 bg-gradient-to-b from-neutral-50/80 via-white to-white text-neutral-900 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4"
          >
            Operational Solutions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 max-w-4xl mx-auto"
          >
            Built for how bulk haulage operators actually operate.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed"
          >
            Replace spreadsheets, lost paper dockets, and invoice delays with an operator-proven platform built specifically for bulk haulage.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex justify-center"
          >
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-bold cursor-pointer shadow-xs">
                Book a 20-minute demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {solutionPillars.map((sol) => {
              const IconComp = sol.icon;
              return (
                <div key={sol.title} className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-xs hover:border-[#E8652B] hover:shadow-sm transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E8652B] mb-6">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-black text-neutral-900">{sol.title}</h3>
                  <p className="text-sm text-neutral-600 mt-2 leading-relaxed">{sol.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {sol.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-neutral-700">
                        <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={sol.href} className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold text-[#E8652B] hover:text-[#D05520]">
                    Learn more about {sol.title.split("&")[0]} →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FaqSection />
    </MainLayout>
  );
}

export default SolutionsPage;

"use client";

import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { FaqSection } from "@/components/shared/FaqSection";

const priorityIndustries = [
  {
    name: "Bulk Haulage",
    desc: "Per-tonne and per-load transport, high docket volume, owned and subcontractor fleet coordination.",
    href: "/industries/bulk-haulage",
    highlights: ["Per-tonne rate cards", "Subcontractor pay splits", "Digital docket workflow"],
  },
  {
    name: "Earthworks Logistics",
    desc: "Project-based demand spikes, tipper allocation, subcontractor delegation, and head-contractor reporting.",
    href: "/industries/earthworks",
    highlights: ["Project rate cards", "Site-level tracking", "Head-contractor compliance"],
  },
  {
    name: "Quarries & Aggregates",
    desc: "Low-connectivity sites, weighbridge dockets, per-tonne rates, and fast short-haul cycle dispatch.",
    href: "/industries/quarries-and-aggregates",
    highlights: ["Offline driver app", "Weighbridge docket capture", "Rapid cycle tracking"],
  },
  {
    name: "Civil Construction",
    desc: "Mixed internal and external fleets, major project tracking, safety document management, and audit preparedness.",
    href: "/industries/civil-construction",
    highlights: ["Chain of Responsibility evidence", "Azure document vault", "Audit trails"],
  },
  {
    name: "Construction Logistics",
    desc: "Multiple material types, external subcontractor networks, digital POD, and client-specific invoicing rules.",
    href: "/industries/construction-logistics",
    highlights: ["Client portal access", "Multi-rate structures", "Instant POD sharing"],
  },
  {
    name: "Tipper Fleets",
    desc: "High job volume, mixed hourly and per-load rate structures, driver scheduling, and daily dispatch pressure.",
    href: "/industries/tipper-fleets",
    highlights: ["Driver availability", "Hourly & load rate cards", "Live job board"],
  },
];

export function IndustriesPage() {
  return (
    <MainLayout>
      <section className="pt-32 pb-20 bg-gradient-to-b from-neutral-50/80 via-white to-white text-neutral-900 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4"
          >
            Tailored Industry Solutions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 max-w-4xl mx-auto"
          >
            Purpose-built for heavy materials & construction transport.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed"
          >
            From bulk hauliers and quarry fleets to civil logistics, discover how HaulageOps powers your specific operational workflows.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {priorityIndustries.map((ind) => (
              <div key={ind.name} className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">{ind.name}</h3>
                  <p className="text-sm text-neutral-600 mt-2 leading-relaxed font-normal">{ind.desc}</p>
                  <ul className="mt-6 space-y-2">
                    {ind.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-neutral-700">
                        <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={ind.href} className="mt-8 inline-flex items-center gap-1 text-sm font-bold text-[#E8652B] hover:text-[#D05520]">
                  Explore {ind.name} Workflow →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
    </MainLayout>
  );
}

export default IndustriesPage;

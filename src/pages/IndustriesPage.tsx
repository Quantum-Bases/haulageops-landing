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
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#FFF5EE]/60 via-[#FFF9F5]/30 to-white text-[#0F172A]">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4"
          >
            Tailored Industry Solutions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl mx-auto"
          >
            Purpose-built for heavy materials & construction transport.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed"
          >
            From bulk hauliers and quarry fleets to civil logistics, discover how HaulageOps powers your specific operational workflows.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {priorityIndustries.map((ind) => (
              <div key={ind.name} className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#0F172A]">{ind.name}</h3>
                  <p className="text-sm text-[#64748B] mt-2 leading-relaxed">{ind.desc}</p>
                  <ul className="mt-6 space-y-2">
                    {ind.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-[#334155]">
                        <CheckCircle className="h-4 w-4 text-[#16A34A] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={ind.href} className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-[#E8652B] hover:text-[#D05520]">
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

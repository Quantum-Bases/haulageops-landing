"use client";

import { motion } from "framer-motion";
import { Truck, Shield } from "lucide-react";

const segments = [
  "Quarries & Aggregates",
  "Truck & Dog Tipper Fleets",
  "Bulk Earthworks & Excavation",
  "Muckaway & Clean/Contaminated Spoil",
  "Asphalt & Road Surfacing",
  "Civil Infrastructure Materials",
  "Grain & Agricultural Bulk",
  "Demolition Waste & Recycled Concrete",
  "Mixed Owned + Subcontracted Heavy Fleets",
];

export function IndustrySection() {
  return (
    <section id="industries" className="py-20 sm:py-28 bg-neutral-50/50 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        {/* Center-aligned Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full mb-4 bg-white border border-neutral-300 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#E8652B]" />
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Sector Specialisation
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
            Built for heavy tonnage, not courier parcels.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-600">
            Generic logistics software assumes barcodes and cardboard boxes. HaulageOps is purpose-built for Australian heavy vehicles, bulk density variables, weighbridge tickets, and subcontractor allocations.
          </p>
        </motion.div>

        {/* Centered tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {segments.map((segment, idx) => (
            <motion.span
              key={segment}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
              className="rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-bold text-neutral-900 bg-white cursor-default transition-all duration-200 shadow-xs hover:border-[#E8652B] hover:shadow-sm"
            >
              {segment}
            </motion.span>
          ))}
        </motion.div>

        {/* Centered exclusion note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 max-w-2xl mx-auto flex items-start gap-3 rounded-xl border border-neutral-300 bg-white px-5 py-4 shadow-xs"
        >
          <Truck className="h-5 w-5 shrink-0 mt-0.5 text-[#E8652B]" />
          <p className="text-xs sm:text-sm leading-relaxed text-neutral-600 font-medium">
            <span className="font-extrabold text-neutral-900">Not for parcel delivery or 3PL e-commerce warehousing. </span>
            Engineered exclusively for bulk haulage operators running 15 to 80 heavy combinations (truck & dog, semi-tippers, B-doubles).
          </p>
        </motion.div>
      </div>
    </section>
  );
}

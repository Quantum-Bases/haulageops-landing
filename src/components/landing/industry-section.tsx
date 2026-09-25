"use client";

import { motion } from "framer-motion";
import { Truck } from "lucide-react";

const segments = [
  "Bulk haulage",
  "Earthworks",
  "Quarries and aggregates",
  "Muckaway and spoil removal",
  "Tipper fleets",
  "Civil infrastructure",
  "Construction logistics",
  "Heavy materials",
  "Mixed owned + subcontracted fleets",
];

export function IndustrySection() {
  return (
    <section id="industries" className="py-20 sm:py-28" style={{ background: "#FEFBF9" }}>
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        {/* Center-aligned Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14"
        >
          <div
            className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full mb-4 border"
            style={{ background: "#FAEDE7", borderColor: "#E8D5C4" }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#D86D3C" }}
            />
            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#D86D3C" }}
            >
              Built for the work
            </p>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
            style={{ color: "#202020" }}
          >
            Built for the work.
          </h2>
          <p
            className="mt-5 text-base sm:text-lg leading-relaxed"
            style={{ color: "#5C5047" }}
          >
            HaulageOps is built specifically for bulk haulage and construction
            logistics operators running 15 to 80 vehicles with a mix of owned
            and subcontracted fleets.
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="rounded-full border px-5 py-2.5 text-sm font-semibold cursor-default transition-all duration-200 shadow-xs hover:border-[#D86D3C] hover:text-[#D86D3C] hover:shadow-sm"
              style={{
                borderColor: "#E8D5C4",
                color: "#202020",
                background: "#FFFFFF",
              }}
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
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 max-w-2xl mx-auto flex items-start gap-3 rounded-xl border px-5 py-4"
          style={{ background: "#F7F2EE", borderColor: "#E8D5C4" }}
        >
          <Truck
            className="h-4 w-4 shrink-0 mt-0.5"
            style={{ color: "#8A7060" }}
          />
          <p className="text-sm leading-relaxed" style={{ color: "#8A7060" }}>
            Not for parcel delivery, 3PL and warehouse, or freight forwarding.
            Built specifically for bulk haulage and construction logistics operators
            running 15 to 80 vehicles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

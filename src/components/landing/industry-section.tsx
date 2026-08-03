"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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
    <section id="industries" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Built for the work.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            HaulageOps is built specifically for bulk haulage and construction
            logistics operators running 15 to 80 vehicles with a mix of owned
            and subcontracted fleets.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {segments.map((segment) => (
            <Badge
              key={segment}
              variant="outline"
              className="px-5 py-2.5 text-sm font-medium border-border hover:bg-muted/60 cursor-default"
            >
              {segment}
            </Badge>
          ))}
        </motion.div>

        {/* Exclusion statement — credibility asset */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-muted/40 rounded-xl border border-border p-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
              Not for parcel delivery, 3PL and warehouse, or freight forwarding.
              Built specifically for bulk haulage and construction logistics
              operators running 15 to 80 vehicles.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

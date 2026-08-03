"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, XCircle, MinusCircle } from "lucide-react";

const competitors = [
  { name: "Spreadsheets and WhatsApp", primary: true },
  { name: "Allotrac" },
  { name: "MyTrucking" },
  { name: "Mandata" },
  { name: "HaulTech" },
];

const comparisonFeatures = [
  { feature: "Dedicated subcontractor login", spreadsheets: false, allotrac: false, mytrucking: false, mandata: false, haultech: false },
  { feature: "Client portal (not just tracking link)", spreadsheets: false, allotrac: true, mytrucking: false, mandata: false, haultech: true },
  { feature: "Offline-capable driver app", spreadsheets: false, allotrac: true, mytrucking: true, mandata: true, haultech: true },
  { feature: "Effective-dated rate management", spreadsheets: false, allotrac: false, mytrucking: false, mandata: false, haultech: false },
  { feature: "Built for bulk haulage", spreadsheets: false, allotrac: false, mytrucking: false, mandata: false, haultech: false },
  { feature: "Subbies and clients pay nothing", spreadsheets: false, allotrac: false, mytrucking: false, mandata: false, haultech: false },
];

function CellIcon({ value }: { value: boolean | null }) {
  if (value === true) return <CheckCircle2 className="h-4 w-4 text-emerald-500 mx-auto" />;
  if (value === false) return <XCircle className="h-4 w-4 text-red-400/60 mx-auto" />;
  return <MinusCircle className="h-4 w-4 text-muted-foreground/40 mx-auto" />;
}

export function CompetitiveComparison() {
  return (
    <section id="compare" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Comparing platforms? Ask three questions.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Does my subcontractor get their own login? Does my client get more
            than a tracking link? Can I prove which rate applied last March?
          </p>
        </motion.div>

        {/* Three questions callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-4 mb-16"
        >
          {[
            { q: "Does my subcontractor get their own login?" },
            { q: "Does my client get more than a tracking link?" },
            { q: "Can I prove which rate applied last March?" },
          ].map((item) => (
            <div
              key={item.q}
              className="bg-[#E8652B]/5 border border-[#E8652B]/15 rounded-xl px-5 py-4"
            >
              <p className="text-sm font-semibold text-foreground leading-relaxed">
                {item.q}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[640px]">
            <thead>
              <tr>
                <th className="text-left text-sm font-semibold text-foreground pb-4 pr-4 w-56">
                  Feature
                </th>
                <th className="text-center text-sm font-semibold text-[#E8652B] pb-4 px-3">
                  HaulageOps
                </th>
                {competitors.map((c) => (
                  <th
                    key={c.name}
                    className={`text-center text-sm font-medium pb-4 px-3 ${
                      c.primary ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row, idx) => (
                <tr
                  key={row.feature}
                  className={
                    idx < comparisonFeatures.length - 1
                      ? "border-b border-border"
                      : ""
                  }
                >
                  <td className="py-4 pr-4 text-sm text-foreground">
                    {row.feature}
                  </td>
                  <td className="py-4 px-3 text-center">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mx-auto" />
                  </td>
                  <td className="py-4 px-3 text-center">
                    <CellIcon value={row.spreadsheets} />
                  </td>
                  <td className="py-4 px-3 text-center">
                    <CellIcon value={row.allotrac} />
                  </td>
                  <td className="py-4 px-3 text-center">
                    <CellIcon value={row.mytrucking} />
                  </td>
                  <td className="py-4 px-3 text-center">
                    <CellIcon value={row.mandata} />
                  </td>
                  <td className="py-4 px-3 text-center">
                    <CellIcon value={row.haultech} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Honest concession */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 max-w-2xl mx-auto text-center"
        >
          <p className="text-xs text-muted-foreground leading-relaxed">
            Competitor strengths acknowledged: Allotrac offers an AI assistant,
            MyTrucking has strong reviews and a lower price point, Mandata holds
            UK fleet management certifications. We focus on what HaulageOps
            does that they do not.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

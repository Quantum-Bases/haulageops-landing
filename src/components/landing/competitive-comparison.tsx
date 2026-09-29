"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const comparisonFeatures = [
  {
    feature: "Dedicated subcontractor login & self-serve portal",
    spreadsheets: false,
    allotrac: false,
    mytrucking: false,
    mandata: false,
    haultech: false,
  },
  {
    feature: "Branded Client Portal (live GPS map + digital dockets)",
    spreadsheets: false,
    allotrac: true,
    mytrucking: false,
    mandata: false,
    haultech: true,
  },
  {
    feature: "Offline-capable driver app (quarry pit ready)",
    spreadsheets: false,
    allotrac: true,
    mytrucking: true,
    mandata: true,
    haultech: true,
  },
  {
    feature: "Effective-dated rate matrices (tonne, m³, hour)",
    spreadsheets: false,
    allotrac: false,
    mytrucking: false,
    mandata: false,
    haultech: false,
  },
  {
    feature: "Purpose-built for Australian heavy bulk & tippers",
    spreadsheets: false,
    allotrac: false,
    mytrucking: false,
    mandata: false,
    haultech: false,
  },
  {
    feature: "Subbies & clients pay $0 (unlimited external users)",
    spreadsheets: false,
    allotrac: false,
    mytrucking: false,
    mandata: false,
    haultech: false,
  },
];

function CellIcon({ value }: { value: boolean | null }) {
  if (value === true)
    return <CheckCircle2 className="h-4 w-4 text-neutral-500 mx-auto" />;
  if (value === false)
    return (
      <XCircle className="h-4 w-4 text-neutral-300 mx-auto" />
    );
  return (
    <span className="block w-3 h-0.5 rounded-full mx-auto bg-neutral-300" />
  );
}

export function CompetitiveComparison() {
  return (
    <section id="compare" className="py-20 sm:py-28 bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full mb-4 bg-white border border-neutral-300 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#E8652B]" />
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Direct Benchmark
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
            Comparing platforms? Ask three questions.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-600">
            Does my subcontractor get their own login? Does my client get real-time tracking? Can I verify which rate applied to last month's quarry deliveries?
          </p>
        </motion.div>

        {/* Three questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-4 mb-12"
        >
          {[
            { q: "Does my subcontractor get their own free portal login?" },
            { q: "Does my client get live GPS tracking + signed dockets?" },
            { q: "Can I automatically match weighbridge tickets into Xero?" },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-xl border border-neutral-200 bg-neutral-50/70 px-5 py-4 shadow-xs"
            >
              <p className="text-sm font-bold text-neutral-900 leading-relaxed">
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
          className="overflow-x-auto rounded-xl border border-neutral-200 shadow-xs bg-white"
        >
          <table className="w-full min-w-[680px]">
            <thead>
              <tr className="bg-neutral-100/70 border-b border-neutral-200">
                <th className="text-left text-xs font-bold uppercase tracking-wider py-4 px-5 w-60 text-neutral-600">
                  Feature & Capability
                </th>
                <th className="text-center text-sm font-extrabold py-4 px-4 border-x border-neutral-300 bg-neutral-900 text-white">
                  <span className="flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8652B]" />
                    HaulageOps
                  </span>
                </th>
                {[
                  "Spreadsheets",
                  "Allotrac",
                  "MyTrucking",
                  "Mandata",
                  "HaulTech",
                ].map((name) => (
                  <th
                    key={name}
                    className="text-center text-xs font-semibold py-4 px-3 text-neutral-600"
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {comparisonFeatures.map((row) => (
                <tr key={row.feature} className="hover:bg-neutral-50/50 transition-colors">
                  <td className="py-3.5 px-5 text-sm font-semibold text-neutral-900">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-4 text-center border-x border-neutral-300 bg-neutral-50">
                    <CheckCircle2 className="h-4 w-4 text-[#E8652B] mx-auto" />
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <CellIcon value={row.spreadsheets} />
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <CellIcon value={row.allotrac} />
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <CellIcon value={row.mytrucking} />
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <CellIcon value={row.mandata} />
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <CellIcon value={row.haultech} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Action Link & Honest Note */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs leading-relaxed text-neutral-500 max-w-xl">
            Competitor strengths acknowledged. We focus specifically on what Australian tipper and bulk haulage operators need: multi-portal collaboration, weighbridge tickets, and instant Xero reconciliations.
          </p>
          <Link
            href="/compare"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-[#E8652B] transition-colors"
          >
            View Full Head-to-Head Comparison Matrix
            <ArrowRight className="w-3.5 h-3.5 text-[#E8652B]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

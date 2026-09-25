"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const comparisonFeatures = [
  {
    feature: "Dedicated subcontractor login",
    spreadsheets: false,
    allotrac: false,
    mytrucking: false,
    mandata: false,
    haultech: false,
  },
  {
    feature: "Client portal (not just tracking link)",
    spreadsheets: false,
    allotrac: true,
    mytrucking: false,
    mandata: false,
    haultech: true,
  },
  {
    feature: "Offline-capable driver app",
    spreadsheets: false,
    allotrac: true,
    mytrucking: true,
    mandata: true,
    haultech: true,
  },
  {
    feature: "Effective-dated rate management",
    spreadsheets: false,
    allotrac: false,
    mytrucking: false,
    mandata: false,
    haultech: false,
  },
  {
    feature: "Built for bulk haulage",
    spreadsheets: false,
    allotrac: false,
    mytrucking: false,
    mandata: false,
    haultech: false,
  },
  {
    feature: "Subbies and clients pay nothing",
    spreadsheets: false,
    allotrac: false,
    mytrucking: false,
    mandata: false,
    haultech: false,
  },
];

function CellIcon({ value }: { value: boolean | null }) {
  if (value === true)
    return <CheckCircle2 className="h-4 w-4 text-emerald-500 mx-auto" />;
  if (value === false)
    return (
      <XCircle className="h-4 w-4 mx-auto" style={{ color: "#D8C4B8" }} />
    );
  return (
    <span
      className="block w-3 h-0.5 rounded-full mx-auto"
      style={{ background: "#D8C4B8" }}
    />
  );
}

export function CompetitiveComparison() {
  return (
    <section id="compare" className="pb-20 sm:pb-28" style={{ background: "#FEFBF9" }}>
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
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
              How we compare
            </p>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
            style={{ color: "#202020" }}
          >
            Comparing platforms? Ask three questions.
          </h2>
          <p
            className="mt-5 text-base sm:text-lg leading-relaxed"
            style={{ color: "#5C5047" }}
          >
            Does my subcontractor get their own login? Does my client get more
            than a tracking link? Can I prove which rate applied last March?
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
            { q: "Does my subcontractor get their own login?" },
            { q: "Does my client get more than a tracking link?" },
            { q: "Can I prove which rate applied last March?" },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-xl border px-5 py-4"
              style={{ background: "#FAEDE7", borderColor: "#E8BEAA" }}
            >
              <p
                className="text-sm font-semibold leading-relaxed"
                style={{ color: "#A8552E" }}
              >
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
          className="overflow-x-auto rounded-2xl border"
          style={{ borderColor: "#E8D5C4" }}
        >
          <table className="w-full min-w-[660px]">
            <thead>
              <tr style={{ background: "#F7F2EE" }}>
                <th
                  className="text-left text-xs font-bold uppercase tracking-widest py-4 px-5 w-52"
                  style={{ color: "#8A7060" }}
                >
                  Feature
                </th>
                <th
                  className="text-center text-sm font-bold py-4 px-4 border-x"
                  style={{
                    color: "#D86D3C",
                    borderColor: "#E8D5C4",
                    background: "#FAEDE7",
                  }}
                >
                  HaulageOps
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
                    className="text-center text-xs font-medium py-4 px-3"
                    style={{ color: "#8A7060" }}
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody style={{ background: "#FEFBF9" }}>
              {comparisonFeatures.map((row, idx) => (
                <tr
                  key={row.feature}
                  className={
                    idx < comparisonFeatures.length - 1
                      ? "border-b"
                      : ""
                  }
                  style={{ borderColor: "#E8D5C4" }}
                >
                  <td
                    className="py-3.5 px-5 text-sm font-medium"
                    style={{ color: "#202020" }}
                  >
                    {row.feature}
                  </td>
                  <td
                    className="py-3.5 px-4 text-center border-x"
                    style={{ borderColor: "#E8D5C4", background: "#FFFAF7" }}
                  >
                    <CheckCircle2
                      className="h-4 w-4 text-emerald-500 mx-auto"
                    />
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 max-w-2xl"
        >
          <p className="text-xs leading-relaxed" style={{ color: "#8A7060" }}>
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

"use client";

import { useState } from "react";

function fmt(n: number) {
  return "$" + Math.round(n).toLocaleString();
}

export function RoiCalculator() {
  const [trucks, setTrucks] = useState("");
  const [jobs, setJobs] = useState("");
  const [adminHrs, setAdminHrs] = useState("");
  const [adminRate, setAdminRate] = useState("");
  const [cycle, setCycle] = useState("");
  const [weeklyRev, setWeeklyRev] = useState("");
  const [result, setResult] = useState<{
    hours: number;
    adminSaving: number;
    cashflow: number;
    platformCost: number;
    roi: number;
    payback: number;
  } | null>(null);

  const calculate = () => {
    const trucksN = parseFloat(trucks) || 0;
    const jobsN = parseFloat(jobs) || 0;
    const adminHrsN = parseFloat(adminHrs) || 0;
    const adminRateN = parseFloat(adminRate) || 0;
    const cycleN = parseFloat(cycle) || 0;
    const weeklyRevN = parseFloat(weeklyRev) || 0;
    if (!trucksN || !adminHrsN || !adminRateN) {
      alert("Please fill in at least trucks, admin hours, and admin rate.");
      return;
    }
    const adminSavingPct = 0.45;
    const hrsSavedPerWeek = adminHrsN * adminSavingPct;
    const hrsSavedPerYear = hrsSavedPerWeek * 52;
    const adminSaving = hrsSavedPerYear * adminRateN;
    const cycleImprovement = Math.min(cycleN * 0.75, 21);
    const cashflowGain = (weeklyRevN / 7) * cycleImprovement;
    const platformCost = 1500 + trucksN * 120 * 12;
    const totalBenefit = adminSaving + cashflowGain * 0.05;
    const roi = ((totalBenefit - platformCost) / platformCost) * 100;
    const paybackMonths = platformCost / (totalBenefit / 12);
    setResult({
      hours: hrsSavedPerYear,
      adminSaving,
      cashflow: cashflowGain,
      platformCost,
      roi,
      payback: paybackMonths,
    });
  };

  const field = "w-full rounded-lg border-[1.5px] border-[#D0D8DD] bg-white px-3.5 py-2.5 text-[15px] text-[#0F172A] focus:border-[#E8652B] outline-none";
  const hint = "mt-1 text-xs text-[#7A8A94]";
  const label = "block text-[13px] font-bold text-[#2D4250] mb-1.5";

  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      {/* FORM */}
      <div className="bg-white border border-[#E4E9EC] rounded-2xl p-8">
        <h2 className="text-[22px] font-extrabold text-[#0F172A] mb-6">Your Operation</h2>

        <div className="mb-5">
          <label className={label} htmlFor="trucks">Number of trucks (owned + subcontracted)</label>
          <input id="trucks" type="number" placeholder="e.g. 15" min={1} max={500} value={trucks} onChange={(e) => setTrucks(e.target.value)} className={field} />
        </div>
        <div className="mb-5">
          <label className={label} htmlFor="jobs">Average jobs dispatched per week</label>
          <input id="jobs" type="number" placeholder="e.g. 80" value={jobs} onChange={(e) => setJobs(e.target.value)} className={field} />
          <div className={hint}>Include all loads across owned fleet and subcontractors</div>
        </div>
        <div className="mb-5">
          <label className={label} htmlFor="admin_hrs">Admin hours per week (dispatch + billing)</label>
          <input id="admin_hrs" type="number" placeholder="e.g. 25" value={adminHrs} onChange={(e) => setAdminHrs(e.target.value)} className={field} />
        </div>
        <div className="mb-5">
          <label className={label} htmlFor="admin_rate">Admin hourly cost ($)</label>
          <input id="admin_rate" type="number" placeholder="e.g. 35" value={adminRate} onChange={(e) => setAdminRate(e.target.value)} className={field} />
          <div className={hint}>Fully loaded cost including on-costs</div>
        </div>
        <div className="mb-5">
          <label className={label} htmlFor="invoice_cycle">Current invoice cycle (days from delivery to invoice sent)</label>
          <input id="invoice_cycle" type="number" placeholder="e.g. 21" value={cycle} onChange={(e) => setCycle(e.target.value)} className={field} />
        </div>
        <div className="mb-5">
          <label className={label} htmlFor="weekly_revenue">Approximate weekly invoiced revenue ($)</label>
          <input id="weekly_revenue" type="number" placeholder="e.g. 45000" value={weeklyRev} onChange={(e) => setWeeklyRev(e.target.value)} className={field} />
        </div>
        <button
          onClick={calculate}
          className="w-full rounded-lg bg-[#E8652B] px-4 py-3.5 text-base font-extrabold text-white hover:bg-[#D05520] transition-colors"
        >
          Calculate My ROI →
        </button>
      </div>

      {/* RESULTS */}
      <div className="bg-[#0D1525] rounded-2xl p-8 text-white">
        <h2 className="text-[22px] font-extrabold text-[#E8652B] mb-6">Estimated Annual Value</h2>

        <div className="flex items-center justify-between py-3.5 border-b border-white/10">
          <span className="text-sm text-[#A8BEC8]">Admin time saved per year</span>
          <span className="text-xl font-extrabold">{result ? Math.round(result.hours) + " hrs" : "— hrs"}</span>
        </div>
        <div className="flex items-center justify-between py-3.5 border-b border-white/10">
          <span className="text-sm text-[#A8BEC8]">Admin cost savings per year</span>
          <span className="text-xl font-extrabold text-[#34D399]">{result ? fmt(result.adminSaving) + "/yr" : "—"}</span>
        </div>
        <div className="flex items-center justify-between py-3.5 border-b border-white/10">
          <span className="text-sm text-[#A8BEC8]">Estimated cash-flow improvement</span>
          <span className="text-xl font-extrabold text-[#34D399]">{result ? fmt(result.cashflow) + " unlocked" : "—"}</span>
        </div>
        <div className="flex items-center justify-between py-3.5 border-b border-white/10">
          <span className="text-sm text-[#A8BEC8]">Estimated HaulageOps annual cost</span>
          <span className="text-xl font-extrabold text-[#E8652B]">{result ? fmt(result.platformCost) + "/yr" : "—"}</span>
        </div>

        <div className="mt-5 rounded-xl border border-[#E8652B]/30 bg-[#E8652B]/10 p-5 text-center">
          <div className="text-[48px] font-extrabold leading-none text-[#E8652B]">{result ? Math.round(result.roi) + "%" : "—"}</div>
          <div className="mt-1 text-[13px] text-[#A8BEC8]">Estimated 12-month ROI</div>
        </div>

        <div className="flex items-center justify-between py-3.5 mt-4">
          <span className="text-sm text-[#A8BEC8]">Estimated payback period</span>
          <span className="text-xl font-extrabold">
            {result ? (result.payback < 1 ? "Under 1 month" : Math.round(result.payback) + " months") : "—"}
          </span>
        </div>

        <p className="mt-4 text-[11px] text-[#7A8A94] leading-relaxed">
          Estimates are based on typical operator outcomes. Actual results vary by operation.{" "}
          <a href="/demo" className="text-[#E8652B]">Book a demo</a> for a tailored analysis.
        </p>
      </div>
    </div>
  );
}

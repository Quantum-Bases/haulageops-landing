"use client";

import { useState } from "react";

function fmt(n: number) {
  return "$" + Math.round(n).toLocaleString();
}

const taskIds = ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8"];

export function AdminCostCalculator() {
  const [tasks, setTasks] = useState<Record<string, string>>({});
  const [rate, setRate] = useState("");
  const [result, setResult] = useState<{
    wkHrs: number;
    wkCost: number;
    yrCost: number;
    savedWk: number;
    savedYr: number;
  } | null>(null);

  const setTask = (id: string, value: string) => {
    setTasks((prev) => ({ ...prev, [id]: value }));
  };

  const calculate = () => {
    const total = taskIds.reduce((sum, id) => sum + (parseFloat(tasks[id]) || 0), 0);
    const rateN = parseFloat(rate) || 35;
    const wkCost = total * rateN;
    const yrCost = wkCost * 52;
    const savedWk = total * 0.45;
    const savedYr = savedWk * rateN * 52;
    setResult({ wkHrs: total, wkCost, yrCost, savedWk, savedYr });
  };

  const field = "w-[72px] rounded-md border-[1.5px] border-[#D0D8DD] bg-white px-2.5 py-[7px] text-right text-sm focus:border-[#E8652B] outline-none";

  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      {/* INPUT CARD */}
      <div className="bg-white border border-[#E4E9EC] rounded-2xl p-8">
        <h2 className="text-xl font-extrabold text-[#0F172A] mb-5">Weekly Admin Tasks</h2>
        <p className="text-[13px] text-[#7A8A94] mb-5">
          Enter hours per week spent on each task by your office team (dispatcher, admin, owner).
        </p>

        {[
          { id: "t1", strong: "Dispatch calls & WhatsApp", desc: "Calling or messaging drivers to assign jobs" },
          { id: "t2", strong: "Docket chasing & collection", desc: "Following up paper dockets from drivers" },
          { id: "t3", strong: "Manual data entry", desc: "Typing docket data into spreadsheets or billing system" },
          { id: "t4", strong: "Invoice preparation", desc: "Creating, checking and sending invoices" },
          { id: "t5", strong: "Client queries & disputes", desc: "Answering calls about deliveries, billing, status" },
          { id: "t6", strong: "Subcontractor invoices", desc: "Reconciling and approving sub invoices" },
          { id: "t7", strong: "Reporting & summaries", desc: "Job reports, client summaries, end-of-week reviews" },
          { id: "t8", strong: "Compliance & document chasing", desc: "Tracking sub insurance, driver licences, etc." },
        ].map((task) => (
          <div key={task.id} className="flex items-center gap-3 py-2.5 border-b border-[#F0F3F5] last:border-b-0">
            <div className="flex-1 text-[13px] text-[#2D4250]">
              <strong className="block font-bold text-[#0F172A] mb-0.5">{task.strong}</strong>
              {task.desc}
            </div>
            <input
              type="number"
              min={0}
              step={0.5}
              placeholder="0"
              value={tasks[task.id] ?? ""}
              onChange={(e) => setTask(task.id, e.target.value)}
              className={field}
            />
            <span className="text-xs text-[#7A8A94] w-12 shrink-0">hrs/wk</span>
          </div>
        ))}

        <div className="my-5 rounded-lg bg-[#F6F8FA] p-4">
          <label className="block text-[13px] font-bold text-[#2D4250] mb-1.5" htmlFor="rate">
            Admin hourly cost (fully loaded, $)
          </label>
          <input
            id="rate"
            type="number"
            min={1}
            placeholder="35"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-[120px] rounded-md border-[1.5px] border-[#D0D8DD] px-3 py-2 text-[15px] focus:border-[#E8652B] outline-none"
          />
        </div>

        <button
          onClick={calculate}
          className="w-full rounded-lg bg-[#0F172A] px-4 py-3 text-[15px] font-extrabold text-white hover:bg-[#1E293B] transition-colors"
        >
          Calculate My Admin Cost →
        </button>
      </div>

      {/* OUTPUT CARD */}
      <div className="bg-[#0D1525] rounded-2xl p-8 text-white">
        <h2 className="text-xl font-extrabold text-[#E8652B] mb-5">Your Admin Cost Breakdown</h2>

        <div className="flex items-center justify-between py-3 border-b border-white/10">
          <span className="text-[13px] text-[#A8BEC8]">Total admin hours per week</span>
          <span className="text-[17px] font-extrabold">{result ? result.wkHrs.toFixed(1) + " hrs" : "—"}</span>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-white/10">
          <span className="text-[13px] text-[#A8BEC8]">Admin cost per week</span>
          <span className="text-[17px] font-extrabold text-[#F87171]">{result ? fmt(result.wkCost) + "/wk" : "—"}</span>
        </div>
        <div className="flex items-center justify-between py-3">
          <span className="text-[13px] text-[#A8BEC8]">Admin cost per year</span>
          <span className="text-[17px] font-extrabold text-[#F87171]">{result ? fmt(result.yrCost) + "/yr" : "—"}</span>
        </div>

        <div className="my-5 border-t border-white/15 pt-5">
          <p className="text-[13px] text-[#A8BEC8] mb-3">
            With HaulageOps (estimated 45% reduction in admin tasks):
          </p>
          <div className="flex items-center justify-between py-3 border-b border-white/10">
            <span className="text-[13px] text-[#A8BEC8]">Hours saved per week</span>
            <span className="text-[17px] font-extrabold text-[#34D399]">{result ? result.savedWk.toFixed(1) + " hrs" : "—"}</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-[13px] text-[#A8BEC8]">Annual savings</span>
            <span className="text-[17px] font-extrabold text-[#34D399]">{result ? fmt(result.savedYr) + "/yr" : "—"}</span>
          </div>
        </div>

        <div className="rounded-xl bg-[#E8652B] p-5 text-center">
          <div className="text-[40px] font-extrabold leading-none text-white">{result ? fmt(result.yrCost) : "—"}</div>
          <div className="mt-1 text-[13px] text-white/80">Current annual admin spend</div>
        </div>

        <p className="mt-4 text-[11px] text-[#7A8A94] leading-relaxed">
          45% reduction is based on typical operator experience. Actual savings depend on your operation. Estimates assume 52 working weeks per year.
        </p>

        <a
          href="/demo"
          className="mt-4 block rounded-lg bg-[#E8652B] px-4 py-3 text-center font-extrabold text-white hover:bg-[#D05520] transition-colors"
        >
          Book a Demo to Discuss Your Numbers →
        </a>
      </div>
    </div>
  );
}

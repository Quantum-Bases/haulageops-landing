import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Haulage Rate Card Template: Structure Your Client Rates | HaulageOps",
  description:
    "A practical rate card template for bulk haulage operators — how to structure client rates, what line items to include, and how to build rate cards that connect directly to invoicing.",
};

const rateTypes = [
  {
    badge: "Per Tonne",
    badgeClass: "bg-[#DBEAFE] text-[#1E40AF]",
    strong: "Charge per metric tonne delivered",
    desc: "Measured by weighbridge at source or site",
    best: "Aggregate, sand, fill, gravel, quarry products — any material where weight is measured at point of production",
    example: "$8.50/t",
  },
  {
    badge: "Per Load",
    badgeClass: "bg-[#DCFCE7] text-[#166534]",
    strong: "Flat rate per truck trip regardless of weight",
    desc: "Simpler, but requires trust in load size",
    best: "Muckaway, spoil removal, waste — where loads are roughly consistent and weighing isn't practical",
    example: "$220/load",
  },
  {
    badge: "Per Hour",
    badgeClass: "bg-[#FEF3C7] text-[#92400E]",
    strong: "Charge for time on site or in transit",
    desc: "Usually with a minimum charge (e.g. 4 hour minimum)",
    best: "Standby, waiting time, plant hire components, or variable work where loads vary significantly",
    example: "$135/hr (4hr min)",
  },
  {
    badge: "Fixed / Day Rate",
    badgeClass: "bg-[#F3E8FF] text-[#7E22CE]",
    strong: "Agreed daily or weekly fixed amount",
    desc: "Regardless of loads completed",
    best: "Long-term project placements where client wants cost certainty and a dedicated truck",
    example: "$1,950/day",
  },
];

const clientARows = [
  { material: "20mm Aggregate", site: "Site A — Eastern Zone", rate: "$9.20/t", notes: "Min 40t per call" },
  { material: "10mm Aggregate", site: "Site A — Eastern Zone", rate: "$9.80/t", notes: "Min 40t per call" },
  { material: "Road Base", site: "Site A — All zones", rate: "$8.50/t", notes: "—" },
  { material: "Sand Fill", site: "Site A — Western Zone", rate: "$7.90/t", notes: "Surcharge if <20t" },
  { material: "Standby / Waiting", site: "All sites", rate: "$145/hr", notes: "After 30min free wait" },
];

const clientBRows = [
  { material: "Spoil removal (tipper)", badge: "Per Load", badgeClass: "bg-[#DCFCE7] text-[#166534]", rate: "$195/load", notes: "8–10m³ tipper assumed" },
  { material: "Spoil removal (semi)", badge: "Per Load", badgeClass: "bg-[#DCFCE7] text-[#166534]", rate: "$295/load", notes: "Semi tipper" },
  { material: "Plant placement (tipper)", badge: "Per Hour", badgeClass: "bg-[#FEF3C7] text-[#92400E]", rate: "$130/hr", notes: "4hr minimum" },
  { material: "Fill placement (aggregate)", badge: "Per Tonne", badgeClass: "bg-[#DBEAFE] text-[#1E40AF]", rate: "$10.50/t", notes: "Includes delivery" },
];

const clientCRows = [
  { material: "Dedicated tipper — day rate (Mon–Fri)", rate: "$1,850/day", notes: "Driver + fuel included" },
  { material: "Weekend availability (if requested)", rate: "$2,200/day", notes: "48h notice required" },
  { material: "Additional loads (overflow)", rate: "$280/load", notes: "Above baseline schedule" },
  { material: "Fuel surcharge adjustment", rate: "Quarterly review", notes: "Linked to AIP average diesel price" },
];

const includeItems = [
  "Effective date: When this rate schedule applies from",
  "Rate review clause: When rates can be reviewed (typically 12 months, or linked to fuel / CPI)",
  "Minimum charges: Per load, per call, or per hour minimums",
  "Waiting time: After how many minutes does waiting time apply, and at what rate",
  "Fuel surcharge: Whether a surcharge applies and how it's calculated",
  "Weekend / after-hours: Whether a premium applies outside standard hours",
  "Payment terms: Net 14, Net 30, or your standard",
  "GST statement: Confirm all rates exclude or include GST",
];

const haulageOpsPoints = [
  "The system automatically applies the correct rate for the material and job type",
  "Dockets are linked to the rate — weight in = invoice line item out",
  "No manual calculation needed at billing time",
  "If rates change, update once in the rate card and all future jobs use the new rate",
  "Rate audit trail shows when each rate was last updated and by whom",
];

const badgeClass = "inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide";
const thClass = "px-4 py-3 text-left text-xs font-extrabold uppercase tracking-wider text-[#E8652B] bg-[#0D1525]";
const tdClass = "px-4 py-3 border-b border-[#EEF1F3] align-top text-sm text-[#2D4250]";
const rateValClass = "font-mono text-[15px] font-bold text-[#0F5FAE]";

export default function RateCardTemplatePage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb + Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#FFF9F5] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/resources" className="hover:text-[#E8652B]">Resources</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Rate Card Template</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Tool · Rate Management
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Haulage Rate Card Template
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            How to structure client rates, what line items to include, and how to build rate cards that connect directly to invoicing without manual calculation.
          </p>
        </div>
      </section>

      {/* RATE TYPES TABLE */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">Rate Card Basics: The Four Rate Types</h2>
          <p className="mt-3 text-[#556671] text-sm leading-relaxed max-w-2xl">
            Bulk haulage operators typically use one or more of these rate types depending on the client and job type. A good rate card specifies which type applies to each material and service.
          </p>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-[#E2E8F0]">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className={thClass}>Rate Type</th>
                  <th className={thClass}>How It Works</th>
                  <th className={thClass}>Best For</th>
                  <th className={thClass}>Example</th>
                </tr>
              </thead>
              <tbody>
                {rateTypes.map((rt) => (
                  <tr key={rt.badge} className="even:bg-[#F9FAFB]">
                    <td className={tdClass}><span className={`${badgeClass} ${rt.badgeClass}`}>{rt.badge}</span></td>
                    <td className={tdClass}><strong className="block mb-1 text-[#0F172A]">{rt.strong}</strong>{rt.desc}</td>
                    <td className={tdClass}>{rt.best}</td>
                    <td className={`${tdClass} ${rateValClass}`}>{rt.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* EXAMPLE RATE CARDS */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">Example Rate Cards</h2>
          <p className="mt-3 text-[#556671] text-sm leading-relaxed max-w-2xl">
            These are illustrative structures. Fill in your own rates for each client based on your agreed terms.
          </p>

          {/* CLIENT A */}
          <div className="mt-10 bg-white border border-[#E4E9EC] rounded-2xl p-6">
            <h3 className="text-base font-extrabold text-[#0F172A]">Client A — Civil Construction (Aggregate Supply)</h3>
            <p className="text-xs text-[#7A8A94] mt-1 mb-4">Rate type: Per Tonne · Billing: Weekly · Xero contact: Client A Pty Ltd</p>
            <div className="overflow-x-auto rounded-xl border border-[#E2E8F0]">
              <table className="w-full text-sm">
                <thead>
                  <tr><th className={thClass}>Material</th><th className={thClass}>Site/Zone</th><th className={thClass}>Rate</th><th className={thClass}>Notes</th></tr>
                </thead>
                <tbody>
                  {clientARows.map((row) => (
                    <tr key={row.material} className="even:bg-[#F9FAFB]">
                      <td className={tdClass}>{row.material}</td>
                      <td className={tdClass}>{row.site}</td>
                      <td className={`${tdClass} ${rateValClass}`}>{row.rate}</td>
                      <td className={tdClass}>{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CLIENT B */}
          <div className="mt-6 bg-white border border-[#E4E9EC] rounded-2xl p-6">
            <h3 className="text-base font-extrabold text-[#0F172A]">Client B — Earthworks Contractor (Mixed Materials)</h3>
            <p className="text-xs text-[#7A8A94] mt-1 mb-4">Rate type: Mixed (per load + per hour) · Billing: Fortnightly · Xero contact: Client B Ltd</p>
            <div className="overflow-x-auto rounded-xl border border-[#E2E8F0]">
              <table className="w-full text-sm">
                <thead>
                  <tr><th className={thClass}>Service</th><th className={thClass}>Rate Type</th><th className={thClass}>Rate</th><th className={thClass}>Notes</th></tr>
                </thead>
                <tbody>
                  {clientBRows.map((row) => (
                    <tr key={row.material} className="even:bg-[#F9FAFB]">
                      <td className={tdClass}>{row.material}</td>
                      <td className={tdClass}><span className={`${badgeClass} ${row.badgeClass}`}>{row.badge}</span></td>
                      <td className={`${tdClass} ${rateValClass}`}>{row.rate}</td>
                      <td className={tdClass}>{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CLIENT C */}
          <div className="mt-6 bg-white border border-[#E4E9EC] rounded-2xl p-6">
            <h3 className="text-base font-extrabold text-[#0F172A]">Client C — Long-Term Project (Dedicated Fleet)</h3>
            <p className="text-xs text-[#7A8A94] mt-1 mb-4">Rate type: Day rate + per tonne overflow · Billing: Monthly · Xero contact: Client C Group</p>
            <div className="overflow-x-auto rounded-xl border border-[#E2E8F0]">
              <table className="w-full text-sm">
                <thead>
                  <tr><th className={thClass}>Item</th><th className={thClass}>Rate</th><th className={thClass}>Notes</th></tr>
                </thead>
                <tbody>
                  {clientCRows.map((row) => (
                    <tr key={row.material} className="even:bg-[#F9FAFB]">
                      <td className={tdClass}>{row.material}</td>
                      <td className={`${tdClass} ${rateValClass}`}>{row.rate}</td>
                      <td className={tdClass}>{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDE + HAULAGEOPS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">What to Include in Every Rate Card</h2>
              <ul className="mt-6 space-y-3">
                {includeItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle2 className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">Rate Cards in HaulageOps</h2>
              <p className="mt-4 text-sm text-[#556671] leading-relaxed">
                In HaulageOps, each client has a rate card configured against their account. When a job is created:
              </p>
              <ul className="mt-4 space-y-3">
                {haulageOpsPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle2 className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/platform/rate-management" className="mt-6 inline-flex">
                <Button size="lg" className="bg-[#0F172A] text-white font-semibold hover:bg-[#1E293B]">
                  See Rate Management
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Stop calculating rates manually</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Book a demo and see how HaulageOps turns your rate cards into automatic invoices.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

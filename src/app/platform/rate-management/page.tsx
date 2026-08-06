import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, CalendarClock } from "lucide-react";

export const metadata = {
  title: "Haulage Rate Management Software | HaulageOps",
  description:
    "Manage per-tonne, per-load, hourly and fixed rates with client rate cards, effective dates and separate client/subcontractor pricing — all connected to dispatch.",
};

const heroKickers = [
  "Per-tonne, per-load, hourly, fixed",
  "Client rate cards",
  "Effective dating",
  "Sub pay vs client charge",
  "Xero-connected",
];

const proofStrip = [
  { strong: "4 rate types", sub: "per-tonne, load, hourly, fixed" },
  { strong: "Per-client", sub: "individual rate cards" },
  { strong: "Effective dates", sub: "future rate changes" },
  { strong: "Dual rates", sub: "client charge + sub pay" },
  { strong: "Auto-apply", sub: "at job creation" },
  { strong: "Xero sync", sub: "rate on invoice" },
];

const rateStructures = [
  {
    title: "Per-tonne",
    desc: "charge based on weight delivered — the most common bulk haulage rate type for aggregates, fill, and construction materials",
  },
  {
    title: "Per-load",
    desc: "flat rate per trip completed — useful for standard runs where load weight is consistent",
  },
  {
    title: "Hourly",
    desc: "rate based on time — used for plant movements, standby, site work or variable-duration jobs",
  },
  {
    title: "Fixed-fee",
    desc: "agreed fixed price per job regardless of weight, time or loads — used for project-based pricing or long-distance one-off movements",
  },
];

const clientRateCards = [
  {
    title: "Rate card per client",
    desc: "Each client company in HaulageOps has their own rate card. Rates are set per job type and rate structure for that specific client. Client A's per-tonne aggregate rate has no bearing on Client B's rate for the same service.",
  },
  {
    title: "Rate confirmation before dispatch",
    desc: "Before a job is dispatched, the rate applied to that job is confirmed in the system. Dispatchers can see what rate has been attached. This prevents a job from being dispatched without a rate — which would create billing problems downstream.",
  },
  {
    title: "Client sees their rate card",
    desc: "The rate card set for a client in HaulageOps is the same rate card visible to that client in their portal. There is no separate version to maintain — the rate in the system is the rate the client sees. Rate disputes caused by emailed spreadsheets going stale are eliminated.",
  },
];

const effectiveDatingPoints = [
  "Create a new rate with a future effective date — old rate remains active until then",
  "On the effective date, the new rate becomes the active rate for new jobs",
  "Jobs completed at the previous rate retain the rate at which they were created",
  "Historical financial records are not affected by rate changes made after the job is completed",
  "Rate history is visible in the rate card — you can see when each rate was active",
];

const effectiveDatingUses = [
  "Annual rate review: set new rates before the end of the current period, effective 1st of the new year",
  "Project-based pricing: set a specific rate for the duration of a construction project with a defined end date",
  "Fuel levy adjustments: create a new rate with updated per-tonne pricing from the applicable date",
  "Contract renewals: update rates when a contract is renewed without disturbing historical billing records",
];

const dualRateCards = [
  {
    title: "Client charge rate",
    desc: "The rate you charge the client for the job. Comes from the client's rate card. Applied to the invoice generated for the client. Visible to your admin and finance team. Visible to the client in their portal. Never visible to the subcontractor.",
  },
  {
    title: "Subcontractor pay rate",
    desc: "The rate you pay the subcontractor for completing the job. Set in the subcontractor's rate or agreed at job delegation. Visible to the subcontractor in their portal. Used for your cost tracking and margin reporting. Never shown in the client-facing invoice or client portal.",
  },
  {
    title: "Margin in the system",
    desc: "The margin between client charge and subcontractor pay is tracked within HaulageOps financial reporting. It never lives in a spreadsheet column, never requires mental arithmetic, and is never at risk of being accidentally disclosed to either party through a shared document or email.",
  },
];

const comparisonRows = [
  {
    scenario: "Different rate per client for same service",
    excel: "Separate tab or lookup formula — breaks on restructure",
    haulageops: "Separate rate card per client, auto-applied at job creation",
  },
  {
    scenario: "Rate change taking effect next month",
    excel: "Edit cell now, hope no one applies it to current jobs",
    haulageops: "Set new rate with effective date — old rate stays active until then",
  },
  {
    scenario: "Subcontractor pay vs client charge",
    excel: "Two columns in a spreadsheet someone emails around",
    haulageops: "Dual rates on every job — isolated per portal, private by default",
  },
  {
    scenario: "Check what rate was applied to a past invoice",
    excel: "Find the version of the spreadsheet from that date",
    haulageops: "Rate is stored on the job record — visible in invoice and audit trail",
  },
  {
    scenario: "Dispatcher applies wrong rate to job",
    excel: "Possible — rate is looked up manually",
    haulageops: "Rate auto-applied from client rate card — requires deliberate override",
  },
  {
    scenario: "Client queries their rate",
    excel: "Email them the spreadsheet — which may be outdated",
    haulageops: "Client views live rate card in their portal — always current",
  },
  {
    scenario: "Rate feeds through to Xero invoice",
    excel: "Manual re-entry into Xero or export step",
    haulageops: "Rate on job record flows through to invoice, synced to Xero",
  },
];

const connectedModules = [
  {
    title: "Billing & Invoicing",
    href: "/platform/billing-and-invoicing",
    desc: "Rates set in the rate management module flow directly into invoice generation. When a job is completed, the invoice is built using the rate attached to the job record — no re-entry, no rate lookup, no manual calculation.",
  },
  {
    title: "Xero Integration",
    href: "/platform/integrations/xero",
    desc: "Invoices carrying the job rate sync to Xero via OAuth2. The rate, quantity and job detail go across with the invoice. Payment events from Xero update the job record back in HaulageOps. No double-entry of rate information.",
  },
  {
    title: "Contract Management",
    href: "/platform/contract-management",
    desc: "Contracts in HaulageOps can carry rate schedules. When a contract is set up with a client, the rates in that contract can be linked to the client rate card. Contract expiry alerts ensure rate cards are reviewed when contracts come up for renewal.",
  },
];

const faqs = [
  {
    q: "Can I have different rates for the same service type across different clients?",
    a: "Yes — this is the core design of the rate management module. Each client has their own rate card. You set the rate for each service type (per-tonne aggregate delivery, hourly plant support, etc.) independently for each client. There is no global rate that all clients share — every rate card is client-specific. This means Client A's per-tonne aggregate rate has no effect on Client B's rate for the same service.",
  },
  {
    q: "What happens if a rate changes halfway through a long project?",
    a: "Use effective dating to handle this. Create a new rate with an effective start date matching the point at which the new rate applies. Jobs created before that date use the original rate. Jobs created on or after the effective date use the new rate. Historical jobs and their invoices retain the rate that was active when they were created — no retroactive changes occur. This is important for invoices already raised and for financial record integrity.",
  },
  {
    q: "How does Xero see the rate on an invoice?",
    a: "When an invoice is generated from a completed job in HaulageOps, it carries the rate, quantity and calculated value from the job record. This invoice is then pushed to Xero via the OAuth2 integration. The rate type, unit and amount appear as line items on the Xero invoice — no manual re-entry required. If a job is per-tonne, the tonnage and per-tonne rate appear as the invoice line. If hourly, the hours and hourly rate appear. The Xero invoice is built from the job record, not manually constructed.",
  },
  {
    q: "Can a dispatcher change the rate on a job before dispatch?",
    a: "Rates are applied automatically from the client rate card when a job is created, but the system allows the rate to be reviewed and adjusted before dispatch confirmation if a job requires a different rate. Any rate override is logged in the audit trail with the user identity and timestamp. This creates an auditable record if a rate is ever queried — you can see whether the rate on a completed job matches the client rate card or was overridden at dispatch.",
  },
  {
    q: "Does the subcontractor see the rate I charge the client?",
    a: "No. The client charge rate and the subcontractor pay rate are stored separately on the job record, and each portal shows only the relevant rate. The subcontractor portal shows the subcontractor pay rate only — the client charge rate and your margin are never visible to the subcontractor. The client portal shows the client charge rate only — the subcontractor pay rate is never visible to the client. Both rates are visible internally to your admin, dispatch and management users.",
  },
  {
    q: "What rate types does HaulageOps support?",
    a: "HaulageOps supports four rate structures: per-tonne (charge per unit of weight), per-load (flat rate per completed trip regardless of weight), hourly (rate multiplied by time worked), and fixed-fee (an agreed price for the job regardless of weight, loads or time). A single client rate card can include multiple rate types for different service categories — per-tonne for aggregate delivery, hourly for plant support, fixed-fee for a specific one-off project movement.",
  },
];

export default function RateManagementPage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb */}
      <div className="pt-24 pb-0 bg-[#FFF9F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B]">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/platform" className="hover:text-[#E8652B]">Platform</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Rate Management</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Rate Management
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Apply the right rate to every job without rebuilding a spreadsheet.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Four rate structures. Client-specific rate cards. Effective dating for future rate changes. Separate client charge and subcontractor pay rates on the same job. Rates attach automatically at job creation — no manual lookup required.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/solutions/rate-and-contract-management">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Rate &amp; Contract Management
              </Button>
            </Link>
          </div>
          {/* Kicker pills */}
          <div className="mt-8 flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-300 fill-mode-both">
            {heroKickers.map((pill) => (
              <span key={pill} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F1F5F9] text-xs font-medium text-[#334155]">
                <CheckCircle className="h-3.5 w-3.5 text-[#16A34A] shrink-0" />
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-[#0F172A] py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {proofStrip.map((item) => (
              <div key={item.strong} className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-sm">{item.strong}</span>
                <span className="text-[#94A3B8] text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY HAULAGE RATES ARE DIFFERENT */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Why Haulage Rates Are Different</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Bulk haulage rates do not fit parcel pricing models. This one is built for bulk.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            Parcel TMS platforms charge per consignment or per stop. Bulk haulage pricing is based on weight moved, loads completed, hours worked or fixed job rates — and the same job type might carry a different rate for Client A versus Client B. A construction aggregate client on a long-term contract gets a different per-tonne rate to a one-off civils project. When you also use subcontractors, you need to track what you charge the client and what you pay the sub — on the same job record.
          </p>
          <p className="mt-4 text-[#475569] max-w-3xl leading-relaxed">
            HaulageOps rate management is built for this. It handles four rate structures, supports individual client rate cards, allows rate changes to take effect on future dates without breaking historical records, and stores the client charge rate and subcontractor pay rate separately on every job.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">The four rate structures</h3>
              <ul className="space-y-3">
                {rateStructures.map((r) => (
                  <li key={r.title} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span><strong>{r.title}:</strong> {r.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-[#475569] leading-relaxed">
                A single client may use different rate types across different job types — per-tonne for aggregate delivery, hourly for site preparation support, fixed-fee for a one-off long-haul move. All are managed within the same rate card for that client.
              </p>
            </div>
            {/* Rate card visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden flex flex-col">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest flex items-center justify-between">
                <span>HaulageOps — Client Rate Card</span>
                <span className="bg-[#E8652B] text-white px-2 py-0.5 rounded font-semibold">+ Add Rate</span>
              </div>
              <div className="flex-1 p-6 text-[#94A3B8] text-sm font-mono leading-relaxed">
                <p>Client: <span className="text-white font-semibold">&quot;Balfour Beatty Civil Engineering&quot;</span></p>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#1E293B] text-[#64748B] uppercase tracking-wider text-[10px]">
                        <th className="text-left px-3 py-2 font-semibold">Rate Type</th>
                        <th className="text-left px-3 py-2 font-semibold">Description</th>
                        <th className="text-left px-3 py-2 font-semibold">Unit</th>
                        <th className="text-left px-3 py-2 font-semibold">Client</th>
                        <th className="text-left px-3 py-2 font-semibold">Sub Pay</th>
                        <th className="text-left px-3 py-2 font-semibold">Effective</th>
                        <th className="text-left px-3 py-2 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "Per-Tonne", desc: "Type 1 Crushed Aggregate", unit: "tonne", client: "$18.50", sub: "$14.00", eff: "01 Jan 2026", status: "Active", statusCls: "text-[#4ADE80] bg-[#16A34A]/20" },
                        { type: "Hourly", desc: "Plant Support", unit: "hour", client: "$145.00", sub: "$110.00", eff: "01 Jan 2026", status: "Active", statusCls: "text-[#4ADE80] bg-[#16A34A]/20" },
                        { type: "Per-Load", desc: "Standard 10-tonne Run", unit: "load", client: "$210.00", sub: "$165.00", eff: "01 Mar 2026", status: "Scheduled", statusCls: "text-[#FBBF24] bg-[#FBBF24]/10" },
                      ].map((row) => (
                        <tr key={row.type} className={`border-t border-[#1E293B] ${row.status === "Scheduled" ? "bg-[#FBBF24]/5" : ""}`}>
                          <td className="px-3 py-2.5 text-white font-medium">{row.type}</td>
                          <td className="px-3 py-2.5">{row.desc}</td>
                          <td className="px-3 py-2.5">{row.unit}</td>
                          <td className="px-3 py-2.5">{row.client}</td>
                          <td className="px-3 py-2.5">{row.sub}</td>
                          <td className="px-3 py-2.5">{row.eff}</td>
                          <td className="px-3 py-2.5">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${row.statusCls}`}>{row.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-[#475569] text-xs">
                  Scheduled row shown in a different colour to indicate it is not yet active.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT RATE CARDS */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Client Rate Cards</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Different clients, different rates. Managed per client — not per job.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            Maintaining different rates for different clients on a spreadsheet requires either a separate tab per client or a lookup formula that breaks whenever the structure changes. HaulageOps stores rate cards at the client level. When a job is created for a client, the applicable rates are available from the client's rate card and applied automatically — no manual lookup, no chance of applying the wrong rate.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {clientRateCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EFFECTIVE DATING */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Effective Dating</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Rate changes in future without breaking historical records.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            When you negotiate a new rate with a client that takes effect from the first of next month, you do not want to edit the current rate and accidentally apply the new price to jobs already completed at the old rate. Effective dating in HaulageOps lets you set a future start date on a new rate. Until that date, the existing rate applies. From that date, the new rate activates automatically.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">How effective dating works</h3>
              <ul className="space-y-3">
                {effectiveDatingPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CalendarClock className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-[#475569] leading-relaxed">
                This is important for financial integrity. An invoice for a job completed in January must reflect the rate active in January — even if you are raising that invoice in March and a new rate has since been set.
              </p>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">Practical use cases</h3>
              <ul className="space-y-3">
                {effectiveDatingUses.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-[#475569] leading-relaxed">
                See how contracts connect to rates:{" "}
                <Link href="/platform/contract-management" className="text-[#E8652B] hover:underline font-medium">
                  Contract Management
                </Link>{" "}
                — contracts in HaulageOps can carry their own rate schedules and auto-expiry alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DUAL RATE MANAGEMENT */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Dual Rate Management</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Client charge rate and subcontractor pay rate — separated on every delegated job.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            When you delegate a job to a subcontractor, two commercial transactions are happening simultaneously: you are charging your client, and you are paying your subcontractor. The difference between these two figures is your margin on that job. HaulageOps stores both rates on the same job record, keeps them completely separate, and ensures neither party sees the other&apos;s rate.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {dualRateCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXCEL RATE SHEETS VS HAULAGEOPS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Excel Rate Sheets vs HaulageOps</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            What rate management on a spreadsheet actually costs you.
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="text-left px-5 py-3 font-semibold rounded-tl-xl">Rate management scenario</th>
                  <th className="text-left px-5 py-3 font-semibold">Excel rate sheet</th>
                  <th className="text-left px-5 py-3 font-semibold rounded-tr-xl text-[#E8652B]">HaulageOps</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.scenario} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="px-5 py-3 text-[#0F172A] font-medium border-b border-[#E2E8F0]">{row.scenario}</td>
                    <td className="px-5 py-3 text-[#64748B] border-b border-[#E2E8F0]">{row.excel}</td>
                    <td className="px-5 py-3 text-[#16A34A] font-semibold border-b border-[#E2E8F0]">{row.haulageops}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RELATED PLATFORM FEATURES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related Platform Features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Rate management connects to these platform areas.
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {connectedModules.map((mod) => (
              <div key={mod.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={mod.href} className="hover:text-[#E8652B] transition-colors">
                    {mod.title}
                  </Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#475569]">
            Also see:{" "}
            <Link href="/solutions/rate-and-contract-management" className="text-[#E8652B] hover:underline font-medium">
              Rate &amp; Contract Management
            </Link>{" "}
            — the operational case for keeping rates in the system rather than on a spreadsheet.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Frequently asked about HaulageOps rate management.
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-[#E2E8F0] bg-white rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-[#0F172A] text-sm list-none hover:bg-[#F8FAFC]">
                  {faq.q}
                  <ChevronRight className="h-4 w-4 text-[#94A3B8] shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9]">
                  <p className="pt-4">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See rate management in a live demo.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Book a 20-minute session and see how client rate cards, effective dating, dual rates and Xero connection work together — with your rate structure as the example.
            </p>
          </div>
          <Link href="/demo" className="shrink-0">
            <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
              Book a Demo
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}

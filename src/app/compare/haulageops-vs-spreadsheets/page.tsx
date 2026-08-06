import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "HaulageOps vs Spreadsheets for Haulage Management | HaulageOps",
  description:
    "Detailed comparison of running a haulage operation on spreadsheets vs HaulageOps — where spreadsheets work fine, and exactly where they break under operational weight.",
};

const heroPills = ["$1,500 standard setup", "Data migration included", "2-4 week go-live"];

const strengths = [
  "3–5 owned trucks, no subcontractors",
  "Simple per-load or per-trip billing",
  "1–3 clients with stable rates, no portal expectations",
  "One person managing dispatch who holds all the context",
  "Finance team handling invoicing manually without complaint",
  "No compliance record-keeping requirement beyond basic job logs",
];

const breakCards = [
  {
    num: "1",
    title: "Dispatch visibility",
    p1: "A spreadsheet shows you what you planned this morning. It doesn't show you what's actually happening right now. Once drivers leave the depot, dispatch loses visibility unless drivers call in. With 10+ trucks across multiple sites, you're managing by exception — only hearing about problems after they've already happened.",
    p2: "In HaulageOps, the dispatch board shows live job status updated from the driver app in real time. Status changes — en route, on site, loaded, delivered — are visible to dispatch without a phone call.",
  },
  {
    num: "2",
    title: "Subcontractor coordination",
    p1: "The moment you have subcontractors, a spreadsheet stops being a communication tool. Job assignments go by phone, WhatsApp or text. There's no formal record of who accepted a job, when, on what terms. When something goes wrong — a missed delivery, a disputed rate — the audit trail is a WhatsApp thread.",
    p2: "In HaulageOps, subcontractors get their own portal login. Jobs appear in their queue. They accept or decline. Progress updates come through the app. The dispatch record is in the system, not in a group chat.",
  },
  {
    num: "3",
    title: "Client visibility",
    p1: "Clients who care about their haulage programme — construction PMs, logistics coordinators at quarries, procurement teams — want to know where their jobs are. With a spreadsheet you can't give them that. They phone you. You interrupt dispatch to find out, then call back. Multiply this across multiple jobs and clients and it's a significant time drain.",
    p2: "In HaulageOps, clients log in to their portal and see their live jobs, history, POD documents and invoices. Status calls drop because the information is available without one.",
  },
  {
    num: "4",
    title: "Proof of delivery",
    p1: "Paper dockets work until someone doesn't hand them in, loses them, or they arrive days after the job completed. Photo-by-email works until the inbox becomes unmanageable and matching photos to jobs becomes a manual filing task. Either way, someone in the office is spending time managing docket reconciliation instead of doing more useful work.",
    p2: "In HaulageOps, the driver captures the POD — photo, document, or customer signature — in the driver app at the point of delivery. It's attached to the job record immediately. The docket is already there when you go to invoice.",
  },
  {
    num: "5",
    title: "Rate management",
    p1: "Rates across multiple clients, material types, charge methods (per-tonne, per-load, hourly) and effective dates become a version-control problem in spreadsheets fast. Which rate sheet is current? Has that rate card been updated since last month? Did the new rate apply to this client yet? These questions add up to invoice errors and disputes.",
    p2: "In HaulageOps, each client has a rate card with effective dating. The correct rate is applied automatically when a job completes. Separate client charge rates and subcontractor pay rates are tracked against the same job record.",
  },
  {
    num: "6",
    title: "Xero invoicing",
    p1: "If you use Xero for accounting, every invoice that starts in a spreadsheet requires manual re-entry. Job details, quantities, rates, client codes — entered once in the spreadsheet, then re-entered in Xero. Every re-entry is a potential error and a guaranteed time cost. At 50+ jobs per week this becomes a significant admin burden.",
    p2: "HaulageOps syncs directly with Xero via OAuth2. When an invoice is created in HaulageOps it pushes to Xero automatically. Payment webhooks update the HaulageOps record when Xero marks an invoice paid. No re-entry.",
  },
  {
    num: "7",
    title: "Audit trail",
    p1: "A spreadsheet has no audit trail. You can't see who changed a rate, who added a note to a job, when a job was reassigned, or what the original version of a disputed record said. For a business with any compliance obligation — or simply one that disputes invoices with clients — the absence of an audit trail is a real risk.",
    p2: "HaulageOps logs every action with a timestamp and user identity: job creation, assignment, status change, POD capture, rate edits, invoice creation. The audit trail is available for every job in history.",
  },
];

const comparisonRows = [
  {
    capability: "Cost",
    spreadsheet: "Free (Google Sheets) or Microsoft 365 subscription",
    haulageops: "$1,500 setup + SaaS subscription",
  },
  {
    capability: "Live dispatch board",
    spreadsheet: "Not available — status is only as current as last manual update",
    haulageops: "Real-time board via Socket.io, updated from driver app",
  },
  {
    capability: "Subcontractor coordination",
    spreadsheet: "Phone and WhatsApp — no formal record",
    haulageops: "Dedicated subcontractor portal — own login, accept/decline, progress updates",
  },
  {
    capability: "Client visibility",
    spreadsheet: "Phone calls on request",
    haulageops: "Client portal: live jobs, history, POD, invoices, rate cards",
  },
  {
    capability: "Proof of delivery",
    spreadsheet: "Paper dockets or photos by email — manual reconciliation",
    haulageops: "Digital capture at delivery — photo, document, signature — attached to job record",
  },
  {
    capability: "Rate management",
    spreadsheet: "Separate rate files, version control manual",
    haulageops: "Rate cards per client, effective dating, auto-applied at job completion",
  },
  {
    capability: "Xero integration",
    spreadsheet: "Manual re-entry required",
    haulageops: "OAuth2 sync — invoice creation, payment webhooks",
  },
  {
    capability: "Audit trail",
    spreadsheet: "None",
    haulageops: "Full action log: user, timestamp, detail for every job and system event",
  },
  {
    capability: "Driver app",
    spreadsheet: "Not available",
    haulageops: "iOS + Android, offline-capable, GPS, POD capture, break records",
  },
  {
    capability: "Document management",
    spreadsheet: "File folders, manual tracking of expiry",
    haulageops: "Azure Blob Storage: licences, permits, contracts, dockets — with expiry alerts",
  },
  {
    capability: "Fleet document expiry",
    spreadsheet: "Calendar reminders, manual",
    haulageops: "Fleet records with document expiry alerts built in",
  },
  {
    capability: "Reporting",
    spreadsheet: "Whatever you build yourself",
    haulageops: "Job, financial, driver, client and operational reporting",
  },
];

const timeToMoveSigns = [
  "You manage 10 or more trucks with subcontractors in the mix",
  "Dispatch visibility goes dark once trucks leave the yard",
  "Subcontractor coordination runs through a WhatsApp group",
  "Clients are calling you for job status updates",
  "Your finance team is spending hours matching dockets to invoices",
  "Invoice errors are causing client disputes or delayed payment",
  "You've had a near-miss on a compliance record that didn't exist",
  "A second dispatcher can't pick up where the first one left off",
];

const stayOnSpreadsheets = [
  "You have 3–5 owned trucks with no subcontractor network",
  "You work with 1–2 clients who don't expect a portal",
  "Your billing is simple and your finance person handles it fine",
  "One person runs dispatch and holds all the operational context",
  "The current system causes no disputes, delays or compliance risk",
];

const lifecycleCards = [
  {
    week: "Week 1",
    title: "Setup and data migration",
    p: "The $1,500 standard setup fee covers platform configuration and data migration assistance. Your client records, rate cards, vehicle records and key job history can be imported. We work with whatever format your spreadsheet data is in.",
  },
  {
    week: "Week 2",
    title: "Dispatch and admin training",
    p: "Your dispatch team is trained on the admin panel — job creation, the dispatch board, subcontractor assignment, rate management and billing. Most dispatchers are independently creating and managing jobs within a day of hands-on use.",
  },
  {
    week: "Week 3",
    title: "Driver app rollout and go-live",
    p: "Drivers download the iOS or Android app and are shown the core workflow: receive job, accept, update status, capture POD, submit. Driver training typically takes one session. By week 3–4, the system is the record of operations — spreadsheets become the backup, not the primary.",
  },
];

const faqs = [
  {
    q: "Can I import my spreadsheet data into HaulageOps?",
    a: "Yes. Standard implementation includes data migration assistance. We can import client records, rate cards, vehicle records, driver records and job history from spreadsheet exports (Excel or CSV). The migration scope depends on your data structure and how much history you want to bring across. All of this is included in the $1,500 standard setup fee.",
  },
  {
    q: "How long before I see a return on the $1,500 setup cost?",
    a: "It depends on where your current cost is highest. The most common returns come from: elimination of invoice re-entry into Xero (often 2–4 hours per week for a busy operation); reduction in admin time spent chasing subcontractors and handling client status calls; and faster invoice cycles when dockets are already attached at job completion rather than arriving days late. For an operation running 50+ jobs per week, the ROI is typically measured in weeks. Use the ROI calculator to model it for your numbers.",
  },
  {
    q: "What if my team resists changing from spreadsheets?",
    a: "This is the most common implementation concern and it's a reasonable one. The practical answer is that drivers and dispatch usually adapt quickly once the system removes friction from their daily workflow — no more phoning the office for job updates, no more chasing dockets, no more re-entering data. The resistance typically comes from people who've invested time in building the spreadsheet system. We involve those people in configuration so the HaulageOps setup reflects how the operation actually works, not a generic template.",
  },
  {
    q: "Do subcontractors need to pay anything to use the HaulageOps subcontractor portal?",
    a: "No. Subcontractors get their own login to the HaulageOps subcontractor portal at no cost to them. Only the operating company pays. This matters because it means you can bring your entire subcontractor network onto the system regardless of whether they use any TMS themselves.",
  },
  {
    q: "Can I run HaulageOps alongside my spreadsheets during transition?",
    a: "Yes. Most implementations run HaulageOps as the primary system from go-live, with spreadsheets maintained as a parallel reference for the first 2–4 weeks. The practical recommendation is to commit to HaulageOps as the record of operations from day one — parallel systems create duplicate data entry which defeats the purpose. Set a cutover date and stick to it.",
  },
  {
    q: "What if I want to use MYOB instead of Xero?",
    a: "HaulageOps has a built-in Xero integration (OAuth2 sync with invoice creation and payment webhooks). MYOB integration is available as a separate add-on subject to scoping. Contact us to discuss MYOB requirements before booking a demo.",
  },
  {
    q: "Is there a minimum fleet size to make HaulageOps worthwhile?",
    a: "There's no hard minimum, but we typically see the clearest ROI for operators managing 10 or more trucks with at least a small subcontractor network. Below that threshold, the operational complexity may not justify the subscription cost and implementation effort. We'll tell you honestly during a demo if your fleet size puts you in that category.",
  },
];

const relatedCards = [
  {
    title: "Replacing Spreadsheets",
    href: "/solutions/replacing-spreadsheets",
    p: "A deeper look at the specific workflow changes when you move from spreadsheet-based haulage management to a connected TMS — dispatch board, subcontractor portal, digital POD and Xero sync.",
    cta: "Read more",
  },
  {
    title: "Job to Invoice",
    href: "/solutions/job-to-invoice",
    p: "How the job record flows from job creation through dispatch, delivery, POD capture and into a Xero invoice without re-entering any data along the way.",
    cta: "Read more",
  },
  {
    title: "Customer Story",
    href: "/customers/bulk-haulage-operator",
    p: "A 40-year bulk haulage operator moved from spreadsheets and a WhatsApp group to HaulageOps. What changed in the first 90 days of operations.",
    cta: "Read story",
  },
];

export default function HaulageOpsVsSpreadsheetsPage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb + Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#FFF9F5] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/compare" className="hover:text-[#E8652B]">Compare</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">HaulageOps vs Spreadsheets</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Comparison — Spreadsheets vs HaulageOps
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Spreadsheets work until they don't. Here's exactly where they break.
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Spreadsheets are free, familiar and good enough for simple haulage operations. This page is an honest account of the specific points where they stop being good enough — and when moving to a TMS actually makes economic sense.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                See HaulageOps in 20 minutes
              </Button>
            </Link>
            <Link href="/solutions/replacing-spreadsheets">
              <Button size="lg" variant="outline" className="text-[#0F172A] font-semibold">
                Replacing spreadsheets →
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {heroPills.map((pill) => (
              <span key={pill} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-[#0F172A] bg-[#FFF0E6] border border-[#FED7AA]">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT SPREADSHEETS DO WELL */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Honest starting point</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">What spreadsheets do well</h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-12">
            <div className="space-y-4 text-[#475569] leading-relaxed text-sm">
              <p>
                Spreadsheets deserve credit. For a haulage operator running 3–5 owned trucks on consistent routes with a small number of direct clients, a well-maintained spreadsheet can cover job scheduling, basic rate tracking and a billing summary. The cost is zero beyond the time invested in building it. Everyone on your team already knows how to use Excel or Google Sheets. There's no vendor, no subscription, no implementation project.
              </p>
              <p>
                If you're reading this page, you're probably not in that situation anymore — or you're anticipating it won't describe you for much longer. That's what this page is for.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-4">Where spreadsheets hold up</h3>
              <ul className="space-y-3">
                {strengths.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle2 className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEVEN PLACES SPREADSHEETS BREAK */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Where the limits appear</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Seven places spreadsheets break for haulage operations</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            These aren't theoretical weaknesses — they're the specific operational problems that operators describe when they explain why they started looking at software.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {breakCards.map((card) => (
              <div key={card.num} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.num}. {card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p1}</p>
                <p className="mt-4 text-sm text-[#475569] leading-relaxed">{card.p2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE COMPARISON */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Feature comparison</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Spreadsheets vs HaulageOps — dimension by dimension</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#0F172A] bg-[#F8FAFC] border border-[#E2E8F0]">Capability</th>
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#0F172A] bg-[#FFF0E6] border border-[#E2E8F0]">Spreadsheets</th>
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-white bg-[#0F172A] border border-[#0F172A]">HaulageOps</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.capability} className="bg-white">
                    <td className="px-5 py-4 text-sm font-semibold text-[#0F172A] bg-[#F8FAFC] border border-[#E2E8F0] align-top">{row.capability}</td>
                    <td className="px-5 py-4 text-sm text-[#475569] border border-[#E2E8F0] align-top">{row.spreadsheet}</td>
                    <td className="px-5 py-4 text-sm text-[#475569] border border-[#E2E8F0] align-top">{row.haulageops}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHEN TO MOVE */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">When to move</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">When does the switch actually make sense?</h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-4">Signs it's time to move off spreadsheets</h3>
              <ul className="space-y-3">
                {timeToMoveSigns.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle2 className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-4">When to stay on spreadsheets (honest answer)</h3>
              <ul className="space-y-3">
                {stayOnSpreadsheets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle2 className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-[#475569] leading-relaxed">
                If the above describes you, HaulageOps is probably more system than you need right now. We'd tell you that in a demo rather than have you pay for a setup that doesn't move the needle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Implementation</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">What moving from spreadsheets to HaulageOps actually involves</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {lifecycleCards.map((card) => (
              <div key={card.week} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#E8652B] bg-[#FFF0E6]">{card.week}</span>
                <h3 className="mt-4 font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-[#0D1525] border border-[#1E293B] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 bg-[#1E293B]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E8652B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#94A3B8]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
              <span className="ml-3 text-xs font-semibold text-[#CBD5E1]">Implementation timeline — spreadsheet to live on HaulageOps</span>
            </div>
            <div className="p-6">
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Screenshot or diagram showing a 3-week implementation timeline: Week 1 (setup, data migration, Xero connection), Week 2 (dispatch training, rate card configuration, subcontractor portal invites), Week 3 (driver app rollout, first live jobs in system, parallel running). Shows the transition from spreadsheet-as-primary to HaulageOps-as-primary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">Questions about moving from spreadsheets to HaulageOps</h2>
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

      {/* RELATED PAGES */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related pages</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">More useful reading</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {relatedCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] flex flex-col">
                <h3 className="text-lg font-bold text-[#0F172A]">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">{card.title}</Link>
                </h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed flex-1">{card.p}</p>
                <Link href={card.href} className="mt-4 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-bold">
                  {card.cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to see exactly what changes from spreadsheets to HaulageOps?</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              A 20-minute demo walks through your specific operation — dispatch, subcontractors, billing — and shows you what would actually be different.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a 20-minute demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

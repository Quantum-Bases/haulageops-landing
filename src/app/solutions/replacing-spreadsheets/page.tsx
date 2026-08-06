import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
  X,
} from "lucide-react";

export const metadata = {
  title: "Replace Spreadsheets for Bulk Haulage | HaulageOps",
  description:
    "What breaks when your haulage operation outgrows spreadsheets — the warning signs, the concrete failure modes, and what transitioning to HaulageOps actually involves.",
};

const heroKickers = [
  "$1,500 standard setup",
  "2–4 week onboarding",
  "Data migration included",
  "Honest about fit",
];

const proofStrip = [
  { strong: "$1,500", sub: "Standard setup fee" },
  { strong: "2–4 weeks", sub: "Typical onboarding timeline" },
  { strong: "Included", sub: "Data migration assistance" },
  { strong: "Admin + driver", sub: "Training for both roles" },
  { strong: "Xero connected", sub: "On day one of go-live" },
  { strong: "Ongoing support", sub: "Included in subscription" },
];

const warningSigns = [
  {
    title: "Jobs falling through the cracks",
    desc: "A job was communicated by phone or WhatsApp. Someone was supposed to write it into the run sheet. It did not get written. The truck did not turn up. The client called. This is not a personnel problem — it is a system problem. When the official record of a job is a cell in a spreadsheet that a person has to manually update, the failure mode is human. A structured job record in HaulageOps is created at dispatch and exists until the invoice is paid.",
  },
  {
    title: "Invoice delays from missing dockets",
    desc: "Your billing is waiting on paper dockets that are in driver cabs, on depot floors, or lost somewhere between the delivery site and the office. Your admin team cannot invoice a completed job without evidence of delivery. So invoices queue. The invoice delay is not a billing problem — it is a docket problem that flows downstream into cash flow. Digital POD capture in the driver app puts the docket in the system before the truck moves.",
  },
  {
    title: "Clients calling for status",
    desc: "Your clients call your office to ask where their delivery is. Your admin person checks the spreadsheet, which may or may not have been updated, then calls the driver or the subcontractor to find out. This is a status visibility problem. HaulageOps client portal gives clients self-service access to their live job status — the calls stop because the client already has the answer.",
  },
  {
    title: "No audit trail for disputes",
    desc: "A client disputes an invoice six weeks after the job. You need to show when the delivery happened, at what rate, and that it was signed off at the site. Your evidence is a spreadsheet cell, a WhatsApp message, and a paper docket that may have been filed correctly. HaulageOps logs every action with timestamp and user — job creation, assignment, status changes, POD capture, invoice generation — as a complete, timestamped audit trail.",
  },
  {
    title: "Re-entering data at every step",
    desc: "The job gets written into one spreadsheet. The docket arrives and gets cross-referenced against another. The rate gets looked up in a third document. The invoice gets typed into the accounting system. The same transaction is entered four times across four different places, with the risk of error at each step. In HaulageOps, the data is entered once — at job creation — and flows through to the invoice and Xero automatically.",
  },
  {
    title: "Capacity and subcontractor gaps",
    desc: "When you are managing overflow through subcontractors and the coordination is by phone, you lose visibility the moment the job leaves your control. You cannot give a client a status update on a subcontracted job without calling the sub. You cannot see your sub network utilisation without building a separate report. The subcontractor portal in HaulageOps keeps subcontracted work on your dispatch board with the same status visibility as owned trucks.",
  },
];

const concreteProblems = [
  {
    title: "The docket in the driver's cab",
    before: "Monday morning, a driver completes a 20-tonne aggregate delivery. The weighbridge ticket is in his cab. He finishes his second run, parks the truck, and goes home. The weighbridge ticket is still in the cab. Tuesday he does not come in — rostered off. Wednesday he is back and hands the ticket to admin. Admin cross-references it against the run sheet, finds the job entry, looks up the rate card (a separate Excel file), calculates the charge, builds the invoice in Xero, and emails it to the client. The job ran Monday. The invoice arrives Wednesday at the earliest, probably Thursday. Meanwhile the client has not been reminded that they owe you money for work already done.",
    after: "In HaulageOps: driver captures the weighbridge document in the driver app at the site. It attaches to the job record. Admin sees it immediately. Invoice is generated from the job record — rate already applied at dispatch — on Monday afternoon.",
  },
  {
    title: "The WhatsApp message as a job record",
    before: "A client calls at 7am and asks for two loads of road base to Site B. The dispatcher sends a WhatsApp to Driver 4: \"Site B, 2 loads road base, 8am start.\" Driver 4 replies \"ok\". That is the job record. No rate is attached. No reference number exists. No entry is made in the run sheet until someone gets around to it. At end of month, when admin is pulling together the invoice for that client, they search back through WhatsApp messages to reconstruct what happened. They find the message, guess at the rate from the rate card (which may or may not reflect what was agreed), build the invoice, and send it. The client has no context for what those charges relate to. A query comes in two days later. Admin goes back to the WhatsApp thread.",
    after: "In HaulageOps: the client request becomes a structured job record at creation — client, site, material, rate, scheduled time. The driver is assigned and notified. The job exists as a single record from creation through to paid invoice.",
  },
  {
    title: "Rate in one spreadsheet, invoice in another",
    before: "Your rate cards are in an Excel workbook. You have 12 clients, each with different rates for different material types, with some rates that were updated after a fuel levy negotiation six months ago. The workbook has a tab per client. Some tabs have been updated, some have not. When admin builds an invoice, they open the rate card workbook, find the client tab, find the material type, confirm the correct current rate, and type it into the invoice. Some of the time this is correct. Some of the time the wrong tab is open. Some of the time the rate was changed and the workbook was not updated. The invoice goes out at the wrong rate. The client either pays without noticing or queries it three weeks later. Either outcome has a cost.",
    after: "In HaulageOps: rate cards are configured per client in the rate management module with effective dating. The correct rate applies automatically when the job is created. There is no lookup, no cross-reference, no manual rate entry at invoice time.",
  },
  {
    title: "No client visibility without an admin call",
    before: "A key client site manager calls at 2pm asking whether the afternoon load is on the way. Your dispatcher checks the spreadsheet — if it is up to date — then calls the driver. Driver says he is 20 minutes out. Dispatcher calls the site manager back. The site manager has been given an estimate that is already 5 minutes old because the call chain took time. In a fast-moving construction environment, this is a regular interruption to your admin team's day and an unsatisfying experience for the client, who expected you to have the information readily available.",
    after: "In HaulageOps: the client logs into their portal and sees the job status — En Route, On Site, Delivered — updated by the driver without admin intervention. The call does not happen.",
  },
];

const lifecycleSteps = [
  {
    num: "01",
    title: "Setup — $1,500 standard",
    desc: "The standard setup fee covers system configuration for your operation: your clients, your rate cards, your drivers, your vehicles, your subcontractors, and your Xero connection. Enterprise setups with more complex rate structures, multiple depots, or custom configuration requirements are scoped separately — typically around $6,500. Setup is a one-time cost; your subscription is the ongoing SaaS fee.",
  },
  {
    num: "02",
    title: "Data migration assistance",
    desc: "Your existing data — client list, rate cards, driver records, vehicle register — does not need to be re-entered manually. Data migration assistance is included in the setup: we help you bring the structured data from your spreadsheets into HaulageOps. Historical job records from the spreadsheet era remain in your spreadsheets for reference — HaulageOps starts from your go-live date.",
  },
  {
    num: "03",
    title: "Training for admin and drivers",
    desc: "Training is included for the admin and dispatch team — job creation, rate application, dispatch board, billing, reporting — and for the driver app. Driver app training is typically a short session: install the app, log in, receive a test job, capture POD. Most drivers are comfortable with the app within the first day of live operations. Dispatcher training is more detailed, typically a half-day session.",
  },
  {
    num: "04",
    title: "2–4 week onboarding timeline",
    desc: "The typical onboarding runs 2–4 weeks from sign-up to go-live. This covers setup configuration, data migration, training, and a parallel-run period if you choose one. The timeline varies depending on the complexity of your rate structure and the number of client and driver records being migrated. We will give you a specific timeline estimate when we scope your setup.",
  },
  {
    num: "05",
    title: "Go-live",
    desc: "Go-live typically happens on a Monday — all dispatching moves to HaulageOps, drivers receive their jobs through the app, and the first jobs start generating digital POD and feeding into the billing module. Most operations continue to reference their old spreadsheets for historical data for the first few weeks while the HaulageOps job history builds up. Your spreadsheets do not disappear — you just stop creating new records in them.",
  },
  {
    num: "06",
    title: "Ongoing support",
    desc: "Ongoing support is included in the subscription. If you have a question about how to configure a new rate card, why an invoice is not syncing to Xero, or how to onboard a new subcontractor to the portal, support is available. We are not an enterprise software vendor with a ticketing queue and 5-day SLAs. We are a focused product team serving one type of operator, and we respond accordingly.",
  },
];

const replaceRows = [
  { now: "Run sheet spreadsheet (manually updated)", replaced: "Real-time dispatch board — jobs created at dispatch, status updated by drivers from the app" },
  { now: "Rate card Excel workbook (per-client tabs)", replaced: "Rate management module — per-client rate cards with effective dating, applied automatically at job creation" },
  { now: "Paper dockets in driver cabs", replaced: "Digital POD in the driver app — photo, signature, document captured at delivery site, attached to job immediately" },
  { now: "WhatsApp as job communication", replaced: "Firebase push notifications from the dispatch board to the driver app — job assignment confirmed in the system" },
  { now: "Phone calls to check job status", replaced: "Live dispatch board — real-time status from driver app, no phone call required" },
  { now: "Client calling for status updates", replaced: "Client portal — client self-service access to their live job status, no admin involvement" },
  { now: "Manual invoice creation in Xero", replaced: "Invoice generated from completed job record, syncs to Xero automatically — no re-entry" },
  { now: "Subcontractors coordinated by phone", replaced: "Subcontractor portal — dedicated login, job acceptance, status updates back to your board" },
  { now: "No audit trail", replaced: "Comprehensive action log — every job event timestamped and attributed to the user who made it" },
  { now: "Reporting built from spreadsheet exports", replaced: "Management reporting module — job history, financial, driver, client reports available without manual compilation" },
];

const suitedFor = [
  "Run 15–80 vehicles, a mix of owned and subcontracted capacity",
  "Operate in bulk haulage, earthworks, quarries, civil construction, or tipper fleets",
  "Are managing more than one dispatcher or admin person, or growing toward that",
  "Have clients who ask for delivery records, job status, or rate card visibility",
  "Are using Xero and want invoicing to flow from operations without re-entry",
  "Need to manage subcontractor delegation with visibility — not just phone coordination",
  "Have experienced at least one of the warning signs described above",
];

const notRightFit = [
  "Run a single-van courier or parcel delivery operation — this is not the right product for that use case",
  "Operate in 3PL warehousing or freight forwarding — the platform is not designed for those workflows",
  "Have a genuinely simple operation — 3 trucks, one client, one rate, no subcontractors — where the current spreadsheet method works without regular failures",
  "Need MYOB as your primary accounting integration — MYOB integration is available on request but is not standard; confirm before signing up",
];

const faqs = [
  {
    q: "How long does the transition from spreadsheets to HaulageOps take?",
    a: "The typical onboarding timeline is 2–4 weeks from sign-up to go-live. This covers system configuration with your clients, rates, drivers, and vehicles; data migration assistance; training for your admin and dispatch team; and driver app training. The specific timeline depends on the complexity of your rate structure and the volume of records being migrated. We will give you a more precise estimate when we scope your setup during the demo.",
  },
  {
    q: "What happens to our historical data from the spreadsheets?",
    a: "Your historical spreadsheet records stay in your spreadsheets — they are not migrated into HaulageOps. HaulageOps builds its operational record from your go-live date forward. Data migration assistance covers the structured reference data you need on day one: client records, rate cards, driver records, vehicle register, and subcontractor details. Historical job data from previous periods remains in your spreadsheets as your archive for that period.",
  },
  {
    q: "Can we run HaulageOps and our spreadsheets in parallel during the transition?",
    a: "Yes. Some operators run a parallel period for the first week or two — all jobs entered in both HaulageOps and the spreadsheet — to build confidence in the new system before fully cutting over. This adds some admin work during the parallel period but reduces the anxiety of a hard cutover. We would suggest keeping the parallel period short — the learning curve with HaulageOps is not steep, and the longer you run in parallel the longer you are doing double the admin work.",
  },
  {
    q: "What does the standard $1,500 setup actually include?",
    a: "The standard setup fee ($1,500) covers system configuration for your operation: client setup, rate card configuration, driver records, vehicle register, subcontractor records, and Xero connection setup. It includes data migration assistance for the structured reference data and training for your admin, dispatch, and driver teams. The enterprise setup (approximately $6,500) covers more complex configurations — multiple depots, complex rate structures, custom reporting, or integrations beyond the standard Xero connection.",
  },
  {
    q: "Our admin person built all the spreadsheets — will they resist the change?",
    a: "This is a legitimate concern. When someone has built and maintained the operation's spreadsheet system, transitioning to new software can feel like a criticism of what they built. In practice, the operators where this transition goes smoothest are the ones where the admin person was the most frustrated with the spreadsheet limitations — because they are the one fielding the docket chase, the client calls, and the invoice queries every day. The transition is worth discussing with your team before committing — it is a process change, not just a software install.",
  },
  {
    q: "We use MYOB, not Xero. Does that change anything?",
    a: "The standard HaulageOps product integrates with Xero. MYOB integration is available as an add-on but is not part of the standard product — it requires a scoping conversation and is priced separately from the standard setup fee. If MYOB is your primary accounting system, contact us before proceeding to confirm what is available and at what cost. Do not assume MYOB compatibility from the standard product description.",
  },
  {
    q: "Is there a minimum contract term?",
    a: "Subscription terms and minimum commitment periods are discussed as part of the pricing conversation. Contact us or book a demo to discuss what is appropriate for your scale and how confident you are in the transition before committing to a term.",
  },
];

const relatedCards = [
  {
    title: "Platform Overview",
    desc: "The full picture of what HaulageOps replaces your spreadsheet stack with — five role-specific portals around one live job record, from dispatch through to paid invoice.",
    href: "/platform",
    linkLabel: "Platform Overview",
  },
  {
    title: "Implementation",
    desc: "Detail on the setup process, data migration, training, and onboarding timeline — what happens between signing up and going live on your first day of HaulageOps dispatch.",
    href: "/implementation",
    linkLabel: "Implementation detail",
  },
  {
    title: "Pricing",
    desc: "Standard setup ($1,500) and enterprise setup options, subscription model, and what is included in each tier. Book a demo for an exact quote based on your operation.",
    href: "/pricing",
    linkLabel: "Pricing",
  },
  {
    title: "Replacing WhatsApp Dispatch",
    desc: "Specifically about moving job communication off WhatsApp — the structural problems it causes and the job notification and confirmation workflow that replaces it.",
    href: "/solutions/replacing-whatsapp-dispatch",
    linkLabel: "WhatsApp Dispatch",
  },
];

export default function ReplacingSpreadsheetsPage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb */}
      <div className="pt-24 pb-0 bg-[#FFF9F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B]">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/solutions" className="hover:text-[#E8652B]">Solutions</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Replacing Spreadsheets</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Moving Beyond Spreadsheets
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            What breaks when your haulage operation outgrows spreadsheets.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Spreadsheets worked when you had five trucks and one admin person who knew where everything was. At 20 trucks and a subcontractor network, the cracks are structural — not in the spreadsheet, in the method. Here is what that looks like, and what the transition to HaulageOps involves.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                See Pricing
              </Button>
            </Link>
          </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {proofStrip.map((item) => (
              <div key={item.strong} className="flex flex-col items-center justify-center gap-1">
                <span className="text-white font-bold text-sm">{item.strong}</span>
                <span className="text-[#94A3B8] text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* THE WARNING SIGNS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Warning Signs</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            How to tell when you have outgrown a spreadsheet-based operation
          </h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Spreadsheets do not fail dramatically. They fail gradually, then suddenly — a disputed invoice here, a client complaint there, an admin person leaving who took the institutional knowledge with them. These are the patterns that indicate structural problems rather than fixable admin issues.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSigns.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE CONCRETE PROBLEMS */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Concrete Problems</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            What the spreadsheet failure actually looks like in practice
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {concreteProblems.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#64748B] leading-relaxed">{card.before}</p>
                <p className="mt-3 text-sm text-[#16A34A] font-medium leading-relaxed">{card.after}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE TRANSITION */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Transition</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            What moving from spreadsheets to HaulageOps actually involves
          </h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            The transition to HaulageOps is a structured process, not a software install and figure-it-out. Here is what the standard onboarding covers and what you can reasonably expect in terms of timeline and cost.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycleSteps.map((step) => (
              <div key={step.num} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                <span className="text-3xl font-black text-[#E8652B]/20 leading-none">{step.num}</span>
                <h3 className="mt-2 font-bold text-[#0F172A] text-base">{step.title}</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET AFTER TRANSITION */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What You Get After Transition</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The spreadsheet stack — replaced by a connected operating model
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="text-left px-5 py-3 font-semibold rounded-tl-xl">What you have now</th>
                  <th className="text-left px-5 py-3 font-semibold rounded-tr-xl text-[#E8652B]">What it is replaced by in HaulageOps</th>
                </tr>
              </thead>
              <tbody>
                {replaceRows.map((row, i) => (
                  <tr key={row.now} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="px-5 py-3 text-[#334155] font-medium border-b border-[#E2E8F0]">{row.now}</td>
                    <td className="px-5 py-3 text-[#16A34A] font-semibold border-b border-[#E2E8F0]">{row.replaced}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HONEST FIT ASSESSMENT */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Honest Fit Assessment</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-4xl">
            HaulageOps is purpose-built for one type of operator. If that is not you, we will say so.
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="font-bold text-[#0F172A] mb-5">HaulageOps is well suited for operators who:</h3>
              <ul className="space-y-3">
                {suitedFor.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#0F172A] mb-5">HaulageOps is probably not the right fit if you:</h3>
              <ul className="space-y-3">
                {notRightFit.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <X className="h-4 w-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-5 rounded-2xl border border-[#F39A2D] bg-[#FFF8EC]">
                <p className="text-sm text-[#334155] leading-relaxed">
                  Narrowing our fit criteria is not a weakness — it is how we build a product that actually works for the operators it is designed for. We would rather tell you we are not the right fit than sell you something that does not solve your problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently Asked Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Replacing spreadsheets — common questions.
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

      {/* RELATED PAGES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related Pages</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Next steps and related resources
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">
                    {card.title}
                  </Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
                <Link href={card.href} className="mt-3 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  {card.linkLabel} <ArrowRight className="h-3.5 w-3.5" />
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See whether HaulageOps fits your operation — 20-minute demo</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              We will use your operation as the example. If it is not a good fit, we will tell you in the demo rather than after you have signed up.
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

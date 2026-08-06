import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Bulk Haulage Management Software | HaulageOps",
  description:
    "Purpose-built TMS for bulk haulage operators. Manage owned trucks, subcontractors, per-tonne rates, digital POD, client visibility and Xero invoicing.",
};

const proofStrip = [
  { strong: "15–80", label: "vehicles supported" },
  { strong: "5 portals", label: "around one job record" },
  { strong: "Per-tonne", label: "billing built in" },
  { strong: "Offline", label: "driver app" },
  { strong: "Xero", label: "native sync" },
  { strong: "2–4 weeks", label: "typical onboarding" },
];

const breakCards = [
  {
    title: "Dispatch via WhatsApp",
    p: "Job instructions sent by message mean no audit trail, no confirmation loop, and no way to track whether the driver or sub actually picked up the job. When a load is missed or delivered to the wrong site, there is no record of who was told what.",
  },
  {
    title: "Paper dockets in the cab",
    p: "Drivers bring dockets back at the end of the week — or they don't. Dockets get wet, torn or left in a different truck. Accounts can't invoice until dockets arrive, and quantity disputes with clients have no digital evidence to resolve them.",
  },
  {
    title: "Rate sheets separate from invoicing",
    p: "When the rate card lives in Excel and the invoice is raised in Xero manually, rate errors creep in. When a rate changes mid-contract, some invoices go out at the old rate. When a client queries a charge, the rate history doesn't exist.",
  },
  {
    title: "Subcontractor visibility lost at delegation",
    p: "Once a job is handed to a sub by phone or message, the dispatcher has no live status. The client calls asking where the truck is. The dispatcher calls the sub. The sub calls the driver. None of this appears in any record.",
  },
  {
    title: "No client self-service",
    p: "Clients tracking project progress call the dispatcher for delivery confirmation. High-demand clients may call multiple times per day. This absorbs dispatcher time that should be spent on coordination, not answering status queries.",
  },
  {
    title: "CoR obligations with no audit trail",
    p: "Chain of responsibility obligations apply to the operator and to the clients directing the work. Paper records and WhatsApp threads don't produce the timestamped, attributed action log that an audit or incident investigation requires.",
  },
];

const lifecycle = [
  {
    num: "01",
    title: "Create job with tonne rate",
    p: "Dispatcher creates the job in the Admin Panel. Sets material type, delivery point, per-tonne rate from the client rate card, and scheduled date. The rate card is stored against the client — no manual lookup in Excel.",
  },
  {
    num: "02",
    title: "Dispatch to own driver or delegate to sub",
    p: "Assign to an owned driver (push notification via Firebase FCM to the driver app) or delegate to a subcontractor (the sub sees the job in their portal and accepts or declines). Both appear on the same dispatch board.",
  },
  {
    num: "03",
    title: "Driver or sub updates progress",
    p: "Own driver updates via the mobile app — en route, loaded, at site, delivered. GPS position is tracked. Sub drivers update via their own portal. The dispatcher sees live status for both on one board without calling anyone.",
  },
  {
    num: "04",
    title: "Digital docket and signature captured",
    p: "At delivery, the driver photographs the docket and captures a customer signature in the app. Both are stored in Azure and attached to the job record. The docket is already there when accounts go to invoice.",
  },
  {
    num: "05",
    title: "Invoice from job, sync to Xero",
    p: "Billing pulls quantity and rate from the completed job. Draft invoice is created in HaulageOps and synced to Xero via OAuth2. No re-entry. The client can see the invoice in their portal.",
  },
  {
    num: "06",
    title: "Client portal for self-service visibility",
    p: "Client project managers log into their portal to see job status, delivery history, POD documents and invoices. They get the visibility they need without calling the dispatcher. Your rate card with that client is visible to them — not to other clients.",
  },
];

const modules = [
  {
    title: "Dispatch Management",
    href: "/platform/dispatch-management",
    p: "Real-time dispatch board for owned trucks and subcontractors. Assign jobs, track status, see GPS positions. Both own and sub trucks on one view — no switching between systems.",
    bullets: [
      "Live status updates from driver app and sub portal",
      "Socket.io real-time board — no manual refresh",
      "Filter by driver, vehicle, client or job status",
    ],
  },
  {
    title: "Rate Management",
    href: "/platform/rate-management",
    p: "Store per-tonne, per-load and hourly rate cards against each client. Set separate charge rates (what you bill the client) and pay rates (what you pay the sub). Effective dating so rate changes don't break historical invoices.",
    bullets: [
      "Per-tonne, per-load, hourly, fixed-fee rate types",
      "Client-specific rate cards with version history",
      "Separate client charge and subcontractor pay rates",
    ],
  },
  {
    title: "Subcontractor Portal",
    href: "/platform/subcontractor-portal",
    p: "Subcontractors get their own login — no second HaulageOps subscription required. They see their job queue, accept or decline, track with Mapbox maps, and update progress. You see their status without calling them.",
    bullets: [
      "Dedicated login for each subcontractor company",
      "Accept/decline with reason — visible to dispatcher",
      "Job history and documentation per sub",
    ],
  },
  {
    title: "Digital Dockets",
    href: "/solutions/digital-dockets",
    p: "Driver photographs the paper docket or captures a digital docket at site. Customer signs on the driver's phone. Both go to Azure storage, attached to the job. Accounts see the docket before they raise the invoice — not a week later.",
    bullets: [
      "Photo docket capture in driver app",
      "Customer signature on mobile at point of delivery",
      "Stored in Azure, attached to job and invoice",
    ],
  },
  {
    title: "Billing & Invoicing",
    href: "/platform/billing-and-invoicing",
    p: "Invoice is generated from the completed job — quantity and rate already there. Xero sync via OAuth2. Invoice lifecycle: draft, sent, paid, overdue, voided. Client can see invoice in their portal.",
    bullets: [
      "Job-to-invoice in one action — no re-entry",
      "Xero native sync with 6-hourly cron and real-time payment webhooks",
      "Client portal invoice visibility",
    ],
  },
  {
    title: "Haulage Dispatch Solution",
    href: "/solutions/haulage-dispatch",
    p: "The complete dispatch workflow — from job creation through assignment, tracking and completion — built for operators who manage both owned capacity and subcontractor overflow simultaneously.",
    bullets: [
      "One board for owned and subcontracted jobs",
      "Job templates and recurring jobs for repeat work",
      "Firebase push notifications for assignments",
    ],
  },
];

const faqs = [
  {
    q: "How does per-tonne billing work in HaulageOps?",
    a: "Each client has a rate card stored in the system. When you create a job for that client, you select the material and rate type — per tonne, per load, or hourly. The rate is pulled from the card automatically. When the driver completes the job and records the quantity delivered (or you enter it from the weighbridge ticket), the invoice line calculates from quantity times rate. The invoice is then created in HaulageOps and synced to Xero. No manual lookup, no risk of using the wrong rate.",
  },
  {
    q: "How do I handle multiple loads per day from the same driver?",
    a: "Each load is recorded as a job completion event in the driver app. The driver marks the load delivered, captures the docket and signature, and the job resets for the next run if it is a recurring or multi-load job. At the end of the day, you have a complete record of how many loads each driver or truck completed, with dockets attached to each. Invoicing is calculated from total tonnes or loads across all events — not from a manual count at the end of the week.",
  },
  {
    q: "Can I track tonnes delivered versus tonnes contracted?",
    a: "Yes. Jobs are created with a target quantity. As deliveries are completed and quantities recorded, the system tracks delivered against the contract quantity. Management reporting shows this at job level and client level. This is useful when you have a supply contract for a defined volume of material and need to track progress against it without counting paper dockets manually.",
  },
  {
    q: "What happens if I use subcontractors for overflow capacity?",
    a: "Subcontractors access their own portal — they do not need a HaulageOps licence. You delegate the job from the dispatch board to a sub company. The sub sees the job, accepts it, and their driver updates progress through the sub portal. You see their status alongside your own trucks on the same dispatch board. Their completed job data feeds into your invoicing and reporting. The client does not see that work was subcontracted unless you choose to show it.",
  },
  {
    q: "Can clients see delivery status without calling the office?",
    a: "Yes. Each client has login access to the Client Portal. They can see the status of their current jobs, delivery history, POD documents and dockets, and their invoices. The portal shows their specific rate card. It does not show other clients' data, your internal costs, or your subcontractor details. Most clients use this to confirm deliveries on active construction sites without tying up your dispatcher on status calls.",
  },
  {
    q: "Does the driver app work without mobile signal at site?",
    a: "Yes, the driver app is offline-capable. If signal drops at a delivery site or quarry face, the driver can still complete job updates, capture photos and record signatures. The data queues locally and synchronises when connectivity returns. This is confirmed behaviour — not a roadmap item.",
  },
  {
    q: "Is HaulageOps built for bulk haulage or is it a general TMS?",
    a: "HaulageOps is purpose-built for bulk haulage and construction logistics operators managing between 15 and 80 vehicles, with a mix of owned trucks and subcontractors. It is not designed for parcel delivery, 3PL warehousing, or freight forwarding. That narrowness is deliberate — the per-tonne billing model, subcontractor portal, client portal with rate cards, and digital docket workflow are all built around how bulk haulage operations actually run, not adapted from a generic TMS.",
  },
];

const relatedCards = [
  {
    title: "Dispatch Management",
    href: "/platform/dispatch-management",
    p: "The real-time dispatch board for owned trucks and subcontractors — one view, live status, no phone calls for updates.",
  },
  {
    title: "Subcontractor Portal",
    href: "/platform/subcontractor-portal",
    p: "Dedicated portal for your subcontractor network. They accept jobs, update status and access documents — no HaulageOps licence required on their side.",
  },
  {
    title: "Rate Management",
    href: "/platform/rate-management",
    p: "Per-tonne, per-load and hourly rate cards per client with effective dating. The rate is already on the job when you invoice.",
  },
  {
    title: "Haulage Dispatch Solution",
    href: "/solutions/haulage-dispatch",
    p: "The complete job-creation-to-completion workflow for bulk haulage dispatch — owned capacity and sub overflow in one operation.",
  },
];

export default function BulkHaulagePage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb */}
      <div className="pt-24 pb-0 bg-[#FFF9F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B]">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/industries" className="hover:text-[#E8652B]">Industries</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Bulk Haulage</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Bulk Haulage
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Built for bulk haulage operators. Not adapted from something else.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Bulk haulage runs on high frequency, tight margins and paper trails that disappear. HaulageOps handles per-tonne billing, owned and subcontracted dispatch, digital dockets and client visibility — in the workflow bulk haulage actually uses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                See the Platform
              </Button>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-300 fill-mode-both">
            {["Per-tonne & per-load rates", "Digital dockets & POD", "Subcontractor portal included", "Xero invoicing"].map((pill) => (
              <span key={pill} className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-[#334155] bg-[#F1F5F9] border border-[#E2E8F0]">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-[#0F172A] py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 text-center">
            {proofStrip.map((item) => (
              <div key={item.strong} className="flex flex-col items-center justify-center gap-1">
                <strong className="text-white text-2xl font-bold">{item.strong}</strong>
                <span className="text-[#94A3B8] text-xs uppercase tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT BULK HAULAGE ACTUALLY INVOLVES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What Bulk Haulage Actually Involves</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            High volume, short cycles, demanding clients — and a paper trail that doesn&apos;t keep up
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                Bulk haulage is not route freight. The same truck might run eight loads in a day — quarry to site, back again, different material, same client or a different one. Each load generates a docket. Each docket needs to be captured, attached to the right job, and eventually turned into an invoice line. At volume, this process breaks with paper and spreadsheets.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Common job types include quarry-to-site aggregate delivery, spoil removal from excavation sites, fill placement for earthworks contractors, road base supply to construction projects, and bulk material transport between stockpile and processing. The work is high-frequency, often short-cycle, and billing usually tracks quantity rather than distance.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Most bulk haulage operators use a mix of owned trucks and subcontractors. Own trucks are the core capacity; subs fill demand when excavation accelerates or when multiple clients want trucks on the same day. Managing that mix — dispatching to both, getting visibility from both, and billing correctly from both — is where WhatsApp and spreadsheets start failing.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#0F172A] mb-4">Typical operational parties in a bulk haulage job</h3>
              <ul className="space-y-3 text-[#475569] text-sm leading-relaxed">
                {[
                  "Dispatcher — creates job, sets rate, assigns owned driver or delegates to sub",
                  "Own driver — runs the loads, captures docket or signature at site",
                  "Subcontractor — receives delegated job via their own portal, updates progress independently",
                  "Site foreman — receives delivery, signs off on load or quantity",
                  "Client project manager — expects real-time visibility without calling the dispatcher",
                  "Accounts — needs completed dockets attached before raising invoice",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="font-bold text-[#0F172A] mt-8 mb-4">Charging models</h3>
              <ul className="space-y-3 text-[#475569] text-sm leading-relaxed">
                {[
                  "Per tonne — most common for aggregate and fill; billing tracks actual tonnes delivered",
                  "Per load — common where weighbridge tickets are not available; fixed rate per truck movement",
                  "Hourly — used for slower or waiting-time work; billed against driver time records",
                  "Fixed-fee project — less common; used for defined-scope contracts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE SYSTEMS BREAK */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Where Systems Break</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The six points where WhatsApp, paper and Excel stop working
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breakCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW HAULAGEOPS WORKS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">How HaulageOps Works for Bulk Haulage</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The dispatch-to-invoice workflow, built for high-volume short-cycle operations
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycle.map((step) => (
              <div key={step.num} className="bg-[#0F172A] rounded-2xl p-6">
                <span className="text-[#E8652B] font-bold text-2xl">{step.num}</span>
                <h3 className="mt-3 font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">{step.p}</p>
              </div>
            ))}
          </div>

          {/* Dispatch board mockup */}
          <div className="mt-12 rounded-2xl bg-[#0D1525] border border-[#1E293B] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 bg-[#1E293B]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E8652B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#94A3B8]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
              <span className="ml-3 text-xs font-semibold text-[#CBD5E1]">HaulageOps Dispatch Board — Bulk Haulage View</span>
            </div>
            <div className="p-6">
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Screenshot: Admin Panel dispatch board showing multiple active bulk haulage jobs. Left panel shows job list with material type (roadbase, fill, aggregate), client name, tonne rate, and status (dispatched, en route, delivered). Right panel shows map with driver GPS positions. Own trucks shown in blue; subcontractor trucks in orange. One job expanded showing driver name, truck rego, load count for the day, and docket thumbnail attached.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELEVANT MODULES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Relevant Modules</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Platform features that apply directly to bulk haulage operations
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">{card.title}</Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.p}</p>
                <ul className="mt-5 space-y-3">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                      <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={card.href} className="mt-4 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  {card.title} details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently Asked Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Bulk haulage questions about HaulageOps
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
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related Pages</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            More on managing bulk haulage with HaulageOps
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">{card.title}</Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.p}</p>
                <Link href={card.href} className="mt-3 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See how HaulageOps runs a bulk haulage operation</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              20-minute walkthrough of the dispatch board, per-tonne billing, driver app, subcontractor portal and Xero integration — in the workflow bulk haulage actually uses.
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

import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Quarry and Aggregates Transport Management | HaulageOps",
  description:
    "Manage aggregate haul cycles from pit to site. Per-tonne billing, high-frequency short cycles, offline driver app for poor-signal quarry environments.",
};

const proofStrip = [
  { strong: "Offline", label: "app at pit face" },
  { strong: "Per-tonne", label: "billing built in" },
  { strong: "Per load", label: "docket capture" },
  { strong: "Multiple", label: "quarry sites supported" },
  { strong: "Xero", label: "native invoice sync" },
  { strong: "2–4 weeks", label: "onboarding" },
];

const breakCards = [
  {
    title: "Manually tracking loads per truck per day",
    p: "A dispatcher tracking six trucks running ten loads each is managing sixty events per day, manually. If the count comes from driver memory or end-of-day calls, it is wrong before the driver gets home. The invoice built from that count is disputed before it is paid.",
  },
  {
    title: "Dockets pile up in the cab",
    p: "At a quarry, the pit operative hands the driver a paper docket at the loading point. The driver stacks them in the cab. By Friday, there are 50 dockets in the passenger seat across the fleet. Accounts can't invoice until they receive them. Drivers don't always deliver them intact.",
  },
  {
    title: "Invoice disputes about quantities delivered",
    p: "The client says 850 tonnes. Your count says 920 tonnes. The difference is worth real money. Without a digital record per load — with timestamp, GPS position, and driver signature — the dispute is resolved by whoever negotiates better, not by evidence.",
  },
  {
    title: "Poor signal at the pit face",
    p: "Quarries are often in areas with limited mobile coverage. An app that requires connectivity to record a load is useless at the face. Drivers default to paper when the app fails offline — which means you're back to dockets in the cab.",
  },
  {
    title: "Driver downtime at the scales",
    p: "When a weighbridge is in use, trucks queue. That queue time is unproductive but real. Capturing scale weight accurately — and attaching it to the right load record — requires either OCR integration or a reliable manual process. Currently HaulageOps supports photographed scale tickets; automatic OCR capture is on the roadmap.",
  },
  {
    title: "Rate card errors across material types",
    p: "When a client has different rates for road base, drainage aggregate and sand from the same quarry, an invoice raised manually against a spreadsheet rate card will use the wrong rate eventually. Per-load volumes and rates need to be attached to the job at creation, not looked up at invoicing time.",
  },
];

const lifecycle = [
  {
    num: "01",
    title: "Job created with material and rate",
    p: "Dispatcher creates the job with the quarry as origin, delivery site as destination, material type (road base, aggregate, sand) and the per-tonne or per-load rate from the client's rate card. Multiple material types within one project get separate rate lines.",
  },
  {
    num: "02",
    title: "Driver receives job on the app",
    p: "Firebase push notification goes to the driver's phone. The driver accepts the job, sees the quarry loading point address, delivery point, site instructions and material type. The app opens with the run ready — no phone call from the dispatcher needed.",
  },
  {
    num: "03",
    title: "Load recorded at the pit — offline if needed",
    p: "The driver records each load in the app at the loading point. If there is no signal at the pit face, the app records the event offline. Load data queues locally and synchronises when the driver returns to coverage — typically as soon as they leave the quarry entrance. No load is lost because of connectivity.",
  },
  {
    num: "04",
    title: "Docket photograph and delivery signature",
    p: "At the delivery site, the driver photographs the paper docket from the pit operative (the record of what was loaded). The site contact signs on the driver's phone to confirm delivery. Both the docket photo and signature are stored in Azure, attached to the specific load record.",
  },
  {
    num: "05",
    title: "Quantity tracked across all loads",
    p: "As each load completes, the quantity accumulates against the job. The dispatcher sees total tonnes or loads delivered today, per truck and across the fleet. The client can see their project's running total in the Client Portal without calling the office.",
  },
  {
    num: "06",
    title: "Invoice from job quantity — sync to Xero",
    p: "At billing time, total tonnes delivered and the per-tonne rate are already in the system. The invoice is created from the job record — no manual count, no transcription from paper dockets. It syncs to Xero. Each docket is attached as evidence if the client queries the quantity.",
  },
];

const modules = [
  {
    title: "Driver App",
    href: "/platform/driver-app",
    p: "iOS and Android. Offline-capable — confirmed. Drivers record each load, photograph dockets, and capture signatures without needing signal at the quarry face. Data synchronises when connectivity returns. Push notifications via Firebase FCM for job assignments.",
    bullets: [
      "Offline load recording with local queue",
      "Photo docket capture per load event",
      "Customer signature capture on mobile",
      "GPS position recorded per load event",
    ],
  },
  {
    title: "Digital Dockets",
    href: "/solutions/digital-dockets",
    p: "Each load from the quarry gets a digital docket record — driver, time, GPS position, photographed pit docket, and delivery signature. At invoice time, all dockets are already in the system attached to their load events. No searching through cab piles.",
    bullets: [
      "Per-load docket capture — not end-of-day batch",
      "Stored in Azure Blob Storage",
      "Attached to job record, available at invoice time",
      "Accessible by client in the Client Portal",
    ],
  },
  {
    title: "Rate Management",
    href: "/platform/rate-management",
    p: "Set per-tonne and per-load rate cards per client, with different rates per material type. When a client has road base at one rate and drainage aggregate at another, both rate lines sit on the client's card and attach to the correct job type at creation.",
    bullets: [
      "Per-tonne and per-load rate types",
      "Material-type-specific rates per client",
      "Effective dating for rate changes",
      "Separate client charge rate and sub pay rate",
    ],
  },
  {
    title: "Billing & Invoicing",
    href: "/platform/billing-and-invoicing",
    p: "Total quantities per job — tonnes or loads — are already in the system when you go to invoice. The invoice is built from recorded load events, not from a manual count. Xero sync means the invoice goes straight to your accounting system without re-entry.",
    bullets: [
      "Invoice built from recorded load quantity",
      "Xero OAuth2 sync — no re-entry",
      "Dockets attached to invoice as evidence",
      "Invoice visible to client in their portal",
    ],
  },
];

const faqs = [
  {
    q: "What happens if the driver has no signal at the pit face?",
    a: "The driver app is offline-capable. Load events, docket photographs and signatures are recorded locally on the driver's phone when there is no signal. The data queues and synchronises automatically when the device regains connectivity — typically as the truck leaves the quarry site and returns to normal coverage. This is confirmed behaviour built for exactly this environment. Drivers do not need to do anything differently when offline; the app handles the queue transparently.",
  },
  {
    q: "How do I invoice for multiple loads in a single day?",
    a: "Each load is recorded as a separate event in the system, with its own quantity, timestamp and docket. At the end of the day or billing period, the total quantity across all load events is aggregated against the job. The invoice is built from that total — you do not need to count load events or add up quantities manually. If you are billing per load rather than per tonne, the system counts load events rather than summing tonnes. Either way, the invoice comes from the system record, not from end-of-week counting.",
  },
  {
    q: "Can I manage multiple quarry sites in HaulageOps?",
    a: "Yes. Each quarry is set up as a separate origin location in the system with its own address, access instructions, loading point details, and any site-specific notes for drivers. Jobs are created from the relevant quarry origin. Reporting can be filtered by origin site, so you can see load counts, tonnes and revenue by quarry separately. Rate cards can be client-specific and can include different rates for different material types, regardless of which quarry they come from.",
  },
  {
    q: "Does HaulageOps integrate with weighbridge systems?",
    a: "Not currently as a live integration. Drivers photograph the weighbridge ticket and the image is stored in the job record. Weight entry from the ticket is currently a manual step. Direct weighbridge integration and OCR scale ticket capture are both on the roadmap — but we are direct about the fact that they are not available in the current platform. If weighbridge integration is a hard requirement for your operation today, speak to us about the roadmap scope and timeline for your specific situation.",
  },
  {
    q: "How does per-tonne billing work when I don't have a weighbridge on every run?",
    a: "Per-tonne billing in HaulageOps uses the quantity recorded by the driver at each load event. Where a weighbridge ticket is available, the driver records the weight from the ticket. Where a weighbridge is not used, the driver records the estimated or agreed load weight (for example, the rated capacity of the truck). The rate applies to whatever quantity is recorded. If your client has agreed a standard load tonnage per truck type, that can be set as the default load quantity to make recording faster for drivers.",
  },
  {
    q: "Can clients see aggregate delivery quantities without calling the office?",
    a: "Yes. Clients with access to the Client Portal can see running delivery quantities for their project, along with job status, docket records and invoices. This is useful for project managers who need to track aggregate volumes against a project specification or supply contract. They see the numbers directly in the portal — no call to the dispatcher required.",
  },
  {
    q: "Does HaulageOps work for subcontracted aggregate haulage as well as own fleet?",
    a: "Yes. Subcontractor aggregate hauliers access the Subcontractor Portal — a dedicated login for external operators. You delegate jobs to them from the dispatch board. They accept, run the loads, and update progress through their portal. Their completed job data feeds into your quantity records and invoicing. The subcontractor does not need to subscribe to HaulageOps — only your operating company pays the subscription. This is the same model used for tipper overflow in earthworks and other high-demand periods.",
  },
];

const relatedCards = [
  {
    title: "Driver App",
    href: "/platform/driver-app",
    p: "The offline-capable iOS and Android app that handles load recording, docket capture and signatures at the quarry face — even without signal.",
  },
  {
    title: "Digital Dockets",
    href: "/solutions/digital-dockets",
    p: "Per-load docket capture replaces the cab pile. Each load gets a timestamped docket record attached to the job before you invoice.",
  },
  {
    title: "Rate Management",
    href: "/platform/rate-management",
    p: "Per-tonne and per-load rate cards per client, per material type, with effective dating. The rate is on the job at creation — not looked up at invoicing.",
  },
  {
    title: "Bulk Haulage",
    href: "/industries/bulk-haulage",
    p: "Most quarry transport operators also run general bulk haulage. The bulk haulage page covers the full per-tonne workflow including subcontractor and client portal.",
  },
];

export default function QuarriesAndAggregatesPage() {
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
            <span className="text-[#0F172A] font-medium">Quarries &amp; Aggregates</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Quarries &amp; Aggregates
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            High-frequency aggregate haul cycles need a system that works at the speed of the pit.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            A single truck running ten loads a day from the quarry face generates ten dockets, ten delivery records, and ten billing events. Paper can&apos;t keep pace. HaulageOps captures each load digitally — even when there&apos;s no signal at the pit — and builds the invoice from the run sheet, not from a manual count at week&apos;s end.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/driver-app">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Driver App Details
              </Button>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-300 fill-mode-both">
            {["Offline driver app — confirmed", "Per-tonne rate cards", "Digital docket per load", "Quantity-to-invoice"].map((pill) => (
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

      {/* QUARRY HAUL OPERATIONS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Quarry Haul Operations</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            High-frequency, short-cycle, and dependent on quantity accuracy
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                Aggregate haulage from quarry to site is structurally different from most other haulage work. The distances are often short — sometimes under 20 kilometres — but the daily load count per truck is high. A truck running ten loads per day at 25 tonnes per load delivers 250 tonnes before it parks up. Across six trucks, that is 1,500 tonnes. The quantity accuracy of the day&apos;s run is the difference between a correct invoice and a dispute.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Material types vary by quarry and by project: crushed rock, road base, gravel, sand, drainage aggregate, topsoil and screened fill all run the same basic cycle — load at the pit, deliver to site, photograph the docket or get a signature, return. The difference is in the rate (sand and road base often price differently even from the same quarry) and in the site requirements at delivery.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Loading at the pit face is another operational variable. Trucks queue behind the excavator or loader. Load times vary. Trucks don&apos;t always get equal loads. When billing is per-tonne, the quantity recorded per load matters — and that quantity record has to be captured per event, not estimated at the end of the day.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#0F172A] mb-4">Common aggregate materials and job types</h3>
              <ul className="space-y-3 text-[#475569] text-sm leading-relaxed">
                {[
                  "Crushed rock and road base — the highest-volume aggregate type in civil and road construction",
                  "Drainage aggregate and gravel — coarser material for subgrade drainage layers",
                  "Sand — finer-grain material for bedding, filling and landscaping",
                  "Topsoil — used for final cover on earthworks and landscaping projects",
                  "Screened fill — variable composition; used for bulk fill in structures",
                  "Concrete aggregate — sized material delivered to concrete batch plants",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="font-bold text-[#0F172A] mt-8 mb-4">Charging models in quarry haulage</h3>
              <ul className="space-y-3 text-[#475569] text-sm leading-relaxed">
                {[
                  "Per tonne — most common; billing tracks actual tonnes delivered per load event",
                  "Per load — used where consistent truck capacity substitutes for weighbridge evidence",
                  "Hourly — used for slow, waiting-heavy operations or when truck is held at the pit",
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

      {/* WHERE QUARRY OPERATIONS BREAK DOWN */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Where Quarry Operations Break Down</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The specific points where high-frequency quarry haulage outgrows paper and phone
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

      {/* HOW HAULAGEOPS HANDLES QUARRY HAULAGE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">How HaulageOps Handles Quarry Haulage</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Each load captured, each docket stored, each invoice built from the run record
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

          {/* Driver app offline mockup */}
          <div className="mt-12 rounded-2xl bg-[#0D1525] border border-[#1E293B] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 bg-[#1E293B]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E8652B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#94A3B8]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
              <span className="ml-3 text-xs font-semibold text-[#CBD5E1]">HaulageOps Driver App — Quarry Load Capture (Offline Mode)</span>
            </div>
            <div className="p-6">
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Screenshot: Driver mobile app showing offline mode indicator (grey signal icon, &quot;Working offline — will sync when connected&quot; banner). Active job shown: client name, quarry loading point, delivery site. Load count for the day: 7 of estimated 10 loads. Bottom: &quot;Record Load&quot; button — tapped to log each load event. Below that: &quot;Photograph Docket&quot; and &quot;Capture Signature&quot; actions. Last recorded load shown: 11:42 AM, 23.4 tonnes, photographed docket thumbnail visible, pending sync indicator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT CAPABILITY AND ROADMAP */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What HaulageOps Currently Does — and What&apos;s Coming</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Honest about current capability and what is on the roadmap
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="font-bold text-[#0F172A] mb-4">What works today</h3>
              <p className="text-[#475569] leading-relaxed">
                HaulageOps handles the complete quarry haul cycle as it operates now: job creation with per-tonne rate cards, offline-capable driver app for load recording at the pit face, docket photograph capture, customer signature on delivery, quantity tracking across loads, and invoice generation from the job record synced to Xero.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                The driver app operates offline with local data queuing — this is confirmed behaviour, not a roadmap item. Quarry environments with poor signal at the pit face are a known use case the app is tested against.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Multiple quarry sites are supported. Each site operates as a separate origin in the system, with site-specific instructions, loading point details and separate job records per site. Rate cards can be set per client, per material type, and per effective date.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#0F172A] mb-4">What is on the roadmap</h3>
              <p className="text-[#475569] leading-relaxed">
                There are two capabilities that quarry operators frequently ask about that are not yet available in the current platform:
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                <strong>OCR scale ticket capture:</strong> Automatically reading the weighbridge ticket to extract the recorded weight and attach it to the load record. Currently, drivers photograph the scale ticket and the image is stored — the weight is entered manually or estimated. Automatic OCR extraction is on the roadmap.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                <strong>Weighbridge integration:</strong> Direct data feed from the weighbridge system into HaulageOps, eliminating manual ticket capture. This is also on the roadmap and subject to scope discussion for specific installations.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                We include this because buying software on the basis of roadmap promises creates problems later. If OCR or weighbridge integration is a hard requirement for your operation today, the current platform handles it with photographed tickets — and we are direct about what that means for your workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELEVANT PLATFORM FEATURES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Relevant Platform Features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Features that apply most directly to quarry and aggregate operations
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
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
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently Asked Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Quarry and aggregate transport questions about HaulageOps
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
            Related industries and features for quarry transport operators
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">{card.title}</Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.p}</p>
                <Link href={card.href} className="mt-3 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  View page <ArrowRight className="h-3.5 w-3.5" />
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See how HaulageOps handles a quarry haul cycle</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              20-minute demo: job setup with per-tonne rate, driver app offline load capture, docket and signature workflow, quantity-to-invoice in Xero. Bring your current process and we will show you where each step maps.
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

import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Bulk Haulage Operations Guide | HaulageOps",
  description:
    "Complete guide to bulk haulage operations — job lifecycle, rate structures, subcontractor coordination, digital dockets and the software that connects it all.",
};

const industriesList = [
  { label: "Bulk haulage contractors", href: "/industries/bulk-haulage", desc: "multi-client, multi-site, owned fleet + subs" },
  { label: "Earthworks companies", href: "/industries/earthworks", desc: "project-based, large volume, soil and fill movement" },
  { label: "Quarries and aggregate producers", href: "/industries/quarries-and-aggregates", desc: "supply chain from extraction to delivery" },
  { label: "Civil construction", href: "/industries/civil-construction", desc: "materials delivery as part of broader construction programme" },
  { label: "Construction logistics", href: "/industries/construction-logistics", desc: "site supply, mixed material types, complex scheduling" },
  { label: "Tipper fleet operators", href: "/industries/tipper-fleets", desc: "owner of fleet capacity sold to multiple clients" },
  { label: "Muckaway and spoil removal", href: "/industries/muckaway-and-spoil", desc: "excavation waste and spoil disposal" },
];

const lifecycle = [
  {
    num: "1",
    title: "Job creation",
    p1: "A job is created when a client requests a delivery or pickup. Key details recorded at this point: client, pickup location, delivery location, material type, quantity, scheduled date and time, rate to be applied. In many operations, this still happens via phone call or email — which means the information is captured manually into a spreadsheet or, in more organised operations, a TMS.",
    p2: "Job templates and recurring job scheduling reduce the manual effort when jobs repeat on the same route and rate. Address autocomplete (via Google Maps) speeds up location entry and ensures routing data is accurate from the start.",
  },
  {
    num: "2",
    title: "Rate and billing setup",
    p1: "Once a job is created, the billing rate must be determined. This should be automatic — pulled from an existing rate card for that client. In practice, many operations look up the rate manually, which is where billing errors begin. The applicable rate depends on: client, material type, route (sometimes), and rate effective date.",
    p2: "If the operator also uses subcontractors on this job, the subcontractor pay rate must be determined separately — the margin between what the client pays and what the subcontractor earns is the operator's revenue on that capacity.",
  },
  {
    num: "3",
    title: "Assignment and dispatch",
    p1: "The job is assigned to a driver (owned fleet) or delegated to a subcontractor. For owned fleet, the driver receives the job details via their mobile app — pickup location, delivery address, material, any site instructions. For subcontractors, the job appears in their portal where they can accept or decline. Accepted jobs appear on the dispatch board as confirmed.",
    p2: "Real-time dispatch boards give ops managers visibility of what is assigned, what is in progress, and what is unassigned. Without this, assignment happens via phone or WhatsApp — with no record of confirmation and no way to see the full picture at a glance.",
  },
  {
    num: "4",
    title: "Tracking and status updates",
    p1: "Once underway, the job progresses through status stages: en route to pickup, at pickup, loaded, en route to delivery, at delivery site, unloaded, complete. Each status update is timestamped and visible to the ops manager in real time. Clients with portal access see relevant updates without needing to phone.",
    p2: "GPS location tracking shows driver position on a live map. This is phone-based GPS in HaulageOps — the driver's mobile, not hardware telematics. Operators with existing GPS hardware keep it; HaulageOps sits above it as the operations layer.",
  },
  {
    num: "5",
    title: "Proof of delivery (POD)",
    p1: "When the delivery is complete, the driver captures proof. This is the docket — the delivery record that proves the job was done and the quantity delivered. POD capture in a digital system involves: photo of the delivery location or scale ticket, customer signature (if required on site), document upload for paper dockets or scale slips, and quantity confirmation.",
    p2: "All POD is stored in cloud storage, attached to the job record, and visible through the ops panel and client portal immediately. This is the point where paper-based operations most frequently fail — dockets get lost, arrive late, or are illegible when they finally reach the office.",
  },
  {
    num: "6",
    title: "Invoice generation",
    p1: "Once jobs are complete and POD is attached, invoices are generated. In a connected system: the job record contains the quantity, the rate card contains the price, and the invoice is built automatically — draft, reviewed, sent. The invoice attaches the relevant dockets so the client has delivery evidence alongside the bill.",
    p2: "Xero sync means invoices move directly into the accounting system without re-entry. Payment status updates come back via webhook when the client pays — keeping the operations platform current without manual reconciliation.",
  },
];

const rateCards = [
  {
    title: "Per-tonne rate",
    p1: "The most common rate structure in bulk haulage. The client pays a fixed price per tonne of material delivered. The actual charge on any given job depends on the weight delivered — confirmed by a scale ticket or docket weight.",
    p2: "Example: sand delivery at $18/tonne. A 20-tonne load invoices at $360. A 23-tonne load invoices at $414. The rate is fixed; the quantity varies.",
    p3: "Per-tonne rates work well where material weight is consistently measured (scale tickets at quarry or weighbridge) and where the client expects to pay on delivered quantity. They require accurate weight records to invoice correctly — which is why digital docket capture with photo evidence matters.",
  },
  {
    title: "Per-load rate",
    p1: "A fixed price per trip, regardless of the exact quantity in the load. Used where loads are consistent and weighing is impractical, or where the client contract specifies a per-load arrangement.",
    p2: "Example: skip bin pickup and disposal at $85 per load. The driver collects the bin, disposes of the contents, and returns. Each pickup invoices at $85. Simpler billing — but requires accurate load counting, because each trip must be recorded to invoice correctly.",
    p3: "Per-load rates also work well for mixed material or demolition jobs where weighing each load is not practical.",
  },
  {
    title: "Hourly rate",
    p1: "The client pays for time on site or on the road, not for quantity. Common in earthworks and civil construction where a tipper is on-hired to a site for the day or for a period of hours, rather than completing discrete delivery jobs.",
    p2: "Example: tipper on-hire at $145/hr. The driver starts the clock when they arrive on site and stops it when they leave. The invoice is the hours worked multiplied by the rate.",
    p3: "Hourly rate jobs require accurate time records — start time, end time, any breaks. Break and rest recording in the driver app feeds directly into this calculation.",
  },
  {
    title: "Fixed price (day rate or job rate)",
    p1: "A single agreed price for a job or a day's work, regardless of quantity or hours. Used for straightforward contracts where the scope is defined and the client wants a predictable cost.",
    p2: "Example: site supply arrangement at $1,200/day — one truck on call for the site all day, delivering as required. The invoice is flat regardless of the number of loads completed.",
    p3: "Fixed price rates are simple to invoice but require the underlying job record to confirm the day was worked and completed — the job record and any POD serve as the delivery evidence.",
  },
];

const paperFailures = [
  "Dockets left in the cab and not returned for days or weeks",
  "Illegible handwriting, missing quantities or wrong job details",
  "Dockets attributed to the wrong job, client or site",
  "Lost dockets that cannot be recreated — resulting in invoice disputes or write-offs",
  "Invoicing delayed until dockets physically arrive at the office",
];

const invoiceProblems = [
  {
    title: "Missing delivery evidence",
    p: "Invoices cannot be sent without delivery evidence. If dockets are missing, late or disputed, the invoice is held until they are resolved. In paper-based operations, docket reconciliation before invoice runs is a weekly overhead that consistently delays billing by 3–7 days beyond job completion.",
  },
  {
    title: "Manual data re-entry",
    p: "Jobs logged in one system must be re-entered into the billing system. Every re-entry step adds time and introduces errors — wrong quantities, wrong rates, wrong client details. A single billing error that triggers a client query can delay payment by 14–30 days while the dispute is resolved.",
  },
  {
    title: "Rate disagreements",
    p: "If the client's rate expectation differs from the rate the operator applied, the invoice is disputed. Rate disagreements are most common where rates are managed informally — quoted by phone, agreed verbally, not documented in a system rate card. When the rate card is the system of record and visible to the client in their portal, disputes are resolved before the invoice, not after.",
  },
];

const corObligations = [
  "Driver fitness for duty — licence validity, medical fitness, fatigue",
  "Vehicle roadworthiness — registration, inspections, load capacity",
  "Scheduling — not directing drivers to work hours that create fatigue risk",
  "Loading — not directing loads that exceed vehicle capacity",
  "Documentation — maintaining records that demonstrate due diligence",
];

const corRecords = [
  "Driver licence records with expiry dates and verification evidence",
  "Medical fitness records and induction documentation",
  "Vehicle registration, inspection and permit records",
  "Break and rest records demonstrating fatigue management",
  "Job scheduling records showing realistic run times",
  "Subcontractor insurance and compliance documents",
  "An audit trail showing who did what, when, in the system",
];

const softwareCore = [
  "Does the driver app work offline (no signal at quarry or remote site)?",
  "Can subcontractors receive and accept jobs without being a paying customer?",
  "Does the client portal show live job status and invoices — not just reports?",
  "Can rate cards be set per client with effective dating?",
  "Does invoice generation pull directly from the job record — or require re-entry?",
  "Is Xero integration native (not via Zapier or manual export)?",
];

const softwareCost = [
  "What is the setup fee — and what does it include?",
  "Is there a free trial or demo environment with your own data?",
  "What does driver and admin training cover?",
  "How long does implementation take realistically?",
  "Is there ongoing support included or charged separately?",
  "Are subcontractor and client portals included in the subscription?",
];

const portals = [
  { strong: "Admin and Dispatch Panel", desc: "job creation, dispatch board, rate management, billing, fleet and driver records" },
  { strong: "Driver Mobile App", desc: "iOS and Android, offline-capable, GPS, status updates, POD capture" },
  { strong: "Subcontractor Portal", desc: "dedicated login, job queue, accept/decline, delivery confirmation" },
  { strong: "Client Portal", desc: "live job status, POD documents, invoices and rate cards" },
  { strong: "Management Reporting", desc: "financial, operational and compliance visibility across all jobs" },
];

const faqs = [
  {
    q: "What is the difference between a docket and a scale ticket?",
    a: "A docket is the general delivery record for a haulage job — it records that a delivery was made, typically including the date, driver, vehicle, material, quantity and delivery location. A scale ticket is a specific type of docket issued by a weighbridge or on-site scale that records the confirmed weight of a load. In many bulk haulage jobs, the scale ticket is the primary evidence for the per-tonne quantity billed. A job may have a docket (general) and a scale ticket (weight confirmation) as separate documents, both attached to the job record.",
  },
  {
    q: "How do most operators manage subcontractors before using a TMS?",
    a: "The typical pre-TMS approach is phone calls and WhatsApp. The dispatcher calls or messages the subcontractor to confirm availability, sends job details by text or message, receives confirmation informally, and then has no further visibility until the sub calls to say the job is done. Dockets arrive later — sometimes days later — by photo or physically. The operator manually re-enters delivery details to track the job and build the invoice. This works at small volumes but becomes the primary operational bottleneck as the subcontractor network grows.",
  },
  {
    q: "Why does per-tonne billing require accurate docket records?",
    a: "Per-tonne billing invoices on the quantity delivered, not the quantity ordered. If the docket says 18 tonnes were delivered but the invoice says 20 tonnes (based on an estimated or assumed load), the client will dispute it. If the docket is missing, the invoice may need to be held or estimated — both of which create delay or error. Accurate, attached docket records mean the invoice quantity matches the delivery evidence, reducing disputes and speeding up payment.",
  },
  {
    q: "What is Chain of Responsibility and does it apply to subcontractors I engage?",
    a: "Chain of Responsibility (CoR) is legislation in the Australian jurisdiction that distributes road safety compliance obligations across everyone in the transport chain who has influence or control over how transport is conducted. This includes operators, schedulers, loaders and clients — not just drivers. If you engage a subcontractor and direct them to complete jobs within your operation, you have CoR obligations in relation to that engagement. This does not mean you are directly responsible for every action the subcontractor's driver takes, but you are expected to have systems in place to verify that subcontractors you engage are operating appropriately. We recommend taking legal advice on your specific obligations. HaulageOps supports compliance record-keeping; it does not provide legal advice or guarantee compliance outcomes.",
  },
  {
    q: "Is HaulageOps suitable for owner-operators with 5 trucks?",
    a: "HaulageOps is purpose-built for operators managing 15–80 vehicles — typically a mix of owned fleet and subcontracted capacity. Owner-operators with a small number of trucks and simple billing requirements may find it more than they need. The platform is at its most useful when the operational complexity justifies it: multiple subcontractors, multiple clients with different rate cards, a high volume of jobs per week, and invoicing that depends on accurate POD collection. If you are in that range, it is worth a demo. If you are significantly smaller, we will say so.",
  },
  {
    q: "What accounting integrations does HaulageOps support?",
    a: "HaulageOps has a native Xero integration: OAuth2 connection, 6-hourly sync with real-time payment webhooks, invoice creation and payment tracking. MYOB integration is available as an add-on on request (subject to scope assessment). Sage and other integrations are on the roadmap but not currently live. If your accounting system is not Xero, contact us to discuss what is possible.",
  },
  {
    q: "Does HaulageOps include GPS vehicle tracking?",
    a: "HaulageOps tracks driver location via the driver's mobile phone (iOS or Android) — not via hardware telematics devices fitted to vehicles. If you already have GPS hardware in your fleet, you keep it — HaulageOps is the operations and management layer above the hardware, not a replacement for it. Hardware telematics integration is on the roadmap but is not currently live.",
  },
];

const relatedGuides = [
  {
    title: "Subcontractor Management Guide",
    href: "/resources/guides/subcontractor-management",
    p: "How to manage haulage subcontractors without losing control or visibility — from onboarding through to ongoing rate and compliance management.",
  },
  {
    title: "Digital Dockets Guide",
    href: "/resources/guides/digital-dockets",
    p: "What digital docket capture involves, why it matters for invoicing speed, and how offline sync works for sites without reliable connectivity.",
  },
  {
    title: "Haulage Software Buyer's Guide",
    href: "/resources/guides/haulage-software-buyers-guide",
    p: "How to evaluate haulage software without buying the wrong thing — including questions to ask vendors and how to run a meaningful demo.",
  },
];

export default function BulkHaulageOperationsGuidePage() {
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
            <span className="text-[#0F172A] font-medium">Guides</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Operations Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Bulk haulage operations: what actually happens from job creation to invoice.
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            A practical guide for operators managing 15–80 vehicles across owned and subcontracted capacity — covering the full job lifecycle, rate structures, subcontractor coordination and the software that connects it all.
          </p>
        </div>
      </section>

      {/* WHAT IS BULK HAULAGE */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">What is bulk haulage?</h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-12">
            <div className="space-y-4 text-[#475569] leading-relaxed text-sm">
              <p>
                Bulk haulage is the transport of loose, unpackaged materials in large quantities — typically by tipper truck, semi-tipper, walking floor or similar purpose-built vehicle. Unlike parcel delivery or general freight forwarding, bulk haulage deals in materials that are measured by weight (tonnes) or volume (cubic metres), not by item count or pallet.
              </p>
              <p>
                The materials involved vary by industry but typically include: sand, gravel, road base and aggregates (quarry and construction supply); soil, clay, fill material and spoil (earthworks and civil construction); demolition waste, asphalt millings and concrete rubble (muckaway and recycling); agricultural bulk such as grain, fertiliser and feed; and heavy manufactured materials including steel, precast concrete and infrastructure components.
              </p>
              <p>
                Operators in this sector typically run a mix of owned vehicles and subcontracted capacity. A 30-vehicle operation might own 15 tippers and subcontract another 20 from owner-operators or smaller haulage companies on a job-by-job or ongoing basis. Managing both cohorts on the same operation — with different rate structures, different communication methods and different levels of operational control — is the central challenge that makes bulk haulage operationally distinct from owner-operator transport.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-4">Industries that run on bulk haulage</h3>
              <ul className="space-y-3">
                {industriesList.map((item) => (
                  <li key={item.label} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>
                      <Link href={item.href} className="font-semibold text-[#0F172A] hover:text-[#E8652B]">{item.label}</Link>
                      {" — "}{item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                What these operations share: volume-based pricing, subcontracted capacity, multiple active jobs simultaneously, and a job-to-invoice process that depends on accurate delivery records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE JOB LIFECYCLE */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Job Lifecycle</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">How a haulage job moves through operations</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Every haulage job passes through a sequence of states from creation to invoice. Understanding this lifecycle is what separates operators who can invoice quickly from those who spend weeks chasing paperwork.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycle.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <span className="text-[#E8652B] font-bold text-2xl">{step.num}</span>
                <h3 className="mt-3 font-bold text-[#0F172A]">{step.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{step.p1}</p>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{step.p2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RATE STRUCTURES */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Commercial Fundamentals</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Rate structures in bulk haulage</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Haulage rates are not one-size-fits-all. Most operations use different rate types for different job types, and managing this correctly across multiple clients and subcontractors is one of the areas where spreadsheets break down first.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {rateCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p1}</p>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p2}</p>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p3}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#475569] leading-relaxed">
            For more on rate card structure and subcontractor pay rates, see the{" "}
            <Link href="/resources/tools/rate-card-template" className="text-[#E8652B] hover:underline font-medium">Rate Card Template</Link> and{" "}
            <Link href="/platform/rate-management" className="text-[#E8652B] hover:underline font-medium">Rate Management platform page</Link>.
          </p>
        </div>
      </section>

      {/* SUBCONTRACTORS VS OWNED FLEET */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Fleet Coordination</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Managing subcontractors vs owned fleet</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Most haulage operators with 15+ vehicles run a mix of owned trucks and subcontracted capacity. The coordination challenge — and where most operational pain lives — is managing both cohorts as if they were one operation.
          </p>
          <div className="mt-10 grid lg:grid-cols-2 gap-12">
            <div className="space-y-4 text-sm text-[#475569] leading-relaxed">
              <h3 className="text-lg font-bold text-[#0F172A]">Why subcontractor coordination is hard</h3>
              <p>Owned fleet drivers receive their jobs directly from the dispatcher. The operator controls their schedule, their route, and has visibility of where they are. Subcontractors are different — they are independent businesses, often working for multiple operators simultaneously, with their own schedules and their own administrative systems.</p>
              <p>Without a dedicated subcontractor portal, the coordination chain typically looks like this: phone call or WhatsApp to confirm availability, job details sent via text, confirmation received informally, driver goes to site, calls or texts when done, sends a paper docket or photo at the end of the day. The operator re-enters all of this manually to track what was delivered and to build the invoice.</p>
              <p>At 5 subcontractor jobs per week, this is manageable. At 50 per week across 10–15 subcontractors, it becomes the bottleneck that slows invoicing, causes disputes and prevents the operator from scaling further.</p>
              <h3 className="text-lg font-bold text-[#0F172A] pt-2">What makes it easier</h3>
              <p>A dedicated subcontractor portal gives each subcontractor their own login — completely separate from the operator's admin panel. They see only their jobs: assigned loads, pickup and delivery addresses, material, rate. They accept or decline jobs in the portal. When complete, they capture POD the same way an owned fleet driver would. The record flows back into the operator's job system automatically.</p>
              <p>Critically: the subcontractor does not need to be a HaulageOps customer. They access the subcontractor portal as an invited user at no cost to them. The operator pays one subscription; the subcontractor gets access to their job queue and nothing else.</p>
            </div>
            <div>
              <div className="rounded-2xl bg-[#0D1525] border border-[#1E293B] overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 bg-[#1E293B]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E8652B]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#94A3B8]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
                  <span className="ml-3 text-xs font-semibold text-[#CBD5E1]">HaulageOps — Dispatch Board</span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    Dispatch board visual: two columns showing owned fleet drivers (left) and subcontractor companies (right), both assigned to jobs on the same live board. Subcontractor jobs show accept/decline status. Owned fleet jobs show GPS position. All jobs share the same status indicators: unassigned, assigned, in progress, POD pending, complete.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                <Link href="/resources/guides/subcontractor-management" className="text-[#E8652B] hover:underline font-medium">Read the Subcontractor Management Guide</Link> for a full breakdown of onboarding, rate management and compliance records.
              </p>
              <p className="mt-2 text-sm">
                <Link href="/solutions/subcontractor-coordination" className="text-[#E8652B] hover:underline font-medium inline-flex items-center gap-1">
                  See how HaulageOps handles subcontractor coordination <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL VS PAPER DOCKETS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Delivery Evidence</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Digital vs paper dockets</h2>
          <div className="mt-10 grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-4">Why paper breaks at volume</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                A paper docket is a physical delivery record — typically a carbonless pad filled in by the driver or site contact. The driver keeps one copy, the client or site gets another, the office gets a third. In theory, this creates a complete paper trail. In practice, at any meaningful volume, paper dockets fail in predictable ways:
              </p>
              <ul className="mt-5 space-y-3">
                {paperFailures.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-[#475569] leading-relaxed">
                Each of these failures has a direct cash flow cost. If 50 jobs complete on a Friday and dockets arrive Monday or Tuesday, invoicing for those jobs cannot start until Tuesday. If the billing cycle runs weekly, those jobs slip to the following week's invoice run. For an operation turning over $500k/month, a consistent 7–10 day invoice delay represents significant working capital pressure.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-4">What digital docket capture looks like</h3>
              <div className="space-y-4 text-sm text-[#475569] leading-relaxed">
                <p>Digital docket capture replaces the paper trail with a structured digital record captured on the driver's phone at the point of delivery. The driver opens their mobile app, marks the job complete, and is prompted to capture: a photo of the delivery site or scale ticket, a customer signature (if required), and any additional documents such as a scale slip or site delivery docket.</p>
                <p>The captured record is attached to the job immediately — visible to the ops manager, available to the client through their portal, and ready to include in the invoice the moment the job is complete. There is no waiting for paper to arrive.</p>
                <p>For sites with poor mobile connectivity, the driver app works offline: the driver captures the POD without signal, and the record synchronises when connectivity returns. The job is not blocked waiting for a network connection.</p>
                <p>
                  For more on this topic, see the{" "}
                  <Link href="/resources/guides/digital-dockets" className="text-[#E8652B] hover:underline font-medium">Digital Dockets Guide</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE JOB-TO-INVOICE PROBLEM */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Commercial Impact</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">The job-to-invoice problem</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            The gap between job completion and invoice payment is the single most common cash flow problem in bulk haulage. Understanding what causes it is the first step to closing it.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {invoiceProblems.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#475569] leading-relaxed max-w-3xl">
            When job records, rate cards, POD and invoicing sit on one platform — and the invoice is built from the job record automatically — the gap between completion and invoice shrinks from days to hours. See{" "}
            <Link href="/solutions/job-to-invoice" className="text-[#E8652B] hover:underline font-medium">Job to Invoice</Link> and{" "}
            <Link href="/solutions/reducing-invoice-delays" className="text-[#E8652B] hover:underline font-medium">Reduce Invoice Delays</Link> for more detail.
          </p>
        </div>
      </section>

      {/* CHAIN OF RESPONSIBILITY */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Compliance</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Chain of Responsibility in the bulk haulage context</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Chain of Responsibility (CoR) legislation — particularly relevant in the Australian operating context — establishes that responsibility for road safety compliance in the transport chain is shared across all parties who have influence or control over transport activities. This includes not just drivers, but operators, schedulers, loaders and clients.
          </p>
          <div className="mt-10 grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-4">What operators are responsible for</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Under CoR, operators are expected to demonstrate that they have systems in place to manage compliance — not simply that no incident occurred. The obligation covers:
              </p>
              <ul className="mt-5 space-y-3">
                {corObligations.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-[#475569] leading-relaxed">
                The practical implication for operators managing subcontractors: you cannot simply delegate compliance responsibility to the sub. You have an obligation to ensure that the subcontractors you engage are operating appropriately, and to maintain records that demonstrate you have done so.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-4">What records matter</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                The records that matter in a CoR context are those that show the operator had a system in place and was using it. This means:
              </p>
              <ul className="mt-5 space-y-3">
                {corRecords.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-[#475569] leading-relaxed">
                HaulageOps stores driver documents, vehicle records and break/rest records, and maintains a comprehensive audit trail of all actions. This supports compliance record-keeping — it does not guarantee compliance outcomes and does not constitute legal advice. See{" "}
                <Link href="/resources/guides/haulage-compliance" className="text-[#E8652B] hover:underline font-medium">Haulage Compliance Guide</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO LOOK FOR IN SOFTWARE */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Software Selection</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">What to look for in haulage software</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Most haulage software evaluations go wrong because operators evaluate what vendors demo, not what they actually need. Here is a short buyer checklist — the full version is at{" "}
            <Link href="/resources/checklists/haulage-software-requirements" className="text-[#E8652B] hover:underline font-medium">Software Requirements Checklist</Link>.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
              <h3 className="font-bold text-[#0F172A]">Core operational requirements</h3>
              <ul className="mt-5 space-y-3">
                {softwareCore.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
              <h3 className="font-bold text-[#0F172A]">Implementation and total cost</h3>
              <ul className="mt-5 space-y-3">
                {softwareCost.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm text-[#475569] leading-relaxed">
            For the complete 40-question checklist:{" "}
            <Link href="/resources/checklists/haulage-software-requirements" className="text-[#E8652B] hover:underline font-medium">Haulage Software Requirements Checklist</Link>. For a guide on running vendor evaluations:{" "}
            <Link href="/resources/guides/haulage-software-buyers-guide" className="text-[#E8652B] hover:underline font-medium">Haulage Software Buyer's Guide</Link>.
          </p>
        </div>
      </section>

      {/* HOW HAULAGEOPS WORKS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">How HaulageOps Works</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">The HaulageOps workflow in brief</h2>
          <div className="mt-10 grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm text-[#475569] leading-relaxed">
                HaulageOps is a transport management system built specifically for bulk haulage and construction logistics operators managing a mix of owned and subcontracted capacity. The platform connects five role-specific portals around one live job record:
              </p>
              <ul className="mt-5 space-y-3">
                {portals.map((item) => (
                  <li key={item.strong} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span><strong className="text-[#0F172A]">{item.strong}</strong> — {item.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-[#475569] leading-relaxed">
                Standard setup is $1,500 and typically takes 2–4 weeks. Subcontractor and client portals are included — the portals are free for portal users. Only the operating company pays the subscription.
              </p>
            </div>
            <div>
              <div className="rounded-2xl bg-[#0D1525] border border-[#1E293B] overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 bg-[#1E293B]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E8652B]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#94A3B8]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
                  <span className="ml-3 text-xs font-semibold text-[#CBD5E1]">HaulageOps — Platform Overview</span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    Platform overview diagram: five connected portals (Admin Panel, Driver App, Subcontractor Portal, Client Portal, Management Reporting) arranged around a central job record. Arrows show: dispatcher creates job, driver receives on app, subcontractor receives in portal, client sees status in portal, reporting aggregates across all jobs.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm">
                <Link href="/demo" className="text-[#E8652B] hover:underline font-medium inline-flex items-center gap-1">
                  Book a 20-minute demo to see one full job end-to-end <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">FAQ</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">Common questions about bulk haulage operations</h2>
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

      {/* RELATED RESOURCES */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related Resources</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Continue reading</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedGuides.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">{card.title}</Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.p}</p>
                <Link href={card.href} className="mt-3 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  Read guide <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#475569] leading-relaxed">
            Also see:{" "}
            <Link href="/resources/checklists/haulage-software-requirements" className="text-[#E8652B] hover:underline font-medium">Software Requirements Checklist</Link>{" "}
            <span className="text-[#CBD5E1]">—</span>{" "}
            <Link href="/solutions/job-to-invoice" className="text-[#E8652B] hover:underline font-medium">Job to Invoice solution page</Link>{" "}
            <span className="text-[#CBD5E1]">—</span>{" "}
            <Link href="/solutions/digital-dockets" className="text-[#E8652B] hover:underline font-medium">Digital Dockets solution page</Link>
          </p>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See the full job lifecycle in a live demo.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              We walk through one complete job — create, dispatch, subcontract, POD, invoice, Xero sync — in 20 minutes. No slides.
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

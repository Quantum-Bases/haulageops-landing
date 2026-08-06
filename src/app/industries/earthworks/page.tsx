import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Earthworks Logistics Software | HaulageOps",
  description:
    "Manage earthworks transport operations — tipper allocation, subcontractor coordination, spoil removal, fill delivery and project-based reporting for head contractors.",
};

const proofStrip = [
  { strong: "Own + sub", label: "on one dispatch board" },
  { strong: "Project", label: "quantity tracking" },
  { strong: "Client portal", label: "no internal costs exposed" },
  { strong: "Digital", label: "load dockets" },
  { strong: "Mixed rates", label: "per tonne, per load, hourly" },
  { strong: "2–4 weeks", label: "onboarding" },
];

const breakCards = [
  {
    title: "Surge demand when excavation accelerates",
    p: "When the excavator opens a new face, spoil volumes spike. Your own tippers fill first. Then you're calling sub tippers on the phone, hoping someone is available, and tracking who took what load in a WhatsApp group. By the time the day is done, you can't reconstruct which sub ran how many loads.",
  },
  {
    title: "Coordinating multiple sub tippers across sites",
    p: "When you have four subcontractor companies running tippers across two sites on the same day, keeping track of who is where, what they have completed, and what remains is a full-time communication task. Missing a sub going to the wrong site costs programme time and relationship capital with the head contractor.",
  },
  {
    title: "Head contractor visibility without internal rate exposure",
    p: "The head contractor wants to see load counts and quantity delivered — but you can not show them your subcontractor pay rates or the margin on the job. Paper dockets sent by email don't solve this. The head contractor needs a real-time view; your rate structure needs to stay private.",
  },
  {
    title: "Dockets needed for quantity verification",
    p: "Earthworks quantity disputes are common — the head contractor's count of loads differs from yours, or the fill volume recorded doesn't match what site says was placed. Without digital dockets with timestamps and GPS positions per load, these disputes are resolved by negotiation rather than evidence.",
  },
  {
    title: "Quantities vary by project stage",
    p: "Early earthworks might move 200 tonnes per day. During structure work it drops to 30. Then drainage requires another surge. Managing tipper allocation — own and sub — against a programme that changes daily requires the ability to scale dispatch up or down without rebuilding your coordination system.",
  },
  {
    title: "Invoice reconciliation for project reporting",
    p: "Head contractors often require invoice reconciliation against programme milestones. When your invoices are raised from job data in the system, reconciliation is straightforward. When they are raised from memory, spreadsheets and paper dockets, the reconciliation process becomes an argument.",
  },
];

const lifecycle = [
  {
    num: "01",
    title: "Project setup with site instructions",
    p: "Create the project in HaulageOps with the head contractor as client, set the per-tonne spoil and per-load fill rates, and attach site-specific instructions for drivers — loading point, tipping location, site access notes. Instructions go to all drivers and subs assigned to the project.",
  },
  {
    num: "02",
    title: "Daily tipper dispatch — own and sub",
    p: "Each morning, assign your own tippers to jobs. When your capacity is exceeded, delegate overflow loads to subcontractor companies via the sub portal. Subs see their job queue, accept the allocation, and start moving without a phone call from your dispatcher.",
  },
  {
    num: "03",
    title: "Live status for all tippers on one board",
    p: "Own tipper GPS positions and sub tipper updates appear on the same dispatch board. The dispatcher sees load count, current status (loading, en route, tipping, returning) and any delays. No phone calls needed to know where the tippers are.",
  },
  {
    num: "04",
    title: "Digital dockets per load",
    p: "Drivers capture a digital docket at the tipping point — or photograph the paper docket if the site issues paper. Site supervisor signature is captured on the driver's phone. Each load gets a timestamped, GPS-tagged docket record attached to the job.",
  },
  {
    num: "05",
    title: "Head contractor portal — quantities, no rates",
    p: "The head contractor project manager logs into the Client Portal. They see load count and quantity delivered for their project, job status, and POD documents. They do not see your subcontractor pay rates or margin. Your rate card with that head contractor is visible to them in their portal — nobody else's.",
  },
  {
    num: "06",
    title: "Invoice from project job data",
    p: "At billing cycle, the completed job data — tonnes, loads, hours — is the source for the invoice. No manual counting of paper dockets. The invoice syncs to Xero. The head contractor sees it in their portal. Disputes are resolved from digital records rather than paper piles.",
  },
];

const modules = [
  {
    title: "Subcontractor Portal",
    href: "/platform/subcontractor-portal",
    p: "When your own tippers are at capacity during peak excavation, sub tippers fill the gap via their own dedicated portal. No second HaulageOps subscription needed for your subs. They accept the job, see the site instructions, and update load progress independently.",
    bullets: [
      "Dedicated login per sub company — free for the sub to access",
      "Accept/decline individual jobs with reason",
      "Mapbox-powered site maps for unfamiliar locations",
      "Load history and documentation per sub",
    ],
  },
  {
    title: "Client Portal",
    href: "/platform/client-portal",
    p: "Head contractors get self-service visibility into their project's delivery progress — load counts, quantities, POD documents and invoices — without seeing your internal cost structure or subcontractor details.",
    bullets: [
      "Live job status and load count per project",
      "POD documents and docket access",
      "Invoice history and current invoice status",
      "Client-specific — no cross-client data visible",
    ],
  },
  {
    title: "Subcontractor Coordination",
    href: "/solutions/subcontractor-coordination",
    p: "Managing multiple sub tipper companies across earthworks sites requires structured delegation, not group chats. HaulageOps gives you a defined job delegation workflow with confirmation, live updates and a complete audit trail.",
    bullets: [
      "Delegate by sub company, not individual driver",
      "Real-time acceptance confirmation",
      "Sub status on the same dispatch board as own fleet",
    ],
  },
  {
    title: "Rate Management",
    href: "/platform/rate-management",
    p: "Earthworks often runs mixed rate structures within a single project — spoil at per-tonne, fill at per-load, standby tippers at hourly. HaulageOps handles all three rate types on the same job, with separate charge rates to the head contractor and pay rates to your subs.",
    bullets: [
      "Mixed rate types within one project",
      "Separate client charge rate and sub pay rate",
      "Rate card version history — historical invoices stay correct",
    ],
  },
];

const faqs = [
  {
    q: "How do I manage multi-site earthworks projects in HaulageOps?",
    a: "Each project in HaulageOps can have multiple delivery or work locations. Jobs within the project are created per site, with site-specific instructions, loading and tipping locations, and individual rate settings where they differ by site. The dispatch board lets you filter by project, so you can see all tippers across all sites for a single project in one view, or narrow to a specific site when coordinating that location. Load counts and quantities roll up to the project level for reporting to the head contractor.",
  },
  {
    q: "Can the head contractor see live quantity delivered without me exposing my subcontractor rates?",
    a: "Yes. The Client Portal is designed for exactly this situation. The head contractor logs in and sees the quantities and load counts recorded against their project, along with POD documents and job status. They see the rate card you have agreed with them — that is, the charge rate you bill at. They do not see your subcontractor pay rates, which subcontractor companies you use, or any of your internal cost data. RBAC controls what each portal user can see — and that is set at the operating company level, not by the client.",
  },
  {
    q: "How do I handle tipper overflow when excavation surges unexpectedly?",
    a: "You maintain a roster of subcontractor companies in HaulageOps. When surge demand hits, you open the dispatch board, create overflow jobs, and delegate to one or more sub companies. The sub portal notifies them immediately — they can accept or decline from their phone. Once accepted, they appear on your dispatch board and their drivers begin updating progress. This replaces the phone-around and WhatsApp-group approach, and the full record of what was delegated, accepted, and completed is logged automatically.",
  },
  {
    q: "How are digital dockets different from paper dockets in earthworks?",
    a: "Paper dockets in earthworks end up in the cab, get rained on, pile up, and then have to be matched to jobs manually at billing time. Digital dockets are captured at the point of delivery — the driver photographs the site docket or captures a digital record in the app, the site supervisor signs on the driver's phone, and the docket is immediately attached to the job record in the system. When accounts go to invoice, the docket is already there. When the head contractor queries a quantity, you have a timestamped, GPS-tagged record for every load — not a pile of soggy paper.",
  },
  {
    q: "How does HaulageOps handle spoil removal and fill placement on the same project day?",
    a: "A single project can have multiple concurrent job types running simultaneously. Spoil removal jobs use per-tonne rates (or per-load if preferred), fill placement jobs use the fill rate, and any standby or slow-moving work goes on hourly. Tippers are assigned to jobs by type. The dispatch board shows both job types active at the same time, with each tipper's current assignment visible. Quantities for each job type are tracked separately and roll up to the project total.",
  },
  {
    q: "Can my subcontractor tippers use the system without subscribing to HaulageOps?",
    a: "Yes. The Subcontractor Portal is free for your subcontractors to access. Only your operating company pays a subscription. Each sub company gets a dedicated login to their portal — they see the jobs delegated to them, accept or decline, update progress, and access their job history. They do not see other subcontractors' jobs or your internal operations. This means you can bring subs onto the platform without asking them to pay for software.",
  },
  {
    q: "What reports can I give the head contractor at project completion?",
    a: "The Client Portal gives the head contractor access to their project's full delivery history — load-by-load records with timestamps, quantities per load, POD documents, and invoices. At project end, this data is available as a complete delivery record. The reporting covers what was moved, when, by which job (without sub detail), and what was invoiced against it. For head contractors requiring milestone-based reporting, the quantity-per-period data is accessible through the portal without you having to compile it manually from paper dockets.",
  },
];

const relatedCards = [
  {
    title: "Civil Construction",
    href: "/industries/civil-construction",
    p: "Civil construction logistics shares many earthworks characteristics — mixed owned and sub fleets, principal contractor reporting, and compliance obligations across all operators.",
  },
  {
    title: "Tipper Fleets",
    href: "/industries/tipper-fleets",
    p: "If tipper fleet management — vehicle availability, driver allocation and document compliance — is your primary operational challenge, the tipper fleet page covers that specifically.",
  },
  {
    title: "Subcontractor Portal",
    href: "/platform/subcontractor-portal",
    p: "The detailed breakdown of how the Subcontractor Portal works — what subs see, how acceptance flows, and how their updates reach your dispatch board.",
  },
  {
    title: "Subcontractor Coordination",
    href: "/solutions/subcontractor-coordination",
    p: "The structured approach to coordinating multiple sub tipper companies across earthworks sites — delegation workflow, confirmation, and live status without group chats.",
  },
];

export default function EarthworksPage() {
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
            <span className="text-[#0F172A] font-medium">Earthworks</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Earthworks Logistics
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Earthworks logistics managed as a connected operation, not a set of calls and spreadsheets.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Earthworks generates surge demand, multiple tipper sources, and head contractor reporting requirements that don&apos;t match what WhatsApp and Excel produce. HaulageOps connects your own tippers, subcontractor overflow, and client visibility into one traceable operation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/subcontractor-portal">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Subcontractor Portal
              </Button>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-300 fill-mode-both">
            {["Project-based dispatch", "Tipper overflow via sub portal", "Head contractor visibility", "Digital load dockets"].map((pill) => (
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

      {/* WHAT EARTHWORKS LOGISTICS ACTUALLY INVOLVES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What Earthworks Logistics Actually Involves</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Project-based work, variable demand, and reporting obligations that don&apos;t suit generic TMS tools
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                Earthworks logistics is fundamentally different from regular bulk haulage. The work is project-based rather than route-based — demand is tied to where the excavation is at, not a timetable. When the excavator opens up a new face, spoil removal ramps up fast. When fill placement starts, the requirement shifts. The same project can have spoil running out in the morning and fill going in that afternoon.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Your tipper fleet is the core capacity. But on earthworks projects — particularly for head contractors with aggressive programme schedules — your own tippers are rarely enough during peak excavation. Sub tippers fill the gap. Coordinating a mix of six owned tippers and twelve subcontracted tippers across two active sites, while the head contractor&apos;s project manager wants to know how many loads have moved today, is not something a spreadsheet handles reliably.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Head contractor reporting is a specific pressure in earthworks. The head contractor is running a programme with milestones tied to earthworks completion. They need quantity confirmation — not an estimate, not a phone call, but a record they can use in their own reporting. The challenge is giving them that visibility without exposing your subcontractor rates or internal cost structures.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#0F172A] mb-4">Typical earthworks project parties</h3>
              <ul className="space-y-3 text-[#475569] text-sm leading-relaxed">
                {[
                  "Earthworks logistics manager — coordinates tippers, manages sub overflow, reports to head contractor",
                  "Own tipper drivers — core spoil and fill capacity on site",
                  "Subcontractor tippers — overflow capacity when excavation surges",
                  "Head contractor project manager — needs quantity and progress visibility for programme management",
                  "Site supervisor — controls loading and tipping locations, signs off on loads",
                  "Your accounts team — invoices head contractor from completed jobs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="font-bold text-[#0F172A] mt-8 mb-4">Charging models in earthworks</h3>
              <ul className="space-y-3 text-[#475569] text-sm leading-relaxed">
                {[
                  "Per tonne (spoil) — most common for spoil removal; billed against recorded or weighed quantities",
                  "Per load (fill) — used where volume is consistent and weighbridge is not used",
                  "Hourly — for slower or waiting-heavy work, or when tippers are on standby",
                  "Project day rate — less common; used when the head contractor contracts tippers per day regardless of volume",
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

      {/* EARTHWORKS OPERATIONAL CHALLENGES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Earthworks Operational Challenges</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Where earthworks logistics operations break down without the right system
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

      {/* HAULAGEOPS FOR EARTHWORKS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">HaulageOps for Earthworks</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            How HaulageOps handles the earthworks logistics workflow
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

          {/* Project dispatch mockup */}
          <div className="mt-12 rounded-2xl bg-[#0D1525] border border-[#1E293B] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 bg-[#1E293B]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E8652B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#94A3B8]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
              <span className="ml-3 text-xs font-semibold text-[#CBD5E1]">HaulageOps — Earthworks Project Dispatch View</span>
            </div>
            <div className="p-6">
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Screenshot: Admin Panel showing an earthworks project. Left side shows project summary: client (head contractor name), site address, spoil tonne rate, fill per-load rate, today&apos;s load count (14 loads / 280 tonnes) vs project target (1,200 tonnes). Right side shows active dispatch — 3 own tippers (blue, showing status: 2 en route, 1 tipping) and 5 sub tippers from 2 sub companies (orange, showing accept/decline status). One sub tipper expanded showing last docket timestamp and GPS position.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELEVANT PLATFORM FEATURES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Relevant Platform Features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            HaulageOps features most used in earthworks operations
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
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
            Earthworks logistics questions about HaulageOps
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
            Related industries and features for earthworks operators
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See HaulageOps handle an earthworks project</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              20-minute demo covering project setup, tipper dispatch (own and sub), head contractor portal visibility, and project-to-invoice — the workflow earthworks logistics actually runs on.
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

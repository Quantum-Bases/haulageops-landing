import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
  Truck,
  Building2,
  FileCheck,
} from "lucide-react";

export const metadata = {
  title: "Managing Owned and Subcontracted Fleets | HaulageOps",
  description:
    "Run owned trucks and subcontracted capacity from one dispatch board. Jobs assigned to internal drivers or delegated to external subcontractors — same workflow, full visibility.",
};

const heroKickers = [
  "One dispatch board",
  "Owned + subcontracted capacity",
  "Separate client and pay rates",
  "POD from both fleets",
  "Subcontractor portal included",
  "No second TMS required",
];

const lifecycleSteps = [
  {
    num: "01",
    title: "Job created once",
    desc: "The job is created in the admin panel with all relevant details: origin, destination, material, schedule, client. The dispatcher then assigns it — to an owned driver via the driver app, or to a subcontractor via the subcontractor portal. One creation step. One record.",
  },
  {
    num: "02",
    title: "Assignment to the right fleet",
    desc: "Owned driver assignments push to the iOS or Android driver app via Firebase FCM push notification. Subcontractor assignments appear in their dedicated portal login — where they can accept or decline, view the job location on Mapbox maps, and see all relevant details. No forwarded message required.",
  },
  {
    num: "03",
    title: "Status and POD from both",
    desc: "Owned drivers update status through the driver app. Subcontractors update status through their portal. Digital POD — photo, document, customer signature — is submitted through both and lands in the same job record. The dispatcher sees a single dispatch board with live status across all jobs regardless of fleet type.",
  },
];

const mixedBoardJobs = [
  { id: "JOB-1842", client: "Midland Civils", fleet: "Owned — Truck 07", status: "Loaded", statusCls: "bg-[#A855F7]/15 text-[#C084FC]", clientRate: "$24 / t", payRate: "—", pod: "—" },
  { id: "JOB-1843", client: "Balfour Beatty", fleet: "Sub — D. Okafor", status: "En Route", statusCls: "bg-[#3B82F6]/15 text-[#60A5FA]", clientRate: "$22 / t", payRate: "$18 / t", pod: "—" },
  { id: "JOB-1844", client: "Apex Civil", fleet: "Owned — Truck 03", status: "Delivered", statusCls: "bg-[#16A34A]/15 text-[#4ADE80]", clientRate: "$19 / load", payRate: "—", pod: "✓ POD" },
  { id: "JOB-1845", client: "Redlands Council", fleet: "Sub — G. Patel", status: "Assigned", statusCls: "bg-[#64748B]/20 text-[#94A3B8]", clientRate: "$30 / hr", payRate: "$26 / hr", pod: "—" },
];

const changeCards = [
  {
    title: "What the client sees",
    intro: "The client portal shows job status, delivery evidence and invoices. Whether the delivery was made by an owned vehicle or a subcontractor is not visible to the client — they see one job record, one status, one POD. No gaps, no \u201cwe\u2019ll have to check with the sub\u201d answers.",
    points: [
      "Live job status in client portal regardless of which fleet type made the delivery",
      "POD accessible in client portal immediately on submission",
      "Invoice reflects the client rate — not the subcontractor pay rate",
    ],
  },
  {
    title: "What management sees",
    intro: "The management reporting layer shows job-level and financial data across both fleet types. Dispatcher utilisation, job completion rates, POD compliance, and where margin sits across owned versus subcontracted runs — all visible without pulling two systems together manually.",
    points: [
      "Cross-fleet job history and completion data",
      "Client charge rate versus subcontractor pay rate visibility per job",
      "Audit trail covering both fleet types equally",
    ],
  },
  {
    title: "What doesn\u2019t need to happen",
    intro: "When both fleet types are in the same system, a series of manual steps become unnecessary: the separate status call to find out where the sub is, the reconciliation of two sets of records at invoice time, the re-entry of subcontractor dockets that arrived by email or photo message.",
    points: [
      "No separate status calls for subcontracted jobs",
      "No reconciliation of two record sets at invoice time",
      "No manual re-entry of subcontractor dockets",
    ],
  },
  {
    title: "Subcontractors don\u2019t need a licence",
    intro: "The subcontractor portal is a dedicated login included in the HaulageOps subscription. Subcontractors access their portal for free — they do not need to be HaulageOps customers or pay for their own subscription. This is a meaningful difference from platforms where subcontractor access requires the sub to hold their own paid account.",
    points: [
      "Subcontractor portal access is free for the subcontractor",
      "No requirement for subs to be existing HaulageOps customers",
      "Only the operating company holds the subscription",
    ],
  },
];

const relatedCards = [
  {
    title: "Dispatch Management",
    href: "/platform/dispatch-management",
    desc: "The dispatch board where owned and subcontracted jobs are assigned, tracked and managed. Real-time status via Socket.io, vehicle and driver visibility in one view.",
  },
  {
    title: "Subcontractor Portal",
    href: "/platform/subcontractor-portal",
    desc: "Dedicated login for external transport partners. Job queue, accept/decline, Mapbox maps, job history and POD submission — without needing a separate TMS.",
  },
  {
    title: "Rate Management",
    href: "/platform/rate-management",
    desc: "Client charge rates and subcontractor pay rates stored separately per job. Per-tonne, per-load, hourly and fixed-fee rate types with effective dating for rate changes.",
  },
];

const faqs = [
  {
    q: "How do I see all jobs together — owned and subcontracted — in one view?",
    a: "The dispatch board in the admin panel shows all live and scheduled jobs regardless of whether they\u2019re assigned to an owned driver or delegated to a subcontractor. Each job card shows the fleet type, current status and any POD submissions. You\u2019re not switching between two views — everything is in the same board, filtered and sorted as needed.",
  },
  {
    q: "Can a job switch from an owned driver to a subcontractor after it's been assigned?",
    a: "Yes. Jobs can be reassigned within the admin panel. If a vehicle breaks down or capacity isn\u2019t available, the dispatcher can reassign the job to a subcontractor and the subcontractor receives the assignment through their portal. The job record, rate and all previously entered data carry through — no need to create a new job from scratch.",
  },
  {
    q: "How does billing work when a job uses a subcontractor?",
    a: "The invoice to the client is based on the client charge rate, regardless of whether the delivery was made by an owned vehicle or a subcontractor. The subcontractor pay rate is stored separately on the job record and is visible in the admin panel for cost accounting purposes — it is not visible to the client. At invoice time, the client charge rate is already applied; no manual rate lookup is required.",
  },
  {
    q: "Do subcontractors need their own HaulageOps subscription to use the portal?",
    a: "No. The subcontractor portal is accessed via a dedicated login provided by the operating company. Subcontractors do not pay for access and do not need to be HaulageOps customers. This is different from some competing platforms where subcontractor coordination only works if the subcontractor also pays for their own account.",
  },
  {
    q: "What happens if a subcontractor submits their own POD outside HaulageOps?",
    a: "Subcontractors submit POD through their portal — photo, document upload or customer signature. If a subcontractor sends a photo by email or message outside the system, it can be uploaded manually into the job record by the admin team. The goal is to move subcontractor POD submission into the portal, which removes the manual upload step — but the system supports both workflows during transition periods.",
  },
  {
    q: "How many subcontractors can I manage in HaulageOps?",
    a: "There is no fixed limit on the number of subcontractor records or portal users in the standard subscription. HaulageOps is designed for operators in the 15\u201380 vehicle range who typically manage a network of subcontractors alongside their owned fleet. If you have a particularly large or complex subcontractor network, discuss the specifics during the demo.",
  },
];

export default function OwnedAndSubcontractedFleetsPage() {
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
            <span className="text-[#0F172A] font-medium">Owned &amp; Subcontracted Fleets</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Coordinate Operations
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Run owned trucks and subcontractors from the same dispatch workflow.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Most bulk haulage operators use a mix of owned vehicles and subcontracted capacity. HaulageOps puts both on the same dispatch board, with separate rates, one job record and POD from both flowing into the same place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/dispatch-management">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Dispatch Management
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {heroKickers.map((item) => (
              <div key={item} className="flex items-center justify-center gap-2">
                <CheckCircle className="h-3.5 w-3.5 text-[#E8652B] shrink-0" />
                <span className="text-white font-bold text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* THE PROBLEM */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The problem</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Managing two fleets in two systems means two of everything.
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                Most bulk haulage operators don&apos;t run a pure owned fleet. They have a core of owned trucks and use subcontracted capacity to cover peaks, specialised equipment requirements, or geographic reach beyond their own vehicles. That&apos;s standard practice.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                The problem is what happens when those two capacity types are managed separately. Owned drivers get jobs through the dispatch system. Subcontractors get a forwarded message, a phone call or a WhatsApp. Status for owned trucks comes through the driver app. Status for subs comes through a second call. Dockets from owned drivers go into one folder. Dockets from subs — if they arrive at all — go somewhere else.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                By the time a job is complete and an invoice needs to go out, there are two sets of records to reconcile, two sources of confirmation, and often a gap where the subcontractor&apos;s paperwork hasn&apos;t yet arrived. The more subcontracted capacity you run, the bigger that reconciliation problem becomes.
              </p>
            </div>
            <div>
              <p className="text-[#475569] leading-relaxed">
                The same problem shows up when a client asks for a status update. The dispatcher knows where the owned trucks are. They need to call or message to find out where the subcontracted vehicle has got to. The client is waiting. The answer takes longer than it should.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                And at invoice time: the rate for the owned driver&apos;s run is in one spreadsheet. The pay rate for the subcontractor is in another agreement or someone&apos;s memory. The client rate is somewhere else again. Pulling together one invoice from a job that crossed both fleet types takes longer than it should, and introduces the opportunity for errors.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                None of these are unusual problems. They&apos;re the standard consequence of running a mixed fleet without a system that handles both capacity types natively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW HAULAGEOPS WORKS */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">How HaulageOps works</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            One job creation process. One dispatch board. Both capacity types.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            When a job is created in HaulageOps, the dispatcher assigns it to either an owned driver or delegates it to a subcontractor. The process is the same either way. The job record, the status tracking and the POD collection all work through the same system — what changes is which portal receives the assignment.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {lifecycleSteps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                <span className="text-3xl font-black text-[#E8652B]/20 leading-none">{step.num}</span>
                <h3 className="mt-2 font-bold text-[#0F172A] text-base">{step.title}</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Rate separation */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-[#0F172A]">Rate separation without rate confusion</h3>
            <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-[#475569] leading-relaxed">
                  Every job in HaulageOps carries two rate dimensions: the client charge rate and, where a subcontractor is involved, the subcontractor pay rate. These are stored separately and both flow from the relevant rate cards and agreements already in the system.
                </p>
                <p className="mt-4 text-[#475569] leading-relaxed">
                  The client sees the rate they were quoted. The dispatcher sees margin. The subcontractor sees their pay rate. No one sees what they shouldn&apos;t. No manual calculation needed at invoice time because the rates were stored when the agreements were made, not entered fresh each job.
                </p>
              </div>
              {/* Dispatch board visual spec */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
                <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                  HaulageOps Dispatch Board — Mixed Fleet
                </div>
                <div className="p-4 sm:p-5 space-y-3">
                  <div className="grid grid-cols-12 gap-2 px-2 pb-1 text-[9px] uppercase tracking-wider text-[#64748B]">
                    <span className="col-span-3">Job</span>
                    <span className="col-span-2">Fleet</span>
                    <span className="col-span-2">Status</span>
                    <span className="col-span-2">Client rate</span>
                    <span className="col-span-2">Pay rate</span>
                    <span className="col-span-1">POD</span>
                  </div>
                  {mixedBoardJobs.map((job) => (
                    <div key={job.id} className="grid grid-cols-12 gap-2 px-2 py-1.5 rounded bg-[#1E293B] border border-[#334155] items-center">
                      <span className="col-span-3 text-white text-[10px] font-semibold">{job.id}</span>
                      <span className="col-span-2 flex items-center gap-1 text-[#94A3B8] text-[10px]">
                        {job.fleet.startsWith("Owned") ? (
                          <Truck className="h-3 w-3 text-[#64748B] shrink-0" />
                        ) : (
                          <Building2 className="h-3 w-3 text-[#64748B] shrink-0" />
                        )}
                        <span className="truncate">{job.fleet}</span>
                      </span>
                      <span className="col-span-2">
                        <span className={`px-1.5 py-0.5 rounded text-[9px] font-semibold ${job.statusCls}`}>{job.status}</span>
                      </span>
                      <span className="col-span-2 text-[#FBBF24] text-[10px]">{job.clientRate}</span>
                      <span className="col-span-2 text-[#94A3B8] text-[10px]">{job.payRate}</span>
                      <span className="col-span-1 flex justify-end">
                        {job.pod !== "—" ? (
                          <FileCheck className="h-3 w-3 text-[#4ADE80]" />
                        ) : (
                          <span className="text-[#475569] text-[10px]">—</span>
                        )}
                      </span>
                    </div>
                  ))}
                  <p className="text-[10px] text-[#475569]">
                    Owned and subcontracted jobs on the same board — client charge rate and subcontractor pay rate stored separately per job.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THIS CHANGES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What this changes</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            What the client sees. What management sees. What doesn&apos;t need to happen.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {changeCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-7 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] text-lg">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.intro}</p>
                <ul className="mt-5 space-y-3">
                  {card.points.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                      <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PLATFORM FEATURES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related platform features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The features behind this solution
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {relatedCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">
                    {card.title}
                  </Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#475569]">
            Also relevant:{" "}
            <Link href="/solutions/subcontractor-coordination" className="text-[#E8652B] hover:underline font-medium">
              Subcontractor Coordination
            </Link>{" "}
            ·{" "}
            <Link href="/platform/billing-and-invoicing" className="text-[#E8652B] hover:underline font-medium">
              Billing &amp; Invoicing
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently Asked Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Owned and subcontracted fleets — common questions.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See how your mixed fleet would work in HaulageOps.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              A demo covers owned driver dispatch, subcontractor portal delegation and how rates and POD connect across both — in 20 minutes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold w-full sm:w-auto">
                Book a Demo
              </Button>
            </Link>
            <Link href="/solutions">
              <Button size="lg" variant="outline" className="border-[#334155] text-white hover:bg-[#1E293B] w-full sm:w-auto">
                All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

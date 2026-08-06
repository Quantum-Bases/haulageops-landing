import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Scale Without More Admin in Bulk Haulage | HaulageOps",
  description:
    "More trucks, more subcontractors, no more admin headcount growing in proportion. Connected operations removes the re-work steps that make admin scale with the fleet.",
};

const proofStrip = [
  "Job created once",
  "Rate applied automatically",
  "Digital POD captured",
  "Client self-service portal",
  "Xero-connected invoicing",
  "No dedicated coordinator needed",
];

const overheadTasks = [
  {
    title: "Job intake and data entry",
    paras: [
      "On manual processes: job request arrives by phone or email, admin enters it into a spreadsheet or system, calls or messages to assign it, follows up to confirm the driver has it. On HaulageOps: job is created in the admin panel once, the rate is applied from the rate card, and the driver receives a push notification via Firebase FCM. The follow-up confirmation step becomes an automatic status in the system.",
    ],
    bullets: [
      "Job templates for recurring work — create once, schedule forward",
      "Driver app confirmation replaces follow-up call",
      "Rate applied at creation — no separate rate lookup",
    ],
  },
  {
    title: "Status calls from the team",
    paras: [
      "On manual processes: to know where each truck is and what status each job is in, the dispatcher calls or messages drivers. Each call takes time and interrupts the driver. At 20 jobs running simultaneously, the status picture assembled from individual calls is already out of date by the time it's complete.",
      "On HaulageOps: the dispatch board shows live status for every job from driver app updates and phone-based GPS position via Socket.io. No calls required to build the status picture.",
    ],
    bullets: [
      "Real-time dispatch board — all jobs, all statuses, one view",
      "Driver app status updates — in-progress, arrived, complete",
      "GPS position from driver's phone — no hardware telematics required",
    ],
  },
  {
    title: "Docket chasing and invoicing",
    paras: [
      "On manual processes: dockets arrive when drivers bring them in. Someone waits for the stack, then transcribes job details and docket references into the invoicing system. For subcontracted jobs, the wait is longer and the chase more effortful. The invoice can't go out until the docket arrives.",
      "On HaulageOps: digital POD is submitted at delivery via the driver app. The invoice is built from the completed job record — no docket to wait for, no transcription step.",
    ],
    bullets: [
      "Digital POD at delivery — no docket chasing",
      "Invoice built from job record — no re-entry into invoicing system",
      "Xero sync — no re-entry into accounting software",
    ],
  },
  {
    title: "Client status calls",
    paras: [
      "On manual processes: clients call to ask where their delivery is, whether it was made, and whether they can get the signed docket. Each call pulls a dispatcher away from dispatch to find the answer. For operations with demanding clients — construction sites, quarry customers, logistics managers — these calls accumulate through the day.",
      "On HaulageOps: the client portal gives clients self-service access to their job status, delivery history, POD and invoices. The call doesn't need to happen because the answer is already visible.",
    ],
    bullets: [
      "Client portal — clients see their own status without calling",
      "POD visible in client portal immediately on submission",
      "Invoice accessible in client portal — no separate sending required",
    ],
  },
  {
    title: "Subcontractor coordination",
    paras: [
      "On manual processes: coordinating subcontractors requires calls and messages to issue jobs, confirm acceptance, chase status, and chase dockets. As the subcontractor network grows, this coordination work grows proportionally — and eventually requires a dedicated person whose job is managing the subcontractor relationships operationally.",
      "On HaulageOps: subcontractors access their portal, see their jobs, accept or decline, update status and submit POD. The dispatcher delegates to the portal, not to a phone call.",
    ],
    bullets: [
      "Subcontractor portal — acceptance logged, status visible",
      "POD from subs flows into the same job record",
      "No dedicated coordinator role required for portal-managed subs",
    ],
  },
  {
    title: "Reporting and management oversight",
    paras: [
      "On manual processes: management visibility into job performance, financial status and driver activity requires someone to compile reports from spreadsheets and call records. This is a regular overhead that grows with volume and becomes a time-consuming exercise when it should be instant.",
      "On HaulageOps: management reporting is built into the platform. Job history, financial reports, driver performance and compliance records are available without anyone compiling them from scratch.",
    ],
    bullets: [
      "Management reporting layer across all operational data",
      "Financial reporting connected to job records and billing",
      "Compliance and audit records available on demand",
    ],
  },
];

const relatedCards = [
  {
    title: "Replacing Spreadsheets",
    desc: "The specific case for moving job records and rate management from spreadsheets into a connected system — and what connects once both are in one place.",
    href: "/solutions/replacing-spreadsheets",
  },
  {
    title: "Client Portal",
    desc: "Self-service access for clients: job status, delivery history, POD, invoices and rate cards — without inbound calls to your team to provide the same information.",
    href: "/platform/client-portal",
  },
  {
    title: "Subcontractor Portal",
    desc: "Dedicated portal for external transport partners — structured job delegation, logged acceptance, status updates and POD without manual coordination for each job.",
    href: "/platform/subcontractor-portal",
  },
];

const faqs = [
  {
    q: "What's a realistic admin saving — can you give numbers?",
    a: "We don't publish a specific percentage saving because it varies materially by operation: how manual the current process is, how many subcontractors are involved, how frequently clients call for status, and how invoicing is currently handled all affect the outcome. What we can say is that the overhead steps most consistently removed are: docket chasing and re-entry (eliminated by digital POD and invoice-from-job), client status calls (reduced by client portal), and subcontractor coordination messages (reduced by the subcontractor portal). For an honest model of what the change looks like for your operation's volume and current process, use the admin cost calculator or discuss specifics during a demo.",
  },
  {
    q: "Does the platform handle high-volume days without slowing down?",
    a: "HaulageOps is a SaaS platform on a multi-tenant architecture. Job volume on a given day does not degrade system performance. The dispatch board updates in real time via Socket.io; the driver app processes status updates and POD submissions as they are submitted. The platform is designed for operations running significant daily job volumes across multiple drivers, vehicles and subcontractors simultaneously.",
  },
  {
    q: "How many jobs can one dispatcher manage with HaulageOps?",
    a: "This depends on the nature of the jobs — a dispatcher managing 30 short-run tipper jobs has a different workload profile from one managing 10 complex multi-site deliveries. What changes with HaulageOps is that the dispatcher is not spending time building the status picture manually, chasing dockets, or re-entering data. Those freed hours can go to managing more jobs or to better managing the existing volume. Operators typically report that dispatchers handle meaningfully more concurrent jobs without additional coordination overhead after moving to the platform.",
  },
  {
    q: "What if my admin team is resistant to a new system?",
    a: "Resistance to new systems is usually about disruption to familiar workflows — which is reasonable. The onboarding process includes training for the admin and dispatch team, and implementation is typically structured around going live when the team is confident rather than imposing a hard cutover. The driver app and client portal are designed to be intuitive for people who aren't power users. Subcontractor portal access is similarly straightforward. The practical experience is that admin teams adapt quickly because the platform removes the parts of the job that were frustrating — chasing, re-entering, manually tracking — rather than adding new complexity.",
  },
  {
    q: "Can HaulageOps support the operation during a busy peak — more jobs than normal?",
    a: "Peak periods are where connected operations show the most value. On a busy day with manual processes, the overhead grows at the same rate as the job volume — more jobs means more calls, more docket chasing, more re-entry. With HaulageOps, the overhead steps that don't scale well are handled by the system. Adding more jobs to the dispatch board, more subcontractors to the portal, and more clients to the client portal does not proportionally increase the admin burden.",
  },
  {
    q: "Is HaulageOps suitable for a 15-truck operation, or is it only for larger fleets?",
    a: "HaulageOps is designed for operators in the 15–80 vehicle range. A 15-truck operation with a mix of owned trucks, a handful of regular subcontractors and several active clients is exactly the profile the platform is built for. The overhead of manual processes at 15 trucks is already meaningful — docket chasing, client status calls, rate lookups, subcontractor coordination — and the value of connected operations is clear at that scale. Operators don't need to be at 40 trucks before the platform makes sense.",
  },
];

export default function ScalingWithoutMoreAdminPage() {
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
            <span className="text-[#0F172A] font-medium">Scale Without More Admin</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Transform Operations
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            More trucks. More subcontractors. No more admin headcount growing in proportion.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            On manual processes, every 10 additional trucks adds an additional admin burden that eventually requires another person. When jobs are created once and data flows through automatically, that relationship changes — not because the work disappears, but because the overhead steps do.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Platform Overview
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-[#0F172A] py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {proofStrip.map((item) => (
              <div key={item} className="flex flex-col items-center justify-center gap-1">
                <span className="text-white font-bold text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHERE ADMIN TIME ACTUALLY GOES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Where Admin Time Actually Goes</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The overhead in haulage admin isn&apos;t inevitable. Most of it is re-work.
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                When operators track where their admin time goes, the same categories appear across different businesses: taking job requests by phone and entering them into a system or spreadsheet; calling or messaging to get status updates; chasing dockets that haven&apos;t arrived yet; re-entering job data into an invoicing system; creating and sending invoices manually; answering client calls asking for delivery confirmation.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                None of these tasks require human judgment. They require data that already exists somewhere in the operation to be moved, re-entered or communicated. That&apos;s the definition of work that a connected system can handle — or eliminate entirely.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                The challenge for operators on manual processes is that each task individually feels manageable. Chasing one docket is two minutes. Entering one job into the invoicing system is five minutes. Answering one status call is three minutes. Across 40 jobs a day with multiple drivers, subcontractors and clients, those minutes accumulate into hours — and at a certain scale, into additional headcount requirements.
              </p>
            </div>
            <div>
              <p className="text-[#475569] leading-relaxed">
                The question isn&apos;t whether these tasks can be done faster. It&apos;s whether they need to be done at all, or whether the underlying cause — data that exists in one place but needs to be in another — can be addressed at the source.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                When a job is created in HaulageOps, the rate is applied from the rate card. The job assignment goes to the driver app or the subcontractor portal. Status updates come back from the field without calls being made. Digital POD is attached at delivery. The invoice is built from the completed job record. The Xero sync transfers it without re-entry. The client portal shows the client their own job status without them needing to call.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                The data is created once — at job creation — and flows through the rest of the process. The re-entry steps don&apos;t happen because the data doesn&apos;t need to be moved manually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE THE OVERHEAD REDUCTION COMES FROM */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Where the Overhead Reduction Comes From</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Six specific tasks that connected operations changes or removes.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {overheadTasks.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                {card.paras.map((p) => (
                  <p key={p} className="mt-3 text-sm text-[#475569] leading-relaxed">{p}</p>
                ))}
                <ul className="mt-5 space-y-3">
                  {card.bullets.map((item) => (
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

      {/* THE REALISTIC PICTURE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Realistic Picture</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            What changes and what doesn&apos;t.
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="font-bold text-[#0F172A] mb-4">What changes</h3>
              <p className="text-[#475569] leading-relaxed">
                The re-entry steps — transcribing data from one system to another, chasing information that the system should already have, manually compiling status pictures that update continuously — are reduced or removed. One dispatcher can manage more concurrent jobs because the jobs don&apos;t need to be tracked manually. One admin person can handle more invoices because the invoices are built from job records, not re-entered.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                The client relationship changes: clients who have self-service portal access don&apos;t generate the same volume of inbound status calls. The subcontractor relationship changes: subs who have portal access provide structured, logged responses rather than informal messages that need to be re-recorded elsewhere.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#0F172A] mb-4">What doesn&apos;t change</h3>
              <p className="text-[#475569] leading-relaxed">
                Operational judgment doesn&apos;t change. Deciding which driver is best suited for a particular job, how to handle a client who needs an urgent accommodation, how to manage a complex multi-site day — those require human decision-making and continue to require it. HaulageOps provides the information to make those decisions well, not a replacement for making them.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Communication doesn&apos;t change. Drivers, dispatchers, subcontractors and clients continue to call and message. The difference is that the operational record of what was agreed, assigned and delivered exists in the platform — not only in the call log and the message thread.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                The honest framing: connected operations does not halve headcount. It changes the growth equation — the point at which additional trucks require additional admin people moves out significantly. Use the <Link href="/resources/tools/admin-cost-calculator" className="text-[#E8652B] hover:underline font-medium">admin cost calculator</Link> to model what that looks like for your operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SOLUTIONS */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related Solutions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Other solutions that contribute to operational efficiency
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">
                    {card.title}
                  </Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
                <Link href={card.href} className="mt-3 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  View page <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#475569]">
            Also relevant:{" "}
            <Link href="/solutions/replacing-whatsapp-dispatch" className="text-[#E8652B] hover:underline font-medium">Replacing WhatsApp Dispatch</Link>
            {" · "}
            <Link href="/resources/tools/admin-cost-calculator" className="text-[#E8652B] hover:underline font-medium">Admin Cost Calculator</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently Asked Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Scaling without more admin — common questions.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Grow the fleet without growing the overhead at the same rate.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              A 20-minute demo covers dispatch, digital POD, client portal and the job-to-invoice flow — and how they connect to reduce re-work.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform">
              <Button size="lg" variant="outline" className="border-[#334155] text-white hover:bg-[#1E293B]">
                Platform Overview
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

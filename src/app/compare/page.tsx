import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Compare Haulage Software — HaulageOps vs Alternatives | HaulageOps",
  description:
    "Honest comparisons between HaulageOps and other haulage management systems — spreadsheets, Allotrac, MyTrucking, Mandata and more.",
};

const proofItems = [
  "Purpose-built for bulk haulage",
  "5 role-specific portals",
  "$1,500 standard setup",
  "Subcontractor portal included",
  "Xero integration built-in",
  "No AI hype — just operational software",
];

const approachPoints = [
  "Pricing model — per-vehicle vs subscription, setup costs",
  "Subcontractor coordination — how subs interact with the system",
  "Client portal — what clients can and cannot see",
  "Billing depth and Xero integration",
  "Sector focus — horizontal platform vs purpose-built",
  "Honest section: when the other system is a better fit",
];

const comparisons = [
  {
    tag: "Most common starting point",
    title: "HaulageOps vs Spreadsheets",
    href: "/compare/haulageops-vs-spreadsheets",
    desc: "Spreadsheets are free, familiar, and genuinely adequate for simple haulage operations. This page names exactly where they break under operational weight: live dispatch visibility, subcontractor coordination, client access, POD capture, and Xero invoicing.",
    points: [
      "When to stay on spreadsheets (honest answer)",
      "Where 10+ trucks and subcontractors expose the limits",
      "Can you import your spreadsheet data to HaulageOps?",
    ],
    cta: "Read comparison",
  },
  {
    tag: "Australian market",
    title: "HaulageOps vs Allotrac",
    href: "/compare/haulageops-vs-allotrac",
    desc: "Both are AU-focused haulage platforms. The key structural difference: Allotrac's subcontractors don't get their own login — admin manages everything on their behalf. HaulageOps has a dedicated subcontractor portal where subs accept/decline jobs and update progress directly.",
    points: [
      "Per-vehicle pricing vs subscription model",
      "Subcontractor self-service: the core difference",
      "Client portal: invoices, rate cards, live jobs",
    ],
    cta: "Read comparison",
  },
  {
    tag: "NZ / AU market",
    title: "HaulageOps vs MyTrucking",
    href: "/compare/haulageops-vs-mytrucking",
    desc: "MyTrucking is NZ-founded, per-vehicle, and covers 7+ transport sectors. Its job-sharing feature only works when the subcontractor is also a paying MyTrucking customer. HaulageOps subcontractor portal works for any sub regardless of what software they run.",
    points: [
      "Horizontal platform vs bulk-specific",
      "Subcontractor portal: walled garden vs open",
      "Billing depth for bulk rate structures",
    ],
    cta: "Read comparison",
  },
  {
    tag: "UK market",
    title: "HaulageOps vs Mandata",
    href: "/compare/haulageops-vs-mandata",
    desc: "Mandata is a long-established UK TMS with deep feature coverage built for large hauliers. If you're a growing operator choosing your first TMS, the comparison looks different than if you're already on Mandata and evaluating switching costs.",
    points: [
      "Enterprise incumbent vs growth-stage TMS",
      "Implementation complexity and timeline",
      "Who each system is actually built for",
    ],
    cta: "Read comparison",
  },
];

const frameworkCards = [
  {
    title: "Subcontractor coordination",
    p: "How do your subcontractors actually interact with the system? Can they log in themselves, or does your admin manage everything on their behalf? Can a sub accept a job, update progress, and submit a docket without phoning the office?",
    points: [
      "Do subs get their own login?",
      "Does the system work for subs who don't pay for it?",
      "Can subs accept/decline and add comments?",
    ],
  },
  {
    title: "Client visibility",
    p: "What can your clients actually see? A tracking link is not the same as a client portal. Can your client access their rate card, invoice history, job history and dockets without calling you?",
    points: [
      "Live job status — not just email notifications",
      "Invoice access and POD/docket download",
      "Rate card visibility per client",
    ],
  },
  {
    title: "Billing and Xero integration",
    p: "How does a completed job become a Xero invoice? Does the rate auto-calculate from the rate card, or are you re-entering data? What's the step count from job completion to invoice sent?",
    points: [
      "Rate card auto-applies to completed jobs",
      "Xero sync: invoice creation and payment webhooks",
      "Separate client charge and subcontractor pay rates",
    ],
  },
  {
    title: "Implementation reality",
    p: "What does it actually take to go live? How long before dispatch sees jobs on the board, drivers are on the app, and subs have logins? What happens to your existing data?",
    points: [
      "Setup timeline: weeks, not months",
      "Data migration from spreadsheets or existing system",
      "Driver and dispatch training approach",
    ],
  },
];

const relatedCards = [
  {
    title: "Haulage Software Buyer's Guide",
    href: "/resources/guides/haulage-software-buyers-guide",
    p: "A structured guide to evaluating haulage TMS platforms — what questions to ask, what features matter for bulk operations, and how to build an internal business case for replacing spreadsheets.",
    cta: "Read guide",
  },
  {
    title: "Software Requirements Checklist",
    href: "/resources/checklists/haulage-software-requirements",
    p: "A downloadable checklist of requirements to bring into any vendor demo — subcontractor portal, client visibility, billing integration, compliance records and more.",
    cta: "Get checklist",
  },
  {
    title: "Customer Story",
    href: "/customers/bulk-haulage-operator",
    p: "How a 40-year bulk haulage operator moved from spreadsheets and WhatsApp to HaulageOps — and what changed operationally in the first 90 days.",
    cta: "Read story",
  },
];

const faqs = [
  {
    q: "How do I know if HaulageOps is even worth evaluating?",
    a: "HaulageOps is built for operators running 15–80 vehicles with a mix of owned trucks and subcontractors, billing clients under rate cards, with some compliance record-keeping obligation. If you're under 10 trucks with no subcontractor network and straightforward billing, you may not need software at this level yet. If you're a parcel carrier, 3PL, or freight forwarder, we're not built for your use case and will tell you so in the first five minutes.",
  },
  {
    q: "Do the comparison pages on this site have an inherent bias toward HaulageOps?",
    a: "Yes — every page is written by HaulageOps. We're not going to pretend otherwise. What we try to do is name specific, verifiable differences rather than vague claims, include an honest \"when the other system is a better fit\" section on each page, and note the date we last reviewed competitor information. Where we're wrong, we'd genuinely like to know — contact us.",
  },
  {
    q: "Can I move from my current system to HaulageOps without losing data?",
    a: "Yes. Standard implementation includes data migration assistance — we help move client records, rate cards, vehicle records and historical job data from your current system or spreadsheets. Migration scope depends on what format your data is in and how much history you need to carry across. This is included in the $1,500 standard setup fee.",
  },
  {
    q: "What does a HaulageOps demo actually involve?",
    a: "A 20-minute call. The first 10 minutes covers your operation — fleet size, subcontractor count, current tools, biggest operational pain points. The second 10 minutes shows you exactly the parts of HaulageOps that address those points. No full product tour unless you want one. No sales pressure at the end — we'll tell you honestly if the product fits.",
  },
  {
    q: "Are the competitor details on these pages accurate?",
    a: "We draw from publicly available sources — vendor websites, review platforms, published documentation — and note the review date on each page. Software changes. If you spot something that looks out of date or incorrect, contact us and we'll review it.",
  },
  {
    q: "What if I'm comparing HaulageOps against a system not listed here?",
    a: "Book a demo and bring the comparison. Tell us what system you're also evaluating, what matters most to your operation, and we'll walk through the specific differences directly. We can usually cover a two-system comparison in a 30-minute call.",
  },
];

export default function ComparePage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb + Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#FFF9F5] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Compare Haulage Software</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Haulage Software Comparisons
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Choosing haulage software? Start with an honest comparison.
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Most comparison pages are written by the vendor doing the comparing. We try to do something different: name what each system genuinely does well, name where it falls short, and let you decide if HaulageOps fits your operation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a demo
              </Button>
            </Link>
            <Link href="/resources/guides/haulage-software-buyers-guide">
              <Button size="lg" variant="outline" className="text-[#0F172A] font-semibold">
                Buyer's guide →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="bg-[#0D1525] py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {proofItems.map((item) => (
            <span key={item} className="text-sm text-[#CBD5E1] font-medium">{item}</span>
          ))}
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Our approach</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">What a fair software comparison looks like</h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-12">
            <div className="space-y-4 text-[#475569] leading-relaxed text-sm">
              <p>
                The typical vendor comparison page scores every dimension in its own favour and buries caveats in footnotes. That approach doesn't help operators make a good decision — and a bad TMS choice affects how your whole operation runs for years.
              </p>
              <p>
                Haulage software buying decisions touch dispatch, subcontractor coordination, client relationships, billing, and compliance records. Getting it wrong costs time, money, and operational disruption that's difficult to unwind mid-year.
              </p>
              <p>
                On each comparison page we try to name specific, verifiable differences rather than vague claims. We include an honest section on when the competing product is a better fit. Where we rely on publicly available competitor information, we note the review date.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-4">What we compare on each page</h3>
              <ul className="space-y-3">
                {approachPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle2 className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-[#64748B] leading-relaxed">
                If you spot something that looks out of date or wrong, <Link href="/contact" className="text-[#E8652B] hover:underline font-medium">let us know</Link>. We'd rather be accurate than win a comparison on a point that's no longer true.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON CARDS */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Comparison pages</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">Choose a comparison</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {comparisons.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] flex flex-col">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#E8652B]">{card.tag}</p>
                <h3 className="mt-3 text-xl font-bold text-[#0F172A]">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">{card.title}</Link>
                </h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.desc}</p>
                <ul className="mt-4 space-y-2.5 flex-1">
                  {card.points.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                      <CheckCircle2 className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={card.href} className="mt-5 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-bold">
                  {card.cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Our commitment</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">If HaulageOps isn't the right fit, we'll say so in the demo</h2>
              <p className="mt-4 text-[#475569] leading-relaxed text-sm">
                Some operators find during a demo conversation that their situation — small fleet, no subcontractor network, single client with simple billing — means they're better served staying on spreadsheets or trying a simpler tool first. We'd rather have that conversation upfront than have you invest in an implementation that doesn't match your situation.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed text-sm">
                HaulageOps is built specifically for operators managing owned trucks alongside a subcontractor network, with clients who expect visibility and a finance team that needs clean invoicing. If that's not your current situation, we'll tell you.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed text-sm">
                When you book a demo, the first 10 minutes covers your operation: fleet size, subcontractor count, current tools, biggest operational problems. We map what you need to what we actually do before showing you a single screen.
              </p>
              <div className="mt-6">
                <Link href="/demo">
                  <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                    Book a 20-minute demo
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <div className="rounded-2xl bg-[#0D1525] border border-[#1E293B] overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 bg-[#1E293B]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E8652B]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#94A3B8]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
                  <span className="ml-3 text-xs font-semibold text-[#CBD5E1]">Demo intake framework — what we ask first</span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    Screenshot of a demo intake or qualification checklist — showing the questions asked before any product demo: number of owned trucks, number of regular subcontractors, current tools (spreadsheet/WhatsApp/existing TMS), primary pain points (dispatch visibility, subcontractor coordination, billing delays, client calls). Reinforces that the conversation starts with the operator's situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVALUATION FRAMEWORK */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Evaluation framework</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">What to look for in any haulage TMS — regardless of which one you choose</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Before reading any vendor comparison (including ours), these are the questions that matter most for bulk haulage and construction logistics operations.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {frameworkCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p}</p>
                <ul className="mt-4 space-y-2.5">
                  {card.points.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                      <CheckCircle2 className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#475569] leading-relaxed">
            For a complete framework, read the{" "}
            <Link href="/resources/guides/haulage-software-buyers-guide" className="text-[#E8652B] hover:underline font-medium">Haulage Software Buyer's Guide</Link>{" "}
            — it covers all these dimensions with a requirements checklist you can use across any vendor evaluation.
          </p>
        </div>
      </section>

      {/* RELATED RESOURCES */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related resources</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">More tools for your evaluation</h2>
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

      {/* FAQ */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">Questions about choosing haulage software</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Still evaluating? Talk to us before you decide.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              A 20-minute demo starts with your operation, not our product pitch. We'll tell you honestly if HaulageOps fits.
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

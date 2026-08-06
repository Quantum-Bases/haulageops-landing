import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "HaulageOps vs Allotrac: Which Platform Fits Bulk Haulage Operators? | HaulageOps",
  description:
    "Comparing HaulageOps and Allotrac for bulk haulage operators. See how each platform handles dispatch, subcontractor coordination, billing and Xero integration for Australian trucking operations.",
};

const comparisonRows = [
  {
    feature: "Built for bulk haulage / tipper operations",
    ho: { type: "tick", text: "Purpose-built for bulk haulage dispatch workflows" },
    alt: { type: "partial", text: "General transport management; configurable for bulk" },
  },
  {
    feature: "Subcontractor self-service portal",
    ho: { type: "tick", text: "Dedicated portal — job acceptance, docket submission, no app required" },
    alt: { type: "partial", text: "Subcontractor access available; varies by configuration" },
  },
  {
    feature: "Digital dockets & POD capture",
    ho: { type: "tick", text: "Driver app photo capture + timestamp + GPS" },
    alt: { type: "tick", text: "Electronic POD available" },
  },
  {
    feature: "Rate card & contract management",
    ho: { type: "tick", text: "Client-specific rates, bulk and hourly, with version history" },
    alt: { type: "tick", text: "Rate management available" },
  },
  {
    feature: "Xero integration (native OAuth2)",
    ho: { type: "tick", text: "Native OAuth2, invoices push directly with line items" },
    alt: { type: "partial", text: "Integration available; connection method may vary" },
  },
  {
    feature: "Client portal (self-service job visibility)",
    ho: { type: "tick", text: "Clients see their jobs and delivery evidence in real time" },
    alt: { type: "partial", text: "Client-facing features vary by package" },
  },
  {
    feature: "Fatigue / break management records",
    ho: { type: "tick", text: "Driver-logged breaks in app, timestamped per job" },
    alt: { type: "tick", text: "Fatigue compliance features available" },
  },
  {
    feature: "Setup cost & time",
    ho: { type: "text", text: "From $1,500 setup · 2–4 week go-live" },
    alt: { type: "text", text: "Contact Allotrac for pricing; implementation varies" },
  },
  {
    feature: "Hardware / telematics requirement",
    ho: { type: "tick", text: "No hardware required — driver BYOD, browser-based portals" },
    alt: { type: "partial", text: "May include hardware telematics options" },
  },
  {
    feature: "Audit trail & compliance documentation",
    ho: { type: "tick", text: "Full tamper-proof log of all job and user actions" },
    alt: { type: "tick", text: "Reporting and compliance tools available" },
  },
];

const haulageopsFit = [
  "Fleet of 5–100+ trucks, mixed owned and subcontracted",
  "Multiple clients with different rate structures per job type",
  "Subcontractors who need a simple way to accept jobs and submit dockets",
  "Using Xero for accounting and want invoices automated",
  "Replacing spreadsheets and WhatsApp as the primary dispatch tools",
  "Need compliance records for CoR without buying expensive hardware",
];

const keyQuestions = [
  "Can a subcontractor accept a job and submit a docket without installing an app?",
  "Can you set different rates per client, per job type and per truck class?",
  "How does an invoice get created from a completed set of dockets?",
  "What does the Xero sync look like — are line items mapped correctly?",
  "How long does driver onboarding take on day one?",
  "What are the total costs — setup, monthly, and per additional user?",
];

const faqs = [
  {
    q: "Is HaulageOps or Allotrac better for bulk haulage?",
    a: "HaulageOps is purpose-built for bulk haulage operators — the dispatch board, subcontractor portal, docket workflow and billing are all designed around the way bulk haulage jobs actually run. Allotrac is a broader transport management system that can be configured for bulk haulage. If your primary operation is bulk, tippers, earthworks or quarrying, HaulageOps will typically fit more directly out of the box.",
    open: true,
  },
  {
    q: "Which platform has better Xero integration?",
    a: "HaulageOps uses a native OAuth2 Xero integration where invoices are created in HaulageOps and pushed to Xero in one click, with line items mapped directly to your rate card structure. We'd encourage you to check Allotrac's current Xero integration specifics with their team, as these details can change.",
  },
  {
    q: "Does HaulageOps require hardware?",
    a: "No. HaulageOps requires no telematics hardware. Drivers use the HaulageOps app on their own smartphones. Subcontractors use the browser-based portal on any device. This significantly reduces the cost and complexity of rollout.",
  },
];

function Mark({ type, text }: { type: string; text: string }) {
  if (type === "tick") {
    return (
      <span>
        <span className="text-green-600 font-black">✓</span> {text}
      </span>
    );
  }
  if (type === "partial") {
    return (
      <span>
        <span className="text-amber-600 font-black">◐</span> {text}
      </span>
    );
  }
  return <span>{text}</span>;
}

export default function HaulageOpsVsAllotracPage() {
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
            <span className="text-[#0F172A] font-medium">HaulageOps vs Allotrac</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Platform Comparison
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            HaulageOps vs Allotrac
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Both platforms serve Australian transport operators. The key difference is focus: Allotrac is a broad transport management system; HaulageOps is built specifically for bulk haulage operators managing owned fleets, subcontractors and demanding construction or resource-sector clients.
          </p>
        </div>
      </section>

      {/* FEATURE COMPARISON */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Feature comparison</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Feature Comparison</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Based on publicly available information. For the most accurate picture of either platform for your operation, we recommend a live demonstration of both.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#0F172A] bg-[#F8FAFC] border border-[#E2E8F0]">Feature Area</th>
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-white bg-[#0F172A] border border-[#0F172A]">HaulageOps</th>
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#0F172A] bg-[#F1F5F9] border border-[#E2E8F0]">Allotrac</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="bg-white">
                    <td className="px-5 py-4 text-sm font-semibold text-[#0F172A] bg-[#F8FAFC] border border-[#E2E8F0] align-top">{row.feature}</td>
                    <td className="px-5 py-4 text-sm text-[#475569] border border-[#E2E8F0] align-top"><Mark type={row.ho.type} text={row.ho.text} /></td>
                    <td className="px-5 py-4 text-sm text-[#475569] border border-[#E2E8F0] align-top"><Mark type={row.alt.type} text={row.alt.text} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[13px] text-[#7A8A94]">
            This comparison is for general guidance only. Allotrac features may vary by plan and configuration. Last reviewed January 2025.
          </p>
        </div>
      </section>

      {/* WHO IT'S BEST FOR */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Who HaulageOps Is Best For</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">The Bulk Haulage Operator Running Mixed Fleets</h2>
              <p className="mt-4 text-[#475569] leading-relaxed text-sm">
                HaulageOps was purpose-built for operators who run a combination of owned trucks and subcontractors — typically in bulk haulage, civil construction, earthworks, quarries and material transport.
              </p>
              <ul className="mt-5 space-y-3">
                {haulageopsFit.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle2 className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/demo">
                  <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                    See HaulageOps in Action →
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Key Questions to Ask</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Before You Decide</h2>
              <p className="mt-4 text-[#475569] leading-relaxed text-sm">
                When evaluating any platform for bulk haulage, make sure to test these specific scenarios in a demo:
              </p>
              <ul className="mt-5 space-y-3">
                {keyQuestions.map((item) => (
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

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} open={faq.open} className="group border border-[#E2E8F0] bg-white rounded-xl overflow-hidden">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See HaulageOps for yourself</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Book a 20-minute demo tailored to your fleet size and operation type.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

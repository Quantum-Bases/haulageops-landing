import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "HaulageOps vs MyTrucking: Comparison for Bulk Haulage Operators | HaulageOps",
  description:
    "Comparing HaulageOps and MyTrucking for bulk haulage operators. See how each platform handles subcontractor management, digital dockets, Xero integration and billing for Australian and NZ trucking businesses.",
};

const comparisonRows = [
  {
    feature: "Built for bulk haulage dispatch",
    ho: { type: "tick", text: "Dispatch board designed for bulk loads and multi-truck allocation" },
    alt: { type: "partial", text: "General freight focus; configurable for bulk" },
  },
  {
    feature: "Subcontractor self-service portal",
    ho: { type: "tick", text: "Dedicated portal — job acceptance, dockets, no app required" },
    alt: { type: "partial", text: "Subcontractor features available; varies by plan" },
  },
  {
    feature: "Digital dockets & POD capture",
    ho: { type: "tick", text: "Driver app photo capture, timestamped, GPS-tagged" },
    alt: { type: "tick", text: "Electronic POD and docket features" },
  },
  {
    feature: "Client-specific rate cards",
    ho: { type: "tick", text: "Multiple rate types per client — bulk, hourly, per tonne, per load" },
    alt: { type: "tick", text: "Rate management available" },
  },
  {
    feature: "Xero integration (native OAuth2)",
    ho: { type: "tick", text: "Native, invoices push with line items mapped to rate cards" },
    alt: { type: "tick", text: "Xero integration available" },
  },
  {
    feature: "Client portal (job visibility)",
    ho: { type: "tick", text: "Clients see real-time job status and delivery evidence" },
    alt: { type: "partial", text: "Client-facing features vary" },
  },
  {
    feature: "Multi-supplier & supplier management",
    ho: { type: "tick", text: "Dedicated supplier management for quarries, depots and material sources" },
    alt: { type: "partial", text: "Freight-focused; supplier management less prominent" },
  },
  {
    feature: "Chain of Responsibility records (AU)",
    ho: { type: "tick", text: "Fatigue records, job audit trail, document retention built in" },
    alt: { type: "tick", text: "Compliance features available" },
  },
  {
    feature: "Setup cost & go-live time",
    ho: { type: "text", text: "From $1,500 setup · 2–4 week go-live" },
    alt: { type: "text", text: "Contact MyTrucking for current pricing" },
  },
  {
    feature: "Hardware dependency",
    ho: { type: "tick", text: "No hardware required — BYOD driver app, browser portals" },
    alt: { type: "tick", text: "App-based; generally no hardware required" },
  },
];

const haulageopsDiffers = [
  "Supplier management for quarries, processing plants and material depots",
  "Job types designed around bulk loads — per tonne, per hour, per load",
  "Subcontractor coordination purpose-built for multi-truck construction site operations",
  "Client portal showing real-time delivery evidence by job and site",
  "CoR compliance records designed for HVNL obligations in AU",
];

const rightQuestions = [
  "Can you set a rate per tonne, per load and per hour for the same client?",
  "Can a subcontractor submit a docket without an app — just a browser?",
  "How does an invoice get created from a week of completed loads?",
  "What does the Xero invoice look like — are individual loads shown as line items?",
  "Can your office see subcontractor loads in real time, not just at end of week?",
  "Can a client log in and see their own deliveries and dockets?",
];

const faqs = [
  {
    q: "Is HaulageOps or MyTrucking better for bulk haulage operators?",
    a: "If your primary business is bulk haulage — tippers, earthworks, quarry runs, construction logistics — HaulageOps will typically fit more naturally. It's built around the specific workflows of bulk dispatch: load-based billing, subcontractor coordination, supplier management and Xero invoicing. MyTrucking is a capable platform for general freight operators that can be configured for bulk work.",
    open: true,
  },
  {
    q: "Does HaulageOps work in New Zealand?",
    a: "Yes. HaulageOps supports operators in Australia and New Zealand. The Xero integration works with NZ Xero accounts. CoR content on this site refers specifically to Australian HVNL — NZ operators should seek advice on their specific regulatory obligations.",
  },
  {
    q: "Can I migrate my data from MyTrucking to HaulageOps?",
    a: "Yes. Our implementation team can work with your existing job data, client list and rate cards — whether they're in MyTrucking, a spreadsheet, or another system. We've migrated operators from a range of platforms. Contact us to discuss your specific data migration requirements.",
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

export default function HaulageOpsVsMyTruckingPage() {
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
            <span className="text-[#0F172A] font-medium">HaulageOps vs MyTrucking</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Platform Comparison
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            HaulageOps vs MyTrucking
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            MyTrucking is a popular platform for small to mid-size freight operators. HaulageOps is purpose-built for bulk haulage — particularly operators managing both owned trucks and subcontractors on construction, earthworks and material transport work.
          </p>
        </div>
      </section>

      {/* FEATURE COMPARISON */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Feature comparison</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Feature Comparison</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Based on publicly available information. Verify current feature availability with each vendor before making a decision.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#0F172A] bg-[#F8FAFC] border border-[#E2E8F0]">Feature Area</th>
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-white bg-[#0F172A] border border-[#0F172A]">HaulageOps</th>
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#0F172A] bg-[#F1F5F9] border border-[#E2E8F0]">MyTrucking</th>
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
            Comparison for general guidance only. MyTrucking features may vary by plan. Last reviewed January 2025.
          </p>
        </div>
      </section>

      {/* WHERE HAULAGEOPS DIFFERS */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Where HaulageOps Differs</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Built Around the Bulk Haulage Workflow</h2>
              <p className="mt-4 text-[#475569] leading-relaxed text-sm">
                The core difference is operational focus. MyTrucking serves a broad range of freight operators — general freight, courier, tautliner, flatbed. HaulageOps is built specifically around bulk haulage: loading from a quarry or supplier, delivering to a construction or civil site, capturing load weights, and billing per tonne or per load.
              </p>
              <ul className="mt-5 space-y-3">
                {haulageopsDiffers.map((item) => (
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
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Right Questions</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">What to Test in Any Demo</h2>
              <ul className="mt-5 space-y-3">
                {rightQuestions.map((item) => (
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

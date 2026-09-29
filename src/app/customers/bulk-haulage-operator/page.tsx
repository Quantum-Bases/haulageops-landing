import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Customer Story: Bulk Haulage Operator Replaces Spreadsheets | HaulageOps",
  description:
    "How a bulk haulage operator with 18 trucks replaced spreadsheets and WhatsApp with HaulageOps — cutting invoice delays, eliminating paper dockets and gaining full visibility across owned and subcontracted loads.",
};

const proofStrip = [
  "18 trucks + 6 regular subcontractors",
  "3-week implementation",
  "Invoice delays eliminated",
  "Paper dockets gone",
  "Xero sync live from day 1",
  "Full job visibility",
];

const challenges = [
  "3–4 week invoice cycles due to manual docket reconciliation",
  "Driver communication mixed with personal messages in WhatsApp groups",
  "No visibility of subcontractor loads until end of week",
  "Paper dockets scanned, emailed, filed — then lost",
  "No audit trail for client disputes",
];

const results = [
  { strong: "Invoice cycle dropped from 3–4 weeks to same-week", desc: "dockets arrive digitally as jobs complete" },
  { strong: "Paper eliminated", desc: "drivers photograph dockets in the cab; originals stay with the site" },
  { strong: "Subcontractor visibility", desc: "loads appear in real time as subcontractors submit dockets" },
  { strong: "Client disputes resolved in minutes", desc: "timestamped job records and GPS data on every load" },
  { strong: "Xero sync automated", desc: "invoices pushed directly with line items matching rate cards" },
  { strong: "Admin time reduced", desc: "what took an afternoon now takes 20 minutes per week" },
];

const features = [
  {
    title: "Dispatch Management",
    p: "Daily job allocation to owned trucks and subcontractors from a single dispatch board. Real-time status visibility across all active loads.",
    links: [{ label: "Dispatch Management", href: "/platform/dispatch-management" }],
  },
  {
    title: "Driver App & Digital Dockets",
    p: "Drivers accept jobs, record loads, photograph dockets and capture signatures from their own phone. Dockets arrive in the Admin Portal in real time.",
    links: [
      { label: "Driver App", href: "/platform/driver-app" },
      { label: "Digital Dockets", href: "/solutions/digital-dockets" },
    ],
  },
  {
    title: "Subcontractor Portal",
    p: "Six subcontractors use the browser-based portal to accept allocated jobs and submit dockets. No app install required — works on any device.",
    links: [{ label: "Subcontractor Portal", href: "/platform/subcontractor-portal" }],
  },
  {
    title: "Billing & Xero Integration",
    p: "Completed jobs flow automatically into the billing module. Invoices are generated against client rate cards and pushed to Xero in one click.",
    links: [
      { label: "Billing & Invoicing", href: "/platform/billing-and-invoicing" },
      { label: "Xero Integration", href: "/platform/integrations/xero" },
    ],
  },
];

export default function CustomerStoryPage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb + Hero */}
      <section className="pt-24 pb-14 bg-gradient-to-b from-neutral-50/80 via-white to-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Customers</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Bulk Haulage Operator</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Customer Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            &ldquo;We Went from WhatsApp and Spreadsheets to a Real System in Three Weeks&rdquo;
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            A bulk haulage operator running 18 trucks across civil construction and earthworks sites explains how HaulageOps replaced the chaos of manual dispatch — and what changed on day one.
          </p>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-neutral-900 py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {proofStrip.map((item) => (
              <span key={item} className="text-white font-bold text-sm">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* THE CHALLENGE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Challenge</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900">
                Running 18 Trucks on WhatsApp and a Shared Spreadsheet
              </h2>
              <p className="mt-6 text-neutral-600 leading-relaxed">
                Before HaulageOps, the operation ran on three tools: a shared Excel spreadsheet for job allocations, WhatsApp groups for driver communication, and paper dockets collected at the end of each week.
              </p>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                The problems compounded as the fleet grew. Subcontractors had their own systems — or no system at all. Dockets went missing. Invoices were delayed because the admin team couldn&apos;t reconcile loads against client purchase orders. And when a client asked for proof of a specific delivery, the answer was &ldquo;let me check the folder&rdquo;.
              </p>
              <ul className="mt-6 space-y-3">
                {challenges.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-900 border-y border-neutral-800 overflow-hidden">
              <div className="px-5 py-3 bg-neutral-800 text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                Operation Snapshot
              </div>
              <div className="p-6">
                <div className="border-b border-neutral-800 pb-4 mb-4">
                  <strong className="block text-base text-white">Fleet</strong>
                  <span className="text-sm text-neutral-400">18 owned trucks + 6 regular subcontractors</span>
                </div>
                <div className="border-b border-neutral-800 pb-4 mb-4">
                  <strong className="block text-base text-white">Industries</strong>
                  <span className="text-sm text-neutral-400">Civil construction, earthworks, material transport</span>
                </div>
                <div className="border-b border-neutral-800 pb-4 mb-4">
                  <strong className="block text-base text-white">Previous tools</strong>
                  <span className="text-sm text-neutral-400">Excel spreadsheet + WhatsApp + paper dockets</span>
                </div>
                <div>
                  <strong className="block text-base text-white">Accounting</strong>
                  <span className="text-sm text-neutral-400">Xero</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE BAND 1 */}
      <section className="py-14 bg-[#FFF8EC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl sm:text-2xl font-semibold text-neutral-900 leading-relaxed">
            &ldquo;The thing that convinced me was the docket flow. Driver completes a job, takes a photo, it comes through immediately. By the time I&apos;m ready to invoice at the end of the week, every load is already reconciled.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-[#7A8A94]">— Operations Manager, Bulk Haulage Operator, Queensland</p>
        </div>
      </section>

      {/* IMPLEMENTATION + RESULTS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Implementation</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900">
                Live in Three Weeks, Without Stopping Operations
              </h2>
              <div className="mt-6 space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  The HaulageOps implementation team imported the existing client list and rate cards from spreadsheets, set up job types to match the operator&apos;s civil and earthworks work, and configured the Xero connection in the first week.
                </p>
                <p>
                  Drivers were onboarded individually over three days — downloading the app, accepting a test job, submitting a test docket. Six subcontractors were given portal access with a one-page guide. No on-site sessions required.
                </p>
                <p>
                  The operation ran parallel for one week, then cut over on a Monday morning. The first live invoices synced to Xero on day one.
                </p>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Results</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900">
                What Changed After Go-Live
              </h2>
              <ul className="mt-6 space-y-3">
                {results.map((item) => (
                  <li key={item.strong} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span><strong className="text-neutral-900">{item.strong}</strong> — {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE BAND 2 */}
      <section className="py-14 bg-[#FFF8EC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl sm:text-2xl font-semibold text-neutral-900 leading-relaxed">
            &ldquo;I used to dread the end of the month. Now I actually look forward to invoicing because everything&apos;s already there. I just hit send.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-[#7A8A94]">— Operations Manager, Bulk Haulage Operator, Queensland</p>
        </div>
      </section>

      {/* FEATURES USED */}
      <section className="py-20 bg-neutral-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Features Used by This Operator</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {features.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-neutral-200">
                <h3 className="font-bold text-neutral-900">{card.title}</h3>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{card.p}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {card.links.map((link) => (
                    <Link key={link.href} href={link.href} className="inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                      {link.label} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Running a similar operation?</h2>
            <p className="mt-2 text-neutral-400 text-sm leading-relaxed max-w-xl">
              Book a demo and we&apos;ll show you the same workflow — tailored to your fleet size and job types.
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

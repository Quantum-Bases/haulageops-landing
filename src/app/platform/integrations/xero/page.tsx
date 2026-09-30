import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
  RefreshCw,
  Sparkles,
  Lock,
  CheckCircle2,
  FileCheck,
  Receipt,
  ArrowDown,
  ArrowLeft,
  DollarSign,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Xero Accounting Integration for Bulk Haulage | HaulageOps",
  description:
    "Direct two-way OAuth2 Xero integration for heavy haulage operators. Verified mobile dockets push draft invoices to Xero with job-linked line items; payment webhooks update your board in real time.",
};

const proofStrip = [
  "Official Xero OAuth2 Connection",
  "Automated 6-Hourly Batch Sync",
  "Sub-Second Real-Time Payment Webhooks",
  "Automated Subcontractor RCTIs",
  "No Manual Re-Keying or Double Entry",
  "Supports Xero AU, NZ, and UK",
];

const workflowSteps = [
  {
    num: "01",
    title: "Secure OAuth2 Token Connection",
    desc: "Connect your Xero organisation with 1 click via official OAuth2 protocols. HaulageOps never views, stores, or handles your raw Xero accounting passwords.",
  },
  {
    num: "02",
    title: "Job Completion & Verified Docket",
    desc: "Driver captures the weighbridge ticket and customer signature in the mobile app. All job details, tonnages, and rates are locked into the live job record.",
  },
  {
    num: "03",
    title: "Automated Invoice Generation",
    desc: "HaulageOps builds the sales invoice automatically from the verified job data, applying agreed client rate cards with zero manual math.",
  },
  {
    num: "04",
    title: "Seamless Sync to Xero Ledger",
    desc: "Invoices push into Xero as approved or draft invoices with line items mapped to your specific sales and GST nominal accounts.",
  },
  {
    num: "05",
    title: "Payment Recorded in Xero",
    desc: "Your finance team reconciles incoming bank payments in Xero as normal. The moment Xero marks an invoice paid, a webhook fires immediately.",
  },
  {
    num: "06",
    title: "Real-Time Status in Dispatch & Client Portals",
    desc: "HaulageOps and the Client Portal update instantly to 'Paid'. Dispatchers and clients see settlement without interrupting accounts.",
  },
];

const twoSystemsPoints = [
  "Operations builds invoices directly from field dockets in HaulageOps",
  "Finance reconciles payments and manages the ledger inside Xero",
  "Payment status is visible to dispatchers and clients without logging into Xero",
  "Zero duplicate data entry or transcription errors from paper tickets",
];

const paymentVisibilityCards = [
  {
    title: "Operations & Dispatch View",
    desc: "Dispatchers see live financial statuses (Draft, Sent, Paid, Overdue) right on the board. Flag overdue accounts before assigning new loads to a slow-paying client.",
  },
  {
    title: "Branded Client Portal View",
    desc: "Head contractors and civil clients view their complete invoice archive and payment receipts self-service, eliminating payment confirmation emails.",
  },
  {
    title: "Executive & CFO Reporting",
    desc: "Instant gross margin reports comparing client revenue against subcontractor RCTI costs, pulling verified figures from the synced Xero ledger.",
  },
];

const faqs = [
  {
    q: "How does HaulageOps connect to Xero securely?",
    a: "The connection uses official Xero OAuth 2.0 tokenized authentication. You authorize the connection directly in Xero's interface. HaulageOps never receives or stores your Xero login credentials and access can be revoked at any time.",
  },
  {
    q: "What data flows between HaulageOps and Xero?",
    a: "HaulageOps pushes customer contact details, sales invoices (with job-level line items, tonnages, and rates), and subcontractor bills/RCTIs into Xero. Xero sends real-time payment webhook confirmations back into HaulageOps when invoices are settled.",
  },
  {
    q: "Does this work with Xero outside Australia?",
    a: "Yes. The Xero integration supports active Xero organizations across Australia, New Zealand, the United Kingdom, and North America.",
  },
  {
    q: "How are Recipient Created Tax Invoices (RCTIs) handled?",
    a: "When external subcontractors complete loads, HaulageOps can automatically generate RCTIs based on verified tonnages and push them directly into Xero as Accounts Payable bills ready for weekly payment runs.",
  },
];

export default function XeroIntegrationPage() {
  return (
    <MainLayout showCta={false}>
      {/* 1. Hero Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-neutral-50/80 via-white to-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/platform" className="hover:text-[#E8652B] transition-colors">Platform</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/platform/integrations" className="hover:text-[#E8652B] transition-colors">Integrations</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Xero</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4">
              <RefreshCw className="h-3.5 w-3.5" />
              Native Accounting Integration
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.08]">
              Automate your billing workflow with
              <span className="block text-[#E8652B] mt-2">two-way Xero synchronization.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl font-normal">
              Connect operations to finance. Verified mobile dockets push directly into Xero with job-linked rate lines, while real-time payment webhooks update your dispatch board the second clients settle.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/demo">
                <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-bold cursor-pointer shadow-sm">
                  Book a 20-Minute Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/platform/billing-and-invoicing">
                <Button size="lg" variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-bold">
                  Billing & Invoicing Module
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Proof Strip */}
      <section className="bg-neutral-900 py-6 border-y border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {proofStrip.map((item) => (
            <span key={item} className="text-xs sm:text-sm text-neutral-300 font-medium flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E8652B]" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* 3. The End-to-End Workflow */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">End-to-End Cycle</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              From Weighbridge Docket to Settled Xero Payment
            </h2>
            <p className="mt-3 text-neutral-600 text-base">
              A continuous, automated flow eliminating double handling and spreadsheet delays.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowSteps.map((step) => (
              <div
                key={step.num}
                className="bg-neutral-50/50 rounded-2xl p-7 border border-neutral-200 shadow-xs flex flex-col justify-between hover:border-[#E8652B]/70 transition-all"
              >
                <div>
                  <span className="text-3xl font-black text-[#E8652B]/20 leading-none">{step.num}</span>
                  <h3 className="mt-3 font-bold text-neutral-900 text-lg">{step.title}</h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Two Systems, One Ledger (Visual Simulation) */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Division of Labor</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
                Xero is the accounting system. HaulageOps is the operations engine.
              </h2>
              <div className="mt-6 space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                <p>
                  Neither system tries to replace the other. Your dispatcher works in HaulageOps assigning trucks and approving dockets; your accountant works in Xero managing tax returns, payroll, and banking reconciliation.
                </p>
                <p>
                  The integration synchronizes the two seamlessly: invoices batch from operations to accounts, while payment confirmations flow straight back to dispatch.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {twoSystemsPoints.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sync Simulation Card */}
            <div className="lg:col-span-6">
              <div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#E8652B]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                  <span className="text-xs font-mono text-[#E8652B] font-bold uppercase">
                    Two-Way Data Highway
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    Active Sync
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs mb-6">
                  <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700">
                    <span className="text-[10px] text-neutral-400 block mb-1">HAULAGEOPS RECORD</span>
                    <span className="text-white font-bold text-sm block">Invoice #INV-4921</span>
                    <span className="text-neutral-400 text-xs mt-1 block">Client: Western Civil Ltd</span>
                    <span className="text-neutral-300 text-xs block">3 Verified Loads (98.40 t)</span>
                    <span className="text-[#E8652B] font-bold block mt-2">$2,460.00 + GST</span>
                  </div>

                  <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700">
                    <span className="text-[10px] text-neutral-400 block mb-1">XERO SALES INVOICE</span>
                    <span className="text-white font-bold text-sm block">Ref: #INV-4921</span>
                    <span className="text-neutral-400 text-xs mt-1 block">Account: 200 - Sales</span>
                    <span className="text-neutral-300 text-xs block">Status: Awaiting Payment</span>
                    <span className="text-emerald-400 font-bold block mt-2">Webhook Armed</span>
                  </div>
                </div>

                <div className="p-3 bg-neutral-800/90 rounded-xl border border-neutral-700 text-xs flex items-center justify-between">
                  <span className="text-neutral-400">Sync Interval:</span>
                  <span className="text-white font-semibold">6-Hourly Batch + Instant Webhook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Payment Visibility Across Personas */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Role Benefits</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Clear Payment Visibility for Every Team
            </h2>
            <p className="mt-3 text-neutral-600 text-base">
              Everyone sees the financial status they need without asking accounts for an update.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {paymentVisibilityCards.map((card) => (
              <div key={card.title} className="bg-neutral-50/50 rounded-2xl p-7 border border-neutral-200 shadow-xs">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{card.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Integration Answers</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Frequently Asked Questions About Xero Sync
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border border-neutral-200 bg-white rounded-2xl overflow-hidden shadow-xs"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-bold text-neutral-900 text-base list-none hover:bg-neutral-50 transition-colors">
                  <span>{faq.q}</span>
                  <ChevronRight className="h-5 w-5 text-neutral-400 shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA Footer */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] mb-2 block">
              Speed Up Your Cash Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Cut your invoice cycle from 4 weeks to 48 hours.
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Book a 20-minute operational walkthrough. We'll show you how completed jobs turn into live Xero invoices in seconds.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="w-full sm:w-auto bg-[#E8652B] hover:bg-[#D05520] text-white font-bold px-8 shadow-sm">
                Book a 20-Minute Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700 font-bold">
                Fleet Consultation Scope
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

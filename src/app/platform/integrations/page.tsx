import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, ArrowRight, Plug, RefreshCw, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Integrations | HaulageOps",
  description:
    "Connect HaulageOps to the tools your operation already runs on — starting with Xero. Invoices, payments and job data sync automatically without re-keying.",
};

const heroKickers = [
  "Xero live today",
  "Automatic two-way sync",
  "No re-keying",
  "Secure API connections",
];

const proofStrip = [
  "Xero integration available now",
  "Invoices push from HaulageOps",
  "Payments sync back via webhook",
  "Job-linked line items",
  "Secure API credentials",
  "More integrations on the roadmap",
];

const availableIntegrations = [
  {
    title: "Xero Integration",
    status: "Available now",
    desc: "The HaulageOps Xero integration connects billing directly to your accounting system. Completed jobs generate invoices in HaulageOps and push to Xero with job-linked line items — every line traces back to the job, material and rate that produced it.",
    points: [
      "Invoices push to Xero automatically once approved",
      "Payment events flow back into HaulageOps via webhook",
      "Client records and rate data kept in sync",
      "No manual re-entry between systems",
    ],
    href: "/platform/integrations/xero",
    linkLabel: "Explore the Xero integration",
  },
];

const roadmapItems = [
  "Accounting platforms beyond Xero — evaluated against demand from Australian haulage operators",
  "Fuel and telematics data feeds — fuel card transactions matched to vehicle records",
  "Toll and road user charge reconciliation",
  "Payroll exports for driver and staff payments",
  "Scheduling and ERP connections for larger construction and mining clients",
  "API access for custom integrations built by your own team",
];

const howItWorks = [
  {
    num: "01",
    title: "Connect securely",
    desc: "You connect your Xero account through an authorised OAuth connection — the same secure standard used by banking and accounting apps. HaulageOps never sees or stores your Xero password.",
  },
  {
    num: "02",
    title: "Configure the mapping",
    desc: "During setup you map your accounts — revenue account, GST treatment, client records — so invoices land in Xero the way your accountant expects them to.",
  },
  {
    num: "03",
    title: "Run operations as normal",
    desc: "Jobs, rates and invoices continue to run entirely inside HaulageOps. When an invoice is approved, it pushes to Xero automatically. When a client pays, the webhook updates the invoice status back in HaulageOps.",
  },
];

const relatedCards = [
  {
    title: "Billing & Invoicing",
    href: "/platform/billing-and-invoicing",
    linkLabel: "Billing & invoicing",
    desc: "Invoices are built from completed jobs and rate cards inside HaulageOps — then pushed to Xero as part of the same billing workflow. See how the invoice lifecycle works end to end.",
  },
  {
    title: "Rate Management",
    href: "/platform/rate-management",
    linkLabel: "Rate management",
    desc: "The rate applied to a job becomes the line on the invoice that flows to Xero. Rate management ensures the amount charged matches the agreed rate card.",
  },
  {
    title: "Client Portal",
    href: "/platform/client-portal",
    linkLabel: "Client portal",
    desc: "Clients see invoice status and download PDFs from the Client Portal — while the same invoice status updates in Xero. Both sides stay in sync from the same source record.",
  },
];

const faqs = [
  {
    q: "Which integrations are available today?",
    a: "Xero is the first live integration, covering the job-to-invoice accounting flow — invoices push from HaulageOps to Xero, and payment events flow back via webhook. Additional accounting platforms and operational integrations are evaluated against demand from Australian haulage operators and added to the roadmap.",
  },
  {
    q: "Is the Xero integration included in the subscription?",
    a: "The Xero integration is part of the HaulageOps platform. Configuration — account mapping, client sync and invoice settings — is covered during implementation. Book a demo to walk through the setup for your business.",
  },
  {
    q: "Do invoices sync to Xero automatically?",
    a: "Yes. When an invoice is approved in HaulageOps, it is pushed to Xero automatically. Payment events from Xero are received by HaulageOps via webhook and update the invoice status — so the two systems stay aligned without manual re-entry.",
  },
  {
    q: "Can we integrate HaulageOps with other tools we use?",
    a: "Roadmap priorities are set from customer demand. If your operation depends on a specific accounting platform, telematics provider or ERP, raise it during your demo conversation — it feeds directly into what we build next.",
  },
  {
    q: "Is my accounting data kept secure during integration?",
    a: "Connections use authorised OAuth connections. HaulageOps never receives or stores your accounting platform password, and data transfers over encrypted connections. Access is scoped to the integration function — invoice and payment records — not to the entire accounting file.",
  },
];

export default function IntegrationsPage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb */}
      <div className="pt-24 pb-0 bg-[#FFF9F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B]">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/platform" className="hover:text-[#E8652B]">Platform</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Integrations</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Platform — Integrations
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Connect HaulageOps to the tools your operation already runs on.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            HaulageOps integrates with the platforms haulage businesses depend on — starting with Xero. Invoices, payments and client records sync automatically between systems, so the same data is never keyed in twice.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/platform/integrations/xero">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Xero Integration
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Book a Demo
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
            {proofStrip.map((item) => (
              <div key={item} className="flex items-center justify-center gap-2">
                <CheckCircle className="h-3.5 w-3.5 text-[#E8652B] shrink-0" />
                <span className="text-white font-bold text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AVAILABLE INTEGRATIONS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Available integrations</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            One live integration today — with more on the roadmap.
          </h2>
          <div className="mt-10 grid gap-6">
            {availableIntegrations.map((integration) => (
              <div key={integration.title} className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0] grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center gap-2.5">
                    <div className="h-10 w-10 rounded-lg bg-[#E8652B]/10 flex items-center justify-center">
                      <Plug className="h-5 w-5 text-[#E8652B]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A]">{integration.title}</h3>
                  </div>
                  <span className="mt-3 inline-block px-2.5 py-1 rounded-full bg-[#16A34A]/10 text-[#16A34A] text-[11px] font-semibold">
                    {integration.status}
                  </span>
                  <p className="mt-4 text-sm text-[#475569] leading-relaxed">{integration.desc}</p>
                  <Link href={integration.href} className="mt-5 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                    {integration.linkLabel} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <div className="bg-white rounded-xl border border-[#E2E8F0] p-6">
                  <h4 className="font-bold text-[#0F172A] text-sm mb-3">What it covers</h4>
                  <ul className="space-y-3">
                    {integration.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-[#334155]">
                        <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">How integrations work</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Connected in minutes, running automatically.
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                <span className="text-3xl font-black text-[#E8652B]/20 leading-none">{step.num}</span>
                <h3 className="mt-2 font-bold text-[#0F172A] text-base">{step.title}</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATION ROADMAP */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Roadmap</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-xl">
                What&apos;s being evaluated next.
              </h2>
              <p className="mt-6 text-[#475569] leading-relaxed">
                Integration priorities are set by what Australian haulage operators actually run on. If a specific platform is critical to your operation, it shapes what we build next. Current areas of evaluation include:
              </p>
              <ul className="mt-6 space-y-3">
                {roadmapItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Secure connection visual */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                Secure connection — how it connects
              </div>
              <div className="p-6 text-[#94A3B8] text-sm font-mono leading-relaxed space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-[#E8652B]/15 flex items-center justify-center">
                    <RefreshCw className="h-5 w-5 text-[#E8652B]" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">HaulageOps</p>
                    <p className="text-[10px] text-[#64748B]">Billing module — invoice & payment records</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-[#64748B]">
                  <span className="flex-1 border-t border-dashed border-[#334155]" />
                  <span className="whitespace-nowrap">OAuth · encrypted</span>
                  <span className="flex-1 border-t border-dashed border-[#334155]" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-[#334155]/50 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-[#94A3B8]" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">Xero</p>
                    <p className="text-[10px] text-[#64748B]">Invoices · payments · client records</p>
                  </div>
                </div>
                <p className="text-[10px] text-[#475569] pt-1">
                  Invoices push one way, payments return via webhook. Credentials are never shared or stored in plain text.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PLATFORM FEATURES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related platform features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Integrations connect the commercial side of the platform.
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
                <Link href={card.href} className="mt-3 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  {card.linkLabel} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently asked questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Integrations — common questions.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Stop re-keying invoices into your accounting system.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              See how the Xero integration moves invoices and payments between systems automatically — in a 20-minute demo.
            </p>
          </div>
          <Link href="/demo" className="shrink-0">
            <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
              Book a Demo
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}

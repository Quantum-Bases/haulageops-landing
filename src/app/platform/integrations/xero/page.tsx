import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, ArrowRight, ArrowLeft, ArrowDown } from "lucide-react";

export const metadata = {
  title: "Xero Integration for Haulage Invoicing | HaulageOps",
  description:
    "HaulageOps connects to Xero via OAuth2. Invoices created in HaulageOps sync automatically. Payment events flow back from Xero. No manual data entry between systems.",
};

const heroKickers = [
  "OAuth2 connection",
  "6-hourly scheduled sync",
  "Real-time payment webhooks",
  "No manual data entry",
];

const proofStrip = [
  "Industry-standard OAuth2 — no password sharing",
  "6-hourly cron sync for invoice data",
  "Real-time webhook when Xero marks payment",
  "Payment status visible in HaulageOps & Client Portal",
  "Xero is accounting — HaulageOps is operations",
  "Works with Xero AU, NZ and UK",
];

const workflowSteps = [
  {
    num: "01",
    title: "Connect via OAuth2",
    desc: "The connection is established through Xero's official OAuth2 authentication flow — the same protocol used by major software integrations. You authorise HaulageOps to connect to your Xero account through Xero's own interface. No Xero passwords are shared with or stored by HaulageOps.",
  },
  {
    num: "02",
    title: "Complete the job",
    desc: "The driver marks the job complete on the mobile app. POD is uploaded and attached to the job record. The job is now ready to invoice — all the detail (client, rates, loads, dockets) is already in HaulageOps from the work being done.",
  },
  {
    num: "03",
    title: "Build the invoice in HaulageOps",
    desc: "The invoice is built from the completed job record. Line items are generated from the job data — rates already applied, quantities from the job details. No re-entry of the data that already exists. The invoice is reviewed in HaulageOps before syncing.",
  },
  {
    num: "04",
    title: "Sync to Xero",
    desc: "The invoice syncs to Xero via the scheduled 6-hourly cron sync. It appears in Xero as a standard invoice, coded to the appropriate account. Your accounts team works with it in Xero exactly as they would with any other invoice — chase payment, reconcile, report. HaulageOps did not change how Xero works.",
  },
  {
    num: "05",
    title: "Payment recorded in Xero",
    desc: "Your accounts team reconciles the payment in Xero as part of their normal process. The moment Xero marks the invoice as paid, a webhook fires back to HaulageOps in real time.",
  },
  {
    num: "06",
    title: "Status updates in HaulageOps",
    desc: "The invoice status in HaulageOps updates to Paid as soon as the Xero webhook arrives. Operations can see payment status without logging into Xero. The Client Portal also reflects the updated status — the client sees their invoice as paid without a phone call to your office.",
  },
];

const twoSystemsPoints = [
  "Operations builds invoices from job data in HaulageOps",
  "Finance manages payment and reconciliation in Xero",
  "Payment status is visible to operations and clients without Xero access",
  "No manual re-entry of invoice data between systems",
];

const paymentVisibilityCards = [
  {
    title: "Operations view in HaulageOps",
    desc: "The invoice list in HaulageOps shows current status — draft, sent, paid, overdue — updated when Xero records a payment. Dispatch staff can see outstanding invoices for a client without needing access to the accounting system.",
  },
  {
    title: "Client Portal view",
    desc: "Clients see their invoices through the Client Portal with current status. When Xero records payment and the webhook fires, the Client Portal reflects paid status automatically. No manual update required, no client emailing to ask if their payment was received.",
  },
  {
    title: "Management reporting",
    desc: "Invoice status feeds into management reporting — outstanding accounts, revenue by period, aged receivables. The data reflects the Xero payment record via the webhook without requiring management to query Xero separately.",
  },
];

const relatedCards = [
  {
    title: "Billing & Invoicing",
    href: "/platform/billing-and-invoicing",
    linkLabel: "Billing & invoicing",
    desc: "The full invoice lifecycle in HaulageOps — draft, sent, paid, overdue, voided. The Xero integration is the bridge between the HaulageOps invoice and the Xero accounting record.",
  },
  {
    title: "Rate Management",
    href: "/platform/rate-management",
    linkLabel: "Rate management",
    desc: "Rates set in HaulageOps — per-tonne, per-load, hourly, fixed-fee — feed directly into invoice line items. When those invoices sync to Xero, the rate detail goes with them.",
  },
  {
    title: "Add-ons & Integrations",
    href: "/platform/add-ons",
    linkLabel: "Add-ons & integrations",
    desc: "Xero is the standard live accounting integration. See what else is included by default and what is available on request — including the honest status of MYOB and roadmap items.",
  },
];

const faqs = [
  {
    q: "Which Xero plan is required to use the integration?",
    a: "The HaulageOps Xero integration uses Xero's standard API, which is available on Xero's Starter, Standard, and Premium plans. It is not available on free Xero trials. If you are on an active paid Xero subscription and have an active HaulageOps account, the integration is included — there is no additional per-connection fee from HaulageOps.",
  },
  {
    q: "Does the integration work with Xero AU, NZ, and UK?",
    a: "Yes. Xero's API is consistent across their AU, NZ, and UK product variants. The HaulageOps integration works with Xero accounts in each of these markets. If you are in a market where Xero is available and your Xero account is active, the connection operates the same way regardless of your country.",
  },
  {
    q: "What happens if the sync fails?",
    a: "The 6-hourly cron sync attempts to push all pending invoice data. If a sync attempt fails — due to a temporary connectivity issue or a Xero API interruption — HaulageOps retries on the next scheduled cycle. Failed sync attempts are logged. If a sync issue persists, it surfaces in the integration status view so your team is aware without needing to monitor it manually. Your Xero data and HaulageOps data are not corrupted by a failed sync — the records simply remain out of sync until the next successful attempt.",
  },
  {
    q: "Can I disconnect the Xero integration if needed?",
    a: "Yes. You can disconnect the Xero integration from within HaulageOps at any time. Disconnecting removes the authorisation HaulageOps holds to access your Xero account — it does not delete invoices that have already synced to Xero, and it does not affect historical data in HaulageOps. You can reconnect at any time by going through the OAuth2 authorisation flow again.",
  },
  {
    q: "Does the integration push all invoices or only new ones after connection?",
    a: "The integration syncs invoices created in HaulageOps after the connection is established. It does not retroactively push historical invoices that predate the connection. During setup, your implementation contact will advise on how to handle the transition from your previous invoicing process so there are no gaps or duplicates in your Xero records.",
  },
  {
    q: "Do I need a Xero account before I can use HaulageOps?",
    a: "No. HaulageOps billing and invoicing operates independently of the Xero integration. You can create, send, and track invoices within HaulageOps without connecting to Xero. The Xero integration is an add-on that pushes those invoices into Xero for accounting purposes. If you do not use Xero, invoice management is handled entirely within HaulageOps.",
  },
];

const invoiceList = [
  { id: "#1039", client: "Apex Civil", amount: "$3,200", status: "Paid", statusCls: "text-[#4ADE80] bg-[#16A34A]/20", note: "paid 14 Jul via Xero webhook" },
  { id: "#1040", client: "Ridge Earthworks", amount: "$5,600", status: "Overdue", statusCls: "text-[#F87171] bg-[#EF4444]/20", note: "due 8 Jul" },
  { id: "#1041", client: "Summit Quarries", amount: "$2,100", status: "Sent", statusCls: "text-[#60A5FA] bg-[#3B82F6]/20", note: "sent 18 Jul" },
  { id: "#1042", client: "Apex Civil", amount: "$4,800", status: "Draft", statusCls: "text-[#94A3B8] bg-[#334155]", note: "" },
];

export default function XeroIntegrationPage() {
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
            <Link href="/platform/integrations" className="hover:text-[#E8652B]">Integrations</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Xero</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Platform — Xero Integration
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            HaulageOps creates the invoice. Xero handles the accounting.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Connect HaulageOps to your Xero account via OAuth2. Invoices built from completed jobs sync to Xero automatically. When Xero records a payment, that status flows back to HaulageOps in real time. No double entry between systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/billing-and-invoicing">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Billing &amp; Invoicing
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

      {/* HOW THE CONNECTION WORKS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">How the connection works</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The invoice workflow from job completion to Xero — step by step.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            The Xero integration in HaulageOps is built around a clear division of responsibility: HaulageOps manages the job data and invoice creation; Xero manages the accounting record, payment processing, and your chart of accounts. The two systems complement each other — they are not trying to do the same job.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step) => (
              <div key={step.num} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                <span className="text-3xl font-black text-[#E8652B]/20 leading-none">{step.num}</span>
                <h3 className="mt-2 font-bold text-[#0F172A] text-base">{step.title}</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO SYSTEMS, ONE JOB RECORD */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Two systems, one job record</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-xl">
                Xero is the accounting system. HaulageOps is the operations system.
              </h2>
              <p className="mt-6 text-[#475569] leading-relaxed">
                A common concern when connecting two systems is which one becomes the source of truth. The answer in the HaulageOps and Xero relationship is clear: job data and invoice creation originate in HaulageOps; accounting, payment processing, and financial records live in Xero. Neither system tries to replace the other.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Your accountant or bookkeeper does not need to learn HaulageOps. Your dispatcher does not need access to Xero. The sync carries the invoice data from operations to accounting, and carries the payment status back. Each team works in the system built for their function.
              </p>
              <ul className="mt-6 space-y-3">
                {twoSystemsPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Sync flow visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                Invoice sync — HaulageOps to Xero flow
              </div>
              <div className="p-6 text-[#94A3B8] text-sm font-mono leading-relaxed">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#1E293B] rounded-lg p-4 border border-[#334155]">
                    <p className="text-[10px] uppercase tracking-wider text-[#64748B] mb-2">HaulageOps</p>
                    <p className="text-white font-semibold text-xs">Invoice #1042</p>
                    <p className="text-xs mt-1">Client: Apex Civil</p>
                    <p className="text-xs">3 job line items</p>
                    <p className="text-xs">Total: <span className="text-white font-semibold">$4,800</span></p>
                    <p className="mt-2 inline-block px-2 py-0.5 rounded bg-[#3B82F6]/20 text-[#60A5FA] text-[10px] font-semibold">Status: Sent</p>
                  </div>
                  <div className="bg-[#1E293B] rounded-lg p-4 border border-[#334155]">
                    <p className="text-[10px] uppercase tracking-wider text-[#64748B] mb-2">Xero</p>
                    <p className="text-white font-semibold text-xs">Same reference</p>
                    <p className="text-xs mt-1">Same amount: $4,800</p>
                    <p className="text-xs">Account code: 200 Revenue</p>
                    <p className="mt-2 inline-block px-2 py-0.5 rounded bg-[#FBBF24]/10 text-[#FBBF24] text-[10px] font-semibold">Awaiting Payment</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-[#E8652B] font-semibold">
                  <ArrowRight className="h-3 w-3" /> 6-hourly sync
                </div>
                <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-[#4ADE80] font-semibold">
                  <ArrowLeft className="h-3 w-3" /> Webhook — real time
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT VISIBILITY */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Payment visibility</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Operations and clients see payment status without logging into Xero.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            One of the practical benefits of the real-time payment webhook is that invoice status is visible to the right people without additional system access. Operations knows which invoices are outstanding. Clients can see whether their invoice is paid through the Client Portal. Neither needs to contact the accounts team for a status update.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {paymentVisibilityCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A NOTE ON MYOB */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Invoice status visual spec */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden order-1 lg:order-none">
              <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                Invoice status — HaulageOps billing view
              </div>
              <div className="p-6 text-[#94A3B8] text-sm font-mono leading-relaxed space-y-2">
                {invoiceList.map((row) => (
                  <div key={row.id} className="flex items-center justify-between bg-[#1E293B] rounded-lg px-3 py-2 border border-[#334155] text-xs">
                    <div className="flex items-center gap-3">
                      <span className="text-white font-semibold">{row.id}</span>
                      <span className="text-[#94A3B8]">{row.client}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#64748B]">{row.amount}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${row.statusCls}`}>{row.status}</span>
                    </div>
                  </div>
                ))}
                <p className="text-[10px] text-[#FBBF24] pt-1">Total outstanding highlighted in the billing dashboard</p>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">A note on MYOB</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-xl">
                Using MYOB? It is available subject to scope — not a standard integration.
              </h2>
              <p className="mt-6 text-[#475569] leading-relaxed">
                MYOB is not a standard built-in integration in HaulageOps. The Xero integration is live and operates as described on this page. MYOB is a different accounting platform with a range of product versions and configurations that affect what a connection would look like.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                If you use MYOB, we can explore what is technically achievable for your specific MYOB version, product configuration, and required workflow. The starting point is understanding your MYOB setup and what you need the connection to do. From there we can scope whether and how a connection is practical for your situation.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                If MYOB is a hard requirement in your evaluation, tell us at the demo stage and we will give you an honest answer about what is possible for your setup before you proceed.
              </p>
              <div className="mt-6">
                <Link href="/platform/add-ons">
                  <Button variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-white">
                    Integrations &amp; Add-ons <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PLATFORM FEATURES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related platform features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The Xero integration is part of the job-to-invoice workflow.
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {relatedCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
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
          <div className="mt-8 text-center">
            <Link href="/solutions/job-to-invoice">
              <Button variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Job to Invoice Solution <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently asked questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Xero integration — common questions.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Build the invoice in HaulageOps. Let Xero handle the accounting.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              See how the job-to-invoice-to-Xero workflow runs end to end — in a 20-minute demo with your specific use case in mind.
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

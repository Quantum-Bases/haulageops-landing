import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield } from "lucide-react";

export const metadata = {
  title: "Security & Data Protection | HaulageOps",
  description:
    "HaulageOps is built for the security requirements of haulage operators — AES-256 encryption, Australian data residency, role-based access controls, and full audit trails.",
};

const proofStrip = [
  "AES-256 encryption at rest",
  "TLS 1.3 in transit",
  "Role-based access controls",
  "Full audit trail",
  "Daily automated backups",
  "99.9% uptime SLA",
];

const protectionCards = [
  {
    title: "Encryption",
    p: "All data is encrypted at rest using AES-256 and in transit using TLS 1.3. This covers job records, driver documents, rate cards, invoice data and uploaded docket photos.",
  },
  {
    title: "Access Control",
    p: "Multi-tenant architecture with complete data isolation between operator accounts. Within your account, role-based permissions ensure drivers only see their jobs, subcontractors only see allocated loads.",
  },
  {
    title: "Audit Trail",
    p: "Every action in HaulageOps is logged — who created a job, who changed a rate, who approved an invoice. Full tamper-proof audit log supports regulatory enquiries and internal reviews.",
  },
  {
    title: "Infrastructure",
    p: "Hosted on enterprise cloud infrastructure with geo-redundant storage and daily automated backups. We maintain a 99.9% uptime SLA with proactive monitoring and incident response.",
  },
  {
    title: "Data Residency",
    p: "Australian operator data is stored in Australian data centres. Your operational data does not leave your region without explicit consent.",
  },
  {
    title: "Xero Integration",
    p: "Uses OAuth 2.0 token-based access — HaulageOps never stores your Xero credentials. You can revoke access at any time from your Xero account settings.",
  },
];

const portalSecurityItems = [
  { strong: "Admin Portal", text: " — full platform access for dispatch team and management" },
  { strong: "Driver App", text: " — drivers see assigned jobs, POD upload, break records only" },
  { strong: "Subcontractor Portal", text: " — allocated jobs and docket submission; rate visibility only if granted" },
  { strong: "Client Portal", text: " — jobs, delivery evidence, and invoices for that client only" },
  { strong: "Reporting", text: " — configurable by role so finance sees billing but not driver compliance records" },
];

const securityFaqs = [
  {
    q: "Where is my data stored?",
    a: "Australian operator data is stored in Australian data centres on enterprise cloud infrastructure. Data does not leave the region unless you explicitly request cross-region features.",
  },
  {
    q: "Who can see our job and rate data?",
    a: "Only users within your operator account with appropriate permissions. HaulageOps staff can access account data only for authorised support purposes, with a logged audit trail. Your rate cards are never shared with other operators.",
  },
  {
    q: "What happens if there is a security incident?",
    a: "We maintain an incident response plan with defined notification timelines. If a breach affected your data, we would notify you within 72 hours as required under Australian Privacy Act obligations.",
  },
  {
    q: "Can I export or delete my data?",
    a: "Yes. You can export all job records, invoices, and compliance documents at any time. On subscription termination, data is retained for a configurable period before secure deletion per our data retention policy.",
  },
  {
    q: "How is the Xero integration secured?",
    a: "Xero integration uses OAuth 2.0. You authorise HaulageOps and Xero issues a token. We never see or store your Xero username or password. Revoke access from Xero at any time.",
  },
];

export default function SecurityPage() {
  return (
    <MainLayout showCta={false}>
      <section className="pt-24 pb-16 bg-gradient-to-b from-neutral-50/80 via-white to-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Security</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4">
            Security & Trust
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 max-w-4xl leading-[1.1]">
            Built for Operators Who Can't Afford Downtime or Data Loss
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-3xl leading-relaxed">
            HaulageOps stores your jobs, rates, driver records, dockets and invoices. We treat that data with the same care you apply to every load.
          </p>
        </div>
      </section>

      <section className="bg-neutral-900 border-y border-neutral-800 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {proofStrip.map((item) => (
            <span key={item} className="text-sm text-neutral-300 font-medium">{item}</span>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Security & Trust</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900">How We Protect Your Data</h2>
          <p className="mt-4 text-neutral-600 leading-relaxed max-w-3xl">
            Every piece of data in HaulageOps — from a job docket to a rate card — is protected at multiple layers.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {protectionCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900">{card.title}</h3>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{card.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Portal Security</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900">Five Portals, Five Permission Layers</h2>
              <p className="mt-4 text-neutral-600 leading-relaxed text-sm">
                HaulageOps separates access across distinct portals. Each user type sees only what they're permitted to see.
              </p>
              <ul className="mt-6 space-y-3">
                {portalSecurityItems.map((item) => (
                  <li key={item.strong} className="flex items-start gap-2 text-sm text-neutral-700">
                    <Shield className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span><strong className="text-neutral-900">{item.strong}</strong>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="rounded-2xl bg-neutral-900 border-y border-neutral-800 border border-neutral-800 overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 bg-neutral-800">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E8652B]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#94A3B8]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
                  <span className="ml-3 text-xs font-semibold text-neutral-300">Permission Architecture</span>
                </div>
                <div className="p-8 flex flex-col items-center justify-center text-center min-h-[280px]">
                  <div className="h-16 w-16 rounded-2xl bg-neutral-800 flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-[#E8652B]" />
                  </div>
                  <p className="font-semibold text-white">Role-Based Access Diagram</p>
                  <p className="mt-2 text-[13px] text-neutral-400">Five portals · per-role permissions · tenant isolation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Security & Trust</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900">Security FAQs</h2>
          <div className="mt-8 space-y-3">
            {securityFaqs.map((faq, index) => (
              <details key={faq.q} className="group border border-neutral-200 bg-white rounded-xl overflow-hidden" open={index === 0}>
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-neutral-900 text-sm list-none hover:bg-neutral-50/50">
                  {faq.q}
                  <ChevronRight className="h-4 w-4 text-neutral-400 shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                  <p className="pt-4">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Security questions before you commit?</h2>
            <p className="mt-2 text-neutral-400 text-sm leading-relaxed max-w-xl">
              Our team can walk through our security architecture in detail during your demo.
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

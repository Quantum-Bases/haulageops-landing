import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Shield,
  ShieldCheck,
  Lock,
  Server,
  FileCheck,
  Eye,
  KeyRound,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Database,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Security, Data Governance & Compliance | HaulageOps",
  description:
    "Enterprise-grade security for bulk haulage operators — AES-256 encryption at rest, TLS 1.3 in transit, role-based boundary isolation, Australian data residency, and immutable audit logging.",
};

const proofStrip = [
  "AES-256 Encryption at Rest",
  "TLS 1.3 Encryption in Transit",
  "Strict Multi-Tenant Isolation",
  "Immutable Action Audit Trail",
  "Automated Daily Backups",
  "99.9% Uptime Guarantee",
];

const protectionCards = [
  {
    icon: Lock,
    title: "Military-Grade Encryption",
    p: "Every database record, rate card, proof-of-delivery photograph, and signed docket is encrypted at rest using AES-256 and transmitted exclusively via TLS 1.3.",
  },
  {
    icon: Server,
    title: "Multi-Tenant Data Isolation",
    p: "Logical and database-level tenancy barriers guarantee that your client rate cards, driver details, and load histories remain completely isolated and inaccessible to other operators.",
  },
  {
    icon: KeyRound,
    title: "Granular Role-Based Access (RBAC)",
    p: "Drivers see only their assigned runs. Subcontractors see only their allocated work and pay rates. Clients see only their delivery proof and dockets. Financials stay sealed.",
  },
  {
    icon: FileCheck,
    title: "Immutable Action Audit Logging",
    p: "Every single state change — who created a load, who modified a rate, who approved a subbie docket, who generated an invoice — is permanently recorded with timestamps.",
  },
  {
    icon: Database,
    title: "Enterprise Cloud Infrastructure",
    p: "Hosted on resilient cloud infrastructure with geo-redundant data storage, continuous automated backups, and 99.9% guaranteed platform uptime.",
  },
  {
    icon: RefreshCw,
    title: "Zero-Credential Xero Sync",
    p: "Direct OAuth 2.0 tokenized integration. HaulageOps never stores or has access to your raw Xero banking credentials. Revoke access with 1 click anytime.",
  },
];

const portalBoundaries = [
  {
    portal: "Admin & Dispatch Board",
    access: "Full Operational Access",
    scope: "Fleet managers & dispatchers manage all vehicles, rates, subbies, and billing batches.",
    badgeClass: "text-[#E8652B] bg-orange-50 border-orange-200",
  },
  {
    portal: "Driver Mobile App",
    access: "Field Execution Perimeter",
    scope: "Drivers see allocated jobs, turn-by-turn navigation, photo docket capture, and rest break logs.",
    badgeClass: "text-blue-700 bg-blue-50 border-blue-200",
  },
  {
    portal: "Subcontractor Portal",
    access: "Isolated Contractor View",
    scope: "Subbies view assigned loads, agreed subbie pay rates, and upload weighbridge dockets. Zero client charge visibility.",
    badgeClass: "text-purple-700 bg-purple-50 border-purple-200",
  },
  {
    portal: "Client Self-Service Portal",
    access: "Branded Client Perimeter",
    scope: "Head contractors track live loads, view agreed rate cards, and download verified dockets self-service.",
    badgeClass: "text-emerald-700 bg-emerald-50 border-emerald-200",
  },
  {
    portal: "Management Financial Hub",
    access: "Executive & Accounting Level",
    scope: "CFOs and accountants audit margins, manage Xero sync tokens, and review historical performance.",
    badgeClass: "text-neutral-800 bg-neutral-100 border-neutral-300",
  },
];

const securityFaqs = [
  {
    q: "Where is our operational and customer data stored?",
    a: "All operator data is hosted within secure, ISO 27001-certified enterprise data centres. Regional residency is strictly maintained — Australian fleet data stays within Australian cloud regions.",
  },
  {
    q: "Can competing haulage companies ever see our client rate cards?",
    a: "Never. HaulageOps enforces strict multi-tenant boundary isolation at the database layer. Your rate cards, subbie pay rates, and margins are strictly private to your authenticated organisation.",
  },
  {
    q: "Can we export all of our historical data if we ever leave?",
    a: "Yes. You own 100% of your data. You can export complete job histories, customer rosters, vehicle registries, rate cards, and invoice dockets in standard formats (CSV, JSON, PDF) at any time.",
  },
  {
    q: "How does HaulageOps handle mobile device loss or theft?",
    a: "If a driver misplaces their mobile device, an administrator can instantly revoke that driver's session token from the Admin Portal. All sensitive cached data is rendered inaccessible.",
  },
  {
    q: "How is compliance with Chain of Responsibility (CoR) supported?",
    a: "The system creates an immutable, timestamped digital audit trail of driver pre-start safety checks, break logs, load weights, and dispatch time allocations suitable for regulatory inspection.",
  },
];

export default function SecurityPage() {
  return (
    <MainLayout showCta={false}>
      {/* 1. Hero Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-neutral-50/80 via-white to-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Security</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4">
              <ShieldCheck className="h-3.5 w-3.5" />
              Security, Trust & Data Governance
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.08]">
              Built for operators who can&apos;t afford
              <span className="block text-[#E8652B] mt-2">downtime, breaches, or lost records.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl font-normal">
              From weighbridge tickets and rate schedules to driver rest logs and financial records, HaulageOps protects your mission-critical data with multi-layered encryption, isolated tenant perimeters, and bank-grade cloud storage.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/demo">
                <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-bold cursor-pointer shadow-sm">
                  Book a Security Walkthrough
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-bold">
                  Ask a Security Question
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

      {/* 3. Protection Pillars Grid */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Multi-Layer Defense</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              How We Safeguard Your Operational Data
            </h2>
            <p className="mt-3 text-neutral-600 text-base">
              Every component of HaulageOps is designed with security, confidentiality, and high-availability as foundational requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {protectionCards.map((card) => {
              const IconComp = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between hover:border-[#E8652B]/70 transition-all shadow-xs"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-[#E8652B] flex items-center justify-center mb-5">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed font-normal">{card.p}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Portal Boundary Architecture (Replaces empty box) */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Access Governance</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
                Five Portals. Five Strict Permission Perimeters.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                HaulageOps enforces cryptographic role-based access control (RBAC). Subcontractors can never see what you charge the client. Clients can never see what you pay your subcontractors. Drivers see only their assigned loads.
              </p>
              <div className="mt-8 space-y-3.5">
                {portalBoundaries.map((b) => (
                  <div key={b.portal} className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="font-bold text-sm text-neutral-900 block">{b.portal}</span>
                      <span className="text-xs text-neutral-500 leading-tight">{b.scope}</span>
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border self-start sm:self-center shrink-0 ${b.badgeClass}`}>
                      {b.access}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Box */}
            <div className="lg:col-span-6">
              <div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#E8652B]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                  <span className="text-xs font-mono text-[#E8652B] font-bold uppercase">
                    Security Architecture
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    Zero-Trust Model
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3.5 bg-neutral-800/80 rounded-xl border border-neutral-700">
                    <span className="text-neutral-400 text-[10px] block">CLIENT DATA ISOLATION</span>
                    <span className="text-white font-semibold">Tenant-Scoped PostgreSQL & Azure Blob Vault</span>
                  </div>

                  <div className="p-3.5 bg-neutral-800/80 rounded-xl border border-neutral-700">
                    <span className="text-neutral-400 text-[10px] block">TRANSPORT LAYER</span>
                    <span className="text-emerald-400 font-semibold">TLS 1.3 Strict HSTS + OAuth 2.0 Tokens</span>
                  </div>

                  <div className="p-3.5 bg-neutral-800/80 rounded-xl border border-neutral-700">
                    <span className="text-neutral-400 text-[10px] block">MOBILE STORAGE (DRIVER APP)</span>
                    <span className="text-white font-semibold">Local SQLite with AES Key Protection (Auto-Wipe Support)</span>
                  </div>

                  <div className="p-3.5 bg-neutral-800/80 rounded-xl border border-neutral-700">
                    <span className="text-neutral-400 text-[10px] block">AUDIT COMPLIANCE</span>
                    <span className="text-white font-semibold">Append-Only Immutable Action Ledger</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
                  <span>99.9% Cloud Availability SLA</span>
                  <Link href="/demo" className="text-[#E8652B] font-bold hover:underline inline-flex items-center gap-1">
                    Book Walkthrough <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Trust & Compliance</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Frequently Asked Security Questions
            </h2>
          </div>

          <div className="space-y-4">
            {securityFaqs.map((faq) => (
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

      {/* 6. CTA Footer */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] mb-2 block">
              Confidence Before You Commit
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Have specific compliance or security requirements?
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Our engineering team is available to review your IT security questionnaires, data sovereignty requirements, and audit standards.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="w-full sm:w-auto bg-[#E8652B] hover:bg-[#D05520] text-white font-bold px-8 shadow-sm">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700 font-bold">
                Contact Security Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

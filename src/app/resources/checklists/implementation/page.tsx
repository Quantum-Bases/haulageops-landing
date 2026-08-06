import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "HaulageOps Implementation Checklist: Go-Live Readiness | HaulageOps",
  description:
    "A week-by-week implementation checklist for HaulageOps — everything your team needs to complete before go-live, from data preparation to driver onboarding to Xero integration.",
};

type OwnerKey = "ops" | "admin" | "driver";

type CheckRow = {
  owner: OwnerKey;
  strong: string;
  desc: string;
};

type WeekBlock = {
  label: string;
  title: string;
  owner: string;
  items: CheckRow[];
};

const ownerMeta: Record<OwnerKey, { label: string; className: string }> = {
  ops: { label: "HaulageOps Team", className: "bg-[#DBEAFE] text-[#1E40AF]" },
  admin: { label: "Admin/Owner", className: "bg-[#DCFCE7] text-[#166534]" },
  driver: { label: "Driver/Fleet", className: "bg-[#FEF3C7] text-[#92400E]" },
};

const weeks: WeekBlock[] = [
  {
    label: "Week 1",
    title: "Account Setup & Data Preparation",
    owner: "Primary: Admin/Owner + HaulageOps Team",
    items: [
      { owner: "ops", strong: "Account created and admin login shared", desc: "your HaulageOps environment is provisioned" },
      { owner: "admin", strong: "Client list prepared", desc: "company name, ABN, billing contact, email for all active clients" },
      { owner: "admin", strong: "Driver list prepared", desc: "full name, licence number, licence expiry, medical expiry, phone number" },
      { owner: "admin", strong: "Truck/fleet list prepared", desc: "registration, make/model, type (tipper, semi, etc.), GVM, registration expiry" },
      { owner: "admin", strong: "Supplier/quarry list prepared", desc: "name, address, contact for material suppliers you use regularly" },
      { owner: "admin", strong: "Subcontractor list prepared", desc: "company name, ABN, insurance expiry, driver and truck details" },
      { owner: "ops", strong: "Data imported into HaulageOps", desc: "clients, drivers, fleet, suppliers and subcontractors loaded" },
    ],
  },
  {
    label: "Week 1–2",
    title: "Rate Cards & Billing Configuration",
    owner: "Primary: Admin/Owner + HaulageOps Team",
    items: [
      { owner: "admin", strong: "Rate card for each client prepared", desc: "rate type (per tonne/load/hour), rate amount, any variations by material or site" },
      { owner: "ops", strong: "Rate cards configured in system", desc: "linked to each client record and verified against your current schedules" },
      { owner: "admin", strong: "Xero account ready", desc: "Xero account admin access available for OAuth2 connection" },
      { owner: "ops", strong: "Xero integration connected", desc: "OAuth2 authenticated, account codes and contacts mapped" },
      { owner: "admin", strong: "Test invoice reviewed", desc: "dummy invoice created and verified in Xero before going live" },
    ],
  },
  {
    label: "Week 2",
    title: "Admin & Dispatcher Training",
    owner: "Primary: Admin/Owner + HaulageOps Team",
    items: [
      { owner: "ops", strong: "Admin portal training session completed", desc: "job creation, dispatch view, docket management, reporting" },
      { owner: "admin", strong: "Admin team can create and dispatch a job independently", desc: "verified in a practice run" },
      { owner: "admin", strong: "Admin team can generate and review an invoice", desc: "from dockets to invoice to Xero, end-to-end" },
      { owner: "ops", strong: "Subcontractor portal walkthrough completed", desc: "how subs receive jobs, submit dockets, see their allocations" },
    ],
  },
  {
    label: "Week 2–3",
    title: "Driver App Rollout",
    owner: "Primary: Driver/Fleet Lead + HaulageOps Team",
    items: [
      { owner: "driver", strong: "All drivers have smartphones capable of running the app", desc: "iOS 14+ or Android 10+" },
      { owner: "ops", strong: "Driver app download links distributed to all drivers", desc: "" },
      { owner: "ops", strong: "Driver training session completed", desc: "accepting jobs, completing dockets, photographing weighbridge, logging breaks" },
      { owner: "driver", strong: "Each driver has completed a test run", desc: "accepted a test job, entered a docket, uploaded a photo" },
      { owner: "admin", strong: "Test dockets verified in admin portal", desc: "confirm driver submissions are appearing correctly" },
    ],
  },
  {
    label: "Week 3",
    title: "Go-Live Preparation",
    owner: "Primary: Admin/Owner",
    items: [
      { owner: "admin", strong: "Go-live date confirmed", desc: "agreed with HaulageOps team and communicated to drivers and admin" },
      { owner: "admin", strong: "Subcontractors notified", desc: "subs who receive jobs through you are aware of the new system" },
      { owner: "admin", strong: "Old system freeze date set", desc: "final date for entering data into spreadsheets or old system" },
      { owner: "ops", strong: "Go-live support confirmed", desc: "HaulageOps account manager available during first week of live operations" },
    ],
  },
  {
    label: "Week 3–4",
    title: "Go-Live & First Invoice Cycle",
    owner: "Primary: Admin/Owner + HaulageOps Team",
    items: [
      { owner: "admin", strong: "First live jobs dispatched through HaulageOps", desc: "real jobs, real clients, real dockets" },
      { owner: "admin", strong: "Dockets reviewed daily for the first week", desc: "confirm completeness and accuracy before invoice run" },
      { owner: "admin", strong: "First invoice run completed", desc: "invoices generated, reviewed and pushed to Xero" },
      { owner: "admin", strong: "Invoices verified in Xero", desc: "correct line items, account codes, client contacts" },
      { owner: "ops", strong: "30-day check-in scheduled", desc: "review of how the system is working and any config adjustments" },
    ],
  },
];

export default function ImplementationChecklistPage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb + Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#FFF9F5] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/resources" className="hover:text-[#E8652B]">Resources</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Implementation Checklist</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Checklist · Implementation
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            HaulageOps Implementation Checklist
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Everything your team needs to complete before go-live — week by week, with owner tags for who's responsible for each item.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* OWNER TAGS LEGEND */}
          <div className="mb-8">
            <p className="text-sm text-[#556671]">
              Owner tags:{" "}
              <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-lg ${ownerMeta.admin.className}`}>Admin/Owner</span>{" "}
              = business owner or office lead ·{" "}
              <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-lg ${ownerMeta.ops.className}`}>HaulageOps Team</span>{" "}
              = your implementation contact ·{" "}
              <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-lg ${ownerMeta.driver.className}`}>Driver/Fleet</span>{" "}
              = driver lead or fleet manager
            </p>
          </div>

          {weeks.map((week) => (
            <div key={week.title} className="bg-white border border-[#E4E9EC] rounded-2xl p-7 mb-7">
              <span className="inline-block bg-[#0F172A] text-[#E8652B] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
                {week.label}
              </span>
              <h2 className="text-xl font-extrabold text-[#0F172A] mb-1">{week.title}</h2>
              <p className="text-sm text-[#7A8A94] mb-4">{week.owner}</p>
              <div>
                {week.items.map((item) => (
                  <div key={item.strong} className="flex items-start gap-3 py-2.5 border-b border-[#F0F3F5] last:border-b-0">
                    <span className="mt-1 h-[18px] w-[18px] shrink-0 rounded border-2 border-[#C6CFD5] bg-white" />
                    <span className={`mt-1 shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-lg ${ownerMeta[item.owner].className}`}>
                      {ownerMeta[item.owner].label}
                    </span>
                    <p className="text-sm text-[#2D4250] leading-relaxed">
                      <strong className="text-[#0F172A]">{item.strong}</strong>
                      {item.desc ? <> — {item.desc}</> : null}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to start your implementation?</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Book a demo and we'll walk through the full implementation timeline for your fleet size.
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

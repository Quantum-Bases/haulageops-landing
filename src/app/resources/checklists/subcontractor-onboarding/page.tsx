import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Subcontractor Onboarding Checklist for Haulage Operators | HaulageOps",
  description:
    "A practical checklist for onboarding new subcontractors to your haulage operation — documents to collect, compliance checks to run, system setup steps, and driver app training.",
};

type Item = { req: string; desc: string };

type Section = {
  title: string;
  items: Item[];
  warning?: string;
};

const sections: Section[] = [
  {
    title: "1. Business & Legal Documents",
    items: [
      { req: "ABN confirmed and verified", desc: "check via ABN Lookup; withholding tax applies if no valid ABN is supplied" },
      { req: "Signed subcontractor agreement", desc: "covering rates, payment terms, job allocation, and termination provisions" },
      { req: "GST registration status confirmed", desc: "are they registered for GST? Required for proper invoice treatment" },
      { req: "Bank account details for payment", desc: "BSB and account number for invoice payment" },
      { req: "Emergency contact on file", desc: "contact person who can be reached if a driver is unreachable" },
    ],
    warning:
      "If you're unsure whether a subcontractor relationship may be reclassified as an employment relationship, seek independent legal advice. This checklist does not constitute legal advice.",
  },
  {
    title: "2. Insurance Documents",
    items: [
      { req: "Public liability insurance — current Certificate of Currency", desc: "minimum cover appropriate for your operation; confirm with your insurer" },
      { req: "Comprehensive vehicle insurance — current Certificate of Currency", desc: "for each vehicle being deployed on your jobs" },
      { req: "Insurance expiry dates recorded in HaulageOps", desc: "with automated alerts for renewal 30 and 14 days before expiry" },
      { req: "Goods-in-transit or cargo insurance", desc: "if relevant to the materials being transported" },
    ],
  },
  {
    title: "3. Vehicle Documents",
    items: [
      { req: "Vehicle registration — copy for each truck", desc: "confirming registration is current and in the correct entity name" },
      { req: "Vehicle type, GVM and load capacity recorded", desc: "required for correct job allocation and mass management" },
      { req: "Registration expiry recorded in HaulageOps", desc: "alert set for renewal before expiry" },
      { req: "Vehicle roadworthiness certificate if applicable", desc: "for older vehicles or where required by your clients or sites" },
    ],
  },
  {
    title: "4. Driver Documents",
    items: [
      { req: "Driver licence — copy for each driver", desc: "including correct heavy vehicle class/endorsements for the trucks they'll drive" },
      { req: "Licence expiry recorded in HaulageOps", desc: "alert set 60 days before expiry" },
      { req: "Driver medical certificate if required", desc: "required under some fatigue management schemes; confirm for your operation" },
      { req: "White card or site safety induction if required", desc: "for drivers working on construction sites" },
    ],
  },
  {
    title: "5. HaulageOps System Setup",
    items: [
      { req: "Subcontractor added to HaulageOps", desc: "company name, ABN, contact details, vehicles and drivers entered" },
      { req: "All documents uploaded to their subcontractor profile", desc: "insurance, registration, licences stored in the system" },
      { req: "Subcontractor portal access granted", desc: "login credentials shared with the sub's office contact" },
      { req: "Driver app installed on sub drivers' phones", desc: "and test job completed successfully" },
      { req: "Rate card configured for this subcontractor", desc: "their pay rate per tonne/load/hour entered for correct cost tracking" },
    ],
  },
  {
    title: "6. Operational Briefing",
    items: [
      { req: "Job allocation process explained", desc: "how they'll receive jobs (app notification), how to accept/decline, expected response time" },
      { req: "Docket requirements explained", desc: "what the sub driver must photograph and enter at each delivery" },
      { req: "Invoicing process explained", desc: "how they invoice you, what reference number to use, payment terms and schedule" },
      { req: "Your safety and site requirements communicated", desc: "any specific PPE, induction, or site behaviour requirements your clients impose" },
      { req: "Fatigue and break obligations discussed", desc: "ensure the sub is aware of their obligations; do not schedule work that requires limit breaches" },
      { req: "Escalation contact shared", desc: "who to call if there's a problem on site, a breakdown, or a dispute" },
    ],
  },
];

export default function SubcontractorOnboardingChecklistPage() {
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
            <span className="text-[#0F172A] font-medium">Subcontractor Onboarding Checklist</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Checklist · Subcontractor Management
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Subcontractor Onboarding Checklist
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Everything you need to collect and verify before a new subcontractor starts work — documents, compliance checks, system setup, and operational briefing.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <div key={section.title} className="mb-10">
              <h2 className="text-lg font-extrabold text-[#0F172A] pb-2 mb-4 border-b-2 border-[#E8652B]">{section.title}</h2>
              <div>
                {section.items.map((item) => (
                  <div key={item.req} className="flex items-start gap-3 py-3 border-b border-[#EEF1F3] last:border-b-0">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-[#C6CFD5] bg-white">
                      <Check className="h-3 w-3 text-transparent" />
                    </span>
                    <span className="text-sm text-[#2D4250] leading-relaxed">
                      <strong className="text-[#0F172A]">{item.req}</strong> — {item.desc}
                    </span>
                  </div>
                ))}
              </div>
              {section.warning ? (
                <div className="flex items-start gap-2.5 bg-[#FFF4E3] border-l-[3px] border-[#E8652B] p-3.5 rounded text-sm text-[#68410C] leading-relaxed mt-3">
                  <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>{section.warning}</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Onboard subcontractors faster with HaulageOps</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              The subcontractor portal handles document storage, expiry alerts, job allocation and dockets in one place.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/platform/subcontractor-portal">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                See the Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

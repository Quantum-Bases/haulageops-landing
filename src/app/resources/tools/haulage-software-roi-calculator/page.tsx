import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { RoiCalculator } from "./roi-calculator";

export const metadata = {
  title: "Haulage Software ROI Calculator | HaulageOps",
  description:
    "Calculate the return on investment from haulage operations software — enter your fleet size, current admin hours, and invoice cycle to see your estimated annual savings.",
};

const roiDrivers = [
  {
    title: "Admin Time Reduction",
    p: "The biggest driver for most operators. Dispatchers typically spend 2–4 hours/day on phone calls, WhatsApp coordination and manual data entry that a platform handles automatically. Billing admin drops from hours to minutes per invoice run.",
    callout: "Typical saving: 40–60% of current admin time",
  },
  {
    title: "Faster Invoice Collection",
    p: "Cutting your invoice cycle from 3–4 weeks to same-day means the cash that's already owed to you lands faster. For a $200k/month operation, cutting two weeks off the cycle improves working capital by ~$100k at any given time.",
    callout: "Typical improvement: 15–21 days off invoice cycle",
  },
  {
    title: "Fewer Billing Disputes",
    p: "Digital dockets with timestamps, GPS and photos mean clients can't dispute deliveries they've already seen in their portal. The cost of resolving a billing dispute — admin time, potential write-offs, relationship damage — is rarely counted, but it's real.",
    callout: "Typical reduction: 80%+ in billing disputes",
  },
  {
    title: "Subcontractor Cost Control",
    p: "When subcontractor invoices are reconciled against your own records (rather than just approved on trust), it's common to find discrepancies of 2–5% of subcontractor spend. On a $500k/year sub spend, that's $10–25k in recaptured cost.",
    callout: "Typical recovery: 2–5% of subcontractor costs",
  },
];

export default function RoiCalculatorPage() {
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
            <span className="text-[#0F172A] font-medium">ROI Calculator</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Tool · ROI Estimation
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Haulage Software ROI Calculator
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Enter your fleet details and current admin setup to estimate the annual value of moving to a dedicated haulage operations platform.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RoiCalculator />
        </div>
      </section>

      {/* ROI DRIVERS */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">What Drives the ROI in Haulage Software</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {roiDrivers.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p}</p>
                <p className="mt-4 text-[13px] font-bold text-[#E8652B]">{card.callout}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Want a tailored ROI analysis?</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Book a demo and we'll work through the numbers specific to your fleet, clients and invoicing pattern.
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

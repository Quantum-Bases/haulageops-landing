import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { AdminCostCalculator } from "./admin-cost-calculator";

export const metadata = {
  title: "Admin Cost Calculator for Haulage Operators | HaulageOps",
  description:
    "Calculate exactly how much your haulage operation is spending on manual administration — dispatch calls, docket processing, billing, and dispute resolution — before and after a software switch.",
};

export default function AdminCostCalculatorPage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb + Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-neutral-50/80 via-white to-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/resources" className="hover:text-[#E8652B]">Resources</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Admin Cost Calculator</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Tool · Admin Costing
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Haulage Admin Cost Calculator
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Find out exactly how much your operation is spending on manual admin — and what you could save with a dedicated platform. Enter your weekly time per task and see the annual cost.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdminCostCalculator />
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Surprised by the number?</h2>
            <p className="mt-2 text-neutral-400 text-sm leading-relaxed max-w-xl">
              Book a demo and we'll show you how HaulageOps cuts each of those tasks — with your operation in mind.
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

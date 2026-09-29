"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-neutral-300 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 p-8 sm:p-16 text-center text-neutral-900 shadow-sm relative overflow-hidden"
        >


          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-neutral-900 max-w-3xl mx-auto">
            See your heavy vehicle fleet live on HaulageOps.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto font-normal">
            In 20 minutes, we'll demonstrate your exact workflows — live dispatch board, driver mobile docket capture, subcontractor self-serve, and instant Xero reconciliations.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/admin-haulageops/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#E8652B] hover:bg-[#D05520] text-white font-bold text-base transition-colors shadow-sm"
            >
              Book a 20-Minute Live Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/compare"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 font-bold text-base transition-colors shadow-xs"
            >
              Compare vs Spreadsheets
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-neutral-600 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E8652B]" />
              Works with existing GPS telematics
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E8652B]" />
              Free unlimited subbie & client logins
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E8652B]" />
              Australian support & implementation
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { Footer } from "@/components/layout/Footer";


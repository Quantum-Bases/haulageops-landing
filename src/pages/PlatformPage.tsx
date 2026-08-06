"use client";

import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Smartphone, Users, Building, Shield, FileText, Layers } from "lucide-react";
import Link from "next/link";
import { FaqSection } from "@/components/shared/FaqSection";

const platformPortals = [
  {
    title: "1. Admin & Dispatch Panel",
    desc: "The operational control centre for creating jobs, assigning owned drivers, delegating work to subcontractors, viewing live status, and managing invoicing.",
    icon: Layers,
    href: "/platform/dispatch-management",
    items: [
      "Create jobs with origin, destination, material, schedule & rates",
      "Assign single or multiple jobs to internal drivers or subcontractors",
      "View active jobs, mobile GPS positions, and dispatch status",
      "Maintain vehicle, driver, client, document, and rate card records",
    ],
  },
  {
    title: "2. Driver Mobile App",
    desc: "A production-ready iOS and Android application for job notifications, status updates, mobile GPS, availability, rest breaks, and POD capture.",
    icon: Smartphone,
    href: "/platform/driver-app",
    items: [
      "Receive assigned job details and dispatch push notifications",
      "Update operational status from en route through completion",
      "Capture 3-tap delivery photos, documents, and signatures",
      "Continue working offline in low-connectivity quarry pits",
    ],
  },
  {
    title: "3. Subcontractor Portal",
    desc: "A dedicated login for external subcontractors and owner-drivers to receive delegated work without giving access to internal admin settings.",
    icon: Users,
    href: "/platform/subcontractor-portal",
    items: [
      "View assigned work, rates, and job specifications",
      "Accept or decline delegated jobs in real time",
      "Interactive Mapbox route navigation and site notes",
      "Maintain job history and upload dockets directly",
    ],
  },
  {
    title: "4. Client Portal",
    desc: "A branded self-service view for clients to track live job progress, download dockets and POD evidence, and view billing history.",
    icon: Building,
    href: "/platform/client-portal",
    items: [
      "View live job status and historical dispatch records",
      "Instant access to proof of delivery and photo evidence",
      "Review invoices and Xero-synced payment status",
      "Access agreed rate cards and volume reports",
    ],
  },
  {
    title: "5. Management & Reporting",
    desc: "Complete executive visibility across operational history, financial health, client activity, and compliance audit records.",
    icon: FileText,
    href: "/platform/reporting-and-analytics",
    items: [
      "Review historical performance by client, driver, and period",
      "Monitor revenue, outstanding invoices, and payment cycles",
      "Retrieve full action logs and driver break history",
      "Export reports for client billing or compliance audits",
    ],
  },
];

export function PlatformPage() {
  return (
    <MainLayout>
      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#FFF5EE]/60 via-[#FFF9F5]/30 to-white text-[#0F172A]">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4"
          >
            Bulk Haulage Operations Platform
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl mx-auto"
          >
            One platform. Five portals. Every party on the job.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed"
          >
            HaulageOps connects dispatch, drivers, subcontractors, clients, and management around one live job record, from creation to invoice.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a 20-minute demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portals Showcase Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0F172A]">Five role-specific portals. One controlled source of truth.</h2>
            <p className="mt-4 text-[#64748B] max-w-2xl mx-auto">
              Each user sees the exact tools and data relevant to their role with granular role-based permissions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformPortals.map((portal) => {
              const IconComp = portal.icon;
              return (
                <motion.div
                  key={portal.title}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FFF0E6] flex items-center justify-center text-[#E8652B] mb-6">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A]">{portal.title}</h3>
                    <p className="text-sm text-[#64748B] mt-2 leading-relaxed">{portal.desc}</p>
                    <ul className="mt-6 space-y-2.5">
                      {portal.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#334155]">
                          <CheckCircle className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={portal.href} className="mt-8 text-sm font-semibold text-[#E8652B] hover:text-[#D05520] flex items-center gap-1">
                    Explore portal specifications →
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <FaqSection />
    </MainLayout>
  );
}

export default PlatformPage;

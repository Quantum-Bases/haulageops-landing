"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Radio,
  FileText,
  RefreshCcw,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

const proofItems = [
  { icon: CheckCircle2, label: "Native subcontractor portal" },
  { icon: FileText, label: "POD with photo, document and signature" },
  { icon: RefreshCcw, label: "Xero-native" },
  { icon: Radio, label: "Real-time across every portal" },
  { icon: Smartphone, label: "Offline driver app" },
  { icon: ShieldCheck, label: "Full audit trail" },
];

export function Hero() {
  return (
    <section className="relative hero-gradient overflow-hidden pt-16">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="secondary"
              className="mb-6 bg-white/10 text-white/90 border-white/20 hover:bg-white/15 px-4 py-1.5 text-sm font-medium"
            >
              Built inside a 40-year bulk haulage operator
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight text-balance"
          >
            Run every job — trucks, subbies, and clients — on one live
            platform.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl"
          >
            HaulageOps is the TMS built for bulk haulage and construction
            logistics: live job tracking, digital POD, a native subcontractor
            portal, client visibility, rate cards, invoicing, and audit-ready
            records — on one platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold text-base px-8 py-6 h-auto"
            >
              Book a 20-minute demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white font-medium text-base px-8 py-6 h-auto"
            >
              <Play className="mr-2 h-4 w-4" />
              See how it works
            </Button>
          </motion.div>
        </div>

        {/* Proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 pt-10 border-t border-white/10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {proofItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <item.icon className="h-4 w-4 text-[#E8652B] shrink-0" />
                <span className="text-sm text-white/70 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

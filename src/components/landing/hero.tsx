"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Radio,
  FileText,
  RefreshCcw,
  Smartphone,
  ShieldCheck,
  Truck,
  MapPin,
  Clock,
  CircleDot,
  ArrowDownRight,
  User,
  Package,
} from "lucide-react";

const proofItems = [
  { icon: CheckCircle2, label: "Native subcontractor portal" },
  { icon: FileText, label: "POD with photo, document & signature" },
  { icon: RefreshCcw, label: "Xero-native" },
  { icon: Radio, label: "Real-time across every portal" },
  { icon: Smartphone, label: "Offline driver app" },
  { icon: ShieldCheck, label: "Full audit trail" },
];

/* ── Tiny dashboard mockup rendered in pure divs ── */
function DashboardMockup() {
  const jobs = [
    { id: "J-1042", from: "Hanson Quarry", to: "WestConnex M4", status: "In Transit", driver: "Dave R.", sub: true },
    { id: "J-1041", from: "Boral Pitt Town", to: "Solar Farm #3", status: "Delivered", driver: "Mike T.", sub: false },
    { id: "J-1040", from: "Holcim", to: "Tunnel Bore 7", status: "Dispatched", driver: "—", sub: true },
    { id: "J-1039", from: "Winstone", to: "RNA Showgrounds", status: "POD Captured", driver: "Leigh K.", sub: false },
  ];

  const statusColor: Record<string, string> = {
    "In Transit": "bg-blue-400",
    Delivered: "bg-emerald-400",
    Dispatched: "bg-amber-400",
    "POD Captured": "bg-violet-400",
  };

  return (
    <div className="bg-[#0D1525] rounded-2xl border border-white/10 overflow-hidden shadow-2xl" style={{ transformStyle: "preserve-3d" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/8 bg-white/[0.03]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-amber-400/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
        </div>
        <div className="text-[11px] text-white/30 font-medium tracking-wide">HaulageOps — Dispatch Panel</div>
        <div className="w-[42px]" />
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden sm:flex flex-col w-[52px] border-r border-white/8 py-3 gap-1 bg-white/[0.02]">
          {[
            { icon: "◉", active: true },
            { icon: "☰", active: false },
            { icon: "✎", active: false },
            { icon: "⊞", active: false },
            { icon: "⏱", active: false },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center justify-center h-9 text-xs ${
                item.active ? "text-[#E8652B] bg-[#E8652B]/10 border-r-2 border-[#E8652B]" : "text-white/25"
              }`}
            >
              {item.icon}
            </div>
          ))}
        </div>

        {/* Main area */}
        <div className="flex-1 p-4 min-w-0">
          {/* Stats row */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[
              { label: "Active", value: "12", color: "text-blue-400" },
              { label: "In Transit", value: "7", color: "text-amber-400" },
              { label: "Delivered", value: "34", color: "text-emerald-400" },
              { label: "Subbies", value: "5", color: "text-[#E8652B]" },
            ].map((s) => (
              <div key={s.label} className="bg-white/[0.04] rounded-lg px-3 py-2">
                <div className={`text-lg font-bold ${s.color}`}>{s.value}</div>
                <div className="text-[10px] text-white/30 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Job list */}
          <div className="text-[10px] text-white/30 uppercase tracking-wider mb-2 font-semibold">Live Jobs</div>
          <div className="space-y-1.5">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] rounded-lg px-3 py-2 transition-colors"
              >
                <div className={`w-2 h-2 rounded-full shrink-0 ${statusColor[job.status]}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white/90">{job.id}</span>
                    {job.sub && (
                      <span className="text-[9px] bg-[#E8652B]/20 text-[#E8652B] px-1.5 py-0.5 rounded font-semibold">SUB</span>
                    )}
                  </div>
                  <div className="text-[11px] text-white/40 truncate">
                    {job.from} → {job.to}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[10px] text-white/50">{job.driver}</div>
                  <div className={`text-[10px] font-medium ${
                    job.status === "Delivered" || job.status === "POD Captured"
                      ? "text-emerald-400/80"
                      : job.status === "In Transit"
                      ? "text-blue-400/80"
                      : "text-amber-400/80"
                  }`}>
                    {job.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Stagger children on mount ── */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Scroll-driven progress (0 at top of section, 1 at bottom) */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* Map scroll to opacity: visible 0–35%, gone by 70% */
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.65], [0, 1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.3, 0.65], [0.94, 1, 0.96]);
  const contentY = useTransform(scrollYProgress, [0, 0.3, 0.65], [50, 0, -30]);

  /* 3D image tracks slightly differently — lingers longer */
  const imageOpacity = useTransform(scrollYProgress, [0, 0.25, 0.7], [0, 1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 0.25, 0.7], [80, 0, -60]);
  const imageRotateX = useTransform(scrollYProgress, [0, 0.3, 0.65], [18, 8, 4]);

  /* Proof strip — appears as hero fades */
  const proofOpacity = useTransform(scrollYProgress, [0.15, 0.4, 0.7], [0, 1, 0]);
  const proofY = useTransform(scrollYProgress, [0.15, 0.4, 0.7], [40, 0, -20]);

  return (
    <section
      ref={sectionRef}
      className="relative hero-gradient overflow-hidden"
      style={{ height: "220vh" }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />

      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* ── Left: text content ── */}
            <motion.div
              style={{ opacity: contentOpacity, scale: contentScale, y: contentY }}
            >
              <motion.div variants={container} initial="hidden" animate="show">
                <motion.div variants={item}>
                  <Badge
                    variant="secondary"
                    className="mb-6 bg-white/10 text-white/90 border-white/20 hover:bg-white/15 px-4 py-1.5 text-sm font-medium inline-flex items-center gap-2"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    Built inside a 40-year bulk haulage operator
                  </Badge>
                </motion.div>

                <motion.h1
                  variants={item}
                  className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.08] tracking-[-0.035em] text-balance"
                >
                  Run every job — trucks, subbies, and clients — on one live
                  platform.
                </motion.h1>

                <motion.p
                  variants={item}
                  className="mt-6 text-lg sm:text-xl text-white/65 leading-relaxed max-w-xl"
                >
                  HaulageOps is the TMS built for bulk haulage and construction
                  logistics: live job tracking, digital POD, a native subcontractor
                  portal, client visibility, rate cards, invoicing, and audit-ready
                  records — on one platform.
                </motion.p>

                <motion.div
                  variants={item}
                  className="mt-10 flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    size="lg"
                    className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold text-base px-8 py-6 h-auto shadow-lg shadow-[#E8652B]/25 hover:shadow-[#E8652B]/40 transition-shadow"
                  >
                    Book a 20-minute demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white/90 hover:bg-white/10 hover:text-white hover:border-white/30 font-medium text-base px-8 py-6 h-auto backdrop-blur-sm"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    See how it works
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* ── Right: 3D product image ── */}
            <motion.div
              style={{ opacity: imageOpacity, y: imageY }}
              className="hidden lg:block"
            >
              <div className="relative" style={{ perspective: "1200px" }}>
                <motion.div
                  style={{ rotateX: imageRotateX }}
                  className="transition-none"
                >
                  {/* Glow behind the card */}
                  <div className="absolute -inset-4 bg-[#E8652B]/15 rounded-3xl blur-3xl opacity-60" />
                  <div className="relative">
                    <DashboardMockup />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ── Proof strip ── */}
          <motion.div
            style={{ opacity: proofOpacity, y: proofY }}
            className="mt-16 lg:mt-20 pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-4">
              {proofItems.map((proof) => (
                <div key={proof.label} className="flex items-center gap-2.5">
                  <proof.icon className="h-4 w-4 text-[#E8652B] shrink-0" />
                  <span className="text-sm text-white/60 font-medium">
                    {proof.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* White fade at bottom — smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/40 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}

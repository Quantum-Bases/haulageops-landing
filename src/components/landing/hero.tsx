"use client";

import { useRef, useState, useEffect } from "react";
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
  LayoutDashboard,
  Users,
  BarChart3,
} from "lucide-react";

/* ── Laptop-style dashboard mockup ── */
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

  const statusText: Record<string, string> = {
    "In Transit": "text-blue-400",
    Delivered: "text-emerald-400",
    Dispatched: "text-amber-400",
    "POD Captured": "text-violet-400",
  };

  return (
    <div className="h-full w-full overflow-hidden rounded-2xl md:p-4 bg-[#0D1525]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/8 bg-white/[0.03] rounded-t-xl">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-amber-400/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
        </div>
        <div className="text-[11px] text-white/30 font-medium tracking-wide">HaulageOps — Dispatch Panel</div>
        <div className="w-[42px]" />
      </div>

      <div className="flex h-[calc(100%-48px)]">
        {/* Sidebar */}
        <div className="hidden sm:flex flex-col w-[52px] border-r border-white/8 py-3 gap-1 bg-white/[0.02]">
          {[
            { icon: <LayoutDashboard className="w-4 h-4" />, active: true },
            { icon: <Truck className="w-4 h-4" />, active: false },
            { icon: <Users className="w-4 h-4" />, active: false },
            { icon: <FileText className="w-4 h-4" />, active: false },
            { icon: <BarChart3 className="w-4 h-4" />, active: false },
          ].map((s, i) => (
            <div
              key={i}
              className={`flex items-center justify-center h-9 ${
                s.active
                  ? "text-[#E8652B] bg-[#E8652B]/10 border-r-2 border-[#E8652B]"
                  : "text-white/25 hover:text-white/40"
              } transition-colors`}
            >
              {s.icon}
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
                  <div className={`text-[10px] font-medium ${statusText[job.status] || "text-white/50"}`}>
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

/* ══════════════════════════════════════════════
   Aceternity-style ContainerScroll component
   ══════════════════════════════════════════════ */
function ContainerScroll({
  titleComponent,
  children,
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  /* Desktop: card starts slightly scaled-up and tilted, flattens to normal */
  const scaleDimensions = () => (isMobile ? [0.7, 0.9] : [1.05, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div className="py-10 md:py-40 w-full relative" style={{ perspective: "1000px" }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
}

function Header({
  translate,
  titleComponent,
}: {
  translate: ReturnType<typeof useTransform>;
  titleComponent: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
}

function Card({
  rotate,
  scale,
  children,
}: {
  rotate: ReturnType<typeof useTransform>;
  scale: ReturnType<typeof useTransform>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#2A2A2A] p-2 md:p-6 bg-[#1A1A1A] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl md:rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
}

/* ── Stagger entrance for text items ── */
const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] } },
};

/* ══════════════════════════════════════════════
   Hero — HaulageOps landing page
   ══════════════════════════════════════════════ */
export function Hero() {
  const titleComponent = (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center"
    >
      {/* Badge */}
      <motion.div variants={fadeUp}>
        <Badge
          variant="secondary"
          className="mb-8 bg-[#FFF4ED] text-[#E8652B] border-[#FDDCC8] hover:bg-[#FFF4ED] px-4 py-1.5 text-sm font-medium inline-flex items-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8652B] opacity-50" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8652B]" />
          </span>
          Built inside a 40-year bulk haulage operator
        </Badge>
      </motion.div>

      {/* Headline — dark text with orange accent words */}
      <motion.h1
        variants={fadeUp}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-bold leading-[1.08] tracking-[-0.035em] text-[#0F172A] text-balance max-w-4xl"
      >
        Run every job — trucks,{" "}
        <span className="text-[#E8652B]">subbies</span>
        {", and "}
        <span className="text-[#E8652B]">clients</span>
        {" "}— on one{" "}
        <span className="text-[#E8652B]">live</span>
        {" "}platform.
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        variants={fadeUp}
        className="mt-6 text-lg sm:text-xl text-[#6B7280] leading-relaxed max-w-2xl mx-auto"
      >
        HaulageOps is the TMS built for bulk haulage and construction
        logistics: live job tracking, digital POD, a native subcontractor
        portal, client visibility, rate cards, invoicing, and audit-ready
        records — on one platform.
      </motion.p>

      {/* CTAs */}
      <motion.div
        variants={fadeUp}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button
          size="lg"
          className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold text-base px-8 py-6 h-auto shadow-lg shadow-[#E8652B]/20 hover:shadow-[#E8652B]/35 transition-all"
        >
          Book a 20-minute demo
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-[#E5E7EB] text-[#374151] hover:bg-[#F9FAFB] hover:text-[#111827] hover:border-[#D1D5DB] font-medium text-base px-8 py-6 h-auto"
        >
          <Play className="mr-2 h-4 w-4" />
          See how it works
        </Button>
      </motion.div>

      {/* Proof strip */}
      <motion.div variants={fadeUp} className="mt-12 sm:mt-14 pt-8 border-t border-[#E5E7EB]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-4">
          {[
            { icon: CheckCircle2, label: "Native subcontractor portal" },
            { icon: FileText, label: "POD with photo, document & signature" },
            { icon: RefreshCcw, label: "Xero-native" },
            { icon: Radio, label: "Real-time across every portal" },
            { icon: Smartphone, label: "Offline driver app" },
            { icon: ShieldCheck, label: "Full audit trail" },
          ].map((proof) => (
            <div key={proof.label} className="flex items-center gap-2.5 justify-center">
              <proof.icon className="h-4 w-4 text-[#E8652B] shrink-0" />
              <span className="text-sm text-[#6B7280] font-medium">{proof.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section className="relative bg-white overflow-hidden flex flex-col">
      <ContainerScroll titleComponent={titleComponent}>
        <DashboardMockup />
      </ContainerScroll>
    </section>
  );
}

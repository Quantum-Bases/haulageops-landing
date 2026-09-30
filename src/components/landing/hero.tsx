"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle2, ShieldCheck, MapPin, Truck } from "lucide-react";

/* ── Live Platform Mockup with Real Fleet Photography & Mobile Driver App ── */
function DashboardMockup() {
  return (
    <div className="w-full relative overflow-hidden bg-neutral-900 flex flex-col rounded-xl md:rounded-2xl border border-neutral-300 shadow-2xl">
      {/* Top window control bar - sleek modern graphite */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-700 bg-neutral-900 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-neutral-700" />
          <div className="w-3 h-3 rounded-full bg-neutral-700" />
          <div className="w-3 h-3 rounded-full bg-neutral-700" />
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-200 tracking-wide">
          <span className="w-2 h-2 rounded-full bg-[#E8652B] animate-pulse" />
          HaulageOps Dispatch Hub • Live Heavy Fleet Tracking
        </div>
        <div className="hidden sm:flex items-center gap-3 text-[11px] text-neutral-400 font-mono">
          <span>NSW • VIC • QLD • NZ</span>
        </div>
      </div>

      {/* Screen snapshot content */}
      <div className="relative w-full bg-neutral-950 overflow-hidden">
        <picture>
          <source srcSet="/dash1-mobile.webp" media="(max-width: 768px)" type="image/webp" />
          <source srcSet="/dash1-hero.webp" type="image/webp" />
          <img
            src="/dash1-hero.webp"
            alt="HaulageOps Live Dispatch & Fleet Dashboard"
            width={2048}
            height={1142}
            fetchPriority="high"
            decoding="async"
            className="w-full h-auto block"
          />
        </picture>

        {/* Floating Real Driver App Preview Card */}
        <div className="hidden lg:flex absolute bottom-6 right-6 w-80 bg-white rounded-xl shadow-2xl border border-neutral-200 overflow-hidden flex-col z-20">
          <div className="bg-neutral-900 text-white px-3.5 py-2.5 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E8652B]" />
              Driver Mobile App
            </span>
            <span className="text-[10px] text-neutral-400 font-mono">Offline-Ready</span>
          </div>
          <div className="p-3 bg-neutral-50 flex items-center gap-3 border-b border-neutral-200">
            <div className="w-9 h-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-xs">
              HO
            </div>
            <div>
              <div className="text-xs font-bold text-neutral-900">Job #HO-JB-2026-099</div>
              <div className="text-[11px] text-neutral-600 font-medium">Sydney Metro • GSW Asbestos</div>
            </div>
          </div>
          <div className="p-3 bg-white space-y-2 text-xs">
            <div className="flex justify-between text-neutral-600">
              <span>Payload:</span>
              <span className="font-bold text-neutral-900">32.4 Tonnes</span>
            </div>
            <div className="flex justify-between text-neutral-600">
              <span>Docket Status:</span>
              <span className="font-semibold text-[#E8652B] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Weighbridge Photo Attached
              </span>
            </div>
            <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px]">
              <span className="text-neutral-500">Xero Integration:</span>
              <span className="font-bold text-[#E8652B]">3-Way Reconciled</span>
            </div>
          </div>
        </div>

        {/* Floating Real Truck & Fleet Status Badge */}
        <div className="hidden sm:flex absolute top-6 left-6 bg-white/95 backdrop-blur-md p-2.5 rounded-xl shadow-xl border border-neutral-200 items-center gap-3.5 z-20 max-w-xs">
          <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-neutral-200">
            <img
              src="/images/hero-tipper-quarry.webp"
              alt="Live Tipper Truck"
              loading="lazy"
              decoding="async"
              width={400}
              height={267}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E8652B]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">Fleet Active</span>
            </div>
            <div className="text-xs font-black text-neutral-900">28 Heavy Combinations Online</div>
            <div className="text-[10px] text-neutral-500 font-medium">Tippers, Truck & Dog, B-Doubles</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── ContainerScroll component ── */
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
    offset: ["start start", "end start"],
  });

  const scaleDimensions = () => (isMobile ? [0.85, 0.98] : [1.02, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.25], [10, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.25], [0, -30]);

  return (
    <div className="h-auto flex items-center justify-center relative" ref={containerRef}>
      <div className="w-full relative max-h-[1100px] 2xl:max-h-[1300px]" style={{ perspective: "1000px" }}>
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
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] mx-auto text-center px-4"
    >
      <div>{titleComponent}</div>
    </motion.div>
  );
}

function Card({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        padding: "clamp(0.75rem, 2vw, 1.5rem)",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      }}
      className="max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] -mt-2 sm:-mt-4 mx-auto h-auto w-full border border-neutral-300 rounded-[20px] md:rounded-[28px] relative overflow-hidden bg-neutral-100"
    >
      <div className="relative h-auto w-full overflow-hidden rounded-[12px] md:rounded-[18px]">
        {children}
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════
   Hero — HaulageOps landing page
   ══════════════════════════════════════════════ */
export function Hero() {
  const titleComponent = (
    <div className="flex flex-col items-center pt-8 pb-10 sm:pt-12 sm:pb-14 max-w-4xl mx-auto text-center relative z-10">
      {/* Australian Industry Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 bg-white border border-neutral-300 shadow-xs">
        <span className="w-2 h-2 rounded-full bg-[#E8652B]" />
        <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
          🇦🇺 Australia & New Zealand Bulk Haulage TMS
        </span>
      </div>

      {/* Bold Crisp Headline - Instantly Painted with No Hydration Delay for 100/100 LCP */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.1] text-center">
        Built for Tippers, Quarries <br className="hidden sm:inline" />
        <span className="text-[#E8652B]">& Heavy Civil Fleets.</span>
      </h1>

      {/* Crisp Grounded Subtitle */}
      <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-700 max-w-2xl leading-relaxed text-center font-normal">
        One unified system for Dispatch, Subcontractors, Driver App, and automated Xero billing. Replace paper dockets and phone tag with real-time delivery certainty.
      </p>

      {/* Dual High-Conversion Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
        <Link
          href="/demo"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#E8652B] hover:bg-[#D05520] text-white text-base font-bold transition-colors shadow-sm cursor-pointer"
        >
          Book a 20-Min Live Demo
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="#platform"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 text-base font-bold transition-colors shadow-xs cursor-pointer"
        >
          <Play className="w-4 h-4 fill-neutral-900 text-neutral-900" />
          Watch Platform Tour
        </Link>
      </div>
    </div>
  );

  return (
    <section className="relative bg-white overflow-hidden flex flex-col pt-8 md:pt-12">
      {/* Ambient Heavy Bulk Haulage Background Image with Clean White Overlay */}
      <div className="absolute top-0 inset-x-0 h-[560px] sm:h-[640px] pointer-events-none overflow-hidden select-none z-0">
        <picture>
          <source srcSet="/images/hero-bg-mobile.webp" media="(max-width: 768px)" type="image/webp" />
          <source srcSet="/images/hero-bg-desktop.webp" type="image/webp" />
          <img
            src="/images/hero-bg-desktop.webp"
            alt=""
            fetchPriority="high"
            decoding="async"
            width={1000}
            height={665}
            className="w-full h-full object-cover object-[center_30%]"
          />
        </picture>

        {/* Clean White Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/88 to-white backdrop-blur-[0.5px]" />

        {/* Subtle logistics dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10">
        <ContainerScroll titleComponent={titleComponent}>
          <DashboardMockup />
        </ContainerScroll>
      </div>
    </section>
  );
}

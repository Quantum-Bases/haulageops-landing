"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";

/* ── Laptop-style dashboard mockup ── */
function DashboardMockup() {
  return (
    <div className="w-full h-auto relative overflow-hidden bg-[#0D1525] flex flex-col rounded-[14px] md:rounded-[20px]">
      {/* Top bar window controls */}
      {/* <div className="flex items-center justify-between px-4 py-2.5 sm:px-5 sm:py-3 border-b border-white/10 bg-black/40 backdrop-blur-md shrink-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-[11px] text-white/50 font-medium tracking-wide">HaulageOps — Dispatch Panel</div>
        <div className="w-[42px]" />
      </div> */}

      {/* Screen snapshot content scaled strictly to natural 16:10 aspect ratio */}
      <div className="relative w-full h-auto bg-[#0D1525] overflow-hidden">
        <img
          src="/dash1.png"
          alt="HaulageOps Dashboard"
          className="w-full h-auto block"
        />
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
    offset: ["start start", "end start"],
  });

  const scaleDimensions = () => (isMobile ? [0.75, 0.95] : [1.02, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.25], [16, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.25], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <div
      className="h-auto flex items-center justify-center relative"
      ref={containerRef}
    >
      <div className="w-full relative max-h-[1000px] 2xl:max-h-[1200px]" style={{ perspective: "1000px" }}>
        <Header translate={translate} opacity={opacity} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
}

function Header({
  translate,
  opacity,
  titleComponent,
}: {
  translate: MotionValue<number>;
  opacity: MotionValue<number>;
  titleComponent: React.ReactNode;
}) {
  const opacityRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(opacity, "change", (v) => {
    if (opacityRef.current) opacityRef.current.style.opacity = String(v);
  });

  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] mx-auto text-center px-4"
    >
      <div ref={opacityRef}>{titleComponent}</div>
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
        padding: "clamp(1.5rem, 4vw, 2.5rem)",
        boxShadow:
          "0 0 #0000004d, 0 10px 30px #00000030, 0 30px 50px #00000025, 0 70px 60px #00000015",
      }}
      className="max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] -mt-4 sm:-mt-6 mx-auto h-auto w-full border-[6px] md:border-[10px] border-[#18181B] rounded-[24px] md:rounded-[36px] relative overflow-hidden bg-cover bg-center"
    >
      {/* Internal background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/ios-11-3840x2160-4k-5k-beach-ocean-13655.jpg')" }}
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

      {/* Inner application content box */}
      <div className="relative h-auto w-full overflow-hidden rounded-[14px] md:rounded-[20px] shadow-2xl border border-white/10" style={{ padding: "clamp(1rem, 3vw, 1.5rem)" }}>
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
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] as const } },
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
      className="flex flex-col items-center py-[84px] max-w-[836px] mx-auto text-center"
    >
      {/* Title styled matching inspect spec */}
      <motion.h1
        variants={fadeUp}
        className="hero-header_heading text-center"
      >
        Effortlessly <span className="text-[#E8652B]">track, plan,</span><br />
        and order <span className="text-[#E8652B]">haulage</span>
      </motion.h1>

      {/* Paragraph subtitle directly styled like genie inspect spec */}
      <motion.p
        variants={fadeUp}
        className="text-size-large mt-6 max-w-[836px] text-center"
      >
        Say goodbye to spreadsheets and clunky ERPs. Easily track stock, generate reports, and plan for future growth, all within a single platform.
      </motion.p>
    </motion.div>
  );

  return (
    <section className="relative bg-white overflow-hidden flex flex-col pt-12 md:pt-16">
      {/* Subtle top background gradient light */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#FFF5EE]/60 via-[#FFF9F5]/20 to-transparent pointer-events-none" />

      <ContainerScroll titleComponent={titleComponent}>
        <DashboardMockup />
      </ContainerScroll>
    </section>
  );
}

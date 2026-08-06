"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] as const } },
};

export default function OpacityTest() {
  const ref = useRef<HTMLDivElement>(null);
  const opacityRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const translate = useTransform(scrollYProgress, [0, 0.25], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  useMotionValueEvent(opacity, "change", (v) => {
    if (opacityRef.current) opacityRef.current.style.opacity = String(v);
  });

  return (
    <>
      <section className="relative bg-white overflow-hidden flex flex-col pt-12 md:pt-16">
        <div className="h-auto flex items-center justify-center relative" ref={ref}>
          <motion.div style={{ translateY: translate }} className="max-w-6xl mx-auto text-center px-4">
            <div ref={opacityRef} id="outer">
              <div variants={stagger} initial="hidden" animate="show" className="flex flex-col items-center py-[84px] max-w-[836px] mx-auto text-center">
                <h1>Effortlessly track, plan</h1>
                <p>Say goodbye to spreadsheets</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div style={{ height: 200 }} />
      </section>
      <div style={{ height: "200vh" }} />
    </>
  );
}

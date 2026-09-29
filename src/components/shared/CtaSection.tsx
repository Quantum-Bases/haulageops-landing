"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CtaConfig, mainFinalCta, partnerTeaserCta } from "@/data/ctaData";

interface CtaSectionProps {
  config?: CtaConfig;
  variant?: "main" | "teaser" | "dark";
  onButtonClick?: () => void;
}

export function CtaSection({
  config = mainFinalCta,
  variant = "main",
  onButtonClick,
}: CtaSectionProps) {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      window.open("https://calendly.com/admin-haulageops/30min", "_blank", "noopener,noreferrer");
    }
  };

  if (variant === "teaser") {
    const teaserConfig = config === mainFinalCta ? partnerTeaserCta : config;
    return (
      <section className="py-16 sm:py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900">
              {teaserConfig.headline}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              {teaserConfig.subheadline}
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={handleClick}
              className="mt-8 border-neutral-300 text-neutral-900 hover:bg-neutral-100 font-bold"
            >
              {teaserConfig.buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-neutral-300 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 p-8 sm:p-16 text-center text-neutral-900 shadow-sm relative overflow-hidden"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-neutral-900 max-w-3xl mx-auto">
            {config.headline}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto font-normal">
            {config.subheadline}
          </p>
          <Button
            size="lg"
            onClick={handleClick}
            className="mt-8 bg-[#E8652B] hover:bg-[#D05520] text-white font-bold text-base px-8 py-6 h-auto shadow-sm"
          >
            {config.buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

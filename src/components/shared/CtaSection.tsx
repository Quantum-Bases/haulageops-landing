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
      <section className="py-16 sm:py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {teaserConfig.headline}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {teaserConfig.subheadline}
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={handleClick}
              className="mt-8 border-[#E5E7EB] text-[#374151] hover:bg-[#F9FAFB]"
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
    <section className="py-20 sm:py-28 hero-gradient text-white">
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {config.headline}
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            {config.subheadline}
          </p>
          <Button
            size="lg"
            onClick={handleClick}
            className="mt-10 bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold text-base px-8 py-6 h-auto"
          >
            {config.buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

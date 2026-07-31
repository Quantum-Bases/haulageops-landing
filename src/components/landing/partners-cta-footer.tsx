"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck } from "lucide-react";

export function PartnersTeaser() {
  return (
    <section className="py-16 sm:py-20 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Your brand. Our platform.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Fleet and transport consultants: put your brand on an
            operator-proven bulk haulage platform. You own the client
            relationship and implementation revenue; we provide the product.
          </p>
          <Button variant="outline" size="lg" className="mt-8">
            Learn about partnerships
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 hero-gradient text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            See your operation on HaulageOps.
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            20 minutes, on your workflows — dispatch, delegation, client view,
            invoice. No obligation.
          </p>
          <Button
            size="lg"
            className="mt-10 bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold text-base px-8 py-6 h-auto"
          >
            Book a 20-minute demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Admin / Dispatch", href: "#platform" },
      { label: "Subcontractor Portal", href: "#subcontractor-portal" },
      { label: "Client Portal", href: "#client-portal" },
      { label: "Driver App", href: "#" },
      { label: "Reporting", href: "#" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Bulk haulage", href: "#industries" },
      { label: "Earthworks", href: "#industries" },
      { label: "Quarries and aggregates", href: "#industries" },
      { label: "Civil infrastructure", href: "#industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Pricing", href: "#pricing" },
      { label: "Compare", href: "#compare" },
      { label: "Partners", href: "#" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Security", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#080E1A] text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Truck className="h-6 w-6 text-[#E8652B]" />
              <span className="text-lg font-bold">HaulageOps</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              The TMS for bulk haulage operators who run subcontractors and
              demanding clients.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold text-white/80 mb-4">
                {group.title}
              </p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white/70 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            {new Date().getFullYear()} HaulageOps. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Built in Australia for bulk haulage operators.
          </p>
        </div>
      </div>
    </footer>
  );
}

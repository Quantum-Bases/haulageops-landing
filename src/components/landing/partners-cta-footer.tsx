"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck } from "lucide-react";

export function PartnersTeaser() {
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
    <section className="py-20 sm:py-28 bg-[#FAEDE7] border-t border-[#E8D5C4] text-[#202020]">
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-5xl mx-auto"
        >
          <div
            className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full mb-4 border"
            style={{ background: "#FFFFFF", borderColor: "#E8D5C4" }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#D86D3C" }}
            />
            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#D86D3C" }}
            >
              NO OBLIGATION
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#202020]">
            See your operation on HaulageOps.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#5C5047] leading-relaxed max-w-2xl mx-auto">
            20 minutes on your workflows — dispatch, delegation, client view,
            invoice.
          </p>
          <div className="mt-8 flex flex-col items-center">
            <a
              href="https://calendly.com/admin-haulageops/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#D86D3C] hover:bg-[#A8552E] text-white font-semibold text-base px-8 py-6 h-auto shadow-sm rounded-xl"
              >
                Book a 20-minute demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <p className="mt-6 text-xs text-[#8A7060]">
              The TMS for bulk haulage operators who run subcontractors and demanding clients.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Admin / Dispatch", href: "/platform/dispatch-management" },
      { label: "Subcontractor Portal", href: "/platform/subcontractor-portal" },
      { label: "Client Portal", href: "/platform" },
      { label: "Driver App", href: "/platform/driver-app" },
      { label: "Reporting", href: "/platform" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Bulk haulage", href: "/industries/bulk-haulage" },
      { label: "Earthworks", href: "/industries/earthworks" },
      { label: "Quarries and aggregates", href: "/industries/quarries-aggregates" },
      { label: "Civil infrastructure", href: "/industries/civil-infrastructure" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Compare", href: "/compare" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Security", href: "/security" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#F7F2EE] text-[#202020] border-t border-[#E6DED8] py-16">
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <img
                src="/HaulageOps_Icon_Black.png"
                alt="HaulageOps Icon"
                className="h-6 w-auto object-contain"
              />
              <span className="font-bold text-lg tracking-tight text-[#202020] group-hover:text-[#D86D3C] transition-colors">
                HaulageOps
              </span>
            </a>
            <p className="text-sm text-[#6B6560] leading-relaxed">
              The TMS for bulk haulage operators who run subcontractors and
              demanding clients.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-bold uppercase tracking-wider text-[#202020] mb-4">
                {group.title}
              </p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#6B6560] hover:text-[#D86D3C] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#E6DED8] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#6B6560]">
          <p>
            © {new Date().getFullYear()} HaulageOps. All rights reserved.
          </p>
          <p>
            Built in Australia for bulk haulage operators.
          </p>
        </div>
      </div>
    </footer>
  );
}


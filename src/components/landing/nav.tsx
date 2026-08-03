"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Subcontractor Portal", href: "#subcontractor-portal" },
  { label: "Client Portal", href: "#client-portal" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "Compare", href: "#compare" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Truck
              className="h-7 w-7 text-[#0F172A]"
              strokeWidth={2}
            />
            <span className="text-lg font-bold tracking-tight text-[#0F172A]">
              HaulageOps
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#6B7280] rounded-md transition-colors hover:text-[#0F172A] hover:bg-[#F9FAFB]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-[#E5E7EB] text-[#374151] hover:bg-[#F9FAFB] hover:text-[#111827]"
            >
              Log in
            </Button>
            <Button
              size="sm"
              className="bg-[#E8652B] hover:bg-[#D05520] text-white font-medium"
            >
              Book a demo
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-[#0F172A]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-[#E5E7EB] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-[#374151] rounded-md hover:bg-[#F9FAFB] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#E5E7EB] flex flex-col gap-2">
                <Button variant="outline" size="sm" className="w-full">
                  Log in
                </Button>
                <Button
                  size="sm"
                  className="w-full bg-[#E8652B] hover:bg-[#D05520] text-white font-medium"
                >
                  Book a demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

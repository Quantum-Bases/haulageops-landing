"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { megaMenuData, brandInfo, MegaMenuConfig } from "@/data/navigationData";

interface HeaderProps {
  onDemoClick?: () => void;
  onLoginClick?: () => void;
}

export function Header({ onDemoClick, onLoginClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (key: string) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(key);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const toggleMobileCategory = (key: string) => {
    setExpandedMobile((prev) => (prev === key ? null : key));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm"
          : "bg-white/90 backdrop-blur-md border-b border-[#F1F5F9]"
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <nav className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src={brandInfo.logoUrl}
              alt={`${brandInfo.name} Logo`}
              style={{ width: "130px" }}
              className="h-auto object-contain"
            />
          </Link>

          {/* Desktop Mega Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 h-full">
            {megaMenuData.map((item) => {
              const hasCategories = item.categories && item.categories.length > 0;
              const isActive = activeMenu === item.key;

              if (!hasCategories) {
                return (
                  <Link
                    key={item.key}
                    href={item.href || "#"}
                    className="px-3.5 py-2 text-sm font-medium text-[#374151] rounded-md transition-colors hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.key}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => handleMouseEnter(item.key)}
                >
                  <button
                    className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? "text-[#0F172A] bg-[#F1F5F9] border border-[#CBD5E1]"
                        : "text-[#374151] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 text-[#64748B] transition-transform duration-200 ${
                        isActive ? "rotate-180 text-[#0F172A]" : ""
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Header Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://calendly.com/admin-haulageops/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="border-[#E5E7EB] text-[#1E293B] hover:bg-[#F8FAFC] font-medium"
              >
                See how it works
              </Button>
            </a>
            <a
              href="https://calendly.com/admin-haulageops/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="bg-[#E8652B] hover:bg-[#D05520] text-white font-medium shadow-xs"
              >
                Book a Demo
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 text-[#0F172A]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* MegaMenu Overlay Panel (Desktop) */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-[#E2E8F0] shadow-xl z-50 overflow-hidden"
            onMouseEnter={() => {
              if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8 py-8">
              {megaMenuData
                .filter((m) => m.key === activeMenu && m.categories)
                .map((item) => (
                  <div key={item.key} className="grid grid-cols-12 gap-8 items-start">
                    {/* Columns grid */}
                    <div className="col-span-8 md:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-6">
                      {item.categories?.map((cat) => (
                        <div key={cat.title} className="flex flex-col gap-3">
                          <h4 className="text-[11px] font-bold tracking-wider text-[#64748B] uppercase">
                            {cat.title}
                          </h4>
                          <ul className="flex flex-col gap-2.5">
                            {cat.links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  onClick={() => setActiveMenu(null)}
                                  className="text-sm font-medium text-[#334155] hover:text-[#E8652B] transition-colors block"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Dark Featured Card (Right Column) */}
                    {item.featured && (
                      <div className="col-span-4 md:col-span-3">
                        <div className="bg-[#0B1528] rounded-xl p-6 text-white flex flex-col gap-4 shadow-lg border border-[#1E293B]">
                          <span className="text-[10px] font-bold tracking-widest text-[#E8652B] uppercase">
                            {item.featured.tag || "FEATURED"}
                          </span>
                          <div className="flex flex-col gap-2">
                            <Link
                              href={item.featured.href1}
                              onClick={() => setActiveMenu(null)}
                              className="text-lg font-bold hover:text-[#E8652B] transition-colors leading-snug"
                            >
                              {item.featured.title1}
                            </Link>
                            <Link
                              href={item.featured.href2}
                              onClick={() => setActiveMenu(null)}
                              className="text-lg font-bold hover:text-[#E8652B] transition-colors leading-snug"
                            >
                              {item.featured.title2}
                            </Link>
                          </div>
                          <p className="text-xs text-[#94A3B8] leading-relaxed">
                            {item.featured.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-[#E5E7EB] overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-2">
              {megaMenuData.map((item) => {
                const hasCategories = item.categories && item.categories.length > 0;
                const isExpanded = expandedMobile === item.key;

                if (!hasCategories) {
                  return (
                    <Link
                      key={item.key}
                      href={item.href || "#"}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 text-base font-semibold text-[#1E293B] rounded-md hover:bg-[#F8FAFC]"
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.key} className="border-b border-[#F1F5F9] pb-2">
                    <button
                      onClick={() => toggleMobileCategory(item.key)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-base font-semibold text-[#1E293B] rounded-md hover:bg-[#F8FAFC]"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-5 w-5 text-[#64748B] transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="pl-4 pr-2 py-2 space-y-4 bg-[#F8FAFC] rounded-lg mt-1">
                        {item.categories?.map((cat) => (
                          <div key={cat.title} className="space-y-1.5">
                            <h5 className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">
                              {cat.title}
                            </h5>
                            <div className="space-y-1">
                              {cat.links.map((link) => (
                                <Link
                                  key={link.label}
                                  href={link.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-1 text-sm font-medium text-[#334155] hover:text-[#E8652B]"
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-4 border-t border-[#E5E7EB] flex flex-col gap-2.5">
                <a
                  href="https://calendly.com/admin-haulageops/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                >
                  <Button variant="outline" size="sm" className="w-full">
                    See how it works
                  </Button>
                </a>
                <a
                  href="https://calendly.com/admin-haulageops/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                >
                  <Button
                    size="sm"
                    className="w-full bg-[#E8652B] hover:bg-[#D05520] text-white font-medium"
                  >
                    Book a Demo
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

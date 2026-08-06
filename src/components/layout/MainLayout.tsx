"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaSection } from "@/components/shared/CtaSection";

interface MainLayoutProps {
  children: React.ReactNode;
  showCta?: boolean;
}

export function MainLayout({ children, showCta = true }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A]">
      <Header />
      <main className="flex-1">{children}</main>
      {showCta && <CtaSection variant="main" />}
      <Footer />
    </div>
  );
}

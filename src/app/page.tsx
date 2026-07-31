import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { PainSection } from "@/components/landing/pain-section";
import { ValuePillars } from "@/components/landing/value-pillars";
import { PlatformArchitecture } from "@/components/landing/platform-architecture";
import { SubcontractorPortal } from "@/components/landing/subcontractor-portal";
import { ClientPortal } from "@/components/landing/client-portal";
import { DriverApp } from "@/components/landing/driver-app";
import { BillingCompliance } from "@/components/landing/billing-compliance";
import { IndustrySection } from "@/components/landing/industry-section";
import { CaseStudy } from "@/components/landing/case-study";
import { CompetitiveComparison } from "@/components/landing/competitive-comparison";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import {
  PartnersTeaser,
  FinalCTA,
  Footer,
} from "@/components/landing/partners-cta-footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <PainSection />
        <ValuePillars />
        <PlatformArchitecture />
        <SubcontractorPortal />
        <ClientPortal />
        <DriverApp />
        <BillingCompliance />
        <IndustrySection />
        <CaseStudy />
        <CompetitiveComparison />
        <Pricing />
        <FAQ />
        <PartnersTeaser />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

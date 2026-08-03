import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { PainSection } from "@/components/landing/pain-section";
import { ValuePillars } from "@/components/landing/value-pillars";
import { PlatformArchitecture } from "@/components/landing/platform-architecture";
// import { SubcontractorPortal } from "@/components/landing/subcontractor-portal";
// import { ClientPortal } from "@/components/landing/client-portal";
// import { DriverApp } from "@/components/landing/driver-app";
// import { BillingCompliance } from "@/components/landing/billing-compliance";
import { IndustrySection } from "@/components/landing/industry-section";
import { CaseStudy } from "@/components/landing/case-study";
import { CompetitiveComparison } from "@/components/landing/competitive-comparison";
// import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import {
  // PartnersTeaser,
  FinalCTA,
  Footer,
} from "@/components/landing/partners-cta-footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        {/* 1. Hero — headline, subheadline, CTA, proof strip */}
        <Hero />

        {/* 2. Problem section — "The old way" pain cards */}
        <PainSection />

        {/* 3. Solution section — 3 value pillars with wedge lines */}
        <ValuePillars />

        {/* 4. Feature/value band — one graphic: five portals, corrected architecture */}
        <PlatformArchitecture />

        {/* ——— Commented out: dedicated deep-dive sections ——— */}
        {/* 5a. Subcontractor Portal — dedicated wedge section */}
        {/* <SubcontractorPortal /> */}
        {/* 5b. Client Portal — dedicated feature section */}
        {/* <ClientPortal /> */}
        {/* 5c. Driver App — dedicated feature section */}
        {/* <DriverApp /> */}
        {/* 5d. Billing, Rates & Compliance — dedicated section */}
        {/* <BillingCompliance /> */}

        {/* 5. Proof section — anonymised operator strip + proof points */}
        <CaseStudy />

        {/* 6. Industry band — segment chips + exclusion statement */}
        <IndustrySection />

        {/* 7. Comparison teaser — links out to /compare */}
        <CompetitiveComparison />

        {/* ——— Commented out: pricing ——— */}
        {/* <Pricing /> */}

        {/* 8. FAQ — 6 objection-handling questions */}
        <FAQ />

        {/* ——— Commented out: partners teaser ——— */}
        {/* <PartnersTeaser /> */}

        {/* 9. Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

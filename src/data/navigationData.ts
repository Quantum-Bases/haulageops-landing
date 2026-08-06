export interface NavLink {
  label: string;
  href: string;
}

export interface MegaCategory {
  title: string;
  links: NavLink[];
}

export interface FeaturedCard {
  tag?: string;
  title1: string;
  href1: string;
  title2: string;
  href2: string;
  description: string;
}

export interface MegaMenuConfig {
  key: string;
  label: string;
  href?: string;
  categories?: MegaCategory[];
  featured?: FeaturedCard;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export const megaMenuData: MegaMenuConfig[] = [
  {
    key: "platform",
    label: "Platform",
    href: "/platform",
    categories: [
      {
        title: "CORE OPERATIONS",
        links: [
          { label: "Job Management", href: "/platform/job-management" },
          { label: "Dispatch Management", href: "/platform/dispatch-management" },
          { label: "Live Job Tracking", href: "/platform/live-job-tracking" },
          { label: "Job Scheduling", href: "/platform/job-scheduling" },
        ],
      },
      {
        title: "MOBILE & FLEET",
        links: [
          { label: "Driver App", href: "/platform/driver-app" },
          { label: "Fleet Management", href: "/platform/fleet-management" },
          { label: "Driver Management", href: "/platform/driver-management" },
          { label: "Break & Rest Management", href: "/platform/break-and-rest-management" },
        ],
      },
      {
        title: "EXTERNAL PARTNERS",
        links: [
          { label: "Subcontractor Portal", href: "/platform/subcontractor-portal" },
          { label: "Subcontractor Management", href: "/platform/subcontractor-management" },
          { label: "Supplier Management", href: "/platform/supplier-management" },
        ],
      },
      {
        title: "COMMERCIAL",
        links: [
          { label: "Rate Management", href: "/platform/rate-management" },
          { label: "Billing & Invoicing", href: "/platform/billing-and-invoicing" },
          { label: "Xero Integration", href: "/platform/integrations/xero" },
          { label: "Contract Management", href: "/platform/contract-management" },
        ],
      },
    ],
    featured: {
      tag: "FEATURED",
      title1: "Platform Overview",
      href1: "/platform",
      title2: "Subcontractor Portal",
      href2: "/platform/subcontractor-portal",
      description: "Explore the complete HaulageOps operating model.",
    },
  },
  {
    key: "solutions",
    label: "Solutions",
    href: "/solutions",
    categories: [
      {
        title: "COORDINATE OPERATIONS",
        links: [
          { label: "Haulage Dispatch", href: "/solutions/haulage-dispatch" },
          { label: "Owned & Subcontracted Fleets", href: "/solutions/owned-and-subcontracted-fleets" },
          { label: "Subcontractor Coordination", href: "/solutions/subcontractor-coordination" },
          { label: "Supplier Coordination", href: "/solutions/supplier-coordination" },
        ],
      },
      {
        title: "DELIVERY EVIDENCE",
        links: [
          { label: "Digital Dockets", href: "/solutions/digital-dockets" },
          { label: "Proof of Delivery", href: "/solutions/proof-of-delivery" },
        ],
      },
      {
        title: "COMMERCIAL",
        links: [
          { label: "Job to Invoice", href: "/solutions/job-to-invoice" },
          { label: "Rate & Contract Management", href: "/solutions/rate-and-contract-management" },
          { label: "Reduce Invoice Delays", href: "/solutions/reducing-invoice-delays" },
        ],
      },
      {
        title: "COMPLIANCE",
        links: [
          { label: "Audit-Ready Operations", href: "/solutions/audit-ready-operations" },
          { label: "Chain of Responsibility", href: "/au/chain-of-responsibility" },
        ],
      },
    ],
    featured: {
      tag: "FEATURED",
      title1: "Replace Spreadsheets",
      href1: "/solutions/replacing-spreadsheets",
      title2: "Job to Invoice",
      href2: "/solutions/job-to-invoice",
      description: "Explore the complete HaulageOps operating model.",
    },
  },
  {
    key: "industries",
    label: "Industries",
    href: "/industries",
    categories: [
      {
        title: "PRIORITY INDUSTRIES",
        links: [
          { label: "Bulk Haulage", href: "/industries/bulk-haulage" },
          { label: "Earthworks", href: "/industries/earthworks" },
          { label: "Quarries & Aggregates", href: "/industries/quarries-and-aggregates" },
          { label: "Civil Construction", href: "/industries/civil-construction" },
          { label: "Construction Logistics", href: "/industries/construction-logistics" },
          { label: "Tipper Fleets", href: "/industries/tipper-fleets" },
        ],
      },
      {
        title: "ADDITIONAL INDUSTRIES",
        links: [
          { label: "Material Transport", href: "/industries/material-transport" },
          { label: "Muckaway & Spoil", href: "/industries/muckaway-and-spoil" },
          { label: "Waste & Recycling", href: "/industries/waste-and-recycling" },
          { label: "Heavy Materials", href: "/industries/heavy-materials" },
          { label: "Regional Haulage", href: "/industries/regional-haulage" },
        ],
      },
    ],
    featured: {
      tag: "FEATURED",
      title1: "Bulk Haulage",
      href1: "/industries/bulk-haulage",
      title2: "Construction Logistics",
      href2: "/industries/construction-logistics",
      description: "Explore the complete HaulageOps operating model.",
    },
  },
  {
    key: "resources",
    label: "Resources",
    href: "/resources",
    categories: [
      {
        title: "GUIDES",
        links: [
          { label: "Bulk Haulage Operations Guide", href: "/resources/guides/bulk-haulage-operations" },
          { label: "Subcontractor Management Guide", href: "/resources/guides/subcontractor-management" },
          { label: "Digital Dockets Guide", href: "/resources/guides/digital-dockets" },
          { label: "Haulage Compliance Guide", href: "/resources/guides/haulage-compliance" },
        ],
      },
      {
        title: "PLAN",
        links: [
          { label: "Software Requirements Checklist", href: "/resources/checklists/haulage-software-requirements" },
          { label: "Implementation Checklist", href: "/resources/checklists/implementation" },
          { label: "Subcontractor Onboarding", href: "/resources/checklists/subcontractor-onboarding" },
        ],
      },
      {
        title: "TOOLS",
        links: [
          { label: "ROI Calculator", href: "/resources/tools/haulage-software-roi-calculator" },
          { label: "Admin Cost Calculator", href: "/resources/tools/admin-cost-calculator" },
          { label: "Rate Card Template", href: "/resources/tools/rate-card-template" },
        ],
      },
      {
        title: "EVALUATE",
        links: [
          { label: "Compare Hub", href: "/compare" },
          { label: "HaulageOps vs Spreadsheets", href: "/compare/haulageops-vs-spreadsheets" },
          { label: "Customer Story", href: "/customers/bulk-haulage-operator" },
        ],
      },
    ],
    featured: {
      tag: "FEATURED",
      title1: "Haulage Software Buyer's Guide",
      href1: "/resources/guides/haulage-software-buyers-guide",
      title2: "Compare Platforms",
      href2: "/compare",
      description: "Explore the complete HaulageOps operating model.",
    },
  },
  {
    key: "pricing",
    label: "Pricing",
    href: "/pricing",
  },
  {
    key: "company",
    label: "Company",
    href: "/about",
  },
];

export const mainNavLinks: NavLink[] = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/about" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Platform",
    links: [
      { label: "Admin / Dispatch", href: "/platform/dispatch-management" },
      { label: "Subcontractor Portal", href: "/platform/subcontractor-portal" },
      { label: "Client Portal", href: "/platform/client-portal" },
      { label: "Driver App", href: "/platform/driver-app" },
      { label: "Reporting & Analytics", href: "/platform/reporting-and-analytics" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Bulk haulage", href: "/industries/bulk-haulage" },
      { label: "Earthworks", href: "/industries/earthworks" },
      { label: "Quarries & aggregates", href: "/industries/quarries-and-aggregates" },
      { label: "Civil infrastructure", href: "/industries/civil-construction" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Compare", href: "/compare" },
      { label: "Partners", href: "/partners" },
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

export const brandInfo = {
  name: "HaulageOps",
  logoUrl: "/HaulageOps Logo-3.png",
  description: "The TMS for bulk haulage operators who run subcontractors and demanding clients.",
  regionNotice: "Built in Australia for bulk haulage operators.",
};

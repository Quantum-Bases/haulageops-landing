# HaulageOps Website Migration Task List

> **Approach for each page (UPDATED — simpler single-file pattern):**
> 1. Read source HTML from `/Users/usamaashraf/Downloads/WEbsite redesign /<path>/index.html`
> 2. Convert HTML → TSX (preserve all copy, headings, lists, feature sections, CTAs)
> 3. Apply design system: Tailwind, brand colours (`#E8652B`/`#0F172A`/`#F8FAFC`), `MainLayout`, `Button`
> 4. **Put the full page component directly in `src/app/<route>/page.tsx`** — no separate `src/pages/` file
> 5. Add `export const metadata = { title, description }` in the same `page.tsx` file for SEO
> 6. Remove old `[slug]` catch-all stub if it exists for that route

> **Why the change:** The old two-file split (`src/pages/` + `src/app/` stub) created unnecessary files and folders. Putting everything in one `src/app/[route]/page.tsx` is simpler, faster, and equally correct for Next.js App Router.

> **Note on already-completed pages (1–10):** These used the old two-file pattern. No need to refactor them — they work fine. Going forward, use the single-file approach.

---

## Legend
- `[ ]` — Not started
- `[/]` — In progress
- `[x]` — Done

---

## PLATFORM — Core Operations (Nav Dropdown Column 1)

| # | Page Title | Old Source | Next.js Route | Status |
|---|-----------|-----------|--------------|--------|
| 1 | Platform Overview | `platform/index.html` | `/platform` | `[x]` |
| 2 | Job Management | `platform/job-management/index.html` | `/platform/job-management` | `[x]` |
| 3 | Dispatch Management | `platform/dispatch-management/index.html` | `/platform/dispatch-management` | `[x]` |
| 4 | Live Job Tracking | `platform/live-job-tracking/index.html` | `/platform/live-job-tracking` | `[x]` |
| 5 | Job Scheduling | `platform/job-scheduling/index.html` | `/platform/job-scheduling` | `[x]` |

## PLATFORM — Mobile & Fleet (Nav Dropdown Column 2)

| # | Page Title | Old Source | Next.js Route | Status |
|---|-----------|-----------|--------------|--------|
| 6 | Driver App | `platform/driver-app/index.html` | `/platform/driver-app` | `[x]` |
| 7 | Fleet Management | `platform/fleet-management/index.html` | `/platform/fleet-management` | `[x]` |
| 8 | Driver Management | `platform/driver-management/index.html` | `/platform/driver-management` | `[x]` |
| 9 | Break & Rest Management | `platform/break-and-rest-management/index.html` | `/platform/break-and-rest-management` | `[x]` |

## PLATFORM — External Partners (Nav Dropdown Column 3)

| # | Page Title | Old Source | Next.js Route | Status |
|---|-----------|-----------|--------------|--------|
| 10 | Subcontractor Portal | `platform/subcontractor-portal/index.html` | `/platform/subcontractor-portal` | `[x]` |
| 11 | Subcontractor Management | `platform/subcontractor-management/index.html` | `/platform/subcontractor-management` | `[ ]` |
| 12 | Supplier Management | `platform/supplier-management/index.html` | `/platform/supplier-management` | `[ ]` |

## PLATFORM — Commercial (Nav Dropdown Column 4)

| # | Page Title | Old Source | Next.js Route | Status |
|---|-----------|-----------|--------------|--------|
| 13 | Rate Management | `platform/rate-management/index.html` | `/platform/rate-management` | `[ ]` |
| 14 | Billing & Invoicing | `platform/billing-and-invoicing/index.html` | `/platform/billing-and-invoicing` | `[ ]` |
| 15 | Xero Integration | `platform/integrations/xero/index.html` | `/platform/integrations/xero` | `[ ]` |
| 16 | Contract Management | `platform/contract-management/index.html` | `/platform/contract-management` | `[ ]` |

## PLATFORM — Additional Pages

| # | Page Title | Old Source | Next.js Route | Status |
|---|-----------|-----------|--------------|--------|
| 17 | Compliance & Audit | `platform/compliance/index.html` | `/platform/compliance` | `[ ]` |
| 18 | Audit Trail | `platform/audit-trail/index.html` | `/platform/audit-trail` | `[ ]` |
| 19 | Document Management | `platform/document-management/index.html` | `/platform/document-management` | `[ ]` |
| 20 | Reporting & Analytics | `platform/reporting-and-analytics/index.html` | `/platform/reporting-and-analytics` | `[ ]` |
| 21 | Client Portal | `platform/client-portal/index.html` | `/platform/client-portal` | `[ ]` |
| 22 | Integrations | `platform/integrations/index.html` | `/platform/integrations` | `[ ]` |
| 23 | Add-ons | `platform/add-ons/index.html` | `/platform/add-ons` | `[ ]` |

---

## SOLUTIONS — Coordinate Operations (Nav Dropdown Column 1)

| # | Page Title | Old Source | Next.js Route | Status |
|---|-----------|-----------|--------------|--------|
| 24 | Solutions Overview | `solutions/index.html` | `/solutions` | `[x]` |
| 25 | Haulage Dispatch | `solutions/haulage-dispatch/index.html` | `/solutions/haulage-dispatch` | `[ ]` |
| 26 | Owned & Subcontracted Fleets | `solutions/owned-and-subcontracted-fleets/index.html` | `/solutions/owned-and-subcontracted-fleets` | `[ ]` |
| 27 | Subcontractor Coordination | `solutions/subcontractor-coordination/index.html` | `/solutions/subcontractor-coordination` | `[ ]` |
| 28 | Supplier Coordination | `solutions/supplier-coordination/index.html` | `/solutions/supplier-coordination` | `[ ]` |

## SOLUTIONS — Delivery Evidence (Nav Dropdown Column 2)

| # | Page Title | Old Source | Next.js Route | Status |
|---|-----------|-----------|--------------|--------|
| 29 | Digital Dockets | `solutions/digital-dockets/index.html` | `/solutions/digital-dockets` | `[ ]` |
| 30 | Proof of Delivery | `solutions/proof-of-delivery/index.html` | `/solutions/proof-of-delivery` | `[ ]` |

## SOLUTIONS — Commercial (Nav Dropdown Column 3)

| # | Page Title | Old Source | Next.js Route | Status |
|---|-----------|-----------|--------------|--------|
| 31 | Job to Invoice | `solutions/job-to-invoice/index.html` | `/solutions/job-to-invoice` | `[ ]` |
| 32 | Rate & Contract Management | `solutions/rate-and-contract-management/index.html` | `/solutions/rate-and-contract-management` | `[ ]` |
| 33 | Reduce Invoice Delays | `solutions/reducing-invoice-delays/index.html` | `/solutions/reducing-invoice-delays` | `[ ]` |

## SOLUTIONS — Compliance (Nav Dropdown Column 4)

| # | Page Title | Old Source | Next.js Route | Status |
|---|-----------|-----------|--------------|--------|
| 34 | Audit-Ready Operations | `solutions/audit-ready-operations/index.html` | `/solutions/audit-ready-operations` | `[ ]` |
| 35 | Chain of Responsibility | `au/chain-of-responsibility/index.html` | `/au/chain-of-responsibility` | `[ ]` |

## SOLUTIONS — Additional Pages

| # | Page Title | Old Source | Next.js Route | Status |
|---|-----------|-----------|--------------|--------|
| 36 | Replace Spreadsheets | `solutions/replacing-spreadsheets/index.html` | `/solutions/replacing-spreadsheets` | `[ ]` |
| 37 | Replace WhatsApp Dispatch | `solutions/replacing-whatsapp-dispatch/index.html` | `/solutions/replacing-whatsapp-dispatch` | `[ ]` |
| 38 | Scale Without More Admin | `solutions/scaling-without-more-admin/index.html` | `/solutions/scaling-without-more-admin` | `[ ]` |
| 39 | Client Visibility | `solutions/client-visibility/index.html` | `/solutions/client-visibility` | `[ ]` |

---

## INDUSTRIES — Priority Industries (Nav Dropdown Column 1)

| # | Page Title | Old Source | Next.js Route | Status |
|---|-----------|-----------|--------------|--------|
| 40 | Industries Overview | `industries/index.html` | `/industries` | `[x]` |
| 41 | Bulk Haulage | `industries/bulk-haulage/index.html` | `/industries/bulk-haulage` | `[ ]` |
| 42 | Earthworks | `industries/earthworks/index.html` | `/industries/earthworks` | `[ ]` |
| 43 | Quarries & Aggregates | `industries/quarries-and-aggregates/index.html` | `/industries/quarries-and-aggregates` | `[ ]` |
| 44 | Civil Construction | `industries/civil-construction/index.html` | `/industries/civil-construction` | `[ ]` |
| 45 | Construction Logistics | `industries/construction-logistics/index.html` | `/industries/construction-logistics` | `[ ]` |
| 46 | Tipper Fleets | `industries/tipper-fleets/index.html` | `/industries/tipper-fleets` | `[ ]` |

## INDUSTRIES — Additional Industries (Nav Dropdown Column 2)

| # | Page Title | Old Source | Next.js Route | Status |
|---|-----------|-----------|--------------|--------|
| 47 | Material Transport | `industries/material-transport/index.html` | `/industries/material-transport` | `[ ]` |
| 48 | Muckaway & Spoil | `industries/muckaway-and-spoil/index.html` | `/industries/muckaway-and-spoil` | `[ ]` |
| 49 | Waste & Recycling | `industries/waste-and-recycling/index.html` | `/industries/waste-and-recycling` | `[ ]` |
| 50 | Heavy Materials | `industries/heavy-materials/index.html` | `/industries/heavy-materials` | `[ ]` |
| 51 | Regional Haulage | `industries/regional-haulage/index.html` | `/industries/regional-haulage` | `[ ]` |

---

## RESOURCES (Nav Dropdown)

| # | Page Title | Old Source | Next.js Route | Status |
|---|-----------|-----------|--------------|--------|
| 52 | Resources Overview | `resources/index.html` | `/resources` | `[x]` |
| 53 | Bulk Haulage Operations Guide | `resources/guides/bulk-haulage-operations/index.html` | `/resources/guides/bulk-haulage-operations` | `[ ]` |
| 54 | Subcontractor Management Guide | `resources/guides/subcontractor-management/index.html` | `/resources/guides/subcontractor-management` | `[ ]` |
| 55 | Digital Dockets Guide | `resources/guides/digital-dockets/index.html` | `/resources/guides/digital-dockets` | `[ ]` |
| 56 | Haulage Compliance Guide | `resources/guides/haulage-compliance/index.html` | `/resources/guides/haulage-compliance` | `[ ]` |
| 57 | Haulage Software Buyer's Guide | `resources/guides/haulage-software-buyers-guide/index.html` | `/resources/guides/haulage-software-buyers-guide` | `[ ]` |
| 58 | Software Requirements Checklist | `resources/checklists/haulage-software-requirements/index.html` | `/resources/checklists/haulage-software-requirements` | `[ ]` |
| 59 | Implementation Checklist | `resources/checklists/implementation/index.html` | `/resources/checklists/implementation` | `[ ]` |
| 60 | Subcontractor Onboarding Checklist | `resources/checklists/subcontractor-onboarding/index.html` | `/resources/checklists/subcontractor-onboarding` | `[ ]` |
| 61 | ROI Calculator | `resources/tools/haulage-software-roi-calculator/index.html` | `/resources/tools/haulage-software-roi-calculator` | `[ ]` |
| 62 | Admin Cost Calculator | `resources/tools/admin-cost-calculator/index.html` | `/resources/tools/admin-cost-calculator` | `[ ]` |
| 63 | Rate Card Template | `resources/tools/rate-card-template/index.html` | `/resources/tools/rate-card-template` | `[ ]` |

---

## COMPANY / TOP-LEVEL PAGES

| # | Page Title | Old Source | Next.js Route | Status |
|---|-----------|-----------|--------------|--------|
| 64 | Home | `index.html` | `/` | `[x]` |
| 65 | Pricing | `pricing/index.html` | `/pricing` | `[x]` |
| 66 | Compare | `compare/index.html` | `/compare` | `[x]` |
| 67 | Book a Demo | `demo/index.html` | `/demo` | `[x]` |
| 68 | About | `about/index.html` | `/about` | `[x]` |
| 69 | Implementation | `implementation/index.html` | `/implementation` | `[x]` |
| 70 | Partners | `partners/index.html` | `/partners` | `[x]` |
| 71 | Security | `security/index.html` | `/security` | `[x]` |
| 72 | Contact | `contact/index.html` | `/contact` | `[x]` |
| 73 | Customer Story | `customers/bulk-haulage-operator/index.html` | `/customers/bulk-haulage-operator` | `[x]` |
| 74 | Support | `support/index.html` | `/support` | `[x]` |

## COMPARE — SUB-PAGES

| # | Page Title | Old Source | Next.js Route | Status |
|---|-----------|-----------|--------------|--------|
| 74a | HaulageOps vs Spreadsheets | `compare/haulageops-vs-spreadsheets/index.html` | `/compare/haulageops-vs-spreadsheets` | `[x]` |
| 74b | HaulageOps vs Allotrac | `compare/haulageops-vs-allotrac/index.html` | `/compare/haulageops-vs-allotrac` | `[x]` |
| 74c | HaulageOps vs MyTrucking | `compare/haulageops-vs-mytrucking/index.html` | `/compare/haulageops-vs-mytrucking` | `[x]` |
| 74d | HaulageOps vs Mandata | `compare/haulageops-vs-mandata/index.html` | `/compare/haulageops-vs-mandata` | `[ ]` (no old source — folder is empty) |

---

## LEGAL PAGES

| # | Page Title | Old Source | Next.js Route | Status |
|---|-----------|-----------|--------------|--------|
| 75 | Privacy Policy | `privacy/index.html` | `/privacy` | `[ ]` |
| 76 | Terms of Service | `terms/index.html` | `/terms` | `[ ]` |
| 77 | Cookies | `cookies/index.html` | `/cookies` | `[ ]` |

---

## REGIONAL PAGES (AU / NZ / UK / CA / US)

| # | Page Title | Old Source | Next.js Route | Status |
|---|-----------|-----------|--------------|--------|
| 78 | Australia | `au/index.html` | `/au` | `[ ]` |
| 79 | Chain of Responsibility (AU) | `au/chain-of-responsibility/index.html` | `/au/chain-of-responsibility` | `[ ]` |
| 80 | New Zealand | `nz/index.html` | `/nz` | `[ ]` |
| 81 | United Kingdom | `uk/index.html` | `/uk` | `[ ]` |
| 82 | Canada | `ca/index.html` | `/ca` | `[ ]` |
| 83 | United States | `us/index.html` | `/us` | `[ ]` |

---

## Notes
- **Old source path**: `/Users/usamaashraf/Downloads/WEbsite redesign `  (note trailing space)
- **New project path**: `/Users/usamaashraf/Downloads/Projects/HaulageOps-Landing`
- **Design tokens**: Brand orange `#E8652B`, dark `#0F172A`, light bg `#F8FAFC`, accent badge bg `#FFF0E6`
- **Layout wrapper**: Always use `<MainLayout>` from `@/components/layout/MainLayout`
- **Single file**: Full component + `export const metadata` go in `src/app/<route>/page.tsx` — no `src/pages/` needed
- **No catch-all stubs**: Replace `[slug]` and `[...slug]` stub files with dedicated page files for each route
- **Pages 1–10**: Used old two-file pattern — leave as-is, no need to refactor
- **Pages 11+**: Use new single-file pattern

import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About HaulageOps — Built on Bulk Haulage Experience",
  description:
    "HaulageOps was built by people who understand what bulk haulage and construction logistics actually looks like from the inside. 40 years of operational experience in the platform.",
};

const proofItems = [
  { strong: "40 years", text: "Bulk haulage experience behind the platform" },
  { strong: "5 portals", text: "Purpose-built for one operator type" },
  { strong: "AU → Global", text: "Built for international markets" },
  { strong: "No VC bloat", text: "Feature decisions driven by operators" },
];

const builtForItems = [
  "Bulk haulage operators managing owned and subcontracted fleets",
  "15–80 vehicles with a mix of capacity types",
  "Earthworks, civil construction, quarry and aggregate operations",
  "Construction logistics with multiple active sites",
  "Tipper fleets running high-frequency, short-haul movements",
  "Operations where subcontractor coordination is a daily operational requirement",
];

const differenceCards = [
  {
    title: "Native subcontractor portal — no second licence required",
    p: "Some platforms require your subcontractors to have their own paid account before they can receive job assignments. In HaulageOps, the subcontractor portal is part of your subscription. Your subcontractors get a dedicated authenticated login, a job queue, Mapbox maps, and job history — at no cost to them and no per-seat charge to you.",
    linkHref: "/platform/subcontractor-portal",
    linkText: "Subcontractor Portal details",
  },
  {
    title: "Full client portal with rate cards and invoices",
    p: "The client portal gives each client live job status, access to their dockets and proof of delivery photographs, their invoice history, and their rate card. Clients see the rate structure you've agreed with them — not just a status tracker. This is what makes client self-service actually work instead of just reducing calls slightly.",
    linkHref: "/platform/client-portal",
    linkText: "Client Portal details",
  },
  {
    title: "Separate client charge and subcontractor pay rates",
    p: "Every job in HaulageOps holds two rate references: the rate you charge the client, and the rate you pay the subcontractor. They can differ by type (per-tonne client charge, per-load sub pay), by amount, and by effective date. This is standard in bulk haulage operations — not an add-on module or a workaround.",
    linkHref: "/platform/rate-management",
    linkText: "Rate Management details",
  },
  {
    title: "Offline-capable driver app",
    p: "The driver mobile app (iOS and Android) is built to work without connectivity. Status updates, POD capture, docket upload, signature collection — all function offline and synchronise when the device reconnects. This matters on construction sites, in quarries, and in rural haulage corridors where mobile coverage is unreliable.",
    linkHref: "/platform/driver-app",
    linkText: "Driver App details",
  },
];

const roadmapRows = [
  { feature: "Hardware telematics integration", status: "Roadmap — keep your GPS hardware, we're the operations layer above it" },
  { feature: "ELD / Electronic Work Diary", status: "Roadmap" },
  { feature: "OCR scale ticket capture", status: "Roadmap" },
  { feature: "Weighbridge integration", status: "Roadmap" },
  { feature: "MYOB integration", status: "Available subject to scope — contact us" },
  { feature: "Sage integration", status: "Roadmap" },
  { feature: "Xero integration", status: "Live — OAuth2, 6-hourly sync, payment webhooks" },
  { feature: "Subcontractor portal", status: "Live" },
  { feature: "Client portal", status: "Live" },
  { feature: "Driver mobile app (offline)", status: "Live — iOS and Android" },
];

const valueCards = [
  {
    title: "Operator-first product decisions",
    p: "Every feature decision starts with a specific operational problem — not a market adjacency or a feature-parity checklist against a competitor. We build what bulk haulage operators need, and say no to things that would bloat the platform for operators who don't need them.",
  },
  {
    title: "Specific over generic",
    p: "HaulageOps does not try to serve every type of trucking operation. We say clearly: this platform is for bulk haulage, earthworks, civil construction, quarries and tipper fleets managing 15–80 vehicles. Not for parcel, not for 3PL, not for general freight. Specificity is how we stay useful to the operators we serve.",
  },
  {
    title: "Honest about product limits",
    p: "We don't claim telematics integration we haven't built. We don't say \"AI-powered\" as a blanket platform description. We don't say \"compliance guaranteed.\" If something is on the roadmap, we say roadmap. If something requires custom scope, we say so upfront. This is what makes implementation predictable.",
  },
];

const faqs = [
  {
    q: "Who built HaulageOps?",
    a: "HaulageOps was built by a team with experience in both haulage operations and software development. The platform's foundation is 40 years of bulk haulage operational experience — not a market research exercise. The operational complexity of running a fleet with owned trucks and subcontractor networks, managing multiple client rate cards, coordinating POD, and running Xero-connected invoicing is built into the platform because the people who built it have lived it.",
  },
  {
    q: "Is HaulageOps an Australian company?",
    a: "HaulageOps is a global SaaS product with its primary team in Australia. The platform is designed for bulk haulage and construction logistics operators globally — the Australian market is live, and expansion to New Zealand, United Kingdom, Canada and the United States is planned. CoR-specific compliance features are documented on the Australian region pages; the core platform is designed to be market-agnostic.",
  },
  {
    q: "Is HaulageOps venture-backed or investor-driven?",
    a: "No. HaulageOps is not VC-backed. The product roadmap is driven by operator needs and real operational problems — not by a feature-count mandate or a push to expand into adjacent markets to justify a valuation. This means the platform stays focused on what it's built for rather than adding modules to serve markets it wasn't designed for.",
  },
  {
    q: "What markets does HaulageOps currently operate in?",
    a: "The platform is currently deployed and live in the Australian market. We are working with operators in New Zealand, United Kingdom, Canada and the United States on a case-by-case basis as part of planned expansion. If you're operating outside Australia, contact us to discuss your market and timeline.",
  },
  {
    q: "How do I contact the team?",
    a: "The fastest route for most enquiries is email — see the contact page for details. For a demo request, use the demo booking form — we confirm a time within one business day. For support queries if you're an existing customer, see the support page.",
  },
];

export default function AboutPage() {
  return (
    <MainLayout showCta={false}>
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#FFF9F5] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">About</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4">
            About HaulageOps
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1]">
            Built on 40 years of bulk haulage experience. Built for operators, not investors.
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-2xl leading-relaxed">
            HaulageOps reflects what bulk haulage and construction logistics operations actually look like from the inside — not how a horizontal software company imagines they might work.
          </p>
        </div>
      </section>

      <section className="bg-[#0D1525] py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofItems.map((item) => (
            <div key={item.strong} className="flex flex-col gap-1">
              <strong className="text-2xl text-[#E8652B]">{item.strong}</strong>
              <span className="text-sm text-[#CBD5E1]">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Our origin</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">The platform that a 40-year bulk haulage operator actually needed.</h2>
              <div className="mt-6 space-y-4 text-sm text-[#475569] leading-relaxed">
                <p>
                  HaulageOps was built from the ground up with a bulk haulage operator as the foundation — not as a case study or an advisory input, but as the operational reality that shaped every feature decision. That operator had been running bulk haulage and construction logistics for 40 years. The problems weren't hypothetical.
                </p>
                <p>
                  What did the operation actually look like? Jobs dispatched across a mix of owned trucks and subcontractor networks. Rate cards that varied by client, by material, by job type. Dockets captured on paper and chased manually for invoice runs. Subcontractors coordinated by phone and WhatsApp. Clients calling for status updates that the office couldn't answer without interrupting dispatch. Invoices delayed because dockets weren't matched and Xero data was entered by hand.
                </p>
                <p>
                  The platform reflects those specific operational problems. The five-portal architecture — Admin & Dispatch Panel, Driver Mobile App, Subcontractor Portal, Client Portal, Management Reporting — was not designed from a generic TMS template. It was designed around who actually needs access to which part of a live job record, and what they need to do with it.
                </p>
                <p>
                  That's why the <Link href="/platform/subcontractor-portal" className="text-[#E8652B] hover:underline font-medium">subcontractor portal</Link> gives external subs their own authenticated job queue without requiring them to be paying customers of anything. That's why the <Link href="/platform/client-portal" className="text-[#E8652B] hover:underline font-medium">client portal</Link> shows live job status, dockets, invoices and rate cards — so clients stop calling your office for information that's already in the system. That's why the <Link href="/platform/driver-app" className="text-[#E8652B] hover:underline font-medium">driver app</Link> works offline — because construction sites and quarry operations don't have reliable connectivity.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-2xl bg-[#F8FAFC] p-8 border border-[#E2E8F0]">
                <h3 className="text-base font-bold text-[#334155] mb-5">What HaulageOps is built for</h3>
                <ul className="space-y-3">
                  {builtForItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                      <Check className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-[#E2E8F0]">
                  <h3 className="text-base font-bold text-[#334155] mb-3">What HaulageOps is not for</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    Parcel delivery. 3PL warehousing. Freight forwarding. Long-haul general freight. Narrowing the target market is not a weakness — it's why the platform fits when it fits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What makes us different</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">Purpose-built for one operator type. Not adapted from something else.</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Most TMS platforms started in parcel delivery, freight forwarding, or general trucking, then added features to serve adjacent markets. HaulageOps started with bulk haulage and construction logistics — and has stayed there.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {differenceCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0] flex flex-col">
                <h3 className="text-lg font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed flex-1">{card.p}</p>
                <Link href={card.linkHref} className="mt-4 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-bold">
                  {card.linkText} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Honesty about roadmap</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">What's built. What isn't. What's next.</h2>
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                We'd rather be honest about what isn't built yet than claim capabilities that would require customisation to deliver. Here's the current state of the roadmap items we get asked about most:
              </p>
              <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E2E8F0]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                      <th className="text-left px-5 py-3 font-semibold text-[#0F172A]">Feature</th>
                      <th className="text-left px-5 py-3 font-semibold text-[#0F172A]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roadmapRows.map((row) => (
                      <tr key={row.feature} className="border-b border-[#F1F5F9] last:border-0">
                        <td className="px-5 py-3 text-[#334155] align-top">{row.feature}</td>
                        <td className="px-5 py-3 text-[#475569] align-top">{row.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Markets and vision</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">Built in Australia. Positioned for global operators.</h2>
              <div className="mt-4 space-y-4 text-sm text-[#475569] leading-relaxed">
                <p>
                  HaulageOps is live and deployed in the Australian market. The platform is built to serve bulk haulage and construction logistics operators globally — not because we've added languages and called it done, but because the operational problems are the same in New Zealand, the UK, and North America.
                </p>
                <p>
                  Compliance-specific features (Chain of Responsibility fatigue management records, CoR audit trail) are documented on the <Link href="/au" className="text-[#E8652B] hover:underline font-medium">Australian region pages</Link>. The core platform — five portals, Xero integration, rate management, subcontractor coordination, digital POD — is market-agnostic.
                </p>
                <p><strong className="text-[#0F172A]">Current market:</strong> Australia (live)</p>
                <p><strong className="text-[#0F172A]">Planned expansion:</strong> New Zealand, United Kingdom, Canada, United States</p>
              </div>
              <div className="mt-6 rounded-xl bg-[#FFF0E6] border border-[#FED7AA] p-5">
                <p className="font-bold text-[#92400E] mb-2">Operating in NZ, UK or North America?</p>
                <p className="text-sm text-[#78350F] leading-relaxed">
                  We work with operators outside Australia on a case-by-case basis during expansion. <Link href="/contact" className="font-semibold text-[#92400E] hover:underline">Contact us</Link> to discuss your market and timing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Our values</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">Operator-first. Specific over generic. Honest about limits.</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {valueCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="text-lg font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently asked questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">About HaulageOps as a company.</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-[#E2E8F0] bg-white rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-[#0F172A] text-sm list-none hover:bg-[#F8FAFC]">
                  {faq.q}
                  <ChevronRight className="h-4 w-4 text-[#94A3B8] shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9]">
                  <p className="pt-4">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See the platform that 40 years of bulk haulage experience built.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              A 20-minute demo shows you the full job workflow — dispatch, driver app, subcontractor portal, client portal, Xero invoice sync.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a 20-minute demo
              </Button>
            </Link>
            <Link href="/contact" className="text-white text-sm underline hover:text-[#E8652B]">
              Contact the team →
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

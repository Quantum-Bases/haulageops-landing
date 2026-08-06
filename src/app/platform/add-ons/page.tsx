import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, ArrowRight } from "lucide-react";

export const metadata = {
  title: "HaulageOps Add-ons and Integrations on Request | HaulageOps",
  description:
    "Some integrations are available on request where your specific provider and workflow requirements can be scoped. Find out what's standard and what's available by arrangement.",
};

const heroKickers = [
  "Xero — live standard integration",
  "MYOB — available subject to scope",
  "Roadmap items listed honestly",
  "No integration surprises at contract stage",
];

const proofStrip = [
  "Xero: OAuth2 + 6-hourly sync + webhooks",
  "Google Maps: address autocomplete & routing",
  "Mapbox: interactive maps (subcontractor portal)",
  "Firebase FCM: push notifications",
  "Microsoft Azure: document & POD storage",
  "MYOB: available subject to scope",
];

const liveIntegrations = [
  {
    name: "Xero",
    desc: "OAuth2 connection to your Xero account. Invoices created in HaulageOps sync to Xero on a 6-hourly cron schedule. Real-time payment webhooks flow back when Xero records a payment — updating invoice status in HaulageOps and the Client Portal without manual action.",
    href: "/platform/integrations/xero",
    linkLabel: "Full Xero integration detail",
  },
  {
    name: "Google Maps",
    desc: "Address autocomplete powered by the Google Maps API — used during job creation for pickup and delivery addresses, reducing entry errors and ensuring addresses are geocoded correctly. Distance calculation for rate and routing reference.",
  },
  {
    name: "Mapbox",
    desc: "Interactive mapping used in the Subcontractor Portal. Subcontractors view their assigned job locations on an interactive map — pickup point, delivery site, and current routing — without needing a separate navigation app to understand the assignment.",
  },
  {
    name: "Firebase FCM",
    desc: "Push notifications for the driver mobile app on iOS and Android, delivered via Firebase Cloud Messaging. Job assignments, status alerts, and dispatch notifications are pushed to the driver's device without requiring the app to be open. Notification delivery is not dependent on the driver checking the app.",
  },
  {
    name: "Microsoft Azure",
    desc: "All document and file storage in HaulageOps uses Microsoft Azure Blob Storage — POD photographs, customer signatures, delivery dockets, driver licences, vehicle registrations, insurance certificates, and contract documents. Files are stored in Azure regardless of where they were uploaded from (driver app, Admin Panel, or direct upload).",
  },
  {
    name: "Socket.io (real-time)",
    desc: "Live job tracking and real-time dispatch board updates use Socket.io. When a driver updates a job status or their GPS position changes, the dispatch board and the Client Portal reflect that update in real time — without requiring a manual refresh from the person watching the board.",
  },
];

const myobPoints = [
  "Which MYOB product and version you are running",
  "Whether your MYOB is cloud-hosted or on-premises",
  "What you need the connection to do — invoice sync, payment status, or both",
  "Your timeline and whether a phased approach is acceptable",
];

const roadmapIntegrations = [
  {
    name: "Hardware telematics APIs",
    desc: "Connection to hardware GPS and telematics devices (Teletrac Navman, Samsara, Lytx, and similar). HaulageOps currently uses phone-based GPS through the driver app. Hardware telematics integration is on the roadmap. Until then: keep your GPS hardware — HaulageOps is the operations layer above it, and the two can coexist without a live data connection.",
  },
  {
    name: "ELD / Electronic Work Diary",
    desc: "Electronic Work Diary integration for fatigue management compliance is on the roadmap. HaulageOps currently records break and rest periods through the driver app manually. A direct ELD connection — syncing work diary records automatically — is not live today. If this is a requirement, let us know your timeline.",
  },
  {
    name: "Sage accounting",
    desc: "Sage is not a current integration. If you use Sage and are evaluating HaulageOps, the Xero integration is the accounting connection that is live today. A Sage connection is on the roadmap but has no committed timeline. Tell us if Sage is your accounting system and we will be direct about what is realistic.",
  },
  {
    name: "OCR scale ticket capture",
    desc: "Automated extraction of tonnage and load data from scale tickets via optical character recognition. Not live today — scale ticket data is currently entered manually into the job record. OCR capture is on the roadmap to reduce that entry burden, particularly for high-volume quarry and earthworks operations.",
  },
  {
    name: "Weighbridge integration",
    desc: "Direct data feed from weighbridge systems into job records — automatic capture of gross, tare, and net weights at the point of measurement. Not live today. If weighbridge data is a key part of your invoicing workflow and manual entry is a current pain point, raise it at the demo stage.",
  },
  {
    name: "Route optimisation",
    desc: "Automated route optimisation for multi-stop scheduling. Not live today — routing decisions are currently made by dispatch using the available mapping and job visibility tools. Route optimisation is on the roadmap. We will not describe the current product as having this capability.",
  },
];

const scopeCards = [
  {
    title: "Parcel TMS models",
    desc: "Parcel delivery operations run on fundamentally different data structures — multi-stop routes, consumer-facing delivery windows, barcode scanning at every touchpoint, returns processing. HaulageOps is not built for that model and does not integrate with parcel-oriented TMS platforms. If your operation is parcel delivery, HaulageOps is the wrong product.",
  },
  {
    title: "3PL warehousing systems",
    desc: "Warehouse Management Systems (WMS) for third-party logistics operations have a data model centred on inventory, SKUs, pick-pack-ship workflows, and storage locations. HaulageOps does not have a WMS component and does not integrate with 3PL WMS platforms. We are transport management for bulk haulage — not warehousing.",
  },
  {
    title: "Freight forwarding platforms",
    desc: "Freight forwarding involves customs, multi-modal transport, bill of lading, and freight broker workflows that are structurally different from domestic bulk haulage dispatch. HaulageOps does not integrate with freight forwarding platforms and is not designed to support that operational model.",
  },
];

const relatedCards = [
  {
    title: "Xero Integration",
    href: "/platform/integrations/xero",
    linkLabel: "Xero integration detail",
    desc: "The full detail on how the Xero connection works — OAuth2, 6-hourly sync, real-time payment webhooks, and how the two systems divide responsibility.",
  },
  {
    title: "Platform Overview",
    href: "/platform",
    linkLabel: "Platform overview",
    desc: "The full picture of what HaulageOps does across all five portals — job management, dispatch, driver app, subcontractor portal, client portal, billing, and compliance.",
  },
  {
    title: "Billing & Invoicing",
    href: "/platform/billing-and-invoicing",
    linkLabel: "Billing & invoicing",
    desc: "How invoices are created from completed job data, managed through the draft-to-paid lifecycle, and synced to Xero — before any external integration is involved.",
  },
];

const faqs = [
  {
    q: "Can you build a custom integration for a system we use that isn't listed here?",
    a: "It depends on what the system is and what the connection needs to do. Some custom integrations are practical — if the external system has a well-documented API and the data exchange is well-defined, a scoped connection is often achievable. Others are not practical within a standard engagement. The starting point is telling us what system you use, what you need it to do with HaulageOps, and your timeline. We will give you a direct assessment — including whether it is a standard build, a scoped project, or outside what we can support.",
  },
  {
    q: "What does \u201cavailable subject to scope\u201d mean in practice?",
    a: "\u201cSubject to scope\u201d means the integration is not a standard off-the-shelf connection that can be switched on during setup. It means that whether a connection is possible — and what it would look like — depends on your specific system configuration, version, and required workflow. For MYOB specifically: we need to understand your MYOB product, hosting arrangement, and what data needs to flow, before we can tell you whether a connection is achievable and what it would involve. \u201cSubject to scope\u201d is honest — it is not a soft yes or a delayed no.",
  },
  {
    q: "Is there a fee for add-ons or integrations?",
    a: "The standard live integrations — Xero, Google Maps, Mapbox, Firebase FCM, Microsoft Azure — are included in your HaulageOps subscription. There is no separate per-integration licence fee for these. For integrations that require custom scoping and build work — such as MYOB or other non-standard connections — the cost is determined by the scope of the connection required. This is discussed and agreed before any work starts.",
  },
  {
    q: "We use Xero in the UK / NZ — does the integration work for us?",
    a: "Yes. The Xero API is consistent across Xero's AU, NZ, and UK products. The HaulageOps Xero integration works with active Xero accounts in all three markets. The connection uses Xero's standard OAuth2 API regardless of which regional Xero product you are on. See the Xero integration page for full detail.",
  },
  {
    q: "We need weighbridge data in our jobs — what are our options today?",
    a: "A live weighbridge integration is on the roadmap but not currently built. Today, weighbridge data — gross, tare, net weights — is entered manually into the job record at the point of capture or immediately after. For operations with high weighbridge volumes, this is an acknowledged data entry burden. If you need a timeline on the weighbridge integration, raise it at the demo and we will tell you where it sits in the development sequence.",
  },
  {
    q: "We have hardware GPS trackers on our trucks. Can HaulageOps use that data?",
    a: "Not directly today. Live telematics integration with hardware GPS devices is on the roadmap. The current approach is: keep your hardware GPS — it serves its own purpose for vehicle tracking. HaulageOps uses phone-based GPS through the driver app for job tracking, status updates, and dispatch visibility. The two systems coexist without a live data feed between them. When hardware telematics integration becomes available, it will add a second source of position data into the HaulageOps tracking layer.",
  },
];

export default function AddOnsPage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb */}
      <div className="pt-24 pb-0 bg-[#FFF9F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B]">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/platform" className="hover:text-[#E8652B]">Platform</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Add-ons &amp; Integrations</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Platform — Integrations
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Standard integrations, and what&apos;s available by arrangement.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Some integrations are live and included by default. Some are available subject to scoping your specific provider and workflow. Some are on the roadmap but not built yet. This page tells you exactly which is which — so you can evaluate without surprises.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Platform Overview
              </Button>
            </Link>
          </div>
          {/* Kicker pills */}
          <div className="mt-8 flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-300 fill-mode-both">
            {heroKickers.map((pill) => (
              <span key={pill} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F1F5F9] text-xs font-medium text-[#334155]">
                <CheckCircle className="h-3.5 w-3.5 text-[#16A34A] shrink-0" />
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-[#0F172A] py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {proofStrip.map((item) => (
              <div key={item} className="flex items-center justify-center gap-2">
                <CheckCircle className="h-3.5 w-3.5 text-[#E8652B] shrink-0" />
                <span className="text-white font-bold text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STANDARD LIVE INTEGRATIONS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Standard — live and included</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            These integrations are active in HaulageOps today. No additional scoping required.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            The integrations below are built, tested, and running as part of the standard HaulageOps platform. When you set up HaulageOps, these are available to configure as part of your onboarding — not feature requests, not roadmap items, not optional add-ons at extra cost.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveIntegrations.map((integration) => (
              <div key={integration.name} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <span className="inline-block px-2.5 py-1 rounded-full bg-[#E6F4EA] text-[#1A7F37] text-[11px] font-semibold">
                  Live — Standard
                </span>
                <h3 className="mt-3 font-bold text-[#0F172A]">{integration.name}</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">{integration.desc}</p>
                {integration.href && (
                  <Link href={integration.href} className="mt-3 inline-flex items-center gap-1 text-sm text-[#F39A2D] hover:underline font-semibold">
                    {integration.linkLabel} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MYOB — AVAILABLE SUBJECT TO SCOPE */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Available subject to scope</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            MYOB is not a standard live integration — but it may be achievable for your setup.
          </h2>
          <div className="mt-8 max-w-3xl">
            <p className="text-[#475569] leading-relaxed">
              MYOB is not a standard built-in integration in HaulageOps the way Xero is. MYOB exists across a range of product versions — MYOB Business, MYOB AccountRight, MYOB Essentials, and others — each with different API capabilities, configuration requirements, and limitations. A connection that works cleanly for one MYOB setup may not be practical for another.
            </p>
            <p className="mt-4 text-[#475569] leading-relaxed">
              If you use MYOB, we can explore what is technically achievable for your specific situation. The starting point is understanding:
            </p>
            <ul className="mt-6 space-y-3">
              {myobPoints.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                  <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[#475569] leading-relaxed">
              From that starting point, we can give you an honest answer about whether a connection is practical for your situation, what it would involve to build, and whether the scope is something we can commit to. We will not tell you MYOB is supported and then scope it to something different after you sign.
            </p>
            <p className="mt-4 text-[#475569] leading-relaxed">
              If MYOB is a firm requirement during your evaluation, raise it at the demo stage. That conversation is the right place to get a direct answer.
            </p>
            <div className="mt-8">
              <Link href="/demo">
                <Button className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                  Tell us about your MYOB workflow
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">On the roadmap — not built today</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            These are planned. They are not available in the current product.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            The items below are on the HaulageOps development roadmap. They are not live features, not in beta, and not available to configure. We list them here because operators ask about them — and being clear that they are future items, not current capabilities, is more useful than a vague &ldquo;coming soon&rdquo; buried in a features list.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapIntegrations.map((integration) => (
              <div key={integration.name} className="bg-[#F7F8FA] rounded-2xl p-6 border border-[#E5E7EB]">
                <span className="inline-block px-2.5 py-1 rounded-full bg-[#FFF3CD] text-[#856404] text-[11px] font-semibold">
                  Roadmap — not built
                </span>
                <h3 className="mt-3 font-bold text-[#0F172A]">{integration.name}</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">{integration.desc}</p>
              </div>
            ))}
          </div>
          {/* Highlighted callout */}
          <div className="mt-10 p-6 sm:p-7 bg-[#F7F8FA] border-l-4 border-[#F39A2D] rounded-r-lg">
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
              <strong>If a roadmap item is a hard requirement for your evaluation:</strong> tell us at the demo. We will give you a direct answer about realistic timelines rather than letting it become a surprise after you have committed. Some roadmap items have clearer paths and shorter horizons than others — the conversation is the right place to find out which applies to what you need.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT HAULAGEOPS DOES NOT DO */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What HaulageOps does not do</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Some integrations are outside scope — not a gap, a deliberate boundary.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            HaulageOps is purpose-built for bulk haulage, earthworks, and construction logistics. The platform is not a horizontal TMS trying to serve every transport model. That focus is why the features that do exist are well-suited to operators in those sectors — and it means some integration requests are genuinely outside scope, not just not yet built.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {scopeCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 sm:p-7 bg-white border border-[#E2E8F0] rounded-2xl">
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
              The narrowness of HaulageOps is intentional. Operators managing 15 to 80 vehicles across bulk haulage, earthworks, quarries, and civil construction logistics get a platform that is built for their exact operation — not a generic TMS with features that do not apply to them and gaps in the ones that do. If your operation is in that bracket, <Link href="/demo" className="text-[#E8652B] hover:underline font-semibold">book a demo</Link> and see how the features map to your actual workflow.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED PLATFORM FEATURES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related platform features</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The integration picture connects to the core platform.
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {relatedCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">
                    {card.title}
                  </Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
                <Link href={card.href} className="mt-3 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  {card.linkLabel} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently asked questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Add-ons and integrations — common questions.
          </h2>
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

      {/* CTA BAND */}
      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Have a specific integration requirement? Let&apos;s talk about it honestly.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Whether it&apos;s Xero, MYOB, a weighbridge, or something else — book a demo and we will tell you exactly where it sits: live, scopeable, or on the roadmap.
            </p>
          </div>
          <Link href="/demo" className="shrink-0">
            <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
              Book a Demo
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}

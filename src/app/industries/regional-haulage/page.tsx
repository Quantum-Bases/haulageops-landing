import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Regional Haulage Operations Software | HaulageOps",
  description:
    "Regional haulage operators covering long-haul and regional bulk freight routes with mixed owned and subcontracted capacity need better than a spreadsheet and a phone.",
};

const proofStrip = [
  { strong: "Offline app", label: "works without connectivity, syncs on return" },
  { strong: "Sub portal", label: "regional sub capacity coordinated centrally" },
  { strong: "Client portal", label: "remote site contacts see live delivery status" },
  { strong: "Digital POD", label: "photo and signature — no paper to post back" },
  { strong: "Per-tonne + daily rate", label: "billing structures supported" },
  { strong: "Xero", label: "invoice from completed job records remotely" },
];

const characteristics = [
  {
    title: "Lower job churn, higher per-job complexity",
    p: "A regional haulage driver running a long-distance bulk freight route might complete one or two jobs per day rather than the four or five a metro tipper manages. The job complexity per run is correspondingly higher — longer journey, more time on the road without connectivity, remote delivery sites with access requirements, and clients who cannot check in on delivery progress as easily as a metro site manager.",
    bullets: [
      "Job scheduling for multi-day forward planning",
      "Driver app works offline — syncs when connectivity returns",
      "Job record captures full journey detail including rest stops",
    ],
  },
  {
    title: "Subcontractor capacity across regions",
    p: "Regional haulage operators often rely on subcontractor networks to cover geographic capacity — a sub based in a regional hub takes loads that your owned fleet cannot cost-effectively cover from your main depot. Coordinating those subs across distance, maintaining visibility of their jobs and ensuring dockets come back correctly is harder without a system than in metro operations where you can send someone to check.",
    bullets: [
      "Subcontractor portal works regardless of sub driver location",
      "Job acceptance, status updates and POD submission via mobile",
      "Sub driver GPS visible on dispatch board across any distance",
    ],
  },
  {
    title: "Connectivity gaps in the field",
    p: "Regional routes — particularly through remote or rural areas — frequently have mobile coverage gaps. A driver app that stops working when the signal drops is not a driver app for regional haulage. The HaulageOps driver app is confirmed offline-capable: it works without connectivity and synchronises job status, dockets and GPS data when the driver returns to coverage. This is a key requirement for regional operations that metro-focused TMS products often underdeliver on.",
    bullets: [
      "Offline-capable — confirmed, not a marketing claim",
      "Synchronises job status, dockets and GPS on connectivity return",
      "Driver can capture and submit POD even in offline mode",
    ],
  },
  {
    title: "Remote client sites needing delivery visibility",
    p: "A mining operation, agricultural processor or infrastructure project at a remote location cannot send someone to the gate to check on a delivery. The client contact relies on your dispatch team calling — or they wait and hope. The client portal gives remote site contacts a self-service delivery status view that does not depend on your dispatcher being available to take or make a call.",
    bullets: [
      "Client portal login accessible from any device at any location",
      "Live job status and GPS position visible to client",
      "POD and docket accessible from portal on delivery completion",
    ],
  },
];

const challenges = [
  {
    title: "Communication across regions",
    paras: [
      "When your drivers are hours from the depot and your sub contractors are based in different towns, the phone and text message become the coordination system by default. Every status check is a phone call. Every docket is a photo texted. Every delivery confirmation requires someone to be available to answer. This is manageable at five trucks. At twenty trucks spanning multiple regions, it consumes your dispatcher's day.",
      "The dispatch board, driver app and subcontractor portal replace the phone call as the coordination channel. Status is visible without calling. Dockets are submitted digitally. Delivery confirmation is in the system when the driver submits POD — whether they are forty kilometres or four hundred kilometres away.",
    ],
  },
  {
    title: "Dockets arriving days after delivery",
    paras: [
      "A paper docket signed at a remote delivery site travels back to your office at the speed of the driver's next visit — which in regional operations might be days later. Your invoicing cycle delays by the docket cycle. Your cash flow follows. The regional haulage version of the metro docket backlog problem is the same problem with a longer delay built in.",
      "Digital POD submitted at the delivery point means the docket is in the system when the truck is still at the gate. The driver captures photo, signature and tonnage through the app — online or offline, with sync on return. Your invoicing can run from the next morning, not the next week.",
    ],
  },
  {
    title: "Remote site clients needing updates they cannot get",
    paras: [
      "A production facility or processing site at a remote location that relies on a bulk freight delivery to keep operations running needs to know whether the load is on time. Your dispatcher might not have an update because the driver has been out of coverage for four hours. The client calls anyway, and your team cannot help.",
      "The last known GPS position and job status update appear in the client portal as they were last synced. When the driver returns to coverage, the update propagates. The client has the most current information the system has — without requiring your dispatcher to relay it.",
    ],
  },
];

const lifecycle = [
  {
    num: "1",
    title: "Forward schedule regional jobs",
    p: "Regional routes are planned days in advance. Jobs are scheduled in HaulageOps with departure times, route details and delivery windows. Drivers see their upcoming jobs in the app before they leave the depot. Sub contractors see their confirmed regional runs through the portal.",
  },
  {
    num: "2",
    title: "Driver departs with full job detail on app",
    p: "The driver app holds all job details — delivery address, load details, client contact, attached documents — before the driver loses connectivity. Jobs remain accessible and actionable on the app in fully offline mode throughout the route.",
  },
  {
    num: "3",
    title: "Status updates sync when in coverage",
    p: "As the driver passes through areas with connectivity, job status updates, GPS positions and any mid-journey changes sync to the dispatch board. The dispatcher sees the most current available position without requiring the driver to call in.",
  },
  {
    num: "4",
    title: "Digital POD captured at remote delivery",
    p: "At the delivery point, the driver captures POD through the app — photo of the load, client signature, tonnage, timestamp. This works offline. The POD syncs to the job record when the driver returns to connectivity. No paper to bring back.",
  },
  {
    num: "5",
    title: "Client sees delivery confirmation from portal",
    p: "When the POD syncs, it is immediately visible in the client portal. The remote site client can see that their delivery was completed, review the POD, and download the docket — without requiring your office to send a confirmation email or make a follow-up call.",
  },
  {
    num: "6",
    title: "Invoice from synced job records",
    p: "With the POD in the system and the job record complete, invoicing runs from the dispatch office regardless of where the truck is. Per-tonne or daily rate billing applies from the rate card. Push to Xero and the invoice is with the client the same day the load is confirmed delivered.",
  },
];

const capabilities = [
  {
    title: "Driver app — offline-capable, iOS and Android",
    href: "/platform/driver-app",
    p: "The driver app is confirmed offline-capable — this is not a marketing qualifier, it is a tested capability. The app works without connectivity: drivers can view job details, update status, log break and rest records, and capture digital POD including photo, signature and tonnage. All data synchronises to the job record when connectivity returns. For regional routes with genuine coverage gaps, this is the difference between a functional field tool and one that fails at the most critical moments.",
    bullets: [
      "Full offline function — job access, status, POD capture",
      "Sync on return to connectivity — no manual re-entry required",
      "Break and rest record logging available offline for compliance",
    ],
  },
  {
    title: "Client portal — remote site delivery visibility",
    href: "/platform/client-portal",
    p: "The client portal gives remote site contacts a self-service view of their delivery status, the most recent GPS position and job status sync, delivery confirmation and POD on completion. Mining operations, agricultural processors, remote infrastructure sites and regional depots all have contacts who need delivery information without the ability to call your dispatcher at any hour. The portal is accessible on any device with an internet connection.",
    bullets: [
      "Live delivery status from last sync — updated as driver passes through coverage",
      "POD and docket visible in portal immediately on sync after delivery",
      "Invoice access and job history from portal — no calls to office required",
    ],
  },
  {
    title: "Subcontractor portal — regional capacity coordination",
    href: "/platform/subcontractor-portal",
    p: "The subcontractor portal gives each of your regional sub contractors a dedicated mobile login to receive jobs, confirm acceptance, view Mapbox maps for pick-up and delivery locations, update status and submit POD. Sub contractors based in regional hubs receive jobs through the portal without requiring your dispatch team to coordinate by phone. Their status is visible on your dispatch board regardless of their location.",
    bullets: [
      "Sub contractors access portal at no cost — no separate licence",
      "Job acceptance, status updates and POD from mobile anywhere",
      "Visible on dispatch board alongside owned fleet in real time",
    ],
  },
  {
    title: "Billing — per-tonne and daily rate structures",
    href: "/platform/rate-management",
    p: "Regional haulage billing commonly combines per-tonne rates for load-based jobs with daily or shift rates for ongoing contract work where the truck is committed to a client for a period. The rate management system handles both in the same account, alongside fixed-fee rates for specific routes or contracts. The Xero integration pushes invoices from completed jobs with two-way payment sync so you can invoice from the office the same day a remote delivery completes.",
    bullets: [
      "Per-tonne and daily rate structures in the same account",
      "Rate cards per client and route with effective dating",
      "Xero OAuth2 integration with real-time payment webhook",
    ],
  },
];

const faqs = [
  {
    q: "The driver app says it works offline — what does that actually mean in practice?",
    a: "When the driver loses mobile connectivity — whether on a remote route, in a coverage gap, or underground — the driver app continues to function using locally stored job data. The driver can view their job details, update their status (loading, in transit, on site, delivered), log break and rest records, and capture POD including photo, signature and tonnage confirmation. All of this data is held on the device and synchronises to the job record in HaulageOps when connectivity is restored. Nothing is lost in a coverage gap and no manual re-entry is required on return.",
  },
  {
    q: "We have sub contractors based in other towns who handle regional routes for us. How do they get their jobs?",
    a: "Each sub contractor gets a dedicated subcontractor portal login — a web-based login accessible from any mobile browser at any location. When you create a job and assign it to them, they receive a notification and see the job in their portal queue. They accept or decline, view the Mapbox map for pick-up and delivery locations, update status as they progress, and submit digital POD at delivery. You can see their status and last known GPS position on your dispatch board without calling them.",
  },
  {
    q: "Our clients are at remote sites and keep calling for delivery updates — how does the client portal help?",
    a: "The client portal gives each client a dedicated login showing the live status of their jobs and the most recent GPS position sync from the driver. When the driver is in a coverage gap, the portal shows the last known position with a timestamp. When the driver returns to coverage and syncs, the status updates immediately. The client can check the portal themselves rather than calling your dispatch team. On delivery, the POD is visible in the portal immediately after the sync — photo, signature and timestamp, ready for the client to download for their own records.",
  },
  {
    q: "We do per-tonne billing for some clients and daily rate for others — can HaulageOps handle both?",
    a: "Yes. The rate management system supports per-tonne, daily, hourly and fixed-fee billing structures in the same account. Different clients can have different billing structures on their rate cards. When a job is created against a client, the applicable rate applies automatically from their rate card — no manual rate calculation per job. Both billing structures feed into the same invoicing workflow and the same Xero integration.",
  },
  {
    q: "How does the driver app handle break and rest record logging on long-distance routes?",
    a: "The driver app includes break and rest record logging — drivers record their rest periods against their job record through the app. This works in both online and offline modes. The rest records are stored against the job and driver record, contributing to fatigue management visibility in the management reporting module. This is relevant for operators with Chain of Responsibility or fatigue compliance obligations on long-distance routes.",
  },
  {
    q: "We currently coordinate regional routes by phone and WhatsApp — how disruptive is switching to HaulageOps?",
    a: "Standard setup takes two to four weeks including data migration assistance, configuration for your rate cards and clients, and training for admin, dispatch and driver app use. Sub contractors are onboarded to the portal during setup — the process is simple enough that experienced sub contractors are typically active on the portal within their first job. The phone and WhatsApp do not disappear overnight, but most operators find the volume of coordination calls drops significantly once drivers and subs are submitting status updates and dockets through the system.",
  },
];

const relatedCards = [
  {
    title: "Bulk Haulage",
    href: "/industries/bulk-haulage",
    p: "Multi-client bulk haulage operations — the core use case HaulageOps was built around. Per-tonne billing, subcontractor networks, digital dockets and Xero invoicing.",
  },
  {
    title: "Driver App",
    href: "/platform/driver-app",
    p: "iOS and Android, offline-capable. How the driver app works for regional routes — offline job access, status updates, rest logging and POD capture with sync on return to coverage.",
  },
  {
    title: "Client Portal",
    href: "/platform/client-portal",
    p: "How the client portal gives remote site contacts live delivery visibility, POD access and invoice management — without requiring calls to your dispatch team.",
  },
  {
    title: "Haulage Dispatch",
    href: "/solutions/haulage-dispatch",
    p: "The dispatch coordination solution — how the dispatch board, driver app and subcontractor portal work together across an operation spanning distance and regions.",
  },
];

export default function RegionalHaulagePage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb */}
      <div className="pt-24 pb-0 bg-[#FFF9F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B]">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/industries" className="hover:text-[#E8652B]">Industries</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Regional Haulage</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Regional Haulage Operations
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Regional haulage operations spanning distance need better than a spreadsheet and a phone.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Regional and long-haul bulk freight operations face a distinct coordination challenge: fewer jobs per truck per day, but higher complexity per job — remote client sites, subcontractor networks that span geographic regions, connectivity gaps in the field, and client contacts who need delivery visibility without the ability to drive to site to check.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/driver-app">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Driver App
              </Button>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-300 fill-mode-both">
            {["Offline-capable driver app — syncs when connected", "Subcontractor portal for regional capacity", "Client portal for remote site visibility", "Digital POD across long-distance routes"].map((pill) => (
              <span key={pill} className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-[#334155] bg-[#F1F5F9] border border-[#E2E8F0]">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-[#0F172A] py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 text-center">
            {proofStrip.map((item) => (
              <div key={item.strong} className="flex flex-col items-center justify-center gap-1">
                <strong className="text-white text-lg font-bold leading-tight">{item.strong}</strong>
                <span className="text-[#94A3B8] text-xs uppercase tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REGIONAL HAULAGE CHARACTERISTICS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Regional Haulage Characteristics</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            What makes regional haulage operationally distinct from metro operations.
          </h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            Regional bulk freight operations share the same core platform requirements as metro bulk haulage — dispatch coordination, subcontractor networks, digital dockets and billing — but the distance factor changes the specific pressure points. HaulageOps addresses those directly rather than assuming metro-style connectivity and same-day close-out cycles.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {characteristics.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p}</p>
                <ul className="mt-5 space-y-3">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                      <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON CHALLENGES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common Challenges</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Where regional haulage operations break down without the right system.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                {card.paras.map((p) => (
                  <p key={p} className="mt-3 text-sm text-[#475569] leading-relaxed">{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HAULAGEOPS FOR REGIONAL HAULAGE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">HaulageOps for Regional Haulage</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The platform features that address the specific challenges of distance.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycle.map((step) => (
              <div key={step.num} className="bg-[#0F172A] rounded-2xl p-6">
                <span className="text-[#E8652B] font-bold text-2xl">{step.num}</span>
                <h3 className="mt-3 font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">{step.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM CAPABILITIES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Platform Capabilities</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The HaulageOps features built for operations across distance.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {capabilities.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">{card.title}</Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.p}</p>
                <ul className="mt-5 space-y-3">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                      <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={card.href} className="mt-4 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  View details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREEN EXAMPLE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Screen Example</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Regional haulage dispatch board in HaulageOps.
          </h2>
          <div className="mt-8 rounded-2xl bg-[#0D1525] border border-[#1E293B] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 bg-[#1E293B]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E8652B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#94A3B8]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
              <span className="ml-3 text-xs font-semibold text-[#CBD5E1]">HaulageOps — Dispatch Board (Regional Haulage)</span>
            </div>
            <div className="p-6">
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Dispatch board showing a regional haulage operation mid-route: 4 owned drivers on long-distance jobs, each showing last known GPS position on a regional map with distance from destination. Driver 1 status: "En route — last update 47 min ago (connectivity gap indicated)". Driver 2 status: "On site — POD pending". Driver 3 status: "Loaded — departed origin". Sub contractor panel showing 2 regional subs: one accepted and en route, one pending acceptance. Job list on left with delivery windows, load type, client name and region tag. Filter: by region, by driver, by delivery status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">FAQ</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Common questions from regional haulage operators.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See how HaulageOps works for regional haulage operations.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              A 20-minute demo covers the offline driver app, subcontractor portal, client site visibility and billing — we will show how it works for operations spanning distance, not just metro same-day runs.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED PAGES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related Pages</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Related industries and platform features.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">{card.title}</Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.p}</p>
                <Link href={card.href} className="mt-3 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  View page <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

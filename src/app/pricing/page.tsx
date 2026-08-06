import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "HaulageOps Pricing — Haulage Operations Platform",
  description:
    "HaulageOps pricing includes a one-time setup fee and SaaS subscription. External portals for subcontractors and clients are free for portal users.",
};

const proofItems = [
  { value: "$1,500", label: "Standard setup fee" },
  { value: "2–4 weeks", label: "Typical go-live" },
  { value: "Free", label: "Subcontractor portal access" },
  { value: "Free", label: "Client portal access" },
  { value: "All portals", label: "Included in subscription" },
  { value: "No per-user fees", label: "Unlimited internal users" },
];

const plans = [
  {
    name: "Starter",
    tag: null,
    topBorder: "border-t-[#CBD5E1]",
    title: "Small fleets getting off spreadsheets",
    fit: "15–25 vehicles. One primary dispatcher. Getting the core workflow in order.",
    setupFee: "$1,500",
    setupDesc: "Standard configuration, rate setup, Xero connection, training.",
    subscription: "Contact for quote",
    features: [
      "Job management and dispatch board",
      "Driver mobile app (iOS + Android)",
      "Subcontractor portal — free for subs",
      "Client portal — free for clients",
      "Digital POD and docket capture",
      "Xero integration",
      "Google Maps address and routing",
      "Management reporting",
    ],
    cta: "Get a quote",
  },
  {
    name: "Professional",
    tag: "Most common",
    topBorder: "border-t-[#E8652B]",
    title: "Growing fleets with subcontractor networks",
    fit: "25–60 vehicles. Mix of owned and subcontracted. Multiple dispatchers and clients.",
    setupFee: "$1,500",
    setupDesc: "Includes extended rate card configuration and subcontractor onboarding.",
    subscription: "Contact for quote",
    features: [
      "Everything in Starter",
      "Multi-rate and effective-dated rate cards",
      "Subcontractor pay rates (separate from client charge)",
      "Contract management — full lifecycle",
      "Driver availability scheduling",
      "Break and rest period recording",
      "Fleet document expiry alerts",
      "Full audit trail and compliance reporting",
    ],
    cta: "Get a quote",
  },
  {
    name: "Enterprise",
    tag: null,
    topBorder: "border-t-[#1E3A5F]",
    title: "Large operations and complex configurations",
    fit: "60–80+ vehicles. Multiple depots, large sub networks, complex rate structures.",
    setupFee: "From $6,500",
    setupDesc: "Extended configuration scope, data migration, dedicated implementation support.",
    subscription: "Contact for quote",
    features: [
      "Everything in Professional",
      "Historical data migration",
      "Custom onboarding timeline",
      "Dedicated implementation manager",
      "Priority support response",
      "Multi-depot configuration",
      "Extended training sessions",
      "White-label options on request",
    ],
    cta: "Discuss enterprise scope",
  },
];

const portalPoints = [
  "Add 40 subcontractors to the subcontractor portal — no additional cost",
  "Give 20 clients their own client portal logins — no additional cost",
  "Add internal dispatchers and admin users — no per-seat charge",
  "One subscription covers the entire network",
];

const setupCards = [
  {
    title: "Platform configuration",
    p: "We configure the platform to match your operation — not a generic demo environment. This includes your fleet structure, driver records, user accounts with correct role-based permissions, and your client list.",
    points: [
      "User accounts and RBAC roles configured",
      "Fleet and vehicle records loaded",
      "Driver records with licence and document fields",
      "Client accounts and portal access set up",
      "Subcontractor accounts configured",
    ],
  },
  {
    title: "Rate card setup",
    p: "Rate cards in HaulageOps support per-tonne, per-load, hourly and fixed-fee structures, with separate client charge rates and subcontractor pay rates, and effective dating for rate changes. We load your existing rate cards.",
    points: [
      "Client charge rates loaded per rate type",
      "Subcontractor pay rates configured separately",
      "Effective dates applied for scheduled changes",
      "Client-specific rate card access via portal",
    ],
  },
  {
    title: "Xero connection",
    p: "The Xero integration uses OAuth2 — no password sharing, no manual exports. Once connected, invoices created in HaulageOps sync to Xero. Payment webhooks from Xero update invoice status in real time.",
    href: "/platform/integrations/xero",
    linkText: "Xero integration",
    points: [
      "OAuth2 connection established during setup",
      "Invoice sync tested and confirmed",
      "Payment webhook configured",
      "6-hourly cron sync active from day one",
    ],
  },
  {
    title: "Training",
    p: "We run training sessions for each role type in your operation — admin, dispatch, and driver app. Training is structured around real tasks in your configured environment, not a generic walkthrough.",
    points: [
      "Admin and billing training session",
      "Dispatch board and job assignment training",
      "Driver app onboarding (iOS and Android)",
      "Subcontractor portal walkthrough for your subs",
      "Client portal walkthrough for your clients",
    ],
  },
];

const subscriptionCards = [
  {
    title: "All five portals",
    p: "Admin & Dispatch Panel, Driver Mobile App, Subcontractor Portal, Client Portal, and Management Reporting are all active. No portal is gated behind a higher tier.",
    href: "/platform",
    linkText: "See the platform overview",
  },
  {
    title: "All integrations",
    p: "Xero sync, Google Maps address autocomplete and routing, Mapbox interactive maps in the subcontractor portal, and Firebase FCM push notifications are included. MYOB is available subject to scope on request.",
    href: "/platform/integrations/xero",
    linkText: "Xero integration details",
  },
  {
    title: "Ongoing support",
    p: "Support is included in your subscription — not a paid add-on. The support team knows the platform and the workflows. Response within one business day for most queries.",
    href: "/support",
    linkText: "Support details",
  },
];

const faqs = [
  {
    q: "Is there a per-user fee?",
    a: "No. HaulageOps does not charge per internal user. Your admin team, dispatchers, and management can all have accounts at no additional cost. External users — subcontractors accessing the subcontractor portal and clients accessing the client portal — do not pay and are not counted in any per-seat fee. One subscription covers all users on all portals.",
  },
  {
    q: "Is there a per-vehicle fee?",
    a: "No. There is no per-vehicle or per-truck charge. HaulageOps pricing is not usage-based in that way. Fleet size affects which plan tier is appropriate, but once you're on a plan, adding vehicles to your fleet record doesn't change your monthly cost. This matters when you're scaling subcontractor capacity — adding sub trucks doesn't add to your bill.",
  },
  {
    q: "What exactly does the setup fee cover?",
    a: "The $1,500 standard setup fee covers: platform configuration (users, roles, fleet, clients, subcontractors), rate card loading, Xero OAuth2 connection, and training for admin, dispatch and drivers. For Enterprise scope, the setup fee starts from $6,500 and covers extended configuration, historical data migration, and a longer implementation timeline. The setup fee is a one-time charge — it is not recurring.",
  },
  {
    q: "Can I add subcontractors to the portal at no extra cost?",
    a: "Yes. The subcontractor portal is included in your subscription and there is no per-subcontractor charge. You can give access to your entire subcontractor network — each subcontractor gets a dedicated authenticated login, sees their assigned jobs, can accept or decline via the portal, and has access to Mapbox job maps and their job history. None of that changes your subscription cost.",
  },
  {
    q: "Is there a free trial?",
    a: (
      <>
        We don't offer a self-serve free trial. The reason is practical: HaulageOps needs to be configured with your rate cards, your client list, your fleet and your dispatch workflow before it's meaningful to evaluate. A generic demo environment doesn't show you how it will work for your operation. What we do offer is a{" "}
        <Link href="/demo" className="text-[#E8652B] hover:underline font-medium">20-minute demo</Link>{" "}
        of the platform running through a real job workflow — create, assign, track, POD, invoice, Xero sync — followed by a scoped proposal within 24 hours.
      </>
    ),
  },
  {
    q: "How does pricing work for the Xero integration?",
    a: "Xero integration is included in your subscription at no extra cost. The connection uses OAuth2 — no licence fees, no connector middleware charges. Invoice sync runs on a 6-hourly cron, and Xero payment webhooks update invoice status in HaulageOps in real time. You need an active Xero subscription — HaulageOps does not cover your Xero licence cost.",
  },
  {
    q: "Do my subcontractors need to pay for anything?",
    a: "No. Subcontractors access the HaulageOps subcontractor portal through a dedicated login provided by you. They do not need a HaulageOps account of their own, and there is no charge for subcontractor portal access. This is different from platforms where subcontractors need to be paying customers of the same software to receive job assignments. In HaulageOps, subcontractor portal access is part of what you pay for.",
  },
];

export default function PricingPage() {
  return (
    <MainLayout showCta={false}>
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#FFF9F5] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Pricing</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4">
            Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1]">
            Simple pricing built for how haulage businesses actually work.
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed">
            One setup fee. One subscription. All portals included. Your subcontractors and clients access their portals at no extra cost — only you pay.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Get a pricing proposal
              </Button>
            </Link>
            <Link href="/implementation">
              <Button size="lg" variant="outline" className="text-[#0F172A] font-semibold">
                See what's included in setup
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0D1525] py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {proofItems.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-sm font-bold text-white">{item.value}</p>
              <p className="text-xs text-[#94A3B8] mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Plans</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Three tiers. Exact pricing confirmed after a 20-minute demo.</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-2xl">
            Every business runs differently — fleet size, subcontractor network, rate complexity, and integration needs all shape the final quote. The ranges below give you a starting point. We'll confirm exact figures after we've looked at your operation together.
          </p>
          <div className="mt-10 overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[920px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="w-44 pb-6 pr-6 align-bottom">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Plan</span>
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="px-3 pb-6 align-top">
                      <div className={`bg-white border-t-4 ${plan.topBorder} border-x border-b border-[#E2E8F0] rounded-t-2xl p-6`}>
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-xl font-bold text-[#0F172A]">{plan.name}</span>
                          {plan.tag && (
                            <span className="inline-block bg-[#E8652B] text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-widest whitespace-nowrap uppercase">
                              {plan.tag}
                            </span>
                          )}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 pr-6 text-xs font-semibold text-[#64748B] uppercase tracking-wider">Best for</td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="px-3 py-4 align-top text-sm font-semibold text-[#0F172A]">{plan.title}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 pr-6 text-xs font-semibold text-[#64748B] uppercase tracking-wider">Typical profile</td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="px-3 py-4 align-top text-sm text-[#475569] leading-relaxed">{plan.fit}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 pr-6 text-xs font-semibold text-[#64748B] uppercase tracking-wider">Setup fee</td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="px-3 py-4 align-top">
                      <p className="text-2xl font-bold text-[#0F172A]">{plan.setupFee}</p>
                      <p className="mt-1 text-xs text-[#64748B] leading-relaxed">{plan.setupDesc}</p>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 pr-6 text-xs font-semibold text-[#64748B] uppercase tracking-wider">Monthly subscription</td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="px-3 py-4 align-top text-lg font-bold text-[#0F172A]">{plan.subscription}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 pr-6 text-xs font-semibold text-[#64748B] uppercase tracking-wider">What's included</td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="px-3 py-4 align-top">
                      <ul className="space-y-2.5">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-[#334155]">
                            <Check className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 pr-6" />
                  {plans.map((plan) => (
                    <td key={plan.name} className="px-3 pt-5 pb-2 align-top">
                      <Link href="/demo">
                        <Button className="w-full bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                          {plan.cta}
                        </Button>
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The portal pricing model</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Your subcontractors and clients don't pay. You do.</h2>
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                Most TMS platforms charge per-seat or per-user — which means every subcontractor and client you give access to becomes a line on your bill. HaulageOps works differently.
              </p>
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                The <Link href="/platform/subcontractor-portal" className="text-[#E8652B] hover:underline font-medium">subcontractor portal</Link> is a dedicated, authenticated login environment where your external subcontractors accept and decline job assignments, view Mapbox maps, track their job history, and communicate job status — all in real time. They don't pay for that access. You do, as part of your subscription.
              </p>
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                The <Link href="/platform/client-portal" className="text-[#E8652B] hover:underline font-medium">client portal</Link> gives your clients live job status, access to their dockets and proof of delivery, invoice history, their rate cards, and client-specific reports. You can give every client in your network their own portal login. No per-client licence. No per-seat add-on.
              </p>
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                This matters operationally: when portal access is free for external users, you actually give it to them. When it costs per seat, you find workarounds — which usually means more WhatsApp, more email, and more manual updates for your dispatch team.
              </p>
            </div>
            <div>
              <div className="rounded-2xl bg-[#0D1525] border border-[#1E293B] overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 bg-[#1E293B]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E8652B]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#94A3B8]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
                  <span className="ml-3 text-xs font-semibold text-[#CBD5E1]">Portal access model — pricing illustration</span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {"Diagram: operating company at centre, subscription fee arrow going left; subcontractor portal logins (multiple subs, each marked \"free\") radiating right; client portal logins (multiple clients, each marked \"free\") radiating below. Legend: \"You pay once. Everyone else accesses for free.\""}
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-[#BBF7D0] bg-[#F0FDF4] p-6 mt-6">
                <p className="font-bold text-[#166534]">What this means in practice</p>
                <ul className="mt-3 space-y-2.5">
                  {portalPoints.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#166534]">
                      <Check className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What's included</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Setup fee covers everything you need to go live.</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-2xl">
            The setup fee is not a licence fee. It covers the configuration work, data loading, integration setup and training required to get your operation live on HaulageOps. Here's exactly what that means.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {setupCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="text-lg font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                  {card.p}{" "}
                  {card.href && (
                    <Link href={card.href} className="text-[#E8652B] hover:underline font-medium">{card.linkText}</Link>
                  )}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {card.points.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                      <Check className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Subscription includes</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Everything in the subscription. No feature add-ons.</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-2xl">
            Once you're live, your subscription covers the full platform. There are no optional module fees or feature gates — the rate card module, the subcontractor portal, the client portal, Xero integration, Firebase push notifications and Google Maps are all included.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {subscriptionCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="text-lg font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p}</p>
                <Link href={card.href} className="mt-4 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-bold">
                  <ArrowRight className="h-3.5 w-3.5" /> {card.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently asked questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">Pricing questions answered directly.</h2>
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
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg sm:text-xl text-[#CBD5E1] italic leading-relaxed">
            "Pricing makes a lot more sense after you've seen it running through a real job. The 20-minute demo is where we work through your specific fleet size and rate structure."
          </p>
          <p className="mt-4 font-bold text-[#E8652B]">HaulageOps Implementation Team</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">Pricing works best after a 20-minute demo.</h2>
            <p className="mt-2 text-[#475569] text-sm leading-relaxed max-w-xl">
              We scope your fleet size, rate card complexity, and integration needs — then provide an exact proposal within 24 hours. No commitment required.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a 20-minute demo
              </Button>
            </Link>
            <Link href="/implementation" className="text-[#E8652B] hover:underline text-sm font-semibold">
              See what implementation covers →
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check, ArrowRight, Calendar } from "lucide-react";

export const metadata = {
  title: "HaulageOps Pricing - Custom Haulage Operations Platform",
  description:
    "HaulageOps pricing is customized based on your fleet size and operational requirements. Book a demo to get a tailored quote for your business.",
};

const proofItems = [
  { value: "Custom Quote", label: "Tailored to your fleet" },
  { value: "2–4 weeks", label: "Typical go-live" },
  { value: "Free", label: "Subcontractor portal access" },
  { value: "Free", label: "Client portal access" },
  { value: "All portals", label: "Included in subscription" },
  { value: "No per-user fees", label: "Unlimited internal users" },
];

/* 
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
      "Subcontractor portal - free for subs",
      "Client portal - free for clients",
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
      "Contract management - full lifecycle",
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
*/

const portalPoints = [
  "Add subcontractors to the portal at no extra per-seat cost",
  "Give clients their own portal logins for instant visibility",
  "Add internal dispatchers and admin users with no per-user fees",
  "One subscription covers your entire operational network",
];

const setupCards = [
  {
    title: "Platform configuration",
    p: "We configure the platform to match your operation - not a generic demo environment. This includes your fleet structure, driver records, user accounts with correct role-based permissions, and your client list.",
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
    p: "Rate cards in HaulageOps support per-tonne, per-load, hourly and fixed-fee structures, with separate client charge rates and subcontractor pay rates. We help load your existing rate cards.",
    points: [
      "Client charge rates loaded per rate type",
      "Subcontractor pay rates configured separately",
      "Effective dates applied for scheduled changes",
      "Client-specific rate card access via portal",
    ],
  },
  {
    title: "Xero connection",
    p: "The Xero integration uses OAuth2 - no password sharing, no manual exports. Once connected, invoices created in HaulageOps sync to Xero smoothly.",
    href: "/platform/integrations/xero",
    linkText: "Xero integration",
    points: [
      "OAuth2 connection established during setup",
      "Invoice sync tested and confirmed",
      "Payment webhook configured",
      "Automatic sync active from day one",
    ],
  },
  {
    title: "Training",
    p: "We run training sessions for each role type in your operation - admin, dispatch, and driver app. Training is structured around real tasks in your configured environment.",
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
    p: "Xero sync, Google Maps address autocomplete and routing, Mapbox interactive maps in the subcontractor portal, and push notifications are included.",
    href: "/platform/integrations/xero",
    linkText: "Xero integration details",
  },
  {
    title: "Ongoing support",
    p: "Support is included in your subscription - not a paid add-on. The support team knows the platform and the workflows.",
    href: "/support",
    linkText: "Support details",
  },
];

const faqs = [
  {
    q: "How is pricing calculated?",
    a: "We haven't fixed rigid one-size-fits-all pricing tiers because every operation is different. Pricing is custom-tailored based on your fleet size, subcontractor ratio, rate structures, and specific workflow needs. Book a 30-minute call with us to get a personalized quote.",
  },
  {
    q: "Is there a per-user fee?",
    a: "No. HaulageOps does not charge per internal user. Your admin team, dispatchers, and management can all have accounts at no additional cost. External users - subcontractors accessing the portal and clients accessing the client portal - do not pay and are not counted in any per-seat fee.",
  },
  {
    q: "Is there a per-vehicle fee?",
    a: "No. There is no per-vehicle or per-truck charge. HaulageOps pricing is not usage-based in that way.",
  },
  {
    q: "Can I add subcontractors to the portal at no extra cost?",
    a: "Yes. The subcontractor portal is included in your platform access and there is no per-subcontractor charge.",
  },
  {
    q: "Do my subcontractors need to pay for anything?",
    a: "No. Subcontractors access the HaulageOps subcontractor portal through a dedicated login provided by you. They do not need a HaulageOps account of their own, and there is no charge for subcontractor portal access.",
  },
];

export default function PricingPage() {
  return (
    <MainLayout showCta={false}>
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#FFF9F5] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-6 justify-center sm:justify-start">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Pricing</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4">
            Custom Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1]">
            Tailored pricing built for how your haulage business actually operates.
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed">
            Every bulk haulage operation has unique fleet dynamics, subcontractor ratios, and rate card structures. We provide custom, transparent proposals designed specifically around your operational scale.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center sm:justify-start">
            <a
              href="https://calendly.com/admin-haulageops/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold flex items-center gap-2 shadow-md">
                <Calendar className="h-4 w-4" /> Book a 30-Minute Walkthrough
              </Button>
            </a>
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

      {/* Prominent Custom Pricing & Book Now Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#FFF9F5] border-2 border-[#E8652B]/30 rounded-3xl p-8 sm:p-12 shadow-sm">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4">
              Tailored Proposals
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
              Enterprise Pricing Built Around Your Operation
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
              Because fleet sizes, subcontractor networks, and integration requirements vary across bulk logistics operators, we provide tailored proposals to ensure you get exact pricing for your specific setup.
            </p>
            <p className="mt-3 text-base text-[#0F172A] font-semibold">
              Schedule a 30-minute operational walkthrough with our team to review your workflow and receive a customized quote within 24 hours.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="https://calendly.com/admin-haulageops/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-bold px-8 py-6 text-base shadow-md flex items-center gap-2">
                  <Calendar className="h-5 w-5" /> Book a Demo & Get Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*
      <section className="py-16 bg-white border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Plans</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Three tiers. Exact pricing confirmed after a 20-minute demo.</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-2xl">
            Every business runs differently - fleet size, subcontractor network, rate complexity, and integration needs all shape the final quote.
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
                      <a
                        href="https://calendly.com/admin-haulageops/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                          {plan.cta}
                        </Button>
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      */}

      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The portal pricing model</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Your subcontractors and clients don't pay. You do.</h2>
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                Most TMS platforms charge per-seat or per-user - which means every subcontractor and client you give access to becomes a line on your bill. HaulageOps works differently.
              </p>
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                The <Link href="/platform/subcontractor-portal" className="text-[#E8652B] hover:underline font-medium">subcontractor portal</Link> is a dedicated, authenticated login environment where your external subcontractors accept and decline job assignments, view Mapbox maps, track their job history, and communicate job status - all in real time. They don't pay for that access.
              </p>
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                The <Link href="/platform/client-portal" className="text-[#E8652B] hover:underline font-medium">client portal</Link> gives your clients live job status, access to their dockets and proof of delivery, invoice history, their rate cards, and client-specific reports.
              </p>
            </div>
            <div>
              <div className="rounded-2xl border border-[#BBF7D0] bg-[#F0FDF4] p-6">
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
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">Setup covers everything you need to go live.</h2>
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#FFFFFF]">Ready to discuss pricing for your fleet?</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Schedule a 30-minute call to review your operational requirements and get a customized quote.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 shrink-0">
            <a
              href="https://calendly.com/admin-haulageops/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book Now - Schedule Call
              </Button>
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

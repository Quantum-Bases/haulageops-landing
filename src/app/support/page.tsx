import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ArrowRight,
  Headphones,
  LifeBuoy,
  Smartphone,
  Layers,
  Building2,
  FileCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  PhoneCall,
  Mail,
  ShieldAlert,
} from "lucide-react";

export const metadata = {
  title: "Support Centre & Help Hub | HaulageOps",
  description:
    "Dedicated operational and technical support for HaulageOps customers — dispatch help, driver app guidance, Xero sync troubleshooting, and onboarding assistance.",
};

const channelCards = [
  {
    icon: PhoneCall,
    title: "Operational Support Desk",
    desc: "Direct support for active dispatchers, operations managers, and administrators managing live jobs.",
    status: "Active Mon–Fri, 7am – 6pm AEST",
    actionText: "Submit an Operational Ticket",
    href: "/contact",
  },
  {
    icon: Smartphone,
    title: "Driver Mobile Assistance",
    desc: "Quick troubleshooting for drivers — password resets, device permissions, and offline syncing questions.",
    status: "1-Business Day Response SLA",
    actionText: "View Driver App Guide",
    href: "/platform/driver-app",
  },
  {
    icon: FileCheck,
    title: "Accounting & Xero Support",
    desc: "Assistance with OAuth2 tokens, nominal account mapping, tax rates, and invoice line reconciliation.",
    status: "Specialist Support",
    actionText: "Xero Integration Guide",
    href: "/platform/integrations/xero",
  },
];

const supportCategories = [
  {
    icon: Layers,
    title: "Getting Started & Onboarding",
    desc: "New to HaulageOps? Explore our step-by-step implementation process covering data migration, fleet registers, and dispatch configuration.",
    linkText: "Implementation Overview",
    href: "/implementation",
  },
  {
    icon: Smartphone,
    title: "Driver App Setup & Troubleshooting",
    desc: "Complete guide to downloading and operating the iOS and Android driver app, handling offline quarry pits, and capturing photo dockets.",
    linkText: "Driver App Specifications",
    href: "/platform/driver-app",
  },
  {
    icon: Building2,
    title: "Subcontractor Onboarding",
    desc: "Instructions for inviting external subbies to their free web portal, managing job acceptances, and generating automated RCTIs.",
    linkText: "Subcontractor Portal Details",
    href: "/platform/subcontractor-portal",
  },
  {
    icon: FileCheck,
    title: "Rate Cards & Invoicing Rules",
    desc: "Learn how to configure separate client charge rates and subcontractor pay rates across per-tonne, hourly, and per-load metrics.",
    linkText: "Rate Management Guide",
    href: "/platform/rate-management",
  },
  {
    icon: ShieldAlert,
    title: "Compliance & Safety Records",
    desc: "Accessing driver break records, pre-start checklists, vehicle document expiries, and Chain of Responsibility audit trails.",
    linkText: "Compliance Center",
    href: "/platform/compliance",
  },
  {
    icon: LifeBuoy,
    title: "Client Portal Administration",
    desc: "Setting up branded client dashboards so head contractors can view real-time delivery proof and download dockets self-service.",
    linkText: "Client Portal Setup",
    href: "/platform/client-portal",
  },
];

const faqs = [
  {
    q: "How quickly does the support team respond to queries?",
    a: "Standard tickets receive a response within one business day. Critical operational issues affecting live dispatch or invoicing are prioritized with an urgent 4-hour response window during operating business hours.",
  },
  {
    q: "Can we schedule refresher training for new dispatchers?",
    a: "Yes. In addition to our initial onboarding sessions, our team provides live video refresher sessions for newly hired dispatchers or office administrators upon request.",
  },
  {
    q: "How do we add or manage user seats?",
    a: "Account administrators can invite, update, or revoke access for internal dispatchers, drivers, and external subcontractors directly from the Admin Portal under Settings > User Management.",
  },
  {
    q: "What should a driver do if dockets aren't syncing?",
    a: "The HaulageOps driver app stores all photos and timestamps locally in an encrypted database. If the driver is in a remote quarry or low-reception area, data will automatically push to the dispatch server as soon as 3G/4G/5G or Wi-Fi reconnects.",
  },
];

export default function SupportPage() {
  return (
    <MainLayout showCta={false}>
      {/* 1. Hero Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-neutral-50/80 via-white to-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Support</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4">
              <Headphones className="h-3.5 w-3.5" />
              Customer Support & Operations Hub
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.08]">
              We&apos;re here when your fleet
              <span className="block text-[#E8652B] mt-2">needs answers fast.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl font-normal">
              Dedicated technical and operational support for dispatchers, fleet owners, and drivers. Access comprehensive documentation, training walkthroughs, and direct specialist assistance.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Priority Channel Cards */}
      <section className="py-16 bg-neutral-900 text-white border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {channelCards.map((ch) => {
              const IconComp = ch.icon;
              return (
                <div key={ch.title} className="bg-neutral-800/80 border border-neutral-700 rounded-2xl p-7 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#E8652B]/20 text-[#E8652B] flex items-center justify-center mb-4">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{ch.title}</h3>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">{ch.desc}</p>
                    <span className="inline-block mt-3 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                      {ch.status}
                    </span>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-700">
                    <Link href={ch.href} className="text-xs font-bold text-[#E8652B] hover:underline inline-flex items-center gap-1">
                      {ch.actionText} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Knowledge Base Categories */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Help Resources</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Browse by Operational Topic
            </h2>
            <p className="mt-3 text-neutral-600 text-base">
              Find fast answers and configuration guides for every part of your transport workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportCategories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="bg-white border border-neutral-200 rounded-2xl p-7 flex flex-col justify-between hover:border-[#E8652B]/70 transition-all shadow-xs"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-[#E8652B] flex items-center justify-center mb-5">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">{cat.title}</h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed font-normal">{cat.desc}</p>
                  </div>
                  <div className="mt-6 pt-5 border-t border-neutral-100">
                    <Link
                      href={cat.href}
                      className="text-xs font-bold text-[#E8652B] hover:text-[#D05520] inline-flex items-center gap-1"
                    >
                      <span>{cat.linkText}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FAQs */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common Questions</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-neutral-900">
              Frequently Asked Support Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border border-neutral-200 bg-neutral-50/50 rounded-2xl overflow-hidden shadow-xs"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-bold text-neutral-900 text-base list-none hover:bg-neutral-100/60 transition-colors">
                  <span>{faq.q}</span>
                  <ChevronRight className="h-5 w-5 text-neutral-400 shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed border-t border-neutral-200/60 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] mb-2 block">
              Still Need Help?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Connect directly with our support specialists.
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Our team responds to all operator enquiries within one business day. For existing fleets, contact your dedicated account lead.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-[#E8652B] hover:bg-[#D05520] text-white font-bold px-8 shadow-sm">
                Submit Support Request
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700 font-bold">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

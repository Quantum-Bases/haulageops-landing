import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Support Centre | HaulageOps",
  description:
    "HaulageOps support for existing customers — onboarding help, training resources, account management and technical support for haulage operators.",
};

const supportCards = [
  {
    title: "Getting Started",
    p: "New to HaulageOps? Your account manager schedules an onboarding session covering platform setup, first job creation, driver app installation, and Xero connection.",
    link: { label: "See Implementation Guide", href: "/implementation" },
  },
  {
    title: "Driver App Help",
    p: "Supporting your drivers on the HaulageOps mobile app — iOS and Android install, job acceptance, docket upload, break recording and proof of delivery.",
    link: { label: "Driver App Overview", href: "/platform/driver-app" },
  },
  {
    title: "Xero Integration",
    p: "Connecting HaulageOps with Xero — OAuth setup, invoice mapping, account codes, and troubleshooting sync errors.",
    link: { label: "Xero Integration Guide", href: "/platform/integrations/xero" },
  },
  {
    title: "Billing Questions",
    p: "Questions about your subscription, seat changes, or invoice history? Contact your account manager or reach our billing team via the contact form.",
    link: { label: "Contact Us", href: "/contact" },
  },
  {
    title: "Subcontractor Onboarding",
    p: "Onboarding your subcontractors onto the HaulageOps Subcontractor Portal — invitations, mobile setup, job acceptance and docket submission.",
    link: { label: "Onboarding Checklist", href: "/resources/checklists/subcontractor-onboarding" },
  },
  {
    title: "Account & Settings",
    p: "Managing users, permissions, rate cards, client access, document templates and compliance settings within your operator account.",
    link: { label: "Contact Support", href: "/contact" },
  },
];

const faqs = [
  {
    q: "How quickly do you respond to support requests?",
    a: "Standard requests are responded to within one business day. Critical issues affecting live operations are escalated with a 4-hour response window during business hours. Enterprise customers have priority support channels.",
  },
  {
    q: "Do you offer training for our team?",
    a: "Yes. Onboarding includes a live training session for your dispatch team. Additional sessions can be scheduled at any time. We maintain recorded walkthroughs for common workflows.",
  },
  {
    q: "How do I add or remove users from our account?",
    a: "Account administrators manage users directly from the Admin Portal. To adjust your subscription for additional seats, contact your account manager.",
  },
  {
    q: "What if a driver is having trouble with the app?",
    a: "Driver app issues are the most common support request. Most are resolved by reinstalling the app or resetting app permissions. Contact support and we'll walk your driver through it within one business day.",
  },
];

export default function SupportPage() {
  return (
    <MainLayout showCta={false}>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#FFF9F5] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Support Centre
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            We&apos;re Here When You Need Us
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Dedicated support for HaulageOps customers — onboarding, configuration, training and technical help.
          </p>
        </div>
      </section>

      {/* SUPPORT CARDS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p}</p>
                <Link href={card.link.href} className="mt-3 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  {card.link.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">Support FAQs</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Need help right now?</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Send us a message and your account manager will be in touch within one business day.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/contact">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "Digital Dockets Guide: Moving from Paper to Electronic Proof of Delivery | HaulageOps",
  description:
    "A complete guide to digital dockets for bulk haulage operators — what they are, how electronic POD replaces paper, what to capture at the point of delivery, and how dockets connect to invoicing.",
};

const paperProblems = [
  { strong: "Lost dockets", desc: "Paper goes missing between site and office — a missing docket means a missing invoice or a disputed claim" },
  { strong: "Illegible dockets", desc: "Field conditions, smudging and handwriting make dockets unreadable" },
  { strong: "Delay", desc: "Paper dockets collected at end of week push invoice cycles out to 3–4 weeks" },
  { strong: "Manual data entry", desc: "Someone has to type what's on the paper docket into your billing system" },
  { strong: "No audit trail", desc: "There's no timestamp proving when delivery happened or who received it" },
];

const digitalCaptures = [
  { strong: "Load weight", desc: "Entered by the driver or pulled from a weighbridge printout photo" },
  { strong: "Material type", desc: "What was delivered (aggregate, fill, concrete, waste, etc.)" },
  { strong: "Delivery location", desc: "Site name, or GPS coordinates captured automatically" },
  { strong: "Timestamp", desc: "Exact time of delivery, system-generated — not driver-entered" },
  { strong: "Docket photo", desc: "Photo of the supplier or weighbridge docket as a secondary record" },
  { strong: "Signature", desc: "Optional site signature or acceptance confirmation" },
  { strong: "Driver and truck", desc: "Automatically linked from the job record" },
];

const workflow = [
  {
    num: "STEP 1",
    title: "Job Created",
    p: "Dispatcher creates the job in the system — client, site, material, rate. Driver receives a job notification on their app.",
  },
  {
    num: "STEP 2",
    title: "Driver Accepts",
    p: "Driver accepts the job from their phone. The acceptance is timestamped and recorded against the job.",
  },
  {
    num: "STEP 3",
    title: "Load at Source",
    p: "Driver collects load from supplier or quarry. Photos weighbridge or supplier docket. Load weight entered in app.",
  },
  {
    num: "STEP 4",
    title: "Delivery & Docket",
    p: "Load delivered at site. Driver photographs site docket and enters any site-specific references. GPS and timestamp recorded automatically.",
  },
  {
    num: "STEP 5",
    title: "Docket Arrives in Office",
    p: "Docket appears in the Admin Portal in real time. Admin can see the delivery, the photo, and the weight — immediately, not at end of week.",
  },
  {
    num: "STEP 6",
    title: "Invoice Generated",
    p: "At end of billing period, completed dockets are pulled into the billing module. Invoice created against client rate card and pushed to Xero.",
  },
];

const faqs = [
  {
    q: "What is a digital docket in bulk haulage?",
    a: "A digital docket is an electronic record created at the point of delivery that captures load weight, material type, delivery location, timestamp, and a photo of the physical weighbridge or supplier docket. It replaces paper dockets and is stored in your operations system, linked directly to the job, driver, and client rate card.",
  },
  {
    q: "Do drivers need to scan paper dockets?",
    a: "No scanning is required. Drivers photograph the docket using their phone's camera from within the HaulageOps app. The photo is uploaded immediately and stored against the job record. The original paper docket stays at the site as a secondary record.",
  },
  {
    q: "What happens if a driver is in a low-coverage area?",
    a: "The HaulageOps driver app caches docket entries locally and syncs them when connectivity is restored. Drivers in remote or poor-coverage areas can still complete their docket entries — they'll upload when back in range.",
  },
  {
    q: "How do digital dockets reduce invoice delays?",
    a: "With paper dockets, invoicing waits until the dockets arrive at the office — often days or weeks. With digital dockets, every completed delivery appears in the billing system in real time. You can invoice at the end of the day rather than the end of the week.",
  },
  {
    q: "Can clients see the dockets?",
    a: "Yes, if you configure client portal access. Clients can log into their portal and see their delivery records and associated docket photos in real time — reducing client enquiries and building trust in your billing.",
  },
];

export default function DigitalDocketsGuidePage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb + Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#FFF9F5] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/resources" className="hover:text-[#E8652B]">Resources</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Digital Dockets Guide</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Guide · Proof of Delivery
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Digital Dockets: Moving from Paper to Electronic Proof of Delivery
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Paper dockets go missing. Digital dockets don't. This guide explains what a digital docket captures, how the workflow changes for drivers, and how electronic POD connects directly to faster invoicing.
          </p>
        </div>
      </section>

      {/* PROBLEM WITH PAPER / DIGITAL ALTERNATIVE */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Problem with Paper</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">Why Paper Dockets Cost Operators Money</h2>
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                In bulk haulage, the docket is the evidence. It's proof that a load was delivered, the weight that was carried, and the basis for the invoice. When that evidence is a piece of paper in a driver's cab, a lot can go wrong.
              </p>
              <ul className="mt-5 space-y-3">
                {paperProblems.map((item) => (
                  <li key={item.strong} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span><strong className="text-[#0F172A]">{item.strong}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The Digital Alternative</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">What a Digital Docket Captures</h2>
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                A digital docket replaces the paper record with a structured electronic entry created at the point of delivery. At minimum, a useful digital docket for bulk haulage captures:
              </p>
              <ul className="mt-5 space-y-3">
                {digitalCaptures.map((item) => (
                  <li key={item.strong} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span><strong className="text-[#0F172A]">{item.strong}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE DIGITAL DOCKET WORKFLOW */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">The Digital Docket Workflow</h2>
          <p className="mt-3 text-[#475569] leading-relaxed max-w-3xl">
            How a load moves from dispatch to docket to invoice in a digital system.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflow.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">{step.num}</span>
                <h3 className="mt-3 font-bold text-[#0F172A]">{step.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{step.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">Digital Dockets FAQs</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Still running on paper dockets?</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              See how digital dockets work in a 20-minute HaulageOps demo.
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
    </MainLayout>
  );
}

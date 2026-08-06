import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Book a HaulageOps Demo | 20-Minute Workflow Walkthrough",
  description:
    "Book a 20-minute demonstration of HaulageOps covering your real dispatch workflow, subcontractor coordination, digital POD, client portal and Xero invoicing.",
};

const kickerPills = [
  "20 minutes",
  "No sales pressure",
  "Recorded if helpful",
  "Proposal within 24 hours",
];

const lifecycleSteps = [
  {
    num: "01",
    title: "Job creation",
    before: "Create a job with client, origin, destination, material, quantity and job type. Rate auto-populates from the client's rate card. Recurring job and template options shown.",
  },
  {
    num: "02",
    title: "Rate and assignment",
    before: "Assign to an owned driver or push to the ",
    href: "/platform/subcontractor-portal",
    linkText: "subcontractor portal",
    after: " for a sub to accept. Separate client charge and subcontractor pay rates visible in one record.",
  },
  {
    num: "03",
    title: "Live tracking",
    before: "Real-time dispatch board. Driver updates status from the mobile app. Socket.io keeps the board live without a page refresh — loading, in transit, on site.",
  },
  {
    num: "04",
    title: "POD capture",
    before: "Driver captures photo, uploads docket, collects customer signature — all from the ",
    href: "/platform/driver-app",
    linkText: "driver app",
    after: ". Works offline; synchronises when connectivity returns.",
  },
  {
    num: "05",
    title: "Client portal view",
    before: "Switch to the ",
    href: "/platform/client-portal",
    linkText: "client portal",
    after: ". Client sees job status live, accesses the docket and POD photograph, and views their invoice when raised — without calling your office.",
  },
  {
    num: "06",
    title: "Invoice and Xero sync",
    before: "Raise the invoice — the docket is already attached. Sync to Xero via OAuth2. When the client pays in Xero, payment status updates back in HaulageOps automatically.",
  },
];

const attendPoints = [
  "Ops Manager or Director",
  "Head Dispatcher or fleet coordinator",
  "Finance or billing contact (for the Xero segment)",
];

const prepCards = [
  {
    title: "A typical job type",
    p: "Think of the job type you run most often — bulk earthworks, aggregate haulage, construction material movement, skip hire, or whatever your core work is. We'll use that as the job we create in the demo so the rates, materials and workflow match your reality.",
  },
  {
    title: "Your fleet size and mix",
    p: "Approximate numbers: how many owned vehicles, how many subcontractors you work with regularly, how many clients. This helps us set expectations on which plan tier makes sense and how the subcontractor portal would work for your network.",
  },
  {
    title: "Your current pain points",
    p: "What's breaking in your current system — spreadsheets, WhatsApp coordination, docket chasing, invoice delays, no client visibility. Knowing this lets us cover the specific parts of HaulageOps that address your problem directly.",
  },
];

const afterDemoPoints = [
  "Written proposal within 24 hours",
  "Implementation timeline: 2–4 weeks standard",
  "Rate card configuration included in setup",
  "Xero connection established during onboarding",
  "Go-live with your data, your rates, your workflow",
];

const fleetSizeOptions = [
  "Under 15 vehicles",
  "15–25 vehicles",
  "26–50 vehicles",
  "51–80 vehicles",
  "80+ vehicles",
];

const currentSystemOptions = [
  "Spreadsheets",
  "WhatsApp / phone coordination",
  "Another TMS",
  "Other",
];

const faqs = [
  {
    q: "Is this a sales call?",
    a: "No. The demo is a workflow walkthrough — we run through a real job on the platform, not a pitch deck. Our goal is to show you how HaulageOps handles the specific operational problems that are most relevant to your business. If HaulageOps isn't the right fit, we'll say so. We'd rather you know upfront than spend weeks in an implementation that doesn't land.",
  },
  {
    q: "Can I get a recording of the demo?",
    a: "Yes. Tell us at the start of the call and we'll record it. We'll send you the link after so you can review specific segments or share with team members who couldn't attend. Most people find it useful to have the Xero integration segment available to share with their finance team.",
  },
  {
    q: "Do I need to prepare anything?",
    a: "Nothing formal. It helps to come with a typical job type in mind so we can make the demo relevant, a rough sense of your fleet size and sub network, and any specific problems you're trying to solve — invoice delays, docket chasing, subcontractor coordination, client visibility. That's enough for a useful 20 minutes.",
  },
  {
    q: "How soon can we start after the demo?",
    a: (
      <>
        Standard implementation takes 2–4 weeks from confirmed start. We send a proposal within 24 hours of the demo. Once the setup fee is confirmed, the typical timeline is: Week 1 configuration and data load, Week 2 testing, Week 3 live with support, Week 4 stable operations. See the{" "}
        <Link href="/implementation" className="text-[#E8652B] hover:underline font-medium">implementation page</Link>{" "}
        for full detail.
      </>
    ),
  },
  {
    q: "What if HaulageOps doesn't fit my operation?",
    a: "We'll say so during the demo. HaulageOps is built for bulk haulage, earthworks, civil construction, quarry and aggregate, and tipper fleet operators managing 15–80 vehicles with a mix of owned and subcontracted capacity. It is not for parcel delivery, 3PL warehousing, or freight forwarding. If your operation falls outside that scope, we'll tell you clearly rather than try to force a fit.",
  },
  {
    q: "Can I bring my whole team to the demo?",
    a: "Yes, and we'd encourage it. The demo is most useful when the ops manager, lead dispatcher, and finance or billing contact are all in the session together. Decisions about operational software work better when the people who will actually use it can ask questions in real time.",
  },
];

export default function DemoPage() {
  return (
    <MainLayout showCta={false}>
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#FFF9F5] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Book a Demo</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4">
            20-Minute Demo
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1]">
            See your real operating workflow on HaulageOps.
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed">
            Not a generic walkthrough. We run through a job the way your operation actually works — from creation through to driver assignment, POD, client portal view, invoice, and Xero sync.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {kickerPills.map((pill) => (
              <span key={pill} className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6]">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What the demo covers</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">One end-to-end job. Every step of the workflow.</h2>
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                The demo follows a single job from creation through to Xero-synced invoice — the same path your dispatchers, drivers, subcontractors and clients travel every day. We move through each stage so you can see how the pieces connect, then slow down on the parts most relevant to your operation.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {lifecycleSteps.map((step) => (
                  <div key={step.num} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                    <span className="text-xs font-bold tracking-widest text-[#E8652B]">{step.num}</span>
                    <h3 className="mt-2 font-bold text-[#0F172A]">{step.title}</h3>
                    <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                      {step.before}
                      {step.href && (
                        <Link href={step.href} className="text-[#E8652B] hover:underline font-medium">{step.linkText}</Link>
                      )}
                      {step.after}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="rounded-2xl bg-[#0D1525] border border-[#1E293B] overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 bg-[#1E293B]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E8652B]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#94A3B8]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
                  <span className="ml-3 text-xs font-semibold text-[#CBD5E1]">Demo walkthrough — job lifecycle view</span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    Screenshot sequence: left panel shows dispatch board with one active job highlighted in orange; centre shows driver app POD capture screen with photo field, docket upload, and signature pad; right panel shows client portal invoice view with Paid status badge synced from Xero. Arrows connecting the three views left to right, labelled: Dispatch — Driver — Client.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-[#FED7AA] bg-[#FFF8F0] p-6 mt-6">
                <h3 className="font-bold text-[#92400E]">Who should attend the demo</h3>
                <p className="mt-2 text-sm text-[#78350F] leading-relaxed">
                  The demo works best when the people who actually run the operation are in the room — not just the person evaluating software.
                </p>
                <ul className="mt-4 space-y-2.5">
                  {attendPoints.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#78350F]">
                      <Check className="h-4 w-4 text-[#D97706] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-[#92400E]">30 minutes of your team's time is enough to know whether this fits your operation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Before the demo</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">What to have ready — and what we'll ask.</h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-2xl">
            You don't need a detailed brief. But having a few specifics in mind means we can make the demo relevant to your situation rather than generic.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {prepCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="text-lg font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Request your demo</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">20 minutes on a video call. Recorded if that's useful.</h2>
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                Fill in the form and we'll confirm a time within one business day. The demo runs on video call — Zoom, Teams, Google Meet, whatever works for your team. We can record it if you want to share it internally or revisit specific segments.
              </p>
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                After the demo we'll send a written proposal within 24 hours — covering the plan recommendation, setup fee, monthly subscription, and a 2–4 week implementation timeline. No pressure to decide immediately.
              </p>
              <div className="rounded-2xl border border-[#BBF7D0] bg-[#F0FDF4] p-6 mt-6">
                <p className="font-bold text-[#166534]">What happens after the demo</p>
                <ul className="mt-3 space-y-2.5">
                  {afterDemoPoints.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#166534]">
                      <Check className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 text-sm text-[#64748B]">
                See the <Link href="/implementation" className="text-[#E8652B] hover:underline font-medium">implementation page</Link> for the full onboarding timeline, or review <Link href="/pricing" className="text-[#E8652B] hover:underline font-medium">pricing</Link> before the call.
              </p>
            </div>
            <div>
              <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0]">
                <h3 className="text-xl font-bold text-[#0F172A] mb-6">Book your 20-minute demo</h3>
                <form action="#" method="post">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-semibold text-[#0F172A] mb-1.5">Full name *</label>
                    <input id="name" type="text" name="name" required placeholder="Your name" className="w-full px-3.5 py-2.5 border border-[#CBD5E1] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#E8652B]/40" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="company" className="block text-sm font-semibold text-[#0F172A] mb-1.5">Company name *</label>
                    <input id="company" type="text" name="company" required placeholder="Your company" className="w-full px-3.5 py-2.5 border border-[#CBD5E1] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#E8652B]/40" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold text-[#0F172A] mb-1.5">Work email *</label>
                    <input id="email" type="email" name="email" required placeholder="you@company.com" className="w-full px-3.5 py-2.5 border border-[#CBD5E1] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#E8652B]/40" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#0F172A] mb-1.5">Phone number</label>
                    <input id="phone" type="tel" name="phone" placeholder="+61 or +44 etc." className="w-full px-3.5 py-2.5 border border-[#CBD5E1] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#E8652B]/40" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="fleet_size" className="block text-sm font-semibold text-[#0F172A] mb-1.5">Approximate fleet size *</label>
                    <select id="fleet_size" name="fleet_size" required defaultValue="" className="w-full px-3.5 py-2.5 border border-[#CBD5E1] rounded-lg text-sm text-[#0F172A] bg-white focus:outline-none focus:ring-2 focus:ring-[#E8652B]/40">
                      <option value="" disabled>Select fleet size</option>
                      {fleetSizeOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="current_system" className="block text-sm font-semibold text-[#0F172A] mb-1.5">Current system</label>
                    <select id="current_system" name="current_system" defaultValue="" className="w-full px-3.5 py-2.5 border border-[#CBD5E1] rounded-lg text-sm text-[#0F172A] bg-white focus:outline-none focus:ring-2 focus:ring-[#E8652B]/40">
                      <option value="" disabled>What are you using now?</option>
                      {currentSystemOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                    Request demo
                  </Button>
                  <p className="mt-3 text-xs text-[#64748B] text-center">We confirm a time within 1 business day. No commitment required.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently asked questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">Demo questions answered.</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to see HaulageOps on your workflow?</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Fill in the form above or explore the platform first. Either way, we'll work around your schedule.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 shrink-0">
            <Link href="/platform">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Explore the platform
              </Button>
            </Link>
            <Link href="/pricing" className="text-[#94A3B8] hover:text-white underline text-sm font-semibold">
              See pricing →
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

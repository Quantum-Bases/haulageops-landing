import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Contact HaulageOps | Book a Demo or Get in Touch",
  description:
    "Contact HaulageOps to book a demo, ask about pricing, or get implementation support. We work with bulk haulage operators across Australia, New Zealand and the UK.",
};

const fleetSizeOptions = ["Select fleet size", "1–5 trucks", "6–15 trucks", "16–40 trucks", "40+ trucks"];

const enquiryOptions = [
  "Select an option",
  "Book a product demo",
  "Pricing information",
  "Implementation question",
  "Partnership enquiry",
  "General question",
];

const infoBoxes = [
  {
    title: "Implementation support",
    p: "Most operators go live within 2–4 weeks. We handle data migration, driver onboarding and configuration. ",
    linkHref: "/implementation",
    linkText: "See how it works →",
  },
  {
    title: "Pricing & trial",
    p: "Standard setup from $1,500. Monthly licensing from a low per-truck rate. ",
    linkHref: "/pricing",
    linkText: "See full pricing →",
  },
  {
    title: "Existing customers",
    p: "Already using HaulageOps? Visit our ",
    linkHref: "/support",
    linkText: "Support Centre",
  },
];

const inputClasses =
  "w-full px-3.5 py-2.5 border border-[#E2E8F0] rounded-lg text-sm text-[#0F172A] placeholder:text-[#94A3B8] bg-white focus:outline-none focus:ring-2 focus:ring-[#E8652B]/40 focus:border-[#E8652B]";
const labelClasses = "block text-[13px] font-bold text-[#475569] mb-1.5";

export default function ContactPage() {
  return (
    <MainLayout showCta={false}>
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#FFF9F5] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Contact</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-[1.1]">
            Talk to the HaulageOps Team
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-2xl leading-relaxed">
            Whether you want a live walkthrough, have a question about pricing, or are ready to start — we're here.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0]">
              <h2 className="text-xl font-bold text-[#0F172A]">Send us a message</h2>
              <p className="text-sm text-[#475569] -mt-1 mb-6">We respond to all enquiries within one business day.</p>
              <form>
                <div className="space-y-5">
                  <div>
                    <label className={labelClasses}>Your name</label>
                    <input type="text" placeholder="e.g. Sarah Mitchell" className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses}>Business name</label>
                    <input type="text" placeholder="e.g. Mitchell Bulk Haulage" className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses}>Email address</label>
                    <input type="email" placeholder="sarah@mitchellhaulage.com.au" className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses}>Fleet size</label>
                    <select className={inputClasses}>
                      {fleetSizeOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClasses}>What are you looking for?</label>
                    <select className={inputClasses}>
                      {enquiryOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClasses}>Tell us about your operation</label>
                    <textarea
                      placeholder="e.g. We run 12 tippers across three civil construction sites, currently using spreadsheets and WhatsApp for dispatch..."
                      className={`${inputClasses} min-h-[120px] resize-y`}
                    />
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold"
                  >
                    Send Message →
                  </Button>
                </div>
              </form>
            </div>

            <div className="space-y-5">
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">Book a 20-minute demo</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                  The fastest way to see HaulageOps. We'll walk through dispatch, job management, driver app, billing and Xero sync — tailored to your fleet.
                </p>
                <Link href="/demo" className="mt-4 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-bold">
                  Book a Demo → <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              {infoBoxes.map((box) => (
                <div key={box.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                  <h3 className="font-bold text-[#0F172A]">{box.title}</h3>
                  <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                    {box.p}
                    <Link href={box.linkHref} className="text-[#E8652B] hover:underline font-medium">{box.linkText}</Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to see HaulageOps in action?</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              Book a 20-minute demo and we'll walk through your specific workflow.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, MapPin, Phone } from "lucide-react";

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
  "w-full px-3.5 py-2.5 border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#E8652B]/40 focus:border-[#E8652B]";
const labelClasses = "block text-[13px] font-bold text-neutral-600 mb-1.5";

export default function ContactPage() {
  return (
    <MainLayout showCta={false}>
      <section className="pt-24 pb-16 bg-gradient-to-b from-neutral-50/80 via-white to-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Contact</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 text-[#E8652B] mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
            Talk to the HaulageOps Team
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Whether you want a live walkthrough, have a question about pricing, or are ready to start — we're here.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200">
              <h2 className="text-xl font-bold text-neutral-900">Send us a message</h2>
              <p className="text-sm text-neutral-600 -mt-1 mb-6">We respond to all enquiries within one business day.</p>
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
              <div className="bg-white rounded-2xl p-6 border border-neutral-200">
                <h3 className="font-bold text-neutral-900">Book a 20-minute demo</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  The fastest way to see HaulageOps. We'll walk through dispatch, job management, driver app, billing and Xero sync — tailored to your fleet.
                </p>
                <Link href="/demo" className="mt-4 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-bold">
                  Book a Demo → <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E8652B]" />
                  <h3 className="font-bold text-neutral-900 text-base">Sydney Head Office</h3>
                </div>
                <div className="space-y-3.5 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-neutral-900 text-xs uppercase tracking-wider">Business Address</p>
                      <p className="text-sm text-neutral-600 mt-0.5">2 Harris street, Guildford, 2161, NSW, Australia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-neutral-900 text-xs uppercase tracking-wider">Direct Phone</p>
                      <a href="tel:+61426887862" className="text-base font-extrabold text-[#E8652B] hover:underline mt-0.5 block">
                        +61 426 887 862
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {infoBoxes.map((box) => (
                <div key={box.title} className="bg-white rounded-2xl p-6 border border-neutral-200">
                  <h3 className="font-bold text-neutral-900">{box.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {box.p}
                    <Link href={box.linkHref} className="text-[#E8652B] hover:underline font-medium">{box.linkText}</Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to see HaulageOps in action?</h2>
            <p className="mt-2 text-neutral-400 text-sm leading-relaxed max-w-xl">
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

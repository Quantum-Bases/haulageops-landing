import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Partners | HaulageOps",
  description: "Partners page for HaulageOps.",
};

const templateBlocks = [
  {
    title: "1. Direct answer",
    p: "Clear explanation of the capability, problem or industry in the first screen.",
  },
  {
    title: "2. Operational problem",
    p: "What currently happens, who feels it and why the existing process breaks.",
  },
  {
    title: "3. HaulageOps workflow",
    p: "Step-by-step flow using confirmed product capabilities.",
  },
  {
    title: "4. Product evidence",
    p: "Real screenshots, practical examples and approved claims.",
  },
  {
    title: "5. FAQs and related pages",
    p: "Buyer questions, internal links and AEO-friendly answers.",
  },
  {
    title: "6. Conversion action",
    p: "Book a workflow-specific demonstration.",
  },
];

export default function PartnersPage() {
  return (
    <MainLayout showCta={false}>
      <section className="pt-24 pb-16 bg-gradient-to-b from-neutral-50/80 via-white to-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-medium">Partners</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200 mb-4">
            HaulageOps website architecture
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
            Partners
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-3xl leading-relaxed">
            This page is part of the approved HaulageOps website structure. Its final product-specific content will be added using the confirmed feature, positioning and SEO source documents.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 sm:p-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200">
              Structure approved · content in development
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-neutral-900">Planned page structure</h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {templateBlocks.map((block) => (
                <div key={block.title} className="bg-neutral-50/50 rounded-2xl p-5 border border-neutral-200">
                  <h3 className="font-bold text-neutral-900">{block.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{block.p}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl bg-orange-50 border border-orange-200 text-[#E8652B] border border-orange-200 p-4 text-sm text-neutral-600">
              This placeholder is intentionally marked <strong>noindex</strong> until the final content is complete.
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

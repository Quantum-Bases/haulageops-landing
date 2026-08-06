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
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#FFF9F5] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Partners</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4">
            HaulageOps website architecture
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-[1.1]">
            Partners
          </h1>
          <p className="mt-6 text-lg text-[#475569] max-w-3xl leading-relaxed">
            This page is part of the approved HaulageOps website structure. Its final product-specific content will be added using the confirmed feature, positioning and SEO source documents.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8 sm:p-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6]">
              Structure approved · content in development
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#0F172A]">Planned page structure</h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {templateBlocks.map((block) => (
                <div key={block.title} className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#E2E8F0]">
                  <h3 className="font-bold text-[#0F172A]">{block.title}</h3>
                  <p className="mt-2 text-sm text-[#475569] leading-relaxed">{block.p}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl bg-[#FFF0E6] border border-[#FED7AA] p-4 text-sm text-[#78350F]">
              This placeholder is intentionally marked <strong>noindex</strong> until the final content is complete.
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

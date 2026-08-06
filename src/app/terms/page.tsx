import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Terms of Service | HaulageOps",
  description:
    "HaulageOps Terms of Service — the agreement governing use of the HaulageOps haulage operations platform for operators, drivers, subcontractors and client users.",
};

export default function TermsPage() {
  return (
    <MainLayout showCta={false}>
      {/* Header */}
      <div className="pt-24 pb-8 bg-[#FFF9F5] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-4">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Terms of Service</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">Terms of Service</h1>
          <p className="mt-2 text-sm text-[#556671]">Last updated: January 2025</p>
        </div>
      </div>

      {/* Body */}
      <div className="py-10 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-5">
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the HaulageOps platform and website operated by HaulageOps (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). By accessing or using HaulageOps, you agree to be bound by these Terms.
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">1. The HaulageOps Platform</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            HaulageOps is a software-as-a-service platform designed for bulk haulage operators. It provides tools for job management, dispatch, driver management, subcontractor coordination, billing, compliance, and reporting. Access is provided on a subscription basis.
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">2. Subscription and Access</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            Access to HaulageOps requires a current subscription. Subscriptions are billed monthly or annually as agreed at sign-up. Your subscription covers the number of users and portals specified in your agreement. Additional users or features outside your plan may incur additional fees.
          </p>
          <ul className="list-disc pl-5 text-[15px] text-[#3D505C] leading-relaxed space-y-1.5">
            <li>Standard implementation fee: from $1,500 (one-time)</li>
            <li>Enterprise implementation: approximately $6,500 (one-time, scoped per engagement)</li>
            <li>Monthly licensing: per-truck rate as quoted at sign-up</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">3. Your Responsibilities</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">You are responsible for:</p>
          <ul className="list-disc pl-5 text-[15px] text-[#3D505C] leading-relaxed space-y-1.5">
            <li>Maintaining the confidentiality of account credentials</li>
            <li>Ensuring all data entered into HaulageOps is accurate and lawful</li>
            <li>Compliance with all applicable laws in your use of the platform, including the Heavy Vehicle National Law (HVNL) and Chain of Responsibility obligations</li>
            <li>Managing user access within your operator account</li>
            <li>Ensuring subcontractors and drivers use the platform in accordance with these Terms</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">4. Acceptable Use</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">You agree not to use HaulageOps to:</p>
          <ul className="list-disc pl-5 text-[15px] text-[#3D505C] leading-relaxed space-y-1.5">
            <li>Enter false, misleading or fraudulent data</li>
            <li>Attempt to gain unauthorised access to any other operator&apos;s account or data</li>
            <li>Interfere with the platform&apos;s operation or security</li>
            <li>Reverse engineer or attempt to extract the platform&apos;s source code</li>
            <li>Use the platform for any unlawful purpose</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">5. Data Ownership</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            You own the data you enter into HaulageOps. We do not sell or share your operational data with third parties. We process your data solely to provide the platform service. See our <Link href="/privacy" className="text-[#0F5FAE] hover:underline">Privacy Policy</Link> for full details.
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">6. Uptime and Service Levels</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            We target 99.9% platform uptime, excluding scheduled maintenance. Scheduled maintenance is communicated in advance. We are not liable for interruptions caused by third-party infrastructure, internet connectivity, or events outside our reasonable control.
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">7. Integrations</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            The Xero integration is provided as-is and subject to Xero&apos;s own terms and API availability. We are not liable for interruptions to third-party integrations caused by changes to those platforms.
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">8. Limitation of Liability</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            To the maximum extent permitted by law, HaulageOps&apos; liability for any claim arising from use of the platform is limited to the fees paid in the 12 months preceding the claim. We are not liable for indirect, consequential, or punitive damages. HaulageOps is a dispatch and operations management tool — it is not a compliance advisory service and does not guarantee your compliance with HVNL or Chain of Responsibility obligations.
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">9. Termination</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            Either party may terminate the subscription with 30 days&apos; written notice. We may suspend access immediately for breach of these Terms. On termination, we will provide a data export before deleting account data per our data retention policy.
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">10. Governing Law</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            These Terms are governed by the laws of New South Wales, Australia. Any disputes will be subject to the exclusive jurisdiction of the courts of New South Wales.
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">11. Changes to These Terms</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            We may update these Terms from time to time. We will provide 30 days&apos; notice of material changes. Continued use of the platform after notice constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">12. Contact</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            For questions about these Terms, please <Link href="/contact" className="text-[#0F5FAE] hover:underline">contact us</Link>.
          </p>

          <p className="pt-6 mt-4 border-t border-[#E2E8F0] text-[13px] text-[#7A8A94]">
            Also see: <Link href="/privacy" className="text-[#0F5FAE] hover:underline">Privacy Policy</Link> · <Link href="/cookies" className="text-[#0F5FAE] hover:underline">Cookie Policy</Link> · <Link href="/security" className="text-[#0F5FAE] hover:underline">Security</Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

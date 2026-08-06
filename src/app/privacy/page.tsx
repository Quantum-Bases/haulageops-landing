import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | HaulageOps",
  description:
    "HaulageOps Privacy Policy — how we collect, use and protect personal information for haulage operators, drivers, subcontractors and clients using our platform.",
};

export default function PrivacyPage() {
  return (
    <MainLayout showCta={false}>
      {/* Header */}
      <div className="pt-24 pb-8 bg-[#FFF9F5] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-4">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">Privacy Policy</h1>
          <p className="mt-2 text-sm text-[#556671]">Last updated: January 2025</p>
        </div>
      </div>

      {/* Body */}
      <div className="py-10 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-5">
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            HaulageOps (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting the personal information of everyone who uses our platform — including haulage operators, dispatchers, drivers, subcontractors and clients. This Privacy Policy explains how we collect, use, store and protect personal information in connection with the HaulageOps platform and website (haulageops.com).
          </p>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            This policy applies to all users of HaulageOps and is governed by the <strong>Australian Privacy Act 1988 (Cth)</strong> and the Australian Privacy Principles (APPs).
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">1. What Information We Collect</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">We collect personal information necessary to provide the HaulageOps platform. This includes:</p>
          <ul className="list-disc pl-5 text-[15px] text-[#3D505C] leading-relaxed space-y-1.5">
            <li><strong>Operator/admin users:</strong> Name, email address, phone number, business name and ABN, billing information</li>
            <li><strong>Drivers:</strong> Name, contact details, licence details, vehicle assignment records, break and fatigue records, job completion data, docket uploads</li>
            <li><strong>Subcontractors:</strong> Business name, ABN, contact details, rate agreements, job allocation records, docket submissions</li>
            <li><strong>Client portal users:</strong> Name, email address, job visibility records as defined by the operator</li>
            <li><strong>Website visitors:</strong> Standard web analytics (page views, session duration, referral source), IP address, browser type</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 text-[15px] text-[#3D505C] leading-relaxed space-y-1.5">
            <li>To provide and operate the HaulageOps platform</li>
            <li>To process job assignments, billing and invoicing</li>
            <li>To maintain compliance and audit trail records</li>
            <li>To communicate with you about your account and support requests</li>
            <li>To improve the platform and develop new features</li>
            <li>To comply with legal obligations, including under the Heavy Vehicle National Law (HVNL) where applicable</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">3. Data Storage and Security</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            Your data is stored on enterprise cloud infrastructure located in Australia. We implement AES-256 encryption at rest and TLS 1.3 in transit. Access to your data is restricted by role-based permissions and full audit logging. See our <Link href="/security" className="text-[#0F5FAE] hover:underline">Security page</Link> for full details.
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">4. Third-Party Services</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            HaulageOps integrates with Xero via OAuth 2.0. When you connect your Xero account, Xero handles authentication and we receive only the access token required to push invoice data. We do not store your Xero credentials. We use standard analytics and infrastructure services, all selected for compliance with Australian privacy requirements.
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">5. Data Retention</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            We retain your data for as long as your account is active and for a period thereafter as required by law or as specified in your subscription agreement. Job records, compliance documents and invoice data may be subject to retention requirements under applicable legislation. You may request deletion of your personal information by contacting us, subject to these legal obligations.
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">6. Your Rights</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            Under the Australian Privacy Act, you have the right to access personal information we hold about you, request corrections, and complain if you believe your privacy has been breached. To exercise these rights, contact us at our <Link href="/contact" className="text-[#0F5FAE] hover:underline">contact page</Link>.
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">7. Changes to This Policy</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify active account holders of material changes via email. The current version is always available at haulageops.com/privacy/.
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">8. Contact</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            For privacy enquiries, please use our <Link href="/contact" className="text-[#0F5FAE] hover:underline">contact form</Link> or write to our Privacy Officer at the address registered with the platform.
          </p>

          <p className="pt-6 mt-4 border-t border-[#E2E8F0] text-[13px] text-[#7A8A94]">
            Also see: <Link href="/terms" className="text-[#0F5FAE] hover:underline">Terms of Service</Link> · <Link href="/cookies" className="text-[#0F5FAE] hover:underline">Cookie Policy</Link> · <Link href="/security" className="text-[#0F5FAE] hover:underline">Security</Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

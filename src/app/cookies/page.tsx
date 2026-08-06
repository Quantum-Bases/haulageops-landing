import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Cookie Policy | HaulageOps",
  description:
    "HaulageOps Cookie Policy — how we use cookies and similar technologies on the HaulageOps website and platform.",
};

const cookieRows = [
  {
    type: "Essential",
    purpose: "Required for the platform to function — session management, authentication tokens, security",
    duration: "Session / up to 30 days",
  },
  {
    type: "Functional",
    purpose: "Remember your preferences such as language, UI settings, and last-viewed reports",
    duration: "Up to 12 months",
  },
  {
    type: "Analytics",
    purpose:
      "Help us understand how the website is used — page views, session length, referral source. We use privacy-respecting analytics that do not share data with advertising networks.",
    duration: "Up to 12 months",
  },
];

export default function CookiesPage() {
  return (
    <MainLayout showCta={false}>
      {/* Header */}
      <div className="pt-24 pb-8 bg-[#FFF9F5] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-4">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Cookie Policy</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">Cookie Policy</h1>
          <p className="mt-2 text-sm text-[#556671]">Last updated: January 2025</p>
        </div>
      </div>

      {/* Body */}
      <div className="py-10 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-5">
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            This Cookie Policy explains how HaulageOps uses cookies and similar technologies on our website (haulageops.com) and within the HaulageOps platform. It should be read alongside our <Link href="/privacy" className="text-[#0F5FAE] hover:underline">Privacy Policy</Link>.
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">What Are Cookies?</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            Cookies are small text files stored on your device when you visit a website. They are used to remember your preferences, keep you logged in, and help us understand how the website is used.
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">Cookies We Use</h2>
          <div className="overflow-x-auto rounded-xl border border-[#E2E8F0]">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-extrabold uppercase tracking-wider text-[#E8652B] bg-[#0D1525]">Cookie Type</th>
                  <th className="px-4 py-3 text-left text-xs font-extrabold uppercase tracking-wider text-[#E8652B] bg-[#0D1525]">Purpose</th>
                  <th className="px-4 py-3 text-left text-xs font-extrabold uppercase tracking-wider text-[#E8652B] bg-[#0D1525]">Duration</th>
                </tr>
              </thead>
              <tbody>
                {cookieRows.map((row) => (
                  <tr key={row.type} className="even:bg-[#F9FAFB]">
                    <td className="px-4 py-3 border-b border-[#EEF1F3] align-top text-sm"><strong className="text-[#0F172A]">{row.type}</strong></td>
                    <td className="px-4 py-3 border-b border-[#EEF1F3] align-top text-sm text-[#2D4250]">{row.purpose}</td>
                    <td className="px-4 py-3 border-b border-[#EEF1F3] align-top text-sm text-[#2D4250]">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">What We Don&apos;t Use</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            HaulageOps does not use advertising cookies, retargeting pixels, or social media tracking cookies. We do not share cookie data with advertising platforms.
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">Managing Cookies</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            Essential cookies cannot be disabled without affecting the platform&apos;s functionality. You can disable analytics and functional cookies through your browser settings. Most browsers allow you to block or delete cookies — refer to your browser&apos;s help documentation for instructions.
          </p>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            Note that disabling certain cookies may affect your experience of the platform — for example, you may need to log in more frequently.
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">Changes to This Policy</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            We may update this Cookie Policy from time to time. The current version is always available at haulageops.com/cookies/.
          </p>

          <h2 className="text-xl font-bold text-[#0F172A] pt-4">Contact</h2>
          <p className="text-[15px] text-[#3D505C] leading-relaxed">
            For questions about this policy, please <Link href="/contact" className="text-[#0F5FAE] hover:underline">contact us</Link>.
          </p>

          <p className="pt-6 mt-4 border-t border-[#E2E8F0] text-[13px] text-[#7A8A94]">
            Also see: <Link href="/privacy" className="text-[#0F5FAE] hover:underline">Privacy Policy</Link> · <Link href="/terms" className="text-[#0F5FAE] hover:underline">Terms of Service</Link> · <Link href="/security" className="text-[#0F5FAE] hover:underline">Security</Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

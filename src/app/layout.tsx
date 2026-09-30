import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bulk Haulage Delivery Management Software for Tippers, Earthworks & Civil | HaulageOps",
  description:
    "Cloud-native bulk haulage delivery management software for Australian and New Zealand tipper, earthworks, and civil operators. Live dispatch, subcontractor portal, digital POD, and automated invoicing.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  keywords: [
    "bulk haulage delivery management software",
    "bulk haulage software Australia",
    "bulk haulage software New Zealand",
    "bulk haulage delivery management",
    "bulk transport management system Australia",
    "Australian bulk haulage TMS",
    "tipper truck management software",
    "quarry transport software Australia",
    "earthworks logistics software",
    "haulage dispatch software",
    "subcontractor portal",
    "digital POD",
    "CoR compliance software Australia",
    "weighbridge docket software",
    "transport management system Australia",
    "transport management system New Zealand",
    "MyTrucking alternative",
    "Allotrac alternative",
    "M2X alternative",
  ],
  authors: [{ name: "HaulageOps" }],
  openGraph: {
    title: "Bulk Haulage Delivery Management Software for Tippers, Earthworks & Civil | HaulageOps",
    description:
      "Run dispatch, subcontractors, dockets and invoicing from one place. Purpose-built bulk haulage delivery management software for Australian and New Zealand operators.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "SoftwareApplication",
                  "name": "HaulageOps",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Web, iOS, Android",
                  "description":
                    "Cloud-native bulk haulage delivery management software for Australian and New Zealand tipper, earthworks, and civil operators.",
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "AUD",
                  },
                  "areaServed": [
                    {
                      "@type": "Country",
                      "name": "Australia",
                    },
                    {
                      "@type": "Country",
                      "name": "New Zealand",
                    },
                  ],
                },
                {
                  "@type": "Organization",
                  "name": "HaulageOps Pty Ltd",
                  "url": "https://haulageops.com",
                  "logo": "https://haulageops.com/HaulageOps_Wordmark_Black.png",
                  "telephone": "+61 426 887 862",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "2 Harris street",
                    "addressLocality": "Guildford",
                    "addressRegion": "NSW",
                    "postalCode": "2161",
                    "addressCountry": "AU"
                  }
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "We already have GPS or telematics. Does HaulageOps replace it?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                          "Keep it. HaulageOps is not intended to replace your vehicle GPS or telematics hardware. It manages the operational workflow around the job: dispatch, driver and subcontractor coordination, POD, client visibility, rate cards, and Xero invoicing.",
                      },
                    },
                    {
                      "@type": "Question",
                      "name": "Does HaulageOps integrate with Xero?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                          "Yes. HaulageOps features a native two-way integration with Xero via OAuth2, syncing approved invoices automatically and tracking payment status back into the platform via real-time webhooks.",
                      },
                    },
                    {
                      "@type": "Question",
                      "name": "Does the driver app work without mobile signal or in quarries?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                          "Yes. The HaulageOps driver app is built offline-first. Drivers can advance job statuses, photograph weighbridge dockets, and capture touchscreen customer signatures in quarries or rural corridors with zero signal. All data queues locally and synchronises automatically when connectivity returns.",
                      },
                    },
                    {
                      "@type": "Question",
                      "name": "Do subcontractors need to pay for a HaulageOps licence?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                          "No. Subcontractors receive dedicated portal access provided through your HaulageOps environment at no cost to them and no per-seat licence fee to the operator.",
                      },
                    },
                    {
                      "@type": "Question",
                      "name": "Who is HaulageOps built for?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                          "HaulageOps is built specifically for bulk haulage, tipper fleets, earthworks, quarry and aggregate transport, and civil construction logistics managing owned and subcontracted trucks across Australia and New Zealand.",
                      },
                    },
                    {
                      "@type": "Question",
                      "name": "How does HaulageOps compare to MyTrucking for bulk haulage?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                          "Unlike MyTrucking, which is a general freight platform requiring subcontractors to also be paying subscribers for job sharing, HaulageOps is purpose-built for bulk haulage with an open subcontractor portal that is 100% free for external subbies, dual-tier rate engines (client charge vs subbie pay), and offline quarry driver sync.",
                      },
                    },
                    {
                      "@type": "Question",
                      "name": "How does HaulageOps compare to spreadsheets and WhatsApp?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                          "Spreadsheets and WhatsApp work well for 1 to 5 vehicles, but break down as fleets grow. HaulageOps replaces manual coordination with a unified job record: real-time dispatch tracking, offline mobile POD capture, subcontractor self-service, client transparency, and automated Xero invoicing.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
        {/* Preload Hero LCP Images for instant visual paint */}
        <link
          rel="preload"
          as="image"
          href="/dash1-hero.webp"
          type="image/webp"
          fetchPriority="high"
          media="(min-width: 769px)"
        />
        <link
          rel="preload"
          as="image"
          href="/dash1-mobile.webp"
          type="image/webp"
          fetchPriority="high"
          media="(max-width: 768px)"
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />

        {/* Third-Party Analytics - loaded afterInteractive to never block LCP or INP */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RBWZV5M51E"
          strategy="afterInteractive"
        />
        <Script
          id="google-tag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RBWZV5M51E');
            `,
          }}
        />
        <Script
          id="clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ynrkkwhkes");
            `,
          }}
        />
        <Script src="/tracker.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}

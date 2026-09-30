import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Bulk Haulage Delivery Management Software for Tippers, Earthworks & Civil | HaulageOps",
  description:
    "Cloud-native bulk haulage delivery management software for tipper, quarry, earthworks, and heavy civil fleets. Live dispatch, subcontractor portal, digital POD, and automated invoicing.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
      "Run dispatch, subcontractors, dockets and invoicing from one place. Purpose-built bulk haulage delivery management software for tipper, quarry, and heavy civil fleets.",
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
        {/* Preload Above-the-fold Hero Background & Mockup for Instant LCP */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg-mobile.webp"
          type="image/webp"
          fetchPriority="high"
          media="(max-width: 768px)"
        />
        <link
          rel="preload"
          as="image"
          href="/dash1-hero.webp"
          type="image/webp"
          fetchPriority="high"
          media="(min-width: 769px)"
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <WhatsAppButton />

        {/* Smart-Loaded Google Analytics (173.5 KB delayed until user interaction/idle to save 37% JS) */}
        <Script
          id="smart-gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-RBWZV5M51E', { send_page_view: true });

              (function() {
                var loaded = false;
                function loadGtag() {
                  if (loaded) return;
                  loaded = true;
                  ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(function(ev) {
                    window.removeEventListener(ev, loadGtag);
                  });
                  var s = document.createElement('script');
                  s.async = true;
                  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-RBWZV5M51E';
                  document.head.appendChild(s);
                }

                ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(function(ev) {
                  window.addEventListener(ev, loadGtag, { passive: true, once: true });
                });

                // 3.5s idle fallback if no immediate interaction
                setTimeout(loadGtag, 3500);
              })();
            `,
          }}
        />
        <Script
          id="clarity-init"
          strategy="lazyOnload"
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
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HaulageOps - The TMS for Bulk Haulage Operators",
  description:
    "HaulageOps is the transport management system built for bulk haulage and construction logistics: live job tracking, digital POD, a native subcontractor portal, client visibility, rate cards, invoicing, and audit-ready records on one platform.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  keywords: [
    "TMS",
    "transport management system",
    "bulk haulage",
    "construction logistics",
    "subcontractor portal",
    "digital POD",
    "fleet management",
    "Australia",
    "earthworks",
    "quarry logistics",
  ],
  authors: [{ name: "HaulageOps" }],
  openGraph: {
    title: "HaulageOps — The TMS for Bulk Haulage Operators",
    description:
      "Live job tracking, digital POD, native subcontractor portal, client visibility, and audit-ready records on one platform.",
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
      <body
        className={`${plusJakarta.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

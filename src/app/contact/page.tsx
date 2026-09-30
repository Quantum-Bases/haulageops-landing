"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { ChevronRight, ArrowRight, MapPin, Phone, MessageSquare, Mail, Clock, Calendar, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/button";

const infoBoxes = [
  {
    title: "Implementation & Onboarding",
    p: "Most fleets go live within 2–4 weeks. Our team configures your rate cards, loads driver records, and connects your Xero organization.",
    linkHref: "/implementation",
    linkText: "See onboarding timeline →",
  },
  {
    title: "Fleet Pricing & Proposals",
    p: "Custom tailored proposals based on your active fleet size and operational workflow. Zero per-user penalties for internal dispatchers.",
    linkHref: "/pricing",
    linkText: "Explore pricing model →",
  },
  {
    title: "Existing Operator Support",
    p: "Already operating on HaulageOps? Contact our dedicated Australian operations support team or check technical guides.",
    linkHref: "/support",
    linkText: "Visit Support Centre →",
  },
];

const contactFaqs = [
  {
    q: "How quickly does the HaulageOps team respond to enquiries?",
    a: "We respond to all form submissions and emails within one business day (AEST). For urgent fleet or operational matters, you can reach out directly via our verified Sydney phone line or WhatsApp.",
  },
  {
    q: "Can we schedule a live software demonstration via this form?",
    a: "Yes. Simply mention that you would like a walkthrough in your message, or visit our dedicated demo booking page to pick an instant 20-minute slot on Calendly.",
  },
  {
    q: "Where is HaulageOps based?",
    a: "Our headquarters is located in Guildford, Sydney, NSW, Australia. We support operators across Australia, New Zealand, and international bulk logistics markets.",
  },
];

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <MainLayout showCta={false}>
      {/* ── Hero Section ── */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-neutral-50 via-white to-white text-neutral-900 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#E8652B] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-900 font-bold">Contact</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 border border-orange-200/80 mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Operational Support</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.1]">
              Talk to the <span className="text-[#E8652B]">HaulageOps</span> Team.
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-neutral-600 leading-relaxed font-normal">
              Whether you want a live walkthrough tailored to your fleet, have questions regarding rate cards and Xero
              sync, or are ready to transition off spreadsheets — we are here to help.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-neutral-100 text-neutral-700 border border-neutral-200">
                <MapPin className="w-3.5 h-3.5 text-[#E8652B]" /> Sydney NSW Headquarters
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-neutral-100 text-neutral-700 border border-neutral-200">
                <Clock className="w-3.5 h-3.5 text-[#E8652B]" /> 1 Business Day Response
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-neutral-100 text-neutral-700 border border-neutral-200">
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" /> Direct WhatsApp Available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Form & Contact Information Grid ── */}
      <section className="py-20 bg-neutral-50/60 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
            {/* Left: Contact Form Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-neutral-200 shadow-xl shadow-neutral-200/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E8652B]" />
                  <h2 className="text-2xl font-black text-neutral-900">Send an Enquiry</h2>
                </div>
                <span className="text-xs font-bold text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-md">
                  Confidential
                </span>
              </div>
              <p className="text-sm text-neutral-600 mb-8 leading-relaxed">
                Fill in your details below. Our operations specialists evaluate your haulage profile and reply within one business day.
              </p>
              <ContactForm />
            </div>

            {/* Right: Direct Channels & Information Cards */}
            <div className="space-y-6">
              {/* Direct Booking Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200 shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-[#E8652B]" />
                  <h3 className="font-black text-neutral-900 text-lg">Prefer a Live Video Walkthrough?</h3>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  The fastest way to understand HaulageOps. We review your dispatch workflow, driver app docket capture,
                  and automated Xero invoicing in a 20-minute screen share.
                </p>
                <div className="mt-5">
                  <Link href="/demo">
                    <Button
                      size="lg"
                      className="w-full bg-[#E8652B] hover:bg-[#D05520] text-white font-bold py-5 text-sm rounded-xl shadow-xs cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Pick a Demo Time on Calendly</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Head Office & Phone Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200 shadow-xs space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8652B]" />
                    <h3 className="font-bold text-neutral-900 text-base">Sydney Head Office</h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    Open Mon–Fri
                  </span>
                </div>

                <div className="space-y-4 text-sm">
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
                      <a
                        href="tel:+61426887862"
                        className="text-base font-extrabold text-[#E8652B] hover:underline mt-0.5 block"
                      >
                        +61 426 887 862
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-neutral-900 text-xs uppercase tracking-wider">Direct Email</p>
                      <a
                        href="mailto:admin@haulageops.com"
                        className="text-sm font-semibold text-neutral-800 hover:text-[#E8652B] hover:underline mt-0.5 block"
                      >
                        admin@haulageops.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-100">
                  <a
                    href="https://wa.me/61426887862?text=Hi%20HaulageOps%2C%20I'd%20like%20to%20speak%20with%20someone%20from%20your%20team."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-bold text-xs transition-colors border border-[#25D366]/30"
                  >
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span>Chat Directly on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Informational Cards */}
              <div className="space-y-4">
                {infoBoxes.map((box) => (
                  <div key={box.title} className="bg-white rounded-2xl p-5 border border-neutral-200 shadow-xs">
                    <h4 className="font-bold text-neutral-900 text-sm">{box.title}</h4>
                    <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed font-normal">
                      {box.p}
                    </p>
                    <Link
                      href={box.linkHref}
                      className="mt-2.5 inline-flex items-center gap-1 text-xs font-bold text-[#E8652B] hover:underline"
                    >
                      {box.linkText}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Need Help?
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Frequently asked contact questions
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              Straightforward answers about reaching our team and getting support.
            </p>
          </div>

          <div className="space-y-3.5">
            {contactFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left font-bold text-neutral-900 text-sm sm:text-base cursor-pointer hover:bg-neutral-50/60 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronRight
                      className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-90 text-[#E8652B]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Dark Bottom CTA ── */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Ready to see HaulageOps in action?</h2>
            <p className="mt-2 text-neutral-400 text-sm leading-relaxed max-w-xl">
              Book a 20-minute tailored walkthrough and we'll show you how HaulageOps runs your exact bulk logistics workflow.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-bold px-7 py-6 text-sm rounded-xl shadow-md cursor-pointer">
                Book a Demo →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

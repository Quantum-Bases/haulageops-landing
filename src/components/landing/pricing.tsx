"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Lock } from "lucide-react";

const plans = [
  {
    name: "Standard",
    price: "Per vehicle",
    description: "Priced per truck. Free for every subbie and client you invite.",
    features: [
      "All five portals included",
      "Unlimited subcontractor logins (free)",
      "Unlimited client portal access (free)",
      "Driver mobile app (iOS + Android)",
      "Xero integration",
      "Rate management and invoicing",
      "Audit trail and document management",
      "Email support",
    ],
    cta: "Book a demo",
    highlight: true,
  },
  {
    name: "Setup",
    price: "$1,500",
    description:
      "One-time. Covers migrating your data, building your rate cards, onboarding your subbies, connecting Xero, and training your team. You go live with a working system, not an empty login.",
    features: [
      "Data migration from spreadsheets",
      "Rate card build",
      "Subcontractor onboarding",
      "Xero connection",
      "Team training",
    ],
    cta: "Included with signup",
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "From ~$6,500",
    description:
      "Scoped to your operation. Multi-depot, complex migration, custom integrations.",
    features: [
      "Everything in Standard",
      "Multi-depot support",
      "Complex data migration",
      "Custom integration scoping",
      "Dedicated onboarding manager",
      "Priority support",
    ],
    cta: "Contact us",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28" style={{ background: "#F7F2EE" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <div
            className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full mb-4 border"
            style={{ background: "#FAEDE7", borderColor: "#E8D5C4" }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#D86D3C" }}
            />
            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#D86D3C" }}
            >
              Pricing
            </p>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
            style={{ color: "#202020" }}
          >
            Priced per truck. Free for every subbie and client you invite.
          </h2>
          <p
            className="mt-5 text-base sm:text-lg leading-relaxed"
            style={{ color: "#5C5047" }}
          >
            External parties — subcontractors and clients — pay nothing. This
            is a deliberate differentiation, not just a pricing mechanic.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`rounded-2xl border-2 p-6 sm:p-8 flex flex-col transition-all duration-300 hover:shadow-lg ${
                plan.highlight ? "" : ""
              }`}
              style={{
                background: "#FEFBF9",
                borderColor: plan.highlight ? "#D86D3C" : "#E8D5C4",
              }}
            >
              {plan.highlight && (
                <span
                  className="self-start mb-4 text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1 border"
                  style={{
                    background: "#FAEDE7",
                    borderColor: "#E8BEAA",
                    color: "#D86D3C",
                  }}
                >
                  Core plan
                </span>
              )}
              <h3
                className="text-lg font-bold"
                style={{ color: "#202020" }}
              >
                {plan.name}
              </h3>
              <p
                className="mt-1 text-2xl font-black"
                style={{ color: "#202020" }}
              >
                {plan.price}
              </p>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "#5C5047" }}
              >
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 mt-0.5"
                      style={{ color: "#D86D3C" }}
                    />
                    <span className="text-sm" style={{ color: "#202020" }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-2.5 px-4 rounded-xl text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                  plan.highlight
                    ? "text-white"
                    : "border"
                }`}
                style={
                  plan.highlight
                    ? { background: "#D86D3C" }
                    : { borderColor: "#D86D3C", color: "#D86D3C", background: "transparent" }
                }
                onMouseEnter={(e) => {
                  if (plan.highlight) {
                    (e.currentTarget as HTMLButtonElement).style.background = "#A8552E";
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.highlight) {
                    (e.currentTarget as HTMLButtonElement).style.background = "#D86D3C";
                  }
                }}
              >
                {plan.highlight && <ArrowRight className="h-4 w-4" />}
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Founding customer tier */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 max-w-2xl"
        >
          <div
            className="rounded-2xl border-2 p-6 sm:p-8 relative overflow-hidden"
            style={{ background: "#FAEDE7", borderColor: "#D86D3C" }}
          >
            {/* Decorative */}
            <div
              className="absolute -right-6 -top-6 w-28 h-28 rounded-full opacity-20"
              style={{ background: "#D86D3C" }}
            />
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <Lock className="h-4 w-4" style={{ color: "#D86D3C" }} />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#D86D3C" }}
                >
                  Founding customer tier
                </span>
              </div>
              <h3
                className="text-xl font-black mb-2"
                style={{ color: "#202020" }}
              >
                A$5,000/year or A$500/month
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#5C5047" }}>
                Up to 50 vehicles, 24-month price lock, three requested
                improvements assessed for priority each quarter. Available to
                early adopters.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

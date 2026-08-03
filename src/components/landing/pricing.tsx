"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Lock, Truck } from "lucide-react";

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
    primary: false,
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
    primary: false,
    isSetup: true,
  },
  {
    name: "Enterprise",
    price: "From ~$6,500",
    description: "Scoped to your operation. Multi-depot, complex migration, custom integrations.",
    features: [
      "Everything in Standard",
      "Multi-depot support",
      "Complex data migration",
      "Custom integration scoping",
      "Dedicated onboarding manager",
      "Priority support",
    ],
    cta: "Contact us",
    primary: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Priced per truck. Free for every subbie and client you invite.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            External parties — subcontractors and clients — pay nothing. This
            is a deliberate differentiation, not just a pricing mechanic.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className={`rounded-xl border p-6 sm:p-8 flex flex-col ${
                plan.isSetup
                  ? "bg-white border-border"
                  : "bg-white border-border hover:shadow-lg transition-shadow duration-300"
              }`}
            >
              {plan.name === "Standard" && (
                <Badge className="self-start mb-4 bg-[#E8652B]/10 text-[#E8652B] border-[#E8652B]/20 hover:bg-[#E8652B]/15">
                  Core plan
                </Badge>
              )}
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-2xl font-bold text-foreground">{plan.price}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-8 w-full ${
                  plan.name === "Standard"
                    ? "bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold"
                    : "bg-foreground hover:bg-foreground/90 text-background font-medium"
                }`}
                variant={plan.name === "Standard" ? "default" : "default"}
              >
                {plan.name === "Standard" && (
                  <ArrowRight className="mr-2 h-4 w-4" />
                )}
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Founding customer tier */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="bg-[#0B1120] rounded-xl p-6 sm:p-8 text-white text-center">
            <Badge className="mb-4 bg-[#E8652B]/20 text-[#E8652B] border-[#E8652B]/30 hover:bg-[#E8652B]/25">
              <Lock className="h-3 w-3 mr-1.5" />
              Founding customer tier
            </Badge>
            <h3 className="text-xl font-bold mb-2">
              A$5,000/year or A$500/month
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Up to 50 vehicles, 24-month price lock, three requested
              improvements assessed for priority each quarter. Available to
              early adopters.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const landingFaqs: FaqItem[] = [
  {
    question: "We already use spreadsheets and WhatsApp.",
    answer:
      "Works until the fleet grows or the tender asks for evidence. The question is what it costs in hours — 15 to 20 hours a week in admin for a mixed fleet is common, and that is before you count the unbilled work from missed dockets.",
    category: "General",
  },
  {
    question: "We already have GPS or telematics.",
    answer:
      "Keep it. HaulageOps runs jobs, subbies, and invoices. It is a different layer, not a replacement for your GPS provider.",
    category: "Integrations",
  },
  {
    question: "We use Xero.",
    answer:
      "We feed it. HaulageOps connects via OAuth2, syncs invoices every 6 hours via cron plus webhooks, and tracks payments back into the platform. Your books stay current without re-keying.",
    category: "Integrations",
  },
  {
    question: "Do you have AI route optimisation?",
    answer:
      "No, and we will not pretend to. HaulageOps uses Google Maps for address autocomplete and routing. Route optimisation is not on our roadmap.",
    category: "Product",
  },
  {
    question: "Do you have hardware telematics or ELD?",
    answer:
      "Not built. It is a roadmap item. Today, HaulageOps coexists with your existing telematics — it does not integrate with it.",
    category: "Product",
  },
  {
    question: "Will drivers and subs actually use it?",
    answer:
      "The driver app works offline with 3-tap POD capture — designed for the pit, not the office. Subcontractors log in because the paid work and delivery evidence live there, and the portal is free to them.",
    category: "Adoption",
  },
];

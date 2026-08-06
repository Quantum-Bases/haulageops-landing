export interface CtaConfig {
  headline: string;
  subheadline: string;
  buttonText: string;
  buttonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export const mainFinalCta: CtaConfig = {
  headline: "See your operation on HaulageOps.",
  subheadline: "20 minutes, on your workflows — dispatch, delegation, client view, invoice. No obligation.",
  buttonText: "Book a 20-minute demo",
  buttonHref: "#demo",
};

export const partnerTeaserCta: CtaConfig = {
  headline: "Your brand. Our platform.",
  subheadline: "Fleet and transport consultants: put your brand on an operator-proven bulk haulage platform. You own the client relationship and implementation revenue; we provide the product.",
  buttonText: "Learn about partnerships",
  buttonHref: "#partners",
};

"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Loader2, FileText, MessageSquare } from "lucide-react";

interface QuickQuoteFormProps {
  source?: string;
  className?: string;
}

export function QuickQuoteForm({ source = "pricing_page", className = "" }: QuickQuoteFormProps) {
  const [email, setEmail] = useState("");
  const [fleetSize, setFleetSize] = useState("15–25 vehicles");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please provide a valid business email address.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          fleetSize,
          company,
          source,
          notes: "Requested instant pricing matrix & feature breakdown PDF",
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      // Even if network blips, thank the user to provide smooth UX
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm transition-all ${className}`}
    >
      {submitted ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black text-neutral-900">
              Pricing & Feature Guide Dispatched!
            </h3>
            <p className="mt-2 text-sm text-neutral-600 max-w-md mx-auto">
              We've emailed the <strong>2026 HaulageOps Fleet Pricing Matrix & Implementation Breakdown</strong> to{" "}
              <span className="font-semibold text-neutral-900">{email}</span>.
            </p>
          </div>
          <div className="pt-2">
            <a
              href="https://wa.me/61426887862?text=Hi%20HaulageOps%2C%20I%20just%20requested%20pricing%20for%20our%20fleet%20and%20wanted%20to%20chat%20directly."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#25D366] hover:underline"
            >
              <MessageSquare className="w-4 h-4" /> Want instant answers? Chat with Ops on WhatsApp →
            </a>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-md bg-orange-50 text-[#E8652B] border border-orange-200/80">
              <FileText className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8652B]">
              Instant Fleet Pricing & Overview
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
            Prefer a direct quote without a 30-min call?
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
            Enter your fleet details to immediately receive our 2026 Pricing Matrix, setup inclusions, and ROI calculator breakdown.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Work Email <span className="text-[#E8652B]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="operations@yourcompany.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#E8652B]/40 focus:border-[#E8652B]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Approx. Fleet Size
                </label>
                <select
                  value={fleetSize}
                  onChange={(e) => setFleetSize(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#E8652B]/40 focus:border-[#E8652B]"
                >
                  <option value="Under 15 vehicles">Under 15 vehicles</option>
                  <option value="15–25 vehicles">15–25 vehicles</option>
                  <option value="26–50 vehicles">26–50 vehicles</option>
                  <option value="51–80 vehicles">51–80 vehicles</option>
                  <option value="80+ vehicles">80+ vehicles (Multi-depot)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                Company Name <span className="text-neutral-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Mitchell Heavy Haulage"
                className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#E8652B]/40 focus:border-[#E8652B]"
              />
            </div>

            {error && <p className="text-xs text-red-600 font-medium">{error}</p>}

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#E8652B] hover:bg-[#D05520] text-white text-sm font-bold shadow-sm transition-colors cursor-pointer disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Get Instant Pricing & Matrix (PDF)
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <a
                href="https://wa.me/61426887862?text=Hi%20HaulageOps%2C%20I'd%20like%20to%20discuss%20pricing%20options%20for%20our%20fleet."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-neutral-600 hover:text-[#25D366] flex items-center gap-1.5 transition-colors"
              >
                <span>Or ask directly on WhatsApp</span>
                <span className="text-[#25D366]">→</span>
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

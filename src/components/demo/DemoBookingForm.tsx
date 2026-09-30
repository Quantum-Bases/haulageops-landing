"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, MessageSquare } from "lucide-react";

interface DemoBookingFormProps {
  fleetSizeOptions: string[];
  currentSystemOptions: string[];
}

export function DemoBookingForm({
  fleetSizeOptions,
  currentSystemOptions,
}: DemoBookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    fleet_size: "",
    current_system: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          fleetSize: formData.fleet_size,
          source: "demo_page_form",
          notes: `Current System: ${formData.current_system || "None specified"}`,
        }),
      });
    } catch (err) {
      console.error("Lead submission error:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);

      // Open Calendly with pre-filled parameters in a new tab
      const calendlyUrl = `https://calendly.com/admin-haulageops/30min?name=${encodeURIComponent(
        formData.name
      )}&email=${encodeURIComponent(formData.email)}`;
      window.open(calendlyUrl, "_blank");
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-6 text-center space-y-3">
        <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-base font-bold text-neutral-900">
          Your Details Have Been Received!
        </h4>
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto">
          We opened Calendly in a new tab for you. If timezone slots don't suit, our ops team will email you directly at{" "}
          <span className="font-semibold text-neutral-900">{formData.email}</span> with a custom meeting time and 5-min platform tour.
        </p>
        <div className="pt-2">
          <a
            href="https://wa.me/61426887862?text=Hi%20HaulageOps%2C%20I%20just%20submitted%20a%20demo%20request%20for%20our%20fleet."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline"
          >
            <MessageSquare className="w-3.5 h-3.5" /> Need immediate assistance? Chat on WhatsApp →
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-1.5">
          Full name *
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your name"
          className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#E8652B]/40"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="company" className="block text-sm font-semibold text-neutral-900 mb-1.5">
          Company name *
        </label>
        <input
          id="company"
          type="text"
          name="company"
          required
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          placeholder="Your company"
          className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#E8652B]/40"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-1.5">
          Work email *
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="you@company.com"
          className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#E8652B]/40"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-semibold text-neutral-900 mb-1.5">
          Phone number
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="+61 or +1 etc."
          className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#E8652B]/40"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="fleet_size" className="block text-sm font-semibold text-neutral-900 mb-1.5">
          Approximate fleet size *
        </label>
        <select
          id="fleet_size"
          name="fleet_size"
          required
          value={formData.fleet_size}
          onChange={(e) => setFormData({ ...formData, fleet_size: e.target.value })}
          className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#E8652B]/40"
        >
          <option value="" disabled>
            Select fleet size
          </option>
          {fleetSizeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="current_system" className="block text-sm font-semibold text-neutral-900 mb-1.5">
          Current system
        </label>
        <select
          id="current_system"
          name="current_system"
          value={formData.current_system}
          onChange={(e) => setFormData({ ...formData, current_system: e.target.value })}
          className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#E8652B]/40"
        >
          <option value="" disabled>
            What are you using now?
          </option>
          {currentSystemOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <Button
        type="submit"
        disabled={loading}
        size="lg"
        className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            Saving Details...
          </>
        ) : (
          "Save & Continue to Calendly"
        )}
      </Button>

      <p className="mt-3 text-xs text-neutral-500 text-center">
        No sales pressure. Recorded walkthrough option provided.
      </p>
    </form>
  );
}

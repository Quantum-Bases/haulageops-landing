"use client";

import { motion } from "framer-motion";
import { Camera, WifiOff, Clock, Bell, Calendar } from "lucide-react";

const driverFeatures = [
  {
    icon: Camera,
    title: "3-tap POD",
    description:
      "Photo, signature, and document capture in three taps — attached to the job instantly.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    description:
      "Capture PODs and update job status at the pit or quarry with no signal. Syncs when you are back in range.",
  },
  {
    icon: Clock,
    title: "Break tracking",
    description:
      "No more paperwork. Log breaks on the phone — records stay with the job for compliance.",
  },
  {
    icon: Bell,
    title: "Push notifications",
    description:
      "New jobs, status changes, and schedule updates pushed directly to the driver.",
  },
  {
    icon: Calendar,
    title: "Availability scheduling",
    description:
      "Drivers set their own availability, so dispatch knows who is ready before assigning work.",
  },
];

export function DriverApp() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#FEFBF9" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left: heading + features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="inline-block w-8 h-0.5 rounded-full"
                style={{ background: "#D86D3C" }}
              />
              <p
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: "#D86D3C" }}
              >
                Driver mobile app
              </p>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight"
              style={{ color: "#202020" }}
            >
              Works at the pit. Syncs when you are back in range.
            </h2>
            <p
              className="mt-5 text-lg leading-relaxed"
              style={{ color: "#5C5047" }}
            >
              Built for the conditions drivers actually work in — not a generic
              delivery app. Gloved hands, dusty screens, no signal. The app
              handles it.
            </p>

            {/* Platform badges */}
            <div className="mt-8 flex gap-3 flex-wrap">
              {["iOS", "Android"].map((platform) => (
                <span
                  key={platform}
                  className="rounded-full border px-4 py-1.5 text-xs font-bold"
                  style={{
                    borderColor: "#E8D5C4",
                    color: "#5C5047",
                    background: "#F7F2EE",
                  }}
                >
                  {platform}
                </span>
              ))}
              <span
                className="rounded-full border px-4 py-1.5 text-xs font-bold"
                style={{
                  borderColor: "#D86D3C",
                  color: "#D86D3C",
                  background: "#FAEDE7",
                }}
              >
                Offline-capable
              </span>
            </div>

            {/* Feature list */}
            <div className="mt-10 space-y-3">
              {driverFeatures.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.06 }}
                  className="flex items-start gap-4 rounded-xl border p-4 transition-shadow duration-300 hover:shadow-sm"
                  style={{ background: "#F7F2EE", borderColor: "#E8D5C4" }}
                >
                  <div
                    className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "#FAEDE7" }}
                  >
                    <feature.icon
                      className="h-4 w-4"
                      style={{ color: "#D86D3C" }}
                    />
                  </div>
                  <div>
                    <h3
                      className="text-sm font-bold"
                      style={{ color: "#202020" }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="mt-0.5 text-sm leading-relaxed"
                      style={{ color: "#5C5047" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: real phone screenshot from user guide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center lg:sticky lg:top-24"
          >
            <div className="relative w-[260px] sm:w-[290px]">
              {/* Orange glow behind the phone */}
              <div
                className="absolute inset-0 rounded-[3rem] blur-3xl opacity-15 scale-90 -z-10"
                style={{ background: "#D86D3C" }}
              />

              {/* Phone frame */}
              <div
                className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[7px]"
                style={{
                  borderColor: "#1A1A1A",
                  boxShadow:
                    "0 40px 80px -16px rgba(0,0,0,0.30), inset 0 0 0 1px rgba(255,255,255,0.05)",
                }}
              >
                {/* Notch */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 rounded-b-xl z-20"
                  style={{ background: "#1A1A1A" }}
                />
                {/* Real screenshot from HaulageOps Driver App */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/driver-app-job-view.png"
                  alt="HaulageOps driver mobile app — live job view with POD capture and delivery confirmation"
                  className="w-full block"
                  loading="lazy"
                />
              </div>

              {/* Floating callout: POD synced */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.55 }}
                className="absolute -right-8 bottom-24 rounded-2xl border shadow-xl px-4 py-3"
                style={{
                  background: "#FEFBF9",
                  borderColor: "#E8D5C4",
                }}
              >
                <p
                  className="text-xs font-bold"
                  style={{ color: "#D86D3C" }}
                >
                  ✓ POD captured
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#5C5047" }}>
                  Syncing to job record…
                </p>
              </motion.div>

              {/* Floating callout: offline */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: -10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.65 }}
                className="absolute -left-8 top-28 rounded-2xl border shadow-xl px-4 py-3"
                style={{
                  background: "#FEFBF9",
                  borderColor: "#E8D5C4",
                }}
              >
                <p
                  className="text-xs font-bold"
                  style={{ color: "#202020" }}
                >
                  Works offline
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#8A7060" }}>
                  No signal needed
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

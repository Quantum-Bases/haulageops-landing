"use client";

import { motion } from "framer-motion";
import { Camera, WifiOff, Clock, Bell, Calendar, CheckCircle2 } from "lucide-react";

const driverFeatures = [
  {
    icon: Camera,
    title: "3-tap POD",
    description: "Photo, signature, and document capture in three taps — attached to the job instantly.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    description: "Capture PODs and update job status at the pit or quarry with no signal. Syncs when you are back in range.",
  },
  {
    icon: Clock,
    title: "Break tracking",
    description: "No more paperwork. Log breaks on the phone — records stay with the job for compliance.",
  },
  {
    icon: Bell,
    title: "Push notifications",
    description: "New jobs, status changes, and schedule updates pushed directly to the driver.",
  },
  {
    icon: Calendar,
    title: "Availability scheduling",
    description: "Drivers set their own availability, so dispatch knows who is ready before assigning work.",
  },
];

export function DriverApp() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-[#E8652B] uppercase tracking-wider mb-3">
              Driver Mobile App
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Works at the pit. Syncs when you are back in range.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Built for the conditions drivers actually work in — not a generic
              delivery app. Gloved hands, dusty screens, no signal. The app
              handles it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="space-y-4">
              {driverFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 bg-muted/40 rounded-lg p-5"
                >
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center">
                    <feature.icon className="h-4 w-4 text-[#E8652B]" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";

const pains = [
  {
    number: "01",
    title: "Coordination chaos",
    image: "/Coordination%20chaos.jpeg",
    description:
      "Dispatch across owned and subcontracted trucks by phone with no shared job record.",
    cost: "15–20 hrs/week admin; missed or double-booked jobs",
  },
  {
    number: "02",
    title: "Client status calls",
    image: "/Client%20status%20calls.jpeg",
    description:
      "The operator is the only source of truth. Clients call and email for updates.",
    cost: "Client churn risk; lost tenders",
  },
  {
    number: "03",
    title: "Docket-to-invoice lag",
    image: "/Docket-to-invoice%20lag.jpeg",
    description: "Paper PODs re-keyed weekly, days behind delivery.",
    cost: "Cash-cycle delay; unbilled work",
  },
  {
    number: "04",
    title: "Audit prep by hand",
    image: "/Audit%20prep%20by%20hand.jpeg",
    description:
      "Compliance packs assembled manually from paper, phones, and inboxes.",
    cost: "HVNL/CoR exposure; failed prequalification",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function PainSection() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#FEFBF9" }}>
      <div className="mx-auto max-w-7xl xl:max-w-[80rem] 2xl:max-w-[105rem] px-4 sm:px-6 lg:px-8">
        {/* Center-aligned Section Header */}
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
              The old way
            </p>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
            style={{ color: "#202020" }}
          >
            Running a bulk haulage operation on spreadsheets and WhatsApp
          </h2>
          <p
            className="mt-5 text-base sm:text-lg leading-relaxed"
            style={{ color: "#5C5047" }}
          >
            The operation runs on your phone. Dispatch by WhatsApp. Dockets on
            paper. Subbies invisible after handoff. Clients calling for updates.
            Invoices a week behind the work. It works — until the fleet grows,
            the tender asks for evidence, or the ops manager resigns.
          </p>
        </motion.div>

        {/* 2-column 4-card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {pains.map((pain) => (
            <motion.div
              key={pain.title}
              variants={itemVariants}
              className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              style={{
                background: "#FFFFFF",
              }}
            >
              {/* First row: Image with seamless white edge blending */}
              <div
                className="relative aspect-[16/10] w-full overflow-hidden flex items-center justify-center"
                style={{
                  background: "#FFFFFF",
                }}
              >
                <img
                  src={pain.image}
                  alt={pain.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* White radial gradient overlay: 0 opacity in center, white around borders */}
                <div
                  className="pointer-events-none absolute inset-0 z-[1]"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.75) 80%, #FFFFFF 100%)",
                  }}
                />

                {/* Bottom white gradient merge into card body */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent z-[2]"
                />

                {/* Top subtle white blend */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/70 to-transparent z-[2]"
                />

                {/* Left/Right subtle edge blends */}
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-[2]"
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-[2]"
                />

                <span
                  className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-md text-xs font-bold tracking-wider uppercase backdrop-blur-md bg-white/95 border shadow-xs"
                  style={{ color: "#202020", borderColor: "#E8D5C4" }}
                >
                  Pain {pain.number}
                </span>
              </div>

              {/* Card Body: Title -> Description -> Cost */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-bold tracking-tight mb-2.5"
                    style={{ color: "#202020" }}
                  >
                    {pain.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ color: "#5C5047" }}
                  >
                    {pain.description}
                  </p>
                </div>

                {/* Cost Badge */}
                <div
                  className="mt-6 flex items-start gap-3 rounded-xl p-3.5 sm:p-4 border"
                  style={{
                    background: "#FFF8F0",
                    borderColor: "#F4D3B5",
                  }}
                >
                  <span
                    className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider shrink-0 mt-0.5"
                    style={{
                      background: "#FAEDE7",
                      color: "#D86D3C",
                      border: "1px solid #E8D5C4",
                    }}
                  >
                    Cost
                  </span>
                  <span
                    className="text-sm font-medium leading-snug"
                    style={{ color: "#4A3324" }}
                  >
                    {pain.cost}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

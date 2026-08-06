import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Audit-Ready Operations for Bulk Haulage | HaulageOps",
  description:
    "Every job action, document submission and access event in HaulageOps is recorded with a user and a timestamp. Audit-readiness is a continuous output of running the operation through a structured system.",
};

const proofStrip = [
  "Action-level audit trail",
  "User and timestamp on every event",
  "Driver document records",
  "POD stored in Azure",
  "Contract and rate history",
  "Exportable records",
];

const auditCategories = [
  {
    title: "Action-level audit trail",
    paras: [
      "Every significant action in HaulageOps is logged: job created, assigned, status changed, rate modified, POD submitted, invoice generated, document uploaded, user access events. Each log entry records the user who performed the action, the exact timestamp, and the relevant detail of what changed.",
      "This is a comprehensive action log, not a high-level summary. When an auditor asks who made a change to a job and when, the audit trail has the answer — including what the value was before and after the change.",
    ],
    bullets: [
      "User attributed to every action in the system",
      "Timestamp on every logged event",
      "Job-level and system-level event coverage",
      "Accessible to management without calling anyone to retrieve it",
    ],
  },
  {
    title: "Driver document records",
    paras: [
      "Driver records in HaulageOps store licence details, medical clearance records and induction documentation. Expiry dates are tracked with alerts when documents are approaching renewal. When an auditor asks whether a driver's licence was current on a given date, the record shows the licence details and the date range for which they were valid.",
      "Document expiry tracking means issues are surfaced before they become compliance problems — not discovered during a post-incident review.",
    ],
    bullets: [
      "Licence, medical and induction records per driver",
      "Expiry date tracking with advance alerts",
      "Document uploads stored in Azure Blob Storage",
      "History of document versions maintained",
    ],
  },
  {
    title: "Proof of delivery records",
    paras: [
      "Digital POD captured through the driver app — photo, document upload or customer signature — is stored in Azure Blob Storage and permanently attached to the relevant job record. The POD record includes the submission timestamp, the driver who submitted it and the job it is associated with.",
      "When an auditor or client asks for proof that a delivery was made, the evidence is already in the system — retrievable by job, by date, by driver — without searching through a message thread or a filing cabinet.",
    ],
    bullets: [
      "Photo, document and signature POD options",
      "Stored in Azure Blob Storage — not on a device or in a chat",
      "Timestamped and attributed to the driver who submitted",
      "Accessible in admin panel and client portal",
    ],
  },
  {
    title: "Contract and rate history",
    paras: [
      "Contract records store the full lifecycle: creation, review, approval, active status, expiry. Rate cards store the rates in effect for each client, with effective dating so historical jobs show the rate that was active at the time — not the current rate applied retroactively.",
      "When an auditor or a client asks what rate was agreed for a job three months ago, the answer is in the system: the rate card as it stood on that date, connected to the job record it was applied to.",
    ],
    bullets: [
      "Contract lifecycle records with status history",
      "Rate history with effective dating — historical accuracy maintained",
      "Rate applied at job creation stored against the job record",
      "Contract document storage with version history",
    ],
  },
  {
    title: "Break and rest records",
    paras: [
      "Drivers can record break and rest periods through the driver app. These records are relevant to fatigue management obligations in many jurisdictions — particularly in Australia under Chain of Responsibility requirements. The records show when breaks were taken, duration and which driver recorded them.",
      "Note: HaulageOps supports break and rest record-keeping. It does not replace formal Electronic Work Diary systems (which are on the roadmap) or guarantee compliance with specific fatigue regulations, which depend on operational practices beyond record-keeping.",
    ],
    bullets: [
      "Driver-recorded break and rest periods via driver app",
      "Timestamped and attributed per driver",
      "Available in management reporting and audit trail",
      "CoR-relevant for AU operators — see the",
    ],
  },
  {
    title: "Fleet document records",
    paras: [
      "Vehicle records in HaulageOps store registration details, insurance documents and inspection records with expiry tracking. When a vehicle is assigned to a job, the vehicle record at that point in time is associated with the assignment. If an auditor asks what vehicle made a delivery and whether it was registered and insured on that date, the record is there.",
    ],
    bullets: [
      "Vehicle registration and insurance records with expiry alerts",
      "Vehicle document storage in Azure Blob Storage",
      "Vehicle-to-job assignment history",
      "Fleet-level document expiry dashboard for management",
    ],
  },
];

const comparisonRows = [
  {
    question: "Who drove job #4471 on 14 March?",
    manual: "Check the spreadsheet — if it was filled in. Call the dispatcher to confirm.",
    haulage: "Job record — driver assigned, timestamp of assignment, driver app confirmation.",
  },
  {
    question: "Was the driver's licence current on that date?",
    manual: "Find the physical licence copy — if it was filed. Check the expiry.",
    haulage: "Driver record — licence details and validity period on file in Azure.",
  },
  {
    question: "Was POD captured?",
    manual: "Check the filing cabinet for the docket. Or the message thread for the photo.",
    haulage: "Job record — digital POD attached at submission, timestamped, stored in Azure.",
  },
  {
    question: "What rate was agreed for that client?",
    manual: "Find the rate agreement document — check it was the version in effect at the time.",
    haulage: "Rate card — rate applied at job creation stored against the job record with effective date.",
  },
  {
    question: "Who changed the job and when?",
    manual: "Unknown — no record of who edited the spreadsheet row.",
    haulage: "Audit trail — user, timestamp, before/after values for every change.",
  },
  {
    question: "Was the contract signed?",
    manual: "Check the contracts folder — if it exists and is current.",
    haulage: "Contract record — full lifecycle including approval, signed document attached.",
  },
];

const relatedCards = [
  {
    title: "Audit Trail",
    desc: "The comprehensive action log in HaulageOps — user, timestamp and event detail on every significant system action. Queryable by date range, job and event type.",
    href: "/platform/audit-trail",
  },
  {
    title: "Compliance & Document Management",
    desc: "Driver documents, vehicle records, contract storage and expiry tracking — all in Azure Blob Storage with role-based access and management-level visibility.",
    href: "/platform/compliance",
  },
  {
    title: "Document Management",
    desc: "Centralised document storage for licences, permits, contracts and POD. Stored in Azure, attached to relevant records, accessible with appropriate permissions.",
    href: "/platform/document-management",
  },
];

const faqs = [
  {
    q: "How far back do audit trail records go?",
    a: "Audit trail records are maintained for the duration of your subscription. There is no automatic purge of historical records within the standard retention period. For operators who need to demonstrate compliance over extended periods — for insurance purposes, client contract audits or regulatory review — records from the date the operation went live on HaulageOps are available in the platform. If you have a specific retention requirement, discuss it during the demo or with the implementation team.",
  },
  {
    q: "Can I export records to provide to an auditor?",
    a: "Yes. Records can be exported from HaulageOps for provision to auditors, clients or insurers. The audit trail, job records, driver documents and POD records can all be exported in appropriate formats. External parties do not need to be given system access — you provide the relevant exports. The format and scope of exports available can be confirmed during the demo based on your specific audit requirements.",
  },
  {
    q: "What about records from before we started using HaulageOps?",
    a: "Records from before HaulageOps was in use — whether in spreadsheets, paper files or message threads — are not in the platform and cannot be retrieved through it. Audit-readiness in HaulageOps applies to the period from go-live onwards. For historical records, operators retain whatever documentation exists from the pre-HaulageOps period in its original form. The onboarding process includes data migration assistance for structured records like client lists, driver records and rate cards — operational history from before go-live is not migrated as job-by-job records.",
  },
  {
    q: "Does HaulageOps guarantee that our operation is compliant?",
    a: "No. HaulageOps supports audit-readiness by maintaining structured records of operational activity. Whether the operation meets specific regulatory, contractual or safety obligations depends on how the operation is actually run — the decisions made, the processes followed and the standards maintained. A platform that records what happened cannot guarantee that what happened was compliant. Records that document a non-compliance remain records of non-compliance. HaulageOps gives you the records to demonstrate what was done — the compliance depends on what that was.",
  },
  {
    q: "How does the audit trail relate to Chain of Responsibility in Australia?",
    a: "Chain of Responsibility obligations in Australia require parties in the supply chain to demonstrate due diligence in managing safety risks. The audit trail, driver document records, break and rest records, vehicle records and POD records in HaulageOps all contribute to that demonstrable due diligence — they show that the operator had systems in place and that those systems were used. For detailed coverage of CoR relevance, see the Chain of Responsibility page.",
  },
  {
    q: "Who in the business can access audit trail records?",
    a: "Access to audit trail and compliance records is controlled by role-based access control. Management users with appropriate permissions can access the full audit trail and driver, vehicle and contract records. Dispatcher roles see what they need for operational tasks. Driver app users see their own records. The audit trail is not accessible to subcontractors or clients through their portals. Access configuration is covered during the setup and onboarding process.",
  },
  {
    q: "Can the audit trail itself be tampered with or deleted?",
    a: "The audit trail in HaulageOps is a write-only log — events are recorded as they happen and cannot be edited or deleted by users, including admin users. This is deliberate: the value of an audit trail depends on it being an accurate, unmodified record of what occurred. If a record shows something that shouldn't have happened, that is a record of the event — not a vulnerability to be managed by editing the log.",
  },
];

export default function AuditReadyOperationsPage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb */}
      <div className="pt-24 pb-0 bg-[#FFF9F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B]">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/solutions" className="hover:text-[#E8652B]">Solutions</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Audit-Ready Operations</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Compliance
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            When the auditor asks, the records are already there.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Every job action, document submission and access event in HaulageOps is recorded with a user and a timestamp. Audit-readiness is not something you prepare for — it is a continuous output of running the operation through a structured system.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/audit-trail">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Audit Trail Feature
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-[#0F172A] py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {proofStrip.map((item) => (
              <div key={item} className="flex flex-col items-center justify-center gap-1">
                <span className="text-white font-bold text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT AUDITORS ASK FOR */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What Auditors Ask For</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The questions that arrive during an audit — and where the answers come from.
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                Audits of haulage operations — whether internal, client-driven, regulatory or insurance-related — tend to ask a consistent set of questions. Who drove which vehicle, on which date, carrying what load. Was the driver&apos;s licence current? Were their medical and induction records in order? Was proof of delivery captured? What rate was agreed with the client? Was the contract signed? Who made changes to the job record and when?
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                On manual processes and across personal WhatsApp threads and spreadsheets, answering these questions requires reconstructing events from scattered sources. The driver&apos;s licence might be in a physical folder. The signed docket might be somewhere in the cab or a filing cabinet. The rate that was applied might be in a spreadsheet version that&apos;s no longer the current one. The job change might have been made verbally and never documented.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                The reconstruction process is time-consuming, incomplete, and sometimes impossible — not because the operator ran a poor operation, but because the tools used didn&apos;t generate structured records as a by-product of normal operation.
              </p>
            </div>
            <div>
              <p className="text-[#475569] leading-relaxed">
                HaulageOps generates those records as a natural consequence of running jobs through the platform. The audit trail doesn&apos;t need to be created retroactively — it exists because the operation was run in a system that records what happens at each step.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                This page covers what is recorded, how it can be accessed, and what it means for audit-readiness across different types of review. It also states clearly what HaulageOps does and does not claim: the platform supports audit-readiness — it does not guarantee compliance outcomes, which depend on how the operation is actually run, not only on whether records exist.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                For operators in Australia, the <Link href="/au/chain-of-responsibility" className="text-[#E8652B] hover:underline font-medium">Chain of Responsibility page</Link> covers how HaulageOps supports CoR due diligence requirements specifically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS RECORDED AND WHERE */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What Is Recorded and Where</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Six categories of records that support audit-readiness.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {auditCategories.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                {card.paras.map((p) => (
                  <p key={p} className="mt-3 text-sm text-[#475569] leading-relaxed">{p}</p>
                ))}
                <ul className="mt-5 space-y-3">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                      <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                      <span>
                        {item}
                        {item === "CoR-relevant for AU operators — see the" && (
                          <Link href="/au/chain-of-responsibility" className="text-[#E8652B] hover:underline font-medium">Chain of Responsibility page</Link>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCESSING RECORDS FOR AN AUDIT */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Accessing Records for an Audit</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Management can pull records without calling the team.
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                One of the practical costs of audit-readiness on manual processes is who has to be involved to retrieve records. Finding out what licence a driver held on a given date, or who changed a job record and when, or whether POD was captured for a specific delivery — each of these questions requires someone with access to the relevant folder, spreadsheet or message thread.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                When records are in HaulageOps, management users with appropriate access can query them directly. The audit trail is queryable by date range, user, job and event type. Driver records are in the driver management section. Vehicle records are in the fleet management section. POD records are attached to job records. No one needs to be called to locate a file.
              </p>
            </div>
            <div>
              <p className="text-[#475569] leading-relaxed">
                This changes the audit response posture for the operator. Rather than scrambling to reconstruct records when a request arrives, the response is to pull the relevant data from the platform — often in minutes rather than days.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Records can be exported for provision to auditors, clients or insurers without requiring system access to be granted to the reviewing party. Role-based access control means the people who need to see specific records can access them; external parties receive exports rather than system access.
              </p>
              <div className="mt-5 p-5 rounded-2xl border-l-4 border-[#F39A2D] bg-[#F8F9FA]">
                <p className="text-sm text-[#334155] leading-relaxed">
                  <strong className="text-[#0F172A]">Important note on compliance:</strong> HaulageOps supports audit-readiness by creating and maintaining structured records of operational activity. It does not guarantee compliance outcomes. Whether an operation meets specific regulatory, contractual or safety obligations depends on how the operation is actually run — not only on whether records exist. Records that show a compliance breach are still records of a breach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTRAST: RECONSTRUCTING FROM MANUAL PROCESSES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Contrast: Reconstructing from Manual Processes</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            What audit readiness looks like when records are in the wrong places.
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="text-left px-5 py-3 font-semibold rounded-tl-xl">Auditor question</th>
                  <th className="text-left px-5 py-3 font-semibold">Manual process answer</th>
                  <th className="text-left px-5 py-3 font-semibold rounded-tr-xl text-[#E8652B]">HaulageOps answer</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.question} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="px-5 py-3 text-[#0F172A] font-medium border-b border-[#E2E8F0]">{row.question}</td>
                    <td className="px-5 py-3 text-[#64748B] border-b border-[#E2E8F0]">{row.manual}</td>
                    <td className="px-5 py-3 text-[#16A34A] font-semibold border-b border-[#E2E8F0]">{row.haulage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RELATED FEATURES AND PAGES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related Features and Pages</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            The platform capabilities behind audit-readiness
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">
                    {card.title}
                  </Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
                <Link href={card.href} className="mt-3 inline-flex items-center gap-1 text-sm text-[#E8652B] hover:underline font-medium">
                  View page <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#475569]">
            Also relevant:{" "}
            <Link href="/au/chain-of-responsibility" className="text-[#E8652B] hover:underline font-medium">Chain of Responsibility (AU)</Link>
            {" · "}
            <Link href="/platform/driver-management" className="text-[#E8652B] hover:underline font-medium">Driver Management</Link>
            {" · "}
            <Link href="/platform/contract-management" className="text-[#E8652B] hover:underline font-medium">Contract Management</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently Asked Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Audit-ready operations — common questions.
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-[#E2E8F0] bg-white rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-[#0F172A] text-sm list-none hover:bg-[#F8FAFC]">
                  {faq.q}
                  <ChevronRight className="h-4 w-4 text-[#94A3B8] shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9]">
                  <p className="pt-4">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Records that exist before the auditor asks for them.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              A 20-minute demo covers the audit trail, driver records, document management and how compliance visibility works across the platform.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/compliance">
              <Button size="lg" variant="outline" className="border-[#334155] text-white hover:bg-[#1E293B]">
                Compliance &amp; Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

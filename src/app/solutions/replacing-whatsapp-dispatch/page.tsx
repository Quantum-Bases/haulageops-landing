import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Replace WhatsApp Dispatch in Bulk Haulage | HaulageOps",
  description:
    "WhatsApp works until it doesn't. When dispatch outgrows a group chat, job assignments, status, POD and client visibility move into a purpose-built operations platform.",
};

const proofStrip = [
  "Real-time dispatch board",
  "Subcontractor portal",
  "Client visibility portal",
  "Digital POD",
  "Full audit trail",
  "No key-person dependency",
];

const whatsAppProblems = [
  {
    title: "No dispatch board",
    problem: "A group chat is a chronological feed — it shows the last thing said, not the current state of every job. To know which driver has which job, where they are, and whether it is complete, someone has to scroll back through the thread and reconstruct the picture. That takes time every time anyone needs it — and the picture is out of date as soon as the next message arrives.",
    fix: "A dispatch board shows every live and scheduled job, every driver assignment, every current status — in one view that updates in real time without anyone having to extract it from a message thread.",
  },
  {
    title: "No structured subcontractor delegation",
    problem: "Sending a job to a subcontractor over WhatsApp means forwarding a message and hoping they read it in time, confirm acceptance, show up, and remember the details. There is no logged acceptance, no documented confirmation that they understood the job, and no way to know their status other than sending another message to ask.",
    fix: "When something goes wrong — a missed delivery, a disputed load — \"I sent them a message and they said ok\" is not a record. The subcontractor portal creates a documented workflow: job issued, accepted or declined, status updated, POD submitted. All logged.",
  },
  {
    title: "No client visibility without a call",
    problem: "Clients who want to know the status of a delivery have to call or message to ask. Someone has to check the group chat, piece together the current state, and respond. For operators with demanding clients — main contractors, quarry customers, site managers — this creates an ongoing customer service overhead that grows with every additional job.",
    fix: "A client portal gives clients their own login to see live job status, delivery history and POD without contacting the operator. The status call doesn't need to happen because the answer is already visible.",
  },
  {
    title: "No audit trail",
    problem: "When something is disputed — a delivery that the client says didn't happen, a rate that wasn't what they expected, a driver who was supposed to be somewhere else — the only record is the message thread. Messages can be deleted, screenshots don't have timestamps visible, and \"he said she said\" over WhatsApp is not how you want to be handling a dispute with a major client.",
    fix: "Every action in HaulageOps is logged: user, timestamp, detail. Job created, assigned, status updated, POD submitted, rate applied, invoice sent. The audit trail exists without anyone having to think about creating it.",
  },
  {
    title: "Key-person dependency",
    problem: "When dispatch lives in one person's WhatsApp, the operation depends on that person being available. Their phone has the job history, the driver contacts, the subcontractor relationships. When they're on holiday, unavailable or leave the business, the operation has a serious problem — not because the work can't be done, but because the records that support the work are on a personal device.",
    fix: "Operational records in HaulageOps are accessible to any authorised team member. Role-based access control means people see what they need to see. No single person's phone is the single point of failure.",
  },
  {
    title: "No document storage",
    problem: "Photos sent over WhatsApp are not stored in a structured, searchable way. A POD photo sent six weeks ago is somewhere in the chat thread — if the driver hasn't deleted it. When a client disputes a delivery from three months ago and asks for the signed docket, \"it's somewhere in the chat\" is not a satisfactory answer.",
    fix: "Digital POD in HaulageOps is stored in Azure Blob Storage and permanently attached to the relevant job record. It is retrievable by job, by date, by driver — in seconds, not in a scrolling search through a message history.",
  },
];

const replaceRows = [
  { what: "Driver group chat for job instructions", href: "/platform/dispatch-management", linkText: "Dispatch board", desc: "job assigned, driver app push notification via Firebase FCM" },
  { what: "Forwarded message to subcontractor", href: "/platform/subcontractor-portal", linkText: "Subcontractor portal", desc: "job appears in sub's queue, accept/decline logged" },
  { what: "Photo sent as proof of delivery", href: "/solutions/digital-dockets", linkText: "Digital POD", desc: "photo, upload or signature captured on driver app, stored in Azure" },
  { what: "Screenshot sent to client as status update", href: "/platform/client-portal", linkText: "Client portal", desc: "client logs in to see live status, POD and invoices" },
  { what: "Rate mentioned in a message", href: "/platform/rate-management", linkText: "Rate card", desc: "rate stored in the system, applied at job creation, visible on invoice" },
  { what: "Message thread as the operational record", href: "", linkText: "", desc: "Job record — structured data, full audit trail, exportable, accessible to the team" },
];

const relatedCards = [
  {
    title: "Replacing Spreadsheets",
    desc: "WhatsApp and spreadsheets often go together. This solution covers what happens when the spreadsheet side of the operation moves into HaulageOps — and what connects once both are in one system.",
    href: "/solutions/replacing-spreadsheets",
  },
  {
    title: "Subcontractor Portal",
    desc: "The portal that replaces the forwarded WhatsApp message for subcontractor job delegation. Dedicated login, accept/decline, Mapbox maps and POD submission — all logged.",
    href: "/platform/subcontractor-portal",
  },
  {
    title: "Driver App",
    desc: "The iOS and Android app that receives job assignments, enables GPS tracking, supports status updates and captures digital POD — offline-capable, not a messaging thread.",
    href: "/platform/driver-app",
  },
];

const faqs = [
  {
    q: "Can I still use WhatsApp alongside HaulageOps for general communication?",
    a: "Yes. WhatsApp for calling drivers, quick messages and general communication continues alongside HaulageOps without any conflict. What changes is where operational records live — job assignments, status updates, POD and client visibility move into the platform. Casual communication between people can remain wherever is most natural. The distinction is between communication (which can stay in WhatsApp) and operational records (which belong in a system with structure, storage and an audit trail).",
  },
  {
    q: "How long does the transition from WhatsApp dispatch to HaulageOps take?",
    a: "Standard onboarding is 2–4 weeks. The driver app is typically one of the faster parts to deploy — drivers install it on their existing phone (iOS or Android) and begin receiving job assignments through it. The dispatch board goes live once jobs are being created in the system. Subcontractor portal access is set up per subcontractor and doesn't require any software installation on the sub's side beyond a browser login. The transition can be phased — some operators run both in parallel briefly during the changeover before retiring the group chat.",
  },
  {
    q: "What happens to old job records from the WhatsApp period?",
    a: "Historical records from before HaulageOps was in use — whether in WhatsApp, spreadsheets or email — are not migrated into the platform as a standard part of setup. Data migration assistance covers structured records like client lists, rate cards and driver records. The WhatsApp period's job history exists in the message thread as before. Going forward, job records are in HaulageOps. For operators who need to retain historical records, those can be exported from WhatsApp independently of the HaulageOps setup.",
  },
  {
    q: "Do drivers need to install a new app? Will they use it?",
    a: "Drivers install the HaulageOps driver app on their existing iOS or Android phone. The app receives job assignments via push notification (Firebase FCM), so the experience is similar to receiving a message — the notification arrives, the driver taps to view the job details. POD is captured through the app camera or file upload. The app works offline in areas without mobile coverage and synchronises when connectivity returns. Driver adoption is typically straightforward because the interface is designed for people who work on phones, not desks.",
  },
  {
    q: "How do subcontractors who are used to WhatsApp adapt to the portal?",
    a: "The subcontractor portal is browser-based — subcontractors log in from any device without installing software. Their job queue appears when they log in, they can accept or decline, view job details and a Mapbox map of the location, and submit POD. The workflow is simple by design. Most subcontractors adapt quickly because the portal gives them better information than a forwarded message does — the job details, the location on a map, and their own history are all in one place.",
  },
  {
    q: "What if I have clients who are used to calling for status updates?",
    a: "The client portal gives clients self-service access to their job status, delivery history and POD. Operators typically introduce the portal to clients as an improvement to the service — \"you can now see live status without calling us.\" Some clients prefer to use it; others continue to call. Either way, the dispatcher now has an accurate picture to refer to when the call comes in, rather than scrolling back through a group chat.",
  },
];

export default function ReplacingWhatsAppDispatchPage() {
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
            <span className="text-[#0F172A] font-medium">Replacing WhatsApp Dispatch</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Transform Operations
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            WhatsApp works until it doesn&apos;t. Here&apos;s what comes after.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Every operator who starts with WhatsApp for dispatch does it for the same reason: it&apos;s free, every driver has it, and it works straight away. The problems emerge later — at 15 trucks, with subcontractors, with clients expecting digital POD and no audit trail when something is disputed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/dispatch-management">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Dispatch Management
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

      {/* WHY OPERATORS START WITH WHATSAPP */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Why Operators Start with WhatsApp</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            WhatsApp is a reasonable starting point. For a while.
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                WhatsApp has genuine advantages for a small haulage operation starting out. It costs nothing. Every driver already has it installed and knows how to use it. You can send a job instruction in seconds. Drivers can confirm receipt immediately. A photo of the delivered load can be sent back as basic proof of delivery. For a fleet of four or five trucks running predictable routes, it handles the communication requirement adequately.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                This is not the problem. The problem is that WhatsApp is a messaging tool — it is not an operational record. Messages are not a dispatch board. A group chat is not a job register. A photo in a thread is not a timestamped, stored proof of delivery. A forwarded message to a subcontractor is not a formal job delegation with a documented acceptance.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                When the operation is small and everyone involved knows each other, these distinctions matter less. When the operation grows — more trucks, more drivers, subcontractors involved, clients with expectations about visibility — each distinction starts to cost real time and money.
              </p>
            </div>
            <div>
              <p className="text-[#475569] leading-relaxed">
                The tipping point is different for every operator. Some hit it at 10 trucks. Some manage to 20 on WhatsApp and spreadsheets combined before the overhead becomes unsustainable. But the pattern is consistent: a problem that was manageable at five trucks becomes a genuine operational liability at fifteen.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                The transition away from WhatsApp dispatch is not about abandoning mobile communication. Drivers and dispatchers will continue to call and message — that is normal. The change is about moving operational records into a system built for them, so the communication that happens on phones is supported by structured data, not replaced by more messages in a group chat.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                HaulageOps does not require anyone to stop using their phone. It requires job assignments, status updates, POD submissions and client visibility to move from a messaging thread into a purpose-built operations platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN WHATSAPP DISPATCH BREAKS */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">When WhatsApp Dispatch Breaks</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Five specific problems that emerge as the operation grows.
          </h2>
          <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
            These are not theoretical risks. They are the operational consequences that operators experience consistently when WhatsApp is carrying more dispatch weight than it was designed for.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {whatsAppProblems.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A]">{card.title}</h3>
                <p className="mt-3 text-sm text-[#64748B] leading-relaxed">{card.problem}</p>
                <p className="mt-3 text-sm text-[#16A34A] font-medium leading-relaxed">{card.fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT REPLACES EACH WHATSAPP FUNCTION */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What Replaces Each WhatsApp Function</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            A direct substitution — operational records move into the right tool.
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="text-left px-5 py-3 font-semibold rounded-tl-xl">What WhatsApp is being used for</th>
                  <th className="text-left px-5 py-3 font-semibold rounded-tr-xl text-[#E8652B]">What replaces it in HaulageOps</th>
                </tr>
              </thead>
              <tbody>
                {replaceRows.map((row, i) => (
                  <tr key={row.what} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="px-5 py-3 text-[#334155] font-medium border-b border-[#E2E8F0]">{row.what}</td>
                    <td className="px-5 py-3 text-[#16A34A] font-semibold border-b border-[#E2E8F0]">
                      {row.href ? (
                        <>
                          <Link href={row.href} className="text-[#E8652B] hover:underline font-medium">{row.linkText}</Link>
                          {" — "}{row.desc}
                        </>
                      ) : (
                        row.desc
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-[#475569]">
            Note: phone calls and messages continue alongside the platform. The change is that operational records move into a system built for them — not that communication moves out of phones.
          </p>
        </div>
      </section>

      {/* RELATED SOLUTIONS */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related Solutions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            What else changes when operational records move into the right system
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
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
            <Link href="/solutions/scaling-without-more-admin" className="text-[#E8652B] hover:underline font-medium">Scaling Without More Admin</Link>
            {" · "}
            <Link href="/solutions/audit-ready-operations" className="text-[#E8652B] hover:underline font-medium">Audit-Ready Operations</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently Asked Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Replacing WhatsApp dispatch — common questions.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See what operations look like when the records are in the right place.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              A 20-minute demo covers the dispatch board, driver app, subcontractor portal and client visibility — everything WhatsApp can&apos;t do.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/solutions/replacing-spreadsheets">
              <Button size="lg" variant="outline" className="border-[#334155] text-white hover:bg-[#1E293B]">
                Replacing Spreadsheets
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

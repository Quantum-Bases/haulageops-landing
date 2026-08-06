import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
  Fuel,
  Wrench,
  Layers,
  Truck,
  FileText,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "Supplier Coordination in HaulageOps | HaulageOps",
  description:
    "Fuel suppliers, parts vendors, materials suppliers and equipment providers — their records belong in the operations system, not in one person's inbox, phone contacts or a spreadsheet nobody else can find.",
};

const heroKickers = [
  "Centralised supplier records",
  "Contacts, terms, documents",
  "Role-based access control",
  "Admin-side management only",
  "No supplier login needed",
  "Team access governed",
];

const supplierCards = [
  {
    icon: Fuel,
    title: "Fuel suppliers",
    desc: "Fuel account numbers, billing contacts, emergency line details and pricing agreements with fuel suppliers are operational-critical information. When this lives in one person's phone or email, a vehicle breakdown at night or a billing dispute in their absence creates a real problem.",
    points: [
      "Account number and billing contact accessible to any authorised team member",
      "Pricing terms stored against the supplier record, not in someone's inbox",
      "Emergency contact details available without calling the person who has them",
    ],
  },
  {
    icon: Wrench,
    title: "Parts and maintenance vendors",
    desc: "Parts suppliers, preferred mechanics and breakdown assistance contacts — when a vehicle goes down, the priority is getting it back. Searching through personal contacts and email threads for a parts supplier account or a mobile mechanic's number adds time that shouldn't be there.",
    points: [
      "Parts vendor contacts and account details in the admin panel",
      "Vehicle-relevant documents and warranty information stored against supplier records",
      "Preferred vendor records accessible to any dispatcher or fleet manager",
    ],
  },
  {
    icon: Layers,
    title: "Materials suppliers",
    desc: "Operators supplying quarry material, aggregate or other bulk products often have established arrangements with materials suppliers. Pricing schedules, contact names, order processes and credit terms benefit from being in one accessible record rather than reconstructed from emails each time.",
    points: [
      "Materials supplier contacts and ordering details centralised",
      "Pricing schedules stored against the supplier record",
      "Credit terms and account status visible to finance and operations teams",
    ],
  },
  {
    icon: Truck,
    title: "Equipment providers",
    desc: "Plant hire, trailer providers and specialist equipment suppliers all need managed records — contract terms, contact details, hire rates and equipment specifications. When a client job requires specialised equipment, knowing which supplier has it available requires that information to be findable.",
    points: [
      "Equipment supplier records with hire rates and contact details",
      "Contract documents stored against the supplier record",
      "Equipment specifications and availability contacts accessible to the team",
    ],
  },
];

const supplierRecords = [
  { name: "Shell — Allied Fuels", category: "Fuel", categoryCls: "bg-[#F59E0B]/15 text-[#FBBF24]", contact: "B. Nguyen", docs: "3 docs" },
  { name: "Auto Parts Direct", category: "Parts", categoryCls: "bg-[#3B82F6]/15 text-[#60A5FA]", contact: "K. Walsh", docs: "2 docs" },
  { name: "Blue Rock Quarries", category: "Materials", categoryCls: "bg-[#A855F7]/15 text-[#C084FC]", contact: "S. Ferreira", docs: "5 docs" },
  { name: "Plant Hire Co.", category: "Equipment", categoryCls: "bg-[#16A34A]/15 text-[#4ADE80]", contact: "M. Rossi", docs: "4 docs" },
];

const relatedCards = [
  {
    title: "Supplier Management",
    href: "/platform/supplier-management",
    desc: "The platform feature page for supplier management — what information is stored, how records are structured, and how access is controlled in the admin panel.",
  },
  {
    title: "Subcontractor Portal",
    href: "/platform/subcontractor-portal",
    desc: "For external transport partners — not suppliers. The subcontractor portal gives carriers a dedicated login to accept jobs, view routes and submit POD. A different solution for a different relationship.",
  },
  {
    title: "Document Management",
    href: "/platform/document-management",
    desc: "Documents stored in Azure Blob Storage and attached to relevant records — supplier documents, contracts, licences and permits all managed in one place with controlled access.",
  },
];

const faqs = [
  {
    q: "Is there a supplier login or portal in HaulageOps?",
    a: "No. There is no supplier login, supplier portal or supplier-facing interface in HaulageOps. Suppliers are managed as data records inside the admin panel by your team. Suppliers themselves have no access to the system and do not interact with it. If you are looking for a portal that external transport partners can log into to accept and manage jobs, that is the subcontractor portal — which is a separate thing. Subcontractors are transport partners; suppliers are vendors of fuel, parts, materials and equipment.",
  },
  {
    q: "What information can be stored against a supplier record?",
    a: "Supplier records can include contact details (names, phone numbers, email addresses), account references, pricing terms, credit arrangements, and attached documents. Documents are stored in Azure Blob Storage and can include contracts, pricing schedules, insurance certificates or any other supplier documentation your team needs to reference. The record is structured to be findable and complete — not a note in a spreadsheet cell.",
  },
  {
    q: "Who can access supplier records?",
    a: "Access to supplier records is controlled by role-based access control in the admin panel. Administrators configure which user roles can view and edit supplier records. This means supplier information is accessible to the team members who need it — operations managers, fleet managers, finance — without being visible to every user in the system. Access is governed by the system, not by who happens to have the right spreadsheet open.",
  },
  {
    q: "Can I attach contracts and pricing documents to a supplier record?",
    a: "Yes. Documents can be uploaded and attached to supplier records — pricing agreements, contracts, insurance certificates and any other documentation relevant to that supplier relationship. Documents are stored in Azure Blob Storage. For more complex contract lifecycle management including review, approval and expiry tracking, see the contract management feature.",
  },
  {
    q: "How is supplier management different from subcontractor management?",
    a: "Subcontractors are external transport partners who carry loads on your behalf. They have a dedicated portal login, they accept and decline jobs, they submit POD, and they appear on the dispatch board. Suppliers are vendors — they sell your operation fuel, parts, materials and equipment. They have no login, no portal and no interaction with HaulageOps. Subcontractor management and supplier management are separate capabilities in the platform, covering two different types of external relationship.",
  },
  {
    q: "Does supplier management connect to job records?",
    a: "Supplier records in HaulageOps are an administrative data entity — they store the information your team needs to manage supplier relationships. They are not directly linked to individual job records in the way that driver or vehicle records are. For operational cost tracking at a job level, the relevant feature is rate management and the financial reporting layer. Supplier records are the reference data that keeps your team informed — contacts, terms and documents in the right place.",
  },
];

export default function SupplierCoordinationPage() {
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
            <span className="text-[#0F172A] font-medium">Supplier Coordination</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            Coordinate Operations
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Supplier information where your team can actually find it.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Fuel suppliers, parts vendors, materials suppliers and equipment providers — their records belong in the operations system, not in one person&apos;s inbox, phone contacts or a spreadsheet nobody else can find.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-200 fill-mode-both">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
                Book a Demo
              </Button>
            </Link>
            <Link href="/platform/supplier-management">
              <Button size="lg" variant="outline" className="border-[#E2E8F0] text-[#334155] hover:bg-[#F8FAFC]">
                Supplier Management
              </Button>
            </Link>
          </div>
          {/* Kicker pills */}
          <div className="mt-8 flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-300 fill-mode-both">
            {heroKickers.map((pill) => (
              <span key={pill} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F1F5F9] text-xs font-medium text-[#334155]">
                <CheckCircle className="h-3.5 w-3.5 text-[#16A34A] shrink-0" />
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-[#0F172A] py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {heroKickers.map((item) => (
              <div key={item} className="flex items-center justify-center gap-2">
                <CheckCircle className="h-3.5 w-3.5 text-[#E8652B] shrink-0" />
                <span className="text-white font-bold text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IMPORTANT DISTINCTION */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Important distinction</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Suppliers are not subcontractors. This solution is about suppliers.
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                Before going further, it helps to be clear on what &ldquo;supplier&rdquo; means in the context of HaulageOps, because there are two types of external parties in a bulk haulage operation that are sometimes confused.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                <strong className="text-[#0F172A]">Subcontractors</strong> are transport partners — external operators who carry loads on your behalf. They are managed through the{" "}
                <Link href="/platform/subcontractor-portal" className="text-[#E8652B] hover:underline font-medium">subcontractor portal</Link>
                , which gives them a dedicated login to accept jobs, view routes and submit proof of delivery. If you&apos;re looking for subcontractor coordination, see the{" "}
                <Link href="/solutions/subcontractor-coordination" className="text-[#E8652B] hover:underline font-medium">Subcontractor Coordination solution page</Link>.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                <strong className="text-[#0F172A]">Suppliers</strong> are vendors of goods and services your operation depends on: fuel suppliers, parts and maintenance vendors, materials suppliers, and equipment providers. They don&apos;t carry your loads. They supply what your operation needs to run.
              </p>
            </div>
            <div>
              <p className="text-[#475569] leading-relaxed">
                Supplier management in HaulageOps is admin-side only. Suppliers are a data entity — a structured record — in the admin panel. There is no supplier login, no supplier-facing portal, and no workflow where a supplier interacts directly with the system.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                What the system does is give your team a governed, centralised place to store supplier information so it&apos;s accessible when needed — not locked in someone&apos;s personal contacts, buried in an email thread, or maintained in a spreadsheet that only one person updates.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                For many haulage operators, supplier information lives in a combination of personal mobile contacts, a spreadsheet maintained by one person, and email threads. When that person is unavailable, or when a new team member needs to find a fuel supplier&apos;s account number, the information simply isn&apos;t accessible through any system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM WITH SCATTERED SUPPLIER INFORMATION */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">The problem with scattered supplier information</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            When supplier information depends on one person, the business depends on one person.
          </h2>
          <p className="mt-6 text-[#475569] max-w-3xl leading-relaxed">
            The practical consequences of supplier records being in personal contacts, individual spreadsheets and email threads show up in predictable ways — and they become more significant as the operation grows.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {supplierCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="bg-white rounded-2xl p-7 border border-[#E2E8F0]">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-[#FFF0E6]">
                      <Icon className="h-5 w-5 text-[#E8652B]" />
                    </span>
                    <h3 className="font-bold text-[#0F172A] text-lg">{card.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-[#475569] leading-relaxed">{card.desc}</p>
                  <ul className="mt-5 space-y-3">
                    {card.points.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                        <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW SUPPLIER MANAGEMENT WORKS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">How supplier management works in HaulageOps</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Structured records. Governed access. No supplier login required.
          </h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#475569] leading-relaxed">
                Supplier records in HaulageOps are created and maintained in the admin panel. Each record contains the information relevant to that supplier type: contacts, pricing terms, account references, and documents. Documents are stored in Azure Blob Storage and attached directly to the supplier record.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                Access to supplier records is governed by role-based access control. Not every team member needs to see every supplier record — admin users can configure which roles have access to supplier information. This means supplier data is accessible to those who need it, not locked in a spreadsheet that only one person maintains, but also not visible to every user in the system.
              </p>
              <p className="mt-4 text-[#475569] leading-relaxed">
                The practical result is that when a team member needs to contact a fuel supplier, find a parts vendor account number, or check the terms with a materials supplier, they look in the same system they use for everything else — the admin panel. Not a spreadsheet. Not someone&apos;s personal contacts. Not an email from six months ago.
              </p>
            </div>
            <div>
              {/* Supplier records visual spec */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
                <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
                  Admin Panel — Supplier Records
                </div>
                <div className="p-4 sm:p-5 space-y-3">
                  <div className="flex flex-wrap gap-1 text-[10px]">
                    {["All", "Fuel", "Parts", "Materials", "Equipment"].map((filter, i) => (
                      <span key={filter} className={`px-2.5 py-1 rounded ${i === 0 ? "bg-[#E8652B] text-white font-semibold" : "bg-[#1E293B] border border-[#334155] text-[#94A3B8]"}`}>
                        {filter}
                      </span>
                    ))}
                  </div>
                  {supplierRecords.map((record) => (
                    <div key={record.name} className="bg-[#1E293B] border border-[#334155] rounded-lg p-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 min-w-0">
                          <FileText className="h-3.5 w-3.5 text-[#64748B] shrink-0" />
                          <span className="text-white text-[11px] font-semibold truncate">{record.name}</span>
                        </div>
                        <span className={`px-1.5 py-0.5 rounded text-[9px] font-semibold whitespace-nowrap ${record.categoryCls}`}>{record.category}</span>
                      </div>
                      <div className="flex items-center justify-between gap-2 mt-1.5 text-[10px] text-[#94A3B8]">
                        <span>Contact: {record.contact}</span>
                        <span>{record.docs}</span>
                      </div>
                    </div>
                  ))}
                  <p className="text-[10px] text-[#475569]">
                    <Lock className="h-3 w-3 inline text-[#4ADE80]" /> Role-based access control governs who can view and edit supplier records.
                  </p>
                </div>
              </div>
              {/* Note callout */}
              <div className="mt-4 p-5 rounded-r-lg border-l-4 border-[#F39A2D] bg-[#F8F9FA]">
                <strong className="block text-sm text-[#0F172A]">Note on supplier access:</strong>
                <p className="mt-1 text-sm text-[#475569] leading-relaxed">
                  Suppliers do not receive a login or any access to HaulageOps. There is no supplier-facing portal. Supplier management is entirely admin-side — your team maintains supplier records; suppliers are not involved in the system. If you are looking for a portal that external transport partners can log into, that is the{" "}
                  <Link href="/platform/subcontractor-portal" className="text-[#E8652B] hover:underline font-medium">subcontractor portal</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PAGES */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Related pages</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Connected platform features
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {relatedCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={card.href} className="hover:text-[#E8652B] transition-colors">
                    {card.title}
                  </Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#475569]">
            Also relevant:{" "}
            <Link href="/platform/contract-management" className="text-[#E8652B] hover:underline font-medium">
              Contract Management
            </Link>{" "}
            ·{" "}
            <Link href="/solutions/owned-and-subcontracted-fleets" className="text-[#E8652B] hover:underline font-medium">
              Owned &amp; Subcontracted Fleets
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Frequently Asked Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Supplier coordination — common questions.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Supplier records belong in your operations system.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              A demo covers how supplier management, subcontractor coordination and document management work together in one connected platform.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/demo">
              <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold w-full sm:w-auto">
                Book a Demo
              </Button>
            </Link>
            <Link href="/solutions">
              <Button size="lg" variant="outline" className="border-[#334155] text-white hover:bg-[#1E293B] w-full sm:w-auto">
                All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

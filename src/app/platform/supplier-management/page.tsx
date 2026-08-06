import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, FolderOpen } from "lucide-react";

export const metadata = {
  title: "Supplier Management in Haulage Operations | HaulageOps",
  description:
    "Maintain supplier records for fuel, parts, materials and equipment vendors — governed in your admin panel and connected to your operational context.",
};

const heroKickers = [
  "Admin-panel managed",
  "Fuel, parts, materials, equipment",
  "Contacts, terms, documents",
  "No supplier portal or login",
];

const proofStrip = [
  { strong: "4 supplier types", sub: "Fuel, parts, materials, equipment" },
  { strong: "Admin-governed", sub: "Your team manages records, not suppliers" },
  { strong: "Structured data", sub: "Not an inbox, not a spreadsheet" },
  { strong: "Documents stored", sub: "Contracts, terms, certificates in Azure" },
  { strong: "Honest scope", sub: "No supplier portal — clearly stated" },
];

const supplierFields = [
  "Supplier name — company trading name",
  "Supplier type — fuel, parts/maintenance, materials, equipment",
  "Primary contact — name, phone, email",
  "Accounts contact — billing and invoice queries",
  "Account number — your account reference with this supplier",
  "Payment terms — agreed credit terms (e.g. 30-day net)",
  "Preferred for — what this supplier is used for in your operation",
  "Status — active, preferred, inactive, under review",
  "Notes — operational notes, delivery restrictions, ordering process",
];

const supplierDocuments = [
  "Supply agreement or contract — signed document uploaded to Azure",
  "Price schedules — agreed pricing documents or rate lists",
  "Account opening forms — reference documents for the account relationship",
  "Insurance certificates — where relevant to the supplier relationship",
  "Safety data sheets — for fuel or materials suppliers where relevant",
  "Any other operational document — stored against the record for reference",
];

const supplierTypeCards = [
  {
    title: "Fuel suppliers",
    desc: "Fuel is typically a haulage operator's largest variable cost. The fuel supplier relationship involves account management, fuel card arrangements, card limits, and pricing agreements that may be based on bulk volume or linked to a market index. Maintaining the supplier contact, account number, card details reference and pricing agreement in one record means this information is accessible to the operations manager, finance team and any driver coordinator who needs it — not locked in one person's inbox.",
    desc2: "Fuel supplier records can store the account number, primary contact at the fuel company, the card arrangement details as a document, and the agreed pricing terms. When the fuel company updates its pricing structure, the new schedule is uploaded to the record. The previous version is retained in the document history.",
  },
  {
    title: "Parts and maintenance vendors",
    desc: "Truck parts, tyres, workshop services and maintenance contractors are the second category of operational supplier. A parts supplier record stores the contact for emergency breakdown situations, the account credit terms, any preferred pricing arrangement your company has negotiated, and the account number for ordering. For fleet operators who rely on a small number of trusted parts suppliers, having those contacts and terms in the system means any dispatcher or fleet manager can find and use the information — not just the person who originally set up the account.",
    desc2: "Maintenance contractors — roadside assistance, tyre service providers, hydraulic specialists — can also be maintained as parts/maintenance supplier records. The type is a label, not a rigid category, so you can adapt it to how your operation actually classifies its vendor relationships.",
  },
  {
    title: "Materials suppliers",
    desc: "For operators involved in materials supply — quarries, aggregate suppliers, fill materials, concrete — the materials supplier record stores the relationship with those sources. Contact details, ordering process notes, pricing schedules and any supply agreements can be maintained here. If your operation sources material from multiple quarries depending on job location and material type, a record per supplier keeps that information organised and searchable rather than held in individual email threads.",
  },
  {
    title: "Equipment suppliers and hire companies",
    desc: "Equipment hire companies — crane hire, float hire, specialised transport equipment — are another supplier category relevant to bulk haulage and construction logistics. Equipment hire relationships often involve negotiated rates for specific equipment types, preferred booking contacts, and account terms. Storing these in the equipment supplier record means the dispatcher booking a float or a crane can find the right contact and the account reference without searching through old emails.",
  },
];

const supplierVsSubcontractorNote =
  "Suppliers and subcontractors are fundamentally different relationships in HaulageOps. Subcontractors are external transport operators you delegate jobs to — they receive jobs, complete them, update status, and interact with your operation through the dedicated subcontractor portal. Suppliers provide goods or services (fuel, parts, materials, equipment) that your operation purchases — they have no interaction with the HaulageOps platform itself. If you are unsure whether a company should be a supplier record or a subcontractor record, the test is simple: are you delegating a haulage job to them? If yes, they are a subcontractor. If you are purchasing something from them, they are a supplier.";

const designRationaleLeft = [
  "A supplier portal requires your suppliers to create accounts, log in, learn a new interface, and update their information. For large procurement organisations managing hundreds of suppliers across complex supply chains, the administrative efficiency gains justify that onboarding overhead. For a haulage operator managing 5–15 suppliers — typically a fuel company, a parts dealer, a couple of quarries and maybe an equipment hire firm — asking each of those businesses to log into your TMS is disproportionate to the problem being solved.",
  "Supplier information for haulage operators does not change frequently. A fuel account number, a parts supplier contact, and a materials pricing schedule are relatively stable data points. The problem is not that suppliers need to update their own records constantly — the problem is that operator-side supplier information is disorganised and inaccessible when needed.",
];

const designRationaleRight = [
  "The actual problem is that supplier information — contacts, account numbers, payment terms, pricing agreements — is currently scattered across email inboxes, phone contacts and spreadsheets maintained by specific individuals. When those individuals are away or leave, the information becomes hard to find or is lost entirely.",
  "HaulageOps solves this by making supplier information a structured, governed data entity in the admin panel — accessible to any admin user, maintained in one place, and not dependent on any individual's personal organisation system. That is a meaningful improvement over the status quo, achieved without the complexity of a supplier-facing portal.",
  "If you have a requirement for suppliers to submit their own data or invoices through a portal, that is a procurement or accounts payable workflow — not a haulage operations problem. Dedicated procurement and AP systems are better suited to that requirement. HaulageOps focuses on the haulage operations layer.",
];

const operationalExampleCards = [
  {
    title: "Example: fleet breakdown",
    desc: "A truck breaks down on a job. The dispatcher needs to call the breakdown recovery supplier and the parts vendor simultaneously. Both contacts are in the supplier records in HaulageOps — the same system the dispatcher is already looking at to manage the affected job, find a replacement vehicle, and notify the client. No separate phonebook required.",
  },
  {
    title: "Example: materials job creation",
    desc: "A job requires sourcing aggregate from a specific quarry. The quarry is recorded as a materials supplier with the ordering contact and account reference. When creating the job, the dispatcher can reference the supplier record to confirm the account details before placing the order — both are in the same system, no tab-switching required.",
  },
  {
    title: "Example: new staff onboarding",
    desc: "A new operations manager joins and needs to understand the company's supplier relationships. Rather than spending days extracting contacts from email threads and personal phone contacts, they access the supplier records in HaulageOps — a structured list of every active supplier, their contacts, terms and relevant documents. Onboarding time reduced significantly.",
  },
];

const connectedModules = [
  {
    title: "Subcontractor Portal",
    href: "/platform/subcontractor-portal",
    desc: "Subcontractors — external transport companies you delegate jobs to — use the dedicated subcontractor portal. This is fundamentally different from supplier management. If you are looking for a way to interact with external transport partners operationally, the subcontractor portal is the right tool — not supplier records.",
  },
  {
    title: "Document Management",
    href: "/platform/document-management",
    desc: "Documents uploaded against supplier records — contracts, price schedules, safety data sheets — are stored in Azure Blob Storage through the same document management infrastructure used for POD, driver records and fleet documents. Supplier documents are accessible from the supplier record and managed through the same storage layer as all other platform documents.",
  },
  {
    title: "Dispatch Management",
    href: "/platform/dispatch-management",
    desc: "Dispatch is where supplier context most often becomes relevant in an operational crisis — a breakdown, a materials shortage, an equipment requirement. Having supplier contacts in the same system as the dispatch board means the person managing the job can access the supplier contact without leaving the platform or asking someone else to look it up.",
  },
];

const faqs = [
  {
    q: "Is there a supplier portal where suppliers can log in?",
    a: "No. There is no supplier portal in HaulageOps. Suppliers do not receive login access, they do not submit invoices or update their own details through the platform, and they have no visibility into your operations. Supplier management in HaulageOps is entirely handled by your admin team — it is an internal record-keeping tool, not a supplier-facing collaboration platform. If you need a portal for external transport partners who receive and manage jobs delegated by your operation, that is the subcontractor portal, which is purpose-built for that relationship.",
  },
  {
    q: "What information can I store against a supplier record?",
    a: "Each supplier record stores: company name, supplier type (fuel, parts, materials, equipment), primary contact name and details, accounts contact, your account number with the supplier, payment terms, status (active, preferred, inactive), and free-text notes. Documents can be uploaded against the record — contracts, price schedules, safety data sheets, or any other relevant file. Documents are stored in Azure Blob Storage and accessible from the supplier record at any time.",
  },
  {
    q: "How does supplier management connect to jobs?",
    a: "Supplier records are reference data, not transactional records that link directly to individual job records in the current version. They provide your team with organised, accessible supplier information within the same operational system — so when a job-related situation requires contacting a fuel supplier, parts vendor or materials source, the contact is in the same system the dispatcher is already using. Direct job-to-supplier linkage (for example, recording which fuel supplier was used for a specific job or which materials supplier provided a specific load) is not an automated feature in the current version; that level of cost accounting is better handled in your finance system.",
  },
  {
    q: "Can I manage materials suppliers — quarries, aggregate suppliers — as supplier records?",
    a: "Yes. Materials suppliers are one of the four supplier types in HaulageOps. A quarry or aggregate supplier record can store the ordering contact, account reference, pricing schedule (uploaded as a document), delivery terms, and any notes about their processes. For operators who source materials from multiple suppliers depending on job location or material type, maintaining a record per supplier allows dispatchers to quickly find the right contact and account details without searching through email histories.",
  },
  {
    q: "What is the difference between a supplier and a subcontractor in HaulageOps?",
    a: "A subcontractor is an external transport operator to whom you delegate haulage jobs. They receive jobs through the subcontractor portal, accept or decline, update job status, and interact with your operation operationally. A supplier provides goods or services — fuel, parts, materials, equipment — that your company purchases. Suppliers have no interaction with HaulageOps; they are managed as internal records by your admin team. The practical test: if you are sending them a job to complete, they are a subcontractor. If you are buying something from them, they are a supplier.",
  },
  {
    q: "Can all admin users see supplier records, or is access restricted?",
    a: "Supplier records are accessible to users with admin panel access — administrators and, depending on your RBAC configuration, senior dispatchers or operations managers. Drivers accessing the driver app and subcontractors using the subcontractor portal cannot see supplier records. Client portal users cannot see supplier records. Access to supplier information is governed by the same role-based access control applied to other sensitive operational data in HaulageOps — you control which roles can view and edit supplier records through the RBAC settings.",
  },
  {
    q: "Can I store supplier contracts in HaulageOps, or do I need the contract management module for that?",
    a: "Basic document upload against a supplier record — including uploading a supplier contract as a PDF — is available within supplier management. If you need the full contract lifecycle management features — structured creation, review workflow, version control, approval stages, automated expiry alerts with notification — that is handled in the contract management module. The two are complementary: you might use contract management for the formal lifecycle of a significant supply agreement and store the final signed document against the supplier record for easy operational reference. Both options are available depending on the complexity of your contract management requirements.",
  },
];

export default function SupplierManagementPage() {
  return (
    <MainLayout showCta={false}>
      {/* Breadcrumb */}
      <div className="pt-24 pb-0 bg-[#FFF9F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#64748B]">
            <Link href="/" className="hover:text-[#E8652B]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/platform" className="hover:text-[#E8652B]">Platform</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0F172A] font-medium">Supplier Management</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#FFF9F5] via-[#FFF5EE]/40 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8652B] bg-[#FFF0E6] mb-4 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-both">
            External Partners
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-100 fill-mode-both">
            Supplier records governed inside your operations, not scattered across inboxes.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#475569] max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-both">
            Fuel suppliers, parts vendors, materials suppliers and equipment providers — all maintained as structured records in the HaulageOps admin panel. Managed by your team. No supplier login. No supplier portal. Just organised information where your operations team can find it.
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {proofStrip.map((item) => (
              <div key={item.strong} className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-sm">{item.strong}</span>
                <span className="text-[#94A3B8] text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SCOPE BOX + SUPPLIER RECORDS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Important scope callout */}
          <div className="p-6 sm:p-8 bg-[#FFF8EC] border-2 border-[#F39A2D] rounded-xl mb-12">
            <h3 className="mt-0 text-xl font-bold text-[#C47A00]">What supplier management is in HaulageOps — and what it is not</h3>
            <p className="mt-4 mb-3 text-[#334155] leading-relaxed">
              <strong>Suppliers are a data entity managed inside the HaulageOps Admin Panel by your team.</strong> You create and maintain supplier records — contacts, terms, documents, notes. Your admin team governs this information. It is organised and accessible from within the same system where you manage jobs, dispatch, fleet and billing.
            </p>
            <p className="mb-0 text-[#334155] leading-relaxed">
              <strong>There is no supplier portal. Suppliers do not log in. Suppliers do not receive access to HaulageOps.</strong> This is a deliberate product decision — supplier management in HaulageOps is an internal record-keeping tool for the operating company, not a collaboration platform for suppliers. If you need a portal through which external transport partners interact with your operation, that is the{" "}
              <Link href="/platform/subcontractor-portal" className="text-[#E8652B] hover:underline font-medium">
                Subcontractor Portal
              </Link>
              , which is purpose-built for that purpose.
            </p>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">What Supplier Records Hold</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Structured supplier information where your operations team can find it.
          </h2>
          <p className="mt-6 text-[#475569] max-w-4xl leading-relaxed">
            The problem supplier management solves is simple: supplier information for a haulage operation — fuel card contacts, parts supplier account numbers, materials vendor terms, equipment hire details — is currently spread across multiple people&apos;s email inboxes, personal phone contacts, and disconnected spreadsheets. When the person who manages the fuel account leaves, their successor spends days reconstructing who to call and what the terms are. HaulageOps puts that information in a structured, shared record that persists independently of any individual.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">Core supplier record fields</h3>
              <ul className="space-y-3">
                {supplierFields.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <CheckCircle className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-5">Documents stored per supplier</h3>
              <ul className="space-y-3">
                {supplierDocuments.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#334155]">
                    <FolderOpen className="h-4 w-4 text-[#E8652B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM VIEW — VISUAL SPEC */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Platform View</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Supplier panel — organised by type, accessible to your admin team.
          </h2>
          <div className="mt-10 rounded-2xl border border-[#E2E8F0] bg-[#0D1525] overflow-hidden">
            <div className="px-5 py-3 bg-[#1E293B] text-[#E8652B] text-xs font-bold uppercase tracking-widest">
              HaulageOps — Supplier Management Panel (Admin)
            </div>
            <div className="p-6 sm:p-8 text-[#94A3B8] text-sm font-mono leading-relaxed">
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#1E293B] text-[#64748B] uppercase tracking-wider text-[10px]">
                      <th className="text-left px-3 py-2 font-semibold">Supplier Name</th>
                      <th className="text-left px-3 py-2 font-semibold">Type</th>
                      <th className="text-left px-3 py-2 font-semibold">Contact</th>
                      <th className="text-left px-3 py-2 font-semibold">Account No.</th>
                      <th className="text-left px-3 py-2 font-semibold">Payment Terms</th>
                      <th className="text-left px-3 py-2 font-semibold">Status</th>
                      <th className="text-left px-3 py-2 font-semibold">Documents</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "National Fuel Co", type: "Fuel", typeCls: "text-[#E8652B] bg-[#E8652B]/20", contact: "S. Ahmed", account: "NF-2210", terms: "30-day net", status: "Active", statusCls: "text-[#4ADE80] bg-[#16A34A]/20", docs: "2" },
                      { name: "Metro Parts & Tyres", type: "Parts", typeCls: "text-[#4ADE80] bg-[#16A34A]/20", contact: "R. Costa", account: "MP-8841", terms: "14-day net", status: "Active", statusCls: "text-[#4ADE80] bg-[#16A34A]/20", docs: "1" },
                      { name: "Quarry Supplies Ltd", type: "Materials", typeCls: "text-[#FBBF24] bg-[#FBBF24]/10", contact: "D. Marsh", account: "QS-3302", terms: "30-day net", status: "Preferred", statusCls: "text-[#E8652B] bg-[#E8652B]/20", docs: "3" },
                    ].map((row) => (
                      <tr key={row.name} className="border-t border-[#1E293B]">
                        <td className="px-3 py-2.5 text-white font-medium">{row.name}</td>
                        <td className="px-3 py-2.5">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${row.typeCls}`}>{row.type}</span>
                        </td>
                        <td className="px-3 py-2.5">{row.contact}</td>
                        <td className="px-3 py-2.5">{row.account}</td>
                        <td className="px-3 py-2.5">{row.terms}</td>
                        <td className="px-3 py-2.5">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${row.statusCls}`}>{row.status}</span>
                        </td>
                        <td className="px-3 py-2.5">{row.docs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-[#475569] text-xs">
                Filter bar: All Types / Fuel / Parts / Materials / Equipment / Active Only. Clicking a row opens the supplier detail panel with contacts tab, documents tab, and notes field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPLIER TYPES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Supplier Types</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Four supplier types that cover the operational relationships a haulage business manages.
          </h2>
          <p className="mt-6 text-[#475569] max-w-4xl leading-relaxed">
            Haulage operators deal with a consistent set of supplier categories. HaulageOps organises suppliers into four types, which allows your team to filter the supplier list by category when looking for the relevant contact — rather than scrolling through a mixed list of every vendor the company has ever dealt with.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supplierTypeCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
                {card.desc2 && <p className="mt-3 text-sm text-[#475569] leading-relaxed">{card.desc2}</p>}
              </div>
            ))}
            {/* Note card */}
            <div className="bg-[#FFF8EC] rounded-2xl p-6 border-2 border-[#F39A2D]">
              <h3 className="font-bold text-[#C47A00] mb-2">A note on supplier vs subcontractor</h3>
              <p className="text-sm text-[#334155] leading-relaxed">{supplierVsSubcontractorNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN RATIONALE */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Design Rationale</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Why there is no supplier portal — and why that is the right call.
          </h2>
          <p className="mt-6 text-[#475569] max-w-4xl leading-relaxed">
            Some platforms offer a supplier portal — a login for suppliers to submit invoices, update their details, or view order history. For a haulage TMS focused on operators in the 15–80 vehicle range, a supplier portal adds complexity without proportionate value.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">What a supplier portal would require</h3>
              {designRationaleLeft.map((p, i) => (
                <p key={i} className={`text-sm text-[#475569] leading-relaxed ${i > 0 ? "mt-4" : ""}`}>{p}</p>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">What HaulageOps actually solves</h3>
              {designRationaleRight.map((p, i) => (
                <p key={i} className={`text-sm text-[#475569] leading-relaxed ${i > 0 ? "mt-4" : ""}`}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPERATIONAL CONNECTION */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Operational Connection</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Supplier records in context — not isolated from your operations.
          </h2>
          <p className="mt-6 text-[#475569] max-w-4xl leading-relaxed">
            Supplier records in HaulageOps sit alongside the rest of your operational data in the admin panel. The fuel supplier whose card your drivers use is in the same system where you manage their vehicles, jobs and dispatch. The parts vendor contact is in the same system your fleet manager uses to track vehicle document expiry. The materials supplier is in the same system where you create jobs that require that material.
          </p>
          <p className="mt-4 text-[#475569] max-w-4xl leading-relaxed">
            This does not mean supplier records drive automated job creation or cost capture — they are reference records, not transactional records in the accounting sense. But having them in the same operational system reduces the number of places your team needs to look when managing a situation that involves both a supplier relationship and an operational decision.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {operationalExampleCards.map((card) => (
              <div key={card.title} className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTED PLATFORM */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Connected Platform</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A] max-w-3xl">
            Supplier management connects to document storage, dispatch and subcontractor coordination.
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {connectedModules.map((mod) => (
              <div key={mod.title} className="bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="font-bold text-[#0F172A] mb-2">
                  <Link href={mod.href} className="hover:text-[#E8652B] transition-colors">
                    {mod.title}
                  </Link>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#475569]">
            Also see:{" "}
            <Link href="/solutions/supplier-coordination" className="text-[#E8652B] hover:underline font-medium">
              Supplier Coordination solution
            </Link>{" "}
            |{" "}
            <Link href="/platform/subcontractor-management" className="text-[#E8652B] hover:underline font-medium">
              Subcontractor Management
            </Link>{" "}
            |{" "}
            <Link href="/platform/contract-management" className="text-[#E8652B] hover:underline font-medium">
              Contract Management
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8652B]">Common Questions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Supplier Management — frequently asked questions
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">See supplier records alongside your full operations in a live demo.</h2>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed max-w-xl">
              In a 20-minute demo we&apos;ll show you the admin panel, supplier records, how they connect to the rest of your operational data — and be honest about where the scope ends.
            </p>
          </div>
          <Link href="/demo" className="shrink-0">
            <Button size="lg" className="bg-[#E8652B] hover:bg-[#D05520] text-white font-semibold">
              Book a Demo
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}

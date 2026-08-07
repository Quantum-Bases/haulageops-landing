import { IndustriesPage } from "@/pages/IndustriesPage";

export const metadata = {
  title: "Industry Solution | HaulageOps",
  description: "Bulk haulage, earthworks, quarries, and civil construction transport management.",
};

export function generateStaticParams() {
  return [
    { slug: "bulk-haulage" },
    { slug: "civil-construction" },
    { slug: "construction-logistics" },
    { slug: "earthworks" },
    { slug: "heavy-materials" },
    { slug: "material-transport" },
    { slug: "muckaway-and-spoil" },
    { slug: "quarries-and-aggregates" },
    { slug: "regional-haulage" },
    { slug: "tipper-fleets" },
    { slug: "waste-and-recycling" },
  ];
}

export default function Page() {
  return <IndustriesPage />;
}


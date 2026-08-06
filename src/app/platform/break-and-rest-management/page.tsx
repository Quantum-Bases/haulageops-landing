import { PlatformBreakAndRestPage } from "@/pages/PlatformBreakAndRestPage";

export const metadata = {
  title: "Driver Break and Rest Records | HaulageOps",
  description: "Record driver break and rest periods in the field through the driver app. Relevant for Chain of Responsibility obligations — not an Electronic Work Diary.",
};

export default function Page() {
  return <PlatformBreakAndRestPage />;
}

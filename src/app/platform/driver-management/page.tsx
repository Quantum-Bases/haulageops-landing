import { PlatformDriverManagementPage } from "@/pages/PlatformDriverManagementPage";

export const metadata = {
  title: "Driver Management for Haulage Operators | HaulageOps",
  description: "Manage driver records, licences, medicals, inductions and availability. Document expiry alerts before problems happen. All connected to daily dispatch.",
};

export default function Page() {
  return <PlatformDriverManagementPage />;
}

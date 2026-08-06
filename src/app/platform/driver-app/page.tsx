import { PlatformDriverAppPage } from "@/pages/PlatformDriverAppPage";

export const metadata = {
  title: "Driver App for Bulk Haulage | HaulageOps",
  description: "iOS and Android driver app built for bulk haulage. Works offline. Job assignments, status updates, POD capture and break records in one mobile workflow.",
};

export default function Page() {
  return <PlatformDriverAppPage />;
}

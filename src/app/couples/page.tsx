import { Metadata } from "next";
import { seoMetadata } from "@/utils/metadata";
import CouplesAndPrivateGroupsPage from "../couples-and-private-groups/page";

export const metadata: Metadata = seoMetadata.couplesAndGroups;

export default function CouplesPage() {
  return <CouplesAndPrivateGroupsPage />;
}

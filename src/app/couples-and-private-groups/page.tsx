import { Metadata } from "next";
import { seoMetadata } from "@/utils/metadata";
import TitleSection from "@/components/TitleSection";
import { homePageData } from "../(home)/components/pageData";
import CouplesHero from "./components/CouplesHero";
import CouplesSection from "./components/CouplesSection";
import PrivateGroupsSection from "./components/PrivateGroupsSection";
import { couplesPageData } from "./components/pageData";

export const metadata: Metadata = seoMetadata.couplesAndGroups;

export default function CouplesAndPrivateGroupsPage() {
  return (
    <main>
      {/* 1. Hero Banner */}
      <CouplesHero {...couplesPageData.hero} />

      <div className="relative z-10">
        {/* 2. Location & Climate Ticker Bar #1 (Dark Green) */}
        <TitleSection titles={homePageData.titles} />

        {/* 3. For Couples Section (Cream Background) */}
        <CouplesSection {...couplesPageData.couples} />

        {/* 4. For Families & Private Groups Section (Forest Green Background) */}
        <PrivateGroupsSection {...couplesPageData.groups} />

        {/* 5. Location & Climate Ticker Bar #2 (Light Cream) */}
        <TitleSection titles={homePageData.titles} colorChange />
      </div>
    </main>
  );
}

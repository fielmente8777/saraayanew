import { Metadata } from "next";
import { seoMetadata } from "@/utils/metadata";
import TitleSection from "@/components/TitleSection";
import EscapeSection from "../(home)/components/EscapeSection";
import { homePageData } from "../(home)/components/pageData";
import GettingHereHero from "./components/GettingHereHero";
import SettingSection from "./components/SettingSection";
import FinalStretchSection from "./components/FinalStretchSection";
import PreparedSection from "./components/PreparedSection";
import { gettingHerePageData } from "./components/pageData";

export const metadata: Metadata = seoMetadata.gettingHere;

export default function GettingHerePage() {
  return (
    <main>
      {/* 1. Top Hero Banner (banner1.jpg) */}
      <GettingHereHero {...gettingHerePageData.hero} />

      <div className="relative z-10">
        {/* 2. Location & Climate Ticker Bar #1 */}
        <TitleSection titles={homePageData.titles} />

        {/* 3. Setting & Location Section */}
        <SettingSection {...gettingHerePageData.setting} />

        {/* 4. The Final Stretch Section */}
        <FinalStretchSection {...gettingHerePageData.finalStretch} />

        {/* 5. Location & Climate Ticker Bar #2 */}
        <TitleSection titles={homePageData.titles} colorChange />


        {/* 6. Lower Banner - Escape Section (banner2.jpg) */}
        <EscapeSection {...gettingHerePageData.escapeBanner} />

        {/* 7. Come Prepared for the Mountains Section */}
        <PreparedSection {...gettingHerePageData.prepared} />
      </div>
    </main>
  );
}

import { Metadata } from "next";
import { seoMetadata } from "@/utils/metadata";
import TitleSection from "@/components/TitleSection";
import { homePageData } from "../(home)/components/pageData";
import ExperienceHero from "./components/ExperienceHero";
import UnstructuredSection from "./components/UnstructuredSection";
import StoriesSection from "./components/StoriesSection";
import { experiencePageData } from "./components/pageData";

export const metadata: Metadata = seoMetadata.experiences;

export default function ExperiencesPage() {
  return (
    <main>
      {/* 1. Hero Banner */}
      <ExperienceHero {...experiencePageData.hero} />

      <div className="relative z-10">
        {/* 2. Location & Climate Slider/Ticker Bar */}
        <TitleSection titles={homePageData.titles} />

        {/* 3. Intentionally Unstructured Section */}
        <UnstructuredSection {...experiencePageData.unstructured} />

        {/* 4. Days arranged like Stories — Curated Experiences Carousel */}
        <StoriesSection {...experiencePageData.curated} />
      </div>
    </main>
  );

}

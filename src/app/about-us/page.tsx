import { Metadata } from "next";
import { seoMetadata } from "@/utils/metadata";
import TitleSection from "@/components/TitleSection";
import Banner from "./components/Banner";
import MountainSection from "./components/MountainSection";
import { storyPageData } from "./components/pageData";
import { homePageData } from "../(home)/components/pageData";

export const metadata: Metadata = seoMetadata.about;

const page = () => {
    return (
        <main>
            <TitleSection titles={homePageData.titles} />
            <Banner {...storyPageData.hero} />
            <MountainSection {...storyPageData.ancestralSection} />
        </main>
    );
}

export default page;
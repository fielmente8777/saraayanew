import TitleSection from "@/components/TitleSection";
import Banner from "./components/Banner";
import MountainSection from "./components/MountainSection";
import { storyPageData } from "./components/pageData";
import { homePageData } from "../(home)/components/pageData";

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
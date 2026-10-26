import { createPageMetadata } from "@/utils/metadata";
import TitleSection from "@/components/TitleSection";
import Banner from "./components/Banner";
import MountainSection from "./components/MountainSection";
import { storyPageData } from "./components/pageData";
import { homePageData } from "../(home)/components/pageData";

export const metadata = createPageMetadata(
  "/about-us/",
  "Our Story | Saraaya Glamps near Dharamshala",
  "Meet Saraaya, a family-hosted glamping retreat in Nauhali near Dharamshala. Discover four private safari suites, forest surroundings and thoughtful hospitality."
);

const page = () => {
  return (
    <main>
      <TitleSection titles={homePageData.titles} />
      <Banner {...storyPageData.hero} />
      <MountainSection {...storyPageData.ancestralSection} />
    </main>
  );
};

export default page;

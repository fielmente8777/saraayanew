import TitleSection from "@/components/TitleSection";
import ImgBanner from "@/components/banners/ImgBanner";
import ReviewsSection from "../(home)/components/ReviewsSection";
import { homePageData } from "../(home)/components/pageData";
import RoomAbout from "./components/RoomAbout";
import RoomCardSection from "./components/RoomCardSection";
import { accommodationPageData } from "./components/pageData";

const page = () => {
  return (
    <main>
      <ImgBanner {...accommodationPageData.hero} />
      <TitleSection titles={homePageData.titles} />
      <RoomAbout {...accommodationPageData.about} />
      {/* <SlidingTitle items={accommodationPageData.title} /> */}
      <RoomCardSection cards={accommodationPageData.accommodations} />
      {/* <EscapeSection {...accommodationPageData.feelingSection} /> */}
      <ReviewsSection {...homePageData.reviewsSection} />
      <TitleSection titles={homePageData.titles} colorChange />
    </main>
  );
};

export default page;

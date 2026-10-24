import StayGuideLinks from "@/components/seo/StayGuideLinks";
import { createPageMetadata } from "@/utils/metadata";
import VideoBanner from "@/components/banners/VideoBanner";
import { homePageData } from "./components/pageData";
import About from "./components/About";
import EscapeSection from "./components/EscapeSection";
import ReviewsSection from "./components/ReviewsSection";
import GlampsSection from "./components/GlampsSection";
import ExperiencesSection from "./components/ExperiencesSection";
import TitleSection from "@/components/TitleSection";
// import ImageSlide from "@/components/banners/ImageSlide";

export const metadata = createPageMetadata(
  "/",
  "Saraaya Glamps | Luxury Glamping in Dharamshala",
  "Discover Saraaya near Dharamshala: four private luxury tents, mountain views, heaters and thoughtful comforts. Plan your Himalayan escape with our hosts."
);

const page = () => {
  return (
    <main>
      {/* <ImageSlide {...homePageData.banner} /> */}
      <VideoBanner {...homePageData.banner} />
      <TitleSection titles={homePageData.titles} />
      <About {...homePageData.about} />
      <EscapeSection {...homePageData.escapeSection} />
      <GlampsSection {...homePageData.glampsSection} />
      <ExperiencesSection {...homePageData.experiencesSection} />
      <StayGuideLinks />
      <TitleSection titles={homePageData.titles} colorChange={true} />
      {/* <EscapeSection {...homePageData.feelingSection} /> */}
      <ReviewsSection {...homePageData.reviewsSection} />
      <TitleSection titles={homePageData.titles} colorChange={true} />
    </main>
  );
};

export default page;

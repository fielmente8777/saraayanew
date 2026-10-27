import { createPageMetadata } from "@/utils/metadata";
import TitleSection from "@/components/TitleSection";
import ImgBanner from "@/components/banners/ImgBanner";
import ReviewsSection from "../(home)/components/ReviewsSection";
import { homePageData } from "../(home)/components/pageData";
import RoomAbout from "./components/RoomAbout";
import RoomCardSection from "./components/RoomCardSection";
import { accommodationPageData } from "./components/pageData";

export const metadata = createPageMetadata(
  "/rooms/",
  "Private Safari Suites near Dharamshala | Saraaya Glamps",
  "Explore Saraaya’s four private safari suites near Dharamshala, with king-size beds, heaters, attached bathrooms and private decks. Enquire for your dates."
);

const page = () => {
  return (
    <main>
      <ImgBanner {...accommodationPageData.hero} />
      <TitleSection titles={homePageData.titles} />
      <RoomAbout {...accommodationPageData.about} />
      <section className="relative bg-background px-6 py-8 text-primary">
        <div className="mx-auto max-w-4xl space-y-3">
          <h2 className="font-primary text-3xl">Planning Your Group’s Stay</h2>
          <p>Saraaya welcomes couples, families and small groups. Our four private Safari suites are shown on a two-guest basis. Additional sleeping arrangements may be available on request, subject to confirmation.</p>
          <p>Please confirm the number of adults and children, children’s ages, bedding requirements and any additional charges with our team before booking.</p>
        </div>
      </section>
      <RoomCardSection cards={accommodationPageData.accommodations} />
      {/* <EscapeSection {...accommodationPageData.feelingSection} /> */}
      <ReviewsSection {...homePageData.reviewsSection} />
      <TitleSection titles={homePageData.titles} colorChange />
    </main>
  );
};

export default page;

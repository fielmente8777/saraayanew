import { createPageMetadata } from "@/utils/metadata";
import Form2 from "@/components/forms/Form2";
import { SectionWithContainer } from "@/components/sectionComponants";
import Testimonial from "@/components/sectionComponants/Testimonial";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import Experiences from "./components/Experiences";
import LandingAbout from "./components/LandingAbout";
import { landingPageData } from "./components/landingPageData";
import Rooms from "./components/Rooms";
import { homePageData } from "../(home)/components/pageData";
import Video from "@/components/banners/Video";
import CorePillars from "./components/CorePillars";
import ReelFeature from "./components/ReelFeature";
import QuieterSide from "./components/QuieterSide";

export const metadata = {
  ...createPageMetadata(
    "/landing-page/",
    "Plan Your Glamping Escape | Saraaya Dharamshala",
    "Discover private safari tents near Dharamshala. Share your dates with Saraaya for availability, rates and a thoughtfully planned mountain escape."
  ),
  robots: { index: false, follow: true },
};

export default function LandingPage() {
  return (
    <main className="bg-background">
      {/* <Banner {...landingPageData.bannerData} /> */}
      <Video {...homePageData.banner} />
      <LandingAbout {...landingPageData.about} />
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="border-b border-Primary lg:pb-16 pb-10"
        containerClassName="border border-primary md:rounded-3xl p-0!"
      >
        <div className="md:rounded-3xl md:py-3 py-6 bg-primary px-0">
          <Form2 />
        </div>
      </SectionWithContainer>
      {/* <SignatureTherapies {...landingPageData.signatureTherapiesData} /> */}
      <CorePillars {...landingPageData.corePillars} />
      <ReelFeature items={landingPageData.reelFeatures} />
      <Rooms {...landingPageData.rooms} />
      <SlidingTitle items={landingPageData.titles} />
      <Experiences {...landingPageData.experiences} />

      <QuieterSide {...landingPageData.quieterSide} />
      <Testimonial {...landingPageData.testimonialData} />
    </main>
  );
}

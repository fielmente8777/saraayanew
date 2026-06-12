import Form2 from "@/components/forms/Form2";
import { SectionWithContainer } from "@/components/sectionComponants";
import Testimonial from "@/components/sectionComponants/Testimonial";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import Banner from "./components/Banner";
import Experiences from "./components/Experiences";
import LandingAbout from "./components/LandingAbout";
import { landingPageData } from "./components/landingPageData";
import Rooms from "./components/Rooms";
import SignatureTherapies from "./components/SignatureTherapies";

export default function LandingPage() {
  return (
    <main className="bg-background">
      <Banner {...landingPageData.bannerData} />
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
      <SignatureTherapies {...landingPageData.signatureTherapiesData} />
      <Rooms {...landingPageData.rooms} />
      <SlidingTitle items={landingPageData.titles} />
      <Experiences {...landingPageData.experiences} />
      <Testimonial {...landingPageData.testimonialData} />
    </main>
  );
}

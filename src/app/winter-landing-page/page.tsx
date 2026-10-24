import { createPageMetadata } from "@/utils/metadata";
import type { Metadata } from "next";
import Form2 from "@/components/forms/Form2";
import { SectionWithContainer } from "@/components/sectionComponants";
import Testimonial from "@/components/sectionComponants/Testimonial";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import Experiences from "../landing-page/components/Experiences";
import QuieterSide from "../landing-page/components/QuieterSide";
import GettingHere from "./components/GettingHere";
import SmogFeature from "./components/SmogFeature";
import WarmthSection from "./components/WarmthSection";
import WinterFaq from "./components/WinterFaq";
import WinterHero from "./components/WinterHero";
import WinterOffers from "./components/WinterOffers";
import { winterPageData } from "./components/winterPageData";
import WinterRooms from "./components/WinterRooms";

export const metadata: Metadata = {
  ...createPageMetadata(
    "/winter-landing-page/",
    "Heated Winter Tents near Dharamshala | Saraaya",
    "Plan a cosy winter escape at Saraaya near Dharamshala. Four private heated tents, mountain views and thoughtful comforts. Enquire for your dates.",
    "/winter/hero-night-suite.webp"
  ),
  robots: { index: false, follow: true },
};

export default function WinterLandingPage() {
  const data = winterPageData;
  return (
    <main className="bg-background">
      <WinterHero {...data.hero} />

      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="pt-10 lg:pt-16 lg:pb-12 pb-8"
        containerClassName="flex flex-col gap-4"
      >
        <div className="border border-primary md:rounded-3xl">
          <div className="md:rounded-3xl md:py-3 py-6 bg-primary px-0">
            <Form2 submitLabel="Get Winter Quote" />
          </div>
        </div>
        <p className="text-light text-center text-sm! md:text-base!">
          {data.formNote}
        </p>
      </SectionWithContainer>

      <SlidingTitle items={data.titles} />
      <SmogFeature {...data.smog} />
      <WarmthSection {...data.warmth} />
      <WinterRooms {...data.rooms} />
      <WinterOffers {...data.offers} />
      <Experiences {...data.experiences} />
      <QuieterSide {...data.hosts} />
      <GettingHere {...data.gettingHere} />
      <Testimonial {...data.testimonialData} />
      <WinterFaq {...data.faq} />
      <QuieterSide {...data.closing} />
    </main>
  );
}

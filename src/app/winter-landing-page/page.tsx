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
  title: "Heated Glamping Tents in Dharamshala | Saraaya Winter Stays",
  description:
    "Winter glamping near Dharamshala in heated, insulated safari tents. Escape the city smog for clear Himalayan air, bonfires and starry skies. Only four tents per night.",
  openGraph: {
    title: "Heated Glamping Tents in Dharamshala | Saraaya Winter Stays",
    description:
      "Four heated, insulated safari tents beside a glacier-fed stream near Dharamshala. Escape the smog this winter.",
    images: [
      {
        url: "/winter/hero-night-suite.webp",
        alt: "A Saraaya tent glowing warm at blue hour",
      },
    ],
  },
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
            <Form2 />
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

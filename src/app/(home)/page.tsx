import Link from "next/link";
import WhyChooseSaraaya from "@/components/sectionComponants/WhyChooseSaraaya";
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
  "Boutique Stay Near Dharamshala, Himachal Pradesh | Saraaya",
  "Discover Saraaya near Dharamshala: four private Safari suites, mountain views, heaters and thoughtful comforts. Plan your Himalayan stay with our hosts."
);

const page = () => {
  return (
    <main>
      {/* <ImageSlide {...homePageData.banner} /> */}
      <VideoBanner {...homePageData.banner} />
      <TitleSection titles={homePageData.titles} />
      <About {...homePageData.about} />
      <section className="relative z-10 bg-primary px-6 py-14 text-white md:py-20">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="font-primary text-3xl md:text-5xl">Your Own Private Corner of the Himalayas</h2>
          <p className="leading-relaxed">Saraaya is a secluded boutique stay in Nauhali, near Dharamshala, with just four private Safari suites set amidst nature. With no neighbouring hotels or accommodation properties immediately surrounding the site, you can enjoy a rare sense of privacy, quiet forest surroundings and time away from crowded tourist destinations.</p>
          <Link href="/rooms/" className="inline-block border-b border-white pb-1">Explore your private Safari suite ↗</Link>
        </div>
      </section>
      <WhyChooseSaraaya />
      <EscapeSection {...homePageData.escapeSection} />
      <GlampsSection {...homePageData.glampsSection} />
      <ExperiencesSection {...homePageData.experiencesSection} />
      <section className="relative z-10 border-y border-primary/20 bg-background px-6 py-12 text-center">
        <p className="mb-3 text-sm! uppercase tracking-widest text-secondary">Saraaya in the Media</p>
        <h2 className="font-primary text-3xl text-primary md:text-4xl">Featured on NDTV’s Instagram</h2>
        <p className="mx-auto my-5 max-w-2xl text-primary">See Saraaya through a different lens. Explore the feature and follow the story on Instagram.</p>
        <Link href="/media/" className="inline-block rounded-full bg-primary px-6 py-3 text-white">Visit our Media page ↗</Link>
      </section>
      <StayGuideLinks />
      <TitleSection titles={homePageData.titles} colorChange={true} />
      {/* <EscapeSection {...homePageData.feelingSection} /> */}
      <ReviewsSection {...homePageData.reviewsSection} />
      <TitleSection titles={homePageData.titles} colorChange={true} />
    </main>
  );
};

export default page;

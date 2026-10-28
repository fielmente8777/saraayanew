import PlatformRatings from "@/components/sectionComponants/PlatformRatings";
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
  "Glamping Near Dharamshala | Saraaya Glamps, Nauhali",
  "Discover glamping near Dharamshala at Saraaya Glamps, Nauhali. Four private Safari suites, forest views and unhurried Himalayan experiences."
);

const page = () => {
  return (
    <main>
      {/* <ImageSlide {...homePageData.banner} /> */}
      <VideoBanner {...homePageData.banner} />
      <TitleSection titles={homePageData.titles} />
      <About {...homePageData.about} />
      <PlatformRatings />
      <section aria-labelledby="home-story-heading" className="relative z-10 bg-[#FFF9E1] px-6 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1fr_2fr] md:gap-16">
          <h2 id="home-story-heading" className="font-primary text-3xl text-primary md:text-5xl">{homePageData.about.story.title}</h2>
          <div className="space-y-6">
            <p className="text-primary leading-relaxed">{homePageData.about.story.text}</p>
            <Link href={homePageData.about.story.href} className="inline-block border-b border-secondary pb-1 text-secondary">{homePageData.about.story.label} ↗</Link>
          </div>
        </div>
      </section>
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
        <h2 className="font-primary text-3xl text-primary md:text-4xl">An NDTV Feature, Shared by Saraaya Glamps</h2>
        <p className="mx-auto my-5 max-w-2xl text-primary">See Saraaya through a different lens. Explore the feature and follow the story on Instagram.</p>
        <Link href="/media/" className="inline-block rounded-full bg-primary px-6 py-3 text-white">Visit our Media page ↗</Link>
      </section>
      <section className="relative z-10 bg-background px-6 py-14 text-primary">
        <div className="mx-auto max-w-4xl space-y-5 text-center">
          <h2 className="font-primary text-3xl md:text-4xl">Nauhali, Forest Trails & Kareri Lake</h2>
          <p>Stay in Nauhali for village walks and time beside the stream. If Kareri Lake is on your itinerary, ask our hosts about the route, local guides and conditions before planning a trek.</p>
          <Link href="/nauhali-kareri-lake/" className="inline-block border-b border-secondary pb-1">Explore Nauhali and plan a Kareri Lake visit ↗</Link>
          <p>Planning a winter break? <Link href="/winter-landing-page/" className="underline underline-offset-4">Explore winter stays and request your dates.</Link></p>
        </div>
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

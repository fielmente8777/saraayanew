import { createPageMetadata } from "@/utils/metadata";
import { galleryPageData } from "./components/pageData";
import GalleryBanner from "./components/galleryBanner";
import Gallery from "./components/gallery";
import { homePageData } from "../(home)/components/pageData";
import TitleSection from "@/components/TitleSection";

export const metadata = createPageMetadata(
  "/gallery/",
  "Saraaya Glamps Gallery | Safari Suites & Himalayan Views",
  "See photos of Saraaya’s safari suites, private decks, mountain surroundings and guest experiences. Explore our boutique stay near Dharamshala."
);

export default function Page() {
  return (
    <main>
      <TitleSection titles={homePageData.titles} />
      <GalleryBanner />

      <Gallery galleryImages={galleryPageData.gallerySection.galleryImages} />
    </main>
  );
}

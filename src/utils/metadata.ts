import type { Metadata } from "next";

export const isPreview = process.env.VERCEL_ENV !== "production";
export const pageRobots: Metadata["robots"] = { index: !isPreview, follow: !isPreview };

export const siteUrl = "https://saraayaglamps.com";
export const mainPages = [
  "/",
  "/about-us/",
  "/rooms/",
  "/experiences/",
  "/winter-stays/",
  "/group-stays/",
  "/getting-here/",
  "/gallery/",
  "/media/",
  "/nauhali-kareri-lake/",
  "/blogs/",
  "/contact-us/",
];

export function createPageMetadata(
  path: string,
  title: string,
  description: string,
  image = "/optimized/mountain-1.webp"
): Metadata {
  const url = new URL(path, siteUrl).toString();
  description = shortDescription(description);
  return {
    title,
    description,
    robots: pageRobots,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Saraaya Glamps",
      locale: "en_IN",
      type: "website",
      images: [{ url: new URL(image, siteUrl).toString(), alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL(image, siteUrl).toString()],
    },
  };
}

export const articleTitles: Record<string, string> = {
  "romantic-getaways-himachal-pradesh-luxury-glamping":
    "Romantic Glamping near Dharamshala | Saraaya",
  "private-getaway-friends-reunions-bachelorette-himachal-pradesh":
    "Private Group Getaways in Himachal | Saraaya",
  "monsoon-artist-retreat-himalayas-dharamshala":
    "A Monsoon Retreat for Creatives | Saraaya Glamps",
  "why-luxury-travelers-choosing-glamping-over-five-star-hotels":
    "Glamping or a Conventional Hotel? | Saraaya Glamps",
  "the-story-of-saraaya-a-dream-built-in-the-himalayas":
    "The Story of Saraaya | A Himalayan Boutique Stay",
  "devi-darshan-himachal-pradesh-kangra":
    "Devi Darshan in Kangra, Himachal | Saraaya Travel Guide",
  "my-favourite-things-to-do-around-saraaya":
    "Things to Do near Saraaya | Dharamshala Travel Guide",
  "how-saraaya-was-built":
    "How Saraaya Was Built | Four Safari Suites in the Himalayas",
};

export function shortDescription(text: string): string {
  if (text.length <= 155) return text;
  const cut = text.slice(0, 152);
  return cut.slice(0, cut.lastIndexOf(" ")) + "…";
}

import type { MetadataRoute } from "next";
import { blogsData } from "./blogs/[slug]/components/PageData";
import { mainPages, siteUrl } from "@/utils/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl + "/winter-landing-page/" },
    ...mainPages.map((path) => ({ url: siteUrl + path })),
    ...blogsData.map((post) => ({ url: `${siteUrl}/blogs/${post.slug}/` })),
  ];
}

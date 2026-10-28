import type { MetadataRoute } from "next";
import { siteUrl, isPreview } from "@/utils/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      // Let crawlers read the preview noindex meta and HTTP header.
      allow: "/",
      disallow: ["/admin/", "/login/", "/dashboard/"],
    },
    sitemap: isPreview ? undefined : `${siteUrl}/sitemap.xml`,
  };
}

import type { MetadataRoute } from "next";
import { siteUrl } from "@/utils/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/login/", "/dashboard/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

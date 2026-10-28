import {
  articleTitles,
  createPageMetadata,
  shortDescription,
  siteUrl,
} from "@/utils/metadata";
import StructuredData from "@/components/seo/StructuredData";
import { Metadata } from "next";
import { blogsData } from "./components/PageData";
import { SectionWithContainer } from "@/components/sectionComponants";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await blogsData;

  return posts.map((post) => ({
    slug: post.slug,
    fallback: false,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = blogsData.find((post) => post.slug === slug);
  if (!post) return { title: "Post not found", robots: { index: false } };
  return createPageMetadata(
    `/blogs/${post.slug}/`,
    articleTitles[post.slug] || post.meta.title,
    shortDescription(post.meta.description),
    post.url || "/optimized/mountain-1.webp"
  );
}

export default async function Page({ params }: Params) {
  const path = await params;
  const pageData = await blogsData.find((post) => post.slug === path.slug);
  if (!pageData) return notFound();
  return (
    <main className="">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: pageData.title,
          description: pageData.description,
          image: new URL(
            pageData.url || "/optimized/mountain-1.webp",
            siteUrl
          ).toString(),
          mainEntityOfPage: `${siteUrl}/blogs/${pageData.slug}/`,
          author: {
            "@type": "Organization",
            name: "Saraaya Glamps",
            url: siteUrl,
          },
          publisher: {
            "@type": "Organization",
            name: "Saraaya Glamps",
            url: siteUrl,
          },
        }}
      />
      <SectionWithContainer>
        <h1 className="font-semibold font-primary text-2xl md:text-5xl text-primary">
          {pageData?.title || ""}
        </h1>
        {/* data */}
        <p className="text-primary mt-4">
          {pageData?.date || ""} - Saraaya Glamps
        </p>
        {pageData?.url && (
          <div className="w-full relative aspect-4/3 lg:aspect-16/7 mt-4">
            <Image
              src={pageData?.url || ""}
              alt={pageData?.title || ""}
              fill
              className="object-cover"
              sizes="100%"
            />
          </div>
        )}
      </SectionWithContainer>

      <SectionWithContainer defaultPadding={false} sectionClassName="pb-10">
        <div
          className="blog-data"
          dangerouslySetInnerHTML={{ __html: pageData?.data || "" }}
        />
      </SectionWithContainer>
    </main>
  );
}

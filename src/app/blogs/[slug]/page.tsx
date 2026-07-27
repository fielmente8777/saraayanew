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
  const path = await params;
  const post = await blogsData.find((post) => post.slug === path.slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  } else {
    return {
      title: post.meta.title,
      description: post.meta.description,
      keywords: post.meta.keyWords,
      alternates: {
        canonical: `https://saraayaglamps.com/blogs/${post.slug}`,
        languages: {
          "en-US": `https://saraayaglamps.com/blogs/${post.slug}`,
        },
      },
      openGraph: {
        title: post.meta.title,
        description: post.meta.description,
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          nocache: true,
        },
      },
    };
  }
}

export default async function Page({ params }: Params) {
  const path = await params;
  const pageData = await blogsData.find((post) => post.slug === path.slug);
  if (!pageData) return notFound();
  return (
    <main className="">
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

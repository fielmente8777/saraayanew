import { articleTitles, createPageMetadata } from "@/utils/metadata";
import { SectionWithContainer } from "@/components/sectionComponants";
import { blogsData } from "./[slug]/components/PageData";
import Image from "next/image";
import Link from "next/link";

export const metadata = createPageMetadata(
  "/blogs/",
  "Dharamshala Travel & Glamping Journal | Saraaya",
  "Read Saraaya’s stories and travel guides for Dharamshala and Himachal Pradesh, from romantic glamping breaks to local experiences and mountain escapes."
);

export default function BlogPage() {
  const cards = blogsData.map((blog) => ({
    title: blog.title,
    description: blog.description,
    image: blog.url || "",
    slug: blog.slug,
    linkLabel: articleTitles[blog.slug]?.split(" | ")[0] || blog.title,
  }));

  return (
    <main className="bg-background">
      <SectionWithContainer sectionClassName="border-b border-Primary">
        <h1 className="font-bold font-primary text-2xl md:text-5xl text-primary text-center">
          Dharamshala Travel & Glamping Journal
        </h1>
      </SectionWithContainer>

      <SectionWithContainer
        sectionClassName="bg-background"
        containerClassName="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4 gap-10"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 border border-primary p-4 rounded-2xl"
          >
            {card.image && (
              <div className="w-full relative aspect-4/3 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  className="w-full"
                  fill
                />
              </div>
            )}
            <div className=" flex flex-col gap-4">
              <h2 className="font-bold font-primary text-lg md:text-2xl text-primary line-clamp-2">
                {card.title}
              </h2>
              <p className="text-primary line-clamp-2">{card.description}</p>
              <Link
                href={`/blogs/${card.slug}/`}
                className="bg-primary text-background w-fit p-2 rounded-lg"
              >
                Read: {card.linkLabel}
              </Link>
            </div>
          </div>
        ))}
      </SectionWithContainer>
    </main>
  );
}

import { SectionWithContainer } from "@/components/sectionComponants";
import { blogsData } from "./[slug]/components/PageData";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs | Saraaya Luxury Glamps",
  description: "Blogs | Saraaya Luxury Glamps",
  alternates: {
    canonical: "https://saraayaglamps.com/blogs",
  },
};

export default function BlogPage() {
  const cards = blogsData.map((blog) => ({
    title: blog.title,
    description: blog.description,
    image: blog.url || "",
    slug: blog.slug,
  }));

  return (
    <main className="bg-background">
      <SectionWithContainer sectionClassName="border-b border-Primary">
        <h1 className="font-bold font-primary text-2xl md:text-5xl text-primary text-center">
          Our Blogs
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
                href={`/blogs/${card.slug}`}
                className="bg-primary text-background w-fit p-2 rounded-lg"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </SectionWithContainer>
    </main>
  );
}

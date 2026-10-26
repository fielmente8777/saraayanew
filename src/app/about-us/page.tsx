import Image from "next/image";
import Link from "next/link";
import { SectionWithContainer } from "@/components/sectionComponants";
import { createPageMetadata } from "@/utils/metadata";
import { storyPageData as story } from "./components/pageData";

export const metadata = createPageMetadata(
  "/about-us/",
  "Our Story | A Different Vision of the Mountains | Saraaya",
  "Discover how an idea in 2014 became Saraaya: four private Safari suites in Nauhali, a closer connection with nature and opportunities for the local community.",
  story.image
);

export default function OurStoryPage() {
  const [vision, ...chapters] = story.sections;

  return (
    <main className="bg-background">
      <SectionWithContainer
        sectionClassName="border-b border-primary/20"
        containerClassName="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
      >
        <div className="space-y-6">
          <p className="text-secondary text-sm! uppercase tracking-widest">
            Serenity in Wilderness
          </p>
          <h1 className="font-primary text-primary text-5xl/tight md:text-7xl/tight">
            {story.title}
          </h1>
          <h2 className="font-primary text-primary text-3xl/tight md:text-4xl/tight">
            {vision.title}
          </h2>
          <div className="space-y-5 leading-relaxed text-light">
            {vision.paragraphs.slice(0, 2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:aspect-4/4.5">
          <Image
            src={story.image}
            alt={story.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </SectionWithContainer>

      <SectionWithContainer containerClassName="max-w-3xl! space-y-14 md:space-y-20">
        <div className="space-y-5 leading-relaxed text-light">
          {vision.paragraphs.slice(2).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {chapters.map((chapter) => (
          <section key={chapter.title} className="space-y-6">
            <h2 className="font-primary text-primary text-3xl/tight md:text-4xl/tight">
              {chapter.title}
            </h2>
            <div className="space-y-5 leading-relaxed text-light">
              {chapter.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </SectionWithContainer>

      <SectionWithContainer
        sectionClassName="bg-primary"
        containerClassName="max-w-3xl! space-y-6"
      >
        <aside aria-labelledby="founders-story" className="space-y-6">
          <h2
            id="founders-story"
            className="font-primary text-background text-3xl/tight md:text-4xl/tight"
          >
            {story.founder.title}
          </h2>
          <div className="space-y-5 leading-relaxed text-background">
            {story.founder.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </aside>
      </SectionWithContainer>

      <SectionWithContainer containerClassName="space-y-7 text-center">
        <div className="space-y-2">
          <p className="font-primary text-primary text-3xl!">{story.signature}</p>
          <p className="text-secondary italic">{story.tagline}</p>
        </div>
        <Link
          href="/rooms/"
          className="inline-block border-b border-secondary pb-1 text-primary"
        >
          Discover our four Safari suites
        </Link>
      </SectionWithContainer>
    </main>
  );
}

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SectionWithContainer } from "@/components/sectionComponants";
import LinkButton from "@/components/buttons/LinkButton";
import StructuredData from "@/components/seo/StructuredData";
import StayGuideLinks from "@/components/seo/StayGuideLinks";
import { stayGuides } from "@/content/stayGuides";
import { createPageMetadata, siteUrl } from "@/utils/metadata";
import { contact } from "@/utils/constent";

type GuideKey = keyof typeof stayGuides;
type Params = { params: Promise<{ guide: string }> };
function getGuide(key: string) {
  return Object.hasOwn(stayGuides, key)
    ? stayGuides[key as GuideKey]
    : undefined;
}
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(stayGuides).map((guide) => ({ guide }));
}
export async function generateMetadata({ params }: Params) {
  const { guide } = await params;
  const data = getGuide(guide);
  if (!data) return { title: "Page not found", robots: { index: false } };
  return createPageMetadata(
    `/${guide}/`,
    data.metaTitle,
    data.description,
    data.image
  );
}
export default async function Page({ params }: Params) {
  const { guide } = await params;
  const data = getGuide(guide);
  if (!data) notFound();
  return (
    <main className="bg-background">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: siteUrl + "/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: data.title,
              item: siteUrl + "/" + guide + "/",
            },
          ],
        }}
      />
      <SectionWithContainer>
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-light">
          <Link href="/" className="underline">
            Home
          </Link>
          <span aria-hidden="true"> / </span>
          <span>{data.title}</span>
        </nav>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="mb-4 text-sm! uppercase tracking-wider text-secondary">
              The Saraaya Stay Guide
            </p>
            <h1 className="font-primary text-4xl text-primary md:text-5xl">
              {data.title}
            </h1>
            <p className="mt-6 leading-relaxed text-light">{data.intro}</p>
            <div className="mt-6">
              <LinkButton
                href="/contact-us/"
                label="Plan Your Stay with Us"
                className="rounded-full bg-secondary text-white border-secondary"
              />
            </div>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </SectionWithContainer>
      <SectionWithContainer
        sectionClassName="border-y border-primary/20"
        containerClassName="grid gap-10 lg:grid-cols-2 lg:gap-14"
      >
        {data.sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-5 font-primary text-3xl text-primary">
              {section.title}
            </h2>
            <div className="space-y-4 text-light leading-relaxed">
              {section.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </section>
        ))}
      </SectionWithContainer>
      <SectionWithContainer containerClassName="text-center">
        <h2 className="font-primary text-3xl text-primary">
          Let’s Plan Your Mountain Escape
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-light">
          Share your dates, guest count and the details that matter to you. Our
          hosts will help with tent options, rates and arrangements for your
          stay.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <LinkButton
            href={contact.WhatsappCta}
            label="Enquire on WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-secondary text-white border-secondary"
          />
          <LinkButton
            href="/rooms/"
            label="Explore Our Tents"
            className="rounded-full border-primary text-primary"
          />
        </div>
      </SectionWithContainer>
      <StayGuideLinks />
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Form2 from "@/components/forms/Form2";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { createPageMetadata } from "@/utils/metadata";
import WinterHero from "./components/WinterHero";
import { winterPageData as data } from "./components/winterPageData";

export const metadata: Metadata = {
  ...createPageMetadata(
    "/winter-landing-page/",
    "Boutique Stay Near Dharamshala | Winter Glamping at Saraaya",
    "Discover Saraaya Glamps, a rare boutique stay near Dharamshala featuring four private safari suites, Himalayan views, bonfires, riverside picnics and unique outdoor experiences.",
    "/winter/hero-night-suite.webp"
  ),
  robots: { index: true, follow: true },
};

const headingClass =
  "font-primary text-primary text-3xl/tight md:text-5xl/tight";
const linkClass =
  "text-primary underline decoration-secondary underline-offset-4";
function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-4 text-light">
      {items.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
}
function Story({
  id,
  title,
  label,
  items,
  image,
  alt,
  reverse = false,
  children,
}: {
  id?: string;
  title: string;
  label: string;
  items: string[];
  image: string;
  alt: string;
  reverse?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <SectionWithContainer
      sectionId={id}
      sectionClassName="border-t border-primary/30 scroll-mt-28"
      containerClassName="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
    >
      <div
        className={`relative aspect-4/3 overflow-hidden rounded-3xl ${reverse ? "lg:order-2" : ""}`}
      >
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-secondary text-sm! uppercase tracking-widest">
          {label}
        </p>
        <h2 className={headingClass}>{title}</h2>
        <Paragraphs items={items} />
        {children}
      </div>
    </SectionWithContainer>
  );
}

export default function WinterLandingPage() {
  return (
    <main className="bg-background">
      <WinterHero {...data.hero} />
      <Story
        id="discover-saraaya"
        title="A Boutique Stay Unlike the Ordinary"
        label="Four private safari suites · One distinctive destination"
        items={data.introduction}
        image="/winter/valley-snow-peaks.webp"
        alt="Forested Kangra Valley beneath Himalayan mountain peaks"
      >
        <p className="text-light">
          Discover{" "}
          <Link className={linkClass} href="/about-us/">
            the story of Saraaya
          </Link>
          , one of the unique stays in Himachal Pradesh.
        </p>
      </Story>
      <Story
        title="Your Private Safari Suite in the Mountains"
        label="Comfort · Privacy · Nature"
        items={data.accommodation}
        image="/winter/interior-warm.webp"
        alt="A private Saraaya safari suite with a king-size bed and cosy bedding"
        reverse
      >
        <Link className={linkClass} href="/rooms/">
          Explore our four safari suites and view categories
        </Link>
      </Story>
      <SectionWithContainer
        sectionId="saraaya-experiences"
        sectionClassName="border-t border-primary/30 scroll-mt-28"
        containerClassName="flex flex-col gap-8 md:gap-12"
      >
        <div className="mx-auto flex max-w-3xl flex-col gap-5 text-center">
          <p className="text-secondary text-sm! uppercase tracking-widest">
            Beyond your suite
          </p>
          <h2 className={headingClass}>Experience Dharamshala Differently</h2>
          <p className="text-light">
            At Saraaya, the destination is more than a place to sleep. It is an
            opportunity to experience the quieter, more natural side of the
            Himalayas.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.experiences.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-primary/30"
            >
              <div className="relative aspect-4/3">
                <Image
                  src={item.image}
                  alt={item.title + " at Saraaya"}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 p-6">
                <h3 className="font-primary text-primary text-2xl">
                  {item.title}
                </h3>
                <p className="text-light">{item.text}</p>
                <p className="border-t border-primary/20 pt-3 text-primary text-sm!">
                  {item.status}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto max-w-4xl space-y-3 text-center text-light">
          <p>
            Package inclusions vary. Only experiences listed in your written
            package confirmation are included; request a separate price for any
            experience outside it. Food and beverages for experience setups are
            charged separately. Activities are subject to weather conditions and
            availability.
          </p>
          <Link className={linkClass} href="/experiences/">
            Explore more experiences around Saraaya
          </Link>
        </div>
      </SectionWithContainer>
      <Story
        title="A Rare Find for Those Who Seek Something Different"
        label="A destination in its own right"
        items={data.positioning}
        image="/winter/aerial-night.webp"
        alt="Saraaya's intimate mountain setting illuminated after sunset"
        reverse
      >
        <p className="font-primary text-primary text-2xl italic">
          The mountains are familiar. The experience can be entirely different.
        </p>
      </Story>
      <Story
        title="Discover the Magic of a Himalayan Winter"
        label="Winter glamping near Dharamshala"
        items={data.winter}
        image="/winter/bonfire.webp"
        alt="An evening bonfire at Saraaya in the mountains"
      >
        <p className="text-light">
          For a romantic getaway in Himachal Pradesh or time together as a
          family, discover a distinctive mountain stay near Dharamshala.
        </p>
      </Story>
      <Story
        title="A Different Side of Dharamshala Awaits"
        label="Nauhali · Kangra Valley"
        items={data.location}
        image="/winter/tents-in-valley.webp"
        alt="Saraaya safari suites surrounded by terraced fields and forest"
        reverse
      >
        <Link className={linkClass} href="/getting-here/">
          Plan your journey to Saraaya
        </Link>
      </Story>
      <SectionWithContainer
        sectionId="winter-packages"
        sectionClassName="border-t border-primary/30 scroll-mt-28"
        containerClassName="flex flex-col gap-8 md:gap-10"
      >
        <div className="mx-auto flex max-w-4xl flex-col gap-5 text-center">
          <p className="text-secondary text-sm! uppercase tracking-widest">
            Your winter at Saraaya
          </p>
          <h2 className={headingClass}>
            Your Next Unforgettable Mountain Stay Begins Here
          </h2>
          <Paragraphs items={data.booking} />
          <div className="flex flex-wrap justify-center gap-3">
            <LinkButton
              {...data.packageCta}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-secondary bg-secondary text-white"
            />
            <LinkButton
              {...data.availabilityCta}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-primary text-primary"
            />
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl bg-primary p-6 text-white md:p-8">
            <h3 className="font-primary text-3xl">
              Plan your private safari suite stay
            </h3>
            <p className="font-primary text-3xl text-[#E9A766]">
              Winter packages tailored to your dates
            </p>
            <p>
              Request a current price for your dates, suite choice and guest
              count. Your written quote will specify the stay total and
              inclusions.
            </p>
            <p>
              King-size bed, cosy bedding, heater, private deck and attached
              bathroom with hot water are suite facilities.
            </p>
            <Link href="/rooms/" className="underline underline-offset-4">
              View safari suite information
            </Link>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-primary/40 p-6 md:p-8">
            <h3 className="font-primary text-primary text-3xl">
              Know what your package includes
            </h3>
            <dl className="space-y-3 text-light">
              <div>
                <dt className="font-semibold text-primary">Occupancy</dt>
                <dd>
                  Standard occupancy: two guests per suite. Share the number of
                  adults and children and their ages; confirm extra guests,
                  bedding and full-property group capacity before booking.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">
                  Meals and experiences
                </dt>
                <dd>
                  Meal inclusions and hosted activities depend on your selected
                  plan. Request an itemised list. Experience food and beverages
                  are charged separately.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">
                  Taxes and additional charges
                </dt>
                <dd>
                  Ask for the applicable taxes and charges for extra guests,
                  meals, activities or special arrangements in your written
                  quote. No tax-inclusive package total is published here.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">Booking terms</dt>
                <dd>
                  Review payment, cancellation, refund and date-change terms
                  before paying. An enquiry does not confirm a reservation.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="rounded-2xl bg-primary px-2 py-6 md:px-4">
          <Form2 submitLabel="Request My Winter Package" />
        </div>
        <p className="text-light text-center text-sm!">
          Share your dates and guest count for availability and a written
          package quote. No payment is required to enquire.
        </p>
      </SectionWithContainer>
      <SectionWithContainer
        sectionId="stay-information"
        sectionClassName="border-t border-primary/30"
        containerClassName="flex flex-col gap-6"
      >
        <h2 className="font-primary text-primary text-3xl md:text-4xl">
          Important Stay Information
        </h2>
        <p className="text-light">
          Please review these practical details when planning your visit.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {data.disclaimers.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-primary/25 p-6"
            >
              <h3 className="font-primary text-primary mb-3 text-2xl">
                {item.title}
              </h3>
              <p className="text-light">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="text-light">
          For specific comfort, access or dietary needs,{" "}
          <Link className={linkClass} href="/contact-us/">
            speak with our hosts before booking
          </Link>
          .
        </p>
      </SectionWithContainer>
    </main>
  );
}

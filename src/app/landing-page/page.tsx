import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Form2 from "@/components/forms/Form2";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { createPageMetadata } from "@/utils/metadata";
import WinterHero from "./components/WinterHero";
import WinterFaq from "./components/WinterFaq";
import WinterTracking from "./components/WinterTracking";
import { winterPageData as data } from "./components/winterPageData";
import {
  arrivalWhatsappCta,
  winterWhatsappCta,
  takeoverWhatsappCta,
} from "./components/winterCtas";

export const metadata: Metadata = {
  ...createPageMetadata(
    "/winter-landing-page/",
    "Saraaya Glamps | Boutique Stay & Winter Glamping Near Dharamshala",
    "Discover Saraaya Glamps, a rare-find boutique stay near Dharamshala with four private Safari suites, winter comfort, forest walks, riverside picnics and Himalayan experiences.",
    "/winter/lounge-blue-hour.webp"
  ),
  robots: { index: true, follow: true },
};
const headingClass =
  "font-primary text-primary text-3xl/tight md:text-5xl/tight";
const linkClass =
  "text-primary underline decoration-secondary underline-offset-4";
const ctaClass =
  "min-h-12 rounded-full border-secondary bg-secondary px-5! text-sm! text-white";
const sectionClass = "border-t border-primary/25 scroll-mt-28";
function SectionIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
      <p className="text-secondary text-xs! uppercase tracking-widest md:text-sm!">
        {label}
      </p>
      <h2 className={headingClass}>{title}</h2>
      <div className="space-y-3 text-light">{children}</div>
    </div>
  );
}
export default function WinterLandingPage() {
  return (
    <main className="bg-background">
      <WinterTracking />
      <WinterHero {...data.hero} />
      <SectionWithContainer
        sectionId="discover-saraaya"
        sectionClassName={sectionClass}
        containerClassName="flex flex-col gap-8 md:gap-12"
      >
        <SectionIntro
          label="A rare-find boutique stay"
          title="Why Choose Saraaya?"
        >
          <p className="font-primary text-primary text-2xl!">
            Not Just a Stay. An Experience of the Himalayas.
          </p>
          <p>
            Some holidays are about sightseeing. Others are about slowing down,
            reconnecting with nature and enjoying the moment.
          </p>
          <p>
            Saraaya Glamps offers a different way to experience Dharamshala,
            away from crowded tourist centres and conventional hotel stays.
          </p>
        </SectionIntro>
        <div className="flex flex-wrap justify-center gap-5">
          {data.why.map((item) => (
            // <article
            //   key={item.title}
            //   className="grid grid-cols-[80px_1fr] gap-4 rounded-2xl border border-primary/25 p-4 md:block md:overflow-hidden md:p-0"
            // >
            <article
              key={item.title}
              className="grid w-full grid-cols-[80px_1fr] gap-4 rounded-2xl border border-primary/25 p-4 md:block md:w-[calc(50%-10px)] md:overflow-hidden md:p-0 lg:w-[calc(33.333%-13.34px)]"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl md:aspect-4/3 md:rounded-none">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 md:space-y-3 md:p-6">
                <h3 className="font-primary text-primary text-2xl">
                  {item.title}
                </h3>
                <p className="text-light text-sm! md:text-base!">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        {/* <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {data.why.map((item, index) => (
            <article
              key={item.title}
              className={`overflow-hidden rounded-2xl border border-primary/25 lg:col-span-2 ${
                index === 3 ? "lg:col-start-2" : ""
              } ${index === 4 ? "lg:col-start-4" : ""}`}
            >
              <div className="relative aspect-4/3">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-3 p-6">
                <h3 className="font-primary text-primary text-2xl">
                  {item.title}
                </h3>

                <p className="text-light text-base!">{item.text}</p>
              </div>
            </article>
          ))}
        </div> */}
        <p className="mx-auto max-w-3xl text-center text-light">
          At Saraaya, the destination is only part of the experience. How you
          spend your time here makes it memorable.{" "}
          <Link className={linkClass} href="/about-us/">
            Discover our story.
          </Link>
        </p>
      </SectionWithContainer>
      <SectionWithContainer
        sectionId="safari-suites"
        sectionClassName={sectionClass}
        containerClassName="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
      >
        <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
          <Image
            src="/rooms/2.jpg"
            alt="A furnished private Saraaya Safari suite opening towards the surrounding landscape"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="space-y-5">
          <p className="text-secondary text-sm! uppercase tracking-widest">
            Just four private Safari suites
          </p>
          <h2 className={headingClass}>Your Private Space in the Mountains</h2>
          <p className="text-light">
            Experience the character of a distinctive mountain stay, with space
            to unwind and a private deck that brings you closer to the
            landscape.
          </p>
          <p className="text-light">
            For couples, families and friends, our intimate boutique stay offers
            a personal alternative to a conventional hotel. Explore the two view
            categories and choose the suite that suits your plans.
          </p>
          <Link className={linkClass} href="/rooms/">
            Meet our four Safari suites
          </Link>
        </div>
      </SectionWithContainer>
      <SectionWithContainer
        sectionId="winter-comfort"
        sectionClassName={sectionClass}
        containerClassName="flex flex-col gap-8 md:gap-12"
      >
        <SectionIntro
          label="Winter comfort"
          title="Winter Outside. Comfort Within."
        >
          <p>
            Experience the charm of a Himalayan winter from the comfort of your
            private Safari suite.
          </p>
          <p>
            At Saraaya Glamps, winter brings crisp mountain air, peaceful
            surroundings and evenings made for slowing down. Return from a
            nature walk to your comfortable bed, warm up in your suite and enjoy
            the simple pleasure of being surrounded by the mountains.
          </p>
          <p>
            Our Safari suites feature king-size beds, attached bathrooms with
            hot-water facilities and heaters to make your stay comfortable
            during the colder months.
          </p>
        </SectionIntro>
        <div className="grid gap-5 md:grid-cols-3">
          {data.comforts.map((item) => (
            <figure
              key={item.image}
              className="overflow-hidden rounded-2xl border border-primary/25"
            >
              <div className="relative aspect-4/3">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-primary p-5 text-center text-xl text-primary">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="text-light">
            Spend your evenings around the bonfire, enjoy a warm meal and wake
            up to the stillness of the Himalayan landscape.
          </p>
          <p className="font-primary text-primary text-2xl italic">
            Come for the mountains. Stay for the experience.
          </p>
          <LinkButton
            label="Explore Our Safari Suites"
            href="/rooms/"
            className={ctaClass + " mx-auto"}
          />
        </div>
      </SectionWithContainer>
      <SectionWithContainer
        sectionId="saraaya-experiences"
        sectionClassName={sectionClass}
        containerClassName="flex flex-col gap-8 md:gap-12"
      >
        <SectionIntro
          label="Experiences at Saraaya"
          title="Experience More Than a Destination"
        >
          <p>
            At Saraaya, your stay is an opportunity to experience the Himalayas
            beyond the usual tourist itinerary.
          </p>
        </SectionIntro>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.experiences.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-primary/25"
            >
              <div className="relative aspect-4/3">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="font-primary text-primary text-2xl">
                  {item.title}
                </h3>
                <p className="text-light text-base!">{item.text}</p>
                <p className="border-t border-primary/20 pt-3 text-primary text-sm!">
                  {item.charge}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto max-w-3xl space-y-3 text-center text-light">
          <p>
            Whether you prefer quiet moments in nature or days filled with
            outdoor activities, Saraaya offers experiences that make your
            Himalayan stay distinctive.
          </p>
          <p>
            Some experiences are available at an additional charge and are
            subject to weather, availability and local conditions. Confirm the
            activities included in your written package before booking.
          </p>
          <Link className={linkClass} href="/experiences/">
            Explore our experiences
          </Link>
        </div>
      </SectionWithContainer>
      <SectionWithContainer
        sectionId="guest-reviews"
        sectionClassName={sectionClass}
        containerClassName="flex flex-col gap-8"
      >
        <SectionIntro
          label="Guest reviews and ratings"
          title="A Stay Worth Discovering"
        >
          <p>
            A distinctive stay is best experienced through the people who have
            already been here.
          </p>
          <p>
            At Saraaya Glamps, we want every guest to leave with memories of
            thoughtful hospitality, comfortable accommodation and time spent
            experiencing the Himalayas differently.
          </p>
          <p>Discover what our guests have to say about their stay.</p>
        </SectionIntro>
        <div className="grid gap-5 md:grid-cols-3">
          {data.reviewProfiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-44 flex-col gap-3 rounded-2xl border border-primary/30 p-6 transition-colors hover:bg-primary/5"
            >
              <h3 className="font-primary text-primary text-2xl">
                {profile.name}
              </h3>
              <p className="font-primary text-primary text-3xl">
                {profile.score}
              </p>
              <p className="text-light text-base!">{profile.count}</p>
              <span className="mt-auto text-secondary text-sm! underline underline-offset-4">
                {profile.note} ↗
              </span>
            </a>
          ))}
        </div>
        <p className="text-center text-light text-xs!">
          Google and Airbnb scores checked on 26 October 2026. Airbnb score
          applies to the linked listing. Ratings and counts can change; follow
          the platform links for the latest information.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {data.testimonials.map((review) => (
            <figure
              key={review.name}
              className="rounded-2xl bg-primary p-7 text-white"
            >
              <blockquote className="font-primary text-2xl">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-5 text-sm! text-white/85">
                {review.name} · {review.source}
              </figcaption>
            </figure>
          ))}
        </div>
        <LinkButton
          label="Read Guest Reviews"
          href={data.reviewProfiles[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaClass + " mx-auto"}
        />
      </SectionWithContainer>
      <SectionWithContainer
        sectionId="winter-packages"
        sectionClassName={sectionClass}
        containerClassName="flex flex-col gap-8 md:gap-10"
      >
        <SectionIntro
          label="Winter packages"
          title="Your Himalayan Winter Escape Awaits"
        >
          <p>Discover a different way to experience Dharamshala this winter.</p>
          <p>
            Whether you are planning a romantic getaway, a peaceful break with
            family or a memorable stay with friends, Saraaya Glamps offers
            private Safari suites and experiences designed around the beauty of
            the Himalayas.
          </p>
          <p>
            Tell us the kind of stay you have in mind and let us help you
            organise it.
          </p>
        </SectionIntro>
        <div className="grid gap-5 lg:grid-cols-3">
          {data.stayOptions.map((option, index) => (
            <article
              key={option.title}
              className="flex flex-col gap-4 rounded-2xl border border-primary/30 p-6 md:p-8"
            >
              <h3 className="font-primary text-primary text-3xl">
                {option.title}
              </h3>
              <p className="text-light text-base!">{option.text}</p>
              <p className="font-primary text-secondary text-2xl">
                Request a tailored quote
              </p>
              <dl className="space-y-4 text-light text-sm!">
                <div>
                  <dt className="font-semibold text-primary">
                    Stay & occupancy
                  </dt>
                  <dd>{option.basis}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary">
                    Meals & inclusions
                  </dt>
                  <dd>{option.meals}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary">
                    Experiences & extras
                  </dt>
                  <dd>{option.extras}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary">
                    Taxes & booking terms
                  </dt>
                  <dd>
                    Confirm applicable taxes, extra-bed charges, payment and
                    cancellation terms in your written quote before paying.
                  </dd>
                </div>
              </dl>
              <LinkButton
                label={
                  index === 2
                    ? "Enquire About a Group Stay"
                    : `Ask About ${option.title}`
                }
                href={index === 2 ? takeoverWhatsappCta : winterWhatsappCta}
                trackingEvent="winter_package_click"
                trackingLocation={option.title}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaClass + " mt-auto w-full! justify-center"}
              />
            </article>
          ))}
        </div>
        <p className="mx-auto max-w-3xl text-center text-light text-sm!">
          Stay and experience combinations are arranged around your dates and
          requirements. These options do not imply a fixed-price or
          all-inclusive offer. Request the current tariff, per-couple or other
          occupancy basis, all meals, activities, extras and taxes in writing.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <LinkButton
            label="View Winter Packages & Prices"
            href={winterWhatsappCta}
            trackingEvent="winter_package_click"
            trackingLocation="packages"
            target="_blank"
            rel="noopener noreferrer"
            className={ctaClass + " max-sm:w-full! justify-center"}
          />
          <LinkButton
            label="Check Availability on WhatsApp"
            href={winterWhatsappCta}
            trackingLocation="packages"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-12 rounded-full border-primary px-5! text-sm! text-primary max-sm:w-full! justify-center"
          />
        </div>
      </SectionWithContainer>
      <SectionWithContainer
        sectionId="getting-here"
        sectionClassName={sectionClass}
        containerClassName="flex flex-col gap-8"
      >
        <SectionIntro
          label="Getting to Saraaya"
          title="A Journey to a Different Side of Dharamshala"
        >
          <p>
            Located in Nauhali, approximately 75 minutes from Dharamshala,
            Saraaya Glamps offers an opportunity to discover a quieter side of
            the Himalayan landscape.
          </p>
          <p>
            The journey takes you away from the busier tourist centres and
            towards the natural surroundings of our property.
          </p>
        </SectionIntro>
        <ol
          aria-label="Your journey to Saraaya"
          className="grid gap-3 rounded-2xl bg-primary p-5 text-white sm:grid-cols-5 md:p-8"
        >
          {[
            "Dharamshala",
            "Designated Pickup Point",
            "4x4 Transfer",
            "Short Walk",
            "Saraaya Glamps",
          ].map((step, i) => (
            <li
              key={step}
              className="flex items-center gap-3 sm:flex-col sm:text-center"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 text-[#F1C192]">
                {i + 1}
              </span>
              <span className="text-sm!">{step}</span>
              {i < 4 ? (
                <span
                  aria-hidden="true"
                  className="ml-auto text-[#F1C192] sm:hidden"
                >
                  ↓
                </span>
              ) : null}
            </li>
          ))}
        </ol>
        <div className="mx-auto max-w-3xl space-y-4 text-center text-light">
          <p>
            The final approach involves reaching our designated pickup point,
            followed by a 4x4 transfer and a short walk to the property. Our
            team will coordinate arrival arrangements and assist with luggage as
            applicable.
          </p>
          <p>
            Contact us before beginning the final stretch for current
            directions, transfer availability and any applicable charges.
          </p>
          <Link className={linkClass} href="/getting-here/">
            Read our full arrival guide
          </Link>
        </div>
        <LinkButton
          label="Get Directions & Arrival Assistance"
          href={arrivalWhatsappCta}
          trackingLocation="arrival"
          target="_blank"
          rel="noopener noreferrer"
          className={ctaClass + " mx-auto max-sm:w-full! justify-center"}
        />
      </SectionWithContainer>
      <WinterFaq title="Frequently Asked Questions" items={data.faqs} />
      <SectionWithContainer
        sectionId="winter-enquiry"
        sectionClassName={sectionClass}
        containerClassName="flex flex-col gap-8"
      >
        <SectionIntro
          label="Your next mountain stay"
          title="Find Your Own Pace in the Himalayas"
        >
          <p>
            Some journeys are about seeing more. Others are about experiencing
            more.
          </p>
          <p>
            At Saraaya Glamps, discover a rare-find boutique stay where private
            Safari suites, nature and thoughtfully curated experiences come
            together to offer a different way to experience Dharamshala.
          </p>
          <p>
            Whether you are planning a romantic getaway, a family break or a few
            days away from the everyday rush, we look forward to helping you
            plan your stay.
          </p>
          <p className="font-primary text-primary text-2xl! italic">
            Check your dates. Discover your package. Experience Saraaya.
          </p>
        </SectionIntro>
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <LinkButton
            label="Check Availability & Winter Packages"
            href="#winter-enquiry-form"
            trackingEvent="winter_package_click"
            trackingLocation="closing"
            className={ctaClass + " max-sm:w-full! justify-center"}
          />
          <LinkButton
            label="Chat With Our Team on WhatsApp"
            href={winterWhatsappCta}
            trackingLocation="closing"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-12 rounded-full border-primary px-5! text-sm! text-primary max-sm:w-full! justify-center"
          />
        </div>
        <div
          id="winter-enquiry-form"
          className="scroll-mt-28 rounded-2xl bg-primary px-2 py-6 md:px-4"
        >
          <Form2 submitLabel="Request My Winter Package" />
        </div>
        <p className="text-light text-center text-sm!">
          Share your dates for availability and a written package quote. An
          enquiry does not confirm a reservation or require payment.
        </p>
      </SectionWithContainer>
      <SectionWithContainer
        sectionId="stay-information"
        sectionClassName={sectionClass}
        containerClassName="flex flex-col gap-6"
      >
        <h2 className="font-primary text-primary text-3xl md:text-4xl">
          Important Information
        </h2>
        <ul className="grid list-disc gap-x-12 gap-y-4 ps-5 text-light md:grid-cols-2">
          {data.disclaimers.map((text) => (
            <li key={text} className="ps-1 text-base!">
              {text}
            </li>
          ))}
        </ul>
        <p className="text-light">
          Please{" "}
          <Link className={linkClass} href="/contact-us/">
            contact our team
          </Link>{" "}
          if you have specific accessibility, dietary or accommodation
          requirements.
        </p>
      </SectionWithContainer>
      <SectionWithContainer
        sectionClassName="border-t border-primary/25"
        containerClassName="flex flex-col items-center gap-4 text-center"
      >
        <h2 className="font-primary text-primary text-3xl">
          Saraaya Glamps Dharmshala
        </h2>
        <p className="font-primary text-secondary text-2xl italic">
          Serenity in Wilderness
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm! underline underline-offset-4">
          <a
            href="https://www.instagram.com/saraaya.dharmshala/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram @saraaya.dharmshala
          </a>
          <a href="https://saraayaglamps.com/">Official website</a>
          {data.reviewProfiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.name}
            </a>
          ))}
        </div>
      </SectionWithContainer>
    </main>
  );
}

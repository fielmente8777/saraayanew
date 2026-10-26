import Link from "next/link";
import { SectionWithContainer } from "@/components/sectionComponants";

const reasons = [
  {
    title: "Just Four Private Safari Suites",
    text: "An intimate boutique stay with space for couples, families and small groups to enjoy the mountains at their own pace.",
  },
  {
    title: "Comfort, Thoughtfully Provided",
    text: "King-size beds, cosy bedding, heaters, private attached bathrooms with hot water and your own deck bring comfort to a stay amid nature.",
  },
  {
    title: "Experiences Beyond Your Suite",
    text: "Discover village walks, guided hikes, riverside picnics, bonfires, stargazing and open-air movie nights, arranged around your plans.",
  },
  {
    title: "Nature, Privacy & a Slower Pace",
    text: "Forest surroundings, mountain views and a nearby natural stream make room for quiet mornings and unhurried time together.",
  },
  {
    title: "A Different Side of Dharamshala",
    text: "Located in Nauhali in the Kangra Valley, approximately 75 minutes from Dharamshala, Saraaya offers a distinctive alternative to a conventional hotel stay.",
  },
];

export default function WhyChooseSaraaya() {
  return (
    <SectionWithContainer
      sectionId="why-choose-saraaya"
      sectionClassName="relative z-10 scroll-mt-28 border-y border-primary/25 bg-background"
      containerClassName="flex flex-col gap-8 md:gap-12"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
        <p className="text-secondary text-sm! uppercase tracking-widest">
          A rare-find boutique stay
        </p>
        <h2 className="font-primary text-primary text-3xl/tight md:text-5xl/tight">
          Why Choose Saraaya?
        </h2>
        <p className="font-primary text-primary text-2xl!">
          Not Just a Stay. An Experience of the Himalayas.
        </p>
        <p className="text-light">
          Discover a different way to experience Dharamshala, where four private
          Safari suites, thoughtful comforts and time in nature come together.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, index) => (
          <article
            key={reason.title}
            className="flex gap-4 rounded-2xl border border-primary/25 p-5 md:flex-col md:p-7"
          >
            <span
              className="font-primary text-secondary text-2xl"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="space-y-3">
              <h3 className="font-primary text-primary text-2xl">
                {reason.title}
              </h3>
              <p className="text-light text-sm! md:text-base!">{reason.text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-x-7 gap-y-4 text-primary underline decoration-secondary underline-offset-4">
        <Link href="/rooms/">Discover our Safari suites</Link>
        <Link href="/experiences/">Explore the Saraaya experiences</Link>
        <Link href="/contact-us/">Plan your stay with our hosts</Link>
      </div>
      <p className="mx-auto max-w-3xl text-center text-light text-sm!">
        Hosted experiences may carry additional charges and depend on weather
        and availability. Confirm your inclusions and any specific comfort or
        arrival requirements with our team before booking.
      </p>
    </SectionWithContainer>
  );
}

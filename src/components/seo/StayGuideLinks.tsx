import Link from "next/link";
import { SectionWithContainer } from "@/components/sectionComponants";

export const guideLinks = [
  {
    href: "/experiences/",
    title: "Experiences at Saraaya",
    text: "Plan bonfire evenings, stargazing, village visits and time to slow down.",
  },
  {
    href: "/winter-stays/",
    title: "A cosy winter stay",
    text: "Explore heated tents, thoughtful comforts and advice for a mountain winter.",
  },
  {
    href: "/group-stays/",
    title: "Bring your favourite people",
    text: "Ask about four-tent stays for family reunions and a break with friends.",
  },
  {
    href: "/getting-here/",
    title: "Plan your arrival",
    text: "Understand the pickup, final walk and what to bring for your stay.",
  },
];

export default function StayGuideLinks() {
  return (
    <SectionWithContainer sectionClassName="bg-background border-t border-primary/20">
      <div className="mb-8 max-w-2xl">
        <h2 className="font-primary text-3xl text-primary md:text-4xl">
          Plan Your Stay near Dharamshala
        </h2>
        <p className="mt-4 text-light">
          Choose the kind of mountain break you want, then explore the practical
          details. Our guides help you prepare for time at Saraaya.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {guideLinks.map((guide) => (
          <article
            key={guide.href}
            className="rounded-2xl border border-primary/25 p-6"
          >
            <h3 className="font-primary text-2xl text-primary">
              <Link
                href={guide.href}
                className="underline decoration-secondary underline-offset-4"
              >
                {guide.title}
              </Link>
            </h3>
            <p className="mt-4 text-base! text-light">{guide.text}</p>
          </article>
        ))}
      </div>
    </SectionWithContainer>
  );
}

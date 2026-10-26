import LinkButton from "@/components/buttons/LinkButton";
import { Container } from "@/components/sectionComponants";
import { FillLocationIcon } from "@/utils/icons";
import Image from "next/image";

interface WinterHeroProps {
  image: string;
  alt: string;
  location: string;
  title: string;
  supportingHeadline: string;
  description: string[];
  cta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export default function WinterHero({
  image,
  alt,
  location,
  title,
  supportingHeadline,
  description,
  cta,
  secondaryCta,
}: WinterHeroProps) {
  return (
    <section className="max_screen_width relative flex min-h-[760px] items-end overflow-hidden md:min-h-[880px]">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_60%]"
      />
      <div className="absolute inset-0 z-10 bg-linear-to-b from-[#121a0c]/50 via-[#121a0c]/45 to-[#121a0c]/95" />
      <Container className="relative z-20 pb-12 pt-36 md:pb-20 md:pt-44">
        <div className="line flex max-w-4xl flex-col gap-5 text-white">
          <p className="flex items-center gap-1.5 text-sm! uppercase tracking-wide md:text-base!">
            <span className="text-secondary" aria-hidden="true">
              <FillLocationIcon />
            </span>
            {location}
          </p>
          <h1 className="font-primary text-4xl/tight md:text-6xl/tight lg:text-7xl/tight">
            {title}
          </h1>
          <p className="font-primary text-2xl! md:text-3xl!">
            {supportingHeadline}
          </p>
          <div className="flex max-w-3xl flex-col gap-3 text-white/95">
            {description.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-3">
            <LinkButton
              {...cta}
              className="rounded-full border-secondary bg-secondary text-white"
            />
            <LinkButton
              {...secondaryCta}
              className="rounded-full border-white/80 bg-primary/40 text-white"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

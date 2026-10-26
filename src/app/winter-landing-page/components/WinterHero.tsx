import LinkButton from "@/components/buttons/LinkButton";
import { Container } from "@/components/sectionComponants";
import Image from "next/image";
interface Props {
  image: string;
  alt: string;
  location: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}
export default function WinterHero({
  image,
  alt,
  location,
  eyebrow,
  title,
  description,
  cta,
  secondaryCta,
}: Props) {
  return (
    <section
      className="max_screen_width relative flex min-h-[660px] items-end overflow-hidden md:min-h-[740px]"
      aria-label="Discover Saraaya"
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-[58%_center]"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#121a0c]/35 via-[#121a0c]/25 to-[#121a0c]/95" />
      <Container className="relative z-10 pb-24 pt-32 md:pb-20 md:pt-40">
        <div className="flex max-w-3xl flex-col gap-4 text-white md:gap-5">
          <p className="text-xs! uppercase tracking-widest md:text-sm!">
            {location}
          </p>
          <p className="font-primary text-xl! text-[#F1C192] md:text-2xl!">
            {eyebrow}
          </p>
          <h1 className="font-primary text-[34px]/tight sm:text-5xl/tight lg:text-6xl/tight">
            {title}
          </h1>
          <p className="max-w-xl text-base! text-white/95 md:text-lg!">
            {description}
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <LinkButton
              {...cta}
              trackingEvent="winter_package_click"
              trackingLocation="hero"
              className="min-h-12 w-full! justify-center rounded-full border-secondary bg-secondary px-5! text-sm! text-white sm:w-fit!"
            />
            <LinkButton
              {...secondaryCta}
              trackingLocation="hero"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-12 w-full! justify-center rounded-full border-white/75 bg-primary/50 px-5! text-sm! text-white sm:w-fit!"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

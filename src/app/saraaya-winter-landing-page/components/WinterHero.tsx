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
  mobileDescription: string;
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
  mobileDescription,
  cta,
  secondaryCta,
}: Props) {
  return (
    <section
      className="max_screen_width relative overflow-hidden bg-primary"
      aria-label="Discover Saraaya"
    >
      <div className="relative aspect-[4/3] max-h-[360px] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:max-h-none lg:w-[65%]">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          fetchPriority="high"
          sizes="(min-width: 1024px) 65vw, 100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/25 via-transparent to-transparent lg:bg-linear-to-r lg:from-primary lg:via-primary/10 lg:to-transparent" />
        <p className="absolute inset-x-4 bottom-4 w-fit max-w-[calc(100%-2rem)] rounded-full bg-primary/80 px-3 py-2 text-xs! text-white lg:hidden">
          {location}
        </p>
      </div>
      <Container className="relative z-10 pb-20 pt-6 lg:flex lg:min-h-[740px] lg:items-center lg:py-32">
        <div className="flex max-w-3xl flex-col gap-3 text-white lg:max-w-[48%] lg:gap-5">
          <p className="hidden text-xs! uppercase tracking-widest lg:block lg:text-sm!">
            {location}
          </p>
          <p className="font-primary text-xl! text-[#F1C192] md:text-2xl!">
            {eyebrow}
          </p>
          <h1 className="font-primary text-[34px]/tight sm:text-5xl/tight lg:text-6xl/tight">
            {title}
          </h1>
          <p className="text-base! text-white/95 lg:hidden">
            {mobileDescription}
          </p>
          <p className="hidden max-w-xl text-base! text-white/95 lg:block lg:text-lg!">
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

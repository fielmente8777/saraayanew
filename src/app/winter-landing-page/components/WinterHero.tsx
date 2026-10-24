import LinkButton from "@/components/buttons/LinkButton";
import { Container } from "@/components/sectionComponants";
import { FillLocationIcon } from "@/utils/icons";
import Image from "next/image";

interface WinterHeroProps {
  image: string;
  alt: string;
  location: string;
  title: string;
  description: string;
  note: string;
  cta: { label: string; href: string };
}

const WinterHero: React.FC<WinterHeroProps> = ({
  image,
  alt,
  location,
  title,
  description,
  note,
  cta,
}) => {
  return (
    <section className="max_screen_width relative flex min-h-[640px] md:min-h-[760px] items-end overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_60%]"
      />
      <div className="absolute inset-0 z-10 bg-linear-to-b from-[#121a0c]/40 via-[#121a0c]/15 to-[#121a0c]/85" />
      <Container className="relative z-20 pb-12 pt-32 md:pb-20">
        <div className="line flex max-w-4xl flex-col gap-5 text-white">
          <p className="flex items-center gap-1.5 text-sm uppercase tracking-wide md:text-base">
            <span className="text-secondary">
              <FillLocationIcon />
            </span>
            {location}
          </p>
          <h1
            className="font-primary text-4xl/tight md:text-6xl/tight lg:text-7xl/tight"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="max-w-2xl text-white/90">{description}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <LinkButton
              href={cta.href}
              label={cta.label}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-secondary bg-secondary text-white uppercase"
            />
            <span className="text-sm text-white/90 md:text-base">{note}</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WinterHero;

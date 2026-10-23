import Image from "next/image";
import { Section } from "@/components/sectionComponants";

interface GettingHereHeroProps {
  image: string;
  eyebrow: string;
  title: string;
}

const GettingHereHero: React.FC<GettingHereHeroProps> = ({
  image,
  eyebrow,
  title,
}) => {
  return (
    <Section defaultPadding={false} className="top-0 sticky z-0 overflow-hidden">
      <div className="relative w-full lg:aspect-16/8 aspect-4/3 min-h-[460px] md:min-h-[560px] lg:min-h-[640px]">
        <Image
          src={image}
          alt={title || "Getting to SARAAYA"}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Soft overlay gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white px-4 w-full max-w-4xl">
          <p className="mb-3 text-xs sm:text-sm md:text-base tracking-[0.125em] uppercase text-white/90 font-light">
            — {eyebrow} —
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-primary italic leading-tight text-white drop-shadow-md">
            {title}
          </h1>
        </div>
      </div>
    </Section>
  );
};

export default GettingHereHero;

import Image from "next/image";
import { Section } from "@/components/sectionComponants";

interface ExperienceHeroProps {
  image: string;
  title: string;
  subtitle: string;
}

const ExperienceHero: React.FC<ExperienceHeroProps> = ({
  image,
  title,
  subtitle,
}) => {
  return (
    <Section defaultPadding={false} className="top-0 sticky z-0 overflow-hidden">
      <div className="relative w-full lg:aspect-16/8 aspect-4/3 min-h-[460px] md:min-h-[560px] lg:min-h-[640px]">
        <Image
          src={image}
          alt={title || "The SARAAYA Experiences"}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Soft overlay gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white px-4 w-full max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-primary italic leading-tight text-white drop-shadow-md">
            {title}
          </h1>
          <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-[19px] lg:text-[22px] text-white font-medium font-montserrat tracking-[0.08em]">
            {subtitle}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ExperienceHero;

import Image from "next/image";
import { Section } from "@/components/sectionComponants";

interface CouplesHeroProps {
  image: string;
  eyebrow: string;
  heading: string;
  subheading: string;
}

const CouplesHero: React.FC<CouplesHeroProps> = ({
  image,
  eyebrow,
  heading,
  subheading,
}) => {
  return (
    <Section defaultPadding={false} className="top-0 sticky z-0 overflow-hidden">
      <div className="relative w-full lg:aspect-16/8 aspect-4/3 min-h-[480px] md:min-h-[580px] lg:min-h-[660px]">
        <Image
          src={image}
          alt={heading || "Couples and Private Groups at SARAAYA"}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Soft overlay gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white px-4 w-full max-w-4xl space-y-3 sm:space-y-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/90 font-light flex items-center justify-center gap-3">
            <span className="w-8 sm:w-12 bg-white/60 h-px inline-block" />
            {eyebrow}
            <span className="w-8 sm:w-12 bg-white/60 h-px inline-block" />
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-primary italic leading-tight text-white drop-shadow-md">
            {heading}
          </h1>
          <p className="text-white/85 font-light text-sm sm:text-base md:text-lg tracking-wide max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default CouplesHero;

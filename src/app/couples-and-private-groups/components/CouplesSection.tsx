import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/sectionComponants";

interface CouplesSectionProps {
  eyebrow: string;
  heading: string;
  emblem: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  cta: {
    label: string;
    href: string;
  };
}

const CouplesSection: React.FC<CouplesSectionProps> = ({
  eyebrow,
  heading,
  emblem,
  paragraphs,
  image,
  imageAlt,
  cta,
}) => {
  return (
    <Section className="relative bg-background" defaultPadding={false}>
      <div className="py-16 sm:py-20 md:py-24 lg:py-28">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-stretch">
          {/* Left Column: Couple Imagery (Desktop only) */}
          <div className="hidden lg:block relative w-full lg:min-h-full aspect-[4/4.6] lg:aspect-auto overflow-hidden">
            <Image
              src={image}
              alt={imageAlt || "Romantic evening for couples at SARAAYA"}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="flex flex-col justify-between h-full py-0.5">
            {/* Eyebrow & Heading */}
            <div className="space-y-4 sm:space-y-5">
              <p className="text-secondary text-xs sm:text-sm uppercase tracking-[0.25em] font-medium flex items-center gap-3">
                <span className="w-8 sm:w-12 bg-secondary h-px inline-block" />
                {eyebrow}
              </p>

              <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-primary text-primary font-normal leading-[1.12] tracking-tight whitespace-pre-line">
                {heading}
              </h2>
            </div>

            {/* SARAAYA Tent Emblem (diagram) */}
            <div className="w-20 sm:w-24 relative aspect-[4/2.6] my-4 lg:my-6">
              <Image
                src={emblem}
                alt="SARAAYA glamping tent emblem"
                fill
                className="object-contain object-left"
              />
            </div>

            {/* Mobile-only Imagery (After diagram, just above description) */}
            <div className="lg:hidden relative w-full aspect-[4/3.8] sm:aspect-[4/4] my-6 overflow-hidden">
              <Image
                src={image}
                alt={imageAlt || "Romantic evening for couples at SARAAYA"}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>

            {/* Narrative Body */}
            <div className="space-y-4 text-primary/80 text-sm sm:text-base leading-relaxed font-light mb-6 lg:mb-8">
              {paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* Call to Action Button */}
            <div className="text-center lg:text-left">
              <Link
                href={cta.href}
                target={cta.href.startsWith("http") ? "_blank" : undefined}
                rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-block border border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 px-8 py-3.5 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium rounded-none"
              >
                {cta.label}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default CouplesSection;

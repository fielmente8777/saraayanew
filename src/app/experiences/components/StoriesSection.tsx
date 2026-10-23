import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionWithContainer } from "@/components/sectionComponants";
import { ExperienceCardItem } from "./pageData";

interface StoriesSectionProps {
  eyebrow: string;
  heading: string;
  subheading: string;
  bgImage?: string;
  footerNote?: string;
  cta?: {
    label: string;
    href: string;
  };
  cards: ExperienceCardItem[];
}

const StoriesSection: React.FC<StoriesSectionProps> = ({
  eyebrow,
  heading,
  subheading,
  bgImage = "/home/reviews-bg.png",
  footerNote = "Experiences are arranged in advance and remain subject to weather, season and availability. Experiences, setups and food & beverage arrangements are chargeable separately. Trekking is not included in the stay.",
  cta,
  cards,
}) => {
  const leftCards = cards.filter((_, i) => i % 2 === 0);
  const rightCards = cards.filter((_, i) => i % 2 !== 0);

  const renderCard = (item: ExperienceCardItem, index: number) => (
    <div className="flex flex-col gap-2" key={item.id || index}>
      <div className="relative aspect-4/4.25 border-8 border-white w-full">
        <Image
          src={item.image}
          alt={item.title || "SARAAYA Himalayan Experience"}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-white text-2xl font-primary">{item.title}</p>
        {item.timing && (
          <p className="text-white text-sm uppercase">{item.timing}</p>
        )}
      </div>
      {item.description && (
        <p className="text-white lg:text-lg max-md:text-sm max-md:text-center">
          {item.description}
        </p>
      )}
    </div>
  );

  return (
    <Section defaultPadding={false} className="relative bg-[#1F2D2A] overflow-hidden">
      <Image
        src={bgImage}
        alt="Experiences background pattern"
        fill
        className="object-cover pointer-events-none select-none opacity-90"
        sizes="100vw"
        priority={false}
      />
      <SectionWithContainer containerClassName="lg:space-y-12 space-y-8">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col gap-8">
          <div className="space-y-3">
            <p className="flex items-center gap-3 text-white/80 uppercase tracking-[0.2em] text-xs sm:text-sm">
              <span className="w-10 bg-white/60 h-px inline-block" />
              {eyebrow}
            </p>
            <h2
              className="text-4xl sm:text-5xl text-white font-primary font-normal leading-[1.15]"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
          </div>
          <div>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed font-light">
              {subheading}
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {cards.map((item, index) => renderCard(item, index))}
          </div>
        </div>

        {/* Desktop 2-Column Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-30">
          {/* Left Column: Heading -> 40px -> Cards */}
          <div className="flex flex-col">
            <div className="space-y-3 mb-[40px]">
              <p className="flex items-center gap-3 text-white/80 uppercase tracking-[0.2em] text-xs sm:text-sm">
                <span className="w-10 bg-white/60 h-px inline-block" />
                {eyebrow}
              </p>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl text-white font-primary font-normal leading-[1.15]"
                dangerouslySetInnerHTML={{ __html: heading }}
              />
            </div>
            <div className="flex flex-col gap-12">
              {leftCards.map((item, index) => renderCard(item, index * 2))}
            </div>
          </div>

          {/* Right Column: Description -> 40px -> Cards */}
          <div className="flex flex-col">
            <div className="mb-[40px]">
              <p className="text-white/85 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-xl">
                {subheading}
              </p>
            </div>
            <div className="flex flex-col gap-12">
              {rightCards.map((item, index) => renderCard(item, index * 2 + 1))}
            </div>
          </div>
        </div>

        {footerNote && (
          <p className="text-white lg:w-2/5 lg:ml-auto lg:text-end text-center lg:-mt-10">
            {footerNote}
          </p>
        )}

        {cta && (
          <div className="text-center pt-4">
            <Link
              href={cta.href}
              target={cta.href.startsWith("http") ? "_blank" : undefined}
              rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-block mx-auto rounded-none border border-secondary text-secondary hover:bg-secondary hover:text-white uppercase px-8 sm:px-10 py-3.5 tracking-[0.16em] text-xs sm:text-sm font-medium transition-all duration-300"
            >
              {cta.label}
            </Link>
          </div>
        )}
      </SectionWithContainer>
    </Section>
  );
};

export default StoriesSection;

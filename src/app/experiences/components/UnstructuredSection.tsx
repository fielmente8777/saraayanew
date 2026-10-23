import Image from "next/image";
import { SectionWithContainer } from "@/components/sectionComponants";

interface UnstructuredSectionProps {
  eyebrow: string;
  title: string;
  emblem: string;
  description: string;
}

const UnstructuredSection: React.FC<UnstructuredSectionProps> = ({
  eyebrow,
  title,
  emblem,
  description,
}) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="relative bg-background border-b border-primary/10"
      containerClassName="text-center pt-16 sm:pt-20 lg:pt-[104px] pb-16 sm:pb-20 lg:pb-[104px] max-w-4xl mx-auto"
    >
      {/* Eyebrow */}
      <p className="text-secondary text-xs sm:text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3">
        <span className="w-8 sm:w-12 bg-secondary h-px inline-block" />
        {eyebrow}
        <span className="w-8 sm:w-12 bg-secondary h-px inline-block" />
      </p>

      {/* Heading (40px from eyebrow) */}
      <h2
        className="mt-6 sm:mt-[40px] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-primary text-primary font-medium tracking-tight leading-tight"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {/* Tent & Pine Tree Emblem with border lines (40px from heading) */}
      <div className="mt-6 sm:mt-[40px] flex items-center justify-center gap-4 sm:gap-6 w-full">
        <div className="flex-1 border-t border-secondary" />
        <div className="w-[90px] sm:w-[120px] aspect-[4/2] relative shrink-0">
          <Image
            src={emblem}
            alt="SARAAYA emblem"
            fill
            className="object-contain"
            sizes="120px"
          />
        </div>
        <div className="flex-1 border-t border-secondary" />
      </div>

      {/* Description (40px from emblem, 104px to bottom) */}
      <p className="mt-6 sm:mt-[40px] max-w-7xl mx-auto text-primary/85 text-sm sm:text-base md:text-[18px] leading-relaxed font-normal">
        {description}
      </p>
    </SectionWithContainer>
  );
};

export default UnstructuredSection;

import Image from "next/image";
import { Container, Section } from "@/components/sectionComponants";

interface SettingSectionProps {
  heading: string;
  emblem: string;
  text1: string;
  eyebrow: string;
  text2: string;
}

const SettingSection: React.FC<SettingSectionProps> = ({
  heading,
  emblem,
  text1,
  eyebrow,
  text2,
}) => {
  return (
    <Section className="relative bg-background border-b border-primary/10" defaultPadding={false}>
      <div className="py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-stretch">
            {/* Left Column: Heading (top) + Tent Emblem (bottom) */}
            <div className="flex flex-col justify-between h-full">
              <h2
                className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[40px] font-primary text-primary font-normal leading-[1.2] tracking-tight max-w-xl"
                dangerouslySetInnerHTML={{ __html: heading }}
              />

              <div className="w-[110px] sm:w-[130px] aspect-[4/2.6] relative mt-8 lg:mt-auto pt-4">
                <Image
                  src={emblem}
                  alt="SARAAYA glamping tent emblem"
                  fill
                  className="object-contain object-left"
                  sizes="130px"
                />
              </div>
            </div>

            {/* Right Column: Setting Details with Divider */}
            <div className="flex flex-col justify-between h-full pt-1 lg:pt-1.5">
              <p className="text-primary/80 text-sm sm:text-base leading-relaxed font-light">
                {text1}
              </p>

              <div className="w-full h-px bg-secondary/40 my-6 lg:my-8" />

              <div className="space-y-3">
                <p className="text-secondary text-xs sm:text-sm uppercase tracking-[0.25em] font-medium">
                  {eyebrow}
                </p>
                <p className="text-primary/80 text-sm sm:text-base leading-relaxed font-light">
                  {text2}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default SettingSection;

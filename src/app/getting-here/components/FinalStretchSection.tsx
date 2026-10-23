import { Container, Section } from "@/components/sectionComponants";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

interface FinalStretchSectionProps {
  eyebrow: string;
  heading: string;
  steps: StepItem[];
  noteLeft: string;
  noteRight: string;
}

const FinalStretchSection: React.FC<FinalStretchSectionProps> = ({
  eyebrow,
  heading,
  steps,
  noteLeft,
  noteRight,
}) => {
  return (
    <Section className="relative bg-primary" defaultPadding={false}>
      <div className="py-16 md:py-24 lg:py-28">
        <Container className="space-y-12 md:space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-6xl mx-auto">
            <p className="text-secondary text-xs sm:text-sm uppercase tracking-[0.25em] flex items-center justify-center gap-3">
              <span className="w-8 sm:w-12 bg-secondary h-px inline-block" />
              {eyebrow}
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-white font-primary font-normal leading-[1.2] tracking-tight"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
          </div>

          {/* Unified 3-Step Container with Divider Lines matching Figma */}
          <div className="bg-background rounded-none overflow-hidden grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/15">
            {steps.map((step) => (
              <div
                key={step.number}
                className="px-6 sm:px-8 lg:px-10 pt-[30px] pb-[62px] flex flex-col justify-start"
              >
                <span className="text-secondary font-primary text-2xl sm:text-3xl font-medium block mb-[19px]">
                  {step.number}
                </span>
                <h3 className="text-primary font-primary text-xl sm:text-2xl font-medium mb-[15px]">
                  {step.title}
                </h3>
                <p className="text-primary/80 text-sm sm:text-[15px] leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Coordination Notes Row matching Figma */}
          <div className="pt-2 lg:pt-4">
            {/* Full-width Divider Line */}
            <div className="w-full h-px bg-white/20 mb-8 sm:mb-10" />

            {/* Notes Row: Top-aligned */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">
              <div>
                <p className="text-white font-primary text-[24px] font-normal leading-[1.25] max-w-md">
                  {noteLeft}
                </p>
              </div>
              <div className="lg:ml-auto">
                <p className="text-white/80 text-[18px] leading-relaxed font-light max-w-md">
                  {noteRight}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default FinalStretchSection;

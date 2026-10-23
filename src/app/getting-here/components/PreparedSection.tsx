import { Container, Section } from "@/components/sectionComponants";

interface InfoItem {
  label: string;
  detail: string;
}

interface PreparedSectionProps {
  eyebrow: string;
  heading: string;
  description: string;
  items: InfoItem[];
}

const PreparedSection: React.FC<PreparedSectionProps> = ({
  eyebrow,
  heading,
  description,
  items,
}) => {
  return (
    <Section className="relative bg-background" defaultPadding={false}>
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-10 sm:pb-14 md:pb-16">
        <Container className="space-y-10 md:space-y-14">
          {/* Left-Aligned Header matching Figma */}
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <p className="text-secondary text-[14px] uppercase tracking-[0.22em] font-medium">
              {eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] lg:text-[48px] font-primary text-primary font-normal leading-[1.18] tracking-tight">
              {heading}
            </h2>
            <p className="text-primary/75 text-base md:text-[18px] leading-relaxed font-light pt-1">
              {description}
            </p>
          </div>

          {/* Luxury Info Table matching Figma */}
          <div className="border-t border-[#1F3224]/15">
            {items.map((item, index) => (
              <div
                key={index}
                className="pt-[24px] pb-[25px] border-b border-[#1F3224]/15 grid grid-cols-1 sm:grid-cols-[180px_1fr] md:grid-cols-[240px_1fr] gap-2 sm:gap-6 items-baseline"
              >
                <span className="text-primary font-primary text-[24px] font-normal tracking-wide">
                  {item.label}
                </span>
                <p className="text-primary/75 text-[16px] leading-relaxed font-light">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default PreparedSection;


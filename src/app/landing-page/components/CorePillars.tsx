import { SectionWithContainer } from "@/components/sectionComponants";

interface CorePillarsProps {
  label: string;
  title: string;
  description: string;
}

const CorePillars: React.FC<CorePillarsProps> = ({
  label,
  title,
  description,
}) => {
  return (
    <SectionWithContainer
      sectionClassName=" border-t border-primary"
      containerClassName="line2 flex flex-col items-center gap-3 text-center"
    >
      <p className="text-secondary text-sm md:text-[15px] lg:text-lg">{label}</p>
      <h2
        className="font-primary text-primary text-2xl md:text-2xl lg:text-[40px] mb-5 lg:mb-10"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="text-light max-w-5xl ">{description}</p>
    </SectionWithContainer>
  );
};

export default CorePillars;

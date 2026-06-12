import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface EscapeSectionProps {
  image: string;
  title: string;
  heading: string;
  cta: {
    label: string;
    href: string;
  };
}
const EscapeSection: React.FC<EscapeSectionProps> = ({
  image,
  title,
  heading,
  cta,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="sticky-section lg:aspect-16/8 aspect-4/7"
    >
      <div className="relative w-full h-full aspect-auto">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src={image}
          alt="Image"
          fill
          className="object-cover"
          sizes="100%"
        />
      </div>
      <div className="absolute inset-0 flex  items-center justify-center gap-4 z-10">
        <Container className=" flex flex-col gap-6">
          <p className="uppercase text-center  text-white flex max-md:flex-col items-center justify-center gap-2">
            <span className="w-10 bg-white h-px" />
            {title}
            <span className="w-10 bg-white h-px" />
          </p>
          <SectionHeading
            title={heading}
            textCenter
            titleColor="white"
            wrapperClassName="max-w-7xl"
          />
          <LinkButton
            href={cta.href}
            label={cta.label}
            className="w-fit mx-auto rounded-sm text-white"
          />
        </Container>
      </div>
    </Section>
  );
};

export default EscapeSection;

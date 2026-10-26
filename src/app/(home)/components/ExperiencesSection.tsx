import { Section, SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface Props {
  title: string;
  heading: string;
  description: string;
  footerNote: string;
  experiences: {
    image: string;
    alt?: string;
    title: string;
    timing: string;
    price: string;
    description: string;
  }[];
}
const ExperiencesSection: React.FC<Props> = ({
  title,
  heading,
  description,
  experiences,
  footerNote,
}) => {
  return (
    <Section id="saraaya-experiences" defaultPadding={false} className="relative bg-primary scroll-mt-28">
      <Image src="/home/exp-bg.png" alt="Image" fill className="object-cover" />
      <SectionWithContainer containerClassName="lg:space-y-12 space-y-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8  lg:gap-x-30">
          <div className="">
            <p className="flex items-center gap-2 text-background uppercase">
              <span className="w-10 bg-background h-px" />
              {title}
            </p>
            <SectionHeading title={heading} textCenter titleColor="white" />
          </div>
          <div className="">
            <p className="text-white mt-4">{description}</p>
          </div>

          {experiences.map((item, index) => (
            <div
              className="flex flex-col gap-2 mt-4  bg-primary"
              key={item.title}
            >
              <div
                className={`relative aspect-4/4.25 border-8 border-white w-full ${(index + 1) % 2 === 0 ? "lg:-mt-8" : "lg:mt-6"}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt || item.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex  items-center justify-between">
                <h3 className="text-white text-2xl font-primary">{item.title}</h3>
                {/* <p className="text-white text-sm uppercase">{item.price}</p> */}
              </div>
              <p className="text-white lg:text-lg max-md:text-sm max-md:text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-white lg:w-3/5 lg:ml-auto lg:text-end text-center">
          {footerNote}
        </p>
      </SectionWithContainer>
    </Section>
  );
};

export default ExperiencesSection;

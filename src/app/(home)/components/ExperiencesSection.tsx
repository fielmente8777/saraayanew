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
    <Section defaultPadding={false} className="relative bg-primary">
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
              key={index}
            >
              <div
                className={`relative aspect-4/4.25 border-8 border-white w-full ${(index + 1) % 2 === 0 ? "lg:-mt-8" : "lg:mt-6"}`}
              >
                <Image
                  src={item.image}
                  alt="Image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex  items-center justify-between">
                <p className="text-white text-2xl font-primary">{item.title}</p>
                <p className="text-white text-sm uppercase">{item.price}</p>
              </div>
              <p className="text-white lg:text-lg max-md:text-sm max-md:text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-white  lg:w-2/5 lg:ml-auto lg:text-end text-center lg:-mt-10">
          {footerNote}
        </p>
      </SectionWithContainer>
    </Section>
  );
};

export default ExperiencesSection;

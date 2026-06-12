import { Container, Section, SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import MountainSlider from "./slider/MountainSlider";

interface MountainSectionProps {
  heading: string;
  cards: {
    images: string[];
    icon: string;
    subTitle: string;
    description: string;
  }[];
}

const MountainSection: React.FC<MountainSectionProps> = ({
  heading,
  cards,
}) => {
  return (
    <Section
      className="bg-background"
    >
      {cards.map((card, index) => (
        <div key={index} className="lg:sticky relative lg:top-0 bg-background">
          <Container className=" lg:h-[75dvh] items-center grid grid-cols-1 lg:grid-cols-[1fr_1.6fr_1fr] gap-8 lg:gap-16 pt-8">
            {/* Left Image */}
            <div className="relative w-full aspect-[4/4.5] -rotate-8 -top-16 overflow-hidden lg:block hidden">
              <Image
                src={card.images[0]}
                alt={card.subTitle}
                fill
                className="object-cover"
              />
            </div>

            {/* Center Content */}
            <div className="flex flex-col gap-6">
              {/* Fixed Heading */}
              <p className="text-center text-sm max-md:px-4 text-secondary flex items-center gap-2 justify-center uppercase">
                <span className="w-10 bg-secondary h-px inline-block" />
                {card.subTitle}
                <span className="w-10 bg-secondary h-px inline-block" />
              </p>
              <SectionHeading title={heading} textCenter />

              {/* Current Card Content */}
              <div className="flex flex-col gap-4 justify-center max-md:px-4">
                <div className="relative mx-auto w-full max-w-[100px] aspect-[4/2]">
                  <Image
                    src={card.icon}
                    alt={card.subTitle}
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="mt-4 text-center">{card.description}</p>
              </div>
              <MountainSlider images={card.images} />
            </div>

            {/* Right Image */}
            <div className="relative w-full aspect-[4/4.5] rotate-10 overflow-hidden lg:block hidden">
              <Image
                src={card.images[1]}
                alt={card.subTitle}
                fill
                className="object-cover"
              />
            </div>
          </Container>
        </div>
      ))}
    </Section>
  );
};

export default MountainSection;

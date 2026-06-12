import { JSX } from "react";
import { Container, Section } from "./sectionComponants";
import Image from "next/image";
import SlidingTitle from "./sliders/SlidingTitle";
import SlidingTitle2 from "./sliders/SlidingTitle2";

interface TitleSectionProps {
  titles: {
    title: string;
    icon: JSX.Element;
  }[];
  colorChange?: boolean;
}
const TitleSection = ({ titles, colorChange }: TitleSectionProps) => {
  return (
    <>
      <Section
        className={`relative ${colorChange ? "bg-background" : "bg-primary"} w-full h-full aspect-auto hidden lg:block `}
        defaultPadding={false}
      >
        <Image
          src={"/Layer-2-2.png"}
          alt="Layer-2"
          fill
          className="object-cover object-center"
        />
        <Container className="flex items-center justify-between gap-4 px-4 py-4">
          {titles.map((title, index) => (
            <div key={index} className={`flex items-center gap-2 ${colorChange ? "text-primary" : "text-white"}`}>
              <span>{title.icon}</span>
              <h2 className="md:text-sm text-xs text-nowrap uppercase font-semibold">
                {title.title}
              </h2>
            </div>
          ))}
        </Container>
      </Section>
      <div className="lg:hidden">
        <SlidingTitle2 items={titles} colorChange={colorChange} />
      </div>
    </>
  );
};

export default TitleSection;

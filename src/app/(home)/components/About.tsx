import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { LazyLoadedVideo } from "@/components/Video";
import Image from "next/image";

interface AboutProps {
  logo: string;
  image: string;
  title: string;
  heading: string;
  description: string[];
  hostedText: string;
}

const About: React.FC<AboutProps> = ({
  logo,
  image,
  title,
  heading,
  description,
  hostedText,
}) => {
  return (
    <SectionWithContainer sectionClassName="relative bg-[#FFF9E1]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
        <div className="gap-6 flex flex-col justify-center">
          <p className="uppercase text-secondary flex items-center gap-2">
            <span className="w-10 bg-secondary h-px" />
            {title}
          </p>
          <SectionHeading title={heading} titleClassName="lg:text-[5rem]/[5rem]" />
          <div className="relative aspect-square w-full lg:hidden">
            <div className="absolute z-10 aspect-square w-26 border-t border-l border-secondary -top-2 -left-2" />
            <div className="absolute z-10 aspect-square w-26 border-r border-b border-secondary -bottom-2 -right-2" />
            {/* <Image src={image} alt="Image" fill className="object-cover" /> */}
            <LazyLoadedVideo src="/video/Saraya-Room-Reel.mp4" poster="/video/Saraya-Room-Reel.png" controls={false} muted autoPlay />
          </div>
          <div className="w-[153px] aspect-4/2 relative ">
            <Image src={logo} alt="Image" fill className="object-cover" />
          </div>
          {description.map((item, index) => (
            <p
              key={index}
              className="text-primary"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
          <p className="uppercase text-secondary flex items-center gap-2">
            <span className="w-10 bg-secondary h-px" />
            {hostedText}
          </p>
        </div>
        <div className="relative aspect-square w-full lg:block hidden">
          <div className="absolute z-10 aspect-square w-26 border-t border-l border-secondary -top-2 -left-2" />
          <div className="absolute z-10 aspect-square w-26 border-r border-b border-secondary -bottom-2 -right-2" />
          {/* <Image src={image} alt="Image" fill className="object-cover" /> */}
          <LazyLoadedVideo src="/video/Saraya-Room-Reel.mp4" poster="/video/Saraya-Room-Reel.png" controls={false} muted autoPlay />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default About;

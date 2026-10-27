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
  story: { title: string; text: string; label: string; href: string };
}

const About: React.FC<AboutProps> = ({
  logo,
  title,
  heading,
  description,
}) => {
  return (
    <SectionWithContainer sectionClassName="relative bg-[#FFF9E1]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 xl:gap-16 items-start">
        <div className="gap-6 flex flex-col justify-center">
          <p className="uppercase text-secondary flex items-center gap-2">
            <span className="w-10 bg-secondary h-px" />
            {title}
          </p>
          <SectionHeading
            title={heading}
            level={1}
            titleClassName="lg:text-[3.25rem]/[1.1] xl:text-[3.75rem]/[1.1]"
          />
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
        </div>
        <div className="relative aspect-square w-full">
          <div className="absolute z-10 aspect-square w-26 border-t border-l border-secondary -top-2 -left-2" />
          <div className="absolute z-10 aspect-square w-26 border-r border-b border-secondary -bottom-2 -right-2" />
          <LazyLoadedVideo
            src="/video/Saraya-Room-Reel.mp4"
            poster="/video/Saraya-Room-Reel.png"
            controls={false}
            muted
            autoPlay
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default About;

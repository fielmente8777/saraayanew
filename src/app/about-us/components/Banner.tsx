import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface BannerProps {
  title: string;
  image: string;
  heading: string;
  description: string[];
}
const Banner: React.FC<BannerProps> = ({
  title,
  image,
  heading,
  description,
}) => {
  return (
    <section>
      <SectionWithContainer sectionClassName="relative after:content-[''] after:absolute after:inset-0 after:z-[-2] after:bg-[#FFF9E1]">
        <div className="absolute inset-x-0 bottom-0 lg:h-100 h-120 bg-primary z-[-1]"></div>
        <div className="text-center space-y-8">
          <p className="text-secondary flex items-center justify-center gap-2">
            {" "}
            <span className="w-10 bg-secondary h-px" /> {title}{" "}
            <span className="w-10 bg-secondary h-px" />
          </p>
          <SectionHeading title={heading} level={1} textCenter />
          <div className="w-full relative lg:aspect-4/2.25 aspect-4/3">
            <Image
              src={image}
              alt="Image"
              fill
              className="object-cover"
              sizes="100%"
            />
          </div>
          <div className="space-y-4">
            {description.map((item, index) => (
              <p key={index} className="text-white relative">
                {item}
              </p>
            ))}
          </div>
        </div>
      </SectionWithContainer>
    </section>
  );
};

export default Banner;

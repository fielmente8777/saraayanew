import Image from "next/image";
import { Section } from "../sectionComponants";

interface ImgBannerProps {
  image: string;
  subtitle: string;
  title: string;
}
const ImgBanner: React.FC<ImgBannerProps> = ({ image, subtitle, title }) => {
  return (
    <Section
      defaultPadding={false}
      className="top-0 sticky z-0 overflow-hidden"
    >
      <div className="relative w-full lg:aspect-16/8 aspect-4/3">
        <Image
          src={image}
          alt="Image"
          fill
          className="object-cover"
          sizes="100%"
        />
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white px-4">
          <p className="md:text-lg text-sm mb-2 flex items-center justify-center gap-2">
            <span className="w-10 bg-white h-px inline-block" />
            {subtitle}
            <span className="w-10 bg-white h-px inline-block" />
          </p>
          <h1 className="md:text-5xl text-2xl font-primary  italic">
            {title}
          </h1>
        </div>
      </div>
    </Section>
  );
};

export default ImgBanner;

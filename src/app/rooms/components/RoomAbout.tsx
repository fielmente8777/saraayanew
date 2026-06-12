import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";
import { MdSubtitles } from "react-icons/md";

interface Props {
  subtitle: string;
  logo: string;
  title: {
    normal1: string;
    highlight1: string;
    normal2: string;
    highlight2: string;
    normal3:string,
    highlight3:string,
    normal4:string,
  };
  description: string[];
}
const RoomAbout: React.FC<Props> = ({ logo, title, description, subtitle }) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-background relative"
      containerClassName="text-center lg:space-y-16 space-y-8"
    >
      <p className="text-secondary flex items-center justify-center gap-2">
        {" "}
        <span className="w-10 bg-secondary h-px" /> {subtitle}{" "}
        <span className="w-10 bg-secondary h-px" />
      </p>
      <h2 className="text-center lg:text-6xl md:text-6xl text-3xl font-primary">
        {title.normal1}
        <span className="italic text-secondary">{title.highlight1}</span>
        {title.normal2}
        <span className="italic text-secondary">{title.highlight2}</span>
        {title.normal3}
        <span className="italic text-secondary">{title.highlight3}</span>
        {title.normal4}
      </h2>
      <div className="flex items-center justify-center w-full gap-10">
        <div className="w-full h-px bg-secondary" />
        <div className="w-[300px] aspect-4/2 relative ">
          <Image src={logo} alt="Image" fill className="object-cover" />
        </div>
        <div className="w-full h-px bg-secondary" />
      </div>
      <p className="max-w-8xl text-center">{description}</p>
    </SectionWithContainer>
  );
};

export default RoomAbout;

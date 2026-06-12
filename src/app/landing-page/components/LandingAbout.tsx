import { SectionWithContainer } from "@/components/sectionComponants";
import Link from "next/link";
import { JSX } from "react";

interface LandingAboutProps {
  title: string;
  description: string[];
  location: {
    label: string;
    icon: JSX.Element;
    href: string;
  };
}
const LandingAbout: React.FC<LandingAboutProps> = ({
  title,
  description,
  location,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-background"
      containerClassName="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-10"
    >
      <div className="line">
        <Link
          href={location.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center md:text-lg gap-1.5"
        >
          <span className="text-secondary">
            {location.icon}

            <span className="sr-only">{location.label}</span>
          </span>
          <span className=" text-primary">{location.label}</span>
        </Link>
        <h1
          className=" font-primary text-primary lg:text-6xl/tight text-4xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      <p
        className="text-light"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </SectionWithContainer>
  );
};

export default LandingAbout;

import { ExperiencesProps } from "@/@types/type";
import ExperiencesCard from "@/components/cards/ExperiencesCard";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import ExperiencesSliders from "./sliders/ExperiencesSliders";
import LinkButton from "@/components/buttons/LinkButton";

const Experiences: React.FC<ExperiencesProps> = ({
  label,
  title,
  cards,
  cta,
}) => {
  return (
    <SectionWithContainer containerClassName="curve">
      <div className="md:space-y-14 space-y-8">
        <div className="space-y-2 items-center text-center ">
          <p className="text-secondary text-base lg:text-lg">
            {label}
          </p>

          <h2
            className=" font-primary text-primary text-2xl md:text-2xl lg:text-[40px] mb-5 lg:mb-10"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {/* <SectionHeading title={title} textCenter /> */}
        </div>
        {/* <div className="lg:grid hidden grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <ExperiencesCard key={index} {...card} />
          ))}
        </div> */}
        <ExperiencesSliders cards={cards} />
        <LinkButton
          href={cta.href}
          label={cta.label}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit rounded-full border-secondary bg-secondary text-white mx-auto uppercase"
        />
      </div>
    </SectionWithContainer>
  );
};

export default Experiences;

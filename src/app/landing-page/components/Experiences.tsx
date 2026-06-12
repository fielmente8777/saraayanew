import { ExperiencesProps } from "@/@types/type";
import ExperiencesCard from "@/components/cards/ExperiencesCard";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import ExperiencesSliders from "./sliders/ExperiencesSliders";
import LinkButton from "@/components/buttons/LinkButton";

const Experiences: React.FC<ExperiencesProps> = ({ title, cards, cta }) => {
  return (
    <SectionWithContainer>
      <div className="md:space-y-14 space-y-8">
        <SectionHeading title={title} fontPrimary textCenter />
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
          className="w-fit text-secondary mx-auto rounded-full uppercase"
        />
      </div>
    </SectionWithContainer>
  );
};

export default Experiences;

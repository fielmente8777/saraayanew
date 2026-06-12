import { RoomsType } from "@/@types/type";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import RoomsSlider from "./sliders/RoomsSlider";

const Rooms: React.FC<RoomsType> = ({ title, cards, cta }) => {
  return (
    <Section className="border-t border-primary">
      <Container className="md:space-y-14 space-y-8">
        <SectionHeading title={title} fontPrimary textCenter />

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {cards?.map((card, index) => (
            <RoomsSlider key={index} {...card} index={index} />
          ))}
        </div>

        <LinkButton
          href={cta.href}
          label={cta.label}
          target="_blank"
          rel="noopener noreferrer"
          className="md:w-fit mx-auto text-secondary uppercase rounded-full w-full flex justify-center"
        />
      </Container>
    </Section>
  );
};

export default Rooms;

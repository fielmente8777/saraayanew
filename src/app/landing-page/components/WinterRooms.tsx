import RoomsSlider from "@/app/landingpage/components/sliders/RoomsSlider";
import { RoomsType } from "@/@types/type";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

const WinterRooms: React.FC<RoomsType & { subtitle: string }> = ({
  title,
  subtitle,
  cards,
  cta,
}) => {
  return (
    <Section className="border-t border-primary">
      <Container className="md:space-y-14 space-y-8">
        <div className="flex flex-col items-center gap-3">
          <SectionHeading title={title} fontPrimary textCenter />
          <p className="text-light text-center">{subtitle}</p>
        </div>

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
          className="md:w-fit mx-auto rounded-full border-secondary bg-secondary text-white uppercase w-full flex justify-center"
        />
      </Container>
    </Section>
  );
};

export default WinterRooms;

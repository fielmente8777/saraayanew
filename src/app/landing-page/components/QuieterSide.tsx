import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import Image from "next/image";

interface QuieterSideProps {
  image: string;
  label: string;
  title: string;
  description: { text: string; italic?: boolean }[];
  cta: { label: string; href: string };
}

const QuieterSide: React.FC<QuieterSideProps> = ({
  image,
  label,
  title,
  description,
  cta,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="relative aspect-[1.75/3] md:aspect-auto lg:aspect-[16/9] xl:aspect-[16/7] 2xl:aspect-[16/6] w-full overflow-hidden border-t border-primary"
    >
      <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute z-10 inset-0 bg-primary/30" />
      <div className="absolute z-20 inset-0 flex items-center justify-center  md:relative lg:absolute">
        <Container className="py-10 md:py-20">
          <div className=" mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-white/60 bg-white/10 p-6 text-center text-white backdrop-blur-xs md:p-10">
            <p className="text-sm md:text-[15px] lg:text-lg ">{label}</p>
            <h2
              className="design font-primary text-2xl md:text-2xl lg:text-[40px] mb-5 lg:mb-10"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div className="flex flex-col items-center gap-3">
              {description.map(({ text, italic }) => (
                <p key={text} className={italic ? "italic" : undefined}>
                  {text}
                </p>
              ))}
            </div>
            <LinkButton
              href={cta.href}
              label={cta.label}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-secondary bg-secondary text-white"
            />
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default QuieterSide;

import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

interface GettingHereProps {
  image: string;
  alt: string;
  label: string;
  title: string;
  steps: { title: string; text: string }[];
  pack: { title: string; text: string };
}

const GettingHere: React.FC<GettingHereProps> = ({
  image,
  alt,
  label,
  title,
  steps,
  pack,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-background border-t border-primary"
      containerClassName="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl md:aspect-4/5 md:rounded-3xl">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="line flex flex-col gap-2">
          <p className="text-secondary text-base lg:text-lg">{label}</p>
          <h2
            className="font-primary text-primary text-2xl md:text-2xl lg:text-[40px]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
        <ol className="flex list-decimal flex-col gap-3 ps-5 text-light marker:text-secondary">
          {steps.map((step) => (
            <li key={step.title}>
              <strong className="font-semibold text-primary">
                {step.title}
              </strong>{" "}
              {step.text}
            </li>
          ))}
        </ol>
        <div className="flex flex-col gap-2 rounded-2xl border border-primary/40 p-5">
          <h3 className="font-primary text-primary text-2xl">{pack.title}</h3>
          <p className="text-light text-base!">{pack.text}</p>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default GettingHere;

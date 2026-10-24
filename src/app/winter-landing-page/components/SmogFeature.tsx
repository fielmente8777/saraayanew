import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

interface SmogFeatureProps {
  label: string;
  title: string;
  description: string;
  points: { title: string; text: string }[];
  image: string;
  alt: string;
  cta: { label: string; href: string };
}

const SmogFeature: React.FC<SmogFeatureProps> = ({
  label,
  title,
  description,
  points,
  image,
  alt,
  cta,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-background border-t border-primary"
      containerClassName="grid md:grid-cols-2 items-stretch gap-6 md:gap-16"
    >
      <div className="box-shadow flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-primary/40 p-6 text-center md:p-10">
        <div className="curve flex flex-col items-center gap-2">
          <p className="text-secondary text-base lg:text-lg">{label}</p>
          <h2
            className="font-primary text-primary text-2xl md:text-2xl lg:text-[40px] mb-5 lg:mb-8"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
        <p className="text-light">{description}</p>
        <ul className="flex flex-col gap-2 text-light">
          {points.map((point) => (
            <li key={point.title}>
              <strong className="font-semibold text-primary">
                {point.title}
              </strong>{" "}
              — {point.text}
            </li>
          ))}
        </ul>
        <LinkButton
          href={cta.href}
          label={cta.label}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 rounded-full border-secondary bg-secondary text-white"
        />
      </div>

      <div className="relative min-h-80 w-full overflow-hidden rounded-2xl md:min-h-full">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </SectionWithContainer>
  );
};

export default SmogFeature;

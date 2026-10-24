import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

type FeatureIcon = "flame" | "home" | "bed" | "drop";

interface WarmthSectionProps {
  label: string;
  title: string;
  description: string;
  features: { icon: string; title: string; text: string }[];
  images: { src: string; alt: string }[];
  planning: {
    title: string;
    text: string;
    highlights: { label: string; value: string }[];
  };
}

const iconPaths: Record<FeatureIcon, React.ReactNode> = {
  flame: (
    <>
      <path d="M12 3c1 3 4 4.5 4 8.5a4 4 0 0 1-8 0c0-2 1-3 1.5-4 .5 1.5 1.5 2 2.5 2 0-2-1-4 0-6.5z" />
      <path d="M6 20h12" />
    </>
  ),
  home: (
    <>
      <path d="M3 11l9-7 9 7v9H3z" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  bed: (
    <>
      <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" />
      <path d="M3 15h18" />
      <path d="M3 18v2M21 18v2" />
      <path d="M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
    </>
  ),
  drop: (
    <>
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
      <path d="M9.5 15a2.5 2.5 0 0 0 2.5 2.5" />
    </>
  ),
};

const FeatureIconSvg = ({ name }: { name: string }) => (
  <svg
    width={34}
    height={34}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="text-secondary"
  >
    {iconPaths[name as FeatureIcon]}
  </svg>
);

const WarmthSection: React.FC<WarmthSectionProps> = ({
  label,
  title,
  description,
  features,
  images,
  planning,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-background border-t border-primary"
      containerClassName="flex flex-col md:gap-12 gap-8"
    >
      <div className="line mx-auto flex max-w-4xl flex-col items-center gap-2 text-center">
        <p className="text-secondary text-base lg:text-lg">{label}</p>
        <h2
          className="font-primary text-primary text-2xl md:text-2xl lg:text-[40px] mb-3 lg:mb-6"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-light">{description}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col gap-3 rounded-2xl border border-primary/40 p-6"
          >
            <FeatureIconSvg name={feature.icon} />
            <h3 className="font-primary text-primary text-2xl">
              {feature.title}
            </h3>
            <p className="text-light text-base!">{feature.text}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {images.map((image) => (
          <div
            key={image.src}
            className="relative aspect-4/3 w-full overflow-hidden rounded-2xl md:rounded-3xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6 rounded-2xl bg-primary p-6 text-white md:flex-row md:items-center md:gap-10 md:rounded-3xl md:p-10">
        <div className="flex flex-1 flex-col gap-3">
          <h3 className="font-primary text-2xl lg:text-[34px]">
            {planning.title}
          </h3>
          <p className="text-white/85">{planning.text}</p>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
          {planning.highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/30 bg-white/5 p-5"
            >
              <p className="text-sm! text-white/80">{item.label}</p>
              <p className="font-primary mt-1 text-2xl text-[#E9A766]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default WarmthSection;

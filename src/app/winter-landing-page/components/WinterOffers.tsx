import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

interface WinterOffersProps {
  warmUp: {
    label: string;
    title: string;
    description: string;
    includes: string[];
    priceLabel: string;
    price: string;
    priceNote: string;
    cta: { label: string; href: string };
  };
  takeover: {
    image: string;
    label: string;
    title: string;
    description: string;
    cta: { label: string; href: string };
  };
}

const WinterOffers: React.FC<WinterOffersProps> = ({ warmUp, takeover }) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-background"
      containerClassName="grid grid-cols-1 gap-6 lg:grid-cols-[3fr_2fr]"
    >
      <div className="box-shadow flex flex-col gap-4 rounded-2xl border border-primary/40 p-6 md:p-10">
        <div className="line flex flex-col gap-2">
          <p className="text-secondary text-base lg:text-lg">{warmUp.label}</p>
          <h2
            className="font-primary text-primary text-2xl md:text-2xl lg:text-[40px] mb-3"
            dangerouslySetInnerHTML={{ __html: warmUp.title }}
          />
        </div>
        <p className="text-light">{warmUp.description}</p>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-2 text-primary sm:grid-cols-2">
          {warmUp.includes.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-secondary" aria-hidden="true">
                ✦
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-light text-sm!">{warmUp.priceLabel}</p>
            <p className="font-primary text-primary text-3xl leading-tight md:text-4xl">
              {warmUp.price}
            </p>
            <p className="mt-2 max-w-lg text-light text-sm!">
              {warmUp.priceNote}
            </p>
          </div>
          <LinkButton
            href={warmUp.cta.href}
            label={warmUp.cta.label}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-secondary bg-secondary text-white"
          />
        </div>
      </div>

      <div className="relative flex min-h-105 flex-col justify-end overflow-hidden rounded-2xl p-6 text-white md:p-10">
        <Image
          src={takeover.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#121a0c]/10 to-[#121a0c]/85" />
        <div className="relative z-10 flex flex-col gap-3">
          <p className="text-sm! uppercase tracking-wide">{takeover.label}</p>
          <h3 className="font-primary text-3xl lg:text-4xl">
            {takeover.title}
          </h3>
          <p className="text-white/90">{takeover.description}</p>
          <LinkButton
            href={takeover.cta.href}
            label={takeover.cta.label}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-background bg-background text-primary"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default WinterOffers;

import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { LazyLoadedVideo } from "@/components/Video";

interface ReelFeatureItem {
  label: string;
  title: string;
  description: { text: string; italic?: boolean }[];
  cta: { label: string; href: string };
  reel: { src?: string; poster?: string };
}

interface ReelFeatureProps {
  items: ReelFeatureItem[];
}

interface ReelProps {
  reel: ReelFeatureItem["reel"];
  className?: string;
}

const Reel: React.FC<ReelProps> = ({ reel, className = "" }) => {
  return (
    <div
      className={`relative w-full max-w-64 md:max-w-105 mx-auto aspect-2/3 rounded-2xl overflow-hidden bg-primary ${className}`}
    >
      {reel.src && (
        <LazyLoadedVideo
          src={reel.src}
          poster={reel.poster}
          controls={false}
          loop={true}
          autoPlay={true}
          muted
        />
      )}
    </div>
  );
};

const ReelFeature: React.FC<ReelFeatureProps> = ({ items }) => {
  return (
    <>
      {items.map(({ label, title, description, cta, reel }, index) => (
        <SectionWithContainer
          key={label}
          sectionClassName="bg-background border-t border-primary"
          containerClassName="curve grid md:grid-cols-2 items-stretch gap-6 md:gap-16"
        >
          <div className="box-shadow flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-primary/40 p-6 text-center md:p-10">
            <div className="line-center flex flex-col items-center gap-2">
              <p className="text-secondary text-sm md:text-[15px] lg:text-lg ">
                {label}
              </p>
              <h2
                className="font-primary text-primary text-2xl md:text-2xl lg:text-[40px] mb-5 lg:mb-10"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>


            <Reel reel={reel} className="md:hidden" />

            <div className="flex flex-col items-center gap-3 text-light">
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


          <div
            className={`items-center max-md:hidden md:flex ${index % 2 === 1 ? "md:order-first" : ""}`}
          >
            <Reel reel={reel} />
          </div>
        </SectionWithContainer>
      ))}
    </>
  );
};

export default ReelFeature;
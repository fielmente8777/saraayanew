import { SectionWithContainer } from "@/components/sectionComponants";

interface WinterFaqProps {
  title: string;
  items: { q: string; a: string }[];
}

const WinterFaq: React.FC<WinterFaqProps> = ({ title, items }) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-background border-t border-primary"
      containerClassName="mx-auto flex max-w-4xl! flex-col gap-8"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }).replace(/</g, "\\u003c"),
        }}
      />
      <div className="line text-center">
        <h2
          className="font-primary text-primary text-2xl md:text-5xl/tight"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-primary/40 px-5 py-4 md:px-6"
          >
            <summary className="font-primary text-primary flex cursor-pointer list-none items-center justify-between gap-4 text-xl md:text-2xl [&::-webkit-details-marker]:hidden">
              {item.q}
              <span
                className="text-secondary text-2xl transition-transform group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="text-light mt-3">{item.a}</p>
          </details>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default WinterFaq;

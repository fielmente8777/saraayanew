import { socialMedia } from "@/components/footer/footerdata";
import { TentIcon } from "@/utils/icons";
import Link from "next/link";

type VisitData = {
  sectionLabel: string;

  title: {
    normal: string;
    highlighted: string;
  };
  links: {
    label: string;
    href: string;
    label2?: string;
    href2?: string;
    label3?: string;
    href3?: string;
    icon?: React.ElementType;
  }[];
};

type ReservationsData = {
  title: string;
  items: string[];
};

type Props = {
  visitData: VisitData;
  reservationsData: ReservationsData;
};

export default function ContactInfo({ visitData }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 text-secondary">
        <span className="h-px w-10 bg-current" />

        <p className="text-[14px] tracking-[3px] uppercase font-body">
          {visitData.sectionLabel}
        </p>
      </div>

      <h1 className="font-primary text-[48px] font-medium text-primary">
        Contact Saraaya{" "}
        <span className="font-primary italic font-normal text-secondary">
          Glamps
        </span>
      </h1>

      {/* Contact Links */}
      {/* <ul className="flex flex-col gap-4">
        {visitData.links.map((item, i) => (
          <li
            key={i}
            className="flex items-center flex-wrap text-[18px] text-primary"
          >
            <Link href={item.href} className="flex items-center gap-3">
              {item.icon && <item.icon />}

              <span>{item.label}</span>
            </Link>
            {item.href2 && <span className="text-secondary">, </span>}
            {item.href2 && (
              <Link href={item.href2} className="flex items-center gap-3 ml-6 max-md:ml-0 md:ml-6 lg:ml-0">
                {item.label2}
              </Link>
            )}
            {item.label3 && <span className="text-secondary">, </span>}

            {item.label3 && item.href3 && (
              <Link href={item.href3} className="flex items-center gap-3 max-md:ml-6  ">
                {item.label3}
              </Link>
            )}
          </li>
        ))}
        <TentIcon />
        <div className="mt-8 flex flex-col gap-10">
          <div className="flex items-center gap-3 text-secondary">
            <span className="h-px w-10 bg-current" />

            <p className="font-body text-[14px] tracking-[3px] uppercase">
              FOLLOW US ON
            </p>
          </div>

          <ul className="flex items-center gap-8 text-secondary">
            {socialMedia.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </ul> */}
      <ul className="flex flex-col gap-4">
        {visitData.links.map((item, i) => {
          const hasMultiple = item.label2 || item.label3;

          return (
            <li key={i} className="flex items-start text-[18px] text-primary">
              {item.icon && (
                <Link
                  href={item.href}
                  className="flex items-center gap-3 shrink-0 mr-3"
                >
                  <item.icon />
                </Link>
              )}

              <div
                className={
                  hasMultiple
                    ? "flex flex-wrap items-center gap-x-2"
                    : "flex items-center"
                }
              >
                <Link href={item.href}>{item.label}</Link>

                {item.label2 && item.href2 && (
                  <>
                    <span className="text-secondary">,</span>
                    <Link href={item.href2}>{item.label2}</Link>
                  </>
                )}

                {item.label3 && item.href3 && (
                  <>
                    <span className="text-secondary">,</span>
                    <Link
                      href={item.href3}
                      className="max-md:basis-full max-md:ml-0"
                    >
                      {item.label3}
                    </Link>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

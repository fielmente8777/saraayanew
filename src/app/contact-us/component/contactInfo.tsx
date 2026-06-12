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

export default function ContactInfo({ visitData, reservationsData }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 text-secondary">
        <span className="h-px w-10 bg-current" />

        <p className="text-[14px] tracking-[3px] uppercase font-body">
          {visitData.sectionLabel}
        </p>
      </div>

      <h2 className="font-primary text-[48px] font-medium text-primary">
        {visitData.title.normal}{" "}
        <span className="font-primary italic font-normal text-secondary">
          {visitData.title.highlighted}
        </span>
      </h2>

      {/* Contact Links */}
      <ul className="flex flex-col gap-4">
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
              <Link href={item.href2} className="flex items-center gap-3">
                {item.label2}
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </div>
  );
}

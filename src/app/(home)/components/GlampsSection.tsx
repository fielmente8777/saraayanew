"use client";
import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";
import Link from "next/link";
import { JSX, useState } from "react";

interface Props {
  title: string;
  heading: {
    normal: string;
    highlight: string;
  };
  description?: string;
  accommodations: {
    id: string;
    title: string;
    image: string;
    amenities: {
      title: string;
      icon: JSX.Element;
    };
    cta: {
      label: string;
      href: string;
    };
  }[];
}
const GlampsSection: React.FC<Props> = ({
  title,
  heading,
  description,
  accommodations,
}) => {
  const [selectRoom, setSelectRoom] = useState(accommodations[0].title);
  const filtered = accommodations.filter((acc) => acc.title === selectRoom);

  return (
    <SectionWithContainer sectionClassName="relative bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] lg:gap-8">
        <div className="space-y-6">
          <p className="flex items-center gap-2 text-secondary">
            <span className="h-px w-10 bg-secondary" />
            {title}
          </p>
          <h2 className="text-2xl md:text-[3.25rem] font-primary">
            {heading.normal}{" "}
            <span className="italic text-secondary">{heading.highlight}</span>
          </h2>
          <div className="lg:flex hidden flex-col mt-6 gap-2 divide-y divide-[#CACACA] border-y border-[#CACACA]">
            {accommodations.map((acc) => (
              <button
                type="button"
                onClick={() => setSelectRoom(acc.title)}
                key={acc.id}
                className={`w-full py-3 text-2xl font-primary flex items-center gap-4 transition-colors ${
                  acc.title === selectRoom ? "text-primary" : "text-[#28361980]"
                }`}
              >
                <span className="text-sm text-secondary">{acc.id}</span>
                {acc.title}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-primary text-sm">{description}</p>
          <div className="lg:flex flex-col gap-2 hidden">
            <div className="w-full relative aspect-4/2.75">
              <Image
                src={filtered[0].image}
                alt="Image"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-primary text-sm flex items-center gap-2">
                <span className="">{filtered[0].amenities.icon}</span>
                {filtered[0].amenities.title}
              </p>
              <Link
                href={filtered[0].cta.href}
                className="uppercase text-secondary flex gap-2.5 items-center border-b border-secondary"
              >
                {filtered[0].cta.label}
              </Link>
            </div>
          </div>

          <div className="lg:hidden space-y-10">
            {accommodations.map((acc) => (
              <div
                className="flex flex-col gap-4 sticky top-0  bg-background"
                key={acc.id}
              >
                <p className="text-xl font-semibold text-primary flex items-center gap-4">
                  <span className="text-sm text-secondary">{acc.id}</span>
                  {acc.title}
                </p>
                <div className="w-full relative aspect-4/2.75">
                  <Image
                    src={acc.image}
                    alt="Image"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-primary text-sm flex items-center gap-2">
                    <span className="">{acc.amenities.icon}</span>
                    {acc.amenities.title}
                  </p>
                  <Link
                    href={acc.cta.href}
                    className="uppercase text-secondary flex gap-2.5 items-center border-b border-secondary"
                  >
                    {acc.cta.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default GlampsSection;

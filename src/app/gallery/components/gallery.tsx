"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { SectionWithContainer } from "@/components/sectionComponants";

// 🔹 Define types
type GalleryImage = {
  src: string;
  alt: string;
};

type Props = {
  galleryImages: GalleryImage[];
};

export default function Gallery({ galleryImages }: Props) {
  const [selected, setSelected] = useState<string>("All");

  // 🔹 categories generate from data
  const categories = useMemo<string[]>(
    () => ["All", ...new Set(galleryImages.map((img) => img.alt))],
    [galleryImages]
  );

  // 🔹 filtering logic
  const filtered: GalleryImage[] =
    selected === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.alt === selected);

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName=" bg-background lg:pb-18 pb-12"
      containerClassName="flex flex-col"
    >
      {/* FILTER BUTTONS */}
      {/* <div className="gallery-tabs mb-6 flex flex-wrap gap-3 justify-center"> */}
      <div className="lg:mb-12 mb-6 flex lg:justify-center lg:gap-12 gap-4 uppercase overflow-x-auto hide-scroll">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelected(cat)}
            className={`border-b transition-all text-nowrap duration-300 font-body text-sm uppercase ${
              selected === cat
                ? "border-secondary text-secondary"
                : "border-transparent text-light"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        {filtered.map((img, index) => (
          <div
            key={index}
            className="relative w-full aspect-7/6 overflow-hidden"
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
}

"use client";

import { SectionWithContainer } from "@/components/sectionComponants";

export default function GalleryBanner() {
  return (
    <SectionWithContainer
      sectionClassName="gallery-banner bg-background"
      containerClassName="text-center"
    >
      {/* <div className="content-column">
        <h2>{title}</h1>
      </div> */}
      <div className="flex flex-col items-center">
        <div className="lg:mb-8 mb-3 flex items-center gap-2 text-secondary">
          <span className="h-px w-10 bg-current" />
          <p className="text-[11px] tracking-[3px] uppercase font-body">
            Gallery
          </p>
          <span className="h-px w-10 bg-current" />
        </div>
        <h1 className="text-4xl md:text-5xl font-medium font-primary">
          Saraaya Glamps{" "}
          <span className="italic text-secondary">Photo Gallery</span>
        </h1>
      </div>
    </SectionWithContainer>
  );
}

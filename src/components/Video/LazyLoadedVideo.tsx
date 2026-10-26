"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

const LazyLoadedVideo = dynamic(() => import("./SEOVideo"), {
  ssr: false,
  loading: () => (
    <Image
      src="/rooms/Mountain-1.png"
      alt="Saraaya luxury safari suite"
      fill
      sizes="100vw"
      className="object-cover"
    />
  ),
});

export default LazyLoadedVideo;

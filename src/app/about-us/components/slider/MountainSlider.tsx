"use client";

import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const MountainSlider: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div className="mt-2 lg:hidden block">
      <SwiperCarousel
        data={images}
        slidesPerView={1.2}
        spaceBetween={4}
        loop
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        renderSlide={(src)=> (
            <div className="w-full relative aspect-square">
                <Image
                    src={src}
                    alt="Himalayan mountain landscape at SARAAYA"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>
        )}
      />
    </div>
  );
};

export default MountainSlider;

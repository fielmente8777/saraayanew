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
                    alt="Image"
                    fill
                    className="object-cover"
                    sizes="100%"
                />
            </div>
        )}
      />
    </div>
  );
};

export default MountainSlider;
